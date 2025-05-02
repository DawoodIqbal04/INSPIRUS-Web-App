import { grotesk } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiFacebook, TfiLinkedin, TfiGithub } from "react-icons/tfi";
import Button from "./Button";

const Footer = () => {
  return (
    <section className="pt-20 bg-whital px-6">
      <div className="w-full h-[80vh] bg-dark rounded-t-[45px] lg:p-14 p-8 lg:pt-0 pt-12">
        <div className="w-full flex lg:flex-row md:flex-col lg:gap-0 gap-5 items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="overflow-hidden">
              <Image
                src={"/footerLogo.svg"}
                alt="logo"
                height={100}
                width={60}
              />
            </div>
            <div className="overflow-hidden flex items-center justify-center">
              <h1
                className={`${grotesk.className} text-5xl text-white font-semibold`}
              >
                Inspirus
              </h1>
            </div>
          </div>
          <div
            className={`flex items-center justify-center text-white ${grotesk.className} `}
          >
            <ul className="flex items-center justify-center gap-6 tracking-wide overflow-hidden">
              <li className=" relative footLinks">
                <Link href={""}>About Us</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Services</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Use Cases</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Pricing</Link>
              </li>
              <li className=" relative footLinks">
                <Link href={""}>Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
              }
              className="w-8 h-8 bg-white hover:bg-[#0A66C2] rounded-full flex items-center justify-center transition-all text-dark hover:text-white"
            >
              <TfiLinkedin size={17} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
              }
              className="w-8 h-8 bg-white hover:bg-gray-700 rounded-full flex items-center justify-center transition-all text-dark hover:text-white"
            >
              <TfiGithub size={17} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/muhammad-dawood-iqbal-bb469b29a/"
              }
              className="w-8 h-8 bg-white hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-all text-dark hover:text-white"
            >
              <TfiFacebook size={17} />
            </Link>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center justify-between lg:mt-10 md:mt-16 ">
            <div className={`${grotesk.className} lg:w-[25%] text-white flex flex-col lg:items-start items-center gap-5`}>
                <h1 className="text-primary text-2xl">Contact Us</h1>
                <p>Email: examplemail.com</p>
                <p>Phone: +123 456 789</p>
                <p>Address: 1234 Street Name, City Name, Country Name</p>
            </div>
            <div className="lg:w-[65%] w-full lg:mt-0 mt-20 h-48 px-10 flex justify-between items-center rounded-2xl bg-[#292A32] ">
              <input type="text" placeholder="Email" className="w-[50%] py-5 px-10 text-white focus:outline-none rounded-2xl border border-whital" />
              <Button link="" otherClass=" w-[45%] h-16 rounded-lg bg-primary text-dark " title="Subscribe To News" secondColor="bg-white" />
            </div>
        </div>
        <div className={`${grotesk.className} w-full border-t text-white border-white lg:mt-10 mt-20 pt-5 flex items-center justify-center` }>
            <h1 className=" group">2025 INSPIRUS - Made With 💚 By <Link target="_blank" href={'https://dawood-iqbal.vercel.app'} className="underline group-hover:text-primary">Muhammad Dawood Iqbal</Link></h1>
            <h1></h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
