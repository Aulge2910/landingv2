"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

interface TypingEffectProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  pauseTime?: number;
}
    const Footer = ( {text,className,typingSpeed =0.1,pauseTime =1}:TypingEffectProps) => {
        const containerRef = useRef<HTMLDivElement>(null);
           const textRef = useRef<HTMLDivElement>(null);
            
           useGSAP(()=> {
             const styleEl = document.createElement("style");
             styleEl.textContent = `
                @keyframes blink {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
                `;
                 document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
           useGSAP(()=> {
            if (!containerRef.current || !typingSpeed || !pauseTime) return;

    const chars = containerRef.current.querySelectorAll("span.char");
    const cursor = containerRef.current.querySelector("span.cursor");

    gsap.set(chars, { opacity: 0 });
    gsap.set(cursor, { opacity: 1 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

   
    chars.forEach((char, i) => {
      tl.to(
        char,
        {
          opacity: 1,
          duration: 0.3,
          ease: "power1.out",
        },
        i * typingSpeed
      );
    });

    tl.to({}, { duration: pauseTime });

    chars.forEach((char, i) => {
      tl.to(
        char,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
        },
        pauseTime +
          typingSpeed * chars.length +
          typingSpeed * (chars.length - 1 - i)
      );
    });

    tl.to({}, { duration: 0.5 });

    return () => {
      tl.kill();
      gsap.set(chars, { opacity: 1 });
      gsap.set(cursor, { opacity: 1 });
    };
  }, [text, typingSpeed, pauseTime]);
       
      return (
        <section className="relative w-full h-full flex  flex-col items-center justify-center min-h-screen bg-black text-white">
          <span
            ref={containerRef}
            className={`inline-block text-2xl lg:text-7xl ${className}`}
            style={{ whiteSpace: "pre" }}
          >
            {text.split("").map((char, i) => (
              <span key={i} className="char" style={{ opacity: 0 }}>
                {char}
              </span>
            ))}

            <span
              className="cursor"
              style={{
                marginLeft: "4px",
                display: "inline-block",
                animation: "blink 1s step-end infinite",
              }}
            >
              |
            </span>
          </span>
          <div className="h-8" />
          <p className="text-gray-300">60-17-817-0634</p>
          <p className="text-gray-300">freddieng699@gmail.com</p>
        </section>
      );
    };


export default Footer;
