const express = require("express");
const cartList = require("../models/cartModel");
const { auth } = require("../middleware/auth.middleware");
const cartRouter = express.Router();

cartRouter.get("/usercart/:id",  async (req, res) => {
  console.log(req.params.id);
  // console.log(req.body);
  try {
    const cart = await cartList.find({user_id:req.params.id});
    res.send(cart);
  }catch (error) {
    res.send({ msg: error.message });
  }
});


cartRouter.post("/cart", async (req, res) => {

  console.log(req.body)
  req.body.id = Math.floor(Math.random() * 1000000000);
  try {
    const cart = new cartList(req.body);
    await cart.save();
    res.send(cart);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

cartRouter.delete("/cart/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await cartList.deleteOne({id:id});
    res.send(cart);

  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" }); 
    console.log(error);
  }
  
})


//deleting


cartRouter.delete("/usercart/:id", async (req,res)=>{
   const { id } = req.params;
   try {
     const deletedCart = await cartList.deleteMany({ user_id: id });
     res.send({
       message: "All carts for the user deleted successfully",
       data: deletedCart,
     });
   } catch (error) {
     console.error(error);
     res.status(500).send({ error: "Internal Server Error" });
   }

});

module.exports = cartRouter;
