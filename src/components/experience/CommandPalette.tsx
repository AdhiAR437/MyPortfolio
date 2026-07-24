import { ArrowRight, Code2, Mail, Search, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { portfolio } from '../../data/portfolio'
import { TechnologyIcon } from '../../lib/TechnologyIcon'

const commands = [
  ...portfolio.navigation.map((item) => ({
    label: `Go to ${item.label}`,
    hint: `#${item.id}`,
    action: () => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' }),
  })),
  {
    label: 'Open LinkedIn',
    hint: 'External profile',
    action: () => window.open(portfolio.contact.linkedinUrl, '_blank', 'noopener,noreferrer'),
  },
  {
    label: 'Open GitHub',
    hint: 'External profile',
    action: () => window.open(portfolio.contact.githubUrl, '_blank', 'noopener,noreferrer'),
  },
  {
    label: 'Email Adhi',
    hint: portfolio.contact.email,
    action: () => {
      window.location.href = `mailto:${portfolio.contact.email}`
    },
  },
]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const dialog = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const trigger = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const onCommand = () => {
      trigger.current = document.activeElement as HTMLElement | null
      setOpen(true)
    }
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        trigger.current = document.activeElement as HTMLElement | null
        setOpen((value) => !value)
      }
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('devstream:command', onCommand)
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('devstream:command', onCommand)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    input.current?.focus()
    const previousOverflow = document.body.style.overflow
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !dialog.current) return
      const focusable = dialog.current.querySelectorAll<HTMLElement>('button, input, a[href]')
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
    document.addEventListener('keydown', trapFocus)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', trapFocus)
      trigger.current?.focus()
    }
  }, [open])

  const matches = useMemo(
    () => commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  if (!open) return null
  return (
    <div className="command-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <div
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-title"
        ref={dialog}
      >
        <header>
          <Code2 aria-hidden="true" />
          <div>
            <span id="command-title">DevStream command palette</span>
            <small>Navigate without leaving the keyboard</small>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close command palette">
            <X />
          </button>
        </header>
        <label>
          <Search aria-hidden="true" />
          <span className="sr-only">Search commands</span>
          <input
            ref={input}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search profile, projects, contact…"
          />
          <kbd>Esc</kbd>
        </label>
        <div className="command-results">
          {matches.map((command) => (
            <button
              key={command.label}
              onClick={() => {
                command.action()
                setQuery('')
                setOpen(false)
              }}
            >
              <span>
                {command.label}
                <small>{command.hint}</small>
              </span>
              {command.label === 'Open LinkedIn' ? (
                <TechnologyIcon iconKey="linkedin" name="LinkedIn" size={18} />
              ) : command.label === 'Open GitHub' ? (
                <TechnologyIcon iconKey="github" name="GitHub" size={18} />
              ) : command.label.startsWith('Email') ? (
                <Mail />
              ) : (
                <ArrowRight />
              )}
            </button>
          ))}
          {!matches.length && <p>No matching command.</p>}
        </div>
        <footer>
          <span>Tip: press</span> <kbd>Ctrl</kbd> + <kbd>K</kbd> <span>anywhere</span>
        </footer>
      </div>
    </div>
  )
}
