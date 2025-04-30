import React from "react";
import Marker from "./ui/Marker";
import { grotesk } from "@/font";
import Button from "./ui/Button";
import Image from "next/image";

const Contact = () => {
  function formSetup() {
    var cb1 = document.getElementById("check1") as HTMLInputElement;
    var cb2 = document.getElementById("check2") as HTMLInputElement;
    var message = document.getElementById("message") as HTMLInputElement;

    if (cb1 && cb2) {
      cb1.checked = true;

      cb2.addEventListener("change", function () {
        if (cb2.checked) {
          cb1.checked = false;
          message.value =
            "We're interested in your services! Please contact us";
        } else {
          message.value = "";
          cb1.checked = true;
        }
      });
      cb1.addEventListener("change", function () {
        if (cb1.checked) {
          cb2.checked = false;
          message.value = "";
        } else {
          cb2.checked = true;
          message.value =
            "We're interested in your services! Please contact us";
        }
      });
    }
  }

  formSetup();

  return (
    <section className="py-20">
      <div>
        <Marker
          title="Contact Us"
          desc="Get in Touch with Us and Let's Start Building Your Digital Future Together!"
        />
      </div>
      <div className="w-full min-h-[80vh] bg-[#e8e8e8] rounded-[45px] mt-20 p-20 relative ">
        <div className={`${grotesk.className} flex flex-col gap-5 mt-10 h-full w-[50%]`}>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="name" aria-required>
              Name*
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="px-8 py-5 w-[90%] bg-white focus:outline-none border border-dark rounded-2xl"
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
              className="px-8 py-5 w-[90%] bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="mass" aria-required>
              Massege*
            </label>
            <textarea
              placeholder="Massege"
              name="mass"
              className="px-8 py-5 w-[90%] bg-white focus:outline-none border border-dark rounded-2xl"
            />
          </div>
          <div>
            <Button
              link=""
              title="Send"
              secondColor="bg-primary"
              otherClass="w-[90%] h-16 bg-dark text-white hover:text-dark rounded-lg"
            />
          </div>
        </div>
        <div> 
          <Image src={'/contactImage.svg'} alt="Contact Image" width={390} height={500} className="absolute right-0 top-0  object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
