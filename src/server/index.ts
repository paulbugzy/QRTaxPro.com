import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

app.use(express.json());

// Authentication middleware
const authenticate = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Admin middleware
const requireAdmin = (req: any, res: any, next: any) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Auth routes
app.post('/api/auth/login', async (req, res) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  });

  try {
    const { email, password } = schema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

// User routes
app.post('/api/users', authenticate, requireAdmin, async (req, res) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string(),
    role: z.enum(['ADMIN', 'EDITOR'])
  });

  try {
    const data = schema.parse(req.body);
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    const user = await prisma.user.create({
      data: { ...data, password: hashedPassword }
    });

    res.json({ user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

// Page routes
app.get('/api/pages', authenticate, async (req, res) => {
  const pages = await prisma.page.findMany();
  res.json(pages);
});

app.post('/api/pages', authenticate, async (req, res) => {
  const schema = z.object({
    title: z.string(),
    slug: z.string(),
    content: z.string(),
    meta: z.record(z.any()).optional(),
    published: z.boolean().default(false)
  });

  try {
    const data = schema.parse(req.body);
    const page = await prisma.page.create({ data });
    res.json(page);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});


// Menu routes
app.get('/api/menu', authenticate, async (req, res) => {
  const menuItems = await prisma.menuItem.findMany({
    where: { parentId: null },
    include: { children: true }
  });
  res.json(menuItems);
});

app.post('/api/menu', authenticate, async (req, res) => {
  const schema = z.object({
    title: z.string(),
    path: z.string(),
    order: z.number(),
    parentId: z.string().optional()
  });

  try {
    const data = schema.parse(req.body);
    const menuItem = await prisma.menuItem.create({ data });
    res.json(menuItem);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});