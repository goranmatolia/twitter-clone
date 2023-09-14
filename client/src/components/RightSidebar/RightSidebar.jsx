import React from "react";

const RightSidebar = () => {
  return (
    <>
    <div className="fixed">
    <div className="p-5 rounded-lg space-y-2 bg-slate-100">
      <h2 className="text-2xl font-bold">Subscribe to Premium</h2>
      <p className="font-bold ml-2">Subscribe to unlock new features.</p>
      <button
          className="bg-black text-white py-2 px-4 rounded-full ml-auto"
        >
          Subscribe
        </button>
    </div>
    <div className="p-5 rounded-lg space-y-2 bg-slate-100 mt-5">
    <h2 className="text-2xl font-bold mb-5">What's Happening</h2>
    <p className="font-bold ml-2 cursor-pointer">#Saas</p>
    <p className="font-bold ml-2 cursor-pointer">#Iphone15pro</p>
    <p className="font-bold ml-2 cursor-pointer">#IndiavsPak</p>
    <p className="font-bold ml-2 cursor-pointer">#IndiaNewsLatest</p>
    <p className="font-bold ml-2 cursor-pointer">#ViratKohli</p>
    <p className="font-bold ml-2 cursor-pointer">#SRM</p>
  </div>
  </div>
  </>
  );
};

export default RightSidebar;
