---
name: Ahmad Plumbing
description: A calm, capable local-service system built from workwear navy, pipe cyan, warm residential surfaces, and urgent orange action.
colors:
  workwear-navy-deep: "#031b2c"
  workwear-navy: "#06263b"
  pipe-cyan: "#00c7d8"
  pipe-cyan-deep: "#0495aa"
  urgent-orange: "#ff6b12"
  urgent-orange-hover: "#ff761f"
  warm-off-white: "#f8f6f0"
  plumbing-ink: "#062641"
  quiet-slate: "#58677a"
  clean-white: "#fffefb"
typography:
  display:
    fontFamily: "Sora, Avenir Next, sans-serif"
    fontSize: "clamp(3.4rem, 5.4vw, 5.7rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Sora, Avenir Next, sans-serif"
    fontSize: "clamp(3rem, 5.4vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Sora, Avenir Next, sans-serif"
    fontSize: "clamp(1.4rem, 2.3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  label: "8px"
  button: "13px"
  card: "15px"
  media: "18px"
  inset: "22px"
  map: "48px"
  pill: "999px"
  portrait: "64px 190px 64px 64px"
spacing:
  compact: "8px"
  small: "12px"
  control: "16px"
  content: "24px"
  action-inline: "28px"
  section-inline: "clamp(24px, 5vw, 84px)"
  section-block: "clamp(90px, 8vw, 130px)"
components:
  button-primary:
    backgroundColor: "{colors.urgent-orange}"
    textColor: "{colors.clean-white}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0 28px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.urgent-orange-hover}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.button}"
  button-ghost:
    backgroundColor: "rgba(3, 27, 44, 0.18)"
    textColor: "{colors.clean-white}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0 28px"
    height: "58px"
  call-pill:
    backgroundColor: "transparent"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "50px"
  service-card:
    backgroundColor: "{colors.workwear-navy-deep}"
    textColor: "{colors.clean-white}"
    rounded: "{rounded.card}"
    height: "530px"
  status-pill:
    backgroundColor: "rgba(255, 255, 255, 0.88)"
    textColor: "{colors.plumbing-ink}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
---

# Design System: Ahmad Plumbing

## Overview

**Creative North Star: "The Technician Already on the Way"**

The system should feel direct, calm, and visibly equipped. It borrows from the material world of plumbing work—deep navy workwear, cyan pipe markings, bright chrome, wet tile, residential warmth, and the orange urgency of a service call—without turning into a themed novelty.

Large editorial panels alternate between photographic navy and warm off-white. Decisive image crops, oversized geometric headlines, spare line diagrams, and highly legible contact actions create confidence for visitors who may be scanning under stress. Expression comes from the work itself: people, tools, pipes, maps, and proof of workmanship.

**Key Characteristics:**

- Deep, photographic navy surfaces balanced by warm off-white relief.
- Cyan behaves like technical ink; orange signals an immediate contact action.
- Compact, heavy display typography paired with calm utility text.
- Large image-led panels, practical local cues, and thumb-reachable conversion.
- Softened industrial forms with occasional pipe bends, map pins, and restrained rotation.

## Colors

The palette combines dependable trade-service blues with residential warmth and one deliberately scarce urgency color.

### Primary

- **Deep Workwear Navy** (`#031b2c`): The page ground, photographic overlays, mobile navigation, and the darkest structural surfaces.
- **Workwear Navy** (`#06263b`): Dark section panels, navigation support, and footer surfaces.
- **Pipe Cyan** (`#00c7d8`): Emphasized words, active navigation, focus outlines, blueprint lines, and brand marks.
- **Deep Pipe Cyan** (`#0495aa`): Readable cyan for icons, links, map pins, and light-surface details.

### Secondary

- **Warm Off-White** (`#f8f6f0`): Residential-feeling content fields and the operation panel; it prevents the industrial palette from feeling cold.

### Tertiary

- **Urgent Orange** (`#ff6b12`): Primary WhatsApp actions and the featured service marker.
- **Lifted Urgent Orange** (`#ff761f`): The implemented hover response for urgent actions.

### Neutral

- **Plumbing Ink** (`#062641`): Primary text on light surfaces.
- **Quiet Slate** (`#58677a`): Secondary copy on warm surfaces.
- **Clean White** (`#fffefb`): High-contrast text and light brand details on navy.

### Named Rules

**The Two-Signal Rule.** Cyan explains the system and marks trust or location; orange asks for immediate action. Do not swap their jobs.

**The Plumbing-Line Rule.** Cyan grid and line geometry belongs only where it reads as a pipe, route, coverage radius, or technical mark.

## Typography

**Display Font:** Sora (with Avenir Next and sans-serif fallbacks)  
**Body Font:** Manrope (with sans-serif fallback)  
**Handwritten Accent:** Georgia italic, limited to the rotated service-note signature.

**Character:** Sora makes promises compact, geometric, and decisive. Manrope carries calm explanatory copy, operational detail, and actions without losing clarity on small screens.

### Hierarchy

- **Display** (800, `clamp(3.4rem, 5.4vw, 5.7rem)`, 0.98): Hero statements with balanced wraps and tightly tracked lines.
- **Headline** (800, `clamp(3rem, 5.4vw, 5.4rem)`, 1.02): Section-level promises; cyan emphasis stays upright rather than italic.
- **Title** (700, `clamp(1.4rem, 2.3vw, 2.25rem)`, 1.08): Service-card and operational titles.
- **Body** (400, `1rem`, 1.55): Explanatory text, navigation support, and component copy.
- **Lead** (400, `clamp(1.05rem, 1.6vw, 1.35rem)`, 1.62): Short introductions, capped near 590–640px.
- **Label** (800, `0.78rem`, 1): Map labels, service indices, and compact utility metadata.

### Named Rules

**The Compact Promise Rule.** Major headings stay heavy, tightly tracked, and short enough to read in one glance.

**The One Handwritten Note Rule.** Georgia italic is a rare human signature, not a third general-purpose typeface.

## Layout

The site is a sequence of six large editorial panels. Section insets generally use `clamp(24px, 5vw, 84px)` horizontally and 90–150px vertically; desktop compositions prefer asymmetric two- and three-column grids over centered card rows. The hero is full-viewport, service cards use a `1.65fr / 0.82fr / 0.82fr / 0.82fr` rhythm, coverage uses a `0.72fr / 1.28fr` split, and proof uses a `1.2fr / 0.9fr / 0.85fr` composition.

At 1120px, dense grids simplify to two columns and operational content moves beneath the contact pair. At 760px, navigation becomes a full-screen drawer, every editorial grid stacks to one column, section padding compresses to 20px horizontally and 78px vertically, map labels recede, and a fixed 58px WhatsApp action spans the lower thumb zone.

**The Alternating-Panel Rule.** Preserve the rhythm of dark photographic panels and warm explanatory panels; avoid a continuous field of interchangeable cards.

## Photography & Asset Direction

All live raster imagery and the company logo come from the user-supplied `assets 2/` directory. Keep those files as the visual source of truth. The hero is a deliberate two-layer composition: the bathroom background fills the viewport while the transparent plumber cutout is positioned independently so his face, tool, and workwear remain legible beside the headline.

Service photography uses strong `object-fit: cover` crops that keep the technician and the active plumbing task visible. The customer-conversation image supports trust and location context; the testimonial portrait is illustrative and remains paired with the visible “Ulasan contoh” label until a verified review is supplied. On mobile, prioritize faces and tools over showing the full room, and preserve descriptive alt text for every informative image.

**The Supplied-Asset Rule.** Replace or add photography from `assets 2/` first; do not mix the shipped set with generic stock or previously generated project images unless the owner explicitly changes direction.

## Elevation & Depth

Depth is hybrid: the main page architecture is tonal and flat, while contained proof, map, inset-photo, and urgent-action elements receive ambient lift. Photography supplies most visual depth; shadows should remain colored by navy or orange rather than neutral black.

### Shadow Vocabulary

- **Urgent Action** (`0 14px 30px rgba(255,107,18,.25)`): Resting orange CTA lift.
- **Urgent Action Hover** (`0 18px 38px rgba(255,107,18,.38)`): Hover reinforcement paired with a 3px upward move.
- **Inset Photo** (`0 20px 40px rgba(3,27,44,.18)`): Layered photographic evidence on warm surfaces.
- **Map Surface** (`0 30px 80px rgba(6,38,59,.12)`): Broad ambient separation for the coverage canvas.
- **Map Detail** (`0 7px 18px rgba(3,27,44,.12)`): Labels and small location details.
- **Sticky Action** (`0 15px 38px rgba(3,27,44,.42)`): Mobile WhatsApp bar above page content.

### Named Rules

**The Evidence Gets Lift Rule.** Elevation belongs to proof, location, or immediate action—not to every section wrapper.

## Shapes

The form language is softened industrial. Controls and service cards use practical 8–22px radii; status and call controls use full pills; large photos and operational surfaces use expressive 36–72px corners. The signature portrait crop exaggerates one upper corner (`64px 190px 64px 64px`), echoing a bent pipe without drawing one literally. Small rotations of ±2° make proof images feel handled and inspected rather than perfectly templated.

**The Pipe-Bend Rule.** Large asymmetric radii are reserved for hero-scale photographs and major operational panels; compact controls remain disciplined.

## Components

### Buttons

- **Shape:** Firm, gently softened rectangles (13px radius) with a 58px minimum height and 28px horizontal padding.
- **Primary:** Urgent Orange with Clean White text, heavy labeling, and a warm ambient shadow.
- **Hover / Focus:** Lift 3px on hover and brighten to Lifted Urgent Orange; keyboard focus uses a 3px Pipe Cyan outline offset by 5px.
- **Ghost:** Transparent navy glass with a 1.5px white border; hover adds a light white wash.
- **Call Pill:** A 50px outlined cyan capsule for the desktop phone route.

### Cards / Containers

- **Service Cards:** Photo-led, 530px tall on wide screens, 15px corners, a thin white edge, and a deep navy bottom fade. Imagery scales to 1.055 on hover.
- **Map Card:** A pale technical canvas with 48px corners, dashed cyan coverage geometry, labeled pins, and one lightly rotated evidence photo.
- **Operation Card:** Warm Off-White with a large inward radius; it groups coverage, map access, and operating-time information without a floating-card stack.
- **Proof Frames:** Thin pale borders, 18px corners, and slight opposing rotation for before/after evidence.

### Navigation

The header floats over the hero at 104px tall, then compresses to 78px with translucent deep navy and an 18px backdrop blur. Links are bold Manrope with a cyan underline that grows from left to right; the current section remains visibly active. Below 760px, a circular toggle opens a full-screen navy drawer and Escape restores focus to the trigger.

### Coverage Pins and Status

Map pins use the familiar rotated teardrop silhouette, alternating Urgent Orange and Deep Pipe Cyan. Their white 8px labels disappear on small screens, while the live status remains a centered translucent pill.

### Sticky Mobile WhatsApp

Below 760px, the primary action becomes a fixed full-width orange bar, inset 16px from both sides and 14px from the bottom. Its 58px height and strong navy shadow keep emergency contact available without obscuring the page structure.

## Do's and Don'ts

### Do:

- **Do** lead with real work, tools, pipes, maps, and local operating cues.
- **Do** keep urgent contact routes obvious, large, and reachable on mobile.
- **Do** use cyan emphasis to connect typography, focus, navigation, and technical plumbing geometry.
- **Do** alternate dense navy photography with warm off-white breathing room.
- **Do** preserve visible keyboard focus and reduced-motion behavior.

### Don't:

- **Don't** spread orange across decorative elements; reserve it for urgent conversion and one featured service cue.
- **Don't** turn every content block into a floating card or apply shadows to whole sections.
- **Don't** use generic abstract gradients, unrelated tech motifs, or decorative geometry without a plumbing or mapping rationale.
- **Don't** replace decisive image crops with small thumbnails or a uniform gallery grid.
- **Don't** introduce unverified review, timing, pricing, or availability claims as visual proof.
