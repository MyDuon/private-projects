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
              <p>Lorem ipusm bal skje alsd al akej ele kel</p>
            </div>
            <div className="card">
              <h2 className="job-company">Munch</h2>
              <h3 className="job-title">Vertskap | 2022 - </h3>
              <p>Lorem ipusm bal skje alsd al akej ele kel</p>
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
              <p>Lorem ipusm bal skje alsd al akej ele kel</p>
            </div>
            <div className="card">
              <h2 className="education-location">Høgskolen i Vestlandet</h2>
              <h3 className="degree-title">Forkurs i Ingeniør</h3>
              <p>Lorem ipusm bal skje alsd al akej ele kel</p>
            </div>
            <div className="card">
              <h2 className="education-location">
                Universitetet i Sør-øst Norge
              </h2>
              <h3 className="degree-title">Innovasjon og entreprenørskap</h3>
              <p>Lorem ipusm bal skje alsd al akej ele kel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
