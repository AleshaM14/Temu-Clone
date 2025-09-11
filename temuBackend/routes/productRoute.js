import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts); // Read all
router.post("/products", createProduct); // Create
router.get("/products/:id", getProductById); // Read one
router.put("/products/:id", updateProduct); // Update
router.delete("/products/:id", deleteProduct); // Delete

export default router;
