import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardRoute from "../Layout/DashboardRoute/DashboardRoute";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import AddAProperty from "../Pages/Dashboard/Agent/AddAProperty";
import AllProperties from "../Pages/HomePage/AllProperties/AllProperties";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allProperties",
                element: <AllProperties></AllProperties>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/addProperty",
                element: <AddAProperty></AddAProperty>,
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardRoute></DashboardRoute></PrivateRoute>,
        children: [
            // Admin Route
            {
                path: 'adminProfile',
                element: <AdminProfile></AdminProfile>,
            },
            {
                path: 'manageProperties',
                element: <ManageProperties></ManageProperties>,
            },
            {
                path: 'manageUsers',
                element: <ManageUser></ManageUser>,
            },
        ]
    }
]);


export default router;