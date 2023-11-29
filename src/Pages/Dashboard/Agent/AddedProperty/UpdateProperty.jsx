import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProperty = () => {
    const property = useLoaderData();
    console.log(property);

    console.log('Property ID:', property._id);


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
        const role = property.role;

        const addPropertyInfo = { propertyTitle, minPriceRange, maxPriceRange, location, propertyImage, description, status, agentName, agentImage, email, role }

        console.log(addPropertyInfo);


        if (minPriceRange > maxPriceRange) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Oops...",
                text: 'Minimum price range should be greater then maximum price range',
                showConfirmButton: true,
                timer: 1500
            });
            return;
        }


        fetch(`http://localhost:5000/properties/${property._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addPropertyInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Property Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/dashboard/addedProperties');
                        }
                    })

                }
            })
    }

    return (
        <div className="mb-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Update Property</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">UPDATE PROPERTY</h2>
            </div>

            <div className="divider mb-10"></div>

            <div className="container mx-auto px-5 mb-20">
                <div className="flex justify-center">
                    <form onSubmit={handleAddProperty} className="w-full lg:w-2/3 border p-10 pb-14 rounded-xl">

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
                                    <input type="text" name="propertyTitle" defaultValue={property.propertyTitle} className="input input-bordered" required />
                                </div>


                                <div className="flex gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Min Price Range</span>
                                        </label>
                                        <input type="number" name="minPriceRange" defaultValue={property.minPriceRange} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Max Price Range</span>
                                        </label>
                                        <input type="number" name="maxPriceRange" defaultValue={property.maxPriceRange} className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Property Location</span>
                                    </label>
                                    <input type="text" name="location" defaultValue={property.location} className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="w-full">
                                <div className="w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Property Image</span>
                                        </label>
                                        <input type="text" name="propertyImage" defaultValue={property.propertyImage} className="input input-bordered" required />
                                    </div>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" name="description" defaultValue={property.description} className="input input-bordered" required />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Verification Status</span>
                                    </label>
                                    <input type="text" name="status" disabled defaultValue={property.status} className="input input-bordered" required />
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
                                    defaultValue={property.agentImage} className="input input-bordered" />
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Agent Name</span>
                                </label>
                                <input disabled type="text" name="agentName" defaultValue={property.agentName} className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Agent Email</span>
                                </label>
                                <input disabled type="email" name="email" defaultValue={property.email} className="input input-bordered" required />
                            </div>
                        </div>


                        <div>
                            <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white font-bold w-full mt-8">Update Property</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProperty;