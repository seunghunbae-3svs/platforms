# PRD: JSON Util API Endpoint

## Audience
Internal admin tooling. **Not** exposed to end users.

## User-facing change
Admin tools can submit a JSON payload describing items, and get back the list
of names for display in admin dashboards.

## Acceptance criteria
- Endpoint accepts JSON input with a list of items having `name` fields
- Returns 200 with `{ names: string[] }` on valid input
- Returns 400 with a descriptive error on invalid input (parse failure or shape mismatch)
- **Must NEVER return 500 for client-supplied bad input** — those are client mistakes, not server crashes
- Maximum 1000 items per request

## Out of scope
- Authentication (this is internal-only)
- Persistence
- Public API

## Non-functional requirements
- Must validate input shape at runtime, not just compile time
- Should use a typed schema (zod recommended) for input validation
- Reliability: if any caller can crash this endpoint with a query string, that is a P1 bug
