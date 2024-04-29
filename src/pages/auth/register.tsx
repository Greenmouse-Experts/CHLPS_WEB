import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import RegisterForm from "../../lib/modules/auth/register-form";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:bg-auth min-h-[100vh]">
        <div className="w-full h-full bg-login">
          <div className="box h-full place-center lg:py-24">
            <Link to="/" className="lg:hidden absolute top-6 left-2 lg:left-6">
              <img src={logo} alt="logo" className="w-48" />
            </Link>

            <div className="w-full lg:w-[750px] my-36 lg:my-0 mx-auto bg-white lg:px-16 pb-6">
              <Link to={'/'}>
              <img
                src={logo}
                alt="logo"
                className="w-[240px] mx-auto my-6 hidden lg:block"
              />
              </Link>
              <div className="mt-6 lg:mt-6">
                <p className="text-xl fw-600">Sign Up</p>
                <p className="mt-3 fs-500">
                  Fill in your credentials to sign up on this platform
                </p>
              </div>
              <div className="my-8 lg:my-8 mx-auto">
                <RegisterForm />
              </div>
              <div className="flex gap-x-2 mt-2">
                <p>Already have an account?</p>
                <span
                  className="font-semibold text-blue-900 cursor-pointer"
                  onClick={() => navigate("/auth/login")}
                >
                  Sign In
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
