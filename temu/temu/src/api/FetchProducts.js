import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return []; // fallback if API fails
  }
};
