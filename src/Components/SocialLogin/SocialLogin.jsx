import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {

    const { googleSignUp } = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignUp()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div>
            <div className="divider my-5">OR</div>
            <button onClick={handleGoogleSignIn} className="btn bg-transparent border-[#03a9fc] mb-4 w-full">
                <FcGoogle className='text-xs md:text-xl'></FcGoogle>
                <span className="text-xs md:text-md">Continue with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;