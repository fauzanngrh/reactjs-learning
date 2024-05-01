import ButtonGradient from "../src/assets/svg/ButtonGradient";
import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import Collaboration from "./components/collaboration";
import Services from "./components/services";
import Pricing from "./components/pricing";
import Roadmap from "./components/roadmap";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
