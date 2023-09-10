import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch posts' });
  } finally {
    await prisma.$disconnect();
  }
}
