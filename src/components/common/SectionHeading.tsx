import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <motion.header className="section-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
    <span>{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}
  </motion.header>
}
