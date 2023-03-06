import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'db/config/index';
import { getToken } from 'next-auth/jwt';

export default function apiMiddleware(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // only check privileges on api routes in production
    if (process.env.NODE_ENV === 'production') {
      const token = await getToken({ req });
      if (token === null) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    }
    await dbConnect();
    return handler(req, res);
  };
}
