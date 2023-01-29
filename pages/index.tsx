import useSWR from 'swr';

export default function Index() {
  const { data: recipes, error, isLoading } = useSWR('/api/recipes');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Cook Book!</h1>
      {recipes &&
        recipes.map((recipe: any, i: number) => (
          <div key={recipe._id}>{recipe.name}</div>
        ))}
    </div>
  );
}
