import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";


const PropertyBought = () => {
    const { user } = useContext(AuthContext);

    const [property, setProperty] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/offeredAmount')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProperty(data);
            });
    }, []);

    const boughtProperty = property.filter(item => item.email?.toLowerCase() === user?.email.toLowerCase());
    console.log(boughtProperty)

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Property Bought</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">Property Bought</h2>
            </div>

            <div className="divider mb-10"></div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    boughtProperty.length === 0 ? <div className="col-span-3 flex justify-center">
                        <div>
                            <div className="flex justify-center">
                                <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                            </div>
                            <h2 className="
                         text-4xl font-bold text-[#03a9fc] text-center"> There are currently <br /> no products added to the Wishlist. </h2>
                        </div>
                    </div>
                        :
                        boughtProperty.map(card => <div key={card._id} className="mb-5 rounded-xl shadow-xl">
                            <div>
                                <div>
                                    <img className="w-full h-72" src={card.propertyImage} alt="" />
                                </div>
                                <div className="p-5">
                                    <div>
                                        <p className='text-2xl text-[#03a9fc] font-bold '>{card.propertyTitle}</p>

                                        <p className='text-xl mt-2 mb-2'><span className='font-bold'>Agent Name:</span> {card.agentName}</p>

                                        <p className='text-lg'><span className='font-bold'>Offered Amount:</span> ${card.offeredAmount}</p>

                                        <p className='text-lg'><span className='font-bold'>Location:</span> {card.location}</p>

                                        <p className='text-lg'><span className='font-bold'>Verification Status:</span>
                                            {card.status === 'Pending' && <span className="text-warning"> {card.status}</span>}

                                            {card.status === 'Accepted' && <span className="text-green-500"> {card.status}</span>}

                                            {card.status === 'Rejected' && <span className="text-red-600"> {card.status}</span>}
                                        </p>
                                    </div>

                                    <div className='mt-10 flex gap-5 w-full'>
                                        {
                                            card.status === 'Accepted' ? (<Link className="w-full" to='/dashboard/payment'>
                                                <button className="btn w-full bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">PAY</button>
                                            </Link>) : (<button disabled className="btn w-full bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white hover:border-[#03a9fc]">PAY</button>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PropertyBought;