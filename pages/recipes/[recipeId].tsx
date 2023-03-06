import useSWR from 'swr';
import { useRouter } from 'next/router';
import { MainLayout } from '@components';

export const Recipe = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  const { data, error, isLoading } = useSWR(`/api/recipes/${recipeId}`);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const { recipe } = data;

  // if (recipe)
  return (
    <>
      <MainLayout>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
      </MainLayout>
    </>
  );
};

export default Recipe;
