import { Mail } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { TechnologyIcon } from '../../lib/TechnologyIcon'

export function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={portfolio.contact.githubUrl}
        aria-label="Open Adhi Avinash Rane’s GitHub profile in a new tab"
        title="GitHub"
        target="_blank"
        rel="noreferrer noopener"
      >
        <TechnologyIcon iconKey="github" name="GitHub" size={21} />
      </a>
      <a
        href={portfolio.contact.linkedinUrl}
        aria-label="Open Adhi Avinash Rane’s LinkedIn profile in a new tab"
        title="LinkedIn"
        target="_blank"
        rel="noreferrer noopener"
      >
        <TechnologyIcon iconKey="linkedin" name="LinkedIn" size={21} />
      </a>
      <a
        href={`mailto:${portfolio.contact.email}`}
        aria-label={`Email Adhi Avinash Rane at ${portfolio.contact.email}`}
        title="Email"
      >
        <Mail size={20} aria-hidden="true" />
      </a>
    </div>
  )
}
