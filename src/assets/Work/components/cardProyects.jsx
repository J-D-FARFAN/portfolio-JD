import { ArrowUpRight } from "lucide-react";
import "./cardProyects.css";

export function CardProyectsPortfolio({
  titleProyectCard,
  skills,
  description,
  date,
  imageProyect,
  URL,
}) {
  return (
    <>
      <section className="proyectsCard">
        <div className="bx-imageProyect">
          <img
            src={imageProyect}
            alt=""
            className="image-proyectsCard"
            loading="lazy"
          />
        </div>

        <div className="bx-allInformation-proyectsCard">
          <h3 className="titleProyectCard">{titleProyectCard}</h3>
          <section className="bx-tecnologyUsed-and-state">
            <div className="bx-tecnologyUsed">
              <span className="stylesGeneralTecnologyUsed html">
                {skills[0]}
              </span>
              <span className="stylesGeneralTecnologyUsed css">
                {skills[1]}
              </span>
              <span className="stylesGeneralTecnologyUsed react">
                {skills[2]}
              </span>
            </div>

            <div className="bx-state"></div>
          </section>

          <div className="proyectsCard-description">
            <p className="txt">{description}</p>
          </div>
        </div>

        <div className="proyectsCard-month-year-and-seeProyect">
          <span className="month-year">{date}</span>

          <span className="bx-iconArrow">
            <a className="iconArrow" href={URL} target="__blank">
              <ArrowUpRight color="#121212" />
            </a>
          </span>
        </div>
      </section>
    </>
  );
}
