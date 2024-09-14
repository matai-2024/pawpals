export function up(knex) {
  return knex.schema.createTable('traits', (table) => {
    table.increments('id').primary()
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

export function down(knex) {
  return knex.schema.dropTable('traits')
}
