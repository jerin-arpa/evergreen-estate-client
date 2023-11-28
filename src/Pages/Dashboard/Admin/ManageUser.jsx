import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { MdDeleteForever, MdOutlineSupportAgent } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { SiRobotframework } from "react-icons/si";
import Swal from "sweetalert2";



const ManageUser = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleMakeAgent = user => {
        axiosSecure.patch(`/users/agent/${user._id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is now an agent`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }


    const handleMakeFraud = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This will mark the agent as fraud and remove all their properties. This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, mark as fraud!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/fraud/${user._id}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `${user.name} is now marked as fraud`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })
            }
        });
    }



    const handleDeleteUser = user => {
        console.log(user);
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
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="mb-10 container mx-auto px-5">
                <div className="flex items-center justify-center">
                    <h2 className="text-5xl font-bold text-center my-10">Total Users: {users.length}</h2>
                </div>



                <div className="overflow-x-auto rounded-xl shadow-2xl">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#03a9fc] font-extrabold text-white">
                            <tr>
                                <th></th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role(Admin)</th>
                                <th>Role(Agent)</th>
                                <th>Role(Fraud)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="font-bold">{user.name}</div>
                                    </td>

                                    <td className="font-bold">{user.email}</td>

                                    <th>
                                        {
                                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}
                                                className="btn  bg-[#03a9fc]">
                                                <FaUsers className="text-2xl text-white"></FaUsers>
                                            </button>
                                        }
                                    </th>

                                    <th>
                                        {
                                            user.role === 'agent' ? 'Agent' : <button onClick={() => handleMakeAgent(user)}
                                                className="btn  bg-[#03a9fc]">
                                                <MdOutlineSupportAgent className="text-2xl text-white"></MdOutlineSupportAgent >
                                            </button>
                                        }
                                    </th>


                                    <th>
                                        {
                                            user.role === 'fraud' ? 'Fraud' : <button onClick={() => handleMakeFraud(user)}
                                                className="btn  bg-[#03a9fc]">
                                                <SiRobotframework className="text-2xl text-white"></SiRobotframework>
                                            </button>
                                        }
                                    </th>

                                    <th>
                                        <button onClick={() => handleDeleteUser(user)}
                                            className="btn bg-red-600">
                                            <MdDeleteForever className="text-2xl text-white"></MdDeleteForever>
                                        </button>
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

export default ManageUser;