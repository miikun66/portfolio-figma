"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Front End", "Back End", "Software Engineer", "Databases"],
    loop: 0,
  });

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-16">
      {/* Bagian tulisan + gambar */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
        
        {/* Gambar (mobile di atas) */}
        <div className="flex justify-center md:justify-end flex-1 order-1 md:order-2">
          <div className="w-50 h-50 md:w-80 md:h-80 rounded-full border-2 border-[var(--primary)] overflow-hidden flex items-center justify-center">
            <Image
              src="/images/hero.webp"
              alt="Logo"
              width={350}
              height={350}
              className="object-cover w-full h-full opacity-20"
            />
          </div>
        </div>

        {/* Teks (mobile di bawah) */}
        <div className="tracking-wide text-xl md:text-2xl flex-1 text-center md:text-left order-2 md:order-1">
          <h2>
            Hello I <span className="text-[var(--primary)]">'</span> am
            <span className="text-[var(--primary)]"> Michael Christianto</span>
          </h2>
          <p className="text-base md:text-lg py-6 leading-relaxed">
            I am a beginner who is enthusiastic about exploring the world of
            programing, especially the{" "}
            <span className="text-[var(--primary)] capitalize">{text}</span>
            <span className="text-[var(--primary)]">
              <Cursor />
            </span>{" "}
            developer part.
          </p>
          <Link
            href="#contact"
            className="inline-block border-2 px-4 py-2 rounded-xl cursor-pointer capitalize hover:border-[var(--primary)] transition-all hover:text-[var(--primary)]"
          >
            contact me !!
          </Link>
        </div>
      </div>

      {/* Quotes */}
      <div className="border-2 p-5 relative mt-10 w-full max-w-3xl">
        <p className="absolute text-5xl -top-6 bg-[var(--background)] p-2">"</p>
        <h2 className="flex justify-center items-center text-center text-lg md:text-xl px-4">
          Never get action, Never to gain goals
        </h2>
        <p className="absolute text-5xl right-4 bg-[var(--background)] p-2">
          "
        </p>
      </div>
    </div>
  );
};

export default Hero;
