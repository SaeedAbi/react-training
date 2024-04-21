import React from "react";
import { Layout } from "../../components/Layout";

const Login = () => {
  return (
    <Layout titleHeader={"Login"}>
      <div className="container bg-violet-50 border-4">
        <h3 className="text-center text-xl py-12 font-semibold">Log in here</h3>
        <div className="grid grid-cols-[1fr,1fr,3fr] gap-x-20 gap-y-12 py-28 px-20 ">
          <div>
            <p>Full name</p>
            <input
              className={"bg-violet-200  rounded-b-lg border-b-4 my-3"}
              type="text"
              placeholder={"Hassan Rohani"}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              className={"bg-violet-200  rounded-b-lg border-b-4 my-3"}
              type="password"
              placeholder={"'A-Z' '0-9'"}
            />
          </div>

          <div className={"my-8 "}>
            <button className={"shadow-2xl bg-purple-100 rounded-lg w-40 h-10"}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
