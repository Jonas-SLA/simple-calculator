#!/bin/bash

set -e

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Secure Calculator — project setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Copy .env if it doesn't exist
if [ ! -f src/backend/.env ]; then
  cp .env.example src/backend/.env
  echo "✓ Created src/backend/.env from .env.example"
  echo "  → Open src/backend/.env and fill in your values before running"
else
  echo "✓ .env already exists, skipping"
fi

# Install backend dependencies
if [ -f src/backend/package.json ]; then
  echo "✓ Installing backend dependencies..."
  (cd src/backend && npm install)
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Setup complete"
echo ""
echo "  Start backend:  cd src/backend && npm run dev"
echo "  Start frontend: cd src/frontend && python3 -m http.server 8080"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
