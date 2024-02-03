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
    console.log(searchData);

    res.send({ data: searchData });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});


module.exports = productRouter;
