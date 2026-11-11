import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Collection from "@/components/Collection";
import Campaign from "@/components/Campaign";
import BrandStatement from "@/components/BrandStatement";
import NewArrivals from "@/components/NewArrivals";

export default function Home() {
  return (
    <>

      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Collection />
        <Campaign />
        <BrandStatement />
        <NewArrivals />
      </main>
    </>
  );
}
