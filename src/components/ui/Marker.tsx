import { grotesk, sans } from "@/font";
import React, {useRef} from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


const Marker = ({title, desc} : {title: string, desc: string}) => {

  const markerRef = useRef(null);


  useGSAP(() => {
    gsap.to(markerRef.current, {
      x: 300,
      duration: 1,
      ease: "power2.inOut",
      display: 'none',
      scrollTrigger: {
        trigger: markerRef.current,
        start: "top 80%",

      }
    })
  });

  return (
    <div className="flex items-center justify-start gap-10">
      <h1 className={`text-4xl ${grotesk.className} relative overflow-hidden flex items-center justify-center`}>
        <mark className="bg-primary lg:px-2 px-4 rounded-lg ">{title}</mark>
        <div ref={markerRef} className="absolute w-full h-full bg-whital top-0"></div>
      </h1>
      <p className={`${sans.className} tracking-wide lg:w-[45%] w-[80%]`}>
        {desc}
      </p>
    </div>
  );
};

export default Marker;
