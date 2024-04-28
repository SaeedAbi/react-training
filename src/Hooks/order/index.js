import React from "react";

const Order = ({ closeHours, openHours }) => {
  return (
    <div className="order">
      <p>We're open until {closeHours}:00. come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
