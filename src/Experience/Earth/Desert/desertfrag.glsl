uniform float width;
uniform float height;
uniform float depth;
varying vec3 vPosition;

void main() {
    vec3 st = vPosition / vec3(width, height, depth);
    vec3 firstColor = vec3(0.55, 0.29, 0.14);
    vec3 secColor = vec3(0.85, 0.68, 0.09);
    vec3 mixedColors = mix(firstColor, secColor, st.x);
    gl_FragColor = vec4(mixedColors, 1.0);
}