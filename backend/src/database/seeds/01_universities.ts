import {Knex} from "knex"

export async function seed(knex: Knex): Promise<any> {
    await knex('universities')
    .del()
    .then(() => {
        return knex('universities').insert([
            {id: 1, name: `AGH`, city: `Kraków`},
            {id: 2, name: `UJ` , city: `Kraków`},
            {id: 3, name: `UW` , city: `Warszawa`}
        ])
    })
};