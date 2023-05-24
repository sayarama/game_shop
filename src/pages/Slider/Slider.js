import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RxAvatar } from "react-icons/rx";

function Slider() {
  return (
    <div className="text-black">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <div  className=" border-slate-400 border-solid bg-white border-2 rounded-lg shadow-xl w-full m-auto ">
                <div className="flex items-center gap-3">
                <RxAvatar className="text-5xl"/>
                <p>Iwan</p>
                </div>

                <div className="mt-5 font-bold text-xl">
                    <p>"Fast Respond, Aman dan Terpercaya mank"</p>
                </div>

                <div className="flex justify-end mt-10 w-full">
                    <div className="bg-blue-400 text-center  w-56 p-2 h-10 rounded-tl-lg">Buy Genshin Impact</div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div  className=" border-slate-400 border-solid bg-white border-2 rounded-lg shadow-xl w-full m-auto ">
                <div className="flex items-center gap-3">
                <RxAvatar className="text-5xl"/>
                <p>Iwan</p>
                </div>

                <div className="mt-5 font-bold text-xl">
                    <p>"Fast Respond, Aman dan Terpercaya mank"</p>
                </div>

                <div className="flex justify-end mt-10 w-full">
                    <div className="bg-blue-400 text-center  w-56 p-2 h-10 rounded-tl-lg">Buy Genshin Impact</div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div  className=" border-slate-400 border-solid bg-white border-2 rounded-lg shadow-xl w-full m-auto ">
                <div className="flex items-center gap-3">
                <RxAvatar className="text-5xl"/>
                <p>Iwan</p>
                </div>

                <div className="mt-5 font-bold text-xl">
                    <p>"Fast Respond, Aman dan Terpercaya mank"</p>
                </div>

                <div className="flex justify-end mt-10 w-full">
                    <div className="bg-blue-400 text-center  w-56 p-2 h-10 rounded-tl-lg">Buy Genshin Impact</div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div  className=" border-slate-400 border-solid bg-white border-2 rounded-lg shadow-xl w-full m-auto ">
                <div className="flex items-center gap-3">
                <RxAvatar className="text-5xl"/>
                <p>Iwan</p>
                </div>

                <div className="mt-5 font-bold text-xl">
                    <p>"Fast Respond, Aman dan Terpercaya mank"</p>
                </div>

                <div className="flex justify-end mt-10 w-full">
                    <div className="bg-blue-400 text-center  w-56 p-2 h-10 rounded-tl-lg">Buy Genshin Impact</div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div  className=" border-slate-400 border-solid bg-white border-2 rounded-lg shadow-xl w-full m-auto ">
                <div className="flex items-center gap-3">
                <RxAvatar className="text-5xl"/>
                <p>Iwan</p>
                </div>

                <div className="mt-5 font-bold text-xl">
                    <p>"Fast Respond, Aman dan Terpercaya mank"</p>
                </div>

                <div className="flex justify-end mt-10 w-full">
                    <div className="bg-blue-400 text-center  w-56 p-2 h-10 rounded-tl-lg">Buy Genshin Impact</div>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
