import type { IconName } from '../../data/portfolio'
import { genericContentIcons } from '../../lib/iconRegistry'

export function ContentIcon({ name, size = 22 }: { name: IconName; size?: number }) {
  const Icon = genericContentIcons[name]
  return <Icon size={size} aria-hidden="true" />
}
