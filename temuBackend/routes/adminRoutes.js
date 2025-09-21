import express from "express";
import { getAllUsers, deleteUser } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.use(protect, adminOnly); // Apply middleware to all routes

router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

export default router;
