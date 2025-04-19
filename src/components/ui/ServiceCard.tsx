import { grotesk } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const ServiceCard = ({
  bgColor,
  title1,
  title2,
  image,
  buttonColor,
  markBg,
  arrowColor,
  buttonText,
  hoverBgColor,
}: {
  bgColor: string;
  title1: string;
  title2: string;
  image: string;
  buttonColor: string;
  markBg: string;
  arrowColor: string;
  buttonText: string;
  hoverBgColor: string;
}) => {
  return (
    <div
      className={`card relative w-[46.5vw] h-68 ${bgColor} rounded-[45px] border border-dark p-14 flex justify-between items-center drop-shadow-[0_6px_rgba(0,0,0,0.6)] overflow-hidden hover:[&>.child]:bottom-0 hover:[&>.child]:rounded-none`}
    >
      <div className="w-full h-full z-10 flex items-center justify-between">
        <div className="flex flex-col items-start gap-16">
          <div className={`${grotesk.className} title`}>
            <h1 className="title flex flex-col text-lg">
              <mark className={`marker px-2 rounded-md w-max bg-${markBg}`}>
                {title1}
              </mark>
              <mark className={`marker px-2 rounded-md w-max bg-${markBg}`}>
                {title2}
              </mark>
            </h1>
          </div>
          <div>
            <Link href={""} className="link flex items-center gap-3">
              <div
                className={`h-10 w-10 bg-${buttonColor} rounded-full flex items-center justify-center`}
              >
                <FaArrowUp
                  size={26}
                  className="arrow rotate-45"
                  color={arrowColor}
                />
              </div>
              <p className={`${grotesk.className} text-${buttonText} text-lg`}>
                Service Info
              </p>
            </Link>
          </div>
        </div>
        <div className="h-44 w-48 object-center object-cover">
          <Image
            src={image}
            alt=""
            height={0}
            width={0}
            className={`w-full h-full `}
          />
        </div>
      </div>
      <div
        style={{
          transition: "all 0.3s ease-in-out",
        }}
        className={`child absolute w-full h-full ${hoverBgColor} bottom-[-100%] rounded-[50%] left-0`}
      ></div>
    </div>
  );
};

export default ServiceCard;
