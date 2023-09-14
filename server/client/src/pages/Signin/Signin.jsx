import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "../../redux/userSlice";

import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { username, password });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await axios.post("/auth/signup", {
        username,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  return (
    <>
    <div className="grid grid-cols-2">
    <div className="grid items-center">
    <img
          src="/twitternewlogobold.png"
          alt="Twitter Logo"
          width={"400rem"}
          className="mt-10"
        />
    </div>
    <div className="col-span-1 grid px-20 mt-[3vh]">
      <h3 className="font-bold text-[5vh]">Happening Now</h3>
      <h2 className="text-[4vh] mt-3">Join today.</h2>
    <form className="flex flex-col py-5 px-10 gap-5 border-2 rounded-2xl mt-1">
      <h2 className="text-3xl font-bold text-center">Sign in to Twitter</h2>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        className="text-xl py-2 rounded-2xl px-4 border-2"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="text-xl py-2 rounded-2xl px-4 border-2"
      />

      <button
        className="text-xl py-2 rounded-full px-4 bg-[#1DA1F2] text-white"
        onClick={handleLogin}
      >
        Sign in
      </button>

      <p className="text-center text-xl">Don't have an account?</p>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        className="text-xl py-2 rounded-2xl px-4 border-2"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        required
        className="text-xl py-2 rounded-2xl px-4 border-2"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="text-xl py-2 rounded-2xl px-4 border-2"
      />

      <button
        onClick={handleSignup}
        className="text-xl py-2 rounded-full px-4 bg-[#1DA1F2] text-white"
        type="submit"
      >
        Sign up
      </button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Signin;
