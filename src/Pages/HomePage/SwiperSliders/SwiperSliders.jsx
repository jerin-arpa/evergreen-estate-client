import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '../../../assets/images/7.png';
import image2 from '../../../assets/images/8.png';
import image3 from '../../../assets/images/9.png';
import image4 from '../../../assets/images/10.png';
import { FaGripfire } from 'react-icons/fa';
import { motion } from "framer-motion";



const SwiperSliders = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <div className='mb-10'>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: `url(${image1})`, backgroundAttachment: 'fixed' }}>
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
                                        <p className="mb-4 text-xl text-white">Evergreen Estate</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">Luxury <span className='text-[#03a9fc]'><br /> Living Redefined</span></h1>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <p className='text-white w-2/3'>Discover opulent residences that epitomize elegance and sophistication. Explore a curated collection of high-end properties designed for those with a taste for the extraordinary. Your dream home awaits in our portfolio of luxurious real estate.</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: `url(${image2})`, backgroundAttachment: 'fixed' }}>
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
                                        <p className="mb-4 text-xl text-white">Evergreen Estate</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">Modern <span className='text-[#03a9fc]'><br /> Homes for Urban Souls</span></h1>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <p className='text-white w-2/3'>Step into the future of urban living with our contemporary real estate offerings. From sleek city apartments to stylish lofts, find the perfect blend of comfort and convenience. Explore modern architecture and design tailored for the urban soul.</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: `url(${image3})`, backgroundAttachment: 'fixed' }}>
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
                                        <p className="mb-4 text-xl text-white">Evergreen Estate</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">Seaside Serenity <span className='text-[#03a9fc]'><br /> Coastal Living at its Finest</span></h1>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <p className='text-white w-2/3'>Escape to the tranquil beauty of coastal living with our exquisite seaside properties. Embrace the soothing rhythm of the waves and the breathtaking views of the ocean. Your coastal retreat is just a click away.</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero" style={{ backgroundImage: `url(${image4})`, backgroundAttachment: 'fixed' }}>
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
                                        <p className="mb-4 text-xl text-white">Evergreen Estate</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">Investment Opportunities <span className='text-[#03a9fc]'><br /> Realize Your Financial Goals</span></h1>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <p className='text-white w-2/3'>Unlock a world of investment potential with our carefully selected properties. From high-yield rental units to promising development projects, explore opportunities to grow your wealth in the real estate market. </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSliders;