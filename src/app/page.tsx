import CasesStudies from "@/components/CaseStudies";
import Company from "@/components/Company";
import Hero from "@/components/Hero";
import Proposal from "@/components/Proposal";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center mx-auto px-5 bg-whital">
      <Hero />
      <Company />
      <Services />
      <Proposal />
      <CasesStudies />
    </main>
  );
}
