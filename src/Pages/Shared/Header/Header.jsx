import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../Cart/UseCart";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = UseCart();

  const navlinks = (
    <>
      <li className="p-2 font-bold text-base">
        <Link to="/">Home</Link>
      </li>
      {/* <li className="p-2 font-bold text-base">
        <Link to="/contactus">Contact us</Link>
      </li>
      <li className="p-2 font-bold text-base">
        <Link to="/dashboard">Dashboard</Link>
      </li> */}
      <li className="p-2 font-bold text-base">
        <Link to="/menu">our Menu</Link>
      </li>
      <li className="p-2 font-bold text-base">
        <Link to="/shop/salad">our shop</Link>
      </li>
      <li className=" font-bold text-base">
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaCartShopping />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <li
          onClick={() => handleLogout()}
          className="p-2 font-bold text-base mt-2 cursor-pointer"
        >
          Logout
        </li>
      ) : (
        <li className="p-2 font-bold text-base">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        navigate("/");

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logged out successfully",
        });
      })
      .catch((error) =>
        console.log("something wrong in header component logout part :", error)
      );
  };

  return (
    <div className="navbar max-w-6xl fixed z-50 opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
          >
            {navlinks}
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-xl">Bistro Boss</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/register">
          <button className="btn text-black bg-white text-xl">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
