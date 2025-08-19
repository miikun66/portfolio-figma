import Header from "@/components/Header";

import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <section className="mx-20 h-screen">
          <Hero />
        </section>
        <hr className="mx-15 text-[var(--primary)]" />
        <section id="project" className="h-screen">
          <article>project</article>
        </section>
        <hr className="mx-15 text-[var(--primary)]" />
        <section id="about" className="h-screen">
          about
        </section>
        <hr className="mx-15 text-[var(--primary)]" />
        <section id="contact" className="h-screen">
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
