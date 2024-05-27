import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Unlocking = () => {
  const stages = [
    "Demonstrate a commitment to the highest standards of practice and conduct",
    "Enhance your professional reputation and employability.",
    "Significantly enhances and improves the performance of your organisation.",
  ];
  return (
    <div className="bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1716823031/chlps/Rectangle_52_jbhkwm.png)] bg-cover">
      <div className="section">
        <div className="box text-white">
          <div>
            <p className="fw-600 text-3xl text-center">
              Unlocking Lifelong Learning
            </p>
            <p className="fs-500 mt-3 lg:w-9/12 mx-auto text-center">
              We provide a unique set of benefits to support your commitment to
              lifelong learning best practice and demonstrate your enhanced
              professional profile.
            </p>
            <div className="mt-12 grid lg:grid-cols-3 gap-5">
              {stages.map((item, i) => (
                <div
                  className={`rounded-[13px] flex gap-x-2 p-4 lg:p-8 ${
                    i === 0 ? "bg-[#FDB139] text-black text-[15px]" : "bg-white text-black"
                  }`}
                >
                  {i === 0 ? (
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1716823031/chlps/speaker_1_yfdwuo.png"  alt="icon-img" className="w-12 h-12" />
                  ) : (
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1716823031/chlps/speaker_1_2_enqwkh.png" alt="icon-img" className="w-12 h-12" />
                  )}
                  {item}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 lg:mt-16">
              <Link to={""} className="text-primary flex gap-x-2 items-center">
                <span className="underline lg:text-lg fw-500">
                  Become a Member
                </span>
                <BsArrowUpRightCircleFill className="text-lg lg:text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlocking;
