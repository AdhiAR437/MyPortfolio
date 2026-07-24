import { useEffect } from 'react'
import { CommandPalette } from './components/experience/CommandPalette'
import { ExplorationProgress } from './components/experience/ExplorationProgress'
import { Footer } from './components/layout/Footer'
import { Navigation } from './components/layout/Navigation'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Hero } from './components/sections/Hero'
import {
  Contact,
  ContinueExploring,
  CurrentlyBuilding,
  Experience,
  Journey,
  Projects,
  Skills,
} from './components/sections/Sections'
import { portfolio } from './data/portfolio'

export default function App() {
  useEffect(() => {
    document.title = portfolio.seo.title
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const openGraphDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )
    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (description) description.content = portfolio.seo.description
    if (openGraphDescription) openGraphDescription.content = portfolio.seo.description
    if (openGraphTitle) openGraphTitle.content = portfolio.seo.title
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: portfolio.personal.name,
      jobTitle: portfolio.personal.role,
      email: `mailto:${portfolio.contact.email}`,
      url: portfolio.contact.githubUrl,
      alumniOf: portfolio.education.map((item) => ({
        '@type': 'CollegeOrUniversity',
        name: item.school,
      })),
      sameAs: [portfolio.contact.linkedinUrl, portfolio.contact.githubUrl],
      knowsAbout: portfolio.heroTechnologies,
    })
    document.head.appendChild(schema)
    return () => schema.remove()
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navigation />
      <ExplorationProgress />
      <CommandPalette />
      <main id="main-content">
        <Hero />
        <ContinueExploring />
        <CurrentlyBuilding />
        <Experience />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
