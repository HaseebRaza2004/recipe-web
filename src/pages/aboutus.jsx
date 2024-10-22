import { Link } from "react-router-dom";


export default function AboutUs() {
    return (
        <div className="container mx-auto">
            <h1 className="text-[#B55D51] text-xl font-bold ">About Us</h1>

            <p className="text-lg text-gray-700 text-center mb-12 mt-2">
                Discover Delicious Meals, One Recipe at a Time! Welcome
                to Perfect Recipe,
                your go-to destination for finding and sharing the
                best recipes from around the world. Whether you're an experienced chef
                or just starting your culinary journey, we offer a wide variety of
                mouth-watering recipes for every skill level and occasion. At Perfect
                Recipe, we believe that great cooking should be accessible to everyone.
                That's why we provide detailed, easy-to-follow instructions, along with
                helpful tips and tricks to ensure your dish turns out just right. From
                family favorites to international cuisines, you'll discover new flavors,
                techniques, and ideas to elevate your cooking. Join our vibrant
                community, explore curated collections, and create your own personalized
                recipe book to save all your favorite dishes. Whether you're looking for
                quick weeknight meals or special dishes for entertaining, Perfect Recipe
                has you covered. Key Features: Thousands of easy-to-follow recipes
                Customizable meal plans and grocery lists Create and save your own
                personalized recipe collection Step-by-step video tutorials for complex
                dishes Ratings and reviews to help you find the best recipes Share your
                own recipes and tips with our community Let's get cooking and discover
                your next Perfect Recipe today!

            </p>
            <Link className="text-center font-bold text-xl" to='/'>
                Go To <span className="text-[#B55D51]">Explore Recipes</span> and Enjoy !
            </Link>
            <img
                src="https://logowik.com/content/uploads/images/755_food.jpg"
                alt="Your website logo"
                className="mx-auto max-w-sm rounded-lg"
            />
        </div>
    )
};