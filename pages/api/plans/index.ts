import { NextApiRequest, NextApiResponse } from 'next';
import models from '@models/index';
import apiMiddleware from 'helpers/api';

const Plan = models.Plan;

export const planHandler = apiMiddleware(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
      // create new plan
      case 'POST':
        if (!req.body) {
          return res.status(400).json({ message: 'Cannot be empty.' });
        }
        try {
          const plan = await Plan.create(req.body);
          return res
            .status(201)
            .json({ message: 'Plan created successfully.', plan });
        } catch (err: any) {
          return res.status(500).json({
            message: 'Error saving plan to database.',
            error: err.message,
          });
        }
      // get all plans
      case 'GET':
        try {
          const plans = await Plan.find({});
          if (!plans) {
            return res.status(404).send({
              message: 'No plans were found.',
            });
          }
          return res.status(200).json(plans);
        } catch (err: any) {
          return res
            .status(500)
            .json({ message: 'Error retrieving plans', error: err.message });
        }
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
);

export default planHandler;
