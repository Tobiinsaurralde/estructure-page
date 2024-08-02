import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import { MdOutlineLightMode, } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logonavbar.png";
import { TbMenu2 } from "react-icons/tb";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Importar los íconos de Instagram y LinkedIn
import { IoClose } from "react-icons/io5";
//! /////////////////////////
import school from "../../assets/school.svg";
import code from "../../assets/code.svg";
import user from "../../assets/user.svg";
import aboutMe from "../../assets/user-check.svg";
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const toggleMode = () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');
    } else {
      localStorage.setItem('theme', 'light-mode');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
  }, []);
  return (
    <nav className={style.navBar}>
      <div className={style.divLogo}>
        <img src={logo} alt="tiago-insaurralde-logo" className={style.logo} />
      </div>

      <ul className={style.navBarUl}>
     
        <li className={style.mobileMenuButton} onClick={toggleSidebar}>
          <TbMenu2 />
        </li>
        
        <li className={style.desktopli}>
          <Link
            to="/"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            INICIO
          </Link>
        </li>
        <li className={style.desktopli}>
          <Link to="/entrenador-online">ENTRENAMIENTO ONLINE</Link>
        </li>
         {/* <li className={style.desktopli}>
        <Link
            to="rehabilitación"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            BLOG
          </Link>
        </li>*/}
        <li className={style.desktopli}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            SOBRE MÍ
          </Link>
        </li>
        <li>
          <a href="https://www.instagram.com/kinetiago" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={style.socialIcon} />
          </a>
        </li>
      </ul>

      

      {showSidebar && (
        <div className={style.sidebar}>
          <div className={style.header}>
            <div className={style.divLogo}>
              <img src={logo} alt="-logo" className={style.logo} />
            </div>
            <button className={style.closeButton} onClick={toggleSidebar}>
              <IoClose />
            </button>
          </div>

          <div className={style.sidebarUl}>
            <ul>
            <li>
                <Link
                  onClick={toggleSidebar}
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={aboutMe} alt="aboput" />
                 Inicio
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={aboutMe} alt="aboput" />
                 Entrenamiento Online
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={user} alt="contacto" />
                  Sobre Mí
                </Link>
              </li>
              <li>
               {/* <Link
                  onClick={toggleSidebar}
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={code} alt="proyectos" />
                  Asesorias
                </Link>*/}
              </li>
            </ul>
          </div>
          <div>
          </div>
        </div>
      )}
    </nav>
  );
}


export default Navbar;