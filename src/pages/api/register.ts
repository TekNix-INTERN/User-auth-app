import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database
    try {
      await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      return res.status(200).json({ message: 'User registered' });
    } catch (error) {
      return res.status(500).json({ message: 'User registration failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
