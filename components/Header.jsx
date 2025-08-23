"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

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
        className={`flex navbar-fixed justify-between py-5 border-b border-[var(--primary)] hover:shadow-lg hover:shadow-green-400 px-10 md:px-16 lg:px-20 text-2xl fixed left-0 right-0 top-0 transition-all duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="/">
          <h2 className="text-2xl font-semibold md:text-5xl hover:drop-shadow-[0px_0px_15px_rgb(0,0,0)] hover:drop-shadow-green-400 hover:text-[var(--primary)] transition-all duration-300">
            Mike <span className="text-[var(--primary)]">.</span>
          </h2>
        </a>
        <button
          aria-label="Menu Side Bar"
          onClick={() => setMenuOpen(true)}
          className="active:text-[var(--primary)] md:hidden cursor-pointer hover:text-[var(--primary)] drop-shadow-2xl"
        >
          <CgMenuRightAlt size={30} />
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
          className={`absolute top-0 right-0 h-full w-2/3 sm:w-1/2 bg-[var(--background)] shadow-lg p-6 border-l-2 border-[var(--primary)] drop-shadow-[0px_0px_15px_rgb(0,0,0)] drop-shadow-green-400 
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            aria-label="Close Menu"
            className="text-2xl mb-6 cursor-pointer active:text-[var(--primary)] hover:text-[var(--primary)]"
            onClick={() => setMenuOpen(false)}
          >
            <CgClose
              size={30}
              className="hover:rotate-90 transition-all duration-300"
            />
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
