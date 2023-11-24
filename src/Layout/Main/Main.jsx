import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const Main = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => false);


    return (
        <div data-theme={isDarkMode === true ? 'dark' : 'light'}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;