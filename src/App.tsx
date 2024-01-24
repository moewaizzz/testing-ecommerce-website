import BestDeals from "./components/BestDeals";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Membership from "./components/Membership";
import NewFlavor from "./components/NewFlavor";
import NewReleased from "./components/NewReleased";

export default function App() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto">
        <BestDeals />
        <Membership />
        <NewReleased />
        <NewFlavor />
        <Carousel />
        <Carousel />
        <Carousel />
        <Footer />
      </div>
    </>
  );
}
