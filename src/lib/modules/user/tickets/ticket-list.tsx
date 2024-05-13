import { FC } from "react";
import { TicketItem } from "../../../../contracts/ticket";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RxEnvelopeClosed } from "react-icons/rx";
import dayjs from "dayjs";

interface Props {
  items: TicketItem[];
}
const TicketList: FC<Props> = ({ items }) => {
  const formatTicketIcon = {
    open: <FaEnvelopeOpenText className="text-green-700"/>,
    answered: <HiOutlineChatBubbleLeftRight className="text-blue-800"/>,
    closed: <RxEnvelopeClosed className="text-orange-800"/>,
  };
  const formatBorder = {
    open: "border-green-700",
    answered: "border-blue-700",
    closed: "border-orange-700",
  };
  return (
    <div className="mt-5 grid gap-3 lg:mt-12 mb-8">
      {items &&
        !!items?.length &&
        items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-x-4 border-l-[3px] p-4 bg-[#FAF9F6] ${
              formatBorder[
                item.status.toLowerCase() as keyof typeof formatBorder
              ]
            }`}
          >
            <div className="text-5xl shrink-0">
              {
                formatTicketIcon[
                  item.status.toLowerCase() as keyof typeof formatTicketIcon
                ]
              }
            </div>
            <div>
              <p className="fw-600 text-lg">{item.title}</p>
              <p className="syne">{item.message}</p>
              <p>{dayjs(item.created_at).format("hh:mm DD/MMM/YYYY")}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TicketList;
