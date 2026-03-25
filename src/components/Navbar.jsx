import { Link } from "react-router-dom"
import "./navbar.css"
import "../assets/react.svg"

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">ST Heroes</div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/catalog">Catalog</Link>
      </div>
    </nav>
  )
}