import { IRecipe } from '@models/recipe';
import useSWR from 'swr';

export default function Index() {
  const { data, error, isLoading } = useSWR('/api/recipes');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const { recipes } = data;
  console.log(recipes)

  return (
    <div>
      <h1>Cook Book!</h1>
      {recipes &&
        recipes.map((recipe: IRecipe, i: number) => (
          <div key={i}>{recipe.name}</div>
        ))}
    </div>
  );
}
