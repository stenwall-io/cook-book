import { IRecipe } from '@models/recipe';
import { Grid, Text } from '@nextui-org/react';
import RecipeCard from '@components/card/RecipeCard';
import useSWR from 'swr';
import { useRouter } from 'next/router';

export const Recipe = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  const { data, error, isLoading } = useSWR(`/api/recipes/${recipeId}`);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const { recipe } = data;

  return (
    <>
      <Text h1>Cook Book!</Text>
      <Text>{recipe.name}</Text>
    </>
  );
};

export default Recipe;
