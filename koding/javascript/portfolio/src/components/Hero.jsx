import "./Hero.css";
import picture from "../pictures/hero_picture.jpg";
function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="description">
          Hei, Jeg er My Hoang Duong. Fullstack utvikler
        </div>
        <div className="hero-picture">
          <img src={picture} alt="picture of me" />
        </div>
      </div>
    </>
  );
}
export default Hero;
