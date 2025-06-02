import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import PageSizer from './components/PageSizer'
import ScrollY from './components/ScrollY'

function App() {

  return (
    <>
      <Nav />
      <Hero />
      <div className="bg-black/70 backdrop-blur-lg">
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
      <PageSizer />
      <ScrollY />
    </>
  )
}

export default App
