import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('user_uuid').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone_number').notNullable();
        table.string('bvn').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.enu('status', ['active', 'pending', 'deactivated']);
        table.timestamps(true, true);
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

