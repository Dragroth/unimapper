import {Knex} from "knex"

export async function seed(knex: Knex): Promise<any> {
    await knex('tags')
    .del()
    .then(() => {
        return knex('tags').insert([
            {id: 1, value: `IT`   , uni_id: 1},
            {id: 2, value: `prawo`, uni_id: 2},
            {id: 3, value: `dupa` , uni_id: 3}
        ])
    })
};