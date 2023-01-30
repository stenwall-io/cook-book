import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Recipe = models.Recipe;

export const recipeHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { recipe_id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    // get recipe by id
    case 'GET':
      try {
        const recipe = await Recipe.findById(recipe_id);
        if (!recipe) {
          return res
            .status(404)
            .json({ error: `Recipe with id: ${recipe_id}not found` });
        }
        return res.status(200).json({ recipe });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error retrieving recipe with id: ${recipe_id}.`,
          error: err.message,
        });
      }
    // update recipe by id
    case 'PUT':
      if (!req.body) {
        return res.status(400).send({
          message: 'Data to update cannot be empty.',
        });
      }
      try {
        const recipe = await Recipe.findByIdAndUpdate(
          { _id: recipe_id },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!recipe) {
          return res.status(400).json({
            error: `Cannot update recipe with id: ${recipe_id}, maybe it was not found.`,
          });
        }
        return res
          .status(200)
          .json({ message: 'Recipe updated successfully.', recipe });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error updating recipe with id: ${recipe_id}.`,
          error: err.message,
        });
      }
    // delete recipe by id
    case 'DELETE':
      try {
        const recipe = await Recipe.deleteOne({ _id: recipe_id });
        if (!recipe) {
          return res.status(404).json({
            error: `Cannot delete recipe with id: ${recipe_id}, maybe it was not found.`,
          });
        }
        return res
          .status(200)
          .json({ message: 'Recipe deleted successfully.' });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error deleting recipe with id: ${recipe_id}.`,
          error: err.message,
        });
      }
    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default recipeHandler;
