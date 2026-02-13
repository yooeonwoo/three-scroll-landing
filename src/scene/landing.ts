import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

import { buildStudioEnv } from './studioEnv'
import { makeBiofoxShowcase } from './objects/biofoxShowcase'
import { makeParticles } from './objects/particles'
import { VignetteShader } from './shaders/vignette'
import { FilmGrainShader } from './shaders/filmGrain'


gsap.registerPlugin(ScrollTrigger)

export function initLanding(canvas: HTMLCanvasElement) {
  // Renderer
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  // Scene
  const scene = new THREE.Scene()

  // Camera
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 120)
  camera.position.set(0, 0.5, 6.5)

  // Lighting: procedural studio
  const env = buildStudioEnv(renderer)
  scene.environment = env

  const key = new THREE.DirectionalLight(0xffffff, 2.2)
  key.position.set(3.5, 4.2, 2.5)
  scene.add(key)

  const fill = new THREE.DirectionalLight(0x99ccff, 0.8)
  fill.position.set(-4.0, 1.5, 2.0)
  scene.add(fill)

  const rim = new THREE.DirectionalLight(0x7c3aed, 1.6)
  rim.position.set(2.0, 0.5, -5.0)
  scene.add(rim)

  const ambient = new THREE.AmbientLight(0xffffff, 0.12)
  scene.add(ambient)

  // Content
  const show = makeBiofoxShowcase()
  scene.add(show.group)

  const particles = makeParticles()
  scene.add(particles)

  // Postprocessing
  const composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.65, 0.85)
  composer.addPass(bloom)

  const vignette = new ShaderPass(VignetteShader)
  vignette.uniforms['darkness'].value = 0.9
  vignette.uniforms['offset'].value = 1.15
  composer.addPass(vignette)

  const grain = new ShaderPass(FilmGrainShader)
  grain.uniforms['amount'].value = 0.045
  grain.uniforms['time'].value = 0
  composer.addPass(grain)

  // Interaction
  const pointer = new THREE.Vector2(0, 0)
  window.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    pointer.set(x, y)
  })

  // Click interaction for finale particles
  const raycaster = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  window.addEventListener('pointerdown', (e) => {
    ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
    raycaster.setFromCamera(ndc, camera)
    const hits = raycaster.intersectObjects(show.clickable, false)
    if (hits.length) {
      const url = (hits[0].object.userData.url as string) || 'https://instagram.com/'
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  })

  // Layout / resize
  const sizes = { w: 1, h: 1, dpr: 1 }
  const resize = () => {
    sizes.w = window.innerWidth
    sizes.h = window.innerHeight
    sizes.dpr = Math.min(window.devicePixelRatio || 1, 1.75)

    camera.aspect = sizes.w / sizes.h
    camera.updateProjectionMatrix()

    renderer.setPixelRatio(sizes.dpr)
    renderer.setSize(sizes.w, sizes.h)

    composer.setPixelRatio(sizes.dpr)
    composer.setSize(sizes.w, sizes.h)

    bloom.setSize(sizes.w, sizes.h)

    // adaptive FX: reduce bloom on small devices
    const minSide = Math.min(sizes.w, sizes.h)
    const perf = minSide < 680 ? 0.8 : 1.0
    bloom.strength = 0.55 * perf
    bloom.radius = 0.65
    grain.uniforms['amount'].value = 0.045 * perf
  }
  window.addEventListener('resize', resize)
  resize()

  // Scroll choreography
  const state = {
    t: 0,
    scrollV: 0,
    mistT: 0,
  }

  // Single scroll timeline
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.15,
    },
  })

  // 0.00 - 0.28 : Biology structures converge → product forms
  tl.to(camera.position, { x: 0.15, y: 0.65, z: 6.0 }, 0)
  tl.to(show.bio.rotation, { y: Math.PI * 0.65, x: 0.08 }, 0)
  tl.to(show.bio.position, { x: -0.25, y: 0.1, z: 0.2 }, 0)

  // converge molecules
  tl.to(show.mol.position, { x: 0.0, y: 0.0, z: 0.0 }, 0.10)
  tl.to(show.product.rotation, { y: Math.PI * 0.35 }, 0.12)
  tl.to(show.product.scale, { x: 1, y: 1, z: 1 }, 0.12)

  // transition: bio fades back + product becomes the hero
  tl.to(show.bio.scale, { x: 0.6, y: 0.6, z: 0.6 }, 0.22)
  tl.to(show.bio.position, { x: -1.4, y: 0.15, z: -0.4 }, 0.22)
  tl.to(camera.position, { x: 0.05, y: 0.55, z: 4.6 }, 0.22)

  // 0.28 - 0.56 : Product rotate + cap opens + mist sprays
  tl.to(camera.position, { x: -0.35, y: 0.25, z: 3.85 }, 0.30)
  tl.to(show.product.rotation, { y: Math.PI * 1.05, x: -0.08 }, 0.30)
  tl.to(show.cap.position, { y: 1.52 }, 0.36)
  tl.to(show.mistMat, { opacity: 0.75 }, 0.40)
  tl.to(state, { mistT: 1.0 }, 0.40)

  // 0.56 - 0.82 : Mist delivers cells → Before/After improves
  tl.to(camera.position, { x: 0.35, y: 0.18, z: 3.25 }, 0.58)
  tl.to(show.product.rotation, { y: Math.PI * 1.65, x: 0.06 }, 0.58)
  tl.to(show.baPlane.position, { x: 1.65, y: 0.15, z: -0.2 }, 0.58)
  // reveal improvement (0 → 1 grows outward)
  tl.to(show.baMat.uniforms.uReveal, { value: 0.28 }, 0.66)
  tl.to(show.baMat.uniforms.uReveal, { value: 0.62 }, 0.74)
  tl.to(show.baMat.uniforms.uReveal, { value: 0.92 }, 0.80)

  // 0.82 - 1.00 : Full screen spray + BIOFOX forms + clickable particles
  tl.to(camera.position, { x: 0.0, y: 0.5, z: 2.75 }, 0.84)
  tl.to(show.product.position, { y: -0.35 }, 0.84)
  tl.to(show.mistMat, { opacity: 1.0 }, 0.86)
  tl.to(show.logo.material as any, { opacity: 1.0 }, 0.90)
  tl.to(state, { mistT: 2.0 }, 0.86)

  // Scroll velocity (for subtle particle response)
  let lastScrollY = window.scrollY
  let lastT = performance.now()
  const onScroll = () => {
    const y = window.scrollY
    const t = performance.now()
    const dt = Math.max(16, t - lastT)
    state.scrollV = (y - lastScrollY) / dt
    lastScrollY = y
    lastT = t
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  // RAF
  const clock = new THREE.Clock()
  const tick = () => {
    const dt = clock.getDelta()
    state.t += dt

    // pointer parallax (subtle)
    const px = pointer.x * 0.35
    const py = pointer.y * 0.2
    // subtle parallax on the whole showcase
    show.group.rotation.y += (px - show.group.rotation.y) * 0.02
    show.group.rotation.x += (-py - show.group.rotation.x) * 0.02

    // idle motion (keep premium, not floaty)
    show.product.position.y += (Math.sin(state.t * 0.7) * 0.012 - show.product.position.y * 0.0)
    show.product.rotation.z = Math.sin(state.t * 0.35) * 0.02

    // animate clickable floaters
    for (const o of show.clickable) {
      const p = o.position
      const phase = (o.userData.phase as number) || 0
      p.y += Math.sin(state.t * 0.9 + phase) * 0.0008
      o.rotation.y += dt * 0.25
    }

    // mist simulation (cheap ballistic + reset)
    const pos = show.mist.geometry.getAttribute('position') as THREE.BufferAttribute
    const vel = show.mist.geometry.getAttribute('aVel') as THREE.BufferAttribute
    const strength = THREE.MathUtils.clamp(state.mistT, 0, 2)
    for (let i = 0; i < pos.count; i++) {
      const i3 = i * 3
      const x = pos.array[i3 + 0] as number
      const y = pos.array[i3 + 1] as number
      const z = pos.array[i3 + 2] as number

      // integrate
      const vx = (vel.array[i3 + 0] as number) * (0.35 + strength * 0.45)
      const vy = (vel.array[i3 + 1] as number) * (0.35 + strength * 0.55)
      const vz = (vel.array[i3 + 2] as number) * (0.45 + strength * 0.65)

      pos.array[i3 + 0] = x + vx * dt
      pos.array[i3 + 1] = y + vy * dt
      pos.array[i3 + 2] = z + vz * dt

      // reset when too far
      if (pos.array[i3 + 1] > 4.2 || pos.array[i3 + 2] < -6.0 || Math.abs(pos.array[i3 + 0]) > 5.5) {
        pos.array[i3 + 0] = (Math.random() - 0.5) * 0.08
        pos.array[i3 + 1] = 0.95 + Math.random() * 0.06
        pos.array[i3 + 2] = 0.25 + Math.random() * 0.06
      }
    }
    pos.needsUpdate = true

    // particles (background)
    particles.material.uniforms.uTime.value = state.t
    particles.material.uniforms.uScrollV.value = THREE.MathUtils.clamp(Math.abs(state.scrollV) * 3.0, 0, 1)

    // film grain time
    grain.uniforms['time'].value = state.t

    composer.render()
    requestAnimationFrame(tick)
  }
  tick()
}
