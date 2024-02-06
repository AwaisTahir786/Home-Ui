import React, { useEffect } from "react";

function GridItem({text,title}:any) {
    return(
        <div className='stats__item text-center xl:border-r xl:border-accent'>
        <h3 className='text-[64px] lg:text-[84px] leading-none font-primary text-accent'>{title}</h3>
        <p>{text}</p>

    </div>
    )
    
}

function Stats() {
    

  return (
    <section className='stats mt-[80px] xl:mt-[150px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]'>
        <div className='container mx-auto'>
            {/* grid */}
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-12'>
                {/* grid item 1*/}
                <GridItem title="12" text="Years Of Experience"/>
                 {/* grid item 2*/}
                 <GridItem title="85" text="Projects Completed"/>
                  {/* grid item 3*/}
                  <GridItem title="15" text="Active Projects"/>
                 {/* grid item 4*/}
                 <GridItem title="95" text="Happy Customers"/>
                

            </div>

        </div>
    </section>
  )
}

export default Stats;