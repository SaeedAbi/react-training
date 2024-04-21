import React from "react";

const Footer = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      className={
        "flex flex-col-reverse items-center justify-center h-[120px] bg-gray-800 text-white mt-auto gap-3"
      }
    >
      <div>{`number of click: ${count}`}</div>
      <button
        className={"bg-red-300 rounded w-20 h-8"}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Footer;
