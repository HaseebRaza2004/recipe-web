import RecipeCard from "../componenets/RecipeCard";
import { Pagination, Select } from "antd";


export default function Recipes() {
    return (
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
                        <button className="bg-[#B55D51] text-white py-2 px-6 rounded hover:bg-[#974E44] transition duration-300">
                            Sign up
                        </button>
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

            {/* Select Category */}
            <Select
                className="mt-4 sm:w-[350px] md:w-[400px] lg:w-[450px]"
                showSearch
                placeholder="Search Recipe"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: 'Not Identified',
                    },
                    {
                        value: '2',
                        label: 'Closed',
                    },
                    {
                        value: '3',
                        label: 'Communicated',
                    },
                    {
                        value: '4',
                        label: 'Identified',
                    },
                    {
                        value: '5',
                        label: 'Resolved',
                    },
                    {
                        value: '6',
                        label: 'Cancelled',
                    },
                ]}
            />

            {/* Section */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                        <RecipeCard />
                    </div>
                </div>
            </section>

            {/* Pagination */}
            <Pagination className="mb-10" align="center" defaultCurrent={1} total={60} />

        </div>
    )
};