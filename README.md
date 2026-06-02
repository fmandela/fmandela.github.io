# Fredrick Mandela GitHub Pages Profile

This is a simple GitHub Pages profile site for me — Fredrick Mandela.

I created it as a lightweight public landing page that can sit alongside my main portfolio site. The full portfolio has more detail, case studies, resume positioning, and project writeups. This page is intentionally smaller: it gives a quick summary of who I am, what I work on, and where to find me.

## What this page is for

The goal of this page is to make my professional profile easier to find and connect across public platforms like GitHub, LinkedIn, search engines, and AI tools.

My work sits across:

- Data engineering
- Full-stack engineering
- Backend systems
- Data platforms
- Analytics engineering
- APIs and integrations
- Cloud deployments
- Data quality and observability

My recent professional work has focused heavily on data engineering and data platforms, but my broader experience includes backend and full-stack software engineering as well.

## What is included

```text
index.html
README.md
```

The `index.html` file is a standalone static page. It includes:

- A short profile introduction
- A clear “About Fredrick Mandela” section
- Focus areas and technical strengths
- Selected case study themes
- Contact links
- Basic SEO metadata
- Open Graph metadata for link previews
- JSON-LD structured data to help search engines understand the page

There is no framework or build step required. It is just HTML, CSS, and a small amount of JavaScript.

## Before publishing

Open `index.html` and replace every instance of:

```text
YOUR_GITHUB_USERNAME
```

with your actual GitHub username.

The main places to check are:

```html
<link rel="canonical" href="https://YOUR_GITHUB_USERNAME.github.io/" />
<meta property="og:url" content="https://YOUR_GITHUB_USERNAME.github.io/" />
"@id": "https://YOUR_GITHUB_USERNAME.github.io/#person"
"url": "https://YOUR_GITHUB_USERNAME.github.io/"
"https://github.com/YOUR_GITHUB_USERNAME"
```

Also confirm that the link to the full portfolio is correct:

```text
https://fredrickmandela.netlify.app
```

If I later move the main portfolio to a custom domain, I should update the link here too.

## How to publish on GitHub Pages

### Option 1: Personal GitHub Pages site

Create a repository named:

```text
YOUR_GITHUB_USERNAME.github.io
```

Then add these files to the root of the repository:

```text
index.html
README.md
```

Once GitHub Pages is enabled, the site will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/
```

### Option 2: Project GitHub Pages site

This can also live inside any normal GitHub repository.

In that case, GitHub will usually publish it at:

```text
https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/
```

If using this option, remember to update the canonical URL and structured data inside `index.html` so they point to the actual published page.

## Deployment steps

1. Add `index.html` and `README.md` to the repository.
2. Commit and push the changes.
3. Open the repository on GitHub.
4. Go to **Settings**.
5. Open **Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save the settings.
8. Wait for GitHub Pages to publish the site.

## Local preview

Because this is a static HTML page, I can open `index.html` directly in a browser.

Alternatively, I can run a small local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Why the page includes structured data

The page includes Schema.org `Person` structured data.

This helps make the identity of the page clearer to search engines and other systems. In simple terms, it helps connect:

```text
Fredrick Mandela
→ Senior Data & Full-Stack Engineer
→ Nairobi, Kenya
→ LinkedIn profile
→ GitHub profile
→ data platforms
→ backend systems
→ full-stack applications
→ One Acre Fund affiliation
```

The `sameAs` field is especially useful because it points to other profiles that represent the same person, such as LinkedIn and GitHub.

## Links to keep updated

After publishing the GitHub Pages site, I should add the final URL to:

- LinkedIn
- GitHub profile bio
- My main portfolio site
- My resume PDF
- Email signature
- Job application profiles

I should keep the naming consistent across these places:

```text
Fredrick Mandela
```

And use a consistent professional positioning, such as:

```text
Senior Data & Full-Stack Engineer
```

## Relationship with the main portfolio

This GitHub Pages site is the lightweight version.

The main portfolio is hosted separately on Netlify:

```text
https://fredrickmandela.netlify.app
```

That site has more detail, including experience, case studies, skills, resume positioning, and contact information.

This GitHub Pages page is mainly a quick public identity anchor — useful for GitHub, search, and simple sharing.

## Future improvements

Some possible improvements later:

- Add an Open Graph image for better link previews.
- Add a downloadable resume link.
- Add a custom domain.
- Add a small `robots.txt` file.
- Keep the language aligned with LinkedIn and the main portfolio.
- Update the page if the main portfolio URL changes.
