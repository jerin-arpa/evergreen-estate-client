// import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
// import { MdDeleteForever } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import Swal from "sweetalert2";



// const ManageUser = () => {
//     const axiosSecure = UseAxiosSecure();
//     const { data: users = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             return res.data;
//         }
//     })


//     const handleMakeAdmin = user => {
//         axiosSecure.patch(`/users/admin/${user._id}`)
//             .then(res => {
//                 console.log(res.data)
//                 if (res.data.modifiedCount > 0) {
//                     refetch();
//                     Swal.fire({
//                         position: "center",
//                         icon: "success",
//                         title: `$${user.name} is an admin now`,
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//             })
//     }



//     const handleDeleteUser = user => {
//         console.log(user);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/users/${user._id}`)
//                     .then(res => {
//                         if (res.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your file has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//             }
//         });
//     }

//     return (
//         <div>
//             <div className="p-10 mx-10 mb-10 rounded-xl mt-[200px]">
//                 <div className="flex flex-col lg:flex-row gap-2 justify-between mb-10">
//                     <div className="flex items-center">
//                         <h2 className="text-2xl font-bold">Total Users: {users.length}</h2>
//                     </div>
//                 </div>



//                 <div className="overflow-x-auto rounded-xl">
//                     <table className="table">
//                         {/* head */}
//                         <thead className="bg-[#03a9fc] font-extrabold text-white">
//                             <tr>
//                                 <th></th>
//                                 <th>User Name</th>
//                                 <th>Email</th>
//                                 <th>Role</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 users.map((user, index) => <tr key={user._id}>
//                                     <th>{index + 1}</th>
//                                     <td>
//                                         <div className="font-bold">{user.name}</div>
//                                     </td>

//                                     <td className="font-bold">{user.email}</td>

//                                     <th>
//                                         {
//                                             user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)}
//                                                 className="btn  bg-[#D1A054]">
//                                                 <FaUsers className="text-2xl text-white"></FaUsers>
//                                             </button>
//                                         }
//                                     </th>

//                                     <th>
//                                         <button onClick={() => handleDeleteUser(user)}
//                                             className="btn bg-red-600">
//                                             <MdDeleteForever className="text-2xl text-white"></MdDeleteForever>
//                                         </button>
//                                     </th>
//                                 </tr>
//                                 )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageUser;



const ManageUser = () => {
    return (
        <div>

        </div>
    );
};

export default ManageUser;