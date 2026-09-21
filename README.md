# Harini's portfolio

React + JavaScript, Vite, and Tailwind CSS. The supplied written design specification controls colors, fonts, layout, and interactions. The original root `App.jsx`, `App.css`, and `index.css` are preserved and are not loaded by the new app.

## Run locally

Use Node.js 22.12+ (Node 24 also works).

```sh
npm install
npm run dev
```

Open the local URL Vite prints. To check and preview a production build:

```sh
npm run build
npm run preview
```

## Files

- `index.html`: document, metadata, Google Fonts, React entry point.
- `vite.config.js`: React and Tailwind Vite plugins.
- `src/main.jsx`: mounts the application and imports styles.
- `src/App.jsx`: composes the page and holds the selected project.
- `src/content.js`: editable profile and project content.
- `src/index.css`: Tailwind theme, basic accessibility styles, dialog backdrop, and reduced-motion support.
- `src/components/Header.jsx`: sticky navigation and scroll-aware active indicator.
- `src/components/Home.jsx`: introduction, expandable bio, portrait, and social links.
- `src/components/Projects.jsx`: project list and reusable project row.
- `src/components/ProjectModal.jsx`: shared native dialog; Escape/outside-click closing, focus restoration, scroll locking.
- `src/components/Contact.jsx`: validated local-only contact form.
- `src/components/Shared.jsx`: small shared image, external link, tag, heading, and SVG icon components.

## Before publishing

Edit `src/content.js` to add your resume URL, social URLs, project URLs, images, dates/types, expanded project descriptions, and biography. Missing links render as noninteractive text with an unavailable tooltip; adding a URL enables the link. For local images, place files in `public/` and use paths such as `/portrait.jpg`. Resume and external project/social links open in a new tab.

OnTask, RouteBite, and PlatePilot descriptions and technologies come from your original draft. No achievements or project details were invented. Confirm the reference's email (`harinis@gmail.com`), school, and introductory role before publishing. The introduction is in `Home.jsx`.

The contact form deliberately has **no delivery service**: native browser validation runs, submission resets the fields, and an inline status explicitly says no message was sent. Visitors can use the working email link. Connecting a real form service is future work.

Google Fonts need an internet connection; fallback fonts remain usable offline. Space Mono is loaded at its supported regular weight. Layout stacks below 800px and navigation wraps on narrow screens. Motion respects the user's reduced-motion preference.

## React concepts used

**Components** are functions that return JSX, separating the major sections. **Props** pass data and callbacks into reusable components such as project rows. An array plus `.map()` renders the projects, with stable `key` values identifying each item. **State** (`useState`) remembers the expanded bio, selected project, active navigation item, and form status. **Effects** (`useEffect`) connect scroll listeners and the native dialog to the browser and clean up afterward. A **ref** (`useRef`) gives the modal access to its actual dialog element. The browser handles dialog focus trapping and form validation.
