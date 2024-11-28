// App.js
import "./App.css";
import { AboutMePortfolio } from "./assets/AboutMe/aboutMe";
import { ContactPortfolio } from "./assets/Contact/contact";
import { HeroPortfolio } from "./assets/Hero/hero";
import { ProyectsPortfolio } from "./assets/Work/proyect";

function App() {
  return (
    <>
      <article className="content__allHero-portfolio">
        <HeroPortfolio />
      </article>

      <article className="content__allSection-portfolioAboutMe">
        <AboutMePortfolio />
      </article>
      <article className="content__allSection-portfolioProjects">
        <ProyectsPortfolio />
      </article>
      <article className="content__allSection-portfolioContact">
        <ContactPortfolio />
      </article>
    </>
  );
}

export default App;
