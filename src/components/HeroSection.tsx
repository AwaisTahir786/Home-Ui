
import { RiArrowRightLine } from "@remixicon/react";
import React, { useEffect } from "react";


function HeroSection() {


  return (
    <div>
      <div className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        {/* grid */}
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y  fixed top-0 bottom-0 left-0 right-0"></div>

        {/* hero */}
        <section className="hero lg:bg-hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-fixed xl:rounded-bl-[290px] relative z-20 ">
          <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">

            {/* text */}
            <div className="hero__text flex flex-col items-center text-center w-[567px]  lg:items-start xl:text-left scroll-reveal">
              <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
              <p className="mb-8">
                There are many variations of the passages of Lorem Ipsum available, variations of the passages.
              </p>
              <button className="btn btn-primary mx-auto xl:mx-0">Get free estimation <RiArrowRightLine className="text-accent"/> </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
