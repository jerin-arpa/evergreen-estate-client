import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const Main = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);


    return (
        <div className="min-h-screen" data-theme={isDarkMode === true ? 'dark' : 'light'}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
            <Outlet></Outlet>
            <div className="absolute w-full bottom-0">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;