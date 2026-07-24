import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
  UserRound,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { portfolio } from '../../data/portfolio'
import { getTechnologyIconKey } from '../../data/portfolio'
import { TechnologyIcon } from '../../lib/TechnologyIcon'
import { RecruiterProfilePanel } from '../profile/RecruiterProfilePanel'
import { HeroVisual } from '../three/HeroVisual'

export function Hero() {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <section id="home" className="devstream-hero">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero wrap">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="stream-label">
            <span>DS</span> {portfolio.theme.featuredLabel}
          </p>
          <p className="hero-name">{portfolio.personal.name}</p>
          <h1>{portfolio.personal.headline}</h1>
          <p className="role-line">{portfolio.personal.focus}</p>
          <p className="hero-intro">{portfolio.personal.intro}</p>
          <div className="hero-tech" aria-label="Featured technologies">
            {portfolio.heroTechnologies.map((technology) => (
              <span key={technology}>
                <TechnologyIcon
                  iconKey={getTechnologyIconKey(technology)}
                  name={technology}
                  size={17}
                />
                {technology}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my work <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#experience">
              View experience
            </a>
            <button className="button ghost" onClick={() => setProfileOpen(true)}>
              <UserRound size={18} /> Quick profile
            </button>
          </div>
          <div className="hero-social-actions" aria-label="Contact and profile actions">
            <a
              href={portfolio.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Adhi Avinash Rane’s LinkedIn profile in a new tab"
            >
              <TechnologyIcon iconKey="linkedin" name="LinkedIn" size={18} /> LinkedIn
            </a>
            <a
              href={portfolio.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Adhi Avinash Rane’s GitHub profile in a new tab"
            >
              <TechnologyIcon iconKey="github" name="GitHub" size={18} /> GitHub
            </a>
            <a
              href={`mailto:${portfolio.contact.email}`}
              aria-label={`Email Adhi Avinash Rane at ${portfolio.contact.email}`}
            >
              <Mail size={17} /> Email
            </a>
            {portfolio.contact.resumeEnabled ? (
              <a href={portfolio.contact.resumePath} download={portfolio.contact.resumeDownloadName}>
                <Download size={17} /> Resume
              </a>
            ) : (
              <button disabled title="Resume will be available once supplied">
                <Download size={17} /> Resume pending
              </button>
            )}
          </div>
        </motion.div>
        <div className="hero-visual">
          <HeroVisual />
        </div>
        <a className="scroll-cue" href="#profile" aria-label="Continue to recruiter profile">
          <span>Explore chapters</span>
          <ArrowDown />
        </a>
      </div>
      {profileOpen && <RecruiterProfilePanel close={() => setProfileOpen(false)} />}
    </section>
  )
}
