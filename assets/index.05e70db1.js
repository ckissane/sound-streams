const Wu=function(){const _e=document.createElement("link").relList;if(_e&&_e.supports&&_e.supports("modulepreload"))return;for(const se of document.querySelectorAll('link[rel="modulepreload"]'))J(se);new MutationObserver(se=>{for(const Ae of se)if(Ae.type==="childList")for(const we of Ae.addedNodes)we.tagName==="LINK"&&we.rel==="modulepreload"&&J(we)}).observe(document,{childList:!0,subtree:!0});function $(se){const Ae={};return se.integrity&&(Ae.integrity=se.integrity),se.referrerpolicy&&(Ae.referrerPolicy=se.referrerpolicy),se.crossorigin==="use-credentials"?Ae.credentials="include":se.crossorigin==="anonymous"?Ae.credentials="omit":Ae.credentials="same-origin",Ae}function J(se){if(se.ep)return;se.ep=!0;const Ae=$(se);fetch(se.href,Ae)}};Wu();var nf=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},af={exports:{}};(function(ae,_e){(function($,J){ae.exports=J()})(nf,function(){var $=function(){var J=0,se=document.createElement("div");function Ae(ze){return se.appendChild(ze.dom),ze}function we(ze){for(var je=0;je<se.children.length;je++)se.children[je].style.display=je===ze?"block":"none";J=ze}se.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",se.addEventListener("click",function(ze){ze.preventDefault(),we(++J%se.children.length)},!1);var oe=(performance||Date).now(),be=oe,Le=0,Ke=Ae(new $.Panel("FPS","#0ff","#002")),fr=Ae(new $.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var Ye=Ae(new $.Panel("MB","#f08","#201"));return we(0),{REVISION:16,dom:se,addPanel:Ae,showPanel:we,begin:function(){oe=(performance||Date).now()},end:function(){Le++;var ze=(performance||Date).now();if(fr.update(ze-oe,200),be+1e3<=ze&&(Ke.update(1e3*Le/(ze-be),100),be=ze,Le=0,Ye)){var je=performance.memory;Ye.update(je.usedJSHeapSize/1048576,je.jsHeapSizeLimit/1048576)}return ze},update:function(){oe=this.end()},domElement:se,setMode:we}};return $.Panel=function(J,se,Ae){var we=1/0,oe=0,be=Math.round,Le=be(window.devicePixelRatio||1),Ke=80*Le,fr=48*Le,Ye=3*Le,ze=2*Le,je=3*Le,ur=15*Le,_r=74*Le,nr=30*Le,lr=document.createElement("canvas");lr.width=Ke,lr.height=fr,lr.style.cssText="width:80px;height:48px";var Ge=lr.getContext("2d");return Ge.font="bold "+9*Le+"px Helvetica,Arial,sans-serif",Ge.textBaseline="top",Ge.fillStyle=Ae,Ge.fillRect(0,0,Ke,fr),Ge.fillStyle=se,Ge.fillText(J,Ye,ze),Ge.fillRect(je,ur,_r,nr),Ge.fillStyle=Ae,Ge.globalAlpha=.9,Ge.fillRect(je,ur,_r,nr),{dom:lr,update:function(Ie,Ze){we=Math.min(we,Ie),oe=Math.max(oe,Ie),Ge.fillStyle=Ae,Ge.globalAlpha=1,Ge.fillRect(0,0,Ke,ur),Ge.fillStyle=se,Ge.fillText(be(Ie)+" "+J+" ("+be(we)+"-"+be(oe)+")",Ye,ze),Ge.drawImage(lr,je+Le,ur,_r-Le,nr,je,ur,_r-Le,nr),Ge.fillRect(je+_r-Le,ur,Le,nr),Ge.fillStyle=Ae,Ge.globalAlpha=.9,Ge.fillRect(je+_r-Le,ur,Le,be((1-Ie/Ze)*nr))}}},$})})(af);var Yu=af.exports,of={exports:{}};(function(ae,_e){(function($,J){ae.exports=J()})(nf,function(){var $=function(e){return e instanceof Uint8Array||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Float32Array||e instanceof Float64Array||e instanceof Uint8ClampedArray},J=function(e,t){for(var c=Object.keys(t),E=0;E<c.length;++E)e[c[E]]=t[c[E]];return e},se=`
`;function Ae(e){return typeof atob!="undefined"?atob(e):"base64:"+e}function we(e){var t=new Error("(regl) "+e);throw console.error(t),t}function oe(e,t){e||we(t)}function be(e){return e?": "+e:""}function Le(e,t,c){e in t||we("unknown parameter ("+e+")"+be(c)+". possible values: "+Object.keys(t).join())}function Ke(e,t){$(e)||we("invalid parameter type"+be(t)+". must be a typed array")}function fr(e,t){switch(t){case"number":return typeof e=="number";case"object":return typeof e=="object";case"string":return typeof e=="string";case"boolean":return typeof e=="boolean";case"function":return typeof e=="function";case"undefined":return typeof e=="undefined";case"symbol":return typeof e=="symbol"}}function Ye(e,t,c){fr(e,t)||we("invalid parameter type"+be(c)+". expected "+t+", got "+typeof e)}function ze(e,t){e>=0&&(e|0)===e||we("invalid parameter type, ("+e+")"+be(t)+". must be a nonnegative integer")}function je(e,t,c){t.indexOf(e)<0&&we("invalid value"+be(c)+". must be one of: "+t)}var ur=["gl","canvas","container","attributes","pixelRatio","extensions","optionalExtensions","profile","onDone"];function _r(e){Object.keys(e).forEach(function(t){ur.indexOf(t)<0&&we('invalid regl constructor argument "'+t+'". must be one of '+ur)})}function nr(e,t){for(e=e+"";e.length<t;)e=" "+e;return e}function lr(){this.name="unknown",this.lines=[],this.index={},this.hasErrors=!1}function Ge(e,t){this.number=e,this.line=t,this.errors=[]}function Ie(e,t,c){this.file=e,this.line=t,this.message=c}function Ze(){var e=new Error,t=(e.stack||e).toString(),c=/compileProcedure.*\n\s*at.*\((.*)\)/.exec(t);if(c)return c[1];var E=/compileProcedure.*\n\s*at\s+(.*)(\n|$)/.exec(t);return E?E[1]:"unknown"}function xr(){var e=new Error,t=(e.stack||e).toString(),c=/at REGLCommand.*\n\s+at.*\((.*)\)/.exec(t);if(c)return c[1];var E=/at REGLCommand.*\n\s+at\s+(.*)\n/.exec(t);return E?E[1]:"unknown"}function Pr(e,t){var c=e.split(`
`),E=1,P=0,x={unknown:new lr,0:new lr};x.unknown.name=x[0].name=t||Ze(),x.unknown.lines.push(new Ge(0,""));for(var A=0;A<c.length;++A){var M=c[A],G=/^\s*#\s*(\w+)\s+(.+)\s*$/.exec(M);if(G)switch(G[1]){case"line":var k=/(\d+)(\s+\d+)?/.exec(G[2]);k&&(E=k[1]|0,k[2]&&(P=k[2]|0,P in x||(x[P]=new lr)));break;case"define":var X=/SHADER_NAME(_B64)?\s+(.*)$/.exec(G[2]);X&&(x[P].name=X[1]?Ae(X[2]):X[2]);break}x[P].lines.push(new Ge(E++,M))}return Object.keys(x).forEach(function(V){var z=x[V];z.lines.forEach(function(D){z.index[D.number]=D})}),x}function Qt(e){var t=[];return e.split(`
`).forEach(function(c){if(!(c.length<5)){var E=/^ERROR:\s+(\d+):(\d+):\s*(.*)$/.exec(c);E?t.push(new Ie(E[1]|0,E[2]|0,E[3].trim())):c.length>0&&t.push(new Ie("unknown",0,c))}}),t}function df(e,t){t.forEach(function(c){var E=e[c.file];if(E){var P=E.index[c.line];if(P){P.errors.push(c),E.hasErrors=!0;return}}e.unknown.hasErrors=!0,e.unknown.lines[0].errors.push(c)})}function mf(e,t,c,E,P){if(!e.getShaderParameter(t,e.COMPILE_STATUS)){var x=e.getShaderInfoLog(t),A=E===e.FRAGMENT_SHADER?"fragment":"vertex";Wa(c,"string",A+" shader source must be a string",P);var M=Pr(c,P),G=Qt(x);df(M,G),Object.keys(M).forEach(function(k){var X=M[k];if(!X.hasErrors)return;var V=[""],z=[""];function D(N,h){V.push(N),z.push(h||"")}D("file number "+k+": "+X.name+`
`,"color:red;text-decoration:underline;font-weight:bold"),X.lines.forEach(function(N){if(N.errors.length>0){D(nr(N.number,4)+"|  ","background-color:yellow; font-weight:bold"),D(N.line+se,"color:red; background-color:yellow; font-weight:bold");var h=0;N.errors.forEach(function(g){var B=g.message,Z=/^\s*'(.*)'\s*:\s*(.*)$/.exec(B);if(Z){var O=Z[1];switch(B=Z[2],O){case"assign":O="=";break}h=Math.max(N.line.indexOf(O,h),0)}else h=0;D(nr("| ",6)),D(nr("^^^",h+3)+se,"font-weight:bold"),D(nr("| ",6)),D(B+se,"font-weight:bold")}),D(nr("| ",6)+se)}else D(nr(N.number,4)+"|  "),D(N.line+se,"color:red")}),typeof document!="undefined"&&!window.chrome?(z[0]=V.join("%c"),console.log.apply(console,z)):console.log(V.join(""))}),oe.raise("Error compiling "+A+" shader, "+M[0].name)}}function vf(e,t,c,E,P){if(!e.getProgramParameter(t,e.LINK_STATUS)){var x=e.getProgramInfoLog(t),A=Pr(c,P),M=Pr(E,P),G='Error linking program with vertex shader, "'+M[0].name+'", and fragment shader "'+A[0].name+'"';typeof document!="undefined"?console.log("%c"+G+se+"%c"+x,"color:red;text-decoration:underline;font-weight:bold","color:red"):console.log(G+se+x),oe.raise(G)}}function $a(e){e._commandRef=Ze()}function hf(e,t,c,E){$a(e);function P(G){return G?E.id(G):0}e._fragId=P(e.static.frag),e._vertId=P(e.static.vert);function x(G,k){Object.keys(k).forEach(function(X){G[E.id(X)]=!0})}var A=e._uniformSet={};x(A,t.static),x(A,t.dynamic);var M=e._attributeSet={};x(M,c.static),x(M,c.dynamic),e._hasCount="count"in e.static||"count"in e.dynamic||"elements"in e.static||"elements"in e.dynamic}function qt(e,t){var c=xr();we(e+" in command "+(t||Ze())+(c==="unknown"?"":" called from "+c))}function pf(e,t,c){e||qt(t,c||Ze())}function bf(e,t,c,E){e in t||qt("unknown parameter ("+e+")"+be(c)+". possible values: "+Object.keys(t).join(),E||Ze())}function Wa(e,t,c,E){fr(e,t)||qt("invalid parameter type"+be(c)+". expected "+t+", got "+typeof e,E||Ze())}function yf(e){e()}function _f(e,t,c){e.texture?je(e.texture._texture.internalformat,t,"unsupported texture format for attachment"):je(e.renderbuffer._renderbuffer.format,c,"unsupported renderbuffer format for attachment")}var Kt=33071,Ya=9728,xf=9984,Ef=9985,Tf=9986,gf=9987,Af=5120,Sf=5121,wf=5122,Rf=5123,Pf=5124,Lf=5125,Qa=5126,qa=32819,Ka=32820,Za=33635,Ja=34042,Cf=36193,dr={};dr[Af]=dr[Sf]=1,dr[wf]=dr[Rf]=dr[Cf]=dr[Za]=dr[qa]=dr[Ka]=2,dr[Pf]=dr[Lf]=dr[Qa]=dr[Ja]=4;function ei(e,t){return e===Ka||e===qa||e===Za?2:e===Ja?4:dr[e]*t}function Zt(e){return!(e&e-1)&&!!e}function Ff(e,t,c){var E,P=t.width,x=t.height,A=t.channels;oe(P>0&&P<=c.maxTextureSize&&x>0&&x<=c.maxTextureSize,"invalid texture shape"),(e.wrapS!==Kt||e.wrapT!==Kt)&&oe(Zt(P)&&Zt(x),"incompatible wrap mode for texture, both width and height must be power of 2"),t.mipmask===1?P!==1&&x!==1&&oe(e.minFilter!==xf&&e.minFilter!==Tf&&e.minFilter!==Ef&&e.minFilter!==gf,"min filter requires mipmap"):(oe(Zt(P)&&Zt(x),"texture must be a square power of 2 to support mipmapping"),oe(t.mipmask===(P<<1)-1,"missing or incomplete mipmap data")),t.type===Qa&&(c.extensions.indexOf("oes_texture_float_linear")<0&&oe(e.minFilter===Ya&&e.magFilter===Ya,"filter not supported, must enable oes_texture_float_linear"),oe(!e.genMipmaps,"mipmap generation not supported with float textures"));var M=t.images;for(E=0;E<16;++E)if(M[E]){var G=P>>E,k=x>>E;oe(t.mipmask&1<<E,"missing mipmap data");var X=M[E];if(oe(X.width===G&&X.height===k,"invalid shape for mip images"),oe(X.format===t.format&&X.internalformat===t.internalformat&&X.type===t.type,"incompatible type for mip image"),!X.compressed)if(X.data){var V=Math.ceil(ei(X.type,A)*G/X.unpackAlignment)*X.unpackAlignment;oe(X.data.byteLength===V*k,"invalid data for image, buffer size is inconsistent with image format")}else X.element||X.copy}else e.genMipmaps||oe((t.mipmask&1<<E)===0,"extra mipmap data");t.compressed&&oe(!e.genMipmaps,"mipmap generation for compressed images not supported")}function Of(e,t,c,E){var P=e.width,x=e.height,A=e.channels;oe(P>0&&P<=E.maxTextureSize&&x>0&&x<=E.maxTextureSize,"invalid texture shape"),oe(P===x,"cube map must be square"),oe(t.wrapS===Kt&&t.wrapT===Kt,"wrap mode not supported by cube map");for(var M=0;M<c.length;++M){var G=c[M];oe(G.width===P&&G.height===x,"inconsistent cube map face shape"),t.genMipmaps&&(oe(!G.compressed,"can not generate mipmap for compressed textures"),oe(G.mipmask===1,"can not specify mipmaps and generate mipmaps"));for(var k=G.images,X=0;X<16;++X){var V=k[X];if(V){var z=P>>X,D=x>>X;oe(G.mipmask&1<<X,"missing mipmap data"),oe(V.width===z&&V.height===D,"invalid shape for mip images"),oe(V.format===e.format&&V.internalformat===e.internalformat&&V.type===e.type,"incompatible type for mip image"),V.compressed||(V.data?oe(V.data.byteLength===z*D*Math.max(ei(V.type,A),V.unpackAlignment),"invalid data for image, buffer size is inconsistent with image format"):V.element||V.copy)}}}}var n=J(oe,{optional:yf,raise:we,commandRaise:qt,command:pf,parameter:Le,commandParameter:bf,constructor:_r,type:Ye,commandType:Wa,isTypedArray:Ke,nni:ze,oneOf:je,shaderError:mf,linkError:vf,callSite:xr,saveCommandRef:$a,saveDrawInfo:hf,framebufferFormat:_f,guessCommand:Ze,texture2D:Ff,textureCube:Of}),Gf=0,Mf=0,Df=5,If=6;function $r(e,t){this.id=Gf++,this.type=e,this.data=t}function ri(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function wt(e){if(e.length===0)return[];var t=e.charAt(0),c=e.charAt(e.length-1);if(e.length>1&&t===c&&(t==='"'||t==="'"))return['"'+ri(e.substr(1,e.length-2))+'"'];var E=/\[(false|true|null|\d+|'[^']*'|"[^"]*")\]/.exec(e);if(E)return wt(e.substr(0,E.index)).concat(wt(E[1])).concat(wt(e.substr(E.index+E[0].length)));var P=e.split(".");if(P.length===1)return['"'+ri(e)+'"'];for(var x=[],A=0;A<P.length;++A)x=x.concat(wt(P[A]));return x}function ti(e){return"["+wt(e).join("][")+"]"}function Bf(e,t){return new $r(e,ti(t+""))}function Nf(e){return typeof e=="function"&&!e._reglType||e instanceof $r}function ni(e,t){if(typeof e=="function")return new $r(Mf,e);if(typeof e=="number"||typeof e=="boolean")return new $r(Df,e);if(Array.isArray(e))return new $r(If,e.map(function(c,E){return ni(c,t+"["+E+"]")}));if(e instanceof $r)return e;n(!1,"invalid option type in uniform "+t)}var mr={DynamicVariable:$r,define:Bf,isDynamic:Nf,unbox:ni,accessor:ti},Nn={next:typeof requestAnimationFrame=="function"?function(e){return requestAnimationFrame(e)}:function(e){return setTimeout(e,16)},cancel:typeof cancelAnimationFrame=="function"?function(e){return cancelAnimationFrame(e)}:clearTimeout},ai=typeof performance!="undefined"&&performance.now?function(){return performance.now()}:function(){return+new Date};function kf(){var e={"":0},t=[""];return{id:function(c){var E=e[c];return E||(E=e[c]=t.length,t.push(c),E)},str:function(c){return t[c]}}}function Vf(e,t,c){var E=document.createElement("canvas");J(E.style,{border:0,margin:0,padding:0,top:0,left:0,width:"100%",height:"100%"}),e.appendChild(E),e===document.body&&(E.style.position="absolute",J(e.style,{margin:0,padding:0}));function P(){var M=window.innerWidth,G=window.innerHeight;if(e!==document.body){var k=E.getBoundingClientRect();M=k.right-k.left,G=k.bottom-k.top}E.width=c*M,E.height=c*G}var x;e!==document.body&&typeof ResizeObserver=="function"?(x=new ResizeObserver(function(){setTimeout(P)}),x.observe(e)):window.addEventListener("resize",P,!1);function A(){x?x.disconnect():window.removeEventListener("resize",P),e.removeChild(E)}return P(),{canvas:E,onDestroy:A}}function Xf(e,t){function c(E){try{return e.getContext(E,t)}catch{return null}}return c("webgl")||c("experimental-webgl")||c("webgl-experimental")}function Uf(e){return typeof e.nodeName=="string"&&typeof e.appendChild=="function"&&typeof e.getBoundingClientRect=="function"}function zf(e){return typeof e.drawArrays=="function"||typeof e.drawElements=="function"}function ii(e){return typeof e=="string"?e.split():(n(Array.isArray(e),"invalid extension array"),e)}function oi(e){return typeof e=="string"?(n(typeof document!="undefined","not supported outside of DOM"),document.querySelector(e)):e}function jf(e){var t=e||{},c,E,P,x,A={},M=[],G=[],k=typeof window=="undefined"?1:window.devicePixelRatio,X=!1,V=function(N){N&&n.raise(N)},z=function(){};if(typeof t=="string"?(n(typeof document!="undefined","selector queries only supported in DOM enviroments"),c=document.querySelector(t),n(c,"invalid query string for element")):typeof t=="object"?Uf(t)?c=t:zf(t)?(x=t,P=x.canvas):(n.constructor(t),"gl"in t?x=t.gl:"canvas"in t?P=oi(t.canvas):"container"in t&&(E=oi(t.container)),"attributes"in t&&(A=t.attributes,n.type(A,"object","invalid context attributes")),"extensions"in t&&(M=ii(t.extensions)),"optionalExtensions"in t&&(G=ii(t.optionalExtensions)),"onDone"in t&&(n.type(t.onDone,"function","invalid or missing onDone callback"),V=t.onDone),"profile"in t&&(X=!!t.profile),"pixelRatio"in t&&(k=+t.pixelRatio,n(k>0,"invalid pixel ratio"))):n.raise("invalid arguments to regl"),c&&(c.nodeName.toLowerCase()==="canvas"?P=c:E=c),!x){if(!P){n(typeof document!="undefined","must manually specify webgl context outside of DOM environments");var D=Vf(E||document.body,V,k);if(!D)return null;P=D.canvas,z=D.onDestroy}A.premultipliedAlpha===void 0&&(A.premultipliedAlpha=!0),x=Xf(P,A)}return x?{gl:x,canvas:P,container:E,extensions:M,optionalExtensions:G,pixelRatio:k,profile:X,onDone:V,onDestroy:z}:(z(),V("webgl not supported, try upgrading your browser or graphics drivers http://get.webgl.org"),null)}function Hf(e,t){var c={};function E(A){n.type(A,"string","extension name must be string");var M=A.toLowerCase(),G;try{G=c[M]=e.getExtension(M)}catch{}return!!G}for(var P=0;P<t.extensions.length;++P){var x=t.extensions[P];if(!E(x))return t.onDestroy(),t.onDone('"'+x+'" extension is not supported by the current WebGL context, try upgrading your system or a different browser'),null}return t.optionalExtensions.forEach(E),{extensions:c,restore:function(){Object.keys(c).forEach(function(A){if(c[A]&&!E(A))throw new Error("(regl): error restoring extension "+A)})}}}function vr(e,t){for(var c=Array(e),E=0;E<e;++E)c[E]=t(E);return c}var $f=5120,Wf=5121,Yf=5122,Qf=5123,qf=5124,Kf=5125,Zf=5126;function Jf(e){for(var t=16;t<=1<<28;t*=16)if(e<=t)return t;return 0}function fi(e){var t,c;return t=(e>65535)<<4,e>>>=t,c=(e>255)<<3,e>>>=c,t|=c,c=(e>15)<<2,e>>>=c,t|=c,c=(e>3)<<1,e>>>=c,t|=c,t|e>>1}function si(){var e=vr(8,function(){return[]});function t(x){var A=Jf(x),M=e[fi(A)>>2];return M.length>0?M.pop():new ArrayBuffer(A)}function c(x){e[fi(x.byteLength)>>2].push(x)}function E(x,A){var M=null;switch(x){case $f:M=new Int8Array(t(A),0,A);break;case Wf:M=new Uint8Array(t(A),0,A);break;case Yf:M=new Int16Array(t(2*A),0,A);break;case Qf:M=new Uint16Array(t(2*A),0,A);break;case qf:M=new Int32Array(t(4*A),0,A);break;case Kf:M=new Uint32Array(t(4*A),0,A);break;case Zf:M=new Float32Array(t(4*A),0,A);break;default:return null}return M.length!==A?M.subarray(0,A):M}function P(x){c(x.buffer)}return{alloc:t,free:c,allocType:E,freeType:P}}var Ve=si();Ve.zero=si();var es=3408,rs=3410,ts=3411,ns=3412,as=3413,is=3414,os=3415,fs=33901,ss=33902,cs=3379,us=3386,ls=34921,ds=36347,ms=36348,vs=35661,hs=35660,ps=34930,bs=36349,ys=34076,_s=34024,xs=7936,Es=7937,Ts=7938,gs=35724,As=34047,Ss=36063,ws=34852,Jt=3553,ci=34067,Rs=34069,Ps=33984,Rt=6408,kn=5126,ui=5121,Vn=36160,Ls=36053,Cs=36064,Fs=16384,Os=function(e,t){var c=1;t.ext_texture_filter_anisotropic&&(c=e.getParameter(As));var E=1,P=1;t.webgl_draw_buffers&&(E=e.getParameter(ws),P=e.getParameter(Ss));var x=!!t.oes_texture_float;if(x){var A=e.createTexture();e.bindTexture(Jt,A),e.texImage2D(Jt,0,Rt,1,1,0,Rt,kn,null);var M=e.createFramebuffer();if(e.bindFramebuffer(Vn,M),e.framebufferTexture2D(Vn,Cs,Jt,A,0),e.bindTexture(Jt,null),e.checkFramebufferStatus(Vn)!==Ls)x=!1;else{e.viewport(0,0,1,1),e.clearColor(1,0,0,1),e.clear(Fs);var G=Ve.allocType(kn,4);e.readPixels(0,0,1,1,Rt,kn,G),e.getError()?x=!1:(e.deleteFramebuffer(M),e.deleteTexture(A),x=G[0]===1),Ve.freeType(G)}}var k=typeof navigator!="undefined"&&(/MSIE/.test(navigator.userAgent)||/Trident\//.test(navigator.appVersion)||/Edge/.test(navigator.userAgent)),X=!0;if(!k){var V=e.createTexture(),z=Ve.allocType(ui,36);e.activeTexture(Ps),e.bindTexture(ci,V),e.texImage2D(Rs,0,Rt,3,3,0,Rt,ui,z),Ve.freeType(z),e.bindTexture(ci,null),e.deleteTexture(V),X=!e.getError()}return{colorBits:[e.getParameter(rs),e.getParameter(ts),e.getParameter(ns),e.getParameter(as)],depthBits:e.getParameter(is),stencilBits:e.getParameter(os),subpixelBits:e.getParameter(es),extensions:Object.keys(t).filter(function(D){return!!t[D]}),maxAnisotropic:c,maxDrawbuffers:E,maxColorAttachments:P,pointSizeDims:e.getParameter(fs),lineWidthDims:e.getParameter(ss),maxViewportDims:e.getParameter(us),maxCombinedTextureUnits:e.getParameter(vs),maxCubeMapSize:e.getParameter(ys),maxRenderbufferSize:e.getParameter(_s),maxTextureUnits:e.getParameter(ps),maxTextureSize:e.getParameter(cs),maxAttributes:e.getParameter(ls),maxVertexUniforms:e.getParameter(ds),maxVertexTextureUnits:e.getParameter(hs),maxVaryingVectors:e.getParameter(ms),maxFragmentUniforms:e.getParameter(bs),glsl:e.getParameter(gs),renderer:e.getParameter(Es),vendor:e.getParameter(xs),version:e.getParameter(Ts),readFloat:x,npotTextureCube:X}};function Er(e){return!!e&&typeof e=="object"&&Array.isArray(e.shape)&&Array.isArray(e.stride)&&typeof e.offset=="number"&&e.shape.length===e.stride.length&&(Array.isArray(e.data)||$(e.data))}var hr=function(e){return Object.keys(e).map(function(t){return e[t]})},en={shape:Is,flatten:Ds};function Gs(e,t,c){for(var E=0;E<t;++E)c[E]=e[E]}function Ms(e,t,c,E){for(var P=0,x=0;x<t;++x)for(var A=e[x],M=0;M<c;++M)E[P++]=A[M]}function li(e,t,c,E,P,x){for(var A=x,M=0;M<t;++M)for(var G=e[M],k=0;k<c;++k)for(var X=G[k],V=0;V<E;++V)P[A++]=X[V]}function di(e,t,c,E,P){for(var x=1,A=c+1;A<t.length;++A)x*=t[A];var M=t[c];if(t.length-c===4){var G=t[c+1],k=t[c+2],X=t[c+3];for(A=0;A<M;++A)li(e[A],G,k,X,E,P),P+=x}else for(A=0;A<M;++A)di(e[A],t,c+1,E,P),P+=x}function Ds(e,t,c,E){var P=1;if(t.length)for(var x=0;x<t.length;++x)P*=t[x];else P=0;var A=E||Ve.allocType(c,P);switch(t.length){case 0:break;case 1:Gs(e,t[0],A);break;case 2:Ms(e,t[0],t[1],A);break;case 3:li(e,t[0],t[1],t[2],A,0);break;default:di(e,t,0,A,0)}return A}function Is(e){for(var t=[],c=e;c.length;c=c[0])t.push(c.length);return t}var Xn={"[object Int8Array]":5120,"[object Int16Array]":5122,"[object Int32Array]":5124,"[object Uint8Array]":5121,"[object Uint8ClampedArray]":5121,"[object Uint16Array]":5123,"[object Uint32Array]":5125,"[object Float32Array]":5126,"[object Float64Array]":5121,"[object ArrayBuffer]":5121},Bs=5120,Ns=5122,ks=5124,Vs=5121,Xs=5123,Us=5125,zs=5126,js=5126,Wr={int8:Bs,int16:Ns,int32:ks,uint8:Vs,uint16:Xs,uint32:Us,float:zs,float32:js},Hs=35048,$s=35040,rn={dynamic:Hs,stream:$s,static:35044},Un=en.flatten,mi=en.shape,vi=35044,Ws=35040,zn=5121,jn=5126,Nr=[];Nr[5120]=1,Nr[5122]=2,Nr[5124]=4,Nr[5121]=1,Nr[5123]=2,Nr[5125]=4,Nr[5126]=4;function tn(e){return Xn[Object.prototype.toString.call(e)]|0}function hi(e,t){for(var c=0;c<t.length;++c)e[c]=t[c]}function pi(e,t,c,E,P,x,A){for(var M=0,G=0;G<c;++G)for(var k=0;k<E;++k)e[M++]=t[P*G+x*k+A]}function Ys(e,t,c,E){var P=0,x={};function A(h){this.id=P++,this.buffer=e.createBuffer(),this.type=h,this.usage=vi,this.byteLength=0,this.dimension=1,this.dtype=zn,this.persistentData=null,c.profile&&(this.stats={size:0})}A.prototype.bind=function(){e.bindBuffer(this.type,this.buffer)},A.prototype.destroy=function(){z(this)};var M=[];function G(h,g){var B=M.pop();return B||(B=new A(h)),B.bind(),V(B,g,Ws,0,1,!1),B}function k(h){M.push(h)}function X(h,g,B){h.byteLength=g.byteLength,e.bufferData(h.type,g,B)}function V(h,g,B,Z,O,q){var Y;if(h.usage=B,Array.isArray(g)){if(h.dtype=Z||jn,g.length>0){var ce;if(Array.isArray(g[0])){Y=mi(g);for(var L=1,R=1;R<Y.length;++R)L*=Y[R];h.dimension=L,ce=Un(g,Y,h.dtype),X(h,ce,B),q?h.persistentData=ce:Ve.freeType(ce)}else if(typeof g[0]=="number"){h.dimension=O;var te=Ve.allocType(h.dtype,g.length);hi(te,g),X(h,te,B),q?h.persistentData=te:Ve.freeType(te)}else $(g[0])?(h.dimension=g[0].length,h.dtype=Z||tn(g[0])||jn,ce=Un(g,[g.length,g[0].length],h.dtype),X(h,ce,B),q?h.persistentData=ce:Ve.freeType(ce)):n.raise("invalid buffer data")}}else if($(g))h.dtype=Z||tn(g),h.dimension=O,X(h,g,B),q&&(h.persistentData=new Uint8Array(new Uint8Array(g.buffer)));else if(Er(g)){Y=g.shape;var j=g.stride,I=g.offset,H=0,W=0,he=0,ve=0;Y.length===1?(H=Y[0],W=1,he=j[0],ve=0):Y.length===2?(H=Y[0],W=Y[1],he=j[0],ve=j[1]):n.raise("invalid shape"),h.dtype=Z||tn(g.data)||jn,h.dimension=W;var Q=Ve.allocType(h.dtype,H*W);pi(Q,g.data,H,W,he,ve,I),X(h,Q,B),q?h.persistentData=Q:Ve.freeType(Q)}else g instanceof ArrayBuffer?(h.dtype=zn,h.dimension=O,X(h,g,B),q&&(h.persistentData=new Uint8Array(new Uint8Array(g)))):n.raise("invalid buffer data")}function z(h){t.bufferCount--,E(h);var g=h.buffer;n(g,"buffer must not be deleted already"),e.deleteBuffer(g),h.buffer=null,delete x[h.id]}function D(h,g,B,Z){t.bufferCount++;var O=new A(g);x[O.id]=O;function q(L){var R=vi,te=null,j=0,I=0,H=1;return Array.isArray(L)||$(L)||Er(L)||L instanceof ArrayBuffer?te=L:typeof L=="number"?j=L|0:L&&(n.type(L,"object","buffer arguments must be an object, a number or an array"),"data"in L&&(n(te===null||Array.isArray(te)||$(te)||Er(te),"invalid data for buffer"),te=L.data),"usage"in L&&(n.parameter(L.usage,rn,"invalid buffer usage"),R=rn[L.usage]),"type"in L&&(n.parameter(L.type,Wr,"invalid buffer type"),I=Wr[L.type]),"dimension"in L&&(n.type(L.dimension,"number","invalid dimension"),H=L.dimension|0),"length"in L&&(n.nni(j,"buffer length must be a nonnegative integer"),j=L.length|0)),O.bind(),te?V(O,te,R,I,H,Z):(j&&e.bufferData(O.type,j,R),O.dtype=I||zn,O.usage=R,O.dimension=H,O.byteLength=j),c.profile&&(O.stats.size=O.byteLength*Nr[O.dtype]),q}function Y(L,R){n(R+L.byteLength<=O.byteLength,"invalid buffer subdata call, buffer is too small.  Can't write data of size "+L.byteLength+" starting from offset "+R+" to a buffer of size "+O.byteLength),e.bufferSubData(O.type,R,L)}function ce(L,R){var te=(R||0)|0,j;if(O.bind(),$(L)||L instanceof ArrayBuffer)Y(L,te);else if(Array.isArray(L)){if(L.length>0)if(typeof L[0]=="number"){var I=Ve.allocType(O.dtype,L.length);hi(I,L),Y(I,te),Ve.freeType(I)}else if(Array.isArray(L[0])||$(L[0])){j=mi(L);var H=Un(L,j,O.dtype);Y(H,te),Ve.freeType(H)}else n.raise("invalid buffer data")}else if(Er(L)){j=L.shape;var W=L.stride,he=0,ve=0,Q=0,K=0;j.length===1?(he=j[0],ve=1,Q=W[0],K=0):j.length===2?(he=j[0],ve=j[1],Q=W[0],K=W[1]):n.raise("invalid shape");var le=Array.isArray(L.data)?O.dtype:tn(L.data),pe=Ve.allocType(le,he*ve);pi(pe,L.data,he,ve,Q,K,L.offset),Y(pe,te),Ve.freeType(pe)}else n.raise("invalid data for buffer subdata");return q}return B||q(h),q._reglType="buffer",q._buffer=O,q.subdata=ce,c.profile&&(q.stats=O.stats),q.destroy=function(){z(O)},q}function N(){hr(x).forEach(function(h){h.buffer=e.createBuffer(),e.bindBuffer(h.type,h.buffer),e.bufferData(h.type,h.persistentData||h.byteLength,h.usage)})}return c.profile&&(t.getTotalBufferSize=function(){var h=0;return Object.keys(x).forEach(function(g){h+=x[g].stats.size}),h}),{create:D,createStream:G,destroyStream:k,clear:function(){hr(x).forEach(z),M.forEach(z)},getBuffer:function(h){return h&&h._buffer instanceof A?h._buffer:null},restore:N,_initBuffer:V}}var Qs=0,qs=0,Ks=1,Zs=1,Js=4,ec=4,kr={points:Qs,point:qs,lines:Ks,line:Zs,triangles:Js,triangle:ec,"line loop":2,"line strip":3,"triangle strip":5,"triangle fan":6},rc=0,tc=1,Pt=4,nc=5120,ct=5121,bi=5122,ut=5123,yi=5124,Yr=5125,Hn=34963,ac=35040,ic=35044;function oc(e,t,c,E){var P={},x=0,A={uint8:ct,uint16:ut};t.oes_element_index_uint&&(A.uint32=Yr);function M(N){this.id=x++,P[this.id]=this,this.buffer=N,this.primType=Pt,this.vertCount=0,this.type=0}M.prototype.bind=function(){this.buffer.bind()};var G=[];function k(N){var h=G.pop();return h||(h=new M(c.create(null,Hn,!0,!1)._buffer)),V(h,N,ac,-1,-1,0,0),h}function X(N){G.push(N)}function V(N,h,g,B,Z,O,q){N.buffer.bind();var Y;if(h){var ce=q;!q&&(!$(h)||Er(h)&&!$(h.data))&&(ce=t.oes_element_index_uint?Yr:ut),c._initBuffer(N.buffer,h,g,ce,3)}else e.bufferData(Hn,O,g),N.buffer.dtype=Y||ct,N.buffer.usage=g,N.buffer.dimension=3,N.buffer.byteLength=O;if(Y=q,!q){switch(N.buffer.dtype){case ct:case nc:Y=ct;break;case ut:case bi:Y=ut;break;case Yr:case yi:Y=Yr;break;default:n.raise("unsupported type for element array")}N.buffer.dtype=Y}N.type=Y,n(Y!==Yr||!!t.oes_element_index_uint,"32 bit element buffers not supported, enable oes_element_index_uint first");var L=Z;L<0&&(L=N.buffer.byteLength,Y===ut?L>>=1:Y===Yr&&(L>>=2)),N.vertCount=L;var R=B;if(B<0){R=Pt;var te=N.buffer.dimension;te===1&&(R=rc),te===2&&(R=tc),te===3&&(R=Pt)}N.primType=R}function z(N){E.elementsCount--,n(N.buffer!==null,"must not double destroy elements"),delete P[N.id],N.buffer.destroy(),N.buffer=null}function D(N,h){var g=c.create(null,Hn,!0),B=new M(g._buffer);E.elementsCount++;function Z(O){if(!O)g(),B.primType=Pt,B.vertCount=0,B.type=ct;else if(typeof O=="number")g(O),B.primType=Pt,B.vertCount=O|0,B.type=ct;else{var q=null,Y=ic,ce=-1,L=-1,R=0,te=0;Array.isArray(O)||$(O)||Er(O)?q=O:(n.type(O,"object","invalid arguments for elements"),"data"in O&&(q=O.data,n(Array.isArray(q)||$(q)||Er(q),"invalid data for element buffer")),"usage"in O&&(n.parameter(O.usage,rn,"invalid element buffer usage"),Y=rn[O.usage]),"primitive"in O&&(n.parameter(O.primitive,kr,"invalid element buffer primitive"),ce=kr[O.primitive]),"count"in O&&(n(typeof O.count=="number"&&O.count>=0,"invalid vertex count for elements"),L=O.count|0),"type"in O&&(n.parameter(O.type,A,"invalid buffer type"),te=A[O.type]),"length"in O?R=O.length|0:(R=L,te===ut||te===bi?R*=2:(te===Yr||te===yi)&&(R*=4))),V(B,q,Y,ce,L,R,te)}return Z}return Z(N),Z._reglType="elements",Z._elements=B,Z.subdata=function(O,q){return g.subdata(O,q),Z},Z.destroy=function(){z(B)},Z}return{create:D,createStream:k,destroyStream:X,getElements:function(N){return typeof N=="function"&&N._elements instanceof M?N._elements:null},clear:function(){hr(P).forEach(z)}}}var _i=new Float32Array(1),fc=new Uint32Array(_i.buffer),sc=5123;function xi(e){for(var t=Ve.allocType(sc,e.length),c=0;c<e.length;++c)if(isNaN(e[c]))t[c]=65535;else if(e[c]===1/0)t[c]=31744;else if(e[c]===-1/0)t[c]=64512;else{_i[0]=e[c];var E=fc[0],P=E>>>31<<15,x=(E<<1>>>24)-127,A=E>>13&(1<<10)-1;if(x<-24)t[c]=P;else if(x<-14){var M=-14-x;t[c]=P+(A+(1<<10)>>M)}else x>15?t[c]=P+31744:t[c]=P+(x+15<<10)+A}return t}function Me(e){return Array.isArray(e)||$(e)}var Ei=function(e){return!(e&e-1)&&!!e},cc=34467,Lr=3553,$n=34067,nn=34069,Qr=6408,Wn=6406,an=6407,Lt=6409,on=6410,Ti=32854,Yn=32855,gi=36194,uc=32819,lc=32820,dc=33635,mc=34042,Qn=6402,fn=34041,qn=35904,Kn=35906,lt=36193,Zn=33776,Jn=33777,ea=33778,ra=33779,Ai=35986,Si=35987,wi=34798,Ri=35840,Pi=35841,Li=35842,Ci=35843,Fi=36196,dt=5121,ta=5123,na=5125,Ct=5126,vc=10242,hc=10243,pc=10497,aa=33071,bc=33648,yc=10240,_c=10241,ia=9728,xc=9729,oa=9984,Oi=9985,Gi=9986,fa=9987,Ec=33170,sn=4352,Tc=4353,gc=4354,Ac=34046,Sc=3317,wc=37440,Rc=37441,Pc=37443,Mi=37444,Ft=33984,Lc=[oa,Gi,Oi,fa],cn=[0,Lt,on,an,Qr],br={};br[Lt]=br[Wn]=br[Qn]=1,br[fn]=br[on]=2,br[an]=br[qn]=3,br[Qr]=br[Kn]=4;function mt(e){return"[object "+e+"]"}var Di=mt("HTMLCanvasElement"),Ii=mt("OffscreenCanvas"),Bi=mt("CanvasRenderingContext2D"),Ni=mt("ImageBitmap"),ki=mt("HTMLImageElement"),Vi=mt("HTMLVideoElement"),Cc=Object.keys(Xn).concat([Di,Ii,Bi,Ni,ki,Vi]),vt=[];vt[dt]=1,vt[Ct]=4,vt[lt]=2,vt[ta]=2,vt[na]=4;var Je=[];Je[Ti]=2,Je[Yn]=2,Je[gi]=2,Je[fn]=4,Je[Zn]=.5,Je[Jn]=.5,Je[ea]=1,Je[ra]=1,Je[Ai]=.5,Je[Si]=1,Je[wi]=1,Je[Ri]=.5,Je[Pi]=.25,Je[Li]=.5,Je[Ci]=.25,Je[Fi]=.5;function Xi(e){return Array.isArray(e)&&(e.length===0||typeof e[0]=="number")}function Ui(e){if(!Array.isArray(e))return!1;var t=e.length;return!(t===0||!Me(e[0]))}function qr(e){return Object.prototype.toString.call(e)}function zi(e){return qr(e)===Di}function ji(e){return qr(e)===Ii}function Fc(e){return qr(e)===Bi}function Oc(e){return qr(e)===Ni}function Gc(e){return qr(e)===ki}function Mc(e){return qr(e)===Vi}function sa(e){if(!e)return!1;var t=qr(e);return Cc.indexOf(t)>=0?!0:Xi(e)||Ui(e)||Er(e)}function Hi(e){return Xn[Object.prototype.toString.call(e)]|0}function Dc(e,t){var c=t.length;switch(e.type){case dt:case ta:case na:case Ct:var E=Ve.allocType(e.type,c);E.set(t),e.data=E;break;case lt:e.data=xi(t);break;default:n.raise("unsupported texture type, must specify a typed array")}}function $i(e,t){return Ve.allocType(e.type===lt?Ct:e.type,t)}function Wi(e,t){e.type===lt?(e.data=xi(t),Ve.freeType(t)):e.data=t}function Ic(e,t,c,E,P,x){for(var A=e.width,M=e.height,G=e.channels,k=A*M*G,X=$i(e,k),V=0,z=0;z<M;++z)for(var D=0;D<A;++D)for(var N=0;N<G;++N)X[V++]=t[c*D+E*z+P*N+x];Wi(e,X)}function un(e,t,c,E,P,x){var A;if(typeof Je[e]!="undefined"?A=Je[e]:A=br[e]*vt[t],x&&(A*=6),P){for(var M=0,G=c;G>=1;)M+=A*G*G,G/=2;return M}else return A*c*E}function Bc(e,t,c,E,P,x,A){var M={"don't care":sn,"dont care":sn,nice:gc,fast:Tc},G={repeat:pc,clamp:aa,mirror:bc},k={nearest:ia,linear:xc},X=J({mipmap:fa,"nearest mipmap nearest":oa,"linear mipmap nearest":Oi,"nearest mipmap linear":Gi,"linear mipmap linear":fa},k),V={none:0,browser:Mi},z={uint8:dt,rgba4:uc,rgb565:dc,"rgb5 a1":lc},D={alpha:Wn,luminance:Lt,"luminance alpha":on,rgb:an,rgba:Qr,rgba4:Ti,"rgb5 a1":Yn,rgb565:gi},N={};t.ext_srgb&&(D.srgb=qn,D.srgba=Kn),t.oes_texture_float&&(z.float32=z.float=Ct),t.oes_texture_half_float&&(z.float16=z["half float"]=lt),t.webgl_depth_texture&&(J(D,{depth:Qn,"depth stencil":fn}),J(z,{uint16:ta,uint32:na,"depth stencil":mc})),t.webgl_compressed_texture_s3tc&&J(N,{"rgb s3tc dxt1":Zn,"rgba s3tc dxt1":Jn,"rgba s3tc dxt3":ea,"rgba s3tc dxt5":ra}),t.webgl_compressed_texture_atc&&J(N,{"rgb atc":Ai,"rgba atc explicit alpha":Si,"rgba atc interpolated alpha":wi}),t.webgl_compressed_texture_pvrtc&&J(N,{"rgb pvrtc 4bppv1":Ri,"rgb pvrtc 2bppv1":Pi,"rgba pvrtc 4bppv1":Li,"rgba pvrtc 2bppv1":Ci}),t.webgl_compressed_texture_etc1&&(N["rgb etc1"]=Fi);var h=Array.prototype.slice.call(e.getParameter(cc));Object.keys(N).forEach(function(f){var T=N[f];h.indexOf(T)>=0&&(D[f]=T)});var g=Object.keys(D);c.textureFormats=g;var B=[];Object.keys(D).forEach(function(f){var T=D[f];B[T]=f});var Z=[];Object.keys(z).forEach(function(f){var T=z[f];Z[T]=f});var O=[];Object.keys(k).forEach(function(f){var T=k[f];O[T]=f});var q=[];Object.keys(X).forEach(function(f){var T=X[f];q[T]=f});var Y=[];Object.keys(G).forEach(function(f){var T=G[f];Y[T]=f});var ce=g.reduce(function(f,T){var _=D[T];return _===Lt||_===Wn||_===Lt||_===on||_===Qn||_===fn||t.ext_srgb&&(_===qn||_===Kn)?f[_]=_:_===Yn||T.indexOf("rgba")>=0?f[_]=Qr:f[_]=an,f},{});function L(){this.internalformat=Qr,this.format=Qr,this.type=dt,this.compressed=!1,this.premultiplyAlpha=!1,this.flipY=!1,this.unpackAlignment=1,this.colorSpace=Mi,this.width=0,this.height=0,this.channels=0}function R(f,T){f.internalformat=T.internalformat,f.format=T.format,f.type=T.type,f.compressed=T.compressed,f.premultiplyAlpha=T.premultiplyAlpha,f.flipY=T.flipY,f.unpackAlignment=T.unpackAlignment,f.colorSpace=T.colorSpace,f.width=T.width,f.height=T.height,f.channels=T.channels}function te(f,T){if(!(typeof T!="object"||!T)){if("premultiplyAlpha"in T&&(n.type(T.premultiplyAlpha,"boolean","invalid premultiplyAlpha"),f.premultiplyAlpha=T.premultiplyAlpha),"flipY"in T&&(n.type(T.flipY,"boolean","invalid texture flip"),f.flipY=T.flipY),"alignment"in T&&(n.oneOf(T.alignment,[1,2,4,8],"invalid texture unpack alignment"),f.unpackAlignment=T.alignment),"colorSpace"in T&&(n.parameter(T.colorSpace,V,"invalid colorSpace"),f.colorSpace=V[T.colorSpace]),"type"in T){var _=T.type;n(t.oes_texture_float||!(_==="float"||_==="float32"),"you must enable the OES_texture_float extension in order to use floating point textures."),n(t.oes_texture_half_float||!(_==="half float"||_==="float16"),"you must enable the OES_texture_half_float extension in order to use 16-bit floating point textures."),n(t.webgl_depth_texture||!(_==="uint16"||_==="uint32"||_==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),n.parameter(_,z,"invalid texture type"),f.type=z[_]}var re=f.width,xe=f.height,a=f.channels,r=!1;"shape"in T?(n(Array.isArray(T.shape)&&T.shape.length>=2,"shape must be an array"),re=T.shape[0],xe=T.shape[1],T.shape.length===3&&(a=T.shape[2],n(a>0&&a<=4,"invalid number of channels"),r=!0),n(re>=0&&re<=c.maxTextureSize,"invalid width"),n(xe>=0&&xe<=c.maxTextureSize,"invalid height")):("radius"in T&&(re=xe=T.radius,n(re>=0&&re<=c.maxTextureSize,"invalid radius")),"width"in T&&(re=T.width,n(re>=0&&re<=c.maxTextureSize,"invalid width")),"height"in T&&(xe=T.height,n(xe>=0&&xe<=c.maxTextureSize,"invalid height")),"channels"in T&&(a=T.channels,n(a>0&&a<=4,"invalid number of channels"),r=!0)),f.width=re|0,f.height=xe|0,f.channels=a|0;var u=!1;if("format"in T){var v=T.format;n(t.webgl_depth_texture||!(v==="depth"||v==="depth stencil"),"you must enable the WEBGL_depth_texture extension in order to use depth/stencil textures."),n.parameter(v,D,"invalid texture format");var p=f.internalformat=D[v];f.format=ce[p],v in z&&("type"in T||(f.type=z[v])),v in N&&(f.compressed=!0),u=!0}!r&&u?f.channels=br[f.format]:r&&!u?f.channels!==cn[f.format]&&(f.format=f.internalformat=cn[f.channels]):u&&r&&n(f.channels===br[f.format],"number of channels inconsistent with specified format")}}function j(f){e.pixelStorei(wc,f.flipY),e.pixelStorei(Rc,f.premultiplyAlpha),e.pixelStorei(Pc,f.colorSpace),e.pixelStorei(Sc,f.unpackAlignment)}function I(){L.call(this),this.xOffset=0,this.yOffset=0,this.data=null,this.needsFree=!1,this.element=null,this.needsCopy=!1}function H(f,T){var _=null;if(sa(T)?_=T:T&&(n.type(T,"object","invalid pixel data type"),te(f,T),"x"in T&&(f.xOffset=T.x|0),"y"in T&&(f.yOffset=T.y|0),sa(T.data)&&(_=T.data)),n(!f.compressed||_ instanceof Uint8Array,"compressed texture data must be stored in a uint8array"),T.copy){n(!_,"can not specify copy and data field for the same texture");var re=P.viewportWidth,xe=P.viewportHeight;f.width=f.width||re-f.xOffset,f.height=f.height||xe-f.yOffset,f.needsCopy=!0,n(f.xOffset>=0&&f.xOffset<re&&f.yOffset>=0&&f.yOffset<xe&&f.width>0&&f.width<=re&&f.height>0&&f.height<=xe,"copy texture read out of bounds")}else if(!_)f.width=f.width||1,f.height=f.height||1,f.channels=f.channels||4;else if($(_))f.channels=f.channels||4,f.data=_,!("type"in T)&&f.type===dt&&(f.type=Hi(_));else if(Xi(_))f.channels=f.channels||4,Dc(f,_),f.alignment=1,f.needsFree=!0;else if(Er(_)){var a=_.data;!Array.isArray(a)&&f.type===dt&&(f.type=Hi(a));var r=_.shape,u=_.stride,v,p,d,l,m,i;r.length===3?(d=r[2],i=u[2]):(n(r.length===2,"invalid ndarray pixel data, must be 2 or 3D"),d=1,i=1),v=r[0],p=r[1],l=u[0],m=u[1],f.alignment=1,f.width=v,f.height=p,f.channels=d,f.format=f.internalformat=cn[d],f.needsFree=!0,Ic(f,a,l,m,i,_.offset)}else if(zi(_)||ji(_)||Fc(_))zi(_)||ji(_)?f.element=_:f.element=_.canvas,f.width=f.element.width,f.height=f.element.height,f.channels=4;else if(Oc(_))f.element=_,f.width=_.width,f.height=_.height,f.channels=4;else if(Gc(_))f.element=_,f.width=_.naturalWidth,f.height=_.naturalHeight,f.channels=4;else if(Mc(_))f.element=_,f.width=_.videoWidth,f.height=_.videoHeight,f.channels=4;else if(Ui(_)){var s=f.width||_[0].length,o=f.height||_.length,y=f.channels;Me(_[0][0])?y=y||_[0][0].length:y=y||1;for(var b=en.shape(_),w=1,C=0;C<b.length;++C)w*=b[C];var U=$i(f,w);en.flatten(_,b,"",U),Wi(f,U),f.alignment=1,f.width=s,f.height=o,f.channels=y,f.format=f.internalformat=cn[y],f.needsFree=!0}f.type===Ct?n(c.extensions.indexOf("oes_texture_float")>=0,"oes_texture_float extension not enabled"):f.type===lt&&n(c.extensions.indexOf("oes_texture_half_float")>=0,"oes_texture_half_float extension not enabled")}function W(f,T,_){var re=f.element,xe=f.data,a=f.internalformat,r=f.format,u=f.type,v=f.width,p=f.height;j(f),re?e.texImage2D(T,_,r,r,u,re):f.compressed?e.compressedTexImage2D(T,_,a,v,p,0,xe):f.needsCopy?(E(),e.copyTexImage2D(T,_,r,f.xOffset,f.yOffset,v,p,0)):e.texImage2D(T,_,r,v,p,0,r,u,xe||null)}function he(f,T,_,re,xe){var a=f.element,r=f.data,u=f.internalformat,v=f.format,p=f.type,d=f.width,l=f.height;j(f),a?e.texSubImage2D(T,xe,_,re,v,p,a):f.compressed?e.compressedTexSubImage2D(T,xe,_,re,u,d,l,r):f.needsCopy?(E(),e.copyTexSubImage2D(T,xe,_,re,f.xOffset,f.yOffset,d,l)):e.texSubImage2D(T,xe,_,re,d,l,v,p,r)}var ve=[];function Q(){return ve.pop()||new I}function K(f){f.needsFree&&Ve.freeType(f.data),I.call(f),ve.push(f)}function le(){L.call(this),this.genMipmaps=!1,this.mipmapHint=sn,this.mipmask=0,this.images=Array(16)}function pe(f,T,_){var re=f.images[0]=Q();f.mipmask=1,re.width=f.width=T,re.height=f.height=_,re.channels=f.channels=4}function Ee(f,T){var _=null;if(sa(T))_=f.images[0]=Q(),R(_,f),H(_,T),f.mipmask=1;else if(te(f,T),Array.isArray(T.mipmap))for(var re=T.mipmap,xe=0;xe<re.length;++xe)_=f.images[xe]=Q(),R(_,f),_.width>>=xe,_.height>>=xe,H(_,re[xe]),f.mipmask|=1<<xe;else _=f.images[0]=Q(),R(_,f),H(_,T),f.mipmask=1;R(f,f.images[0]),f.compressed&&(f.internalformat===Zn||f.internalformat===Jn||f.internalformat===ea||f.internalformat===ra)&&n(f.width%4===0&&f.height%4===0,"for compressed texture formats, mipmap level 0 must have width and height that are a multiple of 4")}function De(f,T){for(var _=f.images,re=0;re<_.length;++re){if(!_[re])return;W(_[re],T,re)}}var Be=[];function ge(){var f=Be.pop()||new le;L.call(f),f.mipmask=0;for(var T=0;T<16;++T)f.images[T]=null;return f}function He(f){for(var T=f.images,_=0;_<T.length;++_)T[_]&&K(T[_]),T[_]=null;Be.push(f)}function Oe(){this.minFilter=ia,this.magFilter=ia,this.wrapS=aa,this.wrapT=aa,this.anisotropic=1,this.genMipmaps=!1,this.mipmapHint=sn}function Ue(f,T){if("min"in T){var _=T.min;n.parameter(_,X),f.minFilter=X[_],Lc.indexOf(f.minFilter)>=0&&!("faces"in T)&&(f.genMipmaps=!0)}if("mag"in T){var re=T.mag;n.parameter(re,k),f.magFilter=k[re]}var xe=f.wrapS,a=f.wrapT;if("wrap"in T){var r=T.wrap;typeof r=="string"?(n.parameter(r,G),xe=a=G[r]):Array.isArray(r)&&(n.parameter(r[0],G),n.parameter(r[1],G),xe=G[r[0]],a=G[r[1]])}else{if("wrapS"in T){var u=T.wrapS;n.parameter(u,G),xe=G[u]}if("wrapT"in T){var v=T.wrapT;n.parameter(v,G),a=G[v]}}if(f.wrapS=xe,f.wrapT=a,"anisotropic"in T){var p=T.anisotropic;n(typeof p=="number"&&p>=1&&p<=c.maxAnisotropic,"aniso samples must be between 1 and "),f.anisotropic=T.anisotropic}if("mipmap"in T){var d=!1;switch(typeof T.mipmap){case"string":n.parameter(T.mipmap,M,"invalid mipmap hint"),f.mipmapHint=M[T.mipmap],f.genMipmaps=!0,d=!0;break;case"boolean":d=f.genMipmaps=T.mipmap;break;case"object":n(Array.isArray(T.mipmap),"invalid mipmap type"),f.genMipmaps=!1,d=!0;break;default:n.raise("invalid mipmap type")}d&&!("min"in T)&&(f.minFilter=oa)}}function $e(f,T){e.texParameteri(T,_c,f.minFilter),e.texParameteri(T,yc,f.magFilter),e.texParameteri(T,vc,f.wrapS),e.texParameteri(T,hc,f.wrapT),t.ext_texture_filter_anisotropic&&e.texParameteri(T,Ac,f.anisotropic),f.genMipmaps&&(e.hint(Ec,f.mipmapHint),e.generateMipmap(T))}var We=0,qe={},er=c.maxTextureUnits,Ne=Array(er).map(function(){return null});function ye(f){L.call(this),this.mipmask=0,this.internalformat=Qr,this.id=We++,this.refCount=1,this.target=f,this.texture=e.createTexture(),this.unit=-1,this.bindCount=0,this.texInfo=new Oe,A.profile&&(this.stats={size:0})}function rr(f){e.activeTexture(Ft),e.bindTexture(f.target,f.texture)}function Pe(){var f=Ne[0];f?e.bindTexture(f.target,f.texture):e.bindTexture(Lr,null)}function ue(f){var T=f.texture;n(T,"must not double destroy texture");var _=f.unit,re=f.target;_>=0&&(e.activeTexture(Ft+_),e.bindTexture(re,null),Ne[_]=null),e.deleteTexture(T),f.texture=null,f.params=null,f.pixels=null,f.refCount=0,delete qe[f.id],x.textureCount--}J(ye.prototype,{bind:function(){var f=this;f.bindCount+=1;var T=f.unit;if(T<0){for(var _=0;_<er;++_){var re=Ne[_];if(re){if(re.bindCount>0)continue;re.unit=-1}Ne[_]=f,T=_;break}T>=er&&n.raise("insufficient number of texture units"),A.profile&&x.maxTextureUnits<T+1&&(x.maxTextureUnits=T+1),f.unit=T,e.activeTexture(Ft+T),e.bindTexture(f.target,f.texture)}return T},unbind:function(){this.bindCount-=1},decRef:function(){--this.refCount<=0&&ue(this)}});function Te(f,T){var _=new ye(Lr);qe[_.id]=_,x.textureCount++;function re(r,u){var v=_.texInfo;Oe.call(v);var p=ge();return typeof r=="number"?typeof u=="number"?pe(p,r|0,u|0):pe(p,r|0,r|0):r?(n.type(r,"object","invalid arguments to regl.texture"),Ue(v,r),Ee(p,r)):pe(p,1,1),v.genMipmaps&&(p.mipmask=(p.width<<1)-1),_.mipmask=p.mipmask,R(_,p),n.texture2D(v,p,c),_.internalformat=p.internalformat,re.width=p.width,re.height=p.height,rr(_),De(p,Lr),$e(v,Lr),Pe(),He(p),A.profile&&(_.stats.size=un(_.internalformat,_.type,p.width,p.height,v.genMipmaps,!1)),re.format=B[_.internalformat],re.type=Z[_.type],re.mag=O[v.magFilter],re.min=q[v.minFilter],re.wrapS=Y[v.wrapS],re.wrapT=Y[v.wrapT],re}function xe(r,u,v,p){n(!!r,"must specify image data");var d=u|0,l=v|0,m=p|0,i=Q();return R(i,_),i.width=0,i.height=0,H(i,r),i.width=i.width||(_.width>>m)-d,i.height=i.height||(_.height>>m)-l,n(_.type===i.type&&_.format===i.format&&_.internalformat===i.internalformat,"incompatible format for texture.subimage"),n(d>=0&&l>=0&&d+i.width<=_.width&&l+i.height<=_.height,"texture.subimage write out of bounds"),n(_.mipmask&1<<m,"missing mipmap data"),n(i.data||i.element||i.needsCopy,"missing image data"),rr(_),he(i,Lr,d,l,m),Pe(),K(i),re}function a(r,u){var v=r|0,p=u|0||v;if(v===_.width&&p===_.height)return re;re.width=_.width=v,re.height=_.height=p,rr(_);for(var d=0;_.mipmask>>d;++d){var l=v>>d,m=p>>d;if(!l||!m)break;e.texImage2D(Lr,d,_.format,l,m,0,_.format,_.type,null)}return Pe(),A.profile&&(_.stats.size=un(_.internalformat,_.type,v,p,!1,!1)),re}return re(f,T),re.subimage=xe,re.resize=a,re._reglType="texture2d",re._texture=_,A.profile&&(re.stats=_.stats),re.destroy=function(){_.decRef()},re}function Re(f,T,_,re,xe,a){var r=new ye($n);qe[r.id]=r,x.cubeCount++;var u=new Array(6);function v(l,m,i,s,o,y){var b,w=r.texInfo;for(Oe.call(w),b=0;b<6;++b)u[b]=ge();if(typeof l=="number"||!l){var C=l|0||1;for(b=0;b<6;++b)pe(u[b],C,C)}else if(typeof l=="object")if(m)Ee(u[0],l),Ee(u[1],m),Ee(u[2],i),Ee(u[3],s),Ee(u[4],o),Ee(u[5],y);else if(Ue(w,l),te(r,l),"faces"in l){var U=l.faces;for(n(Array.isArray(U)&&U.length===6,"cube faces must be a length 6 array"),b=0;b<6;++b)n(typeof U[b]=="object"&&!!U[b],"invalid input for cube map face"),R(u[b],r),Ee(u[b],U[b])}else for(b=0;b<6;++b)Ee(u[b],l);else n.raise("invalid arguments to cube map");for(R(r,u[0]),n.optional(function(){c.npotTextureCube||n(Ei(r.width)&&Ei(r.height),"your browser does not support non power or two texture dimensions")}),w.genMipmaps?r.mipmask=(u[0].width<<1)-1:r.mipmask=u[0].mipmask,n.textureCube(r,w,u,c),r.internalformat=u[0].internalformat,v.width=u[0].width,v.height=u[0].height,rr(r),b=0;b<6;++b)De(u[b],nn+b);for($e(w,$n),Pe(),A.profile&&(r.stats.size=un(r.internalformat,r.type,v.width,v.height,w.genMipmaps,!0)),v.format=B[r.internalformat],v.type=Z[r.type],v.mag=O[w.magFilter],v.min=q[w.minFilter],v.wrapS=Y[w.wrapS],v.wrapT=Y[w.wrapT],b=0;b<6;++b)He(u[b]);return v}function p(l,m,i,s,o){n(!!m,"must specify image data"),n(typeof l=="number"&&l===(l|0)&&l>=0&&l<6,"invalid face");var y=i|0,b=s|0,w=o|0,C=Q();return R(C,r),C.width=0,C.height=0,H(C,m),C.width=C.width||(r.width>>w)-y,C.height=C.height||(r.height>>w)-b,n(r.type===C.type&&r.format===C.format&&r.internalformat===C.internalformat,"incompatible format for texture.subimage"),n(y>=0&&b>=0&&y+C.width<=r.width&&b+C.height<=r.height,"texture.subimage write out of bounds"),n(r.mipmask&1<<w,"missing mipmap data"),n(C.data||C.element||C.needsCopy,"missing image data"),rr(r),he(C,nn+l,y,b,w),Pe(),K(C),v}function d(l){var m=l|0;if(m!==r.width){v.width=r.width=m,v.height=r.height=m,rr(r);for(var i=0;i<6;++i)for(var s=0;r.mipmask>>s;++s)e.texImage2D(nn+i,s,r.format,m>>s,m>>s,0,r.format,r.type,null);return Pe(),A.profile&&(r.stats.size=un(r.internalformat,r.type,v.width,v.height,!1,!0)),v}}return v(f,T,_,re,xe,a),v.subimage=p,v.resize=d,v._reglType="textureCube",v._texture=r,A.profile&&(v.stats=r.stats),v.destroy=function(){r.decRef()},v}function ke(){for(var f=0;f<er;++f)e.activeTexture(Ft+f),e.bindTexture(Lr,null),Ne[f]=null;hr(qe).forEach(ue),x.cubeCount=0,x.textureCount=0}A.profile&&(x.getTotalTextureSize=function(){var f=0;return Object.keys(qe).forEach(function(T){f+=qe[T].stats.size}),f});function Fr(){for(var f=0;f<er;++f){var T=Ne[f];T&&(T.bindCount=0,T.unit=-1,Ne[f]=null)}hr(qe).forEach(function(_){_.texture=e.createTexture(),e.bindTexture(_.target,_.texture);for(var re=0;re<32;++re)if((_.mipmask&1<<re)!==0)if(_.target===Lr)e.texImage2D(Lr,re,_.internalformat,_.width>>re,_.height>>re,0,_.internalformat,_.type,null);else for(var xe=0;xe<6;++xe)e.texImage2D(nn+xe,re,_.internalformat,_.width>>re,_.height>>re,0,_.internalformat,_.type,null);$e(_.texInfo,_.target)})}function nt(){for(var f=0;f<er;++f){var T=Ne[f];T&&(T.bindCount=0,T.unit=-1,Ne[f]=null),e.activeTexture(Ft+f),e.bindTexture(Lr,null),e.bindTexture($n,null)}}return{create2D:Te,createCube:Re,clear:ke,getTexture:function(f){return null},restore:Fr,refresh:nt}}var Vr=36161,ln=32854,Yi=32855,Qi=36194,qi=33189,Ki=36168,Zi=34041,Ji=35907,eo=34836,ro=34842,to=34843,Tr=[];Tr[ln]=2,Tr[Yi]=2,Tr[Qi]=2,Tr[qi]=2,Tr[Ki]=1,Tr[Zi]=4,Tr[Ji]=4,Tr[eo]=16,Tr[ro]=8,Tr[to]=6;function no(e,t,c){return Tr[e]*t*c}var Nc=function(e,t,c,E,P){var x={rgba4:ln,rgb565:Qi,"rgb5 a1":Yi,depth:qi,stencil:Ki,"depth stencil":Zi};t.ext_srgb&&(x.srgba=Ji),t.ext_color_buffer_half_float&&(x.rgba16f=ro,x.rgb16f=to),t.webgl_color_buffer_float&&(x.rgba32f=eo);var A=[];Object.keys(x).forEach(function(D){var N=x[D];A[N]=D});var M=0,G={};function k(D){this.id=M++,this.refCount=1,this.renderbuffer=D,this.format=ln,this.width=0,this.height=0,P.profile&&(this.stats={size:0})}k.prototype.decRef=function(){--this.refCount<=0&&X(this)};function X(D){var N=D.renderbuffer;n(N,"must not double destroy renderbuffer"),e.bindRenderbuffer(Vr,null),e.deleteRenderbuffer(N),D.renderbuffer=null,D.refCount=0,delete G[D.id],E.renderbufferCount--}function V(D,N){var h=new k(e.createRenderbuffer());G[h.id]=h,E.renderbufferCount++;function g(Z,O){var q=0,Y=0,ce=ln;if(typeof Z=="object"&&Z){var L=Z;if("shape"in L){var R=L.shape;n(Array.isArray(R)&&R.length>=2,"invalid renderbuffer shape"),q=R[0]|0,Y=R[1]|0}else"radius"in L&&(q=Y=L.radius|0),"width"in L&&(q=L.width|0),"height"in L&&(Y=L.height|0);"format"in L&&(n.parameter(L.format,x,"invalid renderbuffer format"),ce=x[L.format])}else typeof Z=="number"?(q=Z|0,typeof O=="number"?Y=O|0:Y=q):Z?n.raise("invalid arguments to renderbuffer constructor"):q=Y=1;if(n(q>0&&Y>0&&q<=c.maxRenderbufferSize&&Y<=c.maxRenderbufferSize,"invalid renderbuffer size"),!(q===h.width&&Y===h.height&&ce===h.format))return g.width=h.width=q,g.height=h.height=Y,h.format=ce,e.bindRenderbuffer(Vr,h.renderbuffer),e.renderbufferStorage(Vr,ce,q,Y),n(e.getError()===0,"invalid render buffer format"),P.profile&&(h.stats.size=no(h.format,h.width,h.height)),g.format=A[h.format],g}function B(Z,O){var q=Z|0,Y=O|0||q;return q===h.width&&Y===h.height||(n(q>0&&Y>0&&q<=c.maxRenderbufferSize&&Y<=c.maxRenderbufferSize,"invalid renderbuffer size"),g.width=h.width=q,g.height=h.height=Y,e.bindRenderbuffer(Vr,h.renderbuffer),e.renderbufferStorage(Vr,h.format,q,Y),n(e.getError()===0,"invalid render buffer format"),P.profile&&(h.stats.size=no(h.format,h.width,h.height))),g}return g(D,N),g.resize=B,g._reglType="renderbuffer",g._renderbuffer=h,P.profile&&(g.stats=h.stats),g.destroy=function(){h.decRef()},g}P.profile&&(E.getTotalRenderbufferSize=function(){var D=0;return Object.keys(G).forEach(function(N){D+=G[N].stats.size}),D});function z(){hr(G).forEach(function(D){D.renderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(Vr,D.renderbuffer),e.renderbufferStorage(Vr,D.format,D.width,D.height)}),e.bindRenderbuffer(Vr,null)}return{create:V,clear:function(){hr(G).forEach(X)},restore:z}},Mr=36160,ca=36161,Kr=3553,dn=34069,ao=36064,io=36096,oo=36128,fo=33306,so=36053,kc=36054,Vc=36055,Xc=36057,Uc=36061,zc=36193,jc=5121,Hc=5126,co=6407,uo=6408,$c=6402,Wc=[co,uo],ua=[];ua[uo]=4,ua[co]=3;var mn=[];mn[jc]=1,mn[Hc]=4,mn[zc]=2;var Yc=32854,Qc=32855,qc=36194,Kc=33189,Zc=36168,lo=34041,Jc=35907,eu=34836,ru=34842,tu=34843,nu=[Yc,Qc,qc,Jc,ru,tu,eu],ht={};ht[so]="complete",ht[kc]="incomplete attachment",ht[Xc]="incomplete dimensions",ht[Vc]="incomplete, missing attachment",ht[Uc]="unsupported";function au(e,t,c,E,P,x){var A={cur:null,next:null,dirty:!1,setFBO:null},M=["rgba"],G=["rgba4","rgb565","rgb5 a1"];t.ext_srgb&&G.push("srgba"),t.ext_color_buffer_half_float&&G.push("rgba16f","rgb16f"),t.webgl_color_buffer_float&&G.push("rgba32f");var k=["uint8"];t.oes_texture_half_float&&k.push("half float","float16"),t.oes_texture_float&&k.push("float","float32");function X(I,H,W){this.target=I,this.texture=H,this.renderbuffer=W;var he=0,ve=0;H?(he=H.width,ve=H.height):W&&(he=W.width,ve=W.height),this.width=he,this.height=ve}function V(I){I&&(I.texture&&I.texture._texture.decRef(),I.renderbuffer&&I.renderbuffer._renderbuffer.decRef())}function z(I,H,W){if(!!I)if(I.texture){var he=I.texture._texture,ve=Math.max(1,he.width),Q=Math.max(1,he.height);n(ve===H&&Q===W,"inconsistent width/height for supplied texture"),he.refCount+=1}else{var K=I.renderbuffer._renderbuffer;n(K.width===H&&K.height===W,"inconsistent width/height for renderbuffer"),K.refCount+=1}}function D(I,H){H&&(H.texture?e.framebufferTexture2D(Mr,I,H.target,H.texture._texture.texture,0):e.framebufferRenderbuffer(Mr,I,ca,H.renderbuffer._renderbuffer.renderbuffer))}function N(I){var H=Kr,W=null,he=null,ve=I;typeof I=="object"&&(ve=I.data,"target"in I&&(H=I.target|0)),n.type(ve,"function","invalid attachment data");var Q=ve._reglType;return Q==="texture2d"?(W=ve,n(H===Kr)):Q==="textureCube"?(W=ve,n(H>=dn&&H<dn+6,"invalid cube map target")):Q==="renderbuffer"?(he=ve,H=ca):n.raise("invalid regl object for attachment"),new X(H,W,he)}function h(I,H,W,he,ve){if(W){var Q=E.create2D({width:I,height:H,format:he,type:ve});return Q._texture.refCount=0,new X(Kr,Q,null)}else{var K=P.create({width:I,height:H,format:he});return K._renderbuffer.refCount=0,new X(ca,null,K)}}function g(I){return I&&(I.texture||I.renderbuffer)}function B(I,H,W){I&&(I.texture?I.texture.resize(H,W):I.renderbuffer&&I.renderbuffer.resize(H,W),I.width=H,I.height=W)}var Z=0,O={};function q(){this.id=Z++,O[this.id]=this,this.framebuffer=e.createFramebuffer(),this.width=0,this.height=0,this.colorAttachments=[],this.depthAttachment=null,this.stencilAttachment=null,this.depthStencilAttachment=null}function Y(I){I.colorAttachments.forEach(V),V(I.depthAttachment),V(I.stencilAttachment),V(I.depthStencilAttachment)}function ce(I){var H=I.framebuffer;n(H,"must not double destroy framebuffer"),e.deleteFramebuffer(H),I.framebuffer=null,x.framebufferCount--,delete O[I.id]}function L(I){var H;e.bindFramebuffer(Mr,I.framebuffer);var W=I.colorAttachments;for(H=0;H<W.length;++H)D(ao+H,W[H]);for(H=W.length;H<c.maxColorAttachments;++H)e.framebufferTexture2D(Mr,ao+H,Kr,null,0);e.framebufferTexture2D(Mr,fo,Kr,null,0),e.framebufferTexture2D(Mr,io,Kr,null,0),e.framebufferTexture2D(Mr,oo,Kr,null,0),D(io,I.depthAttachment),D(oo,I.stencilAttachment),D(fo,I.depthStencilAttachment);var he=e.checkFramebufferStatus(Mr);!e.isContextLost()&&he!==so&&n.raise("framebuffer configuration not supported, status = "+ht[he]),e.bindFramebuffer(Mr,A.next?A.next.framebuffer:null),A.cur=A.next,e.getError()}function R(I,H){var W=new q;x.framebufferCount++;function he(Q,K){var le;n(A.next!==W,"can not update framebuffer which is currently in use");var pe=0,Ee=0,De=!0,Be=!0,ge=null,He=!0,Oe="rgba",Ue="uint8",$e=1,We=null,qe=null,er=null,Ne=!1;if(typeof Q=="number")pe=Q|0,Ee=K|0||pe;else if(!Q)pe=Ee=1;else{n.type(Q,"object","invalid arguments for framebuffer");var ye=Q;if("shape"in ye){var rr=ye.shape;n(Array.isArray(rr)&&rr.length>=2,"invalid shape for framebuffer"),pe=rr[0],Ee=rr[1]}else"radius"in ye&&(pe=Ee=ye.radius),"width"in ye&&(pe=ye.width),"height"in ye&&(Ee=ye.height);("color"in ye||"colors"in ye)&&(ge=ye.color||ye.colors,Array.isArray(ge)&&n(ge.length===1||t.webgl_draw_buffers,"multiple render targets not supported")),ge||("colorCount"in ye&&($e=ye.colorCount|0,n($e>0,"invalid color buffer count")),"colorTexture"in ye&&(He=!!ye.colorTexture,Oe="rgba4"),"colorType"in ye&&(Ue=ye.colorType,He?(n(t.oes_texture_float||!(Ue==="float"||Ue==="float32"),"you must enable OES_texture_float in order to use floating point framebuffer objects"),n(t.oes_texture_half_float||!(Ue==="half float"||Ue==="float16"),"you must enable OES_texture_half_float in order to use 16-bit floating point framebuffer objects")):Ue==="half float"||Ue==="float16"?(n(t.ext_color_buffer_half_float,"you must enable EXT_color_buffer_half_float to use 16-bit render buffers"),Oe="rgba16f"):(Ue==="float"||Ue==="float32")&&(n(t.webgl_color_buffer_float,"you must enable WEBGL_color_buffer_float in order to use 32-bit floating point renderbuffers"),Oe="rgba32f"),n.oneOf(Ue,k,"invalid color type")),"colorFormat"in ye&&(Oe=ye.colorFormat,M.indexOf(Oe)>=0?He=!0:G.indexOf(Oe)>=0?He=!1:n.optional(function(){He?n.oneOf(ye.colorFormat,M,"invalid color format for texture"):n.oneOf(ye.colorFormat,G,"invalid color format for renderbuffer")}))),("depthTexture"in ye||"depthStencilTexture"in ye)&&(Ne=!!(ye.depthTexture||ye.depthStencilTexture),n(!Ne||t.webgl_depth_texture,"webgl_depth_texture extension not supported")),"depth"in ye&&(typeof ye.depth=="boolean"?De=ye.depth:(We=ye.depth,Be=!1)),"stencil"in ye&&(typeof ye.stencil=="boolean"?Be=ye.stencil:(qe=ye.stencil,De=!1)),"depthStencil"in ye&&(typeof ye.depthStencil=="boolean"?De=Be=ye.depthStencil:(er=ye.depthStencil,De=!1,Be=!1))}var Pe=null,ue=null,Te=null,Re=null;if(Array.isArray(ge))Pe=ge.map(N);else if(ge)Pe=[N(ge)];else for(Pe=new Array($e),le=0;le<$e;++le)Pe[le]=h(pe,Ee,He,Oe,Ue);n(t.webgl_draw_buffers||Pe.length<=1,"you must enable the WEBGL_draw_buffers extension in order to use multiple color buffers."),n(Pe.length<=c.maxColorAttachments,"too many color attachments, not supported"),pe=pe||Pe[0].width,Ee=Ee||Pe[0].height,We?ue=N(We):De&&!Be&&(ue=h(pe,Ee,Ne,"depth","uint32")),qe?Te=N(qe):Be&&!De&&(Te=h(pe,Ee,!1,"stencil","uint8")),er?Re=N(er):!We&&!qe&&Be&&De&&(Re=h(pe,Ee,Ne,"depth stencil","depth stencil")),n(!!We+!!qe+!!er<=1,"invalid framebuffer configuration, can specify exactly one depth/stencil attachment");var ke=null;for(le=0;le<Pe.length;++le)if(z(Pe[le],pe,Ee),n(!Pe[le]||Pe[le].texture&&Wc.indexOf(Pe[le].texture._texture.format)>=0||Pe[le].renderbuffer&&nu.indexOf(Pe[le].renderbuffer._renderbuffer.format)>=0,"framebuffer color attachment "+le+" is invalid"),Pe[le]&&Pe[le].texture){var Fr=ua[Pe[le].texture._texture.format]*mn[Pe[le].texture._texture.type];ke===null?ke=Fr:n(ke===Fr,"all color attachments much have the same number of bits per pixel.")}return z(ue,pe,Ee),n(!ue||ue.texture&&ue.texture._texture.format===$c||ue.renderbuffer&&ue.renderbuffer._renderbuffer.format===Kc,"invalid depth attachment for framebuffer object"),z(Te,pe,Ee),n(!Te||Te.renderbuffer&&Te.renderbuffer._renderbuffer.format===Zc,"invalid stencil attachment for framebuffer object"),z(Re,pe,Ee),n(!Re||Re.texture&&Re.texture._texture.format===lo||Re.renderbuffer&&Re.renderbuffer._renderbuffer.format===lo,"invalid depth-stencil attachment for framebuffer object"),Y(W),W.width=pe,W.height=Ee,W.colorAttachments=Pe,W.depthAttachment=ue,W.stencilAttachment=Te,W.depthStencilAttachment=Re,he.color=Pe.map(g),he.depth=g(ue),he.stencil=g(Te),he.depthStencil=g(Re),he.width=W.width,he.height=W.height,L(W),he}function ve(Q,K){n(A.next!==W,"can not resize a framebuffer which is currently in use");var le=Math.max(Q|0,1),pe=Math.max(K|0||le,1);if(le===W.width&&pe===W.height)return he;for(var Ee=W.colorAttachments,De=0;De<Ee.length;++De)B(Ee[De],le,pe);return B(W.depthAttachment,le,pe),B(W.stencilAttachment,le,pe),B(W.depthStencilAttachment,le,pe),W.width=he.width=le,W.height=he.height=pe,L(W),he}return he(I,H),J(he,{resize:ve,_reglType:"framebuffer",_framebuffer:W,destroy:function(){ce(W),Y(W)},use:function(Q){A.setFBO({framebuffer:he},Q)}})}function te(I){var H=Array(6);function W(ve){var Q;n(H.indexOf(A.next)<0,"can not update framebuffer which is currently in use");var K={color:null},le=0,pe=null,Ee="rgba",De="uint8",Be=1;if(typeof ve=="number")le=ve|0;else if(!ve)le=1;else{n.type(ve,"object","invalid arguments for framebuffer");var ge=ve;if("shape"in ge){var He=ge.shape;n(Array.isArray(He)&&He.length>=2,"invalid shape for framebuffer"),n(He[0]===He[1],"cube framebuffer must be square"),le=He[0]}else"radius"in ge&&(le=ge.radius|0),"width"in ge?(le=ge.width|0,"height"in ge&&n(ge.height===le,"must be square")):"height"in ge&&(le=ge.height|0);("color"in ge||"colors"in ge)&&(pe=ge.color||ge.colors,Array.isArray(pe)&&n(pe.length===1||t.webgl_draw_buffers,"multiple render targets not supported")),pe||("colorCount"in ge&&(Be=ge.colorCount|0,n(Be>0,"invalid color buffer count")),"colorType"in ge&&(n.oneOf(ge.colorType,k,"invalid color type"),De=ge.colorType),"colorFormat"in ge&&(Ee=ge.colorFormat,n.oneOf(ge.colorFormat,M,"invalid color format for texture"))),"depth"in ge&&(K.depth=ge.depth),"stencil"in ge&&(K.stencil=ge.stencil),"depthStencil"in ge&&(K.depthStencil=ge.depthStencil)}var Oe;if(pe)if(Array.isArray(pe))for(Oe=[],Q=0;Q<pe.length;++Q)Oe[Q]=pe[Q];else Oe=[pe];else{Oe=Array(Be);var Ue={radius:le,format:Ee,type:De};for(Q=0;Q<Be;++Q)Oe[Q]=E.createCube(Ue)}for(K.color=Array(Oe.length),Q=0;Q<Oe.length;++Q){var $e=Oe[Q];n(typeof $e=="function"&&$e._reglType==="textureCube","invalid cube map"),le=le||$e.width,n($e.width===le&&$e.height===le,"invalid cube map shape"),K.color[Q]={target:dn,data:Oe[Q]}}for(Q=0;Q<6;++Q){for(var We=0;We<Oe.length;++We)K.color[We].target=dn+Q;Q>0&&(K.depth=H[0].depth,K.stencil=H[0].stencil,K.depthStencil=H[0].depthStencil),H[Q]?H[Q](K):H[Q]=R(K)}return J(W,{width:le,height:le,color:Oe})}function he(ve){var Q,K=ve|0;if(n(K>0&&K<=c.maxCubeMapSize,"invalid radius for cube fbo"),K===W.width)return W;var le=W.color;for(Q=0;Q<le.length;++Q)le[Q].resize(K);for(Q=0;Q<6;++Q)H[Q].resize(K);return W.width=W.height=K,W}return W(I),J(W,{faces:H,resize:he,_reglType:"framebufferCube",destroy:function(){H.forEach(function(ve){ve.destroy()})}})}function j(){A.cur=null,A.next=null,A.dirty=!0,hr(O).forEach(function(I){I.framebuffer=e.createFramebuffer(),L(I)})}return J(A,{getFramebuffer:function(I){if(typeof I=="function"&&I._reglType==="framebuffer"){var H=I._framebuffer;if(H instanceof q)return H}return null},create:R,createCube:te,clear:function(){hr(O).forEach(ce)},restore:j})}var iu=5126,mo=34962,vn=34963,vo=["attributes","elements","offset","count","primitive","instances"];function la(){this.state=0,this.x=0,this.y=0,this.z=0,this.w=0,this.buffer=null,this.size=0,this.normalized=!1,this.type=iu,this.offset=0,this.stride=0,this.divisor=0}function ou(e,t,c,E,P,x,A){for(var M=c.maxAttributes,G=new Array(M),k=0;k<M;++k)G[k]=new la;var X=0,V={},z={Record:la,scope:{},state:G,currentVAO:null,targetVAO:null,restore:N()?Y:function(){},createVAO:ce,getVAO:g,destroyBuffer:D,setVAO:N()?B:Z,clear:N()?O:function(){}};function D(L){for(var R=0;R<G.length;++R){var te=G[R];te.buffer===L&&(e.disableVertexAttribArray(R),te.buffer=null)}}function N(){return t.oes_vertex_array_object}function h(){return t.angle_instanced_arrays}function g(L){return typeof L=="function"&&L._vao?L._vao:null}function B(L){if(L!==z.currentVAO){var R=N();L?R.bindVertexArrayOES(L.vao):R.bindVertexArrayOES(null),z.currentVAO=L}}function Z(L){if(L!==z.currentVAO){if(L)L.bindAttrs();else{for(var R=h(),te=0;te<G.length;++te){var j=G[te];j.buffer?(e.enableVertexAttribArray(te),j.buffer.bind(),e.vertexAttribPointer(te,j.size,j.type,j.normalized,j.stride,j.offfset),R&&j.divisor&&R.vertexAttribDivisorANGLE(te,j.divisor)):(e.disableVertexAttribArray(te),e.vertexAttrib4f(te,j.x,j.y,j.z,j.w))}A.elements?e.bindBuffer(vn,A.elements.buffer.buffer):e.bindBuffer(vn,null)}z.currentVAO=L}}function O(){hr(V).forEach(function(L){L.destroy()})}function q(){this.id=++X,this.attributes=[],this.elements=null,this.ownsElements=!1,this.count=0,this.offset=0,this.instances=-1,this.primitive=4;var L=N();L?this.vao=L.createVertexArrayOES():this.vao=null,V[this.id]=this,this.buffers=[]}q.prototype.bindAttrs=function(){for(var L=h(),R=this.attributes,te=0;te<R.length;++te){var j=R[te];j.buffer?(e.enableVertexAttribArray(te),e.bindBuffer(mo,j.buffer.buffer),e.vertexAttribPointer(te,j.size,j.type,j.normalized,j.stride,j.offset),L&&j.divisor&&L.vertexAttribDivisorANGLE(te,j.divisor)):(e.disableVertexAttribArray(te),e.vertexAttrib4f(te,j.x,j.y,j.z,j.w))}for(var I=R.length;I<M;++I)e.disableVertexAttribArray(I);var H=x.getElements(this.elements);H?e.bindBuffer(vn,H.buffer.buffer):e.bindBuffer(vn,null)},q.prototype.refresh=function(){var L=N();L&&(L.bindVertexArrayOES(this.vao),this.bindAttrs(),z.currentVAO=null,L.bindVertexArrayOES(null))},q.prototype.destroy=function(){if(this.vao){var L=N();this===z.currentVAO&&(z.currentVAO=null,L.bindVertexArrayOES(null)),L.deleteVertexArrayOES(this.vao),this.vao=null}this.ownsElements&&(this.elements.destroy(),this.elements=null,this.ownsElements=!1),V[this.id]&&(delete V[this.id],E.vaoCount-=1)};function Y(){var L=N();L&&hr(V).forEach(function(R){R.refresh()})}function ce(L){var R=new q;E.vaoCount+=1;function te(j){var I;if(Array.isArray(j))I=j,R.elements&&R.ownsElements&&R.elements.destroy(),R.elements=null,R.ownsElements=!1,R.offset=0,R.count=0,R.instances=-1,R.primitive=4;else{if(n(typeof j=="object","invalid arguments for create vao"),n("attributes"in j,"must specify attributes for vao"),j.elements){var H=j.elements;R.ownsElements?typeof H=="function"&&H._reglType==="elements"?(R.elements.destroy(),R.ownsElements=!1):(R.elements(H),R.ownsElements=!1):x.getElements(j.elements)?(R.elements=j.elements,R.ownsElements=!1):(R.elements=x.create(j.elements),R.ownsElements=!0)}else R.elements=null,R.ownsElements=!1;I=j.attributes,R.offset=0,R.count=-1,R.instances=-1,R.primitive=4,R.elements&&(R.count=R.elements._elements.vertCount,R.primitive=R.elements._elements.primType),"offset"in j&&(R.offset=j.offset|0),"count"in j&&(R.count=j.count|0),"instances"in j&&(R.instances=j.instances|0),"primitive"in j&&(n(j.primitive in kr,"bad primitive type: "+j.primitive),R.primitive=kr[j.primitive]),n.optional(()=>{for(var De=Object.keys(j),Be=0;Be<De.length;++Be)n(vo.indexOf(De[Be])>=0,'invalid option for vao: "'+De[Be]+'" valid options are '+vo)}),n(Array.isArray(I),"attributes must be an array")}n(I.length<M,"too many attributes"),n(I.length>0,"must specify at least one attribute");var W={},he=R.attributes;he.length=I.length;for(var ve=0;ve<I.length;++ve){var Q=I[ve],K=he[ve]=new la,le=Q.data||Q;if(Array.isArray(le)||$(le)||Er(le)){var pe;R.buffers[ve]&&(pe=R.buffers[ve],$(le)&&pe._buffer.byteLength>=le.byteLength?pe.subdata(le):(pe.destroy(),R.buffers[ve]=null)),R.buffers[ve]||(pe=R.buffers[ve]=P.create(Q,mo,!1,!0)),K.buffer=P.getBuffer(pe),K.size=K.buffer.dimension|0,K.normalized=!1,K.type=K.buffer.dtype,K.offset=0,K.stride=0,K.divisor=0,K.state=1,W[ve]=1}else P.getBuffer(Q)?(K.buffer=P.getBuffer(Q),K.size=K.buffer.dimension|0,K.normalized=!1,K.type=K.buffer.dtype,K.offset=0,K.stride=0,K.divisor=0,K.state=1):P.getBuffer(Q.buffer)?(K.buffer=P.getBuffer(Q.buffer),K.size=(+Q.size||K.buffer.dimension)|0,K.normalized=!!Q.normalized||!1,"type"in Q?(n.parameter(Q.type,Wr,"invalid buffer type"),K.type=Wr[Q.type]):K.type=K.buffer.dtype,K.offset=(Q.offset||0)|0,K.stride=(Q.stride||0)|0,K.divisor=(Q.divisor||0)|0,K.state=1,n(K.size>=1&&K.size<=4,"size must be between 1 and 4"),n(K.offset>=0,"invalid offset"),n(K.stride>=0&&K.stride<=255,"stride must be between 0 and 255"),n(K.divisor>=0,"divisor must be positive"),n(!K.divisor||!!t.angle_instanced_arrays,"ANGLE_instanced_arrays must be enabled to use divisor")):"x"in Q?(n(ve>0,"first attribute must not be a constant"),K.x=+Q.x||0,K.y=+Q.y||0,K.z=+Q.z||0,K.w=+Q.w||0,K.state=2):n(!1,"invalid attribute spec for location "+ve)}for(var Ee=0;Ee<R.buffers.length;++Ee)!W[Ee]&&R.buffers[Ee]&&(R.buffers[Ee].destroy(),R.buffers[Ee]=null);return R.refresh(),te}return te.destroy=function(){for(var j=0;j<R.buffers.length;++j)R.buffers[j]&&R.buffers[j].destroy();R.buffers.length=0,R.ownsElements&&(R.elements.destroy(),R.elements=null,R.ownsElements=!1),R.destroy()},te._vao=R,te._reglType="vao",te(L)}return z}var ho=35632,fu=35633,su=35718,cu=35721;function uu(e,t,c,E){var P={},x={};function A(h,g,B,Z){this.name=h,this.id=g,this.location=B,this.info=Z}function M(h,g){for(var B=0;B<h.length;++B)if(h[B].id===g.id){h[B].location=g.location;return}h.push(g)}function G(h,g,B){var Z=h===ho?P:x,O=Z[g];if(!O){var q=t.str(g);O=e.createShader(h),e.shaderSource(O,q),e.compileShader(O),n.shaderError(e,O,q,h,B),Z[g]=O}return O}var k={},X=[],V=0;function z(h,g){this.id=V++,this.fragId=h,this.vertId=g,this.program=null,this.uniforms=[],this.attributes=[],this.refCount=1,E.profile&&(this.stats={uniformsCount:0,attributesCount:0})}function D(h,g,B){var Z,O,q=G(ho,h.fragId),Y=G(fu,h.vertId),ce=h.program=e.createProgram();if(e.attachShader(ce,q),e.attachShader(ce,Y),B)for(Z=0;Z<B.length;++Z){var L=B[Z];e.bindAttribLocation(ce,L[0],L[1])}e.linkProgram(ce),n.linkError(e,ce,t.str(h.fragId),t.str(h.vertId),g);var R=e.getProgramParameter(ce,su);E.profile&&(h.stats.uniformsCount=R);var te=h.uniforms;for(Z=0;Z<R;++Z)if(O=e.getActiveUniform(ce,Z),O){if(O.size>1)for(var j=0;j<O.size;++j){var I=O.name.replace("[0]","["+j+"]");M(te,new A(I,t.id(I),e.getUniformLocation(ce,I),O))}var H=O.name;O.size>1&&(H=H.replace("[0]","")),M(te,new A(H,t.id(H),e.getUniformLocation(ce,H),O))}var W=e.getProgramParameter(ce,cu);E.profile&&(h.stats.attributesCount=W);var he=h.attributes;for(Z=0;Z<W;++Z)O=e.getActiveAttrib(ce,Z),O&&M(he,new A(O.name,t.id(O.name),e.getAttribLocation(ce,O.name),O))}E.profile&&(c.getMaxUniformsCount=function(){var h=0;return X.forEach(function(g){g.stats.uniformsCount>h&&(h=g.stats.uniformsCount)}),h},c.getMaxAttributesCount=function(){var h=0;return X.forEach(function(g){g.stats.attributesCount>h&&(h=g.stats.attributesCount)}),h});function N(){P={},x={};for(var h=0;h<X.length;++h)D(X[h],null,X[h].attributes.map(function(g){return[g.location,g.name]}))}return{clear:function(){var h=e.deleteShader.bind(e);hr(P).forEach(h),P={},hr(x).forEach(h),x={},X.forEach(function(g){e.deleteProgram(g.program)}),X.length=0,k={},c.shaderCount=0},program:function(h,g,B,Z){n.command(h>=0,"missing vertex shader",B),n.command(g>=0,"missing fragment shader",B);var O=k[g];O||(O=k[g]={});var q=O[h];if(q&&(q.refCount++,!Z))return q;var Y=new z(g,h);return c.shaderCount++,D(Y,B,Z),q||(O[h]=Y),X.push(Y),J(Y,{destroy:function(){if(Y.refCount--,Y.refCount<=0){e.deleteProgram(Y.program);var ce=X.indexOf(Y);X.splice(ce,1),c.shaderCount--}O[Y.vertId].refCount<=0&&(e.deleteShader(x[Y.vertId]),delete x[Y.vertId],delete k[Y.fragId][Y.vertId]),Object.keys(k[Y.fragId]).length||(e.deleteShader(P[Y.fragId]),delete P[Y.fragId],delete k[Y.fragId])}})},restore:N,shader:G,frag:-1,vert:-1}}var lu=6408,Ot=5121,du=3333,hn=5126;function mu(e,t,c,E,P,x,A){function M(X){var V;t.next===null?(n(P.preserveDrawingBuffer,'you must create a webgl context with "preserveDrawingBuffer":true in order to read pixels from the drawing buffer'),V=Ot):(n(t.next.colorAttachments[0].texture!==null,"You cannot read from a renderbuffer"),V=t.next.colorAttachments[0].texture._texture.type,n.optional(function(){x.oes_texture_float?(n(V===Ot||V===hn,"Reading from a framebuffer is only allowed for the types 'uint8' and 'float'"),V===hn&&n(A.readFloat,"Reading 'float' values is not permitted in your browser. For a fallback, please see: https://www.npmjs.com/package/glsl-read-float")):n(V===Ot,"Reading from a framebuffer is only allowed for the type 'uint8'")}));var z=0,D=0,N=E.framebufferWidth,h=E.framebufferHeight,g=null;$(X)?g=X:X&&(n.type(X,"object","invalid arguments to regl.read()"),z=X.x|0,D=X.y|0,n(z>=0&&z<E.framebufferWidth,"invalid x offset for regl.read"),n(D>=0&&D<E.framebufferHeight,"invalid y offset for regl.read"),N=(X.width||E.framebufferWidth-z)|0,h=(X.height||E.framebufferHeight-D)|0,g=X.data||null),g&&(V===Ot?n(g instanceof Uint8Array,"buffer must be 'Uint8Array' when reading from a framebuffer of type 'uint8'"):V===hn&&n(g instanceof Float32Array,"buffer must be 'Float32Array' when reading from a framebuffer of type 'float'")),n(N>0&&N+z<=E.framebufferWidth,"invalid width for read pixels"),n(h>0&&h+D<=E.framebufferHeight,"invalid height for read pixels"),c();var B=N*h*4;return g||(V===Ot?g=new Uint8Array(B):V===hn&&(g=g||new Float32Array(B))),n.isTypedArray(g,"data buffer for regl.read() must be a typedarray"),n(g.byteLength>=B,"data buffer for regl.read() too small"),e.pixelStorei(du,4),e.readPixels(z,D,N,h,lu,V,g),g}function G(X){var V;return t.setFBO({framebuffer:X.framebuffer},function(){V=M(X)}),V}function k(X){return!X||!("framebuffer"in X)?M(X):G(X)}return k}function pt(e){return Array.prototype.slice.call(e)}function bt(e){return pt(e).join("")}function vu(){var e=0,t=[],c=[];function E(V){for(var z=0;z<c.length;++z)if(c[z]===V)return t[z];var D="g"+e++;return t.push(D),c.push(V),D}function P(){var V=[];function z(){V.push.apply(V,pt(arguments))}var D=[];function N(){var h="v"+e++;return D.push(h),arguments.length>0&&(V.push(h,"="),V.push.apply(V,pt(arguments)),V.push(";")),h}return J(z,{def:N,toString:function(){return bt([D.length>0?"var "+D.join(",")+";":"",bt(V)])}})}function x(){var V=P(),z=P(),D=V.toString,N=z.toString;function h(g,B){z(g,B,"=",V.def(g,B),";")}return J(function(){V.apply(V,pt(arguments))},{def:V.def,entry:V,exit:z,save:h,set:function(g,B,Z){h(g,B),V(g,B,"=",Z,";")},toString:function(){return D()+N()}})}function A(){var V=bt(arguments),z=x(),D=x(),N=z.toString,h=D.toString;return J(z,{then:function(){return z.apply(z,pt(arguments)),this},else:function(){return D.apply(D,pt(arguments)),this},toString:function(){var g=h();return g&&(g="else{"+g+"}"),bt(["if(",V,"){",N(),"}",g])}})}var M=P(),G={};function k(V,z){var D=[];function N(){var O="a"+D.length;return D.push(O),O}z=z||0;for(var h=0;h<z;++h)N();var g=x(),B=g.toString,Z=G[V]=J(g,{arg:N,toString:function(){return bt(["function(",D.join(),"){",B(),"}"])}});return Z}function X(){var V=['"use strict";',M,"return {"];Object.keys(G).forEach(function(N){V.push('"',N,'":',G[N].toString(),",")}),V.push("}");var z=bt(V).replace(/;/g,`;
`).replace(/}/g,`}
`).replace(/{/g,`{
`),D=Function.apply(null,t.concat(z));return D.apply(null,c)}return{global:M,link:E,block:P,proc:k,scope:x,cond:A,compile:X}}var yt="xyzw".split(""),po=5121,_t=1,da=2,ma=0,va=1,ha=2,pa=3,pn=4,bo=5,yo=6,_o="dither",xo="blend.enable",Eo="blend.color",ba="blend.equation",ya="blend.func",To="depth.enable",go="depth.func",Ao="depth.range",So="depth.mask",_a="colorMask",wo="cull.enable",Ro="cull.face",xa="frontFace",Ea="lineWidth",Po="polygonOffset.enable",Ta="polygonOffset.offset",Lo="sample.alpha",Co="sample.enable",ga="sample.coverage",Fo="stencil.enable",Oo="stencil.mask",Aa="stencil.func",Sa="stencil.opFront",Gt="stencil.opBack",Go="scissor.enable",bn="scissor.box",Dr="viewport",Mt="profile",Zr="framebuffer",Dt="vert",It="frag",Jr="elements",et="primitive",rt="count",yn="offset",_n="instances",Bt="vao",wa="Width",Ra="Height",xt=Zr+wa,Et=Zr+Ra,hu=Dr+wa,pu=Dr+Ra,Mo="drawingBuffer",Do=Mo+wa,Io=Mo+Ra,bu=[ya,ba,Aa,Sa,Gt,ga,Dr,bn,Ta],Tt=34962,Pa=34963,yu=35632,_u=35633,Bo=3553,xu=34067,Eu=2884,Tu=3042,gu=3024,Au=2960,Su=2929,wu=3089,Ru=32823,Pu=32926,Lu=32928,La=5126,xn=35664,En=35665,Tn=35666,Ca=5124,gn=35667,An=35668,Sn=35669,Fa=35670,wn=35671,Rn=35672,Pn=35673,Nt=35674,kt=35675,Vt=35676,Xt=35678,Ut=35680,Oa=4,zt=1028,tt=1029,No=2304,Ga=2305,Cu=32775,Fu=32776,Ou=519,Xr=7680,ko=0,Vo=1,Xo=32774,Gu=513,Uo=36160,Mu=36064,Cr={0:0,1:1,zero:0,one:1,"src color":768,"one minus src color":769,"src alpha":770,"one minus src alpha":771,"dst color":774,"one minus dst color":775,"dst alpha":772,"one minus dst alpha":773,"constant color":32769,"one minus constant color":32770,"constant alpha":32771,"one minus constant alpha":32772,"src alpha saturate":776},zo=["constant color, constant alpha","one minus constant color, constant alpha","constant color, one minus constant alpha","one minus constant color, one minus constant alpha","constant alpha, constant color","constant alpha, one minus constant color","one minus constant alpha, constant color","one minus constant alpha, one minus constant color"],gt={never:512,less:513,"<":513,equal:514,"=":514,"==":514,"===":514,lequal:515,"<=":515,greater:516,">":516,notequal:517,"!=":517,"!==":517,gequal:518,">=":518,always:519},Ur={0:0,zero:0,keep:7680,replace:7681,increment:7682,decrement:7683,"increment wrap":34055,"decrement wrap":34056,invert:5386},jo={frag:yu,vert:_u},Ma={cw:No,ccw:Ga};function Ln(e){return Array.isArray(e)||$(e)||Er(e)}function Ho(e){return e.sort(function(t,c){return t===Dr?-1:c===Dr?1:t<c?-1:1})}function Qe(e,t,c,E){this.thisDep=e,this.contextDep=t,this.propDep=c,this.append=E}function zr(e){return e&&!(e.thisDep||e.contextDep||e.propDep)}function Xe(e){return new Qe(!1,!1,!1,e)}function sr(e,t){var c=e.type;if(c===ma){var E=e.data.length;return new Qe(!0,E>=1,E>=2,t)}else if(c===pn){var P=e.data;return new Qe(P.thisDep,P.contextDep,P.propDep,t)}else{if(c===bo)return new Qe(!1,!1,!1,t);if(c===yo){for(var x=!1,A=!1,M=!1,G=0;G<e.data.length;++G){var k=e.data[G];if(k.type===va)M=!0;else if(k.type===ha)A=!0;else if(k.type===pa)x=!0;else if(k.type===ma){x=!0;var X=k.data;X>=1&&(A=!0),X>=2&&(M=!0)}else k.type===pn&&(x=x||k.data.thisDep,A=A||k.data.contextDep,M=M||k.data.propDep)}return new Qe(x,A,M,t)}else return new Qe(c===pa,c===ha,c===va,t)}}var $o=new Qe(!1,!1,!1,function(){});function Du(e,t,c,E,P,x,A,M,G,k,X,V,z,D,N){var h=k.Record,g={add:32774,subtract:32778,"reverse subtract":32779};c.ext_blend_minmax&&(g.min=Cu,g.max=Fu);var B=c.angle_instanced_arrays,Z=c.webgl_draw_buffers,O=c.oes_vertex_array_object,q={dirty:!0,profile:N.profile},Y={},ce=[],L={},R={};function te(a){return a.replace(".","_")}function j(a,r,u){var v=te(a);ce.push(a),Y[v]=q[v]=!!u,L[v]=r}function I(a,r,u){var v=te(a);ce.push(a),Array.isArray(u)?(q[v]=u.slice(),Y[v]=u.slice()):q[v]=Y[v]=u,R[v]=r}j(_o,gu),j(xo,Tu),I(Eo,"blendColor",[0,0,0,0]),I(ba,"blendEquationSeparate",[Xo,Xo]),I(ya,"blendFuncSeparate",[Vo,ko,Vo,ko]),j(To,Su,!0),I(go,"depthFunc",Gu),I(Ao,"depthRange",[0,1]),I(So,"depthMask",!0),I(_a,_a,[!0,!0,!0,!0]),j(wo,Eu),I(Ro,"cullFace",tt),I(xa,xa,Ga),I(Ea,Ea,1),j(Po,Ru),I(Ta,"polygonOffset",[0,0]),j(Lo,Pu),j(Co,Lu),I(ga,"sampleCoverage",[1,!1]),j(Fo,Au),I(Oo,"stencilMask",-1),I(Aa,"stencilFunc",[Ou,0,-1]),I(Sa,"stencilOpSeparate",[zt,Xr,Xr,Xr]),I(Gt,"stencilOpSeparate",[tt,Xr,Xr,Xr]),j(Go,wu),I(bn,"scissor",[0,0,e.drawingBufferWidth,e.drawingBufferHeight]),I(Dr,Dr,[0,0,e.drawingBufferWidth,e.drawingBufferHeight]);var H={gl:e,context:z,strings:t,next:Y,current:q,draw:V,elements:x,buffer:P,shader:X,attributes:k.state,vao:k,uniforms:G,framebuffer:M,extensions:c,timer:D,isBufferArgs:Ln},W={primTypes:kr,compareFuncs:gt,blendFuncs:Cr,blendEquations:g,stencilOps:Ur,glTypes:Wr,orientationType:Ma};n.optional(function(){H.isArrayLike=Me}),Z&&(W.backBuffer=[tt],W.drawBuffer=vr(E.maxDrawbuffers,function(a){return a===0?[0]:vr(a,function(r){return Mu+r})}));var he=0;function ve(){var a=vu(),r=a.link,u=a.global;a.id=he++,a.batchId="0";var v=r(H),p=a.shared={props:"a0"};Object.keys(H).forEach(function(s){p[s]=u.def(v,".",s)}),n.optional(function(){a.CHECK=r(n),a.commandStr=n.guessCommand(),a.command=r(a.commandStr),a.assert=function(s,o,y){s("if(!(",o,"))",this.CHECK,".commandRaise(",r(y),",",this.command,");")},W.invalidBlendCombinations=zo});var d=a.next={},l=a.current={};Object.keys(R).forEach(function(s){Array.isArray(q[s])&&(d[s]=u.def(p.next,".",s),l[s]=u.def(p.current,".",s))});var m=a.constants={};Object.keys(W).forEach(function(s){m[s]=u.def(JSON.stringify(W[s]))}),a.invoke=function(s,o){switch(o.type){case ma:var y=["this",p.context,p.props,a.batchId];return s.def(r(o.data),".call(",y.slice(0,Math.max(o.data.length+1,4)),")");case va:return s.def(p.props,o.data);case ha:return s.def(p.context,o.data);case pa:return s.def("this",o.data);case pn:return o.data.append(a,s),o.data.ref;case bo:return o.data.toString();case yo:return o.data.map(function(b){return a.invoke(s,b)})}},a.attribCache={};var i={};return a.scopeAttrib=function(s){var o=t.id(s);if(o in i)return i[o];var y=k.scope[o];y||(y=k.scope[o]=new h);var b=i[o]=r(y);return b},a}function Q(a){var r=a.static,u=a.dynamic,v;if(Mt in r){var p=!!r[Mt];v=Xe(function(l,m){return p}),v.enable=p}else if(Mt in u){var d=u[Mt];v=sr(d,function(l,m){return l.invoke(m,d)})}return v}function K(a,r){var u=a.static,v=a.dynamic;if(Zr in u){var p=u[Zr];return p?(p=M.getFramebuffer(p),n.command(p,"invalid framebuffer object"),Xe(function(l,m){var i=l.link(p),s=l.shared;m.set(s.framebuffer,".next",i);var o=s.context;return m.set(o,"."+xt,i+".width"),m.set(o,"."+Et,i+".height"),i})):Xe(function(l,m){var i=l.shared;m.set(i.framebuffer,".next","null");var s=i.context;return m.set(s,"."+xt,s+"."+Do),m.set(s,"."+Et,s+"."+Io),"null"})}else if(Zr in v){var d=v[Zr];return sr(d,function(l,m){var i=l.invoke(m,d),s=l.shared,o=s.framebuffer,y=m.def(o,".getFramebuffer(",i,")");n.optional(function(){l.assert(m,"!"+i+"||"+y,"invalid framebuffer object")}),m.set(o,".next",y);var b=s.context;return m.set(b,"."+xt,y+"?"+y+".width:"+b+"."+Do),m.set(b,"."+Et,y+"?"+y+".height:"+b+"."+Io),y})}else return null}function le(a,r,u){var v=a.static,p=a.dynamic;function d(i){if(i in v){var s=v[i];n.commandType(s,"object","invalid "+i,u.commandStr);var o=!0,y=s.x|0,b=s.y|0,w,C;return"width"in s?(w=s.width|0,n.command(w>=0,"invalid "+i,u.commandStr)):o=!1,"height"in s?(C=s.height|0,n.command(C>=0,"invalid "+i,u.commandStr)):o=!1,new Qe(!o&&r&&r.thisDep,!o&&r&&r.contextDep,!o&&r&&r.propDep,function(fe,ee){var F=fe.shared.context,S=w;"width"in s||(S=ee.def(F,".",xt,"-",y));var ie=C;return"height"in s||(ie=ee.def(F,".",Et,"-",b)),[y,b,S,ie]})}else if(i in p){var U=p[i],me=sr(U,function(fe,ee){var F=fe.invoke(ee,U);n.optional(function(){fe.assert(ee,F+"&&typeof "+F+'==="object"',"invalid "+i)});var S=fe.shared.context,ie=ee.def(F,".x|0"),ne=ee.def(F,".y|0"),de=ee.def('"width" in ',F,"?",F,".width|0:","(",S,".",xt,"-",ie,")"),Ce=ee.def('"height" in ',F,"?",F,".height|0:","(",S,".",Et,"-",ne,")");return n.optional(function(){fe.assert(ee,de+">=0&&"+Ce+">=0","invalid "+i)}),[ie,ne,de,Ce]});return r&&(me.thisDep=me.thisDep||r.thisDep,me.contextDep=me.contextDep||r.contextDep,me.propDep=me.propDep||r.propDep),me}else return r?new Qe(r.thisDep,r.contextDep,r.propDep,function(fe,ee){var F=fe.shared.context;return[0,0,ee.def(F,".",xt),ee.def(F,".",Et)]}):null}var l=d(Dr);if(l){var m=l;l=new Qe(l.thisDep,l.contextDep,l.propDep,function(i,s){var o=m.append(i,s),y=i.shared.context;return s.set(y,"."+hu,o[2]),s.set(y,"."+pu,o[3]),o})}return{viewport:l,scissor_box:d(bn)}}function pe(a,r){var u=a.static,v=typeof u[It]=="string"&&typeof u[Dt]=="string";if(v){if(Object.keys(r.dynamic).length>0)return null;var p=r.static,d=Object.keys(p);if(d.length>0&&typeof p[d[0]]=="number"){for(var l=[],m=0;m<d.length;++m)n(typeof p[d[m]]=="number","must specify all vertex attribute locations when using vaos"),l.push([p[d[m]]|0,d[m]]);return l}}return null}function Ee(a,r,u){var v=a.static,p=a.dynamic;function d(o){if(o in v){var y=t.id(v[o]);n.optional(function(){X.shader(jo[o],y,n.guessCommand())});var b=Xe(function(){return y});return b.id=y,b}else if(o in p){var w=p[o];return sr(w,function(C,U){var me=C.invoke(U,w),fe=U.def(C.shared.strings,".id(",me,")");return n.optional(function(){U(C.shared.shader,".shader(",jo[o],",",fe,",",C.command,");")}),fe})}return null}var l=d(It),m=d(Dt),i=null,s;return zr(l)&&zr(m)?(i=X.program(m.id,l.id,null,u),s=Xe(function(o,y){return o.link(i)})):s=new Qe(l&&l.thisDep||m&&m.thisDep,l&&l.contextDep||m&&m.contextDep,l&&l.propDep||m&&m.propDep,function(o,y){var b=o.shared.shader,w;l?w=l.append(o,y):w=y.def(b,".",It);var C;m?C=m.append(o,y):C=y.def(b,".",Dt);var U=b+".program("+C+","+w;return n.optional(function(){U+=","+o.command}),y.def(U+")")}),{frag:l,vert:m,progVar:s,program:i}}function De(a,r){var u=a.static,v=a.dynamic,p={},d=!1;function l(){if(Bt in u){var ee=u[Bt];return ee!==null&&k.getVAO(ee)===null&&(ee=k.createVAO(ee)),d=!0,p.vao=ee,Xe(function(S){var ie=k.getVAO(ee);return ie?S.link(ie):"null"})}else if(Bt in v){d=!0;var F=v[Bt];return sr(F,function(S,ie){var ne=S.invoke(ie,F);return ie.def(S.shared.vao+".getVAO("+ne+")")})}return null}var m=l(),i=!1;function s(){if(Jr in u){var ee=u[Jr];if(p.elements=ee,Ln(ee)){var F=p.elements=x.create(ee,!0);ee=x.getElements(F),i=!0}else ee&&(ee=x.getElements(ee),i=!0,n.command(ee,"invalid elements",r.commandStr));var S=Xe(function(ne,de){if(ee){var Ce=ne.link(ee);return ne.ELEMENTS=Ce,Ce}return ne.ELEMENTS=null,null});return S.value=ee,S}else if(Jr in v){i=!0;var ie=v[Jr];return sr(ie,function(ne,de){var Ce=ne.shared,tr=Ce.isBufferArgs,at=Ce.elements,Ir=ne.invoke(de,ie),Or=de.def("null"),jr=de.def(tr,"(",Ir,")"),it=ne.cond(jr).then(Or,"=",at,".createStream(",Ir,");").else(Or,"=",at,".getElements(",Ir,");");return n.optional(function(){ne.assert(it.else,"!"+Ir+"||"+Or,"invalid elements")}),de.entry(it),de.exit(ne.cond(jr).then(at,".destroyStream(",Or,");")),ne.ELEMENTS=Or,Or})}else if(d)return new Qe(m.thisDep,m.contextDep,m.propDep,function(ne,de){return de.def(ne.shared.vao+".currentVAO?"+ne.shared.elements+".getElements("+ne.shared.vao+".currentVAO.elements):null")});return null}var o=s();function y(){if(et in u){var ee=u[et];return p.primitive=ee,n.commandParameter(ee,kr,"invalid primitve",r.commandStr),Xe(function(S,ie){return kr[ee]})}else if(et in v){var F=v[et];return sr(F,function(S,ie){var ne=S.constants.primTypes,de=S.invoke(ie,F);return n.optional(function(){S.assert(ie,de+" in "+ne,"invalid primitive, must be one of "+Object.keys(kr))}),ie.def(ne,"[",de,"]")})}else{if(i)return zr(o)?o.value?Xe(function(S,ie){return ie.def(S.ELEMENTS,".primType")}):Xe(function(){return Oa}):new Qe(o.thisDep,o.contextDep,o.propDep,function(S,ie){var ne=S.ELEMENTS;return ie.def(ne,"?",ne,".primType:",Oa)});if(d)return new Qe(m.thisDep,m.contextDep,m.propDep,function(S,ie){return ie.def(S.shared.vao+".currentVAO?"+S.shared.vao+".currentVAO.primitive:"+Oa)})}return null}function b(ee,F){if(ee in u){var S=u[ee]|0;return F?p.offset=S:p.instances=S,n.command(!F||S>=0,"invalid "+ee,r.commandStr),Xe(function(ne,de){return F&&(ne.OFFSET=S),S})}else if(ee in v){var ie=v[ee];return sr(ie,function(ne,de){var Ce=ne.invoke(de,ie);return F&&(ne.OFFSET=Ce,n.optional(function(){ne.assert(de,Ce+">=0","invalid "+ee)})),Ce})}else if(F){if(i)return Xe(function(ne,de){return ne.OFFSET=0,0});if(d)return new Qe(m.thisDep,m.contextDep,m.propDep,function(ne,de){return de.def(ne.shared.vao+".currentVAO?"+ne.shared.vao+".currentVAO.offset:0")})}else if(d)return new Qe(m.thisDep,m.contextDep,m.propDep,function(ne,de){return de.def(ne.shared.vao+".currentVAO?"+ne.shared.vao+".currentVAO.instances:-1")});return null}var w=b(yn,!0);function C(){if(rt in u){var ee=u[rt]|0;return p.count=ee,n.command(typeof ee=="number"&&ee>=0,"invalid vertex count",r.commandStr),Xe(function(){return ee})}else if(rt in v){var F=v[rt];return sr(F,function(de,Ce){var tr=de.invoke(Ce,F);return n.optional(function(){de.assert(Ce,"typeof "+tr+'==="number"&&'+tr+">=0&&"+tr+"===("+tr+"|0)","invalid vertex count")}),tr})}else if(i)if(zr(o)){if(o)return w?new Qe(w.thisDep,w.contextDep,w.propDep,function(de,Ce){var tr=Ce.def(de.ELEMENTS,".vertCount-",de.OFFSET);return n.optional(function(){de.assert(Ce,tr+">=0","invalid vertex offset/element buffer too small")}),tr}):Xe(function(de,Ce){return Ce.def(de.ELEMENTS,".vertCount")});var S=Xe(function(){return-1});return n.optional(function(){S.MISSING=!0}),S}else{var ie=new Qe(o.thisDep||w.thisDep,o.contextDep||w.contextDep,o.propDep||w.propDep,function(de,Ce){var tr=de.ELEMENTS;return de.OFFSET?Ce.def(tr,"?",tr,".vertCount-",de.OFFSET,":-1"):Ce.def(tr,"?",tr,".vertCount:-1")});return n.optional(function(){ie.DYNAMIC=!0}),ie}else if(d){var ne=new Qe(m.thisDep,m.contextDep,m.propDep,function(de,Ce){return Ce.def(de.shared.vao,".currentVAO?",de.shared.vao,".currentVAO.count:-1")});return ne}return null}var U=y(),me=C(),fe=b(_n,!1);return{elements:o,primitive:U,count:me,instances:fe,offset:w,vao:m,vaoActive:d,elementsActive:i,static:p}}function Be(a,r){var u=a.static,v=a.dynamic,p={};return ce.forEach(function(d){var l=te(d);function m(i,s){if(d in u){var o=i(u[d]);p[l]=Xe(function(){return o})}else if(d in v){var y=v[d];p[l]=sr(y,function(b,w){return s(b,w,b.invoke(w,y))})}}switch(d){case wo:case xo:case _o:case Fo:case To:case Go:case Po:case Lo:case Co:case So:return m(function(i){return n.commandType(i,"boolean",d,r.commandStr),i},function(i,s,o){return n.optional(function(){i.assert(s,"typeof "+o+'==="boolean"',"invalid flag "+d,i.commandStr)}),o});case go:return m(function(i){return n.commandParameter(i,gt,"invalid "+d,r.commandStr),gt[i]},function(i,s,o){var y=i.constants.compareFuncs;return n.optional(function(){i.assert(s,o+" in "+y,"invalid "+d+", must be one of "+Object.keys(gt))}),s.def(y,"[",o,"]")});case Ao:return m(function(i){return n.command(Me(i)&&i.length===2&&typeof i[0]=="number"&&typeof i[1]=="number"&&i[0]<=i[1],"depth range is 2d array",r.commandStr),i},function(i,s,o){n.optional(function(){i.assert(s,i.shared.isArrayLike+"("+o+")&&"+o+".length===2&&typeof "+o+'[0]==="number"&&typeof '+o+'[1]==="number"&&'+o+"[0]<="+o+"[1]","depth range must be a 2d array")});var y=s.def("+",o,"[0]"),b=s.def("+",o,"[1]");return[y,b]});case ya:return m(function(i){n.commandType(i,"object","blend.func",r.commandStr);var s="srcRGB"in i?i.srcRGB:i.src,o="srcAlpha"in i?i.srcAlpha:i.src,y="dstRGB"in i?i.dstRGB:i.dst,b="dstAlpha"in i?i.dstAlpha:i.dst;return n.commandParameter(s,Cr,l+".srcRGB",r.commandStr),n.commandParameter(o,Cr,l+".srcAlpha",r.commandStr),n.commandParameter(y,Cr,l+".dstRGB",r.commandStr),n.commandParameter(b,Cr,l+".dstAlpha",r.commandStr),n.command(zo.indexOf(s+", "+y)===-1,"unallowed blending combination (srcRGB, dstRGB) = ("+s+", "+y+")",r.commandStr),[Cr[s],Cr[y],Cr[o],Cr[b]]},function(i,s,o){var y=i.constants.blendFuncs;n.optional(function(){i.assert(s,o+"&&typeof "+o+'==="object"',"invalid blend func, must be an object")});function b(F,S){var ie=s.def('"',F,S,'" in ',o,"?",o,".",F,S,":",o,".",F);return n.optional(function(){i.assert(s,ie+" in "+y,"invalid "+d+"."+F+S+", must be one of "+Object.keys(Cr))}),ie}var w=b("src","RGB"),C=b("dst","RGB");n.optional(function(){var F=i.constants.invalidBlendCombinations;i.assert(s,F+".indexOf("+w+'+", "+'+C+") === -1 ","unallowed blending combination for (srcRGB, dstRGB)")});var U=s.def(y,"[",w,"]"),me=s.def(y,"[",b("src","Alpha"),"]"),fe=s.def(y,"[",C,"]"),ee=s.def(y,"[",b("dst","Alpha"),"]");return[U,fe,me,ee]});case ba:return m(function(i){if(typeof i=="string")return n.commandParameter(i,g,"invalid "+d,r.commandStr),[g[i],g[i]];if(typeof i=="object")return n.commandParameter(i.rgb,g,d+".rgb",r.commandStr),n.commandParameter(i.alpha,g,d+".alpha",r.commandStr),[g[i.rgb],g[i.alpha]];n.commandRaise("invalid blend.equation",r.commandStr)},function(i,s,o){var y=i.constants.blendEquations,b=s.def(),w=s.def(),C=i.cond("typeof ",o,'==="string"');return n.optional(function(){function U(me,fe,ee){i.assert(me,ee+" in "+y,"invalid "+fe+", must be one of "+Object.keys(g))}U(C.then,d,o),i.assert(C.else,o+"&&typeof "+o+'==="object"',"invalid "+d),U(C.else,d+".rgb",o+".rgb"),U(C.else,d+".alpha",o+".alpha")}),C.then(b,"=",w,"=",y,"[",o,"];"),C.else(b,"=",y,"[",o,".rgb];",w,"=",y,"[",o,".alpha];"),s(C),[b,w]});case Eo:return m(function(i){return n.command(Me(i)&&i.length===4,"blend.color must be a 4d array",r.commandStr),vr(4,function(s){return+i[s]})},function(i,s,o){return n.optional(function(){i.assert(s,i.shared.isArrayLike+"("+o+")&&"+o+".length===4","blend.color must be a 4d array")}),vr(4,function(y){return s.def("+",o,"[",y,"]")})});case Oo:return m(function(i){return n.commandType(i,"number",l,r.commandStr),i|0},function(i,s,o){return n.optional(function(){i.assert(s,"typeof "+o+'==="number"',"invalid stencil.mask")}),s.def(o,"|0")});case Aa:return m(function(i){n.commandType(i,"object",l,r.commandStr);var s=i.cmp||"keep",o=i.ref||0,y="mask"in i?i.mask:-1;return n.commandParameter(s,gt,d+".cmp",r.commandStr),n.commandType(o,"number",d+".ref",r.commandStr),n.commandType(y,"number",d+".mask",r.commandStr),[gt[s],o,y]},function(i,s,o){var y=i.constants.compareFuncs;n.optional(function(){function U(){i.assert(s,Array.prototype.join.call(arguments,""),"invalid stencil.func")}U(o+"&&typeof ",o,'==="object"'),U('!("cmp" in ',o,")||(",o,".cmp in ",y,")")});var b=s.def('"cmp" in ',o,"?",y,"[",o,".cmp]",":",Xr),w=s.def(o,".ref|0"),C=s.def('"mask" in ',o,"?",o,".mask|0:-1");return[b,w,C]});case Sa:case Gt:return m(function(i){n.commandType(i,"object",l,r.commandStr);var s=i.fail||"keep",o=i.zfail||"keep",y=i.zpass||"keep";return n.commandParameter(s,Ur,d+".fail",r.commandStr),n.commandParameter(o,Ur,d+".zfail",r.commandStr),n.commandParameter(y,Ur,d+".zpass",r.commandStr),[d===Gt?tt:zt,Ur[s],Ur[o],Ur[y]]},function(i,s,o){var y=i.constants.stencilOps;n.optional(function(){i.assert(s,o+"&&typeof "+o+'==="object"',"invalid "+d)});function b(w){return n.optional(function(){i.assert(s,'!("'+w+'" in '+o+")||("+o+"."+w+" in "+y+")","invalid "+d+"."+w+", must be one of "+Object.keys(Ur))}),s.def('"',w,'" in ',o,"?",y,"[",o,".",w,"]:",Xr)}return[d===Gt?tt:zt,b("fail"),b("zfail"),b("zpass")]});case Ta:return m(function(i){n.commandType(i,"object",l,r.commandStr);var s=i.factor|0,o=i.units|0;return n.commandType(s,"number",l+".factor",r.commandStr),n.commandType(o,"number",l+".units",r.commandStr),[s,o]},function(i,s,o){n.optional(function(){i.assert(s,o+"&&typeof "+o+'==="object"',"invalid "+d)});var y=s.def(o,".factor|0"),b=s.def(o,".units|0");return[y,b]});case Ro:return m(function(i){var s=0;return i==="front"?s=zt:i==="back"&&(s=tt),n.command(!!s,l,r.commandStr),s},function(i,s,o){return n.optional(function(){i.assert(s,o+'==="front"||'+o+'==="back"',"invalid cull.face")}),s.def(o,'==="front"?',zt,":",tt)});case Ea:return m(function(i){return n.command(typeof i=="number"&&i>=E.lineWidthDims[0]&&i<=E.lineWidthDims[1],"invalid line width, must be a positive number between "+E.lineWidthDims[0]+" and "+E.lineWidthDims[1],r.commandStr),i},function(i,s,o){return n.optional(function(){i.assert(s,"typeof "+o+'==="number"&&'+o+">="+E.lineWidthDims[0]+"&&"+o+"<="+E.lineWidthDims[1],"invalid line width")}),o});case xa:return m(function(i){return n.commandParameter(i,Ma,l,r.commandStr),Ma[i]},function(i,s,o){return n.optional(function(){i.assert(s,o+'==="cw"||'+o+'==="ccw"',"invalid frontFace, must be one of cw,ccw")}),s.def(o+'==="cw"?'+No+":"+Ga)});case _a:return m(function(i){return n.command(Me(i)&&i.length===4,"color.mask must be length 4 array",r.commandStr),i.map(function(s){return!!s})},function(i,s,o){return n.optional(function(){i.assert(s,i.shared.isArrayLike+"("+o+")&&"+o+".length===4","invalid color.mask")}),vr(4,function(y){return"!!"+o+"["+y+"]"})});case ga:return m(function(i){n.command(typeof i=="object"&&i,l,r.commandStr);var s="value"in i?i.value:1,o=!!i.invert;return n.command(typeof s=="number"&&s>=0&&s<=1,"sample.coverage.value must be a number between 0 and 1",r.commandStr),[s,o]},function(i,s,o){n.optional(function(){i.assert(s,o+"&&typeof "+o+'==="object"',"invalid sample.coverage")});var y=s.def('"value" in ',o,"?+",o,".value:1"),b=s.def("!!",o,".invert");return[y,b]})}}),p}function ge(a,r){var u=a.static,v=a.dynamic,p={};return Object.keys(u).forEach(function(d){var l=u[d],m;if(typeof l=="number"||typeof l=="boolean")m=Xe(function(){return l});else if(typeof l=="function"){var i=l._reglType;i==="texture2d"||i==="textureCube"?m=Xe(function(s){return s.link(l)}):i==="framebuffer"||i==="framebufferCube"?(n.command(l.color.length>0,'missing color attachment for framebuffer sent to uniform "'+d+'"',r.commandStr),m=Xe(function(s){return s.link(l.color[0])})):n.commandRaise('invalid data for uniform "'+d+'"',r.commandStr)}else Me(l)?m=Xe(function(s){var o=s.global.def("[",vr(l.length,function(y){return n.command(typeof l[y]=="number"||typeof l[y]=="boolean","invalid uniform "+d,s.commandStr),l[y]}),"]");return o}):n.commandRaise('invalid or missing data for uniform "'+d+'"',r.commandStr);m.value=l,p[d]=m}),Object.keys(v).forEach(function(d){var l=v[d];p[d]=sr(l,function(m,i){return m.invoke(i,l)})}),p}function He(a,r){var u=a.static,v=a.dynamic,p={};return Object.keys(u).forEach(function(d){var l=u[d],m=t.id(d),i=new h;if(Ln(l))i.state=_t,i.buffer=P.getBuffer(P.create(l,Tt,!1,!0)),i.type=0;else{var s=P.getBuffer(l);if(s)i.state=_t,i.buffer=s,i.type=0;else if(n.command(typeof l=="object"&&l,"invalid data for attribute "+d,r.commandStr),"constant"in l){var o=l.constant;i.buffer="null",i.state=da,typeof o=="number"?i.x=o:(n.command(Me(o)&&o.length>0&&o.length<=4,"invalid constant for attribute "+d,r.commandStr),yt.forEach(function(fe,ee){ee<o.length&&(i[fe]=o[ee])}))}else{Ln(l.buffer)?s=P.getBuffer(P.create(l.buffer,Tt,!1,!0)):s=P.getBuffer(l.buffer),n.command(!!s,'missing buffer for attribute "'+d+'"',r.commandStr);var y=l.offset|0;n.command(y>=0,'invalid offset for attribute "'+d+'"',r.commandStr);var b=l.stride|0;n.command(b>=0&&b<256,'invalid stride for attribute "'+d+'", must be integer betweeen [0, 255]',r.commandStr);var w=l.size|0;n.command(!("size"in l)||w>0&&w<=4,'invalid size for attribute "'+d+'", must be 1,2,3,4',r.commandStr);var C=!!l.normalized,U=0;"type"in l&&(n.commandParameter(l.type,Wr,"invalid type for attribute "+d,r.commandStr),U=Wr[l.type]);var me=l.divisor|0;n.optional(function(){"divisor"in l&&(n.command(me===0||B,'cannot specify divisor for attribute "'+d+'", instancing not supported',r.commandStr),n.command(me>=0,'invalid divisor for attribute "'+d+'"',r.commandStr));var fe=r.commandStr,ee=["buffer","offset","divisor","normalized","type","size","stride"];Object.keys(l).forEach(function(F){n.command(ee.indexOf(F)>=0,'unknown parameter "'+F+'" for attribute pointer "'+d+'" (valid parameters are '+ee+")",fe)})}),i.buffer=s,i.state=_t,i.size=w,i.normalized=C,i.type=U||s.dtype,i.offset=y,i.stride=b,i.divisor=me}}p[d]=Xe(function(fe,ee){var F=fe.attribCache;if(m in F)return F[m];var S={isStream:!1};return Object.keys(i).forEach(function(ie){S[ie]=i[ie]}),i.buffer&&(S.buffer=fe.link(i.buffer),S.type=S.type||S.buffer+".dtype"),F[m]=S,S})}),Object.keys(v).forEach(function(d){var l=v[d];function m(i,s){var o=i.invoke(s,l),y=i.shared,b=i.constants,w=y.isBufferArgs,C=y.buffer;n.optional(function(){i.assert(s,o+"&&(typeof "+o+'==="object"||typeof '+o+'==="function")&&('+w+"("+o+")||"+C+".getBuffer("+o+")||"+C+".getBuffer("+o+".buffer)||"+w+"("+o+'.buffer)||("constant" in '+o+"&&(typeof "+o+'.constant==="number"||'+y.isArrayLike+"("+o+".constant))))",'invalid dynamic attribute "'+d+'"')});var U={isStream:s.def(!1)},me=new h;me.state=_t,Object.keys(me).forEach(function(S){U[S]=s.def(""+me[S])});var fe=U.buffer,ee=U.type;s("if(",w,"(",o,")){",U.isStream,"=true;",fe,"=",C,".createStream(",Tt,",",o,");",ee,"=",fe,".dtype;","}else{",fe,"=",C,".getBuffer(",o,");","if(",fe,"){",ee,"=",fe,".dtype;",'}else if("constant" in ',o,"){",U.state,"=",da,";","if(typeof "+o+'.constant === "number"){',U[yt[0]],"=",o,".constant;",yt.slice(1).map(function(S){return U[S]}).join("="),"=0;","}else{",yt.map(function(S,ie){return U[S]+"="+o+".constant.length>"+ie+"?"+o+".constant["+ie+"]:0;"}).join(""),"}}else{","if(",w,"(",o,".buffer)){",fe,"=",C,".createStream(",Tt,",",o,".buffer);","}else{",fe,"=",C,".getBuffer(",o,".buffer);","}",ee,'="type" in ',o,"?",b.glTypes,"[",o,".type]:",fe,".dtype;",U.normalized,"=!!",o,".normalized;");function F(S){s(U[S],"=",o,".",S,"|0;")}return F("size"),F("offset"),F("stride"),F("divisor"),s("}}"),s.exit("if(",U.isStream,"){",C,".destroyStream(",fe,");","}"),U}p[d]=sr(l,m)}),p}function Oe(a){var r=a.static,u=a.dynamic,v={};return Object.keys(r).forEach(function(p){var d=r[p];v[p]=Xe(function(l,m){return typeof d=="number"||typeof d=="boolean"?""+d:l.link(d)})}),Object.keys(u).forEach(function(p){var d=u[p];v[p]=sr(d,function(l,m){return l.invoke(m,d)})}),v}function Ue(a,r,u,v,p){var d=a.static,l=a.dynamic;n.optional(function(){var F=[Zr,Dt,It,Jr,et,yn,rt,_n,Mt,Bt].concat(ce);function S(ie){Object.keys(ie).forEach(function(ne){n.command(F.indexOf(ne)>=0,'unknown parameter "'+ne+'"',p.commandStr)})}S(d),S(l)});var m=pe(a,r),i=K(a),s=le(a,i,p),o=De(a,p),y=Be(a,p),b=Ee(a,p,m);function w(F){var S=s[F];S&&(y[F]=S)}w(Dr),w(te(bn));var C=Object.keys(y).length>0,U={framebuffer:i,draw:o,shader:b,state:y,dirty:C,scopeVAO:null,drawVAO:null,useVAO:!1,attributes:{}};if(U.profile=Q(a),U.uniforms=ge(u,p),U.drawVAO=U.scopeVAO=o.vao,!U.drawVAO&&b.program&&!m&&c.angle_instanced_arrays&&o.static.elements){var me=!0,fe=b.program.attributes.map(function(F){var S=r.static[F];return me=me&&!!S,S});if(me&&fe.length>0){var ee=k.getVAO(k.createVAO({attributes:fe,elements:o.static.elements}));U.drawVAO=new Qe(null,null,null,function(F,S){return F.link(ee)}),U.useVAO=!0}}return m?U.useVAO=!0:U.attributes=He(r,p),U.context=Oe(v),U}function $e(a,r,u){var v=a.shared,p=v.context,d=a.scope();Object.keys(u).forEach(function(l){r.save(p,"."+l);var m=u[l],i=m.append(a,r);Array.isArray(i)?d(p,".",l,"=[",i.join(),"];"):d(p,".",l,"=",i,";")}),r(d)}function We(a,r,u,v){var p=a.shared,d=p.gl,l=p.framebuffer,m;Z&&(m=r.def(p.extensions,".webgl_draw_buffers"));var i=a.constants,s=i.drawBuffer,o=i.backBuffer,y;u?y=u.append(a,r):y=r.def(l,".next"),v||r("if(",y,"!==",l,".cur){"),r("if(",y,"){",d,".bindFramebuffer(",Uo,",",y,".framebuffer);"),Z&&r(m,".drawBuffersWEBGL(",s,"[",y,".colorAttachments.length]);"),r("}else{",d,".bindFramebuffer(",Uo,",null);"),Z&&r(m,".drawBuffersWEBGL(",o,");"),r("}",l,".cur=",y,";"),v||r("}")}function qe(a,r,u){var v=a.shared,p=v.gl,d=a.current,l=a.next,m=v.current,i=v.next,s=a.cond(m,".dirty");ce.forEach(function(o){var y=te(o);if(!(y in u.state)){var b,w;if(y in l){b=l[y],w=d[y];var C=vr(q[y].length,function(me){return s.def(b,"[",me,"]")});s(a.cond(C.map(function(me,fe){return me+"!=="+w+"["+fe+"]"}).join("||")).then(p,".",R[y],"(",C,");",C.map(function(me,fe){return w+"["+fe+"]="+me}).join(";"),";"))}else{b=s.def(i,".",y);var U=a.cond(b,"!==",m,".",y);s(U),y in L?U(a.cond(b).then(p,".enable(",L[y],");").else(p,".disable(",L[y],");"),m,".",y,"=",b,";"):U(p,".",R[y],"(",b,");",m,".",y,"=",b,";")}}}),Object.keys(u.state).length===0&&s(m,".dirty=false;"),r(s)}function er(a,r,u,v){var p=a.shared,d=a.current,l=p.current,m=p.gl;Ho(Object.keys(u)).forEach(function(i){var s=u[i];if(!(v&&!v(s))){var o=s.append(a,r);if(L[i]){var y=L[i];zr(s)?o?r(m,".enable(",y,");"):r(m,".disable(",y,");"):r(a.cond(o).then(m,".enable(",y,");").else(m,".disable(",y,");")),r(l,".",i,"=",o,";")}else if(Me(o)){var b=d[i];r(m,".",R[i],"(",o,");",o.map(function(w,C){return b+"["+C+"]="+w}).join(";"),";")}else r(m,".",R[i],"(",o,");",l,".",i,"=",o,";")}})}function Ne(a,r){B&&(a.instancing=r.def(a.shared.extensions,".angle_instanced_arrays"))}function ye(a,r,u,v,p){var d=a.shared,l=a.stats,m=d.current,i=d.timer,s=u.profile;function o(){return typeof performance=="undefined"?"Date.now()":"performance.now()"}var y,b;function w(F){y=r.def(),F(y,"=",o(),";"),typeof p=="string"?F(l,".count+=",p,";"):F(l,".count++;"),D&&(v?(b=r.def(),F(b,"=",i,".getNumPendingQueries();")):F(i,".beginQuery(",l,");"))}function C(F){F(l,".cpuTime+=",o(),"-",y,";"),D&&(v?F(i,".pushScopeStats(",b,",",i,".getNumPendingQueries(),",l,");"):F(i,".endQuery();"))}function U(F){var S=r.def(m,".profile");r(m,".profile=",F,";"),r.exit(m,".profile=",S,";")}var me;if(s){if(zr(s)){s.enable?(w(r),C(r.exit),U("true")):U("false");return}me=s.append(a,r),U(me)}else me=r.def(m,".profile");var fe=a.block();w(fe),r("if(",me,"){",fe,"}");var ee=a.block();C(ee),r.exit("if(",me,"){",ee,"}")}function rr(a,r,u,v,p){var d=a.shared;function l(i){switch(i){case xn:case gn:case wn:return 2;case En:case An:case Rn:return 3;case Tn:case Sn:case Pn:return 4;default:return 1}}function m(i,s,o){var y=d.gl,b=r.def(i,".location"),w=r.def(d.attributes,"[",b,"]"),C=o.state,U=o.buffer,me=[o.x,o.y,o.z,o.w],fe=["buffer","normalized","offset","stride"];function ee(){r("if(!",w,".buffer){",y,".enableVertexAttribArray(",b,");}");var S=o.type,ie;if(o.size?ie=r.def(o.size,"||",s):ie=s,r("if(",w,".type!==",S,"||",w,".size!==",ie,"||",fe.map(function(de){return w+"."+de+"!=="+o[de]}).join("||"),"){",y,".bindBuffer(",Tt,",",U,".buffer);",y,".vertexAttribPointer(",[b,ie,S,o.normalized,o.stride,o.offset],");",w,".type=",S,";",w,".size=",ie,";",fe.map(function(de){return w+"."+de+"="+o[de]+";"}).join(""),"}"),B){var ne=o.divisor;r("if(",w,".divisor!==",ne,"){",a.instancing,".vertexAttribDivisorANGLE(",[b,ne],");",w,".divisor=",ne,";}")}}function F(){r("if(",w,".buffer){",y,".disableVertexAttribArray(",b,");",w,".buffer=null;","}if(",yt.map(function(S,ie){return w+"."+S+"!=="+me[ie]}).join("||"),"){",y,".vertexAttrib4f(",b,",",me,");",yt.map(function(S,ie){return w+"."+S+"="+me[ie]+";"}).join(""),"}")}C===_t?ee():C===da?F():(r("if(",C,"===",_t,"){"),ee(),r("}else{"),F(),r("}"))}v.forEach(function(i){var s=i.name,o=u.attributes[s],y;if(o){if(!p(o))return;y=o.append(a,r)}else{if(!p($o))return;var b=a.scopeAttrib(s);n.optional(function(){a.assert(r,b+".state","missing attribute "+s)}),y={},Object.keys(new h).forEach(function(w){y[w]=r.def(b,".",w)})}m(a.link(i),l(i.info.type),y)})}function Pe(a,r,u,v,p,d){for(var l=a.shared,m=l.gl,i={},s,o=0;o<v.length;++o){var y=v[o],b=y.name,w=y.info.type,C=y.info.size,U=u.uniforms[b];if(C>1){if(!U)continue;var me=b.replace("[0]","");if(i[me])continue;i[me]=1}var fe=a.link(y),ee=fe+".location",F;if(U){if(!p(U))continue;if(zr(U)){var S=U.value;if(n.command(S!==null&&typeof S!="undefined",'missing uniform "'+b+'"',a.commandStr),w===Xt||w===Ut){n.command(typeof S=="function"&&(w===Xt&&(S._reglType==="texture2d"||S._reglType==="framebuffer")||w===Ut&&(S._reglType==="textureCube"||S._reglType==="framebufferCube")),"invalid texture for uniform "+b,a.commandStr);var ie=a.link(S._texture||S.color[0]._texture);r(m,".uniform1i(",ee,",",ie+".bind());"),r.exit(ie,".unbind();")}else if(w===Nt||w===kt||w===Vt){n.optional(function(){n.command(Me(S),"invalid matrix for uniform "+b,a.commandStr),n.command(w===Nt&&S.length===4||w===kt&&S.length===9||w===Vt&&S.length===16,"invalid length for matrix uniform "+b,a.commandStr)});var ne=a.global.def("new Float32Array(["+Array.prototype.slice.call(S)+"])"),de=2;w===kt?de=3:w===Vt&&(de=4),r(m,".uniformMatrix",de,"fv(",ee,",false,",ne,");")}else{switch(w){case La:C===1?n.commandType(S,"number","uniform "+b,a.commandStr):n.command(Me(S)&&S.length===C,"uniform "+b,a.commandStr),s="1f";break;case xn:n.command(Me(S)&&S.length&&S.length%2===0&&S.length<=C*2,"uniform "+b,a.commandStr),s="2f";break;case En:n.command(Me(S)&&S.length&&S.length%3===0&&S.length<=C*3,"uniform "+b,a.commandStr),s="3f";break;case Tn:n.command(Me(S)&&S.length&&S.length%4===0&&S.length<=C*4,"uniform "+b,a.commandStr),s="4f";break;case Fa:C===1?n.commandType(S,"boolean","uniform "+b,a.commandStr):n.command(Me(S)&&S.length===C,"uniform "+b,a.commandStr),s="1i";break;case Ca:C===1?n.commandType(S,"number","uniform "+b,a.commandStr):n.command(Me(S)&&S.length===C,"uniform "+b,a.commandStr),s="1i";break;case wn:n.command(Me(S)&&S.length&&S.length%2===0&&S.length<=C*2,"uniform "+b,a.commandStr),s="2i";break;case gn:n.command(Me(S)&&S.length&&S.length%2===0&&S.length<=C*2,"uniform "+b,a.commandStr),s="2i";break;case Rn:n.command(Me(S)&&S.length&&S.length%3===0&&S.length<=C*3,"uniform "+b,a.commandStr),s="3i";break;case An:n.command(Me(S)&&S.length&&S.length%3===0&&S.length<=C*3,"uniform "+b,a.commandStr),s="3i";break;case Pn:n.command(Me(S)&&S.length&&S.length%4===0&&S.length<=C*4,"uniform "+b,a.commandStr),s="4i";break;case Sn:n.command(Me(S)&&S.length&&S.length%4===0&&S.length<=C*4,"uniform "+b,a.commandStr),s="4i";break}C>1?(s+="v",S=a.global.def("["+Array.prototype.slice.call(S)+"]")):S=Me(S)?Array.prototype.slice.call(S):S,r(m,".uniform",s,"(",ee,",",S,");")}continue}else F=U.append(a,r)}else{if(!p($o))continue;F=r.def(l.uniforms,"[",t.id(b),"]")}w===Xt?(n(!Array.isArray(F),"must specify a scalar prop for textures"),r("if(",F,"&&",F,'._reglType==="framebuffer"){',F,"=",F,".color[0];","}")):w===Ut&&(n(!Array.isArray(F),"must specify a scalar prop for cube maps"),r("if(",F,"&&",F,'._reglType==="framebufferCube"){',F,"=",F,".color[0];","}")),n.optional(function(){function pr(cr,Cn){a.assert(r,cr,'bad data or missing for uniform "'+b+'".  '+Cn)}function ot(cr,Cn){Cn===1&&n(!Array.isArray(F),"must not specify an array type for uniform"),pr("Array.isArray("+F+") && typeof "+F+'[0]===" '+cr+'" || typeof '+F+'==="'+cr+'"',"invalid type, expected "+cr)}function yr(cr,Cn,Fn){Array.isArray(F)?n(F.length&&F.length%cr===0&&F.length<=cr*Fn,"must have length of "+(Fn===1?"":"n * ")+cr):pr(l.isArrayLike+"("+F+")&&"+F+".length && "+F+".length % "+cr+" === 0 && "+F+".length<="+cr*Fn,"invalid vector, should have length of "+(Fn===1?"":"n * ")+cr,a.commandStr)}function Jo(cr){n(!Array.isArray(F),"must not specify a value type"),pr("typeof "+F+'==="function"&&'+F+'._reglType==="texture'+(cr===Bo?"2d":"Cube")+'"',"invalid texture type",a.commandStr)}switch(w){case Ca:ot("number",C);break;case gn:yr(2,"number",C);break;case An:yr(3,"number",C);break;case Sn:yr(4,"number",C);break;case La:ot("number",C);break;case xn:yr(2,"number",C);break;case En:yr(3,"number",C);break;case Tn:yr(4,"number",C);break;case Fa:ot("boolean",C);break;case wn:yr(2,"boolean",C);break;case Rn:yr(3,"boolean",C);break;case Pn:yr(4,"boolean",C);break;case Nt:yr(4,"number",C);break;case kt:yr(9,"number",C);break;case Vt:yr(16,"number",C);break;case Xt:Jo(Bo);break;case Ut:Jo(xu);break}});var Ce=1;switch(w){case Xt:case Ut:var tr=r.def(F,"._texture");r(m,".uniform1i(",ee,",",tr,".bind());"),r.exit(tr,".unbind();");continue;case Ca:case Fa:s="1i";break;case gn:case wn:s="2i",Ce=2;break;case An:case Rn:s="3i",Ce=3;break;case Sn:case Pn:s="4i",Ce=4;break;case La:s="1f";break;case xn:s="2f",Ce=2;break;case En:s="3f",Ce=3;break;case Tn:s="4f",Ce=4;break;case Nt:s="Matrix2fv";break;case kt:s="Matrix3fv";break;case Vt:s="Matrix4fv";break}if(s.indexOf("Matrix")===-1&&C>1&&(s+="v",Ce=1),s.charAt(0)==="M"){r(m,".uniform",s,"(",ee,",");var at=Math.pow(w-Nt+2,2),Ir=a.global.def("new Float32Array(",at,")");Array.isArray(F)?r("false,(",vr(at,function(pr){return Ir+"["+pr+"]="+F[pr]}),",",Ir,")"):r("false,(Array.isArray(",F,")||",F," instanceof Float32Array)?",F,":(",vr(at,function(pr){return Ir+"["+pr+"]="+F+"["+pr+"]"}),",",Ir,")"),r(");")}else if(Ce>1){for(var Or=[],jr=[],it=0;it<Ce;++it)Array.isArray(F)?jr.push(F[it]):jr.push(r.def(F+"["+it+"]")),d&&Or.push(r.def());d&&r("if(!",a.batchId,"||",Or.map(function(pr,ot){return pr+"!=="+jr[ot]}).join("||"),"){",Or.map(function(pr,ot){return pr+"="+jr[ot]+";"}).join("")),r(m,".uniform",s,"(",ee,",",jr.join(","),");"),d&&r("}")}else{if(n(!Array.isArray(F),"uniform value must not be an array"),d){var Zo=r.def();r("if(!",a.batchId,"||",Zo,"!==",F,"){",Zo,"=",F,";")}r(m,".uniform",s,"(",ee,",",F,");"),d&&r("}")}}}function ue(a,r,u,v){var p=a.shared,d=p.gl,l=p.draw,m=v.draw;function i(){var ie=m.elements,ne,de=r;return ie?((ie.contextDep&&v.contextDynamic||ie.propDep)&&(de=u),ne=ie.append(a,de),m.elementsActive&&de("if("+ne+")"+d+".bindBuffer("+Pa+","+ne+".buffer.buffer);")):(ne=de.def(),de(ne,"=",l,".",Jr,";","if(",ne,"){",d,".bindBuffer(",Pa,",",ne,".buffer.buffer);}","else if(",p.vao,".currentVAO){",ne,"=",a.shared.elements+".getElements("+p.vao,".currentVAO.elements);",O?"":"if("+ne+")"+d+".bindBuffer("+Pa+","+ne+".buffer.buffer);","}")),ne}function s(){var ie=m.count,ne,de=r;return ie?((ie.contextDep&&v.contextDynamic||ie.propDep)&&(de=u),ne=ie.append(a,de),n.optional(function(){ie.MISSING&&a.assert(r,"false","missing vertex count"),ie.DYNAMIC&&a.assert(de,ne+">=0","missing vertex count")})):(ne=de.def(l,".",rt),n.optional(function(){a.assert(de,ne+">=0","missing vertex count")})),ne}var o=i();function y(ie){var ne=m[ie];return ne?ne.contextDep&&v.contextDynamic||ne.propDep?ne.append(a,u):ne.append(a,r):r.def(l,".",ie)}var b=y(et),w=y(yn),C=s();if(typeof C=="number"){if(C===0)return}else u("if(",C,"){"),u.exit("}");var U,me;B&&(U=y(_n),me=a.instancing);var fe=o+".type",ee=m.elements&&zr(m.elements)&&!m.vaoActive;function F(){function ie(){u(me,".drawElementsInstancedANGLE(",[b,C,fe,w+"<<(("+fe+"-"+po+")>>1)",U],");")}function ne(){u(me,".drawArraysInstancedANGLE(",[b,w,C,U],");")}o&&o!=="null"?ee?ie():(u("if(",o,"){"),ie(),u("}else{"),ne(),u("}")):ne()}function S(){function ie(){u(d+".drawElements("+[b,C,fe,w+"<<(("+fe+"-"+po+")>>1)"]+");")}function ne(){u(d+".drawArrays("+[b,w,C]+");")}o&&o!=="null"?ee?ie():(u("if(",o,"){"),ie(),u("}else{"),ne(),u("}")):ne()}B&&(typeof U!="number"||U>=0)?typeof U=="string"?(u("if(",U,">0){"),F(),u("}else if(",U,"<0){"),S(),u("}")):F():S()}function Te(a,r,u,v,p){var d=ve(),l=d.proc("body",p);return n.optional(function(){d.commandStr=r.commandStr,d.command=d.link(r.commandStr)}),B&&(d.instancing=l.def(d.shared.extensions,".angle_instanced_arrays")),a(d,l,u,v),d.compile().body}function Re(a,r,u,v){Ne(a,r),u.useVAO?u.drawVAO?r(a.shared.vao,".setVAO(",u.drawVAO.append(a,r),");"):r(a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"):(r(a.shared.vao,".setVAO(null);"),rr(a,r,u,v.attributes,function(){return!0})),Pe(a,r,u,v.uniforms,function(){return!0},!1),ue(a,r,r,u)}function ke(a,r){var u=a.proc("draw",1);Ne(a,u),$e(a,u,r.context),We(a,u,r.framebuffer),qe(a,u,r),er(a,u,r.state),ye(a,u,r,!1,!0);var v=r.shader.progVar.append(a,u);if(u(a.shared.gl,".useProgram(",v,".program);"),r.shader.program)Re(a,u,r,r.shader.program);else{u(a.shared.vao,".setVAO(null);");var p=a.global.def("{}"),d=u.def(v,".id"),l=u.def(p,"[",d,"]");u(a.cond(l).then(l,".call(this,a0);").else(l,"=",p,"[",d,"]=",a.link(function(m){return Te(Re,a,r,m,1)}),"(",v,");",l,".call(this,a0);"))}Object.keys(r.state).length>0&&u(a.shared.current,".dirty=true;"),a.shared.vao&&u(a.shared.vao,".setVAO(null);")}function Fr(a,r,u,v){a.batchId="a1",Ne(a,r);function p(){return!0}rr(a,r,u,v.attributes,p),Pe(a,r,u,v.uniforms,p,!1),ue(a,r,r,u)}function nt(a,r,u,v){Ne(a,r);var p=u.contextDep,d=r.def(),l="a0",m="a1",i=r.def();a.shared.props=i,a.batchId=d;var s=a.scope(),o=a.scope();r(s.entry,"for(",d,"=0;",d,"<",m,";++",d,"){",i,"=",l,"[",d,"];",o,"}",s.exit);function y(fe){return fe.contextDep&&p||fe.propDep}function b(fe){return!y(fe)}if(u.needsContext&&$e(a,o,u.context),u.needsFramebuffer&&We(a,o,u.framebuffer),er(a,o,u.state,y),u.profile&&y(u.profile)&&ye(a,o,u,!1,!0),v)u.useVAO?u.drawVAO?y(u.drawVAO)?o(a.shared.vao,".setVAO(",u.drawVAO.append(a,o),");"):s(a.shared.vao,".setVAO(",u.drawVAO.append(a,s),");"):s(a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"):(s(a.shared.vao,".setVAO(null);"),rr(a,s,u,v.attributes,b),rr(a,o,u,v.attributes,y)),Pe(a,s,u,v.uniforms,b,!1),Pe(a,o,u,v.uniforms,y,!0),ue(a,s,o,u);else{var w=a.global.def("{}"),C=u.shader.progVar.append(a,o),U=o.def(C,".id"),me=o.def(w,"[",U,"]");o(a.shared.gl,".useProgram(",C,".program);","if(!",me,"){",me,"=",w,"[",U,"]=",a.link(function(fe){return Te(Fr,a,u,fe,2)}),"(",C,");}",me,".call(this,a0[",d,"],",d,");")}}function f(a,r){var u=a.proc("batch",2);a.batchId="0",Ne(a,u);var v=!1,p=!0;Object.keys(r.context).forEach(function(w){v=v||r.context[w].propDep}),v||($e(a,u,r.context),p=!1);var d=r.framebuffer,l=!1;d?(d.propDep?v=l=!0:d.contextDep&&v&&(l=!0),l||We(a,u,d)):We(a,u,null),r.state.viewport&&r.state.viewport.propDep&&(v=!0);function m(w){return w.contextDep&&v||w.propDep}qe(a,u,r),er(a,u,r.state,function(w){return!m(w)}),(!r.profile||!m(r.profile))&&ye(a,u,r,!1,"a1"),r.contextDep=v,r.needsContext=p,r.needsFramebuffer=l;var i=r.shader.progVar;if(i.contextDep&&v||i.propDep)nt(a,u,r,null);else{var s=i.append(a,u);if(u(a.shared.gl,".useProgram(",s,".program);"),r.shader.program)nt(a,u,r,r.shader.program);else{u(a.shared.vao,".setVAO(null);");var o=a.global.def("{}"),y=u.def(s,".id"),b=u.def(o,"[",y,"]");u(a.cond(b).then(b,".call(this,a0,a1);").else(b,"=",o,"[",y,"]=",a.link(function(w){return Te(nt,a,r,w,2)}),"(",s,");",b,".call(this,a0,a1);"))}}Object.keys(r.state).length>0&&u(a.shared.current,".dirty=true;"),a.shared.vao&&u(a.shared.vao,".setVAO(null);")}function T(a,r){var u=a.proc("scope",3);a.batchId="a2";var v=a.shared,p=v.current;$e(a,u,r.context),r.framebuffer&&r.framebuffer.append(a,u),Ho(Object.keys(r.state)).forEach(function(l){var m=r.state[l],i=m.append(a,u);Me(i)?i.forEach(function(s,o){u.set(a.next[l],"["+o+"]",s)}):u.set(v.next,"."+l,i)}),ye(a,u,r,!0,!0),[Jr,yn,rt,_n,et].forEach(function(l){var m=r.draw[l];!m||u.set(v.draw,"."+l,""+m.append(a,u))}),Object.keys(r.uniforms).forEach(function(l){var m=r.uniforms[l].append(a,u);Array.isArray(m)&&(m="["+m.join()+"]"),u.set(v.uniforms,"["+t.id(l)+"]",m)}),Object.keys(r.attributes).forEach(function(l){var m=r.attributes[l].append(a,u),i=a.scopeAttrib(l);Object.keys(new h).forEach(function(s){u.set(i,"."+s,m[s])})}),r.scopeVAO&&u.set(v.vao,".targetVAO",r.scopeVAO.append(a,u));function d(l){var m=r.shader[l];m&&u.set(v.shader,"."+l,m.append(a,u))}d(Dt),d(It),Object.keys(r.state).length>0&&(u(p,".dirty=true;"),u.exit(p,".dirty=true;")),u("a1(",a.shared.context,",a0,",a.batchId,");")}function _(a){if(!(typeof a!="object"||Me(a))){for(var r=Object.keys(a),u=0;u<r.length;++u)if(mr.isDynamic(a[r[u]]))return!0;return!1}}function re(a,r,u){var v=r.static[u];if(!v||!_(v))return;var p=a.global,d=Object.keys(v),l=!1,m=!1,i=!1,s=a.global.def("{}");d.forEach(function(y){var b=v[y];if(mr.isDynamic(b)){typeof b=="function"&&(b=v[y]=mr.unbox(b));var w=sr(b,null);l=l||w.thisDep,i=i||w.propDep,m=m||w.contextDep}else{switch(p(s,".",y,"="),typeof b){case"number":p(b);break;case"string":p('"',b,'"');break;case"object":Array.isArray(b)&&p("[",b.join(),"]");break;default:p(a.link(b));break}p(";")}});function o(y,b){d.forEach(function(w){var C=v[w];if(!!mr.isDynamic(C)){var U=y.invoke(b,C);b(s,".",w,"=",U,";")}})}r.dynamic[u]=new mr.DynamicVariable(pn,{thisDep:l,contextDep:m,propDep:i,ref:s,append:o}),delete r.static[u]}function xe(a,r,u,v,p){var d=ve();d.stats=d.link(p),Object.keys(r.static).forEach(function(m){re(d,r,m)}),bu.forEach(function(m){re(d,a,m)});var l=Ue(a,r,u,v,d);return ke(d,l),T(d,l),f(d,l),J(d.compile(),{destroy:function(){l.shader.program.destroy()}})}return{next:Y,current:q,procs:function(){var a=ve(),r=a.proc("poll"),u=a.proc("refresh"),v=a.block();r(v),u(v);var p=a.shared,d=p.gl,l=p.next,m=p.current;v(m,".dirty=false;"),We(a,r),We(a,u,null,!0);var i;B&&(i=a.link(B)),c.oes_vertex_array_object&&u(a.link(c.oes_vertex_array_object),".bindVertexArrayOES(null);");for(var s=0;s<E.maxAttributes;++s){var o=u.def(p.attributes,"[",s,"]"),y=a.cond(o,".buffer");y.then(d,".enableVertexAttribArray(",s,");",d,".bindBuffer(",Tt,",",o,".buffer.buffer);",d,".vertexAttribPointer(",s,",",o,".size,",o,".type,",o,".normalized,",o,".stride,",o,".offset);").else(d,".disableVertexAttribArray(",s,");",d,".vertexAttrib4f(",s,",",o,".x,",o,".y,",o,".z,",o,".w);",o,".buffer=null;"),u(y),B&&u(i,".vertexAttribDivisorANGLE(",s,",",o,".divisor);")}return u(a.shared.vao,".currentVAO=null;",a.shared.vao,".setVAO(",a.shared.vao,".targetVAO);"),Object.keys(L).forEach(function(b){var w=L[b],C=v.def(l,".",b),U=a.block();U("if(",C,"){",d,".enable(",w,")}else{",d,".disable(",w,")}",m,".",b,"=",C,";"),u(U),r("if(",C,"!==",m,".",b,"){",U,"}")}),Object.keys(R).forEach(function(b){var w=R[b],C=q[b],U,me,fe=a.block();if(fe(d,".",w,"("),Me(C)){var ee=C.length;U=a.global.def(l,".",b),me=a.global.def(m,".",b),fe(vr(ee,function(F){return U+"["+F+"]"}),");",vr(ee,function(F){return me+"["+F+"]="+U+"["+F+"];"}).join("")),r("if(",vr(ee,function(F){return U+"["+F+"]!=="+me+"["+F+"]"}).join("||"),"){",fe,"}")}else U=v.def(l,".",b),me=v.def(m,".",b),fe(U,");",m,".",b,"=",U,";"),r("if(",U,"!==",me,"){",fe,"}");u(fe)}),a.compile()}(),compile:xe}}function Iu(){return{vaoCount:0,bufferCount:0,elementsCount:0,framebufferCount:0,shaderCount:0,textureCount:0,cubeCount:0,renderbufferCount:0,maxTextureUnits:0}}var Bu=34918,Nu=34919,Wo=35007,ku=function(e,t){if(!t.ext_disjoint_timer_query)return null;var c=[];function E(){return c.pop()||t.ext_disjoint_timer_query.createQueryEXT()}function P(B){c.push(B)}var x=[];function A(B){var Z=E();t.ext_disjoint_timer_query.beginQueryEXT(Wo,Z),x.push(Z),D(x.length-1,x.length,B)}function M(){t.ext_disjoint_timer_query.endQueryEXT(Wo)}function G(){this.startQueryIndex=-1,this.endQueryIndex=-1,this.sum=0,this.stats=null}var k=[];function X(){return k.pop()||new G}function V(B){k.push(B)}var z=[];function D(B,Z,O){var q=X();q.startQueryIndex=B,q.endQueryIndex=Z,q.sum=0,q.stats=O,z.push(q)}var N=[],h=[];function g(){var B,Z,O=x.length;if(O!==0){h.length=Math.max(h.length,O+1),N.length=Math.max(N.length,O+1),N[0]=0,h[0]=0;var q=0;for(B=0,Z=0;Z<x.length;++Z){var Y=x[Z];t.ext_disjoint_timer_query.getQueryObjectEXT(Y,Nu)?(q+=t.ext_disjoint_timer_query.getQueryObjectEXT(Y,Bu),P(Y)):x[B++]=Y,N[Z+1]=q,h[Z+1]=B}for(x.length=B,B=0,Z=0;Z<z.length;++Z){var ce=z[Z],L=ce.startQueryIndex,R=ce.endQueryIndex;ce.sum+=N[R]-N[L];var te=h[L],j=h[R];j===te?(ce.stats.gpuTime+=ce.sum/1e6,V(ce)):(ce.startQueryIndex=te,ce.endQueryIndex=j,z[B++]=ce)}z.length=B}}return{beginQuery:A,endQuery:M,pushScopeStats:D,update:g,getNumPendingQueries:function(){return x.length},clear:function(){c.push.apply(c,x);for(var B=0;B<c.length;B++)t.ext_disjoint_timer_query.deleteQueryEXT(c[B]);x.length=0,c.length=0},restore:function(){x.length=0,c.length=0}}},Vu=16384,Xu=256,Uu=1024,zu=34962,Yo="webglcontextlost",Qo="webglcontextrestored",qo=1,ju=2,Hu=3;function Ko(e,t){for(var c=0;c<e.length;++c)if(e[c]===t)return c;return-1}function $u(e){var t=jf(e);if(!t)return null;var c=t.gl,E=c.getContextAttributes(),P=c.isContextLost(),x=Hf(c,t);if(!x)return null;var A=kf(),M=Iu(),G=x.extensions,k=ku(c,G),X=ai(),V=c.drawingBufferWidth,z=c.drawingBufferHeight,D={tick:0,time:0,viewportWidth:V,viewportHeight:z,framebufferWidth:V,framebufferHeight:z,drawingBufferWidth:V,drawingBufferHeight:z,pixelRatio:t.pixelRatio},N={},h={elements:null,primitive:4,count:-1,offset:0,instances:-1},g=Os(c,G),B=Ys(c,M,t,q),Z=oc(c,G,B,M),O=ou(c,G,g,M,B,Z,h);function q(ue){return O.destroyBuffer(ue)}var Y=uu(c,A,M,t),ce=Bc(c,G,g,function(){te.procs.poll()},D,M,t),L=Nc(c,G,g,M,t),R=au(c,G,g,ce,L,M),te=Du(c,A,G,g,B,Z,ce,R,N,O,Y,h,D,k,t),j=mu(c,R,te.procs.poll,D,E,G,g),I=te.next,H=c.canvas,W=[],he=[],ve=[],Q=[t.onDestroy],K=null;function le(){if(W.length===0){k&&k.update(),K=null;return}K=Nn.next(le),er();for(var ue=W.length-1;ue>=0;--ue){var Te=W[ue];Te&&Te(D,null,0)}c.flush(),k&&k.update()}function pe(){!K&&W.length>0&&(K=Nn.next(le))}function Ee(){K&&(Nn.cancel(le),K=null)}function De(ue){ue.preventDefault(),P=!0,Ee(),he.forEach(function(Te){Te()})}function Be(ue){c.getError(),P=!1,x.restore(),Y.restore(),B.restore(),ce.restore(),L.restore(),R.restore(),O.restore(),k&&k.restore(),te.procs.refresh(),pe(),ve.forEach(function(Te){Te()})}H&&(H.addEventListener(Yo,De,!1),H.addEventListener(Qo,Be,!1));function ge(){W.length=0,Ee(),H&&(H.removeEventListener(Yo,De),H.removeEventListener(Qo,Be)),Y.clear(),R.clear(),L.clear(),O.clear(),ce.clear(),Z.clear(),B.clear(),k&&k.clear(),Q.forEach(function(ue){ue()})}function He(ue){n(!!ue,"invalid args to regl({...})"),n.type(ue,"object","invalid args to regl({...})");function Te(p){var d=J({},p);delete d.uniforms,delete d.attributes,delete d.context,delete d.vao,"stencil"in d&&d.stencil.op&&(d.stencil.opBack=d.stencil.opFront=d.stencil.op,delete d.stencil.op);function l(m){if(m in d){var i=d[m];delete d[m],Object.keys(i).forEach(function(s){d[m+"."+s]=i[s]})}}return l("blend"),l("depth"),l("cull"),l("stencil"),l("polygonOffset"),l("scissor"),l("sample"),"vao"in p&&(d.vao=p.vao),d}function Re(p,d){var l={},m={};return Object.keys(p).forEach(function(i){var s=p[i];if(mr.isDynamic(s)){m[i]=mr.unbox(s,i);return}else if(d&&Array.isArray(s)){for(var o=0;o<s.length;++o)if(mr.isDynamic(s[o])){m[i]=mr.unbox(s,i);return}}l[i]=s}),{dynamic:m,static:l}}var ke=Re(ue.context||{},!0),Fr=Re(ue.uniforms||{},!0),nt=Re(ue.attributes||{},!1),f=Re(Te(ue),!1),T={gpuTime:0,cpuTime:0,count:0},_=te.compile(f,nt,Fr,ke,T),re=_.draw,xe=_.batch,a=_.scope,r=[];function u(p){for(;r.length<p;)r.push(null);return r}function v(p,d){var l;if(P&&n.raise("context lost"),typeof p=="function")return a.call(this,null,p,0);if(typeof d=="function")if(typeof p=="number")for(l=0;l<p;++l)a.call(this,null,d,l);else if(Array.isArray(p))for(l=0;l<p.length;++l)a.call(this,p[l],d,l);else return a.call(this,p,d,0);else if(typeof p=="number"){if(p>0)return xe.call(this,u(p|0),p|0)}else if(Array.isArray(p)){if(p.length)return xe.call(this,p,p.length)}else return re.call(this,p)}return J(v,{stats:T,destroy:function(){_.destroy()}})}var Oe=R.setFBO=He({framebuffer:mr.define.call(null,qo,"framebuffer")});function Ue(ue,Te){var Re=0;te.procs.poll();var ke=Te.color;ke&&(c.clearColor(+ke[0]||0,+ke[1]||0,+ke[2]||0,+ke[3]||0),Re|=Vu),"depth"in Te&&(c.clearDepth(+Te.depth),Re|=Xu),"stencil"in Te&&(c.clearStencil(Te.stencil|0),Re|=Uu),n(!!Re,"called regl.clear with no buffer specified"),c.clear(Re)}function $e(ue){if(n(typeof ue=="object"&&ue,"regl.clear() takes an object as input"),"framebuffer"in ue)if(ue.framebuffer&&ue.framebuffer_reglType==="framebufferCube")for(var Te=0;Te<6;++Te)Oe(J({framebuffer:ue.framebuffer.faces[Te]},ue),Ue);else Oe(ue,Ue);else Ue(null,ue)}function We(ue){n.type(ue,"function","regl.frame() callback must be a function"),W.push(ue);function Te(){var Re=Ko(W,ue);n(Re>=0,"cannot cancel a frame twice");function ke(){var Fr=Ko(W,ke);W[Fr]=W[W.length-1],W.length-=1,W.length<=0&&Ee()}W[Re]=ke}return pe(),{cancel:Te}}function qe(){var ue=I.viewport,Te=I.scissor_box;ue[0]=ue[1]=Te[0]=Te[1]=0,D.viewportWidth=D.framebufferWidth=D.drawingBufferWidth=ue[2]=Te[2]=c.drawingBufferWidth,D.viewportHeight=D.framebufferHeight=D.drawingBufferHeight=ue[3]=Te[3]=c.drawingBufferHeight}function er(){D.tick+=1,D.time=ye(),qe(),te.procs.poll()}function Ne(){ce.refresh(),qe(),te.procs.refresh(),k&&k.update()}function ye(){return(ai()-X)/1e3}Ne();function rr(ue,Te){n.type(Te,"function","listener callback must be a function");var Re;switch(ue){case"frame":return We(Te);case"lost":Re=he;break;case"restore":Re=ve;break;case"destroy":Re=Q;break;default:n.raise("invalid event, must be one of frame,lost,restore,destroy")}return Re.push(Te),{cancel:function(){for(var ke=0;ke<Re.length;++ke)if(Re[ke]===Te){Re[ke]=Re[Re.length-1],Re.pop();return}}}}var Pe=J(He,{clear:$e,prop:mr.define.bind(null,qo),context:mr.define.bind(null,ju),this:mr.define.bind(null,Hu),draw:He({}),buffer:function(ue){return B.create(ue,zu,!1,!1)},elements:function(ue){return Z.create(ue,!1)},texture:ce.create2D,cube:ce.createCube,renderbuffer:L.create,framebuffer:R.create,framebufferCube:R.createCube,vao:O.createVAO,attributes:E,frame:We,on:rr,limits:g,hasExtension:function(ue){return g.extensions.indexOf(ue.toLowerCase())>=0},read:j,destroy:ge,_gl:c,_refresh:Ne,poll:function(){er(),k&&k.update()},now:ye,stats:M});return t.onDone(null,Pe),Pe}return $u})})(of);var Qu=of.exports;const Ua=document.getElementById("c");function ff(){var ae,_e;Ua.width=window.innerWidth*((ae=window.devicePixelRatio)!=null?ae:1),Ua.height=window.innerHeight*((_e=window.devicePixelRatio)!=null?_e:1)}window.addEventListener("resize",ff);ff();const Se=Qu({attributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1},canvas:Ua}),Gr=()=>{var ae;return Math.max(window.innerWidth,window.innerHeight)*((ae=window.devicePixelRatio)!=null?ae:1)/(256+64)/2},qu=.012;function Br(ae){let _e=[ef(ae),ef(ae)];return{get read(){return _e[0]},get write(){return _e[1]},swap(){_e.reverse()}}}function ef(ae){var $,J;let _e=Se.texture({width:Math.ceil(window.innerWidth*(($=window.devicePixelRatio)!=null?$:1)/Gr()),height:Math.ceil(window.innerHeight*((J=window.devicePixelRatio)!=null?J:1)/Gr()),min:ae,mag:ae,type:"uint8",wrap:"clamp"});return window.addEventListener("resize",()=>{var se,Ae;_e.resize(Math.ceil(window.innerWidth*((se=window.devicePixelRatio)!=null?se:1)/Gr()),Math.ceil(window.innerHeight*((Ae=window.devicePixelRatio)!=null?Ae:1)/Gr()))}),Se.framebuffer({color:_e,depthStencil:!1})}const Ar=Br("nearest"),Ht=Br("nearest"),Sr=Br("nearest"),$t=Br("nearest"),wr=Br("nearest"),Rr=Br("nearest");Br("nearest");Br("nearest");const za=Br("linear");var Ku=`precision highp float;

attribute vec2 points;
varying vec2 coords;

void main() {
    coords = points * 0.5 + 0.5;
    gl_Position = vec4(points, 0.0, 1.0);
}`,Wt=`precision highp float;
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

`,Zu=`

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
}`,Ju=`

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
}`,el=`

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
}`,rl=`

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
}`,tl=`
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
    col = vec4(0.);
    col.xyz = mixN(col.xyz, fcol.xyz*(1.5*b + specular*5.), a);
    col.xyz = mixN(col.xyz, 0.*vec3(0.5,0.5,1.), bord);
    //col.xyz = tanh3(col.xyz);
    col.w=1.0;
    //col.xyz=P.C*P.M;
    // col.xyz=vec3(P.V+0.5,0.0);
    // col.xy=P.X-pos;
    // col.x=P.M/M_M;
    gl_FragColor=col;
   // particle Pg = getParticle(vec4(1.0,0.5,0.0,1.0), pos);
    //gl_FragColor= vec4(saveParticle(Pg, pos).xy,0.0,1.0);
//  gl_FragColor=vec4(vec3(P.M.x),1.0);
}`;const Yt=({viewportWidth:ae,viewportHeight:_e})=>{var $,J;return[1/Math.ceil(window.innerWidth*(($=window.devicePixelRatio)!=null?$:1)/Gr()),1/Math.ceil(window.innerHeight*((J=window.devicePixelRatio)!=null?J:1)/Gr())]},Bn=({viewportWidth:ae,viewportHeight:_e})=>{var $,J;return{x:0,y:0,width:Math.ceil(window.innerWidth*(($=window.devicePixelRatio)!=null?$:1)/Gr()),height:Math.ceil(window.innerHeight*((J=window.devicePixelRatio)!=null?J:1)/Gr())}},nl=Se({vert:Ku,attributes:{points:[1,1,1,-1,-1,-1,1,1,-1,-1,-1,1]},count:6}),On=Se({frag:Wt+`
`+Zu,framebuffer:Se.prop("framebuffer"),uniforms:{iFrame:Se.prop("iFrame"),iTime:Se.prop("iTime"),iMouse:Se.prop("iMouse"),dt:Se.prop("dt"),X_XT:()=>Ar.read,X_YT:()=>Ht.read,V_XT:()=>Sr.read,V_YT:()=>$t.read,MT:()=>wr.read,CT:()=>Rr.read,tar:Se.prop("tar"),texelSize:Yt},viewport:Bn}),Gn=Se({frag:Wt+`
`+Ju,framebuffer:Se.prop("framebuffer"),uniforms:{iFrame:Se.prop("iFrame"),iTime:Se.prop("iTime"),iMouse:Se.prop("iMouse"),dt:Se.prop("dt"),X_XT:()=>Ar.read,X_YT:()=>Ht.read,V_XT:()=>Sr.read,V_YT:()=>$t.read,MT:()=>wr.read,CT:()=>Rr.read,tar:Se.prop("tar"),texelSize:Yt},viewport:Bn}),al=Se({frag:Wt+`
`+el,framebuffer:Se.prop("framebuffer"),uniforms:{iFrame:Se.prop("iFrame"),iTime:Se.prop("iTime"),iMouse:Se.prop("iMouse"),dt:Se.prop("dt"),X_XT:()=>Ar.read,X_YT:()=>Ht.read,V_XT:()=>Sr.read,V_YT:()=>$t.read,MT:()=>wr.read,CT:()=>Rr.read,tar:Se.prop("tar"),texelSize:Yt},viewport:Bn}),Mn=Se({frag:Wt+`
`+rl,framebuffer:Se.prop("framebuffer"),uniforms:{iFrame:Se.prop("iFrame"),iTime:Se.prop("iTime"),iMouse:Se.prop("iMouse"),dt:Se.prop("dt"),X_XT:()=>Ar.read,X_YT:()=>Ht.read,V_XT:()=>Sr.read,V_YT:()=>$t.read,MT:()=>wr.read,CT:()=>Rr.read,tar:Se.prop("tar"),splatCenter:Se.prop("point"),splatM:Se.prop("color"),splatV:Se.prop("vel"),radius:Se.prop("radius"),texelSize:Yt},viewport:Bn});function Da(ae,_e,$,J,se,Ae){let we={point:[ae/window.innerWidth,1-_e/window.innerHeight],radius:Ae,color:se,vel:[$,-J]};Mn({framebuffer:Ar.write,iFrame:ir,iTime:or,iMouse:ar,dt:1,tar:0,...we}),Mn({framebuffer:Sr.write,iFrame:ir,iTime:or,iMouse:ar,dt:1,tar:2,...we}),Mn({framebuffer:wr.write,iFrame:ir,iTime:or,iMouse:ar,dt:1,tar:4,...we}),Mn({framebuffer:Rr.write,iFrame:ir,iTime:or,iMouse:ar,dt:1,tar:5,...we}),Ar.swap(),Sr.swap(),wr.swap(),Rr.swap()}let ir=0,or=0,Ia=!1,Ba=-1,Na=-1,rf=1,ar=[0,0,0,0];const il=Se({frag:Wt+`
`+tl,uniforms:{iFrame:Se.prop("iFrame"),iTime:Se.prop("iTime"),iMouse:Se.prop("iMouse"),dt:Se.prop("dt"),iChannel1:()=>za.read,X_XT:()=>Ar.read,X_YT:()=>Ht.read,V_XT:()=>Sr.read,V_YT:()=>$t.read,MT:()=>wr.read,CT:()=>Rr.read,tar:Se.prop("tar"),texelSize:({viewportWidth:ae,viewportHeight:_e})=>{var $,J;return[1/(window.innerWidth*(($=window.devicePixelRatio)!=null?$:1)/Gr()),1/(window.innerHeight*((J=window.devicePixelRatio)!=null?J:1)/Gr())]},screenTexelSize:Yt}}),ol=()=>il({iFrame:ir,iTime:or,iMouse:ar});let ka=1/8,Va=30,Xa=!1;const fl=ae=>{if(Xa)return;Xa=!0,Ia||(Ba=window.performance.now());let _e=(window.performance.now()-Ba)/1e3;Ia&&_e-Na<1&&(ka*=.9,Va*=.9,ka+=_e-Na,Va+=rf),Ia=!0;let $=0,J=30,se=Math.floor(1/J*(Va/ka));Na=_e;let Ae=1,we=8;se<we||(se=we),se>1||(se=1);let oe=0,be=Math.min(8/Math.max(se,1),Ae);for(;(or=(window.performance.now()-Ba)/1e3)-_e<1/J&&$<se||$<1;)oe+=1,$+=1,On({framebuffer:Ar.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:0}),On({framebuffer:Sr.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:2}),On({framebuffer:wr.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:4}),On({framebuffer:Rr.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:5}),Ar.swap(),Sr.swap(),wr.swap(),Rr.swap(),Gn({framebuffer:Ar.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:0}),Gn({framebuffer:Sr.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:2}),Gn({framebuffer:wr.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:4}),Gn({framebuffer:Rr.write,iFrame:ir,iTime:or,iMouse:ar,dt:be,tar:5}),Ar.swap(),Sr.swap(),wr.swap(),Rr.swap(),ir+=1;al({framebuffer:za.write,iFrame:ir,iTime:or,iMouse:ar,dt:1,tar:2}),za.swap(),rf=oe,Xa=!1};window.addEventListener("mousemove",ae=>{ar[0]=ae.clientX/window.innerWidth,ar[1]=1-ae.clientY/window.innerHeight});let Fe={x:0,y:0,dx:0,dy:0,moved:!1,color:[.5,.66,1]};document.addEventListener("mousemove",ae=>{Fe.moved=!0,Fe.dx=(ae.clientX-Fe.x)*10,Fe.dy=(ae.clientY-Fe.y)*10,Fe.x=ae.clientX,Fe.y=ae.clientY});document.addEventListener("touchmove",ae=>{Fe.moved=!0,Fe.dx=(ae.changedTouches[0].clientX-Fe.x)*10,Fe.dy=(ae.changedTouches[0].clientY-Fe.y)*10,Fe.x=ae.changedTouches[0].clientX,Fe.y=ae.changedTouches[0].clientY});document.addEventListener("touchstart",ae=>{Fe.moved=!0,Fe.dx=(ae.changedTouches[0].clientX-Fe.x)*10,Fe.dy=(ae.changedTouches[0].clientY-Fe.y)*10,Fe.x=ae.changedTouches[0].clientX,Fe.y=ae.changedTouches[0].clientY});document.addEventListener("touchend",ae=>{Fe.moved=!0,Fe.dx=(ae.changedTouches[0].clientX-Fe.x)*10,Fe.dy=(ae.changedTouches[0].clientY-Fe.y)*10,Fe.x=ae.changedTouches[0].clientX,Fe.y=ae.changedTouches[0].clientY});function ja(ae,_e,$){var J,se,Ae;if(_e==0)J=se=Ae=$;else{var we=function(Ke,fr,Ye){return Ye<0&&(Ye+=1),Ye>1&&(Ye-=1),Ye<.16666666666666666?Ke+(fr-Ke)*6*Ye:Ye<.5?fr:Ye<.6666666666666666?Ke+(fr-Ke)*(.6666666666666666-Ye)*6:Ke},oe=$<.5?$*(1+_e):$+_e-$*_e,be=2*$-oe;J=we(be,oe,ae+1/3),se=we(be,oe,ae),Ae=we(be,oe,ae-1/3)}return[J,se,Ae]}document.addEventListener("mousedown",()=>{Fe.color=ja(Math.random(),1,.5)});const sl=ae=>{let _e=[],$=[],J=-1,se=new Date().getTime();window.addEventListener("load",()=>Se.frame(({viewportWidth:Ae,viewportHeight:we})=>{nl(()=>{var Ke,fr,Ye,ze,je,ur,_r,nr,lr,Ge;const oe=ae();Da(Fe.x,Fe.y,Math.min(Math.max(Fe.dx/100/2,-1),1),Math.min(Math.max(Fe.dy/100/2,-1),1),Fe.color,qu);let be=Math.min(Ae/((Ke=window.devicePixelRatio)!=null?Ke:1),we/((fr=window.devicePixelRatio)!=null?fr:1)),Le=oe.length;se<new Date().getTime()&&(J=-1);for(let Ie=0;Ie<Le;Ie+=1){$[Ie]=(Ye=$[Ie])!=null?Ye:0,_e[Ie]=(ze=_e[Ie])!=null?ze:oe[Ie];let Ze=(Ie+.5)/Le*Math.PI-Math.PI/2,xr=oe[Ie];_e[Ie]<0&&oe[Ie]>0&&(J<0?(se=new Date().getTime()+1e3/32,J=Ie,$[Ie]+=.125):$[Ie]=$[J]),_e[Ie]=oe[Ie],xr>0||xr<0||xr===0||(xr=0);let Pr=be/5,Qt=$[Ie]%1;Da(Math.cos(Ze)*Pr+.5*Ae/((je=window.devicePixelRatio)!=null?je:1),Math.sin(Ze)*Pr+.5*we/((ur=window.devicePixelRatio)!=null?ur:1),Math.cos(Ze)*xr,Math.sin(Ze)*xr,ja(Qt,1,.5),Pr/oe.length/Ae*2*((_r=window.devicePixelRatio)!=null?_r:1)),Da(-Math.cos(Ze)*Pr+.5*Ae/((nr=window.devicePixelRatio)!=null?nr:1),Math.sin(Ze)*Pr+.5*we/((lr=window.devicePixelRatio)!=null?lr:1),-Math.cos(Ze)*xr,Math.sin(Ze)*xr,ja(Qt,1,.5),Pr/oe.length/Ae*2*((Ge=window.devicePixelRatio)!=null?Ge:1))}fl(),ol()})}))};var tf,sf;performance.now();var Hr=32;function cf(ae){var _e=ae||1024;this.spectrum=new Uint8Array(_e/2),this.volume=this.vol=0,this.peak_volume=0;var $=this,J=null,se=null;this.getRMS=function(oe){for(var be=0,Le=0;Le<oe.length;Le++)be+=oe[Le]*oe[Le];return be/=oe.length,be=Math.sqrt(be),be};async function Ae(){var oe=document.getElementById("mic-message");try{se=new AudioContext,await we(se),oe&&oe.classList.add("granted")}catch(be){console.error(be),oe&&(oe.classList.add("denied"),be.name==="NotAllowedError"?oe.textContent="Microphone access denied. Please refresh and allow access.":be.name==="NotFoundError"?oe.textContent="No microphone found. Please connect a microphone and refresh.":oe.textContent="Could not access microphone: "+be.message)}}async function we(oe){J=await navigator.mediaDevices.getUserMedia({audio:!0});var be=oe.createAnalyser();be.smoothingTimeConstant=.2,be.fftSize=_e,$.spectrum=new Uint8Array(be.frequencyBinCount);var Le=oe.createScriptProcessor(2048,1,1);Le.onaudioprocess=function(){be.getByteFrequencyData($.spectrum),$.vol=$.getRMS($.spectrum),$.vol>$.peak_volume&&($.peak_volume=$.vol),$.volume=$.vol};var Ke=oe.createMediaStreamSource(J);Ke.connect(be),be.connect(Le),Le.connect(oe.destination)}return this.init=Ae,this.stop=function(){J&&(J.getTracks().forEach(oe=>oe.stop()),J=null),se&&(se.close(),se=null)},this}window.Microphone=cf;var ft,cl=240,Ha=100,Dn=Math.floor(60*1e3/cl/(1e3/60))*Ha;let In=[],At=[];for(var jt=0;jt<Hr;jt++)In.push(0),At.push(0);let st=In.slice();var St=[];for(var jt=0;jt<Dn;jt++){var ul=new Uint8Array(Hr);St.push(ul)}let gr=new Uint8Array(Hr).fill(0);function ll(){ft&&ft.spectrum&&ft.spectrum.length>=Hr&&(gr=new Uint8Array(ft.spectrum.slice(0,Hr)));for(var ae=0;ae<0;ae++)gr=gr.map(($,J)=>{var se=[$];return J<Hr-1&&se.push(gr[J+1]),J>0&&se.push(gr[J-1]),Math.max(...se)});St.unshift(gr.slice()),St.pop(),st=[];for(var ae=0;ae<Hr;ae++){In[ae]=0,At[ae]=0,st[ae]=0;for(var _e=0;_e<Dn;_e++)At[ae]=Math.max(St[_e][ae],At[ae]);In[ae]=St[0][ae]/At[ae]*256;for(var _e=0;_e<Dn/Ha;_e++)st[ae]+=St[_e][ae]/Dn*Ha/At[ae]*256}}function dl(){ft||(ft=new cf(Hr*2),ft.init())}let uf=[0];const ml=()=>uf;dl();vl();lf();function vl(){tf=document.createElement("div"),document.body.appendChild(tf),sf=new Yu,window.addEventListener("resize",pl,!1),hl()}function hl(){sl(ml)}function pl(){}function lf(){requestAnimationFrame(lf),ll(),bl(),sf.update()}function bl(){performance.now();let ae=[...gr].map(($,J)=>[st[J]+gr[J],J]);ae.sort(($,J)=>J[0]-$[0]),ae=ae.map($=>{let J=gr[$[1]],se=st[$[1]];return[Math.max(0,(J-se+1e-4)/(J/2+se/2+1e-4))*256*2,$[1]]}),ae.sort(($,J)=>J[0]-$[0]),uf=ae.slice(0,32).sort(($,J)=>$[1]-J[1]).map($=>[gr[$[1]]-st[$[1]],$[1]]).concat(ae.slice(32).map($=>[gr[$[1]]-st[$[1]],$[1]])).map($=>$[0]/64).slice(0,16)}
