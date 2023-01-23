import { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "db/config/index"
import models from "@models/index";

const Ingredient = models.Ingredient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const data = await Ingredient.findById(id);
        if (!data) {
          return res.status(400).json({ error: `Ingredient ${id} not found` });
        }
        res.status(200).json({ data: data });
      } catch (err: any) {
        res.status(500).json({ error: err.message});
      }
      break

    case 'PUT':
      try {
        const data = await Ingredient.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!data) {
          return res.status(400).json({ error: `Ingredient ${id} not found` })
        }
        res.status(200).json({ data: data })
      } catch (err: any) {
        res.status(500).json({ error: err.message})
      }
      break

    case 'DELETE':
      try {
        const deleted = await Ingredient.deleteOne({ _id: id })
        if (!deleted) {
          return res.status(400).json({ error: `Ingredient ${id} not found` })
        }
        res.status(200).json({ data: {} })
      } catch (err: any) {
        res.status(500).json({ error: err.message})
      }
      break
    default:
        res.setHeader('Allow', ['GET', 'DELETE', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}