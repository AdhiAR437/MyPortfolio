import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../../data/portfolio'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const sections = portfolio.navigation.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' })
    sections.forEach((section) => observer.observe(section)); window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])
  const close = () => setOpen(false)
  return <header className={`nav-shell ${scrolled ? 'nav-solid' : ''}`}><nav className="nav wrap" aria-label="Primary navigation">
    <a className="monogram" href="#home" onClick={close} aria-label="Adhi Rane, home">AR<span>.</span></a>
    <div className={`nav-links ${open ? 'open' : ''}`}>{portfolio.navigation.map((item) => <a key={item} href={`#${item}`} onClick={close} aria-current={active === item ? 'page' : undefined}>{item}</a>)}</div>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
  </nav></header>
}
