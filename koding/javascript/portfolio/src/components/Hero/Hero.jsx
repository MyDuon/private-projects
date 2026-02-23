import "./Hero.css";
import picture from "../../resources/hero_picture.jpg";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <div className="left-hero">
          <h1 className="hero-intro">Hei, Jeg er My</h1>
          <h3 className="hero-description">
            Masterstudent som er på leting etter en utvikler jobb, enten
            fullstack, frontend eller backend. Er på utskikk etter fulltids-,
            deltids- eller sommerjobb.
          </h3>
          <p>
            Jeg studerer master i informatikk og jeg syntes koding og design er
            veldig gøy og spennende. Jeg er interessert i programvare-,
            mobilutvikling- eller systemutvikling. Jeg liker å jobbe som en
            fullstack utvikler og min nåværende tech-stack min er MongoDB,
            Express.js, React.js og Node.js. Jeg holder for tiden med å lære meg
            Typescript nå. Sjekk gjerne prosjektene som mine under.
          </p>
        </div>
        <div className="right-hero">
          <img className="hero-picture" src={picture} alt="picture of me" />
        </div>
      </div>
    </>
  );
}
export default Hero;
