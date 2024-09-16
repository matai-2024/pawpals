// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, describe, it, expect, vi } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { renderApp } from '../../../test-setup'

const teamMembers = [
  {
    name: 'Anahera Foley-Paama',
    role: 'Product Owner',
    img: '/anahera.jpeg',
    linkedin: 'https://www.linkedin.com/in/afoleypaama/',
    email: 'anahera.work@gmail.com',
  },
  {
    name: 'Amy Jackson',
    role: 'Backend Lead',
    img: '/amy.jpg',
    linkedin: 'https://www.linkedin.com/in/amy-jackson',
    email: 'amy@example.com',
  },
  {
    name: 'Dean Tunbridge',
    role: 'Frontend Lead',
    img: '/dean.jpg',
    linkedin: 'https://www.linkedin.com/in/dean-tunbridge',
    email: 'dean@example.com',
  },
  {
    name: 'Jack Gloyer',
    role: 'Git Lead',
    img: 'https://via.placeholder.com/120x120',
    linkedin: 'https://www.linkedin.com/in/jack-gloyer',
    email: 'jack@example.com',
  },
  {
    name: 'Sam Pedersen',
    role: 'Vibes Lead',
    img: '/sam.jpg',
    linkedin: 'https://www.linkedin.com/in/sam-pedersen-2060b0241/',
    email: 'sjcfpedersen@gmail.com',
  },
]

describe('About.tsx', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render links to LinkedIn and email for each team member', async () => {
    const screen = renderApp('/about')

    // Check that LinkedIn and email links are rendered for each team member
    teamMembers.forEach((member) => {
      const linkedinLink = screen.getByRole('link', {
        name: `${member.name}'s LinkedIn`,
      })
      const emailLink = screen.getByRole('link', {
        name: `${member.name}'s email`,
      })

      expect(linkedinLink).toBeVisible()
      expect(emailLink).toBeVisible()
      expect(linkedinLink).toHaveAttribute('href', member.linkedin)
      expect(emailLink).toHaveAttribute('href', `mailto:${member.email}`)
    })
  })

  it('should navigate to LinkedIn when the link is clicked', async () => {
    const screen = renderApp('/about')

    const firstMember = teamMembers[0]
    const linkedinLink = screen.getByRole('link', {
      name: `${firstMember.name}'s LinkedIn`,
    })

    // Simulate click on LinkedIn link
    fireEvent.click(linkedinLink)

    expect(linkedinLink).toHaveAttribute('href', firstMember.linkedin)
  })
})
