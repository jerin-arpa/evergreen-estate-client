import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddAProperty = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddProperty = event => {
        event.preventDefault();
        const form = event.target;

        const propertyTitle = form.propertyTitle.value;
        const minPriceRange = form.minPriceRange.value;
        const maxPriceRange = form.maxPriceRange.value;
        const location = form.location.value;
        const propertyImage = form.propertyImage.value;
        const description = form.description.value;
        const status = form.status.value;

        const agentName = form.agentName.value;
        const agentImage = form.agentImage.value;
        const email = form.email.value;

        const addPropertyInfo = { propertyTitle, minPriceRange, maxPriceRange, location, propertyImage, description, status, agentName, agentImage, email }

        console.log(addPropertyInfo);


        fetch('http://localhost:5000/properties', {
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
                        title: "Property Added Successfully",
                        showConfirmButton: true,
                        timer: 1500
                    });
                    form.reset();
                    navigate('/allProperties')
                }
            })
    }



    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Add Property</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">ADD A PROPERTY</h2>
            </div>

            <div className="divider"></div>

            <div className="container mx-auto px-5 mb-20">
                <div className="flex justify-center">
                    <form onSubmit={handleAddProperty} className="w-full lg:w-2/3 mt-16 border p-10 pb-14 rounded-xl">

                        {/* Property Information */}
                        <h2 className="text-xl font-bold pb-1">Property INFORMATION</h2>
                        <div>
                            <hr className="w-1/5 h-2 bg-[#03a9fc] mb-5" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Title</span>
                                    </label>
                                    <input type="text" name="propertyTitle" placeholder="Enter Property Title" className="input input-bordered" required />
                                </div>


                                <div className="flex gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Min Price Range</span>
                                        </label>
                                        <input type="number" name="minPriceRange" placeholder="Min Price Range" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Max Price Range</span>
                                        </label>
                                        <input type="number" name="maxPriceRange" placeholder="Max Price Range" className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Location</span>
                                    </label>
                                    <input type="text" name="location" placeholder="Enter Property Location" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Property Image</span>
                                        </label>
                                        <input type="text" name="propertyImage" placeholder="Enter property image" className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Write Property Description" className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Verification Status</span>
                                    </label>
                                    <input type="text" name="status" disabled defaultValue={'Pending'} className="input input-bordered" required />
                                </div>
                            </div>
                        </div>


                        {/* Agent Information */}
                        <h2 className="text-xl font-bold pb-1 mt-10">Agent INFORMATION</h2>
                        <div>
                            <hr className="w-1/5 h-2 bg-[#03a9fc] mb-5" />
                        </div>

                        <div className="w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Agent Image</span>
                                </label>
                                <input type="text" name="agentImage"
                                    defaultValue={user?.photoURL} className="input input-bordered" />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Agent Name</span>
                                </label>
                                <input type="text" name="agentName" defaultValue={user?.displayName} className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Agent Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                        </div>


                        <div>
                            <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white font-bold w-full mt-8">Add Property</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProperty;