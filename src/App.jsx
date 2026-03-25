import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Heroes from "./pages/Heroes"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Catalog from "./pages/Catalog"




function App() {
  return (
    <div>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;