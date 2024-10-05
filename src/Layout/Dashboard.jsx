import { FaHome, FaShoppingBag } from "react-icons/fa";
import {
  FaCalendar,
  FaCalendarPlus,
  FaCartShopping,
  FaMessage,
  FaMoneyBill,
} from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { RiHomeGearFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-80 h-screen bg-orgGold">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <RiHomeGearFill />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaMoneyBill></FaMoneyBill>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartShopping></FaCartShopping>
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <MdReviews></MdReviews>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaCalendarPlus></FaCalendarPlus>
              Add Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <IoMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShoppingBag />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaMessage />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
