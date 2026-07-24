import {
  Award,
  Code2,
  Download,
  GraduationCap,
  Mail,
  UserRoundCheck,
  X,
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { getTechnologyIconKey, portfolio } from '../../data/portfolio'
import { TechnologyIcon } from '../../lib/TechnologyIcon'

export function RecruiterProfilePanel({ close }: { close: () => void }) {
  const dialog = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    dialog.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key !== 'Tab' || !dialog.current) return
      const focusable = dialog.current.querySelectorAll<HTMLElement>('button, a[href]')
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
      previous?.focus()
    }
  }, [close])

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <div
        className="profile-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-title"
        tabIndex={-1}
        ref={dialog}
      >
        <button className="modal-close" onClick={close} aria-label="Close recruiter profile">
          <X />
        </button>
        <div className="profile-identity">
          <span className="profile-avatar" aria-hidden="true">
            AR
          </span>
          <div>
            <p className="eyebrow">Quick recruiter profile</p>
            <h2 id="profile-title">{portfolio.personal.name}</h2>
            <p>{portfolio.personal.role}</p>
          </div>
        </div>
        <div className="profile-facts">
          <p>
            <UserRoundCheck /> Professional enterprise development since August 2024
          </p>
          <p>
            <Code2 /> Project-based freelance software development since 2022
          </p>
          <p>
            <GraduationCap /> MCA in Data Science and Machine Learning
          </p>
          <p>
            <Award /> Microsoft AZ-900, AI-900, and 300+ DSA problems solved
          </p>
        </div>
        <div className="tags profile-stack">
          {['C#', '.NET', 'React', 'Python', 'SQL', 'AI applications'].map((skill) => (
            <span key={skill}>
              <TechnologyIcon
                iconKey={getTechnologyIconKey(skill)}
                name={skill}
                size={17}
              />
              {skill}
            </span>
          ))}
        </div>
        <div className="profile-actions">
          <a
            className="button primary"
            href={portfolio.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Adhi Avinash Rane’s LinkedIn profile in a new tab"
          >
            <TechnologyIcon iconKey="linkedin" name="LinkedIn" size={19} /> LinkedIn
          </a>
          <a
            className="button secondary"
            href={portfolio.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Adhi Avinash Rane’s GitHub profile in a new tab"
          >
            <TechnologyIcon iconKey="github" name="GitHub" size={19} /> GitHub
          </a>
          <a
            className="button secondary"
            href={`mailto:${portfolio.contact.email}`}
            aria-label={`Email Adhi Avinash Rane at ${portfolio.contact.email}`}
          >
            <Mail size={18} /> Email
          </a>
          {portfolio.contact.resumeEnabled ? (
            <a
              className="button secondary"
              href={portfolio.contact.resumePath}
              download={portfolio.contact.resumeDownloadName}
            >
              <Download size={18} /> Resume
            </a>
          ) : (
            <button className="button secondary" disabled title="Resume will be available once supplied">
              <Download size={18} /> Resume pending
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
