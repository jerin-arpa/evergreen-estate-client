/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import banner from '../../assets/images/1.png';
import about1 from '../../assets/images/2.png';
import about2 from '../../assets/images/3.png';
import about3 from '../../assets/images/4.png';
import about4 from '../../assets/images/2.png';
import { Helmet } from "react-helmet";


const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | About</title>
            </Helmet>

            <div className="hero" style={{ backgroundImage: `url(${banner})`, backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                    <div className='flex-1'>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="flex gap-3">
                                <div className="flex">
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl text-white">About Us</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">About  <span className='text-[#03a9fc]'><br /> Evergreen Estate</span></h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-5 py-14">
                <div>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex justify-center">
                            <div className="flex ">
                                <div>
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl text-center">Food Sharing</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">WHO <span className='text-[#03a9fc]'>WE</span> ARE</h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex justify-center"
                        >
                            <p className="mb-5 text-center lg:w-1/2">Join our community of food enthusiasts to share delicious meals, build connections, and spread happiness one plate at a time.</p>
                        </motion.div>

                        <div className="flex justify-center">
                            <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
                        </div>
                    </div>
                </div>


                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about1} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Building Bridges</span> Through Food</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p>At CommunitySharePlate, we are more than just a food sharing platform; we are bridge builders. Our passion lies in forging connections between neighbors, businesses, and communities, all centered around a shared love for food. We're dedicated to creating a space where surplus food is shared, waste is reduced, and the joy of giving and receiving nourishment unites us. Join our journey to make a difference, one plate at a time.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about2} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Food Equity</span> and Sustainability</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p>CommunitySharePlate is committed to addressing the dual challenges of food equity and sustainability. Our goal is to ensure that everyone has equal access to nutritious meals, while also reducing food waste and its environmental impact. With a focus on social responsibility and a sustainable future, we are dedicated to making a positive impact on both communities and the planet.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about3} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Our Mission:</span> Nourishing Together</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p>At CommunitySharePlate, our mission is to bring people together through the power of food. We believe in creating a world where no one goes to bed hungry. Through our community-driven food sharing platform, we connect those with surplus food to those in need, fostering a sense of togetherness and ensuring that delicious, nutritious meals are accessible to all.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="flex-1">
                            <img className="w-full h-[420px]" src={about4} alt="" />
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p className="my-5 text-3xl font-bold"><span className=" text-[#03a9fc]">Our Vision:</span> A Hunger-Free Tomorrow</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <p>Our vision at CommunitySharePlate is a future where every community is nourished, and no one faces the pain of hunger. We aspire to create a world where food resources are shared efficiently, and the bonds of compassion, support, and community thrive. Join us as we work towards a hunger-free tomorrow, one meal at a time.  Join us in our mission for a more equitable and sustainable food system.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hero" style={{ backgroundImage: `url(${banner})`, backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='container mx-auto px-5 py-28 flex flex-col lg:flex-row gap-10'>
                    <div className='flex-1'>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="flex justify-center gap-3 mb-5">
                                <div>
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl text-white">Work On</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <h1 className="mb-5 text-3xl lg:text-6xl text-center  font-bold text-white">We Work As a Charity, Social, Non-profit, NGO, Foundarisign Organization.</h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="flex justify-center mt-10"
                            >
                                <button className="btn bg-[#03a9fc] border-[#03a9fc] text-white hover:bg-white hover:text-[#03a9fc] hover:border-[#03a9fc] px-14">DONATE NOW</button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;