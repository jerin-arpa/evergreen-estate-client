import { FaGripfire, FaHome, FaPhone } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import banner from '../../assets/images/1.png';
import banner2 from '../../assets/images/2.png';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Contact Us</title>
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
                                <p className="mb-4 text-xl text-white">Contact With Us</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-white">Contact With  <span className='text-[#03a9fc]'><br /> Evergreen Estate</span></h1>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-5 pt-5 py-20 mt-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1">
                        <div>
                            <div className="flex gap-3">
                                <div className="flex">
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl">Contact Us</p>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">New York <span className="text-[#03a9fc]">Office</span></h1>
                            <p className="mb-5">Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum. Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit amet sem at, mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est finibus, rutrum ornare velit pellentesque. Ut arcu magna, interdum eget egestas eget, sagittis a libero. Donec felis tellus, vehicula at purus condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Call Us</h3>
                                    <p>(866) 123 4567</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        216 Trinity Ave, Pasadena,</h3>
                                    <p>CA 95046, United States</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Have any Questions?</h3>
                                    <p>info@stylemixthemes.net</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Monday — Friday</h3>
                                    <p>9:00 AM — 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex-1">
                        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273750.5722171378!2d-73.90903932201854!3d40.70601539022244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1700820472436!5m2!1sen!2sbd"></iframe>
                    </motion.div>
                </div>

                <div className="divider my-20"></div>

                <div className="flex flex-col-reverse lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex-1">
                        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502595.146296284!2d-119.306607!3d37.2691675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1700821561816!5m2!1sen!2sbd"></iframe>
                    </motion.div>

                    <div className="flex-1">
                        <div>
                            <div className="flex gap-3">
                                <div className="flex">
                                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                                </div>
                                <p className="mb-4 text-xl">Contact Us</p>
                            </div>
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">California <span className="text-[#03a9fc]">Office</span></h1>
                            <p className="mb-5">Morbi mollis elit vitae elit molestie lobortis. Cras eu purus ipsum. Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit amet sem at, mollis congue eros. Quisque vel mattis eros. Proin euismod massa id est finibus, rutrum ornare velit pellentesque. Ut arcu magna, interdum eget egestas eget, sagittis a libero. Donec felis tellus, vehicula at purus condimentum, hendrerit dictum odio. Vivamus et condimentum sapien.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Call Us</h3>
                                    <p>(866) 123 4567</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        216 Trinity Ave, Pasadena,</h3>
                                    <p>CA 95046, United States</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Have any Questions?</h3>
                                    <p>info@stylemixthemes.net</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <FaPhone className="text-3xl text-[#03a9fc]"></FaPhone>
                                <div>
                                    <h3 className="text-xl font-bold">Monday — Friday</h3>
                                    <p>9:00 AM — 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divider my-20"></div>


                <div className="px-20 pb-20">
                    <div>
                        <div className="flex justify-center gap-3">
                            <div className="flex">
                                <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                            </div>
                            <p className="mb-4 text-xl">Contact With Us</p>
                        </div>
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-center">Drop us a <span className="text-[#03a9fc]">line below</span></h1>
                        <div className="flex justify-center">
                            <p className="mb-8 text-center w-1/2">Top rated construction packages we pleasure rationally encounter
                                consequences interesting who loves or pursue or desires.</p>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="flex-1 border rounded-xl p-14">
                            <h2 className="text-2xl font-bold mb-4 text-[#03a9fc]">Feedback From</h2>
                            <div className=" gap-8 mb-6">
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                            </div>
                            <div className="gap-8 mb-6">
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
                            </div>
                            <div className="mb-6">
                                <textarea className="textarea textarea-bordered  textarea-lg w-full" placeholder="Message"></textarea>
                            </div>
                            <button className="btn w-full bg-[#03a9fc] border-[#03a9fc] text-white hover:bg-white hover:text-[#03a9fc] hover:border-[#03a9fc] px-14">Submit</button>
                        </div>


                        <div className="border rounded-xl p-14 flex-1">
                            <div>
                                <h2 className="text-3xl font-bold">Office Address</h2>
                                <hr className="my-3 w-1/3" />
                                <p className="text-lg">Sylhet Sadar, Sylhet Bangladesh</p>
                            </div>

                            <div className="my-8">
                                <h2 className="text-3xl font-bold">Phone Number</h2>
                                <hr className="my-3 w-1/3" />
                                <p className="text-lg">+880XXXXXXXXXX</p>
                                <p className="text-lg">+880XXXXXXXXXX</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">Web Address</h2>
                                <hr className="my-3 w-1/3" />
                                <p className="text-lg">info@example.com</p>
                                <p className="text-lg">www.example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hero" style={{ backgroundImage: `url(${banner2})`, backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='container mx-auto px-5 py-28 md:py-44 flex flex-col lg:flex-row gap-10'>
                    <div className='flex-1'>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                            >
                                <div className="flex gap-16">
                                    <div className="bg-[#03a9fc] text-white p-14 flex gap-5 bg-opacity-50">
                                        <FaHome className="text-8xl"></FaHome>
                                        <div>
                                            <h2 className="text-3xl">Looking For the new home? </h2>
                                            <p className="w-2/3">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                                            </p>
                                        </div>
                                    </div>


                                    <div className="bg-[#03a9fc] text-white p-14 flex gap-5 bg-opacity-50">
                                        <TbHomeStats className="text-8xl"></TbHomeStats>
                                        <div>
                                            <h2 className="text-3xl">Want to sell your home? </h2>
                                            <p className="w-2/3">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.
                                            </p>
                                        </div>
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

export default Contact;