import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Season = models.Season;

export const unitHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    // get all seasons
    case 'GET':
      try {
        const seasons = await Season.find({});
        if (!seasons) {
          return res.status(404).send({
            message: 'No season were found.',
          });
        }
        return res.status(200).json(seasons);
      } catch (err: any) {
        return res
          .status(500)
          .json({ message: 'Error retrieving seasons', error: err.message });
      }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default unitHandler;
