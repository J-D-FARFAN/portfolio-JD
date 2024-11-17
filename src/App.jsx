// App.js
import "./App.css";
import { AboutMePortfolio } from "./assets/AboutMe/aboutMe";
import { HeroPortfolio } from "./assets/Hero/hero";

function App() {
  return (
    <>
      <article className="content__allHero-portfolio">
        <HeroPortfolio />
      </article>

      <article className="content__allSection-portfolioAboutMe">
        <AboutMePortfolio />
      </article>
      <article className="content__allSection-portfolioProjects"></article>
      <article className="content__allSection-portfolioContact"></article>
    </>
  );
}

export default App;
