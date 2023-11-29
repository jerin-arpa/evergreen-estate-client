import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaDollarSign, FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDomainVerification } from "react-icons/md";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";


const AddedProperties = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const axiosSecure = UseAxiosSecure();
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProperties(data)
            })
    }, [])

    // const addedProperty = properties.filter(item => item.userEmail?.toLowerCase() === user?.email.toLowerCase());
    // console.log(addedProperty)

    const handleDeleteProperty = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/properties/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Review has been deleted.",
                                icon: "success"
                            });
                            const remaining = properties.filter(request => request._id !== id)
                            setProperties(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Added Property</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">MY ADDED PROPERTY</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    properties.map(property => <div key={property._id}>
                        <div className='rounded-xl shadow-xl'>
                            <img data-aos="fade-down" data-aos-duration="3000" className='w-full h-64 rounded-t-xl' src={property.propertyImage} alt="" />
                            <div data-aos="fade-up" data-aos-duration="3000" className='p-5 pb-8'>
                                <div className='md:h-[150px]'>
                                    <h2 className='text-2xl font-bold mb-2'>{property.propertyTitle}</h2>
                                    <div className='flex gap-2 text-lg'>
                                        <div className='flex items-center text-[#03a9fc]'>
                                            <FaLocationDot></FaLocationDot>
                                        </div>
                                        <p><span className='font-bold'>Location: </span>{property.location}</p>
                                    </div>
                                    <div className='flex gap-2 text-lg'>
                                        <div className='flex items-center text-[#03a9fc]'>
                                            <FaDollarSign></FaDollarSign>
                                        </div>
                                        <p><span className='font-bold'>Price Range:</span> {`$${property.minPriceRange}-$${property.maxPriceRange}`}</p>
                                    </div>
                                    <div className='flex gap-2 text-lg'>
                                        <div className='flex items-center text-[#03a9fc]'>
                                            <MdDomainVerification></MdDomainVerification>
                                        </div>
                                        <p><span className='font-bold'>Verification Status:</span>
                                            {
                                                property.status === 'Pending' && <span className="text-warning"> {property.status}</span>
                                            }
                                            {
                                                property.status === 'Verified' && <span className="text-green-500"> {property.status}</span>
                                            }
                                            {
                                                property.status === 'Rejected' && <span className="text-red-600"> {property.status}</span>
                                            }
                                        </p>
                                    </div>
                                </div>

                                <hr className='my-4' />

                                <div className='h-14'>
                                    <div className='flex gap-2'>
                                        {
                                            property.agentImage ? (
                                                <img className="w-14 h-14 rounded-full" src={property.agentImage} alt="" />
                                            ) : (
                                                <FaUserCircle className="text-5xl">
                                                </FaUserCircle>
                                            )
                                        }
                                        <div className='flex items-center'>
                                            <h2 className='text-lg font-bold uppercase'>{property.agentName}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex gap-5 mt-4'>
                                    {
                                        property.status === 'Rejected' && (<button disabled className="btn px-8 flex-1 bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">Update</button>)
                                    }
                                    {(property.status === 'Verified' || property.status === 'Pending') && (
                                        <button
                                            onClick={() => navigate(`/dashboard/updateProperty/${property._id}`)}
                                            className="btn flex-1 px-8 bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]"
                                        >
                                            Update
                                        </button>
                                    )}

                                    <button onClick={() => handleDeleteProperty(property._id)} className="btn flex-1 px-8 bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white hover:border-red-500">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AddedProperties;