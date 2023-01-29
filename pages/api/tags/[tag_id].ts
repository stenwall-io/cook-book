import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import models from '@models/index';

const Tag = models.Tag;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id: tag_id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    // get tag by id
    case 'GET':
      try {
        const tag = await Tag.findById(tag_id);
        if (!tag) {
          return res
            .status(400)
            .json({ error: `Tag with id: ${tag_id}not found` });
        }
        return res.status(200).json({ tag });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error retrieving tag with id: ${tag_id}.`,
          error: err.message,
        });
      }
    // update tag by id
    case 'PUT':
      if (!req.body) {
        return res.status(400).send({
          message: 'Data to update cannot be empty.',
        });
      }
      try {
        const tag = await Tag.findByIdAndUpdate({ _id: tag_id }, req.body, {
          new: true,
          runValidators: true,
        });
        if (!tag) {
          return res.status(400).json({
            error: `Cannot update tag with id: ${tag_id}, maybe it was not found.`,
          });
        }
        return res
          .status(200)
          .json({ message: 'Tag updated successfully.', tag });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error updating tag with id: ${tag_id}.`,
          error: err.message,
        });
      }
    // delete tag by id
    case 'DELETE':
      try {
        const tag = await Tag.deleteOne({ _id: tag_id });
        if (!tag) {
          return res.status(400).json({
            error: `Cannot delete tag with id: ${tag_id}, maybe it was not found.`,
          });
        }
        return res.status(200).json({ message: 'Tag deleted successfully.' });
      } catch (err: any) {
        return res.status(500).json({
          message: `Error deleting tag with id: ${tag_id}.`,
          error: err.message,
        });
      }
    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
