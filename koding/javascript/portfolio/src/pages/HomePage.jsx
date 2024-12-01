import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import SideProject from "../components/SideProject/SideProject";
import Footer from "../components/Footer/Footer";
import "../index.css";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <SideProject />
      <Contact />
      <Footer />
    </>
  );
}
export default HomePage;
