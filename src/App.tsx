import Background from "./components/Background";
import HexGrid from "./components/HexGrid";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Thesis from "./components/Thesis";
import Quote from "./components/Quote";
import Expertise from "./components/Expertise";
import Fluency from "./components/Fluency";
import Track from "./components/Track";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="grain relative min-h-dvh">
      <Background />
      <HexGrid />
      <ScrollProgress />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Thesis />
        <Quote />
        <Expertise />
        <Fluency />
        <Track />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
