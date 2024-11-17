import "./experiencia.css";

export function ExperienciaPortfolio({
  nameTecnology,
  month,
  year,
  descriptionT,
  platform,
  nameMaster,
  linkPlatform,
}) {
  return (
    <>
      <section className="content__rowExperience">
        <div className="name--and--monthTecnology-exp">
          <h3 className="nameTecnology">{nameTecnology}</h3>
          <div className="bx-titleExperience">
            <span className="circle"></span>
            <span className="experience">
              {month} | {year}
            </span>
          </div>
        </div>

        <p className="descriptionTecnology">{descriptionT}</p>

        <div className="name--and--monthTecnology">
          <a href={linkPlatform} className="namePlatform" target="__blank">
            {platform}
          </a>
          <span className="nameMaster">{nameMaster}</span>
        </div>
      </section>
    </>
  );
}
