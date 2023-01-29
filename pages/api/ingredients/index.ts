import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Ingredient = models.Ingredient;

export const ingredientHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    // create new ingredient
    case 'POST':
      if (!req.body) {
        return res.status(400).json({ message: 'Cannot be empty.' });
      }
      try {
        const ingredient = await Ingredient.create(req.body);
        return res
          .status(201)
          .json({ message: 'Ingredient created successfully.', ingredient });
      } catch (err: any) {
        return res.status(500).json({
          message: 'Error saving ingredinet to database.',
          error: err.message,
        });
      }
    //get all ingredients
    case 'GET':
      try {
        const ingredients = await Ingredient.find({});
        if (!ingredients) {
          return res.status(404).send({
            message: 'No ingredients were found.',
          });
        }
        return res.status(200).json({ ingredients });
      } catch (err: any) {
        return res.status(500).json({
          message: 'Error retrieving ingredients',
          error: err.message,
        });
      }
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default ingredientHandler;
