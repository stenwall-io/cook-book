import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Plan = models.Plan;

export const planHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { plan_id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    // get plan by id
    case 'GET':
      try {
        const plan = await Plan.findById(plan_id)
          .populate('recipes')
          .populate({
            path: 'recipes',
            populate: {
              path: 'ingredients.ingredient',
            },
          })
          .populate({
            path: 'recipes',
            populate: {
              path: 'ingredients.unit',
            },
          });
        if (!plan) {
          return res
            .status(404)
            .json({ error: `Plan with id: ${plan_id} not found` });
        }
        return res.status(200).json(plan);
      } catch (err: any) {
        return res.status(500).json({
          message: `Error retrieving plan with id: ${plan_id}.`,
          error: err.message,
        });
      }
    // update plan by id
    case 'PUT':
      if (!req.body) {
        return res.status(400).send({
          message: 'Data to update cannot be empty.',
        });
      }
      try {
        const plan = await Plan.findByIdAndUpdate({ _id: plan_id }, req.body, {
          new: true,
          runValidators: true,
        });
        if (!plan) {
          return res.status(400).json({
            error: `Cannot update plan with id: ${plan_id}, maybe it was not found.`,
          });
        }
        return res
          .status(200)
          .json({ message: 'Post updated successfully.', plan });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error updating plan with id: ${plan_id}.`,
          error: err.message,
        });
      }
    case 'DELETE':
      // delete plan by id
      try {
        const plan = await Plan.deleteOne({ _id: plan_id });
        if (!plan) {
          return res.status(404).json({
            error: `Cannot delete plan with id: ${plan_id}, maybe it was not found.`,
          });
        }
        return res.status(200).json({ message: 'Plan deleted successfully.' });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error deleting plan with id: ${plan_id}.`,
          error: err.message,
        });
      }
    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default planHandler;
