# Agent Instructions

This folder is a public landing page and marketing surface for Carnegie.

Rules:
- Treat everything here as public internet content.
- Do not include source code, architecture internals, APIs, schemas, credentials, private docs, database details, deployment details, business-sensitive strategy, roadmap specifics, security details, or implementation details that could help reverse engineer the app.
- Only include public-safe copy, images/assets, high-level product positioning, vague descriptions of what is currently being built, and contact/CTA content when needed.
- When unsure whether something is safe, omit it and ask.
- Prefer static, minimal assets. Do not add dependencies or app logic unless explicitly approved.
- Before committing or pushing, review every change in this folder for information leakage.

## Content Authority (Spec Anchored)
- The single source of truth (specification) for all public-safe text and copy shown on the landing page is stored as Markdown files in the `src/content/landing/` directory.
- All page HTML must be generated dynamically from these Markdown spec files by Astro. Do not write copy directly in Astro pages; instead, load it from the content collection.

