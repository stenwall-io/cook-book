import { IRecipe } from '@models/recipe';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import { CardWrapper, CardImageWrapper, CardContent, CardTitle } from './RecipeCard.styled';
import { CardWrapper } from './CardWrapper/CardWrapper.styled';
import { CardImageWrapper } from './CardImageWrapper/CardImageWrapper.styled';
import { CardTitle } from './CardTitle/CardTitle.styled';
import { CardContent } from './CardContent/CardContent';

import placeholder from 'assets/placeholder.jpg';

interface Props {
  recipe: IRecipe;
}

const RecipeCard = (props: Props) => {
  const router = useRouter();
  const { recipe } = props;

  const clickHandler = () => {
    router.push('/recept/[recipeId]', `/recept/${recipe._id}`);
  };

  // variants:
  // default
  // small
  // side

  return (
    <CardWrapper onClick={clickHandler} variant={'default'}>
      <CardImageWrapper>
        <Image src={placeholder} alt={recipe.title} placeholder="blur" fill />
      </CardImageWrapper>
      <CardContent>
        <CardTitle>{recipe.title}</CardTitle>
        <p>{recipe.description}</p>
      </CardContent>
    </CardWrapper>
  );
};

export default RecipeCard;
