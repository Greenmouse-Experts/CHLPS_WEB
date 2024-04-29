import { FaCircleChevronRight } from "react-icons/fa6"
import { Link } from "react-router-dom"

const GetStarted = () => {
  return (
    <div className="p-5 lg:py-8 flex items-center drop-shadow-md rounded-[6px] bg-background">
        <div className="text-white">
            <p className="fw-500 text-pri">New Here?</p>
            <p className="mt-4 mb-6 text-xl">We&apos;re glad you&apos;ve joined us!</p>
            <p className="mb-4 fs-500 fw-500">Take a look at our membership plan guide to get started!</p>
            <Link to={'user/plans'} className="flex mt-3 justify-center text-black py-2 gap-x-2 items-center fw-500 bg-white rounded-full">Get Started <FaCircleChevronRight/></Link>
        </div>
    </div>
  )
}

export default GetStarted