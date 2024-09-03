export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('traits').del()
  await knex('owners').del()
}
