/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGripfire } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons'
import vol1 from '../../../assets/images/agent1.jpg';
import vol2 from '../../../assets/images/agent2.jpg';
import vol3 from '../../../assets/images/agent3.jpg';
import vol4 from '../../../assets/images/agent4.jpg';
import { MdCall } from "react-icons/md";



const OurAgents = () => {
    return (
        <div>
            <div className="container mx-auto px-5 py-20 pb-28">
                <div>
                    <div>
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
                            <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">OUR <span className='text-[#03a9fc]'>AGENTS</span></h1>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex justify-center"
                        >
                            <p className="mb-5 text-center lg:w-1/2">Meet our team of professional agents, who will help you find your dream house.</p>
                        </motion.div>

                        <div className="flex justify-center">
                            <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1">
                            <div className="flex justify-center mb-5">
                                <div className="w-44 h-44 bg-[#03a9fc] rounded-full flex items-center justify-center">
                                    <img className="p-1 w-40 h-40 rounded-full" src={vol1} alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold text-center">Nick Swift</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-center">Chief Technology Officer</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <div className="flex justify-center gap-3">
                                    <MdCall></MdCall>
                                    <p>Mobile: (865) 234-5679</p>
                                </div>


                                <div className="flex justify-center mt-5">
                                    <div className="space-x-4">
                                        <SocialIcon url="https://twitter.com"></SocialIcon>
                                        <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                        <SocialIcon url="https://instagram.com"></SocialIcon>
                                        <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1">
                            <div className="flex justify-center mb-5">
                                <div className="w-44 h-44 bg-[#03a9fc] rounded-full flex items-center justify-center">
                                    <img className="p-1 w-40 h-40 rounded-full" src={vol2} alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold text-center">Kathaleen Myers</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-center">Chief Operating Officer</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <div className="flex justify-center gap-3">
                                    <MdCall></MdCall>
                                    <p>Mobile: (865) 234-5679</p>
                                </div>

                                <div className="flex justify-center mt-5">
                                    <div className="space-x-4">
                                        <SocialIcon url="https://twitter.com"></SocialIcon>
                                        <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                        <SocialIcon url="https://instagram.com"></SocialIcon>
                                        <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1">
                            <div className="flex justify-center mb-5">
                                <div className="w-44 h-44 bg-[#03a9fc] rounded-full flex items-center justify-center">
                                    <img className="p-1 w-40 h-40 rounded-full" src={vol3} alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold text-center">Donald Lloyd</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-center">Chief Analytics Officer</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <div className="flex justify-center gap-3">
                                    <MdCall></MdCall>
                                    <p>Mobile: (865) 234-5679</p>
                                </div>

                                <div className="flex justify-center mt-5">
                                    <div className="space-x-4">
                                        <SocialIcon url="https://twitter.com"></SocialIcon>
                                        <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                        <SocialIcon url="https://instagram.com"></SocialIcon>
                                        <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex-1">
                            <div className="flex justify-center mb-5">
                                <div className="w-44 h-44 bg-[#03a9fc] rounded-full flex items-center justify-center">
                                    <img className="p-1 w-40 h-40 rounded-full" src={vol4} alt="" />
                                </div>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="mt-5 text-3xl font-bold text-center">Amanda Reiter</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <p className="my-3 font-bold text-center">Chief Legal Officer</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                <div className="flex justify-center gap-3">
                                    <MdCall></MdCall>
                                    <p>Mobile: (865) 234-5679</p>
                                </div>

                                <div className="flex justify-center mt-5">
                                    <div className="space-x-4">
                                        <SocialIcon url="https://twitter.com"></SocialIcon>
                                        <SocialIcon url="https://www.facebook.com/"></SocialIcon>
                                        <SocialIcon url="https://instagram.com"></SocialIcon>
                                        <SocialIcon url="https://www.linkedin.com/"></SocialIcon>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurAgents;