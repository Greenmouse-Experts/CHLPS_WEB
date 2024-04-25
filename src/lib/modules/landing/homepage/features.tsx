import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { PiArrowUpRightBold } from "react-icons/pi";

const LandingFeatures = () => {
  return (
    <div className="section">
      <div className="box lg:py-6">
        <div className="lg:flex gap-6 lg:gap-12">
          <div className="lg:w-6/12">
            <div className="w-full h-[430px] md:h-[480px] lg:h-[570px] bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713789516/chlps/Vector_3_yaa5av.png)] bg-fit flex items-end p-8">
              <div className="relative text-white p-6 lg:px-8 w-full rounded-[20px]">
                <div className="relative z-10 pb-7">
                  <p className="lg:text-2xl fw-500">Comprehensive Strategies</p>
                  <p className="mt-6 lg:text-lg">
                    Loss Prevention operations and management in all its
                    ramifications
                  </p>
                  <div className="flex justify-end">
                    <div className="absolute bottom-0 righ-5 backdrop-blur-lg w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] circle place-center cursor-pointer shadow-lg">
                      <PiArrowUpRightBold className="text-3xl lg:text-4xl" />
                    </div>
                  </div>
                </div>
                <div className="backdrop-blur-sm rounded-[20px] bg-white/30 top-0 left-0 absolute z-0 w-full h-full"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12">
            <div className="flex gap-x-3 items-center relative lg:-left-[15%] top-6">
              <IoShieldCheckmarkOutline className="text-primary shrink-0 text-xl" />
              <p className="fw-500 lg:whitespace-nowrap lg:text-lg">
                We provide a unique set of benefits to support your commitment!
              </p>
            </div>
            <div className="flex mt-[58px] gap-1 lg:gap-4">
              <div className="w-auto grow">
                <div className="bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713789464/chlps/Rectangle_33_szpqkq.png)] bg-cover w-full h-[480px] rounded-[23px]">
                  <div className="w-full h-full flex items-end px-1 py-6 lg:p-6">
                    <div className="relative w-full pb-20 text-white">
                      <p className="fw-500 fs-400 lg:text-2xl text-center">
                        Development
                      </p>
                      <div className="flex justify-end">
                        <div className="absolute bottom-0 righ-5 backdrop-blur-lg w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] circle place-center cursor-pointer shadow-lg">
                          <PiArrowUpRightBold className="text-3xl lg:text-4xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[28%] hover:w-[43%] duration-100">
                <div className="bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713789465/chlps/Rectangle_34_pkw14z.png)] bg-cover w-full h-[480px] rounded-[23px]">
                  <div className="w-full h-full flex items-end px-1 py-6 lg:p-6">
                    <div className="relative w-full pb-20 text-white">
                      <p className="fw-500 fs-300 lg:text-2xl text-center">
                        Knowledge
                      </p>
                      <div className="flex justify-end">
                        <div className="absolute bottom-0 righ-5 backdrop-blur-lg w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] circle place-center cursor-pointer shadow-lg">
                          <PiArrowUpRightBold className="text-3xl lg:text-4xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[28%] hover:w-[43%] duration-100">
                <div className="bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1713789465/chlps/Rectangle_35_neqajn.png)] bg-cover w-full h-[480px] rounded-[23px]">
                  <div className="w-full h-full flex items-end px-1 py-6 lg:p-6">
                    <div className="relative w-full pb-20 text-white">
                      <p className="fw-500 fs-300 lg:text-2xl text-center">Training</p>
                      <div className="flex justify-end">
                        <div className="absolute bottom-0 righ-5 backdrop-blur-lg w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] circle place-center cursor-pointer shadow-lg">
                          <PiArrowUpRightBold className="text-3xl lg:text-4xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFeatures;
