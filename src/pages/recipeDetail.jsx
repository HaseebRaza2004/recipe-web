import { Rate } from "antd";
import Checkbox from "../componenets/checkBox";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../componenets/loader";
import NotFound from "./notFound";
import DetailPageCard from "../componenets/cardUseInDeatailPage";


export default function RecipeDetail() {

    const { id } = useParams();

    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(true);
    const [youMightLike, setYouMightLike] = useState([]);

    useEffect(() => {
        setNotFound(false);
        axios.get(`https://dummyjson.com/recipes/${id}`)
            .then((res) => {
                // console.log("GET product by id", res.data);
                setRecipe(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setNotFound(true);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes?limit=8&skip=10')
            .then((res) => {
                // console.log("RES in details page" , res.data.recipes);
                setYouMightLike(res.data.recipes);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, []);

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) :
                    notFound ? (
                        <NotFound />
                    ) : (
                        <div className="container mx-auto">
                            <div className="flex flex-col">

                                {/* recipe name and rating */}
                                <div className="flex flex-col border-b mb-6">
                                    <h1 className="text-3xl font-bold mt-10">{recipe.name}</h1>
                                    <Rate className="my-6" />
                                </div>

                                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                                    {/* recipe image and nav with button */}
                                    <div className="flex flex-col items-center col-span-2">
                                        <img
                                            src={recipe.image}
                                            alt={recipe.name}
                                            className="w-[90%] h-[90%] object-cover object-center mb-8" />
                                        <div className="flex justify-center items-center">
                                            <div className="text-center border-r-2 pr-8 mr-8">
                                                <h1 className="text-gray-500">Prep time :</h1>
                                                <h1>{recipe.prepTimeMinutes}</h1>
                                            </div>
                                            <div className="text-center border-r-2 pr-8 mr-8">
                                                <h1 className="text-gray-500">Cook time :</h1>
                                                <h1>{recipe.servings}</h1>
                                            </div>
                                            <div className="text-center pr-6 mr-6">
                                                <h1 className="text-gray-500">Serving :</h1>
                                                <h1>{recipe.servings}</h1>
                                            </div>
                                            <button className="px-5 py-2 rounded-lg text-sm text-center text-[#B55D51] border border-[#B55D51] hover:bg-[#974E44] hover:text-white">
                                                Print Recipe
                                            </button>
                                        </div>
                                        <div className="mt-10 w-full">
                                            <div className="my-1">
                                                <span className="font-semibold"> Tags : </span><span>{recipe.tags}</span>.
                                            </div>
                                            <div className="my-1">
                                                <span className="font-semibold">Difficulty : </span><span>{recipe.difficulty}</span>.
                                            </div>
                                            <div className="my-1">
                                                <span className="font-semibold"> Cuisine : </span><span>{recipe.cuisine}</span>.
                                            </div>
                                            <div className="my-1">
                                                <span className="font-semibold">Meal :</span> <span>{recipe.mealType}</span>.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">

                                        {/* Ingredients */}
                                        <div>
                                            <h1 className="text-2xl font-bold mb-4">Ingredients :</h1>
                                            <ul className="ml-4">
                                                {
                                                    recipe.ingredients.map(((ingre, ind) => {
                                                        // console.log("ingredients", ingre);
                                                        return (
                                                            <li key={ind} className="flex items-center my-1">
                                                                <Checkbox />
                                                                {ingre}
                                                            </li>
                                                        )
                                                    }))
                                                }
                                            </ul>
                                        </div>

                                        {/* Instructions */}
                                        <div className="mt-6">
                                            <h1 className="text-2xl font-bold mb-4">Instructions :</h1>
                                            <ul className="ml-4">
                                                {
                                                    recipe.instructions.map((instrc, ind) => {
                                                        return (
                                                            <li key={ind} className="flex items-center my-1">
                                                                <Checkbox />
                                                                {instrc}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                {/* you might like */}
                                <div className="my-16">
                                    <h1 className="text-left text-2xl font-semibold">You might like</h1>
                                    <section className="container mx-auto text-gray-600 body-font">
                                        <div className="container px-5 py-10 mx-auto">
                                            <div className="flex flex-wrap m-4">
                                                {
                                                    youMightLike.map((data) => {
                                                        return (
                                                            <DetailPageCard key={data.id} item={data} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </section>
                                </div>

                            </div>
                        </div>
                    )
            }
        </>
    )
};