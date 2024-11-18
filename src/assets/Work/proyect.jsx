import { ChevronRight } from "lucide-react";
import { CardProyectsPortfolio } from "./components/cardProyects";
import "./proyect.css";

export function ProyectsPortfolio() {
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
            <CardProyectsPortfolio />
            <CardProyectsPortfolio />
            <CardProyectsPortfolio />
          </figure>

          <section className="bx-moreProyects">
            <div className="moreProyects">Ver más</div>
            <div className="bx-iconArrowRight">
              <ChevronRight size={15} />
            </div>
          </section>
        </section>
      </article>
    </>
  );
}
