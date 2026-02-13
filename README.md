# Premium three.js Scroll Landing

A high-end interactive **3D landing page** built with **three.js + GSAP ScrollTrigger**.

- Fullscreen WebGL canvas
- Scroll-driven camera choreography across 4 sections
- Procedural studio environment lighting (no external HDR assets)
- Subtle particles + bloom + vignette + film grain
- Responsive + performance safeguards (pixelRatio clamp, adaptive FX)

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Customize

- Copy blocks + section structure: `src/main.ts`
- 3D scene / motion timeline: `src/scene/landing.ts`
- Hero object materials: `src/scene/objects/hero.ts`

## Notes

If you want it even more premium, the next upgrade is:
- Replace hero geometry with a GLB model
- Add a scroll-synced text fade / blur per section
- Add SSAO / DOF postprocessing
