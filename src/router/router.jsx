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
import ManageProperties from "../Pages/Dashboard/Admin/ManageProperties";
import ManageUser from "../Pages/Dashboard/Admin/ManageUser";
import AddAProperty from "../Pages/Dashboard/Agent/AddAProperty";
import AllProperties from "../Pages/HomePage/AllProperties/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Wishlist from "../Pages/Dashboard/User/Wishlist/Wishlist";
import Profile from "../Components/Profile/Profile";
import ManageReview from "../Pages/Dashboard/Admin/ManageReview";
import MyReview from "../Pages/Dashboard/User/MyReview/MyReview";


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
                path: "/propertyDetails/:id",
                element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/properties'),
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
                path: 'manageProperties',
                element: <ManageProperties></ManageProperties>,
            },
            {
                path: 'manageUsers',
                element: <ManageUser></ManageUser>,
            },
            {
                path: 'manageReviews',
                element: <ManageReview></ManageReview>,
            },

            // user Route
            {
                path: 'profile',
                element: <Profile></Profile>,
            },
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>,
                loader: () => fetch('http://localhost:5000/wishlist'),
            },
            {
                path: 'myReviews',
                element: <MyReview></MyReview>,
            }
        ]
    }
]);


export default router;