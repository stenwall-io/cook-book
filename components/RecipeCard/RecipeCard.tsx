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
    router.push('/recept/[recipeId]', `/recept/${recipe._id}`);
  };

  return (
    <a onClick={clickHandler}>
      <div>
        <h2>{recipe.title}</h2>
        {recipe.description && <p>{recipe.description}</p>}
      </div>
    </a>
  );
};

export default RecipeCard;
