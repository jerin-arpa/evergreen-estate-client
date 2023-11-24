import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className=" bg-slate-900">
            <div className="container mx-auto px-5 flex justify-center py-20"><span className="loading loading-infinity loading-lg"></span></div>
        </div>;
    }


    if (user) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;