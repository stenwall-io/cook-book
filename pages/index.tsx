import MainLayout from '@components/Layout/MainLayout';
import Link from 'next/link';

export const Index = () => {
  return (
    <>
      <MainLayout>
        <Link href="/recipes">Recipes</Link>
      </MainLayout>
    </>
  );
};

export default Index;
