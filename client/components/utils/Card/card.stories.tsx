import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
}

type Story = StoryObj<typeof Card>

export const populated: Story = {
  name: 'Card back',

  render: () => (
    <Card
      title={undefined}
      // eslint-disable-next-line react/no-children-prop
      children={''}
      addAction={undefined}
      buttonText={undefined}
    />
  ),
}

export default meta
