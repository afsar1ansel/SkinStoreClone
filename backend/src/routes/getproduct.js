const express = require("express");
const product = require("../models/product");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    const data = await product.find({});
    // console.log(data);
    res.send({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

productRouter.get("/id/:_id", async (req, res) => {
  const { _id } = req.params;
  // console.log(req.params);
  try {
    if(!_id){
      return res.status(400).send({error:"Invalid Id"});
    }
    const data = await product.findById(_id);
    res.send({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
    
  }
})

productRouter.get("/search/:name/:sort?", async (req, res) => {
  try {
    const { name, sort } = req.params;
    const regex = new RegExp(name, "i");

    let sortOptions = {};
    if (sort === "asc") {
      sortOptions = { price: 1 };
    } else if (sort === "desc") {
      sortOptions = { price: -1 };
    }

    const searchData = await product.find({ name: regex }).sort(sortOptions);
    // console.log(searchData);

    res.send({ data: searchData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});



// productRouter.post("/delete/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     if (!id) {
//       return res.status(400).send({ error: "Invalid Id" });
//     }
//     const deletedProduct = await product.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return res.status(404).send({ error: "Product not found" });
//     }
//     res.send({ message: "Product deleted successfully", data: deletedProduct });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });




module.exports = productRouter;
