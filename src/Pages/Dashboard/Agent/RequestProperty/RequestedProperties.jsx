import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";



const RequestedProperties = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: property = [], refetch } = useQuery({
        queryKey: ['offeredAmount'],
        queryFn: async () => {
            const res = await axiosSecure.get('/offeredAmount');
            return res.data;
        },
    });
    console.log(property)

    const requestedProperty = property.filter(item => item.agentEmail?.toLowerCase() === user?.email.toLowerCase());


    const handleAccepted = row => {
        console.log(row)
        axiosSecure.patch(`/offeredAmount/accepted/${row._id}`)
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
        axiosSecure.patch(`/offeredAmount/reject/${row._id}`)
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Requested Property</title>
            </Helmet>

            <div className="flex items-center justify-center">
                <h2 className="text-5xl font-bold text-center mt-10 mb-5">REQUESTED PROPERTY</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="overflow-x-auto w-80 md:w-[710px] lg:w-full rounded-xl shadow-2xl mb-20">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#03a9fc] font-extrabold text-white">
                        <tr>
                            <th></th>
                            <th>Property Title</th>
                            <th>Location</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Offered Price</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestedProperty.map((row, index) => <tr key={row._id}>
                                <th>{index + 1}</th>

                                <td className="font-bold">{row.propertyTitle}</td>
                                <td className="font-bold">{row.location}</td>
                                <td className="font-bold">{row.buyerName}</td>
                                <td className="font-bold">{row.email}</td>
                                <td className="font-bold">${row.offeredAmount}</td>

                                {
                                    row.status === 'Pending' && <td className="font-bold text-warning">{row.status}</td>
                                }
                                {
                                    (row.status === 'Accepted' || row.status === 'Bought') && <td className="font-bold text-green-500">{row.status}</td>
                                }
                                {
                                    row.status === 'Rejected' && <td className="font-bold text-red-500">{row.status}</td>
                                }

                                <td>
                                    <button disabled={row.status !== 'Pending'} onClick={() => handleAccepted(row)}
                                        className="btn w-full bg-green-600 border-green-600 hover:bg-white hover:text-green-600 text-white hover:border-green-600">
                                        Accept
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

export default RequestedProperties;