import React from "react";
import ServiceCard from "./ui/ServiceCard";
import Marker from "./ui/Marker";

const Services = () => {
  return (
    <section>
      <div>
        <Marker title="Services" desc="At our creative software agency, we offer a range of services to help businesses grow and succeed online. These services include" />
      </div>
      <div className="grid grid-cols-2 gap-x-7 gap-y-10 py-20">
        <ServiceCard
          bgColor="bg-[#E8E8E8]"
          title1="Web Design &"
          title2="Development"
          buttonColor="dark"
          markBg="primary"
          arrowColor="#E8E8E8"
          image="/service01.svg"
          buttonText="dark"
          hoverBgColor="bg-primary"
        />
        <ServiceCard
          bgColor="bg-primary"
          title1="Website"
          title2="Redesign"
          buttonColor="dark"
          markBg="[#E8E8E8]"
          arrowColor="#B9FF66"
          image="/service02.svg"
          buttonText="dark"
          hoverBgColor="bg-[#E8E8E8]"
        />
        <ServiceCard
          bgColor="bg-dark"
          title1="Search Engine"
          title2="Optimization"
          buttonColor="whital"
          markBg="[#E8E8E8]"
          arrowColor="#191A23"
          image="/service03.svg"
          buttonText="white"
          hoverBgColor="bg-[#E8E8E8]"
        />
        <ServiceCard
          bgColor="bg-[#E8E8E8]"
          title1="E-Commerce"
          title2="Store"
          buttonColor="dark"
          markBg="primary"
          arrowColor="#E8E8E8"
          image="/service04.svg"
          buttonText="dark"
          hoverBgColor="bg-primary"
        />
        <ServiceCard
          bgColor="bg-primary"
          title1="Shopify Store"
          title2="Creation"
          buttonColor="dark"
          markBg="[#E8E8E8]"
          arrowColor="#B9FF66"
          image="/service05.svg"
          buttonText="dark"
          hoverBgColor="bg-[#E8E8E8]"
        />
        <ServiceCard
          bgColor="bg-dark"
          title1="Shopify Store"
          title2="Management"
          buttonColor="whital"
          markBg="[#E8E8E8]"
          arrowColor="#191A23"
          image="/service06.svg"
          buttonText="white"
          hoverBgColor="bg-[#E8E8E8]"
        />
      </div>
    </section>
  );
};

export default Services;
