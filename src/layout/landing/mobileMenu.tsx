import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import Button from "@/components/Button";
import logo from "../../assets/logo.svg";
import Button from "../../lib/components/Button";

interface Props {
  close: () => void;
}
const MobileMenu: FC<Props> = ({ close }) => {
  const router = useNavigate();
  return (
    <div className="p-4 pt-6" onClick={close}>
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          width={150}
          height={50}
          className="w-36 lg:w-48"
        />
        <FaTimes className="text-xl cursor-pointer" onClick={close} />
      </div>
      <div className="mt-12">
        <ul className="grid gap-5">
            <li className="border-b">
              <Link to={'/'} className="px-3">
                Home
              </Link>
            </li>
            <li className="border-b">
              <Link to={'/'} className="px-3">
                About Us
              </Link>
            </li>
            <li className="border-b">
              <Link to={'/find-stay'} className="px-3">
                Association
              </Link>
            </li>
            <li className="border-b">
              <Link to={'/'} className="px-3">
                Webinars
              </Link>
            </li>
            <li className="border-b">
              <Link to={'/'} className="px-3">
                Resources
              </Link>
            </li>
            <li className="border-b">
              <Link to={'/'} className="px-3">
                Career
              </Link>
            </li>
            <li className="border-b">
              <Link to={'/'} className="px-3">
                Contact Us
              </Link>
            </li>
          <li className="mt-7">
            <Button
              title={"Login"}
              onClick={() => router("/auth/login")}
              altClassName="bg-primary px-12 text-white lg:px-8 py-2 rounded-lg"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
