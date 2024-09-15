import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
}

type Story = StoryObj<typeof Sidebar>

export const populated: Story = {
  name: 'Sidebarmenu',
  render: () => <Sidebar />,
}

export default meta
