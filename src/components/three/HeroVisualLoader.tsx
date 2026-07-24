export function HeroVisualLoader() {
  return (
    <div className="command-loader" role="status" aria-label="Loading AI Engineering Command Center">
      <div className="command-loader-grid" />
      <div className="command-loader-panel loader-panel-left" />
      <div className="command-loader-panel loader-panel-right" />
      <div className="command-loader-panel loader-panel-top" />
      <div className="command-loader-panel loader-panel-bottom" />
      <div className="command-loader-core">
        <i />
        <i />
        <span />
      </div>
      <div className="command-loader-status">
        <b>AI ENGINEERING COMMAND CENTER</b>
        <span>Connecting platform systems</span>
      </div>
    </div>
  )
}
