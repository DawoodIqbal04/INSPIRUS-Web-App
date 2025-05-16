import React from "react";
import ExtendBox from "./ui/ExtendBox";
import { workingProcess } from "@/data/data";
import Marker from "./ui/Marker";

const WorkingProcess = () => {
  return (
    <section className="pb-20">
      <div>
        <Marker
          title="Our Working Process"
          desc="Your Trusted Step-by-Step Roadmap to Turning Dreams into Achievements"
        />
      </div>
      <div className="flex flex-col items-center gap-8 mt-20">
        {workingProcess.map((item, index) => (
            <ExtendBox
              key={index}
              index={item.index}
              title={item.title}
              desc={item.desc}
            />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
