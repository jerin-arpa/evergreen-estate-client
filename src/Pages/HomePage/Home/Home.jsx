import { Helmet } from "react-helmet";
import SwiperSliders from "../SwiperSliders/SwiperSliders";
import RecentNews from "../RecentNews/RecentNews";
import Subscribe from "../Subscribe/Subscribe";
import OurAgents from "../OurAgents/OurAgents";
import PropertyTypes from "../PropertyTypes/PropertyTypes";
import AdvertiseProperty from "../AdvertiseProperty/AdvertiseProperty";
import LatestReview from "../LatestReview/LatestReview";


const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Home</title>
            </Helmet>


            <div>
                <SwiperSliders></SwiperSliders>
                <AdvertiseProperty></AdvertiseProperty>
                <OurAgents></OurAgents>
                <PropertyTypes></PropertyTypes>
                <LatestReview></LatestReview>
                <RecentNews></RecentNews>
                <Subscribe></Subscribe>
            </div>
        </div>
    );
};

export default Home;