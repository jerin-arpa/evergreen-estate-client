import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../provider/AuthProvider";


const SoldProperties = () => {
    const { user } = useContext(AuthContext);
    const [payment, setPayment] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        fetch(`https://evergreen-estate-server.vercel.app/payments`)
            .then(res => res.json())
            .then(data => {
                const filteredProperty = data.filter(item => item.agentEmail?.toLowerCase() === user?.email.toLowerCase());

                let totalSoldAmount = 0;
                filteredProperty.map(property => totalSoldAmount += parseFloat(property.price));
                setTotalAmount(totalSoldAmount);
                setPayment(filteredProperty);
            })
    }, [user.email])
    console.log(payment)



    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Sold Property</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">MY SOLD PROPERTY</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="overflow-x-auto w-96 md:w-[720px] lg:w-full rounded-xl shadow-2xl mb-20">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#03a9fc] font-extrabold text-white">
                        <tr>
                            <th></th>
                            <th>Property Title</th>
                            <th>Property Location</th>
                            <th>Buyer Name</th>
                            <th>Buyer Email</th>
                            <th>Sold Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((row, index) => <tr key={row._id}>
                                <th>{index + 1}</th>

                                <td className="font-bold">{row.propertyTitle}</td>
                                <td className="font-bold">{row.location}</td>
                                <td className="font-bold">{row.buyerName}</td>
                                <td className="font-bold">{row.email}</td>
                                <td className="font-bold">{row.price}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>


            <div className="font-extrabold shadow-2xl p-10 rounded-xl text-2xl border border-[#03a9fc]">
                <h2 className="uppercase text-center">Total Property Sold Amount: <span className=" text-[#03a9fc]">{totalAmount}</span></h2>
            </div>
        </div>
    );
};

export default SoldProperties;