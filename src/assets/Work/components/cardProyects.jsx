import { ArrowUpRight } from "lucide-react";
import imagePrueba from "../../../../public/images/GraficodePrecios.png";
import "./cardProyects.css";

export function CardProyectsPortfolio() {
  return (
    <>
      <section className="proyectsCard">
        <div className="bx-imageProyect">
          <img src={imagePrueba} alt="" className="image-proyectsCard" />
        </div>

        <div className="bx-allInformation-proyectsCard">
          <h3 className="titleProyectCard">Grafico de Gastos</h3>
          <section className="bx-tecnologyUsed-and-state">
            <div className="bx-tecnologyUsed">
              <span className="stylesGeneralTecnologyUsed html">HTML</span>
              <span className="stylesGeneralTecnologyUsed css">CSS</span>
              <span className="stylesGeneralTecnologyUsed react">REACT</span>
            </div>

            <div className="bx-state"></div>
          </section>

          <div className="proyectsCard-description">
            <p className="txt">
              En este desafío, creé un gráfico de barras desde cero y utilicé un
              archivo JSON local para agregar los datos de forma dinámica.
            </p>
          </div>
        </div>

        <div className="proyectsCard-month-year-and-seeProyect">
          <span className="month-year">Octubre | 2024</span>

          <span className="bx-iconArrow">
            <ArrowUpRight />
          </span>
        </div>
      </section>
    </>
  );
}
