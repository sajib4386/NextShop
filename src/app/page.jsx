import Image from "next/image";
import Hero from "./Landings/Hero";
import Features from "./Landings/Features";
import Popular from "./Landings/Popular";
import HowItWorks from "./Landings/HowItWorks";
import Testimonials from "./Landings/Testimonials";
import NewsLetter from "./Landings/NewsLetter";
import CTA from "./Landings/CTA";



export default function Home() {
  return (
    <main className="bg-[#0B0B0F] text-white">
      <Hero></Hero>
      <Popular></Popular>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <NewsLetter></NewsLetter>
      <CTA></CTA>
    </main>
  );
}

