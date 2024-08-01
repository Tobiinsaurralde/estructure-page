import React, { useState, useEffect } from "react";
import style from "./about.module.css";
import fondoPerfil from "../../assets/about.jpeg";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark-mode");
  }, []);

  const toggleMode = () => {
    const newTheme = isDarkMode ? "light-mode" : "dark-mode";
    document.body.classList.remove(isDarkMode ? "dark-mode" : "light-mode");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.profileSection}>
          <img src={fondoPerfil} alt="fondo-perfil" className={style.fotoPerfil} />
          <div className={style.textSection}>
            <h2 className={style.nombre}>Tiago Insaurralde</h2>
            <p className={style.descripcion}>Licenciado en Kinesiología y Fisiatría</p>
            <h3>Formación y experiencia:</h3>
            <p className={style.descripcion}>
            Tengo una sólida formación como Licenciado en Kinesiología y Fisiatría, he tenido la oportunidad de ganar experiencia práctica a través de diversas actividades y prácticas pre-profesionales durante mis años de estudio. Estas experiencias me han permitido aplicar mis conocimientos teóricos en situaciones reales, desarrollando habilidades clave y afianzando mi vocación.<br />
             <br />
             
Trabajo en el sector de la salud, específicamente en la rehabilitación deportiva y el reacondicionamiento físico. Mis principales aptitudes incluyen:
.<br />
Estoy motivado por el deseo de mejorar la calidad de vida y el rendimiento de mis pacientes. Me apasiona buscar herramientas y técnicas innovadoras para cada situación, siempre con el objetivo de proporcionar el mejor cuidado posible.

            </p>
            <h3>Redes sociales:</h3>
            <a href="https://www.instagram.com/tiago.insaurralde" target="_blank" className={style.socialLink}>Instagram: @tiago.insaurralde</a>
          </div>
        </div>

        <div className={style.blackBlock}>
          <div className={style.services}>
            <h3>Servicios:</h3>
            <ul>
              <li><a href="entrenador-online">Entrenamiento Online</a></li>
              <li><a href="rehabilitación">Rehabilitación</a></li>
            </ul>
          </div>
          <img src={logo} alt="logo" className={style.logo} />

          <div className={style.aboutMe}>
            <h3>Sobre mí</h3>
            <ul>
              <li><a href="about">Tiago Insaurralde</a></li>
              <li>Redes sociales:</li>
              <li><a href="https://www.instagram.com/tiago.insaurralde" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/tiago-insaurralde-a4b328211/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.tobi}>

      <li><p>© 2024 Tobias Insaurralde - Todos los derechos reservados</p></li>
      </div>

    </section>
  );
}

export default About;
