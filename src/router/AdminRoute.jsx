import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from '../hooks/useAdmin';


const AdminRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className=" bg-slate-900">
            <div className="container mx-auto px-5 flex justify-center py-20"><span className="loading loading-infinity loading-lg"></span></div>
        </div>;
    }


    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
    children: PropTypes.node,
};

export default AdminRoute;