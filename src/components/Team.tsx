import React, { useRef } from "react";
import Marker from "./ui/Marker";
import { teamMembers } from "@/data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamCard from "./ui/TeamCard";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const teamRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const positionRef = useRef(null);
  const linkRef = useRef(null);

  useGSAP(() => {
    gsap.from('.teamCard', {
      y: 70,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.teamCard',
        start: "top 60%",
        markers: true,
      },
    });
    
    gsap.from(imageRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: '.teamCard',
        start: "top 60%",
      },
    })
      
    gsap.from(nameRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })
      
      gsap.from(positionRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })
      
      gsap.from(descRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      })
      
      gsap.from(linkRef.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 60%",
        },
      });
  });

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
