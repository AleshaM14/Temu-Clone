import React from "react";
import "./WhyChooseTemu.css";

const WhyChooseTemu = () => {
  return (
    <div className="why-temu-wrapper">
      <div className="why-temu-top">
        <div className="why-title">
          ✅ <span>Why choose Temu</span>
        </div>
        <div className="why-features">
          <span className="feature">🔒 Secure privacy</span>
          <span className="feature">💳 Safe payments</span>
          <span className="feature">📦 Delivery guarantee</span>
        </div>
      </div>

      <div className="why-temu-bottom">
        <span className="icon">🔔</span>
        <span className="message">
          Security reminder: Please be wary of scam messages and links. Temu
          won't ask for extra fees via SMS or email.
        </span>
        <span className="view-link">View ➤</span>
      </div>
    </div>
  );
};

export default WhyChooseTemu;
