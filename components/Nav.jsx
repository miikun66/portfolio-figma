const Nav = () => {
  return (
    <ul className="flex gap-8 md:flex-row flex-col">
      <li>
        <a
          href="#"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all hover:text-shadow-[0px_0px_15px_rgb(0,0,0)] hover:text-shadow-green-400"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#project"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all hover:text-shadow-[0px_0px_15px_rgb(0,0,0)] hover:text-shadow-green-400"
        >
          Project
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all hover:text-shadow-[0px_0px_15px_rgb(0,0,0)] hover:text-shadow-green-400"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all hover:text-shadow-[0px_0px_15px_rgb(0,0,0)] hover:text-shadow-green-400"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Nav;
