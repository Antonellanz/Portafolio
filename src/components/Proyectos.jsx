import React from 'react';
import './Proyectos.css';

const proyectos = [
  {
    nombre: 'GLOW - Sistema de Reservas',
    descripcion: 'App completa para reservas en centros de estética. Con login, panel admin, frontend y backend integrado.',
    imagen: '/muestra.png',
    demo: 'https://beauty-reservas-frontend.vercel.app/', // ejemplo
    codigo: 'https://github.com/Antonellanz/reservas-glow'
  },
  {
    nombre: 'Filtrado de Peliculas y Series',
    descripcion: 'Este filtrado que estás viendo esta hecho en React, con animaciones y una API de peliculas .',
    imagen: '/cinema.png',
    demo: 'https://app-peliculas-reactjs.netlify.app/', // ejemplo
    codigo: 'https://github.com/Antonellanz/mi-portfolio'
  },
  {
    nombre: 'COMPRALINK',
    descripcion: 'App simple de carrito comercial, donde se puede selecionar el producto agregando una cantidad de la misma y realizar la compra. Esta hecho con react y una API de productos.',
    imagen: '/carrito.png',
    demo: 'https://compralink.vercel.app/', // ejemplo
    codigo: 'https://github.com/Antonellanz/todo-app'
  }
];

const Proyectos = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="proyectos__titulo"> Proyectos Destacados</h2>
      <div className="proyectos__grid">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto__card" key={index}>
            <img src={proyecto.imagen} alt={proyecto.nombre} />
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="proyecto__botones">
              <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn">
                🔗 Ver demo
              </a>
              <a href={proyecto.codigo} target="_blank" rel="noopener noreferrer" className="btn btn__secundario">
                💻 Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
