import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Recipes from "./pages/recipe"
import RecipeDetail from "./pages/recipeDetail"
import AboutUs from "./pages/aboutus"
import Profile from "./pages/profile"
import NotFound from "./pages/notFound"
import AddRecipe from "./pages/addRecipe"
import SignUp from "./pages/auth/signup"
import Login from "./pages/auth/login"

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
