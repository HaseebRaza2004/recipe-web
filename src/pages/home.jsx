import { Link } from "react-router-dom";
import Card1 from "../componenets/card1";
import CategoryCard from "../componenets/categoryCard";


export default function Home() {
    return (
        <div>

            {/*  */}
            <div className="bg-gradient-to-r from-white to-[#FFF0ED] flex flex-col-reverse sm:flex-col-reverse  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center p-8 md:p-16">
                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Your Daily Dish <br />
                        <span>A <span className="text-[#B55D51]">Food</span> Journey</span>
                    </h1>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-[#B55D51] text-white py-2 px-6 rounded-full hover:bg-[#974E44] transition duration-300">
                            Sign up
                        </button>
                        <span>
                            Do you have account?
                        </span>
                        <Link className="text-[#B55D51] hover:underline">
                            Log in
                        </Link>
                    </div>
                </div>
                <div className="relative flex-2 m-6">
                    <img
                        src="./public/pic1.png"
                        alt="Dish"
                        className="rounded-md shadow-xl w-full md:max-w-sm"
                    />
                </div>
            </div>

            {/*  */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
                <div className="relative flex-2 m-6">
                    <img
                        src="./public/pic2.jfif"
                        alt="Dish"
                        className="rounded-md shadow-xl w-full h-[350px] md:max-w-sm"
                    />
                </div>
                <div className="text-center flex-1 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Share Your <br />
                        <span className="text-[#B55D51]">Recipes</span>
                    </h1>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit.
                    </p>
                    <button className="space-x-4 bg-[#B55D51] text-white py-2 px-6 rounded-md hover:bg-[#974E44] transition duration-300">
                        Create New Recipe
                    </button>
                </div>
            </div>

            {/* Trending Recipe */}
            <div className="container mx-auto ">
                <header className="flex justify-between h-20 mt-10">
                    <h2 className="text-3xl font-bold ml-1">Trending Recipe</h2>
                    <Link className="text-[#B55D51] text-1xl font-semibold mt-8 mr-1" to={"/recipes"}>View more</Link>
                </header>
                <section className="container mx-auto text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap m-4">
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                        </div>
                    </div>
                </section>
            </div>

            {/* Explore Recipes */}
            <div className="container mx-auto ">
                <header className="flex justify-between h-20">
                    <h2 className="text-3xl font-bold ml-1">Explore Recipes</h2>
                    <Link className="text-[#B55D51] text-1xl font-semibold mt-8 mr-1" to={"/recipes"}>View more</Link>
                </header>
                <section className="container mx-auto text-gray-600 body-font m-1">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap m-4">
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                            <Card1 />
                        </div>
                    </div>
                </section>
            </div>

            {/* subscribtion post */}
            <div className="flex flex-col justify-center items-center bg-[#FFF0ED] w-full p-10">
                <h1 className="text-4xl font-bold m-4">Lets Stay In Touch!</h1>
                <p className="m-4 text-2xl text-gray-600">Join our newsletter, So that we reach out to you with our news and offers.</p>
                <span className="m-4">
                    <input className="w-[400px] border rounded-md px-2 py-1" type="email" placeholder="Enter Your E-mail" />
                    <button className="ml-3 border-0 rounded cursor-pointer py-1 px-3 text-white bg-[#B55D51] hover:bg-[#974E44] transition duration-300">Subscribe</button>
                </span>
            </div>

            {/* Category Cards */}
            <div className="container mx-auto mt-20">
                <header className="flex justify-between h-20 ">
                    <h2 className="text-3xl font-bold ml-1">Popular Category</h2>
                    <Link className="text-[#B55D51] text-1xl font-semibold mt-8 mr-1" to={"/recipes"}>View more</Link>
                </header>
                <section className="container mx-auto text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap m-4">
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
};   