import "./Header.css";
import resume from "../resources/CV_norsk_frontend.pdf";

function Header() {
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          Lille My
        </a>
        <nav className="nav">
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href={resume} target="_blank">
            Resume
          </a>
          <a href="/">Experience</a>
          <a href="/">Contact</a>
        </nav>
      </header>
    </>
  );
}
export default Header;
