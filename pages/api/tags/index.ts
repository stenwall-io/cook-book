import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Tag = models.Tag;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

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
