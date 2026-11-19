# Browser verification — 19 November 2026

The first build and final production build pass with Vite. The lazily loaded Three.js/FBX chunk is larger than Vite's advisory 500kB threshold; it is loaded only when Alison approaches the viewport.

Browser checks in the in-app browser:
- Default printer and folder query each render exactly one banner.
- Receipt feed uses 2600ms physical translation, with a latest-selection animation cancellation policy.
- Rapid selection from cyber security to digital marketing leaves the digital marketing receipt selected.
- All eight widths checked for horizontal overflow: 1920, 1440, 1280, 1024, 820, 768, 390 and 320. All pass after correcting the mobile printer grid.
- Desktop, mobile, folder and Alison screenshots visually inspected.
- All twelve Alison scenarios advanced through three customer responses to their final handover.
- 3D renderer reports ready and shows the properly posed professional character. No console errors observed.
- Customer tab selection, ArrowRight selection and associated panel verified.
- Navigation Escape dismissal verified.
- Contextual enquiry preselects Business IT support. Required form fields, preview result and explicit nothing-sent state verified with fictional test data.
- Escape closes enquiry and restores focus to its invoking control.

The CSS reduced-motion rule and initial matchMedia branch render finished paper without feed. Manual motion pause also completes an active feed. No audio is started. A full external WCAG audit has not been performed.

The original checkout had no remote. GitHub Pages publication is configured in the root workflow. Live submission, voice clips and live integrations remain out of scope.
