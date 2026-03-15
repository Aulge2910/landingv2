// app/components/Hero.tsx
"use client";

import {  Card, Container } from "@/app/_components/PortfolioShowcase";

const Education = () => {
  return (
     
      <Container>
       
        <Card title="Education">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 w-full">
            <div className="min-w-full snap-center bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="space-y-10">
                {/* Degree */}
                <div className="group">
                  <h4 className="text-3xl font-black ">
                    Bachelor of Software Engineering | CGPA 3.85
                  </h4>
                  <p className="text-lg opacity-70 mt-1">
                    i-CATS, Kuching, Sarawak
                  </p>
                  <p className="text-sm  text-gray-200 mt-2">2022 — 2024</p>
                </div>

                {/* Divider Line */}
                <div className="h-4" />

                {/* Diploma */}
                <div className="group">
                  <h4 className="text-3xl font-black ">
                    Diploma in Software Engineering | CGPA 3.73
                  </h4>
                  <p className="text-lg opacity-70 mt-1">
                    i-CATS, Kuching, Sarawak
                  </p>
                  <p className="text-sm font-mono text-gray-200 mt-2">
                    2019 — 2021
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
        </Card>
      </Container>
 
  );
};
export default Education;
