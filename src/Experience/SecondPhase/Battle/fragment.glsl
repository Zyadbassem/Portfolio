varying vec3 vPosition;
uniform bool u_invert;
uniform vec3 u_color;

void main() {
    vec3 mixedColor = mix(vec3(0.0, 0.0, 0.0), u_color, vPosition.x + 0.5);
    if(u_invert)
    {
        mixedColor = mix(u_color, vec3(0.0, 0.0, 0.0), vPosition.x + 0.5);
    }
    gl_FragColor = vec4(mixedColor, 1.0);
}