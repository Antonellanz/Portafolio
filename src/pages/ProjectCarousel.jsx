import React from 'react';
import './ProjectCarousel.css';

const projects = [
  {
    title: 'Sistema de Reservas',
    description: 'App para un centro de belleza hecha con React y Spring Boot.',
    image: '/muestra.png'
  },
  {
    title: 'Portfolio Creativo',
    description: 'Este sitio que estás viendo, hecho con amor y magia.',
    image: '/cinema.png'
  },
  {
    title: 'Gestión de Tareas',
    description: 'App para organizar tareas diarias con React y Firebase.',
    image: '/carrito.png'
  }
];

const ProjectCarousel = () => {
  return (
    <div className="carousel__container">
      <h2>Mis proyectos destacados</h2>
      <div className="carousel">
        {projects.map((project, index) => (
          <div className="carousel__card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
