const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRoutes = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/catalogue");

app.use("/products", productRoutes);

app.listen(5000, () => console.log("Catalogue service running on port 5000"));
