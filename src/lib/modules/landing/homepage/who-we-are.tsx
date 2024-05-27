import { Link } from "react-router-dom";
import BtnContent from "../../../components/btn-content";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const WhoWeAre = () => {
  return (
    <div className="section lg:py-6 lg:pb-12 bg-[url(https://res.cloudinary.com/greenmouse-tech/image/upload/v1716823030/chlps/Group_48097537_h41y8i.png)] bg-cover">
      <div className="box">
        <div className="lg:flex items-center">
          <div className="lg:w-6/12 relative lg:-left-12">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1716823036/chlps/Group_3_1_dg7s6q.png"
              alt="who are we"
              className="w-full"
            />
          </div>
          <div className="lg:w-6/12">
            <p className="tracking-[5px] text-primary fs-400 fw-500">
              WHO WE ARE
            </p>
            <p className="mt-4 fw-600 text-2xl lg:text-4xl">
              Leading the Way in Loss Prevention Excellence
            </p>
            <p className="my-6 lg:my-12">
              The Association of Chartered Loss Prevention Specialists is
              Canada's standard-setting professional body for the promotion,
              development, and advancement of knowledge, research, education,
              training, professional certifications, and code of ethics in Loss
              Prevention in all its ramifications in Canada, and
              internationally.
            </p>
            <div>
              <Link to={""} className="text-primary fs-500 fw-500">
                <BtnContent
                  name="Explore More"
                  icon={
                    <BsArrowUpRightCircleFill className="text-primary text-lg" />
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
