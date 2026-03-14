import Image from "next/image";
import Hero from "@/app/_sections/Hero";
import About from "@/app/_sections/About";
import Experience from "@/app/_sections/Experience";
import Skill from "@/app/_sections/Skills";
import Education from "@/app/_sections/Education";
import Intro from "@/app/_sections/Intro";

export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
       
       <Hero /> <Intro /> <About />
         <Experience />
         <Skill />
         <Education />
      </main>
    </div>
  );
}
