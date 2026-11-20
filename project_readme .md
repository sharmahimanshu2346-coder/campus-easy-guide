# 🧭 Campus Easy Guide — Accessible Campus Navigator (LPU)

An inclusive, WCAG AAA high-contrast campus navigation web application built for students—including wheelchair users and visually impaired individuals—to navigate Lovely Professional University (LPU) safely and independently.

---

## 🏗️ Architecture & Stack

* **Frontend & Accessibility:** Responsive web app built with **Semantic HTML5**, **Tailwind CSS**, and **Custom CSS** (`index.html`, `style.css`, `script.js`) following **WCAG AAA** standards:
  * High-contrast dark UI (`#000000` background with `#FACC15` yellow, `#4ADE80` green, and `#38BDF8` sky-blue accents)
  * `48px+` minimum touch targets across all interactive controls
  * `4px` high-visibility keyboard and TalkBack focus outlines
  * `aria-live` polite screen-reader announcement regions
* **Map & Routing Engine:** Interactive **2D SVG Campus & Indoor Map** (4 floor levels + zoom) powered by a graph-based weighted shortest-path (Dijkstra) routing engine that dynamically filters edges by mobility profile (**No Stairs**, **Audio Guide**, **Fastest**) and live obstacle status.
* **Voice & Multilingual APIs:** **Web Speech API** (`SpeechRecognition` & `SpeechSynthesis`) paired with a built-in **TalkBack focus reader** supporting **English**, **Hindi**, **Punjabi**, and **Hinglish**.

---

## 🔄 Approach — Step-by-Step Flow

1. **Profile & Language Setup:**
   User selects their mobility mode (**♿ No Stairs**, **🦯 Audio Guide**, **🚶 Fastest**) and preferred language (**Auto**, **English**, **हिंदी**, **ਪੰਜਾਬੀ**).
2. **Input Capture:**
   Start and destination locations are captured via natural voice commands (e.g., *"From Main Gate to Block 38"*, *"Block 34 se Food Court"*), the **Main Gate QR** trigger, manual dropdowns, or nearby daily essential filters.
3. **Constraint & Hazard Filtering:**
   Active obstacles (e.g., reporting *"Lift kharab hai"* to disable Lift B) dynamically penalize or block inaccessible stairs and out-of-service elevator edges in the routing graph.
4. **Route & Step Generation:**
   The shortest-path engine calculates the safest accessible path and outputs turn-by-turn instructions enriched with **Tactile & Audio Cues**.
5. **Live Execution:**
   The 2D SVG map updates the active route polyline and smoothly animates the pulsing **YOU** marker while **Active Navigation** tracks remaining distance, completion percentage (`% Done`), in-route voice rerouting, and arrival confirmation.

---

## 💡 Innovation — What Makes It Different

* **Live Obstacle Rerouting:** Unlike static campus maps, reporting a broken lift immediately recalculates a zero-stair ramp and backup-lift detour accompanied by high-contrast hazard alerts.
* **Multimodal & Multilingual UX:** Combines high-contrast visuals, tactile/audio cues, full **Describe Map** narration, and hands-free **English / Hindi / Punjabi / Hinglish** voice control.
* **All-in-One Guided Flow:** Integrates outdoor/indoor floor switching, daily student essentials (**Food Court**, **Tuck Shop**, **Washroom**, **Water & Rest**, **Medical Aid**), and live turn-by-turn progress on a single lightweight screen.

---

## ✅ Round 3 Live Deliverables

* **Working Accessibility & Language Header:** Toggleable **TalkBack** reader, **Audio** mute/unmute, **Auto / EN / HI / PA** selector, **Gate QR** scanner (with embedded real LPU Google Map), and **3 mobility modes**.
* **Live Multilingual Voice Commands & Presets:** Hands-free microphone input, one-tap multilingual command chips, and **Nearby Essentials** quick selection.
* **Interactive 2D SVG Campus Map:** Floor switcher (**Outdoor**, **Ground**, **Floor 1**, **Floor 2**), zoom in/out controls, and **Describe Map** audio overview.
* **Active Navigation View:** Google Maps-style **Start Route** button, live distance/progress tracking, full step audio readout, and live **Lift B Out-of-Service** rerouting demo.

---

## 📁 Project Structure & Setup

```text
accessible-campus-navigator/
├── index.html   # Semantic HTML5 markup, ARIA live regions, and 2D SVG campus map
├── style.css    # WCAG AAA high-contrast variables, 4px focus rings, and SVG animations
├── script.js    # Campus graph, Dijkstra routing engine, Web Speech API, and live simulation
└── README.md    # Project architecture, flow, and deliverables documentation
```

1. Keep `index.html`, `style.css`, and `script.js` in the same folder.
2. Open `index.html` in a modern browser—or serve via **VS Code Live Server** / `npx serve` to enable microphone permissions for `SpeechRecognition`.