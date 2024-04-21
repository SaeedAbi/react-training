import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className={
        "h-[100px] bg-amber-200 text-center font-bold w-full flex items-center justify-center"
      }
    >
      <span> {title}</span>
    </div>
  );
};

export default Header;
