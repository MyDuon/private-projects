import "./Experience.css";
import MunchLogo from "./MunchLogo";
import UioLogo from "./UioLogo";

function Experience() {
  return (
    <>
      <div className="experience-wrapper">
        <h1 className="experience">Erfaring</h1>
        <div className="work">
          <div className="uio-wrapper">
            <UioLogo />
            <h2>Universitet i Oslo</h2>
            <h3>Gruppelærer</h3>
            <div className="test">
              Gjennomføre seminartimer med studenter, rettet obligatoriske
              oppgaver og ga tilbakemelding. Hadde ukentlig møter med faglærer
              og andre gruppelærere.
            </div>
          </div>
          <div className="munch-wrapper">
            <MunchLogo />
            <h2>Munch</h2>
            <h3>Vertskap</h3>
            <div>
              Selger billetter, audioguide, står i utstillingene. Hjelper med
              henvendelser og spørsmål fra kunden.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
