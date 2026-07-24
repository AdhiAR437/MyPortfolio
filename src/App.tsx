import { useEffect } from 'react'
import { Navigation } from './components/layout/Navigation'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About, Contact, Education, Experience, Projects, RecruiterSnapshot, Skills } from './components/sections/Sections'
import { portfolio } from './data/portfolio'

export default function App() {
  useEffect(() => { const schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: portfolio.personal.name, jobTitle: portfolio.personal.role, url: portfolio.contact.githubUrl, alumniOf: portfolio.education.map((item) => ({ '@type': 'CollegeOrUniversity', name: item.school })), sameAs: [portfolio.contact.githubUrl] }); document.head.appendChild(schema); return () => schema.remove() }, [])
  return <><ScrollProgress/><Navigation/><main id="main-content"><Hero/><RecruiterSnapshot/><About/><Experience/><Skills/><Projects/><Education/><Contact/></main><Footer/></>
}
