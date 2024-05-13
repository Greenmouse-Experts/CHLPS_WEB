import { useState } from "react";
import useAuth from "../../hooks/authUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateProfile } from "../../services/api/authApi";
import { uploadImage } from "../../services/api/routine";
import { GoPasskeyFill } from "react-icons/go";
import dayjs from "dayjs";
import useDialog from "../../hooks/useDialog";
import Button from "../../lib/components/Button";
import ProfileAvatar from "../../lib/components/ProfileAvatar";
import { FormatStatus } from "../../lib/utils/helpers";
import { formatPhoneNumber } from "react-phone-number-input";
import UpdateProfile from "../../lib/modules/user/settings/update-profile";
import ChangePassword from "../../lib/modules/user/settings/change-password";

const UserProfile = () => {
  const { user, saveUser } = useAuth();
  const [isUpdate, setIsUpdate] = useState(false);
  const { Dialog: Password, setShowModal: ShowPassword } = useDialog();
  const { Dialog: Edit, setShowModal: ShowEdit } = useDialog();
  const Update = useMutation({
    mutationFn: updateProfile,
    mutationKey: ["update"],
  });
  const mutation = useMutation({
    mutationFn: uploadImage,
    onSuccess: (data) => {
      const payload = {
        picture: data.image,
      };
      Update.mutate(payload, {
        onSuccess: () => {
          saveUser({
            ...user,
            image: data.image,
          });
          toast.success("Profile Photo Updated Successfully");
          setIsUpdate(false);
        },
        onError: () => {
          toast.error("Something went wrong");
          setIsUpdate(false);
        },
      });
    },
    onError: () => {
      toast.error("Something went wrong");
      setIsUpdate(false);
    },
  });
  const handleChangePicture = async (e: any) => {
    setIsUpdate(true);
    if (!e.target.files) return;
    const files = e.target.files[0];
    const fd = new FormData();
    fd.append("image", files);
    mutation.mutate(fd);
  };
  return (
    <>
      <div className="drop-shadow-md bg-white p-4 lg:pt-5 lg:pb-12 lg:px-7 mt-6 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-5">
            <div className="relative">
              <ProfileAvatar
                url={user.image}
                name={user.name}
                size={155}
                font={38}
                type="dark"
              />
            </div>
            <div>
              <p className="text-lg lg:text-3xl syne">{user.name}</p>
              <div className="mt-2">{FormatStatus["active"]}</div>
              <button className="bg-primary mt-6 relative px-6 py-2 rounded-lg shades text-white overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangePicture}
                  className="absolute top-0 left-0 w-full opacity-0"
                />
                {isUpdate ? "..." : "Update Photo"}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div className="w-44">
              <Button title={"Edit Profile"} onClick={() => ShowEdit(true)} />
            </div>
            <div
              className="w-12 h-12 place-center rounded-lg bg-primary text-white cursor-pointer"
              onClick={() => ShowPassword(true)}
            >
              <GoPasskeyFill className="text-xl" />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <p className="syne text-lg lg:text-3xl fw-600">My Profile</p>
          <div className="mt-6 lg:grid gap-4">
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Registration Date:
              </p>
              <p className="lg:text-xl syne">{user.joined? dayjs(user.joined).format('dddd DD, MMMM YYYY') : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Full Name:
              </p>
              <p className="lg:text-xl syne">{user.name}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Email:
              </p>
              <p className="lg:text-xl syne">{user.email}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Phone Number:
              </p>
              <p className="lg:text-xl syne">{formatPhoneNumber(user.phone)}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Address:
              </p>
              <p className="lg:text-xl syne">{user.address? user.address : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Membership Subscription:
              </p>
              <p className="lg:text-xl syne">{user.subscribed === "0"? FormatStatus['active'] : FormatStatus['inactive']}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Username:
              </p>
              <p className="lg:text-xl syne">{user.username? user.username : 'N/A'}</p>
            </div>
            <div className="flex items-center gap-x-4 py-3 border-b border-gray-300">
              <p className="w-3/12 lg:w-4/12 shrink-0 text-lg lg:text-xl syne">
                Membership Id:
              </p>
              <p className="lg:text-xl syne">{user.member_id? user.member_id : 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
      <Password title="Change Password" size="md">
        <ChangePassword close={() => ShowPassword(false)} />
      </Password>
      <Edit title="Update Profile" size="lg">
        <UpdateProfile close={() => ShowEdit(false)} />
      </Edit>
    </>
  );
};

export default UserProfile;