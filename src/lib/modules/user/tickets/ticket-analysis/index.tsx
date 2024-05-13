import { FaEnvelopeOpenText } from "react-icons/fa"
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FC } from "react";
import { TicketItem } from "../../../../../contracts/ticket";

interface Props {
  items: TicketItem[];
}
const TicketAnalysis:FC<Props> = ({items}) => {
  const open = items?.filter((where) => where.status === 'Open').length
  const closed = items?.filter((where) => where.status === 'Closed').length
  const answered = items?.filter((where) => where.status === 'Answered').length
  return (
    <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-green-50 text-green-800 py-3 rounded shadow">
            <FaEnvelopeOpenText className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">{open} Open Tickets</p>
        </div>
        <div className="bg-orange-50 text-orange-800 py-3 rounded shadow">
            <RxEnvelopeClosed className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">{closed} Closed Tickets</p>
        </div>
        <div className="bg-blue-50 text-blue-800 py-3 rounded shadow">
            <HiOutlineChatBubbleLeftRight className="text-2xl mx-auto"/>
            <p className="text-center mt-3 fw-600">{answered} Answerd Tickets</p>
        </div>
    </div>
  )
}

export default TicketAnalysis