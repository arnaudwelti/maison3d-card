/* maison3d-card — carte Lovelace 3D, three.js (MIT) intégré. Plan et aménagement fournis par plan_url / amenagement_url. */
var e0=Object.defineProperty;var ni=(i,e)=>{for(var t in e)e0(i,t,{get:e[t],enumerable:!0})};var qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ef=0,Gl=1,Tf=2;var ro=1,wf=2,nr=3,Yi=0,Zt=1,Ut=2,fi=0,ir=1,ds=2,Wl=3,Xl=4,Af=5;var ps=100,Rf=101,Cf=102,Pf=103,If=104,Lf=200,Df=201,Nf=202,Uf=203,ql=204,Yl=205,Ff=206,Of=207,Bf=208,zf=209,Hf=210,kf=211,Vf=212,Gf=213,Wf=214,ta=0,na=1,ia=2,ks=3,sa=4,ra=5,oa=6,aa=7,$l=0,Xf=1,qf=2,Zn=0,Zl=1,Jl=2,Kl=3,jl=4,Ql=5,eu=6,oo=7;var tu=300,$i=301,ms=302,Ha=303,ka=304,ao=306,Si=1e3,si=1001,ca=1002,en=1003,Yf=1004;var co=1005;var an=1006,Va=1007;var Zi=1008;var bn=1009,nu=1010,iu=1011,sr=1012,Ga=1013,Jn=1014,Kn=1015,jn=1016,Wa=1017,Xa=1018,rr=1020,su=35902,ru=35899,ou=1021,au=1022,On=1023,ai=1026,Ji=1027,cu=1028,qa=1029,Ki=1030,Ya=1031;var $a=1033,lo=33776,uo=33777,ho=33778,fo=33779,Za=35840,Ja=35841,Ka=35842,ja=35843,Qa=36196,ec=37492,tc=37496,nc=37488,ic=37489,po=37490,sc=37491,rc=37808,oc=37809,ac=37810,cc=37811,lc=37812,uc=37813,hc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,yc=36492,vc=36494,bc=36495,Mc=36283,Sc=36284,mo=36285,Ec=36286;var Ar=2300,la=2301,Qo=2302,Il=2303,Ll=2400,Dl=2401,Nl=2402;var $f=3200;var Tc=0,Zf=1,Ii="",It="srgb",Rr="srgb-linear",Cr="linear",yt="srgb";var ea=7680;var Jf=519,Kf=512,jf=513,Qf=514,wc=515,ed=516,td=517,Ac=518,nd=519,lu=35044;var uu="300 es",Xn=2e3,Vs=2001;function t0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function n0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){let i=Pr("canvas");return i.style.display="block",i}var kh={},Gs=null;function Ir(...i){let e="THREE."+i.shift();Gs?Gs("log",e,...i):console.log(e,...i)}function sd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=sd(i);let e="THREE."+i.shift();if(Gs)Gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=sd(i);let e="THREE."+i.shift();if(Gs)Gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cs(...i){let e=i.join(" ");e in kh||(kh[e]=!0,We(...i))}function rd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var od={[ta]:na,[ia]:oa,[sa]:aa,[ks]:ra,[na]:ta,[oa]:ia,[aa]:sa,[ra]:ks},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,Sr=Math.PI/180,Ws=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function hu(i,e){return(i%e+e)%e}function i0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function s0(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function r0(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function o0(i,e=1){return e-Math.abs(hu(i,e*2)-e)}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function l0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function u0(i,e){return i+Math.random()*(e-i)}function h0(i){return i*(.5-Math.random())}function f0(i){i!==void 0&&(Vh=i);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d0(i){return i*Sr}function p0(i){return i*Ws}function m0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function g0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function x0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*p,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*p,a*l);break;case"ZYZ":i.set(c*p,c*d,a*u,a*l);break;default:We("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fu={DEG2RAD:Sr,RAD2DEG:Ws,generateUUID:oi,clamp:st,euclideanModulo:hu,mapLinear:i0,inverseLerp:s0,lerp:Er,damp:r0,pingpong:o0,smoothstep:a0,smootherstep:c0,randInt:l0,randFloat:u0,randFloatSpread:h0,seededRandom:f0,degToRad:d0,radToDeg:p0,isPowerOfTwo:m0,ceilPowerOfTwo:g0,floorPowerOfTwo:_0,setQuaternionFromProperEuler:x0,normalize:bt,denormalize:Wn},xu=class xu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xu.prototype.isVector2=!0;var te=xu,Rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(h!==_||c!==f||l!==d||u!==p){let m=c*f+l*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);g=Math.sin(g*v)/E,a=Math.sin(a*v)/E,c=c*g+f*a,l=l*g+d*a,u=u*g+p*a,h=h*g+_*a}else{c=c*g+f*a,l=l*g+d*a,u=u*g+p*a,h=h*g+_*a;let v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+c*d-l*f,e[t+1]=c*p+u*f+l*h-a*d,e[t+2]=l*p+u*d+a*f-c*h,e[t+3]=u*p-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h+f*d*p;break;case"YZX":this._x=f*u*h+l*d*p,this._y=l*d*h+f*u*p,this._z=l*u*p-f*d*h,this._w=l*u*h-f*d*p;break;case"XZY":this._x=f*u*h-l*d*p,this._y=l*d*h-f*u*p,this._z=l*u*p+f*d*h,this._w=l*u*h+f*d*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yu=class yu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yu.prototype.isVector3=!0;var L=yu,rl=new L,Gh=new Rn,vu=class vu{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=s[0],m=s[3],g=s[6],v=s[1],E=s[4],x=s[7],M=s[2],S=s[5],A=s[8];return r[0]=o*_+a*v+c*M,r[3]=o*m+a*E+c*S,r[6]=o*g+a*x+c*A,r[1]=l*_+u*v+h*M,r[4]=l*m+u*E+h*S,r[7]=l*g+u*x+h*A,r[2]=f*_+d*v+p*M,r[5]=f*m+d*E+p*S,r[8]=f*g+d*x+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,p=t*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vu.prototype.isMatrix3=!0;var et=vu,ol=new et,Wh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Wh,fromXYZ:Xh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}var dt=y0();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ss,ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ss===void 0&&(Ss=Pr("canvas")),Ss.width=e.width,Ss.height=e.height;let s=Ss.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ss}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},v0=0,Xs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var b0=0,cl=new L,yn=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=si,s=si,r=an,o=Zi,a=On,c=bn,l=i.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=oi(),this.name="",this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=tu;yn.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,x=(d+1)/2,M=(g+1)/2,S=(u+f)/4,A=(h+_)/4,y=(p+m)/4;return E>x&&E>M?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=y/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Ot=bu,ha=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new yn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends ha{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lr=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var za=class za{constructor(e,t,n,s,r,o,a,c,l,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,d,p,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+p*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,p=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=c*u,t[4]=p*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,S0)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Fi.crossVectors(n,Tn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Fi.crossVectors(n,Tn)),Fi.normalize(),Ao.crossVectors(Tn,Fi),s[0]=Fi.x,s[4]=Ao.x,s[8]=Tn.x,s[1]=Fi.y,s[5]=Ao.y,s[9]=Tn.y,s[2]=Fi.z,s[6]=Ao.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],v=n[3],E=n[7],x=n[11],M=n[15],S=s[0],A=s[4],y=s[8],w=s[12],I=s[1],F=s[5],R=s[9],N=s[13],D=s[2],U=s[6],H=s[10],k=s[14],Z=s[3],G=s[7],V=s[11],$=s[15];return r[0]=o*S+a*I+c*D+l*Z,r[4]=o*A+a*F+c*U+l*G,r[8]=o*y+a*R+c*H+l*V,r[12]=o*w+a*N+c*k+l*$,r[1]=u*S+h*I+f*D+d*Z,r[5]=u*A+h*F+f*U+d*G,r[9]=u*y+h*R+f*H+d*V,r[13]=u*w+h*N+f*k+d*$,r[2]=p*S+_*I+m*D+g*Z,r[6]=p*A+_*F+m*U+g*G,r[10]=p*y+_*R+m*H+g*V,r[14]=p*w+_*N+m*k+g*$,r[3]=v*S+E*I+x*D+M*Z,r[7]=v*A+E*F+x*U+M*G,r[11]=v*y+E*R+x*H+M*V,r[15]=v*w+E*N+x*k+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],v=c*d-l*f,E=a*d-l*h,x=a*f-c*h,M=o*d-l*u,S=o*f-c*u,A=o*h-a*u;return t*(_*v-m*E+g*x)-n*(p*v-m*M+g*S)+s*(p*E-_*M+g*A)-r*(p*x-_*S+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],v=t*a-n*o,E=t*c-s*o,x=t*l-r*o,M=n*c-s*a,S=n*l-r*a,A=s*l-r*c,y=u*_-h*p,w=u*m-f*p,I=u*g-d*p,F=h*m-f*_,R=h*g-d*_,N=f*g-d*m,D=v*N-E*R+x*F+M*I-S*w+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/D;return e[0]=(a*N-c*R+l*F)*U,e[1]=(s*R-n*N-r*F)*U,e[2]=(_*A-m*S+g*M)*U,e[3]=(f*S-h*A-d*M)*U,e[4]=(c*I-o*N-l*w)*U,e[5]=(t*N-s*I+r*w)*U,e[6]=(m*x-p*A-g*E)*U,e[7]=(u*A-f*x+d*E)*U,e[8]=(o*R-a*I+l*y)*U,e[9]=(n*I-t*R-r*y)*U,e[10]=(p*S-_*x+g*v)*U,e[11]=(h*x-u*S-d*v)*U,e[12]=(a*w-o*F-c*y)*U,e[13]=(t*F-n*w+s*y)*U,e[14]=(_*E-p*M-m*v)*U,e[15]=(u*M-h*E+f*v)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,p=r*h,_=o*u,m=o*h,g=a*h,v=c*l,E=c*u,x=c*h,M=n.x,S=n.y,A=n.z;return s[0]=(1-(_+g))*M,s[1]=(d+x)*M,s[2]=(p-E)*M,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(f+g))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(p+E)*A,s[9]=(m-v)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Es.set(s[0],s[1],s[2]).length(),a=Es.set(s[4],s[5],s[6]).length(),c=Es.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kn.copy(this);let l=1/o,u=1/a,h=1/c;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Xn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,_;if(c)p=r/(o-r),_=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vs)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Xn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,_;if(c)p=1/(o-r),_=o/(o-r);else if(a===Xn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Vs)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};za.prototype.isMatrix4=!0;var mt=za,Es=new L,kn=new mt,M0=new L(0,0,0),S0=new L(1,1,1),Fi=new L,Ao=new L,Tn=new L,qh=new mt,Yh=new Rn,Ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},E0=0,$h=new L,Ts=new Rn,gi=new mt,Ro=new L,pr=new L,T0=new L,w0=new Rn,Zh=new L(1,0,0),Jh=new L(0,1,0),Kh=new L(0,0,1),jh={type:"added"},A0={type:"removed"},ws={type:"childadded",child:null},ll={type:"childremoved",child:null},tn=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Ei,n=new Rn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new et}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Zh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(pr,Ro,this.up):gi.lookAt(Ro,pr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(gi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jh),ws.child=e,this.dispatchEvent(ws),ws.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,T0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,w0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new L(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rt=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function ul(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=hu(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ul(o,r,e+1/3),this.g=ul(o,r,e),this.b=ul(o,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return dt.workingToColorSpace(dn.copy(this),e),Math.round(st(dn.r*255,0,255))*65536+Math.round(st(dn.g*255,0,255))*256+Math.round(st(dn.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(dn.copy(this),t);let n=dn.r,s=dn.g,r=dn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=It){dt.workingToColorSpace(dn.copy(this),e);let t=dn.r,n=dn.g,s=dn.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(Co);let n=Er(Oi.h,Co.h,t),s=Er(Oi.s,Co.s,t),r=Er(Oi.l,Co.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Oe;Oe.NAMES=ad;var Dr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new L,_i=new L,hl=new L,xi=new L,As=new L,Rs=new L,Qh=new L,fl=new L,dl=new L,pl=new L,ml=new Ot,gl=new Ot,_l=new Ot,bi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),_i.subVectors(n,t),hl.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(_i),c=Vn.dot(hl),l=_i.dot(_i),u=_i.dot(hl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,p=(o*u-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),_i.subVectors(e,t),Vn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Rs.subVectors(r,n),fl.subVectors(e,n);let c=As.dot(fl),l=Rs.dot(fl);if(c<=0&&l<=0)return t.copy(n);dl.subVectors(e,s);let u=As.dot(dl),h=Rs.dot(dl);if(u>=0&&h<=u)return t.copy(s);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(As,o);pl.subVectors(e,r);let d=As.dot(pl),p=Rs.dot(pl);if(p>=0&&d<=p)return t.copy(r);let _=d*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Rs,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Qh.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Qh,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mr),Io.subVectors(this.max,mr),Cs.subVectors(e.a,mr),Ps.subVectors(e.b,mr),Is.subVectors(e.c,mr),Bi.subVectors(Ps,Cs),zi.subVectors(Is,Ps),ss.subVectors(Cs,Is);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-ss.z,ss.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,ss.z,0,-ss.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-ss.y,ss.x,0];return!xl(t,Cs,Ps,Is,Io)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Cs,Ps,Is,Io))?!1:(Lo.crossVectors(Bi,zi),t=[Lo.x,Lo.y,Lo.z],xl(t,Cs,Ps,Is,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new L,new L,new L,new L,new L,new L,new L,new L],Gn=new L,Po=new Xt,Cs=new L,Ps=new L,Is=new L,Bi=new L,zi=new L,ss=new L,mr=new L,Io=new L,Lo=new L,rs=new L;function xl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=e.dot(rs),l=t.dot(rs),u=n.dot(rs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Yt=new L,Do=new te,C0=0,kt=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Nr=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},P0=new Xt,gr=new L,yl=new L,ls=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):P0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gr.subVectors(e,this.center);let t=gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gr.copy(e.center).add(yl)),this.expandByPoint(gr.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},I0=0,Fn=new mt,vl=new tn,Ls=new L,wn=new Xt,_r=new Xt,Qt=new L,Nt=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(wn.min,_r.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,_r.max),wn.expandByPoint(Qt)):(wn.expandByPoint(_r.min),wn.expandByPoint(_r.max))}wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Qt.fromBufferAttribute(a,l),c&&(Ls.fromBufferAttribute(e,l),Qt.add(Ls)),s=Math.max(s,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new L,c[y]=new L;let l=new L,u=new L,h=new L,f=new te,d=new te,p=new te,_=new L,m=new L;function g(y,w,I){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,I),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,I),u.sub(l),h.sub(l),d.sub(f),p.sub(f);let F=1/(d.x*p.y-p.x*d.y);isFinite(F)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(F),a[y].add(_),a[w].add(_),a[I].add(_),c[y].add(m),c[w].add(m),c[I].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let y=0,w=v.length;y<w;++y){let I=v[y],F=I.start,R=I.count;for(let N=F,D=F+R;N<D;N+=3)g(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let E=new L,x=new L,M=new L,S=new L;function A(y){M.fromBufferAttribute(s,y),S.copy(M);let w=a[y];E.copy(w),E.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(S,w);let F=x.dot(c[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,F)}for(let y=0,w=v.length;y<w;++y){let I=v[y],F=I.start,R=I.count;for(let N=F,D=F+R;N<D;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let g=0;g<u;g++)f[p++]=l[d++]}return new kt(f,u,h)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lu,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},xn=new L,$s=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},bl=new L,L0=new L,D0=new et,An=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bl.subVectors(n,t).cross(L0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||D0.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},N0=0,ci=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=ir,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zs=class extends ci{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ds,xr=new L,Ns=new L,Us=new L,Fs=new te,yr=new te,cd=new mt,No=new L,vr=new L,Uo=new L,ef=new te,Ml=new te,tf=new te,us=class extends tn{constructor(e=new Zs){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fr(t,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new $s(n,3,0,!1)),Ds.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=Ds,this.material=e,this.center=new te(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),cd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fo(No.set(-.5,-.5,0),Us,o,Ns,s,r),Fo(vr.set(.5,-.5,0),Us,o,Ns,s,r),Fo(Uo.set(.5,.5,0),Us,o,Ns,s,r),ef.set(0,0),Ml.set(1,0),tf.set(1,1);let a=e.ray.intersectTriangle(No,vr,Uo,!1,xr);if(a===null&&(Fo(vr.set(-.5,.5,0),Us,o,Ns,s,r),Ml.set(0,1),a=e.ray.intersectTriangle(No,Uo,vr,!1,xr),a===null))return;let c=e.ray.origin.distanceTo(xr);c<e.near||c>e.far||t.push({distance:c,point:xr.clone(),uv:bi.getInterpolation(xr,No,vr,Uo,ef,Ml,tf,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fo(i,e,t,n,s,r){Fs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(yr.x=r*Fs.x-s*Fs.y,yr.y=s*Fs.x+r*Fs.y):yr.copy(Fs),i.copy(e),i.x+=yr.x,i.y+=yr.y,i.applyMatrix4(cd)}var vi=new L,Sl=new L,Oo=new L,Bo=new L,ki=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sl.copy(e).add(t).multiplyScalar(.5),Oo.copy(t).sub(e).normalize(),Bo.copy(this.origin).sub(Sl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Oo),a=Bo.dot(this.direction),c=-Bo.dot(Oo),l=Bo.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*c-a,f=o*a-c,p=r*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=p?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sl).addScaledVector(Oo,f),d}intersectSphere(e,t){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,E=n.z-o.z,x=Math.abs(c),M=Math.abs(l),S=Math.abs(u),A,y,w,I,F,R,N,D,U,H,k,Z;if(x>=M&&x>=S?(w=c,R=h,U=p,Z=g,c>=0?(A=l,y=u,I=f,F=d,N=_,D=m,H=v,k=E):(A=u,y=l,I=d,F=f,N=m,D=_,H=E,k=v)):M>=S?(w=l,R=f,U=_,Z=v,l>=0?(A=u,y=c,I=d,F=h,N=m,D=p,H=E,k=g):(A=c,y=u,I=h,F=d,N=p,D=m,H=g,k=E)):(w=u,R=d,U=m,Z=E,u>=0?(A=c,y=l,I=h,F=f,N=p,D=_,H=g,k=v):(A=l,y=c,I=f,F=h,N=_,D=p,H=v,k=g)),w===0)return null;let G=A/w,V=y/w,$=1/w,he=I-G*R,de=F-V*R,lt=N-G*U,Qe=D-V*U,ut=H-G*Z,j=k-V*Z,ie=ut*Qe-j*lt,Ee=he*j-de*ut,Je=lt*de-Qe*he;if(s){if(ie<0||Ee<0||Je<0)return null}else if((ie<0||Ee<0||Je<0)&&(ie>0||Ee>0||Je>0))return null;let Ce=ie+Ee+Je;if(Ce===0)return null;let Ke=$*(ie*R+Ee*U+Je*Z);return(Ce>0?Ke<0:Ke>0)?null:this.at(Ke/Ce,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nf=new mt,os=new ki,zo=new ls,sf=new L,Ho=new L,ko=new L,Vo=new L,El=new L,Go=new L,rf=new L,Wo=new L,Le=class extends tn{constructor(e=new Nt,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(El.fromBufferAttribute(h,e),o?Go.addScaledVector(El,u):Go.addScaledVector(El.sub(t),u))}t.add(Go)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(r),os.copy(e.ray).recast(e.near),!(zo.containsPoint(os.origin)===!1&&(os.intersectSphere(zo,sf)===null||os.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(nf.copy(r).invert(),os.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,M=E;x<M;x+=3){let S=a.getX(x),A=a.getX(x+1),y=a.getX(x+2);s=Xo(this,g,e,n,l,u,h,S,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Xo(this,o,e,n,l,u,h,v,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,M=E;x<M;x+=3){let S=x,A=x+1,y=x+2;s=Xo(this,g,e,n,l,u,h,S,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=m,E=m+1,x=m+2;s=Xo(this,o,e,n,l,u,h,v,E,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function U0(i,e,t,n,s,r,o,a){let c;if(e.side===Zt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Yi,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Wo);return l<t.near||l>t.far?null:{distance:l,point:Wo.clone(),object:i}}function Xo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ho),i.getVertexPosition(c,ko),i.getVertexPosition(l,Vo);let u=U0(i,e,t,n,Ho,ko,Vo,rf);if(u){let h=new L;bi.getBarycoord(rf,Ho,ko,Vo,h),s&&(u.uv=bi.getInterpolatedAttribute(s,a,c,l,h,new te)),r&&(u.uv1=bi.getInterpolatedAttribute(r,a,c,l,h,new te)),o&&(u.normal=bi.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};bi.getNormal(Ho,ko,Vo,f.normal),u.face=f,u.barycoord=h}return u}var da=class extends yn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=en,u=en,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=new ls,F0=new te(.5,.5),qo=new L,Js=class{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,o=new An){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],v=r[12],E=r[13],x=r[14],M=r[15];if(s[0].setComponents(l-o,d-u,g-p,M-v).normalize(),s[1].setComponents(l+o,d+u,g+p,M+v).normalize(),s[2].setComponents(l+a,d+h,g+_,M+E).normalize(),s[3].setComponents(l-a,d-h,g-_,M-E).normalize(),n)s[4].setComponents(c,f,m,x).normalize(),s[5].setComponents(l-c,d-f,g-m,M-x).normalize();else if(s[4].setComponents(l-c,d-f,g-m,M-x).normalize(),t===Xn)s[5].setComponents(l+c,d+f,g+m,M+x).normalize();else if(t===Vs)s[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=F0.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pa=new L,ma=new L,of=new mt,br=new ki,Yo=new ls,Tl=new L,af=new L,ga=class extends tn{constructor(e=new Nt,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)pa.fromBufferAttribute(t,s-1),ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=pa.distanceTo(ma);e.setAttribute("lineDistance",new nt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;of.copy(s).invert(),br.copy(e.ray).applyMatrix4(of);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=l){let g=u.getX(_),v=u.getX(_+1),E=$o(this,e,br,c,g,v,_);E&&t.push(E)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=$o(this,e,br,c,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=l){let g=$o(this,e,br,c,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=$o(this,e,br,c,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $o(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(pa.fromBufferAttribute(a,s),ma.fromBufferAttribute(a,r),t.distanceSqToSegment(pa,ma,Tl,af)>n)return;Tl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Tl);if(!(l<e.near||l>e.far))return{distance:l,point:af.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var cf=new L,lf=new L,Or=class extends ga{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)cf.fromBufferAttribute(t,s),lf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cf.distanceTo(lf);e.setAttribute("lineDistance",new nt(n,1))}else We("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Br=class extends yn{constructor(e=[],t=$i,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},li=class extends yn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends yn{constructor(e,t,n=Jn,s,r,o,a=en,c=en,l,u=ai,h=1){if(u!==ai&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_a=class extends Vi{constructor(e,t=Jn,n=$i,s,r,o=en,a=en,c,l=ai){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zr=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mt=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function p(_,m,g,v,E,x,M,S,A,y,w){let I=x/A,F=M/y,R=x/2,N=M/2,D=S/2,U=A+1,H=y+1,k=0,Z=0,G=new L;for(let V=0;V<H;V++){let $=V*F-N;for(let he=0;he<U;he++){let de=he*I-R;G[_]=de*v,G[m]=$*E,G[g]=D,l.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[g]=S>0?1:-1,u.push(G.x,G.y,G.z),h.push(he/A),h.push(1-V/y),k+=1}}for(let V=0;V<y;V++)for(let $=0;$<A;$++){let he=f+$+U*V,de=f+$+U*(V+1),lt=f+($+1)+U*(V+1),Qe=f+($+1)+U*V;c.push(he,de,Qe),c.push(de,lt,Qe),Z+=6}a.addGroup(d,Z,w),d+=Z,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Hr=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,u=new te;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ui=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,_=[],m=n/2,g=0;v(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function v(){let x=new L,M=new L,S=0,A=(t-e)/n;for(let y=0;y<=r;y++){let w=[],I=y/r,F=I*(t-e)+e;for(let R=0;R<=s;R++){let N=R/s,D=N*c+a,U=Math.sin(D),H=Math.cos(D);M.x=F*U,M.y=-I*n+m,M.z=F*H,h.push(M.x,M.y,M.z),x.set(U,A,H).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-I),w.push(p++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let I=_[w][y],F=_[w+1][y],R=_[w+1][y+1],N=_[w][y+1];(e>0||w!==0)&&(u.push(I,F,N),S+=3),(t>0||w!==r-1)&&(u.push(F,R,N),S+=3)}l.addGroup(g,S,0),g+=S}function E(x){let M=p,S=new te,A=new L,y=0,w=x===!0?e:t,I=x===!0?1:-1;for(let R=1;R<=s;R++)h.push(0,m*I,0),f.push(0,I,0),d.push(.5,.5),p++;let F=p;for(let R=0;R<=s;R++){let D=R/s*c+a,U=Math.cos(D),H=Math.sin(D);A.x=w*H,A.y=m*I,A.z=w*U,h.push(A.x,A.y,A.z),f.push(0,I,0),S.x=U*.5+.5,S.y=H*.5*I+.5,d.push(S.x,S.y),p++}for(let R=0;R<s;R++){let N=M+R,D=F+R;x===!0?u.push(D,D+1,N):u.push(D+1,D,N),y+=3}l.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kr=class i extends ui{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xa=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let E=new L,x=new L,M=new L;for(let S=0;S<t.length;S+=3)d(t[S+0],E),d(t[S+1],x),d(t[S+2],M),c(E,x,M,v)}function c(v,E,x,M){let S=M+1,A=[];for(let y=0;y<=S;y++){A[y]=[];let w=v.clone().lerp(x,y/S),I=E.clone().lerp(x,y/S),F=S-y;for(let R=0;R<=F;R++)R===0&&y===S?A[y][R]=w:A[y][R]=w.clone().lerp(I,R/F)}for(let y=0;y<S;y++)for(let w=0;w<2*(S-y)-1;w++){let I=Math.floor(w/2);w%2===0?(f(A[y][I+1]),f(A[y+1][I]),f(A[y][I])):(f(A[y][I+1]),f(A[y+1][I+1]),f(A[y+1][I]))}}function l(v){let E=new L;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(v),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function u(){let v=new L;for(let E=0;E<r.length;E+=3){v.x=r[E+0],v.y=r[E+1],v.z=r[E+2];let x=m(v)/2/Math.PI+.5,M=g(v)/Math.PI+.5;o.push(x,1-M)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){let E=o[v+0],x=o[v+2],M=o[v+4],S=Math.max(E,x,M),A=Math.min(E,x,M);S>.9&&A<.1&&(E<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,E){let x=v*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function p(){let v=new L,E=new L,x=new L,M=new L,S=new te,A=new te,y=new te;for(let w=0,I=0;w<r.length;w+=9,I+=6){v.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),S.set(o[I+0],o[I+1]),A.set(o[I+2],o[I+3]),y.set(o[I+4],o[I+5]),M.copy(v).add(E).add(x).divideScalar(3);let F=m(M);_(S,I+0,v,F),_(A,I+2,E,F),_(y,I+4,x,F)}}function _(v,E,x,M){M<0&&v.x===1&&(o[E]=v.x-1),x.x===0&&x.z===0&&(o[E]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new te:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new mt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(st(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(st(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},js=class extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ya=class extends js{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function du(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var uf=new L,hf=new L,wl=new du,Al=new du,Rl=new du,hi=class extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(hf.subVectors(s[0],s[1]).add(s[0]),l=hf);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(uf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uf),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),wl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,p,_,m),Al.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,p,_,m),Rl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Al.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Rl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(wl.calc(c),Al.calc(c),Rl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ff(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function O0(i,e){let t=1-i;return t*t*e}function B0(i,e){return 2*(1-i)*i*e}function z0(i,e){return i*i*e}function Tr(i,e,t,n){return O0(i,e)+B0(i,t)+z0(i,n)}function H0(i,e){let t=1-i;return t*t*t*e}function k0(i,e){let t=1-i;return 3*t*t*i*e}function V0(i,e){return 3*(1-i)*i*i*e}function G0(i,e){return i*i*i*e}function wr(i,e,t,n,s){return H0(i,e)+k0(i,t)+V0(i,n)+G0(i,s)}var Vr=class extends Pn{constructor(e=new te,t=new te,n=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends Pn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y),wr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends Pn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends Pn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends Pn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y),Tr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(ff(a,c.x,l.x,u.x,h.x),ff(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new te().fromArray(s))}return this}},Ma=Object.freeze({__proto__:null,ArcCurve:ya,CatmullRomCurve3:hi,CubicBezierCurve:Vr,CubicBezierCurve3:va,EllipseCurve:js,LineCurve:Gr,LineCurve3:ba,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:Xr,SplineCurve:qr}),Sa=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ma[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ma[s.type]().fromJSON(s))}return this}},Ti=class extends Sa{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wr(this.currentPoint.clone(),new te(e,t),new te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Vr(this.currentPoint.clone(),new te(e,t),new te(n,s),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new js(e,t,n,s,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},pn=class extends Ti{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ti().fromJSON(s))}return this}};function W0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ld(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Z0(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let u=a,h=c;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<c&&(c=p),d>u&&(u=d),p>h&&(h=p)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Yr(r,o,t,a,c,l,0),o}function ld(i,e,t,n,s){let r;if(s===om(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=df(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=df(o/n|0,i[o],i[o+1],r);return r&&Qs(r,r.next)&&(Zr(r),r=r.next),r}function hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qs(t,t.next)||Ht(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&em(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?q0(i,n,s,r):X0(i)){e.push(c.i,i.i,l.i),Zr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Y0(hs(i),e),Yr(i,e,t,n,s,r,2)):o===2&&$0(i,e,t,n,s,r):Yr(hs(i),e,t,n,s,r,1);break}}}function X0(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(s,r,o),h=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Mr(s,a,r,c,o,l,p.x,p.y)&&Ht(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function q0(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,c,l),p=Math.min(u,h,f),_=Math.max(a,c,l),m=Math.max(u,h,f),g=Ul(d,p,e,t,n),v=Ul(_,m,e,t,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=g&&x&&x.z<=v;){if(E.x>=d&&E.x<=_&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Mr(a,u,c,h,l,f,E.x,E.y)&&Ht(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Mr(a,u,c,h,l,f,x.x,x.y)&&Ht(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=_&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&Mr(a,u,c,h,l,f,E.x,E.y)&&Ht(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Mr(a,u,c,h,l,f,x.x,x.y)&&Ht(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Y0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Qs(n,s)&&hd(n,t,t.next,s)&&$r(n,s)&&$r(s,n)&&(e.push(n.i,t.i,s.i),Zr(t),Zr(t.next),t=i=s),t=t.next}while(t!==i);return hs(t)}function $0(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&im(o,a)){let c=fd(o,a);o=hs(o,o.next),c=hs(c,c.next),Yr(o,e,t,n,s,r,0),Yr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Z0(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=ld(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(nm(l))}s.sort(J0);for(let r=0;r<s.length;r++)t=K0(s[r],t);return t}function J0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function K0(i,e){let t=j0(i,e);if(!t)return e;let n=fd(t,i);return hs(n,n.next),hs(t,t.next)}function j0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Qs(i,t))return t;do{if(Qs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ud(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);$r(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Q0(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Q0(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function em(i,e,t,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tm(s)}function tm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ul(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function nm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ud(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&ud(i,e,t,n,s,r,o,a)}function im(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sm(i,e)&&($r(i,e)&&$r(e,i)&&rm(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Qs(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qs(i,e){return i.x===e.x&&i.y===e.y}function hd(i,e,t,n){let s=Jo(Ht(i,e,t)),r=Jo(Ht(i,e,n)),o=Jo(Ht(t,n,i)),a=Jo(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&Zo(i,t,e)||r===0&&Zo(i,n,e)||o===0&&Zo(t,i,n)||a===0&&Zo(t,e,n))}function Zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jo(i){return i>0?1:i<0?-1:0}function sm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function rm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fd(i,e){let t=Fl(i.i,i.x,i.y),n=Fl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function df(i,e,t,n){let s=Fl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function om(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ol=class{static triangulate(e,t,n=2){return W0(e,t,n)}},ri=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pf(e),mf(n,e);let o=e.length;t.forEach(pf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,mf(n,t[c]);let a=Ol.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function pf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var wi=class i extends Nt{constructor(e=new pn([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:am,E,x=!1,M,S,A,y;if(g){E=g.getSpacedPoints(u),x=!0,f=!1;let se=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,se),S=new L,A=new L,y=new L}f||(m=0,d=0,p=0,_=0);let w=a.extractPoints(l),I=w.shape,F=w.holes;if(!ri.isClockWise(I)){I=I.reverse();for(let se=0,ae=F.length;se<ae;se++){let ce=F[se];ri.isClockWise(ce)&&(F[se]=ce.reverse())}}function N(se){let ce=10000000000000001e-36,le=se[0];for(let ge=1;ge<=se.length;ge++){let Xe=ge%se.length,Ge=se[Xe],je=Ge.x-le.x,tt=Ge.y-le.y,O=je*je+tt*tt,gt=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(le.x),Math.abs(le.y)),ht=ce*gt*gt;if(O<=ht){se.splice(Xe,1),ge--;continue}le=Ge}}N(I),F.forEach(N);let D=F.length,U=I;for(let se=0;se<D;se++){let ae=F[se];I=I.concat(ae)}function H(se,ae,ce){return ae||Ye("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ae,ce)}let k=I.length;function Z(se,ae,ce){let le,ge,Xe,Ge=se.x-ae.x,je=se.y-ae.y,tt=ce.x-se.x,O=ce.y-se.y,gt=Ge*Ge+je*je,ht=Ge*O-je*tt;if(Math.abs(ht)>Number.EPSILON){let P=Math.sqrt(gt),b=Math.sqrt(tt*tt+O*O),W=ae.x-je/P,Y=ae.y+Ge/P,K=ce.x-O/b,ue=ce.y+tt/b,me=((K-W)*O-(ue-Y)*tt)/(Ge*O-je*tt);le=W+Ge*me-se.x,ge=Y+je*me-se.y;let Q=le*le+ge*ge;if(Q<=2)return new te(le,ge);Xe=Math.sqrt(Q/2)}else{let P=!1;Ge>Number.EPSILON?tt>Number.EPSILON&&(P=!0):Ge<-Number.EPSILON?tt<-Number.EPSILON&&(P=!0):Math.sign(je)===Math.sign(O)&&(P=!0),P?(le=-je,ge=Ge,Xe=Math.sqrt(gt)):(le=Ge,ge=je,Xe=Math.sqrt(gt/2))}return new te(le/Xe,ge/Xe)}let G=[];for(let se=0,ae=U.length,ce=ae-1,le=se+1;se<ae;se++,ce++,le++)ce===ae&&(ce=0),le===ae&&(le=0),G[se]=Z(U[se],U[ce],U[le]);let V=[],$,he=G.concat();for(let se=0,ae=D;se<ae;se++){let ce=F[se];$=[];for(let le=0,ge=ce.length,Xe=ge-1,Ge=le+1;le<ge;le++,Xe++,Ge++)Xe===ge&&(Xe=0),Ge===ge&&(Ge=0),$[le]=Z(ce[le],ce[Xe],ce[Ge]);V.push($),he=he.concat($)}let de;if(m===0)de=ri.triangulateShape(U,F);else{let se=[],ae=[];for(let ce=0;ce<m;ce++){let le=ce/m,ge=d*Math.cos(le*Math.PI/2),Xe=p*Math.sin(le*Math.PI/2)+_;for(let Ge=0,je=U.length;Ge<je;Ge++){let tt=H(U[Ge],G[Ge],Xe);Ee(tt.x,tt.y,-ge),le===0&&se.push(tt)}for(let Ge=0,je=D;Ge<je;Ge++){let tt=F[Ge];$=V[Ge];let O=[];for(let gt=0,ht=tt.length;gt<ht;gt++){let P=H(tt[gt],$[gt],Xe);Ee(P.x,P.y,-ge),le===0&&O.push(P)}le===0&&ae.push(O)}}de=ri.triangulateShape(se,ae)}let lt=de.length,Qe=p+_;for(let se=0;se<k;se++){let ae=f?H(I[se],he[se],Qe):I[se];x?(A.copy(M.normals[0]).multiplyScalar(ae.x),S.copy(M.binormals[0]).multiplyScalar(ae.y),y.copy(E[0]).add(A).add(S),Ee(y.x,y.y,y.z)):Ee(ae.x,ae.y,0)}for(let se=1;se<=u;se++)for(let ae=0;ae<k;ae++){let ce=f?H(I[ae],he[ae],Qe):I[ae];x?(A.copy(M.normals[se]).multiplyScalar(ce.x),S.copy(M.binormals[se]).multiplyScalar(ce.y),y.copy(E[se]).add(A).add(S),Ee(y.x,y.y,y.z)):Ee(ce.x,ce.y,h/u*se)}for(let se=m-1;se>=0;se--){let ae=se/m,ce=d*Math.cos(ae*Math.PI/2),le=p*Math.sin(ae*Math.PI/2)+_;for(let ge=0,Xe=U.length;ge<Xe;ge++){let Ge=H(U[ge],G[ge],le);Ee(Ge.x,Ge.y,h+ce)}for(let ge=0,Xe=F.length;ge<Xe;ge++){let Ge=F[ge];$=V[ge];for(let je=0,tt=Ge.length;je<tt;je++){let O=H(Ge[je],$[je],le);x?Ee(O.x,O.y+E[u-1].y,E[u-1].x+ce):Ee(O.x,O.y,h+ce)}}}ut(),j();function ut(){let se=s.length/3;if(f){let ae=0,ce=k*ae;for(let le=0;le<lt;le++){let ge=de[le];Je(ge[2]+ce,ge[1]+ce,ge[0]+ce)}ae=u+m*2,ce=k*ae;for(let le=0;le<lt;le++){let ge=de[le];Je(ge[0]+ce,ge[1]+ce,ge[2]+ce)}}else{for(let ae=0;ae<lt;ae++){let ce=de[ae];Je(ce[2],ce[1],ce[0])}for(let ae=0;ae<lt;ae++){let ce=de[ae];Je(ce[0]+k*u,ce[1]+k*u,ce[2]+k*u)}}n.addGroup(se,s.length/3-se,0)}function j(){let se=s.length/3,ae=0;ie(U,ae),ae+=U.length;for(let ce=0,le=F.length;ce<le;ce++){let ge=F[ce];ie(ge,ae),ae+=ge.length}n.addGroup(se,s.length/3-se,1)}function ie(se,ae){let ce=se.length;for(;--ce>=0;){let le=ce,ge=ce-1;ge<0&&(ge=se.length-1);for(let Xe=0,Ge=u+m*2;Xe<Ge;Xe++){let je=k*Xe,tt=k*(Xe+1),O=ae+le+je,gt=ae+ge+je,ht=ae+ge+tt,P=ae+le+tt;Ce(O,gt,ht,P)}}}function Ee(se,ae,ce){c.push(se),c.push(ae),c.push(ce)}function Je(se,ae,ce){Ke(se),Ke(ae),Ke(ce);let le=s.length/3,ge=v.generateTopUV(n,s,le-3,le-2,le-1);vt(ge[0]),vt(ge[1]),vt(ge[2])}function Ce(se,ae,ce,le){Ke(se),Ke(ae),Ke(le),Ke(ae),Ke(ce),Ke(le);let ge=s.length/3,Xe=v.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);vt(Xe[0]),vt(Xe[1]),vt(Xe[3]),vt(Xe[1]),vt(Xe[2]),vt(Xe[3])}function Ke(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function vt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return cm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ma[s.type]().fromJSON(s)),new i(n,e.options)}},am={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new te(r,o),new te(a,c),new te(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new te(o,1-c),new te(l,1-h),new te(f,1-p),new te(_,1-g)]:[new te(a,1-c),new te(u,1-h),new te(d,1-p),new te(m,1-g)]}};function cm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jr=class i extends xa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Kr=class i extends Nt{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new L,f=new te,d=new L,p=new L,_=new L,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-m,d.z=g*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){let E=n+v*u*s,x=Math.sin(E),M=Math.cos(E);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*x,h.y=e[S].y,h.z=e[S].x*M,o.push(h.x,h.y,h.z),f.x=v/t,f.y=S/(e.length-1),a.push(f.x,f.y);let A=c[3*S+0]*x,y=c[3*S+1],w=c[3*S+0]*M;l.push(A,y,w)}}for(let v=0;v<t;v++)for(let E=0;E<e.length-1;E++){let x=E+v*e.length,M=x,S=x+e.length,A=x+e.length+1,y=x+1;r.push(M,S,y),r.push(A,y,S)}this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("uv",new nt(a,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var nn=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let v=g*f-o;for(let E=0;E<l;E++){let x=E*h-r;p.push(x,-v,0),_.push(0,0,1),m.push(E/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<a;v++){let E=v+l*g,x=v+l*(g+1),M=v+1+l*(g+1),S=v+1+l*g;d.push(E,x,S),d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yn=class i extends Nt{constructor(e=new pn([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(o,2));function l(u){let h=s.length/3,f=u.extractPoints(t),d=f.shape,p=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];ri.isClockWise(v)===!0&&(p[m]=v.reverse())}let _=ri.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=_.length;m<g;m++){let v=_[m],E=v[0]+h,x=v[1]+h,M=v[2]+h;n.push(E,x,M),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return lm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function lm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ai=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new L,f=new L,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let v=[],E=g/n,x=o+E*a,M=e*Math.cos(x),S=Math.sqrt(e*e-M*M),A=0;g===0&&o===0?A=.5/t:g===n&&c===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let w=y/t,I=s+w*r;h.x=-S*Math.cos(I),h.y=M,h.z=S*Math.sin(I),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+A,1-E),v.push(l++)}u.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let E=u[g][v+1],x=u[g][v],M=u[g+1][v],S=u[g+1][v+1];(g!==0||o>0)&&d.push(E,x,S),(g!==n-1||c<Math.PI)&&d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new nt(p,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ri=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],h=[],f=new L,d=new L,p=new L;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let v=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),l.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(g/s),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,x=(s+1)*_+m;c.push(g,v,x),c.push(v,E,x)}this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ci=class i extends Nt{constructor(e=new Xr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new te,u=new L,h=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function _(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),v(),g()}function m(E){u=e.getPointAt(E/t,u);let x=o.normals[E],M=o.binormals[E];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,y=Math.sin(A),w=-Math.cos(A);c.x=w*x.x+y*M.x,c.y=w*x.y+y*M.y,c.z=w*x.z+y*M.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){let M=(s+1)*(E-1)+(x-1),S=(s+1)*E+(x-1),A=(s+1)*E+x,y=(s+1)*(E-1)+x;p.push(M,S,y),p.push(S,A,y)}}function v(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)l.x=E/t,l.y=x/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ma[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function gs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gf(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gf(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=gs(i[t]);for(let s in n)e[s]=n[s]}return e}function gf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function um(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var dd={clone:gs,merge:mn},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vt=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ta=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wa=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Os(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Cl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Aa=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,a=2*t-n;break;case Nl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dl:o=e,c=2*n-t;break;case Nl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,E=(-1-d)*m+(1.5+d)*_+.5*p,x=d*m-d*_;for(let M=0;M!==a;++M)r[M]=g*o[u+M]+v*o[l+M]+E*o[c+M]+x*o[h+M];return r}},Ra=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Ca=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pa=class extends Gi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*_+o[c+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[l+p],m=o[c+p],g=d*f+p*2,v=h[g],E=h[g+1],x=e*f+p*2,M=u[x],S=u[x+1],A=pm(n,t,v,M,s);r[p]=pd(A,_,E,S,m)}return r}};function pd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function dm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function pm(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=pd(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=dm(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Cl(e.settings)&&(n.settings={inTangents:Os(e.settings.inTangents,Array),outTangents:Os(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case Qo:t=this.InterpolantFactoryMethodSmooth;break;case Il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Cl(this.settings)&&(_f(this.settings.inTangents,e),_f(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ye("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&n0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _f(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=la;var Wi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Ar;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Ia.prototype.ValueTypeName="color";var La=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};La.prototype.ValueTypeName="number";var Da=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let u=l+a;l!==u;l+=4)Rn.slerpFlat(r,0,o,l-a,o,l,c);return r}},jr=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Ln{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Ar;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Ln{constructor(e,t,n,s){super(e,t,n,s)}};Na.prototype.ValueTypeName="vector";var Ua=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],p=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},md=new Ua,Fa=class{constructor(e){this.manager=e!==void 0?e:md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qr=class extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pl=new mt,xf=new L,yf=new L,eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Pl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Vs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ko=new L,jo=new Rn,ii=new L,to=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ko,jo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,jo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ko,jo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,jo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new L,vf=new te,bf=new te,on=class extends to{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,vf,bf),t.subVectors(bf,vf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Bl=class extends eo{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}},no=class extends er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},tr=class extends to{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zl=class extends eo{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bs=-90,zs=1,Oa=class extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Bs,zs,e,t);s.layers=this.layers,this.add(s);let r=new on(Bs,zs,e,t);r.layers=this.layers,this.add(r);let o=new on(Bs,zs,e,t);o.layers=this.layers,this.add(o);let a=new on(Bs,zs,e,t);a.layers=this.layers,this.add(a);let c=new on(Bs,zs,e,t);c.layers=this.layers,this.add(c);let l=new on(Bs,zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ba=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mu="\\[\\]\\.:\\/",mm=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",gm="[^"+mu.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",gu),xm=/(WCOD+)?/.source.replace("WCOD",gm),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),vm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),bm=new RegExp("^"+_m+xm+ym+vm+"$"),Mm=["material","materials","bones","map"],Hl=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=Hl;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HM=new Float32Array(1);var Mf=new mt,fs=class{constructor(e,t,n=0,s=1/0){this.ray=new ki(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(e,t=!0,n=[]){return kl(e,this,n,t),n.sort(Sf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)kl(e[s],this,n,t);return n.sort(Sf),n}};function Sf(i,e){return i.distance-e.distance}function kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)kl(r[o],e,t,!0)}}var Pi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=st(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(st(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Mu=class Mu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Mu.prototype.isMatrix2=!0;var Vl=Mu;var so=class extends qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function _u(i,e,t,n){let s=Sm(n);switch(t){case ou:return i*e;case cu:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case Ki:return i*e*2/s.components*s.byteLength;case Ya:return i*e*2/s.components*s.byteLength;case au:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case lo:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:case ja:return Math.max(i,16)*Math.max(e,8)/4;case Za:case Ka:return Math.max(i,8)*Math.max(e,8)/2;case Qa:case ec:case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tc:case po:case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yc:case vc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mo:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(i){switch(i){case bn:case nu:return{byteLength:1,components:1};case sr:case iu:case jn:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Jn:case Ga:case Kn:return{byteLength:4,components:1};case su:case ru:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Od(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cm(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,o_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Z_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,K_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:Pm,alphahash_pars_fragment:Im,alphamap_fragment:Lm,alphamap_pars_fragment:Dm,alphatest_fragment:Nm,alphatest_pars_fragment:Um,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:Bm,batching_vertex:zm,begin_vertex:Hm,beginnormal_vertex:km,bsdfs:Vm,iridescence_fragment:Gm,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:$m,color_fragment:Zm,color_pars_fragment:Jm,color_pars_vertex:Km,color_vertex:jm,common:Qm,cube_uv_reflection_fragment:eg,defaultnormal_vertex:tg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:sg,emissivemap_pars_fragment:rg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:cg,envmap_common_pars_fragment:lg,envmap_pars_fragment:ug,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Mg,envmap_vertex:fg,fog_vertex:dg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:xg,lights_lambert_fragment:yg,lights_lambert_pars_fragment:vg,lights_pars_begin:bg,lights_toon_fragment:Sg,lights_toon_pars_fragment:Eg,lights_phong_fragment:Tg,lights_phong_pars_fragment:wg,lights_physical_fragment:Ag,lights_physical_pars_fragment:Rg,lights_fragment_begin:Cg,lights_fragment_maps:Pg,lights_fragment_end:Ig,lightprobes_pars_fragment:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Fg,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:Hg,metalnessmap_fragment:kg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:$g,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Kg,normal_vertex:jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,opaque_fragment:s_,packing:r_,premultiplied_alpha_fragment:o_,project_vertex:a_,dithering_fragment:c_,dithering_pars_fragment:l_,roughnessmap_fragment:u_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:f_,shadowmap_pars_vertex:d_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:x_,skinnormal_vertex:y_,specularmap_fragment:v_,specularmap_pars_fragment:b_,tonemapping_fragment:M_,tonemapping_pars_fragment:S_,transmission_fragment:E_,transmission_pars_fragment:T_,uv_pars_fragment:w_,uv_pars_vertex:A_,uv_vertex:R_,worldpos_vertex:C_,background_vert:P_,background_frag:I_,backgroundCube_vert:L_,backgroundCube_frag:D_,cube_vert:N_,cube_frag:U_,depth_vert:F_,depth_frag:O_,distance_vert:B_,distance_frag:z_,equirect_vert:H_,equirect_frag:k_,linedashed_vert:V_,linedashed_frag:G_,meshbasic_vert:W_,meshbasic_frag:X_,meshlambert_vert:q_,meshlambert_frag:Y_,meshmatcap_vert:$_,meshmatcap_frag:Z_,meshnormal_vert:J_,meshnormal_frag:K_,meshphong_vert:j_,meshphong_frag:Q_,meshphysical_vert:ex,meshphysical_frag:tx,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ox,shadow_frag:ax,sprite_vert:cx,sprite_frag:lx},Se={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},pi={basic:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Oe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:mn([Se.points,Se.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:mn([Se.common,Se.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:mn([Se.sprite,Se.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:mn([Se.common,Se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:mn([Se.lights,Se.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pi.physical={uniforms:mn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Rc={r:0,b:0,g:0},ux=new mt,Bd=new et;Bd.set(-1,0,0,0,1,0,0,0,1);function hx(i,e,t,n,s,r){let o=new Oe(0),a=s===!0?0:1,c,l,u=null,h=0,f=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let x=v.backgroundBlurriness>0;E=e.get(E,x)}return E}function p(v){let E=!1,x=d(v);x===null?m(o,a):x&&x.isColor&&(m(x,1),E=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,E){let x=d(E);x&&(x.isCubeTexture||x.mapping===ao)?(l===void 0&&(l=new Le(new Mt(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:gs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bd),l.material.toneMapped=dt.getTransfer(x.colorSpace)!==yt,(u!==x||h!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Le(new nn(2,2),new In({name:"BackgroundMaterial",uniforms:gs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,E){v.getRGB(Rc,pu(i)),t.buffers.color.setClear(Rc.r,Rc.g,Rc.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function fx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(F,R,N,D,U){let H=!1,k=h(F,D,N,R);r!==k&&(r=k,l(r.object)),H=d(F,D,N,U),H&&p(F,D,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(F,R,N,D),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function h(F,R,N,D){let U=D.wireframe===!0,H=n[R.id];H===void 0&&(H={},n[R.id]=H);let k=F.isInstancedMesh===!0?F.id:0,Z=H[k];Z===void 0&&(Z={},H[k]=Z);let G=Z[N.id];G===void 0&&(G={},Z[N.id]=G);let V=G[U];return V===void 0&&(V=f(c()),G[U]=V),V}function f(F){let R=[],N=[],D=[];for(let U=0;U<t;U++)R[U]=0,N[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:D,object:F,attributes:{},index:null}}function d(F,R,N,D){let U=r.attributes,H=R.attributes,k=0,Z=N.getAttributes();for(let G in Z)if(Z[G].location>=0){let $=U[G],he=H[G];if(he===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),$===void 0||$.attribute!==he||he&&$.data!==he.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function p(F,R,N,D){let U={},H=R.attributes,k=0,Z=N.getAttributes();for(let G in Z)if(Z[G].location>=0){let $=H[G];$===void 0&&(G==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),G==="instanceColor"&&F.instanceColor&&($=F.instanceColor));let he={};he.attribute=$,$&&$.data&&(he.data=$.data),U[G]=he,k++}r.attributes=U,r.attributesNum=k,r.index=D}function _(){let F=r.newAttributes;for(let R=0,N=F.length;R<N;R++)F[R]=0}function m(F){g(F,0)}function g(F,R){let N=r.newAttributes,D=r.enabledAttributes,U=r.attributeDivisors;N[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),U[F]!==R&&(i.vertexAttribDivisor(F,R),U[F]=R)}function v(){let F=r.newAttributes,R=r.enabledAttributes;for(let N=0,D=R.length;N<D;N++)R[N]!==F[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function E(F,R,N,D,U,H,k){k===!0?i.vertexAttribIPointer(F,R,N,U,H):i.vertexAttribPointer(F,R,N,D,U,H)}function x(F,R,N,D){_();let U=D.attributes,H=N.getAttributes(),k=R.defaultAttributeValues;for(let Z in H){let G=H[Z];if(G.location>=0){let V=U[Z];if(V===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(V=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(V=F.instanceColor)),V!==void 0){let $=V.normalized,he=V.itemSize,de=e.get(V);if(de===void 0)continue;let lt=de.buffer,Qe=de.type,ut=de.bytesPerElement,j=Qe===i.INT||Qe===i.UNSIGNED_INT||V.gpuType===Ga;if(V.isInterleavedBufferAttribute){let ie=V.data,Ee=ie.stride,Je=V.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<G.locationSize;Ce++)g(G.location+Ce,ie.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<G.locationSize;Ce++)m(G.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Ce=0;Ce<G.locationSize;Ce++)E(G.location+Ce,he/G.locationSize,Qe,$,Ee*ut,(Je+he/G.locationSize*Ce)*ut,j)}else{if(V.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)g(G.location+ie,V.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ie=0;ie<G.locationSize;ie++)m(G.location+ie);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ie=0;ie<G.locationSize;ie++)E(G.location+ie,he/G.locationSize,Qe,$,he*ut,he/G.locationSize*ie*ut,j)}}else if(k!==void 0){let $=k[Z];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(G.location,$);break;case 3:i.vertexAttrib3fv(G.location,$);break;case 4:i.vertexAttrib4fv(G.location,$);break;default:i.vertexAttrib1fv(G.location,$)}}}}v()}function M(){w();for(let F in n){let R=n[F];for(let N in R){let D=R[N];for(let U in D){let H=D[U];for(let k in H)u(H[k].object),delete H[k];delete D[U]}}delete n[F]}}function S(F){if(n[F.id]===void 0)return;let R=n[F.id];for(let N in R){let D=R[N];for(let U in D){let H=D[U];for(let k in H)u(H[k].object),delete H[k];delete D[U]}}delete n[F.id]}function A(F){for(let R in n){let N=n[R];for(let D in N){let U=N[D];if(U[F.id]===void 0)continue;let H=U[F.id];for(let k in H)u(H[k].object),delete H[k];delete U[F.id]}}}function y(F){for(let R in n){let N=n[R],D=F.isInstancedMesh===!0?F.id:0,U=N[D];if(U!==void 0){for(let H in U){let k=U[H];for(let Z in k)u(k[Z].object),delete k[Z];delete U[H]}delete N[D],Object.keys(N).length===0&&delete n[R]}}}function w(){I(),o=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function dx(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function px(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&A!==Kn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(We("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:x,maxSamples:M,samples:S}}function mx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new An,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,E=v*4,x=g.clippingState||null;c.value=x,x=u(p,f,E,d);for(let M=0;M!==E;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,p!==!0||m===null){let g=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,x=d;E!==_;++E,x+=4)o.copy(h[E]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ar=4,gx=6,_x=20,xx=256,go=new tr,gd=new Oe,Su=null,Eu=0,Tu=0,wu=!1,yx=new L,_s=new L,Pc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=yx}=r;Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,Eu,Tu),this._renderer.xr.enabled=wu,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),Eu=this._renderer.getActiveCubeFace(),Tu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:jn,format:On,colorSpace:Rr,depthBuffer:!1},s=_d(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_d(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vx(r)),this._blurMaterial=Mx(r,e,t),this._ggxMaterial=bx(r,e,t)}return s}_compileMaterial(e){let t=new Le(new Nt,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,s,r){let c=new on(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(gd),h.toneMapping=Zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Mt,new Cn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,g=!0):(m.color.copy(gd),g=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[E]));let M=this._cubeSize;or(s,x*M,E>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(_,c),h.render(e,c)}h.toneMapping=d,h.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$i||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),f=l*1.25,d=h*f,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ar?n-p+ar:0),g=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,or(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,go),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,or(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,go)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-ar?s-this._lodMax+ar:0),f=4*(this._cubeSize-u);or(t,h,f,3*u,2*u),o.setRenderTarget(t),o.render(c,go)}};function vx(i){let e=[],t=[],n=i,s=i-ar+1+gx;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,d=3,p=new Float32Array(d*f*h),_=new Float32Array(d*f*h);for(let g=0;g<h;g++){let v=g%3*2/3-1,E=g>2?0:-1,x=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];p.set(x,d*f*g);for(let M=0;M<f;M++){let S=u[M*2]*2-1,A=u[M*2+1]*2-1;g===0?_s.set(1,A,S):g===1?_s.set(-S,1,-A):g===2?_s.set(-S,A,1):g===3?_s.set(-1,A,-S):g===4?_s.set(-S,-1,A):_s.set(S,A,-1),_s.toArray(_,(g*f+M)*d)}}let m=new Nt;m.setAttribute("position",new kt(p,d)),m.setAttribute("outputDirection",new kt(_,d)),t.push(new Le(m,null)),n>ar&&n--}return{lodMeshes:t,sizeLods:e}}function _d(i,e,t){let n=new vn(i,e,t);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bx(i,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Mx(i,e,t){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function xd(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function yd(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ic=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:fi});r.uniforms.tEquirect.value=t;let o=new Le(s,r),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=an),new Oa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Sx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ha||d===ka)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Ic(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",l),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Ha||d===ka,_=d===$i||d===ms;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Pc(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&c(v)?(n===null&&(n=new Pc(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===Ha?f.mapping=$i:d===ka&&(f.mapping=ms),f}function c(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Ex(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Tx(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(h){let f=[],d=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(d!==null){let v=d.array;_=d.version;for(let E=0,x=v.length;E<x;E+=3){let M=v[E+0],S=v[E+1],A=v[E+2];f.push(M,S,S,A,A,M)}}else{let v=p.array;_=p.version;for(let E=0,x=v.length/3-1;E<x;E+=3){let M=E+0,S=E+1,A=E+2;f.push(M,S,S,A,A,M)}}let m=new(p.count>=65535?Ur:Nr)(f,1);m.version=_;let g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function wx(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function l(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ax(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rx(i,e,t){let n=new WeakMap,s=new Ot;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let x=a.attributes.position.count*E,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*M*4*h),A=new Lr(S,x,M,h);A.type=Kn,A.needsUpdate=!0;let y=E*4;for(let I=0;I<h;I++){let F=m[I],R=g[I],N=v[I],D=x*M*4*I;for(let U=0;U<F.count;U++){let H=U*y;d===!0&&(s.fromBufferAttribute(F,U),S[D+H+0]=s.x,S[D+H+1]=s.y,S[D+H+2]=s.z,S[D+H+3]=0),p===!0&&(s.fromBufferAttribute(R,U),S[D+H+4]=s.x,S[D+H+5]=s.y,S[D+H+6]=s.z,S[D+H+7]=0),_===!0&&(s.fromBufferAttribute(N,U),S[D+H+8]=s.x,S[D+H+9]=s.y,S[D+H+10]=s.z,S[D+H+11]=N.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new te(x,M)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cx(i,e,t,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Px={[Zl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[jl]:"ACES_FILMIC_TONE_MAPPING",[eu]:"AGX_TONE_MAPPING",[oo]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function Ix(i,e,t,n,s,r){let o=new vn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Nt;l.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new nt([0,2,0,0,2,0],2));let u=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Le(l,u),f=new tr(-1,1,1,-1,0,1),d=null,p=null,_=!1,m,g=null,v=[],E=!1;this.setSize=function(x,M){o.setSize(x,M),a!==null&&a.setSize(x,M),c!==null&&c.setSize(x,M);for(let S=0;S<v.length;S++){let A=v[S];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){v=x,E=v.length>0&&v[0].isRenderPass===!0;let M=o.width,S=o.height;v.length>0&&a===null&&(a=new vn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}),c=new vn(M,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let y=v[A];y.setSize&&y.setSize(M,S)}},this.begin=function(x,M){if(_||x.toneMapping===Zn&&v.length===0)return!1;if(g=M,M!==null){let S=M.width,A=M.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(x,M){x.toneMapping=m,_=!0;let S=o,A=a;for(let y=0;y<v.length;y++){let w=v[y];w.enabled!==!1&&(w.render(x,A,S,M),w.needsSwap!==!1&&(S=A,A=A===a?c:a))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,u.defines={},dt.getTransfer(d)===yt&&(u.defines.SRGB_TRANSFER="");let y=Px[p];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(g),x.render(h,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var zd=new yn,Cu=new Vi(1,1),Hd=new Lr,kd=new fa,Vd=new Br,vd=[],bd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Ed=new Float32Array(4);function lr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nc(i,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function Fx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),Kt(t,n)}}function Ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),Kt(t,n)}}function Bx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),Kt(t,n)}}function zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cu.compareFunction=t.isReversedDepthBuffer()?Ac:wc,r=Cu):r=zd,t.setTexture2D(e||r,s)}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kd,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vd,s)}function Jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function Kx(i){switch(i){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}function jx(i,e){i.uniform1fv(this.addr,e)}function Qx(i,e){let t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function ey(i,e){let t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function ty(i,e){let t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function ny(i,e){let t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iy(i,e){let t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sy(i,e){let t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ry(i,e){i.uniform1iv(this.addr,e)}function oy(i,e){i.uniform2iv(this.addr,e)}function ay(i,e){i.uniform3iv(this.addr,e)}function cy(i,e){i.uniform4iv(this.addr,e)}function ly(i,e){i.uniform1uiv(this.addr,e)}function uy(i,e){i.uniform2uiv(this.addr,e)}function hy(i,e){i.uniform3uiv(this.addr,e)}function fy(i,e){i.uniform4uiv(this.addr,e)}function dy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cu:o=zd;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function py(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kd,r[o])}function my(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vd,r[o])}function gy(i,e,t){let n=this.cache,s=e.length,r=Nc(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function _y(i){switch(i){case 5126:return jx;case 35664:return Qx;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return cy;case 5125:return ly;case 36294:return uy;case 36295:return hy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}var Pu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}},Iu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_y(t.type)}},Lu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Au=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function xy(i,e,t){let n=i.name,s=n.length;for(Au.lastIndex=0;;){let r=Au.exec(n),o=Au.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Td(t,l===void 0?new Pu(a,i,e):new Iu(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Lu(a),Td(t,h)),t=h}}}var cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);xy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yy=37297,vy=0;function by(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ad=new et;function My(i){dt._getMatrix(Ad,dt.workingColorSpace,i);let e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+by(i.getShaderSource(e),a)}else return r}function Sy(i,e){let t=My(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Ey={[Zl]:"Linear",[Jl]:"Reinhard",[Kl]:"Cineon",[jl]:"ACESFilmic",[eu]:"AgX",[oo]:"Neutral",[Ql]:"Custom"};function Ty(i,e){let t=Ey[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new L;function wy(){dt.getLuminanceCoefficients(Cc);let i=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ay(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Ry(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xo(i){return i!==""}function Cd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(i){return i.replace(Py,Ly)}var Iy=new Map;function Ly(i,e){let t=at[e];if(t===void 0){let n=Iy.get(e);if(n!==void 0)t=at[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Du(t)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(Dy,Ny)}function Ny(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ld(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Uy={[ro]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Fy(i){return Uy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Oy={[$i]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE_UV"};function By(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Oy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var zy={[ms]:"ENVMAP_MODE_REFRACTION"};function Hy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ky={[$l]:"ENVMAP_BLENDING_MULTIPLY",[Xf]:"ENVMAP_BLENDING_MIX",[qf]:"ENVMAP_BLENDING_ADD"};function Vy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ky[i.combine]||"ENVMAP_BLENDING_NONE"}function Gy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Fy(t),l=By(t),u=Hy(t),h=Vy(t),f=Gy(t),d=Ay(t),p=Ry(r),_=s.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xo).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(xo).join(`
`),g.length>0&&(g+=`
`)):(m=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),g=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?at.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Sy("linearToOutputTexel",t.outputColorSpace),wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),o=Du(o),o=Cd(o,t),o=Pd(o,t),a=Du(a),a=Cd(a,t),a=Pd(a,t),o=Id(o),a=Id(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=v+m+o,x=v+g+a,M=wd(s,s.VERTEX_SHADER,E),S=wd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(F){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(S)||"",U=R.trim(),H=N.trim(),k=D.trim(),Z=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,S);else{let V=Rd(s,M,"vertex"),$=Rd(s,S,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+U+`
`+V+`
`+$)}else U!==""?We("WebGLProgram: Program Info Log:",U):(H===""||k==="")&&(G=!1);G&&(F.diagnostics={runnable:Z,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:g}})}s.deleteShader(M),s.deleteShader(S),y=new cr(s,_),w=Cy(s,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,yy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=S,this}var Xy=0,Nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uu(e),t.set(e,n)),n}},Uu=class{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}};function qy(i){return i===Ki||i===po||i===mo}function Yy(i,e,t,n,s,r){let o=new qs,a=new Nu,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,w,I,F,R,N){let D=F.fog,U=R.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Z=e.get(y.envMap||H,k),G=Z&&Z.mapping===ao?Z.image.height:null,V=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&We("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,he=$!==void 0?$.length:0,de=0;U.morphAttributes.position!==void 0&&(de=1),U.morphAttributes.normal!==void 0&&(de=2),U.morphAttributes.color!==void 0&&(de=3);let lt,Qe,ut,j;if(V){let Ct=pi[V];lt=Ct.vertexShader,Qe=Ct.fragmentShader}else{lt=y.vertexShader,Qe=y.fragmentShader;let Ct=a.getVertexShaderStage(y),_t=a.getFragmentShaderStage(y);a.update(y,Ct,_t),ut=Ct.id,j=_t.id}let ie=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Je=R.isInstancedMesh===!0,Ce=R.isBatchedMesh===!0,Ke=!!y.map,vt=!!y.matcap,se=!!Z,ae=!!y.aoMap,ce=!!y.lightMap,le=!!y.bumpMap&&y.wireframe===!1,ge=!!y.normalMap,Xe=!!y.displacementMap,Ge=!!y.emissiveMap,je=!!y.metalnessMap,tt=!!y.roughnessMap,O=y.anisotropy>0,gt=y.clearcoat>0,ht=y.dispersion>0,P=y.retroreflectivity>0,b=y.iridescence>0,W=y.sheen>0,Y=y.transmission>0,K=O&&!!y.anisotropyMap,ue=gt&&!!y.clearcoatMap,me=gt&&!!y.clearcoatNormalMap,Q=gt&&!!y.clearcoatRoughnessMap,ne=b&&!!y.iridescenceMap,xe=b&&!!y.iridescenceThicknessMap,Be=W&&!!y.sheenColorMap,Me=W&&!!y.sheenRoughnessMap,ye=!!y.specularMap,ze=!!y.specularColorMap,qe=!!y.specularIntensityMap,it=Y&&!!y.transmissionMap,z=Y&&!!y.thicknessMap,ve=!!y.gradientMap,ee=!!y.alphaMap,be=y.alphaTest>0,Re=!!y.alphaHash,re=!!y.extensions,Ve=Zn;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Ue={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:lt,fragmentShader:Qe,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&R._colorsTexture!==null,instancing:Je,instancingColor:Je&&R.instanceColor!==null,instancingMorph:Je&&R.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:vt,envMap:se,envMapMode:se&&Z.mapping,envMapCubeUVHeight:G,aoMap:ae,lightMap:ce,bumpMap:le,normalMap:ge,displacementMap:Xe,emissiveMap:Ge,normalMapObjectSpace:ge&&y.normalMapType===Zf,normalMapTangentSpace:ge&&y.normalMapType===Tc,packedNormalMap:ge&&y.normalMapType===Tc&&qy(y.normalMap.format),metalnessMap:je,roughnessMap:tt,anisotropy:O,anisotropyMap:K,clearcoat:gt,clearcoatMap:ue,clearcoatNormalMap:me,clearcoatRoughnessMap:Q,dispersion:ht,retroreflection:P,iridescence:b,iridescenceMap:ne,iridescenceThicknessMap:xe,sheen:W,sheenColorMap:Be,sheenRoughnessMap:Me,specularMap:ye,specularColorMap:ze,specularIntensityMap:qe,transmission:Y,transmissionMap:it,thicknessMap:z,gradientMap:ve,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:be,alphaHash:Re,combine:y.combine,mapUv:Ke&&p(y.map.channel),aoMapUv:ae&&p(y.aoMap.channel),lightMapUv:ce&&p(y.lightMap.channel),bumpMapUv:le&&p(y.bumpMap.channel),normalMapUv:ge&&p(y.normalMap.channel),displacementMapUv:Xe&&p(y.displacementMap.channel),emissiveMapUv:Ge&&p(y.emissiveMap.channel),metalnessMapUv:je&&p(y.metalnessMap.channel),roughnessMapUv:tt&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:ue&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(y.sheenRoughnessMap.channel),specularMapUv:ye&&p(y.specularMap.channel),specularColorMapUv:ze&&p(y.specularColorMap.channel),specularIntensityMapUv:qe&&p(y.specularIntensityMap.channel),transmissionMapUv:it&&p(y.transmissionMap.channel),thicknessMapUv:z&&p(y.thicknessMap.channel),alphaMapUv:ee&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ge||O),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!U.attributes.uv&&(Ke||ee),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ge===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:de,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:Ge&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(g(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){let w=d[y.type],I;if(w){let F=pi[w];I=dd.clone(F.uniforms)}else I=y.uniforms;return I}function x(y,w){let I=u.get(w);return I!==void 0?++I.usedTimes:(I=new Wy(i,w,y,s),l.push(I),u.set(w,I)),I}function M(y){if(--y.usedTimes===0){let w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:A}}function $y(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Zy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function c(f,d,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let E=a(f,d,p,_,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):t.push(E)}function l(f,d,p,_,m,g){let v=a(f,d,p,_,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,d){t.length>1&&t.sort(f||Zy),n.length>1&&n.sort(d||Dd),s.length>1&&s.sort(d||Dd)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function Jy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Nd,i.set(n,[o])):s>=r.length?(o=new Nd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ky(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function jy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Qy=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){let e=new Ky,t=jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new mt,o=new mt;function a(l){let u=0,h=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,E=0,x=0,M=0,S=0,A=0,y=0,w=0,I=0;l.sort(ev);for(let R=0,N=l.length;R<N;R++){let D=l[R],U=D.color,H=D.intensity,k=D.distance,Z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ki?Z=D.shadow.map.texture:Z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=U.r*H,h+=U.g*H,f+=U.b*H;else if(D.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(D.sh.coefficients[G],H);I++}else if(D.isSunLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,$=t.get(D);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=Z;let he=V.getViewportCount();for(let de=0;de<he;de++)n.sunShadowMatrix[_+de]=V.getMatrix(de),n.sunShadowCascade[_+de]=V._cascadeData[de];_+=he,p++}n.sun[d]=G,d++}else if(D.isDirectionalLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,$=t.get(D);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=D.shadow.matrix,M++}n.directional[m]=G,m++}else if(D.isSpotLight){let G=e.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(U).multiplyScalar(H),G.distance=k,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,n.spot[v]=G;let V=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,V.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[v]=V.matrix,D.castShadow){let $=t.get(D);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Z,A++}v++}else if(D.isRectAreaLight){let G=e.get(D);G.color.copy(U).multiplyScalar(H),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=G,E++}else if(D.isPointLight){let G=e.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let V=D.shadow,$=t.get(D);$.shadowIntensity=V.intensity,$.shadowBias=V.bias,$.shadowNormalBias=V.normalBias,$.shadowRadius=V.radius,$.shadowMapSize=V.mapSize,$.shadowCameraNear=V.camera.near,$.shadowCameraFar=V.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=G,g++}else if(D.isHemisphereLight){let G=e.get(D);G.skyColor.copy(D.color).multiplyScalar(H),G.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[x]=G,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let F=n.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==v||F.rectAreaLength!==E||F.hemiLength!==x||F.numSunShadows!==p||F.numDirectionalShadows!==M||F.numPointShadows!==S||F.numSpotShadows!==A||F.numSpotMaps!==y||F.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=I,F.sunLength=d,F.directionalLength=m,F.pointLength=g,F.spotLength=v,F.rectAreaLength=E,F.hemiLength=x,F.numSunShadows=p,F.numDirectionalShadows=M,F.numPointShadows=S,F.numSpotShadows=A,F.numSpotMaps=y,F.numLightProbes=I,n.version=Qy++)}function c(l,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let x=l[v];if(x.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),h++}else if(x.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function Ud(i){let e=new tv(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function nv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ud(i),e.set(s,[a])):r>=o.length?(a=new Ud(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ov=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Fd=new mt,_o=new L,Ru=new L;function av(i,e,t){let n=new Js,s=new te,r=new te,o=new Ot,a=new Ta,c=new wa,l={},u=t.maxTextureSize,h={[Yi]:Zt,[Zt]:Yi,[Ut]:Ut},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Nt;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Le(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let g=this.type;this.render=function(S,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===wf&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ro);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),R=i.state;R.setBlending(fi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let N=g!==this.type;N&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=S.length;D<U;D++){let H=S[D],k=H.shadow;if(k===void 0){We("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Z=k.getFrameExtents();s.multiply(Z),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Z.x),s.x=r.x*Z.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Z.y),s.y=r.y*Z.y,k.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=G,k.map===null||N===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===nr){if(H.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new vn(s.x,s.y,{format:Ki,type:jn,minFilter:an,magFilter:an,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Vi(s.x,s.y,Kn),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ai,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en}else H.isPointLight?(k.map=new Ic(s.x),k.map.depthTexture=new _a(s.x,Jn)):(k.map=new vn(s.x,s.y),k.map.depthTexture=new Vi(s.x,s.y,Jn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ai,this.type===ro?(k.map.depthTexture.compareFunction=G?Ac:wc,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let V=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();H.isPointLight!==!0&&k.updateMatrices(H,y);for(let $=0;$<V;$++){let he=k.getCamera($);if(H.isPointLight){let de=k.camera,lt=k.matrix,Qe=H.distance||de.far;Qe!==de.far&&(de.far=Qe,de.updateProjectionMatrix()),_o.setFromMatrixPosition(H.matrixWorld),de.position.copy(_o),Ru.copy(de.position),Ru.add(rv[$]),de.up.copy(ov[$]),de.lookAt(Ru),de.updateMatrixWorld(),lt.makeTranslation(-_o.x,-_o.y,-_o.z),Fd.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Fd,de.coordinateSystem,de.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,$),i.clear();else{$===0&&(i.setRenderTarget(k.map),i.clear());let de=k.getViewport($);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),R.viewport(o)}n=k.getFrustum($),x(A,y,he,H,this.type)}k.isPointLightShadow!==!0&&this.type===nr&&v(k,y),k.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,F)};function v(S,A){let y=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new vn(s.x,s.y,{format:Ki,type:jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,y,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,y,d,_,null)}function E(S,A,y,w){let I=null,F=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)I=F;else if(I=y.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let R=I.uuid,N=A.uuid,D=l[R];D===void 0&&(D={},l[R]=D);let U=D[N];U===void 0&&(U=I.clone(),D[N]=U,A.addEventListener("dispose",M)),I=U}if(I.visible=A.visible,I.wireframe=A.wireframe,w===nr?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:h[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let R=i.properties.get(I);R.light=y}return I}function x(S,A,y,w,I){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===nr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let N=e.update(S),D=S.material;if(Array.isArray(D)){let U=N.groups;for(let H=0,k=U.length;H<k;H++){let Z=U[H],G=D[Z.materialIndex];if(G&&G.visible){let V=E(S,G,w,I);S.onBeforeShadow(i,S,A,y,N,V,Z),i.renderBufferDirect(y,null,N,V,S,Z),S.onAfterShadow(i,S,A,y,N,V,Z)}}}else if(D.visible){let U=E(S,D,w,I);S.onBeforeShadow(i,S,A,y,N,U,null),i.renderBufferDirect(y,null,N,U,S,null),S.onAfterShadow(i,S,A,y,N,U,null)}}let R=S.children;for(let N=0,D=R.length;N<D;N++)x(R[N],A,y,w,I)}function M(S){S.target.removeEventListener("dispose",M);for(let y in l){let w=l[y],I=S.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function cv(i,e){function t(){let z=!1,ve=new Ot,ee=null,be=new Ot(0,0,0,0);return{setMask:function(Re){ee!==Re&&!z&&(i.colorMask(Re,Re,Re,Re),ee=Re)},setLocked:function(Re){z=Re},setClear:function(Re,re,Ve,Ue,Ct){Ct===!0&&(Re*=Ue,re*=Ue,Ve*=Ue),ve.set(Re,re,Ve,Ue),be.equals(ve)===!1&&(i.clearColor(Re,re,Ve,Ue),be.copy(ve))},reset:function(){z=!1,ee=null,be.set(-1,0,0,0)}}}function n(){let z=!1,ve=!1,ee=null,be=null,Re=null;return{setReversed:function(re){if(ve!==re){let Ve=e.get("EXT_clip_control");re?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ve=re;let Ue=Re;Re=null,this.setClear(Ue)}},getReversed:function(){return ve},setTest:function(re){re?ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(re){ee!==re&&!z&&(i.depthMask(re),ee=re)},setFunc:function(re){if(ve&&(re=od[re]),be!==re){switch(re){case ta:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=re}},setLocked:function(re){z=re},setClear:function(re){Re!==re&&(Re=re,ve&&(re=1-re),i.clearDepth(re))},reset:function(){z=!1,ee=null,be=null,Re=null,ve=!1}}}function s(){let z=!1,ve=null,ee=null,be=null,Re=null,re=null,Ve=null,Ue=null,Ct=null;return{setTest:function(_t){z||(_t?ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(_t){ve!==_t&&!z&&(i.stencilMask(_t),ve=_t)},setFunc:function(_t,Hn,ei){(ee!==_t||be!==Hn||Re!==ei)&&(i.stencilFunc(_t,Hn,ei),ee=_t,be=Hn,Re=ei)},setOp:function(_t,Hn,ei){(re!==_t||Ve!==Hn||Ue!==ei)&&(i.stencilOp(_t,Hn,ei),re=_t,Ve=Hn,Ue=ei)},setLocked:function(_t){z=_t},setClear:function(_t){Ct!==_t&&(i.clearStencil(_t),Ct=_t)},reset:function(){z=!1,ve=null,ee=null,be=null,Re=null,re=null,Ve=null,Ue=null,Ct=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,E=null,x=null,M=null,S=null,A=null,y=new Oe(0,0,0),w=0,I=!1,F=null,R=null,N=null,D=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=Z>=2);let V=null,$={},he=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),lt=new Ot().fromArray(he),Qe=new Ot().fromArray(de);function ut(z,ve,ee,be){let Re=new Uint8Array(4),re=i.createTexture();i.bindTexture(z,re),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ee;Ve++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(ve+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return re}let j={};j[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(ks),le(!1),ge(Gl),ie(i.CULL_FACE),ae(fi);function ie(z){u[z]!==!0&&(i.enable(z),u[z]=!0)}function Ee(z){u[z]!==!1&&(i.disable(z),u[z]=!1)}function Je(z,ve){return f[z]!==ve?(i.bindFramebuffer(z,ve),f[z]=ve,z===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ve),z===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ce(z,ve){let ee=p,be=!1;if(z){ee=d.get(ve),ee===void 0&&(ee=[],d.set(ve,ee));let Re=z.textures;if(ee.length!==Re.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ve=Re.length;re<Ve;re++)ee[re]=i.COLOR_ATTACHMENT0+re;ee.length=Re.length,be=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,be=!0);be&&i.drawBuffers(ee)}function Ke(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let vt={[ps]:i.FUNC_ADD,[Rf]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};vt[Pf]=i.MIN,vt[If]=i.MAX;let se={[Lf]:i.ZERO,[Df]:i.ONE,[Nf]:i.SRC_COLOR,[ql]:i.SRC_ALPHA,[Hf]:i.SRC_ALPHA_SATURATE,[Bf]:i.DST_COLOR,[Ff]:i.DST_ALPHA,[Uf]:i.ONE_MINUS_SRC_COLOR,[Yl]:i.ONE_MINUS_SRC_ALPHA,[zf]:i.ONE_MINUS_DST_COLOR,[Of]:i.ONE_MINUS_DST_ALPHA,[kf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(z,ve,ee,be,Re,re,Ve,Ue,Ct,_t){if(z===fi){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ie(i.BLEND),m=!0),z!==Af){if(z!==g||_t!==I){if((v!==ps||M!==ps)&&(i.blendEquation(i.FUNC_ADD),v=ps,M=ps),_t)switch(z){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",z);break}else switch(z){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",z);break}E=null,x=null,S=null,A=null,y.set(0,0,0),w=0,g=z,I=_t}return}Re=Re||ve,re=re||ee,Ve=Ve||be,(ve!==v||Re!==M)&&(i.blendEquationSeparate(vt[ve],vt[Re]),v=ve,M=Re),(ee!==E||be!==x||re!==S||Ve!==A)&&(i.blendFuncSeparate(se[ee],se[be],se[re],se[Ve]),E=ee,x=be,S=re,A=Ve),(Ue.equals(y)===!1||Ct!==w)&&(i.blendColor(Ue.r,Ue.g,Ue.b,Ct),y.copy(Ue),w=Ct),g=z,I=!1}function ce(z,ve){z.side===Ut?Ee(i.CULL_FACE):ie(i.CULL_FACE);let ee=z.side===Zt;ve&&(ee=!ee),le(ee),z.blending===ir&&z.transparent===!1?ae(fi):ae(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let be=z.stencilWrite;a.setTest(be),be&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ge(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(z){F!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),F=z)}function ge(z){z!==Ef?(ie(i.CULL_FACE),z!==R&&(z===Gl?i.cullFace(i.BACK):z===Tf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),R=z}function Xe(z){z!==N&&(k&&i.lineWidth(z),N=z)}function Ge(z,ve,ee){z?(ie(i.POLYGON_OFFSET_FILL),(D!==ve||U!==ee)&&(D=ve,U=ee,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,ee))):Ee(i.POLYGON_OFFSET_FILL)}function je(z){z?ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function tt(z){z===void 0&&(z=i.TEXTURE0+H-1),V!==z&&(i.activeTexture(z),V=z)}function O(z,ve,ee){ee===void 0&&(V===null?ee=i.TEXTURE0+H-1:ee=V);let be=$[ee];be===void 0&&(be={type:void 0,texture:void 0},$[ee]=be),(be.type!==z||be.texture!==ve)&&(V!==ee&&(i.activeTexture(ee),V=ee),i.bindTexture(z,ve||j[z]),be.type=z,be.texture=ve)}function gt(){let z=$[V];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ht(){try{i.compressedTexImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function b(){try{i.texSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function W(){try{i.texSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function ue(){try{i.texStorage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function me(){try{i.texStorage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function Q(){try{i.texImage2D(...arguments)}catch(z){Ye("WebGLState:",z)}}function ne(){try{i.texImage3D(...arguments)}catch(z){Ye("WebGLState:",z)}}function xe(z){return h[z]!==void 0?h[z]:i.getParameter(z)}function Be(z,ve){h[z]!==ve&&(i.pixelStorei(z,ve),h[z]=ve)}function Me(z){lt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),lt.copy(z))}function ye(z){Qe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Qe.copy(z))}function ze(z,ve){let ee=l.get(ve);ee===void 0&&(ee=new WeakMap,l.set(ve,ee));let be=ee.get(z);be===void 0&&(be=i.getUniformBlockIndex(ve,z.name),ee.set(z,be))}function qe(z,ve){let be=l.get(ve).get(z);c.get(ve)!==be&&(i.uniformBlockBinding(ve,be,z.__bindingPointIndex),c.set(ve,be))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},V=null,$={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,E=null,x=null,M=null,S=null,A=null,y=new Oe(0,0,0),w=0,I=!1,F=null,R=null,N=null,D=null,U=null,lt.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Ee,bindFramebuffer:Je,drawBuffers:Ce,useProgram:Ke,setBlending:ae,setMaterial:ce,setFlipSided:le,setCullFace:ge,setLineWidth:Xe,setPolygonOffset:Ge,setScissorTest:je,activeTexture:tt,bindTexture:O,unbindTexture:gt,compressedTexImage2D:ht,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:Be,getParameter:xe,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:ue,texStorage3D:me,texSubImage2D:b,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:K,scissor:Me,viewport:ye,reset:it}}function lv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new te,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return p?new OffscreenCanvas(P,b):Pr("canvas")}function m(P,b,W){let Y=1,K=ht(P);if((K.width>W||K.height>W)&&(Y=W/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ue=Math.floor(Y*K.width),me=Math.floor(Y*K.height);f===void 0&&(f=_(ue,me));let Q=b?_(ue,me):f;return Q.width=ue,Q.height=me,Q.getContext("2d").drawImage(P,0,0,ue,me),We("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ue+"x"+me+")."),Q}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function g(P){return P.generateMipmaps}function v(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,b,W,Y,K,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me;Y&&(me=e.get("EXT_texture_norm16"),me||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=b;if(b===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8),W===i.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),W===i.SHORT&&me&&(Q=me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),b===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8),W===i.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),W===i.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),W===i.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){let ne=ue?Cr:dt.getTransfer(K);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=ne===yt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),W===i.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(P,b){let W;return P?b===null||b===Jn||b===rr?W=i.DEPTH24_STENCIL8:b===Kn?W=i.DEPTH32F_STENCIL8:b===sr&&(W=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jn||b===rr?W=i.DEPTH_COMPONENT24:b===Kn?W=i.DEPTH_COMPONENT32F:b===sr&&(W=i.DEPTH_COMPONENT16),W}function S(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==an?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){let b=P.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&h.delete(b)}function y(P){let b=P.target;b.removeEventListener("dispose",y),F(b)}function w(P){let b=n.get(P);if(b.__webglInit===void 0)return;let W=P.source,Y=d.get(W);if(Y){let K=Y[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(P),Object.keys(Y).length===0&&d.delete(W)}n.remove(P)}function I(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let W=P.source,Y=d.get(W);delete Y[b.__cacheKey],o.memory.textures--}function F(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let K=0;K<b.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let W=P.textures;for(let Y=0,K=W.length;Y<K;Y++){let ue=n.get(W[Y]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),o.memory.textures--),n.remove(W[Y])}n.remove(P)}let R=0;function N(){R=0}function D(){return R}function U(P){R=P}function H(){let P=R;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function k(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Z(P,b){let W=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let Y=P.image;if(Y===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(W,P,b);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function G(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Ee(W,P,b);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function V(P,b){let W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){Ee(W,P,b);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function $(P,b){let W=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&W.__version!==P.version){Je(W,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let he={[Si]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},de={[en]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Va]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},lt={[Kf]:i.NEVER,[nd]:i.ALWAYS,[jf]:i.LESS,[wc]:i.LEQUAL,[Qf]:i.EQUAL,[Ac]:i.GEQUAL,[ed]:i.GREATER,[td]:i.NOTEQUAL};function Qe(P,b){if(b.type===Kn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===an||b.magFilter===Va||b.magFilter===co||b.magFilter===Zi||b.minFilter===an||b.minFilter===Va||b.minFilter===co||b.minFilter===Zi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,he[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,he[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,he[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,de[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,de[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==co&&b.minFilter!==Zi||b.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ut(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));let Y=b.source,K=d.get(Y);K===void 0&&(K={},d.set(Y,K));let ue=k(b);if(ue!==P.__cacheKey){K[ue]===void 0&&(K[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),K[ue].usedTimes++;let me=K[P.__cacheKey];me!==void 0&&(K[P.__cacheKey].usedTimes--,me.usedTimes===0&&I(b)),P.__cacheKey=ue,P.__webglTexture=K[ue].texture}return W}function j(P,b,W){return Math.floor(Math.floor(P/W)/b)}function ie(P,b,W,Y){let ue=P.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,Y,b.data);else{ue.sort((Be,Me)=>Be.start-Me.start);let me=0;for(let Be=1;Be<ue.length;Be++){let Me=ue[me],ye=ue[Be],ze=Me.start+Me.count,qe=j(ye.start,b.width,4),it=j(Me.start,b.width,4);ye.start<=ze+1&&qe===it&&j(ye.start+ye.count-1,b.width,4)===qe?Me.count=Math.max(Me.count,ye.start+ye.count-Me.start):(++me,ue[me]=ye)}ue.length=me+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Be=0,Me=ue.length;Be<Me;Be++){let ye=ue[Be],ze=Math.floor(ye.start/4),qe=Math.ceil(ye.count/4),it=ze%b.width,z=Math.floor(ze/b.width),ve=qe,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,it),t.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,it,z,ve,ee,W,Y,b.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Ee(P,b,W){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let K=ut(P,b),ue=b.source;t.bindTexture(Y,P.__webglTexture,i.TEXTURE0+W);let me=n.get(ue);if(ue.version!==me.__version||K===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ee=dt.getPrimaries(dt.workingColorSpace),be=b.colorSpace===Ii?null:dt.getPrimaries(b.colorSpace),Re=b.colorSpace===Ii||ee===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ne=m(b.image,!1,s.maxTextureSize);ne=gt(b,ne);let xe=r.convert(b.format,b.colorSpace),Be=r.convert(b.type),Me=x(b.internalFormat,xe,Be,b.normalized,b.colorSpace,b.isVideoTexture);Qe(Y,b);let ye,ze=b.mipmaps,qe=b.isVideoTexture!==!0,it=me.__version===void 0||K===!0,z=ue.dataReady,ve=S(b,ne);if(b.isDepthTexture)Me=M(b.format===Ji,b.type),it&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,xe,Be,null));else if(b.isDataTexture)if(ze.length>0){qe&&it&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ze[0].width,ze[0].height);for(let ee=0,be=ze.length;ee<be;ee++)ye=ze[ee],qe?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ye.width,ye.height,xe,Be,ye.data):t.texImage2D(i.TEXTURE_2D,ee,Me,ye.width,ye.height,0,xe,Be,ye.data);b.generateMipmaps=!1}else qe?(it&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ne.width,ne.height),z&&ie(b,ne,xe,Be)):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,xe,Be,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ze[0].width,ze[0].height,ne.depth);for(let ee=0,be=ze.length;ee<be;ee++)if(ye=ze[ee],b.format!==On)if(xe!==null)if(qe){if(z)if(b.layerUpdates.size>0){let Re=_u(ye.width,ye.height,b.format,b.type);for(let re of b.layerUpdates){let Ve=ye.data.subarray(re*Re/ye.data.BYTES_PER_ELEMENT,(re+1)*Re/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,re,ye.width,ye.height,1,xe,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,ne.depth,xe,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Me,ye.width,ye.height,ne.depth,0,ye.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ye.width,ye.height,ne.depth,xe,Be,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Me,ye.width,ye.height,ne.depth,0,xe,Be,ye.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{qe&&it&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ze[0].width,ze[0].height);for(let ee=0,be=ze.length;ee<be;ee++)ye=ze[ee],b.format!==On?xe!==null?qe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ye.width,ye.height,xe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Me,ye.width,ye.height,0,ye.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ye.width,ye.height,xe,Be,ye.data):t.texImage2D(i.TEXTURE_2D,ee,Me,ye.width,ye.height,0,xe,Be,ye.data)}else if(b.isDataArrayTexture)if(qe){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ne.width,ne.height,ne.depth),z)if(b.layerUpdates.size>0){let ee=_u(ne.width,ne.height,b.format,b.type);for(let be of b.layerUpdates){let Re=ne.data.subarray(be*ee/ne.data.BYTES_PER_ELEMENT,(be+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ne.width,ne.height,1,xe,Be,Re)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Be,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,xe,Be,ne.data);else if(b.isData3DTexture)qe?(it&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ne.width,ne.height,ne.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Be,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,xe,Be,ne.data);else if(b.isFramebufferTexture){if(it)if(qe)t.texStorage2D(i.TEXTURE_2D,ve,Me,ne.width,ne.height);else{let ee=ne.width,be=ne.height;for(let Re=0;Re<ve;Re++)t.texImage2D(i.TEXTURE_2D,Re,Me,ee,be,0,xe,Be,null),ee>>=1,be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),h.add(b),ee.onpaint=be=>{let Re=be.changedElements;for(let re of h)Re.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Re=i.RGBA,re=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,re,Ve,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(qe&&it){let ee=ht(ze[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height)}for(let ee=0,be=ze.length;ee<be;ee++)ye=ze[ee],qe?z&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,xe,Be,ye):t.texImage2D(i.TEXTURE_2D,ee,Me,xe,Be,ye);b.generateMipmaps=!1}else if(qe){if(it){let ee=ht(ne);t.texStorage2D(i.TEXTURE_2D,ve,Me,ee.width,ee.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Be,ne)}else t.texImage2D(i.TEXTURE_2D,0,Me,xe,Be,ne);g(b)&&v(Y),me.__version=ue.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Je(P,b,W){if(b.image.length!==6)return;let Y=ut(P,b),K=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);let ue=n.get(K);if(K.version!==ue.__version||Y===!0){t.activeTexture(i.TEXTURE0+W);let me=dt.getPrimaries(dt.workingColorSpace),Q=b.colorSpace===Ii?null:dt.getPrimaries(b.colorSpace),ne=b.colorSpace===Ii||me===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let xe=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let re=0;re<6;re++)!xe&&!Be?Me[re]=m(b.image[re],!0,s.maxCubemapSize):Me[re]=Be?b.image[re].image:b.image[re],Me[re]=gt(b,Me[re]);let ye=Me[0],ze=r.convert(b.format,b.colorSpace),qe=r.convert(b.type),it=x(b.internalFormat,ze,qe,b.normalized,b.colorSpace),z=b.isVideoTexture!==!0,ve=ue.__version===void 0||Y===!0,ee=K.dataReady,be=S(b,ye);Qe(i.TEXTURE_CUBE_MAP,b);let Re;if(xe){z&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,it,ye.width,ye.height);for(let re=0;re<6;re++){Re=Me[re].mipmaps;for(let Ve=0;Ve<Re.length;Ve++){let Ue=Re[Ve];b.format!==On?ze!==null?z?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve,it,Ue.width,Ue.height,0,Ue.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve,0,0,Ue.width,Ue.height,ze,qe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve,it,Ue.width,Ue.height,0,ze,qe,Ue.data)}}}else{if(Re=b.mipmaps,z&&ve){Re.length>0&&be++;let re=ht(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,it,re.width,re.height)}for(let re=0;re<6;re++)if(Be){z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Me[re].width,Me[re].height,ze,qe,Me[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,it,Me[re].width,Me[re].height,0,ze,qe,Me[re].data);for(let Ve=0;Ve<Re.length;Ve++){let Ct=Re[Ve].image[re].image;z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve+1,0,0,Ct.width,Ct.height,ze,qe,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve+1,it,Ct.width,Ct.height,0,ze,qe,Ct.data)}}else{z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,qe,Me[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,it,ze,qe,Me[re]);for(let Ve=0;Ve<Re.length;Ve++){let Ue=Re[Ve];z?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve+1,0,0,ze,qe,Ue.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ve+1,it,ze,qe,Ue.image[re])}}}g(b)&&v(i.TEXTURE_CUBE_MAP),ue.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Ce(P,b,W,Y,K,ue){let me=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),ne=x(W.internalFormat,me,Q,W.normalized,W.colorSpace),xe=n.get(b),Be=n.get(W);if(Be.__renderTarget=b,!xe.__hasExternalTextures){let Me=Math.max(1,b.width>>ue),ye=Math.max(1,b.height>>ue);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ue,ne,Me,ye,b.depth,0,me,Q,null):t.texImage2D(K,ue,ne,Me,ye,0,me,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,Be.__webglTexture,0,je(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,Be.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(P,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let Y=b.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,ue=M(b.stencilBuffer,K),me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(b),ue,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(b),ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,P)}else{let Y=b.textures;for(let K=0;K<Y.length;K++){let ue=Y[K],me=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),ne=x(ue.internalFormat,me,Q,ue.normalized,ue.colorSpace);tt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je(b),ne,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,je(b),ne,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ne,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(P,b,W){let Y=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(b.depthTexture);if(K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,b.depthTexture);let xe=r.convert(b.depthTexture.format),Be=r.convert(b.depthTexture.type),Me;b.depthTexture.format===ai?Me=i.DEPTH_COMPONENT24:b.depthTexture.format===Ji&&(Me=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,b.width,b.height,0,xe,Be,null)}}else Z(b.depthTexture,0);let ue=K.__webglTexture,me=je(b),Q=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ne=b.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ai)tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ue,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ue,0);else if(b.depthTexture.format===Ji)tt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Q,ue,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(P){let b=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)vt(b.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?vt(b.__webglFramebuffer[0],P,0):vt(b.__webglFramebuffer,P,0)}else if(W){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ke(b.__webglDepthbuffer[Y],P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ue)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ke(b.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,b,W){let Y=n.get(P);b!==void 0&&Ce(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&se(P)}function ce(P){let b=P.texture,W=n.get(P),Y=n.get(b);P.addEventListener("dispose",y);let K=P.textures,ue=P.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),ue){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let ne=0;ne<b.mipmaps.length;ne++)W.__webglFramebuffer[Q][ne]=i.createFramebuffer()}else W.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<b.mipmaps.length;Q++)W.__webglFramebuffer[Q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(me)for(let Q=0,ne=K.length;Q<ne;Q++){let xe=n.get(K[Q]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&tt(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let ne=K[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let xe=r.convert(ne.format,ne.colorSpace),Be=r.convert(ne.type),Me=x(ne.internalFormat,xe,Be,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ye=je(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,b);for(let Q=0;Q<6;Q++)if(b.mipmaps&&b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)Ce(W.__webglFramebuffer[Q][ne],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else Ce(W.__webglFramebuffer[Q],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);g(b)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Q=0,ne=K.length;Q<ne;Q++){let xe=K[Q],Be=n.get(xe),Me=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,Be.__webglTexture),Qe(Me,xe),Ce(W.__webglFramebuffer,P,xe,i.COLOR_ATTACHMENT0+Q,Me,0),g(xe)&&v(Me)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,Y.__webglTexture),Qe(Q,b),b.mipmaps&&b.mipmaps.length>0)for(let ne=0;ne<b.mipmaps.length;ne++)Ce(W.__webglFramebuffer[ne],P,b,i.COLOR_ATTACHMENT0,Q,ne);else Ce(W.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,Q,0);g(b)&&v(Q),t.unbindTexture()}P.depthBuffer&&se(P)}function le(P){let b=P.textures;for(let W=0,Y=b.length;W<Y;W++){let K=b[W];if(g(K)){let ue=E(P),me=n.get(K).__webglTexture;t.bindTexture(ue,me),v(ue),t.unbindTexture()}}}let ge=[],Xe=[];function Ge(P){if(P.samples>0){if(tt(P)===!1){let b=P.textures,W=P.width,Y=P.height,K=i.COLOR_BUFFER_BIT,ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(P),Q=b.length>1;if(Q)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Be=n.get(b[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,K,i.NEAREST),c===!0&&(ge.length=0,Xe.length=0,ge.push(i.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ge.push(ue),Xe.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Be=n.get(b[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function je(P){return Math.min(s.maxSamples,P.samples)}function tt(P){let b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function O(P){let b=o.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function gt(P,b){let W=P.colorSpace,Y=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Rr&&W!==Ii&&(dt.getTransfer(W)===yt?(Y!==On||K!==bn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",W)),b}function ht(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uv(i,e){function t(n,s=Ii){let r,o=dt.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nu)return i.BYTE;if(n===iu)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===au)return i.RGB;if(n===On)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===cu)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===lo||n===uo||n===ho||n===fo)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ja||n===Ka||n===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===ec||n===tc||n===nc||n===ic||n===po||n===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===ec)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nc)return r.COMPRESSED_R11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_R11_EAC;if(n===po)return r.COMPRESSED_RG11_EAC;if(n===sc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rc||n===oc||n===ac||n===cc||n===lc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===vc||n===bc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===Sc||n===mo||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new In({vertexShader:hv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new Fu,g={},v=t.getContextAttributes(),E=null,x=null,M=[],S=[],A=new te,y=null,w=null,I=new on;I.viewport=new Ot;let F=new on;F.viewport=new Ot;let R=[I,F],N=new Ba,D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=M[j];return ie===void 0&&(ie=new Ys,M[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=M[j];return ie===void 0&&(ie=new Ys,M[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=M[j];return ie===void 0&&(ie=new Ys,M[j]=ie),ie.getHandSpace()};function H(j){let ie=S.indexOf(j.inputSource);if(ie===-1)return;let Ee=M[ie];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,l||o),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<M.length;j++){let ie=S[j];ie!==null&&(S[j]=null,M[j].disconnect(ie))}D=null,U=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(E),d=null,f=null,h=null,s=null,x=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Je=null,Ce=null;v.depth&&(Ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?Ji:ai,Je=v.stencil?rr:Jn);let Ke={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new vn(f.textureWidth,f.textureHeight,{format:On,type:bn,depthTexture:new Vi(f.textureWidth,f.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new vn(d.framebufferWidth,d.framebufferHeight,{format:On,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(j){for(let ie=0;ie<j.removed.length;ie++){let Ee=j.removed[ie],Je=S.indexOf(Ee);Je>=0&&(S[Je]=null,M[Je].disconnect(Ee))}for(let ie=0;ie<j.added.length;ie++){let Ee=j.added[ie],Je=S.indexOf(Ee);if(Je===-1){for(let Ke=0;Ke<M.length;Ke++)if(Ke>=S.length){S.push(Ee),Je=Ke;break}else if(S[Ke]===null){S[Ke]=Ee,Je=Ke;break}if(Je===-1)break}let Ce=M[Je];Ce&&Ce.connect(Ee)}}let G=new L,V=new L;function $(j,ie,Ee){G.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(Ee.matrixWorld);let Je=G.distanceTo(V),Ce=ie.projectionMatrix.elements,Ke=Ee.projectionMatrix.elements,vt=Ce[14]/(Ce[10]-1),se=Ce[14]/(Ce[10]+1),ae=(Ce[9]+1)/Ce[5],ce=(Ce[9]-1)/Ce[5],le=(Ce[8]-1)/Ce[0],ge=(Ke[8]+1)/Ke[0],Xe=vt*le,Ge=vt*ge,je=Je/(-le+ge),tt=je*-le;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(tt),j.translateZ(je),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ce[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let O=vt+je,gt=se+je,ht=Xe-tt,P=Ge+(Je-tt),b=ae*se/gt*O,W=ce*se/gt*O;j.projectionMatrix.makePerspective(ht,P,b,W,O,gt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ie=j.near,Ee=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),N.near=F.near=I.near=ie,N.far=F.far=I.far=Ee,(D!==N.near||U!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,U=N.far),N.layers.mask=j.layers.mask|6,I.layers.mask=N.layers.mask&-5,F.layers.mask=N.layers.mask&-3;let Je=j.parent,Ce=N.cameras;he(N,Je);for(let Ke=0;Ke<Ce.length;Ke++)he(Ce[Ke],Je);Ce.length===2?$(N,I,F):N.projectionMatrix.copy(I.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),de(j,N,Je)};function de(j,ie,Ee){Ee===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ws*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(j){return g[j]};let lt=null;function Qe(j,ie){if(u=ie.getViewerPose(l||o),p=ie,u!==null){let Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Je=!1;Ee.length!==N.cameras.length&&(N.cameras.length=0,Je=!0);for(let se=0;se<Ee.length;se++){let ae=Ee[se],ce=null;if(d!==null)ce=d.getViewport(ae);else{let ge=h.getViewSubImage(f,ae);ce=ge.viewport,se===0&&(e.setRenderTargetTextures(x,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(x))}let le=R[se];le===void 0&&(le=new on,le.layers.enable(se),le.viewport=new Ot,R[se]=le),le.matrix.fromArray(ae.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ae.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ce.x,ce.y,ce.width,ce.height),se===0&&(N.matrix.copy(le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Je===!0&&N.cameras.push(le)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let se=h.getDepthInformation(Ee[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let se=0;se<Ee.length;se++){let ae=Ee[se].camera;if(ae){let ce=g[ae];ce||(ce=new zr,g[ae]=ce);let le=h.getCameraImage(ae);ce.sourceTexture=le}}}}for(let Ee=0;Ee<M.length;Ee++){let Je=S[Ee],Ce=M[Ee];Je!==null&&Ce!==void 0&&Ce.update(Je,ie,l||o)}lt&&lt(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),p=null}let ut=new Od;ut.setAnimationLoop(Qe),this.setAnimationLoop=function(j){lt=j},this.dispose=function(){}}},dv=new mt,Gd=new et;Gd.set(-1,0,0,0,1,0,0,0,1);function pv(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,pu(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,v,E,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,v,E):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Zt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Zt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),E=v.envMap,x=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(dv.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,v,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Zt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){let S=M.program;n.uniformBlockBinding(x,S)}function l(x,M){let S=s[x.id];S===void 0&&(m(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",v));let A=M.program;n.updateUBOMapping(x,A);let y=e.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function u(x){let M=h();x.__bindingPointIndex=M;let S=i.createBuffer(),A=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let M=s[x.id],S=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let y=0,w=S.length;y<w;y++){let I=S[y];if(Array.isArray(I))for(let F=0,R=I.length;F<R;F++)d(I[F],y,F,A);else d(I,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,M,S,A){if(_(x,M,S,A)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let I=0;for(let F=0;F<w.length;F++){let R=w[F],N=g(R);p(R,x.__data,I),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,S){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,S)}function _(x,M,S,A){let y=x.value,w=M+"_"+S;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let I=A[w];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(x){let M=x.uniforms,S=0,A=16;for(let w=0,I=M.length;w<I;w++){let F=Array.isArray(M[w])?M[w]:[M[w]];for(let R=0,N=F.length;R<N;R++){let D=F[R],U=Array.isArray(D.value)?D.value:[D.value];for(let H=0,k=U.length;H<k;H++){let Z=U[H],G=g(Z),V=S%A,$=V%G.boundary,he=V+$;S+=$,he!==0&&A-he<G.storage&&(S+=A-he),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=S,S+=G.storage}}}let y=S%A;return y>0&&(S+=A-y),x.__size=S,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):We("WebGLRenderer: Unsupported uniform value type.",x),M}function v(x){let M=x.target;M.removeEventListener("dispose",v);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:E}}var gv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),di=null;function _v(){return di===null&&(di=new da(gv,16,16,Ki,jn),di.name="DFG_LUT",di.minFilter=an,di.magFilter=an,di.wrapS=si,di.wrapT=si,di.generateMipmaps=!1,di.needsUpdate=!0),di}var Lc=class{constructor(e={}){let{canvas:t=id(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([$a,Ya,qa]),g=new Set([bn,Jn,sr,rr,Wa,Xa]),v=new Uint32Array(4),E=new Int32Array(4),x=new L,M=null,S=null,A=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,F=!1,R=null,N=null,D=null,U=null;this._outputColorSpace=It;let H=0,k=0,Z=null,G=-1,V=null,$=new Ot,he=new Ot,de=null,lt=new Oe(0),Qe=0,ut=t.width,j=t.height,ie=1,Ee=null,Je=null,Ce=new Ot(0,0,ut,j),Ke=new Ot(0,0,ut,j),vt=!1,se=new Js,ae=!1,ce=!1,le=new mt,ge=new L,Xe=new Ot,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function tt(){return Z===null?ie:1}let O=n;function gt(T,B){return t.getContext(T,B)}let ht,P,b,W,Y,K,ue,me,Q,ne,xe,Be,Me,ye,ze,qe,it,z,ve,ee,be,Re,re;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),O===null){let B="webgl2";if(O=gt(B,T),O===null)throw gt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(T){throw t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Ye("WebGLRenderer: "+T.message),T}function Ve(){ht=new Ex(O),ht.init(),be=new uv(O,ht),P=new px(O,ht,e,be),b=new cv(O,ht),P.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),N=O.createFramebuffer(),D=O.createFramebuffer(),U=O.createFramebuffer(),W=new Ax(O),Y=new $y,K=new lv(O,ht,b,Y,P,be,W),ue=new Sx(I),me=new Cm(O),Re=new fx(O,me),Q=new Tx(O,me,W,Re),ne=new Cx(O,Q,me,Re,W),z=new Rx(O,P,K),ze=new mx(Y),xe=new Yy(I,ue,ht,P,Re,ze),Be=new pv(I,Y),Me=new Jy,ye=new nv(ht),it=new hx(I,ue,b,ne,p,c),qe=new av(I,ne,P),re=new mv(O,W,P,b),ve=new dx(O,ht,W),ee=new wx(O,ht,W),W.programs=xe.programs,I.capabilities=P,I.extensions=ht,I.properties=Y,I.renderLists=Me,I.shadowMap=qe,I.state=b,I.info=W}_!==bn&&(w=new Ix(_,t.width,t.height,a,s,r));let Ue=new Ou(I,O);this.xr=Ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(ut,j,!1))},this.getSize=function(T){return T.set(ut,j)},this.setSize=function(T,B,J=!0){if(Ue.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=T,j=B,t.width=Math.floor(T*ie),t.height=Math.floor(B*ie),J===!0&&(t.style.width=T+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ut*ie,j*ie).floor()},this.setDrawingBufferSize=function(T,B,J){ut=T,j=B,ie=J,t.width=Math.floor(T*J),t.height=Math.floor(B*J),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(_===bn){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy($)},this.getViewport=function(T){return T.copy(Ce)},this.setViewport=function(T,B,J,X){T.isVector4?Ce.set(T.x,T.y,T.z,T.w):Ce.set(T,B,J,X),b.viewport($.copy(Ce).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Ke)},this.setScissor=function(T,B,J,X){T.isVector4?Ke.set(T.x,T.y,T.z,T.w):Ke.set(T,B,J,X),b.scissor(he.copy(Ke).multiplyScalar(ie).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(T){b.setScissorTest(vt=T)},this.setOpaqueSort=function(T){Ee=T},this.setTransparentSort=function(T){Je=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,J=!0){let X=0;if(T){let q=!1;if(Z!==null){let we=Z.texture.format;q=m.has(we)}if(q){let we=Z.texture.type,Ie=g.has(we),Te=it.getClearColor(),De=it.getClearAlpha(),Fe=Te.r,ot=Te.g,ft=Te.b;Ie?(v[0]=Fe,v[1]=ot,v[2]=ft,v[3]=De,O.clearBufferuiv(O.COLOR,0,v)):(E[0]=Fe,E[1]=ot,E[2]=ft,E[3]=De,O.clearBufferiv(O.COLOR,0,E))}else X|=O.COLOR_BUFFER_BIT}B&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),R=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),it.dispose(),Me.dispose(),ye.dispose(),Y.dispose(),ue.dispose(),ne.dispose(),Re.dispose(),re.dispose(),xe.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Lh),Ue.removeEventListener("sessionend",Dh),is.stop()};function Ct(T){T.preventDefault(),Ir("WebGLRenderer: Context Lost."),F=!0}function _t(){Ir("WebGLRenderer: Context Restored."),F=!1;let T=W.autoReset,B=qe.enabled,J=qe.autoUpdate,X=qe.needsUpdate,q=qe.type;Ve(),W.autoReset=T,qe.enabled=B,qe.autoUpdate=J,qe.needsUpdate=X,qe.type=q}function Hn(T){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ei(T){let B=T.target;B.removeEventListener("dispose",ei),Yp(B)}function Yp(T){$p(T),Y.remove(T)}function $p(T){let B=Y.get(T).programs;B!==void 0&&(B.forEach(function(J){xe.releaseProgram(J)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,J,X,q,we){B===null&&(B=Ge);let Ie=q.isMesh&&q.matrixWorld.determinantAffine()<0,Te=Kp(T,B,J,X,q);b.setMaterial(X,Ie);let De=J.index,Fe=1;if(X.wireframe===!0){if(De=Q.getWireframeAttribute(J),De===void 0)return;Fe=2}let ot=J.drawRange,ft=J.attributes.position,Ne=ot.start*Fe,xt=(ot.start+ot.count)*Fe;we!==null&&(Ne=Math.max(Ne,we.start*Fe),xt=Math.min(xt,(we.start+we.count)*Fe)),De!==null?(Ne=Math.max(Ne,0),xt=Math.min(xt,De.count)):ft!=null&&(Ne=Math.max(Ne,0),xt=Math.min(xt,ft.count));let qt=xt-Ne;if(qt<0||qt===1/0)return;Re.setup(q,X,Te,J,De);let Lt,Rt=ve;if(De!==null&&(Lt=me.get(De),Rt=ee,Rt.setIndex(Lt)),q.isMesh)X.wireframe===!0?(b.setLineWidth(X.wireframeLinewidth*tt()),Rt.setMode(O.LINES)):Rt.setMode(O.TRIANGLES);else if(q.isLine){let hn=X.linewidth;hn===void 0&&(hn=1),b.setLineWidth(hn*tt()),q.isLineSegments?Rt.setMode(O.LINES):q.isLineLoop?Rt.setMode(O.LINE_LOOP):Rt.setMode(O.LINE_STRIP)}else q.isPoints?Rt.setMode(O.POINTS):q.isSprite&&Rt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let hn=q._multiDrawStarts,Pe=q._multiDrawCounts,_n=q._multiDrawCount,pt=De?me.get(De).bytesPerElement:1,Un=Y.get(X).currentProgram.getUniforms();for(let ti=0;ti<_n;ti++)Un.setValue(O,"_gl_DrawID",ti),Rt.render(hn[ti]/pt,Pe[ti])}else if(q.isInstancedMesh)Rt.renderInstances(Ne,qt,q.count);else if(J.isInstancedBufferGeometry){let hn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Pe=Math.min(J.instanceCount,hn);Rt.renderInstances(Ne,qt,Pe)}else Rt.render(Ne,qt)};function Ih(T,B,J,X){R!==null&&T.isNodeMaterial&&R.setObject(X,T),ae===!0&&ze.setState(T,J,!1),T.transparent===!0&&T.side===Ut&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,wo(T,B,X),T.side=Yi,T.needsUpdate=!0,wo(T,B,X),T.side=Ut):wo(T,B,X)}this.compile=function(T,B,J=null){J===null&&(J=T),R!==null&&R.renderStart(T,B,J),S=ye.get(J),S.init(B),y.push(S),J.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),T!==J&&T.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),R!==null&&R.updateLights(S.state.lightsArray),ce=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,ce),ae===!0&&ze.setGlobalState(this.clippingPlanes,B),R!==null&&qe.render(S.state.shadowsArray,J,B);let X=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let we=q.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){let Te=we[Ie];Ih(Te,J,B,q),X.add(Te)}else Ih(we,J,B,q),X.add(we)}),S=y.pop(),R!==null&&R.renderEnd(),X},this.compileAsync=function(T,B,J=null){let X=this.compile(T,B,J);return new Promise(q=>{function we(){if(X.forEach(function(Ie){let De=Y.get(Ie).currentProgram;(De===void 0||De.isReady())&&X.delete(Ie)}),X.size===0){q(T);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let il=null;function Zp(T){il&&il(T)}function Lh(){is.stop()}function Dh(){is.start()}let is=new Od;is.setAnimationLoop(Zp),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(T){il=T,Ue.setAnimationLoop(T),T===null?is.stop():is.start()},Ue.addEventListener("sessionstart",Lh),Ue.addEventListener("sessionend",Dh),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;R!==null&&R.renderStart(T,B);let J=Ue.enabled===!0&&Ue.isPresenting===!0,X=w!==null&&(Z===null||J)&&w.begin(I,Z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(B),B=Ue.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,Z),S=ye.get(T,y.length),S.init(B),S.state.textureUnits=K.getTextureUnits(),y.push(S),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),se.setFromProjectionMatrix(le,Xn,B.reversedDepth),ce=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,ce),M=Me.get(T,A.length),M.init(),A.push(M),Ue.enabled===!0&&Ue.isPresenting===!0){let Ie=I.xr.getDepthSensingMesh();Ie!==null&&sl(Ie,B,-1/0,I.sortObjects)}sl(T,B,0,I.sortObjects),M.finish(),R!==null&&R.updateLights(S.state.lightsArray),I.sortObjects===!0&&M.sort(Ee,Je),je=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,je&&it.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&ze.beginShadows();let q=S.state.shadowsArray;if(qe.render(q,T,B),ae===!0&&ze.endShadows(),(X&&w.hasRenderPass())===!1){let Ie=M.opaque,Te=M.transmissive;if(S.setupLights(),B.isArrayCamera){let De=B.cameras;if(Te.length>0)for(let Fe=0,ot=De.length;Fe<ot;Fe++){let ft=De[Fe];Uh(Ie,Te,T,ft)}je&&it.render(T);for(let Fe=0,ot=De.length;Fe<ot;Fe++){let ft=De[Fe];Nh(M,T,ft,ft.viewport)}}else Te.length>0&&Uh(Ie,Te,T,B),je&&it.render(T),Nh(M,T,B)}Z!==null&&k===0&&(K.updateMultisampleRenderTarget(Z),K.updateRenderTargetMipmap(Z)),X&&w.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Re.resetDefaultState(),G=-1,V=null,y.pop(),y.length>0?(S=y[y.length-1],K.setTextureUnits(S.state.textureUnits),ae===!0&&ze.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,R!==null&&R.renderEnd()};function sl(T,B,J,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)S.pushLightProbeGrid(T);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(se)){X&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);let Ie=ne.update(T),Te=T.material;Te.visible&&M.push(T,Ie,Te,J,Xe.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(se))){let Ie=ne.update(T),Te=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Xe.copy(Ie.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(Te)){let De=Ie.groups;for(let Fe=0,ot=De.length;Fe<ot;Fe++){let ft=De[Fe],Ne=Te[ft.materialIndex];Ne&&Ne.visible&&M.push(T,Ie,Ne,J,Xe.z,ft,B)}}else Te.visible&&M.push(T,Ie,Te,J,Xe.z,null,B)}}let we=T.children;for(let Ie=0,Te=we.length;Ie<Te;Ie++)sl(we[Ie],B,J,X)}function Nh(T,B,J,X){let{opaque:q,transmissive:we,transparent:Ie}=T;S.setupLightsView(J),ae===!0&&ze.setGlobalState(I.clippingPlanes,J),X&&b.viewport($.copy(X)),q.length>0&&To(q,B,J),we.length>0&&To(we,B,J),Ie.length>0&&To(Ie,B,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Uh(T,B,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let Ne=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:Ne?jn:bn,minFilter:Zi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=S.state.transmissionRenderTarget[X.id],Ie=X.viewport||$;we.setSize(Ie.z*I.transmissionResolutionScale,Ie.w*I.transmissionResolutionScale);let Te=I.getRenderTarget(),De=I.getActiveCubeFace(),Fe=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(lt),Qe=I.getClearAlpha(),Qe<1&&I.setClearColor(16777215,.5),I.clear(),je&&it.render(J);let ot=I.toneMapping;I.toneMapping=Zn;let ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),ae===!0&&ze.setGlobalState(I.clippingPlanes,X),To(T,J,X),K.updateMultisampleRenderTarget(we),K.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let xt=0,qt=B.length;xt<qt;xt++){let Lt=B[xt],{object:Rt,geometry:hn,material:Pe,group:_n}=Lt;if(Pe.side===Ut&&Rt.layers.test(X.layers)){let pt=Pe.side;Pe.side=Zt,Pe.needsUpdate=!0,Fh(Rt,J,X,hn,Pe,_n),Pe.side=pt,Pe.needsUpdate=!0,Ne=!0}}Ne===!0&&(K.updateMultisampleRenderTarget(we),K.updateRenderTargetMipmap(we))}I.setRenderTarget(Te,De,Fe),I.setClearColor(lt,Qe),ft!==void 0&&(X.viewport=ft),I.toneMapping=ot}function To(T,B,J){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,we=T.length;q<we;q++){let Ie=T[q],{object:Te,geometry:De,group:Fe}=Ie,ot=Ie.material;ot.allowOverride===!0&&X!==null&&(ot=X),Te.layers.test(J.layers)&&Fh(Te,B,J,De,ot,Fe)}}function Fh(T,B,J,X,q,we){R!==null&&q.isNodeMaterial&&R.setObject(T,q),T.onBeforeRender(I,B,J,X,q,we),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(I,B,J,X,T,we),q.transparent===!0&&q.side===Ut&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,I.renderBufferDirect(J,B,X,q,T,we),q.side=Yi,q.needsUpdate=!0,I.renderBufferDirect(J,B,X,q,T,we),q.side=Ut):I.renderBufferDirect(J,B,X,q,T,we),T.onAfterRender(I,B,J,X,q,we)}function wo(T,B,J){B.isScene!==!0&&(B=Ge);let X=Y.get(T),q=S.state.lights,we=S.state.shadowsArray,Ie=q.state.version,Te=xe.getParameters(T,q.state,we,B,J,S.state.lightProbeGridArray),De=xe.getProgramCacheKey(Te),Fe=X.programs;X.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;X.envMap=ue.get(T.envMap||X.environment,ot),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",ei),Fe=new Map,X.programs=Fe);let ft=Fe.get(De);if(ft!==void 0){if(X.currentProgram===ft&&X.lightsStateVersion===Ie)return Bh(T,Te),ft}else Te.uniforms=xe.getUniforms(T),R!==null&&T.isNodeMaterial&&R.build(T,J,Te),T.onBeforeCompile(Te,I),ft=xe.acquireProgram(Te,De),Fe.set(De,ft),X.uniforms=Te.uniforms;let Ne=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),Bh(T,Te),X.needsLights=Qp(T),X.lightsStateVersion=Ie,X.needsLights&&(Ne.ambientLightColor.value=q.state.ambient,Ne.lightProbe.value=q.state.probe,Ne.sunLights.value=q.state.sun,Ne.sunLightShadows.value=q.state.sunShadow,Ne.directionalLights.value=q.state.directional,Ne.directionalLightShadows.value=q.state.directionalShadow,Ne.spotLights.value=q.state.spot,Ne.spotLightShadows.value=q.state.spotShadow,Ne.rectAreaLights.value=q.state.rectArea,Ne.ltc_1.value=q.state.rectAreaLTC1,Ne.ltc_2.value=q.state.rectAreaLTC2,Ne.pointLights.value=q.state.point,Ne.pointLightShadows.value=q.state.pointShadow,Ne.hemisphereLights.value=q.state.hemi,Ne.sunShadowMatrix.value=q.state.sunShadowMatrix,Ne.sunShadowCascade.value=q.state.sunShadowCascade,Ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ne.spotLightMatrix.value=q.state.spotLightMatrix,Ne.spotLightMap.value=q.state.spotLightMap,Ne.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=ft,X.uniformsList=null,ft}function Oh(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=cr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Bh(T,B){let J=Y.get(T);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Jp(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let J=0,X=T.length;J<X;J++){let q=T[J];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function Kp(T,B,J,X,q){B.isScene!==!0&&(B=Ge),K.resetTextureUnits();let we=B.fog,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Te=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:dt.workingColorSpace,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Fe=ue.get(X.envMap||Ie,De),ot=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ft=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,qt=!!J.morphAttributes.color,Lt=Zn;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Lt=I.toneMapping);let Rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,hn=Rt!==void 0?Rt.length:0,Pe=Y.get(X),_n=S.state.lights;if(ae===!0&&(ce===!0||T!==V)){let Pt=T===V&&X.id===G;ze.setState(X,T,Pt)}let pt=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==_n.state.version||Pe.outputColorSpace!==Te||q.isBatchedMesh&&Pe.batching===!1||!q.isBatchedMesh&&Pe.batching===!0||q.isBatchedMesh&&Pe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Pe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Pe.instancing===!1||!q.isInstancedMesh&&Pe.instancing===!0||q.isSkinnedMesh&&Pe.skinning===!1||!q.isSkinnedMesh&&Pe.skinning===!0||q.isInstancedMesh&&Pe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Pe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Pe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Pe.instancingMorph===!1&&q.morphTexture!==null||Pe.envMap!==Fe||X.fog===!0&&Pe.fog!==we||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ze.numPlanes||Pe.numIntersection!==ze.numIntersection)||Pe.vertexAlphas!==ot||Pe.vertexTangents!==ft||Pe.morphTargets!==Ne||Pe.morphNormals!==xt||Pe.morphColors!==qt||Pe.toneMapping!==Lt||Pe.morphTargetsCount!==hn||!!Pe.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Pe.__version=X.version);let Un=Pe.currentProgram;pt===!0&&(Un=wo(X,B,q),R&&X.isNodeMaterial&&R.onUpdateProgram(X,Un,Pe));let ti=!1,Di=!1,bs=!1,wt=Un.getUniforms(),Wt=Pe.uniforms;if(b.useProgram(Un.program)&&(ti=!0,Di=!0,bs=!0),X.id!==G&&(G=X.id,Di=!0),Pe.needsLights){let Pt=Jp(S.state.lightProbeGridArray,q);Pe.lightProbeGrid!==Pt&&(Pe.lightProbeGrid=Pt,Di=!0)}if(ti||V!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),wt.setValue(O,"projectionMatrix",T.projectionMatrix),wt.setValue(O,"viewMatrix",T.matrixWorldInverse);let Ui=wt.map.cameraPosition;Ui!==void 0&&Ui.setValue(O,ge.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,Di=!0,bs=!0)}if(Pe.needsLights&&(_n.state.sunShadowMap.length>0&&wt.setValue(O,"sunShadowMap",_n.state.sunShadowMap,K),_n.state.directionalShadowMap.length>0&&wt.setValue(O,"directionalShadowMap",_n.state.directionalShadowMap,K),_n.state.spotShadowMap.length>0&&wt.setValue(O,"spotShadowMap",_n.state.spotShadowMap,K),_n.state.pointShadowMap.length>0&&wt.setValue(O,"pointShadowMap",_n.state.pointShadowMap,K)),q.isSkinnedMesh){wt.setOptional(O,q,"bindMatrix"),wt.setOptional(O,q,"bindMatrixInverse");let Pt=q.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),wt.setValue(O,"boneTexture",Pt.boneTexture,K))}q.isBatchedMesh&&(wt.setOptional(O,q,"batchingTexture"),wt.setValue(O,"batchingTexture",q._matricesTexture,K),wt.setOptional(O,q,"batchingIdTexture"),wt.setValue(O,"batchingIdTexture",q._indirectTexture,K),wt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",q._colorsTexture,K));let Ni=J.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&z.update(q,J,Un),(Di||Pe.receiveShadow!==q.receiveShadow)&&(Pe.receiveShadow=q.receiveShadow,wt.setValue(O,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Wt.envMapIntensity.value=B.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=_v()),Di){if(wt.setValue(O,"toneMappingExposure",I.toneMappingExposure),Pe.needsLights&&jp(Wt,bs),we&&X.fog===!0&&Be.refreshFogUniforms(Wt,we),Be.refreshMaterialUniforms(Wt,X,ie,j,S.state.transmissionRenderTarget[T.id]),Pe.needsLights&&Pe.lightProbeGrid){let Pt=Pe.lightProbeGrid;Wt.probesSH.value=Pt.texture,Wt.probesMin.value.copy(Pt.boundingBox.min),Wt.probesMax.value.copy(Pt.boundingBox.max),Wt.probesResolution.value.copy(Pt.resolution)}cr.upload(O,Oh(Pe),Wt,K)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cr.upload(O,Oh(Pe),Wt,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(O,"center",q.center),wt.setValue(O,"modelViewMatrix",q.modelViewMatrix),wt.setValue(O,"normalMatrix",q.normalMatrix),wt.setValue(O,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Pt=X.uniformsGroups;for(let Ui=0,Ms=Pt.length;Ui<Ms;Ui++){let Hh=Pt[Ui];re.update(Hh,Un),re.bind(Hh,Un)}}return Un}function jp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Qp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(T,B,J){let X=Y.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=B,Y.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let J=Y.get(T);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,J=0){Z=T,H=B,k=J;let X=null,q=!1,we=!1;if(T){let Te=Y.get(T);if(Te.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(O.FRAMEBUFFER,Te.__webglFramebuffer),$.copy(T.viewport),he.copy(T.scissor),de=T.scissorTest,b.viewport($),b.scissor(he),b.setScissorTest(de),G=-1;return}else if(Te.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(Te.__hasExternalTextures)K.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ot=T.depthTexture;if(Te.__boundDepthTexture!==ot){if(ot!==null&&Y.has(ot)&&(T.width!==ot.image.width||T.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);let Fe=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?X=Fe[B][J]:X=Fe[B],q=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?X=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[J]:X=Fe,$.copy(T.viewport),he.copy(T.scissor),de=T.scissorTest}else $.copy(Ce).multiplyScalar(ie).floor(),he.copy(Ke).multiplyScalar(ie).floor(),de=vt;if(J!==0&&(X=N),b.bindFramebuffer(O.FRAMEBUFFER,X)&&b.drawBuffers(T,X),b.viewport($),b.scissor(he),b.setScissorTest(de),q){let Te=Y.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,J)}else if(we){let Te=B;for(let De=0;De<T.textures.length;De++){let Fe=Y.get(T.textures[De]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+De,Fe.__webglTexture,J,Te)}}else if(T!==null&&J!==0){let Te=Y.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Te.__webglTexture,J)}G=-1};function zh(T){let B=Y.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=P.textureFormatReadable(T.format),B.__typeReadable=P.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,J,X,q,we,Ie,Te=0){if(!(T&&T.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){b.bindFramebuffer(O.FRAMEBUFFER,De);try{let Fe=T.textures[Te],ot=Fe.format,ft=Fe.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te);let Ne=zh(Fe);if(Ne.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&J>=0&&J<=T.height-q&&O.readPixels(B,J,X,q,be.convert(ot),be.convert(ft),we)}finally{let Fe=Z!==null?Y.get(Z).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,B,J,X,q,we,Ie,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(B>=0&&B<=T.width-X&&J>=0&&J<=T.height-q){b.bindFramebuffer(O.FRAMEBUFFER,De);let Fe=T.textures[Te],ot=Fe.format,ft=Fe.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Te);let Ne=zh(Fe);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),O.readPixels(B,J,X,q,be.convert(ot),be.convert(ft),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let qt=Z!==null?Y.get(Z).__webglFramebuffer:null;b.bindFramebuffer(O.FRAMEBUFFER,qt);let Lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await rd(O,Lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,xt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(xt),O.deleteSync(Lt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,J=0){let X=Math.pow(2,-J),q=Math.floor(T.image.width*X),we=Math.floor(T.image.height*X),Ie=B!==null?B.x:0,Te=B!==null?B.y:0;K.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Ie,Te,q,we),b.unbindTexture()},this.copyTextureToTexture=function(T,B,J=null,X=null,q=0,we=0){let Ie,Te,De,Fe,ot,ft,Ne,xt,qt,Lt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(J!==null)Ie=J.max.x-J.min.x,Te=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,ot=J.min.y,ft=J.isBox3?J.min.z:0;else{let Wt=Math.pow(2,-q);Ie=Math.floor(Lt.width*Wt),Te=Math.floor(Lt.height*Wt),T.isDataArrayTexture?De=Lt.depth:T.isData3DTexture?De=Math.floor(Lt.depth*Wt):De=1,Fe=0,ot=0,ft=0}X!==null?(Ne=X.x,xt=X.y,qt=X.z):(Ne=0,xt=0,qt=0);let Rt=be.convert(B.format),hn=be.convert(B.type),Pe;B.isData3DTexture?(K.setTexture3D(B,0),Pe=O.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),Pe=O.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),Pe=O.TEXTURE_2D),b.activeTexture(O.TEXTURE0),b.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment);let _n=b.getParameter(O.UNPACK_ROW_LENGTH),pt=b.getParameter(O.UNPACK_IMAGE_HEIGHT),Un=b.getParameter(O.UNPACK_SKIP_PIXELS),ti=b.getParameter(O.UNPACK_SKIP_ROWS),Di=b.getParameter(O.UNPACK_SKIP_IMAGES);b.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),b.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(O.UNPACK_SKIP_ROWS,ot),b.pixelStorei(O.UNPACK_SKIP_IMAGES,ft);let bs=T.isDataArrayTexture||T.isData3DTexture,wt=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Wt=Y.get(T),Ni=Y.get(B),Pt=Y.get(Wt.__renderTarget),Ui=Y.get(Ni.__renderTarget);b.bindFramebuffer(O.READ_FRAMEBUFFER,Pt.__webglFramebuffer),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Ms=0;Ms<De;Ms++)bs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,q,ft+Ms),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,we,qt+Ms)),O.blitFramebuffer(Fe,ot,Ie,Te,Ne,xt,Ie,Te,O.DEPTH_BUFFER_BIT,O.NEAREST);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||Y.has(T)){let Wt=Y.get(T),Ni=Y.get(B);b.bindFramebuffer(O.READ_FRAMEBUFFER,D),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let Pt=0;Pt<De;Pt++)bs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Wt.__webglTexture,q,ft+Pt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Wt.__webglTexture,q),wt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ni.__webglTexture,we,qt+Pt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ni.__webglTexture,we),q!==0?O.blitFramebuffer(Fe,ot,Ie,Te,Ne,xt,Ie,Te,O.COLOR_BUFFER_BIT,O.NEAREST):wt?O.copyTexSubImage3D(Pe,we,Ne,xt,qt+Pt,Fe,ot,Ie,Te):O.copyTexSubImage2D(Pe,we,Ne,xt,Fe,ot,Ie,Te);b.bindFramebuffer(O.READ_FRAMEBUFFER,null),b.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else wt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Pe,we,Ne,xt,qt,Ie,Te,De,Rt,hn,Lt.data):B.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,we,Ne,xt,qt,Ie,Te,De,Rt,Lt.data):O.texSubImage3D(Pe,we,Ne,xt,qt,Ie,Te,De,Rt,hn,Lt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,Ne,xt,Ie,Te,Rt,hn,Lt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,Ne,xt,Lt.width,Lt.height,Rt,Lt.data):O.texSubImage2D(O.TEXTURE_2D,we,Ne,xt,Ie,Te,Rt,hn,Lt);b.pixelStorei(O.UNPACK_ROW_LENGTH,_n),b.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(O.UNPACK_SKIP_PIXELS,Un),b.pixelStorei(O.UNPACK_SKIP_ROWS,ti),b.pixelStorei(O.UNPACK_SKIP_IMAGES,Di),we===0&&B.generateMipmaps&&O.generateMipmap(Pe),b.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){H=0,k=0,Z=null,b.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var fh={};ni(fh,{CATALOGUE:()=>Gb,COULEURS:()=>Uc,MEUBLES:()=>kc,THEMES:()=>Mo,allumer:()=>ch,animerLaveLinge:()=>rh,boiteEnglobante:()=>Wu,compterTriangles:()=>Bc,creerMeuble:()=>Wb,etatLaveLinge:()=>sh,eteindre:()=>lh,fusionner:()=>bo,liberer:()=>Xb,statsMateriaux:()=>$d,viderCache:()=>qb});var Zu={};ni(Zu,{bibliotheque:()=>Vv,buffet:()=>Xv,canape:()=>Ov,canape_angle:()=>Bv,chaise:()=>np,fauteuil:()=>zv,meuble_tv:()=>kv,table_basse:()=>Hv,table_manger:()=>Wv,tapis:()=>Gv,tv:()=>tp});var Uc={bois_clair:"#dcbb92",bois_miel:"#c79462",bois_noyer:"#8d603e",bois_blanchi:"#ebe0cf",blanc:"#f2efe9",blanc_pur:"#fafaf8",creme:"#efe5d3",gris_clair:"#d3d1cc",gris:"#9e9c97",gris_chaud:"#b8b0a5",anthracite:"#45484c",noir:"#242527",beige:"#d5c5aa",lin:"#e8dfcf",sauge:"#9fb18e",sauge_fonce:"#6e8562",terracotta:"#c8714f",moutarde:"#e2b14b",bleu_ciel:"#8fc4e4",bleu_canard:"#2f6f7a",marine:"#2f4565",rose:"#f2abb8",menthe:"#a5dcc6",corail:"#f08b6b",lavande:"#b8a7dd",feuillage:"#5e8f4b",feuillage_fonce:"#3e6c3c",feuillage_clair:"#86b562",terre_cuite:"#bb6741"},Gt=i=>typeof i=="string"&&Uc[i]?Uc[i]:i,Bu=new Map,Hu=i=>()=>(i=i*16807%2147483647)/2147483647;function xv(i,e){if(!globalThis.document&&typeof OffscreenCanvas>"u")return null;let t=globalThis.document?document.createElement("canvas"):new OffscreenCanvas(i,e);return t.width=i,t.height=e,t}function ji(i,e,t,n,{repeat:s=1,srgb:r=!0}={}){let o=Bu.get(i);if(o)return o;let a=xv(e,t);return a?(n(a.getContext("2d"),e,t),o=new li(a),o.wrapS=o.wrapT=Si,o.repeat.set(s,s),r&&(o.colorSpace=It),o.anisotropy=2,o.userData.partage=!0,Bu.set(i,o),o):null}var yv=()=>ji("bois",256,256,(i,e,t)=>{let n=Hu(7);i.fillStyle="#f2f2f2",i.fillRect(0,0,e,t);for(let s=0;s<90;s++){let r=n()*t,o=1+n()*2.5,a=1+Math.floor(n()*2),c=n()*6.28;i.strokeStyle=`rgba(${n()<.6?"120,90,60":"255,255,255"},${.03+n()*.06})`,i.lineWidth=.5+n()*1.6,i.beginPath();for(let l=0;l<=e;l+=8){let u=r+Math.sin(l/e*6.283*a+c)*o;l===0?i.moveTo(l,u):i.lineTo(l,u)}i.stroke()}},{repeat:2.5}),vv=()=>ji("tissu",128,128,(i,e,t)=>{let n=Hu(11);i.fillStyle="#f0f0f0",i.fillRect(0,0,e,t);for(let s=0;s<t;s+=2)i.fillStyle=`rgba(0,0,0,${.03+n()*.03})`,i.fillRect(0,s,e,1);for(let s=0;s<e;s+=2)i.fillStyle=`rgba(255,255,255,${.03+n()*.05})`,i.fillRect(s,0,1,t);for(let s=0;s<900;s++)i.fillStyle=`rgba(${n()<.5?"0,0,0":"255,255,255"},${n()*.08})`,i.fillRect(n()*e,n()*t,1+n()*2,1)},{repeat:4}),bv=()=>ji("carrelage",256,256,(i,e,t)=>{let n=Hu(3);i.fillStyle="#c9c6c0",i.fillRect(0,0,e,t);let s=4,r=e/s;for(let o=0;o<s;o++)for(let a=0;a<s;a++){let c=240+Math.floor(n()*12);i.fillStyle=`rgb(${c},${c},${c-3})`,i.fillRect(o*r+2,a*r+2,r-4,r-4)}},{repeat:1/.6});function Mv(i="pois",e="#8fc4e4",t="#fafaf8"){return e=Gt(e),t=Gt(t),ji(`motif_${i}_${e}_${t}`,128,128,(n,s,r)=>{if(n.fillStyle=e,n.fillRect(0,0,s,r),n.fillStyle=t,n.strokeStyle=t,i==="pois")for(let o=0;o<4;o++)for(let a=0;a<4;a++)n.beginPath(),n.arc(o*32+a%2*16+8,a*32+16,5,0,6.283),n.fill();else if(i==="etoiles"){let o=(a,c,l)=>{n.beginPath();for(let u=0;u<10;u++){let h=u*Math.PI/5-Math.PI/2,f=u%2?l*.45:l;n.lineTo(a+Math.cos(h)*f,c+Math.sin(h)*f)}n.fill()};for(let[a,c,l]of[[20,22,10],[84,14,7],[60,60,12],[110,70,8],[24,100,8],[90,110,10]])o(a,c,l)}else if(i==="rayures")for(let o=0;o<s;o+=32)n.fillRect(o,0,14,r);else if(i==="carreaux"){n.globalAlpha=.55;for(let o=0;o<s;o+=32)n.fillRect(o,0,12,r);for(let o=0;o<r;o+=32)n.fillRect(0,o,s,12);n.globalAlpha=1}else if(i==="vagues"){n.lineWidth=5;for(let o=12;o<r;o+=32){n.beginPath();for(let a=0;a<=s;a+=4)n.lineTo(a,o+Math.sin(a/s*6.283*2)*6);n.stroke()}}},{repeat:3})}function Sv(i="montagne"){return ji(`affiche_${i}`,128,160,(e,t,n)=>{let s=a=>{e.fillStyle=a,e.fillRect(0,0,t,n)},r=(a,c,l,u)=>{e.fillStyle=u,e.beginPath(),e.arc(a,c,l,0,6.283),e.fill()},o=(a,c)=>{e.fillStyle=c,e.beginPath(),a.forEach(([l,u])=>e.lineTo(l,u)),e.fill()};switch(i){case"arc_en_ciel":{s("#f7efe2"),["#e98a6c","#f0b75a","#9fc59a","#86b8d8"].forEach((c,l)=>{e.strokeStyle=c,e.lineWidth=11,e.beginPath(),e.arc(64,112,50-l*12,Math.PI,0),e.stroke()}),r(30,40,9,"#f2c14e");break}case"fusee":{s("#2f4565");for(let a=0;a<26;a++)r(a*53%128,a*37%160,1.4,"#fdf3c4");o([[64,22],[80,62],[80,110],[48,110],[48,62]],"#f2efe9"),r(64,70,8,"#8fc4e4"),o([[48,92],[34,118],[48,110]],"#e8735a"),o([[80,92],[94,118],[80,110]],"#e8735a"),o([[54,110],[64,140],[74,110]],"#f2b84b");break}case"baleine":{s("#dff0f3"),e.fillStyle="#86b8d8",e.fillRect(0,108,t,52),e.beginPath(),e.ellipse(62,86,40,24,0,0,6.283),e.fillStyle="#2f6f7a",e.fill(),o([[98,80],[120,62],[116,92]],"#2f6f7a"),r(42,80,3,"#fafaf8"),e.strokeStyle="#5fa3c4",e.lineWidth=3,e.beginPath(),e.moveTo(58,60),e.quadraticCurveTo(52,40,44,36),e.moveTo(58,60),e.quadraticCurveTo(64,40,72,36),e.stroke();break}case"abstrait":{s("#efe6d6"),r(44,54,30,"#c8714f"),e.fillStyle="#9fb18e",e.fillRect(58,70,50,70),r(86,40,14,"#e2b14b"),e.strokeStyle="#45484c",e.lineWidth=3,e.beginPath(),e.moveTo(14,120),e.quadraticCurveTo(50,90,70,132),e.stroke();break}case"feuille":{s("#f4efe6"),e.fillStyle="#6e8562",e.beginPath(),e.ellipse(64,80,30,58,.3,0,6.283),e.fill(),e.strokeStyle="#f4efe6",e.lineWidth=2.5,e.beginPath(),e.moveTo(46,132),e.lineTo(82,28),e.stroke();for(let a=0;a<6;a++)e.beginPath(),e.moveTo(52+a*5.5,115-a*16),e.lineTo(38+a*5,100-a*15),e.moveTo(52+a*5.5,115-a*16),e.lineTo(76+a*4,112-a*17),e.stroke();break}default:{let a=e.createLinearGradient(0,0,0,n);a.addColorStop(0,"#f6d9b8"),a.addColorStop(1,"#f3b99a"),e.fillStyle=a,e.fillRect(0,0,t,n),r(84,58,18,"#f7f0e2"),o([[0,130],[40,66],[70,110],[96,78],[128,124],[128,160],[0,160]],"#6e8562"),o([[0,146],[30,112],[64,140],[100,108],[128,140],[128,160],[0,160]],"#3e6c3c")}}},{repeat:1})}var Ev=()=>ji("ombre",64,64,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.55,"rgba(0,0,0,0.32)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{srgb:!1}),Tv=()=>ji("halo",64,64,(i,e)=>{let t=i.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,e,e)},{srgb:!1}),wv=(i="#f1ebdd")=>ji(`filet_${i}`,64,64,(e,t)=>{e.clearRect(0,0,t,t),e.strokeStyle=i,e.lineWidth=5,e.lineCap="round",e.beginPath(),e.moveTo(0,0),e.lineTo(t,t),e.moveTo(t,0),e.lineTo(0,t),e.stroke(),e.fillStyle=i;for(let[n,s]of[[0,0],[t,0],[0,t],[t,t],[t/2,t/2]])e.beginPath(),e.arc(n,s,4.5,0,6.283),e.fill()},{repeat:1}),zu=new Map;function Mn(i,e){let t=zu.get(i);return t||(t=e(),t.name=i,t.userData.partage=!0,zu.set(i,t)),t}var Dn=(i,e={})=>new Vt({color:new Oe(Gt(i)),roughness:.8,metalness:0,...e}),He=(i="bois_clair")=>Mn(`bois_${i}`,()=>Dn(i,{map:yv(),roughness:.68})),Ze=(i="beige")=>Mn(`tissu_${i}`,()=>Dn(i,{map:vv(),roughness:.96})),_e=(i="blanc")=>Mn(`mat_${i}`,()=>Dn(i,{roughness:.85})),$e=(i="blanc")=>Mn(`laque_${i}`,()=>Dn(i,{roughness:.4})),ke=(i="#c9ccce")=>Mn(`metal_${i}`,()=>Dn(i,{roughness:.35,metalness:.45})),cn=(i="blanc_pur")=>Mn(`ceramique_${i}`,()=>Dn(i,{roughness:.22})),Wd=(i="#ffffff")=>Mn(`carrelage_${i}`,()=>Dn(i,{map:bv(),roughness:.35})),yo=(i,e,t)=>Mn(`motif_${i}_${Gt(e)}_${Gt(t)}`,()=>Dn("#ffffff",{map:Mv(i,e,t),roughness:.95})),Xd=i=>Mn(`affiche_${i}`,()=>Dn("#ffffff",{map:Sv(i),roughness:.7})),Qi=(i="feuillage")=>Mn(`feuille_${i}`,()=>Dn(i,{roughness:.75,flatShading:!0})),sn=(i="#d4e9ef",e=.28)=>Mn(`verre_${i}_${e}`,()=>Dn(i,{roughness:.05,transparent:!0,opacity:e,depthWrite:!1,side:Ut}));var ku=()=>Mn("miroir",()=>Dn("#cfdde2",{roughness:.08,metalness:.35})),mi=()=>ke("#dfe3e6"),qd=()=>Mn("ombre",()=>new Cn({map:Ev(),transparent:!0,depthWrite:!1,color:0,opacity:1,toneMapped:!1})),Yd=(i="#f1ebdd")=>Mn(`filet_${i}`,()=>new Vt({map:wv(i),transparent:!0,alphaTest:.08,side:Ut,roughness:.9,depthWrite:!1}));function oe(i,e,t){return i&&i.isMaterial?i:e(i??t)}function Sn(i="#f6f0e2",{roughness:e=.5}={}){let t=Dn(i,{roughness:e,emissive:new Oe(0),emissiveIntensity:0});return t.userData.propre=!0,t.userData.couleurBase=Gt(i),t}function Fc(){let i=new Zs({map:Tv(),color:16767392,transparent:!0,opacity:0,depthWrite:!1,blending:ds});return i.userData.propre=!0,i}function $d(){return{materiaux:zu.size,textures:Bu.size}}var vo=new L;function Bn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;vo.copy(e),vo[n]=0,vo.normalize();let l=.5*o/(o+a),u=1-vo.angleTo(i)/c;return Math.sign(vo[t])===1?u*l:a/(o+a)+l+l*(1-u)}var Oc=class i extends Mt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new L,l=new L,u=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new L,m=.5/o;for(let g=0,v=0;g<h.length;g+=3,v+=2)switch(c.fromArray(h,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[g+0]=u.x*Math.sign(c.x)+l.x*r,h[g+1]=u.y*Math.sign(c.y)+l.y*r,h[g+2]=u.z*Math.sign(c.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[v+0]=Bn(_,l,"z","y",r,n),d[v+1]=1-Bn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[v+0]=1-Bn(_,l,"z","y",r,n),d[v+1]=1-Bn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[v+0]=1-Bn(_,l,"x","z",r,e),d[v+1]=Bn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[v+0]=1-Bn(_,l,"x","z",r,e),d[v+1]=1-Bn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[v+0]=1-Bn(_,l,"x","y",r,e),d[v+1]=1-Bn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[v+0]=Bn(_,l,"x","y",r,e),d[v+1]=1-Bn(_,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function ln(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Nt,l=0;for(let u=0;u<i.length;++u){let h=i[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Zd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let p=Zd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Zd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new kt(o,t,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let _=u.getComponent(f,p);a.setComponent(f+h,p,_)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var Jd=new Map,un=i=>Math.round(i*1e3);function Av(i){let e=i.attributes.position,t=i.attributes.normal;if(!e||!t)return i;let n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++){let r=Math.abs(t.getX(s)),o=Math.abs(t.getY(s)),a=Math.abs(t.getZ(s)),c,l;o>=r&&o>=a?(c=e.getX(s),l=e.getZ(s)):r>=a?(c=e.getZ(s),l=e.getY(s)):(c=e.getX(s),l=e.getY(s)),n[s*2]=c,n[s*2+1]=l}return i.setAttribute("uv",new kt(n,2)),i}function At(i,e,{metrique:t=!0}={}){let n=Jd.get(i);return n||(n=e(),t&&Av(n),n.userData.partage=!0,Jd.set(i,n)),n}var Gu=(i,e,t,n=0,s=1)=>n>5e-4?At(`rb_${un(i)}_${un(e)}_${un(t)}_${un(n)}_${s}`,()=>new Oc(i,e,t,s,Math.min(n,i/2-1e-4,e/2-1e-4,t/2-1e-4))):At(`b_${un(i)}_${un(e)}_${un(t)}`,()=>new Mt(i,e,t)),rn=(i,e,t,n=12,s=!1)=>At(`c_${un(i)}_${un(e)}_${un(t)}_${n}_${s?1:0}`,()=>new ui(i,e,t,n,1,s)),St=(i,e=10,t=7)=>At(`s_${un(i)}_${e}_${t}`,()=>new Ai(i,e,t)),Li=(i,e=0)=>At(`i_${un(i)}_${e}`,()=>new Jr(i,e)),Nn=(i,e,t=6,n=20,s=Math.PI*2)=>At(`t_${un(i)}_${un(e)}_${t}_${n}_${un(s)}`,()=>new Ri(i,e,t,n,s)),Kd=(i,e,t=!1)=>At(`p_${un(i)}_${un(e)}_${t?1:0}`,()=>new nn(i,e),{metrique:t}),$t=(i,e,t=14)=>At(`l_${i}_${t}`,()=>{let n=e[0][1]>e[e.length-1][1]?[...e].reverse():e;return new Kr(n.map(([s,r])=>new te(s,r)),t)});function fe(i,e,t,n=0,s=0,r=0,o={}){let a=new Le(e,t);return a.position.set(n,s,r),o.rx&&(a.rotation.x=o.rx),o.ry&&(a.rotation.y=o.ry),o.rz&&(a.rotation.z=o.rz),(o.sx||o.sy||o.sz)&&a.scale.set(o.sx??1,o.sy??1,o.sz??1),o.nom&&(a.name=o.nom),i.add(a),a}function C(i,e,t,n,s,r=0,o=0,a=0,c={}){return fe(i,Gu(e,t,n,c.r||0,c.s||1),s,r,o+t/2,a,c)}function pe(i,e,t,n,s=0,r=0,o=0,a={}){let c=rn(e,a.rb??e,t,a.seg||12,a.ouvert);return a.axe==="x"?fe(i,c,n,s,r,o,{...a,rz:Math.PI/2}):a.axe==="z"?fe(i,c,n,s,r,o,{...a,rx:Math.PI/2}):fe(i,c,n,s,r+t/2,o,a)}function ct(i,e,t,n,s,r=6){let o=new L(...e),a=new L(...t),c=a.clone().sub(o),l=new Le(rn(n,n,c.length(),r),s);return l.position.copy(o).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new L(0,1,0),c.normalize()),i.add(l),l}function Ae(i,e,t={}){let n=new rt;return n.name=i,n.userData={type:i,dimensions:e,...t},n}var Vu=new Set(["ampoule","halo","tambour","hublot","voyant","afficheur","ecran","vantail","maillage","ombre_contact","robot"]);function Rv(i,e){for(let t=i;t&&t!==e;t=t.parent)if(Vu.has(t.name))return!0;return!1}function bo(i){let e=[];i.traverse(o=>o!==i&&!o.isMesh&&!o.isSprite&&Vu.has(o.name)&&e.push(o));for(let o of e)bo(o);i.updateMatrixWorld(!0);let t=i.matrixWorld.clone().invert(),n=new Map,s=[];i.traverse(o=>{if(!o.isMesh||Rv(o,i)||o.material.userData.propre)return;let a=new mt().multiplyMatrices(t,o.matrixWorld),c=o.geometry.clone().applyMatrix4(a);if(a.determinant()<0){c=c.index?c.toNonIndexed():c;let l=c.attributes.position;for(let u=0;u<l.count;u+=3)for(let h of Object.values(c.attributes))for(let f=0;f<h.itemSize;f++){let d=h.array[(u+1)*h.itemSize+f];h.array[(u+1)*h.itemSize+f]=h.array[(u+2)*h.itemSize+f],h.array[(u+2)*h.itemSize+f]=d}}n.has(o.material)||n.set(o.material,[]),n.get(o.material).push(c),s.push(o)});for(let o of s)o.parent.remove(o);let r=[];i.traverse(o=>o!==i&&!Vu.has(o.name)&&!o.isMesh&&!o.isSprite&&o.children.length===0&&r.push(o)),r.forEach(o=>o.parent&&o.parent.remove(o));for(let[o,a]of n){let c=a.every(f=>f.index),l=a.map(f=>{let d=c?f:f.index?f.toNonIndexed():f;for(let p of Object.keys(d.attributes))["position","normal","uv"].includes(p)||d.deleteAttribute(p);return d}),u=ln(l,!1);if(!u)continue;let h=new Le(u,o);h.userData.fusion=!0,i.add(h)}return i}var Cv=()=>At("ombre",()=>new nn(1,1).rotateX(-Math.PI/2),{metrique:!1});function Wu(i){i.updateMatrixWorld(!0);let e=new Xt,t=new Xt;return i.traverse(n=>{!n.isMesh||n.name==="ombre_contact"||(n.geometry.boundingBox||n.geometry.computeBoundingBox(),t.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld),e.union(t))}),e}function jd(i,e=1.25){let t=Wu(i);if(t.isEmpty())return;let n=new Le(Cv(),qd()),s=(t.max.x-t.min.x)*e+.12,r=(t.max.z-t.min.z)*e+.12;n.scale.set(s,1,r),n.position.set((t.min.x+t.max.x)/2,.004,(t.min.z+t.max.z)/2),n.name="ombre_contact",n.renderOrder=-1,i.add(n)}function Bc(i){let e=0;return i.traverse(t=>{if(!t.isMesh||!t.visible)return;let n=t.geometry;e+=(n.index?n.index.count:n.attributes.position.count)/3}),Math.round(e)}var xs=i=>i*Math.PI/180;var Yu={};ni(Yu,{cadre:()=>qu,coussin:()=>Pv,coussinMesh:()=>es,horloge:()=>Dv,petit_tapis:()=>Fv,plante:()=>zn,rideaux:()=>Nv,vase:()=>ts});function es(i,e,t,n,s,r,o={}){let a=o.epaisseur??e*.3;return fe(i,Gu(e,e,a,a*.48,2),t,n,s+e/2,r,o)}function Pv(i={}){let{taille:e=.45,couleur:t="terracotta",motif:n=null,fond:s,trace:r}=i,o=Ae("coussin",[e,e,e*.3],{fixation:"pose"}),a=n?yo(n,s??t,r??"blanc_pur"):oe(t,Ze);return es(o,e,a,0,0,0,{rx:-.12}),o}var Iv={mini:.22,petite:.45,moyenne:.85,grande:1.5},Qd={terre_cuite:()=>cn("terre_cuite"),blanc:()=>cn("blanc"),sauge:()=>cn("sauge"),anthracite:()=>cn("anthracite"),osier:()=>He("bois_miel")};function zn(i={}){let{taille:e="moyenne",espece:t=e==="grande"?"ficus":e==="mini"?"touffe":"monstera",pot:n=e==="grande"?"osier":"terre_cuite",graine:s=1}=i,r=typeof e=="number"?e:Iv[e]??.85,o=Math.max(.055,r*.15),a=Math.max(.07,r*.26),c=Ae("plante",[o*3,r,o*3],{fixation:"sol"}),l=(Qd[n]||Qd.terre_cuite)();fe(c,$t(`pot_${Math.round(o*1e3)}_${Math.round(a*1e3)}`,[[0,0],[o*.78,0],[o,a*.92],[o*1.06,a*.95],[o*1.04,a],[o*.95,a]],12),l,0,0,0),pe(c,o*.94,.01,_e("#5a4434"),0,a-.015,0,{seg:10});let u=Qi("feuillage"),h=Qi("feuillage_fonce"),f=Qi("feuillage_clair"),d=s*9301+49297,p=()=>(d=(d*9301+49297)%233280)/233280;if(t==="cactus"){let _=Qi("#6f9a5c");fe(c,St(o*.55,8,6),_,0,a+(r-a)*.45,0,{sy:(r-a)/(o*1.1)}),fe(c,St(o*.3,7,5),_,o*.5,a+(r-a)*.55,0,{sy:1.6})}else if(t==="ficus"){let _=He("bois_noyer");ct(c,[0,a,0],[.03,r*.62,.01],Math.max(.012,r*.012),_,5),ct(c,[.01,r*.4,0],[-.12*r/1.5,r*.72,.05],.01,_,5),[[0,.82,0,.26],[-.14,.72,.06,.2],[.13,.7,-.04,.21],[.03,.66,.14,.18],[-.05,.95,-.05,.17],[.1,.9,.08,.15]].forEach(([g,v,E,x],M)=>fe(c,Li(x*r/1.5,1),[u,h,f][M%3],g*r/1.2,v*r,E*r/1.2,{ry:p()*6}))}else if(t==="touffe"){let _=r-a,m=r<.3?0:1;fe(c,Li(_*.36,m),h,0,a+_*.42,0);let g=7;for(let v=0;v<g;v++){let E=v/g*6.283+p()*.4,x=_*(.2+p()*.07),M=v===g-1;fe(c,Li(x,m),[u,f,u][v%3],M?0:Math.cos(E)*_*.3,a+(M?_*.72:_*(.3+p()*.25)),M?0:Math.sin(E)*_*.3,{ry:p()*6})}}else{let _=At("feuille_monstera",()=>{let E=new pn;E.moveTo(0,0),E.bezierCurveTo(.5,.15,.55,.75,0,1),E.bezierCurveTo(-.55,.75,-.5,.15,0,0);let x=new Yn(E,4);return x.rotateX(-Math.PI/2),x}),m=Lv(),g=Qi("feuillage_fonce"),v=7;for(let E=0;E<v;E++){let x=E/v*6.283+p()*.5,M=(r-a)*(.55+p()*.4),S=.15+p()*.4,A=Math.cos(x)*M*.45,y=Math.sin(x)*M*.45,w=a+M*(.55+p()*.35);ct(c,[0,a,0],[A,w,y],.006,g,4);let I=(r-a)*(.42+p()*.18),F=fe(c,_,m,A,w,y,{sx:I,sy:I,sz:I});F.rotation.set(0,-x-Math.PI/2,0),F.rotateX(-S)}}return c}var ur;function Lv(){return ur||(ur=Qi("feuillage").clone(),ur.side=Ut,ur.flatShading=!1,ur.userData.partage=!0),ur}function qu(i={}){let{largeur:e=.5,hauteur_cadre:t=.65,hauteur:n=1.5,variante:s="abstrait",couleur:r="bois_clair",passe_partout:o=!0}=i,a=Ae("cadre",[e,t,.03],{fixation:"mur"}),c=n-t/2,l=r==="noir"||r==="blanc"?_e(r):oe(r,He),u=.025;C(a,e,u,.03,l,0,c,0),C(a,e,u,.03,l,0,c+t-u,0),C(a,u,t-2*u,.03,l,-e/2+u/2,c+u,0),C(a,u,t-2*u,.03,l,e/2-u/2,c+u,0);let h=o?.045:0;return h&&C(a,e-2*u,t-2*u,.006,_e("blanc_pur"),0,c+u,-.006),fe(a,Kd(e-2*u-2*h,t-2*u-2*h),Xd(s),0,n,-.002),a}function ts(i={}){let{hauteur:e=.3,couleur:t="sauge",branches:n=!0}=i,s=Ae("vase",[.16,e,.16],{fixation:"pose"}),r=e*(n?.55:1);if(fe(s,$t(`vase_${Math.round(r*1e3)}`,[[0,0],[.05,0],[.075,r*.35],[.06,r*.75],[.03,r*.92],[.035,r],[.03,r]],14),oe(t,cn),0,0,0),n){let o=He("bois_noyer"),a=Qi("sauge");for(let[c,l,u]of[[.07,.02,1],[-.06,.03,.9],[0,-.07,.8]])ct(s,[0,r*.8,0],[c*e*3,e*u,l*e*3],.004,o,3),fe(s,Li(.03,0),a,c*e*3,e*u-.02,l*e*3,{sy:1.6})}return s}function Dv(i={}){let{diametre:e=.32,hauteur:t=1.9,couleur:n="bois_clair"}=i,s=Ae("horloge",[e,e,.04],{fixation:"mur"}),r=e/2,o=fe(s,rn(r,r,.03,28),oe(n,He),0,t,0,{rx:Math.PI/2});fe(s,rn(r*.86,r*.86,.004,28),_e("blanc_pur"),0,t,.016,{rx:Math.PI/2});let a=_e("anthracite");for(let l=0;l<12;l++){let u=l/12*Math.PI*2;C(s,.008,l%3?.012:.025,.003,a,Math.sin(u)*r*.74,t-(l%3?.006:.0125)+Math.cos(u)*r*.74,.019,{rz:-u})}let c=(l,u,h)=>{let f=new rt;return f.position.set(0,t,.022),f.rotation.z=-h,C(f,u,l,.003,a,0,0,0),s.add(f),f};return c(r*.5,.012,ep(300)),c(r*.72,.008,ep(60)),pe(s,.012,.01,ke("#b99a62"),0,t,.025,{axe:"z",seg:8}),s}var ep=i=>i*Math.PI/180;function Nv(i={}){let{largeur:e=1.4,hauteur:t=2.4,couleur:n="lin",ouverture:s=.7}=i,r=Ae("rideaux",[e+.3,t,.1],{fixation:"mur"}),o=e+.3;pe(r,.012,o,ke("#3a3b3d"),0,t,.03,{axe:"x",seg:6});let a=o/2*(1-s*.6),c=t-.03,l=At(`pan_${Math.round(a*1e3)}_${Math.round(c*1e3)}`,()=>{let h=Math.max(4,Math.round(a/.09)),f=new nn(a,c,h*2,1),d=f.attributes.position;for(let p=0;p<d.count;p++)d.setZ(p,Math.sin((d.getX(p)/a+.5)*h*Math.PI)*.03);return f.computeVertexNormals(),f}),u=Uv(n);return fe(r,l,u,-o/2+a/2,c/2,.04),fe(r,l,u,o/2-a/2,c/2,.04),r}var Xu=new Map;function Uv(i){if(!Xu.has(i)){let e=Ze(i).clone();e.side=Ut,e.userData.partage=!0,Xu.set(i,e)}return Xu.get(i)}function Fv(i={}){let{forme:e="rond",diametre:t=1,largeur:n=1.2,profondeur:s=.8,couleur:r="creme",bordure:o="moutarde"}=i;if(e==="rond"){let c=Ae("petit_tapis",[t,.012,t],{fixation:"sol"}),l=t/2;return pe(c,l,.008,oe(o,Ze),0,0,0,{seg:32}),pe(c,l-.06,.003,oe(r,Ze),0,.008,0,{seg:32}),pe(c,l*.45,.002,oe(o,Ze),0,.0105,0,{seg:24}),pe(c,l*.4,.002,oe(r,Ze),0,.0115,0,{seg:24}),c}let a=Ae("petit_tapis",[n,.012,s],{fixation:"sol"});return C(a,n,.008,s,oe(o,Ze),0,0,0),C(a,n-.1,.003,s-.1,oe(r,Ze),0,.008,0),a}function zc(i,e,t,n,s,r=.022){pe(i,r,n,s,e,0,t,{rb:r*.65,seg:7})}function Ov(i={}){let{places:e=3,profondeur:t=.94,couleur:n="sauge",pieds:s="bois_noyer",coussins:r=["creme","terracotta"]}=i,o=.2,c=i.largeur??e*.62+2*o,l=t,u=Ae("canape",[c,.84,l],{fixation:"sol",places:e}),h=oe(n,Ze),f=oe(s,He),d=.12;C(u,c-.02,.24,l-.02,h,0,d,0,{r:.04});for(let _ of[-1,1])C(u,o,.5,l,h,_*(c/2-o/2),d,0,{r:.07});C(u,c-2*o+.02,.44,.2,h,0,d+.2,-l/2+.1,{r:.06});let p=(c-2*o)/e;for(let _=0;_<e;_++){let m=-c/2+o+p*(_+.5);C(u,p-.012,.14,l-.24,h,m,d+.235,.1,{r:.05}),C(u,p-.02,.42,.17,h,m,d+.34,-l/2+.27,{r:.07,rx:-.16})}r.forEach((_,m)=>{let g=m%2?1:-1;es(u,.42,oe(_,Ze),g*(c/2-o-.26),d+.36,-l/2+.42,{rx:-.3,ry:g*-.25,rz:g*.12})});for(let _ of[-1,1])for(let m of[-1,1])zc(u,_*(c/2-.08),m*(l/2-.08),d,f);return u}function Bv(i={}){let{largeur:e=2.7,retour:t=1.9,profondeur:n=.95,cote:s="gauche",couleur:r="gris_chaud",pieds:o="bois_noyer",coussins:a=["sauge","creme","moutarde"]}=i,c=Ae("canape_angle",[e,.84,t],{fixation:"sol",cote:s}),l=s==="droite"?1:-1,u=oe(r,Ze),h=oe(o,He),f=.12,d=.2,p=.2,_=-t/2,m=l*(e/2);C(c,e-.02,.24,n-.02,u,0,f,_+n/2),C(c,n-.02,.24,t-n,u,m-l*(n/2),f,_+n+(t-n)/2-.01,{r:.04}),C(c,e-d,.44,p,u,-l*d/2,f+.2,_+p/2,{r:.06}),C(c,p,.44,t-d-p,u,m-l*p/2,f+.2,_+p+(t-d-p)/2,{r:.06}),C(c,d,.5,n,u,-l*(e/2-d/2),f,_+n/2,{r:.07}),C(c,n,.5,d,u,m-l*(n/2),f,t/2-d/2,{r:.07});let g=n-p-.02,v=e-d-p,E=Math.max(1,Math.round(v/.65)),x=v/E;for(let y=0;y<E;y++){let w=m-l*(p+x*(y+.5));C(c,x-.012,.14,g,u,w,f+.235,_+p+g/2,{r:.05}),C(c,x-.02,.42,.17,u,w,f+.34,_+p+.08,{r:.07,rx:-.16})}let M=t-n-d,S=Math.max(1,Math.round(M/.65)),A=M/S;for(let y=0;y<S;y++){let w=_+n+A*(y+.5);C(c,g,.14,A-.012,u,m-l*(p+g/2),f+.235,w,{r:.05}),C(c,.17,.42,A-.02,u,m-l*(p+.08),f+.34,w,{r:.07,rz:l*.16})}a.forEach((y,w)=>{let I=[[m-l*(p+.3),_+p+.3,l*.78],[m-l*(p+.75),_+p+.2,.1],[-l*(e/2-d-.3),_+p+.2,-.15*l]][w%3];es(c,.42,oe(y,Ze),I[0],f+.36,I[1],{rx:-.3,ry:I[2]})});for(let[y,w]of[[-e/2+.08,_+.08],[e/2-.08,_+.08],[-l*(e/2-.08),_+n-.08],[m-l*.08,t/2-.08],[m-l*(n-.08),t/2-.08]])zc(c,y,w,f,h);return c}function zv(i={}){let{couleur:e="terracotta",bois:t="bois_clair",coussin:n="creme"}=i,s=.78,r=.82,o=Ae("fauteuil",[s,.82,r],{fixation:"sol"}),a=oe(e,Ze),c=oe(t,He);for(let l of[-1,1]){let u=l*(s/2-.03);C(o,.06,.035,r-.04,c,u,.6,0,{r:.012}),ct(o,[u,0,r/2-.08],[u,.6,r/2-.1],.02,c,7),ct(o,[u,0,-r/2+.06],[u,.6,-r/2+.12],.02,c,7)}return C(o,s-.08,.04,r-.12,c,0,.26,.02),C(o,s-.1,.16,r-.16,a,0,.3,.05,{r:.06,s:2}),C(o,s-.12,.5,.16,a,0,.4,-r/2+.14,{r:.07,s:2,rx:-.22}),es(o,.36,oe(n,Ze),.06,.43,-r/2+.3,{rx:-.35,rz:.15}),o}function Hv(i={}){let{forme:e="ronde",diametre:t=.85,largeur:n=1.1,profondeur:s=.6,hauteur:r=.4,couleur:o="bois_clair",deco:a=!0}=i,c=oe(o,He),l;if(e==="ronde"){l=Ae("table_basse",[t,r,t],{fixation:"sol"});let u=t/2;pe(l,u,.035,c,0,r-.035,0,{seg:28}),pe(l,u-.03,.02,c,0,.12,0,{seg:28});for(let h=0;h<3;h++){let f=h/3*Math.PI*2+.5;ct(l,[Math.cos(f)*u*.78,0,Math.sin(f)*u*.78],[Math.cos(f)*u*.65,r-.035,Math.sin(f)*u*.65],.02,c,7)}}else{l=Ae("table_basse",[n,r,s],{fixation:"sol"}),C(l,n,.04,s,c,0,r-.04,0,{r:.012}),C(l,n-.1,.02,s-.1,c,0,.1,0);for(let u of[-1,1])for(let h of[-1,1])zc(l,u*(n/2-.06),h*(s/2-.06),r-.04,c,.024)}if(a){let u=[["sauge",.24,.17],["creme",.22,.16],["terracotta",.2,.15]],h=r;u.forEach(([d,p,_],m)=>{C(l,p,.03,_,_e(d),-.12,h,.05,{ry:m*.12}),h+=.03});let f=ts({hauteur:.28,couleur:"blanc"});f.position.set(.15,r,-.06),l.add(f)}return l}function tp(i={}){let{pouces:e=55,support:t="pied",hauteur_pose:n=t==="mural"?1.1:0}=i,s=e*.0254*.8716,r=e*.0254*.4903,o=Ae("tv",[s,r+.1,.25],{fixation:t==="mural"?"mur":"pose",interactif:!0,role:"tv",animations:{ecran:"emissive"}}),a=_e("noir"),c=n+(t==="pied"?.08:-r/2);C(o,s,r,.035,a,0,c,0,{r:.006});let l=fe(o,At(`ecran_${Math.round(s*1e3)}`,()=>new nn(s-.016,r-.016)),Sn("#1a1d22",{roughness:.18}),0,c+r/2,.0185);return l.name="ecran",t==="pied"&&(C(o,.32,.012,.2,a,0,n,0,{r:.004}),C(o,.05,.1,.02,a,0,n,-.02)),o}function kv(i={}){let{largeur:e=1.8,hauteur:t=.48,profondeur:n=.42,couleur:s="bois_clair",facade:r="sauge",avec_tv:o=!0,pouces:a=55}=i,c=Ae("meuble_tv",[e,t,n],{fixation:"sol"}),l=oe(s,He),u=oe(r,$e),h=.12;C(c,e,t-h,n,l,0,h,0,{r:.01});let f=3,d=(e-.06)/f;for(let p=0;p<f;p++){let _=-e/2+.03+d*(p+.5);p===1?(C(c,d-.02,t-h-.08,.02,He("bois_noyer"),_,h+.04,n/2-.02),C(c,.22,.05,.18,_e("anthracite"),_-.08,h+.04,.05,{r:.01})):(C(c,d-.012,t-h-.05,.02,u,_,h+.025,n/2,{r:.004}),pe(c,.012,.02,ke("#b99a62"),_+(p?-1:1)*(d/2-.05),(t+h)/2,n/2+.015,{axe:"z",seg:8}))}for(let p of[-1,1])for(let _ of[-1,1])zc(c,p*(e/2-.06),_*(n/2-.06),h,l,.02);if(o){let p=tp({pouces:a,support:"pied",hauteur_pose:t});p.position.z=-.04,c.add(p);let _=zn({taille:"mini",espece:"touffe",graine:3});_.position.set(e/2-.18,t,.02),c.add(_)}return c}var $u=["terracotta","sauge","moutarde","marine","creme","gris_chaud","bleu_canard","rose"];function Vv(i={}){let{largeur:e=.9,hauteur:t=1.9,profondeur:n=.32,etageres:s=5,couleur:r="bois_clair",garnie:o=!0,graine:a=5}=i,c=Ae("bibliotheque",[e,t,n],{fixation:"sol"}),l=oe(r,He),u=.022;C(c,u,t,n,l,-e/2+u/2,0,0),C(c,u,t,n,l,e/2-u/2,0,0),C(c,e-2*u,t-.01,.01,_e("blanc"),0,0,-n/2+.005);let h=(t-.08)/s;for(let f=0;f<=s;f++)C(c,e-2*u,u,n-.01,l,0,f===0?.06:.06+f*h-u,0);if(C(c,e-2*u,.06,.02,l,0,0,n/2-.02),o){let f=a*7919,d=()=>(f=f*16807%2147483647)/2147483647;for(let p=0;p<s;p++){let _=.06+p*h+(p===0?u:0),m=-e/2+u+.02,g=e/2-u-.02,v=Math.floor(d()*3),E=d()<.5?-1:1,x=E>0?g-.22:g;for(E<0&&(m+=.22);m<x-.04;){let S=.022+d()*.03,A=Math.min(h-.06,.19+d()*.1);if(m+S>x)break;C(c,S,A,n*.72,_e($u[Math.floor(d()*$u.length)]),m+S/2,_,.01),m+=S+.002,d()<.12&&(m+=.04)}let M=E>0?g-.1:-e/2+u+.12;if(v===0){let S=zn({taille:"mini",espece:"touffe",graine:p+a});S.position.set(M,_,.02),c.add(S)}else if(v===1){let S=ts({hauteur:Math.min(.22,h-.05),couleur:"terracotta",branches:!1});S.position.set(M,_,.02),c.add(S)}else for(let S=0;S<3;S++)C(c,.16,.028,.2,_e($u[(p+S)%8]),M,_+S*.028,0,{ry:S*.1})}}return c}function Gv(i={}){let{largeur:e=2.2,profondeur:t=1.6,forme:n="rectangle",couleur:s="creme",bordure:r="terracotta",motif:o="liser\xE9"}=i;if(n==="rond"){let c=Ae("tapis",[e,.012,e],{fixation:"sol"});return pe(c,e/2,.008,oe(r,Ze),0,0,0,{seg:40}),pe(c,e/2-.08,.003,oe(s,Ze),0,.008,0,{seg:40}),c}let a=Ae("tapis",[e,.012,t],{fixation:"sol"});if(C(a,e,.008,t,oe(s,Ze),0,0,0),o!=="uni"){let c=oe(r,Ze),l=.12,u=.05;C(a,e-2*l,.002,u,c,0,.008,-t/2+l+u/2),C(a,e-2*l,.002,u,c,0,.008,t/2-l-u/2),C(a,u,.002,t-2*l,c,-e/2+l+u/2,.008,0),C(a,u,.002,t-2*l,c,e/2-l-u/2,.008,0);let h=Ze("sauge");for(let f=-1;f<=1;f++)C(a,.18,.002,.18,f?h:c,f*.34,.009,0,{ry:Math.PI/4})}return a}function np(i={}){let{couleur:e="bois_clair",assise:t="beige"}=i,n=Ae("chaise",[.46,.82,.5],{fixation:"sol"}),s=oe(e,He),r=oe(t,Ze),o=.45;C(n,.44,.03,.44,s,0,o-.03,.01,{r:.01}),C(n,.42,.05,.41,r,0,o-.005,.02,{r:.022});for(let a of[-1,1])ct(n,[a*.2,0,.21],[a*.18,o-.03,.18],.016,s,6),ct(n,[a*.2,0,-.22],[a*.18,.8,-.2],.016,s,6);return C(n,.4,.12,.025,s,0,.66,-.2,{r:.01,rx:-.08}),C(n,.36,.015,.015,s,0,.16,-.2),C(n,.36,.015,.015,s,0,.16,.19),n}function Wv(i={}){let{places:e=6,largeur:t=.92,hauteur:n=.75,couleur:s="bois_clair",chaises:r=!0,chaise_bois:o=s,assise:a="beige",centre:c=!0}=i,l=e>=6?2:0,u=Math.ceil((e-l)/2),h=i.longueur??Math.max(1.2,u*.62+.3),f=r?.42:0,d=Ae("table_manger",[h+(l?2*f:0),n,t+2*f],{fixation:"sol",places:e}),p=oe(s,He);C(d,h,.04,t,p,0,n-.04,0,{r:.015}),C(d,h-.24,.07,t-.2,p,0,n-.11,0);for(let _ of[-1,1])for(let m of[-1,1])ct(d,[_*(h/2-.1),0,m*(t/2-.1)],[_*(h/2-.14),n-.04,m*(t/2-.13)],.028,p,8);if(r){let _=[];for(let m=0;m<u;m++){let g=(m-(u-1)/2)*((h-.3)/u);_.push([g,-t/2-.12,0],[g,t/2+.12,Math.PI])}l&&_.push([-h/2-.12,0,Math.PI/2],[h/2+.12,0,-Math.PI/2]);for(let[m,g,v]of _.slice(0,e)){let E=np({couleur:o,assise:a});E.position.set(m,0,g),E.rotation.y=v,d.add(E)}}if(c){let _=ts({hauteur:.34,couleur:"sauge"});_.position.set(0,n,0),d.add(_),pe(d,.12,.012,He("bois_miel"),-.32,n,.05,{seg:16}),pe(d,.12,.012,He("bois_miel"),.32,n,-.05,{seg:16})}return d}function Xv(i={}){let{largeur:e=1.6,hauteur:t=.8,profondeur:n=.45,couleur:s="bois_clair",facade:r="blanc",deco:o=!0}=i,a=Ae("buffet",[e,t,n],{fixation:"sol"}),c=oe(s,He),l=oe(r,$e),u=.18;C(a,e,t-u,n,c,0,u,0,{r:.012});let h=Math.max(3,Math.round(e/.45)),f=(e-.04)/h;for(let d=0;d<h;d++){let p=-e/2+.02+f*(d+.5);if(d===Math.floor(h/2)&&h%2)for(let _=0;_<3;_++){let m=(t-u-.06)/3;C(a,f-.012,m-.01,.02,c,p,u+.03+_*m,n/2,{r:.004}),C(a,.1,.012,.015,ke("#b99a62"),p,u+.03+_*m+m/2-.006,n/2+.017)}else C(a,f-.012,t-u-.06,.02,l,p,u+.03,n/2,{r:.004}),pe(a,.013,.02,ke("#b99a62"),p+(d<h/2?1:-1)*(f/2-.05),(t+u)/2+.05,n/2+.017,{axe:"z",seg:8})}for(let d of[-1,1])for(let p of[-1,1])ct(a,[d*(e/2-.05),0,p*(n/2-.04)],[d*(e/2-.12),u,p*(n/2-.09)],.02,c,7);if(o){let d=zn({taille:"petite",espece:"touffe",pot:"blanc",graine:2});d.position.set(-e/2+.25,t,0),a.add(d);let p=ts({hauteur:.36,couleur:"terracotta"});p.position.set(e/2-.25,t,0),a.add(p)}return a}var Qu={};ni(Qu,{THEMES:()=>Mo,armoire:()=>Jv,bureau_enfant:()=>jv,chaise_enfant:()=>ju,coffre_jouets:()=>Qv,commode:()=>Kv,lit_double:()=>qv,lit_enfant:()=>Yv,lit_mezzanine:()=>$v,peluche:()=>rp,poster_cadre:()=>tb,table_chevet:()=>Zv});var Mo={bleu:{motif:"etoiles",fond:"marine",trace:"moutarde",coussin:"moutarde",accent:"bleu_ciel",affiche:"fusee"},vert:{motif:"vagues",fond:"menthe",trace:"blanc_pur",coussin:"corail",accent:"sauge",affiche:"baleine"},rose:{motif:"pois",fond:"rose",trace:"blanc_pur",coussin:"lavande",accent:"rose",affiche:"arc_en_ciel"},jaune:{motif:"rayures",fond:"moutarde",trace:"creme",coussin:"bleu_canard",accent:"moutarde",affiche:"montagne"}},sp=i=>typeof i=="object"?i:Mo[i]||Mo.bleu;function Ku(i,e,t,n,s,r){let{couette:o,revers:a=Ze("blanc_pur"),oreillers:c=1,coussins:l=[]}=r;C(i,e,.18,t,Ze("blanc_pur"),0,n,s,{r:.04});let u=t*.74,h=s+t/2-u/2+.03;C(i,e+.07,.17,u+.03,o,0,n+.07,h,{r:.06,s:2}),C(i,e+.075,.06,.2,a,0,n+.19,h-u/2+.08,{r:.028});let f=c===1?Math.min(.62,e-.2):(e-.12)/2;for(let d=0;d<c;d++){let p=c===1?0:(d-.5)*(f+.04);C(i,f,.13,.38,Ze("blanc_pur"),p,n+.17,s-t/2+.24,{r:.06,rx:.12})}l.forEach((d,p)=>{let _=l.length===1?.05:(p-(l.length-1)/2)*.42;es(i,.4,d,_,n+.16,s-t/2+.48,{rx:-.45,rz:(p%2?-1:1)*.1})})}function qv(i={}){let{largeur:e=1.6,longueur:t=2,couleur:n="bois_clair",tete:s="sauge",couette:r="lin",plaid:o="terracotta",coussins:a=["moutarde","sauge_fonce"]}=i,c=t+.12,l=Ae("lit_double",[e+.12,1.15,c],{fixation:"sol"}),u=oe(n,He),h=.06;C(l,e+.06,.24,t+.04,u,0,.08,h,{r:.015});for(let f of[-1,1])for(let d of[-1,1])pe(l,.03,.08,u,f*(e/2-.05),0,h+d*(t/2-.05),{seg:8});C(l,e+.12,.16,.08,u,0,.08,-c/2+.04);for(let f=0;f<3;f++)C(l,(e+.1)/3-.01,.82,.09,oe(s,Ze),(f-1)*((e+.1)/3),.24,-c/2+.045,{r:.04});return Ku(l,e,t,.32,h,{couette:oe(r,Ze),oreillers:2,coussins:a.map(f=>oe(f,Ze))}),C(l,e+.1,.055,.46,oe(o,Ze),0,.53,h+t/2-.3,{r:.025}),C(l,.03,.2,.46,oe(o,Ze),-e/2-.05,.36,h+t/2-.3,{r:.012}),l}function Yv(i={}){let{largeur:e=.9,longueur:t=1.9,style:n="cabane",couleur:s="bois_blanchi",theme:r="bleu"}=i,o=sp(r),a=Ae("lit_enfant",[e+.1,n==="cabane"?1.6:.9,t+.1],{fixation:"sol"}),c=oe(s,He);C(a,e+.06,.2,t+.06,c,0,.1,0,{r:.012});for(let u of[-1,1])for(let h of[-1,1])pe(a,.025,.1,c,u*(e/2-.02),0,h*(t/2-.02),{seg:8});let l=yo(o.motif,o.fond,o.trace);if(Ku(a,e,t,.3,0,{couette:l,oreillers:1,coussins:[oe(o.coussin,Ze)]}),n==="cabane"){for(let _ of[-1,1]){let m=_*(t/2+.01);for(let g of[-1,1])C(a,.045,.85,.045,c,g*(e/2+.01),.1,m),ct(a,[g*(e/2+.01),.93,m],[0,1.55,m],.045/1.6,c,6)}pe(a,.045/1.6,t+.12,c,0,1.55-.02,0,{axe:"z",seg:6}),C(a,.03,.03,t,c,-e/2-.01,.55,0);let f=["moutarde","corail","menthe","bleu_ciel","lavande"],d=At("fanion",()=>{let _=new pn([new te(-.05,0),new te(.05,0),new te(0,-.1)]);return new Yn(_)}),p=7;for(let _=0;_<p;_++){let m=(_+.5)/p,g=-t/2+m*t,v=1.55-.05-Math.sin(m*Math.PI)*.06,E=fe(a,d,ip(f[_%f.length]),0,v,g,{ry:Math.PI/2});E.material=ip(f[_%f.length])}}else C(a,e+.08,.6,.05,oe(o.accent,$e),0,.2,-t/2-.02,{r:.022}),fe(a,rn((e+.08)/2,(e+.08)/2,.05,20,!1),oe(o.accent,$e),0,.8,-t/2-.02,{rx:Math.PI/2,sy:1,sz:.45}),C(a,e+.06,.18,.04,c,0,.3,t/2+.01,{r:.015});return a}var Ju=new Map;function ip(i){if(!Ju.has(i)){let e=Ze(i).clone();e.side=Ut,e.userData.partage=!0,Ju.set(i,e)}return Ju.get(i)}function $v(i={}){let{largeur:e=.9,longueur:t=1.9,hauteur_couchage:n=1.45,cote_echelle:s="droite",couleur:r="bois_clair",theme:o="vert",bureau_dessous:a=!0}=i,c=sp(o),l=e+.1,u=Ae("lit_mezzanine",[t+.1,n+.55,l+.3],{fixation:"sol"}),h=oe(r,He),f=oe(c.accent,$e),d=.06,p=-.15;for(let y of[-1,1])for(let w of[-1,1])C(u,d,n+.42,d,h,y*(t/2+.02),0,p+w*(e/2+.02));C(u,t+.04,.12,.04,h,0,n-.12,p+e/2+.02),C(u,t+.04,.12,.04,h,0,n-.12,p-e/2-.02),C(u,.04,.12,e,h,-t/2-.02,n-.12,p),C(u,.04,.12,e,h,t/2+.02,n-.12,p),C(u,t,.02,e,h,0,n-.04,p);let _=new rt;_.rotation.y=Math.PI/2,_.position.set(0,0,p),Ku(_,e-.04,t-.04,n-.02,0,{couette:yo(c.motif,c.fond,c.trace),oreillers:1,coussins:[]}),u.add(_);let m=s==="gauche"?-1:1,g=.5,v=m*(t/2-g/2-.05);C(u,t+.04,.05,.03,f,0,n+.32,p-e/2-.02,{r:.012}),C(u,.03,.05,e+.04,f,-t/2-.02,n+.32,p,{r:.012}),C(u,.03,.05,e+.04,f,t/2+.02,n+.32,p,{r:.012});let E=t-g-.05,x=-m*(g/2+.025);C(u,E,.05,.03,f,x,n+.32,p+e/2+.02,{r:.012});for(let y=0;y<=6;y++)pe(u,.012,.32,h,x-E/2+y/6*E,n,p+e/2+.02,{seg:5});for(let y=1;y<5;y++)pe(u,.012,.32,h,-t/2+y/5*t,n,p-e/2-.02,{seg:5});let M=p+e/2+.3,S=p+e/2+.03;for(let y of[-g/2+.06,g/2-.06])ct(u,[v+y,0,M],[v+y,n+.36,S],.022,h,6);let A=Math.round(n/.28);for(let y=1;y<=A;y++){let w=y/(A+.3);pe(u,.016,g-.12,f,v,w*(n+.36),M+(S-M)*w,{axe:"x",seg:6})}if(a){let y=-m*.25;C(u,1,.03,e-.15,_e("blanc"),y,.72,p-.05,{r:.008}),C(u,.4,.69,e-.2,_e("blanc"),y-.3*-m,.03,p-.07),C(u,.36,.2,.02,f,y-.3*-m,.45,p+e/2-.17),C(u,.36,.2,.02,f,y-.3*-m,.22,p+e/2-.17),C(u,.24,.3,.18,_e("moutarde"),y+.25*-m,.75,p-e/2+.15);let w=ju({couleur:c.accent});w.position.set(y+.1*m,0,p+.15),w.rotation.y=Math.PI,u.add(w);for(let I=0;I<8;I++)fe(u,St(.018,6,4),_e(["moutarde","corail","menthe","blanc_pur"][I%4]),-t/2+.15+I*(t-.3)/7,n-.16-Math.sin(I/7*Math.PI)*.06,p-e/2+.02)}return u}function Zv(i={}){let{couleur:e="bois_clair",facade:t="blanc",hauteur:n=.5}=i,s=Ae("table_chevet",[.45,n,.38],{fixation:"sol"}),r=oe(e,He),o=.16;C(s,.45,n-o,.38,r,0,o,0,{r:.012}),C(s,.41,.13,.02,oe(t,$e),0,n-.16,.19,{r:.004}),C(s,.41,n-o-.2,.02,He("bois_noyer"),0,o+.02,.17),pe(s,.012,.02,ke("#b99a62"),0,n-.095,.2,{axe:"z",seg:8});for(let a of[-1,1])for(let c of[-1,1])ct(s,[a*.19,0,c*.15],[a*.17,o,c*.13],.016,r,6);return s}function Jv(i={}){let{largeur:e=1,hauteur:t=2,profondeur:n=.58,portes:s=e>1.3?3:2,couleur:r="blanc",bois:o="bois_clair"}=i,a=Ae("armoire",[e,t,n],{fixation:"sol"}),c=oe(r,$e),l=oe(o,He);C(a,e,.08,n-.04,l,0,0,-.02),C(a,e,t-.08,n-.02,c,0,.08,-.01,{r:.01});let u=(e-.02)/s;for(let h=0;h<s;h++){let f=-e/2+.01+u*(h+.5);C(a,u-.008,t-.12,.02,c,f,.1,n/2-.01,{r:.004});let d=h%2===0?1:-1;C(a,.02,.3,.02,l,f+d*(u/2-.05),t*.48,n/2+.01,{r:.006})}return a}function Kv(i={}){let{largeur:e=.9,hauteur:t=.85,profondeur:n=.46,tiroirs:s=3,couleur:r="bois_clair",facade:o="sauge"}=i,a=Ae("commode",[e,t,n],{fixation:"sol"}),c=oe(r,He),l=oe(o,$e),u=.12;C(a,e,t-u,n,c,0,u,0,{r:.012});let h=(t-u-.05)/s;for(let f=0;f<s;f++){C(a,e-.04,h-.012,.02,l,0,u+.025+f*h,n/2,{r:.004});for(let d of[-1,1])pe(a,.014,.02,ke("#b99a62"),d*e*.25,u+.025+f*h+h/2,n/2+.017,{axe:"z",seg:8})}for(let f of[-1,1])for(let d of[-1,1])pe(a,.02,u,c,f*(e/2-.05),0,d*(n/2-.05),{rb:.014,seg:7});return a}function ju(i={}){let{couleur:e="menthe",bois:t="bois_clair"}=i,n=Ae("chaise_enfant",[.38,.7,.4],{fixation:"sol"}),s=oe(e,$e),r=oe(t,He),o=.38;C(n,.36,.025,.36,s,0,o-.025,.01,{r:.012});for(let a of[-1,1])ct(n,[a*.16,0,.17],[a*.15,o-.02,.15],.015,r,6),ct(n,[a*.16,0,-.17],[a*.15,.68,-.16],.015,r,6);return C(n,.33,.13,.025,s,0,.53,-.16,{r:.012}),n}function jv(i={}){let{largeur:e=1,profondeur:t=.55,hauteur:n=.64,couleur:s="blanc",bois:r="bois_clair",accent:o="moutarde",chaise:a=!0}=i,c=Ae("bureau_enfant",[e,n+.3,t+(a?.35:0)],{fixation:"sol"}),l=oe(s,$e),u=oe(r,He),h=oe(o,$e),f=a?-.17:0;if(C(c,e,.03,t,u,0,n-.03,f,{r:.008}),C(c,.36,n-.03,t-.04,l,e/2-.2,0,f),C(c,.32,(n-.06)/2-.02,.02,h,e/2-.2,.03,f+t/2-.01,{r:.005}),C(c,.32,(n-.06)/2-.02,.02,h,e/2-.2,n/2,f+t/2-.01,{r:.005}),ct(c,[-e/2+.05,0,f+t/2-.06],[-e/2+.06,n-.03,f+t/2-.08],.02,u,6),ct(c,[-e/2+.05,0,f-t/2+.06],[-e/2+.06,n-.03,f-t/2+.08],.02,u,6),pe(c,.035,.09,$e("corail"),-e/2+.15,n,f-t/2+.12,{seg:10}),["bleu_ciel","moutarde","menthe"].forEach((d,p)=>ct(c,[-e/2+.14+p*.012,n+.05,f-t/2+.12],[-e/2+.13+p*.02,n+.15,f-t/2+.11+p*.01],.005,_e(d),4)),C(c,.24,.02,.17,_e("bleu_canard"),0,n,f+.02,{ry:.2}),C(c,.22,.02,.16,_e("corail"),0,n+.02,f+.02,{ry:.05}),a){let d=ju({couleur:o});d.position.set(-.1,0,f+t/2+.05),d.rotation.y=Math.PI+.25,c.add(d)}return c}function Qv(i={}){let{largeur:e=.7,couleur:t="bleu_ciel",jouets:n=!0}=i,s=Ae("coffre_jouets",[e,.5,.42],{fixation:"sol"}),r=oe(t,$e),o=He("bois_clair");C(s,e,.4,.4,r,0,.02,0,{r:.02}),C(s,e+.02,.04,.42,o,0,.42,0,{r:.015}),C(s,e-.1,.02,.03,o,0,0,.18);for(let a of[-1,1])fe(s,eb(.04,.008),_e("creme"),a*(e/2+.005),.3,0,{ry:Math.PI/2});if(n){[["moutarde",-.2,0,.3],["corail",-.12,-.04,.1],["menthe",-.16,.08,.7]].forEach(([l,u,h,f])=>C(s,.08,.08,.08,$e(l),u,.46,h,{ry:f,r:.008})),C(s,.08,.08,.08,$e("bleu_ciel"),-.16,.54,0,{ry:.5,r:.008}),fe(s,St(.11,12,8),$e("corail"),.2,.46+.11,.02);let c=rp({taille:.28});c.position.set(0,.46,.04),c.rotation.y=-.3,s.add(c)}return s}function eb(i,e){return At(`tore_${i}_${e}`,()=>new Ri(i,e,4,12,Math.PI))}function rp(i={}){let{taille:e=.3,couleur:t="#c49a6c"}=i,n=Ae("peluche",[e*.6,e,e*.5],{fixation:"pose"}),s=oe(t,Ze),r=Ze("creme"),o=_e("noir");fe(n,St(e*.24,10,7),s,0,e*.26,0,{sy:1.1}),fe(n,St(e*.2,10,7),s,0,e*.7,.01);for(let a of[-1,1])fe(n,St(e*.075,7,5),s,a*e*.15,e*.86,0,{sz:.6}),fe(n,St(e*.08,7,5),s,a*e*.13,e*.08,e*.14),fe(n,St(e*.07,7,5),s,a*e*.22,e*.36,e*.06),fe(n,St(e*.018,5,4),o,a*e*.07,e*.75,e*.18);return fe(n,St(e*.08,8,5),r,0,e*.66,e*.16,{sz:.7}),fe(n,St(e*.025,5,4),o,0,e*.68,e*.215),n}function tb(i={}){let{variante:e="fusee",largeur:t=.42,hauteur_cadre:n=.55,hauteur:s=1.45,couleur:r="bois_clair"}=i,o=qu({variante:e,largeur:t,hauteur_cadre:n,hauteur:s,couleur:r,passe_partout:!1});return o.name="poster_cadre",o.userData.type="poster_cadre",o}var eh={};ni(eh,{cuisine_L:()=>sb,cuisine_lineaire:()=>ib,evier:()=>rb,four:()=>ab,ilot:()=>lb,plaques:()=>ob,refrigerateur:()=>cb,tabouret:()=>op});var Et=.9,Bt=.62,zt=.1,Qn=.04;function ns(i,e,t,n,s=.16,r=!1,o=ke("#b99a62")){r?C(i,.012,s,.022,o,e,t-s/2,n+.011,{r:.005}):C(i,s,.012,.022,o,e,t,n+.011,{r:.005})}function nb(i,e,t,n,s){let{mf:r,z0:o=0}=s,a=o+Bt/2-.02,c=Et-Qn-zt;if(n==="tiroirs"){let l=[.18,.27,c-.45-.012],u=zt+.004;for(let h of l)C(i,t-.006,h-.006,.02,r,e,u,a,{r:.003}),ns(i,e,u+h-.05,a+.01,Math.min(.3,t*.5)),u+=h}else if(n==="plaques"){C(i,t-.006,.12,.02,r,e,zt+.004,a,{r:.003}),C(i,t-.01,c-.13,.02,_e("noir"),e,zt+.13,a,{r:.004}),C(i,t-.12,c-.3,.004,sn("#2a2f36",.85),e,zt+.19,a+.012),ns(i,e,Et-Qn-.06,a+.012,t-.14,!1,ke("#c9ccce")),C(i,t-.04,.006,.5,$e("noir"),e,Et,o-.02,{r:.004});for(let[l,u,h]of[[-.14,-.12,.09],[.14,-.12,.07],[-.14,.11,.07],[.14,.11,.09]])fe(i,Nn(h,.004,3,20),_e("#555a60"),e+l*(t/.6),Et+.006,o-.02+u,{rx:Math.PI/2})}else{let l=t>.65?2:1,u=t/l;for(let h=0;h<l;h++){let f=e-t/2+u*(h+.5);C(i,u-.006,c-.008,.02,r,f,zt+.004,a,{r:.003}),n==="lave_vaisselle"?ns(i,f,Et-Qn-.06,a+.01,u*.6):ns(i,f+(l===2&&h?-1:1)*(u/2-.04),Et-Qn-.06,a+.01,.14,!0)}if(n==="evier"){C(i,Math.min(.62,t-.12),.006,.42,ke("#c9ccce"),e,Et,o-.02,{r:.01}),C(i,Math.min(.56,t-.18),.002,.36,ke("#8d9196"),e,Et+.006,o-.02);let h=e,f=o-.25;pe(i,.022,.05,ke("#d6d9db"),h,Et,f,{seg:10});let d=ke("#d6d9db");ct(i,[h,Et+.05,f],[h,Et+.3,f],.012,d,8),ct(i,[h,Et+.3,f],[h,Et+.3,f+.16],.012,d,8),ct(i,[h,Et+.3,f+.16],[h,Et+.24,f+.18],.011,d,8)}}}function So(i,e,t){let{mf:n,mp:s,hauts:r,mh:o,credence:a,evier:c,plaques:l,z0:u=0,modulesHauts:h=!0,deco:f=!0}=t,d=Math.max(1,Math.round(e/.6)),p=e/d,_=Array(d).fill("portes"),m=c===!1?-1:Math.min(d-1,c??(d>=3?1:0)),g=l===!1?-1:Math.min(d-1,l??(d-2>=0&&d-2!==m?d-2:d-1));if(m>=0&&(_[m]="evier"),g>=0&&g!==m&&(_[g]="plaques"),d>=4&&m+1<d&&_[m+1]==="portes"&&(_[m+1]="lave_vaisselle"),d>=3){let v=_.indexOf("portes");v>=0&&(_[v]="tiroirs")}if(C(i,e,zt,Bt-.08,_e("anthracite"),0,0,u-.04),C(i,e,Et-Qn-zt,Bt-.04,_e("blanc"),0,zt,u-.02),C(i,e,Qn,Bt+.01,s,0,Et-Qn,u+.005,{r:.006}),_.forEach((v,E)=>nb(i,-e/2+p*(E+.5),p,v,{mf:n,z0:u})),a&&C(i,e,.55,.012,Wd(),0,Et,u-Bt/2+.006),r){let v=Et+.58,E=.7,x=.34,M=u-Bt/2+x/2;for(let S=0;S<d;S++){let A=-e/2+p*(S+.5);if(_[S]==="plaques"){C(i,p-.02,.1,.48,ke("#c9ccce"),A,v+.05,u-Bt/2+.24,{r:.01}),C(i,.26,E-.15,.24,ke("#c9ccce"),A,v+.15,u-Bt/2+.12);continue}if(h){if(S===0&&f&&d>=3){for(let w of[.05,.38])C(i,p-.02,.03,.26,s,A,v+w,u-Bt/2+.13);for(let w=0;w<3;w++)pe(i,.045,.16-w*.02,sn("#e8f0ec",.5),A-.17+w*.12,v+.08,u-Bt/2+.13,{seg:10});let y=zn({taille:"mini",espece:"touffe",graine:9});y.position.set(A+.1,v+.41,u-Bt/2+.13),i.add(y),C(i,.14,.2,.03,_e("terracotta"),A-.12,v+.41,u-Bt/2+.06);continue}C(i,p,E,x-.02,_e("blanc"),A,v,M-.01),C(i,p-.006,E-.006,.02,o,A,v+.003,M+x/2-.01,{r:.003}),ns(i,A+(S%2?-1:1)*(p/2-.05),v+.04,M+x/2,.14)}}}}function ib(i={}){let{longueur:e=3,facade:t="sauge",plan:n="bois_clair",hauts:s=!0,facade_hauts:r="blanc",credence:o=!0,evier:a,plaques:c,deco:l=!0}=i,u=Ae("cuisine_lineaire",[e,s?2.2:Et,Bt],{fixation:"sol"});return So(u,e,{mf:oe(t,$e),mp:oe(n,He),mh:oe(r,$e),hauts:s,credence:o,evier:a,plaques:c,deco:l}),u}function sb(i={}){let{longueur:e=3,retour:t=2.2,cote:n="gauche",facade:s="sauge",plan:r="bois_clair",hauts:o=!0,facade_hauts:a="blanc",credence:c=!0}=i,l=Ae("cuisine_L",[e,o?2.2:Et,t],{fixation:"sol",cote:n}),u=n==="droite"?1:-1,h={mf:oe(s,$e),mp:oe(r,He),mh:oe(a,$e),hauts:o,credence:c},f=new rt;f.position.set(0,0,-t/2+Bt/2);let d=Math.round(e/.6);So(f,e,{...h,evier:!1,plaques:Math.floor(d/2)+(u<0?0:-1),deco:!1}),l.add(f);let p=new rt,_=t-Bt;return p.rotation.y=u<0?Math.PI/2:-Math.PI/2,p.position.set(u*(e/2-Bt/2),0,Bt/2),So(p,_,{...h,evier:Math.max(0,Math.round(_/.6)-2),plaques:!1,modulesHauts:!1,deco:!1}),l.add(p),l}function rb(i={}){let{largeur:e=.8,facade:t="sauge",plan:n="bois_clair"}=i,s=Ae("evier",[e,Et+.3,Bt],{fixation:"sol"});return So(s,e,{mf:oe(t,$e),mp:oe(n,He),hauts:!1,credence:!1,evier:0,plaques:!1}),s}function ob(i={}){let{largeur:e=.6,facade:t="sauge",plan:n="bois_clair"}=i,s=Ae("plaques",[e,Et,Bt],{fixation:"sol"});return So(s,e,{mf:oe(t,$e),mp:oe(n,He),hauts:!1,credence:!1,evier:!1,plaques:0}),s}function ab(i={}){let{colonne:e=!0,largeur:t=.6,hauteur:n=e?2.15:.6,facade:s="sauge"}=i,r=Ae("four",[t,n,Bt],{fixation:"sol"}),o=oe(s,$e),a=Bt/2-.02,c=(l,u,h)=>{C(r,t-.01,u,.02,_e("noir"),0,l,a,{r:.004}),C(r,h?t*.6:t-.12,u-(h?.08:.16),.004,sn("#2a2f36",.85),h?-t*.12:0,l+(h?.04:.05),a+.012),ns(r,h?t/2-.08:0,l+u-.05,a+.012,h?.12:t-.14,h,ke("#c9ccce"))};return e?(C(r,t,zt,Bt-.08,_e("anthracite"),0,0,-.04),C(r,t,n-zt,Bt-.02,_e("blanc"),0,zt,-.01),C(r,t-.006,.6,.02,o,0,zt+.004,a,{r:.003}),ns(r,0,zt+.55,a+.01,.3),c(zt+.62,.58,!1),c(zt+1.22,.38,!0),C(r,t-.006,n-zt-1.62,.02,o,0,zt+1.615,a,{r:.003}),ns(r,0,zt+1.67,a+.01,.3)):(C(r,t,n,Bt-.04,_e("gris_clair"),0,0,-.02,{r:.01}),c(0,n-.01,!1)),r}function cb(i={}){let{largeur:e=.6,hauteur:t=1.86,profondeur:n=.66,couleur:s="blanc",aimants:r=!0}=i,o=Ae("refrigerateur",[e,t,n],{fixation:"sol"}),a=s==="inox"?ke("#c9ccce"):oe(s,$e);C(o,e,t,n-.03,a,0,0,-.015,{r:.02});let c=t*.38;C(o,e-.01,c-.01,.03,a,0,.005,n/2-.015,{r:.012}),C(o,e-.01,t-c-.015,.03,a,0,c+.005,n/2-.015,{r:.012});let l=ke("#c9ccce");return C(o,.02,.32,.025,l,e/2-.05,c+.08,n/2+.012,{r:.008}),C(o,.02,.22,.025,l,e/2-.05,c-.3,n/2+.012,{r:.008}),r&&(C(o,.16,.2,.003,_e("#fdf6e3"),-.1,c+.55,n/2+.002,{rz:.06}),C(o,.1,.06,.003,_e("bleu_ciel"),-.12,c+.6,n/2+.004,{rz:.06}),pe(o,.03,.003,_e("moutarde"),-.05,c+.66,n/2+.004,{axe:"z",seg:10}),C(o,.14,.18,.003,_e("#e6f2ea"),.08,c+.3,n/2+.002,{rz:-.08}),C(o,.06,.06,.003,_e("corail"),.08,c+.38,n/2+.004,{rz:-.08}),pe(o,.012,.008,_e("corail"),-.1,c+.75,n/2+.004,{axe:"z",seg:8})),o}function op(i={}){let{hauteur:e=.65,couleur:t="bois_clair",metal:n="noir"}=i,s=Ae("tabouret",[.4,e,.4],{fixation:"sol"}),r=oe(t,He),o=ke(Gt(n)===Gt("noir")?"#2c2d30":Gt(n));pe(s,.18,.04,r,0,e-.04,0,{seg:18});for(let a=0;a<4;a++){let c=a/4*Math.PI*2+Math.PI/4;ct(s,[Math.cos(c)*.17,0,Math.sin(c)*.17],[Math.cos(c)*.12,e-.04,Math.sin(c)*.12],.011,o,5)}return fe(s,Nn(.15,.008,4,16),o,0,e*.32,0,{rx:Math.PI/2}),s}function lb(i={}){let{longueur:e=1.8,profondeur:t=.9,tabourets:n=3,facade:s="sauge",plan:r="bois_clair"}=i,o=Ae("ilot",[e,Et,t+(n?.35:0)],{fixation:"sol"}),a=n?-.17:0,c=oe(s,$e),l=oe(r,He),u=t-.28,h=a-t/2+u/2;C(o,e-.04,zt,u-.08,_e("anthracite"),0,0,h),C(o,e-.04,Et-Qn-zt,u,c,0,zt,h);let f=Math.round(e/.45);for(let d=0;d<f;d++)C(o,(e-.04)/f-.008,Et-Qn-zt-.01,.015,c,-e/2+.02+(e-.04)/f*(d+.5),zt+.005,h-u/2-.006,{r:.003});C(o,e,Qn,t,l,0,Et-Qn,a,{r:.008}),pe(o,.15,.06,He("bois_miel"),-e/2+.35,Et,a,{rb:.09,seg:14});for(let[d,p,_]of[[0,0,"moutarde"],[.06,.04,"corail"],[-.05,.04,"feuillage_clair"],[.02,-.06,"corail"]])pe(o,.04,.07,_e(_),-e/2+.35+d,Et+.03,a+p,{seg:8});for(let d=0;d<n;d++){let p=op({});p.position.set((d-(n-1)/2)*(e/n),0,a+t/2+.05),o.add(p)}return o}var th={};ni(th,{bureau:()=>ub,ecran:()=>ap,etageres:()=>fb,fauteuil_bureau:()=>hb,lampe_bureau:()=>cp});function ub(i={}){let{largeur:e=1.4,profondeur:t=.7,hauteur:n=.74,couleur:s="bois_clair",pieds:r="noir",deco:o=!0,avec_ecran:a=!0}=i,c=Ae("bureau",[e,n,t],{fixation:"sol"}),l=oe(s,He),u=ke(r==="noir"?"#2c2d30":r);C(c,e,.03,t,l,0,n-.03,0,{r:.008});for(let h of[-1,1]){let f=h*(e/2-.08);C(c,.03,.03,t-.08,u,f,0,0),C(c,.03,n-.06,.03,u,f,0,t/2-.08),C(c,.03,n-.06,.03,u,f,0,-t/2+.08),C(c,.03,.03,t-.1,u,f,n-.06,0)}if(C(c,e-.2,.12,.02,u,0,n-.17,-t/2+.1),o){C(c,.42,.015,.13,_e("gris_clair"),-.05,n,.12,{r:.004}),C(c,.06,.02,.1,_e("gris_clair"),.26,n,.13,{r:.01}),pe(c,.04,.09,cn("terracotta"),.45,n,.05,{seg:10}),C(c,.15,.015,.21,_e("sauge_fonce"),-.48,n,.1,{ry:.25});let h=zn({taille:"mini",espece:"cactus",pot:"blanc"});h.position.set(e/2-.15,n,-t/2+.15),c.add(h)}if(a){let h=ap({});h.position.set(-.05,n,-.12),c.add(h);let f=cp({});f.position.set(-e/2+.17,n,-t/2+.17),f.rotation.y=.5,c.add(f)}return c}function hb(i={}){let{couleur:e="anthracite",hauteur_assise:t=.48}=i,n=Ae("fauteuil_bureau",[.64,1.05,.64],{fixation:"sol"}),s=oe(e,Ze),r=ke("#2c2d30"),o=_e("noir");for(let a=0;a<5;a++){let c=a/5*Math.PI*2+Math.PI/2,l=Math.cos(c)*.3,u=Math.sin(c)*.3;ct(n,[0,.09,0],[l,.06,u],.018,r,5),fe(n,St(.028,6,4),o,l,.028,u)}pe(n,.025,t-.16,ke("#9ea1a4"),0,.08,0,{seg:8}),C(n,.5,.09,.5,s,0,t-.07,.02,{r:.04,s:2}),C(n,.46,.55,.07,s,0,t+.08,-.24,{r:.035,s:2,rx:-.12}),C(n,.06,.3,.03,r,0,t-.05,-.24);for(let a of[-1,1])C(n,.025,.2,.025,r,a*.25,t-.02,0),C(n,.05,.025,.24,_e("noir"),a*.25,t+.18,.02,{r:.01});return n}function ap(i={}){let{pouces:e=27}=i,t=e*.0254*.8716,n=e*.0254*.4903,s=Ae("ecran",[t,n+.18,.2],{fixation:"pose",interactif:!0,role:"ecran",animations:{ecran:"emissive"}}),r=_e("#2b2c2f"),o=ke("#bfc2c5");C(s,.22,.012,.16,o,0,0,0,{r:.005}),C(s,.045,.2,.02,o,0,0,-.04),C(s,t,n,.022,r,0,.13,0,{r:.005});let a=fe(s,At(`dalle_${Math.round(t*1e3)}`,()=>new nn(t-.014,n-.02)),Sn("#1a1d22",{roughness:.2}),0,.13+n/2+.003,.0115);return a.name="ecran",s}function cp(i={}){let{couleur:e="moutarde"}=i,t=Ae("lampe_bureau",[.2,.5,.35],{fixation:"pose",interactif:!0,role:"lampe",animations:{ampoule:"emissive"}}),n=oe(e,$e);pe(t,.075,.02,n,0,0,0,{seg:16});let s=[0,.32,.1],r=[0,.42,.26];ct(t,[0,.02,0],s,.009,ke("#2c2d30"),5),ct(t,s,r,.009,ke("#2c2d30"),5),fe(t,St(.018,6,4),n,...s);let o=new rt;o.position.set(...r),o.rotation.x=-.7,fe(o,$t("abat_bureau",[[.015,.03],[.03,.02],[.065,-.06],[.068,-.065]],14),n,0,0,0);let a=fe(o,St(.028,8,6),Sn("#fff6e6"),0,-.04,0);a.name="ampoule";let c=new us(Fc());return c.name="halo",c.visible=!1,c.scale.set(.5,.5,1),c.position.set(0,-.07,0),o.add(c),t.add(o),t}function fb(i={}){let{largeur:e=1.2,profondeur:t=.25,nombre:n=3,hauteur:s=1.1,ecart:r=.36,couleur:o="bois_clair",garnie:a=!0}=i,c=Ae("etageres",[e,s+(n-1)*r+.3,t],{fixation:"mur"}),l=oe(o,He),u=["sauge","terracotta","creme","marine","moutarde","gris_chaud"];for(let h=0;h<n;h++){let f=s+h*r,d=(h%2?1:-1)*.08;if(C(c,e,.03,t,l,d,f,0,{r:.006}),!a)continue;let p=h%2?-1:1,_=d-p*(e/2-.06);for(let g=0;g<6+h;g++){let v=.025+(g*7+h*3)%4*.008,E=.18+(g*5+h)%3*.03;C(c,v,E,t*.7,_e(u[(g+h*2)%u.length]),_+p*v/2,f+.03,0,{rz:g===5+h?p*-.25:0}),_+=p*(v+.003)}let m=d+p*(e/2-.16);if(h===0){let g=ts({hauteur:.25,couleur:"blanc",branches:!0});g.position.set(m,f+.03,0),c.add(g)}else if(h===1){let g=zn({taille:"mini",espece:"touffe",pot:"terre_cuite",graine:4});g.position.set(m,f+.03,0),c.add(g)}else C(c,.14,.18,.02,_e("blanc_pur"),m,f+.03,-.05,{rx:-.1}),C(c,.1,.12,.004,_e("sauge"),m,f+.06,-.035,{rx:-.1})}return c}var nh={};ni(nh,{baignoire:()=>pb,douche:()=>mb,lavabo:()=>gb,miroir:()=>xb,seche_serviettes:()=>yb,wc:()=>_b});function db(i,e,t,n,s){s.forEach((r,o)=>C(i,.3,.05,.22,Ze(r),e,t+o*.05,n,{r:.02,ry:o*.06}))}function pb(i={}){let{longueur:e=1.7,largeur:t=.75,hauteur:n=.56,tablier:s="blanc",eau:r=!0}=i,o=Ae("baignoire",[e,n,t],{fixation:"sol"}),a=cn("blanc_pur"),c=oe(s,$e),l=.08,u=.14;C(o,e,n-.05,.02,c,0,0,t/2-.01),C(o,e,n-.05,.02,c,0,0,-t/2+.01),C(o,.02,n-.05,t-.04,c,-e/2+.01,0,0),C(o,.02,n-.05,t-.04,c,e/2-.01,0,0),C(o,e-2*l,.02,t-2*l,cn("#e9eef0"),0,u-.02,0),C(o,e-.04,n-u-.05,l-.02,a,0,u,-t/2+l/2),C(o,e-.04,n-u-.05,l-.02,a,0,u,t/2-l/2),C(o,l-.02,n-u-.05,t-2*l,a,-e/2+l/2,u,0),C(o,l-.02,n-u-.05,t-2*l,a,e/2-l/2,u,0),C(o,e,.05,l,a,0,n-.05,-t/2+l/2,{r:.02}),C(o,e,.05,l,a,0,n-.05,t/2-l/2,{r:.02}),C(o,l,.05,t-2*l+.02,a,-e/2+l/2,n-.05,0,{r:.02}),C(o,l,.05,t-2*l+.02,a,e/2-l/2,n-.05,0,{r:.02}),r&&C(o,e-2*l,.005,t-2*l,sn("#9fd0df",.5),0,n-.22,0);let h=mi();return pe(o,.018,.12,h,-e/2+.04,n,0,{seg:8}),ct(o,[-e/2+.04,n+.12,0],[-e/2+.16,n+.12,0],.014,h,8),db(o,e/2-.2,n,-t/2+.12,["sauge","blanc_pur"]),o}function mb(i={}){let{largeur:e=.9,profondeur:t=.9,hauteur:n=2,parois:s="angle"}=i,r=Ae("douche",[e,n,t],{fixation:"sol"});C(r,e,.04,t,cn("blanc_pur"),0,0,0,{r:.01}),pe(r,.04,.004,mi(),0,.04,0,{seg:12});let o=sn("#d4e9ef",.22),a=mi();C(r,e-.02,n-.05,.008,o,0,.05,t/2-.01),C(r,e-.02,.025,.02,a,0,n-.02,t/2-.01),C(r,.02,n-.05,.02,a,-e/2+.01,.05,t/2-.01),s==="angle"&&(C(r,.008,n-.05,t-.02,o,e/2-.01,.05,0),C(r,.02,.025,t-.02,a,e/2-.01,n-.02,0)),C(r,.02,.3,.02,a,e*.1,1,t/2+.012);let c=-t/2+.05;return pe(r,.012,1.9,a,-.1,.1,c,{seg:8}),ct(r,[-.1,1.98,c],[-.1,1.98,c+.3],.011,a,8),pe(r,.12,.012,a,-.1,1.95,c+.32,{seg:18}),C(r,.16,.06,.05,a,-.1,1.05,c,{r:.012}),C(r,.25,.015,.1,ke("#2c2d30"),.22,1.25,c),pe(r,.025,.14,$e("sauge"),.16,1.265,c,{seg:8}),pe(r,.022,.11,$e("terracotta"),.24,1.265,c,{seg:8}),r}function gb(i={}){let{largeur:e=.8,profondeur:t=.48,couleur:n="bois_clair",facade:s="sauge",hauteur:r=.85,double:o=e>=1.2}=i,a=Ae("lavabo",[e,r+.35,t],{fixation:"mur"}),c=oe(n,He),l=.45,u=r-.15-l+.15;C(a,e,l,t,c,0,r-l,0,{r:.01}),C(a,e-.03,l-.1,.02,oe(s,$e),0,r-l+.03,t/2,{r:.004}),C(a,e*.3,.015,.02,ke("#b99a62"),0,r-.1,t/2+.015,{r:.005});let h=o?[-e/4,e/4]:[0],f=$t("vasque",[[0,.01],[.17,0],[.2,.05],[.205,.13],[.19,.13],[.18,.06],[0,.035]],20),d=mi();for(let _ of h)fe(a,f,cn("blanc_pur"),_,r,.02,{sz:.8}),pe(a,.016,.28,d,_,r,-t/2+.06,{seg:8}),ct(a,[_,r+.28,-t/2+.06],[_,r+.28,-t/2+.2],.012,d,8);pe(a,.03,.15,$e("terracotta"),e/2-.08,r,-t/2+.08,{seg:10}),pe(a,.008,.03,d,e/2-.08,r+.15,-t/2+.08,{seg:5});let p=zn({taille:"mini",espece:"touffe",pot:"blanc",graine:6});return p.position.set(-e/2+.09,r,-t/2+.09),a.add(p),a}function _b(i={}){let e=Ae("wc",[.38,.85,.55],{fixation:"mur"}),t=cn("blanc_pur"),s=fe(e,$t("cuvette",[[0,0],[.11,0],[.17,.12],[.18,.2],[.17,.21],[0,.21]],16),t,0,.2,.06,{sz:1.3});return C(e,.36,.22,.12,t,0,.2,-.2,{r:.04}),fe(e,$t("abattant",[[0,0],[.175,0],[.18,.02],[0,.025]],16),cn("blanc"),0,.41,.06,{sz:1.3}),C(e,.24,.16,.012,_e("blanc"),0,.95,-.27,{r:.006}),C(e,.09,.1,.006,mi(),-.05,.98,-.262,{r:.008}),C(e,.09,.1,.006,mi(),.05,.98,-.262,{r:.008}),pe(e,.055,.1,Ze("blanc_pur"),.32,.65,-.22,{axe:"x",seg:10}),e}function xb(i={}){let{forme:e="rond",diametre:t=.6,largeur:n=.6,hauteur_miroir:s=.8,hauteur:r=1.55,couleur:o="bois_clair"}=i;if(e==="rond"){let c=Ae("miroir",[t,t,.04],{fixation:"mur"}),l=t/2;return fe(c,Nn(l,.022,6,32),oe(o,He),0,r,0),fe(c,rn(l,l,.01,32),ku(),0,r,-.005,{rx:Math.PI/2}),c}let a=Ae("miroir",[n,s,.03],{fixation:"mur"});return C(a,n,s,.02,oe(o,He),0,r-s/2,-.005,{r:.008}),C(a,n-.05,s-.05,.004,ku(),0,r-s/2+.025,.006),a}function yb(i={}){let{largeur:e=.5,hauteur_appareil:t=1.2,hauteur:n=.25,couleur:s="blanc",serviette:r="sauge"}=i,o=Ae("seche_serviettes",[e,t,.1],{fixation:"mur",interactif:!0,role:"seche_serviettes"}),a=s==="noir"?ke("#2c2d30"):$e(s);for(let u of[-1,1])pe(o,.016,t,a,u*(e/2-.02),n,0,{seg:8});let c=12;for(let u=0;u<c;u++){let h=n+.05+u/(c-1)*(t-.1)+(u>5?.04:0)-.02;pe(o,.01,e-.04,a,0,h,0,{axe:"x",seg:6})}let l=n+t*.62;return C(o,e*.75,.45,.025,Ze(r),0,l-.45,.035,{r:.01}),C(o,e*.75,.3,.025,Ze(r),0,l-.3,-.03,{r:.01}),C(o,e*.75,.04,.085,Ze(r),0,l-.02,0,{r:.018}),o}var oh={};ni(oh,{animerLaveLinge:()=>rh,etagere_buanderie:()=>Sb,etatLaveLinge:()=>sh,lave_linge:()=>bb,panier_linge:()=>Eb,seche_linge:()=>Mb});var ih=new Map;function vb(i){if(!ih.has(i)){let e=ke(i).clone();e.side=Zt,e.userData.partage=!0,ih.set(i,e)}return ih.get(i)}function lp(i,e,t,n,s,r=0,o=.42){let a=$e(s),c=.015,l=n/2-.02,u=-.01-.015,h=n-.05;C(i,e,.025,n-.02,a,0,t-.025,-.01,{r:.01});for(let d of[-1,1])C(i,c,t-.045,h,a,d*(e/2-c/2),.02,u,{r:.006});C(i,e-2*c,c,h,_e("gris"),0,.02,u),C(i,e-2*c,t-.045,c,_e("gris"),0,.02,-n/2+.02);let f=At(`facade_ll_${e}_${t}_${r}_${o}`,()=>{let d=new pn,p=e/2-.008,_=.028,m=t-.033;if(d.moveTo(-p,_),d.lineTo(p,_),d.lineTo(p,m),d.lineTo(-p,m),d.lineTo(-p,_),r){let g=new Ti;g.absarc(0,o,r,0,Math.PI*2,!0),d.holes.push(g)}return new wi(d,{depth:.022,bevelEnabled:!0,bevelThickness:.006,bevelSize:.007,bevelSegments:1,curveSegments:20})});fe(i,f,a,0,0,l-.028);for(let d of[-1,1])for(let p of[-1,1])pe(i,.02,.02,_e("anthracite"),d*(e/2-.06),0,p*(n/2-.08),{seg:6});return C(i,e-.02,.012,.004,_e("gris_clair"),0,t-.135,l+.001),C(i,.2,.085,.012,a,-e/2+.12,t-.115,l+.004,{r:.004}),C(i,.08,.012,.006,_e("gris_clair"),-e/2+.12,t-.06,l+.012),pe(i,.035,.025,mi(),.17,t-.075,l+.012,{axe:"z",seg:16}),C(i,.006,.026,.004,_e("anthracite"),.17,t-.088,l+.026),l}function bb(i={}){let{largeur:e=.6,hauteur:t=.85,profondeur:n=.6,couleur:s="blanc_pur",linge:r=["corail","bleu_ciel","moutarde","menthe"]}=i,o=Ae("lave_linge",[e,t,n],{fixation:"sol",interactif:!0,role:"lave_linge",animations:{tambour:{axe:"z",vitesse:6},voyant:"emissive"}}),a=.42,c=.165,l=lp(o,e,t,n,s,c+.012,a),u=fe(o,At("afficheur_ll",()=>new nn(.11,.045)),Sn("#1d2226",{roughness:.25}),.02,t-.075,l+.005);u.name="afficheur";let h=fe(o,St(.009,8,6),Sn("#4d5256",{roughness:.3}),.1,t-.06,l+.006);h.name="voyant";for(let _=0;_<3;_++)pe(o,.008,.006,_e("gris"),-.03+_*.03,t-.11,l+.004,{axe:"z",seg:8});let f=new rt;f.name="tambour",f.position.set(0,a,l-.17),fe(f,rn(c+.01,c+.01,.3,18,!0),vb("#c3c7ca"),0,0,0,{rx:Math.PI/2}),fe(f,rn(c+.01,c+.01,.01,18),ke("#aeb3b7"),0,0,-.15,{rx:Math.PI/2});for(let _=0;_<3;_++){let m=_/3*Math.PI*2,g=fe(f,At("aube",()=>new Mt(.05,.04,.26)),ke("#9ea3a8"),Math.cos(m)*(c-.01),Math.sin(m)*(c-.01),0);g.rotation.z=m+Math.PI/2}for(let _=0;_<8;_++){let m=_/8*Math.PI*2;fe(f,rn(.012,.012,.004,6),_e("#6f7478"),Math.cos(m)*.09,Math.sin(m)*.09,-.143,{rx:Math.PI/2})}r.forEach((_,m)=>{let g=-Math.PI/2+(m-(r.length-1)/2)*.55;fe(f,Li(.06+m%2*.012,1),Ze(_),Math.cos(g)*(c-.06),Math.sin(g)*(c-.06),-.04+m%2*.05,{sx:1.25,sz:1.3})}),o.add(f),fe(o,Nn(c+.008,.022,4,20),_e("#3d4144"),0,a,l-.005);let d=new rt;d.name="hublot",d.position.set(-.2,a,l+.02);let p=new rt;return p.position.set(.2,0,0),fe(p,Nn(.2,.03,6,24),$e("blanc"),0,0,0),fe(p,Nn(.17,.016,4,24),mi(),0,0,.022),fe(p,$t("vitre_hublot",[[0,.045],[.08,.04],[.14,.02],[.175,0]],24),sn("#9fc0cc",.3),0,0,0,{rx:Math.PI/2}),C(p,.035,.08,.03,_e("gris_clair"),.2,-.04,0,{r:.012}),d.add(p),o.add(d),o}function sh(i,e,{couleur:t="#5fd38a"}={}){return i.traverse(n=>{(n.name==="voyant"||n.name==="afficheur")&&n.material&&(n.material.emissive.set(n.name==="voyant"?t:"#7fd9ff"),n.material.emissiveIntensity=e?n.name==="voyant"?2.5:.9:0)}),i.userData.enMarche=!!e,i}function rh(i,e){if(!i.userData.enMarche)return!1;let t=i.getObjectByName("tambour");return t&&(t.rotation.z+=e*(i.userData.animations?.tambour?.vitesse??6)),!0}function Mb(i={}){let{largeur:e=.6,hauteur:t=.85,profondeur:n=.6,couleur:s="blanc_pur"}=i,r=Ae("seche_linge",[e,t,n],{fixation:"sol",interactif:!0,role:"seche_linge",animations:{voyant:"emissive"}}),o=lp(r,e,t,n,s),a=fe(r,St(.009,8,6),Sn("#4d5256",{roughness:.3}),.1,t-.06,o+.006);a.name="voyant";let c=new rt;return c.name="hublot",c.position.set(0,.42,o+.02),fe(c,Nn(.2,.032,8,28),$e("gris_clair"),0,0,0),fe(c,rn(.19,.19,.02,28),sn("#5b6d78",.75),0,0,0,{rx:Math.PI/2}),fe(c,rn(.11,.11,.01,24),_e("#4a5258"),0,0,-.012,{rx:Math.PI/2}),r.add(c),r}function Sb(i={}){let{largeur:e=.9,hauteur:t=1.8,profondeur:n=.4,couleur:s="bois_clair"}=i,r=Ae("etagere_buanderie",[e,t,n],{fixation:"sol"}),o=oe(s,He),a=ke("#2c2d30");for(let h of[-1,1])for(let f of[-1,1])C(r,.03,t,.03,a,h*(e/2-.015),0,f*(n/2-.015));let c=[.08,.5,.95,1.4,t-.03];for(let h of c)C(r,e,.025,n,o,0,h,0);let l=He("bois_miel");for(let h of[-1,1])C(r,e/2-.06,.26,n-.06,l,h*e/4,.105,0,{r:.02}),C(r,e/2-.1,.012,n-.1,_e("#9b7a52"),h*e/4,.36,0);[["bleu_ciel",.1,.24],["menthe",.08,.2],["blanc_pur",.09,.22],["corail",.06,.16]].forEach(([h,f,d],p)=>{C(r,f,d,.08,$e(h),-e/2+.12+p*.13,.525,.02,{r:.015}),pe(r,.018,.03,$e("blanc"),-e/2+.12+p*.13,.525+d,.02,{seg:8})});for(let h=0;h<2;h++)["blanc_pur","sauge","creme","blanc_pur"].forEach((f,d)=>C(r,.3,.055,n-.08,Ze(f),-e/4+h*e/2,.975+d*.055,0,{r:.02}));return C(r,.36,.2,n-.08,l,-e/4,1.425,0,{r:.02}),pe(r,.06,.16,sn("#e8f0ec",.5),e/4,1.425,0,{seg:10}),r}function Eb(i={}){let{hauteur:e=.6,diametre:t=.42,couleur:n="bois_miel"}=i,s=Ae("panier_linge",[t,e,t],{fixation:"sol"}),r=t/2,o=oe(n,He);fe(s,$t(`panier_${Math.round(e*100)}`,[[0,0],[r*.82,0],[r,e*.95],[r*1.02,e]],16),o,0,0,0);for(let c of[.15,.35,.55])c<e&&fe(s,Nn(r*(.84+c/e*.16),.008,3,20),He("bois_noyer"),0,c*e/.6,0,{rx:Math.PI/2});fe(s,Li(r*.6,1),Ze("bleu_ciel"),-.03,e-.02,.02,{sy:.5}),fe(s,Li(r*.45,1),Ze("corail"),.07,e+.02,-.03,{sy:.5});let a=new rt;return a.position.set(0,e,-r),a.rotation.x=-.6,fe(a,rn(r*1.04,r*1.04,.025,16),o,0,.0125,r),s.add(a),s}var uh={};ni(uh,{allumer:()=>ch,eteindre:()=>lh,lampadaire:()=>Cb,lampe_chevet:()=>Pb,plafonnier:()=>wb,ruban_led:()=>Ib,spots:()=>Rb,suspension:()=>Ab});var Tb="#ffd29a";function ys(i,e,t={}){return Ae(i,e,{interactif:!0,role:"lampe",animations:{ampoule:"emissive"},...t})}function vs(i,e,t,n,s,r,o={}){let a=fe(i,e,Sn(t),n,s,r,o);return a.name="ampoule",a}function hr(i,e,t,n,s){let r=new us(Fc());return r.name="halo",r.scale.set(e,e,1),r.position.set(t,n,s),r.visible=!1,r.renderOrder=2,i.add(r),r}function ch(i,{couleur:e=Tb,intensite:t=1}={}){let n=new Oe(Array.isArray(e)?`rgb(${e[0]},${e[1]},${e[2]})`:Gt(e)),s=Math.max(0,Math.min(1,t));return i.traverse(r=>{r.name==="ampoule"&&r.material?(r.material.emissive.copy(n),r.material.emissiveIntensity=.5+2.3*s):r.name==="halo"&&r.material&&(r.material.color.copy(n),r.material.opacity=.25+.55*s,r.visible=!0)}),i.userData.allume=!0,i}function lh(i){return i.traverse(e=>{e.name==="ampoule"&&e.material?e.material.emissiveIntensity=0:e.name==="halo"&&(e.visible=!1)}),i.userData.allume=!1,i}function wb(i={}){let{diametre:e=.38,plafond:t=2.5,couleur:n="blanc"}=i,s=e/2,r=ys("plafonnier",[e,.12,e],{fixation:"plafond"});pe(r,s,.025,oe(n,_e),0,t-.025,0,{seg:20});let o=$t(`dome_${s}`,[[0,-.085],[s*.55,-.075],[s*.85,-.05],[s*.95,-.02],[s*.95,0]],20);return vs(r,o,"#f7f3ea",0,t-.025,0),hr(r,e*3,0,t-.08,0),r}function Ab(i={}){let{plafond:e=2.5,longueur:t=.75,style:n="cloche",diametre:s=.36,couleur:r=n==="rotin"?"bois_miel":"sauge_fonce"}=i,o=s/2,a=ys("suspension",[s,t+.3,s],{fixation:"plafond"}),c=e-t;if(pe(a,.05,.03,_e("blanc"),0,e-.03,0,{seg:12}),pe(a,.004,t,_e("noir"),0,c,0,{seg:4}),n==="globe")pe(a,.025,.04,ke("#b9a37a"),0,c-.04,0,{seg:10}),vs(a,St(o,16,12),"#f6f2ea",0,c-.04-o*.95,0),hr(a,s*3,0,c-.04-o,0);else{let l=n==="rotin"?[[.02,0],[o*.55,-.02],[o*.9,-o*.45],[o,-o*.9],[o*.98,-o*.95]]:[[.025,0],[.06,-.01],[o*.45,-o*.35],[o*.85,-o*.75],[o,-o*.95],[o*.99,-o]],u=n==="rotin"?He(r):oe(r,_e),h=fe(a,$t(`abat_${n}_${o}`,l,18),u,0,c,0);h.material=u;let f=fe(a,h.geometry,_e(n==="rotin"?"creme":"blanc"),0,c-.003,0,{sx:.985,sz:.985});f.material=up(n==="rotin"?"creme":"blanc"),vs(a,St(.045,10,8),"#fff6e6",0,c-o*.55,0),hr(a,s*2.6,0,c-o*.75,0)}return a}var ah=new Map;function up(i){if(!ah.has(i)){let e=_e(i).clone();e.side=Zt,e.userData.partage=!0,ah.set(i,e)}return ah.get(i)}function Rb(i={}){let{nombre:e=4,disposition:t="ligne",colonnes:n=2,espacement:s=1,plafond:r=2.5,diametre:o=.085}=i,a=[];if(t==="grille"){let m=Math.ceil(e/n);for(let g=0;g<e;g++){let v=g%n,E=Math.floor(g/n);a.push([(v-(n-1)/2)*s,(E-(m-1)/2)*s])}}else for(let m=0;m<e;m++)a.push([(m-(e-1)/2)*s,0]);let c=Math.max(...a.map(m=>Math.abs(m[0])))*2+o,l=Math.max(...a.map(m=>Math.abs(m[1])))*2+o,u=ys("spots",[c,.02,l],{fixation:"plafond",nombre:e}),h=o/2,f=[],d=[];for(let[m,g]of a)f.push(Nn(h,.008,4,14).clone().rotateX(Math.PI/2).translate(m,r-.006,g)),d.push(rn(h*.8,h*.8,.01,12).clone().translate(m,r-.012,g));let p=new Le(ln(f),ke("#e6e6e3"));u.add(p);let _=new Le(ln(d),Sn("#fbf8f0"));return _.name="ampoule",u.add(_),u}function Cb(i={}){let{hauteur:e=1.6,style:t="abat_jour",couleur:n="lin"}=i;if(t==="arc"){let a=ys("lampadaire",[1.2,1.95,.35],{fixation:"sol"}),c=ke("#b99a62");pe(a,.15,.04,_e("anthracite"),-.45,0,0,{seg:20,r:0});let l=[];for(let d=0;d<=10;d++){let p=d/10,_=p*Math.PI*.62;l.push(new L(-.45+Math.sin(_)*.85,.04+Math.sin(Math.min(1,p*1.25)*Math.PI/2)*1.75+(p>.8?-(p-.8)*.9:0),0))}let u=new hi(l);a.add(new Le(At("arc_lamp",()=>new Ci(u,20,.013,5)),c));let h=l[10],f=[[.02,0],[.08,-.04],[.16,-.14],[.17,-.16]];return fe(a,$t("arc_abat",f,18),ke("#b99a62"),h.x,h.y,0),fe(a,$t("arc_abat",f,18),up("blanc"),h.x,h.y-.003,0,{sx:.98,sz:.98}),vs(a,St(.05,10,8),"#fff6e6",h.x,h.y-.1,0),hr(a,.7,h.x,h.y-.14,0),a}let s=ys("lampadaire",[.42,e,.42],{fixation:"sol"});pe(s,.14,.025,ke("#3a3b3d"),0,0,0,{seg:18}),pe(s,.012,e-.3,ke("#b99a62"),0,.025,0,{seg:6});let r=$t("abat_lampadaire",[[.2,0],[.15,.32]],18),o=vs(s,r,Gt(n),0,e-.34,0);return o.material.side=Ut,hr(s,1.1,0,e-.2,0),s}function Pb(i={}){let{hauteur:e=.42,couleur:t="terracotta",abat_jour:n="lin"}=i,s=ys("lampe_chevet",[.26,e,.26],{fixation:"pose"}),r=e*.55;fe(s,$t(`pied_chevet_${r}`,[[0,0],[.06,0],[.085,r*.35],[.07,r*.75],[.025,r*.95],[.02,r]],14),oe(t,cn),0,0,0),pe(s,.006,e*.2,ke("#b99a62"),0,r,0,{seg:5});let o=e-r-.04,a=vs(s,$t(`abat_chevet_${o}`,[[.13,0],[.09,o]],16),Gt(n),0,r+.04,0);return a.material.side=Ut,hr(s,.75,0,r+.04+o/2,0),s}function Ib(i={}){let{longueur:e=2,hauteur:t=1.4}=i,n=ys("ruban_led",[e,.015,.02],{fixation:"mur"});return C(n,e,.012,.018,ke("#cfd2d4"),0,t,0),vs(n,At(`ruban_${e}`,()=>new Mt(e-.01,.01,.006)),"#f4f2ec",0,t+.006,.01),n}var hh={};ni(hh,{baie:()=>zb,echelle:()=>Db,escalier_colimacon:()=>Nb,fenetre:()=>Bb,filet:()=>Ub,garde_corps:()=>Fb,porte:()=>Ob,station_aspirateur:()=>Lb});function Lb(i={}){let{largeur:e=.34,profondeur:t=.42,hauteur:n=.58,robot:s=!0,diametre_robot:r=.35,couleur:o="blanc_pur",capot:a="#8f9499"}=i,c=r/2,l=s?c+.06:.06,u=t+l,h=Ae("station_aspirateur",[Math.max(e,r),n,u],{fixation:"sol",interactif:!0,role:"aspirateur",animations:{robot:"visible"}}),f=-u/2,d=f+t,p=oe(o,$e),_=$e(Gt(a)),m=_e("anthracite");C(h,e,.025,u-.02,_e("gris_clair"),0,0,(f+f+u)/2+.01,{r:.008}),C(h,e,n-.06,t,p,0,.025,f+t/2,{r:.03,s:2}),C(h,e+.01,.05,t+.01,_,0,n-.05,f+t/2,{r:.02,s:2}),C(h,e*.36,.22,.012,sn("#9fc6d6",.75),-e*.2,n-.32,d,{r:.004}),C(h,e*.36,.22,.012,sn("#9aa3a8",.75),e*.2,n-.32,d,{r:.004}),C(h,e*.78,.09,.02,m,0,.025,d-.005,{r:.01});let g=fe(h,St(.008,8,6),Sn("#5fd08a"),0,n-.075,d+.007);if(g.name="voyant",s){let v=new rt;v.name="robot",v.position.set(0,.025,d-.05+c),pe(v,c,.075,p,0,.004,0,{seg:28}),pe(v,c+.006,.03,m,0,.01,0,{seg:28}),pe(v,c*.92,.006,_,0,.079,0,{seg:28}),pe(v,.045,.022,m,0,.085,-c*.25,{seg:16}),C(v,.06,.006,.02,_,0,.083,c*.55,{r:.003}),h.add(v)}return h}function Db(i={}){let{hauteur:e=2.1,largeur:t=.44,inclinaison:n=75,depasse:s=.85,pas:r=.28,couleur:o="bois_clair"}=i,a=e/Math.tan(xs(n)),c=.05,l=a+c,u=Ae("echelle",[t+c,e+s,l],{fixation:"sol"}),h=oe(o,He),f=ke("#9ea1a4"),d=l/2-c/2,p=-l/2+c/2;for(let m of[-1,1]){let g=m*t/2;ct(u,[g,0,d],[g,e,p],c/2,h,6),ct(u,[g,e-.03,p],[g,e+s,p],c/2.4,h,6),pe(u,c*.55,.012,f,g,0,d,{seg:8})}let _=Math.max(2,Math.floor(e/r));for(let m=1;m<=_;m++){let g=m*e/(_+1)/e,v=g*e,E=d+(p-d)*g;pe(u,.016,t,h,0,v,E,{axe:"x",seg:8})}return u}function Nb(i={}){let{rayon:e=1,hauteur:t=2.7,marches:n=14,sens:s="antihoraire",angle_total:r=330,angle_depart:o=0,couleur:a="bois_clair",metal:c="anthracite",rampe:l=!0}=i,u=Ae("escalier_colimacon",[2*e,t+.95,2*e],{fixation:"sol",sens:s,marches:n}),h=oe(a,He),f=ke(Gt(c)),d=s==="horaire"?-1:1,p=xs(r)/n,_=t/(n+1),m=.07,g=.045,v=At(`marche_${e}_${Math.round(p*1e3)}`,()=>{let x=new pn,M=p/2*1.08,S=5;x.moveTo(Math.sin(-M)*m,Math.cos(-M)*m);for(let y=0;y<=S;y++){let w=-M+2*M*y/S;x.lineTo(Math.sin(w)*e,Math.cos(w)*e)}x.lineTo(Math.sin(M)*m,Math.cos(M)*m),x.lineTo(Math.sin(-M)*m,Math.cos(-M)*m);let A=new wi(x,{depth:g,bevelEnabled:!0,bevelThickness:.006,bevelSize:.008,bevelSegments:1});return A.rotateX(Math.PI/2),A});pe(u,m,t+.95,f,0,0,0,{seg:12}),pe(u,m*1.9,.02,f,0,0,0,{seg:14});let E=[];for(let x=0;x<n;x++){let M=xs(o)+d*x*p,S=(x+1)*_,A=fe(u,v,h,0,S-.006,0,{ry:M});if(A.name="",pe(u,m*1.18,.05,f,0,S-g-.04,0,{seg:10}),l){let y=e-.04,w=M+d*p*.25;pe(u,.011,.9,f,Math.sin(w)*y,S,Math.cos(w)*y,{seg:5})}}if(l){let x=e-.04,M=xs(o)-d*p*.25,S=xs(o)+d*(n-1+.25)*p+d*p*.6,A=_+.9-.02,y=n*_+.9+_*.6,w=Math.max(24,n*3);for(let F=0;F<=w;F++){let R=F/w,N=M+(S-M)*R;E.push(new L(Math.sin(N)*x,A+(y-A)*R,Math.cos(N)*x))}let I=new hi(E);u.add(new Le(new Ci(I,w,.022,6),h))}return u}function Ub(i={}){let{polygone:e=[[-1.6,-1.1],[1.6,-1.1],[1.6,1.1],[-1.6,1.1]],mode:t="cordes",couleur:n="#f1ebdd",cordage:s="#c7ae82",centrer:r=!0}=i,o=i.maille??(t==="cordes"?.2:.09),a=e.map(m=>m[0]),c=e.map(m=>m[1]),l=(Math.min(...a)+Math.max(...a))/2,u=(Math.min(...c)+Math.max(...c))/2,h=r?e.map(([m,g])=>[m-l,g-u]):e.map(m=>[...m]);a=h.map(m=>m[0]),c=h.map(m=>m[1]);let f=Math.max(...a)-Math.min(...a),d=Math.max(...c)-Math.min(...c),p=Ae("filet",[f,.05,d],{fixation:"suspendu",role:"filet",posable:!1,centre:[l,u],polygone:h});if(t==="cordes"){let{epaisseur_corde:m=.032}=i,g=[],v=Math.hypot(f,d)+o,E=Math.SQRT1_2,x=(M,S,A,y)=>{let w=[];for(let I=0;I<h.length;I++){let[F,R]=h[I],[N,D]=h[(I+1)%h.length],U=N-F,H=D-R,k=A*H-y*U;if(Math.abs(k)<1e-9)continue;let Z=((F-M)*H-(R-S)*U)/k,G=((F-M)*y-(R-S)*A)/k;G>=0&&G<1&&w.push(Z)}w.sort((I,F)=>I-F);for(let I=0;I+1<w.length;I+=2){let F=w[I+1]-w[I];if(F<.02)continue;let R=new Mt(F,.014,m);R.rotateY(-Math.atan2(y,A));let N=(w[I]+w[I+1])/2;R.translate(M+A*N,0,S+y*N),g.push(R)}};for(let M=-v;M<=v;M+=o)x(-M*E,M*E,E,E),x(M*E,M*E,E,-E);if(g.length){let M=ln(g);g.forEach(A=>A.dispose());let S=new Le(M,_e(Gt(n)));S.name="cordes",p.add(S)}}else if(t==="lignes"){let m=[],g=(S,A,y,w)=>{let I=[];for(let F=0;F<h.length;F++){let[R,N]=h[F],[D,U]=h[(F+1)%h.length],H=D-R,k=U-N,Z=y*k-w*H;if(Math.abs(Z)<1e-9)continue;let G=((R-S)*k-(N-A)*H)/Z,V=((R-S)*w-(N-A)*y)/Z;V>=0&&V<1&&I.push(G)}I.sort((F,R)=>F-R);for(let F=0;F+1<I.length;F+=2)m.push(S+y*I[F],0,A+w*I[F],S+y*I[F+1],0,A+w*I[F+1])},v=Math.hypot(f,d),E=Math.SQRT1_2;for(let S=-v;S<=v;S+=o)g(S*E,S*E*-1+0,E,E),g(S*E,S*E,E,-E);let x=new Nt;x.setAttribute("position",new nt(m,3));let M=new Or(x,new Ks({color:Gt(n),transparent:!0,opacity:.85}));M.name="maillage",p.add(M)}else{let m=new pn(h.map(([M,S])=>new te(M,S))),g=new Yn(m);g.rotateX(Math.PI/2);let v=g.attributes.position,E=g.attributes.uv;for(let M=0;M<v.count;M++)E.setXY(M,v.getX(M)/o,v.getZ(M)/o);let x=new Le(g,Yd(Gt(n)));x.name="maillage",x.renderOrder=1,p.add(x)}let _=Ze(Gt(s));for(let m=0;m<h.length;m++){let[g,v]=h[m],[E,x]=h[(m+1)%h.length];ct(p,[g,0,v],[E,0,x],.022,_,6),fe(p,St(.04,8,6),ke("#9ea1a4"),g,0,v);let M=Math.hypot(E-g,x-v),S=Math.floor(M/.35);for(let A=1;A<S;A++){let y=A/S,w=g+(E-g)*y,I=v+(x-v)*y;fe(p,St(.016,5,4),_,w,0,I)}}return p}function Fb(i={}){let{longueur:e=2,hauteur:t=1,type:n="verre",metal:s="anthracite",main_courante:r="bois_clair"}=i,o=Ae("garde_corps",[e,t,.06],{fixation:"sol",type:n}),a=ke(Gt(s)),c=Math.max(1,Math.round(e/1));for(let l=0;l<=c;l++)C(o,.04,t-.04,.04,a,-e/2+.02+l/c*(e-.04),0,0);if(C(o,e,.04,.07,oe(r,He),0,t-.04,0,{r:.015}),n==="verre")for(let l=0;l<c;l++){let u=-e/2+.04+l/c*(e-.04),h=-e/2+(l+1)/c*(e-.04);C(o,h-u-.02,t-.2,.012,sn("#d4e9ef",.25),(u+h)/2,.1,0)}else{C(o,e,.03,.03,a,0,.08,0);let l=Math.round(e/.11);for(let u=1;u<l;u++)pe(o,.009,t-.16,a,-e/2+u/l*e,.11,0,{seg:5})}return o}function Ob(i={}){let{largeur:e=.83,hauteur:t=2.04,epaisseur_mur:n=.1,ouverture:s=0,sens:r="gauche",couleur:o="blanc",style:a="pleine",bati:c="blanc"}=i,l=Ae("porte",[e+.14,t+.07,n+.02],{fixation:"mur"}),u=oe(c,$e),h=oe(o,$e),f=.03;C(l,f,t,n,u,-e/2-f/2,0,0),C(l,f,t,n,u,e/2+f/2,0,0),C(l,e+2*f,f,n,u,0,t,0);for(let x of[-1,1]){let M=x*(n/2+.006);C(l,.06,t+.03,.012,u,-e/2-.03,0,M),C(l,.06,t+.03,.012,u,e/2+.03,0,M),C(l,e+.18,.06,.012,u,0,t+0,M)}let d=r==="droite"?1:-1,p=new rt;p.name="vantail",p.position.set(d*(e/2-.005),0,n/2-.02),p.rotation.y=d*xs(s);let _=e-.01,m=.04,g=-d*_/2;if(a==="vitree")C(p,_,.25,m,h,g,.005,0,{r:.004}),C(p,_,.2,m,h,g,t-.21,0,{r:.004}),C(p,.12,t-.46,m,h,g-_/2+.06,.255,0),C(p,.12,t-.46,m,h,g+_/2-.06,.255,0),C(p,_-.24,t-.46,.008,sn("#dde9ec",.35),g,.255,0);else{C(p,_,t-.01,m,h,g,.005,0,{r:.004});for(let x of[-1,1])C(p,_-.2,.7,.004,h,g,.25,x*(m/2+.002)),C(p,_-.2,.7,.004,h,g,1.15,x*(m/2+.002))}let v=ke("#2c2d30"),E=g-d*(_/2-.07);for(let x of[-1,1])pe(p,.025,.012,v,E,1,x*(m/2+.006),{axe:"z",seg:10}),C(p,.12,.018,.018,v,E+d*.05,.99,x*(m/2+.03),{r:.008});return l.add(p),l}function Bb(i={}){let{largeur:e=1.2,hauteur:t=1.25,allege:n=.9,epaisseur_mur:s=.25,vantaux:r=e>=.85?2:1,couleur:o="blanc",tablette:a="bois_clair"}=i,c=Ae("fenetre",[e,t,s],{fixation:"mur",allege:n}),l=oe(o,$e),u=sn("#cfe6ef",.3),h=.06,f=.07,d=n;C(c,e,h,f,l,0,d,0),C(c,e,h,f,l,0,d+t-h,0),C(c,h,t-2*h,f,l,-e/2+h/2,d+h,0),C(c,h,t-2*h,f,l,e/2-h/2,d+h,0);let p=(e-2*h)/r,_=t-2*h,m=.05;for(let g=0;g<r;g++){let v=-e/2+h+p*(g+.5);C(c,p,m,.06,l,v,d+h,.005),C(c,p,m,.06,l,v,d+h+_-m,.005),C(c,m,_-2*m,.06,l,v-p/2+m/2,d+h+m,.005),C(c,m,_-2*m,.06,l,v+p/2-m/2,d+h+m,.005),C(c,p-2*m,_-2*m,.008,u,v,d+h+m,.005),(r===1||g===0)&&C(c,.018,.12,.025,ke("#c9ccce"),v+p/2-.03,d+t/2-.06,.05,{r:.006})}return a&&n>.05&&C(c,e+.1,.025,s/2+.04,oe(a,He),0,d-.025,s/4+.02,{r:.006}),c}function zb(i={}){let{largeur:e=2.4,hauteur:t=2.15,epaisseur_mur:n=.25,couleur:s="anthracite"}=i,r=Ae("baie",[e,t,n],{fixation:"mur"}),o=$e(Gt(s)),a=sn("#cfe6ef",.28),c=.06;C(r,e,c,.12,o,0,0,0),C(r,e,c,.12,o,0,t-c,0),C(r,c,t-2*c,.12,o,-e/2+c/2,c,0),C(r,c,t-2*c,.12,o,e/2-c/2,c,0);let l=(e-2*c)/2+.04,u=t-2*c,h=.06;return[[-1,-.025],[1,.025]].forEach(([f,d])=>{let p=f*(l/2-.02);C(r,l,h,.045,o,p,c,d),C(r,l,h,.045,o,p,c+u-h,d),C(r,h,u-2*h,.045,o,p-l/2+h/2,c+h,d),C(r,h,u-2*h,.045,o,p+l/2-h/2,c+h,d),C(r,l-2*h,u-2*h,.008,a,p,c+h,d),C(r,.02,.3,.03,ke("#c9ccce"),p-f*(l/2-.08),1,d+.035*Math.sign(d),{r:.008})}),r}var Hb={salon:Zu,chambre:Qu,cuisine:eh,bureau:th,sdb:nh,buanderie:oh,deco:Yu,luminaires:uh,special:hh},hp={canape:"Canap\xE9 3 places",canape_angle:"Canap\xE9 d'angle",fauteuil:"Fauteuil",table_basse:"Table basse",meuble_tv:"Meuble TV + TV",tv:"T\xE9l\xE9viseur",bibliotheque:"Biblioth\xE8que",tapis:"Tapis",chaise:"Chaise",table_manger:"Table \xE0 manger + chaises",buffet:"Buffet",lit_double:"Lit double",lit_enfant:"Lit enfant cabane",lit_mezzanine:"Lit mezzanine",table_chevet:"Table de chevet",armoire:"Armoire",commode:"Commode",chaise_enfant:"Chaise enfant",bureau_enfant:"Bureau enfant",coffre_jouets:"Coffre \xE0 jouets",peluche:"Peluche",poster_cadre:"Poster encadr\xE9",cuisine_lineaire:"Cuisine lin\xE9aire",cuisine_L:"Cuisine en L",evier:"\xC9vier",plaques:"Plaques + four",four:"Colonne four",refrigerateur:"R\xE9frig\xE9rateur",tabouret:"Tabouret",ilot:"\xCElot + tabourets",bureau:"Bureau",fauteuil_bureau:"Fauteuil de bureau",ecran:"\xC9cran",lampe_bureau:"Lampe de bureau",etageres:"\xC9tag\xE8res murales",baignoire:"Baignoire",douche:"Douche vitr\xE9e",lavabo:"Lavabo + meuble",wc:"WC suspendu",miroir:"Miroir",seche_serviettes:"S\xE8che-serviettes",lave_linge:"Lave-linge",seche_linge:"S\xE8che-linge",etagere_buanderie:"\xC9tag\xE8re buanderie",panier_linge:"Panier \xE0 linge",plante:"Plante",coussin:"Coussin",cadre:"Cadre",vase:"Vase",horloge:"Horloge",rideaux:"Rideaux",petit_tapis:"Petit tapis",plafonnier:"Plafonnier",suspension:"Suspension",spots:"Spots encastr\xE9s",lampadaire:"Lampadaire",lampe_chevet:"Lampe de chevet",ruban_led:"Ruban LED",escalier_colimacon:"Escalier colima\xE7on",echelle:"\xC9chelle de mezzanine",station_aspirateur:"Station aspirateur robot",filet:"Filet tendu",garde_corps:"Garde-corps",porte:"Porte",fenetre:"Fen\xEAtre",baie:"Baie vitr\xE9e"},kb=new Set(["allumer","eteindre","etatLaveLinge","animerLaveLinge","coussinMesh","THEMES"]),kc={},fp={};for(let[i,e]of Object.entries(Hb))for(let[t,n]of Object.entries(e))typeof n=="function"&&!kb.has(t)&&hp[t]&&(kc[t]=n,fp[t]=i==="salon"&&["chaise","table_manger","buffet"].includes(t)?"sejour":i);var Vb={bibliotheque:{d:[.9,1.9,.32],f:"sol",t:2052},buffet:{d:[1.6,1.24,.48],f:"sol",t:1844},canape:{d:[2.26,.92,.94],f:"sol",t:1792},canape_angle:{d:[2.7,.92,1.9],f:"sol",t:2672},chaise:{d:[.44,.8,.47],f:"sol",t:444},fauteuil:{d:[.78,.9,.78],f:"sol",t:1240},meuble_tv:{d:[1.8,1.24,.44],f:"sol",t:1170},table_basse:{d:[.85,.7,.85],f:"sol",t:608},table_manger:{d:[2.25,1.11,1.63],f:"sol",t:3304},tapis:{d:[2.2,.01,1.6],f:"sol",t:96},tv:{d:[1.22,.76,.2],f:"pose",t:230,r:"tv"},armoire:{d:[1,2,.6],f:"sol",t:552},bureau_enfant:{d:[1,.79,.82],f:"sol",t:808},chaise_enfant:{d:[.36,.68,.37],f:"sol",t:312},coffre_jouets:{d:[.73,.72,.42],f:"sol",t:1750},commode:{d:[.9,.85,.49],f:"sol",t:736},lit_double:{d:[1.73,1.06,2.16],f:"sol",t:2120},lit_enfant:{d:[.98,1.56,2.02],f:"sol",t:1347},lit_mezzanine:{d:[2,1.87,1.27],f:"sol",t:2308},peluche:{d:[.17,.28,.14],f:"pose",t:730},poster_cadre:{d:[.42,.55,.03],f:"mur",t:50},table_chevet:{d:[.45,.5,.4],f:"sol",t:356},cuisine_L:{d:[3.02,2.18,2.2],f:"sol",t:4876},cuisine_lineaire:{d:[3.02,2.18,.63],f:"sol",t:3900},evier:{d:[.8,1.21,.63],f:"sol",t:820},four:{d:[.6,2.15,.63],f:"sol",t:912},ilot:{d:[1.8,1,1.14],f:"sol",t:1588},plaques:{d:[.6,.91,.63],f:"sol",t:1056},refrigerateur:{d:[.6,1.86,.68],f:"sol",t:660},tabouret:{d:[.35,.65,.36],f:"sol",t:280},bureau:{d:[1.4,1.21,.7],f:"sol",t:1314},ecran:{d:[.6,.47,.16],f:"pose",t:230,r:"ecran"},etageres:{d:[1.36,.99,.25],f:"mur",t:1184},fauteuil_bureau:{d:[.63,1.11,.63],f:"sol",t:1164},lampe_bureau:{d:[.15,.45,.43],f:"pose",t:304,r:"lampe"},baignoire:{d:[1.7,.69,.75],f:"sol",t:832},douche:{d:[.9,2.01,.92],f:"sol",t:548},lavabo:{d:[.8,.74,.5],f:"mur",t:1008},miroir:{d:[.64,.64,.04],f:"mur",t:512},seche_serviettes:{d:[.49,1.2,.09],f:"mur",t:676,r:"seche_serviettes"},wc:{d:[.55,.91,.57],f:"mur",t:728},etagere_buanderie:{d:[.9,1.8,.4],f:"sol",t:1920},lave_linge:{d:[.6,.85,.65],f:"sol",t:2730,r:"lave_linge"},panier_linge:{d:[.44,.86,.45],f:"sol",t:680},seche_linge:{d:[.6,.85,.63],f:"sol",t:1416,r:"seche_linge"},cadre:{d:[.5,.65,.03],f:"mur",t:62},coussin:{d:[.45,.45,.17],f:"pose",t:300},horloge:{d:[.32,.32,.04],f:"mur",t:424},petit_tapis:{d:[1,.01,1],f:"sol",t:448},plante:{d:[.83,.61,1.03],f:"sol",t:314},rideaux:{d:[1.7,2.41,.06],f:"mur",t:64},vase:{d:[.17,.32,.16],f:"pose",t:264},lampadaire:{d:[.39,1.58,.4],f:"sol",t:132,r:"lampe"},lampe_chevet:{d:[.26,.42,.26],f:"pose",t:192,r:"lampe"},plafonnier:{d:[.38,.11,.38],f:"plafond",t:240,r:"lampe"},ruban_led:{d:[2,.01,.02],f:"mur",t:24,r:"lampe"},spots:{d:[3.1,.02,.1],f:"plafond",t:640,r:"lampe"},suspension:{d:[.35,.93,.36],f:"plafond",t:564,r:"lampe"},baie:{d:[2.4,2.15,.15],f:"mur",t:384},echelle:{d:[.5,2.96,.61],f:"sol",t:384},escalier_colimacon:{d:[2.02,3.65,2.01],f:"sol",t:2288},station_aspirateur:{d:[.36,.58,.69],f:"sol",t:1620,r:"aspirateur"},fenetre:{d:[1.3,1.28,.2],f:"mur",t:384},filet:{d:[3.28,.08,2.28],f:"suspendu",t:1198},garde_corps:{d:[2,1,.07],f:"sol",t:168},porte:{d:[1.01,2.1,.15],f:"mur",t:560}},Gb=Object.fromEntries(Object.keys(kc).map(i=>{let e=Vb[i]||{};return[i,{famille:fp[i],libelle:hp[i],dimensions:e.d||null,emprise:e.d?[e.d[0],e.d[2]]:null,fixation:e.f||"sol",triangles:e.t||null,interactif:e.r||null}]})),Hc=new Map;function Wb(i,e={}){let t=kc[i];if(!t)throw new Error(`maison3d : meuble inconnu \xAB ${i} \xBB`);let{fusion:n=!0,ombre:s=!0,...r}=e,o=`${i}|${n}|${s}|${JSON.stringify(r)}`,a=Hc.get(o);a||(a=t(r),n&&bo(a),s&&a.userData.fixation==="sol"&&jd(a),a.userData.triangles=Bc(a),Hc.set(o,a));let c=a.clone(!0);return c.traverse(l=>{l.material&&l.material.userData.propre&&(l.material=l.material.clone())}),c}function Xb(i){let e=new Set;for(let t of Hc.values())t.traverse(n=>n.geometry&&e.add(n.geometry));i.traverse(t=>{t.geometry&&!t.geometry.userData.partage&&!e.has(t.geometry)&&t.geometry.dispose(),t.material&&t.material.userData.propre&&t.material.dispose()})}function qb(){Hc.clear()}var dp={version:1,niveaux:[]};var pp={version:1,meubles:[],liaisons:[]};var mp=["rez","etage","tout","eclate"],Zb=["iso","dessus"],gp=["toggle","more-info","navigate","perform-action","none"],_p=["piece","lampe","thermostat","lave_linge","aspirateur","serrure","media","autre"],Jb=Object.freeze({niveau_defaut:"tout",vue:"iso",hauteur:"auto",maquette:!0,hauteur_coupe:1.2,lueurs:!0,pixel_ratio_max:2,ecart_eclate:3.2,etiquettes_thermostats:!0,toggle_autorises:[],liaisons:[]}),Ft=i=>new Error(`maison3d-card : ${i}`),fr=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),dh=i=>typeof i=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(i);function bp(i){if(!fr(i))throw Ft("la configuration doit \xEAtre un objet (type: custom:maison3d-card).");let e={...Jb,...i};if(!mp.includes(e.niveau_defaut))throw Ft(`\xAB niveau_defaut \xBB doit valoir ${mp.join(", ")} (re\xE7u : ${JSON.stringify(e.niveau_defaut)}).`);if(!Zb.includes(e.vue))throw Ft(`\xAB vue \xBB doit valoir iso ou dessus (re\xE7u : ${JSON.stringify(e.vue)}).`);if(e.hauteur==="auto")e.hauteurCss=null;else if(typeof e.hauteur=="number"&&e.hauteur>=150&&e.hauteur<=4e3)e.hauteurCss=`${e.hauteur}px`;else if(typeof e.hauteur=="string"&&/^\d{2,4}(px|vh|svh|dvh)$/.test(e.hauteur.trim()))e.hauteurCss=e.hauteur.trim();else throw Ft(`\xAB hauteur \xBB doit valoir auto, un nombre de pixels (150 \xE0 4000) ou une valeur \xAB 600px \xBB / \xAB 80vh \xBB (re\xE7u : ${JSON.stringify(e.hauteur)}).`);for(let t of["maquette","lueurs","etiquettes_thermostats"])if(typeof e[t]!="boolean")throw Ft(`\xAB ${t} \xBB doit valoir true ou false.`);if(typeof e.hauteur_coupe!="number"||e.hauteur_coupe<.3||e.hauteur_coupe>3)throw Ft("\xAB hauteur_coupe \xBB doit \xEAtre un nombre de m\xE8tres entre 0,3 et 3.");if(typeof e.pixel_ratio_max!="number"||e.pixel_ratio_max<.5||e.pixel_ratio_max>2)throw Ft("\xAB pixel_ratio_max \xBB doit \xEAtre compris entre 0,5 et 2.");if(typeof e.ecart_eclate!="number"||e.ecart_eclate<0||e.ecart_eclate>10)throw Ft("\xAB ecart_eclate \xBB doit \xEAtre un nombre de m\xE8tres entre 0 et 10.");for(let t of["plan_url","amenagement_url"]){if(e[t]===void 0||e[t]===null||e[t]===""){delete e[t];continue}if(typeof e[t]!="string"||!/^(\/|https?:\/\/)/.test(e[t]))throw Ft(`\xAB ${t} \xBB doit \xEAtre une URL commen\xE7ant par / (ex. /local/maison3d/plan.json) ou par https://.`)}if(!Array.isArray(e.toggle_autorises)||!e.toggle_autorises.every(dh))throw Ft("\xAB toggle_autorises \xBB doit \xEAtre une liste d'entity_id.");if(!Array.isArray(e.liaisons))throw Ft("\xAB liaisons \xBB doit \xEAtre une liste.");return e.liaisons.forEach((t,n)=>Mp(t,`liaisons[${n}]`)),e}function xp(i,e){if(i!==void 0){if(!fr(i)||!gp.includes(i.action))throw Ft(`${e} : \xAB action \xBB doit valoir ${gp.join(", ")}.`);if(i.action==="navigate"&&typeof i.navigation_path!="string")throw Ft(`${e} : \xAB navigation_path \xBB est obligatoire pour l'action navigate.`);if(i.action==="perform-action"&&!/^[a-z_]+\.[a-z0-9_]+$/.test(i.perform_action||""))throw Ft(`${e} : \xAB perform_action \xBB doit \xEAtre de la forme domaine.service (ex. script.turn_on).`);if((i.action==="toggle"||i.action==="more-info")&&i.entity!==void 0&&!dh(i.entity))throw Ft(`${e} : \xAB entity \xBB n'est pas un entity_id valide (${JSON.stringify(i.entity)}).`)}}function Mp(i,e="liaison"){if(!fr(i))throw Ft(`${e} doit \xEAtre un objet.`);if(!fr(i.cible)||i.cible.piece===void 0&&i.cible.meuble===void 0)throw Ft(`${e} : \xAB cible \xBB doit contenir \xAB piece \xBB (id de pi\xE8ce) ou \xAB meuble \xBB (index ou id).`);if(i.role!==void 0&&!_p.includes(i.role))throw Ft(`${e} : r\xF4le inconnu \xAB ${i.role} \xBB (${_p.join(", ")}).`);for(let t of["etat","lumiere","etiquette"])if(i[t]!==void 0&&!dh(i[t]))throw Ft(`${e} : \xAB ${t} \xBB n'est pas un entity_id valide (${JSON.stringify(i[t])}).`);xp(i.tap,`${e}.tap`),xp(i.hold,`${e}.hold`)}function Kb(i){if(!fr(i)||!Array.isArray(i.niveaux)||!i.niveaux.length)throw Ft("plan.json invalide : la liste \xAB niveaux \xBB est absente ou vide.");for(let e of i.niveaux){if(typeof e.id!="string")throw Ft("plan.json invalide : un niveau n'a pas d'\xAB id \xBB.");for(let t of e.pieces||[])if(!Array.isArray(t.polygone)||t.polygone.length<3)throw Ft(`plan.json invalide : la pi\xE8ce \xAB ${t.id} \xBB du niveau \xAB ${e.id} \xBB n'a pas de polygone (au moins 3 points).`)}return i}async function yp(i,e){let t;try{t=await fetch(i,{cache:"no-cache"})}catch(n){throw Ft(`impossible de t\xE9l\xE9charger ${e} (${i}) : ${n.message}`)}if(!t.ok)throw Ft(`impossible de t\xE9l\xE9charger ${e} (${i}) : HTTP ${t.status}.`);try{return await t.json()}catch{throw Ft(`${e} (${i}) n'est pas un JSON valide.`)}}async function Sp(i){let e=i.plan_url?await yp(i.plan_url,"le plan"):dp,t=i.amenagement_url?await yp(i.amenagement_url,"l'am\xE9nagement"):pp;Kb(e);let n=fr(t)?t:{};return(n.liaisons||[]).forEach((s,r)=>Mp(s,`amenagement.liaisons[${r}]`)),{plan:e,amenagement:{meubles:n.meubles||[],liaisons:n.liaisons||[]}}}var vp=i=>i.cible.piece!==void 0?`p:${i.cible.piece}:${i.role||"piece"}`:`m:${i.cible.meuble}`;function Ep(i,e){let t=new Map;for(let n of i)t.set(vp(n),{...n});for(let n of e){let s=vp(n);t.set(s,t.has(s)?{...t.get(s),...n}:{...n})}return[...t.values()]}function Tp(i,e){return i?i.startsWith("light.")||i.startsWith("switch.interrupteur_")||i.startsWith("input_boolean.")&&!i.startsWith("input_boolean.etat_voulu_")?!0:(e.toggle_autorises||[]).includes(i):!1}function wp(i){let e=i.role||(i.cible.piece!==void 0?"piece":"lampe"),t=i.lumiere||(i.etat&&i.etat.startsWith("light.")?i.etat:void 0),n=i.tap,s=i.hold;if(n||((e==="piece"||e==="lampe")&&i.etat?n={action:"toggle",entity:i.etat}:i.etat?n={action:"more-info",entity:i.etat}:n={action:"none"}),!s){let r=t||i.etat;s=r?{action:"more-info",entity:r}:{action:"none"}}return{...i,role:e,lumiere:t,tap:n,hold:s}}var Ap=(i,e)=>new te(i,-e),jb=/suspension|lampe|lampadaire|plafonnier|applique|spot|luminaire|guirlande|veilleuse/;function qc(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let[o,a]=t[s],[c,l]=t[r];a>e!=l>e&&i<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}var Vc=i=>[i.reduce((e,t)=>e+t[0],0)/i.length,i.reduce((e,t)=>e+t[1],0)/i.length];function Gc(i){let e=i.map(n=>n[0]),t=i.map(n=>n[1]);return{x0:Math.min(...e),x1:Math.max(...e),z0:Math.min(...t),z1:Math.max(...t)}}function Cp(i,e,t,n){let s=n[0]-t[0],r=n[1]-t[1],o=s*s+r*r||1e-9,a=Math.max(0,Math.min(1,((i-t[0])*s+(e-t[1])*r)/o));return Math.hypot(i-t[0]-a*s,e-t[1]-a*r)}function Eo(i,e,t=.35){if(!e)return!1;for(let n=0;n<e.length;n++)if(Cp(i[0],i[1],e[n],e[(n+1)%e.length])<t)return!0;return!1}function Pp(i,e=[]){let t=new pn(i.map(([n,s])=>Ap(n,s)));for(let n of e)t.holes.push(new Ti(n.map(([s,r])=>Ap(s,r))));return t}function dr(i,e,t){let n=new Yn(Pp(i,e));return n.rotateX(-Math.PI/2),n.translate(0,t,0),n}function Wc(i,e,t,n){let s=new wi(Pp(i,e),{depth:n,bevelEnabled:!1,curveSegments:6});return s.rotateX(-Math.PI/2),s.translate(0,t,0),s}function Ip(i,e,t){let n=i.attributes.normal,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){let o=n.getY(r)>.5?t:e;s.set([o.r,o.g,o.b],r*3)}return i.setAttribute("color",new kt(s,3)),i}function mh(i){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Qb(i,e){let t=document.createElement("canvas");t.width=t.height=i,e(t.getContext("2d"),i);let n=new li(t);return n.wrapS=n.wrapT=Si,n.colorSpace=It,n.anisotropy=4,n}var Lp=(i,e)=>{let t=new Oe(i);return t.offsetHSL(0,0,e),`#${t.getHexString()}`};function ph(i,e,t){return(n,s)=>{let r=mh(t),o=s/e;for(let a=0;a<e;a++){let c=-r()*s;for(;c<s;){let l=s*(.45+r()*.5);n.fillStyle=Lp(i,(r()-.5)*.07),n.fillRect(c,a*o,l,o),n.fillStyle="rgba(60,40,20,0.35)",n.fillRect(c,a*o,1.5,o),c+=l}n.fillStyle="rgba(60,40,20,0.3)",n.fillRect(0,a*o,s,1.5)}}}var Rp={parquet:ph("#b88d60",6,7),bois_clair:ph("#d9c19c",5,11),bois_terrasse:ph("#9c7a58",7,5),carrelage:(i,e)=>{let t=mh(3),n=3,s=e/n;for(let r=0;r<n;r++)for(let o=0;o<n;o++)i.fillStyle=Lp("#e4ded4",(t()-.5)*.04),i.fillRect(r*s,o*s,s,s);i.fillStyle="#bdb5a8";for(let r=0;r<=n;r++)i.fillRect(r*s-1,0,2,e),i.fillRect(0,r*s-1,e,2)},moquette:(i,e)=>{let t=mh(9);i.fillStyle="#cbbfa9",i.fillRect(0,0,e,e);for(let n=0;n<1400;n++)i.fillStyle=t()<.5?"rgba(255,255,255,0.10)":"rgba(90,70,50,0.10)",i.fillRect(t()*e,t()*e,2,2)}};function eM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");e.strokeStyle="#f2eadb",e.lineWidth=5,e.beginPath(),e.moveTo(0,0),e.lineTo(64,64),e.moveTo(64,0),e.lineTo(0,64),e.stroke();let t=new li(i);return t.wrapS=t.wrapT=Si,t.repeat.set(6,6),t.colorSpace=It,t}function tM(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.55,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new li(i)}var gh=class{constructor(){this._cache=new Map,this.textures=[]}obtenir(e,t){return this._cache.has(e)||this._cache.set(e,t()),this._cache.get(e)}tex(e,t){return this.obtenir(`tex:${e}`,()=>{let n=t();return this.textures.push(n),n})}sol(e){let t=Rp[e]?e:"parquet";return this.obtenir(`sol:${t}`,()=>new Vt({map:this.tex(t,()=>Qb(256,Rp[t])),roughness:t==="carrelage"?.45:.85}))}get murs(){return this.obtenir("murs",()=>new Vt({vertexColors:!0,roughness:.92}))}get vitres(){return this.obtenir("vitres",()=>new Vt({color:12573670,transparent:!0,opacity:.32,roughness:.1,depthWrite:!1}))}get dalle(){return this.obtenir("dalle",()=>new Vt({color:14209220,roughness:.95}))}get socle(){return this.obtenir("socle",()=>new Vt({color:9209211,roughness:1}))}get bois(){return this.obtenir("bois",()=>new Vt({color:10779218,roughness:.7}))}get metal(){return this.obtenir("metal",()=>new Vt({color:3948356,roughness:.45,metalness:.5}))}get garde(){return this.obtenir("garde",()=>new Vt({color:14084334,transparent:!0,opacity:.25,roughness:.1,depthWrite:!1,side:Ut}))}get filet(){return this.obtenir("filet",()=>new Vt({map:this.tex("filet",eM),transparent:!0,alphaTest:.35,side:Ut,roughness:1}))}get ombre(){return this.obtenir("ombre",()=>new Cn({map:this.tex("ombre",tM),transparent:!0,depthWrite:!1,toneMapped:!1}))}couleur(e,t=.8){return this.obtenir(`c:${e}:${t}`,()=>new Vt({color:e,roughness:t}))}},_h=new Oe(16052456),nM=new Oe(15459544),iM=new Oe(6116428);function sM(i,e,t){let[n,s]=i.a,[r,o]=i.b,a=r-n,c=o-s,l=Math.hypot(a,c);if(l<.02)return{murs:[],vitres:[]};let u=i.epaisseur||(i.type==="exterieur"?.25:.1),h=i.bouts_francs??i.type==="exterieur"?0:u/2,f=Math.min(e,t??e),d=(i.ouvertures||[]).map(x=>{let M=(x.position??.5)*l,S=Math.min(x.largeur||.9,l),A=x.allege||0;return{s:Math.max(0,M-S/2),e:Math.min(l,M+S/2),bas:A,haut:A+(x.hauteur||2.05),type:x.type}}).sort((x,M)=>x.s-M.s),p=[],_=[],m=-h;for(let x of d){x.s>m&&p.push([m,x.s,0,f]);let M=Math.max(x.s,m);x.e>M&&(x.bas>0&&p.push([M,x.e,0,Math.min(x.bas,f)]),x.haut<f&&p.push([M,x.e,x.haut,f]),x.type!=="porte"&&Math.min(x.haut,f)-x.bas>.05&&_.push([M,x.e,x.bas,Math.min(x.haut,f)])),m=Math.max(m,x.e)}m<l+h&&p.push([m,l+h,0,f]);let g=Math.atan2(c,a),v=x=>(x.rotateY(-g),x.translate(n,0,s),x),E=i.type==="exterieur"?nM:_h;return{murs:p.filter(([x,M,S,A])=>M-x>.005&&A-S>.005).map(([x,M,S,A])=>{let y=new Mt(M-x,A-S,u);return y.translate((x+M)/2,(S+A)/2,0),Ip(v(y),E,iM)}),vitres:_.map(([x,M,S,A])=>{let y=new Mt(M-x,A-S,.02);return y.translate((x+M)/2,(S+A)/2,0),v(y)})}}var rM={canape:[2.1,.8,.9,9280946],table_basse:[1,.4,.6,10779218],tapis:[2,.015,1.4,13214334],meuble_tv:[1.8,.5,.4,7232072],plante:[.5,1.1,.5,7314012],table_manger:[1.8,.75,.9,10779218],cuisine_lineaire:[3.2,.9,.62,15328474],ilot:[1.8,.9,.9,14275268],banc_entree:[1.2,.45,.4,10779218],lit_double:[1.6,.5,2,15327699],lit_simple:[.9,.5,1.95,14214122],baignoire:[1.7,.55,.75,16448250],bureau:[1.4,.75,.7,11570536],etagere:[1,1.8,.35,11570536],lavabo:[.6,.85,.45,16448250],lave_linge:[.6,.85,.6,16119283]};function xh(i){return jb.test(i||"")}function oM(i,e){let t=new rt,n=e.hauteur??2.15,s=new Le(new ui(.008,.008,2.5-n),i.metal);s.position.y=n+(2.5-n)/2;let r=new Le(new kr(.2,.18,16,1,!0),i.couleur(15260870,.9));r.material.side=Ut,r.position.y=n+.06;let o=new Le(new Ai(.075,12,8),new Vt({color:15986403,emissive:0,roughness:.4}));return o.name="ampoule",o.material.userData.propre=!0,o.position.y=n-.02,t.add(s,r,o),t.userData={interactif:!0,role:"lampe",remplacement:!0},t}function aM(i){let e=new rt,t=new Le(new Mt(.6,.85,.6),i.couleur(16119283,.5));t.position.y=.425;let n=new Le(new Ri(.17,.035,8,24),i.couleur(12172996,.3));n.name="hublot",n.position.set(0,.42,.305);let s=new rt;s.name="tambour",s.position.set(0,.42,.302);let r=new Le(new Hr(.16,20),i.couleur(3752525,.35)),o=new Le(new Mt(.2,.06,.004),i.couleur(8366038,.8));o.position.set(0,-.06,.002),s.add(r,o);let a=new Le(new Mt(.05,.025,.01),new Vt({color:3358771,emissive:0}));return a.name="voyant",a.material.userData.propre=!0,a.position.set(.19,.79,.302),e.add(t,n,s,a),e.userData={interactif:!0,role:"lave_linge",remplacement:!0},e}function cM(i,e={},t){if(xh(i))return oM(t,e);if(i==="lave_linge")return aM(t);let[n,s,r,o]=rM[i]||[.8,.8,.8,12433066],a=new rt,c=new Le(new Mt(e.largeur??n,e.hauteur??s,e.profondeur??r),t.couleur(o));return c.position.y=(e.hauteur??s)/2,a.add(c),a.userData={remplacement:!0},a}function lM(i,e,t){let n=new rt,s=i.marches||14,r=i.rayon||1,a=(i.sens==="horaire"?-1:1)*(Math.PI*1.75)/s,c=e/(s+1),l=[],u=[],h=[];for(let d=0;d<s;d++){let p=d*a,_=(d+1)*c,m=2*r*Math.sin(Math.abs(a)/2)*1.25,g=new Mt(r-.06,.05,m);g.translate((r+.06)/2,_,0),g.rotateY(p),l.push(g);let v=new ui(.012,.012,.9,5);v.translate(r-.05,_+.45,0),v.rotateY(p),u.push(v)}for(let d=0;d<=48;d++){let p=d/48*(s-1),_=p*a;h.push(new L(Math.cos(_)*(r-.05),(p+1)*c+.92,-Math.sin(_)*(r-.05)))}let f=new Le(new ui(.06,.06,e+.9,12),t.metal);return f.position.y=(e+.9)/2,n.add(f),n.add(new Le(ln(l),t.bois)),n.add(new Le(ln(u),t.metal)),n.add(new Le(new Ci(new hi(h),64,.022,6),t.metal)),l.concat(u).forEach(d=>d.dispose()),n.userData={remplacement:!0},n}function Xc(i,e,t,n,s=.95,r=null){let o=[],a=[];for(let l=0;l<i.length;l++){let u=i[l],h=i[(l+1)%i.length],f=[(u[0]+h[0])/2,(u[1]+h[1])/2];if(Eo(f,e)&&Eo(u,e)&&Eo(h,e)||r&&r(f))continue;let d=Math.hypot(h[0]-u[0],h[1]-u[1]),p=Math.atan2(h[1]-u[1],h[0]-u[0]),_=new Mt(d,s,.02);_.translate(d/2,t+s/2,0),_.rotateY(-p),_.translate(u[0],0,u[1]),o.push(_);let m=new Mt(d+.04,.04,.06);m.translate(d/2,t+s,0),m.rotateY(-p),m.translate(u[0],0,u[1]),a.push(m)}let c=new rt;return o.length&&c.add(new Le(ln(o),n.garde),new Le(ln(a),n.bois)),o.concat(a).forEach(l=>l.dispose()),c}function Dp(i,e,t={}){let n=new gh,s=new rt;s.name="maison";let r=new rt;r.name="commun",s.add(r);let o=new Map,a=new Map,c=[],l=[],u=[],h=t.mobilier||{},f=t.maquette?t.hauteurCoupe??1.2:null,d=(R,N)=>{if(typeof h.creerMeuble!="function"||h.MEUBLES&&!h.MEUBLES[R])return null;try{let D=h.creerMeuble(R,N||{});return D&&D.isObject3D?D:null}catch(D){return u.push(`meuble \xAB ${R} \xBB : ${D.message}`),null}},p=(R,N,D,U)=>{let H=new Le(p.geo||(p.geo=new nn(1,1).rotateX(-Math.PI/2)),n.ombre);return H.scale.set(N,1,D),H.position.y=U,H.renderOrder=-1,H.userData.ignorer=!0,R.add(H),H},_=i.niveaux.flatMap(R=>R.contour_exterieur||R.pieces.flatMap(N=>N.polygone)),m=Gc(_),g=p(s,(m.x1-m.x0)*1.35,(m.z1-m.z0)*1.35,-.3);g.position.x=(m.x0+m.x1)/2,g.position.z=(m.z0+m.z1)/2;for(let[R,N]of i.niveaux.entries()){let D=new rt;D.name=`niveau_${N.id}`,s.add(D);let U=N.altitude??R*2.7,H=N.hauteur??2.5,k=N.contour_exterieur,Z=(N.vides||[]).map(V=>V.polygone).filter(V=>V&&V.length>=3),G={id:N.id,nom:N.nom||N.id,altitude:U,hauteur:H,groupe:D,index:R};if(o.set(N.id,G),k&&k.length>=3)if(R===0){let V=new Le(Wc(k,[],U-.3,.3),n.socle);V.userData.dalle=!0,D.add(V),l.push(V)}else{let V=Z.filter(he=>qc(...Vc(he),k)),$=new Le(Wc(k,V,U-.2,.2),n.dalle);$.userData.dalle=!0,G.dalle=$,D.add($),l.push($)}for(let V of N.pieces||[]){let $=Z.filter(ut=>qc(...Vc(ut),V.polygone)),he=n.sol(V.sol).clone();he.userData.couleurBase=he.color.clone();let de=new Le(dr(V.polygone,$,U+.012),he);de.name=`sol_${V.id}`,de.userData={interactif:!0,piece:V.id},D.add(de),l.push(de);let lt=V.centre||Vc(V.polygone),Qe=Gc(V.polygone);a.set(V.id,{id:V.id,nom:V.nom||V.id,zone_ha:V.zone_ha,niveau:N.id,altitude:U,mesh:de,materiau:he,centre:new L(lt[0],U,lt[1]),polygone:V.polygone,rayon:Math.hypot(Qe.x1-Qe.x0,Qe.z1-Qe.z0)/2})}G.mursCoupes=v(N,H,f,U,`murs_${N.id}`),D.add(G.mursCoupes),f!==null&&(G.mursPleins=v(N,H,null,U,`murs_pleins_${N.id}`),G.mursPleins.visible=!1,D.add(G.mursPleins))}function v(R,N,D,U,H){let k=new rt;k.name=H;let Z=[],G=[];for(let V of[...R.murs||[],...x(R)]){let{murs:$,vitres:he}=sM(V,N,D);Z.push(...$),G.push(...he)}if(Z.length){let V=ln(Z);V.translate(0,U,0);let $=new Le(V,n.murs);$.userData.ignorer=!0,k.add($)}if(G.length){let V=ln(G);V.translate(0,U,0);let $=new Le(V,n.vitres);$.userData.ignorer=!0,$.renderOrder=2,k.add($)}return Z.concat(G).forEach(V=>V.dispose()),k}let E=R=>o.get(R)||[...o.values()][0];function x(R){let N=i.escalier,D=N&&N.cage;if(!D||!N.centre)return[];let[U,H]=N.centre,k=D.rayon||1.13,Z=D.acces&&D.acces[R.id]||(R.id===(N.de||"rez")?N.point_depart:N.point_arrivee),G=Z?Math.atan2(Z[1]-H,Z[0]-U):null,V=(D.largeur_acces||.95)/2/k,$=48,he=[];for(let de=0;de<$;de++){let lt=de/$*Math.PI*2,Qe=(de+1)/$*Math.PI*2,ut=(lt+Qe)/2;G!==null&&Math.abs((ut-G+Math.PI*3)%(Math.PI*2)-Math.PI)<V||he.push({a:[U+k*Math.cos(lt),H+k*Math.sin(lt)],b:[U+k*Math.cos(Qe),H+k*Math.sin(Qe)],epaisseur:D.epaisseur||.08,type:"cloison",rond:!0})}return he}let M=i.escalier;if(M&&M.centre){let R=E(M.de||"rez"),N=o.get(M.vers||"etage"),D=N?N.altitude-R.altitude:2.7,U={rayon:M.rayon||1,marches:M.marches||14,hauteur:D,sens:M.sens||"antihoraire"};M.point_depart&&(U.angle_depart=Math.atan2(M.point_depart[0]-M.centre[0],M.point_depart[1]-M.centre[1])*180/Math.PI),M.angle_total_deg&&(U.angle_total=M.angle_total_deg);let H=d("escalier_colimacon",U)||d("escalier",U)||lM(M,D,n);H.position.set(M.centre[0],R.altitude,M.centre[1]),H.name="escalier",H.traverse(k=>k.userData.ignorer=!0),H.userData.hauteurNiveaux=D,r.add(H)}let S=(i.elements_speciaux||[]).filter(R=>R.type==="mezzanine"&&R.polygone),A=(R,N)=>S.some(D=>D!==R&&D.niveau===R.niveau&&Eo(N,D.polygone,.02));for(let R of i.elements_speciaux||[]){let N=E(R.niveau);if(R.type==="muret"&&R.a&&R.b){let U=R.altitude??N.altitude+2.1,H=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),k=R.epaisseur||.1,Z=R.hauteur||1,G=new Mt(H,Z,k);G.translate(H/2,U+Z/2,0),G.rotateY(-Math.atan2(R.b[1]-R.a[1],R.b[0]-R.a[0])),G.translate(R.a[0],0,R.a[1]);let V=new Le(Ip(G,_h,_h),n.murs);V.userData.ignorer=!0,V.name="muret",N.groupe.add(V);continue}if(!R.polygone||R.polygone.length<3)continue;let D=i.niveaux[N.index].contour_exterieur;if(R.type==="filet"){let U=new rt,H=d("filet",{polygone:R.polygone,centrer:!0});if(H){let G=H.userData.centre||[0,0];H.position.set(G[0],N.altitude-.02,G[1]),U.add(H,Xc(R.polygone,D,N.altitude,n,.9));let V=new Le(dr(R.polygone,[],N.altitude-.02),new Cn({visible:!1}));V.userData={interactif:!0,piece:R.zone_ha||"filet"},U.add(V),l.push(V),N.groupe.add(U),w(R,N,V,"Filet"),y(R,N);continue}let k=new Le(dr(R.polygone,[],N.altitude-.02),n.filet);k.name="filet",U.add(k);let Z=[];for(let G=0;G<R.polygone.length;G++){let V=R.polygone[G],$=R.polygone[(G+1)%R.polygone.length],he=Math.hypot($[0]-V[0],$[1]-V[1]),de=new Mt(he,.05,.05);de.translate(he/2,N.altitude-.02,0),de.rotateY(-Math.atan2($[1]-V[1],$[0]-V[0])),de.translate(V[0],0,V[1]),Z.push(de)}U.add(new Le(ln(Z),n.couleur(14734783,.9))),Z.forEach(G=>G.dispose()),U.add(Xc(R.polygone,D,N.altitude,n,.9)),k.userData={interactif:!0,piece:R.zone_ha||"filet"},l.push(k),N.groupe.add(U),w(R,N,k,"Filet")}else if(R.type==="mezzanine"){let U=R.altitude??N.altitude+2.1,H=new rt;H.add(new Le(Wc(R.polygone,[],U-.14,.14),n.dalle));let k=n.sol(R.sol||"bois_clair").clone();k.userData.couleurBase=k.color.clone();let Z=new Le(dr(R.polygone,[],U+.006),k);Z.userData={interactif:!0,piece:R.zone_ha},l.push(Z),H.add(Z,Xc(R.polygone,D,U,n,.95,$=>A(R,$)));let G=i.niveaux[N.index].murs||[],V=$=>G.some(he=>Cp($[0],$[1],he.a,he.b)<(he.epaisseur||.1)/2+.08);for(let $ of R.polygone){if(Eo($,D)||V($))continue;let he=new Le(new Mt(.08,U-N.altitude,.08),n.bois);he.position.set($[0],(U+N.altitude)/2,$[1]),he.userData.ignorer=!0,H.add(he)}H.name=`mezzanine_${R.zone_ha}`,N.groupe.add(H),w(R,N,Z,"Mezzanine",U)}else if(R.type==="balcon"){let U=new rt;U.add(new Le(Wc(R.polygone,[],N.altitude-.18,.18),n.dalle));let H=n.sol("bois_terrasse").clone();H.userData.couleurBase=H.color.clone();let k=new Le(dr(R.polygone,[],N.altitude+.006),H);k.userData={interactif:!0,piece:R.zone_ha||"balcon"},l.push(k),U.add(k,Xc(R.polygone,D,N.altitude,n)),U.name=`balcon_${R.zone_ha}`,N.groupe.add(U),w(R,N,k,"Balcon")}}function y(R,N){let D=n.tex("vide",()=>{let V=document.createElement("canvas");V.width=V.height=64;let $=V.getContext("2d"),he=$.createRadialGradient(32,32,6,32,32,46);he.addColorStop(0,"#1d1c21"),he.addColorStop(1,"#5b544c"),$.fillStyle=he,$.fillRect(0,0,64,64);let de=new li(V);return de.colorSpace=It,de}),U=dr(R.polygone,[],N.altitude-.17),H=Gc(R.polygone),k=U.attributes.position,Z=new Float32Array(k.count*2);for(let V=0;V<k.count;V++)Z[V*2]=(k.getX(V)-H.x0)/(H.x1-H.x0),Z[V*2+1]=(k.getZ(V)-H.z0)/(H.z1-H.z0);U.setAttribute("uv",new kt(Z,2));let G=new Le(U,n.obtenir("vide",()=>new Cn({map:D,toneMapped:!1})));G.name="puits_filet",G.userData.ignorer=!0,G.userData.vide=!0,G.visible=!1,N.groupe.add(G),(N.puits||(N.puits=[])).push(G)}function w(R,N,D,U,H=N.altitude){let k=R.zone_ha||R.type;if(a.has(k))return;let Z=Vc(R.polygone),G=Gc(R.polygone);D.userData.piece=k,a.set(k,{id:k,nom:R.nom||U,zone_ha:R.zone_ha,niveau:N.id,altitude:H,mesh:D,materiau:D.material,centre:new L(Z[0],H,Z[1]),polygone:R.polygone,special:R.type,rayon:Math.hypot(G.x1-G.x0,G.z1-G.z0)/2})}let I=0;for(let[R,N]of(e.meubles||[]).entries()){if(!N||!N.type||!Array.isArray(N.position))continue;let D=E(N.niveau),U=d(N.type,N.opts);U||(U=cM(N.type,N.opts||{},n),I++);let H=a.get(N.piece),k=N.altitude??D.altitude;if(U.position.set(N.position[0],k,N.position[1]),U.rotation.y=(N.rotation_deg||0)*Math.PI/180,U.userData.meubleIndex=R,U.userData.meubleId=N.id??R,U.userData.piece=N.piece,U.userData.type=N.type,!U.userData.role&&xh(N.type)&&(U.userData.role="lampe"),U.userData.role==="lampe"&&(U.userData.interactif=!0),D.groupe.add(U),!U.getObjectByName("ombre_contact")&&!xh(N.type)&&N.type!=="tapis"){let Z=new Xt().setFromObject(U),G=Z.getSize(new L),V=p(D.groupe,G.x*1.25+.15,G.z*1.25+.15,k+.016);V.position.x=(Z.min.x+Z.max.x)/2,V.position.z=(Z.min.z+Z.max.z)/2}l.push(U),c.push({index:R,id:N.id??R,type:N.type,niveau:D.id,piece:N.piece,objet:U,pieceInfo:H||null})}let F=new Xt;for(let R of o.values())F.expandByObject(R.groupe);return F.expandByObject(r),{racine:s,commun:r,niveaux:o,pieces:a,meubles:c,raycastables:l,bornes:F,materiaux:n,avertissements:u,remplacements:I,liberer(){let R=new Set,N=new Set;s.traverse(D=>{D.geometry&&R.add(D.geometry),D.material&&(Array.isArray(D.material)?D.material:[D.material]).forEach(U=>N.add(U))}),R.forEach(D=>!D.userData?.partage&&D.dispose()),N.forEach(D=>{D.userData?.partage||D.dispose()}),n.textures.forEach(D=>D.dispose()),s.clear()}}}var Np={type:"change"},vh={type:"start"},Fp={type:"end"},Yc=new ki,Up=new An,uM=Math.cos(70*fu.DEG2RAD),jt=new L,En=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yh=1e-6,$c=class extends so{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Rn,this._lastTargetPosition=new L,this._quat=new Rn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pi,this._sphericalDelta=new Pi,this._scale=1,this._panOffset=new L,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new L,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fM.bind(this),this._onPointerDown=hM.bind(this),this._onPointerUp=dM.bind(this),this._onContextMenu=vM.bind(this),this._onMouseWheel=gM.bind(this),this._onKeyDown=_M.bind(this),this._onTouchStart=xM.bind(this),this._onTouchMove=yM.bind(this),this._onMouseDown=pM.bind(this),this._onMouseMove=mM.bind(this),this._interceptControlDown=bM.bind(this),this._interceptControlUp=MM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Tt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Np),this.update(),this.state=Tt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yc.origin.copy(this.object.position),Yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yc.direction))<uM?this.object.lookAt(this.target):(Up.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yc.intersectPlane(Up,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yh||this._lastTargetPosition.distanceToSquared(this.target)>yh?(this.dispatchEvent(Np),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function hM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=Tt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pM(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Tt.DOLLY;break;case qi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Tt.ROTATE}break;case qi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(vh)}function mM(i){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gM(i){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(i.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fp))}function _M(i){this.enabled!==!1&&this._handleKeyDown(i)}function xM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case $n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Tt.TOUCH_ROTATE;break;case $n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case $n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Tt.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(vh)}function yM(i){switch(this._trackPointer(i),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Tt.NONE}}function vM(i){this.enabled!==!1&&i.preventDefault()}function bM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var SM=650,EM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,TM=[["rez","Rez"],["etage","\xC9tage"],["tout","Tout"],["eclate","\xC9clat\xE9"]],wM='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-8.95 5H1v-2h2.05A9 9 0 0 1 11 3.05V1h2v2.05A9 9 0 0 1 20.95 11H23v2h-2.05A9 9 0 0 1 13 20.95V23h-2v-2.05A9 9 0 0 1 3.05 13ZM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"/></svg>',Zc=class{constructor({camera:e,dom:t,overlay:n,scene:s,config:r,demanderRendu:o}){this.camera=e,this.scene=s,this.config=r,this.demanderRendu=o,this.mode=r.niveau_defaut,this.transitions=[];let a=[...s.niveaux.values()];this.rez=a[0],this.etage=a[1]||null;let c=s.bornes;this.centre=c.getCenter(new L),this.taille=c.getSize(new L),this.rayon=Math.max(this.taille.x,this.taille.z)/2;let l=new $c(e,t);l.enableDamping=!0,l.dampingFactor=.14,l.rotateSpeed=.75,l.zoomSpeed=.9,l.panSpeed=.8,l.screenSpacePanning=!1,l.minDistance=3,l.maxDistance=this.rayon*7+12,l.minPolarAngle=.02,l.maxPolarAngle=Math.PI*.46,l.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},l.addEventListener("change",()=>{this._bornerCible(),o()}),l.addEventListener("start",()=>this._bouge=!0),this.orbite=l,this._construireInterface(n),this.definirNiveau(this.mode,!1)}_construireInterface(e){let t=document.createElement("div");t.className="niveaux",t.setAttribute("role","tablist"),t.setAttribute("aria-label","Niveau affich\xE9"),this.boutons=new Map;for(let[s,r]of TM){if(!this.etage&&s!=="rez")continue;let o=document.createElement("button");o.type="button",o.textContent=r,o.dataset.niveau=s,o.setAttribute("role","tab"),o.addEventListener("click",a=>{a.stopPropagation(),this.definirNiveau(s)}),t.appendChild(o),this.boutons.set(s,o)}let n=document.createElement("button");n.type="button",n.className="recentrer",n.title="Recentrer",n.setAttribute("aria-label","Recentrer la vue"),n.innerHTML=wM,n.addEventListener("click",s=>{s.stopPropagation(),this.recentrer()}),e.append(t,n),this._interface=[t,n]}_etatNiveaux(e){return{rezVisible:e!=="etage",etageVisible:e!=="rez",ecart:e==="eclate"?this.ecartEclate():0}}ecartEclate(){return this.config.ecart_eclate*(this.camera.aspect<.85?1.45:1.3)}_emprise(e){let t=new Xt,n=(r,o=0)=>{let a=r.position.y;r.position.y=o,r.updateMatrixWorld(!0),t.expandByObject(r),r.position.y=a,r.updateMatrixWorld(!0)};e!=="etage"&&n(this.rez.groupe),this.etage&&e!=="rez"&&n(this.etage.groupe,e==="eclate"?this.ecartEclate():0);let s=this.config.maquette?this.config.hauteur_coupe+.4:2.6;return e==="rez"&&(t.max.y=Math.min(t.max.y,this.rez.altitude+s)),e==="etage"&&this.etage&&(t.max.y=Math.min(t.max.y,this.etage.altitude+s)),t.isEmpty()&&t.copy(this.scene.bornes),t}vueDefaut(e){let t=this.config.vue==="dessus",n=this.camera.aspect<.85,s=t?.04:e==="eclate"?n?1:1.02:n?.58:.9,r=t?0:(n?-10:-38)*Math.PI/180,o=this._emprise(e),a=o.getCenter(new L);(e==="etage"||e==="rez")&&(a.y=o.min.y+.3);let c=[];for(let g of[o.min.x,o.max.x])for(let v of[o.min.y,o.max.y])for(let E of[o.min.z,o.max.z])c.push(new L(g,v,E));let l=this.camera.clone(),u=new L().setFromSphericalCoords(1,s,r),h=n?.95:.88,f=.88,d=-.72,p=g=>{l.position.copy(a).addScaledVector(u,g),l.lookAt(a),l.updateMatrixWorld(!0);let v=1/0,E=-1/0,x=1/0,M=-1/0;for(let S of c){let A=S.clone().project(l);v=Math.min(v,A.x),E=Math.max(E,A.x),x=Math.min(x,A.y),M=Math.max(M,A.y)}return{x0:v,x1:E,y0:x,y1:M}},_=10;for(let g=0;g<5;g++){let v=1.5,E=this.orbite.maxDistance;for(let I=0;I<24;I++){_=(v+E)/2;let F=p(_);(F.x1-F.x0)/2<=h&&F.y1-F.y0<=f-d?E=_:v=_}if(_=E,g===4)break;let x=p(_),M=(x.x0+x.x1)/2,S=(x.y0+x.y1)/2-(f+d)/2,A=_*Math.tan(l.fov*Math.PI/360),y=new L().setFromMatrixColumn(l.matrixWorld,0),w=new L().setFromMatrixColumn(l.matrixWorld,1);a.addScaledVector(y,M*A*l.aspect).addScaledVector(w,S*A)}let m=a.clone().addScaledVector(u,_);return{cible:a,pos:m}}definirNiveau(e,t=!0){this.mode=e;for(let[a,c]of this.boutons)c.classList.toggle("actif",a===e),c.setAttribute("aria-selected",String(a===e));let{rezVisible:n,etageVisible:s,ecart:r}=this._etatNiveaux(e);this.rez.groupe.visible=n;for(let a of this.scene.niveaux.values())for(let c of a.puits||[])c.visible=e==="etage";for(let a of this.scene.niveaux.values()){if(!a.mursPleins)continue;let c=e==="tout"&&a!==this.etage&&!!this.etage;a.mursPleins.visible=c,a.mursCoupes.visible=!c}this.etage&&(this.etage.groupe.visible=s,this._transition(this.etage.groupe.position,"y",r,t));let o=this.vueDefaut(e);if(t&&this._initialise){let a=this.camera.position.clone().sub(this.orbite.target),c=new Pi().setFromVector3(a),l=new Pi().setFromVector3(o.pos.clone().sub(o.cible));c.radius=l.radius;let u=new L().setFromSpherical(c).add(o.cible);this._animerCamera(o.cible,u)}else this.orbite.target.copy(o.cible),this.camera.position.copy(o.pos),this.orbite.update();this._initialise=!0,this.demanderRendu()}recentrer(){let e=this.vueDefaut(this.mode);this._animerCamera(e.cible,e.pos),this.demanderRendu()}recadrer(){if(!this._bouge){let e=this.vueDefaut(this.mode);this.orbite.target.copy(e.cible),this.camera.position.copy(e.pos),this.orbite.update()}}_animerCamera(e,t){this._transition(this.orbite.target,null,e,!0),this._transition(this.camera.position,null,t,!0)}_transition(e,t,n,s){if(this.transitions=this.transitions.filter(o=>!(o.objet===e&&o.cle===t)),!s){t?e[t]=n:e.copy(n);return}let r=t?e[t]:e.clone();this.transitions.push({objet:e,cle:t,de:r,vers:t?n:n.clone(),t0:performance.now()})}_bornerCible(){let e=this.orbite.target,t=this.rayon*.6,n=this.scene.bornes;e.x=Math.max(n.min.x-t,Math.min(n.max.x+t,e.x)),e.z=Math.max(n.min.z-t,Math.min(n.max.z+t,e.z)),e.y=Math.max(-.2,Math.min(n.max.y+(this.config.ecart_eclate||0),e.y))}maj(){let e=!1;if(this.transitions.length){let s=performance.now();this.transitions=this.transitions.filter(r=>{let o=Math.min(1,(s-r.t0)/SM),a=EM(o);return r.cle?r.objet[r.cle]=r.de+(r.vers-r.de)*a:r.objet.lerpVectors(r.de,r.vers,a),o<1}),e=!0,this.camera.lookAt(this.orbite.target)}let t=this.scene.commun;if(t&&this.etage){let s=this.etage.altitude-this.rez.altitude||2.7,r=1+this.etage.groupe.position.y/s;Math.abs(t.scale.y-r)>1e-4&&(t.scale.y=r)}let n=this.orbite.update();return e||n||this.transitions.length>0}liberer(){this.orbite.dispose(),this._interface.forEach(e=>e.remove())}};var Op=8,AM=500;function bh(i,{hass:e,element:t,config:n}){if(!i||i.action==="none")return null;let s=(r,o)=>t.dispatchEvent(new CustomEvent(r,{detail:o,bubbles:!0,composed:!0}));switch(i.action){case"toggle":{let r=i.entity;if(!Tp(r,n))return console.warn(`maison3d-card : toggle refus\xE9 sur ${r} (relais ou entit\xE9 non autoris\xE9e) ; ouverture de la fiche.`),s("hass-more-info",{entityId:r}),`more-info ${r}`;let o=r.split(".")[0];return e.callService(o==="light"||o==="switch"||o==="input_boolean"?o:"homeassistant","toggle",{entity_id:r}),`toggle ${r}`}case"perform-action":{let[r,o]=i.perform_action.split(".");return e.callService(r,o,i.data||{},i.target),`perform-action ${i.perform_action}`}case"more-info":return i.entity?(s("hass-more-info",{entityId:i.entity}),`more-info ${i.entity}`):null;case"navigate":return history.pushState(null,"",i.navigation_path),window.dispatchEvent(new Event("location-changed")),`navigate ${i.navigation_path}`;default:return null}}var Jc=class{constructor({dom:e,camera:t,scene:n,quandToucher:s}){this.dom=e,this.camera=t,this.scene=n,this.quandToucher=s,this.raycaster=new fs,this.pointeurs=new Map,this.candidat=null,this.minuterie=null,this._bas=r=>this._pointerDown(r),this._bouge=r=>this._pointerMove(r),this._haut=r=>this._pointerUp(r,!1),this._annule=r=>this._pointerUp(r,!0),this._menu=r=>r.preventDefault(),e.addEventListener("pointerdown",this._bas),e.addEventListener("pointermove",this._bouge),e.addEventListener("pointerup",this._haut),e.addEventListener("pointercancel",this._annule),e.addEventListener("contextmenu",this._menu)}_annulerCandidat(){clearTimeout(this.minuterie),this.minuterie=null,this.candidat=null}_pointerDown(e){if(!(e.button!==void 0&&e.button>0)){if(this.pointeurs.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointeurs.size>1)return this._annulerCandidat();this.candidat={id:e.pointerId,x:e.clientX,y:e.clientY},clearTimeout(this.minuterie),this.minuterie=setTimeout(()=>{let t=this.candidat;t&&(this.candidat=null,this._agir(t,!0))},AM)}}_pointerMove(e){this.pointeurs.has(e.pointerId)&&this.pointeurs.set(e.pointerId,{x:e.clientX,y:e.clientY});let t=this.candidat;t&&t.id===e.pointerId&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>Op&&this._annulerCandidat()}_pointerUp(e,t){this.pointeurs.delete(e.pointerId);let n=this.candidat;if(!n||n.id!==e.pointerId)return;let s=Math.hypot(e.clientX-n.x,e.clientY-n.y)>Op;this._annulerCandidat(),!t&&!s&&this._agir(n,!1)}cibleSous(e,t){let n=this.dom.getBoundingClientRect(),s=new te((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1);this.raycaster.setFromCamera(s,this.camera);let r=this.raycaster.intersectObjects(this.scene.raycastables,!0);for(let o of r){let a=o.object;if(a.isSprite||a.name==="halo"||a.name==="ombre_contact"||a.userData.ignorer||!Bp(a)&&!(a.material&&a.material.visible===!1&&Bp(a.parent)))continue;let c=o.object.material;if(c&&c.transparent&&c.opacity<.3&&!o.object.userData.interactif)continue;if(a.userData.niveauStatique&&this.scene.pieceSousPoint){let u=this.scene.niveaux.get(a.userData.niveauStatique),h=u?u.groupe.worldToLocal(o.point.clone()):o.point,f=this.scene.pieceSousPoint(a.userData.niveauStatique,h);if(!f)continue;return{objet:a,point:o.point,meubleIndex:void 0,piece:f.id,interactif:!1}}let l=o.object;for(;l&&l.userData.meubleIndex===void 0&&l.userData.piece===void 0&&!l.userData.dalle;)l=l.parent;if(l)return l.userData.dalle?null:{objet:l,point:o.point,meubleIndex:l.userData.meubleIndex,piece:l.userData.piece,interactif:!!l.userData.interactif}}return null}_agir(e,t){let n=this.cibleSous(e.x,e.y);this.quandToucher(n,t,{x:e.x,y:e.y})}liberer(){this._annulerCandidat();let e=this.dom;e.removeEventListener("pointerdown",this._bas),e.removeEventListener("pointermove",this._bouge),e.removeEventListener("pointerup",this._haut),e.removeEventListener("pointercancel",this._annule),e.removeEventListener("contextmenu",this._menu)}};function Bp(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}var RM=2700,Hp=new Oe(10132122),kp=new Oe(0,0,0),CM=["running"];function Qc(i){let e=Math.max(1e3,Math.min(4e4,i))/100,t,n,s;e<=66?(t=255,n=99.4708025861*Math.log(e)-161.1195681661,s=e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307):(t=329.698727446*Math.pow(e-60,-.1332047592),n=288.1221695283*Math.pow(e-60,-.0755148492),s=255);let r=o=>Math.max(0,Math.min(255,Math.round(o)));return[r(t),r(n),r(s)]}function PM(i,e){let t=n=>{let s=(n+i/60)%6;return 255*(1-e/100*Math.max(0,Math.min(s,4-s,1)))};return[t(5),t(3),t(1)].map(Math.round)}function IM(i={}){let e=i.rgb_color;return Array.isArray(e)||(Array.isArray(i.hs_color)?e=PM(i.hs_color[0],i.hs_color[1]):i.color_temp_kelvin?e=Qc(i.color_temp_kelvin):i.color_temp?e=Qc(1e6/i.color_temp):e=Qc(RM)),new Oe().setRGB(e[0]/255,e[1]/255,e[2]/255,It)}var LM=(()=>{let[i,e,t]=Qc(2900);return new Oe().setRGB(i/255,e/255,t/255,It)})();function Mh(i,e=.42,t=.45){let n={},s=i.clone();return s.getHSL(n,It),s.setHSL(n.h,Math.min(n.s,e),Math.max(n.l,.62),It),s.lerp(LM,t)}var DM=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)},Kc=(i,e=1)=>typeof i=="number"?i.toLocaleString("fr-CH",{minimumFractionDigits:e,maximumFractionDigits:e}):"\u2013";function el(i,e){let t=i.etat?e[i.etat]:void 0,n=i.lumiere?e[i.lumiere]:void 0,s=h=>!h||h.state==="unavailable"||h.state==="unknown",r=!1,o={},a=!1;n&&n.state==="on"?(r=!0,o=n.attributes||{}):t&&t.state==="on"&&(!n||s(n)||n.state==="off")&&(r=!n||s(n)),(t&&s(t)||n&&s(n)&&!(t&&t.state==="off")||!t&&!n&&(i.etat||i.lumiere))&&(a=!0);let c=typeof o.brightness=="number"?o.brightness/255:r?.7:0,l=IM(o),u=l.clone().convertLinearToSRGB().toArray().map(h=>Math.round(h*255));return{on:r,indispo:a,couleur:l,rgb:u,luminosite:c,niveau:r?.3+.7*Math.sqrt(c):0}}function Sh(i){return!i.material.userData.propre&&!i.userData.matPropre&&(i.material=i.material.clone(),i.material.userData={...i.material.userData,propre:!0,partage:!1},i.userData.matPropre=!0),i.material}function zp(i,e,t,n,s){if(n&&typeof n.allumer=="function"&&typeof n.eteindre=="function"&&!i.userData.remplacement)try{t>0?n.allumer(i,{couleur:s||e.clone().convertLinearToSRGB().toArray().map(r=>Math.round(r*255)),intensite:t}):n.eteindre(i);return}catch{}i.traverse(r=>{if(!r.isMesh&&!r.isSprite)return;let o=r.name||"";if(o.startsWith("ampoule")){let a=Sh(r);a.emissive&&(a.emissive.copy(t>0?e:kp),a.emissiveIntensity=t>0?.8+2.6*t:0)}else if(o.startsWith("halo")){let a=Sh(r);r.visible=t>0,a.color&&a.color.copy(e),"opacity"in a&&(a.opacity=.25+.5*t)}})}function jc(i,e){i.traverse(t=>{!t.isMesh||t.userData.ignorer||(e?t.userData.matOrigine||(t.userData.matOrigine=t.material,t.material=t.material.clone(),t.material.userData={propre:!0},t.material.transparent=!0,t.material.opacity=.35,t.material.color&&t.material.color.lerp(Hp,.5)):t.userData.matOrigine&&(t.material.dispose(),t.material=t.userData.matOrigine,delete t.userData.matOrigine))})}var tl=class{constructor({scene:e,liaisons:t,config:n,overlay:s,ambiance:r,mobilier:o}){this.scene=e,this.mobilier=o||null,this.config=n,this.overlay=s,this.ambiance=r,this._derniers=new Map,this._premier=!0,this.animations=new Set,this.etiquettes=[],this.lueurs=[],this.liaisons=[],this.parPiece=new Map,this.parMeuble=new Map,this.thermoParPiece=new Map;for(let a of t){let c={...a,_entites:[a.etat,a.lumiere,a.etiquette].filter(Boolean)};if(a.cible.piece!==void 0){if(c.piece=e.pieces.get(a.cible.piece),!c.piece){console.warn(`maison3d-card : pi\xE8ce \xAB ${a.cible.piece} \xBB introuvable dans le plan (liaison ignor\xE9e).`);continue}(c.role==="piece"||c.role==="lampe")&&this.parPiece.set(c.piece.id,c),c.role==="thermostat"&&this.thermoParPiece.set(c.piece.id,c)}else{let l=a.cible.meuble;if(c.meuble=e.meubles.find(u=>u.index===l||u.id!==void 0&&u.id===l),!c.meuble){console.warn(`maison3d-card : meuble \xAB ${l} \xBB introuvable dans l'am\xE9nagement (liaison ignor\xE9e).`);continue}this.parMeuble.set(c.meuble.index,c)}this.liaisons.push(c)}this.lampesParPiece=new Map;for(let a of e.meubles)a.objet.userData.role!=="lampe"||this.parMeuble.has(a.index)||!a.piece||(this.lampesParPiece.has(a.piece)||this.lampesParPiece.set(a.piece,[]),this.lampesParPiece.get(a.piece).push(a.objet));if(n.lueurs)for(let a of this.parPiece.values()){let c=a.piece,l=e.niveaux.get(c.niveau),u=new no(16762506,0,Math.max(3.5,c.rayon*2.2),1.6);u.position.set(c.centre.x,c.altitude+1.9,c.centre.z),l.groupe.add(u),a.lueur=u,this.lueurs.push(u)}for(let a of this.liaisons){if(a.role!=="lave_linge"||!a.meuble)continue;let c=a.meuble.objet;if(a.tambour=c.getObjectByName("tambour"),a.voyant=c.getObjectByName("voyant"),!a.voyant){let l=c.getObjectByName("hublot"),u=new Le(new Ai(.018,8,6),new Vt({color:2241314,emissive:0}));u.name="voyant",u.material.userData.propre=!0;let h=new Xt().setFromObject(c),f=c.worldToLocal(new L(h.max.x-.08,h.max.y-.06,h.max.z+.005));u.position.copy(l?new L(f.x,f.y,l.position.z+.005):f),c.add(u),a.voyant=u}a.etiquette3d=this._creerEtiquette("lave-linge",a.meuble.objet,new L(0,1.25,0),a)}if(n.etiquettes_thermostats)for(let a of this.thermoParPiece.values()){let c=a.piece,l=e.niveaux.get(c.niveau),u=c.polygone.map(p=>p[0]),h=c.polygone.map(p=>p[1]),f=c.centre.x+(Math.min(...u)-c.centre.x)*.5,d=c.centre.z+(Math.max(...h)-c.centre.z)*.62;a.etiquette3d=this._creerEtiquette("thermo",l.groupe,new L(f,c.altitude+.3,d),a)}}_creerEtiquette(e,t,n,s){let r=document.createElement("button");r.type="button",r.className=`etiquette ${e}`,r.setAttribute("aria-label",s.piece?`Thermostat ${s.piece.nom}`:"Lave-linge"),this.overlay.appendChild(r);let o={el:r,parent:t,position:n,liaison:s,visible:!0};return this.etiquettes.push(o),o}appliquer(e){if(!e||!e.states)return!1;let t=e.states,n=new Set,s=r=>{let o=t[r];(this._premier||o!==this._derniers.get(r))&&(n.add(r),this._derniers.set(r,o))};for(let r of this.liaisons)r._entites.forEach(s);if(s("sun.sun"),!n.size)return!1;for(let r of this.liaisons)r._entites.some(o=>n.has(o))&&this._majLiaison(r,t);if(n.has("sun.sun")){this._majSoleil(t["sun.sun"]);for(let r of this.liaisons)r.piece&&(r.role==="piece"||r.role==="lampe")&&this._majLiaison(r,t)}return this._premier=!1,!0}_majLiaison(e,t){if(e.role==="piece"||e.role==="lampe"){let n=el(e,t);if(e.dernierEtat=n,e.piece&&this._eclairerPiece(e,n),e.meuble){let s=Mh(n.couleur,.75,.18);zp(e.meuble.objet,s,n.niveau,this.mobilier,s.clone().convertLinearToSRGB().toArray().map(r=>Math.round(r*255))),jc(e.meuble.objet,n.indispo)}}else if(e.role==="thermostat")this._majThermostat(e,t);else if(e.role==="lave_linge")this._majLaveLinge(e,t);else if(e.meuble){let n=t[e.etat];if(jc(e.meuble.objet,!n||n.state==="unavailable"),e.role==="aspirateur"){let s=e.meuble.objet.getObjectByName("robot");s&&(s.visible=!(n&&["cleaning","returning","paused"].includes(n.state)))}}}_eclairerPiece(e,t){let n=e.piece,s=n.materiau,r=Mh(t.couleur),o=1-(this.jour??1);s.emissive&&(t.on?s.emissive.copy(r).multiplyScalar((.06+.1*t.niveau)*(1+1.4*o)):s.emissive.copy(kp)),s.userData.couleurBase&&(s.color.copy(s.userData.couleurBase),t.indispo&&s.color.lerp(Hp,.65)),e.lueur&&(e.lueur.color.copy(r),e.lueur.intensity=t.on?(2.5+7*t.niveau)*(1+.9*o):0);let a=Mh(t.couleur,.75,.18),c=a.clone().convertLinearToSRGB().toArray().map(l=>Math.round(l*255));for(let l of this.lampesParPiece.get(n.id)||[])zp(l,a,t.niveau,this.mobilier,c),jc(l,t.indispo)}_majThermostat(e,t){let n=t[e.etat],s=e.etiquette3d;if(!s)return;if(!n||n.state==="unavailable"){s.el.className="etiquette thermo indispo",s.el.innerHTML='<span class="t">\u2013</span>';return}let r=n.attributes||{},o=n.state==="heat"&&typeof r.current_temperature=="number"&&typeof r.temperature=="number"&&r.current_temperature<r.temperature;s.el.className=`etiquette thermo ${n.state==="off"?"arret":o?"chauffe":"veille"}`;let a=n.state==="off"?"arr\xEAt":`\u2192 ${Kc(r.temperature,r.temperature%1?1:0)}\xB0`;s.el.innerHTML=`<span class="t">${Kc(r.current_temperature)}\xB0</span><span class="c">${a}</span>`,s.largeur=0}_majLaveLinge(e,t){let n=t[e.etat],s=n?n.state:"unavailable",o=(e.etats_actifs||CM).includes(s);if(e.tambour&&(o?this.animations.add(e.tambour):this.animations.delete(e.tambour)),e.voyant){let c=Sh(e.voyant),l=o?3526783:s==="pause"?16756768:s==="error"?16726832:s==="scheduled"?4891647:null;c.emissive&&(c.emissive.set(l??0),c.emissiveIntensity=l?2.2:0)}jc(e.meuble.objet,s==="unavailable");let a=e.etiquette3d;if(a){let c=e.etiquette?t[e.etiquette]:null,l=c&&!isNaN(parseFloat(c.state))?`${Math.round(parseFloat(c.state))} min`:"",u={running:"En marche",pause:"En pause",ending:"Fin",error:"Erreur",scheduled:"Programm\xE9"}[s];a.masque=!u,a.el.className=`etiquette lave-linge ${s}`,a.el.innerHTML=u?`<span class="t">${u}</span>${l&&s!=="error"?`<span class="c">${l}</span>`:""}`:"",a.largeur=0}}_majSoleil(e){let t=e?e.attributes||{}:{},n=typeof t.elevation=="number"?t.elevation:e&&e.state==="above_horizon"?30:-20,s=DM(-7,9,n);this.jour=s;let{hemi:r,soleil:o,fond:a}=this.ambiance;r.intensity=.62+.98*s,r.color.setHSL(.6-.02*s,.45-.1*s,.5+.35*s),r.groundColor.setHSL(.08+.55*(1-s)*.2,.2,.22+.2*s),o.intensity=.4+1.4*s,o.color.setHSL(s>.5?.1:.61,s>.5?.45-.3*Math.min(1,n/30):.4,s>.5?.8:.72),o.position.set(-9,13,6),a(s)}descriptif(e,t,n){let s=n&&n.states||{},r=[],o=t!==void 0?this.parMeuble.get(t):void 0;if(o&&o.role==="lave_linge"){let u=s[o.etat],h={ready:"Pr\xEAt",running:"En marche",pause:"En pause",scheduled:"Programm\xE9",error:"Erreur",ending:"Fin de cycle",test:"Test"},f=o.etiquette&&s[o.etiquette];return r.push(u?h[u.state]||u.state:"Indisponible"),u&&u.state==="running"&&f&&r.push(`${f.state} min restantes`),{titre:"Lave-linge",lignes:r}}let a=o&&(o.role==="lampe"||o.role==="piece")&&o||(e!==void 0?this.parPiece.get(e):void 0);if(a){let u=el(a,s);u.indispo?r.push("Indisponible"):u.on?r.push(u.luminosite>0&&a.lumiere?`Allum\xE9e \xB7 ${Math.round(u.luminosite*100)} %`:"Allum\xE9e"):r.push("\xC9teinte")}let c=e!==void 0?this.thermoParPiece.get(e):void 0,l=null;if(c&&s[c.etat]){let u=s[c.etat],h=u.attributes||{},f=`Chauffage ${Kc(h.current_temperature)}\xB0${u.state==="off"?" \xB7 arr\xEAt":` \u2192 ${Kc(h.temperature,h.temperature%1?1:0)}\xB0`}`;l={action:c.tap&&c.tap.action==="more-info"?c.tap:{action:"more-info",entity:c.etat},texte:f}}return{lignes:r,thermostat:l}}liberer(){for(let e of this.etiquettes)e.el.remove();this.etiquettes=[],this.animations.clear()}};var Vp=new Set(["ampoule","halo","tambour","hublot","voyant","afficheur","ecran","vantail","robot"]),Eh=i=>(Math.round(i*100)/100).toFixed(2),Gp=i=>i<.15?.08:i<.3?.22:i<.55?.4:i<.78?.7:.9,Wp=i=>i<.2?0:.45;function Th(i,e){for(let t=i;t&&t!==e;t=t.parent)if(Vp.has(t.name))return!0;return!1}function NM(i,e,t){if(!i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)return`u:${i.uuid}:${e}`;let n=i.emissive&&i.emissiveIntensity>0?`${i.emissive.getHexString()}*${Eh(i.emissiveIntensity)}`:"0";return wh(i)?["v",i.side,i.depthWrite?"w":"nw",e].join("|"):["s",i.map?i.map.uuid:"-",t?"*":Gp(i.roughness),t?"*":Wp(i.metalness),i.transparent?`t${Eh(i.opacity)}`:"o",i.side,i.flatShading?"f":"l",i.depthWrite?"w":"nw",Eh(i.alphaTest),n,e].join("|")}var wh=i=>i.transparent&&!i.map&&!i.alphaMap&&i.alphaTest===0&&!(i.emissive&&i.emissiveIntensity>0);function UM(i){if(!i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)return i;let e=new Vt({color:16777215,vertexColors:!0,map:i.map,roughness:Gp(i.roughness),metalness:Wp(i.metalness),transparent:i.transparent,opacity:wh(i)?1:i.opacity,side:i.side,flatShading:i.flatShading,depthWrite:i.depthWrite,alphaTest:i.alphaTest});return i.emissive&&i.emissiveIntensity>0&&(e.emissive.copy(i.emissive),e.emissiveIntensity=i.emissiveIntensity),e.name=`fusion:${i.name||""}`,e.userData.fusion=!0,e}function FM(i,e,t){let n=new mt().multiplyMatrices(e,i.matrixWorld),s=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();if(s.applyMatrix4(n),n.determinant()<0)for(let a of Object.values(s.attributes))for(let c=0;c<a.count;c+=3)for(let l=0;l<a.itemSize;l++){let u=a.array[(c+1)*a.itemSize+l];a.array[(c+1)*a.itemSize+l]=a.array[(c+2)*a.itemSize+l],a.array[(c+2)*a.itemSize+l]=u}let r=s.attributes.position.count;s.attributes.normal||s.computeVertexNormals(),s.attributes.uv||s.setAttribute("uv",new kt(new Float32Array(r*2),2));let o=i.material;if(t){let a=o.color||new Oe(1,1,1),c=o.vertexColors&&s.attributes.color,l=wh(o)?4:3,u=new Float32Array(r*l);for(let h=0;h<r;h++){let f=c?[c.getX(h),c.getY(h),c.getZ(h)]:[1,1,1];u[h*l]=a.r*f[0],u[h*l+1]=a.g*f[1],u[h*l+2]=a.b*f[2],l===4&&(u[h*l+3]=o.opacity)}s.setAttribute("color",new kt(u,l))}for(let a of Object.keys(s.attributes))["position","normal","uv","color"].includes(a)||s.deleteAttribute(a);return s.morphAttributes={},s}function nl(i,e,t=!1){i.updateMatrixWorld(!0);let n=i.matrixWorld.clone().invert(),s=new Map,r=[];i.traverse(a=>{if(!a.isMesh||a.isSkinnedMesh||a.isInstancedMesh||!a.visible||e(a))return;for(let u=a.parent;u&&u!==i;u=u.parent)if(!u.visible)return;let c=a.material;if(!c||Array.isArray(c)||c.visible===!1||c.userData.propre)return;let l=NM(c,a.renderOrder,t);s.has(l)||s.set(l,{materiau:c,renderOrder:a.renderOrder,meshes:[]}),s.get(l).meshes.push(a),r.push(a)});let o=[];for(let a of s.values()){if(a.meshes.length<2&&!a.materiau.isMeshStandardMaterial)continue;let c=a.materiau.isMeshStandardMaterial&&!a.materiau.isMeshPhysicalMaterial,l=a.meshes.map(f=>FM(f,n,c)),u=ln(l,!1);if(l.forEach(f=>f.dispose()),!u)continue;u.computeBoundingSphere(),u.computeBoundingBox();let h=new Le(u,c?UM(a.materiau):a.materiau);h.renderOrder=a.renderOrder,h.name="statique",h.userData.statique=!0,h.userData.ignorer=a.meshes.every(f=>f.userData.ignorer||OM(f,i)),i.add(h),o.push(h);for(let f of a.meshes)f.userData._fusionne=!0}for(let a of r)a.userData._fusionne&&(a.parent.remove(a),!a.geometry.userData.partage&&!a.userData.dansMeuble&&!a.userData.geoPartagee&&a.geometry.dispose());return o}function OM(i,e){for(let t=i;t&&t!==e;t=t.parent)if(t.userData.ignorer)return!0;return!1}function Xp(i,e,t){let n=null;for(let s of i.values())s.niveau!==e||!s.polygone||s.altitude>t.y+.05||qc(t.x,t.z,s.polygone)&&(!n||s.altitude>n.altitude)&&(n=s);return n}function qp(i,e,t=()=>!0){let n=()=>{let u=0;return i.racine.traverse(h=>(h.isMesh||h.isSprite)&&u++),u},s=n(),r=new Set;for(let u of i.meubles)e(u)&&r.add(u.objet),u.objet.traverse(h=>h.isMesh&&(h.userData.dansMeuble=!0));let o=u=>{for(let h=u;h;h=h.parent)if(r.has(h))return!0;return!1},a=new Set;for(let u of i.pieces.values())u.parentSol=u.mesh.parent,t(u)||u.mesh.material&&u.mesh.material.visible===!1?a.add(u.mesh):u.mesh.userData.geoPartagee=!0;let c=new Set;for(let u of i.niveaux.values()){u.dalle&&c.add(u.dalle);for(let h of[u.mursCoupes,u.mursPleins])h&&h.traverse(f=>f.isMesh&&c.add(f))}i.racine.traverse(u=>u.isMesh&&u.userData.dalle&&c.add(u));let l=u=>{for(let h=u;h;h=h.parent)if(r.has(h))return h.userData.role==="lampe";return!1};for(let u of i.niveaux.values()){let h=nl(u.groupe,f=>a.has(f)||c.has(f)||o(f)&&!l(f)&&f.name!=="ombre_contact"||f.userData.vide);for(let f of h)f.userData.ignorer||(f.userData.niveauStatique=u.id,i.raycastables.push(f))}nl(i.commun,u=>Th(u,null));for(let u of r){nl(u,f=>Th(f,u),!0);let h=[];u.traverse(f=>f!==u&&!f.isMesh&&Vp.has(f.name)&&h.push(f));for(let f of h)nl(f,d=>Th(d,f),!0)}return i.raycastables=i.raycastables.filter(u=>{let h=!1;for(let d=u;d;d=d.parent)d===i.racine&&(h=!0);if(!h||u.userData._fusionne)return!1;let f=!1;return u.traverse(d=>(d.isMesh||d.isSprite)&&(f=!0)),f}),{avant:s,apres:n()}}var Ch="0.2.0",Ah={...fh},BM=`
:host{display:block}
ha-card{display:block;position:relative;overflow:hidden;border-radius:var(--ha-card-border-radius,12px);
  background:var(--ha-card-background,var(--card-background-color,#fff));
  font-family:var(--ha-font-family-body,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif)}
.scene{position:relative;width:100%;height:420px;
  background:linear-gradient(180deg,var(--ciel-haut,#cddfed) 0%,var(--ciel-bas,#eef0ea) 100%);
  touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}
canvas{display:block;width:100%;height:100%;touch-action:none;outline:none}
.overlay,.ui{position:absolute;inset:0;pointer-events:none;overflow:hidden}
button{font:inherit;-webkit-tap-highlight-color:transparent;cursor:pointer}
.etiquette{position:absolute;left:0;top:0;pointer-events:none;display:flex;align-items:baseline;gap:5px;white-space:nowrap;
  padding:5px 9px;border:0;border-radius:999px;background:rgba(255,255,255,.9);color:#23262b;
  font-size:12.5px;font-weight:650;line-height:1;box-shadow:0 1px 5px rgba(0,0,0,.2);will-change:transform}
.etiquette .c{font-weight:500;font-size:11px;opacity:.68}
.etiquette.chauffe .t{color:#d9480f}
.etiquette.chauffe::before{content:"";width:6px;height:6px;border-radius:50%;background:#f76707;align-self:center}
.etiquette.arret{background:rgba(255,255,255,.72)}
.etiquette.lave-linge{background:rgba(32,40,52,.88);color:#fff}
.etiquette.lave-linge.running::before{content:"";width:7px;height:7px;border-radius:50%;background:#35d07f;align-self:center}
.etiquette.lave-linge:empty{display:none}
.niveaux{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);display:flex;gap:2px;padding:4px;pointer-events:auto;
  border-radius:16px;background:rgba(255,255,255,.84);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);
  box-shadow:0 2px 12px rgba(0,0,0,.16)}
.niveaux button{min-width:64px;height:44px;padding:0 12px;border:0;border-radius:12px;background:transparent;color:#2b2f36;
  font-size:15px;font-weight:600;letter-spacing:.01em;transition:background .15s,color .15s}
.niveaux button.actif{background:var(--primary-color,#03a9f4);color:var(--text-primary-color,#fff)}
.recentrer{position:absolute;right:12px;top:12px;width:44px;height:44px;padding:10px;border:0;border-radius:50%;pointer-events:auto;
  background:rgba(255,255,255,.84);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);color:#2b2f36;box-shadow:0 2px 10px rgba(0,0,0,.16)}
.recentrer svg{width:24px;height:24px;display:block}
.infobulle{position:absolute;left:0;top:0;min-width:140px;max-width:230px;padding:8px 12px;border-radius:12px;pointer-events:none;
  background:rgba(28,31,36,.9);color:#fff;font-size:13px;line-height:1.35;box-shadow:0 4px 16px rgba(0,0,0,.25);
  opacity:0;transform:translate(-50%,calc(-100% - 14px)) scale(.96);transition:opacity .15s,transform .15s}
.infobulle.visible{opacity:1;transform:translate(-50%,calc(-100% - 14px)) scale(1)}
.infobulle b{display:block;font-size:14px;margin-bottom:1px}
.infobulle .indice{color:#ffd59a}
.infobulle .lien{pointer-events:auto;display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;margin-top:6px;
  min-height:36px;padding:6px 10px;border:0;border-radius:9px;background:rgba(255,255,255,.14);color:#fff;font-size:13px;text-align:left}
.infobulle:not(.visible) .lien{pointer-events:none}
.message{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;
  color:var(--secondary-text-color,#555);font-size:14px}
.message.erreur{color:var(--error-color,#db4437)}
@media (max-width:360px){.niveaux button{min-width:56px;padding:0 9px;font-size:14px}}
`,Ph=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`<style>${BM}</style><ha-card><div class="scene"><div class="message">Chargement de la maison\u2026</div></div></ha-card>`,this._sceneEl=this.shadowRoot.querySelector(".scene"),this._images=0,this._actif=!1,this._jeton=0}setConfig(e){let t=bp(e),n=this._config;this._config=t,n&&this._pret&&JSON.stringify(n)!==JSON.stringify(t)&&(this._liberer(),this._initialiserSiPossible())}set hass(e){this._hass=e,this._pret?this._etats.appliquer(e)&&(this._rafraichirInfobulle(),this._demanderRendu()):this._initialiserSiPossible()}get hass(){return this._hass}getCardSize(){let e=this._config&&this._config.hauteurCss&&parseInt(this._config.hauteurCss,10);return e&&this._config.hauteurCss.endsWith("px")?Math.ceil(e/50):10}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6,min_rows:6}}static getStubConfig(){return{niveau_defaut:"tout",vue:"iso",maquette:!0}}connectedCallback(){this._connecte=!0,clearTimeout(this._liberationDifferee),this._observer(),this._initialiserSiPossible(),this._majActivite()}disconnectedCallback(){this._connecte=!1,this._majActivite(),clearTimeout(this._liberationDifferee),this._liberationDifferee=setTimeout(()=>{this._connecte||(this._liberer(),this._arreterObservation())},0)}_observer(){this._ro||(this._ro=new ResizeObserver(()=>this._redimensionner()),this._ro.observe(this),this._ro.observe(this._sceneEl),this._io=new IntersectionObserver(e=>{this._enVue=e[e.length-1].isIntersecting,this._majActivite()}),this._io.observe(this),this._visib=()=>this._majActivite(),document.addEventListener("visibilitychange",this._visib))}_arreterObservation(){this._ro?.disconnect(),this._io?.disconnect(),this._visib&&document.removeEventListener("visibilitychange",this._visib),this._ro=this._io=this._visib=null}_majActivite(){let e=!!this._connecte&&this._enVue!==!1&&document.visibilityState!=="hidden";e!==this._actif&&(this._actif=e,e?this._demanderRendu():this._raf&&(cancelAnimationFrame(this._raf),this._raf=0))}async _initialiserSiPossible(){if(this._pret||this._enInit||!this._config||!this._hass||!this._connecte)return;this._enInit=!0;let e=++this._jeton;try{let t=await Sp(this._config);if(e!==this._jeton||!this._connecte)return;this._construire(t)}catch(t){console.error(t),this._afficherMessage(t.message||String(t),!0)}finally{e===this._jeton&&(this._enInit=!1)}}_afficherMessage(e,t=!1){let n=this._sceneEl.querySelector(".message");n||(n=document.createElement("div"),this._sceneEl.appendChild(n)),n.className=`message${t?" erreur":""}`,n.textContent=e}_construire({plan:e,amenagement:t}){let n=this._config;this._majHauteur();let s;try{s=new Lc({antialias:!1,alpha:!0,powerPreference:"default",stencil:!1})}catch{throw new Error("maison3d-card : WebGL est indisponible sur cet appareil.")}s.setPixelRatio(Math.min(window.devicePixelRatio||1,n.pixel_ratio_max)),s.setClearColor(0,0),s.outputColorSpace=It,s.toneMapping=oo,s.toneMappingExposure=1,s.shadowMap.enabled=!1,this._renderer=s,this._sceneEl.querySelector(".message")?.remove(),this._sceneEl.appendChild(s.domElement);let r=document.createElement("div");r.className="overlay";let o=document.createElement("div");o.className="ui";let a=document.createElement("div");a.className="infobulle",a.setAttribute("role","status"),o.appendChild(a),this._sceneEl.append(r,o),this._overlay=r,this._ui=o,this._bulle=a;let c=new Dr;this._scene3=c;let l=new Qr(14543103,7036494,1.2),u=new io(16773596,1.3);u.position.set(-9,13,6),c.add(l,u,u.target);let h=Dp(e,t,{maquette:n.maquette,hauteurCoupe:n.hauteur_coupe,mobilier:Ah});this._donnees=h,c.add(h.racine);for(let _ of h.avertissements)console.warn(`maison3d-card : ${_}`);let f=this._sceneEl.clientWidth||360,d=this._sceneEl.clientHeight||420;s.setSize(f,d,!1),this._camera=new on(38,f/d,.1,200);let p=Ep(t.liaisons,n.liaisons).map(wp);this._etats=new tl({scene:h,liaisons:p,config:n,overlay:r,ambiance:{hemi:l,soleil:u,fond:_=>this._fond(_)},mobilier:Ah});for(let _ of this._etats.etiquettes)_.niveau=_.liaison.piece?.niveau||_.liaison.meuble?.niveau;if(n.fusion!==!1){let _=this._etats;this._fusion=qp(h,m=>_.parMeuble.has(m.index),m=>_.parPiece.has(m.id)||_.thermoParPiece.has(m.id)),h.pieceSousPoint=(m,g)=>Xp(h.pieces,m,g)}this._controles=new Zc({camera:this._camera,dom:s.domElement,overlay:o,scene:h,config:n,demanderRendu:()=>this._demanderRendu()}),this._interactions=new Jc({dom:s.domElement,camera:this._camera,scene:h,quandToucher:(_,m,g)=>this._quandToucher(_,m,g)}),this._etats.appliquer(this._hass),this._pulses=[],this._pret=!0,this._demanderRendu(),requestAnimationFrame(()=>requestAnimationFrame(()=>this.dispatchEvent(new CustomEvent("maison3d-pret",{bubbles:!0,composed:!0,detail:{version:Ch}}))))}_liberer(){if(this._jeton++,this._enInit=!1,this._raf&&cancelAnimationFrame(this._raf),this._raf=0,clearTimeout(this._minuterieBulle),!!this._pret){this._pret=!1,this._interactions?.liberer(),this._controles?.liberer(),this._etats?.liberer();for(let e of this._etats?.lueurs||[])e.dispose();this._halo&&(this._halo.removeFromParent(),this._halo.material.dispose(),this._halo=null),this._donnees?.liberer(),this._scene3?.clear(),this._renderer&&(this._renderer.dispose(),this._renderer.forceContextLoss(),this._renderer.domElement.remove()),this._overlay?.remove(),this._ui?.remove(),this._renderer=this._scene3=this._donnees=this._etats=this._controles=this._interactions=this._camera=null,this._overlay=this._ui=this._bulle=null,this._afficherMessage("Chargement de la maison\u2026")}}_majHauteur(){let e=this._config;if(!e)return;if(e.hauteurCss){this._sceneEl.style.height=e.hauteurCss;return}let t=this.clientWidth||this._sceneEl.clientWidth||390,n=window.innerHeight||800,s=t<700?Math.max(t*1.6,n-112):t*.62,r=Math.max(340,n-(t<700?100:120));this._sceneEl.style.height=`${Math.round(Math.max(320,Math.min(s,r)))}px`}_redimensionner(){if(this._majHauteur(),!this._renderer)return;let e=this._sceneEl.clientWidth,t=this._sceneEl.clientHeight;!e||!t||e===this._w&&t===this._h||(this._w=e,this._h=t,this._renderer.setSize(e,t,!1),this._camera.aspect=e/t,this._camera.updateProjectionMatrix(),this._controles.recadrer(),this._demanderRendu())}_fond(e){let t=(n,s,r)=>new Oe(n).lerp(new Oe(s),r).getStyle();this._sceneEl.style.setProperty("--ciel-haut",t(989232,13229548,e)),this._sceneEl.style.setProperty("--ciel-bas",t(2634576,15855849,e))}_demanderRendu(){this._raf||!this._actif||!this._pret||(this._raf=requestAnimationFrame(e=>this._image(e)))}_image(e){if(this._raf=0,!this._pret)return;let t=this._tPrec?Math.min((e-this._tPrec)/1e3,.1):1/60,n=this._controles.maj();for(let s of this._etats.animations)Rh(s)&&(s.rotation.z-=t*7,n=!0);if(this._pulses.length){let s=performance.now();this._pulses=this._pulses.filter(r=>r(s)),n=!0}this._animationTest&&(n=this._animationTest(e)||n),this._renderer.render(this._scene3,this._camera),this._positionnerEtiquettes(),this._images++,n?(this._tPrec=e,this._demanderRendu()):this._tPrec=0}_positionnerEtiquettes(){let e=this._w||this._sceneEl.clientWidth,t=this._h||this._sceneEl.clientHeight,n=this._controles.mode,s=[...this._donnees.niveaux.values()],r=s[s.length-1],o=s.filter(h=>h.dalle&&h.groupe.visible).map(h=>h.dalle);for(let h of this._donnees.pieces.values())h.special==="filet"&&Rh(h.mesh)&&o.push(h.mesh);let a=new L,c=this._rayEtiq||(this._rayEtiq=new fs);for(let h of this._etats.etiquettes){let f=!h.masque&&Rh(h.parent);if(f&&n==="tout"&&h.niveau&&h.niveau!==r.id&&(f=!1),f&&(a.copy(h.position),h.parent.localToWorld(a),o.length&&h.niveau!==r.id)){let d=a.distanceTo(this._camera.position);c.set(this._camera.position,a.clone().sub(this._camera.position).normalize()),c.far=d-.05,c.intersectObjects(o,!1).length&&(f=!1)}if(f&&(a.project(this._camera),f=a.z<1&&Math.abs(a.x)<1.05&&Math.abs(a.y)<1.05),f!==h.visible&&(h.el.style.display=f?"":"none",h.visible=f),f){let d=(h.largeur||(h.largeur=h.el.offsetWidth||90))/2+6;h.hauteur||(h.hauteur=h.el.offsetHeight||24),h.x=Math.max(d,Math.min(e-d,(a.x+1)/2*e)),h.y=(1-a.y)/2*t}}let l=[],u=this._etats.etiquettes.filter(h=>h.visible).sort((h,f)=>h.y-f.y);for(let h of u){let f=h.largeur+6,d=h.hauteur+4,p=h.y;for(let _=0;_<6;_++){let m=l.find(v=>Math.abs(v.x-h.x)<(v.l+f)/2&&Math.abs(v.y-p)<(v.h+d)/2);if(!m)break;let g=m.y-(m.h+d)/2;p=g-d>4?g:m.y+(m.h+d)/2}l.push({x:h.x,y:p,l:f,h:d}),h.el.style.transform=`translate(${h.x.toFixed(1)}px,${p.toFixed(1)}px) translate(-50%,-100%)`}}_resoudre(e){if(!e)return null;let t=this._etats,n=e.piece,s=null,r=null;e.meubleIndex!==void 0&&(r=this._donnees.meubles.find(a=>a.index===e.meubleIndex),n=r?.piece,s=t.parMeuble.get(e.meubleIndex)||null),!s&&n!==void 0&&(s=t.parPiece.get(n)||t.thermoParPiece.get(n)||null);let o=n!==void 0?this._donnees.pieces.get(n):null;return{liaison:s,piece:o,meuble:r,meubleLie:!!(r&&t.parMeuble.get(e.meubleIndex))}}_quandToucher(e,t,n){let s=this._resoudre(e);if(!s||!s.piece&&!s.meuble){this._masquerInfobulle();return}let r=s.liaison?t?s.liaison.hold:s.liaison.tap:null;s.meubleLie?this._pulserMeuble(s.meuble.objet):s.piece&&this._pulserPiece(s.piece);let o="";r&&r.action==="toggle"&&s.liaison&&(s.liaison.role==="piece"||s.liaison.role==="lampe")?o=el(s.liaison,this._hass.states).on?"Extinction\u2026":"Allumage\u2026":r&&r.action==="navigate"&&(o="Ouverture du panneau\u2026"),this._afficherInfobulle(s,n,o),this._journal(bh(r,{hass:this._hass,element:this,config:this._config}),t)}_journal(e,t=!1){e&&this.dispatchEvent(new CustomEvent("maison3d-action",{detail:{action:e,appui_long:t},bubbles:!0,composed:!0}))}_pulserPiece(e){this._halo||(this._halo=new Le(e.mesh.geometry,new Cn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:ds,toneMapped:!1})),this._halo.userData.ignorer=!0,this._halo.renderOrder=3);let t=this._halo;t.geometry=e.mesh.geometry,(e.parentSol||e.mesh.parent).add(t),t.position.set(0,.004,0);let n=performance.now();this._pulses=this._pulses.filter(r=>!r.halo);let s=r=>{let o=(r-n)/520;return t.material.opacity=o<1?.42*Math.sin(Math.PI*Math.min(1,o*1.6))*(1-o*.5):0,o>=1&&t.removeFromParent(),o<1};s.halo=!0,this._pulses.push(s),this._demanderRendu()}_pulserMeuble(e){let t=performance.now(),n=e.userData.echelleBase||(e.userData.echelleBase=e.scale.clone());this._pulses.push(s=>{let r=Math.min(1,(s-t)/380);return e.scale.copy(n).multiplyScalar(1+.09*Math.sin(Math.PI*r)),r<1}),this._demanderRendu()}_remplirInfobulle(e,t){let n=this._bulle,s=this._etats.descriptif(e.piece?.id,e.meubleLie?e.meuble.index:void 0,this._hass);n.textContent="";let r=document.createElement("b");r.textContent=s.titre||e.piece?.nom||e.meuble?.type||"",n.appendChild(r);for(let o of s.lignes){let a=document.createElement("div");a.textContent=o,n.appendChild(a)}if(t){let o=document.createElement("div");o.className="indice",o.textContent=t,n.appendChild(o)}if(s.thermostat){let o=document.createElement("button");o.type="button",o.className="lien",o.innerHTML='<span></span><span aria-hidden="true">\u203A</span>',o.firstChild.textContent=s.thermostat.texte,o.addEventListener("click",a=>{a.stopPropagation(),this._journal(bh(s.thermostat.action,{hass:this._hass,element:this,config:this._config})),this._masquerInfobulle()}),n.appendChild(o)}return s}_afficherInfobulle(e,t,n){if(!this._bulle)return;let s=this._remplirInfobulle(e,n),r=this._sceneEl.getBoundingClientRect(),o=Math.max(115,Math.min(r.width-115,t.x-r.left)),a=Math.max(s.thermostat?120:80,t.y-r.top);this._bulle.style.left=`${o}px`,this._bulle.style.top=`${a}px`,this._bulle.classList.add("visible"),this._bulleCible=e,this._programmerMasquage(s.thermostat?4500:2800)}_programmerMasquage(e){clearTimeout(this._minuterieBulle),this._minuterieBulle=setTimeout(()=>this._masquerInfobulle(),e)}_rafraichirInfobulle(){let e=this._bulleCible;!e||!this._bulle?.classList.contains("visible")||this._remplirInfobulle(e,"")}_masquerInfobulle(){this._bulle?.classList.remove("visible"),this._bulleCible=null}definirNiveau(e){this._controles?.definirNiveau(e)}_ecran(e){let t=e.clone().project(this._camera),n=this._renderer.domElement.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}}ecranDePiece(e){let t=this._donnees?.pieces.get(e);return t?this._ecran((t.parentSol||t.mesh.parent).localToWorld(t.centre.clone().add(new L(0,.02,0)))):null}ecranDeMeuble(e){let t=this._donnees?.meubles.find(s=>s.index===e);if(!t)return null;let n=new Xt().setFromObject(t.objet).getCenter(new L);return this._ecran(n)}cadrerSur({piece:e,meuble:t},n=4){let s;if(t!==void 0){let a=this._donnees.meubles.find(c=>c.index===t);s=a&&new Xt().setFromObject(a.objet).getCenter(new L)}else{let a=this._donnees.pieces.get(e);s=a&&(a.parentSol||a.mesh.parent).localToWorld(a.centre.clone())}if(!s)return!1;let r=this._controles.orbite,o=this._camera.position.clone().sub(r.target).normalize();return r.target.copy(s),this._camera.position.copy(s).addScaledVector(o,n),r.update(),this._demanderRendu(),!0}statistiques(){let e=this._renderer.info,t=this._renderer.getContext(),n=0;return this._scene3.traverse(s=>s.isLight&&n++),{version:Ch,images:this._images,appels_dessin:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures,programmes:e.programs?e.programs.length:null,lumieres:n,pixel_ratio:this._renderer.getPixelRatio(),gl:t.getParameter(t.VERSION),meubles_remplacement:this._donnees.remplacements,maillages_avant_fusion:this._fusion?.avant??null,maillages_apres_fusion:this._fusion?.apres??null,mobilier_present:typeof Ah.creerMeuble=="function"}}mesurerFps(e=3e3){return new Promise(t=>{let n=this._controles.orbite,s=0,r=0;this._animationTest=o=>{r||(r=o);let a=this._camera.position.clone().sub(n.target);return a.applyAxisAngle(new L(0,1,0),.012),this._camera.position.copy(n.target).add(a),this._camera.lookAt(n.target),s++,o-r>=e?(this._animationTest=null,t({images:s,duree_ms:Math.round(o-r),fps:+(s*1e3/(o-r)).toFixed(1)}),!1):!0},this._demanderRendu()})}};function Rh(i){for(let e=i;e;e=e.parent)if(!e.visible)return!1;return!0}customElements.get("maison3d-card")||customElements.define("maison3d-card",Ph);window.customCards=window.customCards||[];window.customCards.some(i=>i.type==="maison3d-card")||window.customCards.push({type:"maison3d-card",name:"Maison 3D",description:"Vue 3D interactive de la maison (three.js)",preview:!1});console.info(`%c maison3d-card %c ${Ch} `,"background:#03a9f4;color:#fff;border-radius:3px 0 0 3px","background:#333;color:#fff;border-radius:0 3px 3px 0");
