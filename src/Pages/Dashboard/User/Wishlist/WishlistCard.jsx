import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const WishlistCard = ({ card, myWishlist, setMyWishlist }) => {

    const { propertyImage, propertyTitle, location, agentName, agentImage, status, minPriceRange, maxPriceRange } = card.property;
    const { _id } = card;

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
                    fetch(`http://localhost:5000/wishlist/${_id}`, {
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
                                const remaining = myWishlist.filter(request => request._id !== _id)
                                setMyWishlist(remaining);
                            }
                        })
                }
            })
    }



    return (
        <div>
            <div className="mb-5 rounded-xl shadow-xl">
                <div>
                    <div className="col-span-1">
                        <img className="w-full h-72" src={propertyImage} alt="" />
                    </div>
                    <div className="flex items-center col-span-3 px-5 pt-5">
                        <div>
                            <div>
                                <p className='text-2xl text-[#03a9fc] font-bold '>{propertyTitle}</p>

                                <p className='text-lg mt-2'><span className='font-bold'>Price:</span>{`$${minPriceRange}-$${maxPriceRange}`}</p>

                                <p className='text-lg'><span className='font-bold'>Location:</span> {location}</p>

                                <p className='text-lg'><span className='font-bold'>Verification Status:</span> {status}</p>
                            </div>

                            <hr className='my-3' />

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
                        </div>
                    </div>

                    <div className='my-5 flex gap-5 w-full px-5 pb-5'>
                        <Link to={`/dashboard/makeOffer/${_id}`}>
                            <button className="btn px-7 bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">Make An Offer</button>
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="btn flex-1 bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white hover:border-red-500">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

WishlistCard.propTypes = {
    card: PropTypes.object,
    myWishlist: PropTypes.array,
    setMyWishlist: PropTypes.func,
};

export default WishlistCard;