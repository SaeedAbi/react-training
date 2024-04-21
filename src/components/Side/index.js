import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import classNames from "classnames";

const themes = {
  home: "bg-blue-300",
  register: "bg-red-300",
  login: "bg-green-300",
  fallback: "bg-fuchsia-300",
};

const Side = ({ theme = "fallback" }) => {
  return (
    <div
      className={classNames(
        "flex justify-center items-center w-[240px] h-full",
        themes[theme],
      )}
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
