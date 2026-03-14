// app/components/Hero.tsx
"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(introRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%", // for 2 more screen height, for the animation to have enough time to run smoothly
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    tl.to(textRef.current, {
      scale: 100,
      opacity: 0,
      ease: "power2.in",
    });
    tl.to(
      introRef.current,
      {
        y: 20,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "back.out(2.5)",
        duration: 0.5,
      },
      "-=0.3",
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      <h1
        ref={textRef}
        className="text-[10vw] font-black text-white select-none"
      >
        WHO AM I
      </h1>

      <div
        ref={introRef}
        className="absolute inset-0 -z-10 flex flex-col items-center justify-center"
      >
        <h2 className="text-4xl text-white ">Hi, I'm Amy Tiong</h2>
        <p className="text-white/30">Scroll to dive into my work</p>
      </div>
    </section>
  );
};

export default Hero;
