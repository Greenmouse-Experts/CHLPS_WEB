import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { RouteType, Routes } from "./routes";
import { Link, useLocation } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { BsGear } from "react-icons/bs";
import logo from '../../../assets/logo.png'
import useDialog from "../../../hooks/useDialog";
import LogoutModal from "../../../lib/modules/auth/logout-modal";

const SidebarLayout = () => {
  const path = useLocation();
  const { Dialog, setShowModal } = useDialog();

  return (
    <div className="left-0 top-0 fixed lg:w-[250px] overflow-y-hidden ">
      <Sidebar
        customBreakPoint="1024px"
        className="h-screen overflow-y-hidden scroll-pro fw-500 px-4"
        backgroundColor=""
      >
        <div className="flex justify-center py-6 lg:py-9 lg:pb-8 items-center">
          <Link to="/" className="flex justify-center gap-x-1">
            <img src={logo} alt="logo" className="w-10/12" />
            {/* <p className="fw-700 text-[19px] uppercase">Roadside Heroes</p> */}
          </Link>
        </div>
        <Menu
          className="overflow-y-auto relative scroll-pro h-[84vh]"
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color: active ? "black" : "#343333",
                  marginTop: "4px",
                  height: "auto",
                  padding: "3px 15px 3px 0px !important ",
                  textAlign: "left",
                  fontWeight: active ? "600" : "500",
                  borderLeft: active ? "5px solid #090979" : "",
                  background: active ? "#e3f9ff" : "",
                  "&:hover": {
                    color: "black",
                    background: "#e3f9ff",
                    borderLeft: "5px solid #090979",
                    fontWeight: "500",
                  },
                };
            },
          }}
        >
          {Routes.map((item) => {
            return (
              <div key={item.name}>
                {!!item.submenu.length ? (
                  <SubMenu label={item.name} icon={item.icon} key={item.name}>
                    {item.submenu.map((item: RouteType, i) => (
                      <MenuItem
                        component={<Link to={item.route} />}
                        active={path.pathname === item.route && true}
                        key={i}
                      >
                        <p className="fs-400">{item.name}</p>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    component={<Link to={item.route} />}
                    icon={item.icon}
                    active={path.pathname === item.route && true}
                    key={item.name}
                  >
                    <p className="fs-400">{item.name}</p>
                  </MenuItem>
                )}
              </div>
            );
          })}
          <MenuItem
            component={<Link to={"/user/profile"} />}
            icon={<BsGear className="text-xl" />}
            className="mt-12"
          >
            <p className="fs-400">Settings</p>
          </MenuItem>
          <MenuItem
            icon={<BiLogOutCircle className="text-xl" />}
            onClick={() => setShowModal(true)}
            className=""
          >
            <p className="fs-400">Logout</p>
          </MenuItem>
        </Menu>
      </Sidebar>
      <Dialog title="" size="xs">
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Dialog>
    </div>
  );
};

export default SidebarLayout;
