"use client";
import React from "react";
import LoginForm from "../components/login/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="bg-[url('/images/paisaje.jpg')]  h-[70vh] relative bg-cover   border   w-full flex flex-col justify-center items-center">

<div>
 <LoginForm/>

</div>

        <div
          className="   w-full bottom-0 absolute "
          style={{
            height: "150px",
            overflow: "hidden",
          }}
        >
          <svg
            className=" h-full w-full   top-0"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            // style={{}}"height: 100%; width: 100%;"
          >
            <path
              d="M0.00,49.98 C180.86,160.38 295.99,-23.17 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "#E3E3EF" }}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
