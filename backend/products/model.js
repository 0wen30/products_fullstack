const { model, Schema } = require("mongoose");

const ProductModel = model("Product",new Schema({
    name:{
        type:String,
        required:true
    },
    price:Number,
    quantity:{
        type:Number,
        default:0
    }
}));

module.exports = ProductModel