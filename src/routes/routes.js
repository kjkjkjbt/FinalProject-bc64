// import AdminThongTinPhong from "../AdminThongTinPhongPage/AdminThongTinPhong";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutHome from "../layouts/LayoutHome";
import AdminPage from "../pages/Admin/Admin/Admin";
import AdminBooking from "../pages/Admin/Booking/Booking";
import AdminRoomInfo from "../pages/Admin/RoomInfo/RoomInfo";
import Error from "../pages/ErrorPage/Error";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PersonnalInfo from "../pages/PersonalInfo/PersonalInfo";
import RoomByCity from "../pages/RoomByCity/RoomByCity";
import RoomDetail from "../pages/RoomDetail/RoomDetail";
import SignupPage from "../pages/SignupPage/SignupPage";
import UserTicket from "../pages/UserTicket/UserTicket";


export const routes = [
  {
    url: "/",
    component: <LayoutHome Components={HomePage} />,
  },
  {
    url: "/home",
    component: <LayoutHome Components={HomePage} />,
  },
  {
    url: "/login",
    component: <LoginPage />,
  },
  {
    url: "/register",
    component: <SignupPage />,
  },
  {
    url: "/PersonnalInfoPage",
    component: <Layout Components={PersonnalInfo} />,
  },
  {
    url: "/RoomByCity/:id",
    component: <Layout Components={RoomByCity} />,
  },
  {
    url: "/RoomDetail/:id",
    component: <Layout Components={RoomDetail} />,
  },
  {
    url: "/TicketUser",
    component: <Layout Components={UserTicket} />,
  },
  {
    url: "*",
    component: <Layout Components={Error} />,
  },
  {
    url: "/admin",
    component: <LayoutAdmin Component={AdminPage} />,
  },
  {
    url: "/admin/user",
    component: <LayoutAdmin Component={AdminPage} />,
  },
  {
    url: "/admin/booking",
    component: <LayoutAdmin Component={AdminBooking} />,
  },
  {
    url: "/admin/room-info",
    component: <LayoutAdmin Component={AdminRoomInfo} />,
  },
];
