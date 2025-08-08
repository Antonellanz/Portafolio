import React from 'react';
import HomeHero from './HomeHero';
import SobreMi from './SobreMi';
import Habilidades from './Habilidades';

import Contacto from './Contacto';
import Proyectos from './Proyectos';

const Home = () => {
  return (
    <section className="home" id="inicio">
      <HomeHero />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
    </section>
  );
};

export default Home;


