import { signOut } from "firebase/auth"
import { auth } from "../utils/utils"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import { useNavigate } from "react-router";


export default function Profile() {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(user);

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col my-10">
                <img
                    className="w-56 h-56 rounded-xl my-6"
                    src={user.userInfo?.photoURL}
                    alt="" />
                <h1 className="text-3xl font-semibold my-4">{user.userInfo?.name}</h1>
                <h1 className="text-lg font-semibold my-4">{user.userInfo?.email}</h1>
                <button onClick={handleLogout} className="m-1 border-0 rounded cursor-pointer py-1 px-3 text-white bg-[#B55D51] hover:bg-[#974E44] transition duration-300">Logout</button>
            </div>
        </div>
    )
};