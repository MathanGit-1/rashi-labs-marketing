# Rashi Labs Marketing Website

A responsive static marketing website built with React, TypeScript, Vite and Tailwind CSS.

## Included pages

- Home
- About
- Services
- Individual service details
- Gallery
- Contact
- Mobile navigation
- WhatsApp enquiry form
- 404 page

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

The production output is generated in `dist/`.

## Update business content

Most business details and page content are centralised in:

`src/data/siteContent.ts`

Update the phone number, address, GSTIN, services, strengths and gallery labels there.

## Replace gallery placeholders

Replace the SVG files inside:

`public/images/gallery/`

Keep the same filenames, or update the paths in `src/data/siteContent.ts`. A 4:3 image ratio such as 1600 × 1200 works best.

## Logo assets

The current logo assets were cropped from the signboard image supplied for the project:

- `public/images/rashi-logo.png`
- `public/images/rashi-mark.png`
- `public/images/rashi-signboard.jpg`

Replace these with the original high-resolution logo files when available.

## Static form behaviour

The contact form does not require a backend. It creates a pre-filled WhatsApp message and opens WhatsApp in a new tab.
