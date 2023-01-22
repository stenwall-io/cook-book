import { NextApiRequest, NextApiResponse } from 'next'

import dbConnect from "db/config/index"
import models from "@models/index";

const Recipe = models.Recipe;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const recipes = await Recipe.find({});
                res.status(200).json({ data: recipes, error: '' });
            } catch (err: any) {
                res.status(500).json({ data: '', error: err.message })
            }
            break;
    }
}