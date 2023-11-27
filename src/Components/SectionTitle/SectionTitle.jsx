import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { FaGripfire } from 'react-icons/fa';


const SectionsTitle = ({ heading, subHeading }) => {
    return (
        <div className='my-10'>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex justify-center gap-3">
                <div className="flex">
                    <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                </div>
                <p className="mb-4 text-xl">Evergreen Estate</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">{heading}</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className='flex justify-center'
            >
                <p className="mb-5 text-center lg:w-1/2">{subHeading}</p>
            </motion.div>

            <div className="flex justify-center mt-5">
                <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
            </div>
        </div>
    );
};

SectionsTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
};

export default SectionsTitle;