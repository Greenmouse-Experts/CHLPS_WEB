import Certification from "../../lib/modules/landing/homepage/certification";
import LandingFeatures from "../../lib/modules/landing/homepage/features";
import HeroSection from "../../lib/modules/landing/homepage/hero-section";
import JoinUs from "../../lib/modules/landing/homepage/join-us";
import Testimonials from "../../lib/modules/landing/homepage/testimonials";
import Unlocking from "../../lib/modules/landing/homepage/unlocking";
import WhoWeAre from "../../lib/modules/landing/homepage/who-we-are";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <Certification />
      <LandingFeatures />
      <Unlocking />
      <JoinUs />
      <Testimonials />
    </div>
  );
};

export default Homepage;
