import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

import { buildStudioEnv } from './studioEnv'
import { makeHeroObject } from './objects/hero'
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
  const hero = makeHeroObject()
  scene.add(hero.group)

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
  }

  // Create a single scroll timeline and pin overlay
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.1,
    },
  })

  // Beat 1 (Intro)
  tl.to(camera.position, { x: 0.25, y: 0.7, z: 5.3 }, 0)
  tl.to(hero.group.rotation, { y: Math.PI * 0.35, x: 0.1 }, 0)
  tl.to(hero.ring.rotation, { z: Math.PI * 0.35 }, 0)

  // Beat 2 (Section 02)
  tl.to(camera.position, { x: -0.55, y: 0.35, z: 4.35 }, 0.25)
  tl.to(hero.group.rotation, { y: Math.PI * 0.95, x: -0.15 }, 0.25)
  tl.to(hero.orb.position, { y: 0.25 }, 0.25)

  // Beat 3 (Section 03)
  tl.to(camera.position, { x: 0.25, y: 0.15, z: 3.35 }, 0.55)
  tl.to(hero.group.rotation, { y: Math.PI * 1.55, x: 0.25 }, 0.55)
  tl.to(hero.knot.rotation, { x: Math.PI * 0.75, y: Math.PI * 0.25 }, 0.55)

  // Beat 4 (Section 04)
  tl.to(camera.position, { x: 0.0, y: 0.55, z: 2.65 }, 0.82)
  tl.to(hero.group.rotation, { y: Math.PI * 2.05, x: 0.05 }, 0.82)
  tl.to(hero.group.position, { y: -0.15 }, 0.82)

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
    hero.group.rotation.y += (px - hero.group.rotation.y * 0.0) * 0.02
    hero.group.rotation.x += (-py - hero.group.rotation.x * 0.0) * 0.02

    // hero idle motion
    hero.group.position.y = -0.05 + Math.sin(state.t * 0.8) * 0.03
    hero.orb.position.y = 0.05 + Math.sin(state.t * 1.2) * 0.06
    hero.knot.rotation.z += dt * 0.15

    // particles
    particles.material.uniforms.uTime.value = state.t
    particles.material.uniforms.uScrollV.value = THREE.MathUtils.clamp(Math.abs(state.scrollV) * 3.0, 0, 1)

    // film grain time
    grain.uniforms['time'].value = state.t

    composer.render()
    requestAnimationFrame(tick)
  }
  tick()
}
