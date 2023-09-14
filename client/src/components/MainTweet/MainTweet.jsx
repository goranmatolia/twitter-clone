import React, { useState } from "react";
import TimelineTweet from "../TimelineTweet/TimelineTweet";

import { useSelector } from "react-redux";
import axios from "axios";

const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("/tweets", {
        userId: currentUser._id,
        description: tweetText,
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="border-x-2">
      {currentUser && (
        <p className="font-bold px-8">{currentUser.username}</p>
      )}

      <form className="border-b-2 pb-6 px-8">
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="What is happening?!"
          maxLength={280}
          className="bg-slate-100 rounded-lg w-full p-4"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="bg-[#1DA1F2] text-white py-2 px-4 rounded-full ml-auto"
        >
          Post
        </button>
      </form>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;
