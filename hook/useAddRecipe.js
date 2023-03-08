import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const fetchAddRecipe = async (recipe) => {
  return await axios.post("http://localhost:5000/recipe", recipe);
};

export const useAddRecipe = () => {
  const queryClient = useQueryClient();
  return useMutation(fetchAddRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries("recipe");
    },
  });
};
