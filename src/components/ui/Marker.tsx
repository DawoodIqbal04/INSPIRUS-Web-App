import { grotesk, sans } from "@/font";
import React from "react";

const Marker = ({title, desc} : {title: string, desc: string}) => {
  return (
    <div className="flex items-center justify-start gap-10">
      <h1 className={`text-4xl ${grotesk.className}`}>
        <mark className="bg-primary px-2 rounded-lg">{title}</mark>
      </h1>
      <p className={`${sans.className} tracking-wide w-[45%]`}>
        {desc}
      </p>
    </div>
  );
};

export default Marker;
