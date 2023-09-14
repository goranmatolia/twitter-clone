import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MainTweet from "../../components/MainTweet/MainTweet";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Signin from "../Signin/Signin";
import Navbar from "../../components/Navbar/Navbar.jsx";

import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {!currentUser ? (
        <Signin />
      ) : (
        <>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-4 box-content">
          <div className="px-10">
            <LeftSidebar />
          </div>
          <div className="col-span-2 border-t-slate-800">
            <MainTweet />
          </div>
          <div className="pl-6">
            <RightSidebar />
          </div>
        </div>
</>
      )}
    </>
  );
};

export default Home;
