import type { Meta, StoryObj } from '@storybook/react'
import PetCard from './PetCard'

const meta: Meta<typeof PetCard> = {
  title: 'PetCard',
  component: PetCard,
}

type Story = StoryObj<typeof PetCard>

export const populated: Story = {
  name: 'petcard',
  render: () => <PetCard petName={''} image={''} />,
}

export default meta
