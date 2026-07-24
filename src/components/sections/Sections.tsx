import {
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Mail,
  Search,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import {
  getTechnologyIconKey,
  portfolio,
  type Project,
  type SkillLevel,
} from '../../data/portfolio'
import { TechnologyIcon } from '../../lib/TechnologyIcon'
import { ContentIcon } from '../common/ContentIcon'
import { ContentRail } from '../common/ContentRail'
import { Reveal } from '../common/Reveal'
import { SectionHeading } from '../common/SectionHeading'
import { ProjectCaseStudy } from '../projects/ProjectCaseStudy'

export function CurrentlyBuilding() {
  return (
    <section id="building" className="section current-focus-section wrap" aria-label="Currently Building">
      <SectionHeading
        eyebrow="Now Streaming"
        title="Currently Building"
        description="A focused view of active engineering work and the production skills I am strengthening now."
      />
      <div className="current-focus-grid">
        {portfolio.currentFocus.map((item, index) => (
          <Reveal
            className={`current-focus-card${index === 0 ? ' featured' : ''}`}
            key={item.title}
          >
            <article tabIndex={0}>
              <div className="current-focus-top">
                <span className="current-focus-icon">
                  <TechnologyIcon
                    iconKey={item.iconKey}
                    name={item.title}
                    size={index === 0 ? 38 : 30}
                    labelled
                  />
                </span>
                <span className="current-focus-status">
                  <i aria-hidden="true" />
                  {item.status}
                </span>
              </div>
              {index === 0 && (
                <div className="focus-workbench" aria-hidden="true">
                  <div className="focus-workbench-grid" />
                  <div className="focus-connection horizontal" />
                  <div className="focus-connection vertical" />
                  <span className="focus-node focus-node-agent">
                    <TechnologyIcon iconKey="agent" name="AI agent" size={32} />
                    <b>AGENT</b>
                    <small>BUILDING</small>
                  </span>
                  <span className="focus-node focus-node-dotnet">
                    <TechnologyIcon iconKey="dotnet" name=".NET" size={21} />
                    <small>.NET</small>
                  </span>
                  <span className="focus-node focus-node-api">
                    <TechnologyIcon iconKey="api" name="API" size={21} />
                    <small>API</small>
                  </span>
                  <span className="focus-node focus-node-data">
                    <TechnologyIcon iconKey="database" name="Data services" size={21} />
                    <small>DATA</small>
                  </span>
                  <div className="focus-build-status">
                    <span>AI SERVICE PIPELINE</span>
                    <i>
                      <b />
                    </i>
                    <small>WORK IN PROGRESS</small>
                  </div>
                </div>
              )}
              <p className="current-focus-episode">NOW BUILDING / 0{index + 1}</p>
              <h3>{item.title}</h3>
              <p className="current-focus-description">{item.description}</p>
              <div className="current-focus-why">
                <strong>Why it matters</strong>
                <span>{item.whyItMatters}</span>
              </div>
              <div className="tags">
                {item.technologies.map((technology) => (
                  <span key={technology}>
                    <TechnologyIcon
                      iconKey={getTechnologyIconKey(technology)}
                      name={technology}
                      size={16}
                    />
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ContinueExploring() {
  return (
    <div className="wrap stream-section">
      <ContentRail
        title={portfolio.theme.exploreRailLabel}
        description="Jump directly to the chapter most relevant to your review."
        labelledBy="continue-heading"
      >
        {portfolio.continueExploring.map((item) => (
          <a className="explore-card" href={item.href} key={item.title}>
            <ContentIcon name={item.icon} />
            <span>
              <strong>{item.title}</strong>
              <small>{item.description}</small>
            </span>
          </a>
        ))}
      </ContentRail>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section wrap">
      <SectionHeading
        eyebrow={portfolio.theme.careerLabel}
        title="Professional work, presented as career chapters."
        description="The season metaphor adds structure; the dates, responsibilities, and employment facts remain literal."
      />
      <div className="season-timeline">
        {portfolio.experiences.map((item, index) => (
          <Reveal className="season-card" key={item.role}>
            <div className="season-number">
              <span>Season {index + 1}</span>
              <strong>{item.period}</strong>
            </div>
            <div className="season-content">
              <p className="company">{item.company}</p>
              <h3>{item.role}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tags">
                {item.stack.map((tag) => (
                  <span key={tag}>
                    <TechnologyIcon
                      iconKey={getTechnologyIconKey(tag)}
                      name={tag}
                      size={16}
                    />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  const [level, setLevel] = useState<'All' | SkillLevel>('All')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<string | null>('.NET & Backend')
  const levels: Array<'All' | SkillLevel> = [
    'All',
    'Core',
    'Working knowledge',
    'Project exposure',
  ]
  const groups = useMemo(() => {
    const search = query.trim().toLowerCase()
    return portfolio.skills.filter(
      (group) =>
        (level === 'All' || group.level === level) &&
        (!search ||
          group.name.toLowerCase().includes(search) ||
          group.skills.some((skill) => skill.toLowerCase().includes(search))),
    )
  }, [level, query])

  return (
    <section id="skills" className="section wrap">
      <SectionHeading
        eyebrow={portfolio.theme.skillsLabel}
        title="Technology channels built around practical use."
        description="Primary engineering tools lead each channel. Labels distinguish professional depth without invented percentages."
      />
      <div className="skill-toolbar">
        <label className="skill-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search technologies</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search C#, React, RAG…"
          />
        </label>
        <div className="filters" role="group" aria-label="Filter technology channels">
          {levels.map((item) => (
            <button
              key={item}
              className={level === item ? 'active' : ''}
              onClick={() => setLevel(item)}
              aria-pressed={level === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <motion.div layout className="channel-grid">
        {groups.map((group) => {
          const isExpanded = expanded === group.name
          return (
            <motion.article layout className="channel-card" key={group.name}>
              <button
                className="channel-summary"
                onClick={() => setExpanded(isExpanded ? null : group.name)}
                aria-expanded={isExpanded}
              >
                <span className="channel-icon">
                  <ContentIcon name={group.icon} />
                </span>
                <span>
                  <small>{group.level}</small>
                  <strong>{group.name}</strong>
                  <em>{group.description}</em>
                </span>
                <ChevronDown className={isExpanded ? 'rotated' : ''} />
              </button>
              <div className="primary-tech" aria-label={`Primary ${group.name} technologies`}>
                {group.primarySkills.map((skill) => (
                  <span key={skill}>
                    <TechnologyIcon
                      iconKey={getTechnologyIconKey(skill)}
                      name={skill}
                      size={19}
                    />
                    {skill}
                  </span>
                ))}
              </div>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.ul
                    className="channel-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {group.skills.map((skill) => (
                      <li key={skill}>
                        <TechnologyIcon
                          iconKey={getTechnologyIconKey(skill)}
                          name={skill}
                          size={18}
                        />
                        {skill}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.article>
          )
        })}
      </motion.div>
      {!groups.length && <p className="empty-state">No technology channels match that search.</p>}
    </section>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const openCaseStudy = (project: Project) => {
    setSelected(project)
    window.dispatchEvent(new CustomEvent('devstream:achievement', { detail: 'project-reviewer' }))
  }

  return (
    <section id="projects" className="section wrap">
      <ContentRail
        title={portfolio.theme.projectRailLabel}
        description="Featured releases across enterprise engineering, applied AI, and frontend delivery."
        labelledBy="projects-heading"
      >
        {portfolio.projects.map((project, index) => (
          <article
            className={`poster-card poster-${(index % 4) + 1}`}
            key={project.title}
            tabIndex={0}
          >
            <div className="poster-art" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <TechnologyIcon
                iconKey={getTechnologyIconKey(project.stack[0])}
                name={project.stack[0]}
                size={54}
              />
            </div>
            <div className="poster-overlay">
              <p>
                {project.category}
                <i>•</i>
                {project.type ?? project.status}
              </p>
              <h3>{project.shortTitle}</h3>
              <span className="poster-summary">{project.description}</span>
              <div className="poster-stack">
                {project.stack.slice(0, 4).map((item) => (
                  <small key={item}>
                    <TechnologyIcon
                      iconKey={getTechnologyIconKey(item)}
                      name={item}
                      size={15}
                    />
                    {item}
                  </small>
                ))}
              </div>
              <div className="poster-actions">
                {project.caseStudy && (
                  <button onClick={() => openCaseStudy(project)}>Case study</button>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} source code in a new tab`}
                  >
                    <TechnologyIcon iconKey="github" name="GitHub" size={15} /> Code
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </ContentRail>
      {selected && <ProjectCaseStudy project={selected} close={() => setSelected(null)} />}
    </section>
  )
}

export function Journey() {
  return (
    <section id="journey" className="section wrap">
      <SectionHeading
        eyebrow="Origin stories & milestones"
        title="The foundation behind the engineering journey."
        description="Education, certifications, and progression—presented without hidden scores or inflated claims."
      />
      <div className="career-seasons">
        {portfolio.careerSeasons.map((item) => (
          <a className="career-season" href={item.href} key={item.season}>
            <span>{item.season}</span>
            <small>{item.period}</small>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        ))}
      </div>
      <div className="education-grid">
        <div>
          <h3 className="subsection-title">Education</h3>
          {portfolio.education.map((item) => (
            <Reveal className="education-card" key={item.degree}>
              <ContentIcon name="education" />
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                {item.detail && <span>{item.detail}</span>}
              </div>
            </Reveal>
          ))}
        </div>
        <div>
          <h3 className="subsection-title">Unlocked professional milestones</h3>
          {portfolio.certifications.map((item) => (
            <Reveal className="cert-card" key={item.title}>
              <ContentIcon name="award" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [resumeNotice, setResumeNotice] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(portfolio.contact.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="section wrap">
      <Reveal className="contact-panel">
        <span className="stream-label">Final chapter</span>
        <h2>Ready to connect?</h2>
        <p>
          Have a full-stack, .NET, AI, SDK, or software engineering opportunity? Let’s talk
          about the work.
        </p>
        <div className="contact-actions">
          <a
            className="button primary"
            href={`mailto:${portfolio.contact.email}`}
            aria-label={`Email Adhi Avinash Rane at ${portfolio.contact.email}`}
          >
            <Mail size={18} /> Email me
          </a>
          <button className="button secondary" onClick={copy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Email copied' : 'Copy email'}
          </button>
          <a
            className="button secondary"
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
          {portfolio.contact.resumeEnabled ? (
            <a
              className="button secondary"
              href={portfolio.contact.resumePath}
              download={portfolio.contact.resumeDownloadName}
            >
              <Download size={18} /> Resume
            </a>
          ) : (
            <button
              className="button secondary"
              onClick={() => {
                setResumeNotice(true)
                window.setTimeout(() => setResumeNotice(false), 2200)
              }}
            >
              <Download size={18} /> Resume
            </button>
          )}
        </div>
        <p className="contact-address">{portfolio.contact.email}</p>
        {resumeNotice && (
          <p className="inline-notice" role="status">
            Resume download will be enabled when the verified PDF is supplied.
          </p>
        )}
      </Reveal>
    </section>
  )
}
