import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/api/authApi";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../components/TextInput";
import Button from "../../components/Button";
import BeatLoader from "react-spinners/BeatLoader";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import useAuth from "../../../hooks/authUser";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {saveUser, user} = useAuth()
  const [isBusy, setIsBusy] = useState(false);
  const [userDetail, setUserDetail] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    username: "",
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
        ...userDetail,
        password_confirmation: userDetail.password
    }
    await registerUser(payload)
      .then((data) => {
        setIsBusy(false);
        toast.success(data.message);
        saveUser({
          ...user,
          un_id: data.data.id
        })
        navigate("/auth/otp");
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setIsBusy(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <TextInput
            label="First Name"
            placeholder=""
            type={InputType.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("first_name", e.target.value)
            }
          />
          <TextInput
            label="Last Name"
            placeholder=""
            type={InputType.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("last_name", e.target.value)
            }
          />
          <TextInput
            label="Email address"
            placeholder=""
            type={InputType.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("email", e.target.value)
            }
          />
          <TextInput
            label="User Name"
            placeholder=""
            type={InputType.text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("username", e.target.value)
            }
          />
          <div className="mt-[4px]">
            <label className="mb-1 block mt-2 fw-500 text-[#000000B2]">
              Phone Number
            </label>
            <PhoneInput
              defaultCountry="US"
              onChange={(value) => handleChange("phone_number", String(value))}
              rules={{
                required: true,
                pattern: {
                  value:
                    /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
                  message: "Please Enter A Valid Number",
                },
              }}
              className="border p-3 border-gray-400 rounded outline-none"
            />
          </div>
          <TextInput
            label="Password"
            placeholder="Password"
            type={InputType.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("password", e.target.value)
            }
          />
        </div>
        <div className="mt-9">
          <Button
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
