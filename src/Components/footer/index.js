import React from "react";
import "../../index.css";
import Order from "../../Hooks/order";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("we're currently open");
  // else alert("Sorry we're clesed");
  // return React.createElement("footer", null, "we're currently open");
  return (
    <footer className="footer ">
      {isOpen ? (
        <Order openHours={openHour} closeHours={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
