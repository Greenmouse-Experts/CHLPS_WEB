import { IoAddCircleOutline } from "react-icons/io5";
import HeaderText from "../../lib/components/header-text";
import TicketAnalysis from "../../lib/modules/user/tickets/ticket-analysis";
import useDialog from "../../hooks/useDialog";
import AddNewTicketModal from "../../lib/modules/user/tickets/add-ticket-modal";

const UserTickets = () => {
    const {Dialog, setShowModal} = useDialog()
  return (
    <div>
      {" "}
      <div className="drop-shadow-md bg-white p-4 lg:pt-5 lg:px-7 mt-6 rounded-lg">
        <div className="flex justify-between items-center text-lg lg:text-2xl fw-600">
          <HeaderText text="My Tickets" />
          <div className="btn-primary fs-500 cursor-pointer items-center px-5 py-1 flex gap-x-2" onClick={() => setShowModal(true)}>
            <IoAddCircleOutline />
            <p>Create Ticket</p>
          </div>
        </div>
        <div className="mt-4 lg:mt-8">
          <TicketAnalysis />
        </div>
      </div>
      <Dialog title="Add New Ticket" size="lg">
        <AddNewTicketModal close={() => setShowModal(false)}/>
      </Dialog>
    </div>
  );
};

export default UserTickets;
