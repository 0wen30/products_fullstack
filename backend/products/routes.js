require("./connectDB")
const express = require("express");

const { getProducts, getProductById,insertProduct } = require("./controller");
const productsRouter = express.Router();

productsRouter.get("/",getProducts);

productsRouter.get("/:id",getProductById);

productsRouter.post("/",insertProduct);

module.exports = productsRouter;

