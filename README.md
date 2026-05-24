# India Executive Search

Website for **India Executive Search** — a premium hospitality executive search firm founded by Harish Chandra, placing senior leaders across luxury hotels, resorts, and hospitality brands in India, the Middle East, and Asia.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool
- **Tailwind CSS 3** — utility-first styling
- **Framer Motion 12** — animations
- **Resend** — contact form email delivery
- **Vercel** — hosting and serverless functions

## Project Structure

```
frontend/
├── api/
│   └── contact.js        # Vercel serverless function (contact form)
├── public/               # Static assets (photos, icons, favicon)
├── src/
│   ├── components/       # Shared components (Navbar, Footer, sections)
│   └── pages/            # Page components (Home, About, Employers, etc.)
├── index.css             # Global design system (tokens, utilities)
└── tailwind.config.js    # Design tokens (gold, pearl, surface colours)
```

## Pages

| Route (state) | File |
|---|---|
| `home` | `src/pages/HomePage.jsx` |
| `about` | `src/pages/AboutPage.jsx` |
| `employers` | `src/pages/EmployersPage.jsx` |
| `candidates` | `src/pages/CandidatesPage.jsx` |
| `sectors` | `src/pages/SectorsPage.jsx` |
| `contact` | `src/pages/ContactPage.jsx` |

Navigation is state-based (no React Router). Pages are switched via a `navigate(page)` function in `App.jsx`.

## Local Development

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
cd frontend
npm run build
```

Output goes to `frontend/dist/`.

## Contact Form Setup

The contact form posts to `/api/contact` (Vercel serverless function using Resend).

To enable in production:

1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key
3. Add `RESEND_API_KEY` to your Vercel project's environment variables
4. Once the domain `indiaexecutivesearch.com` is verified in Resend, update the `from:` field in `frontend/api/contact.js`

## Deployment

Deployed on Vercel. Push to `main` to trigger a new deployment.
