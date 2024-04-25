import { IoIosCheckmarkCircle } from "react-icons/io";

const JoinUs = () => {
  const benefits = [
    "4K Active Members",
    "2 Professional Certifications",
    "750+ Certified Members",
    "37+ Countries",
  ];
  return (
    <div className="section">
      <div className="box">
        <div className="rounded-[19px] bg-[#1C1C1C] p-8 lg:flex items-center gap-x-8 lg:gap-x-16">
          <div className="lg:w-5/12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1713789467/chlps/Rectangle_43_kdpvbw.png"
              alt="join us"
              className="w-full max-h-[360px] object-cover"
            />
          </div>
          <div className="lg:w-7/12 text-center lg:text-left text-white mt-5 lg:mt-0">
            <p className="fw-600 text-2xl lg:text-3xl">
              Here&apos;s Why You Should Join Us
            </p>
            <p className="mt-6 lg:pr-6">
              Our members gain knowledge from lifelong learning they receive
              recognition for their accomplishments and are part of a community
              that feels informed empowered and supported throughout their
              career
            </p>
            <div className="mt-4 border-t py-7 lg:pb-0 lg:pt-7 border-[#4B4B4B] grid lg:grid-cols-2 gap-4 lg:gap-8">
              {benefits.map((item) => (
                <div className="flex gap-x-2 items-center">
                  <IoIosCheckmarkCircle className="text-pri text-lg shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
