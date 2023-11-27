import { Helmet } from "react-helmet";
import SwiperSliders from "../SwiperSliders/SwiperSliders";
import AllProperties from "../AllProperties/AllProperties";
import RecentNews from "../RecentNews/RecentNews";
import Subscribe from "../Subscribe/Subscribe";
import OurAgents from "../OurAgents/OurAgents";
import PropertyTypes from "../PropertyTypes/PropertyTypes";


const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Home</title>
            </Helmet>


            <div>
                <SwiperSliders></SwiperSliders>
                <AllProperties></AllProperties>
                <OurAgents></OurAgents>
                <PropertyTypes></PropertyTypes>
                <RecentNews></RecentNews>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;