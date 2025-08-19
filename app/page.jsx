import Header from "@/components/Header";

import Hero from "@/components/Hero";
import Project from "@/components/Project.";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <section className="mx-20 ">
          <Hero />
        </section>
        <hr className="mx-15 text-[var(--primary)]" />
        <section id="project" className="">
          <Project />
        </section>
        <hr className="mx-15 text-[var(--primary)]" />
        <section id="about" className="">
          about
        </section>
        <hr className="mx-15 text-[var(--primary)]" />
        <section id="contact" className="">
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
