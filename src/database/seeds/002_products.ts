import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
    {
      id: uuidv4(),
      name: 'Notebook',
      price: 3500,
      description: 'Essential notebook for everyday life, with several functions.'
    },
    {
      id: uuidv4(),
      name: 'Mouse',
      price: 34,
      description: 'Ergonomic mouse, does not hurt the wrist, interesting for everyday work.'
    },
    {
      id: uuidv4(),
      name: 'Tablet',
      price: 904,
      description: ''
    },
    {
      id: uuidv4(),
      name: 'Keyboard',
      price: 312,
      description: 'Soft keys, pleasant when typing, especially for those who practice programming and write texts frequently.'
    },
    {
      id: uuidv4(),
      name: 'Smartphone',
      price: 1600,
      description: ''
    },
  ]);
}
