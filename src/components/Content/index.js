import React from "react";

const Content = ({ children }) => {
  return (
    <div className={"flex-grow flex-shrink p-3 bg-gray-50"}>{children}</div>
  );
};

export default Content;
