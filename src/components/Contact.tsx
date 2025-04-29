import React from "react";
import Marker from "./ui/Marker";
import { grotesk } from "@/font";

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
      <div className="w-full min-h-[100vh] bg-[#e8e8e8] rounded-[45px] mt-20 p-20">
          <div className={`${grotesk.className} mt-10 h-full w-[50%]`}>
    
          </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
