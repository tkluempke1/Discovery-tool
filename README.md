# Docker Business MEDDICC Discovery Tool

This project provides an interactive set of questions to qualify Docker Business opportunities using the MEDDICC framework. The tool is implemented as a single-page web application.

## Features

- **MEDDICC question navigation** – browse curated questions for Metrics, Economic Buyer, Decision Criteria, Decision Process, Implicate the Pain, Champion and Competition.
- **Star important questions** – mark questions to highlight them during discovery.
- **Call Prep list** – add questions to a preparation list for an upcoming customer call.
- **Notes and customization** – add free‑form notes or adjust questions inline.
- **CSV export** – download selected questions and notes for sharing or CRM import.

## Running the tool

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch a local web server from the repository root:
   ```bash
   npx http-server -p 5000
   ```
3. Open `http://localhost:5000` in your browser. The main application is served from `index.html` and loads `app.js`.

Alternatively you can open `index.html` directly in a browser, though some features work best when served via HTTP.

## Repository structure

- `index.html` – HTML layout and Tailwind styling.
- `app.js` – Plain JavaScript implementation of the MEDDICC tool.
- `docker-meddicc-tool.tsx` – React component containing the same functionality (not bundled).
- `package.json` – Node dependencies (`react` and `lucide-react` icons).

## Development notes

The project does not include a build system. You can experiment with the React component by importing it into your own React setup. For simple use, running the static site as described above is sufficient.

## License

This repository is licensed under the ISC license. See `package.json` for details.
