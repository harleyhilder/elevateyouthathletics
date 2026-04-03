import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyElevate from './components/WhyElevate'
import About from './components/About'
import Programs from './components/Programs'
import Gallery from './components/Gallery'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyElevate />
        <About />
        <Programs />
        <Gallery />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
