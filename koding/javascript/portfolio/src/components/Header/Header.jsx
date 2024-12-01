import "./Header.css";
import { Link } from "react-router";
import resume from "../../resources/CV_norsk_frontend.pdf";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="link" to="/">
          Lille My
        </Link>
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
