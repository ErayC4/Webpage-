import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between text-lg py-4 px-32">
      <button>Icon</button>
      <div className="flex gap-8">
        <div className="flex gap-4">
          <button>Demo</button>
          <button>About</button>
        </div>
        <div className="flex gap-4">
          <button className="bg-violet-500 py-2 px-6 rounded-lg text-white">
            Login
          </button>
          <button className="bg-[#E1EBDC] py-2 px-6 border border-[#40513B] rounded-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
