import { NextApiRequest, NextApiResponse } from 'next';
import models from '@models/index';
import apiMiddleware from 'helpers/api';

const Plan = models.Plan;
const Recipe = models.Recipe;

export const recipeHandler = apiMiddleware(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      query: { plan_id, recipe_id },
      method,
    } = req;

    switch (method) {
      // update plan with recipe
      case 'PUT':
        try {
          console.log(plan_id, recipe_id);
          const recipe = await Recipe.findById(recipe_id);
          if (!recipe) {
            return res
              .status(404)
              .json({ error: `Recipe with id: ${recipe_id} not found.` });
          }
          const plan = await Plan.findByIdAndUpdate(
            { _id: plan_id },
            {
              $addToSet: { recipes: recipe._id },
            }
          );
          if (!plan) {
            return res
              .status(404)
              .json({ error: `Plan with id: ${plan_id} not found.` });
          }
          // plan.updateOne({ _id: plan_id }, { $addToSet: { recipes: [recipe] } });
          plan.save();

          return res
            .status(200)
            .json({ message: 'Recipe successfully saved to plan.', plan });
        } catch (err: any) {
          return res.status(500).json({
            message: 'Error saving recipe to plan',
            error: err.message,
          });
        }
      default:
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
);

export default recipeHandler;
