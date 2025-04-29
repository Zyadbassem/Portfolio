varying vec2 vUv;
varying vec3 vPosition;
uniform float height;
uniform float width;
uniform float u_time;
attribute float speed;

void main()
{
    vec3 st = vPosition / vec3(width, height, 10.0);
    vec2 centered = vec2(st.xy);
    vUv = uv;
    vPosition = position;
    vec3 holderPosition = position;
    holderPosition.y += sin(speed * u_time* 2.0);
    holderPosition.y > 1.0 ? holderPosition.y = 0.0 : holderPosition.y = holderPosition.y;
    
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(holderPosition, 1.0);
    gl_PointSize = 5.0;
}