import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import bcrypt from 'bcryptjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'data.json');

const adapter = new JSONFile(file);
const defaultData = {
  users: [],
  pages: [],
  menuItems: [],
  services: [],
  categories: [],
  locations: []
};

const db = new Low(adapter, defaultData);

// Initialize database
await db.read();

// Create admin user if it doesn't exist
const initAdminUser = async () => {
  if (!db.data.users.find(user => user.email === 'admin@narssoplumbing.com')) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    db.data.users.push({
      id: '97bff1ef-0e60-4476-9139-cc952cf3d685',
      email: 'admin@narssoplumbing.com',
      password: hashedPassword,
      name: 'Admin',
      role: 'ADMIN',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    await db.write();
    console.log('Admin user created successfully');
  }
};

await initAdminUser();

// Database operations
const dbOperations = {
  findUser: (email) => {
    return db.data.users.find(user => user.email === email);
  },

  getPages: () => {
    return db.data.pages;
  },

  getMenuItems: () => {
    return db.data.menuItems;
  },

  getServices: () => {
    return db.data.services;
  },

  getLocations: () => {
    return db.data.locations;
  },

  createPage: async (pageData) => {
    const page = {
      id: Date.now().toString(),
      ...pageData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    db.data.pages.push(page);
    await db.write();
    return page;
  },

  updatePage: async (id, pageData) => {
    const index = db.data.pages.findIndex(page => page.id === id);
    if (index !== -1) {
      db.data.pages[index] = {
        ...db.data.pages[index],
        ...pageData,
        updatedAt: new Date().toISOString()
      };
      await db.write();
      return db.data.pages[index];
    }
    return null;
  },

  deletePage: async (id) => {
    const index = db.data.pages.findIndex(page => page.id === id);
    if (index !== -1) {
      db.data.pages.splice(index, 1);
      await db.write();
      return true;
    }
    return false;
  }
};

export default dbOperations;