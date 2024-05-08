import Button from "../../../components/Button";
import TextInput, { InputType } from "../../../components/TextInput";

const AddNewTicketModal = () => {
  return (
    <div>
      <form>
        <div>
          <TextInput label="Subject" placeholder="" type={InputType.text} />
        </div>
        <div>
          <TextInput
            label="Subject Summary"
            placeholder=""
            type={InputType.textarea}
          />
        </div>
        <div className="mt-8">
          <Button title={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default AddNewTicketModal;
