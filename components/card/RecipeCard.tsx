import { IRecipe } from '@models/recipe';
import { Card, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  recipe: IRecipe;
}

const RecipeCard = (props: Props) => {
  const router = useRouter();
  const { recipe } = props;

  const clickHandler = () => {
    router.push('/recipes/[recipeId]', `/recipes/${recipe._id}`);
  };

  return (
    <>
      <Card
        variant="flat"
        isHoverable
        isPressable
        onPress={clickHandler}
        as="a"
      >
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={recipe.image_url}
            objectFit="cover"
            width="100%"
            height={160}
            alt={recipe.name}
          />
          <Card.Header>
            <Text size="$xl">{recipe.name}</Text>
          </Card.Header>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecipeCard;
