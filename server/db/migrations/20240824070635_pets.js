/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.integer('owner_id').notNullable()
    table.string('pet_name').notNullable()
    table.string('image')
    table.string('dob')
    table.string('sex')
    table.string('breed')
    table.string('species')
    table.string('bio')
    table.string('fave_food')
    table.string('traits')
    table.string('busy')
    table.string('lazy')
    table.string('goofy')
    table.string('gorgeous')
    table.string('brat')
    table.string('loyal')
    table.string('playful')
    table.string('adventurous')
    table.string('foodie')
    table.string('snorer')
    table.string('crazy')
    table.string('floofy')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('pets')
}
