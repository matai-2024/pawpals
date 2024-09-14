export function up(knex) {
  return knex.schema.createTable('attendees', (table) => {
    table.increments('id').primary()
    table.integer('account_id').references('owners.id')
    table.integer('event_id').references('events.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('attendees')
}
