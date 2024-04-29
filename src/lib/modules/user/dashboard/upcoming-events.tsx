import { FaRegCalendarAlt } from "react-icons/fa";
import HeaderText from "../../../components/header-text";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

const UpcomingEvents = () => {
  const content = [
    {
      name: "Febuary Webinars",
      date: "24/02/2024 10:00am",
      des: "lorem ipsum tyoe of text for filling dummy spaces, this texts varies in word length just to give the adequate fitting for the text container",
    },
    {
      name: "Fintech Conference",
      date: "22/02/2024 08:10am",
      des: "lorem ipsum tyoe of text for filling dummy spaces, this texts varies in word length just to give the adequate fitting for the text container",
    },
    {
      name: "January Webinars",
      date: "14/01/2024 10:00am",
      des: "lorem ipsum tyoe of text for filling dummy spaces, this texts varies in word length just to give the adequate fitting for the text container",
    },
  ];
  return (
    <div className="p-5 drop-shadow-md rounded-[6px] bg-white">
      <div className="fw-500 text-primary mb-4">
        <HeaderText text="Upcoming Events" />
      </div>
      <div className="grid gap-3">
        {content.map((items) => (
          <div className="flex gap-x-3 border-b pb-2">
            <div className="relative top-1 border rounded h-16 w-16 place-center shrink-0">
              <FaRegCalendarAlt className="text-primary lg:text-xl"/>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="fw-500 fs-400 ">{items.date}</p>
                <Link to={"/user"} className="flex gap-x-1 px-3 py-1 items-center border fs-400 fw-500 rounded-full">View More <FaChevronRight className="text-[11px]"/></Link>
              </div>
              <p className="fw-600 text-primary lg:text-lg">{items.name}</p>
              <p className="mt-1 fs-400 text-gray-600">{items.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
