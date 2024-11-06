import "./Hero.css";
import picture from "../resources/hero_picture.jpg";
function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="description">
          Hei, Jeg er My Hoang Duong. Fullstack utvikler
        </div>
        <div className="hero-picture">
          <div className="left-hero">
            <h1 className="description">Hei, Jeg er My</h1>
            <h3>
              Informatikk student som er på leting etter en utvikler jobb, enten
              fullstack, frontend eller backend
            </h3>
          </div>
          <div className="right-hero">
            <img src={picture} alt="picture of me" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
