// src/assets/data/ProductData.js

import miniProjector from "../miniProjector.webp";
import portableCharger from "../portableCharger.webp";
import smartwatch from "../smartwatch.webp";
import wirelessHeadphones from "../wirelessHeadphones.webp";
import axios from "axios";

const products = [
  {
    id: "1",
    title: "Mini Projector",
    price: "$89.99",
    image: miniProjector,
    description:
      "Compact mini projector with HD display for home entertainment.",
  },
  {
    id: "2",
    title: "Portable Charger",
    price: "$29.99",
    image: portableCharger,
    description: "High-capacity portable charger for mobile devices on the go.",
  },
  {
    id: "3",
    title: "Smartwatch",
    price: "$59.99",
    image: smartwatch,
    description: "Stylish smartwatch with fitness tracking and notifications.",
  },
  {
    id: "4",
    title: "Wireless Headphones",
    price: "$39.99",
    image: wirelessHeadphones,
    description:
      "Comfortable over-ear wireless headphones with noise cancellation.",
  },
];

export const Pr = async () => {
  //Function to Get Data from API
  try {
    const response = await axios.get("https://dummyjson.com/products"); //You're calling an API using axios.get()  , await means: "Wait until this API responds before moving to the next line

    // console.log("checking now", response);

    return response.data;
  } catch (error) {
    console.error("its an error", error);
  }
};
// export default Pr;
