import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Experiences from "./pages/Experiences"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
            <Header />
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/education" element={<Education/>} />
      <Route path="/experience" element={<Experiences />} />
      <Route path="/projects" element={<Projects/>} />
    </Routes>
    </>
  )
}

export default App
