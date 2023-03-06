import { IRecipe } from '@models/recipe';
import useSWR from 'swr';
import Link from 'next/link';
import { MainLayout, RecipeCard } from '@components';

export const Recipes = () => {
  const { data: recipes, error, isLoading } = useSWR('/api/recipes');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  // const { recipes } = data;

  return (
    <>
      <MainLayout>
        {recipes &&
          recipes.map((recipe: IRecipe, i: number) => (
            <RecipeCard recipe={recipe} key={i} />
          ))}
      </MainLayout>
    </>
  );
};

export default Recipes;
