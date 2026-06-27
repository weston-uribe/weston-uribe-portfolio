# public/logos/ — Official Logo Assets

## Purpose

This folder holds official SVG logos for the portfolio logo marquee banner. The current site uses styled placeholder wordmarks in `components/custom/portfolio/logo-marquee.tsx` — no image files are required until you are ready to swap them in.

## Suggested filenames

Place official SVG files here with these names:

| File | Affiliation |
|------|-------------|
| `ucla.svg` | UCLA |
| `freedom-robotics.svg` | Freedom Robotics |
| `cambridge.svg` | University of Cambridge |
| `ukg.svg` | UKG |
| `uci.svg` | UC Irvine |
| `yc.svg` | Y Combinator (legacy name — use `y-combinator.svg`) |

## Wired assets

| File | Status |
|------|--------|
| `ucla.svg` | Active — `hasAsset: true` in `LOGO_AFFILIATIONS` |
| `cambridge.svg` | Active — `hasAsset: true` in `LOGO_AFFILIATIONS` |
| `ukg.svg` | Active — `hasAsset: true` in `LOGO_AFFILIATIONS` |
| `uci.svg` | Active — `hasAsset: true` in `LOGO_AFFILIATIONS`. Source file uses a tight `viewBox` crop (`-108 244 857 153`); do not revert to the original `0 0 652 652` export or the logo will clip and render tiny. |
| `freedom-robotics.svg` | Active — `hasAsset: true` on the Freedom Robotics entry |
| `y-combinator.svg` | Active — used in the Freedom Robotics badge row (`A` + logo + `Company`) via `Y_COMBINATOR_LOGO` in `lib/portfolio/content.ts` |

## How to wire up real logos

1. Add the SVG files to this directory using the names above.
2. Set `hasAsset: true` on the matching entry in `LOGO_AFFILIATIONS` (`lib/portfolio/content.ts`).
3. The `LogoImage` helper in `logo-marquee.tsx` renders the SVG via a plain `<img>` when `hasAsset` is true.

Logo order and labels are centralized in `lib/portfolio/content.ts` — do not scatter paths across components.

## Notes

- Prefer full-color SVGs with transparent backgrounds.
- Do not commit unofficial or unlicensed logo assets.
- Until files exist here, the marquee renders polished CSS placeholders — no broken image links.
