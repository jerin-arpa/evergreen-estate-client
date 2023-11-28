import { Helmet } from "react-helmet";
import { FaDollarSign, FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { MdOutlineReviews, MdOutlineSupportAgent } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import useWishlist from "../../hooks/useWishlist";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";


const PropertyDetails = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const { user } = useContext(AuthContext);
    const properties = useLoaderData();
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = useWishlist();

    const { id } = useParams();
    const property = properties.find(property => property._id === id);
    console.log(property);

    const { propertyImage, propertyTitle, location, priceRange, agentImage, agentName, email, description } = property;
    const reviewTime = moment().format("YYYY-MM-D, h:mm a");


    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);

    console.log('Before review', reviews);

    const review = reviews.filter(item => item.property._id === property._id);
    console.log('Review has been done', review);




    const handleAddToWishlist = () => {
        const newProduct = { userEmail: user.email, property };

        axiosSecure.post('/wishlist', newProduct)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Property added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    refetch();
                }
            })
    }


    const handleAddReview = event => {
        event.preventDefault();
        const reviewDescription = event.target.writeReview.value;
        console.log(reviewDescription);


        const newProperty = {
            userName: user?.displayName,
            userImage: user?.photoURL,
            userEmail: user?.email,
            property,
            reviewTime,
            reviewDescription,
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProperty),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Request Send successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    navigate('/');
                }
            })
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | All Properties | Property Details</title>
            </Helmet>


            <div className="container mx-auto px-5 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div data-aos="fade-down" data-aos-duration="3000" className="flex flex-col lg:flex-row rounded-xl shadow-xl lg:col-span-2">
                        <div className="flex-1">
                            <img className="h-full w-full" src={propertyImage} alt="" />
                        </div>

                        <div className="flex items-center flex-1">
                            <div className="px-5 pb-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-3">{propertyTitle}</h2>
                                    <div className='flex gap-2 text-lg'>
                                        <div className='flex items-center text-[#03a9fc]'>
                                            <FaDollarSign></FaDollarSign>
                                        </div>
                                        <p><span className='font-bold'>Price Range:</span> {priceRange}</p>
                                    </div>

                                    <div className='flex gap-2 text-lg'>
                                        <div className='flex items-center text-[#03a9fc]'>
                                            <FaLocationDot></FaLocationDot>
                                        </div>
                                        <p><span className='font-bold'>Pickup Location: </span>{location}</p>
                                    </div>
                                    <p className='mt-2'>{description}</p>
                                </div>

                                <div className="flex gap-5">
                                    <button onClick={handleAddToWishlist} className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc] mt-5">Add To Wishlist</button>


                                    {/*modal */}
                                    <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc] mt-5">Add A Review</button>
                                </div>

                                <dialog id="my_modal_4" className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <form method="dialog">
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>

                                        <form onSubmit={handleAddReview}>
                                            {/* Modal Information */}
                                            <div>
                                                {/* Property Information */}
                                                <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col md:flex-row border border-[#03a9fc] rounded-xl mt-5">
                                                    <div className="flex-1 p-5">
                                                        <h2 className="text-3xl font-bold mb-3">{propertyTitle}</h2>
                                                        <h2 className="text-xl font-bold mb-3">Agent Name: {agentName}</h2>

                                                        <div className='flex gap-2 text-lg mb-1'>
                                                            <div className='flex items-center text-[#03a9fc]'>
                                                                <BsFillCalendar2DateFill></BsFillCalendar2DateFill>
                                                            </div>
                                                            <p><span className='font-bold'>Review Time:</span> {reviewTime}</p>
                                                        </div>

                                                        <div className='text-lg'>
                                                            <div className="flex gap-2 mb-2">
                                                                <div className='flex items-center text-[#03a9fc]'>
                                                                    <GiNotebook></GiNotebook>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <p className='font-bold'>Write Review Description:
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <textarea placeholder="Write review" name="writeReview" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            {/* Add Review button */}
                                            <div className="flex justify-center my-5">
                                                <div className="w-full">
                                                    <button className="btn w-full bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">Add Review</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="lg:col-span-1">
                        <div className="shadow-xl rounded-xl py-10 px-5 ">
                            <div className="flex justify-center mb-5">
                                {
                                    agentImage ? (
                                        <div className='w-36 h-36'>
                                            <img className="w-36 h-36  rounded-full" src={agentImage} alt="" />
                                        </div>
                                    ) : (
                                        <FaUserCircle className="text-9xl">
                                        </FaUserCircle>
                                    )
                                }
                            </div>
                            <div>
                                <h2 className="text-2xl text-center uppercase font-bold"><span className="text-lg">Agent:</span> <br /> {agentName}</h2>
                                <p className="text-sm font-bold text-center my-1">{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5">
                <h2 data-aos="fade-up" data-aos-duration="3000" className="text-3xl font-bold text-center mt-14 mb-7">{propertyTitle} <br /> All Reviews</h2>

                <div className="flex justify-center">
                    <hr className="mb-7 bg-[#03a9fc] h-2 w-1/2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
                    {
                        review.map(review => <div key={review._id} className="border-4 border-[#03a9fc] p-7 rounded-xl ">
                            <div className='flex gap-3 h-14'>
                                <div>
                                    {
                                        review.userImage ? (
                                            <div className='w-14 h-14'>
                                                <img className="w-14 h-14 rounded-full" src={review.userImage} alt="" />
                                            </div>
                                        ) : (
                                            <FaUserCircle className="text-5xl">
                                            </FaUserCircle>
                                        )
                                    }
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <h2 className='font-bold text-xl'>{review.userName}</h2>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5" />

                            <h2 className="text-2xl font-bold"> {review.property.propertyTitle}</h2>

                            <div className="flex gap-2 mt-4">
                                <div className="flex items-center">
                                    <MdOutlineSupportAgent className="text-[#03a9fc] text-xl"></MdOutlineSupportAgent>
                                </div>

                                <p className="text-xl"><span className="font-bold">Agent Name:</span> {review.property.agentName}</p>
                            </div>

                            <div className="flex gap-2">
                                <div className="flex items-center">
                                    <IoTime className="text-[#03a9fc] text-xl"></IoTime>
                                </div>

                                <p className="text-xl"><span className="font-bold">Review Time:</span> {review.reviewTime}</p>
                            </div>

                            <div className="flex gap-2 ">
                                <div className="flex items-center">
                                    <MdOutlineReviews className="text-[#03a9fc] text-xl"></MdOutlineReviews>
                                </div>

                                <p className="text-xl"><span className="font-bold">Review:</span> {review.reviewDescription}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default PropertyDetails;