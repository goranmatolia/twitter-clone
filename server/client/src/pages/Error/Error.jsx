import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center my-8 space-y-5 mt-20">
      <h2 className="font-bold text-4xl mb-10">Login Again</h2>
      <p className="pb-2">
        Please go back to login <br />
      </p>
      <br />
      <Link
        to="/signin"
        className="bg-[#1DA1F2] p-5 rounded-full text-white"
      >
        Log In
      </Link>
    </div>
  );
};

export default Error;
