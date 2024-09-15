import db from '../connection.ts'
import { Trait, TraitData } from '../../../models/forms.ts'

// Get all traits
export async function getAllTraits() {
  const traits: TraitData[] = await db('traits').select()
  return traits as Trait[]
}
