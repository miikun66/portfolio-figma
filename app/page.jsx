import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Project from "@/components/Project.";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <section className="mx-20 ">
          <Hero />
        </section>
        <section className="my-10 relative">
          <hr className="mx-8 md:mx-15 text-[var(--primary)]" />
          <h2
            id="project"
            className="text-2xl md:text-3xl font-bold mb-6 text-center cursor-pointer hover:text-shadow-[0px_0px_15px_rgb(0,0,0)] hover:text-shadow-green-400 hover:text-[var(--primary)] transition-all duration-500 absolute inset-0 -top-5 bg-[var(--background)] w-fit mx-auto h-fit px-4"
          >
            My Projects
          </h2>

          <Project />
        </section>

        <section className="my-10 relative">
          <hr className="mx-8 md:mx-15 text-[var(--primary)]" />
          <h2
            id="about"
            className="text-2xl md:text-3xl font-bold mb-6 text-center cursor-pointer hover:text-shadow-[0px_0px_15px_rgb(0,0,0)] hover:text-shadow-green-400 hover:text-[var(--primary)] transition-all duration-500 absolute inset-0 -top-5 bg-[var(--background)] w-fit mx-auto h-fit px-4"
          >
            About Me
          </h2>
          <About />
        </section>
        <hr className="mx-8 md:mx-15 text-[var(--primary)]" />
        <section id="contact" className="my-10">
          <h2>contact</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
