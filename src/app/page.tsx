import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Books from "@/components/Books";
import Expertise from "@/components/Expertise";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Books />
        <Expertise />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
