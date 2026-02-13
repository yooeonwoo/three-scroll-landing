import * as THREE from 'three'

export function makeHeroObject() {
  const group = new THREE.Group()

  // Materials
  const metal = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#d6d7df'),
    metalness: 1,
    roughness: 0.18,
    clearcoat: 1,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.4,
  })

  const neon = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#8b5cf6'),
    metalness: 0.6,
    roughness: 0.22,
    emissive: new THREE.Color('#6d28d9'),
    emissiveIntensity: 0.35,
    clearcoat: 1,
    clearcoatRoughness: 0.18,
    envMapIntensity: 1.2,
  })

  const glass = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#a5b4fc'),
    metalness: 0,
    roughness: 0.08,
    transmission: 1,
    thickness: 0.9,
    ior: 1.55,
    transparent: true,
    opacity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1.25,
  })

  // Ring
  const ringGeo = new THREE.TorusGeometry(1.65, 0.14, 56, 220)
  const ring = new THREE.Mesh(ringGeo, metal)
  ring.rotation.x = Math.PI * 0.5
  ring.position.y = -0.05
  group.add(ring)

  // Accent ring
  const ring2Geo = new THREE.TorusGeometry(1.05, 0.06, 42, 220)
  const ring2 = new THREE.Mesh(ring2Geo, neon)
  ring2.rotation.x = Math.PI * 0.5
  ring2.rotation.y = Math.PI * 0.22
  ring2.position.y = 0.15
  group.add(ring2)

  // Torus Knot (hero)
  const knotGeo = new THREE.TorusKnotGeometry(0.72, 0.22, 220, 28)
  const knot = new THREE.Mesh(knotGeo, new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#f9fafb'),
    metalness: 0.9,
    roughness: 0.14,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 1.5,
  }))
  knot.position.set(0, 0.05, 0)
  group.add(knot)

  // Glass orb
  const orbGeo = new THREE.SphereGeometry(0.5, 80, 80)
  const orb = new THREE.Mesh(orbGeo, glass)
  orb.position.set(0.6, 0.05, 0.25)
  group.add(orb)

  // Small floating accents
  const accentGeo = new THREE.IcosahedronGeometry(0.12, 1)
  for (let i = 0; i < 9; i++) {
    const m = i % 2 === 0 ? metal : neon
    const a = new THREE.Mesh(accentGeo, m)
    const r = 2.2 + Math.random() * 0.7
    const ang = Math.random() * Math.PI * 2
    const y = (Math.random() - 0.5) * 1.2
    a.position.set(Math.cos(ang) * r * 0.35, y, Math.sin(ang) * r * 0.35)
    a.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    group.add(a)
  }

  group.scale.setScalar(1.1)

  return { group, ring, knot, orb }
}
