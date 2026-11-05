import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Areas } from "./sections/Areas";
import { Modalities } from "./sections/Modalities";
import { FinalCta } from "./sections/FinalCta";
import { Location } from "./sections/Location";

export default function App() {
  return (
    <>
      <a className="pular" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Areas />
        <Modalities />
        <FinalCta />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
