import "./studiesSkills.css";

export function StudiesSkills({
  nameStudy,
  month,
  year,
  nameSkill,
  byName,
  description,
  linkPageForNameSkill,
}) {
  return (
    <>
      <article className="studiesSkills-contentBox">
        <section className="studiesSkills-sectionMain">
          <div className="bx-studiesSkills-name-and-year">
            <span className="nameStudy">{nameStudy}</span>

            <div className="bx-year-and-month">
              <span className="circle"></span>
              <span className="month-and-year">
                {month} | {year}
              </span>
            </div>
          </div>

          <div className="studiesSkill-box-name">
            <a
              target="__blank"
              href={linkPageForNameSkill}
              className="nameSkill"
            >
              {nameSkill}
            </a>
            <span className="byName">{byName}</span>
          </div>
        </section>

        <section className="studiesSkill-description">
          <p className="txt">{description}</p>
        </section>
      </article>
    </>
  );
}
