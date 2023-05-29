import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('customers').del();

  // Inserts seed entries
  const customer_id1 = uuidv4();
  const customer_id2 = uuidv4();
  const customer_id3 = uuidv4();

  await knex('customers').insert([
    {
      id: customer_id1,
      name: 'Rafael',
      email: 'rafael@gmail.com',
      phone_number: '11988887777',
      cpf: '12345678900'
    },
    {
      id: customer_id2,
      name: 'André',
      email: 'andre@gmail.com',
      phone_number: '11911112222',
      cpf: '98765432100'
    },
    {
      id: customer_id3,
      name: 'Zeus',
      email: 'zeus@gmail.com',
      phone_number: '11944445555',
      cpf: '65432198700'
    }
  ]
  );

  await knex('address').insert([
    {
      id: uuidv4(),
      street: 'Rua do Olimpo',
      number: '12',
      district: 'São Miguel',
      city: 'São Paulo',
      uf: 'sp',
      customer_id: customer_id1
    },
    {
      id: uuidv4(),
      street: 'Rua de Canaã',
      number: '777',
      district: 'Sé',
      city: 'São Paulo',
      uf: 'sp',
      customer_id: customer_id2
    },
    {
      id: uuidv4(),
      street: 'Rua do Chapeleiro',
      number: '21',
      district: 'Penha',
      city: 'Rio de Janeiro',
      uf: 'rj',
      customer_id: customer_id3
    }
  ]
  );
}
