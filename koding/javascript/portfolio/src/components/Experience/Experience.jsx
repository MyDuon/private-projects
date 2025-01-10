import "./Experience.css";

function Experience() {
  return (
    <>
      <div className="experience-work-container">
        <div className="experience-container">
          <h1 className="experience-header">Experience</h1>
          <div className="card-container">
            <div className="card">
              <h2 className="job-company">Universitetet i Oslo</h2>
              <h3 className="job-title">Gruppelærer | 2022 - 2024</h3>
              <ul className="experience-list-container">
                <li className="experience-item">
                  Ledet og gjennomførte 28 suksessfulle gruppetimer med 30
                  studenter i introfag til datateknologi.
                </li>
                <li className="experience-item">
                  Hadde ukentlige møter med andre gruppelærere og faglærer der
                  vi kartlegget progressjonen til studenter.
                </li>
                <li className="experience-item">
                  Rettet og ga tilbakemelding på 120 obligatoriske innleveringer
                  fra studenter og svarte på henvendelser på mail.
                </li>
              </ul>
            </div>
            <div className="card">
              <h2 className="job-company">Munch</h2>
              <h3 className="job-title">Vertskap | 2022 - </h3>
              <ul className="experience-list-container">
                <li className="experience-item">
                  Selger billetter, audioguide og står i utstillingene.
                </li>
                <li className="experience-item">
                  Hjelper med henvendelser og spørsmål fra kunden.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="education-container">
          <h1 className="education-header">Education</h1>
          <div className="card-container">
            <div className="card">
              <h2 className="education-location">Universitetet i Oslo</h2>
              <h3 className="degree-title">
                Bachelor i informatikk: design, bruk og interaksjon
              </h3>
              <p>
                Utdannet utvikler med tverrfaglig fordypning innen
                samfunnsøkonomi med utveksling til City University Of Hong Kong
              </p>
            </div>
            <div className="card">
              <h2 className="education-location">Høgskolen i Vestlandet</h2>
              <h3 className="degree-title">Forkurs i Ingeniør</h3>
              <p>
                Forkurs i Ingeniør i Bergen inneholder fag som matematikk og
                fysikk.
              </p>
            </div>
            <div className="card">
              <h2 className="education-location">
                Universitetet i Sør-øst Norge
              </h2>
              <h3 className="degree-title">Innovasjon og entreprenørskap</h3>
              <p>
                Startet på Bachelor i innovasjon og entreprenørskap i Bø i
                Telemark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
