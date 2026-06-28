# Digital Edify — Design System

> A design system for **Digital Edify** and its in-house **Edify Agent OS / Edify CRM** product family — a warm, editorial, "AI-native" aesthetic built on a tri-colour indigo→violet→magenta brand spectrum over a linen-paper canvas.

This folder gives design agents everything needed to produce on-brand interfaces, mocks, decks, and prototypes for Digital Edify.

---

## 1. Company & product context

**Digital Edify** is an AI-native IT training institute — established 2016, headquartered in Hyderabad (Hitech City), with live online cohorts on IST & PST. It bills itself as "India's first AI-native institute," training engineers and enterprise teams to **build, deploy, and run production AI agents** on platforms like ServiceNow (Now Assist), Salesforce (Agentforce), Workday, and Power BI — with placement support across 1,000+ hiring partners and 100,000+ alumni.

Programs span AI Engineering / Generative & Agentic AI, Full-Stack + AI, Data Science, DevOps, Salesforce, ServiceNow, Business Analysis, UI/UX, QA, and Python foundations. Every program ships three production-style projects (commonly **LMS, HRMS, CRM**) plus an AI-agent capstone deployed in a real partner org.

> **Naming note:** The intake brief referred to the company as *"Digia."* All source materials, copy, and the product itself brand as **Digital Edify** / **Edify**, so this system uses *Digital Edify*. If "Digia" is a parent entity or new name, flag it and I'll adjust naming throughout.

### The product represented here: Edify Agentic CRM
The single source artifact is an **agentic CRM** — the kind of in-house tool Edify both uses (to run its own admissions/sales pipeline of leads → demos → enrolments) and teaches students to build. It is "agent-first": autonomous agents (Outreach, Lead Scoring, Scheduler, Forecast) score leads, draft follow-ups, book demos and move pipeline cards, surfacing **Next Best Actions** for a human to approve. Currency is INR (₹), leads are education prospects (cohorts, programs), and the tone is calm and advisory.

---

## 2. Sources

- **`uploads/Digital Edify Agentic CRM (standalone).html`** — the original delivered artifact (a self-contained, asset-bundled HTML mockup). This is the **primary source of truth** for visual language.
  - Unpacked working copy: `uploads/crm_template.html` (de-bundled HTML, fully readable).
  - Extracted binary assets (fonts + favicon/logo): `uploads/extracted/`.
- **digitaledify.ai** — public site, consulted for company facts, program names, tone, and copy (placements, "AI-native," 100,000+ alumni, Hitech City address). Reader does not need access; cited for provenance.

No Figma file, repo, or deck was provided. If you have the Edify CRM repo or a Figma library, share it and the UI kit can be made pixel-exact rather than reconstructed from the one HTML mockup.

---

## 3. Content fundamentals

How Digital Edify (and the Edify CRM product) writes.

- **Voice — calm, advisory, outcome-oriented.** It speaks like a senior advisor who's done the work for you: *"14 leads went hot overnight · your agents drafted 9 follow-ups."* Confident, never hype-y.
- **Person.** Product UI addresses the operator as **"you / your"** ("your active agents," "your agents have 9 actions queued"). Agents are named third parties ("Outreach Agent drafted…"). Marketing copy uses imperative **"you"** ("Build the future of business technology," "Launch your cloud career").
- **Agents are characters.** Capitalised, role-named, and given live status: *Outreach Agent, Lead Scoring Agent, Scheduler Agent, Forecast Agent.* Always paired with a state verb — *Running · drafting 9 emails*, *Idle · next run 2:00 PM*.
- **Casing.** Sentence case for headings and body. **UPPERCASE only in mono micro-labels** (eyebrows, tags, table headers, timestamps): `NEXT BEST ACTION`, `AI · DRAFT`, `2 MIN AGO`.
- **Numbers do the talking.** Concrete metrics everywhere, but earned, not decorative: *68% reply rate, score 62 → 89, ₹2.4Cr pipeline, 86% to target, 92% confidence.* Indian numbering & currency: ₹1.49L, ₹2.4Cr, ₹99k. Times in IST.
- **Em-dashes & mid-dots.** Em-dash for asides in serif callouts; **·** (middot) as the universal separator in metadata rows: `LEAD-9842 · Bengaluru`, `Cohort 026 · 12 Jun`.
- **Quotes are shown verbatim.** Drafted emails / lead questions appear in quotation marks inside a left-bordered quote block: *"Hi Aarav — you asked about the multi-agent capstone…"*
- **Reasoning is transparent.** Agent recommendations always include a *why*: *"Re-engagement within 48h of a no-show converts 3.2× better. Draft is ready."* Confidence is stated as a %.
- **Vibe.** Editorial-meets-operational. The serif headline ("Let's *grow the cohort.*") gives warmth and intent; the mono labels and metrics give the machine credibility. Indian education context (cohorts, advisors, EMI/scholarship, WhatsApp) is woven in naturally.
- **Emoji.** Essentially none in chrome. A lone 🔥 appears on the "Hot" leads filter chip as a temperature cue — that's the only sanctioned emoji, and it's optional. Prefer the gradient ring/score system over emoji for status.

**Worked examples**
- Greeting: *"Good morning, Manikanta. Let's grow the cohort."* (serif, "grow the cohort" in italic)
- Insight banner: *"Lead Scoring Agent: 14 leads crossed the 'hot' threshold overnight. 9 already have drafted follow-ups waiting — approving them now could save ~3 hours and recover an est. ₹6.2L in pipeline."*
- NBA card: *"Send the 'agentic capstone walkthrough' re-engagement email now — Aarav opens email at ~9 PM IST."* + *"92% confidence."*
- Activity line: *"Scheduler Agent booked a demo for Karthik Nair — Wed 31 May · 7:00 PM IST with advisor Priya. Calendar invite sent + WhatsApp confirmation."*

---

## 4. Visual foundations

The defining feeling: **warm editorial software** — a linen-paper canvas, a near-black aubergine ink, one tri-colour gradient used like a jewel, and crisp mono micro-typography. It is the opposite of cold dark-mode SaaS.

### Colour
- **Canvas is warm, not white.** The app sits on `#F4F0EA` (warm linen). Cards are true white `#FFFFFF`; sidebars/panels are a softer warm `#FBF7F1`; wells/chips are `#F0EAE1`. White is a *raised* surface, never the page.
- **Ink is aubergine-black.** `#0E0A14` — a purple-leaning near-black, used for primary text and the dark icon rail. Secondary `#3B2E4A`, muted `#6B5E74`, hint `#A89DAC`.
- **The brand is a spectrum, not one colour.** Indigo `#1F3FCF` → violet `#6B1FB8` → magenta `#C7197A`, plus ochre `#C69A3A` as a fourth categorical. **Violet is the anchor**; magenta = "hot"/accent.
- **The gradient (`--grad`, 120°) is the signature** and is rationed: logo tile, primary/brand buttons, send button, score rings, the leading rule on the active nav item, gradient text on one word. Large fills use the **soft** gradient (8–10% opacity tints), never the full saturation as a page background.
- **Semantic:** ok `#2E9E6A`, warn `#D9534F`, amber `#E08A1E` (warm leads / needs-attention). Status tints are the hue at 8–12% alpha with the solid hue as text.

### Type
- **Instrument Serif** — display & emotional headlines (greetings, page titles, AI recommendation lines, big numbers' label). Always weight 400; italic for the emphasised phrase. Large and confident (40–58px for heroes).
- **Inter Tight** — all UI: body, buttons, table cells, card titles (600–700). Slightly condensed, tight letter-spacing (`-.005em` to `-.01em`) on titles.
- **JetBrains Mono** — every micro-label, status, timestamp, ID, count, score, currency-in-meta. Uppercase + wide tracking (`.06em–.16em`) for eyebrows/tags; normal case for IDs. This mono layer is what makes it read as "machine/agent."
- Scale & specifics live in `colors_and_type.css`.

### Backgrounds & texture
- A faint **dotted grid** (`radial-gradient` 1px dots on 22px spacing at ~4% ink) masked by a radial ellipse so it fades at the edges — the only background texture. No photos, no illustrations, no mesh gradients. See `.bg-dotgrid`.
- Topbar uses a **frosted** translucent canvas (`rgba(244,240,234,.82)` + `backdrop-filter: blur(12px)`) so content scrolls under it.

### Cards & elevation
- Cards: white, **1px `--rule` border**, radius **14–18px**, soft shadow `0 12px 40px rgba(14,10,20,.06)`. Borders carry most of the structure; shadows are gentle and only deepen on hover.
- The **dark "Next Best Action" card** inverts: `--ink` background, white text, with a blurred gradient blob bleeding from a corner (the one place the gradient glows large).
- "AI-touched" cards get a magenta tint border + faint ring (`.aiglow`): `border-color: rgba(199,25,122,.28); box-shadow: 0 0 0 1px rgba(199,25,122,.12)`.

### Corner radii
Pills `99px` (chips, filters, status, score rings, buttons-round); inputs/menus `10–11px`; cards `14–18px`; command box `22px`; small icon tiles `6–12px`. Generous and friendly, never sharp.

### Borders, rules & dividers
- Hairlines `#E6DFD5`; stronger/hover `#DCD3C7`. **Dashed** `--rule` for in-card sub-dividers (field rows, agent-run rows, kanban NBA strip). The CRM timeline uses a vertical gradient spine (indigo→violet→magenta→rule).

### Shadows
Outer only, low-alpha, purple-tinted (`rgba(14,10,20,.06–.09)`). Brand buttons add a violet glow `0 6px 16px rgba(107,31,184,.28–.40)`. Dark tooltips/menus use `rgba(0,0,0,.4)`. No inner shadows; no neumorphism.

### Transparency & blur
Used for (a) the frosted topbar, (b) status-tint backgrounds (hue @ 8–12% alpha), (c) the soft gradient washes, (d) gradient glow blobs (`filter: blur(80px)` behind dark cards). Glass is for chrome layered over content, not decoration.

### Motion
Quiet and quick. Transitions `.12s–.18s` on `cubic-bezier(.4,0,.2,1)`. Hover lifts cards `translateY(-2px)` + a touch more shadow; chips lift `-1px` and adopt the violet border/text. The only loop is a 2s **pulse** on live "agent active" status dots (opacity 1↔.45). No bounces, no parallax, no spinners-as-decoration.

### Hover / press states
- **Buttons (light):** hover → fill shifts to `--warm`. **Primary (ink):** hover → `#241a2e`. **Brand/gradient:** keep gradient, deepen glow.
- **Chips/filters:** hover → border `--rule2` or violet; active/selected → ink fill, white text (filters) or warm2 fill (nav).
- **Rows:** hover → `--warm` background; the trailing "→" go-button gains a violet border + violet glyph.
- **Nav/rail items:** active → warm2 fill + a 3px gradient bar pinned to the left edge.
- Press: rely on the quick color/elevation change; no explicit shrink.

### Layout
- App shell is a **3-column grid**: `66px` icon rail (dark) · `280px` sidebar (warm) · fluid main. Collapses to rail + main < 1080px.
- Sticky frosted topbar per view. Content columns are **centred and max-width-capped** (home ~920px) for an editorial measure; tables/boards go full-width.
- Record view splits `1.7fr / 1fr` (main timeline / warm aside).
- Iconography sits on a 1.7–1.9 stroke. Generous padding; nothing cramped.

---

## 5. Iconography

- **System:** custom **line icons drawn inline as SVG**, 24×24 viewBox, `fill:none; stroke:currentColor; stroke-width:1.7–2; stroke-linecap/linejoin:round`. They are a **Lucide/Feather-style** stroke set (home, users, bar-chart, send/paper-plane, clock, message, settings-gear, sparkle/star, check, etc.). Rendered 14–20px.
- The recurring "agent / AI" glyph is a **4-point sparkle-star** (`M12 2l2 7h7l-5.5 4 2 7…`) and a **paper-plane** (`M22 2L11 13…`) for outreach — these two are the product's signature marks.
- **No icon font, no PNG icons, no emoji icons.** (Lone optional 🔥 on the Hot filter — see Content.)
- **Recommendation for new work:** use **Lucide** (CDN: `https://unpkg.com/lucide@latest`) — it matches the existing stroke weight and round caps almost exactly, so reconstructions stay consistent. Flag any glyph you add that isn't in Lucide.
- **Logo / brand mark:** `assets/edify-logo-maze.png` — a multicolour circular "maze/orbit" mark (Google-palette rings, transparent bg, 140×128). In the CRM the rail uses a simplified **single-stroke leaf/orbit glyph** on the gradient tile rather than this full-colour mark. Both are valid; the maze mark is the corporate logo, the leaf glyph is the product's compact app icon.

---

## 6. Index / manifest

**Root**
- `README.md` — this file.
- `colors_and_type.css` — color + type tokens and base element styles (load first).
- `SKILL.md` — Agent-Skill front-matter so this folder is usable in Claude Code.

**Folders**
- `assets/` — logos & brand imagery (`edify-logo-maze.png`).
- `fonts/` — local woff2 copies (Instrument Serif, Inter Tight, JetBrains Mono).
- `preview/` — small HTML specimen cards that populate the Design System tab (colors, type, components, etc.).
- `ui_kits/edify-crm/` — high-fidelity, click-through recreation of the Edify Agentic CRM: `index.html` + JSX components + its own README.
- `uploads/` — original source artifact + de-bundled copy + extracted assets.

> No slide template was provided, so `slides/` is intentionally omitted. Provide a deck and I'll add branded slide layouts.
