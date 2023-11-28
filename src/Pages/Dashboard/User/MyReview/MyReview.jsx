import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const MyReview = () => {
    const { user } = useContext(AuthContext);


    const { data: reviewData, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/review');
            return res.json();
        },
    });

    console.log(reviewData)
    const review = reviewData ? reviewData.filter(item => item.userEmail.toLowerCase() === user?.email.toLowerCase()) : [];

    console.log(review);

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/review/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your property has been deleted.',
                                    'success'
                                )
                                refetch();
                            }
                        })
                }
            })
    }



    return (
        <div>
            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">My Review</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10">
                {
                    review.length === 0 ? <div className="col-span-3 flex justify-center">
                        <div>
                            <div className="flex justify-center">
                                <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                            </div>
                            <h2 className="
                         text-4xl font-bold text-[#03a9fc] text-center"> There are currently <br /> no Review Initiated by you </h2>
                        </div>
                    </div>
                        :
                        review.map(card => <div key={card._id} className="mb-5 rounded-xl shadow-xl">
                            <div>
                                <div className="col-span-1">
                                    <img className="w-full h-full" src={card.property.propertyImage} alt="" />
                                </div>
                                <div className="flex items-center col-span-3 p-5 ">
                                    <div>
                                        <div className='md:h-52'>
                                            <p className='text-2xl text-[#03a9fc] font-bold '>{card.property.propertyTitle}</p>

                                            <p className='text-lg mt-2'><span className='font-bold'>Agent Name:</span> {card.property.agentName}</p>

                                            <p className='text-lg mt-2'><span className='font-bold'>Review Time:</span> {card.reviewTime}</p>

                                            <p className='text-lg'><span className='font-bold'>Review:</span> {card.reviewDescription}</p>

                                            <p className='text-lg'><span className='font-bold'>Verification Status:</span> {card.property.status}</p>
                                        </div>


                                        <div className='my-5 flex gap-5 w-full'>
                                            <button onClick={() => handleDelete(card._id)} className="btn w-full bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white hover:border-red-500">Delete Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyReview;