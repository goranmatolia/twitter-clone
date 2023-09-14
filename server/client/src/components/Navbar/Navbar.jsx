import React, { useState } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SearchIcon from "@mui/icons-material/Search";

import { useLocation } from "react-router-dom";
import UserPlaceholder from "../UserPlaceholder/UserPlaceholder";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center sticky top-0 backdrop-blur-md z-10 ">
      <div className="mx-auto md:mx-0">
        <img
          src="/twitternewlogobold.png"
          alt="Twitter Logo"
          width={"35px"}
          className="ml-12"
        />
      </div>

      <div className="col-span-2  md:border-slate-200 md:px-6 my-6 md:my-0 border-x-2 border-b-2 h-20 overscroll-none">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl items-center mt-5">
            {location.includes("profile") ? (
              <UserPlaceholder setUserData={setUserData} userData={userData} />
            ) : location.includes("explore") ? (
              "Explore"
            ) : (
              "Home"
            )}
          </h2>
        </div>
      </div>

      <div className="px-0 md:px-4 mx-auto">
        <SearchIcon className="absolute m-2" />
        <input type="text" placeholder="Trending" className="bg-blue-100 rounded-full py-2 px-10" />
      </div>
    </div>
    </>
  );
};

export default Navbar;
