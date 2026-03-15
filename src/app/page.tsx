import Hero from "@/app/_sections/Hero";
import Skills from "@/app/_sections/Skills";
import Intro from "@/app/_sections/Intro";
import HorizontalSections from "./_sections/HorizontalSection";
export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <Hero />
        <HorizontalSections />
        <Skills />
      </main>
    </div>
  );
}
