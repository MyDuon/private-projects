import "./Experience.css";
import MunchLogo from "../MunchLogo/MunchLogo";
import UioLogo from "../UioLogo/UioLogo";

function Experience() {
  return (
    <>
      <div className="experience-wrapper">
        <h1 className="experience-header">Erfaring</h1>
        <div className="work">
          <div className="uio-wrapper">
            <UioLogo />
            <h2>Universitet i Oslo</h2>
            <h3 className="margin">Gruppelærer</h3>
            <p className="margin">
              Hadde seminartimer med studenter, rettet obligatoriske oppgaver og
              ga tilbakemelding. Hadde ukentlig møter med faglærer og
              gruppelærere.
            </p>
          </div>
          <div className="munch-wrapper">
            <MunchLogo />
            <h2>Munch</h2>
            <h3 className="margin">Vertskap</h3>
            <p className="margin">
              Selger billetter, audioguide, står i utstillingene. Hjelper med
              henvendelser og spørsmål fra kunden.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
