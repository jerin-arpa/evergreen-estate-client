import { Helmet } from "react-helmet";
import SwiperSliders from "../SwiperSliders/SwiperSliders";
import Advertisement from "../Advertisement/Advertisement";


const Home = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Home</title>
            </Helmet>


            <div>
                <SwiperSliders></SwiperSliders>
                <Advertisement></Advertisement>
            </div>
        </div>
    );
};

export default Home;