import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Cetagorys = () => {
  return (
    <div className="w-full h-auto">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[450px]"
      >
        <SwiperSlide>
          <img src={slider1} alt="slider one" className="mx-auto" />
          <h1 className="text-2xl font-bold text-center text-white -mt-16 uppercase">
            salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider two" className="mx-auto" />
          <h1 className="text-2xl font-bold text-center text-white -mt-16 uppercase">
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="slider three" className="mx-auto" />
          <h1 className="text-2xl font-bold text-center text-white -mt-16 uppercase">
            soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="slider four" className="mx-auto" />
          <h1 className="text-2xl font-bold text-center text-white -mt-16 uppercase">
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="slider five" className="mx-auto" />
          <h1 className="text-2xl font-bold text-center text-white -mt-16 uppercase">
            salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Cetagorys;
