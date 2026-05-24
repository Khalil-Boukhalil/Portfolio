# Khalil Bou Khalil Portfolio

Professional one-page portfolio website built with React and Vite.

## Sections

- Hero with profile links
- About
- Skills
- Projects
- Experience / Education
- Contact

## Tech Stack

- React
- Vite
- CSS
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Edit Your Content

Most portfolio text is in:

```text
src/data/portfolio.js
```

Your GitHub and email contact links are defined here:

- `profile.links.github`
- `profile.links.email`

Add a LinkedIn field later only if you want to publish a real LinkedIn URL.

The main layout is in `src/App.jsx`, and the styling is in `src/App.css`.

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy.

## Notes

This site avoids fake work experience. The experience section focuses on education, project-based experience, and current opportunity goals.
