import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/authUser";
import { loginUser } from "../../../services/api/authApi";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../components/TextInput";
import Button from "../../components/Button";
import BeatLoader from "react-spinners/BeatLoader";

const LoginForm = () => {
  const navigate = useNavigate();
  const { saveUser } = useAuth();
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
    await loginUser(payload)
      .then((data:any) => {
        setIsBusy(false);
        if (data.data.account_type === "User") {
          toast.success("Login Successful");
          sessionStorage.setItem("chlps_token", data.token);
          saveUser({
            name: `${data.data.first_name} ${data.data.last_name}`,
            email: data.data.email,
            token: data.token,
            image: data.data.avatar,
            address: data.data.address,
            phone: data.data.phone_number,
            id: data.data.id,
            account: data.data.account_type,
            joined: data.data.email_verified_at,
            un_id: ''
          });
          navigate("/user");
        } else {
          toast.info("User profile not available");
        }
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
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
        />
        <div className="relative">
          <TextInput
            label="Password"
            placeholder="Password"
            type={InputType.password}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)}
          />
          <div className="absolute top-2 right-0">
            <Link to={"/auth/forget"} className="text-primary fw-500 fs-500">
              Forget Password?
            </Link>
          </div>
        </div>
        <div className="mt-9">
          <Button
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Login"}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
