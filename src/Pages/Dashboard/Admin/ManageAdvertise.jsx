import { Helmet } from "react-helmet";
import useProperty from "../../../hooks/useProperty";


const ManageAdvertise = () => {
    const [properties] = useProperty();

    const verifiedProperties = properties.filter(property => property.status && property.status.toLowerCase() === 'verified' && property.role !== 'fraud');
    console.log(verifiedProperties)

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Manage Advertise</title>
            </Helmet>



            <div className="container mx-auto px-5 ">
                <div className="flex items-center justify-center">
                    <h2 className="text-5xl font-bold text-center mt-10 mb-5">MANAGE ADVERTISE {verifiedProperties.length}</h2>
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
                                verifiedProperties.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={verifiedProperties.propertyImage} alt="" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">{verifiedProperties.propertyTitle}</div>
                                    </td>

                                    <td className="font-bold">{`${verifiedProperties.minPriceRange}-${verifiedProperties.maxPriceRange}`}</td>

                                    <td className="font-bold">{user.email}</td>


                                    <th>
                                        <button className="btn  bg-[#03a9fc]">Advertise </button>
                                    </th>

                                    <th>
                                        <button className="btn  bg-[#03a9fc]">Remove Advertise </button>
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