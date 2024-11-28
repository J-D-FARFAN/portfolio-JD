import { ChevronRight, CircleX } from "lucide-react";
import { CardProyectsPortfolio } from "./components/cardProyects";
import "./proyect.css";
import dataProyects from "/src/data/proyects.json";
import { useState } from "react";
import { TitleIntroductionV2 } from "./components/titleIntroductionV2";

export function ProyectsPortfolio() {
  const [showMore, setShowMore] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const ShowMoreProyects = () => {
    if (showMore) {
      setIsClosing(true); // Activa la animación de cierre
      setTimeout(() => {
        setShowMore(false); // Cierra el modal después de la animación
        setIsClosing(false); // Restablece el estado de cierre
      }, 500);
    } else {
      setShowMore(true);
    }
  };

  return (
    <>
      <article className="proyectPortfolio-contentAll">
        <TitleIntroductionV2 title={"Proyectos"} />

        <section className="proyectPortfolio-content-proyectsCards">
          <span className="titleJobs">Últimos Trabajos</span>

          <figure className="bx-proyectsCards">
            {dataProyects.slice(0, 3).map((elements) => {
              return (
                <CardProyectsPortfolio
                  key={elements.ID}
                  titleProyectCard={elements.projectTitle}
                  skills={elements.technologies}
                  description={elements.description}
                  date={elements.date}
                  imageProyect={elements.image}
                  URL={elements.URL}
                />
              );
            })}
          </figure>

          <section className="bx-moreProyects" onClick={ShowMoreProyects}>
            <div className="moreProyects">Ver todos</div>
            <div className="bx-iconArrowRight">
              <ChevronRight size={15} />
            </div>
          </section>
        </section>
        {showMore && (
          <article
            className={`content__modalState ${
              isClosing ? "modal--hidden" : "modal--visible"
            }`}
          >
            <span className="closeModal" onClick={ShowMoreProyects}>
              <CircleX color="var(--colorFT-white)" />
            </span>

            <section className="bx-contentALL-proyectsPortfolio">
              <span className="titleJobs">Todos mis proyectos</span>

              <figure className="bx-proyectsCards">
                {dataProyects.map((elements) => {
                  return (
                    <CardProyectsPortfolio
                      key={elements.ID}
                      titleProyectCard={elements.projectTitle}
                      skills={elements.technologies}
                      description={elements.description}
                      date={elements.date}
                      imageProyect={elements.image}
                      URL={elements.URL}
                    />
                  );
                })}
              </figure>
            </section>
          </article>
        )}
      </article>
    </>
  );
}
