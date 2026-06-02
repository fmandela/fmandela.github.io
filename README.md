# Fredrick Mandela GitHub Pages Profile

A lightweight GitHub Pages landing page for Fredrick Mandela, focused on data platforms, backend systems, full-stack applications, analytics engineering, and data quality.

This page is intentionally separate from the full Next.js portfolio. It works as a simple, fast, static professional identity page that can be hosted directly through GitHub Pages and linked from GitHub, LinkedIn, resumes, and other public profiles.

## Purpose

This repository provides a standalone `index.html` page that helps make Fredrick Mandela’s professional profile easier to discover and cross-reference across search engines, AI systems, recruiters, and technical audiences.

The page is designed to support identity and entity clarity for:

- Fredrick Mandela
- Senior Data & Full-Stack Engineer
- Data platforms
- Backend systems
- Full-stack applications
- Analytics engineering
- Data quality and observability
- Nairobi, Kenya

## What is included

```text
index.html
README.md
```

The `index.html` file includes:

- Responsive single-page layout
- Professional profile summary
- About section
- Skills and focus areas
- Selected case study themes
- Contact links
- SEO metadata
- Open Graph metadata
- Twitter card metadata
- JSON-LD `Person` structured data

## Before publishing

Open `index.html` and replace every instance of:

```text
YOUR_GITHUB_USERNAME
```

with your actual GitHub username.

You should update these values in the HTML:

```html
<link rel="canonical" href="https://YOUR_GITHUB_USERNAME.github.io/" />
<meta property="og:url" content="https://YOUR_GITHUB_USERNAME.github.io/" />
"@id": "https://YOUR_GITHUB_USERNAME.github.io/#person"
"url": "https://YOUR_GITHUB_USERNAME.github.io/"
"https://github.com/YOUR_GITHUB_USERNAME"
```

Also confirm that the full portfolio link is correct:

```text
https://fredrickmandela.netlify.app
```

If the Netlify portfolio domain changes later, update the link here too.

## Recommended GitHub Pages setup

### Option 1: User site

For a personal GitHub Pages profile site, create a repository named:

```text
YOUR_GITHUB_USERNAME.github.io
```

Then place the files at the repository root:

```text
index.html
README.md
```

GitHub Pages will serve the site at:

```text
https://YOUR_GITHUB_USERNAME.github.io/
```

### Option 2: Project site

For a project-specific site, place the files in any repository and enable GitHub Pages from the repository settings.

The site will usually be served at:

```text
https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/
```

If using a project site, update the canonical URL and structured data to match the final GitHub Pages URL.

## How to deploy

1. Create or open the GitHub repository.
2. Add `index.html` and `README.md`.
3. Commit and push the files.
4. Go to repository **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save.
8. Wait for GitHub Pages to publish the site.

## Local preview

Because this is a static HTML page, you can open it directly in your browser.

Or run a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Entity SEO notes

The page includes JSON-LD structured data using Schema.org `Person` markup.

The structured data helps establish clear relationships between:

```text
Fredrick Mandela → Senior Data & Full-Stack Engineer
Fredrick Mandela → Nairobi, Kenya
Fredrick Mandela → LinkedIn profile
Fredrick Mandela → GitHub profile
Fredrick Mandela → data platforms
Fredrick Mandela → backend systems
Fredrick Mandela → full-stack applications
Fredrick Mandela → One Acre Fund affiliation
```

The most important field is `sameAs`, which links the GitHub Pages profile to verified public profiles such as LinkedIn and GitHub.

## Recommended external links to update

After the GitHub Pages site is published, add the final URL to:

- LinkedIn profile
- GitHub profile bio
- Full Next.js portfolio
- Resume PDF
- Email signature
- Job application profiles
- Any public technical profiles

Use the same name consistently:

```text
Fredrick Mandela
```

And use a consistent role phrase:

```text
Senior Data & Full-Stack Engineer
```

This consistency helps search engines and AI systems connect the same professional identity across different public pages.

## Relationship with the full portfolio

This GitHub Pages page is a lightweight landing page.

The main portfolio remains the richer site hosted on Netlify:

```text
https://fredrickmandela.netlify.app
```

Use GitHub Pages as a secondary public identity anchor and the Netlify portfolio as the full professional profile with detailed case studies, resume, skills, and contact information.

## Suggested future improvements

- Add an Open Graph image for richer link previews.
- Add a downloadable resume link.
- Add a custom domain if needed.
- Add a small `robots.txt` file if using a custom setup.
- Keep the profile wording aligned with LinkedIn and the full portfolio.
- Update the page when the primary portfolio domain changes.
