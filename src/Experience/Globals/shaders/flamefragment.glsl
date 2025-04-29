#define PI 3.1415

varying vec2 vUv;
varying vec3 vPosition;
uniform float height;
uniform float width;

//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//


void main()
{
    vec3 st = vPosition / vec3(width, height, 10.0);
    vec2 centered = vec2(st.xy);
    float color = 0.7 - (abs(centered.x) + centered.y);
    color = smoothstep(0.5, 1.0, color);
    vec3 firstColor = vec3(0.98, 0.93, 0.28);
    vec3 lastColor = vec3(0.83, 0.39, 0.21);
    vec3 colored = mix(lastColor, firstColor, color - 0.5);
    if (color < 0.5) discard;
    gl_FragColor = vec4(colored, color);
    
}