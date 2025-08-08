import React from 'react';
import './Habilidades.css';

const Habilidades = () => {
  return (
    <section className="habilidades" id="habilidades">
      <h2 className="habilidades__titulo">Habilidades</h2>

      <div className="habilidades__grid">

        {/* FRONTEND */}
        <div className="habilidad__card">
          <h3>💻 Frontend Development</h3>
          <ul>
            <li>🟨 JavaScript ES6+</li>
            <li>⚛️ React.js</li>
            <li>🧡 HTML5</li>
            <li>🔵 CSS3</li>
            <li>🟣 Bootstrap</li>
            <li>📱 Responsive Design</li>
          </ul>
        </div>

        {/* BACKEND */}
        <div className="habilidad__card">
          <h3>⚙️ Backend Development</h3>
          <ul>
            <li>🔌 API REST</li>
            <li>🌱 Spring Boot</li>
            <li>🗃️ MySQL</li>
            <li>🐘 PostgreSQL</li>
            <li>🟢 Node.js</li>
          </ul>
        </div>

        {/* HERRAMIENTAS */}
        <div className="habilidad__card">
          <h3>🚀 Herramientas & DevOps</h3>
          <ul>
            <li>📋 Git & GitHub</li>
            <li>💙 VS Code</li>
            <li>🧪 Postman</li>
            <li>💻 Terminal/CLI</li>
            <li>☁️ Render / Vercel</li>
            <li>🔐 JWT Auth</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Habilidades;
