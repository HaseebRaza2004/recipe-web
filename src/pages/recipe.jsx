import { useEffect, useState } from "react";
import RecipeCard from "../componenets/RecipeCard";
import { Pagination, Select } from "antd";
import axios from "axios";
import Loader from "../componenets/loader";
import { Link } from "react-router-dom";


export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(12);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState();

    // Search Recipe
    useEffect(()=>{
        axios.get(`https://dummyjson.com/recipes/search?q=${search}`)
        .then((res) =>{
            // console.log("search" , res.data.recipes);
            setRecipes(res.data.recipes);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[search]);

    // show recipes in recipe page
    useEffect(() => {
        axios.get(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)
            .then((res) => {
                // console.log("res =>", res.data);
                setRecipes(res.data.recipes);
                setTotal(res.data.total)
                setLoading(false);
            })
            .catch((err) => {
                console.log("error", err)
                setLoading(false);
            })
    }, [limit, skip]);


    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className="container mx-auto">
                        <h1 className="text-2xl font-bold text-left my-4 ml-2" >Recipe</h1>

                        {/*  */}
                        <div className="bg-inherit shadow-lg shadow-gray-300 my-10 rounded-1xl flex flex-col-reverse sm:flex-col-reverse  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center p-2 md:p-6">
                            <div className="flex-1 space-y-4">
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    Your Daily Dish
                                </h1>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit.
                                </p>
                                <div className="space-x-4">
                                    <Link to={"/signup"} className="bg-[#B55D51] text-white py-2 px-6 rounded hover:bg-[#974E44] transition duration-300">
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                            <div className="relative flex-2 m-6">
                                <img
                                    src="/pic1.png"
                                    alt="Dish"
                                    className="rounded-md shadow-xl w-full md:max-w-sm"
                                />
                            </div>
                        </div>

                        {/* Search Recipe */}
                        <input 
                        onChange={(e) => {setSearch(e.target.value)}}
                        type="text"
                        placeholder="Search Recipe" 
                        className="mt-6 sm:w-[350px] md:w-[400px] lg:w-[450px] border-2 border-[#f5dbd5] px-2 py-1 rounded-md focus:outline-[#B55D51]" 
                        />

                        {/* Section */}
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-10 mx-auto">
                                <div className="flex flex-wrap -m-4">
                                    {
                                        recipes.map((data) => {
                                            return (
                                                <RecipeCard key={data.id} item={data} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section>

                        {/* Pagination */}
                        <Pagination
                            className="mb-10"
                            lign="center"
                            defaultCurrent={1}
                            total={total}
                            pageSize={limit}
                            onChange={(num) => setSkip((num - 1) * 12)}
                        />

                    </div>
                )
            }
        </>

    )
};