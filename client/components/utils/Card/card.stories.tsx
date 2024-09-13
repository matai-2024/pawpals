import type { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import Profile from '../../../pages/Profile'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
}

type Story = StoryObj<typeof Card>

export const populated: Story = {
  name: 'Card back',
  // eslint-disable-next-line react/no-children-prop
  render: () => <Card title={undefined} children={''} addAction={undefined} />,
}

export default meta
