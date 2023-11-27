import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import DarkModeToggle from "react-dark-mode-toggle";
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = ({ isDarkMode, setIsDarkMode }) => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(() => { })
    }


    const navLink = <>
        {
            user ? <>
                <li>
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#03a9fc] underline" : ""
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/allProperties' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>All Properties</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/addProperty' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>Add Property</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>About</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>About</NavLink>
                </li>
            </> : <>
                <li>
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-[#03a9fc] underline" : ""
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold underline text-[#03a9fc]" : ""
                    }>About</NavLink>
                </li>
            </>
        }

    </>



    return (
        <div className="bg-base-200">
            <div className="navbar container mx-auto px-5 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className="flex gap-1">
                        <div className="flex items-center">
                            <img className="w-16" src={logo} alt="" />
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm md:text-2xl font-extrabold">Evergreen <span className="text-[#03a9fc]">Estate</span></p>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-7 px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-2">

                        {
                            user ?
                                <div className="flex gap-2 md:gap-4">
                                    <div className="flex items-center">
                                        <DarkModeToggle
                                            onChange={setIsDarkMode}
                                            checked={isDarkMode}
                                            size={40}
                                        />

                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <div className="flex gap-3">
                                            <label tabIndex={0}>
                                                {
                                                    user.photoURL ? (
                                                        <img className="w-8 md:w-10 rounded-full" src={user.photoURL} alt="" />
                                                    ) : (
                                                        <FaUserCircle className="text-4xl">
                                                        </FaUserCircle>
                                                    )
                                                }
                                            </label>
                                        </div>
                                        <div className="dropdown-content z-[2] menu p-2 shadow rounded-box lg:w-96 bg-white">
                                            <div className="p-3">
                                                <div className="flex justify-center">
                                                    {
                                                        user.photoURL ? (
                                                            <img className="rounded-full w-16 md:w-24" src={user.photoURL} alt="" />
                                                        ) : (
                                                            <FaUserCircle className="text-7xl">
                                                            </FaUserCircle>
                                                        )
                                                    }
                                                </div>
                                                <div className="flex justify-center">
                                                    <hr className="my-7 w-1/2" />
                                                </div>
                                                <div className="text-center">
                                                    <h2 className="text-sm md:text-xl mb-2"><span className="text-[#03a9fc]">Name:</span> {user.displayName
                                                    }</h2>
                                                    <p className="text-sm  md:text-lg mb-5 "><span className="text-[#03a9fc]">Email:</span> {user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link to='/login' className="flex items-center">
                                        <button onClick={handleSignOut} className="bg-[#03a9fc] border-0 text-white p-2 rounded-lg"><LuLogOut></LuLogOut></button>
                                    </Link>
                                </div>
                                :
                                <>
                                    <Link to='/login'>
                                        <button className="bg-[#03a9fc] border-0 text-white p-2 md:p-3 px-1 md:px-4 rounded-lg text-sm md:text-xl">Login</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};


Navbar.propTypes = {
    isDarkMode: PropTypes.bool,
    setIsDarkMode: PropTypes.func,
};

export default Navbar;