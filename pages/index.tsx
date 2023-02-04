import { Text, useTheme } from '@nextui-org/react';
import Link from 'next/link';

export const Index = () => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <>
      <Text h1>Cook Book!</Text>
      <Link href="/recipes">Recipes</Link>
    </>
  );
};

export default Index;
