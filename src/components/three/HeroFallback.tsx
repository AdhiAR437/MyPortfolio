import { TechnologyIcon } from '../../lib/TechnologyIcon'

export function HeroFallback() {
  return (
    <div className="command-static" aria-hidden="true">
      <div className="command-static-grid" />
      <svg className="command-connections" viewBox="0 0 600 560" preserveAspectRatio="none">
        <path d="M300 280 L135 245" />
        <path d="M300 280 L470 245" />
        <path d="M300 280 L325 105" />
        <path d="M300 280 L300 450" />
        <path d="M300 450 L455 485" />
        <circle cx="218" cy="263" r="3" />
        <circle cx="385" cy="263" r="3" />
        <circle cx="313" cy="190" r="3" />
        <circle cx="300" cy="365" r="3" />
      </svg>
      <div className="static-command-core">
        <i />
        <i />
        <span>AI</span>
        <small>COMMAND CORE</small>
      </div>
      <div className="static-command-panel static-code-panel">
        <header><TechnologyIcon iconKey="csharp" name="C sharp" size={20} /> CODE PIPELINE</header>
        <code><b>BuildAsync</b>()<br />.Connect(agent)<br />.Deliver();</code>
      </div>
      <div className="static-command-panel static-api-panel">
        <header><TechnologyIcon iconKey="dotnet" name=".NET" size={20} /> API GATEWAY</header>
        <code>POST /api/agent/run<br /><b>200 OK</b></code>
      </div>
      <div className="static-command-panel static-agent-panel">
        <header><TechnologyIcon iconKey="agent" name="AI agent" size={20} /> AI AGENT</header>
        <code>RAG → Agent<br />Tool → Response</code>
      </div>
      <div className="static-command-panel static-data-panel">
        <header><TechnologyIcon iconKey="database" name="Database" size={20} /> DATA LAYER</header>
        <code>SQL • EF Core<br />Data workflows</code>
      </div>
      <div className="static-cloud-node">
        <TechnologyIcon iconKey="cloud" name="Cloud services" size={22} />
        <span>Cloud services</span>
      </div>
      <div className="command-tech-node static-tech-react">
        <TechnologyIcon iconKey="react" name="React" size={20} labelled />
      </div>
      <div className="command-tech-node static-tech-python">
        <TechnologyIcon iconKey="python" name="Python" size={20} labelled />
      </div>
      <div className="command-tech-node static-tech-sql">
        <TechnologyIcon iconKey="sqlserver" name="SQL Server" size={20} labelled />
      </div>
    </div>
  )
}
