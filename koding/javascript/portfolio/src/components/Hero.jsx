import "./Hero.css";
import picture from "../resources/hero_picture.jpg";
function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="left-hero">
          <h1 className="intro">Hei, Jeg er My</h1>
          <h3 className="description">
            Informatikk student som er på leting etter en utvikler jobb, enten
            fullstack, frontend eller backend
          </h3>
        </div>
        <div className="right-hero">
          <img src={picture} alt="picture of me" />
        </div>
      </div>
    </>
  );
}
export default Hero;
