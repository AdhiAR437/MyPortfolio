import type { TechnologyIconKey } from '../lib/iconRegistry'

export type SkillLevel = 'Core' | 'Working knowledge' | 'Project exposure'
export type IconName =
  | 'code'
  | 'database'
  | 'brain'
  | 'cloud'
  | 'layout'
  | 'tools'
  | 'career'
  | 'education'
  | 'project'
  | 'award'
  | 'workflow'

export interface NavigationItem {
  id: string
  label: string
}

export interface Experience {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface SkillGroup {
  name: string
  level: SkillLevel
  icon: IconName
  description: string
  skills: string[]
  primarySkills: string[]
}

export interface CaseStudy {
  problem: string
  context: string
  responsibilities: string[]
  approach: string[]
  architecture: string[]
  challenges: string[]
  solution: string
  learning: string
  future: string
}

export interface Project {
  title: string
  shortTitle: string
  category: string
  type?: 'Web Application' | 'Desktop Application'
  status?: 'Completed' | 'Prototype' | 'In development' | 'Professional'
  featured: boolean
  description: string
  built: string
  stack: string[]
  outcome: string
  github?: string
  live?: string
  caseStudy?: CaseStudy
}

export interface Education {
  degree: string
  school: string
  period: string
  detail?: string
  score?: string
  showScore: boolean
}

export interface Certification {
  title: string
  detail: string
  credentialUrl?: string
}

export interface CareerSeason {
  season: string
  title: string
  period: string
  description: string
  href: string
}

export interface ExploreItem {
  title: string
  description: string
  href: string
  icon: IconName
}

export interface VisitorAchievement {
  id: string
  title: string
  description: string
}

export interface TechnologySpec {
  name: string
  iconKey: TechnologyIconKey
}

export interface CurrentFocusItem {
  title: string
  description: string
  whyItMatters: string
  status: 'In Development' | 'Current Focus' | 'Learning'
  iconKey: TechnologyIconKey
  technologies: string[]
}

const technologyCatalog: TechnologySpec[] = [
  { name: 'C#', iconKey: 'csharp' },
  { name: '.NET', iconKey: 'dotnet' },
  { name: 'ASP.NET Core', iconKey: 'dotnet' },
  { name: 'Entity Framework', iconKey: 'efcore' },
  { name: 'EF Core', iconKey: 'efcore' },
  { name: 'REST APIs', iconKey: 'api' },
  { name: 'API integrations', iconKey: 'api' },
  { name: 'FastAPI', iconKey: 'api' },
  { name: 'React', iconKey: 'react' },
  { name: 'JavaScript', iconKey: 'javascript' },
  { name: 'TypeScript', iconKey: 'typescript' },
  { name: 'Python', iconKey: 'python' },
  { name: 'Vite', iconKey: 'vite' },
  { name: 'Flask', iconKey: 'flask' },
  { name: 'SQLite', iconKey: 'sqlite' },
  { name: 'Bootstrap', iconKey: 'bootstrap' },
  { name: 'PyQt', iconKey: 'pyqt' },
  { name: 'AI Integration', iconKey: 'ai' },
  { name: 'HTML', iconKey: 'html' },
  { name: 'CSS', iconKey: 'css' },
  { name: 'Tailwind CSS', iconKey: 'tailwind' },
  { name: 'Node.js', iconKey: 'node' },
  { name: 'PostgreSQL', iconKey: 'postgresql' },
  { name: 'Microsoft SQL Server', iconKey: 'sqlserver' },
  { name: 'MSSQL', iconKey: 'sqlserver' },
  { name: 'SQL', iconKey: 'sqlserver' },
  { name: 'SQL queries', iconKey: 'sqlserver' },
  { name: 'Stored procedures', iconKey: 'sqlserver' },
  { name: 'Database workflows', iconKey: 'database' },
  { name: 'FAISS & vector databases', iconKey: 'database' },
  { name: 'Docker', iconKey: 'docker' },
  { name: 'Git', iconKey: 'git' },
  { name: 'GitHub', iconKey: 'github' },
  { name: 'GitHub Pages', iconKey: 'github' },
  { name: 'GitHub Actions', iconKey: 'githubActions' },
  { name: 'Microsoft Azure', iconKey: 'azure' },
  { name: 'Azure AI', iconKey: 'azure' },
  { name: 'AWS Lambda', iconKey: 'aws' },
  { name: 'Amazon S3', iconKey: 'aws' },
  { name: 'Postman', iconKey: 'postman' },
  { name: 'Visual Studio', iconKey: 'visualstudio' },
  { name: 'VS Code', iconKey: 'vscode' },
  { name: 'LLM integration', iconKey: 'ai' },
  { name: 'LLMs', iconKey: 'ai' },
  { name: 'Generative AI', iconKey: 'sparkles' },
  { name: 'AI agents', iconKey: 'agent' },
  { name: 'AI applications', iconKey: 'agent' },
  { name: 'RAG', iconKey: 'rag' },
  { name: 'Prompt engineering', iconKey: 'ai' },
  { name: 'Embeddings', iconKey: 'rag' },
  { name: 'Vector search', iconKey: 'rag' },
  { name: 'Gemini API', iconKey: 'ai' },
  { name: 'MCP', iconKey: 'workflow' },
  { name: 'Testing', iconKey: 'testing' },
  { name: 'Debugging', iconKey: 'tools' },
  { name: 'PR reviews', iconKey: 'tools' },
  { name: 'QA collaboration', iconKey: 'testing' },
  { name: 'Web development', iconKey: 'code' },
  { name: 'Web applications', iconKey: 'code' },
  { name: 'Enterprise Software', iconKey: 'code' },
  { name: 'UI development', iconKey: 'react' },
  { name: 'Databases', iconKey: 'database' },
]

export const portfolio = {
  theme: {
    name: 'DevStream',
    title: 'DevStream — The Full-Stack & AI Engineering Journey of Adhi',
    featuredLabel: 'DevStream Featured Story',
    projectRailLabel: 'Featured Engineering Work',
    exploreRailLabel: 'Continue Exploring',
    skillsLabel: 'Technology Channels',
    careerLabel: 'Career Seasons',
  },
  personal: {
    name: 'Adhi Avinash Rane',
    initials: 'AR',
    role: 'Full-Stack .NET & AI Engineer',
    headline: 'Building reliable full-stack products and intelligent AI experiences.',
    intro:
      'I build enterprise applications, scalable APIs, intuitive interfaces, and intelligent services with C#, .NET, React, Python, SQL, and modern AI technologies.',
    focus: 'Full-Stack .NET Engineer • AI Applications • Enterprise Software',
    about:
      'I am a full-stack engineer with a strong C# and .NET foundation and an MCA specialization in Data Science and Machine Learning. I work across UI, APIs, business logic, databases, AI integrations, testing, and deployment—collaborating with developers, QA engineers, and product stakeholders to turn requirements into maintainable software.',
  },
  contact: {
    githubUrl: 'https://github.com/AdhiAR437',
    linkedinUrl: 'https://www.linkedin.com/in/adhi-avinash-rane-45375a1bb/',
    email: 'adhiar98@gmail.com',
    resumePath: `${import.meta.env.BASE_URL}resume/AdhiAR_Resume.pdf`,
    resumeEnabled: true,
    resumeDownloadName: 'AdhiAR_Resume.pdf',
  },
  technologyCatalog,
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'building', label: 'Building' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ] satisfies NavigationItem[],
  heroTechnologies: ['C#', '.NET', 'React', 'TypeScript', 'Python', 'SQL', 'RAG'],
  roles: [
    'Full-Stack Engineer',
    '.NET Developer',
    'AI Application Developer',
    'Enterprise Software Engineer',
  ],
  currentFocus: [
    {
      title: 'AI Agents, Software & Services',
      description:
        'Currently building AI agents and AI-powered software and services, with a focus on practical integrations, reliable workflows, and useful product experiences.',
      whyItMatters:
        'Strengthens the ability to turn modern AI capabilities into dependable, production-focused software.',
      status: 'In Development',
      iconKey: 'agent',
      technologies: ['AI Agents', 'C#', '.NET', 'Python', 'SQL', 'Enterprise Software'],
    },
    {
      title: 'Enterprise Full-Stack Development',
      description:
        'Building and improving full-stack enterprise functionality across APIs, business logic, frontend workflows, database operations, permissions, batch processes, and data-driven features.',
      whyItMatters:
        'Connects reliable backend services, data rules, and user-facing workflows in maintainable enterprise features.',
      status: 'Current Focus',
      iconKey: 'dotnet',
      technologies: [
        'ASP.NET Core',
        'Entity Framework',
        'MSSQL',
        'JavaScript',
        'TypeScript',
        'REST APIs',
      ],
    },
    {
      title: 'AI Engineering Growth',
      description:
        'Continuing to strengthen practical knowledge of AI agents, RAG, MCP, LLM integrations, cloud AI services, and production-focused AI application development.',
      whyItMatters:
        'Builds the practical foundation needed to deliver AI features responsibly inside production software.',
      status: 'Learning',
      iconKey: 'rag',
      technologies: ['AI Agents', 'RAG', 'MCP', 'Azure AI', 'LLM Integration', 'FastAPI'],
    },
  ] satisfies CurrentFocusItem[],
  experiences: [
    {
      role: 'Junior Software Developer / Full-Stack Software Engineer',
      company: 'EGDK',
      period: 'August 2024 — Present',
      summary:
        'Contributing to enterprise product development across frontend experiences, APIs, business logic, and data workflows.',
      highlights: [
        'Develop full-stack enterprise features using C#, ASP.NET Core, Entity Framework, MSSQL, JavaScript, TypeScript, and frontend technologies.',
        'Implement REST APIs, business logic, database workflows, validations, permissions, batch processing, exports, data consistency, and GDPR-related functionality.',
        'Integrate AI services and APIs while keeping internal product details confidential.',
        'Review pull requests, diagnose complex issues and edge cases, support documentation, and collaborate with QA and product stakeholders.',
      ],
      stack: [
        'C#',
        'ASP.NET Core',
        'Entity Framework',
        'MSSQL',
        'JavaScript',
        'TypeScript',
        'REST APIs',
      ],
    },
    {
      role: 'Freelance Software Developer',
      company: 'Project-based / Intermittent',
      period: '2022 — Present',
      summary:
        'Build and support small websites and web applications on an intermittent, project-by-project basis from requirements through delivery.',
      highlights: [
        'Translate client requirements into practical UI, application, and database solutions.',
        'Work across requirements, interface development, application logic, testing, delivery, and support.',
      ],
      stack: ['Web applications', 'UI development', 'Databases', 'Testing'],
    },
  ] satisfies Experience[],
  skills: [
    {
      name: '.NET & Backend',
      level: 'Core',
      icon: 'code',
      description: 'Enterprise services, APIs, business rules, and maintainable backend workflows.',
      skills: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Entity Framework',
        'REST APIs',
        'Authentication & authorization',
        'Permission workflows',
        'Batch & background processing',
        'FastAPI',
        'Node.js',
      ],
      primarySkills: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'REST APIs'],
    },
    {
      name: 'Frontend',
      level: 'Core',
      icon: 'layout',
      description: 'Responsive, component-driven interfaces connected to real application workflows.',
      skills: [
        'React',
        'JavaScript',
        'TypeScript',
        'Tailwind CSS',
        'Responsive design',
        'Component UI',
        'Knockout.js',
        'Razor Pages',
        'Blazor',
        'HTML',
        'CSS',
      ],
      primarySkills: ['React', 'JavaScript', 'TypeScript'],
    },
    {
      name: 'AI & RAG',
      level: 'Project exposure',
      icon: 'brain',
      description: 'Focused AI services that combine LLMs with retrieval, tools, and application APIs.',
      skills: [
        'LLM integration',
        'RAG',
        'AI agents',
        'Prompt engineering',
        'Embeddings',
        'Vector search',
        'Gemini API',
        'MCP',
        'Generative AI',
        'ML fundamentals',
      ],
      primarySkills: ['LLM integration', 'RAG', 'AI agents', 'Python'],
    },
    {
      name: 'Databases',
      level: 'Core',
      icon: 'database',
      description: 'Relational data access, query development, workflows, and vector retrieval.',
      skills: [
        'Microsoft SQL Server',
        'MSSQL',
        'SQL queries',
        'Stored procedures',
        'Database workflows',
        'Entity Framework',
        'PostgreSQL',
        'FAISS & vector databases',
      ],
      primarySkills: ['MSSQL', 'SQL', 'Entity Framework'],
    },
    {
      name: 'Cloud & DevOps',
      level: 'Working knowledge',
      icon: 'cloud',
      description: 'Static delivery, automated builds, containers, and cloud service exposure.',
      skills: [
        'Microsoft Azure',
        'AWS Lambda',
        'Amazon S3',
        'GitHub Actions',
        'Docker',
        'CI/CD',
        'GitHub Pages',
        'Git',
      ],
      primarySkills: ['Microsoft Azure', 'GitHub Actions', 'Git'],
    },
    {
      name: 'Engineering Tools',
      level: 'Core',
      icon: 'tools',
      description: 'The collaboration and quality practices used to deliver maintainable software.',
      skills: [
        'Visual Studio',
        'VS Code',
        'SSMS',
        'Postman',
        'Swagger',
        'Jira',
        'PR reviews',
        'Debugging',
        'Documentation',
        'Agile',
        'QA collaboration',
      ],
      primarySkills: ['Debugging', 'PR reviews', 'QA collaboration'],
    },
  ] satisfies SkillGroup[],
  projects: [
    {
      title: 'Zybot — AI Enterprise Assistant',
      shortTitle: 'Zybot',
      category: 'AI Services',
      status: 'Prototype',
      featured: true,
      description:
        'An AI-powered assistant and service layer connecting enterprise functionality with language models.',
      built:
        'Modular AI services, reusable APIs, tool integration, prompt workflows, and cloud execution.',
      stack: ['Python', 'FastAPI', 'LLMs', 'AWS Lambda', 'Amazon S3', 'MCP'],
      outcome: 'Explored reusable boundaries between enterprise services and AI tooling.',
      caseStudy: {
        problem: 'Enterprise AI capabilities need controlled, reusable service boundaries.',
        context: 'A modular exploration of AI-assisted enterprise workflows.',
        responsibilities: ['Backend API design', 'LLM and tool integration', 'Cloud-oriented service design'],
        approach: [
          'Separate prompts, tools, and transport layers',
          'Expose focused FastAPI endpoints',
          'Design for serverless execution',
        ],
        architecture: ['Client', 'FastAPI service', 'LLM / MCP tools', 'AWS storage and compute'],
        challenges: ['Reusable prompt flows', 'Clear integration boundaries', 'Cloud constraints'],
        solution:
          'A modular service layer that keeps AI workflows composable and enterprise integration focused.',
        learning: 'Reliable AI products need strong software boundaries as much as capable models.',
        future: 'Add evaluation, tracing, and broader automated testing.',
      },
    },
    {
      title: 'NeuroMarkup — RAG-Powered HTML Editor',
      shortTitle: 'NeuroMarkup',
      category: 'RAG Application',
      status: 'Prototype',
      featured: true,
      description:
        'A natural-language HTML editor that updates a selected page fragment while preserving the rest.',
      built:
        'DOM selection, focused context transfer, example retrieval, and targeted HTML replacement.',
      stack: ['C#', 'Razor Pages', 'JavaScript', 'Python', 'FastAPI', 'Gemini', 'FAISS', 'RAG'],
      outcome:
        'Reduced unnecessary context by retrieving and sending only relevant document fragments.',
      caseStudy: {
        problem: 'Whole-page AI edits waste context and risk changing unrelated markup.',
        context: 'An intelligent editor prototype for precise natural-language changes.',
        responsibilities: ['DOM workflow design', 'RAG service integration', 'Targeted update logic'],
        approach: [
          'Capture the selected DOM fragment',
          'Retrieve relevant examples',
          'Send focused context',
          'Replace only the requested section',
        ],
        architecture: ['Browser selection', 'Razor application', 'FastAPI RAG service', 'Gemini + FAISS'],
        challenges: ['Stable DOM selection', 'Context relevance', 'Preserving surrounding HTML'],
        solution:
          'A focused editing pipeline that isolates the requested fragment and preserves unaffected markup.',
        learning: 'Careful context selection improves both efficiency and edit control.',
        future: 'Add structural validation, undo history, and richer evaluation.',
      },
    },
    {
      title: 'LivePplay',
      shortTitle: 'LivePplay',
      category: 'Sports Platform',
      type: 'Web Application',
      featured: true,
      description:
        'A responsive web application for viewing live and current international cricket match scores from ICC competitions.',
      built:
        'A sports-focused interface with reusable React components, responsive score cards, and clear match-status presentation.',
      stack: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite'],
      outcome:
        'Strengthened component design and responsive presentation for information-rich sports interfaces.',
      caseStudy: {
        problem:
          'Users need a clear, responsive way to view current international cricket match scores.',
        context:
          'LivePplay is a responsive cricket score platform designed for quick access to current international match information through a clean, sports-oriented interface.',
        responsibilities: [
          'Current international cricket match score views',
          'Responsive sports-focused interface',
          'Reusable React components',
          'Mobile-friendly score cards',
          'Clear match-status presentation',
        ],
        approach: [
          'Model score views as reusable React components',
          'Use responsive Tailwind CSS layouts',
          'Keep match status and score information easy to scan',
        ],
        architecture: ['Web application', 'React components', 'Responsive score views'],
        challenges: [
          'Presenting match states clearly',
          'Fitting score information on small screens',
          'Keeping card structures reusable',
        ],
        solution:
          'A component-based sports interface that keeps current match information readable across desktop and mobile devices.',
        learning:
          'Information-heavy interfaces benefit from reusable components and a strong responsive hierarchy.',
        future:
          'Continue refining accessibility, navigation, and match-state presentation as requirements evolve.',
      },
    },
    {
      title: 'LifeOS',
      shortTitle: 'LifeOS',
      category: 'AI Productivity',
      type: 'Web Application',
      featured: true,
      description:
        'An AI-based life management web application for organising tasks, routines, goals, and personal activities in one place.',
      built:
        'Task, routine, goal, and everyday activity management in a Flask application with local SQLite persistence and a responsive Bootstrap interface.',
      stack: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'AI Integration'],
      outcome:
        'Explored how AI-assisted features can support a structured personal organisation workflow.',
      caseStudy: {
        problem:
          'Daily tasks, routines, goals, and personal activities can become fragmented across separate workflows.',
        context:
          'LifeOS is an AI-powered life management system that brings personal organisation into one web application while exploring more useful and personalised assistance.',
        responsibilities: [
          'AI-assisted life management',
          'Task and routine organisation',
          'Personal goal tracking',
          'Flask web application',
          'SQLite data persistence',
          'Responsive Bootstrap interface',
        ],
        approach: [
          'Organise life-management features into focused application areas',
          'Use Flask for web application workflows',
          'Persist local application data with SQLite',
          'Build responsive views with Bootstrap',
        ],
        architecture: ['Web application', 'Flask workflows', 'SQLite storage', 'Bootstrap interface'],
        challenges: [
          'Keeping different activity types organised',
          'Maintaining clear data workflows',
          'Introducing AI assistance without complicating core tasks',
        ],
        solution:
          'A unified web interface for organising tasks, routines, goals, and other personal activities.',
        learning:
          'AI assistance is most useful when it supports a clear application workflow and understandable user controls.',
        future:
          'Expand configurable organisation workflows, validation, and automated test coverage.',
      },
    },
    {
      title: 'Nutrifit',
      shortTitle: 'Nutrifit',
      category: 'Health & Nutrition',
      type: 'Desktop Application',
      featured: false,
      description:
        'A Python desktop application for managing nutrition, health information, and personal wellness-related records.',
      built:
        'A structured PyQt desktop interface for health and nutrition information with local SQLite data storage.',
      stack: ['Python', 'PyQt', 'SQLite'],
      outcome:
        'Developed practical experience with desktop UI structure and local data persistence.',
      caseStudy: {
        problem:
          'Personal nutrition and health-related information needs a structured place for organisation and tracking.',
        context:
          'Nutrifit is a desktop-based nutrition and health management system built with Python and PyQt, using SQLite for local data storage.',
        responsibilities: [
          'Nutrition and health information management',
          'Desktop-based user interface',
          'Local SQLite data storage',
          'Structured personal health records',
          'Python and PyQt implementation',
        ],
        approach: [
          'Build a structured desktop interface with PyQt',
          'Separate user-interface and data-management responsibilities',
          'Store application records locally with SQLite',
        ],
        architecture: ['Desktop application', 'PyQt interface', 'Application logic', 'SQLite storage'],
        challenges: [
          'Organising related records clearly',
          'Designing usable desktop navigation',
          'Maintaining consistent local data',
        ],
        solution:
          'A desktop interface for organising nutrition, health information, and personal wellness-related records.',
        learning:
          'Desktop applications benefit from clear information structure and predictable local persistence.',
        future:
          'Improve record validation, navigation, and configurable data-management options.',
      },
    },
  ] as Project[],
  continueExploring: [
    {
      title: 'Currently Building',
      description: 'Active engineering work and current learning.',
      href: '#building',
      icon: 'workflow',
    },
    {
      title: 'Technical Skills',
      description: 'Practical technologies grouped by channel.',
      href: '#skills',
      icon: 'code',
    },
    {
      title: 'AI Projects',
      description: 'RAG, LLM services, agents, and integrations.',
      href: '#projects',
      icon: 'brain',
    },
    {
      title: 'Freelance Work',
      description: 'Intermittent, project-based development since 2022.',
      href: '#experience',
      icon: 'project',
    },
    {
      title: 'Education',
      description: 'BCA and MCA in Data Science & Machine Learning.',
      href: '#journey',
      icon: 'education',
    },
    {
      title: 'Certifications',
      description: 'Microsoft AZ-900 and AI-900.',
      href: '#journey',
      icon: 'award',
    },
  ] satisfies ExploreItem[],
  education: [
    {
      degree: 'Master of Computer Applications',
      school: 'Srinivas University',
      period: '2021 — 2023',
      detail: 'Specialization: Data Science and Machine Learning',
      showScore: false,
    },
    {
      degree: 'Bachelor of Computer Applications',
      school: 'Karnatak University',
      period: '2018 — 2021',
      showScore: false,
    },
  ] satisfies Education[],
  certifications: [
    { title: 'Microsoft Certified: Azure Fundamentals', detail: 'AZ-900' },
    { title: 'Microsoft Certified: Azure AI Fundamentals', detail: 'AI-900' },
    { title: 'Data Structures & Algorithms', detail: '300+ problems solved' },
  ] satisfies Certification[],
  careerSeasons: [
    {
      season: 'Season 1',
      title: 'Education Foundation',
      period: '2018 — 2023',
      description: 'BCA foundation followed by an MCA specialization in Data Science and Machine Learning.',
      href: '#journey',
    },
    {
      season: 'Season 2',
      title: 'Freelance Development',
      period: '2022 — Present',
      description: 'Intermittent, project-based websites and web applications from requirements to delivery.',
      href: '#experience',
    },
    {
      season: 'Season 3',
      title: 'Enterprise Full-Stack Engineering',
      period: 'August 2024 — Present',
      description: 'Professional product work across .NET, frontend functionality, APIs, and data workflows.',
      href: '#experience',
    },
    {
      season: 'Season 4',
      title: 'AI-Powered Product Development',
      period: 'Ongoing growth',
      description: 'Applied exploration of LLM integrations, RAG, agents, MCP, and cloud services.',
      href: '#projects',
    },
  ] satisfies CareerSeason[],
  visitorAchievements: [
    { id: 'first-look', title: 'First Look', description: 'Viewed the featured story.' },
    {
      id: 'full-stack-explorer',
      title: 'Full-Stack Explorer',
      description: 'Discovered the technology channels.',
    },
    {
      id: 'project-reviewer',
      title: 'Project Reviewer',
      description: 'Opened an engineering case study.',
    },
    {
      id: 'career-journey',
      title: 'Career Journey',
      description: 'Explored professional experience.',
    },
    {
      id: 'builders-desk',
      title: 'Builder’s Desk',
      description: 'Viewed what Adhi is currently building.',
    },
    { id: 'lets-connect', title: 'Let’s Connect', description: 'Reached the contact panel.' },
    {
      id: 'stream-complete',
      title: 'DevStream Complete',
      description: 'Visited every main DevStream chapter.',
    },
  ] satisfies VisitorAchievement[],
  seo: {
    title: 'Adhi Avinash Rane | Full-Stack .NET & AI Engineer',
    description:
      'DevStream portfolio of Adhi Avinash Rane, a Full-Stack .NET and AI Engineer building enterprise applications, modern web experiences, APIs, RAG systems, and AI-powered software.',
  },
} as const

const technologyIconLookup = new Map(
  portfolio.technologyCatalog.map(({ name, iconKey }) => [name.toLowerCase(), iconKey]),
)

export function getTechnologyIconKey(name: string): TechnologyIconKey | undefined {
  return technologyIconLookup.get(name.toLowerCase())
}
