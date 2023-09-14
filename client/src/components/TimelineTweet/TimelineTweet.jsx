import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";
import Tweet from "../Tweet/Tweet";

const TimelineTweet = () => {
  const [timeLine, setTimeLine] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelineTweets = await axios.get(
          `/tweets/timeline/${currentUser._id}`
        );

        setTimeLine(timelineTweets.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [currentUser._id]);

  console.log("Timeline", timeLine);
  return (
    <div className="mt-4">
      {timeLine &&
        timeLine.map((tweet) => {
          return (
            <>
            <div key={tweet._id} className="px-8 pb-5 border-b-2 mt-4"  >
              <Tweet tweet={tweet} setData={setTimeLine} />
            </div>
            </>
          );
        })}
    </div>
  );
};

export default TimelineTweet;
