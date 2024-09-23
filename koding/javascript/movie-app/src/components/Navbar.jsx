import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header className="header">
        <a href="" className="logo">
          Myflix
        </a>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/">Movies</a>
          <a href="/">Series</a>
          <a href="/">New</a>
          <a href="/">My list</a>
          <a href="/">Help</a>
          <a href="/">Profile</a>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
