import express from "express";
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js"; // <-- import

const router = express.Router();

// Public routes
router.get("/products", getAllProducts); // Read all
router.get("/products/:id", getProductById); // Read one

// Admin routes (secured)
router.post("/products", protect, adminOnly, createProduct); // only admin
router.put("/products/:id", protect, adminOnly, updateProduct); // only admin
router.delete("/products/:id", protect, adminOnly, deleteProduct); // only admin

export default router;
