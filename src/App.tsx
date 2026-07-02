
import Footer from './components/Footer'
import Hero from './components/Hero'

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
