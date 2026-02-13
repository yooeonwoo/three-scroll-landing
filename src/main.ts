import './style.css'
import { initLanding } from './scene/landing'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <div class="canvasWrap"><canvas id="c"></canvas></div>

  <header class="header">
    <div class="brand"><span class="brandDot"></span><span>BIOFOX</span></div>
    <nav class="nav">
      <a href="#s1">Science → Product</a>
      <a href="#s2">Mist</a>
      <a href="#s3">Before/After</a>
      <a href="#s4">Interact</a>
    </nav>
  </header>

  <div class="overlay">
    <section id="s1" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">BIOFOX • Scroll Experience</div>
          <div class="h1">Biology
          <br/>→ Product
          <br/>Formation</div>
          <div class="sub">DNA/RNA-like structures gather while you scroll—then converge into a premium “Cure Booster” bottle. No external assets: everything is procedural so it loads fast.</div>
          <div class="divider"></div>
          <span class="pill"><span class="pillDot"></span>three.js • GSAP ScrollTrigger • Mobile-first perf</span>
        </div>

        <div class="card">
          <div class="cardTitle">Beat 01</div>
          <ul class="cardList">
            <li><span>✦</span><span>Scientific particles → controlled convergence</span></li>
            <li><span>✦</span><span>Lux lighting + glass/metal materials</span></li>
            <li><span>✦</span><span>Scroll authored like a luxury ad</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s2" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 02</div>
          <div class="h1">Cap
          <br/>Open
          <br/>Mist Spray</div>
          <div class="sub">The bottle rotates, the cap lifts, and a mist burst fills the frame with a realistic particle spray. The motion is scroll-timed, not autoplay.</div>
        </div>
        <div class="card">
          <div class="cardTitle">Beat 02</div>
          <ul class="cardList">
            <li><span>•</span><span>Scroll controls cap lift + spray intensity</span></li>
            <li><span>•</span><span>Additive particles + soft sprite (procedural)</span></li>
            <li><span>•</span><span>Adaptive quality clamp on mobile</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s3" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 03</div>
          <div class="h1">Cells
          <br/>Touch
          <br/>→ Improve</div>
          <div class="sub">Regenerative “cells” ride the mist and touch a troubled skin visual. As they contact, redness fades into a calmer after-state via a masked transition.</div>
        </div>
        <div class="card">
          <div class="cardTitle">Beat 03</div>
          <ul class="cardList">
            <li><span>•</span><span>Before/After reveal shader (no heavy images)</span></li>
            <li><span>•</span><span>Contact-driven mask expansion</span></li>
            <li><span>•</span><span>Clean, premium pacing</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s4" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 04</div>
          <div class="h1">Full‑Screen
          <br/>Spray
          <br/>& Interact</div>
          <div class="sub">A final large-scale spray forms “BIOFOX”. Remaining particles float—tap/click to open an SNS link. (Currently wired to Instagram placeholder.)</div>
        </div>
        <div class="card">
          <div class="cardTitle">Interaction</div>
          <div class="small">Try clicking floating particles in the last scene.</div>
          <div class="divider"></div>
          <div class="small">Next: swap in real product photos/logo/copy anytime.</div>
        </div>
      </div>
    </section>
  </div>

  <div class="scrollHint"><span class="mouse"></span><span>Scroll</span></div>
`

initLanding(document.querySelector<HTMLCanvasElement>('#c')!)
