import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('customers', (table) => {
      table.uuid('id').primary();
      table.text('name').notNullable();
      table.text('email').notNullable();
      table.text('phone_number').notNullable().checkLength('=', 11);
      table.text('cpf').notNullable().checkLength('=', 11);
    })
    .createTable('address', (table) => {
      table.uuid('id').primary();
      table.text('street').notNullable().checkLength('>=', 5);
      table.text('number').notNullable().checkLength('>=', 1);
      table.text('district').notNullable().checkLength('>=', 2);
      table.text('city').notNullable().checkLength('>=', 3);
      table.text('uf').notNullable().checkLength('=', 2);

      table.uuid('customer_id').references('customers.id').notNullable().onDelete('CASCADE');
    })
    .createTable('products', (table) => {
      table.uuid('id').primary();
      table.text('name').notNullable();
      table.float('price').notNullable();
      table.text('description');
    })
    .createTable('orders', (table) => {
      table.uuid('id').primary();
      table.enum('status', ['Waiting Pay', 'Waiting Send', 'Sent']);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());

      table.uuid('customer_id').references('customers.id').notNullable().onDelete('CASCADE');
    })
    .createTable('products_orders', (table) => {
      table.uuid('id').primary();
      table.integer('quantity').notNullable();

      table.uuid('product_id').references('products.id').notNullable().onDelete('CASCADE');
      table.uuid('order_id').references('orders.id').notNullable().onDelete('CASCADE');
    })
    .createTable('deliveries', (table) => {
      table.uuid('id').primary();
      table.enum('status', ['In Progress', 'Delivered']);
      table.timestamp('created_at').defaultTo(knex.fn.now());

      table.uuid('order_id').references('orders.id').notNullable().onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('customers')
    .dropTable('address')
    .dropTable('products')
    .dropTable('orders')
    .dropTable('products_orders')
    .dropTable('deliveries');
}
