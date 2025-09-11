// const Product = require("../models/productModel");
import { Product } from "../models/model.js";

const createProduct = async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      // ✅ Added: Check if body is an array
      const products = await Product.insertMany(req.body); // ✅ Added: insertMany for multiple products
      res.status(201).json(products); // ✅ Returns all created products
    } else {
      // ✅ Added: Else branch for single product
      const product = new Product(req.body);
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//create a function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //Product.find({}) → Queries MongoDB to get all products, {} → Empty filter means no conditions, so it fetches every product in the collection.

    res.json(products); //Sends the array of products to the frontend in JSON format.
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// READ one
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); //req.params.id = Gets the product ID from the URL (/products/:id).
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct); //If the product is found and updated successfully, sends the updated product data as JSON to the frontend.
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "asd Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
