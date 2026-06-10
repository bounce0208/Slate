# Slate

A job list built for doctors — ward days, on-call cover, and take shifts. Runs as a PWA on your phone, works offline, and never sends your data anywhere.

Slate replaced three separate apps. The core insight was that the mental model is the same across every shift type: jobs to do, on patients, by location. One app handles all of it.

---

## What it does

**Concurrent contexts** — run a ward day and an on-call shift at the same time. Start your ward day at 9, receive an on-call handover at 4pm that sits ready in its own section, then pick it up at 5 when it becomes yours. Each context starts and ends independently and records separately for analytics.

**Tasks** — ward, bed, initials, hospital ID, type, priority, and status. Urgent tasks pin to the top within each context. Swipe right to mark done.

**Patient grouping** — tasks for the same bed cluster together automatically so the list works as a ward round job list as well as an on-call task manager.

**Bleep queue** — log bleeps as they come in, convert to tasks with one tap, shared across both contexts since you often carry multiple bleeps.

**Stale waiting flag** — tasks waiting over an hour get a gentle amber nudge (excluding TBAO, which are long by design).

**Handover** — add patients from the task view, fill in ceiling of care, resus status, situation, and jobs, then copy a structured summary. Hospital IDs carry through.

**Receive handover** — at the start of an on-call shift, log each patient sequentially as they're handed over. Situation and jobs become tasks; patients pre-populate the handover screen ready for the next handover out.

**Shift analytics** — builds up over time. Headline averages by context type (ward day, cover, take), then a full breakdown by exact ward combination so you can see how heavy a particular set of wards tends to be.

---

## Installing

**Android (Chrome):**
1. Open the URL in Chrome
2. Three-dot menu → Add to Home Screen
3. Runs fullscreen from your home screen

**iPhone (Safari):**
1. Open the URL in Safari — must be Safari, not Chrome
2. Share button → Add to Home Screen

Works offline once installed.

---

## First run

A short setup wizard runs on first launch — name, wards, base ward, and on-call shift types. Takes about a minute and configures the app for your hospital rather than anyone else's. Change your base ward in Settings when you rotate. Run the wizard again anytime from Settings → About.

---

## Data

Everything lives in your local storage. It never leaves your device.

Export a backup regularly: Settings → Export backup. Restore via Settings → Import backup. If you share the URL with colleagues, their data is completely separate — same URL, different device, different storage.

---

## Updates

When a new version is available the app downloads it in the background. A small notification appears: "Update ready — close and reopen." Close fully and reopen. Your data is unaffected.

---

*Built for NHS junior doctors. Not a medical device. Clinical decisions remain yours.*
