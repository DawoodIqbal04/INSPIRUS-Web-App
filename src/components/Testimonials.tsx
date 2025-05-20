import React, { useRef } from "react";
import Marker from "./ui/Marker";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import test from "node:test";

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {

  const testRef = useRef(null)

  useGSAP(() => {
    gsap.to(testRef.current, {
      height: 0,
      borderBottomRightRadius: 50+'%',
      borderBottomLeftRadius: 50+'%',
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: testRef.current,
        start: 'top 20%',
      }

    })
  })

  return (
    <section className="testimonial py-20">
      <div>
        <Marker
          title="Testimonials"
          desc="Discover how our innovative solutions have empowered clients to bring bold ideas to life and elevate their digital presence."
        />
      </div>
      <div className="w-full relative">
        <div className="w-full flex flex-col justify-evenly lg:min-h-[90vh] md:h-[60vh] bg-dark rounded-[45px] overflow-hidden mt-20 ">
          <div>
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
          <div>
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
        <div ref={testRef} className="absolute w-full h-full bg-whital z-20 top-0 right-0"></div>
      </div>
    </section>
  );
};

export default Testimonials;
