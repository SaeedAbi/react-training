import React from "react";
import { Layout } from "../../components/Layout";

const Register = () => {
  return (
    <Layout titleHeader={"Register"}>
      <div className="container bg-violet-50 border-4">
        <h3 className="text-center text-xl py-12">
          Get huge <strong className={"uppercase "}>deals</strong> for first
          purchase
        </h3>
        <div className="grid grid-cols-2 gap-x-20 gap-y-12 py-28 px-20 ">
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
          <div>
            <p>Email </p>
            <input
              className={"bg-violet-200  rounded-b-lg border-b-4 my-3"}
              type="email"
              placeholder={"example@example.com"}
            />
          </div>
          <div className={"py-5"}>
            <button
              className={"shadow-2xl bg-purple-100 rounded-lg h-12 max-w-60 "}
            >
              Make your account
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
