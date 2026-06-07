#!/usr/bin/env bash
set -euo pipefail

# Deploy Prisma migrations in production environments.
# This wrapper exists so build scripts can run migration deployment consistently.

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "error: DATABASE_URL is not set"
  exit 1
fi

if [[ -z "${DIRECT_URL:-}" ]]; then
  echo "warning: DIRECT_URL is not set, Prisma may still run with DATABASE_URL"
fi

npx prisma migrate deploy
