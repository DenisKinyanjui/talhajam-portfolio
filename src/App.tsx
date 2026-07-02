import About from './components/About'
import Connect from './components/Connect'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Interests from './components/Interests'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-ink">
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Education />
        <Experience />
        <Interests />
        <Connect /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
