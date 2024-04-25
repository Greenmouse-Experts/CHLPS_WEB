// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const TestimonySwipe = () => {
  const reviews = [
    {
      name: "Linda Morre",
      review:
        "Exceptional service! The team went above and beyond to deliver outstanding results. Highly recommend!",
      location: "Lagos, Nigeria",
    },
    {
      name: "Kelechi Abegnigo",
      review:
        "Exceptional service! The team went above and beyond to deliver outstanding results. Highly recommend!",
      location: "Kwara, Nigeria",
    },
    {
      name: "Victor Okata",
      review:
        "Exceptional service! The team went above and beyond to deliver outstanding results. Highly recommend!",
      location: "Ogun, Nigeria",
    },
  ];
  return (
    <div className="sm:pl-4">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[80%] lg:w-[450px]"
      >
        {reviews.map((item, i) => (
          <SwiperSlide
            key={i}
            className="text-white w-full px-2 md:px-8 py-6 lg:py-8 rounded-[12px] bg-[#260791] shadow-md"
          >
            <div>
              <div className="h-[140px] lg:h-[120px]">
                <p>{`"${item.review}"`}</p>
              </div>
              <div>
                <p className="text-[#FDB139] fw-600">{item.name}</p>
                <p>{item.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonySwipe;
