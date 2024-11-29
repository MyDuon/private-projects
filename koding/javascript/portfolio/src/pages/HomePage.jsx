import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import SideProject from "../components/SideProject";
import "../index.css";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <SideProject />
      <Contact />
    </>
  );
}
export default HomePage;
