import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import image1 from '../../../assets/images/10.png';
import image2 from '../../../assets/images/11.png';
import image3 from '../../../assets/images/12.png';
import image4 from '../../../assets/images/13.png';
import image5 from '../../../assets/images/14.png';

const PropertyTypes = () => {
    return (
        <div className="container mx-auto px-5 mb-20 pt-10">
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
                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">PROPERTY <span className='text-[#03a9fc]'>BY CITIES</span></h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <p className="mb-5 text-center lg:w-1/2">Explore all the different cities properties so you can choose the best option for you.</p>
                </motion.div>

                <div className="flex justify-center">
                    <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="col-span-3">
                    <div className="grid lg:grid-cols-3 gap-5 mb-5">
                        <div className="col-span-2">
                            <img className="w-full lg:h-80" src={image1} alt="" />
                        </div>
                        <div className="col-span-1">
                            <img className="w-full lg:h-full" src={image2} alt="" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-5">
                        <div className="col-span-1">
                            <img className="w-full lg:h-full" src={image4} alt="" />
                        </div>
                        <div className="col-span-2">
                            <img className="w-full h-80" src={image3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <img className="w-full h-full" src={image5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PropertyTypes;