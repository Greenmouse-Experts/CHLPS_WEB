import TestimonySwipe from "./testimony-swipe";

const Testimonials = () => {
  return (
    <div className="bg-[#F3F6FD]">
      <div className="section">
        <div className="box">
          <div className="lg:flex">
            <div className="lg:w-6/12">
              <p className="tracking-[5px] text-primary fs-400">TESTIMONIALS</p>
              <p className="mt-4 fw-600 text-2xl lg:text-4xl lg:w-9/12">
                Reviews from Our Stakeholders Globally.
              </p>
              <p className="my-6 lg:my-9">
                We provide a unique set of benefits to support your commitment
                to lifelong learning best practice and demonstrate your enhanced
                professional profile.
              </p>
            </div>
            <div className="lg:w-6/12">
              <TestimonySwipe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
