import useSWR from 'swr';

export default function Index() {
  const { data, error } = useSWR('{ users { name } }');

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { users } = data;

  return (
    <div>
      <h1>Cook Book!</h1>
      {users.map((user: any, i: number) => (
        <div key={i}>{user.name}</div>
      ))}
    </div>
  );
}
