
varying vec2 coords;

uniform sampler2D iChannel1;
uniform vec2 screenTexelSize;
#define ch1 iChannel1

#define downscale (texelSize.x/screenTexelSize.x)

particle getSPart(vec2 bigpos)
{
    ivec2 p = ivec2(bigpos);
    particle P = getParticle(vec2(p));
    P.X=P.X-vec2(p)+vec2(p);
    return P;
}

particle getP(vec2 pos)
{
    
    particle P;
    P.X=vec2(0.0);
    P.V=vec2(0.0);
    P.M=0.0;
    P.C=vec3(0.0);
    float contrib=0.0;
    //particle render
    vec4 rho = vec4(0.);
    range(i, 0, 1) range(j, 0, 1)
    {
        vec2 ij = vec2(i,j);
        // vec8 data = texelish(XT,VT,MT, pos + ij);
        particle P0 = getParticle( vec2(floor(pos.x-0.5),floor(pos.y-0.5)) + ij+0.5);

        vec2 x0 =vec2(floor(pos.x-0.5),floor(pos.y-0.5)) + ij+0.5; //update position
        //how much mass falls into this pixel
        float ncontrib=max(1.0-abs(x0.x-pos.x),0.0)*max(1.0-abs(x0.y-pos.y),0.0);//*G((pos - x0)/0.75); 
        contrib+=ncontrib;
        P.X+=P0.X*ncontrib;
        P.V+=P0.V*ncontrib;
        P.M+=P0.M*ncontrib;
        P.C+=P0.C*ncontrib;
    }
    if(contrib>0.0){
    P.X/=contrib;
    P.V/=contrib;
    P.M/=contrib;
    P.C/=contrib;
    }
    return P;
}

vec4 getC(vec2 pos)
{
    vec4 U=vec4(0.0);
    //R = iResolution.xy;
    time = iTime;
    ivec2 p = ivec2(pos);

    // vec8 data = texelish(XT,VT,MT, pos);
    particle P = getP(pos);
    return vec4(P.V, P.M,1.0)*1.5;
    
    //particle render
    vec4 rho = vec4(0.);
    range(i, -1, 1) range(j, -1, 1)
    {
        vec2 ij = vec2(i,j);
        // vec8 data = texelish(XT,VT,MT, pos + ij);
        particle P0 = getP( pos + ij);

        vec2 x0 = P0.X; //update position
        //how much mass falls into this pixel
        rho += 1.*vec4(P0.V, P0.M,1.0)*G((pos - x0)/0.75); 
    }
    
    U=rho;
    return U;
}

vec3 hsv2rgb( in vec3 c )
{
    vec3 rgb = clamp( abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0 );

	rgb = rgb*rgb*(3.0-2.0*rgb); // cubic smoothing	

	return c.z * mix( vec3(1.0), rgb, c.y);
}

vec3 mixN(vec3 a, vec3 b, float k)
{
    return sqrt(mix(a*a, b*b, clamp(k,0.,1.)));
}

vec4 V(vec2 p)
{
    return getC(p);
    return pixel(ch1, p);
}
vec3 tanh3(vec3 g){
    return 1.0/(1.0+exp(-2.0*g))*2.0-1.0;
}

void main()
{
    vec4 col=vec4(0.0);
	 //R = iResolution.xy;
    time = iTime; 
    vec2 pos=coords*iResolution.xy;
   // pos = R*0.5 + (pos-R/2.0)*2.0;
    ivec2 p = ivec2(pos);
    
    // vec8 data = texelish(XT,VT,MT, pos);
    particle P = getP(pos);

    //border render
    vec3 Nb = bN(P.X);
    float bord = smoothstepp(1.,0.,border(pos)-border_h);
    
    vec3 dx = vec3(-1., 0., 1.);

    vec4 rho = (V(pos)+V(pos + dx.zy)+V(pos + dx.xy)+V(pos + dx.yz)+V(pos + dx.yx))/5.0;
    float g=1.0;
    vec4 grad = -1.0/g*vec4(V(pos + dx.zy*g).zw - V(pos + dx.xy*g).zw,
                         V(pos + dx.yz*g).zw - V(pos + dx.yx*g).zw);
    vec2 N = pow(length(grad.xz),0.2)*normalize(grad.xz+1e-5);
    float specular = pow(max(dot(N, Dir(1.4)), 0.), 3.5);
    float specularb = G(0.4*(Nb.zz - border_h))*pow(max(dot(Nb.xy, Dir(1.4)), 0.), 3.);
    
    float a = pow(smoothstepp(fluid_rho*0., fluid_rho*2., rho.z),0.1);
    float b = exp(-1.7*smoothstepp(fluid_rho*1., fluid_rho*7.5, rho.z));
    vec3 col0 = P.C;//vec3(1., 0.5, 0.);
    vec3 col1 = P.C;//vec3(0.1, 0.4, 1.);
	vec3 fcol =P.C;// mixN(col0, col1, tanh3(vec3(3.*(rho.w - 0.7))).x*0.5 + 0.5);
    // Output to screen
    col = vec4(3.);
    col.xyz = mixN(col.xyz, fcol.xyz*(1.5*b + specular*5.), a);
    col.xyz = mixN(col.xyz, 0.*vec3(0.5,0.5,1.), bord);
    col.xyz = tanh3(col.xyz);
    col.w=1.0;
    //col.xyz=P.C*P.M;
    // col.xyz=vec3(P.V+0.5,0.0);
    // col.xy=P.X-pos;
    // col.x=P.M/M_M;
    gl_FragColor=col;
   // particle Pg = getParticle(vec4(1.0,0.5,0.0,1.0), pos);
    //gl_FragColor= vec4(saveParticle(Pg, pos).xy,0.0,1.0);
//  gl_FragColor=vec4(vec3(P.M.x),1.0);
}