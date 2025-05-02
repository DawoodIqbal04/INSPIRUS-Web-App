import React from "react";
import Marker from "./ui/Marker";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <section className="py-20">
      <div>
        <Marker
          title="Testimonials"
          desc="Discover how our innovative solutions have empowered clients to bring bold ideas to life and elevate their digital presence."
        />
      </div>
      <div className="w-full flex flex-col justify-evenly lg:min-h-[90vh] h-[60vh] bg-dark rounded-[45px] overflow-hidden mt-20 ">
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
    </section>
  );
};

export default Testimonials;
