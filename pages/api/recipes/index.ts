import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';
import { getToken } from 'next-auth/jwt';

const Recipe = models.Recipe;

export const recipeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const token = await getToken({ req });
  if ( token === null ) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { method } = req;

  await dbConnect();

  switch (method) {
    // create new recipe
    case 'POST':
      if (!req.body) {
        return res.status(400).json({ message: 'Cannot be empty.' });
      }
      try {
        const recipe = await Recipe.create(req.body);
        return res
          .status(201)
          .json({ message: 'Recipe created successfully.', recipe });
      } catch (err: any) {
        return res.status(500).json({
          message: 'Error saving recipe to database.',
          error: err.message,
        });
      }
    // get all recipes
    case 'GET':
      try {
        const recipes = await Recipe.find({}).select(['name', 'image_url']);
        if (!recipes) {
          return res.status(404).send({
            message: 'No recipes were found.',
          });
        }
        return res.status(200).json(recipes);
      } catch (err: any) {
        return res
          .status(500)
          .json({ message: 'Error retrieving recipes', error: err.message });
      }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default recipeHandler;
