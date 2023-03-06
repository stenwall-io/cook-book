import { IRecipe } from '@models/recipe';
import Image from 'next/image';
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
    <div>
      <h2>{recipe.name}</h2>
    </div>
  );
};

export default RecipeCard;
