import GetStarted from "../../lib/modules/user/dashboard/get-started"
import MyCertificates from "../../lib/modules/user/dashboard/my-certificates"
import QuickLinks from "../../lib/modules/user/dashboard/quick-links"
import UpcomingEvents from "../../lib/modules/user/dashboard/upcoming-events"

const UserDashboard = () => {
  return (
    <div>
        <div className="lg:flex justify-between items-stretch">
          <div className="lg:w-[60%]">
            <QuickLinks/>
          </div>
          <div className="lg:w-[37%]">
            <GetStarted/>
          </div>
        </div>
        <div className="mt-8 lg:flex gap-x-12">
          <div className="lg:w-[50%]">
            <UpcomingEvents/>
          </div>
          <div className="lg:w-[50%]">
            <MyCertificates/>
          </div>
        </div>
    </div>
  )
}

export default UserDashboard