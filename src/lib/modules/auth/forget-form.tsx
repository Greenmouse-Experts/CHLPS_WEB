import BeatLoader from "react-spinners/BeatLoader";
import Button from "../../components/Button";
import TextInput, { InputType } from "../../components/TextInput";
import { toast } from "react-toastify";
import { forgetPassword } from "../../../services/api/authApi";
import { useState } from "react";

const ForgetPasswordForm = () => {
  const [isBusy, setIsBusy] = useState(false);
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name: string, value: string) => {
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsBusy(true);
    const payload = {
      login_details: userDetail.email,
      password: userDetail.password,
    };
    await forgetPassword(payload)
      .then((data: any) => {
        setIsBusy(false);
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <TextInput
          label="Email address"
          placeholder="email@domain.com"
          type={InputType.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
        />
        <div className="mt-9">
          <Button
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Continue"}
          />
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
