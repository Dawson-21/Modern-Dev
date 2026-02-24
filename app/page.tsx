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
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-50 bg-[url('/hero-bg2.jpg')] 
                  sm:bg-[url('/hero-bg.jpg')] 
                  bg-center bg-no-repeat bg-cover
                  will-change-transform"
        style={{ transform: "translateZ(0)" }}
      />
      {/* Background Overlay */}
      <div className="fixed inset-0 -z-40 bg-linear-to-tr from-blue-950/60 via-black/60 to-yellow-900/60" />

      <Nav />
      <Hero />
      <div className="bg-black/70 backdrop-blur-lg">
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
