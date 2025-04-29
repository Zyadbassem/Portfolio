#define PI 3.1415

varying vec2 vUv;
varying vec3 vPosition;
uniform float height;
uniform float width;
uniform float u_time;
uniform float u_speed;

//	Classic Perlin 2D Noise 
//	by Stefan Gustavson
//


void main()
{
    float normalizedSpeed = u_speed / 10.0;
    vec3 st = vPosition / vec3(width, height, 10.0);

    vec2 centered = vec2(st.xy);
    float color = 0.7 - (abs(centered.x) + centered.y);
    color = smoothstep(0.5, 1.0, color);
    vec3 firstColor = mix(vec3(0.98, 0.93, 0.28), vec3(1.0, 1.0, 1.0), normalizedSpeed);
    vec3 lastColor = mix(vec3(0.83 , 0.39, 0.21), vec3(0.23 , 0.11, 0.41), normalizedSpeed);
    vec3 colored = mix(lastColor, firstColor, color - 0.5);
    if (color < 0.5) discard;
    if (normalizedSpeed < 0.01) discard;
    gl_FragColor = vec4(colored, normalizedSpeed * 3.0);
    
}