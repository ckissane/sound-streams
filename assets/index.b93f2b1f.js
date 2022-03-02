var Re=Object.defineProperty;var ue=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var me=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))_e.call(t,n)&&me(e,n,t[n]);if(ue)for(var n of ue(t))Ce.call(t,n)&&me(e,n,t[n]);return e};import{c as Fe,G as Se,S as ze}from"./vendor.4c747328.js";const Ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};Ie();const te=document.getElementById("c");function be(){var e,t;te.width=window.innerWidth*((e=window.devicePixelRatio)!=null?e:1),te.height=window.innerHeight*((t=window.devicePixelRatio)!=null?t:1)}window.addEventListener("resize",be);be();const r=Fe({attributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1},canvas:te}),M=()=>{var e;return Math.max(window.innerWidth,window.innerHeight)*((e=window.devicePixelRatio)!=null?e:1)/(256+64)},Be=.012;function T(e){let t=[xe(e),xe(e)];return{get read(){return t[0]},get write(){return t[1]},swap(){t.reverse()}}}function xe(e){var n,o;let t=r.texture({width:Math.ceil(window.innerWidth*((n=window.devicePixelRatio)!=null?n:1)/M()),height:Math.ceil(window.innerHeight*((o=window.devicePixelRatio)!=null?o:1)/M()),min:e,mag:e,type:"uint8",wrap:"clamp"});return window.addEventListener("resize",()=>{var i,l;t.resize(Math.ceil(window.innerWidth*((i=window.devicePixelRatio)!=null?i:1)/M()),Math.ceil(window.innerHeight*((l=window.devicePixelRatio)!=null?l:1)/M()))}),r.framebuffer({color:t,depthStencil:!1})}const P=T("nearest"),E=T("nearest"),g=T("nearest"),A=T("nearest"),b=T("nearest"),w=T("nearest");T("nearest");T("nearest");const oe=T("linear");var Le=`precision highp float;

attribute vec2 points;
varying vec2 coords;

void main() {
    coords = points * 0.5 + 0.5;
    gl_Position = vec4(points, 0.0, 1.0);
}`,N=`precision highp float;
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
    return length(p-R*vec2(.5,.5))-min(R.x,R.y)/7.0*-1.0;//max(-sdBox(p-R*vec2(.5,.8),R*vec2(1.,.7)),bound);
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
    F+=0.0*P.M*(avgV.xy-P.V);
    
    //gravity
    vec2 d=normalize(P.X-R/2.0);
    F+=-P.M*d*0.0005;//vec2(-d.y,d.x)*sign(d.x)*0.0005;
    
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

`,De=`

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
}`,Ee=`

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
}`,Ae=`

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
        rho += 1.*vec4(P0.V, P0.M,1.0)*G((pos - x0)/0.75); 
    }
    U=rho;
    gl_FragColor=U;
}`,Ne=`

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
    vec2 posc=P.X;
    posc-=R*0.5;
    //posc*=max((min(R.x,R.y)/5.0)/length(posc),1.0);
    posc+=R*0.5;
    if(length(posc - R*(splatCenter)) <= R.x*radius) 
    {
        P.M*=0.5;
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
}`,Ue=`
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
    //return getC(p);
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
}`;const U=({viewportWidth:e,viewportHeight:t})=>{var n,o;return[1/Math.ceil(window.innerWidth*((n=window.devicePixelRatio)!=null?n:1)/M()),1/Math.ceil(window.innerHeight*((o=window.devicePixelRatio)!=null?o:1)/M())]},k=({viewportWidth:e,viewportHeight:t})=>{var n,o;return{x:0,y:0,width:Math.ceil(window.innerWidth*((n=window.devicePixelRatio)!=null?n:1)/M()),height:Math.ceil(window.innerHeight*((o=window.devicePixelRatio)!=null?o:1)/M())}},Ye=r({vert:Le,attributes:{points:[1,1,1,-1,-1,-1,1,1,-1,-1,-1,1]},count:6}),j=r({frag:N+`
`+De,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>P.read,X_YT:()=>E.read,V_XT:()=>g.read,V_YT:()=>A.read,MT:()=>b.read,CT:()=>w.read,tar:r.prop("tar"),texelSize:U},viewport:k}),G=r({frag:N+`
`+Ee,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>P.read,X_YT:()=>E.read,V_XT:()=>g.read,V_YT:()=>A.read,MT:()=>b.read,CT:()=>w.read,tar:r.prop("tar"),texelSize:U},viewport:k}),je=r({frag:N+`
`+Ae,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>P.read,X_YT:()=>E.read,V_XT:()=>g.read,V_YT:()=>A.read,MT:()=>b.read,CT:()=>w.read,tar:r.prop("tar"),texelSize:U},viewport:k}),W=r({frag:N+`
`+Ne,framebuffer:r.prop("framebuffer"),uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),X_XT:()=>P.read,X_YT:()=>E.read,V_XT:()=>g.read,V_YT:()=>A.read,MT:()=>b.read,CT:()=>w.read,tar:r.prop("tar"),splatCenter:r.prop("point"),splatM:r.prop("color"),splatV:r.prop("vel"),radius:r.prop("radius"),texelSize:U},viewport:k});function Q(e,t,n,o,i,l){let c={point:[e/window.innerWidth,1-t/window.innerHeight],radius:l,color:i,vel:[n,-o]};W(B({framebuffer:P.write,iFrame:u,iTime:m,iMouse:f,dt:1,tar:0},c)),W(B({framebuffer:g.write,iFrame:u,iTime:m,iMouse:f,dt:1,tar:2},c)),W(B({framebuffer:b.write,iFrame:u,iTime:m,iMouse:f,dt:1,tar:4},c)),W(B({framebuffer:w.write,iFrame:u,iTime:m,iMouse:f,dt:1,tar:5},c)),P.swap(),g.swap(),b.swap(),w.swap()}let u=0,m=0,q=!1,Z=-1,J=-1,he=1,f=[0,0,0,0];const Ge=r({frag:N+`
`+Ue,uniforms:{iFrame:r.prop("iFrame"),iTime:r.prop("iTime"),iMouse:r.prop("iMouse"),dt:r.prop("dt"),iChannel1:()=>oe.read,X_XT:()=>P.read,X_YT:()=>E.read,V_XT:()=>g.read,V_YT:()=>A.read,MT:()=>b.read,CT:()=>w.read,tar:r.prop("tar"),texelSize:({viewportWidth:e,viewportHeight:t})=>{var n,o;return[1/(window.innerWidth*((n=window.devicePixelRatio)!=null?n:1)/M()),1/(window.innerHeight*((o=window.devicePixelRatio)!=null?o:1)/M())]},screenTexelSize:U}}),We=()=>Ge({iFrame:u,iTime:m,iMouse:f});let $=1/8,ee=30,ne=!1;const He=e=>{if(ne)return;ne=!0,q||(Z=window.performance.now());let t=(window.performance.now()-Z)/1e3;q&&t-J<1&&($*=.9,ee*=.9,$+=t-J,ee+=he),q=!0;let n=0,o=30,i=Math.floor(1/o*(ee/$));J=t;let l=1,c=8;i<c||(i=c),i>1||(i=1);let s=0,d=Math.min(8/Math.max(i,1),l);for(;(m=(window.performance.now()-Z)/1e3)-t<1/o&&n<i||n<1;)s+=1,n+=1,j({framebuffer:P.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:0}),j({framebuffer:g.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:2}),j({framebuffer:b.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:4}),j({framebuffer:w.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:5}),P.swap(),g.swap(),b.swap(),w.swap(),G({framebuffer:P.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:0}),G({framebuffer:g.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:2}),G({framebuffer:b.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:4}),G({framebuffer:w.write,iFrame:u,iTime:m,iMouse:f,dt:d,tar:5}),P.swap(),g.swap(),b.swap(),w.swap(),u+=1;je({framebuffer:oe.write,iFrame:u,iTime:m,iMouse:f,dt:1,tar:2}),oe.swap(),he=s,ne=!1};window.addEventListener("mousemove",e=>{f[0]=e.clientX/window.innerWidth,f[1]=1-e.clientY/window.innerHeight});let a={x:0,y:0,dx:0,dy:0,moved:!1,color:[.5,.66,1]};document.addEventListener("mousemove",e=>{a.moved=!0,a.dx=(e.clientX-a.x)*10,a.dy=(e.clientY-a.y)*10,a.x=e.clientX,a.y=e.clientY});document.addEventListener("touchmove",e=>{a.moved=!0,a.dx=(e.changedTouches[0].clientX-a.x)*10,a.dy=(e.changedTouches[0].clientY-a.y)*10,a.x=e.changedTouches[0].clientX,a.y=e.changedTouches[0].clientY});document.addEventListener("touchstart",e=>{a.moved=!0,a.dx=(e.changedTouches[0].clientX-a.x)*10,a.dy=(e.changedTouches[0].clientY-a.y)*10,a.x=e.changedTouches[0].clientX,a.y=e.changedTouches[0].clientY});document.addEventListener("touchend",e=>{a.moved=!0,a.dx=(e.changedTouches[0].clientX-a.x)*10,a.dy=(e.changedTouches[0].clientY-a.y)*10,a.x=e.changedTouches[0].clientX,a.y=e.changedTouches[0].clientY});function ie(e,t,n){var o,i,l;if(t==0)o=i=l=n;else{var c=function(v,y,x){return x<0&&(x+=1),x>1&&(x-=1),x<.16666666666666666?v+(y-v)*6*x:x<.5?y:x<.6666666666666666?v+(y-v)*(.6666666666666666-x)*6:v},s=n<.5?n*(1+t):n+t-n*t,d=2*n-s;o=c(d,s,e+1/3),i=c(d,s,e),l=c(d,s,e-1/3)}return[o,i,l]}document.addEventListener("mousedown",()=>{a.color=ie(Math.random(),1,.5)});const Oe=e=>{let t=[],n=[],o=-1,i=new Date().getTime();window.addEventListener("load",()=>r.frame(({viewportWidth:l,viewportHeight:c})=>{Ye(()=>{var v,y,x,ae,ce,le,se,de,pe,fe;const s=e();Q(a.x,a.y,Math.min(Math.max(a.dx/100/2,-1),1),Math.min(Math.max(a.dy/100/2,-1),1),a.color,Be);let d=Math.min(l/((v=window.devicePixelRatio)!=null?v:1),c/((y=window.devicePixelRatio)!=null?y:1)),I=s.length;i<new Date().getTime()&&(o=-1);for(let p=0;p<I;p+=1){n[p]=(x=n[p])!=null?x:0,t[p]=(ae=t[p])!=null?ae:s[p];let V=(p+.5)/I*Math.PI-Math.PI/2,X=s[p];t[p]<0&&s[p]>0&&(o<0?(i=new Date().getTime()+1e3/32,o=p,n[p]+=.125):n[p]=n[o]),t[p]=s[p],X>0||X<0||X===0||(X=0);let F=d/5,ve=n[p]%1;Q(Math.cos(V)*F+.5*l/((ce=window.devicePixelRatio)!=null?ce:1),Math.sin(V)*F+.5*c/((le=window.devicePixelRatio)!=null?le:1),Math.cos(V)*X,Math.sin(V)*X,ie(ve,1,.5),F/s.length/l*2*((se=window.devicePixelRatio)!=null?se:1)),Q(-Math.cos(V)*F+.5*l/((de=window.devicePixelRatio)!=null?de:1),Math.sin(V)*F+.5*c/((pe=window.devicePixelRatio)!=null?pe:1),-Math.cos(V)*X,Math.sin(V)*X,ie(ve,1,.5),F/s.length/l*2*((fe=window.devicePixelRatio)!=null?fe:1))}He(),We()})}))};var Pe,we;performance.now();var ye=!1,ke=function(){this.speed=1,this.directions=6,this.turning=!0,this.lineWidth=1,this.song=window.location.hash.slice(1)?"/#"+window.location.hash.slice(1):"/#300%20Violin%20Orchestra",this.activateMic=$e,this.tThreshold=.3,this.calibrate=()=>1e3},R=32;function Me(e){var t=e||1024;this.spectrum=[],this.volume=this.vol=0,this.peak_volume=0;var n=this;this.getRMS=function(c){for(var s=0,d=0;d<c.length;d++)s+=c[d]*c[d];return s/=c.length,s=Math.sqrt(s),s};var o=new AudioContext;o.sampleRate,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia;function i(){try{l(new AudioContext)}catch(c){console.error(c),alert("Web Audio API could not be called, check that the url starts with https:// and not http://")}}this.init=i;function l(c){navigator.getUserMedia({audio:!0},s,d);function s(I){var v=c.createAnalyser();v.smoothingTimeConstant=.2,v.fftSize=t;var y=c.createScriptProcessor(t*2,1,1);y.onaudioprocess=function(){n.spectrum=new Uint8Array(v.frequencyBinCount),v.getByteFrequencyData(n.spectrum),n.vol=n.getRMS(n.spectrum),n.vol>n.peak_volume&&(n.peak_volume=n.vol),n.volume=n.vol};var x=c.createMediaStreamSource(I);x.connect(v),v.connect(y),y.connect(c.destination)}function d(){console.log(arguments)}}}window.Microphone=Me;var C=document.querySelector("audio");function Ke(e){window.location.hash=e.split("#").pop()}function Te(){C.src="https://cdn.glitch.com/7c659aa6-fe5f-4610-bdf3-3fd76117d9a5%2F"+window.location.hash.slice(1)+".mp3",C.classList.add("paused")}var ge=new ke;window.onload=function(){var e=new Se;e.add(ge,"song",{"Glorious Morning":"/#Glorious_morning",Jumper:"/#Jumper",Stride:"/#Stride-","300 Violin Orchestra":"/#300%20Violin%20Orchestra","ThunderZone v2":"/#638150_-ThunderZone-v2-","Portugal The Man - Feel it Still":"/#Portugal.%20The%20Man%20-%20Feel%20It%20Still","The XX - Intro":"/#00%20Intro","Hall of the Mountain King":"/#Hall%20of%20the%20Mountain%20King",'Everybody Wants To Rule The World (7" Version)':"/#Everybody%20Wants%20To%20Rule%20The%20World%20(7%20Version)",Flight:"/#Flight","Electroman Adventures V2":"/#Waterflame%20-%20Electroman%20Adventures%20V2",Rasputin:"/#Rasputin"}).onChange(Ke),e.add(ge,"activateMic").name("useMicrophone")};window.location.hash&&Te();window.addEventListener("hashchange",Te);var L,K=new(window.AudioContext||window.webkitAudioContext),Y=K.createAnalyser();Y.connect(K.destination);Y.fftSize=R*2;Y.smoothingTimeConstant=.2;const Qe=K.createMediaElementSource(C);Qe.connect(Y);var qe=240,re=100,H=Math.floor(60*1e3/qe/(1e3/60))*re;let O=[],S=[];for(var D=0;D<R;D++)O.push(0),S.push(0);let _=O.slice();var z=[];for(var D=0;D<H;D++){var Ze=new Uint8Array(R);z.push(Ze)}let h=new Uint8Array(R).fill(0);function Je(){ye?L.spectrum.length===R&&(h=L.spectrum.slice()):Y.getByteFrequencyData(h);for(var e=0;e<0;e++)h=h.map((n,o)=>{var i=[n];return o<R-1&&i.push(h[o+1]),o>0&&i.push(h[o-1]),Math.max(...i)});z.unshift(h.slice()),z.pop(),_=[];for(var e=0;e<R;e++){O[e]=0,S[e]=0,_[e]=0;for(var t=0;t<H;t++)S[e]=Math.max(z[t][e],S[e]);O[e]=z[0][e]/S[e]*256;for(var t=0;t<H/re;t++)_[e]+=z[t][e]/H*re/S[e]*256}}C.addEventListener("pause",()=>{C.classList.add("paused")});C.addEventListener("play",()=>{K.resume(),C.classList.remove("paused")});function $e(){ye=!0,L||(L=new Me(R*2),L.init())}let Ve=[0];const en=()=>Ve;nn();Xe();function nn(){Pe=document.createElement("div"),document.body.appendChild(Pe),we=new ze,window.addEventListener("resize",on,!1),tn()}function tn(){Oe(en)}function on(){}function Xe(){requestAnimationFrame(Xe),Je(),rn(),we.update()}function rn(){performance.now();let e=[...h].map((n,o)=>[_[o]+h[o],o]);e.sort((n,o)=>o[0]-n[0]),e=e.map(n=>{let o=h[n[1]],i=_[n[1]];return[Math.max(0,(o-i+1e-4)/(o/2+i/2+1e-4))*256*2,n[1]]}),e.sort((n,o)=>o[0]-n[0]),Ve=e.slice(0,32).sort((n,o)=>n[1]-o[1]).map(n=>[h[n[1]]-_[n[1]],n[1]]).concat(e.slice(32).map(n=>[h[n[1]]-_[n[1]],n[1]])).map(n=>n[0]/64).slice(0,16)}
