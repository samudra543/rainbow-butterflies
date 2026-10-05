# The Rainbow Butterflies — Travel Story

A static front-end pitch website for the Seven Sisters, prepared 5 October 2026. The opening uses a 2D illustrated story, replacing the earlier hornbill experiment. The internal Butterfly Desk application is separate.

## Run

From this folder:

```sh
python3 -m http.server 4180
```

Open http://localhost:4180. No installation or build is required. Google Fonts needs internet; system font fallbacks are included. Local images and scripts are packaged together.

## The opening story

The traveller enters with a backpack, reaches for a folded map, opens it into an illustrated landscape, and reveals three clickable journey cards. The approximately nine-second story plays once and stops on navigation. Replay and skip controls are provided. Reduced-motion preferences show the finished state immediately. The header’s motion control pauses the sequence. Leaving the browser tab or scrolling the hero offscreen pauses its timeline.

- Seven Sisters: opens the on-page destination explorer.
- Motorcycle Adventures: opens ride information.
- Make it your journey: opens the trip planner.

The rest of the website includes all seven states, custom journey inspiration, motorcycle travel, company story, FAQs, contact links and a three-step traveller brief.

## Demo boundary

There is no backend, payment processing or live booking. Planner information remains in browser memory. Download saves a text brief locally; email opens a draft that the visitor chooses whether to send. Journey descriptions are ideas, not confirmed availability or fixed-price packages.

## Source files

`travel-story.js` and `travel-story.css`: finite opening timeline, sprite poses, map/landscape transition, card reveal and controls.
`app.js`: destination data, dialogs and trip planner.
`cinematic.js` / `cinematic.css`: lower-page art direction and destination presentation.
`motion.js` / `motion.css`: lower-page scroll motion.
`style.css`: base styling. `index.html`: entry page.
`assets/`: locally packaged images. `preview.png`: finished desktop composition.

## Research

Company content was reviewed from https://therainbowbutterflies.com/ and its /about, /ways-to-travel, /destinations, /plan and /contact pages. Company photography is copied locally for this pitch prototype; the company should confirm original licensing and geographic attribution before publication.

The user-approved narrative adapts the staged action-then-card-reveal structure of https://www.instagram.com/reel/DeGFyZvz7EK/ . The original reel character, footage and basketball assets are not included.

## Artwork

Generated with the built-in image-generation tool:

- `assets/traveller-poses.png`: a transparent 3×2 sprite sheet, six consistent 2D illustrated traveller poses: left-step walk, right-step walk, reaching into backpack, folded map, partly opened map, fully opened map. Indian traveller with olive hat, orange overshirt, teal trousers, cream hiking shoes and forest-green backpack; commercial cel-shaded illustration, no text or background.
- `assets/northeast-world.png`: conceptual composite of tea gardens, forests, a living-root bridge, waterfalls, homestay and distant mountains on transparency; not a literal geographic map.
- `assets/motorcycle.png`: conceptual green-and-gold touring motorcycle; not a confirmed supplied model.

Typography: Barlow Condensed, Outfit and Fraunces through Google Fonts.

## Validation of travel-story edition

Sampled the actual timeline at approximately 1, 2.8, 3.7, 4.7, 6, 7.8 and 9 seconds: walk, reach, folded map, partial map, full map with landscape, then three enabled cards at completion. Verified pause freezes time; skip jumps to the finished composition; replay restarts. Ride and planner cards open their respective dialogs; the destination card navigates to the explorer. Tested 390px and 1440px layouts with no page-width overflow. Emulated reduced motion and confirmed the finished state and enabled cards immediately. No console errors in the revised-page checks.
