import { NextApiRequest, NextApiResponse } from 'next';
import models from '@models/index';
import apiMiddleware from 'helpers/api';

const Unit = models.Unit;

export const unitHandler = apiMiddleware(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
      // get all units
      case 'GET':
        try {
          const units = await Unit.find({});
          if (!units) {
            return res.status(404).send({
              message: 'No tags were found.',
            });
          }
          return res.status(200).json({ units });
        } catch (err: any) {
          return res
            .status(500)
            .json({ message: 'Error retrieving units', error: err.message });
        }
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
);

export default unitHandler;
