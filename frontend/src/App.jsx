import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyElevate from './components/WhyElevate'
import About from './components/About'
import Programs from './components/Programs'
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
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
