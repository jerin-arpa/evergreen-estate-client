import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGripfire, FaQuoteRight, FaUserCircle } from "react-icons/fa";

const LatestReview = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://evergreen-estate-server.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
    }, [])


    const sortedReviews = [...review].sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime));
    console.log(sortedReviews)

    return (
        <div className="container mx-auto px-5 my-28">
            <div className="my-14">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center">
                    <div className="flex ">
                        <div>
                            <FaGripfire className="text-2xl text-[#03a9fc]"></FaGripfire>
                        </div>
                        <p className="mb-4 text-xl text-center">Evergreen Estate</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="mb-5 text-3xl lg:text-6xl font-bold text-center">WHAT OUR <span className='text-[#03a9fc]'>CLIENTS SAY</span></h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <p className="mb-5 text-center lg:w-1/2">Evergreen Estate offers a collection of homes that blend modern comfort with timeless elegance.</p>
                </motion.div>

                <div className="flex justify-center">
                    <hr className="w-1/3 lg:w-1/6 h-2 rounded-full bg-[#03a9fc]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    sortedReviews.slice(0, 3).map(card => <div key={card._id} className="border p-7 rounded-xl border-[#03a9fc]">
                        <div>
                            <FaQuoteRight className="text-5xl mb-5"></FaQuoteRight>
                        </div>
                        <div className="flex gap-3 mb-4">
                            {
                                card.userImage ? (
                                    <img className="w-8 md:w-14 md:h-14 rounded-full" src={card.userImage} alt="" />
                                ) : (
                                    <FaUserCircle className="text-[52px]">
                                    </FaUserCircle>
                                )
                            }
                            <div className="flex items-center">
                                <h2 className="text-2xl font-bold uppercase">{card.userName}</h2>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-[#03a9fc]">{card.property.propertyTitle}</h2>
                        <p className="text-2xl my-4"> {card.reviewDescription}</p>
                        <p>{card.reviewTime}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestReview;