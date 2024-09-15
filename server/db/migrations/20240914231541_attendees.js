export function up(knex) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments('id').primary()
    table.integer('event_id').references('events.id')
    table.integer('account_id').references('owners.id')
    table.integer('pet_id').references('pets.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('attendees')
}
