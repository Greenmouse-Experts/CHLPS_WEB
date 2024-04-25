import { Link } from "react-router-dom";
import BtnContent from "../../../components/btn-content";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import pattern from '../../../../assets/pattern.svg'

const Certification = () => {
  return (
    <div className="relative pt-8">
      <div className="bg-[#1C1C1C]">
        <div className="section">
          <div className="box">
            <div className="lg:flex flex-row-reverse gap-x-12 items-center">
              <div className="lg:w-6/12">
                <img
                  src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1713789464/chlps/Group_48097535_tgntyq.png"
                  alt="certificate"
                  className="w-full"
                />
              </div>
              <div className="lg:w-6/12 text-white mt-3 lg:mt-0">
                <p className="tracking-[5px] text-pri fs-400 fw-500">
                  CERTIFICATION
                </p>
                <p className="mt-4 fw-600 lg:text-4xl lg:w-9/12">
                  Our Current Certification Programs
                </p>
                <p className="my-6 lg:my-9">
                  In the corporate security and Loss Prevention industry, we
                  work in a world where we always have to stay one step ahead of
                  the adversary. So do we. We are constantly striving to meet
                  the requirements of ANSI/ISO/IEC Standard 17024 – the global
                  benchmark for certifying personnel. Our current  certification
                  programs are listed below.
                </p>
                <div>
                  <Link to={""} className="text-pri fs-500 fw-500">
                    <BtnContent
                      name="Apply Now"
                      icon={
                        <BsArrowUpRightCircleFill className="text-pri text-lg" />
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={pattern} alt="pattern" className="absolute w-12 lg:w-24 top-2 lg:-top-4 left-6"/>
    </div>
  );
};

export default Certification;
