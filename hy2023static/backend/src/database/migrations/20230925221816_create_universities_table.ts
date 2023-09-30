import {Knex} from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('universities', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('name').unique().notNullable();
        table.string('city').notNullable();
        table.timestamps(false, true);
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('universities')
};