// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, describe, it, expect, vi } from 'vitest'
import { fireEvent } from '@testing-library/react'
import { renderApp } from './test-setup.tsx'

const teamMembers = [
  {
    name: 'Anahera Foley-Paama',
    role: 'Product Owner',
    img: 'devs/anahera.jpeg',
    linkedin: 'https://www.linkedin.com/in/afoleypaama/',
    email: 'anahera.work@gmail.com',
    github: 'https://github.com/anaherawashere?tab=repositories',
  },
  {
    name: 'Amy Jackson',
    role: 'Backend Lead',
    img: 'devs/amy.jpg',
    linkedin: 'https://www.linkedin.com/in/amyjackson-aj/',
    email: 'dev@achoo-o.mozmail.com',
    github: 'https://github.com/achoo-o',
  },
  {
    name: 'Dean Tunbridge',
    role: 'Frontend Lead',
    img: 'devs/dean.jpg',
    linkedin: 'https://www.linkedin.com/in/deantunbridge/',
    email: 'Deantunbridgedev@gmail.com',
    github: 'https://github.com/dean-tunbridge',
  },
  {
    name: 'Jack Gloyer',
    role: 'Git Lead',
    img: 'devs/jack.jpg',
    linkedin: 'https://www.linkedin.com/in/jack-gloyer',
    email: 'jackgloyer8@gmail.com',
    github: 'https://github.com/jack-gloyer',
  },
  {
    name: 'Sam Pedersen',
    role: 'Vibes Lead',
    img: 'devs/sam.jpg',
    linkedin: 'https://www.linkedin.com/in/sam-pedersen-2060b0241/',
    email: 'sjcfpedersen@gmail.com',
    github: 'https://github.com/sam-pedersen',
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
