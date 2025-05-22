varying vec3 vPosition;

void main()
{
    float dis = distance(vPosition, vec3(0, 0, 0));
    
    gl_FragColor = vec4(vec3(1.0 - step(dis - 0.96, 0.0)), 1.0);
}