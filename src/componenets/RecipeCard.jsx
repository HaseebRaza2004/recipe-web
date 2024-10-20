import { Link, useParams } from "react-router-dom";

export default function RecipeCard({item}) {

    return (
        <Link to={`/recipe/${item.id}`} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="shadow-lg p-6 rounded-lg">
                <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.image}
                    alt="content"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.cuisine}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.name}
                </h2>
                <p className="leading-relaxed text-base">
                    {`=> Click to learn more`}
                </p>
            </div>
        </Link>
    )
};