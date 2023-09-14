import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleIcon from '@mui/icons-material/People';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

const LeftSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between fixed">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
          <div className="flex items-center space-x-5 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer transition ease-in-out delay-25">
            <HomeIcon fontSize="large"/>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/explore">
          <div className="flex items-center space-x-5 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer transition ease-in-out delay-25">
            <SearchIcon fontSize="large" />
            <p>Explore</p>
          </div>
        </Link>
        <div className="flex items-center space-x-5 px-2 py-2 hover:bg-red-200 rounded-full cursor-pointer transition ease-in-out delay-25">
            <NotificationsNoneIcon fontSize="large" />
            <p>Notifs</p>
        </div>
        <div className="flex items-center space-x-5 px-2 py-2 hover:bg-red-200 rounded-full cursor-pointer transition ease-in-out delay-25 ">
            <MailOutlineIcon fontSize="large" />
            <p>Messages</p>
        </div>
        
        <div className="flex items-center space-x-5 px-2 py-2 hover:bg-red-200 rounded-full cursor-pointer transition ease-in-out delay-25 ">
            <ListAltIcon fontSize="large" />
            <p>Lists</p>
        </div>
        <div className="flex items-center space-x-5 px-2 py-2 hover:bg-red-200 rounded-full cursor-pointer transition ease-in-out delay-25 ">
            <BookmarkBorderIcon fontSize="large" />
            <p>Bookmarks</p>
        </div>
        <Link to={`/profile/${currentUser._id}`}>
          <div className="flex items-center space-x-5 px-2 py-2 hover:bg-slate-200 rounded-full cursor-pointer transition ease-in-out delay-25 ">
            <PersonIcon fontSize="large" />
            <p>Profile</p>
          </div>
        </Link>
        
          
      </div>
      <div className="flex justify-between mb-5">
        <div>
          <p className="font-bold">{currentUser.username}</p>
          <p className="font-bold">@{currentUser.username}</p>
        </div>
        <div className="pl-10">
          <Link to="signin">
            <button
              className="bg-[#1DA1F2] px-4 py-2 text-white rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
