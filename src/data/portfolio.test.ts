import { describe, expect, it } from 'vitest'
import { technologyIcons } from '../lib/iconRegistry'
import { getTechnologyIconKey, portfolio } from './portfolio'

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

  it('keeps the replacement projects in their intended positions', () => {
    expect(portfolio.projects.map(({ title }) => title)).toEqual([
      'Zybot — AI Enterprise Assistant',
      'NeuroMarkup — RAG-Powered HTML Editor',
      'LivePplay',
      'LifeOS',
      'Nutrifit',
    ])
  })

  it('renders every project technology once with a valid icon fallback', () => {
    portfolio.projects.forEach((project) => {
      expect(new Set(project.stack).size).toBe(project.stack.length)
    })

    portfolio.projects.slice(2).forEach((project) => {
      project.stack.forEach((technology) => {
        const iconKey = getTechnologyIconKey(technology)
        expect(iconKey, `${technology} should have a registry key`).toBeDefined()
        if (iconKey) expect(technologyIcons[iconKey]).toBeDefined()
      })
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

  it('keeps the current focus section complete and centrally configured', () => {
    expect(portfolio.currentFocus).toHaveLength(3)
    portfolio.currentFocus.forEach((item) => {
      expect(item.description.length).toBeGreaterThan(40)
      expect(item.whyItMatters.length).toBeGreaterThan(20)
      expect(item.technologies.length).toBeGreaterThan(0)
      expect(technologyIcons[item.iconKey]).toBeDefined()
    })
  })
})
