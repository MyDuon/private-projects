import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import SideProject from "./components/SideProject";

function App() {
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

export default App;
