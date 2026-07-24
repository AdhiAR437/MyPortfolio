import { Download, Menu, Search, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../../data/portfolio'
import { TechnologyIcon } from '../../lib/TechnologyIcon'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileMenu = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const sections = portfolio.navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-35% 0px -55%' },
    )
    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const firstLink = mobileMenu.current?.querySelector<HTMLElement>('a')
    firstLink?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)
  const openCommand = () => window.dispatchEvent(new Event('devstream:command'))

  return (
    <header className={`nav-shell ${scrolled ? 'nav-solid' : ''}`}>
      <nav className="nav wrap" aria-label="Primary navigation">
        <a className="stream-brand" href="#home" onClick={close} aria-label="DevStream, home">
          <span>AR</span>
          <i>DEVSTREAM</i>
        </a>
        <div
          id="mobile-navigation"
          ref={mobileMenu}
          className={`nav-links ${open ? 'open' : ''}`}
        >
          {portfolio.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={close}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
          <div className="mobile-shortcuts">
            <a
              href={portfolio.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile in a new tab"
            >
              <TechnologyIcon iconKey="linkedin" name="LinkedIn" size={17} /> LinkedIn
            </a>
            <a
              href={portfolio.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open GitHub profile in a new tab"
            >
              <TechnologyIcon iconKey="github" name="GitHub" size={17} /> GitHub
            </a>
          </div>
        </div>
        <div className="nav-actions">
          <a
            className="nav-icon"
            href={portfolio.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Adhi’s LinkedIn profile in a new tab"
            title="LinkedIn"
          >
            <TechnologyIcon iconKey="linkedin" name="LinkedIn" size={19} />
          </a>
          <a
            className="nav-icon"
            href={portfolio.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Adhi’s GitHub profile in a new tab"
            title="GitHub"
          >
            <TechnologyIcon iconKey="github" name="GitHub" size={19} />
          </a>
          <button
            className="nav-icon"
            onClick={openCommand}
            aria-label="Open command palette"
            title="Search and commands"
          >
            <Search size={18} />
          </button>
          {portfolio.contact.resumeEnabled ? (
            <a
              className="nav-resume"
              href={portfolio.contact.resumePath}
              download={portfolio.contact.resumeDownloadName}
            >
              <Download size={16} /> Resume
            </a>
          ) : (
            <button className="nav-resume" disabled title="Resume will be available once supplied">
              <Download size={16} /> Resume
            </button>
          )}
          <button
            ref={menuButton}
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
