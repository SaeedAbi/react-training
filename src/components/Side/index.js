import React from "react";
// import { Link } from "react-router-dom";

const Side = () => {
  return (
    <div
      className={
        "flex justify-center items-center w-[240px] bg-blue-300 h-full"
      }
    >
      <div className="flex self-end gap-10 items-end h25 w12 my-4 ">
        <a href="src/pages/Login/index.js">
          <button className={"rounded bg-yellow-600 p-5"}>Login</button>
        </a>
        <a href="src/pages/Register/index.js">
          <button className={"rounded bg-yellow-500 p-5"}>Register</button>
        </a>
      </div>
    </div>
  );
};

export default Side;
