import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/utils";


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // email and password
    const handleLogin = () => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log("user", user);
                    navigate("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log("error ", errorCode, errorMessage);
                });
    };

    // google
    const handleLoginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log("result =>",result);

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navigate("/")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log("error =>", errorCode, errorMessage);
            });
    };

    return (
        <div className="container mx-auto">
            <div className="my-28 flex flex-col-reverse  md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center shadow-md shadow-slate-400 p-8">
                <div className="space-y-4 col-span-1 flex-1">
                    <img
                        className="w-fuil h-96"
                        src="/pic2.jfif"
                        alt="" />
                </div>
                <div className="col-span-1 flex-1">
                    <div className="flex justify-center flex-col ">
                        <h1 className="text-3xl font-bold mb-10">Login your account</h1>
                        <form
                            action=""
                            className="flex flex-col">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border py-2 px-1 my-1 rounded-sm focus:outline-[#B55D51]"
                                placeholder="Enter Your E-mail"
                                type="email" />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border py-2 px-1 my-1 rounded-sm focus:outline-[#B55D51]"
                                placeholder="Enter your Password"
                                type="password" />
                            <input
                                required
                                className="border py-2 px-1 my-1 rounded-sm focus:outline-[#B55D51]"
                                placeholder="Re-Enter your Password"
                                type="password" />
                            <div className="flex flex-row my-6">
                                <input type="checkbox"
                                />
                                <span className="text-slate-400 ml-2 text-[12px]">Remember me</span>
                            </div>
                            <button onClick={handleLogin} className="w-32 text-center border-0 rounded-md cursor-pointer py-1 px-3 text-white bg-[#B55D51] hover:bg-[#974E44] transition duration-300">
                                Login
                            </button>
                        </form>
                        <div>
                            <h1 className="text-slate-400 text-[12px] my-6">Or you can Login with</h1>
                            <div className="flex flex-1 justify-between">
                                <button onClick={handleLoginWithGoogle} className="hover:bg-slate-100 flex justify-center items-center w-72 border rounded-lg py-1">
                                    <svg className="w-8 h-8 mr-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    <span className="text-slate-400 text-[14px]">Login with Google</span>
                                </button>
                                <button onClick={handleLoginWithGoogle} className="hover:bg-slate-100 flex justify-center items-center w-72 border rounded-lg py-1">
                                    <svg className="w-8 h-8 mr-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                                    </svg>
                                    <span className="text-slate-400 text-[14px]">Login with Facebook</span>
                                </button>
                            </div>
                            <div className="my-6">
                                <h1 className="text-slate-400 text-[14px]">Don't have an account? <Link to={"/signup"} className="text-[#B55D51]">SignUp</Link></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};