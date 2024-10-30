import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {recipes.map((recipe) => (
        <div key={recipe.recipe_name} className="card border">
          <figure className="p-6 object-cover">
            <img
              className="rounded-2xl w-full"
              src={recipe.recipe_image}
              alt="recipe image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#282828] font-semibold text-xl">
              {recipe.recipe_name}
            </h2>
            <p className="text-[#878787] text-sm font-normal">
              {recipe.short_description}
            </p>
            <hr className="mt-4" />
            <div>
              <h3 className="text-lg font-medium text-[#282828]">
                Ingredients: {recipe.ingredients.length}
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {recipe.ingredients.map((item, idx) => (
                  <li
                    className="text-[#878787] text-base font-normal"
                    key={idx}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <hr className="mt-4" />
            <div className="flex item-center gap-4">
              <div className="text-[#292929cc] font-normal text-base">
                <i className="fa-solid fa-clock text-green-400 pr-2"></i>
                <span>{recipe.preparing_time} minutes</span>
              </div>
              <div className="text-[#292929cc] font-normal text-base">
              <i className="fa-solid fa-fire-flame-curved text-green-400 pr-2"></i>
                <span>{recipe.calories} calories</span>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
