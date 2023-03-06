import { NextApiRequest, NextApiResponse } from 'next';
import models from '@models/index';
import apiMiddleware from 'helpers/api';

const Ingredient = models.Ingredient;

export const ingredientHandler = apiMiddleware(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      query: { ingredient_id },
      method,
    } = req;

    switch (method) {
      // get ingredient by id
      case 'GET':
        try {
          const ingredient = await Ingredient.findById(ingredient_id).populate(
            'default_unit'
          );
          if (!ingredient) {
            return res.status(404).json({
              error: `Ingredient with id: ${ingredient_id} not found`,
            });
          }
          return res.status(200).json(ingredient);
        } catch (err: any) {
          return res.status(500).json({
            message: `Error retrieving ingredient with id: ${ingredient_id}.`,
            error: err.message,
          });
        }
      // update ingredient by id
      case 'PUT':
        if (!req.body) {
          return res.status(400).send({
            message: 'Data to update cannot be empty.',
          });
        }
        try {
          const ingredient = await Ingredient.findByIdAndUpdate(
            { _id: ingredient_id },
            req.body,
            {
              new: true,
              runValidators: true,
            }
          );
          if (!ingredient) {
            return res.status(400).json({
              error: `Cannot update ingredient with id: ${ingredient_id}, maybe it was not found.`,
            });
          }
          return res
            .status(200)
            .json({ message: 'Ingredient updated successfully.', ingredient });
        } catch (err: any) {
          return res.status(500).json({
            message: `Error updating ingredient with id: ${ingredient_id}.`,
            error: err.message,
          });
        }
      // delete ingredient by id
      case 'DELETE':
        try {
          const ingredient = await Ingredient.deleteOne({ _id: ingredient_id });
          if (!ingredient) {
            return res.status(404).json({
              error: `Cannot delete ingredient with id: ${ingredient_id}, maybe it was not found.`,
            });
          }
          return res
            .status(200)
            .json({ message: 'Ingredient deleted successfully.' });
        } catch (err: any) {
          return res.status(500).json({
            message: `Error deleting ingredient with id: ${ingredient_id}.`,
            error: err.message,
          });
        }
      default:
        res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
);

export default ingredientHandler;
