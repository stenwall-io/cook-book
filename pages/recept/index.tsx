import { IRecipe } from '@models/recipe';
import useSWR from 'swr';
import { CardGrid, MainLayout, RecipeCard } from '@components';

export const Recept = () => {
  const { data: recipes, error, isLoading } = useSWR('/api/recipes');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <MainLayout>
        <CardGrid>
          {recipes &&
            recipes.map((recipe: IRecipe, i: number) => (
              <RecipeCard recipe={recipe} key={i} />
            ))}
        </CardGrid>
      </MainLayout>
    </>
  );
};

export default Recept;
