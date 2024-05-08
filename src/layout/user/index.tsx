// import { RiArrowDropDownLine } from "react-icons/ri";
// import {
//   Button,
//   Menu,
//   MenuHandler,
//   MenuItem,
//   MenuList,
// } from "@material-tailwind/react";
// import LogoutModal from "../../../auth/LogoutModal";
// import useAuth from "../../../../../hooks/authUser";
// import useModal from "../../../../../hooks/useModal";
// import SidebarLayout from "./sections/sidebar";
// import ProfileAvatar from "../../../ui/ProfileAvatar";
// import { BsGear } from "react-icons/bs";
// import { IoHomeOutline, IoLogOutOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./sections/sidebar";
import useAuth from "../../hooks/authUser";
import ProfileAvatar from "../../lib/components/ProfileAvatar";
import useDialog from "../../hooks/useDialog";
import LogoutModal from "../../lib/modules/auth/logout-modal";


const UserDashboardLayout = () => {
  const { user } = useAuth();
  const { Dialog, setShowModal } = useDialog();
  // const navigate = useNavigate();
  return (
    <>
      <div className="flex">
        <div className="lg:w-[250px]">
          <SidebarLayout />
        </div>
        <div className="w-full lg:w-[calc(100%_-_256px)] min-h-screen bg-light py-4 lg:py-9">
          <div className="">
            <div className="h-[60px] relative index-30">
              <div className="fixed top-0 w-full lg:w-[calc(100%_-_250px)] pl-7 pr-7 py-4 lg:py-[16px] bg-light flex items-center justify-between">
                <p className="fw-500 shadow text-primary px-4 py-1 bg-white rounded-full">My Dashboard</p>
                <div className="flex gap-x-5 items-center">
                  {/* <NotifyDrop/> */}
                  <div className="flex gap-x-4 items-center">
                    <ProfileAvatar
                      url={user.image}
                      name={user.name}
                      size={44}
                      font={17}
                    />
                    <div className="hidden lg:flex gap-x-4 items-center cursor-pointer">
                      <p className="fw-500">{user.name}</p>
                      {/* <Menu placement="bottom-start">
                        <MenuHandler>
                          <Button className="p-0 m-0 bg-transparent !shadow-none">
                            <RiArrowDropDownLine className="cursor-pointer text-black text-3xl" />
                          </Button>
                        </MenuHandler>
                        <MenuList className="index-30 text-black w-44">
                          <MenuItem
                            className="flex gap-x-2 items-center fw-500"
                            onClick={() => navigate("/user")}
                          >
                            <IoHomeOutline className="text-2xl" />
                            Home
                          </MenuItem>
                          <MenuItem className="flex gap-x-2 items-center fw-500">
                            <BsGear className="text-2xl" />
                            Settings
                          </MenuItem>
                          <MenuItem
                            className="flex gap-x-2 items-center fw-500"
                            onClick={() => setShowModal(true)}
                          >
                            <IoLogOutOutline className="text-2xl" />
                            Logout
                          </MenuItem>
                        </MenuList>
                      </Menu> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 lg:px-7">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Dialog title="" size="sm">
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Dialog>
    </>
  );
};

export default UserDashboardLayout;
