import { FC, useState } from "react";
import Button from "../../../components/Button";
import TextInput, { InputType } from "../../../components/TextInput";
import {  updateTicket } from "../../../../services/api/ticket-api";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";
import { TicketItem } from "../../../../contracts/ticket";

interface Props {
  close: () => void;
  refetch: () => void;
  item: TicketItem | undefined
}
const EditTicketModal: FC<Props> = ({ close, refetch, item }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [inputDetails, setInputDetails] = useState({
    subject: item?.title || "",
    summary: item?.message || "",
    id: item?.id,
  });
  const handleChange = (name: string, value: string) => {
    setInputDetails({ ...inputDetails, [name]: value });
  };
  const addTictet = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);
    const payload = {
      title: inputDetails.subject,
      message: inputDetails.summary,
      id: item?.id
    }
    await updateTicket(payload)
      .then(() => {
        toast.success("Ticket updated");
        setIsBusy(false);
        refetch()
        close()
      })
      .catch(() => {
        setIsBusy(false);
      });
  };
  return (
    <div>
      <form onSubmit={addTictet}>
        <div>
          <TextInput
            label="Subject"
            placeholder=""
            type={InputType.text}
            value={inputDetails.subject}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("subject", e.target.value)
            }
          />
        </div>
        <div>
          <TextInput
            label="Subject Summary"
            placeholder=""
            type={InputType.textarea}
            value={inputDetails.summary}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("summary", e.target.value)
            }
          />
        </div>
        <div className="mt-8">
          <Button
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Submit"}
            disabled={isBusy || !inputDetails.subject || !inputDetails.summary}
          />
        </div>
      </form>
    </div>
  );
};

export default EditTicketModal;
