import { Outlet, useLocation } from "react-router-dom"
import LandingHeader from "./header"
import LandingFooter from "./footer"
import ScrollToTop from "../../lib/utils/scrollTop"

const LandingLayout = () => {
  const location = useLocation();
  return (
    <div>
      <ScrollToTop />
        <LandingHeader/>
        <Outlet key={location.pathname}/>
        <LandingFooter/>
    </div>
  )
}

export default LandingLayout