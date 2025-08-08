import React from 'react';
import './Home.css';

const HomeHero = () => {
  return (
    <div className="home__container" id="inicio">
      
      <div className="home__info">
        <h1>Full Stack Developer</h1>
        <p>Construyendo experiencias web modernas y escalables</p>
        <p className="hero__desc">
          Desarrolladora especializada en React.js y Spring Boot/MySQL con experiencia en e-commerce y aplicaciones web completas. Apasionada por crear soluciones tecnológicas innovadoras y user-friendly.
        </p>
        <a href="#proyectos" className="btn">🚀 Ver Proyectos</a>
      </div>
    </div>
  );
};

export default HomeHero;
