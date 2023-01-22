import useSWR from 'swr';

export default function Index() {
  const { data, error } = useSWR('/api/recipes');
  
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const recipes = data;

  return (
    <div>
      <h1>Cook Book!</h1>
      {recipes.map((recipe: any, i: number) => (
        <div key={i}>{recipe.name}</div>
      ))}
    </div>
  );
}
