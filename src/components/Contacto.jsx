import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <h2 className="contacto__titulo">¿Hablamos?</h2>
      <p className="contacto__mensaje">
        Estoy disponible para nuevas oportunidades y proyectos interesantes. <br />
        ¡No dudes en contactarme!
      </p>

      <div className="contacto__datos">
        <p>✉️ <strong>Email:</strong> antonellacnunez@gmail.com</p>
        <p>📞 <strong>Teléfono:</strong> +54 351 819 9545</p>
        <p>🔗 <strong>GitHub:</strong> <a href="https://github.com/Antonellanz" target="_blank" rel="noreferrer">github.com/Antonellanz</a></p>
        <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/antonella-cintia-nu%C3%B1ez-0b8994243/" target="_blank" rel="noreferrer">Antonella Nuñez</a></p>
      </div>
    </section>
  );
};

export default Contacto;
