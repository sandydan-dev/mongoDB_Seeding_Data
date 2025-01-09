const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const { connectDB } = require("./db/db.connect");
const Recipe = require("./models/recipe.model");
// const jsonRecipeFileData = require("./jsonFile/recipe.json");
// connection to the database
connectDB();

app.use(express.json());

// read json file
const readJsonFile = fs.readFileSync('./jsonFile/recipe.json', "utf8");

// parse json file
const parsedJsonFile = JSON.parse(readJsonFile);

// push data to db
async function createRecipeData(parsedJsonFile) {
  try {
    for (const recipe of parsedJsonFile) {
      const newRecipe = new Recipe({
        title: recipe.title,
        author: recipe.author,
        difficulty: recipe.difficulty,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        imageUrl: recipe.imageUrl,
      });
      const saveData = await newRecipe.save();
      console.log(saveData);
    }
  } catch (error) {
    console.log("Error while creating recipe data:", error);
  }
}
createRecipeData(parsedJsonFile);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
