import Hero from "@/app/_sections/Hero";
import Skills from "@/app/_sections/Skills";
import Intro from "@/app/_sections/Intro";
import HorizontalSections from "./_sections/HorizontalSection";
import Footer from "@/app/_layouts/Footer";
import Quote from "./_sections/Quote";
export default function Home() {
  return (
    <div className="w-full">
      <main className="w-full">
        <Hero /><Intro/> 
        <Quote/>
        <HorizontalSections  />
        <Skills />
        <Footer text="Thank You For Watching!" />
      </main>
    </div>
  );
}
