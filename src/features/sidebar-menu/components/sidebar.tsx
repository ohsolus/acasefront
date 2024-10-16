import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome size={24} />,
    cName: "nav-text",
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <IoIcons.IoIosPaper size={24} />,
    cName: "nav-text",
  },
  {
    title: "Activities",
    path: "/activities",
    icon: <FaIcons.FaCalendarAlt size={24} />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <FaIcons.FaEnvelopeOpenText size={24} />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle size={24} />,
    cName: "nav-text",
  },
];
