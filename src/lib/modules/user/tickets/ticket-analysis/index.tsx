import { FaEnvelopeOpenText } from "react-icons/fa"
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RxEnvelopeClosed } from "react-icons/rx";

const TicketAnalysis = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-green-50 text-green-800 py-3 rounded shadow">
            <FaEnvelopeOpenText className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">0 Open Tickets</p>
        </div>
        <div className="bg-orange-50 text-orange-800 py-3 rounded shadow">
            <RxEnvelopeClosed className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">0 Closed Tickets</p>
        </div>
        <div className="bg-blue-50 text-blue-800 py-3 rounded shadow">
            <HiOutlineChatBubbleLeftRight className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">0 Answerd Tickets</p>
        </div>
    </div>
  )
}

export default TicketAnalysis