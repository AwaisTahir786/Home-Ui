"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swiperbox from "./Swiperbox";


function Testimonial() {
  
  return (
    <section className="testimonial mt-[80px] xl:mt[200px] relative z-20" id="testimonials">
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">

        <div className="flex flex-col items-center pt-[88px] pb-[110px]">
            <h2 className="testimonial__title h2 mb-9 text-center">What clients say</h2>
                        {/* slider */}

            <div className="w-full">
          <div className="testimonial__slider swiper h-[400px]">
            <div className="swiper-wrapper">
             
              <Swiper
                
                loop={true}

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                pagination={{ clickable: true }}
                slidesPerView={3}
                breakpoints={{
                    320:{
                        slidesPerView: 1
                    },
                    960:{
                        slidesPerView:2
                    },
                    1200:{
                        slidesPerView:3
                    },
                    

                }
                    
                }
              >
                <SwiperSlide>
                  {/* box 1 */}
                  <Swiperbox image="/assets/testimonial/01.png" name="Nattasha Mith" location="Greenville, USA" />
                </SwiperSlide>

                <SwiperSlide>
                  {/* box 2 */}

                  <Swiperbox image="/assets/testimonial/02.png" name="Jessica White" location="Oak Ridge, USA" />
                </SwiperSlide>
                <SwiperSlide>
                  {/* box 2 */}

                  <Swiperbox image="/assets/testimonial/03.png" name="Mike Davis" location="Berlin, Germany"  />
                </SwiperSlide>
                <SwiperSlide>
                  {/* box 2 */}

                  <Swiperbox image="/assets/testimonial/04.png" name="Olivia Wilson" location="Blue Ridge, France"  />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* Swiper Pafination */}
          </div>
        </div>
        </div>

       
      </div>
    </section>
  );
}

export default Testimonial;
