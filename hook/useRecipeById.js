import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchRecipeByID = async (id) => {
  return await axios.get(`http://localhost:5000/recipe/${id}`);
};

export const useRecipeById = (id) => {
  return useQuery(["recipeById", id], () => fetchRecipeByID(id));
};
