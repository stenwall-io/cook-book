import { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "db/config/index"
import models from "@models/index";

const Ingredient = models.Ingredient;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const data = await Ingredient.find({});
                res.status(200).json({ data: data });
            } catch (err: any) {
                res.status(500).json({ error: err.message })
            }
            break;
        case 'POST':
            try {
                const data = await Ingredient.create(
                  req.body
                )
                res.status(201).json({ data: data })
              } catch (err: any) {
                res.status(500).json({ error: err.message })
            }
              break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}