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
        <p>halo nama saya </p>
        <div id="project" className="h-screen">
          tes
        </div>
        <div id="about" className="h-screen">
          tes
        </div>
        <div id="contact" className="h-screen">
          tes
        </div>
      </main>
    </>
  );
}
