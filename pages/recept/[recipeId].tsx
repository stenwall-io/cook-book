import useSWR from 'swr';
import { useRouter } from 'next/router';
import { MainLayout } from '@components';
import { IRecipe } from '@models/recipe';

export const Recipe = () => {
  const router = useRouter();
  const { recipeId } = router.query;
  const {
    data: recipe,
    error,
    isLoading,
  } = useSWR<IRecipe>(`/api/recipes/${recipeId}`);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <MainLayout>
        <h1>{recipe.title}</h1>
        {recipe.description && <p>{recipe.description}</p>}
        <p>
          Säsong:{' '}
          {recipe.seasons.map((season, idx) => (
            <span key={idx}>{season.name}</span>
          ))}
        </p>
        <p>
          Tags:{' '}
          {recipe.tags.map((tag, idx) => (
            <span key={idx}>{tag._id + ', '}</span>
          ))}
        </p>
        <p>Ingredienser:</p>
        <ul>
          {recipe.ingredientList.map((ingredientList, idx) => (
            <li key={idx}>{ingredientList}</li>
          ))}
        </ul>
        <p>Instruktioner:</p>
        <ul>
          {recipe.steps.map((step, idx) => (
            <li key={idx}>
              <p>{step.title}</p>
              <ul>
                {step.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </MainLayout>
    </>
  );
};

export default Recipe;
