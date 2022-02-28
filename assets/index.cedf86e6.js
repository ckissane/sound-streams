var mn=Object.defineProperty;var nn=Object.getOwnPropertySymbols;var xn=Object.prototype.hasOwnProperty,hn=Object.prototype.propertyIsEnumerable;var en=(n,t,e)=>t in n?mn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,C=(n,t)=>{for(var e in t||(t={}))xn.call(t,e)&&en(n,e,t[e]);if(nn)for(var e of nn(t))hn.call(t,e)&&en(n,e,t[e]);return n};import{c as gn,G as bn,S as Pn}from"./vendor.4c747328.js";const yn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}};yn();const q=document.getElementById("c");function cn(){q.width=window.innerWidth,q.height=window.innerHeight}window.addEventListener("resize",cn);cn();const r=gn({attributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1},pixelRatio:1,canvas:q}),F=2;function y(n){let t=[tn(n),tn(n)];return{get read(){return t[0]},get write(){return t[1]},swap(){t.reverse()}}}function tn(n){let t=r.texture({width:window.innerWidth>>F,height:window.innerHeight>>F,min:n,mag:n,type:"uint8",wrap:"clamp"});return window.addEventListener("resize",()=>{t.resize(window.innerWidth>>F,window.innerHeight>>F)}),r.framebuffer({color:t,depthStencil:!1})}const h=y("nearest"),z=y("nearest"),g=y("nearest"),I=y("nearest"),b=y("nearest"),P=y("nearest");y("nearest");y("nearest");const Z=y("linear");var wn=`precision highp float;

attribute vec2 points;
varying vec2 coords;

void main() {
    coords = points * 0.5 + 0.5;
    gl_Position = vec4(points, 0.0, 1.0);
}`,B=`precision highp float;
precision highp sampler2D;

uniform vec2 texelSize;
uniform int iFrame;
uniform int tar;
uniform float iTime;
uniform float dt;
uniform vec4 iMouse;


uniform sampler2D X_XT;
uniform sampler2D X_YT;
uniform sampler2D V_XT;
uniform sampler2D V_YT;
uniform sampler2D MT;
uniform sampler2D CT;

#define iResolution (vec2((1./texelSize)))

#define V_S 1.
#define X_S 0.5
#define M_M 8.0
#define R (vec2(vec2((1./texelSize))))
#define Bf(p) p
#define Bi(p) ivec2(p)
#define texel(a,p) texture2D(a,((p-.5)+.5)/R)
//texelFetch(a, Bi(p), 0)
#define pixel(a,p) texture2D(a,(p)/R)


#define LE true
#define PI 3.14159265

#define loop(i,x)for(int i=0;i<x;i++)
#define range(i,a,b)for(int i=a;i<=b;i++)

#define border_h 8.
vec4 Mouse;
float time;

#define mass 1.

#define fluid_rho .5

float smoothstepp(float a,float b,float c){
    return smoothstep(a,b,c);//(c-a)/(b-a);
}
float shiftRight (float v, float amt) {
  v = floor(v) + 0.5;
  return floor(v / exp2(amt));
}
float shiftLeft (float v, float amt) {
    return floor(v * exp2(amt) + 0.5);
}
float maskLast (float v, float bits) {
    return mod(v, shiftLeft(1.0, bits));
}
float extractBits (float num, float from, float to) {
    from = floor(from + 0.5); to = floor(to + 0.5);
    return maskLast(shiftRight(num, from), to - from);
}
vec4 encode01FloatIntoColorVec4(float p){
    vec4 v;
    float pr=floor((256.0*256.0-1.0)*clamp(p,0.0,1.0)+0.5);
    v.x=mod(pr,256.0)/255.0;
    v.y=floor(pr/256.0)/255.0;
    return v;
}

float decode01FloatFromColorVec4(vec4 v){
    vec2 v2=floor(clamp(v.xy,0.0,1.0)*255.0);
    return (256.0*v2.y+v2.x)/(256.0*256.0-1.0);
}
vec4 encode01FloatIntoColorVec4r(float p){
    vec4 v;
    float pr=floor((256.0*256.0*256.0*256.0-1.0)*clamp(p,0.0,1.0)+0.5);
    v.x=floor(mod(pr,256.0))/255.0;
    v.y=floor(mod(pr/256.0,256.0))/255.0;
    v.z=floor(mod(pr/256.0/256.0,256.0))/255.0;
    v.w=floor(mod(pr/256.0/256.0/256.0,256.0))/255.0;
    return v;
}

float decode01FloatFromColorVec4r(vec4 v){
    vec4 v2=floor(clamp(v.xyzw,0.0,1.0)*255.0);
    return (256.0*256.0*256.0*v2.w+256.0*256.0*v2.z+256.0*v2.y+v2.x)/(256.0*256.0*256.0*256.0-1.0);
}

vec4 floatToRgba(float texelFloat, bool littleEndian) {
    return encode01FloatIntoColorVec4((texelFloat+1.0)/2.0);
    if (texelFloat == 0.0) return vec4(0, 0, 0, 0);
    float sign = texelFloat > 0.0 ? 0.0 : 1.0;
    texelFloat = abs(texelFloat);
    float exponent = floor(log2(texelFloat));
    float biased_exponent = exponent + 127.0;
    float fraction = ((texelFloat / exp2(exponent)) - 1.0) * 8388608.0;
    float t = biased_exponent / 2.0;
    float last_bit_of_biased_exponent = fract(t) * 2.0;
    float remaining_bits_of_biased_exponent = floor(t);
    float byte4 = extractBits(fraction, 0.0, 8.0) / 255.0;
    float byte3 = extractBits(fraction, 8.0, 16.0) / 255.0;
    float byte2 = (last_bit_of_biased_exponent * 128.0 + extractBits(fraction, 16.0, 23.0)) / 255.0;
    float byte1 = (sign * 128.0 + remaining_bits_of_biased_exponent) / 255.0;
    return (
      littleEndian
      ? vec4(byte4, byte3, byte2, byte1)
      : vec4(byte1, byte2, byte3, byte4)
    );
}



// Denormalize 8-bit color channels to integers in the range 0 to 255.
ivec4 floatsToBytes(vec4 inputFloats, bool littleEndian) {
  ivec4 bytes = ivec4(inputFloats * 255.0);
  return (
    littleEndian
    ? bytes.abgr
    : bytes
  );
}

// Break the four bytes down into an array of 32 bits.
void bytesToBits(const in ivec4 bytes, out bool bits[32]) {
  for (int channelIndex = 0; channelIndex < 4; ++channelIndex) {
    float acc = float(bytes[channelIndex]);
    for (int indexInByte = 7; indexInByte >= 0; --indexInByte) {
      float powerOfTwo = exp2(float(indexInByte));
      bool bit = acc >= powerOfTwo;
      bits[channelIndex * 8 + (7 - indexInByte)] = bit;
      acc = mod(acc, powerOfTwo);
    }
  }
}

// Compute the exponent of the 32-bit float.
float getExponent(bool bits[32]) {
  const int startIndex = 1;
  const int bitStringLength = 8;
  const int endBeforeIndex = startIndex + bitStringLength;
  float acc = 0.0;
  int pow2 = bitStringLength - 1;
  for (int bitIndex = startIndex; bitIndex < endBeforeIndex; ++bitIndex) {
    acc += float(bits[bitIndex]) * exp2(float(pow2--));
  }
  return acc;
}

// Compute the mantissa of the 32-bit float.
float getMantissa(bool bits[32], bool subnormal) {
  const int startIndex = 9;
  const int bitStringLength = 23;
  const int endBeforeIndex = startIndex + bitStringLength;
  // Leading/implicit/hidden bit convention:
  // If the number is not subnormal (with exponent 0), we add a leading 1 digit.
  float acc = float(!subnormal) * exp2(float(bitStringLength));
  int pow2 = bitStringLength - 1;
  for (int bitIndex = startIndex; bitIndex < endBeforeIndex; ++bitIndex) {
    acc += float(bits[bitIndex]) * exp2(float(pow2--));
  }
  return acc;
}

// Parse the float from its 32 bits.
float bitsToFloat(bool bits[32]) {
  float signBit = float(bits[0]) * -2.0 + 1.0;
  float exponent = getExponent(bits);
  bool subnormal = abs(exponent - 0.0) < 0.01;
  float mantissa = getMantissa(bits, subnormal);
  float exponentBias = 127.0;
  return signBit * mantissa * exp2(exponent - exponentBias - 23.0);
}

// Decode a 32-bit float from the RGBA color channels of a texel.
float rgbaToFloat(vec4 texelRGBA, bool littleEndian) {

    return decode01FloatFromColorVec4(texelRGBA)*2.0-1.0;
  ivec4 rgbaBytes = floatsToBytes(texelRGBA, littleEndian);
  bool bits[32];
  bytesToBits(rgbaBytes, bits);
  return bitsToFloat(bits);
}


vec2 encode01FloatIntoColorVec2(float p){
    vec2 v;
    float pr=floor((256.0*256.0-1.0)*clamp(p,0.0,1.0));
    v.x=mod(pr,256.0)/255.0;
    v.y=floor(pr/256.0)/255.0;
    return v;
}

float decode01FloatFromColorVec2(vec2 v){
    vec2 v2=floor(clamp(v,0.0,1.0)*255.0);
    return (256.0*v2.y+v.x)/(256.0*256.0-1.0);
}



float Pf(float rho)
{
    //return 0.2*rho.x; //gas
    float GF=1.;//smoothstep(0.49, 0.5, 1. - rho.y);
    return mix(.5*rho,.04*rho*(rho/fluid_rho-1.),GF);//water pressure
}

mat2 Rot(float ang)
{
    return mat2(cos(ang),-sin(ang),sin(ang),cos(ang));
}

vec2 Dir(float ang)
{
    return vec2(cos(ang),sin(ang));
}

float sdBox(in vec2 p,in vec2 b)
{
    vec2 d=abs(p)-b;
    return length(max(d,0.))+min(max(d.x,d.y),0.);
}

float border(vec2 p)
{
    float rr=min(R.x,R.y)/sqrt(2.0);
    vec2 bc=(p-R*vec2(.5,.5));
    float a=iTime*0.5;
    float bound=-sdBox(p-R*vec2(.5,.5),R*vec2(0.499,.499));//-sdBox(vec2(cos(a)*bc.x-sin(a)*bc.y,cos(a)*bc.y+sin(a)*bc.x),rr*vec2(.5,.5));//max(-sdBox(p-R*vec2(.5,.2),R*vec2(.5,.2)),-sdBox(p-R*vec2(.5,.8),R*vec2(1.0,.6)));
    return max(-sdBox(p-R*vec2(.5,.8),R*vec2(1.,.7)),bound);
    // float box=sdBox(Rot(0.*time)*(p-R*vec2(.5,.6)),R*vec2(.05,.01));
    // float drain=-sdBox(p-R*vec2(.5,.7),R*vec2(1.5,.5));
    // vec2 pg=p-R*vec2(.5,.5);
    // return min(max(drain,min(bound,box)),(length(p-R*vec2(iMouse.x,iMouse.y))-10.));
}

#define h 1.
vec3 bN(vec2 p)
{
    vec3 dx=vec3(-h,0,h);
    vec4 idx=vec4(-1./h,0.,1./h,.25);
    vec3 r=idx.zyw*border(p+dx.zy)
    +idx.xyw*border(p+dx.xy)
    +idx.yzw*border(p+dx.yz)
    +idx.yxw*border(p+dx.yx);
    return vec3(normalize(r.xy),r.z+1e-4);
}

struct particle
{
    vec2 X;
    vec2 V;
    float M;
    vec3 C;
};
struct vec8
{
    float x;
    float y;
    float z;
    float w;
    float r;
    float g;
    float b;
    float a;
};

particle getParticle(vec2 p)
{
    particle P;
    P.X=vec2(rgbaToFloat(texture2D(X_XT,p/R).rgba,LE),rgbaToFloat(texture2D(X_XT,p/R).barg,LE))*X_S+p;
    P.V=vec2(rgbaToFloat(texture2D(V_XT,p/R).rgba,LE),rgbaToFloat(texture2D(V_XT,p/R).barg,LE))*V_S;

    // P.X=(vec2(decode01FloatFromColorVec4r(texture2D(X_XT,p/R)),decode01FloatFromColorVec4r(texture2D(X_YT,p/R)))*2.0-1.0)*X_S+p;
    // P.V=(vec2(decode01FloatFromColorVec4r(texture2D(V_XT,p/R)),decode01FloatFromColorVec4r(texture2D(V_YT,p/R)))*2.0-1.0)*V_S;
    
    P.M=decode01FloatFromColorVec4r(texture2D(MT,p/R))*M_M;
    P.C=texture2D(CT,p/R).xyz;
    return P;
}

vec4 saveParticle(particle P,vec2 pos)
{
    if(pos.x<1.0 || pos.y<1.0 || pos.x>R.x-1.0 || pos.y>R.y-1.0){
        P.M=0.;
    }
    P.X=P.X-pos;
    P.X=clamp(P.X,vec2(-X_S),vec2(X_S))/X_S;
    P.V=clamp(P.V,vec2(-V_S),vec2(V_S))/V_S;
    // vec2 XSQ=(P.X-vec2(-X_S))/(2.0*X_S);
    // vec2 VSQ=(P.V-vec2(-V_S))/(2.0*V_S);
    if(tar==0){
        // return encode01FloatIntoColorVec4r(P.X.x/2.0+0.5);
        return vec4(floatToRgba(P.X.x,LE).rg,floatToRgba(P.X.y,LE).rg);//vec4(encode01FloatIntoColorVec2(XSQ.x),encode01FloatIntoColorVec2(XSQ.y));
    }else if(tar==1){
        return encode01FloatIntoColorVec4r(P.X.y/2.0+0.5);
        // return vec4(encode01FloatIntoColorVec2(VSQ.x),encode01FloatIntoColorVec2(VSQ.y));
    }else if(tar==2){
        // return encode01FloatIntoColorVec4r(P.V.x/2.0+0.5);
        return vec4(floatToRgba(P.V.x,LE).rg,floatToRgba(P.V.y,LE).rg);//floatToRgba(P.V.x,LE);
        // return vec4(encode01FloatIntoColorVec2(VSQ.x),encode01FloatIntoColorVec2(VSQ.y));
    }else if(tar==3){
        // return encode01FloatIntoColorVec4r(P.V.y/2.0+0.5);
        return floatToRgba(P.V.y,LE);
        // return vec4(encode01FloatIntoColorVec2(VSQ.x),encode01FloatIntoColorVec2(VSQ.y));
    }else if(tar==4){
        return encode01FloatIntoColorVec4r(min(max(P.M,0.),M_M)/M_M);// prevent's screen whipe
        // return vec4(encode01FloatIntoColorVec2(VSQ.x),encode01FloatIntoColorVec2(VSQ.y));
    }else{
        return vec4(P.C,1.0);// prevent's screen whipe
    }
}

vec3 hash32(vec2 p)
{
    vec3 p3=fract(vec3(p.xyx)*vec3(.1031,.1030,.0973));
    p3+=dot(p3,p3.yxz+33.33);
    return fract((p3.xxy+p3.yzz)*p3.zyx);
}

float G(vec2 x)
{
    return exp(-dot(x,x));
}

float G0(vec2 x)
{
    return exp(-length(x));
}

//diffusion amount
#define dif 1.12

vec3 distribution(vec2 x,vec2 p,float K)
{
    vec2 omin=clamp(x-K*.5,p-.5,p+.5);
    vec2 omax=clamp(x+K*.5,p-.5,p+.5);
    return vec3(.5*(omin+omax),(omax.x-omin.x)*(omax.y-omin.y)/(K*K));
}

/*
vec3 distribution(vec2 x, vec2 p, float K)
{
    vec4 aabb0 = vec4(p - 0.5, p + 0.5);
    vec4 aabb1 = vec4(x - K*0.5, x + K*0.5);
    vec4 aabbX = vec4(max(aabb0.xy, aabb1.xy), min(aabb0.zw, aabb1.zw));
    vec2 center = 0.5*(aabbX.xy + aabbX.zw); //center of mass
    vec2 size = max(aabbX.zw - aabbX.xy, 0.); //only positive
    float m = size.x*size.y/(K*K); //relative amount
    //if any of the dimensions are 0 then the mass is 0
    return vec3(center, m);
}*/

//diffusion and advection basically
particle Reintegration(vec2 pos)
{
    //basically integral over all updated neighbor distributions
    //that fall inside of this pixel
    //this makes the tracking conservative
    particle P;
    P.X=vec2(0.);
    P.V=vec2(0.);
    P.M=0.;
    P.C=vec3(0.);
// SHOULD BE -2,2 but -1,1 is faster and doesnt lose much
    range(i,-2,2)range(j,-2,2)
    {
        vec2 tpos=pos+vec2(i,j);
        // vec8 data=texelish(ch,ch1,ch2,tpos);
        
        particle P0=getParticle(tpos);
        
        P0.X+=P0.V*dt;//integrate position
        
        float difR=.9+.21*smoothstepp(fluid_rho*0.,fluid_rho*.333,P0.M);
        vec3 D=distribution(P0.X,pos,difR);
        //the deposited mass into this cell
        float m=P0.M*D.z;
        
        //add weighted by mass
        P.X+=D.xy*m;
        P.V+=P0.V*m;
        P.C+=P0.C*m;
        
        //add mass
        P.M+=m;
    }
    
    //normalization
    if(P.M>0.0)
    {
        P.X/=P.M;
        P.V/=P.M;
        P.C/=P.M;
    }else{
        P.M=0.;
        P.C=vec3(0.);
        P.V=vec2(0.);
    }
    return P;
}

//force calculation and integration
particle Simulation(in particle P,vec2 pos)
{
    //Compute the SPH force
    vec2 F=vec2(0.);
    vec3 avgV=vec3(0.);
    range(i,-2,2)range(j,-2,2)
    {
        vec2 tpos=pos+vec2(i,j);
        particle P0=getParticle(tpos);
        vec2 dx=P0.X-P.X;
        float avgP=.5*P0.M*(Pf(P.M)+Pf(P0.M));
        F-=.5*G(1.*dx)*avgP*dx;
        avgV+=P0.M*G(1.*dx)*vec3(P0.V,1.);
    }
    avgV.xy/=avgV.z;
    
    //viscosity
    F+=0.1*P.M*(avgV.xy-P.V);
    
    //gravity
    F+=P.M*vec2(0.,-.004);
    
    // if(Mouse.z>0.)
    // {
    //     vec2 dm=(Mouse.xy-Mouse.zw)/10.;
    //     float d=distance(Mouse.xy,P.X)/20.;
    //     F+=.001*dm*exp(-d*d);
    //     // P.M.y += 0.1*exp(-40.*d*d);
    // }
    
    //integrate
    P.V+=F*dt/max(P.M,0.00000001);
    
    //border
    vec3 N=bN(P.X);
    float vdotN=step(N.z,border_h)*dot(-N.xy,P.V);
    // P.V+=10.0*(N.xy*vdotN+N.xy*abs(vdotN));
    P.V+=10.*P.M*N.xy*step(abs(N.z),border_h)*exp(-N.z);
    
    //if(N.z<0.)P.V=vec2(0.);

    //velocity limit
    float v=length(P.V);
    P.V/=(v>1.)?v:1.;
    return P;
}

`,Tn=`

varying vec2 coords;


void main()
{
    vec4 U=vec4(0.0);
    vec2 pos=coords*iResolution.xy;
     //R = iResolution.xy;
    time = iTime;
     Mouse = iMouse;

    // vec8 data = texelish(XT,VT,MT, pos); 
    
    // particle P;// = getParticle(pos);
    // P.X=vec2(0.0);
    // P.V=vec2(0.0);
    // P.M=0.0;
    // P.C=vec3(0.0);
       
    particle P=Reintegration( pos);
    // P = getParticle(pos);
   
    //initial condition
    if(iFrame < 1)
    {
        //random
        vec3 rand = hash32(pos);
        if(rand.z < 0.0) 
        {
            P.X = pos;
            P.V = 0.5*(rand.xy-0.5) + vec2(0., 0.);
            P.M = mass;
            P.C = vec3(0.,0.,0.);
        }
        else
        {
            P.X = pos;
            P.V = vec2(0.);
            P.M = (1e-6);
            P.C = vec3(1e-6);
        }
    }
    
    U = saveParticle(P, pos);
    gl_FragColor=U;
}`,Vn=`

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
    P.M*=0.999+min(P.V.y,0.0);
    U = saveParticle(P, pos);
    gl_FragColor=U;
}`,Mn=`

varying vec2 coords;

void main()
{
    vec4 U=vec4(0.0);
    vec2 pos=coords*iResolution.xy;
    //R = iResolution.xy;
    time = iTime;
    ivec2 p = ivec2(pos);

    // vec8 data = texelish(XT,VT,MT, pos);
    particle P = getParticle(pos);
    
    //particle render
    vec4 rho = vec4(0.);
    range(i, -1, 1) range(j, -1, 1)
    {
        vec2 ij = vec2(i,j);
        // vec8 data = texelish(XT,VT,MT, pos + ij);
        particle P0 = getParticle( pos + ij);

        vec2 x0 = P0.X; //update position
        //how much mass falls into this pixel
        rho += 1.*vec4(P.V, P.M,1.0)*G((pos - x0)/0.75); 
    }
    U=rho;
    gl_FragColor=U;
}`,_n=`

varying vec2 coords;

uniform vec2 splatV;
uniform vec3 splatM;
uniform vec2 splatCenter;
uniform float radius;


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
    
    if(length(P.X - R*(splatCenter)) <= R.x*radius) 
    {
        //P.M=0.0;
        float m=P.M;
    P.X*=m;
    P.V*=m;
    // P.M.yzw*=m;
    P.C*=m;
    float am=fluid_rho;//*(length(splatV)+1.0);//min(max(fluid_rho*2.0-m,fluid_rho*0.5),fluid_rho*0.5);
    float tm=m+am;
    P.C*=1./tm;
        P.X = (P.X+am*pos)/tm;
        P.V = (P.V+am*splatV)/tm;
        P.M += am;
        P.C += splatM*am/tm;
        P.V=splatV;
    }

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
    
    U = saveParticle(P, pos);
    gl_FragColor=U;
}`,Xn=`
varying vec2 coords;

uniform sampler2D iChannel1;
#define ch1 iChannel1

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
    particle P = getParticle(pos);

    //border render
    vec3 Nb = bN(P.X);
    float bord = smoothstepp(1.,0.,border(pos)-border_h*2.0);
    
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
    // col.xyz=vec3(P.V+0.5,0.0);
    // col.xy=P.X-pos;
    // col.x=P.M/M_M;
    gl_FragColor=col;
   // particle Pg = getParticle(vec4(1.0,0.5,0.0,1.0), pos);
    //gl_FragColor= vec4(saveParticle(Pg, pos).xy,0.0,1.0);
//  gl_FragColor=vec4(vec3(P.M.x),1.0);
}`;const L=({viewportWidth:n,viewportHeight:t})=>[1/n,1/t],G=({viewportWidth:n,viewportHeight:t})=>({x:0,y:0,width:n>>F,height:t>>F}),Fn=r({vert:wn,attributes:{points:[1,1,1,-1,-1,-1,1,1,-1,-1,-1,1]},count:6}),D=r({frag:B+`
`+Tn,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>h.read,X_YT:()=>z.read,V_XT:()=>g.read,V_YT:()=>I.read,MT:()=>b.read,CT:()=>P.read,tar:r.prop("tar"),texelSize:L},viewport:G}),A=r({frag:B+`
`+Vn,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>h.read,X_YT:()=>z.read,V_XT:()=>g.read,V_YT:()=>I.read,MT:()=>b.read,CT:()=>P.read,tar:r.prop("tar"),texelSize:L},viewport:G}),Cn=r({frag:B+`
`+Mn,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>h.read,X_YT:()=>z.read,V_XT:()=>g.read,V_YT:()=>I.read,MT:()=>b.read,CT:()=>P.read,tar:r.prop("tar"),texelSize:L},viewport:G}),N=r({frag:B+`
`+_n,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>h.read,X_YT:()=>z.read,V_XT:()=>g.read,V_YT:()=>I.read,MT:()=>b.read,CT:()=>P.read,tar:r.prop("tar"),splatCenter:r.prop("point"),splatM:r.prop("color"),splatV:r.prop("vel"),radius:r.prop("radius"),texelSize:L},viewport:G});function Rn(n,t,e,a,o,l){let c={point:[n/window.innerWidth,1-t/window.innerHeight],radius:l,color:o,vel:[e,-a]};N(C({framebuffer:h.write,iFrame:p,iTime:v,iMouse:d,dt:1,tar:0},c)),N(C({framebuffer:g.write,iFrame:p,iTime:v,iMouse:d,dt:1,tar:2},c)),N(C({framebuffer:b.write,iFrame:p,iTime:v,iMouse:d,dt:1,tar:4},c)),N(C({framebuffer:P.write,iFrame:p,iTime:v,iMouse:d,dt:1,tar:5},c)),h.swap(),g.swap(),b.swap(),P.swap()}let p=0,v=0,W=!1,k=-1,K=-1,on=1,d=[0,0,0,0];const Sn=r({frag:B+`
`+Xn,uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),iChannel1:()=>Z.read,X_XT:()=>h.read,X_YT:()=>z.read,V_XT:()=>g.read,V_YT:()=>I.read,MT:()=>b.read,CT:()=>P.read,tar:r.prop("tar"),texelSize:L}}),zn=()=>Sn({iFrame:p,iTime:v,iMouse:d});let Q=1/8,H=30,j=!1;const In=n=>{if(j)return;j=!0,W||(k=window.performance.now());let t=(window.performance.now()-k)/1e3;W&&t-K<1&&(Q*=.9,H*=.9,Q+=t-K,H+=on),W=!0;let e=0,a=30,o=Math.floor(1/a*(H/Q));K=t;let l=1,c=8;o<c||(o=c),o>1||(o=1);let f=0,s=Math.min(8/Math.max(o,1),l);for(;(v=(window.performance.now()-k)/1e3)-t<1/a&&e<o||e<1;)f+=1,e+=1,D({framebuffer:h.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:0}),D({framebuffer:g.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:2}),D({framebuffer:b.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:4}),D({framebuffer:P.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:5}),h.swap(),g.swap(),b.swap(),P.swap(),A({framebuffer:h.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:0}),A({framebuffer:g.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:2}),A({framebuffer:b.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:4}),A({framebuffer:P.write,iFrame:p,iTime:v,iMouse:d,dt:s,tar:5}),h.swap(),g.swap(),b.swap(),P.swap(),p+=1;Cn({framebuffer:Z.write,iFrame:p,iTime:v,iMouse:d,dt:1,tar:2}),Z.swap(),on=f,j=!1};window.addEventListener("mousemove",n=>{d[0]=n.clientX/window.innerWidth,d[1]=1-n.clientY/window.innerHeight});let i={x:0,y:0,dx:0,dy:0,moved:!1,color:[.5,.66,1]};document.addEventListener("mousemove",n=>{i.moved=!0,i.dx=(n.clientX-i.x)*10,i.dy=(n.clientY-i.y)*10,i.x=n.clientX,i.y=n.clientY});document.addEventListener("touchmove",n=>{i.moved=!0,i.dx=(n.changedTouches[0].clientX-i.x)*10,i.dy=(n.changedTouches[0].clientY-i.y)*10,i.x=n.changedTouches[0].clientX,i.y=n.changedTouches[0].clientY});document.addEventListener("touchstart",n=>{i.moved=!0,i.dx=(n.changedTouches[0].clientX-i.x)*10,i.dy=(n.changedTouches[0].clientY-i.y)*10,i.x=n.changedTouches[0].clientX,i.y=n.changedTouches[0].clientY});document.addEventListener("touchend",n=>{i.moved=!0,i.dx=(n.changedTouches[0].clientX-i.x)*10,i.dy=(n.changedTouches[0].clientY-i.y)*10,i.x=n.changedTouches[0].clientX,i.y=n.changedTouches[0].clientY});function ln(n,t,e){var a,o,l;if(t==0)a=o=l=e;else{var c=function(u,T,x){return x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?u+(T-u)*6*x:x<.5?T:x<.6666666666666666?u+(T-u)*(.6666666666666666-x)*6:u},f=e<.5?e*(1+t):e+t-e*t,s=2*e-f;a=c(s,f,n+1/3),o=c(s,f,n),l=c(s,f,n-1/3)}return[a,o,l]}document.addEventListener("mousedown",()=>{i.color=ln(Math.random(),1,.5)});const Bn=n=>{window.addEventListener("load",()=>r.frame(({viewportWidth:t,viewportHeight:e})=>{Fn(()=>{const a=n();for(let o=0;o<a.length;o+=1)Rn((o+4+.5)/(a.length+8)*t,.9*e,0,-a[o],ln(o/(a.length+1),1,.5),1/(a.length+1)/2);In(),zn()})}))};var rn,sn;performance.now();var dn=!1,Ln=function(){this.speed=1,this.directions=6,this.turning=!0,this.lineWidth=1,this.song=window.location.hash.slice(1)?"/#"+window.location.hash.slice(1):"/#300%20Violin%20Orchestra",this.activateMic=Un,this.tThreshold=.3,this.calibrate=()=>1e3},w=32;function fn(n){var t=n||1024;this.spectrum=[],this.volume=this.vol=0,this.peak_volume=0;var e=this;this.getRMS=function(c){for(var f=0,s=0;s<c.length;s++)f+=c[s]*c[s];return f/=c.length,f=Math.sqrt(f),f};var a=new AudioContext;a.sampleRate,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia;function o(){try{l(new AudioContext)}catch(c){console.error(c),alert("Web Audio API could not be called, check that the url starts with https:// and not http://")}}this.init=o;function l(c){navigator.getUserMedia({audio:!0},f,s);function f($){var u=c.createAnalyser();u.smoothingTimeConstant=.2,u.fftSize=t;var T=c.createScriptProcessor(t*2,1,1);T.onaudioprocess=function(){e.spectrum=new Uint8Array(u.frequencyBinCount),u.getByteFrequencyData(e.spectrum),e.vol=e.getRMS(e.spectrum),e.vol>e.peak_volume&&(e.peak_volume=e.vol),e.volume=e.vol};var x=c.createMediaStreamSource($);x.connect(u),u.connect(T),T.connect(c.destination)}function s(){console.log(arguments)}}}window.Microphone=fn;var M=document.querySelector("audio");function En(n){window.location.hash=n.split("#").pop()}function pn(){M.src="https://cdn.glitch.com/7c659aa6-fe5f-4610-bdf3-3fd76117d9a5%2F"+window.location.hash.slice(1)+".mp3",M.classList.add("paused")}var an=new Ln;window.onload=function(){var n=new bn;n.add(an,"song",{"Glorious Morning":"/#Glorious_morning",Jumper:"/#Jumper",Stride:"/#Stride-","300 Violin Orchestra":"/#300%20Violin%20Orchestra","ThunderZone v2":"/#638150_-ThunderZone-v2-","Portugal The Man - Feel it Still":"/#Portugal.%20The%20Man%20-%20Feel%20It%20Still","The XX - Intro":"/#00%20Intro","Hall of the Mountain King":"/#Hall%20of%20the%20Mountain%20King",'Everybody Wants To Rule The World (7" Version)':"/#Everybody%20Wants%20To%20Rule%20The%20World%20(7%20Version)",Flight:"/#Flight","Electroman Adventures V2":"/#Waterflame%20-%20Electroman%20Adventures%20V2",Rasputin:"/#Rasputin"}).onChange(En),n.add(an,"activateMic").name("useMicrophone")};window.location.hash&&pn();window.addEventListener("hashchange",pn);var R,O=new(window.AudioContext||window.webkitAudioContext),E=O.createAnalyser();E.connect(O.destination);E.fftSize=w*2;E.smoothingTimeConstant=.2;const Dn=O.createMediaElementSource(M);Dn.connect(E);var An=240,J=100,Y=Math.floor(60*1e3/An/(1e3/60))*J;let U=[],_=[];for(var S=0;S<w;S++)U.push(0),_.push(0);let V=U.slice();var X=[];for(var S=0;S<Y;S++){var Nn=new Uint8Array(w);X.push(Nn)}let m=new Uint8Array(w).fill(0);function Yn(){dn?R.spectrum.length===w&&(m=R.spectrum.slice()):E.getByteFrequencyData(m);for(var n=0;n<0;n++)m=m.map((e,a)=>{var o=[e];return a<w-1&&o.push(m[a+1]),a>0&&o.push(m[a-1]),Math.max(...o)});X.unshift(m.slice()),X.pop(),V=[];for(var n=0;n<w;n++){U[n]=0,_[n]=0,V[n]=0;for(var t=0;t<Y;t++)_[n]=Math.max(X[t][n],_[n]);U[n]=X[0][n]/_[n]*256;for(var t=0;t<Y/J;t++)V[n]+=X[t][n]/Y*J/_[n]*256}}M.addEventListener("pause",()=>{M.classList.add("paused")});M.addEventListener("play",()=>{O.resume(),M.classList.remove("paused")});function Un(){dn=!0,R||(R=new fn(w*2),R.init())}let vn=[0];const Gn=()=>vn;On();un();function On(){rn=document.createElement("div"),document.body.appendChild(rn),sn=new Pn,window.addEventListener("resize",kn,!1),Wn()}function Wn(){Bn(Gn)}function kn(){}function un(){requestAnimationFrame(un),Yn(),Kn(),sn.update()}function Kn(){performance.now();let n=[...m].map((e,a)=>[V[a]+m[a],a]);n.sort((e,a)=>a[0]-e[0]),n=n.map(e=>{let a=m[e[1]],o=V[e[1]];return[Math.max(0,(a-o+1e-4)/(a/2+o/2+1e-4))*256*2,e[1]]}),n.sort((e,a)=>a[0]-e[0]),vn=n.slice(0,32).sort((e,a)=>e[1]-a[1]).map(e=>[m[e[1]]-V[e[1]],e[1]]).concat(n.slice(32).map(e=>[m[e[1]]-V[e[1]],e[1]])).map(e=>e[0]/64)}
