varying vec2 vUv;
varying vec3 vPosition;
uniform float u_time;
attribute float speed;
void main()
{
    vUv = uv;
    vPosition = position;
    vec3 fixedPose = position;
    fixedPose.y += sin(u_time * speed) * 0.02;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(fixedPose, 1.0);
    gl_PointSize = 10.0;
}