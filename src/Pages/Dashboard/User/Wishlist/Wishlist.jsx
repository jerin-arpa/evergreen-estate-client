// import { useContext } from "react";
// import { AuthContext } from "../../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import WishlistCard from "./WishlistCard";


const Wishlist = () => {

    // const { user } = useContext(AuthContext);
    const wishlist = useLoaderData();

    console.log(wishlist);
    // const userWishlist = wishlist.filter(item => item.userEmail.toLowerCase() === user.email.toLowerCase());
    // const [myWishlist, setMyWishlist] = useState(userWishlist);


    return (
        <div>
            <div className=" bg-slate-100 h-[200px] flex items-center justify-center">
                <h2 className="text-5xl font-bold text-center">My Wishlist</h2>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 mx-10">
                {
                    wishlist.length === 0 ? <div className="col-span-2 flex justify-center">
                        <div>
                            <div className="flex justify-center">
                                <BsFillEmojiSmileFill className="text-9xl text-[#ffcc33] mb-5"></BsFillEmojiSmileFill>
                            </div>
                            <h2 className="
                         text-4xl font-bold text-[#03a9fc] text-center"> There are currently <br /> no products added to the Wishlist. </h2>
                        </div>
                    </div>
                        :
                        wishlist.map(card => <WishlistCard
                            key={card._id}
                            card={card}
                        ></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;