import { NextApiRequest, NextApiResponse } from 'next';
import models from '@models/index';
import apiMiddleware from 'helpers/api';

const Tag = models.Tag;

export const tagHandler = apiMiddleware(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    switch (method) {
      // create new tag
      case 'POST':
        if (!req.body) {
          return res.status(400).json({ message: 'Cannot be empty.' });
        }
        try {
          const tag = await Tag.create(req.body);
          return res
            .status(201)
            .json({ message: 'Tag created successfully.', tag });
        } catch (err: any) {
          return res.status(500).json({
            message: 'Error saving tag to database.',
            error: err.message,
          });
        }
      // get all tags
      case 'GET':
        try {
          const tags = await Tag.find({});
          if (!tags) {
            return res.status(404).send({
              message: 'No tags were found.',
            });
          }
          return res.status(200).json({ tags });
        } catch (err: any) {
          return res
            .status(500)
            .json({ message: 'Error retrieving tags', error: err.message });
        }
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
);

export default tagHandler;
