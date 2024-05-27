import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import { register } from "swiper/element/bundle";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import BtnContent from "../../../components/btn-content";
import { GoArrowUpRight } from "react-icons/go";
// register Swiper custom elements
register();

const HeroSwipe = () => {
  return (
    <div>
      <Swiper
        effect={"fade"}
        autoplay={{ delay: 6000 }}
        modules={[Autoplay, EffectFade]}
        className="h-[570px] 2xl:h-[610px]"
      >
        <SwiperSlide>
          <div className="relative bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713786509/chlps/Rectangle_48_2_1_u0uhdn.png)] bg-gray-700 bg-center bg-cover">
            <div className="box h-[570px] 2xl:h-[610px]">
              <div className="flex h-full items-center">
                <div>
                  <p className="text-pri tracking-[18px] fs-300 lg:fs-400 fw-600">
                    EMPOWERMENT
                  </p>
                  <p className="mt-5 text-4xl lg:text-6xl fw-600 lg:w-6/12 text-white">
                    Empowering Excellence in Loss Prevention
                  </p>
                  <p className="mt-8 lg:mt-12 lg:w-6/12 text-white">
                    The Association of Chartered Loss Prevention Specialists
                    (CHLPS) is dedicated to empowering excellence in the field
                    of loss prevention.
                  </p>
                  <div className="mt-8 lg:mt-6 flex gap-x-4">
                    <Link
                      to={""}
                      className="btn-primary fs-500 rounded-full px-6 py-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      to={"/auth/register"}
                      className="btn-primary fs-500 bg-white !text-primary hover:!text-white rounded-full px-6 py-2"
                    >
                      <BtnContent name="Apply Now" icon={<GoArrowUpRight />} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713873038/chlps/Rectangle_50_uplxwc.png)] bg-gray-700 bg-cover bg-center">
            <div className="box h-[570px] 2xl:h-[610px]">
              <div className="flex h-full items-center">
                <div>
                  <p className="text-pri tracking-[18px] fs-300 lg:fs-400 fw-600">
                    EMPOWERMENT
                  </p>
                  <p className="mt-5 text-4xl lg:text-6xl fw-600 lg:w-6/12 text-white">
                    Empowering Excellence in Loss Prevention
                  </p>
                  <p className="mt-8 lg:mt-12 lg:w-6/12 text-white">
                    The Association of Chartered Loss Prevention Specialists
                    (CHLPS) is dedicated to empowering excellence in the field
                    of loss prevention.
                  </p>
                  <div className="mt-8 lg:mt-6 flex gap-x-4">
                    <Link
                      to={""}
                      className="btn-primary fs-500 rounded-full px-6 py-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      to={"/auth/register"}
                      className="btn-primary fs-500 bg-white !text-primary hover:!text-white rounded-full px-6 py-2"
                    >
                      <BtnContent name="Apply Now" icon={<GoArrowUpRight />} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713873043/chlps/Rectangle_51_l2yzdt.png)] bg-gray-700 bg-cover bg-center">
            <div className="box h-[570px] 2xl:h-[610px]">
              <div className="flex h-full items-center">
                <div>
                  <p className="text-pri tracking-[18px] fs-300 lg:fs-400 fw-600">
                    EMPOWERMENT
                  </p>
                  <p className="mt-5 text-4xl lg:text-6xl fw-600 lg:w-6/12 text-white">
                    Empowering Excellence in Loss Prevention
                  </p>
                  <p className="mt-8 lg:mt-12 lg:w-6/12 text-white">
                    The Association of Chartered Loss Prevention Specialists
                    (CHLPS) is dedicated to empowering excellence in the field
                    of loss prevention.
                  </p>
                  <div className="mt-8 lg:mt-6 flex gap-x-4">
                    <Link
                      to={""}
                      className="btn-primary fs-500 rounded-full px-6 py-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      to={"/auth/register"}
                      className="btn-primary fs-500 bg-white !text-primary hover:!text-white rounded-full px-6 py-2"
                    >
                      <BtnContent name="Apply Now" icon={<GoArrowUpRight />} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713873042/chlps/Rectangle_52_i3axj6.png)] bg-gray-700 bg-cover bg-center">
            <div className="box h-[570px] 2xl:h-[610px]">
              <div className="flex h-full items-center">
                <div>
                  <p className="text-pri tracking-[18px] fs-300 lg:fs-400 fw-600">
                    EMPOWERMENT
                  </p>
                  <p className="mt-5 text-4xl lg:text-6xl fw-600 lg:w-6/12 text-white">
                    Empowering Excellence in Loss Prevention
                  </p>
                  <p className="mt-8 lg:mt-12 lg:w-6/12 text-white">
                    The Association of Chartered Loss Prevention Specialists
                    (CHLPS) is dedicated to empowering excellence in the field
                    of loss prevention.
                  </p>
                  <div className="mt-8 lg:mt-6 flex gap-x-4">
                    <Link
                      to={""}
                      className="btn-primary fs-500 rounded-full px-6 py-2"
                    >
                      Learn More
                    </Link>
                    <Link
                      to={"/auth/register"}
                      className="btn-primary fs-500 bg-white !text-primary hover:!text-white rounded-full px-6 py-2"
                    >
                      <BtnContent name="Apply Now" icon={<GoArrowUpRight />} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwipe;
