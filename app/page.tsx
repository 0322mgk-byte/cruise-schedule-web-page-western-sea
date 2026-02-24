import Header from "./components/Header";
import Hero from "./components/Hero";
import TripInfo from "./components/TripInfo";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Details from "./components/Details";
import TripSummary from "./components/TripSummary";
import Checklist from "./components/Checklist";
import ProductInfo from "./components/ProductInfo";
import Pricing from "./components/Pricing";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <TripInfo />
      <Intro />
      <Features />
      <Details />
      <Schedule />
      <ProductInfo />
      <Pricing />
      <TripSummary />
      <Checklist />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
