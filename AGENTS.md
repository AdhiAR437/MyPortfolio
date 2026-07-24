# Repository Guidelines
- Follow PORTFOLIO_SPEC.md as the source of truth.
- Use React, Vite, TypeScript and Tailwind CSS.
- Keep TypeScript strict mode enabled.
- Store all editable portfolio content in src/data/portfolio.ts.
- Build reusable, responsive and accessible components.
- Present me primarily as a Full-Stack .NET and AI Engineer.
- Do not invent links, statistics, experience, testimonials or personal details.
- Do not expose secrets or require paid services.
- Configure the project for free GitHub Pages deployment.
- Run lint and production build after meaningful implementation phases.
- Fix errors instead of suppressing them.
- Keep the application working after every major phase.
## Project Structure & Module Organization

This repository is currently specification-first. `PORTFOLIO_SPEC.md` is the source of truth for the planned React portfolio, while `README.md` provides the project summary. When implementing the site, follow the structure proposed in the specification: application code in `src/`, static files in `public/`, and deployment automation in `.github/workflows/`. Keep editable profile content centralized in `src/data/portfolio.ts`; group reusable UI under `src/components/` by purpose (`common/`, `layout/`, `sections/`, `projects/`, `three/`, and `ui/`). Place tests beside their modules or under `src/__tests__/`, using one convention consistently.

## Build, Test, and Development Commands

There is no `package.json` or runnable application yet. Do not claim that builds pass until the Vite scaffold exists. Once initialized, expose these standard scripts:

- `npm install` installs locked dependencies.
- `npm run dev` starts the local Vite server.
- `npm run lint` runs ESLint across TypeScript and React files.
- `npm test` runs the configured test suite.
- `npm run build` type-checks and creates the production bundle.
- `npm run preview` serves that bundle for final verification.

Commit the generated lockfile and use `npm ci` in GitHub Actions.

## Coding Style & Naming Conventions

Use TypeScript strict mode, two-space indentation, and automated ESLint/Prettier formatting. Name React components and their files in PascalCase (`ProjectCard.tsx`), hooks with a `use` prefix (`useReducedMotion.ts`), and utilities/data modules in camelCase. Prefer small, typed components, semantic HTML, Tailwind utilities, and named constants over duplicated literals. Keep contact links, resume paths, SEO metadata, and portfolio entries in the central data module.

## Testing Guidelines

When tests are introduced, prefer Vitest with React Testing Library. Name files `*.test.ts` or `*.test.tsx`. Cover navigation, conditional links, dialogs, keyboard behavior, and reduced-motion/WebGL fallbacks. Before submitting, run lint, tests, and a production build; also check responsive layouts, focus states, and missing-asset behavior manually.

## Commit & Pull Request Guidelines

Existing history uses short imperative subjects, including Conventional Commit style (`docs: add portfolio implementation specification`). Continue with scoped messages such as `feat: add recruiter snapshot` or `fix: handle missing resume`. Pull requests should summarize user-visible changes, link relevant issues, list verification commands, and include before/after screenshots for UI work. Call out placeholders, accessibility impacts, and deployment changes explicitly.

## Security & Configuration

Never commit API keys or invent personal contact details. Keep unknown values visibly configurable and ensure the production UI hides unresolved placeholders. The finished site must remain static, free-hostable, and compatible with GitHub Pages.
