import useSWR from 'swr';

export default function Index() {
  const { data, error, isLoading } = useSWR('/api/recipes');
  
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Cook Book!</h1>
      {data.map((recipe: any, i: number) => (
        <div key={i}>{recipe.name}</div>
      ))}
    </div>
  );
}
