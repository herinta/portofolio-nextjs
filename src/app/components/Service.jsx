import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] text-white">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="block mb-2 text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <ServiceCard
            title="Create mobile and website UI/UX designs"
            details="We prioritize unique and engaging user experiences. Our design team creates stunning looks and interactions to ensure users have a great experience."
            icon="/images/user-interface.png"
          />
          <ServiceCard
            title="Create Custom Website"
            details="Create a dynamic and responsive website using ReactJs or php technology with firebase or sql database."
            icon="/images/coding.png"
             
          />
          <ServiceCard
            title="Deploying the Websites"
            details="Hosting services that are ready to take your web to the next level"
            icon="/images/cloud-server.png"
              
            
          />
         
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="bg-[#181818] mb-8 rounded-[20px]  p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div
            className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl bg-primary`}
          >
            <Image 
              src={icon}
              width={46}
              height={46}/>
          </div>
          <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
