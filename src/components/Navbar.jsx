import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__logo">Antonella Cintia Núñez</div>

    <input type="checkbox" id="nav-toggle" className="navbar__checkbox" />
    <label htmlFor="nav-toggle" className="navbar__toggle">☰</label>

    <ul className="navbar__menu">
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#sobremi">Sobre mí</a></li>
      <li><a href="#habilidades">Habilidades</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
);

export default Navbar;


