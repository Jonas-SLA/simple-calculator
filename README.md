# Secure Calculator

> A full-stack web calculator with a security-first architecture.

---

## What it does

A browser-based calculator that performs no math in the browser. All calculation logic lives exclusively on a Node.js backend, which validates, sanitises, and evaluates every expression before returning a result. The frontend is intentionally "dumb" — it only handles UI state and HTTP communication.

---

## Requirements

- Node.js >= 18
- npm >= 9
- Python 3 (only for serving the frontend locally)

---

## Installation

```bash
git clone git@github.com:yourusername/secure-calculator.git
cd secure-calculator
```

---

## Environment setup

```bash
cd src/backend
cp .env.example .env
# Open .env and set PORT and CORS_ORIGIN
```

---

## Running locally

**Option 1 — automated (recommended):**
```bash
./scripts/setup.sh
```

**Option 2 — manual:**

Start the backend:
```bash
cd src/backend
npm install
npm run dev
```

Serve the frontend (second terminal):
```bash
cd src/frontend
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

---

## Running tests

```bash
cd src/backend
npm test
```

---

## Project structure

```
src/
  backend/          Node.js + Express API server
    routes/         URL endpoint definitions
    controllers/    HTTP request/response handling
    services/       Core calculation logic (mathjs)
    middlewares/    Input validation (Joi)
    server.js       App entry point, security middleware
  frontend/
    index.html      Calculator UI structure
    style.css       Styling and responsiveness
    app.js          UI state and backend communication
tests/              Automated test files
docs/               Full system documentation
scripts/            Setup and Git helper scripts
```

---

## Deployment

The backend is stateless and can be containerised with Docker and deployed behind a reverse proxy (NGINX) with HTTPS. Before deploying:

- Set `NODE_ENV=production` in your environment
- Set `CORS_ORIGIN` to your exact frontend domain
- Ensure SSL/TLS is terminated at the proxy level

---

## License

All rights reserved. © 2026 Your Name.
