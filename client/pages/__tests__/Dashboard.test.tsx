// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderApp, screen, fireEvent, waitFor } from '../__tests__/test-setup'
import { useAuth0 } from '@auth0/auth0-react'
import { Dashboard } from '../Dashboard'

vi.mock('@auth0/auth0-react')

// Mocking fetch responses for pets and events
global.fetch = vi.fn()

describe('Dashboard', () => {
  const mockPets = [
    { id: 1, petName: 'Buddy', image: '/buddy.jpg', ownerId: 'auth0|123' },
    { id: 2, petName: 'Bella', image: '/bella.jpg', ownerId: 'auth0|123' },
  ]

  const mockEvents = [
    {
      id: 1,
      title: 'Dog Walk',
      time: '10:00 AM',
      going: true,
      eventImage: '/event1.jpg',
      creatorId: 1,
    },
    {
      id: 2,
      title: 'Pet Adoption',
      time: '2:00 PM',
      going: true,
      eventImage: '/event2.jpg',
      creatorId: 1,
    },
  ]

  beforeEach(() => {
    vi.clearAllMocks()
    fetch.mockImplementation((url) => {
      if (url.includes('/api/v1/pets')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockPets),
        })
      }
      if (url.includes('/api/v1/events')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockEvents),
        })
      }
      return Promise.reject(new Error('Invalid API call'))
    })
  })

  it('should render pets and events for an authenticated user', async () => {
    ;(useAuth0 as any).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: { sub: 'auth0|123' },
    })

    renderApp('/dashboard')

    // Wait for the pets and events to load
    await waitFor(() => {
      // Check if pets are rendered
      mockPets.forEach((pet) => {
        expect(screen.getByText(pet.petName)).toBeVisible()
      })

      // Check if events are rendered
      mockEvents.forEach((event) => {
        expect(screen.getByText(event.title)).toBeVisible()
        expect(screen.getByText(event.time)).toBeVisible()
      })
    })
  })

  it('should show message if no pets or events are found', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({ json: () => Promise.resolve([]) }),
    )
    fetch
      .mockImplementationOnce(() =>
        Promise.resolve({ json: () => Promise.resolve([]) }),
      )
      (useAuth0 as any)
      .mockReturnValue({
        isAuthenticated: true,
        isLoading: false,
        user: { sub: 'auth0|123' },
      })

    renderApp('/dashboard')

    await waitFor(() => {
      expect(screen.getByText('You do not have any pets yet.')).toBeVisible()
      expect(
        screen.getByText('You do not have any events scheduled.'),
      ).toBeVisible()
      expect(screen.getByText('You do not have any events yet.')).toBeVisible()
    })
  })

  it('should show login message for unauthenticated users', () => {
    ;(useAuth0 as any).mockReturnValue({
      isAuthenticated: false,
      isLoading: false,
    })

    renderApp('/dashboard')

    expect(
      screen.getByText('You need to log in to see your dashboard.'),
    ).toBeVisible()
  })

  it('should navigate to add pet or event when buttons are clicked', () => {
    ;(useAuth0 as any).mockReturnValue({
      isAuthenticated: true,
      isLoading: false,
      user: { sub: 'auth0|123' },
    })

    const { history } = renderApp('/dashboard')

    const addPetButton = screen.getByText('Add Pet')
    fireEvent.click(addPetButton)
    expect(history.location.pathname).toBe('/create')

    const addEventButton = screen.getByText('Add Event')
    fireEvent.click(addEventButton)
    expect(history.location.pathname).toBe('/events/create')
  })
})
