
import Image from "next/image";
import { RiArrowRightSLine } from "@remixicon/react";
import React from "react";

function WorkItem({image}:any) {
  return (
    <div className="w-full max-w-[548px] h-full mx-auto">
      <Image
        src={image}
        alt="work image"
        width={600}
        height={600}
        className="mb-6"
      />
      <div className="flex justify-between items-center w-full">
        <div>
          <h3 className="h3">Modern Kitchen</h3>
          <p>Decor/Architecture</p>
        </div>
        <button className=" flex items-center justify-center bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full">
          <RiArrowRightSLine className="text-3xl text-primary pl-1" />
        </button>
      </div>
    </div>
  );
}

function Work() {


  return (
    <section className="work mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto xl:px-0">
        {/* text */}
        <div className="text-center mb-24">
            <h2 className="work__title h2 mb-4">Follow Our Projects</h2>
            <p className="work__subtitle max-w-3xl mx-auto border">It is a long established fact that a reader will be distracted by the of readable content of page lookingsat its layouts points.</p>
        </div>
        
        {/* grid */}
        <div className="work__grid grid grid-cols-1  xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
            {/*item 1 */}
            <WorkItem image="/assets/work/01.png"/>
            {/*item 2 */}
            <WorkItem image="/assets/work/02.png"/>
            {/*item 3 */}
            <WorkItem image="/assets/work/03.png"/>
            {/*item 4 */}
            <WorkItem image="/assets/work/04.png"/>
            </div>
      </div>
    </section>
  );
}

export default Work;
