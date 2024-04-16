import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <About />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
export default Home;
