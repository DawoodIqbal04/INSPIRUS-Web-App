'use client'

import CasesStudies from "@/components/CaseStudies";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Proposal from "@/components/Proposal";
import Services from "@/components/Services";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import WorkingProcess from "@/components/WorkingProcess";


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.sin((t * Math.PI) / 2),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative flex flex-col justify-center mx-auto px-6 bg-whital">
      <Hero />
      <Company />
      <Services />
      <Proposal />
      <CasesStudies />
      <WorkingProcess />
    </main>
  );
}
