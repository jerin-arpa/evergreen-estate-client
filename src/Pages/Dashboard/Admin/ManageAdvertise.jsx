import { Helmet } from "react-helmet";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageAdvertise = () => {
    const { data: properties = [], refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/properties');
            return res.data;
        },
    });
    const axiosSecure = UseAxiosSecure();
    const verifiedProperties = properties.filter(property => property.status && property.status.toLowerCase() === 'verified' && property.role !== 'fraud');
    console.log(verifiedProperties)


    const handleAddAdvertise = (property) => {
        let totalAdvertise = 0;
        verifiedProperties.map(item => {
            if (item.advertiseStatus && item.advertiseStatus.toLowerCase() === 'verified') {
                totalAdvertise++;
            }
        })

        if (totalAdvertise >= 6) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: 'You have already exceed the maximum limit of advertise property',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        axiosSecure.patch(`/properties/verifiedAdvertise/${property._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${property.propertyTitle} is Advertised Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleRemoveAdvertise = (property) => {
        console.log(property)
        axiosSecure.patch(`/properties/removedAdvertise/${property._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${property.propertyTitle} is Removed`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }





    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Manage Advertise</title>
            </Helmet>



            <div className="container mx-auto px-5 ">
                <div className="flex items-center justify-center">
                    <h2 className="text-5xl font-bold text-center mt-10 mb-5 uppercase">Advertise property</h2>
                </div>

                <div className="divider mb-10"></div>

                <div className="overflow-x-auto w-80 md:w-[710px] lg:w-full rounded-xl shadow-2xl mb-20">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#03a9fc] font-extrabold text-white">
                            <tr>
                                <th></th>
                                <th>Property Image</th>
                                <th>Property Title</th>
                                <th>Price Range</th>
                                <th>Agent Name</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                verifiedProperties.map((property, index) => <tr key={property._id}>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={property.propertyImage} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{property.propertyTitle}</div>
                                    </td>

                                    <td className="font-bold">{`${property.minPriceRange}-${property.maxPriceRange}`}</td>

                                    <td className="font-bold">{property.agentName}</td>


                                    <th>
                                        <button disabled={property.advertiseStatus === 'Verified'} onClick={() => handleAddAdvertise(property)} className="btn w-full bg-green-600 border-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600">Advertise </button>
                                    </th>

                                    <th>
                                        <button disabled={property.advertiseStatus !== 'Verified'} onClick={() => handleRemoveAdvertise(property)} className="btn w-full bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white hover:border-red-500">Remove Advertise </button>
                                    </th>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAdvertise;