import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { MdDomainVerification } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const PropertyCard = ({ property }) => {
    useEffect(() => {
        AOS.init();
    }, []);


    const { image, title, location, priceRange, verificationStatus } = property;

    return (
        <div className='rounded-xl shadow-xl'>
            <img data-aos="fade-down" data-aos-duration="3000" className='w-full h-64 rounded-t-xl' src={image} alt="" />
            <div data-aos="fade-up" data-aos-duration="3000" className='p-5 pb-8'>
                <div className='md:h-48'>
                    <h2 className='text-2xl font-bold mb-2'>{title}</h2>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#03a9fc]'>
                            <FaLocationDot></FaLocationDot>
                        </div>
                        <p><span className='font-bold'>Location: </span>{location}</p>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#03a9fc]'>
                            <FaDollarSign></FaDollarSign>
                        </div>
                        <p><span className='font-bold'>Price Range:</span> {priceRange}</p>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#03a9fc]'>
                            <MdDomainVerification></MdDomainVerification>
                        </div>
                        <p><span className='font-bold'>Verification Status:</span> {verificationStatus}</p>
                    </div>

                </div>

                <div className='flex justify-center mt-4'>
                    <Link className='w-full'>
                        <button className="btn w-full bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.object,
};

export default PropertyCard;