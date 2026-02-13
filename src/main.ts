import './style.css'
import { initLanding } from './scene/landing'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="canvasWrap"><canvas id="c"></canvas></div>

  <header class="header">
    <div class="brand"><span class="brandDot"></span><span>BIOFOX</span></div>
    <nav class="nav">
      <a href="#s1">Intro</a>
      <a href="#s2">System</a>
      <a href="#s3">Detail</a>
      <a href="#s4">Build</a>
    </nav>
  </header>

  <div class="overlay">
    <section id="s1" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">3D Scroll Landing</div>
          <div class="h1">High‑end
          <br/>Interactive
          <br/>Motion.</div>
          <div class="sub">A premium, scroll-driven three.js experience: cinematic lighting, subtle particles, and smooth camera choreography. Built for product‑grade landing pages.</div>
          <div class="divider"></div>
          <span class="pill"><span class="pillDot"></span>GSAP ScrollTrigger • Postprocessing • Responsive</span>
        </div>

        <div class="card">
          <div class="cardTitle">Highlights</div>
          <ul class="cardList">
            <li><span>✦</span><span>Scroll‑timed camera path + object beats</span></li>
            <li><span>✦</span><span>Procedural studio environment lighting (no external HDR)</span></li>
            <li><span>✦</span><span>Bloom + vignette + film grain (subtle)</span></li>
            <li><span>✦</span><span>Performance clamp for pixel ratio & adaptive effects</span></li>
          </ul>
          <div class="divider"></div>
          <div class="small">Tip: try slow scrolling. The motion is authored like a luxury ad—tight, controlled, and purposeful.</div>
        </div>
      </div>
    </section>

    <section id="s2" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 02</div>
          <div class="h1">Studio
          <br/>Lighting
          <br/>System.</div>
          <div class="sub">A procedural environment + layered key/fill/rim setup gives a high‑end look. Materials are tuned for glossy metal and glass—without external assets.</div>
        </div>
        <div class="card">
          <div class="cardTitle">What you’re seeing</div>
          <ul class="cardList">
            <li><span>•</span><span>Metal ring with anisotropic-like highlights</span></li>
            <li><span>•</span><span>Glass orb with subtle dispersion feel</span></li>
            <li><span>•</span><span>Neon accent rim + micro particles</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s3" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 03</div>
          <div class="h1">Precision
          <br/>Motion
          <br/>Beats.</div>
          <div class="sub">Scroll controls the timeline. Each section triggers a deliberate beat: orbit, push‑in, tilt, and reveal. The motion curves are eased, not robotic.</div>
        </div>
        <div class="card">
          <div class="cardTitle">Interaction</div>
          <ul class="cardList">
            <li><span>•</span><span>Pointer adds subtle parallax</span></li>
            <li><span>•</span><span>Particles respond to scroll velocity</span></li>
            <li><span>•</span><span>Post FX adapts for performance</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s4" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 04</div>
          <div class="h1">Ship
          <br/>Ready
          <br/>Now.</div>
          <div class="sub">This project is a clean Vite setup. Drop in your own copy, brand palette, and model. The choreography stays. The result looks expensive.</div>
        </div>
        <div class="card">
          <div class="cardTitle">Run</div>
          <div class="small">
            <code>npm install</code><br/>
            <code>npm run dev</code><br/>
            <code>npm run build</code>
          </div>
          <div class="divider"></div>
          <div class="small">If you want: I can swap in your product model, brand typography, and copy blocks.</div>
        </div>
      </div>
    </section>
  </div>

  <div class="scrollHint"><span class="mouse"></span><span>Scroll</span></div>
`

initLanding(document.querySelector<HTMLCanvasElement>('#c')!)
