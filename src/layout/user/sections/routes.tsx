import {
  MdEventNote,
  MdOutlineDashboard, MdOutlineShoppingCart,
} from 'react-icons/md';
import { HiOutlineUsers } from "react-icons/hi2";
import {  BiSupport } from 'react-icons/bi';
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { PiCertificate } from 'react-icons/pi';
export interface RouteType {
  name:string;
  icon: any;
  route:string;
  submenu: {
    name:string;
    icon: any;
    route:string;
  }[]
}
export const Routes = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard className="text-xl" />,
    route: '/user',
    submenu: [],
  },
  {
    name: 'Membership',
    icon: <HiOutlineUsers className="text-xl" />,
    route: '/',
    submenu: [
      {
        name: 'My Membership',
        icon: <HiOutlineUsers className="text-xl" />,
        route: '/user/membership',
        submenu: [],
      },
      {
        name: 'Membership Plans',
        icon: <HiOutlineUsers className="text-xl" />,
        route: '/user/plans',
        submenu: [],
      },
    ],
  },
  {
    name: 'Certificate',
    icon: <PiCertificate className="text-xl" />,
    route: '/user/certify',
    submenu: [
      {
        name: 'My Certificates',
        icon: <PiCertificate className="text-xl" />,
        route: '/user/my-certify',
        submenu: [],
      },
      {
        name: 'Apply Certificate',
        icon: <PiCertificate className="text-xl" />,
        route: '/user/certify',
        submenu: [],
      },
    ],
  },
  {
    name: 'Events',
    icon: <MdEventNote className="text-xl" />,
    route: '/user/events',
    submenu: [],
  },
  {
    name: 'Notifications',
    icon: <IoNotificationsCircleOutline className="text-xl" />,
    route: '/user/notify',
    submenu: [],
  },
  {
    name: 'Payment History',
    icon: <MdOutlineShoppingCart className="text-xl" />,
    route: '/user/payments',
    submenu: [],
  },
  {
    name: 'Support Tickets',
    icon: <BiSupport className="text-xl" />,
    route: '/user/tickets',
    submenu: [],
  },
]