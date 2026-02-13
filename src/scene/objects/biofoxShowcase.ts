import * as THREE from 'three'

function makeSoftSpriteTexture(size = 128) {
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')!

  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.25, 'rgba(255,255,255,0.65)')
  g.addColorStop(0.55, 'rgba(255,255,255,0.20)')
  g.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
  tex.anisotropy = 4
  return tex
}

function makeLabelTexture(text: string) {
  const c = document.createElement('canvas')
  c.width = 1024
  c.height = 256
  const ctx = c.getContext('2d')!

  ctx.clearRect(0, 0, c.width, c.height)
  // background (transparent)

  ctx.font = '700 140px system-ui, -apple-system, Segoe UI, Roboto, Arial'
  ctx.fillStyle = 'rgba(255,255,255,0.95)'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // subtle glow
  ctx.shadowColor = 'rgba(124,58,237,0.55)'
  ctx.shadowBlur = 24
  ctx.fillText(text, c.width / 2, c.height / 2)

  // crisp pass
  ctx.shadowBlur = 0
  ctx.fillStyle = 'rgba(255,255,255,0.98)'
  ctx.fillText(text, c.width / 2, c.height / 2)

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

function makeTroubleTexture(kind: 'before' | 'after') {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 512
  const ctx = c.getContext('2d')!

  // base skin tone
  const base = kind === 'before' ? '#f7d7c6' : '#f9e3d8'
  ctx.fillStyle = base
  ctx.fillRect(0, 0, c.width, c.height)

  // subtle grain
  const img = ctx.getImageData(0, 0, c.width, c.height)
  const d = img.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * (kind === 'before' ? 16 : 10)
    d[i] = Math.min(255, Math.max(0, d[i] + n))
    d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n))
    d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n))
  }
  ctx.putImageData(img, 0, 0)

  if (kind === 'before') {
    // redness spots
    for (let i = 0; i < 160; i++) {
      const x = Math.random() * c.width
      const y = Math.random() * c.height
      const r = 6 + Math.random() * 22
      const a = 0.04 + Math.random() * 0.07
      ctx.fillStyle = `rgba(210,60,90,${a})`
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }
  } else {
    // calm highlights
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * c.width
      const y = Math.random() * c.height
      const r = 10 + Math.random() * 30
      const a = 0.02 + Math.random() * 0.04
      ctx.fillStyle = `rgba(255,255,255,${a})`
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

const BeforeAfterShader: any = {
  uniforms: {
    uBefore: { value: null },
    uAfter: { value: null },
    uReveal: { value: 0 },
    uCenter: { value: new THREE.Vector2(0.5, 0.5) },
    uSoftness: { value: 0.18 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: /* glsl */`
    varying vec2 vUv;
    uniform sampler2D uBefore;
    uniform sampler2D uAfter;
    uniform float uReveal;
    uniform vec2 uCenter;
    uniform float uSoftness;

    // cheap hash noise
    float hash(vec2 p){
      p = fract(p*vec2(123.34, 456.21));
      p += dot(p, p+34.345);
      return fract(p.x*p.y);
    }

    void main(){
      vec4 b = texture2D(uBefore, vUv);
      vec4 a = texture2D(uAfter, vUv);

      float d = distance(vUv, uCenter);
      // reveal grows from center outward with soft edge + a touch of noise
      float n = hash(vUv * 12.0) * 0.04;
      float edge = smoothstep(uReveal + uSoftness + n, uReveal - uSoftness + n, d);
      vec4 col = mix(b, a, edge);

      // subtle vignette on the card
      float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
      col.rgb *= mix(0.92, 1.0, v);

      gl_FragColor = col;
    }
  `,
}

export function makeBiofoxShowcase() {
  const group = new THREE.Group()

  // Palette
  const ACCENT = new THREE.Color('#7c3aed')
  const ICE = new THREE.Color('#c7d2fe')

  // Materials
  const metal = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#d6d7df'),
    metalness: 1,
    roughness: 0.16,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 1.45,
  })

  const glass = new THREE.MeshPhysicalMaterial({
    color: ICE,
    metalness: 0,
    roughness: 0.07,
    transmission: 1,
    thickness: 0.9,
    ior: 1.55,
    transparent: true,
    opacity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.04,
    envMapIntensity: 1.3,
  })

  const accent = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#a78bfa'),
    metalness: 0.55,
    roughness: 0.22,
    emissive: ACCENT,
    emissiveIntensity: 0.28,
    clearcoat: 1,
    clearcoatRoughness: 0.16,
    envMapIntensity: 1.2,
  })

  // --- Section 1: bio structures
  const bio = new THREE.Group()
  group.add(bio)

  // DNA helix (two strands + rungs)
  const strandGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(
    Array.from({ length: 60 }, (_, i) => {
      const t = i / 59
      const ang = t * Math.PI * 8
      const x = Math.cos(ang) * 0.35
      const y = (t - 0.5) * 1.7
      const z = Math.sin(ang) * 0.35
      return new THREE.Vector3(x, y, z)
    })
  ), 220, 0.035, 12, false)

  const strand1 = new THREE.Mesh(strandGeo, accent)
  const strand2 = new THREE.Mesh(strandGeo, accent)
  strand2.scale.x = -1
  strand2.rotation.y = Math.PI
  bio.add(strand1, strand2)

  const rungGeo = new THREE.CapsuleGeometry(0.02, 0.55, 6, 14)
  const rungMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#eef2ff'),
    metalness: 0.25,
    roughness: 0.25,
    emissive: new THREE.Color('#ffffff'),
    emissiveIntensity: 0.02,
    envMapIntensity: 1.0,
  })
  const rungs = new THREE.InstancedMesh(rungGeo, rungMat, 24)
  const dummy = new THREE.Object3D()
  for (let i = 0; i < 24; i++) {
    const t = i / 23
    const ang = t * Math.PI * 8
    const y = (t - 0.5) * 1.65
    dummy.position.set(0, y, 0)
    dummy.rotation.z = ang
    dummy.updateMatrix()
    rungs.setMatrixAt(i, dummy.matrix)
  }
  rungs.frustumCulled = false
  bio.add(rungs)

  // Molecules
  const mol = new THREE.Group()
  const molGeo = new THREE.IcosahedronGeometry(0.07, 1)
  for (let i = 0; i < 42; i++) {
    const m = new THREE.Mesh(molGeo, i % 3 === 0 ? metal : accent)
    const r = 1.3 + Math.random() * 1.6
    const ang = Math.random() * Math.PI * 2
    const y = (Math.random() - 0.5) * 1.4
    m.position.set(Math.cos(ang) * r * 0.55, y, Math.sin(ang) * r * 0.55)
    m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    mol.add(m)
  }
  bio.add(mol)

  // --- Product bottle
  const product = new THREE.Group()
  product.visible = true
  product.position.set(0, -0.05, 0)
  group.add(product)

  // glass body
  const bodyGeo = new THREE.CylinderGeometry(0.42, 0.48, 1.65, 80, 1, true)
  const body = new THREE.Mesh(bodyGeo, glass)
  body.position.y = -0.15
  product.add(body)

  // inner liquid (slightly tinted)
  const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.385, 0.44, 1.35, 72), new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#93c5fd'),
    metalness: 0,
    roughness: 0.22,
    transmission: 0.65,
    thickness: 0.5,
    transparent: true,
    opacity: 0.65,
    envMapIntensity: 1.1,
  }))
  liquid.position.y = -0.23
  product.add(liquid)

  // shoulder
  const shoulder = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.42, 0.3, 72), glass)
  shoulder.position.y = 0.75
  product.add(shoulder)

  // nozzle
  const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.22, 36), metal)
  nozzle.position.y = 0.94
  product.add(nozzle)

  // cap (animated)
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.27, 0.55, 72), metal)
  cap.position.y = 1.14
  product.add(cap)

  // label plane
  const labelTex = makeLabelTexture('CURE BOOSTER')
  const labelMat = new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, opacity: 0.92 })
  const label = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.22), labelMat)
  label.position.set(0, 0.1, 0.49)
  product.add(label)

  // --- Mist spray (points)
  const mistGroup = new THREE.Group()
  group.add(mistGroup)

  const mistTex = makeSoftSpriteTexture(128)
  const mistMat = new THREE.PointsMaterial({
    map: mistTex,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: new THREE.Color('#dbeafe'),
    opacity: 0.0,
    size: 0.12,
    sizeAttenuation: true,
  })

  const MIST_COUNT = 1800
  const mistGeo = new THREE.BufferGeometry()
  const mistPos = new Float32Array(MIST_COUNT * 3)
  const mistVel = new Float32Array(MIST_COUNT * 3)
  for (let i = 0; i < MIST_COUNT; i++) {
    const i3 = i * 3
    mistPos[i3 + 0] = (Math.random() - 0.5) * 0.1
    mistPos[i3 + 1] = 0.95 + Math.random() * 0.05
    mistPos[i3 + 2] = 0.25 + Math.random() * 0.05

    const spread = 0.65
    mistVel[i3 + 0] = (Math.random() - 0.5) * spread
    mistVel[i3 + 1] = (Math.random() * 1.0 + 0.6) * 1.05
    mistVel[i3 + 2] = -Math.random() * 1.6 - 0.8
  }
  mistGeo.setAttribute('position', new THREE.BufferAttribute(mistPos, 3))
  mistGeo.setAttribute('aVel', new THREE.BufferAttribute(mistVel, 3))

  const mist = new THREE.Points(mistGeo, mistMat)
  mist.frustumCulled = false
  mistGroup.add(mist)

  // --- Before/After plane
  const beforeTex = makeTroubleTexture('before')
  const afterTex = makeTroubleTexture('after')
  const baMat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(BeforeAfterShader.uniforms),
    vertexShader: BeforeAfterShader.vertexShader,
    fragmentShader: BeforeAfterShader.fragmentShader,
    transparent: false,
  })
  baMat.uniforms.uBefore.value = beforeTex
  baMat.uniforms.uAfter.value = afterTex

  const baPlane = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 1.6, 1, 1), baMat)
  baPlane.position.set(1.95, 0.2, -0.35)
  baPlane.rotation.y = -0.18
  baPlane.visible = true
  group.add(baPlane)

  // --- Finale logo sprite
  const logoTex = makeLabelTexture('BIOFOX')
  const logoMat = new THREE.SpriteMaterial({ map: logoTex, transparent: true, opacity: 0.0, depthWrite: false })
  const logo = new THREE.Sprite(logoMat)
  logo.scale.set(2.6, 0.65, 1)
  logo.position.set(0, 0.25, -1.25)
  group.add(logo)

  // --- Interactive floating particles (spheres)
  const interact = new THREE.Group()
  group.add(interact)
  const clickable: THREE.Object3D[] = []
  const clickGeo = new THREE.SphereGeometry(0.08, 18, 18)
  const clickMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#e0e7ff'),
    metalness: 0.1,
    roughness: 0.12,
    transmission: 0.85,
    thickness: 0.4,
    transparent: true,
    opacity: 0.95,
    emissive: ACCENT,
    emissiveIntensity: 0.08,
    envMapIntensity: 1.1,
  })

  const urls = [
    'https://instagram.com/',
    'https://instagram.com/',
    'https://instagram.com/',
  ]

  for (let i = 0; i < 14; i++) {
    const m = new THREE.Mesh(clickGeo, clickMat)
    const r = 1.2 + Math.random() * 1.2
    const ang = Math.random() * Math.PI * 2
    const y = (Math.random() - 0.5) * 1.0
    m.position.set(Math.cos(ang) * r, y, -1.35 + Math.sin(ang) * 0.35)
    m.userData.url = urls[i % urls.length]
    m.userData.phase = Math.random() * Math.PI * 2
    interact.add(m)
    clickable.push(m)
  }

  // initial vis states (we animate via timeline)
  product.scale.setScalar(0.88)
  product.visible = true
  product.position.y = -0.08
  bio.position.y = 0.1
  bio.scale.setScalar(1)

  logo.visible = true

  return {
    group,
    bio,
    mol,
    product,
    cap,
    mistGroup,
    mist,
    mistMat,
    mistPos,
    mistVel,
    baPlane,
    baMat,
    logo,
    interact,
    clickable,
  }
}
