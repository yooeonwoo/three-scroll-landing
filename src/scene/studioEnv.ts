import * as THREE from 'three'

// Procedural environment map: a studio-like gradient with soft hotspots.
// No external HDRI assets required.
export function buildStudioEnv(renderer: THREE.WebGLRenderer) {
  const size = 128
  const c = document.createElement('canvas')
  c.width = size
  c.height = size
  const ctx = c.getContext('2d')!

  // background gradient
  const g = ctx.createRadialGradient(size * 0.35, size * 0.25, 8, size * 0.5, size * 0.5, size * 0.75)
  g.addColorStop(0, 'rgba(240,240,255,0.95)')
  g.addColorStop(0.25, 'rgba(120,90,255,0.35)')
  g.addColorStop(0.55, 'rgba(10,12,18,0.35)')
  g.addColorStop(1, 'rgba(4,4,6,1.0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)

  // soft hotspots to mimic studio panels
  ctx.globalCompositeOperation = 'screen'
  const panel = (x: number, y: number, w: number, h: number, a: number) => {
    const lg = ctx.createLinearGradient(x, y, x + w, y + h)
    lg.addColorStop(0, `rgba(255,255,255,${a})`)
    lg.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = lg
    ctx.fillRect(x, y, w, h)
  }
  panel(size * 0.05, size * 0.08, size * 0.6, size * 0.35, 0.35)
  panel(size * 0.6, size * 0.35, size * 0.45, size * 0.35, 0.22)
  panel(size * 0.2, size * 0.55, size * 0.65, size * 0.45, 0.18)

  ctx.globalCompositeOperation = 'source-over'

  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true

  // PMREM for proper IBL
  const pmrem = new THREE.PMREMGenerator(renderer)
  pmrem.compileEquirectangularShader()

  const envRT = pmrem.fromEquirectangular(tex)
  tex.dispose()
  pmrem.dispose()

  return envRT.texture
}
