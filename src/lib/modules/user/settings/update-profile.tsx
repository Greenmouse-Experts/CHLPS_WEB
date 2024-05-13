import { FC, useState } from "react";
import useAuth from "../../../../hooks/authUser";
import TextInput, { InputType } from "../../../components/TextInput";
import Button from "../../../components/Button";
import BeatLoader from "react-spinners/BeatLoader";

interface Props {
  close: () => void;
}
const UpdateProfile: FC<Props> = ({ close }) => {
  const { firstName, lastName, user } = useAuth();
  const [inputDetails, setInputDetails] = useState({
    first_name: firstName || "",
    last_name: lastName || "",
    username: user.username || "",
    address: user.address || "",
  });
  const handleChange = (name: string, value: string) => {
    setInputDetails({ ...inputDetails, [name]: value });
  };
  const [isBusy, setIsBusy] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBusy(true);
    close()
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <TextInput
          label="First Name"
          value={inputDetails.first_name}
          type={InputType.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("first_name", e.target.value)
          }
        />
        <TextInput
          label="Last Name"
          value={inputDetails.last_name}
          type={InputType.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("last_name", e.target.value)
          }
        />
        <TextInput
          label="Username"
          value={inputDetails.username}
          type={InputType.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("username", e.target.value)
          }
        />
        <TextInput
          label="Address"
          value={inputDetails.address}
          type={InputType.textarea}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("address", e.target.value)
          }
        />
        <div className="mt-9">
          <Button
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Update"}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
