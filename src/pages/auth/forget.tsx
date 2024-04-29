import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import ForgetPasswordForm from "../../lib/modules/auth/forget-form";

const ForgetPage = () => {
  const navigate = useNavigate();
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
                <p className="text-xl fw-600">Forget Password</p>
                <p className="mt-3 fs-500">
                  Please enter your email linked with your account.
                </p>
              </div>
              <div className="my-8 lg:my-8 mx-auto">
                <ForgetPasswordForm />
              </div>
              <div className="flex gap-x-2 mt-2 lg:pb-6">
                <p>Remembered your password?</p>
                <span
                  className="font-semibold text-blue-900 cursor-pointer"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPage;
