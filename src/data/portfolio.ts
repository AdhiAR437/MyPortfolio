export interface LinkConfig { label: string; url: string; enabled: boolean }
export interface Experience { role: string; company: string; period: string; summary: string; highlights: string[]; stack: string[] }
export interface SkillGroup { name: string; level: 'Core' | 'Working knowledge' | 'Project exposure'; skills: string[] }
export interface CaseStudy { problem: string; context: string; responsibilities: string[]; approach: string[]; architecture: string[]; challenges: string[]; solution: string; learning: string; future: string }
export interface Project { title: string; status: 'Completed' | 'Prototype' | 'In development' | 'Professional'; featured: boolean; description: string; built: string; stack: string[]; outcome: string; github?: string; live?: string; caseStudy?: CaseStudy }
export interface Education { degree: string; school: string; period: string; detail?: string; score?: string; showScore: boolean }
export interface Certification { title: string; detail: string; credentialUrl?: string }

const missing = (value: string) => !value || value.startsWith('ADD_')

export const portfolio = {
  personal: {
    name: 'Adhi Avinash Rane',
    initials: 'AR',
    role: 'Full-Stack .NET & AI Engineer',
    headline: 'Building reliable full-stack products and intelligent AI experiences.',
    intro: 'I build enterprise applications, scalable APIs, intuitive interfaces, and intelligent services with C#, .NET, React, Python, SQL, and modern AI technologies.',
    focus: 'Enterprise software · Full-stack systems · Applied AI',
    about: 'I am a full-stack engineer with a strong C# and .NET foundation and an MCA specialization in Data Science and Machine Learning. I work across UI, APIs, business logic, databases, AI integrations, testing, and deployment—collaborating with developers, QA engineers, and product stakeholders to turn requirements into maintainable software.',
  },
  contact: {
    githubUrl: 'https://github.com/AdhiAR437',
    linkedinUrl: 'ADD_LINKEDIN_URL',
    email: 'ADD_EMAIL_ADDRESS',
    resumePath: '/resume/Adhi_Avinash_Rane_Resume.pdf',
    resumeEnabled: false,
  },
  navigation: ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'],
  roles: ['Full-Stack Engineer', '.NET Developer', 'AI Application Developer', 'Enterprise Software Engineer'],
  snapshot: ['Full-stack enterprise development', 'Professional development since August 2024', 'Project-based freelance work since 2022', 'MCA in Data Science & Machine Learning', 'Microsoft AZ-900 & AI-900 certified', '300+ DSA problems solved'],
  buildSteps: ['Understand', 'Design', 'Develop', 'Validate', 'Improve'],
  experiences: [
    {
      role: 'Junior Software Developer / Full-Stack Software Engineer', company: 'EGDK', period: 'August 2024 — Present',
      summary: 'Contributing to enterprise product development across frontend experiences, APIs, business logic, and data workflows.',
      highlights: ['Build C#, ASP.NET Core, Entity Framework, MSSQL, JavaScript, and TypeScript features.', 'Implement REST APIs, validations, permission-based workflows, batch processing, exports, data consistency, and GDPR-related functionality.', 'Integrate AI services and APIs while keeping internal product details confidential.', 'Review pull requests, diagnose edge cases, and collaborate with QA and product stakeholders.'],
      stack: ['C#', 'ASP.NET Core', 'EF Core', 'MSSQL', 'TypeScript', 'REST APIs'],
    },
    {
      role: 'Freelance Software Developer', company: 'Project-based / Intermittent', period: '2022 — Present',
      summary: 'Build and support small websites and web applications on a project basis, from requirements through delivery.',
      highlights: ['Translate client requirements into practical UI, application, and database solutions.', 'Test, deliver, and support projects using technologies appropriate to each need.'],
      stack: ['Web applications', 'UI development', 'Databases', 'Testing'],
    },
  ] satisfies Experience[],
  skills: [
    { name: 'Languages', level: 'Core', skills: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'] },
    { name: 'Backend & APIs', level: 'Core', skills: ['.NET', 'ASP.NET Core', 'EF Core', 'REST APIs', 'Authentication & authorization', 'Permission workflows', 'Batch & background processing', 'API integrations', 'FastAPI', 'Node.js'] },
    { name: 'Frontend', level: 'Core', skills: ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Responsive design', 'Component UI', 'Knockout.js', 'Razor Pages', 'Blazor'] },
    { name: 'Databases', level: 'Core', skills: ['Microsoft SQL Server', 'SQL queries', 'Stored procedures', 'Database workflows', 'Entity Framework', 'PostgreSQL', 'FAISS & vector databases'] },
    { name: 'AI & Machine Learning', level: 'Project exposure', skills: ['LLM integration', 'Generative AI', 'RAG', 'AI agents', 'Prompt engineering', 'Embeddings', 'Vector search', 'Gemini API', 'MCP', 'ML fundamentals'] },
    { name: 'Cloud & DevOps', level: 'Working knowledge', skills: ['Microsoft Azure', 'AWS Lambda', 'Amazon S3', 'GitHub Actions', 'Docker', 'CI/CD', 'GitHub Pages', 'Git'] },
    { name: 'Practices & Tools', level: 'Core', skills: ['Visual Studio', 'VS Code', 'SSMS', 'Postman', 'Swagger', 'Jira', 'PR reviews', 'Debugging', 'Documentation', 'Agile', 'QA collaboration'] },
  ] satisfies SkillGroup[],
  projects: [
    { title: 'Zybot — AI Enterprise Assistant', status: 'Prototype', featured: true, description: 'An AI-powered assistant and service layer connecting enterprise functionality with language models.', built: 'Modular AI services, reusable APIs, tool integration, prompt workflows, and cloud execution.', stack: ['Python', 'FastAPI', 'LLMs', 'AWS Lambda', 'Amazon S3', 'MCP'], outcome: 'Explored reusable boundaries between enterprise services and AI tooling.', caseStudy: { problem: 'Enterprise AI capabilities need controlled, reusable service boundaries.', context: 'A modular exploration of AI-assisted enterprise workflows.', responsibilities: ['Backend API design', 'LLM and tool integration', 'Cloud-oriented service design'], approach: ['Separate prompts, tools, and transport layers', 'Expose focused FastAPI endpoints', 'Design for serverless execution'], architecture: ['Client', 'FastAPI service', 'LLM / MCP tools', 'AWS storage and compute'], challenges: ['Reusable prompt flows', 'Clear integration boundaries', 'Cloud constraints'], solution: 'A modular service layer that keeps AI workflows composable and enterprise integration focused.', learning: 'Reliable AI products need strong software boundaries as much as capable models.', future: 'Add evaluation, tracing, and broader automated testing.' } },
    { title: 'NeuroMarkup — RAG-Powered HTML Editor', status: 'Prototype', featured: true, description: 'A natural-language HTML editor that updates a selected page fragment while preserving the rest.', built: 'DOM selection, focused context transfer, example retrieval, and targeted HTML replacement.', stack: ['C#', 'Razor Pages', 'JavaScript', 'Python', 'FastAPI', 'Gemini', 'FAISS', 'RAG'], outcome: 'Reduced unnecessary context by retrieving and sending only relevant document fragments.', caseStudy: { problem: 'Whole-page AI edits waste context and risk changing unrelated markup.', context: 'An intelligent editor prototype for precise natural-language changes.', responsibilities: ['DOM workflow design', 'RAG service integration', 'Targeted update logic'], approach: ['Capture the selected DOM fragment', 'Retrieve relevant examples', 'Send focused context', 'Replace only the requested section'], architecture: ['Browser selection', 'Razor application', 'FastAPI RAG service', 'Gemini + FAISS'], challenges: ['Stable DOM selection', 'Context relevance', 'Preserving surrounding HTML'], solution: 'A focused editing pipeline that isolates the requested fragment and preserves unaffected markup.', learning: 'Careful context selection improves both efficiency and edit control.', future: 'Add structural validation, undo history, and richer evaluation.' } },
    { title: 'Interactive Developer Portfolio', status: 'Completed', featured: true, description: 'A responsive portfolio presenting full-stack and AI work through accessible motion and lightweight 3D.', built: 'A data-driven single-page experience, procedural hero scene, case studies, SEO, and static deployment.', stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'], outcome: 'Balanced recruiter-friendly scanning with progressive visual enhancement.', caseStudy: { problem: 'A broad engineering profile needs to be clear, credible, and memorable.', context: 'A static portfolio optimized for recruiters and GitHub Pages.', responsibilities: ['UX', 'frontend architecture', 'content modeling', 'accessibility', 'deployment'], approach: ['Centralize typed content', 'Progressively enhance motion and 3D', 'Keep critical information in semantic HTML'], architecture: ['Typed data', 'React sections', 'Lazy 3D scene', 'GitHub Pages'], challenges: ['3D performance', 'responsive hierarchy', 'missing contact assets'], solution: 'A modular site with safe fallbacks and configuration-aware actions.', learning: 'Visual polish works best when content and accessibility remain primary.', future: 'Add verified links, resume, screenshots, and automated browser checks.' } },
    { title: 'Enterprise Full-Stack Product Development', status: 'Professional', featured: false, description: 'NDA-safe enterprise feature work spanning permissions, data workflows, exports, batch processing, GDPR, APIs, SQL, and frontend integrations.', built: 'Maintainable full-stack functionality developed with QA and product collaboration.', stack: ['C#', '.NET', 'MSSQL', 'REST APIs', 'TypeScript'], outcome: 'Contributed reliable features while respecting confidential product details.' },
    { title: 'Freelance Websites & Web Applications', status: 'Professional', featured: false, description: 'Project-based websites and applications shaped around practical client requirements.', built: 'Requirements, UI, application logic, databases, testing, delivery, and support.', stack: ['Web development', 'UI', 'Databases', 'Testing'], outcome: 'Built experience carrying smaller projects from concept to completion.' },
  ] as Project[],
  education: [
    { degree: 'Master of Computer Applications', school: 'Srinivas University', period: '2021 — 2023', detail: 'Specialization: Data Science and Machine Learning', showScore: false },
    { degree: 'Bachelor of Computer Applications', school: 'Karnatak University', period: '2018 — 2021', showScore: false },
  ] satisfies Education[],
  certifications: [
    { title: 'Microsoft Certified: Azure Fundamentals', detail: 'AZ-900' },
    { title: 'Microsoft Certified: Azure AI Fundamentals', detail: 'AI-900' },
    { title: 'Data Structures & Algorithms', detail: '300+ problems solved' },
  ] as Certification[],
  journey: ['2018 — BCA foundation', '2021 — MCA in Data Science & ML', '2022 — Project-based freelance development', 'Aug 2024 — Enterprise full-stack development at EGDK', 'Now — Growing through RAG, agents, and cloud-integrated AI'],
  seo: { title: 'Adhi Avinash Rane | Full-Stack .NET & AI Engineer', description: 'Portfolio of Adhi Avinash Rane, a Full-Stack .NET and AI Engineer building enterprise applications, modern web experiences, APIs, RAG systems, and AI-powered software.' },
} as const

export const isConfigured = (value: string) => !missing(value)
