import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Plan = models.Plan;
const Recipe = models.Recipe;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { plan_id, recipe_id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'PUT':
      try {
        console.log(plan_id, recipe_id);
        const plan = await Plan.findById(plan_id);
        const recipe = await Recipe.findById(recipe_id);
        if (!plan) {
          return res.status(400).json({ error: `Plan not found` });
        }
        if (!recipe) {
          return res.status(400).json({ error: `Recipe not found` });
        }
        plan.recipes.addToSet(recipe._id);
        plan.save();

        res.status(200).json({ data: plan });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
      break;

    default:
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
