export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('attendees').del()
  await knex('events').del()
  await knex('traits').del()
  await knex('pets').del()
  await knex('owners').del()
}
