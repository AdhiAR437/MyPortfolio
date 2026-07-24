import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: .5 }}>{children}</motion.div>
}
