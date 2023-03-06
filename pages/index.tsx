import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { MainLayout } from '@components';

export const Index = () => {
  const { data: session } = useSession();

  if (!session) return <p>Loading...</p>;

  return (
    <>
      <MainLayout>
        <p>Hej {session.user.name}!</p>
        <Link href="/recipes">Recipes</Link>
      </MainLayout>
    </>
  );
};

export default Index;
