import React from "react";
import { Layout } from "../../components/Layout";

const Home = () => {
  return (
    <Layout titleHeader={"Home"}>
      <div className="container flex flex-grow flex-shrink gap-10">
        <div className="hover:animate-spin  ">
          <span className={"bg-red-200 pb-12 pr12 "}>animation</span>
        </div>
        <div className="hover:animate-bounce  ">
          <span className={"bg-violet-200 pb-12 pr12 "}>animation 1</span>
          <span className={"bg-blue-200 pb-12 pr12 ml-4 "}>animation 2</span>
        </div>
        <div className="hover:animate-ping  ">
          <span className={"bg-black pb-12 pr12 "}>animation 3</span>
        </div>
        <div className="hover:animate-pulse  ">
          <span className={"bg-violet-200 pb-12 pr12 "}>animation 4</span>
        </div>
        <div className="hover:animate-pulse  ">
          <span style={{ paddingBottom: 12, paddingRight: 12 }}>
            animation 1
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
