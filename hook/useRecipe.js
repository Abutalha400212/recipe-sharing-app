import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchRecipe = () => {
  return axios.get("http://localhost:5000/recipe");
};

export const useRecipe = () => {
  return useQuery(["recipe"], fetchRecipe);
};
