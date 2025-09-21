import React, { useEffect, useState } from "react";
import axios from "axios";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/orders/user", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setOrders(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              Product: {order.product.title} | Price: {order.product.price} | Status: {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
