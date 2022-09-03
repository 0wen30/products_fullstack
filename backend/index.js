require("dotenv").config();
const express = require("express");
const cors = require("cors");
const opcionesCors = require("./config/opcionesCors");
const credentials = require("./middlewares/credentials");
const productsRouter = require("./products/routes");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(credentials);
app.use(cors(opcionesCors));

app.use("/api/products",productsRouter)

app.listen(port,()=>{
    console.log(`Running in port ${port}`)
});