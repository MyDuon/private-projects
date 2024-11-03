import "./Hero.css";
import picture from "../pictures/hero_picture.jpg";
function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="desciption">
          <p>asdf</p>
        </div>
        <div className="hero-picture">
          <p>jkl</p>
        </div>
      </div>
      <img src={picture} alt="picture of me" />
    </>
  );
}
export default Hero;
