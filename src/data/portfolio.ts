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
  status: 'Completed' | 'Prototype' | 'In development' | 'Professional'
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
    resumePath: '/resume/Adhi_Avinash_Rane_Resume.pdf',
    resumeEnabled: false,
    resumeDownloadName: 'Adhi_Avinash_Rane_Resume.pdf',
  },
  technologyCatalog,
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
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
  snapshot: [
    'Full-stack enterprise development',
    'Professional development since August 2024',
    'Project-based freelance work since 2022',
    'MCA in Data Science & Machine Learning',
    'Microsoft AZ-900 & AI-900 certified',
    '300+ DSA problems solved',
  ],
  buildSteps: ['Understand', 'Design', 'Develop', 'Validate', 'Improve'],
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
      title: 'Interactive Developer Portfolio',
      shortTitle: 'DevStream Portfolio',
      category: 'Frontend Platform',
      status: 'Completed',
      featured: true,
      description:
        'A responsive portfolio presenting full-stack and AI work through accessible motion and lightweight 3D.',
      built:
        'A data-driven single-page experience, procedural hero scene, case studies, SEO, and static deployment.',
      stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
      outcome: 'Balanced recruiter-friendly scanning with progressive visual enhancement.',
      caseStudy: {
        problem: 'A broad engineering profile needs to be clear, credible, and memorable.',
        context: 'A static portfolio optimized for recruiters and GitHub Pages.',
        responsibilities: [
          'UX',
          'Frontend architecture',
          'Content modeling',
          'Accessibility',
          'Deployment',
        ],
        approach: [
          'Centralize typed content',
          'Progressively enhance motion and 3D',
          'Keep critical information in semantic HTML',
        ],
        architecture: ['Typed data', 'React sections', 'Lazy 3D scene', 'GitHub Pages'],
        challenges: ['3D performance', 'Responsive hierarchy', 'Missing resume asset'],
        solution: 'A modular site with safe fallbacks and configuration-aware actions.',
        learning: 'Visual polish works best when content and accessibility remain primary.',
        future: 'Add the verified resume and automated browser checks.',
      },
    },
    {
      title: 'Enterprise Full-Stack Product Development',
      shortTitle: 'Enterprise Product Work',
      category: 'Professional Engineering',
      status: 'Professional',
      featured: true,
      description:
        'NDA-safe enterprise feature work spanning permissions, data workflows, exports, batch processing, GDPR, APIs, SQL, and frontend integrations.',
      built: 'Maintainable full-stack functionality developed with QA and product collaboration.',
      stack: ['C#', '.NET', 'MSSQL', 'REST APIs', 'TypeScript'],
      outcome: 'Contributed reliable features while respecting confidential product details.',
    },
    {
      title: 'Freelance Websites & Web Applications',
      shortTitle: 'Freelance Web Work',
      category: 'Project-based Work',
      status: 'Professional',
      featured: false,
      description:
        'Project-based websites and applications shaped around practical client requirements.',
      built: 'Requirements, UI, application logic, databases, testing, delivery, and support.',
      stack: ['Web development', 'UI', 'Databases', 'Testing'],
      outcome: 'Built experience carrying smaller projects from concept to completion.',
    },
  ] as Project[],
  continueExploring: [
    {
      title: 'Current Experience',
      description: 'Enterprise full-stack engineering at EGDK.',
      href: '#experience',
      icon: 'career',
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
    { id: 'lets-connect', title: 'Let’s Connect', description: 'Reached the contact panel.' },
    {
      id: 'profile-complete',
      title: 'Profile Complete',
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
