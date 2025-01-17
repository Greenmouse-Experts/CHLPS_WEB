import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/authUser";
import Button from "../../components/Button";

interface Props {
  CloseModal: () => void;
}

const LogoutModal: FC<Props> = ({ CloseModal }) => {
  const navigate = useNavigate();
  const {signOut} = useAuth()
  const logoutUser = () => {
    signOut();
    toast.success("Logout Successful");
    navigate("/auth/login");
  };
  return (
    <div>
      <p className="fw-500 text-center">Are you sure you want to log out</p>
      <div className="flex justify-between mt-10">
        <Button
          title="Cancel"
          onClick={CloseModal}
          altClassName="px-6 py-2 rounded-full fw-600 text-grad border rounded text-primary hover:scale-x-110 duration-100"
        />
        <Button
          title="Logout"
          altClassName="w-24 py-2 btn-primary hover:scale-x-110 duration-100"
          onClick={logoutUser}
        />
      </div>
    </div>
  );
};

export default LogoutModal;
