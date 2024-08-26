import React from 'react';
import Button from '../components/Button';
import { AboutUs, AboutUsCard } from '../constants';

const About = () => {
  return (
    <section className="flex flex-col mt-16 px-4 md:px-16">
      {/* About */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold leading-[17.34px] text-justify font-jost">
            About
          </h3>
          <p className="mt-5 font-jost w-full md:w-[80%] lg:w-[60%] xl:w-[50%] text-[19px] font-normal leading-[25px] text-justify">
            {AboutUs[0].text}
          </p>
        </div>
        <div className="flex justify-end items-end w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mb-2 mt-6">
          <div className="flex gap-2">
            <Button className="text-white w-44 text-x font-light btn-bg-orange rounded-xl transition duration-300 hover:bg-orange-700" title="Learn More" />
            <Button className="text-white w-44 text-x font-light bg-dark-brown rounded-xl transition duration-300 hover:bg-brown-800" title="Service" />
          </div>
        </div>
      </div>

      {/* About Cards */}
      <div className="relative flex flex-col md:flex-row gap-8 justify-center items-center mt-16 mb-28">
        {/* Background Gradients */}
        <div className="absolute items-start justify-start gap-[45rem] inset-0 flex">
          <div className="ml-44 relative orange__gradient w-[460px] h-[60px] opacity-25"></div>
          <div className="relative orange__gradient w-[760px] h-[260px] opacity-25"></div>
        </div>

        {/* Content Divs */}
        <div className="flex flex-col 2xl:flex-row items-center justify-center gap-4 w-full md:w-[80%] lg:w-[90%] xl:w-[70%]">
          {/* Card 1 */}
          <div className="relative bg-orange-500/10 backdrop-blur-md sm:w-[70%] shadow-xl ring-1 ring-gray-900/5 w-full md:w-[100%] lg:w-[65%] h-auto md:h-[165px] flex items-center rounded-lg transition duration-300">
            <div className="p-1 w-[200px] md:w-[280px] h-[92px] md:h-[155px] rounded-lg overflow-hidden">
              <img
                src={AboutUsCard[0].titleImage}
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-between items-start ml-4 w-full">
              <div>
                <h3 className="font-jost font-bold text-lg md:text-xl sm:text-lg sm:mb-1 sm:mt-2 mb-3">{AboutUsCard[0].title}</h3>
                <p className="text-sm pr-2 md:text-base">{AboutUsCard[0].description}</p>
              </div>
              <Button className="text-white w-44 mt-2 mb-3 ml-28 text-sm md:text-x font-light bg-dark-brown rounded-xl transition duration-300 hover:bg-brown-800" title="Read More" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-orange-500/10 sm:w-[70%] backdrop-blur-md flex-col shadow-xl ring-1 ring-gray-900/5 w-full md:w-[100%] lg:w-[65%] h-auto md:h-[165px] flex items-start justify-start rounded-lg transition duration-300">
            <div className="flex mt-5 pl-4 md:pl-8">
              <h3 className="font-jost text-3xl md:text-4xl font-extrabold">15%</h3>
              <p className="font-jost mt-2 md:mt-3 sm:mt:2 ml-3 font-bold text-lg md:text-xl">Discount</p>
            </div>
            <p className="mt-3 pb-3 pl-4 pr-2 md:pl-8 text-sm md:text-base">Don't miss out on these incredible savings. Shop now and embrace the elegance of Ethiopian fashion for less!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;