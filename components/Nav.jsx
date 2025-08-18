const Nav = () => {
  return (
    <ul className="flex gap-8 md:flex-row flex-col">
      <li>
        <a
          href="#"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#project"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all"
        >
          Project
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all"
        >
          About Me
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="capitalize font-medium hover:text-[var(--primary)] transition-all"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Nav;
