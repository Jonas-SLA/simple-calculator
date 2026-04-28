# Changelog

All notable changes to this project will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

### Added
### Changed
### Fixed
### Removed

---

## [1.1.0] - 2026-04-22

### Added
- Backspace button support in frontend (`data-action="backspace"`)
- `nodemon` as dev dependency with `npm run dev` script
- Startup warning when `CORS_ORIGIN=*` in production

### Fixed
- Original `mathjs` error now logged before re-throwing sanitised version
- Added `typeof result !== 'number'` guard in `calcService.js` to catch non-primitive results

---

## [1.0.0] - 2026-04-22

### Added
- Initial release
- Express backend with `/api/calculate` POST endpoint
- Joi input validation with strict regex allowlist
- `mathjs` safe expression evaluation (no `eval()`)
- Helmet secure headers
- Rate limiting (60 req/min per IP)
- 10kb payload limit
- CORS configuration via `.env`
- Vanilla JS frontend with fetch API integration
- Loading state and error toast UI
