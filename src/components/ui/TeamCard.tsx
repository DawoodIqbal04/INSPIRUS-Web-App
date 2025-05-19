import { grotesk, sans } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiLinkedin } from "react-icons/tfi";

const TeamCard = ({image, name, position, desc} : {image: string, name: string, position: string, desc: string}) => {
  return (
    <div className="teamCard lg:w-[30vw] lg:h-[65vh] rounded-[45px] bg-[#e8e8e8] p-14 flex flex-col items-center gap-5 border border-dark shadow-[0_5px_rgba(0,0,0,0.8)] ">
      <div className="h-[50%] w-full flex gap-28 md:items-start md:justify-between ">
        <div className="flex md:flex-row flex-col items-end md:gap-5 gap-1 w-full">
          <Image
            src={image}
            alt={''}
            height={100}
            width={100}
          />
          <div className="flex flex-col items-start w-full">
            <div className="">
              <h4 className={`${grotesk.className} text-lg font-medium `}>
                {name}
              </h4>
            </div>
            <div className="">
              <p className={`${sans.className} text-sm`}>{position}</p>
            </div>
          </div>
        </div>
        <div className="w-max">
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
            }
            className="w-8 h-8 bg-dark hover:bg-blue-600 rounded-full flex items-center justify-center transition-all text-primary hover:text-white"
          >
            <TfiLinkedin size={17} />
          </Link>
        </div>
      </div>
      <div className=" h-[50%] w-full border-t border-dark ">
        <p className={`${grotesk.className} mt-7`}>{desc} </p>
      </div>
    </div>
  );
};

export default TeamCard;
