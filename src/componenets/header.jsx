import { Badge } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Header() {

    const {user} = useContext(AuthContext);
    console.log("user in header",user);
    

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-[50px] h-[50px] text-white rounded-full" src="https://logowik.com/content/uploads/images/755_food.jpg" />
                    <span className="ml-3 text-xl">Perfect<span className="text-[#B55D51]">Recipe</span></span>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"} className="mr-5 hover:text-gray-900 hover:underline">Home</Link>
                    <Link to={"/recipes"} className="mr-5 hover:text-gray-900 hover:underline">Recipe</Link>
                    <Link to={"/addRecipe"} className="mr-5 hover:text-gray-900 hover:underline">Add Recipe</Link>
                    <Link to={"/aboutus"} className="mr-5 hover:text-gray-900 hover:underline">About Us</Link>
                </nav>
                {
                    user?.isLogin ? (
                        <div className="inline-flex items-center mt-4 md:mt-0">
                            {/* <Link to={"/saveRecipe"} className="m-2">
                                <Badge count={10}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                                        <path d="M 4 2 L 4 22 L 12 19 L 20 22 L 20 2 L 6 2 L 4 2 z"></path>
                                    </svg>
                                </Badge>
                            </Link> */}
                            <Link to={"/profile"} className="m-2">
                                <img
                                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                                    src={user?.userInfo?.photoURL}
                                    alt="Bordered avatar"
                                />

                            </Link>
                        </div>
                    ) : (
                        <div className="inline-flex items-center mt-4 md:mt-0">
                            <Link to={"/login"} className="m-1 border-0 rounded cursor-pointer py-1 px-3 text-black bg-gray-100 hover:bg-gray-200 transition duration-300">
                                Log in
                            </Link>
                            <Link to={"/signup"} className=" m-1 border-0 rounded cursor-pointer py-1 px-3 text-white bg-[#B55D51] hover:bg-[#974E44] transition duration-300">
                                Sign up
                            </Link>
                        </div>
                    )
                }
            </div>
        </header>
    )
};