import Order from "../models/orderModel.js";
import { Product } from "../models/model.js";

export const getUserOrders = async (req, res) => {
  try {
    const order = await order.find({ user: req.user.id }).populate("product");
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
