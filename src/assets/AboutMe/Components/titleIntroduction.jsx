import "./titleIntroduction.css";

export function TitleIntroduction({ titleName }) {
  return (
    <>
      <div className="titleIntroduction-title">
        <span className="circle"></span>
        <span className="experience">{titleName}</span>
      </div>
    </>
  );
}
