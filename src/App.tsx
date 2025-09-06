import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div>
        <div className="p-3 md:px-[15%]">
          <Navbar/>
          <Home/>
        </div>
        <About/>
      </div>
      <div className="p-3 md:px-[15%]">
        <Experience />
        <Projects/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
