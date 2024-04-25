import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmUser } from "../../../services/api/authApi";
import OtpInput from "react-otp-input";
import Button from "../../components/Button";
import BeatLoader from "react-spinners/BeatLoader";
import useAuth from "../../../hooks/authUser";

const OtpForm = () => {
  const navigate = useNavigate();
  const {user} = useAuth()
  const [isBusy, setIsBusy] = useState(false);
  const [token, setToken] = useState("");
  const handleSubmit = async () => {
    setIsBusy(true);
    const payload = {
      token: token,
      user_id: user.un_id
    };
    await confirmUser(payload)
      .then((data) => {
        setIsBusy(false);
        toast.success(data.message);
        navigate("/auth/login");
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <OtpInput
        value={token}
        onChange={setToken}
        numInputs={8}
        renderSeparator={<span>-</span>}
        containerStyle={'flex gap-x-1 lg:gap-x-1'}
        renderInput={(props) => <input {...props} className="grow border border-gray-400 rounded py-3"/>}
      />
      <div className="mt-9 lg:mt-16">
        <Button
          title={isBusy ? <BeatLoader size={12} color="white" /> : "Continue"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default OtpForm;
