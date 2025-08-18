"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`flex navbar-fixed justify-between py-5 shadow-sm px-10 text-2xl fixed left-0 right-0 top-0 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="#">
          <h2 className="text-2xl font-semibold md:text-5xl">
            Mike <span className="text-[var(--primary)]">.</span>
          </h2>
        </a>
        <button
          onClick={() => setMenuOpen(true)}
          className="active:text-[var(--primary)] md:hidden cursor-pointer"
        >
          <CiMenuFries />
        </button>
        <nav className="md:flex hidden md:text-2xl">
          <Nav />
        </nav>
      </header>

      {/* Overlay + Sidebar */}
      <div
        className={`fixed inset-0 z-[999] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 h-full w-2/3 sm:w-1/2 bg-[var(--background)] shadow-lg p-6 border-l-2 border-[var(--primary)] 
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="text-2xl mb-6 cursor-pointer active:text-[var(--primary)]"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <nav className="flex flex-col text-xl gap-4">
            <Nav />
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
