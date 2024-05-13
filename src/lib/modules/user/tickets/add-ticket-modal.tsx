import { FC, useState } from "react";
import Button from "../../../components/Button";
import TextInput, { InputType } from "../../../components/TextInput";
import { createTicket } from "../../../../services/api/ticket-api";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

interface Props {
  close: () => void;
  refetch: () => void;
}
const AddNewTicketModal: FC<Props> = ({ close, refetch }) => {
  const [isBusy, setIsBusy] = useState(false);
  const [inputDetails, setInputDetails] = useState({
    subject: "",
    summary: "",
  });
  const handleChange = (name: string, value: string) => {
    setInputDetails({ ...inputDetails, [name]: value });
  };
  const addTictet = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);
    const payload = {
      title: inputDetails.subject,
      message: inputDetails.summary
    }
    await createTicket(payload)
      .then(() => {
        toast.success("Ticket created");
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

export default AddNewTicketModal;
