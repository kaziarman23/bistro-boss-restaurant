import { FaAddressBook, FaHome, FaShoppingBag, FaUsers } from "react-icons/fa";
import {
  FaCalendar,
  FaCalendarPlus,
  FaCartShopping,
  FaListCheck,
  FaMessage,
  FaMoneyBill,
} from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { MdHomeWork, MdReviews } from "react-icons/md";
import { RiHomeGearFill } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../Pages/Shared/IsAdmin/UseAdmin";

const Dashboard = () => {
  const [isAdmin] = UseAdmin();

  return (
    <div className="flex h-screen">
      <div className="w-80 h-screen bg-orgGold flex flex-col gap-10">
        <div>
          <Link to="/">
            <h2 className="text-3xl p-5 font-bold">
              Bistro Boss <br />
              <span>Restuarant</span>
            </h2>
          </Link>
        </div>
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <MdHomeWork />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <GiForkKnifeSpoon />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaListCheck />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaAddressBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          <div className="divider"></div>

          {/* shared navlinks */}
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
            <NavLink to="/shop/salad">
              <FaShoppingBag />
              shop
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
      <div className="flex-1 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
