#!/bin/bash
# Creates and checks out a branch with proper naming convention
# Usage: ./scripts/new-branch.sh feat login-page
#   → creates branch: feat/login-page

TYPE=$1
NAME=$2

VALID_TYPES="feat fix chore docs refactor test perf ci"

if [ -z "$TYPE" ] || [ -z "$NAME" ]; then
  echo ""
  echo "Usage: ./scripts/new-branch.sh <type> <name>"
  echo ""
  echo "Types: feat, fix, chore, docs, refactor, test, perf, ci"
  echo ""
  echo "Examples:"
  echo "  ./scripts/new-branch.sh feat user-authentication"
  echo "  ./scripts/new-branch.sh fix payment-null-error"
  echo "  ./scripts/new-branch.sh docs api-reference"
  echo ""
  exit 1
fi

# Validate type
if ! echo "$VALID_TYPES" | grep -qw "$TYPE"; then
  echo "Invalid type: $TYPE"
  echo "Valid types: $VALID_TYPES"
  exit 1
fi

BRANCH="$TYPE/$NAME"
git checkout -b "$BRANCH"
echo ""
echo "✓ Created and switched to branch: $BRANCH"
echo ""
