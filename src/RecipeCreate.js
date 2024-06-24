import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" onChange={handleChange} value={recipe.name} />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine</label>
              <input id="cuisine" name="cuisine" type="text" onChange={handleChange} value={recipe.cuisine} />
            </td>
            <td>
              <label htmlFor="photo">Photo</label>
              <input id="photo" name="photo" type="text" onChange={handleChange} value={recipe.photo} />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients</label>
              <textarea id="ingredients" name="ingredients" onChange={handleChange} value={recipe.ingredients}></textarea>
            </td>
            <td>
              <label htmlFor="preparation">Preparation</label>
              <textarea id="preparation" name="preparation" onChange={handleChange} value={recipe.preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
