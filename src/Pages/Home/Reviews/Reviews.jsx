import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper and other css styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="w-full h-auto my-10">
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="---What Our Clients Say---"
      />
      {/* carousel div */}
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 my-5 flex flex-col items-center gap-5">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="w-40 h-40" />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400 font-bold">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
