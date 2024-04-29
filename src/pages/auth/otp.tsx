import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import OtpForm from "../../lib/modules/auth/otp-form";
import { resendConfirm } from "../../services/api/authApi";
import useAuth from "../../hooks/authUser";
import { toast } from "react-toastify";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const VerifyOtp = () => {
  const { user } = useAuth();
  const [isBusy, setIsBusy] = useState(false);
  const handleResend = async () => {
    setIsBusy(true)
    const payload = {
      user_id: user.un_id,
    };
    await resendConfirm(payload)
      .then((data) => {
        setIsBusy(false);
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setIsBusy(false);
      });
  };
  return (
    <>
      <div className="lg:bg-auth lg:h-screen">
        <div className="w-full h-full bg-login">
          <div className="box h-full place-center">
            <Link to="/" className="lg:hidden absolute top-6 left-2 lg:left-6">
              <img
                src={logo}
                alt="logo"
                className="w-48"
                width={400}
                height={100}
              />
            </Link>

            <div className="w-full lg:w-[550px] my-36 lg:my-0 mx-auto bg-white lg:px-16 pt-6">
              <Link to={"/"}>
                <img
                  src={logo}
                  className="w-[240px] mx-auto my-6 hidden lg:block"
                  width={400}
                  height={80}
                />
              </Link>
              <div className="mt-6 lg:mt-6">
                <p className="mt-3 fs-500">
                  Please enter the verification code recieved via email.
                </p>
              </div>
              <div className="my-8 lg:my-8 mx-auto">
                <OtpForm />
              </div>
              <div className="mt-6 mb-8 text-center">
                {isBusy ? (
                  <BeatLoader size={12} color="black" />
                ) : (
                  <p
                    className="text-primary fw-500 fs-500"
                    onClick={handleResend}
                  >
                    Resend verification code
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;
