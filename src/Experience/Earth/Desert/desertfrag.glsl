uniform float width;
uniform float height;
uniform float depth;
varying vec3 vPosition;

void main() {
    vec3 st = vPosition / vec3(width, height, depth);
    vec3 firstColor = vec3(0.3, 0.2, 0.15);
    vec3 secColor = vec3(0, 0, 0);
    vec3 mixedColors = mix(firstColor, secColor, st.x - 0.4);
    gl_FragColor = vec4(mixedColors, 0.1);
}