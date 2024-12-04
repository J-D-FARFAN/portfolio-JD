import SvgIcon from "./logoPortfolio";
import "./navbar.css";
import { Languages, SunDim } from "lucide-react";

export function NavbarPortfolio() {
  return (
    <>
      <section className="bx-logo-navbarPortfolio">
        <div className="bx-image">
          <SvgIcon className="logoPortfolio" />
        </div>

        <nav className="bx-navbar">
          <ul className="navbar">
            <a href="#inicio" className="items-navbar-portfolio">
              Inicio
            </a>
            <a href="#sobreMi" className="items-navbar-portfolio">
              Sobre mí
            </a>
            <a href="#proyectos" className="items-navbar-portfolio">
              Proyectos
            </a>
            <a href="#contacto" className="items-navbar-portfolio">
              Contacto
            </a>
          </ul>
        </nav>
      </section>

      <section className="bx-icons-interactionPortfolio-theme-language">
        <div className="bx-icons">
          <SunDim className="icons" />
        </div>

        <div className="bx-icons">
          <Languages />
        </div>
      </section>
    </>
  );
}
