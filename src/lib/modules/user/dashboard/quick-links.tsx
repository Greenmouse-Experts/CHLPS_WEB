import HeaderText from "../../../components/header-text"
import LinksAccordion from "./small-comps/links-accordion"

const QuickLinks = () => {
  return (
    <div className="p-5 drop-shadow-md rounded-[6px] bg-white">
       <div className="fw-500 text-primary mb-4">
       <HeaderText text="Quick Links"/>
       </div>
        <div className="px-3 bg-gray-50 rounded py-4 mb-3">
        <LinksAccordion/>
        </div>
    </div>
  )
}

export default QuickLinks