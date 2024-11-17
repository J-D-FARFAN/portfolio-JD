import "./hero.css";
import { ChevronsDown, Minus } from "lucide-react";
import { NavbarPortfolio } from "./Navbar/navbar";

export function HeroPortfolio() {
  return (
    <>
      <header className="content__header-portfolio spacerPage">
        <NavbarPortfolio />
      </header>

      <main className="content__allIntroduction-portfolio spacerPage">
        <article className="content-introduction-portfolio">
          <section className="introduction-portfolio">
            <section className="content-proyects-yearExperience">
              <div className="content-numbers">
                <span className="numbers">+26</span>
                <span className="numbers-description">
                  Proyectos completados
                </span>
              </div>
              <div className="content-numbers">
                <span className="numbers">+03</span>
                <span className="numbers-description">Años de Experiencia</span>
              </div>
            </section>
            <h1 className="title">Hola</h1>
            <section className="bx-presentation">
              <Minus />

              <span className="name-and-skills">
                Soy Juan David Farfan. <br /> Desarrolador front-end y Diseñador
                UX/UI
              </span>
            </section>

            <section className="bx-btn-scrollDown">
              <span className="bx-scrollDown">
                <ChevronsDown className="iconScrollDown" />
              </span>
              <span className="scroll">Scroll Down</span>
            </section>
          </section>
        </article>

        <article className="image-presentation-portfolio"></article>
      </main>
    </>
  );
}
