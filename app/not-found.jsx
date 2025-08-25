"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function NotFound() {
  const [text] = useTypewriter({
    words: [
      "Page not found",
      "Are you lost?",
      "Please go back",
      "Button below this text",
    ],
    loop: 0,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-7xl md:text-9xl font-bold mb-4 animate-pulse">
        <span className="text-shadow-lg text-shadow-green-400 animate-bounce">4</span>
        <span className="text-shadow-lg text-shadow-violet-400">0</span>
        <span className="text-shadow-lg text-shadow-green-400">4</span>
      </h2>
      <p className="md:m-10 m-5 text-2xl md:text-5xl text-shadow-2xs text-shadow-green-400">
        {text}
        <span className="text-green-400">
          <Cursor />
        </span>
      </p>
      <div className="text-xl md:text-3xl p-2 shadow-green-400 shadow-md rounded-lg hover:translate-y-1 transition-all duration-300 hover:shadow-none hover:text-green-400 cursor-pointer">
        <a href="/">Back To Home</a>
      </div>
    </div>
  );
}
