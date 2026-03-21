# Alternative 12 NGO Template

This project is an Astro-based website template for an African NGO called Alternative 12.
It is structured as a small multi-page site that can be adapted for:

- NGO profile websites
- donor-facing landing pages
- annual impact microsites
- campaign pages for health, education, livelihoods, or climate work

## Template direction

The current design presents Alternative 12 as a community-led NGO working across Africa with a focus on:

- girls' education
- primary healthcare access
- youth livelihoods
- climate resilience

All numbers, countries, names, and stories in the pages are sample content and should be replaced with verified organization data before publication.

## Project structure

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── SiteShell.astro
│   │   └── Welcome.astro
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── about.astro
│       ├── contact.astro
│       ├── impact.astro
│       ├── index.astro
│       └── programs.astro
├── package.json
└── astro.config.mjs
```

## Development

Run from the project root:

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Customization checklist

Before using this template for a real NGO, update the following:

1. Organization story, mission, and program data in `src/data/site.ts`
2. SEO title and description in each file under `src/pages/`
3. Contact email addresses and phone numbers in `src/data/site.ts`
4. Impact metrics, partner counts, and field stories throughout the pages
5. Brand assets such as favicon, logo, and social metadata

## Tech stack

- Astro 6
- Plain Astro components and CSS

No additional UI framework is required for this template.
# alternative12-npo-website
