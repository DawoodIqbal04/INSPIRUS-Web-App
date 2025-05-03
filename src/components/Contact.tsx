import React from "react";
import Marker from "./ui/Marker";
import { grotesk } from "@/font";
import Button from "./ui/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="py-20">
      <div>
        <Marker
          title="Contact Us"
          desc="Get in Touch with Us and Let's Start Building Your Digital Future Together!"
        />
      </div>
      <div className="w-full lg:min-h-[80vh] bg-[#e8e8e8] rounded-[45px] mt-20 md:p-20 p-10 relative ">
        <div
          className={`${grotesk.className} flex flex-col gap-5 h-full lg:w-[50%] w-full`}
        >
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" aria-required>
              Name*
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="px-8 py-5 lg:w-[90%] w-full bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email" aria-required>
              Email*
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="px-8 py-5 lg:w-[90%] w-full bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="mass" aria-required>
              Massege*
            </label>
            <textarea
              placeholder="Massege"
              name="mass"
              className="px-8 py-5 lg:w-[90%] w-full bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div>
            <Button
              link=""
              title="Send"
              secondColor="bg-primary"
              otherClass="lg:w-[90%] w-full h-16 bg-dark text-white hover:text-dark hover:border border-black rounded-lg"
            />
          </div>
        </div>
        <div className="lg:flex hidden">
          <Image
            src={"/contactImage.svg"}
            alt="Contact Image"
            width={390}
            height={500}
            className="absolute right-0 top-0  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
