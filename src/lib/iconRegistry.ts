import type { ComponentType } from 'react'
import {
  Bot,
  Braces,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Network,
  ServerCog,
  Sparkles,
  TestTube2,
  Workflow,
  Wrench,
} from 'lucide-react'
import { FaAws, FaLinkedinIn, FaMicrosoft } from 'react-icons/fa6'
import {
  SiDocker,
  SiDotnet,
  SiFlask,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiQt,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiBootstrap,
} from 'react-icons/si'
import { VscAzure, VscCode } from 'react-icons/vsc'

export type IconComponent = ComponentType<{
  className?: string
  size?: number | string
  'aria-hidden'?: boolean
}>

export type TechnologyIconKey =
  | 'csharp'
  | 'dotnet'
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'vite'
  | 'flask'
  | 'sqlite'
  | 'bootstrap'
  | 'pyqt'
  | 'html'
  | 'css'
  | 'tailwind'
  | 'node'
  | 'postgresql'
  | 'sqlserver'
  | 'database'
  | 'docker'
  | 'git'
  | 'github'
  | 'githubActions'
  | 'linkedin'
  | 'azure'
  | 'aws'
  | 'postman'
  | 'vscode'
  | 'visualstudio'
  | 'efcore'
  | 'api'
  | 'ai'
  | 'agent'
  | 'rag'
  | 'workflow'
  | 'cloud'
  | 'testing'
  | 'tools'
  | 'code'
  | 'sparkles'

export interface IconDefinition {
  component?: IconComponent
  monogram?: string
  label: string
  color: string
}

export const technologyIcons: Record<TechnologyIconKey, IconDefinition> = {
  csharp: { monogram: 'C#', label: 'C sharp', color: '#a78bfa' },
  dotnet: { component: SiDotnet, label: '.NET', color: '#8b5cf6' },
  react: { component: SiReact, label: 'React', color: '#61dafb' },
  typescript: { component: SiTypescript, label: 'TypeScript', color: '#60a5fa' },
  javascript: { component: SiJavascript, label: 'JavaScript', color: '#facc15' },
  python: { component: SiPython, label: 'Python', color: '#facc15' },
  vite: { component: SiVite, label: 'Vite', color: '#a78bfa' },
  flask: { component: SiFlask, label: 'Flask', color: '#f8fafc' },
  sqlite: { component: SiSqlite, label: 'SQLite', color: '#60a5fa' },
  bootstrap: { component: SiBootstrap, label: 'Bootstrap', color: '#a78bfa' },
  pyqt: { component: SiQt, label: 'PyQt', color: '#84cc16' },
  html: { component: SiHtml5, label: 'HTML5', color: '#f97316' },
  css: { monogram: 'CSS', label: 'CSS', color: '#38bdf8' },
  tailwind: { component: SiTailwindcss, label: 'Tailwind CSS', color: '#22d3ee' },
  node: { component: SiNodedotjs, label: 'Node.js', color: '#84cc16' },
  postgresql: { component: SiPostgresql, label: 'PostgreSQL', color: '#60a5fa' },
  sqlserver: { component: Database, label: 'Microsoft SQL Server', color: '#f87171' },
  database: { component: Database, label: 'Database', color: '#67e8f9' },
  docker: { component: SiDocker, label: 'Docker', color: '#38bdf8' },
  git: { component: SiGit, label: 'Git', color: '#fb7185' },
  github: { component: SiGithub, label: 'GitHub', color: '#f8fafc' },
  githubActions: { component: SiGithubactions, label: 'GitHub Actions', color: '#60a5fa' },
  linkedin: { component: FaLinkedinIn, label: 'LinkedIn', color: '#38bdf8' },
  azure: { component: VscAzure, label: 'Microsoft Azure', color: '#38bdf8' },
  aws: { component: FaAws, label: 'Amazon Web Services', color: '#fbbf24' },
  postman: { component: SiPostman, label: 'Postman', color: '#fb923c' },
  vscode: { component: VscCode, label: 'Visual Studio Code', color: '#38bdf8' },
  visualstudio: { component: FaMicrosoft, label: 'Visual Studio', color: '#c084fc' },
  efcore: { component: SiDotnet, label: 'Entity Framework Core', color: '#a78bfa' },
  api: { component: ServerCog, label: 'API', color: '#67e8f9' },
  ai: { component: BrainCircuit, label: 'Artificial intelligence', color: '#a3e635' },
  agent: { component: Bot, label: 'AI agent', color: '#a3e635' },
  rag: { component: Network, label: 'Retrieval augmented generation', color: '#22d3ee' },
  workflow: { component: Workflow, label: 'Workflow', color: '#67e8f9' },
  cloud: { component: Cloud, label: 'Cloud', color: '#7dd3fc' },
  testing: { component: TestTube2, label: 'Testing', color: '#a3e635' },
  tools: { component: Wrench, label: 'Engineering tools', color: '#cbd5e1' },
  code: { component: Code2, label: 'Software development', color: '#67e8f9' },
  sparkles: { component: Sparkles, label: 'Intelligent service', color: '#a3e635' },
}

export const genericContentIcons = {
  code: Code2,
  database: Database,
  brain: BrainCircuit,
  cloud: Cloud,
  layout: Braces,
  tools: Wrench,
  career: ServerCog,
  education: Braces,
  project: Sparkles,
  award: Sparkles,
  workflow: Workflow,
} as const
