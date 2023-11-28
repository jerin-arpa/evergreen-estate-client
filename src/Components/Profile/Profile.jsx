import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UseAdmin from "../../hooks/useAdmin";
import UseAgent from "../../hooks/useAgent";
import { FaUserCircle } from "react-icons/fa";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [isAgent] = UseAgent();

    return (
        <div>
            <div className="flex items-center justify-center my-10">
                {
                    isAdmin && <h2 className="text-5xl font-bold text-center uppercase">Admin Profile</h2>
                }
                {
                    isAgent && <h2 className="text-5xl font-bold text-center uppercase">Agent Profile</h2>
                }
                {
                    !isAgent && !isAdmin && <h2 className="text-5xl font-bold text-center uppercase">User Profile</h2>
                }
            </div>

            <div className="divider mb-10"></div>

            <div className="shadow-xl rounded-xl p-10">
                <div className="flex justify-center">
                    {
                        user.photoURL ? (
                            <img className="w-8 md:w-44 md:h-44 rounded-full" src={user.photoURL} alt="" />
                        ) : (
                            <FaUserCircle className="text-4xl  md:text-[140px]">
                            </FaUserCircle>
                        )
                    }
                </div>
                <div className="flex justify-center">
                    <div>
                        <h2 className="text-4xl font-bold uppercase text-center mt-6">{user.displayName}</h2>

                        <p className="text-xl font-bold text-center">{user.email}</p>

                        <div className="flex justify-center mt-3">
                            {
                                isAdmin && <p><span className="font-bold text-center text-3xl text-[#03a9fc]">Role: Admin</span> </p>
                            }
                        </div>
                        <div className="flex justify-center mt-3">
                            {
                                isAgent && <p><span className="font-bold text-center text-3xl text-[#03a9fc]">Role: Agent</span> </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;