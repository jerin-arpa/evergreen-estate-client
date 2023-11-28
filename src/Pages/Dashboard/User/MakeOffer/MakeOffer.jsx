import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import moment from "moment/moment";



const MakeOffer = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const wishlist = useLoaderData();
    const { id } = useParams();
    const reviewTime = moment().format("YYYY-MM-D");


    const userWishlist = wishlist.filter(item => item.userEmail.toLowerCase() === user?.email.toLowerCase());

    const makeOffer = userWishlist.find(makeOffer => makeOffer._id === id);
    console.log(makeOffer);


    const handleAddProperty = event => {
        event.preventDefault();
        const form = event.target;

        const propertyTitle = form.propertyTitle.value;
        const location = form.location.value;
        const agentName = form.agentName.value;
        const offeredAmount = form.offeredAmount.value;
        const propertyImage = form.propertyImage.value;
        const status = form.status.value;

        const buyerName = form.buyerName.value;
        const email = form.email.value;
        const date = form.date.value;

        const addPropertyInfo = { propertyTitle, propertyImage, location, agentName, status, offeredAmount, buyerName, email, date }

        console.log(addPropertyInfo);


        fetch('http://localhost:5000/offeredAmount', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addPropertyInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Offer Send Successfully",
                        showConfirmButton: true,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/dashboard/propertyBought')
                }
            })
    }



    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Make An Offer</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">Make an offer</h2>
            </div>

            <div className="divider mb-10"></div>

            <div className="container mx-auto px-5 mb-20">
                <div className="flex justify-center">
                    <form onSubmit={handleAddProperty} className="w-full lg:w-2/3 shadow-2xl p-10 pb-14 rounded-xl">

                        {/* Property Information */}
                        <h2 className="text-xl font-bold pb-1 uppercase">Property INFORMATION</h2>
                        <div>
                            <hr className="w-1/2 h-2 bg-[#03a9fc] mb-5" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Title</span>
                                    </label>
                                    <input disabled type="text" name="propertyTitle" defaultValue={makeOffer.property.propertyTitle} className="input input-bordered" required />
                                </div>

                                <div className="w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Property Image</span>
                                        </label>
                                        <input disabled type="text" name="propertyImage" placeholder={makeOffer.property.propertyImage} className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Agent Name</span>
                                    </label>
                                    <input disabled type="text" name="agentName" defaultValue={makeOffer.property.agentName} className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Location</span>
                                    </label>
                                    <input disabled type="text" name="location" defaultValue={makeOffer.property.location} className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Verification Status</span>
                                    </label>
                                    <input type="text" name="status" disabled defaultValue={'Pending'} className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Offered Amount <span className="text-[#03a9fc]">({makeOffer.property.priceRange})</span></span>
                                    </label>
                                    <input type="text" name="offeredAmount" placeholder="Enter You offered Amount" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>


                        {/* Buyer Information */}
                        <h2 className="text-xl font-bold pb-1 mt-10">Buyer INFORMATION</h2>
                        <div>
                            <hr className="w-1/2 h-2 bg-[#03a9fc] mb-5" />
                        </div>

                        <div className="w-full">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Buyer Name</span>
                                </label>
                                <input disabled type="text" name="buyerName" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Buyer Email</span>
                                </label>
                                <input disabled type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Buying Date</span>
                                </label>
                                <input type="date" name="date" defaultValue={reviewTime} className="input input-bordered" required />
                            </div>
                        </div>


                        <div>
                            <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white font-bold w-full mt-8">Send Offer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeOffer;