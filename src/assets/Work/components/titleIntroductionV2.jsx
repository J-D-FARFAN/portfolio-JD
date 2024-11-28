import "./titleIntroductionV2.css";

export function TitleIntroductionV2({ title }) {
  return (
    <>
      <section className="proyectPortfolio-bx-titleProyects">
        <div className="bx-titleProyects">
          <span className="circle"></span>
          <span className="titleProyects">{title}</span>
        </div>
      </section>
    </>
  );
}
