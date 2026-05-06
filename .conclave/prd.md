# PRD: User Settings Page

## Audience
All authenticated users — mobile + desktop, including users with assistive
technology (screen readers, keyboard-only navigation, low-vision).

## User-facing change
A new `/settings` page accessible from the user menu. Shows the user's
avatar, an email field, and a small interactive counter. Saves preferences
on click.

## Acceptance criteria
- Page renders the avatar image with descriptive alt text
- Email input has an associated label that screen readers announce
- All interactive elements (counter, hello link, email field) are keyboard-accessible (Tab + Enter)
- Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text)
- Works for users on mobile (touch targets ≥ 44px) and screen readers (proper landmarks + labels)

## Out of scope
- Server-side persistence (localStorage for now)
- Avatar upload (separate PR)

## Non-functional requirements
- **WCAG AA compliance is a hard requirement** — this page is gated by the a11y audit
- Lighthouse a11y score must be ≥ 95
- Touch targets ≥ 44 × 44 px
- Buttons must be `<button>` elements (semantic), not styled divs
