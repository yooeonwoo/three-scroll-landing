export const ParticlesShader = {
  vertex: /* glsl */`
    attribute float aSize;
    uniform float uTime;
    uniform float uScrollV;
    varying float vFade;
    varying float vSeed;

    float hash(float n){ return fract(sin(n)*43758.5453123); }

    void main(){
      vec3 p = position;
      float id = float(gl_VertexID);
      vSeed = hash(id * 0.173);

      // subtle drift + scroll energy
      float drift = sin(uTime * 0.6 + id * 0.02) * 0.06;
      p.x += drift;
      p.y += cos(uTime * 0.5 + id * 0.01) * 0.04;

      // depth breathing
      p.z += sin(uTime * 0.35 + id * 0.015) * 0.08;

      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;

      float size = aSize * (1.0 + uScrollV * 0.8);
      gl_PointSize = size * (180.0 / -mv.z);

      // fade with depth
      vFade = smoothstep(0.0, 1.0, (-mv.z - 1.0) / 8.0);
    }
  `,
  fragment: /* glsl */`
    precision highp float;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying float vFade;
    varying float vSeed;

    void main(){
      vec2 uv = gl_PointCoord - 0.5;
      float d = length(uv);
      float a = smoothstep(0.5, 0.0, d);
      vec3 col = mix(uColorA, uColorB, vSeed);

      // gentle sparkle
      float sparkle = smoothstep(0.9, 1.0, sin(vSeed * 120.0));
      col += sparkle * 0.15;

      gl_FragColor = vec4(col, a * 0.45 * vFade);
    }
  `,
}
