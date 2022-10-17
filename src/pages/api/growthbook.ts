// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const response = await fetch(process.env.GROWTHBOOK_API_ENDPOINT!, {
      method: 'GET'
    });

    const data = await response.json();

    res.status(200).json({ result: data.features });
  }
}
