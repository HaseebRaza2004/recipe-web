import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-[60px] h-[60px] text-white p-2 rounded-full" src="https://logowik.com/content/uploads/images/755_food.jpg" />
                    <span className="ml-3 text-xl">PerfectRecipe</span>
                </div>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"} className="mr-5 hover:text-gray-900 hover:underline">Home</Link>
                    <Link to={"/recipe"} className="mr-5 hover:text-gray-900 hover:underline">Recipe</Link>
                    <Link to={"/addRecipe"} className="mr-5 hover:text-gray-900 hover:underline">Add Recipe</Link>
                    <Link to={"/aboutus"} className="mr-5 hover:text-gray-900 hover:underline">About Us</Link>
                </nav>
                <div className="inline-flex items-center mt-4 md:mt-0">
                    <Link to={"/auth/login"} className="m-1 border-0 rounded cursor-pointer py-1 px-3 text-black bg-gray-100 hover:bg-gray-200 transition duration-300">
                        Log in
                    </Link>
                    <Link to={"/signup"} className=" m-1 border-0 rounded cursor-pointer py-1 px-3 text-white bg-[#B55D51] hover:bg-[#974E44] transition duration-300">
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    )
};