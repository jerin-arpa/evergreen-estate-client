import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaDollarSign, FaUserCircle } from 'react-icons/fa';
import { MdDomainVerification } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const PropertyCard = ({ property }) => {
    useEffect(() => {
        AOS.init();
    }, []);


    const { _id, propertyImage, propertyTitle, location, minPriceRange, maxPriceRange, status, agentImage, agentName } = property;

    return (
        <div className='rounded-xl shadow-xl'>
            <img data-aos="fade-down" data-aos-duration="3000" className='w-full h-72 rounded-t-xl' src={propertyImage} alt="" />
            <div data-aos="fade-up" data-aos-duration="3000" className='p-5 pb-8'>
                <div className='md:h-[150px]'>
                    <h2 className='text-2xl font-bold mb-2'>{propertyTitle}</h2>
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
                        <p><span className='font-bold'>Price Range:</span> {`$${minPriceRange}-$${maxPriceRange}`}</p>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <div className='flex items-center text-[#03a9fc]'>
                            <MdDomainVerification></MdDomainVerification>
                        </div>
                        <p><span className='font-bold'>Verification Status:</span> {status}</p>
                    </div>
                </div>

                <hr className='my-4' />

                <div className='h-14'>
                    <div className='flex gap-2'>
                        {
                            agentImage ? (
                                <img className="w-14 h-14 rounded-full" src={agentImage} alt="" />
                            ) : (
                                <FaUserCircle className="text-5xl">
                                </FaUserCircle>
                            )
                        }
                        <div className='flex items-center'>
                            <h2 className='text-lg font-bold uppercase'>{agentName}</h2>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-4'>
                    <Link className='w-full' to={`/propertyDetails/${_id}`}>
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