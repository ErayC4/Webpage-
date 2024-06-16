import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between text-lg py-4 px-32 fixed top-0 left-0 w-full bg-white">
      <button>Icon</button>
      <div className="flex gap-8">
        <div className="flex gap-4">
          <button>Demo</button>
          <button>About</button>
        </div>
        <div className="flex gap-4">
          <button className=" py-2 px-6  border border-[#40513B] rounded-lg ">
            Login
          </button>
          <button className="text-white bg-violet-500 py-2 px-6 border border-[#40513B] rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
