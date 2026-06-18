# PRD: Debug API Endpoint

## Audience
Developers operating behind an authenticated admin gate during incident
response and local development.

## User-facing change
`/api/phase2-debug` returns request inspection metadata (method, route, IP)
to authorized callers, to help debug routing / header issues during
development.

## Acceptance criteria
- Endpoint requires admin authentication; unauthenticated requests get 401
- Returns request metadata: method, route, client IP, user agent
- **NEVER returns raw cookie or authorization headers** — those are sensitive
- Hard-disabled in production (returns 403 if NODE_ENV=production)
- Logs are sanitized — no secrets, tokens, cookies, auth headers, or PII written to stdout / structured logs

## Out of scope
- Persistent log storage
- Web UI for inspecting logs
- Public access (this is admin-only forever)

## Non-functional requirements
- **SECURITY-CRITICAL**: any leak of cookies / tokens / passwords / PII through
  logs or response body is a SEV-1 incident
- Must NOT log `Authorization`, `Cookie`, `Set-Cookie`, or any header containing
  `secret`, `token`, `key`, or `password`
- Must NOT include client IPs in stdout (PII concern under GDPR)
- Must NOT contain hardcoded credentials, API keys, or tokens of any kind
  (use environment variables)
- Code review must verify no `console.log` of sensitive data
