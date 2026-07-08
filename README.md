# Fotografi-nettside

En enkel, moderne portfolio-nettside for fotografi. Bygget med ren
HTML, CSS og JavaScript — ingen byggeverktøy eller server nødvendig.

## Kom i gang

Åpne `index.html` direkte i nettleseren, eller start en lokal server:

```bash
python3 -m http.server 8000
```

og gå til `http://localhost:8000`.

## Tilpasning

- **Navn og tekster**: Bytt ut "Ditt Navn" og plassholdertekstene i
  `index.html` (hero, om meg-seksjon, footer).
- **Bilder**: Erstatt SVG-plassholderne i `images/` og
  `images/gallery/` med dine egne bilder (JPG/PNG/WebP anbefales).
  Oppdater filstiene i `js/main.js` (`photos`-arrayet) — hvert bilde
  har `src`, `category` og `caption`.
- **Kategorier/filtre**: Endre filterknappene i `index.html`
  (`#filters`) og `category`-verdiene i `js/main.js` slik at de
  samsvarer.
- **Farger/fonter**: Justér CSS-variablene øverst i `css/style.css`
  (`:root`).
- **Kontaktskjema**: Skjemaet er statisk (viser bare en bekreftelse).
  For at meldinger faktisk skal sendes, koble det til en tjeneste som
  [Formspree](https://formspree.io) eller
  [Netlify Forms](https://www.netlify.com/platform/core/forms/) ved å
  sette `action`- og `method`-attributter på `<form>`-taggen i
  `index.html`.
- **Sosiale medier / e-post**: Oppdater lenkene i `.socials`-seksjonen.

## Publisering

Nettsiden er statisk og kan hostes gratis på f.eks.:

- **GitHub Pages**: Slå på Pages i repo-innstillingene, velg branchen
  og root-mappen.
- **Netlify** / **Vercel**: Koble til repoet, ingen build-kommando
  nødvendig (dette er en statisk side).
