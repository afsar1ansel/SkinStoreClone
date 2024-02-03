
const express = require("express");
const product = require("../models/product");
const productRouter = express.Router();


productRouter.get("/", async (req, res) => {
  try {
    const data = await product.find({});
    console.log(data);
    res.send({ data: data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

productRouter.get("/search/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const regex = new RegExp(name, "i"); 

    const searchData = await product.find({ name: regex });
    console.log(searchData);

    res.send({ data: searchData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

module.exports = productRouter;

