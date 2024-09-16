export function up(knex) {
  return knex.schema.createTable('owners', (table) => {
    table.increments('id')
    table.string('external_key').primary()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable()
  })
}

export function down(knex) {
  return knex.schema.dropTable('owners')
}
