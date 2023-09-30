import {Knex} from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('tags', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        table.string('value').unique().notNullable();

        table.integer('uni_id').unsigned().notNullable()
        .references('universities.id');
        
        table.timestamps(false, true);
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('tags')
};