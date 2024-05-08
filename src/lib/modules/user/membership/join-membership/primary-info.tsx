import { formatPhoneNumber } from "react-phone-number-input";
import useAuth from "../../../../../hooks/authUser";

const PrimaryInfo = () => {
    const { user} = useAuth()
  return (
    <div className="mt-5">
      <div className="flex items-center text-primary gap-x-2">
        <span className="block bg-primary w-3 h-3 circle"></span>
        <p className="fw-500">Primary Infomations</p>
      </div>
      <div className="mt-4 grid gap-4">
        <div className="flex gap-x-2 items-center">
            <div className="w-16 h-16 bg-primary circle"></div>
            <div className="relative">
            <p className="fw-500 text-primary">Add Corporate Picture</p>
            <input type="file" accept="image/*" className="absolute top-0 left-0 h-full w-full opacity-0" />
            </div>
        </div>
        <div className="flex gap-x-2 items-center">
            <p>Name:</p>
            <p className="fw-500">{user.name}</p>
        </div>
        <div className="flex gap-x-2 items-center">
            <p>Email:</p>
            <p className="fw-500">{user.email}</p>
        </div>
        <div className="flex gap-x-2 items-center">
            <p>Phone:</p>
            <p className="fw-500">{formatPhoneNumber(user.phone)}</p>
        </div>
      </div>
    </div>
  );
};

export default PrimaryInfo;
