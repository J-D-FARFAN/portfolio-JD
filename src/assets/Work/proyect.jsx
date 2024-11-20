import { ChevronRight, CircleX } from "lucide-react";
import { CardProyectsPortfolio } from "./components/cardProyects";
import "./proyect.css";
import dataProyects from "/src/data/proyects.json";
import { useState } from "react";

export function ProyectsPortfolio() {
  const [showMore, setShowMore] = useState(false);

  const ShowMoreProyects = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <article className="proyectPortfolio-contentAll">
        <div className="proyectPortfolio-bx-titleProyects">
          <div className="bx-titleProyects">
            <span className="circle"></span>
            <span className="titleProyects">Proyectos</span>
          </div>
        </div>

        <section className="proyectPortfolio-content-proyectsCards">
          <span className="titleJobs">Ultimos Trabajos</span>

          <figure className="bx-proyectsCards">
            {dataProyects.slice(0, 3).map((elements) => {
              return (
                <>
                  <CardProyectsPortfolio
                    titleProyectCard={elements.projectTitle}
                    skills={elements.technologies}
                    description={elements.description}
                    date={elements.date}
                    imageProyect={elements.image}
                    URL={elements.URL}
                  />
                  ;
                </>
              );
            })}
          </figure>

          <section className="bx-moreProyects" onClick={ShowMoreProyects}>
            <div className="moreProyects">Ver más</div>
            <div className="bx-iconArrowRight">
              <ChevronRight size={15} />
            </div>
          </section>
        </section>
        {showMore && (
          <article className="content__modalState">
            <span className="closeModal" onClick={ShowMoreProyects}>
              <CircleX />
            </span>
          </article>
        )}
      </article>
    </>
  );
}
