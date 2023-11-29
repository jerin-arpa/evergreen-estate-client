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
import AllProperties from "../Pages/AllProperties/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Wishlist from "../Pages/Dashboard/User/Wishlist/Wishlist";
import Profile from "../Components/Profile/Profile";
import ManageReview from "../Pages/Dashboard/Admin/ManageReview";
import MyReview from "../Pages/Dashboard/User/MyReview/MyReview";
import AdminRoute from "./AdminRoute";
import MakeOffer from "../Pages/Dashboard/User/MakeOffer/MakeOffer";
import AddAProperty from "../Pages/Dashboard/Agent/AddAProperty";
import AddedProperties from "../Pages/Dashboard/Agent/AddedProperty/AddedProperties";
import SoldProperties from "../Pages/Dashboard/Agent/SoldProperties";
import UpdateProperty from "../Pages/Dashboard/Agent/AddedProperty/UpdateProperty";
import RequestedProperties from "../Pages/Dashboard/Agent/RequestProperty/RequestedProperties";
import PropertyBought from "../Pages/Dashboard/User/PropertyBought/PropertyBought";
// import Payment from "../Pages/Dashboard/User/PropertyBought/Payment";



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
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashboardRoute></DashboardRoute></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <Profile></Profile>,
            },
            // Admin Route
            {
                path: 'manageProperties',
                element: <AdminRoute><ManageProperties></ManageProperties></AdminRoute>,
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>,
            },
            {
                path: 'manageReviews',
                element: <AdminRoute><ManageReview></ManageReview></AdminRoute>,
            },

            // Agent Route
            {
                path: "addProperties",
                element: <AddAProperty></AddAProperty>,
            },
            {
                path: "addedProperties",
                element: <AddedProperties></AddedProperties>,
            },
            {
                path: "updateProperty/:id",
                element: <UpdateProperty></UpdateProperty>,
                loader: ({ params }) => fetch(`http://localhost:5000/properties/${params.id}`),
            },
            {
                path: "soldProperties",
                element: <SoldProperties></SoldProperties>,
            },
            {
                path: "requestProperties",
                element: <RequestedProperties></RequestedProperties>,
            },


            // user Route
            {
                path: 'wishlist',
                element: <Wishlist></Wishlist>,
                loader: () => fetch('http://localhost:5000/wishlist'),
            },
            {
                path: 'myReviews',
                element: <MyReview></MyReview>,
            },
            {
                path: 'makeOffer/:id',
                element: <MakeOffer></MakeOffer>,
                loader: () => fetch('http://localhost:5000/wishlist')
            },
            {
                path: 'propertyBought',
                element: <PropertyBought></PropertyBought>,
            },
            // {
            //     path: 'payment',
            //     element: <Payment></Payment>
            // }
        ]
    }
]);


export default router;