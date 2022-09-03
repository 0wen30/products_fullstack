const { response, request } = require("express");
const ProductModel = require("./model");

const getProducts = async (req = request, res = response) => {
    const products = await ProductModel.find();
    res.status(200).json(products);
}

const getProductById = (req = request, res = response) => {

}

const insertProduct = async(req = request, res = response) => {
    const { name, quantity, price } = req.body
    const product = new ProductModel({ name, quantity:Number.parseInt(quantity), price:Number.parseInt(price) });
    await product.save();
    res.status(201).json(product);
}

module.exports = {
    getProducts,
    getProductById,
    insertProduct
}