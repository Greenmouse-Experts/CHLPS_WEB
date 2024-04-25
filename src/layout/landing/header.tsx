import logo from "../../assets/logo.svg";
import { Drawer, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./mobileMenu";
const LandingHeader = () => {
  const [open, setOpen] = useState(false);
  const {pathname} = useLocation()
  return (
    <div>
      <div className="">
        <div className="box duration-100">
          <div
            className={` bg-[#FFFFFF33] py-3 flex justify-between items-center`}
          >
            <div>
              <Link to={"/"}>
                <img src={logo} alt="logo" className="w-36 lg:w-44 xl:w-[220px]" />
              </Link>
            </div>
            <div className="lg:w-8/12">
              <div className="lg:hidden">
                <TiThMenuOutline
                  className="text-xl cursor-pointer"
                  onClick={() => setOpen(true)}
                />
              </div>
              <ul className="hidden lg:flex w-full justify-between items-center">
                <li>
                  <Link to={""} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/' && 'text-primary fw-600'}`}>Home</Link>
                </li>
                <li>
                  <Link to={"/"} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/about' && 'text-primary fw-600'}`}>About Us</Link>
                </li>
                <li>
                  <Link to={"/"} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/association' && 'text-primary fw-600'}`}>Association</Link>
                </li>
                <li>
                  <Link to={""} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/webinars' && 'text-primary fw-600'}`}>Webinars</Link>
                </li>
                <li>
                  <Link to={""} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/resourses' && 'text-primary fw-600'}`}>Resourses</Link>
                </li>
                <li>
                  <Link to={""} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/careers' && 'text-primary fw-600'}`}>Career</Link>
                </li>
                <li>
                  <Link to={""} className={`fs-500 fw-500 hover:fw-600 ${pathname === '/contact' && 'text-primary fw-600'}`}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/auth/register"} className="fw-500 btn-primary px-6 py-3 rounded-full">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        isOpen={open}
        placement="left"
        size={"xs"}
        onClose={() => setOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <MobileMenu close={() => setOpen(false)} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default LandingHeader;
