import { Compass, Trophy, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { portfolio } from '../../data/portfolio'

const sectionAchievement: Record<string, string> = {
  home: 'first-look',
  experience: 'career-journey',
  skills: 'full-stack-explorer',
  contact: 'lets-connect',
}

export function ExplorationProgress() {
  const reducedMotion = useReducedMotion()
  const [visited, setVisited] = useState<string[]>([])
  const unlocked = useRef(new Set<string>())
  const [toastId, setToastId] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const sectionIds = useMemo(() => portfolio.navigation.map(({ id }) => id), [])

  const unlock = useCallback((id: string) => {
    if (unlocked.current.has(id)) return
    unlocked.current.add(id)
    setToastId(id)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setToastId(null), 3200)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          setVisited((current) => (current.includes(id) ? current : [...current, id]))
          const achievement = sectionAchievement[id]
          if (achievement) unlock(achievement)
        })
      },
      { threshold: 0.35 },
    )
    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    const onAchievement = (event: Event) =>
      unlock((event as CustomEvent<string>).detail)
    window.addEventListener('devstream:achievement', onAchievement)
    return () => {
      observer.disconnect()
      window.removeEventListener('devstream:achievement', onAchievement)
      window.clearTimeout(timer.current)
    }
  }, [sectionIds, unlock])

  useEffect(() => {
    if (visited.length === sectionIds.length) unlock('profile-complete')
  }, [sectionIds.length, unlock, visited.length])

  const progress = Math.round((visited.length / sectionIds.length) * 100)
  const achievement = useMemo(
    () => portfolio.visitorAchievements.find((item) => item.id === toastId),
    [toastId],
  )

  return (
    <>
      <aside
        className="exploration-progress"
        aria-label={`Portfolio exploration progress: ${progress}%`}
      >
        <Compass size={16} aria-hidden="true" />
        <span>
          <i style={{ width: `${progress}%` }} />
        </span>
        <strong>{progress}% explored</strong>
      </aside>
      <AnimatePresence>
        {achievement && (
          <motion.aside
            className="achievement-toast"
            role="status"
            initial={reducedMotion ? false : { opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <Trophy aria-hidden="true" />
            <div>
              <small>Visitor exploration achievement</small>
              <strong>{achievement.title}</strong>
              <span>{achievement.description}</span>
            </div>
            <button onClick={() => setToastId(null)} aria-label="Dismiss achievement">
              <X size={16} />
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
