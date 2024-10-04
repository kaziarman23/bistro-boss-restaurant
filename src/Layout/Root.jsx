import { Outlet, useLocation } from "react-router";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Root = () => {
  const location = useLocation();
  const singleSection =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div className="max-w-6xl mx-auto">
      {singleSection || <Header></Header>}
      <Outlet></Outlet>
      {singleSection || <Footer></Footer>}
    </div>
  );
};

export default Root;
