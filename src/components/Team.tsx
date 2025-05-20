import React from "react";
import Marker from "./ui/Marker";
import { teamMembers } from "@/data/data";
import TeamCard from "./ui/TeamCard";

const Team = () => {

  return (
    <section className="py-20">
      <div>
        <Marker
          title="Our Team"
          desc="Meet Our Skilled And Exceptoinal Team Who Crafts Your Next Big Idea Into Digital Reality."
        />
      </div>
      <div className="w-full mt-20">
        <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-10">
          {teamMembers.map(({ name, image, position, desc }, index) => (
            <div key={index}>
              <TeamCard name={name} image={image} position={position} desc={desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
