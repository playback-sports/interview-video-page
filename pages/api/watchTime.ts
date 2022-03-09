// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type WatchTimeReqBody = {
    time: number;
};

type Data = {
    error: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        res.status(400).json({ error: 'Unsupported request method ' });
        return;
    }

    const { time } = <WatchTimeReqBody>req.body;

    console.log('> Received watch time:', time);

    res.status(200).json(null);
}
