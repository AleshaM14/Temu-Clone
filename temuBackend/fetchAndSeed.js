import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";
import { Product } from "./models/model.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const seedProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;  //Extracts just the array of product objects.

    await Product.deleteMany(); // Clear existing data
    await Product.insertMany(products); // Insert new data

    console.log("Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Seeding error:", err.message);
    process.exit(1);  //Stops the script.
  }
};

seedProducts();
