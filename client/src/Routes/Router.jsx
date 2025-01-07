import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Home";
import AllVisas from "../Components/AllVisas/AllVisas";
import AddVisa from "../Components/AddVisa/AddVisa";
import MyApplications from "../Components/MyApplications/MyApplications";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Error from "../Components/Error";
import PrivateRouter from "./PrivateRouter";
import MyVisas from "../Components/MyVisas/Myvisas";
import VisaDetails from "../Components/AllVisas/VisaDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://server-one-ashen-40.vercel.app"),
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
        loader: () => fetch("https://server-one-ashen-40.vercel.app/visa"),
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRouter>
            <VisaDetails></VisaDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://server-one-ashen-40.vercel.app/visaDetails/${params.id}`
          ),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRouter>
            <AddVisa></AddVisa>
          </PrivateRouter>
        ),
      },
      {
        path: "/myVisas",
        element: (
          <PrivateRouter>
            <MyVisas></MyVisas>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRouter>
            <MyApplications></MyApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
