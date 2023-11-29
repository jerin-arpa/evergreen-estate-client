import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { MdOutlineReviews, MdOutlineSupportAgent } from "react-icons/md";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const ManageReview = () => {
    const axiosSecure = UseAxiosSecure();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, []);


    const handleDeleteReview = (id) => {
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
                axiosSecure.delete(`/review/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Review has been deleted.",
                                icon: "success"
                            });
                            const remaining = reviews.filter(request => request._id !== id)
                            setReviews(remaining);
                        }
                    })
            }
        });
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Manage Review</title>
            </Helmet>

            <div className="flex items-center justify-center">
                <h2 className="text-5xl font-bold text-center mt-10 mb-5">MANAGE REVIEW</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-10">
                {
                    reviews.map(review => <div key={review._id} className="border-4 border-[#03a9fc] p-7 rounded-xl ">
                        <h2 className="text-3xl font-bold mb-4">Reviewer Info</h2>
                        <hr className="w-1/3 mb-5" />
                        <div className="flex gap-2">
                            <div className="flex justify-center">
                                {
                                    review.userImage ? (
                                        <div className='w-16 h-16'>
                                            <img className="w-16 h-16 rounded-full" src={review.userImage} alt="" />
                                        </div>
                                    ) : (
                                        <FaUserCircle className="text-5xl">
                                        </FaUserCircle>
                                    )
                                }
                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <h2 className='font-bold text-xl text-center'>{review.userName}</h2>
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr className="my-5 bg-[#03a9fc] h-2" />
                        </div>


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

                        <button onClick={() => handleDeleteReview(review._id)} className="btn w-full bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white hover:border-red-500 mt-5">Delete Review</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageReview;