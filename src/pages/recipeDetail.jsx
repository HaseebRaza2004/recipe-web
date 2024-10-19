import { Rate } from "antd";
import Checkbox from "../componenets/checkBox";
import Card1 from "../componenets/card1";


export default function RecipeDetail() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col">

                {/* recipe name and rating */}
                <div className="flex flex-col border-b mb-6">
                    <h1 className="text-3xl font-bold mt-10">Recipe Detail</h1>
                    <Rate className="my-6" />
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">

                    {/* recipe image and nav with button */}
                    <div className="flex flex-col items-center col-span-2">
                        <img
                            src="/pic2.jfif"
                            alt=""
                            className="w-[90%] h-[90%] object-cover object-center mb-8" />
                        <div className="flex justify-center items-center">
                            <div className="text-center border-r-2 pr-8 mr-8">
                                <h1 className="text-gray-500">Prep time :</h1>
                                <h1>5 mins</h1>
                            </div>
                            <div className="text-center border-r-2 pr-8 mr-8">
                                <h1 className="text-gray-500">Cook time :</h1>
                                <h1>5 mins</h1>
                            </div>
                            <div className="text-center pr-6 mr-6">
                                <h1 className="text-gray-500">Serving :</h1>
                                <h1>5 mins</h1>
                            </div>
                            <button className="px-5 py-2 rounded-lg text-sm text-center text-[#B55D51] border border-[#B55D51] hover:bg-[#974E44] hover:text-white">
                                Print Recipe
                            </button>
                        </div>
                        <div className="mt-10">
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, doloremque sed! Deserunt voluptates, amet repellat maiores laboriosam, quam eius iusto facere odio repudiandae accusamus consequuntur quisquam soluta a quaerat sequi?</p>
                        </div>
                    </div>

                    <div className="">

                        {/* Ingredients */}
                        <div>
                            <h1 className="text-2xl font-bold mb-4">Ingredients :</h1>
                            <ul className="ml-4">
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    jjhj
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    jjhj
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    jjhj
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    jjhj
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    jjhj
                                </li>
                            </ul>
                        </div>

                        {/* Instructions */}
                        <div className="mt-6">
                            <h1 className="text-2xl font-bold mb-4">Instructions :</h1>
                            <ul className="ml-4">
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, excepturi cum quae ea minim!
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, eos reiciendis?
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quis cumque maiores? Rerum magni voluptate natus obcaecati r praesentium obcaecati asperiores.
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quis iure. Pariatur esse doloremque?
                                </li>
                                <li className="flex items-center my-1">
                                    <Checkbox />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nulla magni laboriosam fugit harum, est commodi fuga quas velit expedita vel iusto, non rem dolorum magnam quae voluptas distinctio possimus!
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/*  */}
                <div className="my-16">
                    <h1 className="text-left text-2xl font-semibold">You might like</h1>
                    <section className="container mx-auto text-gray-600 body-font">
                        <div className="container px-5 py-10 mx-auto">
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





            </div>
        </div>
    )
};