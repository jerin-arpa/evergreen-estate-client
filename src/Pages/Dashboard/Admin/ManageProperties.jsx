import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";



const ManageProperties = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: property = [], refetch } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/properties');
            return res.data;
        },
    });


    const handleVerify = row => {
        console.log(row)
        axiosSecure.patch(`/properties/verify/${row._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${row.propertyTitle} is verified`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleReject = row => {
        console.log(row)
        axiosSecure.patch(`/properties/reject/${row._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${row.propertyTitle} is Rejected`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div>
            <div className="flex items-center justify-center">
                <h2 className="text-5xl font-bold text-center mt-10 mb-5">MANAGE PROPERTY</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="overflow-x-auto rounded-xl shadow-2xl">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#03a9fc] font-extrabold text-white">
                        <tr>
                            <th></th>
                            <th>Property Title</th>
                            <th>Location</th>
                            <th>Agent Name</th>
                            <th>Agent Email</th>
                            <th>Price Range</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            property.map((row, index) => <tr key={row._id}>
                                <th>{index + 1}</th>

                                <td className="font-bold">{row.propertyTitle}</td>
                                <td className="font-bold">{row.location}</td>
                                <td className="font-bold">{row.agentName}</td>
                                <td className="font-bold">{row.email}</td>
                                <td className="font-bold">{`$${row.minPriceRange}-$${row.maxPriceRange}`}</td>

                                {
                                    row.status === 'Pending' && <td className="font-bold text-warning">{row.status}</td>
                                }
                                {
                                    row.status === 'Verified' && <td className="font-bold text-green-500">{row.status}</td>
                                }
                                {
                                    row.status === 'Rejected' && <td className="font-bold text-red-500">{row.status}</td>
                                }

                                <td>
                                    <button disabled={row.status !== 'Pending'} onClick={() => handleVerify(row)}
                                        className="btn w-full bg-green-600 border-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600">
                                        Verify
                                    </button>
                                </td>
                                <td>
                                    <button disabled={row.status !== 'Pending'} onClick={() => handleReject(row)}
                                        className="btn w-full bg-red-500 border-red-500 hover:bg-white hover:text-red-500 text-white hover:border-red-500">
                                        Reject
                                    </button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProperties;