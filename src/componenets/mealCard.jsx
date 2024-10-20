

export default function MealCard({item}) {
    return (
        <div className="flex flex-col justify-center items-center my-2 lg:w-1/4 md:w-1/2 p-4 w-full">
            <img className="rounded-full"
            width={"150px"}
            height={"150px"}
                src={item.image} alt="Category" />
            <h1 className="mt-4 text-2xl font-semibold">{item.mealType}</h1>
        </div>
    )
};