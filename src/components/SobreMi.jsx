import React from 'react';
import './SobreMi.css';

const SobreMi = () => {
  return (
    <section className="sobremi" id="sobremi">
      <h2 className="sobremi__titulo">Sobre mí</h2>
       <img
        className="home__photo"
        src="/perfil.png.jpeg"
        alt="Antonella"
      />
      <p className="sobremi__texto">
        Soy desarrolladora fullstack con una mirada creativa, empática y resolutiva. Disfruto construir aplicaciones que combinan diseño atractivo, lógica funcional y una experiencia de usuario intuitiva. <br /><br />
        Me formé en atención al cliente y gestión comercial, y actualmente aplico esas habilidades en el mundo tech, donde desarrollo proyectos web con React, Spring Boot y MySQL.
        <br /><br />
        Uno de mis mayores logros hasta ahora es <strong>GLOW</strong>, una plataforma de reservas para centros de estética, que creé desde cero integrando frontend, backend, autenticación, paneles diferenciados y conexión con base de datos.
        <br /><br />
        Estoy en constante aprendizaje: estudio inglés, Analista de Sistemas y busco cada día crecer como profesional. Me apasiona el desarrollo web, el diseño visual con propósito y los desafíos que requieren soluciones prácticas y humanas.
      </p>

      <div className="sobremi__datos">
        <p>📍 <strong>Ubicación:</strong> Córdoba, Argentina</p>
        <p>⚡ <strong>Disponibilidad:</strong> Inmediata</p>
        <p>🌍 <strong>Idiomas:</strong> Español (nativo), Inglés (en formación)</p>
      </div>
    </section>
  );
};

export default SobreMi;
