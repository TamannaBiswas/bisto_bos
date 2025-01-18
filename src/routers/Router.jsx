import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./pages/Home/Home";
import Menue from "./pages/menu/Menue";
import Order from "./pages/order/Order";
import Login from "./pages/login/Login";
import SingUp from "./pages/singUp/SingUp";
import PrivetRoute from "../PrivetRoute";
import Secred from "./pages/shared/secred/Secred";
import Dasbord from "../Layout/Dasbord";
import Cart from "./pages/Dasbord/cart/Cart";
import AllUsers from "./pages/Dasbord/AllUsers";
import AdminRoutr from "./AdminRoutr";
import AddItem from "./pages/Dasbord/AddItem";
import ManageItems from "./pages/Dasbord/ManageItems";
import UpdateItem from "./pages/Dasbord/UpdateItem";
import Payment from "./pages/Dasbord/Payment";
import PaymentHistiry from "./pages/Dasbord/PaymentHistiry";
import AdminHome from "./pages/Dasbord/AdminHome";
import UserHome from "./pages/Dasbord/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menue></Menue>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "secret",
        element: (
          <PrivetRoute>
            <Secred></Secred>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <Dasbord></Dasbord>
      </PrivetRoute>
    ),
    children: [
      // user route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistiry></PaymentHistiry>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      // addmin routes
      {
        path: "adminHome",
        element: (
          <AdminRoutr>
            {" "}
            <AdminHome></AdminHome>
          </AdminRoutr>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoutr>
            <AddItem></AddItem>
          </AdminRoutr>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoutr>
            <ManageItems></ManageItems>
          </AdminRoutr>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoutr>
            <UpdateItem></UpdateItem>
          </AdminRoutr>
        ),
        loader: ({ params }) =>
          fetch(`https://y-ten-dusky.vercel.app/menu/${params.id}`),
      },

      {
        path: "users",
        element: (
          <AdminRoutr>
            <AllUsers></AllUsers>
          </AdminRoutr>
        ),
      },
    ],
  },
]);
