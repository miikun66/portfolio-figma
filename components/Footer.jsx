"use client";

import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-6 mt-10 mx-10 md:mx-25">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand / Copyright */}
        <p className="text-md md:text-xl text-gray-400 text-center">
          &copy; 2025 Michael Christianto. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://facebook.com/"
            aria-label="facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/"
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/"
            aria-label="youtube"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
