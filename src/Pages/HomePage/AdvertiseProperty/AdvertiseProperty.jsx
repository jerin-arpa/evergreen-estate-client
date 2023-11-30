import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";

const AdvertiseProperty = () => {
    return (
        <div className="container mx-auto px-5 mb-20">
            <div className="mb-14">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center">
                    <div className="flex ">
                        <div>
                            <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                        </div>
                        <p className="mb-4 text-xl text-center">Evergreen Estate</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">ADVERTISE <span className='text-[#03a9fc]'>PROPERTY</span></h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <p className="mb-5 text-center lg:w-1/2">Explore a diverse range of exquisite properties designed to cater to every lifestyle. Evergreen Estate offers a collection of homes that blend modern comfort with timeless elegance.</p>
                </motion.div>

                <div className="flex justify-center">
                    <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            </div>
        </div>
    );
};

export default AdvertiseProperty;