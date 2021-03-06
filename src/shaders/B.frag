

varying vec2 coords;


void main()
{
    vec4 U=vec4(0.0);
    vec2 pos=coords*iResolution.xy;
     //R = iResolution.xy;
    time = iTime;
     Mouse = iMouse;
    //ivec2 p = ivec2(pos);
        
    // vec8 data = texelish(XT,VT,MT, pos); 
    
    particle P = getParticle( pos);
    
    
    if(P.M != 0.) //not vacuum
    {
        P=Simulation( P, pos);
    }
    
    
    // if(length(P.X - R*vec2(0.8, 0.1)) < 8. && mod(float(iFrame),1.0)==0.0) 
    // {
    //     P.X = pos;
    //     P.V = Dir(PI*0.5  + 0.3*sin(0.4*time));
    //     P.M = mix(P.M, fluid_rho, 0.4);
    //     P.C=vec3(0.0,0.9,1.0);
    // }

    // if(length(P.X - R*vec2(0.2, 0.1)) < 8.) 
    // {
    //     P.X = pos;
    //     P.V = Dir(PI*0.5 + 0.3*sin(0.3*time));
    //     P.M = mix(P.M, vec4(fluid_rho, 1.,0.0,1.0), 0.4);
    // }
    //  if(length(P.X - R*vec2(0.5, 0.9)) < 8.) 
    // {
    //     P.X = pos;
    //     P.V = Dir(-PI*0.5 + 0.3*sin(0.3*time));
    //     P.M = mix(P.M, vec4(fluid_rho, 1.,0.9,0.0), 0.4);
    // }
    float s=length(P.X-R*vec2(.5,.5))-min(R.x,R.y)/5.0<0.0?0.5:1.0;
    P.M*=pow(1.0-0.003*s+min(dot(normalize(P.X-R/2.0),P.V),0.0)*0.005*s,dt);
    U = saveParticle(P, pos);
    gl_FragColor=U;
}