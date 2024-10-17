import { Link } from "react-router-dom";


export default function AddRecipe() {
    return (
        <div className="container mx-auto">

            <header className="flex justify-between items-center border-t border-b p-3">
                <h1 className="text-2xl font-semibold">Create New Recipe</h1>
                <Link to={"/signup"} className=" m-1 border-0 rounded cursor-pointer py-1 px-3 text-white bg-[#B55D51] hover:bg-[#974E44] transition duration-300">
                    Save
                </Link>
            </header>

            {/* Add Recipe Form */}
            <form action=""
                className="mx-auto my-20  flex flex-col justify-center w-2/3">
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Title :</label>
                    <input type="text" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Recipe Image :</label>
                    <input type="file" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Describtion :</label>
                    <input type="text" maxLength={100} className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Ingredients :</label>
                    <textarea type="text" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Instructions :</label>
                    <textarea type="text" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Servings :</label>
                    <input type="text" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Cooking Time :</label>
                    <input type="time" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Prep Time :</label>
                    <input type="time" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Cuisine :</label>
                    <input type="text" className="w-full border px-2 py-1 rounded-md " />
                </div>
                <div className="my-2">
                    <label className="ml-2 mb-1 font-medium">Calories :</label>
                    <input type="text" className="w-full border px-2 py-1 rounded-md " />
                </div>  
            </form>

        </div>
    )
};