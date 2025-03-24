import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './Header.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <a href="#home" className="logo-container">
        <img src="/Buenos-Aires-Hub-Logo.webp" alt="Logo" />
      </a>

      {/* Menú Hamburguesa (Solo visible en móviles) */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Menú */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><a href="#about" className="nav-item" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#community" className="nav-item" onClick={() => setMenuOpen(false)}>Comunidad</a></li>
          <li><a href="#projects" className="nav-item" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
