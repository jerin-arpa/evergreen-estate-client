import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const useWishlist = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = useContext(AuthContext);
    const { refetch, data: wishlist = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist?email=${user.email}`)
            return res.data;
        }
    })
    return [wishlist, refetch];
};

export default useWishlist;