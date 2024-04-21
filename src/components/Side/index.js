import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Side = () => {
  return (
    <div
      className={
        "flex justify-center items-center w-[240px] bg-blue-300 h-full"
      }
    >
      <div className="flex self-end gap-10 items-end h25 w12 my-4 ">
        <Link to={routes.login}>
          <button className={"rounded bg-yellow-600 p-5"}>Login</button>
        </Link>
        <Link to={routes.register}>
          <button className={"rounded bg-yellow-500 p-5"}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Side;
