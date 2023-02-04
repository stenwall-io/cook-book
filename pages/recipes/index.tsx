import { IRecipe } from '@models/recipe';
import { Grid, Text } from '@nextui-org/react';
import RecipeCard from '@components/card/RecipeCard';
import useSWR from 'swr';
import Link from 'next/link';

export const Recipes = () => {
  const { data, error, isLoading } = useSWR('/api/recipes');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const { recipes } = data;

  return (
    <>
      <Text h1>Cook Book!</Text>
      <Grid.Container gap={2}>
        {recipes &&
          recipes.map((recipe: IRecipe, i: number) => (
            <Grid xs key={i} >
              {/* <Link href="/recipes/[recipeId]" as={`/recipes/${recipe._id}`}> */}
                <RecipeCard recipe={recipe} />
              {/* </Link> */}
            </Grid>
          ))}
      </Grid.Container>
    </>
  );
};

export default Recipes;
