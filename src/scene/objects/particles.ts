import * as THREE from 'three'
import { ParticlesShader } from '../shaders/particles'

export function makeParticles() {
  const count = 1800
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    // elongated depth, centered around hero
    positions[i3 + 0] = (Math.random() - 0.5) * 6.0
    positions[i3 + 1] = (Math.random() - 0.5) * 3.4
    positions[i3 + 2] = (Math.random() - 0.5) * 6.0
    sizes[i] = 0.5 + Math.random() * 1.6
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    vertexShader: ParticlesShader.vertex,
    fragmentShader: ParticlesShader.fragment,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uScrollV: { value: 0 },
      uColorA: { value: new THREE.Color('#7c3aed') },
      uColorB: { value: new THREE.Color('#06b6d4') },
    },
  })

  const points = new THREE.Points(geo, material)
  points.frustumCulled = false
  return points
}
