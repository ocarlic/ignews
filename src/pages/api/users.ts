import { NextApiRequest, NextApiResponse } from 'next'

export default function User(request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: 'Victor' },
    { id: 2, name: 'Gabriel' },
    { id: 3, name: 'Marcos' },
  ]

  return response.json(users);
}
