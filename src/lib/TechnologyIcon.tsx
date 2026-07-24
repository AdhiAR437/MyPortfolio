import { technologyIcons, type TechnologyIconKey } from './iconRegistry'

export function TechnologyIcon({
  iconKey,
  name,
  size = 28,
  className = '',
  labelled = false,
}: {
  iconKey?: TechnologyIconKey
  name: string
  size?: number
  className?: string
  labelled?: boolean
}) {
  const definition = iconKey ? technologyIcons[iconKey] : undefined
  const Component = definition?.component
  const fallback = definition?.monogram ?? name.slice(0, 3).toUpperCase()
  const label = definition?.label ?? name

  return (
    <span
      className={`technology-icon ${className}`}
      style={{
        color: definition?.color ?? '#67e8f9',
        width: size,
        height: size,
        fontSize: size,
      }}
      aria-label={labelled ? label : undefined}
      aria-hidden={labelled ? undefined : true}
      role={labelled ? 'img' : undefined}
      title={labelled ? label : undefined}
    >
      {Component ? (
        <Component size={size} aria-hidden={true} />
      ) : (
        <b style={{ fontSize: Math.max(10, size * 0.38) }}>{fallback}</b>
      )}
    </span>
  )
}
