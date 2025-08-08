import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__img" />
      <div className="project-card__info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#proyectos" className="btn">Ver más</a>
      </div>
    </div>
  );
};

export default ProjectCard;
