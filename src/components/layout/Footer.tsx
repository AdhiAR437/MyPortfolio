import { ArrowUp } from 'lucide-react'
import { portfolio } from '../../data/portfolio'
import { SocialLinks } from '../common/SocialLinks'
export function Footer() { return <footer className="footer wrap"><div><a className="monogram" href="#home">AR<span>.</span></a><p>{portfolio.personal.role}</p></div><div><SocialLinks/><p>React · TypeScript · Three.js · GitHub Pages</p><p>Designed and built by {portfolio.personal.name} · {new Date().getFullYear()}</p></div><a className="back-top" href="#home" aria-label="Back to top"><ArrowUp/></a></footer> }
