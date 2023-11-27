import { FaGripfire } from "react-icons/fa";
import image from '../../../assets/images/2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Subscribe = () => {

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className="mb-20">
            <div className="hero py-32" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                <div className='container mx-auto px-5 py-16'>
                    <div className='mb-10'>
                        <div>
                            <div data-aos="zoom-in"
                                data-aos-duration="2000" className="flex justify-center gap-3">
                                <div>
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-6 text-xl text-black">Food Sharing</p>
                            </div>
                            <div data-aos="zoom-in"
                                data-aos-duration="2000">
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-black text-center">Don’t miss out <br /> <span className="text-[#03a9fc]">on the Latest News</span></h1>

                                <p className="text-black font-bold text-3xl text-center">We won’t spam you and we respect your privacy.</p>


                                <div className="flex justify-center mt-10 md:ml-0">
                                    <div className="lg:w-1/3">
                                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                                        <div className="flex justify-center mt-7">
                                            <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;