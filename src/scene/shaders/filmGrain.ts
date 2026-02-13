export const FilmGrainShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    amount: { value: 0.04 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float amount;
    varying vec2 vUv;

    float rand(vec2 co){
      return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
    }

    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float n = rand(vUv * (1200.0 + time * 2.0)) - 0.5;
      // grain mostly in shadows
      float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      float shadowMask = smoothstep(0.8, 0.25, luma);
      c.rgb += n * amount * shadowMask;
      gl_FragColor = c;
    }
  `,
}
