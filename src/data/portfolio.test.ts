import { describe, expect, it } from 'vitest'
import { technologyIcons } from '../lib/iconRegistry'
import { portfolio } from './portfolio'

describe('portfolio configuration', () => {
  it('contains the verified contact details without placeholders', () => {
    expect(portfolio.contact.email).toBe('adhiar98@gmail.com')
    expect(portfolio.contact.linkedinUrl).toBe(
      'https://www.linkedin.com/in/adhi-avinash-rane-45375a1bb/',
    )
    expect(portfolio.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  it('keeps every navigation destination unique', () => {
    const ids = portfolio.navigation.map(({ id }) => id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('does not expose unconfigured project links', () => {
    portfolio.projects.forEach((project) => {
      if (project.github) expect(project.github).toMatch(/^https:\/\//)
      if (project.live) expect(project.live).toMatch(/^https:\/\//)
    })
  })

  it('resolves every configured technology icon key', () => {
    portfolio.technologyCatalog.forEach(({ iconKey, name }) => {
      const definition = technologyIcons[iconKey]
      expect(definition, `${name} should have an icon definition`).toBeDefined()
      expect(
        Boolean(definition.component || definition.monogram),
        `${name} should never render an empty icon`,
      ).toBe(true)
    })
  })
})
