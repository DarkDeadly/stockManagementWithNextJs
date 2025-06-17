import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Guide from "./_components/Guide";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Prices from "./_components/Prices";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header/>
      <Hero/>
      <Features/>
      <Guide/>
      <Prices/>
      <Footer/>
    </div>
  );
}
