import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className=" bg-slate-100 h-[200px] flex items-center justify-center">
                <h2 className="text-5xl font-bold text-center">Profile</h2>
            </div>

            <div className="container mx-auto px-5 mt-10 flex flex-col md:flex-row gap-5">
                <img className="h-44 w-44 rounded-full" src={user.photoURL} alt="" />
                <div className="flex items-center">
                    <div>
                        <h2 className="text-2xl font-bold uppercase">{user.displayName}</h2>
                        <p>{user.email}</p>

                        <p><span className="font-bold">Role:</span> {'Admin'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;