export function up(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.integer('owner_id').references('owners.id')
    table.string('pet_name')
    table.string('image')
    table.string('dob')
    table.string('gender')
    table.string('breed')
    table.string('species')
    table.string('bio')
    table.integer('trait_id').references('traits.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('pets')
}
