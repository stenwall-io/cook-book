import { MainLayout } from '@components';
import Link from 'next/link';
import { useSession } from "next-auth/react"

import LogOutButton from '@components/logoutbutton/logoutbutton';
import { Session } from 'next-auth';

export default function Index() {
  const { data, error, isLoading } = useSWR('/api/recipes');
  const { data: session } = useSession()
  
  const recipes = data;

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      Hej {session.user.name}
      <h1>Cook Book!</h1>
      {recipes &&
        recipes.map((recipe: IRecipe, i: number) => (
          <div key={i}>{recipe.title}</div>
        ))}
        <LogOutButton />
    </div>
  );
};

export default Index;
