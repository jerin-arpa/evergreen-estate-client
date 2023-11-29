import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import UseAxiosPublic from '../../hooks/UseAxiosPublic';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';


const SignUp = () => {
    const axiosPublic = UseAxiosPublic();
    const { createUser, updateUserprofile } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [termsError, setTermsError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Location in the login page', location);


    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, photo, accepted);


        setSignUpError('');
        setSuccess('');


        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Your password must contain one capital letter');
            return;
        }
        else if (!/[\W_]/.test(password)) {
            setSignUpError('Your password must contain a special character');
            return;
        }

        if (!accepted) {
            setTermsError('Please accept our terms and conditions');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserprofile(name, photo)
                    .then(() => {
                        console.log('User Profile Info Updated')

                        // Create user entry in the database
                        const userInfo = {
                            name: name,
                            email: email,
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('User added to the database')
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Account Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/login');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Email is already used, try with another one or login',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }



    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | SignUp</title>
            </Helmet>
            <div className="flex justify-center my-12 container mx-auto px-5 py-10">
                <div className="border rounded-xl w-full md:w-3/4 lg:w-2/4 py-8">
                    <h2 className="text-3xl font-bold text-center pt-10 pb-5"><span className='text-[#03a9fc]'>SignUp</span> <span className=''>your account</span></h2>
                    <form onSubmit={handleSignUp} className="px-4 md:px-14">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                name="password" placeholder="Enter your Password" className="input input-bordered w-full" required />
                            <div className="relative flex justify-end">
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-4 right-4">
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>


                            <div>
                                {
                                    signUpError && <p className="text-red-400 text-sm mt-2">{signUpError}</p>
                                }
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" />
                        </div>

                        <div className="flex gap-3 mt-5">
                            <div className='flex items-center'>
                                <input className='checkbox checkbox-xs md:checkbox-sm' type="checkbox" name="terms" id="" />
                            </div>
                            <label htmlFor="terms" className="text-xs md:text-lg">Accept our terms and conditions</label>
                        </div>
                        <div>
                            {
                                termsError && <p className="text-red-400 text-sm mt-2">{termsError}</p>
                            }
                        </div>

                        <div>
                            {
                                success && <p className="text-[#03a9fc] text-xl font-bold text-center">{success}</p>
                            }
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#03a9fc] border-[#03a9fc] hover:bg-white hover:text-[#03a9fc] text-white font-bold">Sign Up</button>
                        </div>
                        <div>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>

                    <div className="flex justify-center mb-4">
                        <h2 className="text-xs md:text-lg mt-6 md:mt-8 mb-6">Already have an account? <Link to='/login' className="text-[#03a9fc] underline font-bold">Login</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;