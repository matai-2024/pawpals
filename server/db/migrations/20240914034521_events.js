export function up(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('date')
    table.string('time')
    table.string('location')
    table.string('description')
    table.string('event_image')
    table.string('event_website')
    table.string('audience')
    table.integer('creator_id').references('owners.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('events')
}
