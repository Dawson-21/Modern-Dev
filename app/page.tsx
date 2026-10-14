import HexBackground from "./components/HexBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import PageSizer from "./components/PageSizer";
// import ScrollY from "./components/ScrollY";

function App() {
  return (
    <main id="main-content">
      <HexBackground />

      <Nav />
      <Hero />
      <div className="bg-black/55 backdrop-blur-[3px]">
        <About />
        <Projects />
        <Services />
        <Process />
        <Contact />
        <Footer />
      </div>
      {/* <PageSizer />
      <ScrollY /> */}
    </main>
  );
}

export default App;
