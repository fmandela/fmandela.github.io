# Fredrick Mandela Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e59dd79-3d0d-44e8-a1f4-bbe375e077c6/deploy-status)](https://app.netlify.com/projects/fredrickmandela/deploys)

A Docker-ready and Netlify-ready portfolio website for Fredrick Mandela, focused on data engineering, analytics engineering, backend systems, and data platform leadership.

The site is built with Next.js, TypeScript, Tailwind CSS, and reusable React components. It is designed to work as an expanded professional profile, not just a static resume. The goal is to showcase experience, case studies, technical strengths, role positioning, and contact information in a clean and recruiter-friendly format.

## Purpose

This portfolio is intended to support job applications and interview conversations across roles such as:

- Senior Data Engineer
- Data Platform Engineer
- Analytics Engineer
- Backend/Data Engineer
- Data Engineering Lead
- Engineering Team Lead

The site expands the resume by adding more context around selected projects, technical ownership, leadership scope, tools used, and impact.

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- lucide-react
- Docker
- Netlify

## Why this version is pinned

This website pins Next.js, React, Tailwind, and ESLint versions instead of using `latest`.

The first draft used floating dependency versions and MDX, which can trigger unstable build behavior depending on what npm resolves at install time. This version prioritizes reliable Docker and Netlify builds first. MDX can be added later after the baseline deploy is stable.

## Local Development

Install dependencies:

```bash
npm install
```
