import { Outlet, useLocation } from "react-router-dom";
import Footer from "../routers/pages/shared/Footer";
import Navbar from "../routers/pages/shared/Navbar";

export default function Main() {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {isLogin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </div>
  );
}
