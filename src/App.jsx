import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Catalog from "./pages/Catalog"




export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  )
}