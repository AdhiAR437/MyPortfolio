import { Code2, Link, Mail } from 'lucide-react'
import { isConfigured, portfolio } from '../../data/portfolio'

export function SocialLinks() {
  const links = [
    { label: 'GitHub profile', url: portfolio.contact.githubUrl, icon: Code2 },
    { label: 'LinkedIn profile', url: portfolio.contact.linkedinUrl, icon: Link },
    { label: 'Send email', url: `mailto:${portfolio.contact.email}`, icon: Mail, configured: isConfigured(portfolio.contact.email) },
  ].filter((link) => link.configured ?? isConfigured(link.url))
  return <div className="social-links">{links.map(({ label, url, icon: Icon }) => <a key={label} href={url} aria-label={label} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><Icon size={19} /></a>)}</div>
}
