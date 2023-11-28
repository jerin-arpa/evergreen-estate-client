import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { MdOutlineMenu, MdRealEstateAgent, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../hooks/useAdmin";
import UseAgent from "../../hooks/useAgent";


const DashboardRoute = () => {

    const [isAdmin] = UseAdmin();
    const [isAgent] = UseAgent();

    const navLink = <>

        <li className="text-xl">
            <NavLink to="/dashboard/profile">
                <FaUser></FaUser> Profile</NavLink>
        </li>


        {/* Admin Dashboard */}
        {
            isAdmin && <>
                <li className="text-xl">
                    <NavLink to="/dashboard/manageProperties">
                        <MdRealEstateAgent></MdRealEstateAgent> Manage Properties</NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to="/dashboard/manageUsers">
                        <FaUsers></FaUsers> Manage Users</NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to="/dashboard/manageReviews">
                        <MdReviews></MdReviews>
                        Manage Reviews</NavLink>
                </li>
            </>
        }

        {
            isAgent && <>
                {/* Agent Dashboard */}
                <li className="text-xl">
                    <NavLink to="/dashboard/addedProperties">
                        <MdRealEstateAgent></MdRealEstateAgent>My Added Properties</NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to="/dashboard/soldProperties">
                        <FaUsers></FaUsers> My Sold Properties</NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to="/dashboard/requestProperties">
                        <MdReviews></MdReviews>
                        Requested Properties</NavLink>
                </li>
            </>
        }

        {
            !isAgent && !isAdmin && <>
                {/* User Dashboard */}
                <li className="text-xl">
                    <NavLink to="/dashboard/wishlist">
                        <MdRealEstateAgent></MdRealEstateAgent> Wishlist</NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to="/dashboard/propertyBought">
                        <FaUsers></FaUsers> Property Bought</NavLink>
                </li>
                <li className="text-xl">
                    <NavLink to="/dashboard/myReviews">
                        <MdReviews></MdReviews>
                        My Reviews</NavLink>
                </li>
            </>
        }

        {/* Shared NavLink */}
        <li className="text-xl">
            <NavLink to="/">
                <FaHome></FaHome>Home</NavLink>
        </li>
        <li className="text-xl">
            <NavLink to="/allProperties">
                <MdOutlineMenu></MdOutlineMenu>All Properties</NavLink>
        </li>
    </>

    return (
        <div className="container mx-auto px-5">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar text-white  bg-[#03a9fc]">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-2xl font-bold">Evergreen Estate</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navLink}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 z-[10]">
                        {/* Sidebar content here */}
                        {navLink}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardRoute;