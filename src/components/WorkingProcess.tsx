import { grotesk, sans } from "@/font";
import React from "react";
import ExtendBox from "./ui/ExtendBox";

const WorkingProcess = () => {
  return (
    <section className="pb-10">
      <div className="flex items-center justify-start gap-10">
        <h1 className={`text-4xl ${grotesk.className}`}>
          <mark className="bg-primary px-2 rounded-lg">
            Our Working Process
          </mark>
        </h1>
        <p className={`${sans.className} tracking-wide`}>
          Your Trusted Step-by-Step Roadmap to Turning Dreams
          <br /> into Achievements
        </p>
      </div>
      <div>
        <ExtendBox />
      </div>
    </section>
  );
};

export default WorkingProcess;
