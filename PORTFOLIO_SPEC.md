# MASTER PROMPT — ADHI’S INTERACTIVE FULL-STACK & AI ENGINEER PORTFOLIO

You are a senior frontend engineer, UI/UX designer, technical copywriter, accessibility specialist, and deployment engineer.

Build a complete, production-ready personal portfolio website for **Adhi Avinash Rane**.

Do not stop after creating a plan or explaining what should be built. Inspect the repository, create the application, implement every required section, test it, fix issues, write documentation, and configure free deployment.

---

## 1. Portfolio Objective

Create a visually impressive, highly responsive, interactive developer portfolio that will primarily be visited by:

* Recruiters and HR professionals arriving from LinkedIn
* Engineering managers
* Technical interviewers
* Potential freelance clients
* Developers reviewing Adhi’s projects
* Companies hiring full-stack, .NET, AI, SDK, platform, or software engineers

The website must communicate within the first few seconds that Adhi is:

> A Full-Stack .NET and AI Engineer who builds reliable enterprise applications, intelligent AI-powered services, and polished end-to-end user experiences.

Do not position him as only a backend developer.

The portfolio should feel modern, confident, technically impressive, professional, and memorable without becoming confusing, overloaded, or difficult for recruiters to navigate.

---

## 2. Deployment and Cost Requirements

The entire portfolio must be hostable for free.

Use:

* GitHub Pages as the primary deployment target
* GitHub Actions for automatic deployment
* No paid hosting
* No paid APIs
* No database
* No required backend
* No exposed API keys
* No paid image or icon libraries

The website should work as a static production build.

Configure Vite correctly for GitHub Pages, including the correct base path strategy.

The GitHub username is:

`AdhiAR437`

Do not hardcode a repository name unless it can be safely configured from one location.

Add clear deployment instructions to the README.

---

## 3. Required Technology Stack

Use the following stack:

* React
* Vite
* TypeScript
* Tailwind CSS
* Framer Motion
* Three.js
* `@react-three/fiber`
* `@react-three/drei`
* Lucide React for interface icons
* Simple Icons or another lightweight solution for technology logos

Use current, mutually compatible stable versions.

Keep dependencies reasonable. Do not install large libraries for features that can be implemented cleanly with React, CSS, or the existing stack.

The application must be modular, maintainable, and easy to update.

---

## 4. Visual Direction

Use the design direction:

## “Next-Generation Interactive Technology Portfolio”

The visual identity should include:

* Modern dark-mode-first interface
* Premium glassmorphism used selectively
* Deep black, graphite, and dark navy backgrounds
* Electric blue, cyan, and subtle lime accents
* Soft gradients
* Subtle glowing borders
* Animated background elements
* Clean typography
* Strong spacing and visual hierarchy
* Smooth page transitions
* Professional technology icons
* Interactive cards
* Subtle cursor-aware effects
* Lightweight 3D graphics
* Modern grid layouts
* Responsive animations
* High-quality hover states

The website must not resemble a generic portfolio template.

Avoid:

* Excessive neon
* Constantly moving backgrounds
* Poor contrast
* Tiny text
* Too many gradients
* Excessive glass effects
* Distracting animations
* Long paragraphs
* Skill percentage bars with invented percentages
* Generic stock photography
* Unnecessary carousels
* Fake testimonials
* Fake employment statistics
* Fake GitHub contribution data
* Fake years of experience
* Fake project metrics

Use graphics that reinforce Adhi’s identity as a full-stack and AI engineer.

---

## 5. Hero Graphic

Create a lightweight interactive hero graphic using React Three Fiber.

Preferred concept:

* A stylized futuristic developer workspace
* Floating laptop or code window
* Orbiting icons representing C#, .NET, React, Python, AI, databases, and cloud
* Animated particles, nodes, or data connections
* A subtle stylized male developer character or avatar when it can be created without licensed assets
* Mouse movement or pointer interaction
* Slow idle animations

Do not use copyrighted 3D models or depend on an unreliable external asset URL.

Prefer procedural geometry, simple locally created SVG assets, or lightweight local models.

If a detailed character model is unavailable, use an attractive abstract developer figure or technology workspace instead of leaving a broken asset.

The 3D experience must:

* Load lazily
* Avoid blocking the initial page render
* Have a visually attractive non-3D fallback
* Be reduced or disabled on low-performance mobile devices
* Respect `prefers-reduced-motion`
* Never make the page unusable
* Never cause horizontal scrolling

---

## 6. Core Personal Branding

Use the following professional identity.

### Name

**Adhi Avinash Rane**

### Primary role

**Full-Stack .NET & AI Engineer**

### Supporting role description

Full-stack software engineer experienced in building enterprise web applications, backend services, REST APIs, database workflows, frontend functionality, and AI-powered solutions.

### Recommended main headline

**Building reliable full-stack products and intelligent AI experiences.**

### Recommended hero description

I’m a Full-Stack .NET and AI Engineer who builds enterprise applications, scalable APIs, intuitive user experiences, and intelligent services using C#, .NET, React, Python, SQL, and modern AI technologies.

Keep the final hero copy concise and recruiter-friendly. Improve the wording where necessary, but preserve the meaning and do not exaggerate experience.

### Suggested hero CTAs

* View My Work
* Explore Experience
* Download Resume
* Contact Me

Include quick-access links for:

* GitHub
* LinkedIn
* Email
* Resume

Known GitHub profile:

`https://github.com/AdhiAR437`

Use clearly marked configuration placeholders for:

* LinkedIn URL
* Email address
* Phone number, only if later supplied
* Resume filename

Do not invent missing contact details.

---

## 7. Professional Profile to Represent

Adhi is a full-stack developer with an MCA specialization in Data Science and Machine Learning.

He combines:

* Enterprise full-stack development
* C# and modern .NET development
* Frontend development
* SQL and data workflows
* AI application development
* LLM integration
* RAG systems
* AI agents and tools
* Cloud and deployment knowledge
* Project-based freelance development

The website should balance traditional software engineering and AI expertise.

Do not let the AI content overshadow his enterprise full-stack experience.

Do not describe him as an AI researcher or senior architect.

Use credible, grounded language such as:

* Built
* Implemented
* Contributed
* Developed
* Integrated
* Improved
* Collaborated
* Designed
* Supported
* Prototyped

Avoid inflated wording such as:

* Revolutionized
* World-class
* Industry-leading
* Expert in everything
* Architected entire enterprise platforms
* Single-handedly transformed

---

## 8. Required Website Sections

Build the following sections in this order.

### 8.1 Sticky Navigation

Include:

* Logo or Adhi monogram
* Home
* About
* Experience
* Skills
* Projects
* Education
* Contact
* Resume button
* Mobile menu

Requirements:

* Transparent at the top
* Solid or blurred background after scrolling
* Active-section highlighting
* Smooth scrolling
* Accessible keyboard navigation
* Fully usable mobile menu

---

### 8.2 Hero Section

Include:

* Name
* Primary role
* Main headline
* Short professional introduction
* Primary CTA
* Secondary CTA
* Social links
* Availability or professional-focus badge
* Interactive 3D graphic
* Subtle scroll indicator

Suggested rotating or animated role labels:

* Full-Stack Engineer
* .NET Developer
* AI Application Developer
* Enterprise Software Engineer

Do not rotate text too quickly.

---

### 8.3 Recruiter Snapshot

Add a compact, easily scannable section immediately after the hero.

Present verified facts such as:

* Full-stack enterprise development
* Professional software development since August 2024
* Project-based freelance development since 2022
* MCA in Data Science and Machine Learning
* Microsoft AZ-900 certified
* Microsoft AI-900 certified
* 300+ data structures and algorithms problems solved

Do not calculate or display a total number of years unless it is derived accurately from the dates.

The snapshot should help an HR visitor understand the profile in under 15 seconds.

---

### 8.4 About Section

Write a concise professional introduction covering:

* Full-stack development background
* Enterprise product experience
* Strong C# and .NET foundation
* Frontend experience
* Interest and experience in AI-powered software
* Ability to work across UI, APIs, business logic, databases, AI integrations, testing, and deployment
* Collaboration with developers, QA engineers, and product stakeholders
* Continuous learning and problem-solving mindset

Include a small visual journey or “How I Build” flow:

`Understand → Design → Develop → Validate → Improve`

Do not create a long biography.

---

### 8.5 Professional Experience

Create a responsive timeline.

#### Current role

**Junior Software Developer / Full-Stack Software Engineer**
**EGDK**
**August 2024 – Present**

Represent the role as full-stack enterprise product development.

Include grounded responsibilities and contributions such as:

* Developing full-stack enterprise features using C#, ASP.NET Core, Entity Framework, MSSQL, JavaScript, TypeScript, and frontend technologies
* Implementing backend services, REST APIs, business logic, database workflows, and user-facing functionality
* Contributing to Custom Data Search functionality
* Implementing category and permission-based workflows
* Contributing to batch-processing functionality
* Working on data export workflows
* Contributing to Data Consistency functionality
* Supporting GDPR-related workflows
* Implementing validations and maintainable business rules
* Integrating AI services and APIs
* Collaborating with QA engineers and product stakeholders
* Reviewing pull requests
* Identifying edge cases
* Debugging complex issues
* Supporting documentation and knowledge sharing

Keep internal product information high-level and professional. Do not reveal confidential implementation details.

#### Freelance experience

**Freelance Software Developer**
**Project-based / Intermittent**
**2022 – Present**

Make the project-based nature clear. Do not imply continuous full-time freelancing.

Suggested description:

* Built and supported small websites and web applications
* Worked across requirements, UI development, application logic, databases, testing, and delivery
* Communicated directly with clients to understand requirements and translate them into practical solutions
* Gained experience taking smaller projects from concept to completion
* Worked with different technologies depending on project needs

Do not invent client names, revenue, project counts, or testimonials.

---

## 9. Skills Section

Create an interactive but professional skills section.

Do not use fake percentage proficiency bars.

Use grouped cards, filters, tabs, or an interactive skill constellation.

Clearly distinguish core professional skills from project exposure.

### Languages

* C#
* Python
* JavaScript
* TypeScript
* SQL
* HTML
* CSS

### Backend and APIs

* .NET
* ASP.NET Core
* Entity Framework / EF Core
* REST APIs
* FastAPI
* Node.js
* Authentication and authorization
* Permission-based workflows
* Batch processing
* Background processing
* API integrations

### Frontend

* React
* Tailwind CSS
* JavaScript
* TypeScript
* Knockout.js
* Razor Pages
* Blazor
* Responsive design
* Component-based UI development
* HTML and CSS

### Databases

* Microsoft SQL Server
* MSSQL
* SQL query development
* Stored procedures
* Database workflows
* Entity Framework
* PostgreSQL exposure
* Vector databases and FAISS

### AI and Machine Learning

* LLM integration
* Generative AI applications
* Retrieval-Augmented Generation
* AI agents
* Prompt engineering
* Embeddings
* Vector search
* FAISS
* Gemini API integration
* MCP
* AI service development
* Data Science and Machine Learning fundamentals

### Cloud and DevOps

* Microsoft Azure
* AWS Lambda
* Amazon S3
* GitHub Actions
* Docker
* CI/CD
* GitHub Pages
* Git
* GitHub

### Development Practices and Tools

* Visual Studio
* Visual Studio Code
* SSMS
* Postman
* Swagger
* Jira
* Pull-request reviews
* Debugging
* Documentation
* Agile development
* QA collaboration

Show technology icons with accessible text labels.

---

## 10. Projects Section

Create an attractive project grid with featured and additional projects.

Each project card should support:

* Project name
* Short problem statement
* What Adhi built
* Technology stack
* Key engineering challenges
* Outcome or learning
* GitHub link when available
* Live demo link when available
* Case Study button
* Status such as Completed, Prototype, or In Development

Do not show a broken live-demo button. Hide links that have not been configured.

### Featured Project 1: Zybot

**Title:** Zybot — AI Enterprise Assistant

Represent it as an AI-focused application or modular AI service created to support enterprise use cases.

Relevant technologies and concepts:

* Python
* FastAPI
* LLM integration
* AWS Lambda
* Amazon S3
* MCP
* Modular AI services
* Backend APIs
* Prompt workflows
* Enterprise integration

Suggested description:

Zybot is an AI-powered assistant and service layer designed to connect enterprise functionality with modern language models. The project explores modular AI services, reusable APIs, tool integration, and cloud-based execution.

Do not invent production usage numbers or customer metrics.

### Featured Project 2: NeuroMarkup

**Title:** NeuroMarkup — RAG-Powered HTML Editor

Relevant technologies:

* C#
* Razor Pages
* JavaScript
* Python
* FastAPI
* Gemini
* FAISS
* Embeddings
* RAG
* HTML manipulation

Suggested description:

NeuroMarkup is an intelligent HTML editing prototype that allows users to select a specific portion of a rendered page and modify it using natural-language instructions. The RAG-based workflow sends relevant document fragments instead of the entire page, helping reduce unnecessary context and token usage.

Highlight the engineering challenge:

* Selecting DOM fragments
* Passing focused context to an AI service
* Retrieving relevant examples
* Updating only the requested section
* Preserving the remaining HTML

### Featured Project 3: Interactive Developer Portfolio

**Title:** Interactive Developer Portfolio

Relevant technologies:

* React
* Vite
* TypeScript
* Tailwind CSS
* Framer Motion
* Three.js
* React Three Fiber
* GitHub Actions
* GitHub Pages

Description:

A responsive, interactive portfolio designed to present full-stack and AI engineering experience through modern UI, motion, 3D graphics, recruiter-focused content, and accessible performance-conscious design.

### Additional Work

Include an NDA-safe project or experience card for:

**Enterprise Full-Stack Product Development**

Cover:

* Full-stack feature development
* Permissions
* Data workflows
* Exports
* Batch processing
* GDPR functionality
* REST APIs
* SQL
* Frontend integrations
* Testing and QA collaboration

Include another generic card for:

**Freelance Websites and Web Applications**

Do not invent specific clients or URLs.

Make project content configurable from a central data file.

---

## 11. Case Study Experience

For featured projects, provide an expandable modal, drawer, or dedicated section containing:

* Problem
* Context
* Responsibilities
* Technical approach
* Architecture
* Important challenges
* Solution
* Technologies
* What was learned
* Future improvements

Keep case studies easy to scan.

Use simple architecture diagrams created with HTML, CSS, SVG, or lightweight components.

Do not add a routing library only for case-study modals unless it provides clear value.

---

## 12. Education Section

Include:

### Master of Computer Applications

**Srinivas University**
**2021 – 2023**
**Specialization: Data Science and Machine Learning**

### Bachelor of Computer Applications

**Karnatak University**
**2018 – 2021**

Do not display CGPA because different source documents contain inconsistent values. Keep academic scores in a central configuration file but leave them disabled until verified.

---

## 13. Certifications and Learning

Include:

* Microsoft Certified: Azure Fundamentals — AZ-900
* Microsoft Certified: Azure AI Fundamentals — AI-900
* 300+ Data Structures and Algorithms problems solved

Use official-looking but not misleading certification cards.

Do not recreate Microsoft certification logos in a way that implies endorsement. Use a general award or certificate icon and text.

Allow credential URLs to be configured later.

---

## 14. Engineering Journey

Add a visual timeline showing:

* BCA foundation
* MCA in Data Science and Machine Learning
* Freelance software projects beginning in 2022
* Enterprise full-stack development at EGDK beginning in August 2024
* Growth into AI applications, RAG, agents, cloud integrations, and intelligent services

Make the timeline responsive and concise.

---

## 15. Contact Section

Create a professional contact section designed for recruiters.

Use:

* Email CTA
* LinkedIn CTA
* GitHub CTA
* Copy-email button
* Download-resume button

Because the site is statically hosted, do not require a backend contact service.

An optional contact form may construct a `mailto:` link, but direct contact buttons should remain the primary approach.

Include copy such as:

> Have a full-stack, .NET, AI, SDK, or software engineering opportunity? Let’s connect.

Do not claim immediate availability unless configured explicitly.

---

## 16. Footer

Include:

* Name
* Role
* Social links
* Current year generated dynamically
* “Designed and built by Adhi Avinash Rane”
* Back-to-top interaction
* Technology stack summary

Do not add “All rights reserved” unless appropriate.

---

## 17. Interactive Features

Implement polished interactions such as:

* Smooth section reveals
* Cursor-aware project cards
* Subtle card tilt
* Technology-icon hover effects
* Animated experience timeline
* Filterable skill groups
* Active navigation state
* Scroll progress indicator
* Animated background grid
* Hero text reveal
* Magnetic CTA effect used sparingly
* Project case-study drawer or modal
* Copy-to-clipboard confirmation
* Back-to-top control

Add one optional, lightweight Easter egg such as:

* A keyboard shortcut that opens a developer command palette
* A miniature terminal that responds to commands such as `about`, `skills`, `projects`, `contact`, and `resume`

The Easter egg must not interfere with normal navigation.

---

## 18. Recruiter Experience Requirements

Recruiters must be able to find the following quickly:

* Current title
* Full-stack positioning
* Primary technologies
* Current employment
* Freelance experience
* Education
* Certifications
* Main projects
* Resume download
* Contact information

Avoid hiding important information behind animations or interactions.

The page should remain understandable even when JavaScript animations are disabled.

Place the most important information above the fold or within the first two sections.

---

## 19. Responsive Design

Support at minimum:

* 320px mobile screens
* 375px mobile screens
* 768px tablets
* 1024px laptops
* 1440px desktop screens
* Large monitors

Requirements:

* No horizontal overflow
* Readable typography
* Touch-friendly controls
* Responsive 3D canvas
* Simplified mobile animations
* Proper card stacking
* Accessible mobile navigation
* No text overlapping graphics
* No fixed-height sections that crop content
* No viewport-height bugs on mobile browsers

Test both portrait and landscape orientations where relevant.

---

## 20. Accessibility

Meet strong accessibility standards.

Implement:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Alt text
* ARIA labels only where necessary
* Accessible modals and drawers
* Escape-key modal closing
* Focus trapping
* Screen-reader-friendly icon labels
* Reduced-motion support
* Descriptive link text
* Accessible form fields
* No information communicated only through colour

---

## 21. Performance Requirements

Target a Lighthouse score of at least 90 for:

* Performance
* Accessibility
* Best Practices
* SEO

Optimise:

* Three.js loading
* JavaScript bundle size
* Images
* Fonts
* Animations
* Layout shifts
* Initial render
* Lazy-loaded sections
* Asset caching

Use:

* Dynamic import for the 3D hero
* Suspense fallback
* Responsive images
* SVG wherever appropriate
* Local or privacy-friendly font loading
* Production compression supported by static hosting
* Tree-shakeable icon imports

Do not sacrifice usability for visual effects.

---

## 22. SEO and LinkedIn Sharing

Implement:

* Descriptive page title
* Meta description
* Canonical metadata configuration
* Open Graph title
* Open Graph description
* Open Graph image
* Twitter/X card metadata
* Favicon
* Theme colour
* Robots metadata
* Sitemap
* Person structured data using JSON-LD
* Meaningful section IDs
* Semantic project descriptions

Suggested title:

`Adhi Avinash Rane | Full-Stack .NET & AI Engineer`

Suggested meta description:

`Portfolio of Adhi Avinash Rane, a Full-Stack .NET and AI Engineer building enterprise applications, modern web experiences, APIs, RAG systems, and AI-powered software.`

Create a locally stored social-preview graphic matching the portfolio design.

Do not use fake profile URLs. Keep missing values in the central configuration file.

---

## 23. Content Architecture

Store all editable portfolio content in one central location, such as:

`src/data/portfolio.ts`

It should contain typed data for:

* Personal information
* Contact links
* Navigation
* Experience
* Skills
* Projects
* Education
* Certifications
* Achievements
* Social links
* Resume path
* SEO metadata

Components should render from this data instead of repeating text throughout the codebase.

Use TypeScript interfaces.

Make it easy for Adhi to add or remove:

* A project
* A skill
* A certification
* An experience entry
* A social link

Do not require editing multiple components for normal content updates.

---

## 24. Suggested Project Structure

Use a maintainable structure similar to:

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   ├── icons/
│   ├── models/
│   ├── resume/
│   ├── favicon.svg
│   ├── social-preview.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── projects/
│   │   ├── three/
│   │   └── ui/
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.*
├── tsconfig.json
└── vite.config.ts
```

Adjust the structure when necessary, but preserve modularity.

---

## 25. Component Expectations

Create reusable components such as:

* Navigation
* MobileNavigation
* SectionHeading
* Hero
* HeroScene
* HeroFallback
* RecruiterSnapshot
* About
* ExperienceTimeline
* ExperienceCard
* Skills
* SkillGroup
* SkillIcon
* Projects
* ProjectCard
* ProjectCaseStudy
* Education
* CertificationCard
* Contact
* SocialLinks
* ResumeButton
* ScrollProgress
* BackToTop
* CommandPalette
* Footer
* ErrorBoundary

Avoid creating extremely large components.

---

## 26. Resume Handling

Expect the resume to be added later at a path such as:

`public/resume/Adhi_Avinash_Rane_Resume.pdf`

Create a single configuration value for the path.

If the file is missing during development:

* Do not create a fake PDF
* Do not leave an obviously broken button
* Document where the resume must be placed
* Allow the button to be temporarily disabled through configuration

The download filename should be professional.

---

## 27. Code Quality Requirements

Use:

* TypeScript strict mode
* Reusable components
* Clear naming
* Minimal duplication
* Clean data models
* Error boundaries where appropriate
* Comments only where logic is not self-explanatory
* Proper cleanup for event listeners
* Accessible interactive elements
* Centralised constants
* Consistent styling
* Responsive utility classes
* ESLint
* Formatting support
* Sensible npm scripts

Do not overengineer the site.

Do not introduce Redux, a complex state-management library, a backend, or a database unless genuinely required. They are not expected for this portfolio.

---

## 28. Documentation Requirements

Create a complete, easy-to-read `README.md`.

Include:

1. Portfolio overview
2. Screenshots section with placeholders
3. Main features
4. Technology stack
5. Folder structure
6. Prerequisites
7. Installation
8. Local development
9. Production build
10. Content customisation
11. Adding projects
12. Changing social links
13. Adding the resume
14. Replacing the hero graphic
15. GitHub Pages deployment
16. Troubleshooting
17. Performance notes
18. Accessibility notes
19. Licence information

Commands should be copy-paste-ready.

Example:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Document any repository-name or Vite-base configuration clearly.

---

## 29. GitHub Actions Deployment

Create a GitHub Actions workflow that:

* Installs dependencies using a lock file
* Builds the Vite project
* Uploads the production artifact
* Deploys to GitHub Pages
* Runs on pushes to the main branch
* Can also be triggered manually
* Uses officially supported GitHub Pages actions
* Uses the correct permissions
* Does not require secrets

Document the GitHub repository settings needed to enable Pages through GitHub Actions.

---

## 30. Browser and Error Handling

Test and support current versions of:

* Chrome
* Edge
* Firefox
* Safari
* Mobile Chrome
* Mobile Safari

Ensure:

* No console errors
* No broken imports
* No missing assets
* No hydration-related issues
* No animation crashes
* No WebGL-related blank page
* No broken GitHub Pages routing
* No inaccessible modals
* No layout overflow

If WebGL is unavailable, render the fallback hero automatically.

---

## 31. Implementation Process

Follow this process without waiting for repeated approval.

### Phase 1: Repository Assessment

* Inspect all existing files
* Determine whether the repository is empty or contains an earlier portfolio
* Preserve useful assets
* Remove obsolete code only when safe
* Check for an existing resume, images, URLs, and project details
* Do not overwrite verified user information with placeholders

### Phase 2: Foundation

* Create or repair the React, Vite, and TypeScript setup
* Configure Tailwind CSS
* Configure linting and formatting
* Establish the design tokens
* Create the central portfolio-data model
* Build the layout and navigation

### Phase 3: Main Content

* Implement all required sections
* Add accurate professional content
* Add project data
* Add skills, education, experience, and certifications
* Add responsive behaviour

### Phase 4: Visual Experience

* Add Framer Motion interactions
* Add the lightweight 3D hero
* Add fallbacks and reduced-motion support
* Add refined hover and scroll interactions
* Add the optional command palette

### Phase 5: Recruiter and SEO Optimisation

* Improve content hierarchy
* Add SEO metadata
* Add structured data
* Add social preview assets
* Validate resume and contact actions

### Phase 6: Validation

Run:

```bash
npm install
npm run lint
npm run build
npm run preview
```

Fix all errors.

Also verify:

* Mobile responsiveness
* Keyboard navigation
* Reduced-motion experience
* Missing-link behaviour
* GitHub Pages base path
* No console errors
* No broken assets

### Phase 7: Documentation and Deployment

* Create the README
* Add GitHub Actions
* Add deployment instructions
* Provide a final summary

Do not stop after generating a partial scaffold.

---

## 32. Final Acceptance Criteria

The work is complete only when:

* The application runs locally
* The production build succeeds
* The portfolio is responsive
* All required sections exist
* Content accurately represents Adhi
* Full-stack experience is clearly highlighted
* AI experience is visible but balanced
* Freelance experience is described as project-based since 2022
* The site has an attractive and functional hero
* Three.js failures do not break the site
* Important content is accessible without animations
* Recruiters can download the resume once configured
* GitHub and LinkedIn links are easy to locate
* No missing contact detail has been invented
* No fake metrics have been added
* No paid service is required
* GitHub Pages deployment is configured
* The README is complete
* The build contains no errors
* The browser console contains no errors
* The site feels custom rather than template-generated

---

## 33. Final Response Format

After completing the implementation, provide:

1. A concise summary of what was built
2. The technology stack
3. Important files created or modified
4. Commands to run locally
5. Exact GitHub Pages deployment steps
6. Values Adhi must still configure
7. Any asset that must still be supplied
8. Testing performed
9. Known limitations, if any

Do not provide only code snippets. Create and modify the actual repository files.

Do not claim deployment has succeeded unless the site was genuinely deployed and verified.

---

## 34. Values That May Require Configuration

Use visible placeholders in the central data file for details that are not currently available:

```ts
linkedinUrl: "ADD_LINKEDIN_URL",
email: "ADD_EMAIL_ADDRESS",
resumePath: "/resume/Adhi_Avinash_Rane_Resume.pdf",
githubUrl: "https://github.com/AdhiAR437",
```

The interface must handle unconfigured values gracefully. Do not display placeholder text publicly in the production UI.

---

Begin by inspecting the repository and then implement the complete portfolio.
