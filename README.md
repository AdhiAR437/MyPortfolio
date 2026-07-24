# DevStream — Adhi Avinash Rane

A cinematic, production-ready portfolio for a Full-Stack .NET & AI Engineer. DevStream presents enterprise experience, applied-AI projects, education, credentials, and contact paths as accessible engineering chapters.

## Screenshots

Add current desktop and mobile captures here after deployment:

- `docs/screenshots/desktop.png`
- `docs/screenshots/mobile.png`

## Features

- Data-driven content from one typed configuration file
- Cinematic navigation, recruiter quick profile, career seasons, content rails, and case studies
- Searchable and expandable technology channels with accurate depth labels
- Lazy AI Engineering Command Center with connected 3D systems, a matching loader, and a premium static fallback
- Typed Simple Icons registry for technology, social, and brand marks with guaranteed monogram fallbacks
- Visitor-only exploration progress, achievement notices, and a `Ctrl`/`Cmd` + `K` command palette
- Accessible dialog behavior, keyboard focus, semantic landmarks, and visible focus states
- SEO metadata, JSON-LD, sitemap, social preview, and GitHub Pages workflow

## Technology

React, Vite, TypeScript, Tailwind CSS, Framer Motion, Three.js, React Three Fiber, Drei, Lucide React, React Icons, ESLint, Prettier, and Vitest.

## Structure

```text
src/
├── components/       # Common, layout, project, section, and 3D components
├── data/portfolio.ts # All editable portfolio content and typed models
├── App.tsx
├── main.tsx
└── index.css
public/               # SEO assets, icons, and future resume
.github/workflows/    # GitHub Pages deployment
```

## Prerequisites and installation

Use Node.js 22 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL. Use these checks before a pull request:

```bash
npm run lint
npm test
npm run build
npm run preview
```

The production output is written to `dist/`.

## Customize content

Edit `src/data/portfolio.ts`; normal updates should not require component changes. Projects, experience, skills, education, certifications, navigation, contact links, and SEO copy are all centralized there.

To add a project, append a typed object to `portfolio.projects`. Include `caseStudy` to display the case-study action; omit unconfigured `github` or `live` URLs so broken buttons are never rendered.

Verified LinkedIn and email details are configured centrally. Update them only in `src/data/portfolio.ts`; components, mail actions, copy-email behavior, and structured data consume those values.

### Add the resume

1. Copy the real PDF to `public/resume/Adhi_Avinash_Rane_Resume.pdf`.
2. Confirm `resumePath` in `src/data/portfolio.ts`.
3. Set `resumeEnabled: true`.

Until then, all resume controls remain hidden. Replace `src/components/three/HeroScene.tsx` to change the procedural hero; preserve lazy loading and `HeroFallback` behavior.

## GitHub Pages deployment

1. Push the repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages** and choose **GitHub Actions** under **Build and deployment**.
3. Push to `main`, or run **Deploy portfolio to GitHub Pages** from the Actions tab.
4. The workflow obtains the Pages base path from `actions/configure-pages`, passes it as `VITE_BASE_PATH`, installs with `npm ci`, validates, builds, and deploys `dist/` without secrets.
5. For a custom domain, update canonical/social URLs, `robots.txt`, and `sitemap.xml` after the domain is verified.

## Troubleshooting

- Blank assets on a project page: confirm the workflow-provided `VITE_BASE_PATH` includes a trailing slash.
- Resume button missing: add the verified PDF and enable it in the data file.
- 3D unavailable: this is expected on small screens, reduced-motion devices, or without WebGL; the matching HTML/CSS workspace appears automatically.
- PowerShell blocks `npm.ps1`: run `npm.cmd` instead.

## Performance and accessibility

The command-center bundle is dynamically imported, render density is capped, particle count is limited, and off-screen animation switches to on-demand rendering. A matching command-center loader crossfades into the first rendered frame without changing dimensions. Motion honors `prefers-reduced-motion`; low-memory, data-saving, mobile, and non-WebGL devices receive the static command center. Essential content never depends on WebGL or hover. The site uses semantic HTML, a skip link, focus-visible styles, keyboard-accessible rails, focus-trapped dialogs, accessible icon labels, and high-contrast text. Validate final deployment with Lighthouse and current Chrome, Edge, Firefox, Safari, Mobile Chrome, and Mobile Safari.

## License

No license has been selected. All rights remain with the repository owner unless a license file is added.
