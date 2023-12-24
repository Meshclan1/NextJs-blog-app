import Image from "next/image";
import HeroSection from "./home/HeroSection";
import Posts from "./home/Posts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Posts />
    </>
  );
}
