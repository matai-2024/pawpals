export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('pets').del()
  await knex('traits').del()
  await knex('owners').del()
}
