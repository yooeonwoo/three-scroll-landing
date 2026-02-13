(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const dh="182",u_=0,cf=1,h_=2,sl=1,f_=2,Aa=3,Tr=0,zn=1,Ji=2,Oi=0,ks=1,ja=2,uf=3,hf=4,d_=5,Hr=100,p_=101,m_=102,__=103,g_=104,v_=200,x_=201,M_=202,S_=203,Xc=204,Yc=205,y_=206,b_=207,T_=208,E_=209,A_=210,w_=211,C_=212,R_=213,P_=214,qc=0,$c=1,Kc=2,$s=3,Zc=4,Jc=5,jc=6,Qc=7,tp=0,D_=1,L_=2,Bi=0,ep=1,np=2,ip=3,ph=4,rp=5,sp=6,ap=7,op=300,is=301,Ks=302,tu=303,eu=304,Ol=306,nu=1e3,Ii=1001,iu=1002,hn=1003,I_=1004,xo=1005,Sn=1006,$l=1007,Yr=1008,ei=1009,lp=1010,cp=1011,Qa=1012,mh=1013,ki=1014,Ei=1015,ai=1016,_h=1017,gh=1018,to=1020,up=35902,hp=35899,fp=1021,dp=1022,Ai=1023,ir=1026,qr=1027,vh=1028,xh=1029,Zs=1030,Mh=1031,Sh=1033,al=33776,ol=33777,ll=33778,cl=33779,ru=35840,su=35841,au=35842,ou=35843,lu=36196,cu=37492,uu=37496,hu=37488,fu=37489,du=37490,pu=37491,mu=37808,_u=37809,gu=37810,vu=37811,xu=37812,Mu=37813,Su=37814,yu=37815,bu=37816,Tu=37817,Eu=37818,Au=37819,wu=37820,Cu=37821,Ru=36492,Pu=36494,Du=36495,Lu=36283,Iu=36284,Uu=36285,Nu=36286,U_=3200,pp=0,N_=1,pr="",un="srgb",Js="srgb-linear",Sl="linear",xe="srgb",fs=7680,ff=519,F_=512,O_=513,B_=514,yh=515,z_=516,k_=517,bh=518,V_=519,Fu=35044,df="300 es",Ui=2e3,yl=2001;function mp(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function bl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function G_(){const r=bl("canvas");return r.style.display="block",r}const pf={};function Tl(...r){const t="THREE."+r.shift();console.log(t,...r)}function Kt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function ue(...r){const t="THREE."+r.shift();console.error(t,...r)}function eo(...r){const t=r.join(" ");t in pf||(pf[t]=!0,Kt(...r))}function H_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class la{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mf=1234567;const Na=Math.PI/180,no=180/Math.PI;function tr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ie(r,t,e){return Math.max(t,Math.min(e,r))}function Th(r,t){return(r%t+t)%t}function W_(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function X_(r,t,e){return r!==t?(e-r)/(t-r):0}function Fa(r,t,e){return(1-e)*r+e*t}function Y_(r,t,e,n){return Fa(r,t,1-Math.exp(-e*n))}function q_(r,t=1){return t-Math.abs(Th(r,t*2)-t)}function $_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function K_(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Z_(r,t){return r+Math.floor(Math.random()*(t-r+1))}function J_(r,t){return r+Math.random()*(t-r)}function j_(r){return r*(.5-Math.random())}function Q_(r){r!==void 0&&(mf=r);let t=mf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tg(r){return r*Na}function eg(r){return r*no}function ng(r){return(r&r-1)===0&&r!==0}function ig(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sg(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),h=s((t-n)/2),d=a((t-n)/2),f=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*h,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*h,o*c);break;case"ZXZ":r.set(l*h,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*u,o*c);break;default:Kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ti(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Me(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _f={DEG2RAD:Na,RAD2DEG:no,generateUUID:tr,clamp:ie,euclideanModulo:Th,mapLinear:W_,inverseLerp:X_,lerp:Fa,damp:Y_,pingpong:q_,smoothstep:$_,smootherstep:K_,randInt:Z_,randFloat:J_,randFloatSpread:j_,seededRandom:Q_,degToRad:tg,radToDeg:eg,isPowerOfTwo:ng,ceilPowerOfTwo:ig,floorPowerOfTwo:rg,setQuaternionFromProperEuler:sg,normalize:Me,denormalize:Ti};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=l*d+c*f+u*_+h*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),T=Math.sin(M);p=Math.sin(p*M)/T,o=Math.sin(o*M)/T,l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+g*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+g*o;const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*f-c*d,t[e+1]=l*_+u*d+c*h-o*f,t[e+2]=c*_+u*f+o*d-l*h,t[e+3]=u*_-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Kl.copy(this).projectOnVector(t),this.sub(Kl)}reflect(t){return this.sub(Kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kl=new N,gf=new mo;class Qt{constructor(t,e,n,i,s,a,o,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],T=i[4],x=i[7],b=i[2],A=i[5],E=i[8];return s[0]=a*g+o*M+l*b,s[3]=a*m+o*T+l*A,s[6]=a*p+o*x+l*E,s[1]=c*g+u*M+h*b,s[4]=c*m+u*T+h*A,s[7]=c*p+u*x+h*E,s[2]=d*g+f*M+_*b,s[5]=d*m+f*T+_*A,s[8]=d*p+f*x+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=e*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zl.makeScale(t,e)),this}rotate(t){return this.premultiply(Zl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new Qt,vf=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ag(){const r={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xe&&(i.r=er(i.r),i.g=er(i.g),i.b=er(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pr?Sl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Js]:{primaries:t,whitePoint:n,transfer:Sl,toXYZ:vf,fromXYZ:xf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:vf,fromXYZ:xf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),r}const he=ag();function er(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ds;class og{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=bl("canvas")),ds.width=t.width,ds.height=t.height;const i=ds.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(er(e[n]/255)*255):e[n]=er(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lg=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=tr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Jl(i[a].image)):s.push(Jl(i[a]))}else s=Jl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Jl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?og.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}let cg=0;const jl=new N;class yn extends la{constructor(t=yn.DEFAULT_IMAGE,e=yn.DEFAULT_MAPPING,n=Ii,i=Ii,s=Sn,a=Yr,o=Ai,l=ei,c=yn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=tr(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==op)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nu:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case iu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nu:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case iu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=op;yn.DEFAULT_ANISOTROPY=1;class ze{constructor(t=0,e=0,n=0,i=1){ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,x=(f+1)/2,b=(p+1)/2,A=(u+d)/4,E=(h+g)/4,C=(_+m)/4;return T>x&&T>b?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=A/n,s=E/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ug extends la{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new yn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Eh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends ug{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _p extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hg extends yn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mi):Mi.fromBufferAttribute(s,a),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fa),So.subVectors(this.max,fa),ps.subVectors(t.a,fa),ms.subVectors(t.b,fa),_s.subVectors(t.c,fa),or.subVectors(ms,ps),lr.subVectors(_s,ms),Dr.subVectors(ps,_s);let e=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Dr.z,Dr.y,or.z,0,-or.x,lr.z,0,-lr.x,Dr.z,0,-Dr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Dr.y,Dr.x,0];return!Ql(e,ps,ms,_s,So)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,ps,ms,_s,So))?!1:(yo.crossVectors(or,lr),e=[yo.x,yo.y,yo.z],Ql(e,ps,ms,_s,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wi=[new N,new N,new N,new N,new N,new N,new N,new N],Mi=new N,Mo=new os,ps=new N,ms=new N,_s=new N,or=new N,lr=new N,Dr=new N,fa=new N,So=new N,yo=new N,Lr=new N;function Ql(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Lr.fromArray(r,s);const o=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=t.dot(Lr),c=e.dot(Lr),u=n.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const fg=new os,da=new N,tc=new N;class ca{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fg.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;da.subVectors(t,this.center);const e=da.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(da,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(da.copy(t.center).add(tc)),this.expandByPoint(da.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xi=new N,ec=new N,bo=new N,cr=new N,nc=new N,To=new N,ic=new N;class Ah{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xi.copy(this.origin).addScaledVector(this.direction,e),Xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ec.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),cr.copy(this.origin).sub(ec);const s=t.distanceTo(e)*.5,a=-this.direction.dot(bo),o=cr.dot(this.direction),l=-cr.dot(bo),c=cr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(ec).addScaledVector(bo,d),f}intersectSphere(t,e){Xi.subVectors(t.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xi)!==null}intersectTriangle(t,e,n,i,s){nc.subVectors(e,t),To.subVectors(n,t),ic.crossVectors(nc,To);let a=this.direction.dot(ic),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cr.subVectors(this.origin,t);const l=o*this.direction.dot(To.crossVectors(cr,To));if(l<0)return null;const c=o*this.direction.dot(nc.cross(cr));if(c<0||l+c>a)return null;const u=-o*cr.dot(ic);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,n,i,s,a,o,l,c,u,h,d,f,_,g,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,f,_,g,m)}set(t,e,n,i,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/gs.setFromMatrixColumn(t,0).length(),s=1/gs.setFromMatrixColumn(t,1).length(),a=1/gs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d-g*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=a*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dg,t,pg)}lookAt(t,e,n){const i=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ur.crossVectors(n,Kn),ur.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ur.crossVectors(n,Kn)),ur.normalize(),Eo.crossVectors(Kn,ur),i[0]=ur.x,i[4]=Eo.x,i[8]=Kn.x,i[1]=ur.y,i[5]=Eo.y,i[9]=Kn.y,i[2]=ur.z,i[6]=Eo.z,i[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],T=n[7],x=n[11],b=n[15],A=i[0],E=i[4],C=i[8],v=i[12],S=i[1],P=i[5],D=i[9],F=i[13],k=i[2],G=i[6],V=i[10],B=i[14],W=i[3],et=i[7],L=i[11],nt=i[15];return s[0]=a*A+o*S+l*k+c*W,s[4]=a*E+o*P+l*G+c*et,s[8]=a*C+o*D+l*V+c*L,s[12]=a*v+o*F+l*B+c*nt,s[1]=u*A+h*S+d*k+f*W,s[5]=u*E+h*P+d*G+f*et,s[9]=u*C+h*D+d*V+f*L,s[13]=u*v+h*F+d*B+f*nt,s[2]=_*A+g*S+m*k+p*W,s[6]=_*E+g*P+m*G+p*et,s[10]=_*C+g*D+m*V+p*L,s[14]=_*v+g*F+m*B+p*nt,s[3]=M*A+T*S+x*k+b*W,s[7]=M*E+T*P+x*G+b*et,s[11]=M*C+T*D+x*V+b*L,s[15]=M*v+T*F+x*B+b*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15],M=l*f-c*d,T=o*f-c*h,x=o*d-l*h,b=a*f-c*u,A=a*d-l*u,E=a*h-o*u;return e*(g*M-m*T+p*x)-n*(_*M-m*b+p*A)+i*(_*T-g*b+p*E)-s*(_*x-g*A+m*E)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,T=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,x=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,b=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,A=e*M+n*T+i*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=M*E,t[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*E,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*E,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*E,t[4]=T*E,t[5]=(u*m*s-_*d*s+_*i*f-e*m*f-u*i*p+e*d*p)*E,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*E,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*f+e*l*f)*E,t[8]=x*E,t[9]=(_*h*s-u*g*s-_*n*f+e*g*f+u*n*p-e*h*p)*E,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*E,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*f-e*o*f)*E,t[12]=b*E,t[13]=(u*g*i-_*h*i+_*n*d-e*g*d-u*n*m+e*h*m)*E,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*E,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,M=l*c,T=l*u,x=l*h,b=n.x,A=n.y,E=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+x)*b,i[2]=(_-T)*b,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+T)*E,i[9]=(m-M)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Si.copy(this);const c=1/s,u=1/a,h=1/o;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=u,Si.elements[5]*=u,Si.elements[6]*=u,Si.elements[8]*=h,Si.elements[9]*=h,Si.elements[10]*=h,e.setFromRotationMatrix(Si),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Ui,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ui)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===yl)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Ui,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ui)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===yl)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gs=new N,Si=new Se,dg=new N(0,0,0),pg=new N(1,1,1),ur=new N,Eo=new N,Kn=new N,Mf=new Se,Sf=new mo;class Vi{constructor(t=0,e=0,n=0,i=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mg=0;const yf=new N,vs=new mo,Yi=new Se,Ao=new N,pa=new N,_g=new N,gg=new mo,bf=new N(1,0,0),Tf=new N(0,1,0),Ef=new N(0,0,1),Af={type:"added"},vg={type:"removed"},xs={type:"childadded",child:null},rc={type:"childremoved",child:null};class je extends la{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new N,e=new Vi,n=new mo,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Qt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(bf,t)}rotateY(t){return this.rotateOnAxis(Tf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,e){return yf.copy(t).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bf,t)}translateY(t){return this.translateOnAxis(Tf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(pa,Ao,this.up):Yi.lookAt(Ao,pa,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(Yi),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Af),xs.child=t,this.dispatchEvent(xs),xs.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vg),rc.child=t,this.dispatchEvent(rc),rc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Af),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,_g),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,gg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}je.DEFAULT_UP=new N(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new N,qi=new N,sc=new N,$i=new N,Ms=new N,Ss=new N,wf=new N,ac=new N,oc=new N,lc=new N,cc=new ze,uc=new ze,hc=new ze;class _i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),yi.subVectors(t,e),i.cross(yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){yi.subVectors(i,e),qi.subVectors(n,e),sc.subVectors(t,e);const a=yi.dot(yi),o=yi.dot(qi),l=yi.dot(sc),c=qi.dot(qi),u=qi.dot(sc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return cc.setScalar(0),uc.setScalar(0),hc.setScalar(0),cc.fromBufferAttribute(t,e),uc.fromBufferAttribute(t,n),hc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(cc,s.x),a.addScaledVector(uc,s.y),a.addScaledVector(hc,s.z),a}static isFrontFacing(t,e,n,i){return yi.subVectors(n,e),qi.subVectors(t,e),yi.cross(qi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),yi.cross(qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return _i.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ms.subVectors(i,n),Ss.subVectors(s,n),ac.subVectors(t,n);const l=Ms.dot(ac),c=Ss.dot(ac);if(l<=0&&c<=0)return e.copy(n);oc.subVectors(t,i);const u=Ms.dot(oc),h=Ss.dot(oc);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ms,a);lc.subVectors(t,s);const f=Ms.dot(lc),_=Ss.dot(lc);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ss,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return wf.subVectors(s,i),o=(h-u)/(h-u+(f-_)),e.copy(i).addScaledVector(wf,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},wo={h:0,s:0,l:0};function fc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Th(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=fc(a,s,t+1/3),this.g=fc(a,s,t),this.b=fc(a,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=un){function n(s){s!==void 0&&parseFloat(s)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const n=gp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return he.workingToColorSpace(_n.copy(this),t),Math.round(ie(_n.r*255,0,255))*65536+Math.round(ie(_n.g*255,0,255))*256+Math.round(ie(_n.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(_n.copy(this),e);const n=_n.r,i=_n.g,s=_n.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=un){he.workingToColorSpace(_n.copy(this),t);const e=_n.r,n=_n.g,i=_n.b;return t!==un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(hr),this.setHSL(hr.h+t,hr.s+e,hr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hr),t.getHSL(wo);const n=Fa(hr.h,wo.h,e),i=Fa(hr.s,wo.s,e),s=Fa(hr.l,wo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Gt;Gt.NAMES=gp;let xg=0;class ls extends la{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=ks,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=Yc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==Yc&&(n.blendDst=this.blendDst),this.blendEquation!==Hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bl extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=tp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new N,Co=new vt;let Mg=0;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fu&&(t.usage=this.usage),t}}class vp extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class xp extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Sg=0;const hi=new Se,dc=new je,ys=new N,Zn=new os,ma=new os,sn=new N;class en extends la{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mp(t)?xp:vp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,n){return hi.makeTranslation(t,e,n),this.applyMatrix4(hi),this}scale(t,e,n){return hi.makeScale(t,e,n),this.applyMatrix4(hi),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ma.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Zn.min,ma.min),Zn.expandByPoint(sn),sn.addVectors(Zn.max,ma.max),Zn.expandByPoint(sn)):(Zn.expandByPoint(ma.min),Zn.expandByPoint(ma.max))}Zn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)sn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(sn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(t,c),sn.add(ys)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new N,l[C]=new N;const c=new N,u=new N,h=new N,d=new vt,f=new vt,_=new vt,g=new N,m=new N;function p(C,v,S){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[C].add(g),o[v].add(g),o[S].add(g),l[C].add(m),l[v].add(m),l[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,v=M.length;C<v;++C){const S=M[C],P=S.start,D=S.count;for(let F=P,k=P+D;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const T=new N,x=new N,b=new N,A=new N;function E(C){b.fromBufferAttribute(i,C),A.copy(b);const v=o[C];T.copy(v),T.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(A,v);const P=x.dot(l[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,P)}for(let C=0,v=M.length;C<v;++C){const S=M[C],P=S.start,D=S.count;for(let F=P,k=P+D;F<k;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new bn(d,u,h)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new Se,Ir=new Ah,Ro=new ca,Rf=new N,Po=new N,Do=new N,Lo=new N,pc=new N,Io=new N,Pf=new N,Uo=new N;class Ie extends je{constructor(t=new en,e=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(pc.fromBufferAttribute(h,t),a?Io.addScaledVector(pc,u):Io.addScaledVector(pc.sub(e),u))}e.add(Io)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ir.copy(t.ray).recast(t.near),!(Ro.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Ro,Rf)===null||Ir.origin.distanceToSquared(Rf)>(t.far-t.near)**2))&&(Cf.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(Cf),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,b=T;x<b;x+=3){const A=o.getX(x),E=o.getX(x+1),C=o.getX(x+2);i=No(this,p,t,n,c,u,h,A,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),T=o.getX(m+1),x=o.getX(m+2);i=No(this,a,t,n,c,u,h,M,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,b=T;x<b;x+=3){const A=x,E=x+1,C=x+2;i=No(this,p,t,n,c,u,h,A,E,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,T=m+1,x=m+2;i=No(this,a,t,n,c,u,h,M,T,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function yg(r,t,e,n,i,s,a,o){let l;if(t.side===zn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Tr,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Uo);return c<e.near||c>e.far?null:{distance:c,point:Uo.clone(),object:r}}function No(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Po),r.getVertexPosition(l,Do),r.getVertexPosition(c,Lo);const u=yg(r,t,e,n,Po,Do,Lo,Pf);if(u){const h=new N;_i.getBarycoord(Pf,Po,Do,Lo,h),i&&(u.uv=_i.getInterpolatedAttribute(i,o,l,c,h,new vt)),s&&(u.uv1=_i.getInterpolatedAttribute(s,o,l,c,h,new vt)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new N,materialIndex:0};_i.getNormal(Po,Do,Lo,d.normal),u.face=d,u.barycoord=h}return u}class _o extends en{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function _(g,m,p,M,T,x,b,A,E,C,v){const S=x/E,P=b/C,D=x/2,F=b/2,k=A/2,G=E+1,V=C+1;let B=0,W=0;const et=new N;for(let L=0;L<V;L++){const nt=L*P-F;for(let Lt=0;Lt<G;Lt++){const Ft=Lt*S-D;et[g]=Ft*M,et[m]=nt*T,et[p]=k,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=A>0?1:-1,u.push(et.x,et.y,et.z),h.push(Lt/E),h.push(1-L/C),B+=1}}for(let L=0;L<C;L++)for(let nt=0;nt<E;nt++){const Lt=d+nt+G*L,Ft=d+nt+G*(L+1),Bt=d+(nt+1)+G*(L+1),Xt=d+(nt+1)+G*L;l.push(Lt,Ft,Xt),l.push(Ft,Bt,Xt),W+=6}o.addGroup(f,W,v),f+=W,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Rn(r){const t={};for(let e=0;e<r.length;e++){const n=js(r[e]);for(const i in n)t[i]=n[i]}return t}function bg(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Mp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const io={clone:js,merge:Rn};var Tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tg,this.fragmentShader=Eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=bg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Sp extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new N,Df=new vt,Lf=new vt;class di extends Sp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,e){return this.getViewBounds(t,Df,Lf),e.subVectors(Lf,Df)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Na*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,Ts=1;class Ag extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new di(bs,Ts,t,e);i.layers=this.layers,this.add(i);const s=new di(bs,Ts,t,e);s.layers=this.layers,this.add(s);const a=new di(bs,Ts,t,e);a.layers=this.layers,this.add(a);const o=new di(bs,Ts,t,e);o.layers=this.layers,this.add(o);const l=new di(bs,Ts,t,e);l.layers=this.layers,this.add(l);const c=new di(bs,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class yp extends yn{constructor(t=[],e=is,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bp extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yp(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _o(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:Oi});s.uniforms.tEquirect.value=e;const a=new Ie(i,s),o=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Sn),new Ag(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Pi extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wg={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cg extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Rg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fu,this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new N;class El{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new bn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new El(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Tp extends ls{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Es;const _a=new N,As=new N,ws=new N,Cs=new vt,ga=new vt,Ep=new Se,Fo=new N,va=new N,Oo=new N,If=new vt,_c=new vt,Uf=new vt;class Pg extends je{constructor(t=new Tp){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new en;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rg(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new El(n,3,0,!1)),Es.setAttribute("uv",new El(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new vt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),Ep.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-ws.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Bo(Fo.set(-.5,-.5,0),ws,a,As,i,s),Bo(va.set(.5,-.5,0),ws,a,As,i,s),Bo(Oo.set(.5,.5,0),ws,a,As,i,s),If.set(0,0),_c.set(1,0),Uf.set(1,1);let o=t.ray.intersectTriangle(Fo,va,Oo,!1,_a);if(o===null&&(Bo(va.set(-.5,.5,0),ws,a,As,i,s),_c.set(0,1),o=t.ray.intersectTriangle(Fo,Oo,va,!1,_a),o===null))return;const l=t.ray.origin.distanceTo(_a);l<t.near||l>t.far||e.push({distance:l,point:_a.clone(),uv:_i.getInterpolation(_a,Fo,va,Oo,If,_c,Uf,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bo(r,t,e,n,i,s){Cs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ga.x=s*Cs.x-i*Cs.y,ga.y=i*Cs.x+s*Cs.y):ga.copy(Cs),r.copy(t),r.x+=ga.x,r.y+=ga.y,r.applyMatrix4(Ep)}class Ap extends yn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=hn,u=hn,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nf extends bn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new Se,Ff=new Se,zo=[],Of=new os,Dg=new Se,xa=new Ie,Ma=new ca;class Lg extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new os),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Of.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Of)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ca),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Ma.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),t.ray.intersectsSphere(Ma)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Rs),Ff.multiplyMatrices(n,Rs),xa.matrixWorld=Ff,xa.raycast(t,zo);for(let a=0,o=zo.length;a<o;a++){const l=zo[a];l.instanceId=s,l.object=this,e.push(l)}zo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ap(new Float32Array(i*this.count),i,this.count,vh,Ei));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gc=new N,Ig=new N,Ug=new Qt;class zr{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=gc.subVectors(n,e).cross(Ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ug.getNormalMatrix(t),i=this.coplanarPoint(gc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new ca,Ng=new vt(.5,.5),ko=new N;class Ch{constructor(t=new zr,e=new zr,n=new zr,i=new zr,s=new zr,a=new zr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],T=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-a,f-u,p-_,b-M).normalize(),i[1].setComponents(c+a,f+u,p+_,b+M).normalize(),i[2].setComponents(c+o,f+h,p+g,b+T).normalize(),i[3].setComponents(c-o,f-h,p-g,b-T).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,b-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-x).normalize(),e===Ui)i[5].setComponents(c+l,f+d,p+m,b+x).normalize();else if(e===yl)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){Ur.center.set(0,0,0);const e=Ng.distanceTo(t.center);return Ur.radius=.7071067811865476+e,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ko.x=i.normal.x>0?t.max.x:t.min.x,ko.y=i.normal.y>0?t.max.y:t.min.y,ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wp extends ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bf=new Se,Ou=new Ah,Vo=new ca,Go=new N;class Cp extends je{constructor(t=new en,e=new wp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=s,t.ray.intersectsSphere(Vo)===!1)return;Bf.copy(i).invert(),Ou.copy(t.ray).applyMatrix4(Bf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Go.fromBufferAttribute(h,m),zf(Go,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Go.fromBufferAttribute(h,_),zf(Go,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zf(r,t,e,n,i,s,a){const o=Ou.distanceSqToPoint(r);if(o<e){const l=new N;Ou.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class zl extends yn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends yn{constructor(t,e,n=ki,i,s,a,o=hn,l=hn,c,u=ir,h=1){if(u!==ir&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fg extends ro{constructor(t,e=ki,n=is,i,s,a=hn,o=hn,l,c=ir){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rp extends yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rh extends en{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,_=n*2+s,g=i+1,m=new N,p=new N;for(let M=0;M<=_;M++){let T=0,x=0,b=0,A=0;if(M<=n){const v=M/n,S=v*Math.PI/2;x=-u-t*Math.cos(S),b=t*Math.sin(S),A=-t*Math.cos(S),T=v*h}else if(M<=n+s){const v=(M-n)/s;x=-u+v*e,b=t,A=0,T=h+v*d}else{const v=(M-n-s)/n,S=v*Math.PI/2;x=u+t*Math.sin(S),b=t*Math.cos(S),A=t*Math.sin(S),T=h+d+v*h}const E=Math.max(0,Math.min(1,T/f));let C=0;M===0?C=.5/i:M===_&&(C=-.5/i);for(let v=0;v<=i;v++){const S=v/i,P=S*Math.PI*2,D=Math.sin(P),F=Math.cos(P);p.x=-b*F,p.y=x,p.z=b*D,o.push(p.x,p.y,p.z),m.set(-b*F,A,b*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(S+C,E)}if(M>0){const v=(M-1)*g;for(let S=0;S<i;S++){const P=v+S,D=v+S+1,F=M*g+S,k=M*g+S+1;a.push(P,D,F),a.push(D,k,F)}}}this.setIndex(a),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rh(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Wr extends en{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function M(){const x=new N,b=new N;let A=0;const E=(e-t)/n;for(let C=0;C<=s;C++){const v=[],S=C/s,P=S*(e-t)+t;for(let D=0;D<=i;D++){const F=D/i,k=F*l+o,G=Math.sin(k),V=Math.cos(k);b.x=P*G,b.y=-S*n+m,b.z=P*V,h.push(b.x,b.y,b.z),x.set(G,E,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-S),v.push(_++)}g.push(v)}for(let C=0;C<i;C++)for(let v=0;v<s;v++){const S=g[v][C],P=g[v+1][C],D=g[v+1][C+1],F=g[v][C+1];(t>0||v!==0)&&(u.push(S,P,F),A+=3),(e>0||v!==s-1)&&(u.push(P,D,F),A+=3)}c.addGroup(p,A,0),p+=A}function T(x){const b=_,A=new vt,E=new N;let C=0;const v=x===!0?t:e,S=x===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),_++;const P=_;for(let D=0;D<=i;D++){const k=D/i*l+o,G=Math.cos(k),V=Math.sin(k);E.x=v*V,E.y=m*S,E.z=v*G,h.push(E.x,E.y,E.z),d.push(0,S,0),A.x=G*.5+.5,A.y=V*.5*S+.5,f.push(A.x,A.y),_++}for(let D=0;D<i;D++){const F=b+D,k=P+D;x===!0?u.push(k,k+1,F):u.push(k+1,k,F),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ph extends en{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(s.slice(),3)),this.setAttribute("uv",new Pe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const T=new N,x=new N,b=new N;for(let A=0;A<e.length;A+=3)f(e[A+0],T),f(e[A+1],x),f(e[A+2],b),l(T,x,b,M)}function l(M,T,x,b){const A=b+1,E=[];for(let C=0;C<=A;C++){E[C]=[];const v=M.clone().lerp(x,C/A),S=T.clone().lerp(x,C/A),P=A-C;for(let D=0;D<=P;D++)D===0&&C===A?E[C][D]=v:E[C][D]=v.clone().lerp(S,D/P)}for(let C=0;C<A;C++)for(let v=0;v<2*(A-C)-1;v++){const S=Math.floor(v/2);v%2===0?(d(E[C][S+1]),d(E[C+1][S]),d(E[C][S])):(d(E[C][S+1]),d(E[C+1][S+1]),d(E[C+1][S]))}}function c(M){const T=new N;for(let x=0;x<s.length;x+=3)T.x=s[x+0],T.y=s[x+1],T.z=s[x+2],T.normalize().multiplyScalar(M),s[x+0]=T.x,s[x+1]=T.y,s[x+2]=T.z}function u(){const M=new N;for(let T=0;T<s.length;T+=3){M.x=s[T+0],M.y=s[T+1],M.z=s[T+2];const x=m(M)/2/Math.PI+.5,b=p(M)/Math.PI+.5;a.push(x,1-b)}_(),h()}function h(){for(let M=0;M<a.length;M+=6){const T=a[M+0],x=a[M+2],b=a[M+4],A=Math.max(T,x,b),E=Math.min(T,x,b);A>.9&&E<.1&&(T<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,T){const x=M*3;T.x=t[x+0],T.y=t[x+1],T.z=t[x+2]}function _(){const M=new N,T=new N,x=new N,b=new N,A=new vt,E=new vt,C=new vt;for(let v=0,S=0;v<s.length;v+=9,S+=6){M.set(s[v+0],s[v+1],s[v+2]),T.set(s[v+3],s[v+4],s[v+5]),x.set(s[v+6],s[v+7],s[v+8]),A.set(a[S+0],a[S+1]),E.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),b.copy(M).add(T).add(x).divideScalar(3);const P=m(b);g(A,S+0,M,P),g(E,S+2,T,P),g(C,S+4,x,P)}}function g(M,T,x,b){b<0&&M.x===1&&(a[T]=M.x-1),x.x===0&&x.z===0&&(a[T]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ph(t.vertices,t.indices,t.radius,t.detail)}}class ar{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new vt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,i=[],s=[],a=[],o=new N,l=new Se;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new N)}s[0]=new N,a[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(ie(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(ie(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pp extends ar{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Og extends Pp{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Dh(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const Ho=new N,vc=new Dh,xc=new Dh,Mc=new Dh;class Dp extends ar{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Ho.subVectors(i[0],i[1]).add(i[0]),c=Ho);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Ho.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Ho),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),vc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),xc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),Mc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(vc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),xc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Mc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(vc.calc(l),xc.calc(l),Mc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function kf(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Bg(r,t){const e=1-r;return e*e*t}function zg(r,t){return 2*(1-r)*r*t}function kg(r,t){return r*r*t}function Oa(r,t,e,n){return Bg(r,t)+zg(r,e)+kg(r,n)}function Vg(r,t){const e=1-r;return e*e*e*t}function Gg(r,t){const e=1-r;return 3*e*e*r*t}function Hg(r,t){return 3*(1-r)*r*r*t}function Wg(r,t){return r*r*r*t}function Ba(r,t,e,n,i){return Vg(r,t)+Gg(r,e)+Hg(r,n)+Wg(r,i)}class Xg extends ar{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ba(t,i.x,s.x,a.x,o.x),Ba(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yg extends ar{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ba(t,i.x,s.x,a.x,o.x),Ba(t,i.y,s.y,a.y,o.y),Ba(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qg extends ar{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $g extends ar{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kg extends ar{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Oa(t,i.x,s.x,a.x),Oa(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lp extends ar{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Oa(t,i.x,s.x,a.x),Oa(t,i.y,s.y,a.y),Oa(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zg extends ar{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(kf(o,l.x,c.x,u.x,h.x),kf(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new vt().fromArray(i))}return this}}var Jg=Object.freeze({__proto__:null,ArcCurve:Og,CatmullRomCurve3:Dp,CubicBezierCurve:Xg,CubicBezierCurve3:Yg,EllipseCurve:Pp,LineCurve:qg,LineCurve3:$g,QuadraticBezierCurve:Kg,QuadraticBezierCurve3:Lp,SplineCurve:Zg});class Lh extends Ph{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lh(t.radius,t.detail)}}class Qs extends en{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let T=0;T<c;T++){const x=T*h-s;_.push(x,-M,0),g.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),A=M+1+c*p;f.push(T,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ih extends en{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new N,d=new N,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],T=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const A=b/e;h.x=-t*Math.cos(i+A*s)*Math.sin(a+T*o),h.y=t*Math.cos(a+T*o),h.z=t*Math.sin(i+A*s)*Math.sin(a+T*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(A+x,1-T),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const T=u[p][M+1],x=u[p][M],b=u[p+1][M],A=u[p+1][M+1];(p!==0||a>0)&&f.push(T,x,A),(p!==n-1||l<Math.PI)&&f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Pe(_,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uh extends en{constructor(t=new Lp(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new N,l=new N,c=new vt;let u=new N;const h=[],d=[],f=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(f,2));function g(){for(let T=0;T<e;T++)m(T);m(s===!1?e:0),M(),p()}function m(T){u=t.getPointAt(T/e,u);const x=a.normals[T],b=a.binormals[T];for(let A=0;A<=i;A++){const E=A/i*Math.PI*2,C=Math.sin(E),v=-Math.cos(E);l.x=v*x.x+C*b.x,l.y=v*x.y+C*b.y,l.z=v*x.z+C*b.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=e;T++)for(let x=1;x<=i;x++){const b=(i+1)*(T-1)+(x-1),A=(i+1)*T+(x-1),E=(i+1)*T+x,C=(i+1)*(T-1)+x;_.push(b,A,C),_.push(A,E,C)}}function M(){for(let T=0;T<=e;T++)for(let x=0;x<=i;x++)c.x=T/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Uh(new Jg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class jg extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qg extends ls{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pp,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ps extends Qg{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class t0 extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class e0 extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ip extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Sc=new Se,Vf=new N,Gf=new N;class n0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vf),Gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gf),e.updateMatrixWorld(),Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kl extends Sp{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class i0 extends n0{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yc extends Ip{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new i0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class r0 extends Ip{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class s0 extends di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Up{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Hf=new Se;class a0{constructor(t,e,n=0,i=1/0){this.ray=new Ah(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(t,e=!0,n=[]){return Bu(t,this,n,e),n.sort(Wf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Bu(t[i],this,n,e);return n.sort(Wf),n}}function Wf(r,t){return r.distance-t.distance}function Bu(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Bu(s[a],t,e,!0)}}function Xf(r,t,e,n){const i=o0(n);switch(e){case fp:return r*t;case vh:return r*t/i.components*i.byteLength;case xh:return r*t/i.components*i.byteLength;case Zs:return r*t*2/i.components*i.byteLength;case Mh:return r*t*2/i.components*i.byteLength;case dp:return r*t*3/i.components*i.byteLength;case Ai:return r*t*4/i.components*i.byteLength;case Sh:return r*t*4/i.components*i.byteLength;case al:case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ll:case cl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case su:case ou:return Math.max(r,16)*Math.max(t,8)/4;case ru:case au:return Math.max(r,8)*Math.max(t,8)/2;case lu:case cu:case hu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uu:case du:case pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case mu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case gu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Su:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Cu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ru:case Pu:case Du:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Lu:case Iu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Uu:case Nu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(r){switch(r){case ei:case lp:return{byteLength:1,components:1};case Qa:case cp:case ai:return{byteLength:2,components:1};case _h:case gh:return{byteLength:2,components:4};case ki:case mh:case Ei:return{byteLength:4,components:1};case up:case hp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);function Np(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function l0(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
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
#endif`,_0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,x0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ev=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
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
#endif`,ov=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vv=`#if defined( USE_POINTS_UV )
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
#endif`,xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
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
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
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
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,$v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kv=`#ifdef USE_SKINNING
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
#endif`,Zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jv=`#ifdef USE_SKINNING
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
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,_x=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
void main () {
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
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,Ex=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ax=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Cx=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Px=`#define PHONG
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
}`,Dx=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Lx=`#define STANDARD
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
}`,Ix=`#define STANDARD
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
}`,Ux=`#define TOON
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
}`,Nx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Ox=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 color;
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
}`,kx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:c0,alphahash_pars_fragment:u0,alphamap_fragment:h0,alphamap_pars_fragment:f0,alphatest_fragment:d0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:_0,batching_pars_vertex:g0,batching_vertex:v0,begin_vertex:x0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:y0,bumpmap_pars_fragment:b0,clipping_planes_fragment:T0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:w0,color_fragment:C0,color_pars_fragment:R0,color_pars_vertex:P0,color_vertex:D0,common:L0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:U0,displacementmap_pars_vertex:N0,displacementmap_vertex:F0,emissivemap_fragment:O0,emissivemap_pars_fragment:B0,colorspace_fragment:z0,colorspace_pars_fragment:k0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:H0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:ev,envmap_vertex:X0,fog_vertex:Y0,fog_pars_vertex:q0,fog_fragment:$0,fog_pars_fragment:K0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:Q0,lights_pars_begin:tv,lights_toon_fragment:nv,lights_toon_pars_fragment:iv,lights_phong_fragment:rv,lights_phong_pars_fragment:sv,lights_physical_fragment:av,lights_physical_pars_fragment:ov,lights_fragment_begin:lv,lights_fragment_maps:cv,lights_fragment_end:uv,logdepthbuf_fragment:hv,logdepthbuf_pars_fragment:fv,logdepthbuf_pars_vertex:dv,logdepthbuf_vertex:pv,map_fragment:mv,map_pars_fragment:_v,map_particle_fragment:gv,map_particle_pars_fragment:vv,metalnessmap_fragment:xv,metalnessmap_pars_fragment:Mv,morphinstance_vertex:Sv,morphcolor_vertex:yv,morphnormal_vertex:bv,morphtarget_pars_vertex:Tv,morphtarget_vertex:Ev,normal_fragment_begin:Av,normal_fragment_maps:wv,normal_pars_fragment:Cv,normal_pars_vertex:Rv,normal_vertex:Pv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Nv,opaque_fragment:Fv,packing:Ov,premultiplied_alpha_fragment:Bv,project_vertex:zv,dithering_fragment:kv,dithering_pars_fragment:Vv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:Xv,shadowmap_vertex:Yv,shadowmask_pars_fragment:qv,skinbase_vertex:$v,skinning_pars_vertex:Kv,skinning_vertex:Zv,skinnormal_vertex:Jv,specularmap_fragment:jv,specularmap_pars_fragment:Qv,tonemapping_fragment:tx,tonemapping_pars_fragment:ex,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:rx,uv_pars_vertex:sx,uv_vertex:ax,worldpos_vertex:ox,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:fx,cube_frag:dx,depth_vert:px,depth_frag:mx,distance_vert:_x,distance_frag:gx,equirect_vert:vx,equirect_frag:xx,linedashed_vert:Mx,linedashed_frag:Sx,meshbasic_vert:yx,meshbasic_frag:bx,meshlambert_vert:Tx,meshlambert_frag:Ex,meshmatcap_vert:Ax,meshmatcap_frag:wx,meshnormal_vert:Cx,meshnormal_frag:Rx,meshphong_vert:Px,meshphong_frag:Dx,meshphysical_vert:Lx,meshphysical_frag:Ix,meshtoon_vert:Ux,meshtoon_frag:Nx,points_vert:Fx,points_frag:Ox,shadow_vert:Bx,shadow_frag:zx,sprite_vert:kx,sprite_frag:Vx},gt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Di={basic:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Rn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Rn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Rn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Rn([gt.points,gt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Rn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Rn([gt.common,gt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Rn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Rn([gt.sprite,gt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Rn([gt.common,gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Rn([gt.lights,gt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Di.physical={uniforms:Rn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Wo={r:0,b:0,g:0},Nr=new Vi,Gx=new Se;function Hx(r,t,e,n,i,s,a){const o=new Gt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(T){let x=T.isScene===!0?T.background:null;return x&&x.isTexture&&(x=(T.backgroundBlurriness>0?e:t).get(x)),x}function g(T){let x=!1;const b=_(T);b===null?p(o,l):b&&b.isColor&&(p(b,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===Ol)?(u===void 0&&(u=new Ie(new _o(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:js(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Nr.copy(x.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(Nr)),u.material.toneMapped=he.getTransfer(b.colorSpace)!==xe,(h!==b||d!==b.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Ie(new Qs(2,2),new ln({name:"BackgroundMaterial",uniforms:js(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(b.colorSpace)!==xe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,x){T.getRGB(Wo,Mp(r)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,x,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,x=1){o.set(T),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:g,addToRenderList:m,dispose:M}}function Wx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,P,D,F,k){let G=!1;const V=h(F,D,P);s!==V&&(s=V,c(s.object)),G=f(S,F,D,k),G&&_(S,F,D,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(S,P,D,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,P,D){const F=D.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let G=k[P.id];G===void 0&&(G={},k[P.id]=G);let V=G[F];return V===void 0&&(V=d(l()),G[F]=V),V}function d(S){const P=[],D=[],F=[];for(let k=0;k<e;k++)P[k]=0,D[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,P,D,F){const k=s.attributes,G=P.attributes;let V=0;const B=D.getAttributes();for(const W in B)if(B[W].location>=0){const L=k[W];let nt=G[W];if(nt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),L===void 0||L.attribute!==nt||nt&&L.data!==nt.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function _(S,P,D,F){const k={},G=P.attributes;let V=0;const B=D.getAttributes();for(const W in B)if(B[W].location>=0){let L=G[W];L===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(L=S.instanceColor));const nt={};nt.attribute=L,L&&L.data&&(nt.data=L.data),k[W]=nt,V++}s.attributes=k,s.attributesNum=V,s.index=F}function g(){const S=s.newAttributes;for(let P=0,D=S.length;P<D;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const D=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;D[S]=1,F[S]===0&&(r.enableVertexAttribArray(S),F[S]=1),k[S]!==P&&(r.vertexAttribDivisor(S,P),k[S]=P)}function M(){const S=s.newAttributes,P=s.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==S[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function T(S,P,D,F,k,G,V){V===!0?r.vertexAttribIPointer(S,P,D,k,G):r.vertexAttribPointer(S,P,D,F,k,G)}function x(S,P,D,F){g();const k=F.attributes,G=D.getAttributes(),V=P.defaultAttributeValues;for(const B in G){const W=G[B];if(W.location>=0){let et=k[B];if(et===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const L=et.normalized,nt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;const Ft=Lt.buffer,Bt=Lt.type,Xt=Lt.bytesPerElement,K=Bt===r.INT||Bt===r.UNSIGNED_INT||et.gpuType===mh;if(et.isInterleavedBufferAttribute){const j=et.data,ht=j.stride,Pt=et.offset;if(j.isInstancedInterleavedBuffer){for(let at=0;at<W.locationSize;at++)p(W.location+at,j.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let at=0;at<W.locationSize;at++)m(W.location+at);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let at=0;at<W.locationSize;at++)T(W.location+at,nt/W.locationSize,Bt,L,ht*Xt,(Pt+nt/W.locationSize*at)*Xt,K)}else{if(et.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)p(W.location+j,et.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let j=0;j<W.locationSize;j++)T(W.location+j,nt/W.locationSize,Bt,L,nt*Xt,nt/W.locationSize*j*Xt,K)}}else if(V!==void 0){const L=V[B];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(W.location,L);break;case 3:r.vertexAttrib3fv(W.location,L);break;case 4:r.vertexAttrib4fv(W.location,L);break;default:r.vertexAttrib1fv(W.location,L)}}}}M()}function b(){C();for(const S in n){const P=n[S];for(const D in P){const F=P[D];for(const k in F)u(F[k].object),delete F[k];delete P[D]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const D in P){const F=P[D];for(const k in F)u(F[k].object),delete F[k];delete P[D]}delete n[S.id]}function E(S){for(const P in n){const D=n[P];if(D[S.id]===void 0)continue;const F=D[S.id];for(const k in F)u(F[k].object),delete F[k];delete D[S.id]}}function C(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function Xx(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Yx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Ai&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const C=E===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ei&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ei&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:x,maxSamples:b,samples:A}}function qx(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new zr,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,T=M*4;let x=p.clippingState||null;l.value=x,x=u(_,d,T,f);for(let b=0;b!==T;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,x=f;T!==g;++T,x+=4)a.copy(h[T]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function $x(r){let t=new WeakMap;function e(a,o){return o===tu?a.mapping=is:o===eu&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===tu||o===eu)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const mr=4,Yf=[.125,.215,.35,.446,.526,.582],Xr=20,Kx=256,Sa=new kl,qf=new Gt;let bc=null,Tc=0,Ec=0,Ac=!1;const Zx=new N;class zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=Zx}=s;bc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bc,Tc,Ec),this._renderer.xr.enabled=Ac,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ai,format:Ai,colorSpace:Js,depthBuffer:!1},i=$f(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jx(s)),this._blurMaterial=Qx(s,t,e),this._ggxMaterial=jx(s,t,e)}return i}_compileMaterial(t){const e=new Ie(new en,t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,i,s){const l=new di(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(qf),h.toneMapping=Bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new _o,new Bl({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(qf),p=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const b=this._cubeSize;Ds(i,x*b,T>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,l),h.render(t,l)}h.toneMapping=f,h.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===is||t.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-mr?n-_+mr:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,Ds(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(o,Sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ds(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,Sa)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Xr;m>Xr&&Kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const p=[];let M=0;for(let E=0;E<Xr;++E){const C=E/g,v=Math.exp(-C*C/2);p.push(v),E===0?M+=v:E<m&&(M+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const x=this._sizeLods[i],b=3*x*(i>T-mr?i-T+mr:0),A=4*(this._cubeSize-x);Ds(e,b,A,3*x,2*x),l.setRenderTarget(e),l.render(h,Sa)}}function Jx(r){const t=[],e=[],n=[];let i=r;const s=r-mr+1+Yf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-mr?l=Yf[a-r+mr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),T=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,C=A>2?0:-1,v=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];M.set(v,g*_*A),T.set(d,m*_*A);const S=[A,A,A,A,A,A];x.set(S,p*_*A)}const b=new en;b.setAttribute("position",new bn(M,g)),b.setAttribute("uv",new bn(T,m)),b.setAttribute("faceIndex",new bn(x,p)),n.push(new Ie(b,null)),i>mr&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function $f(r,t,e){const n=new kn(r,t,e);return n.texture.mapping=Ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function jx(r,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Qx(r,t,e){const n=new Float32Array(Xr),i=new N(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Kf(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Zf(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tM(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===tu||l===eu,u=l===is||l===Ks;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new zu(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new zu(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function eM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&eo("WebGLRenderer: "+n+" extension not supported."),i}}}function nM(r,t,e,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let T=0,x=M.length;T<x;T+=3){const b=M[T+0],A=M[T+1],E=M[T+2];d.push(b,A,A,E,E,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let T=0,x=M.length/3-1;T<x;T+=3){const b=T+0,A=T+1,E=T+2;d.push(b,A,A,E,E,b)}}else return;const m=new(mp(d)?xp:vp)(d,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function iM(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),e.update(f,n,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function rM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sM(r,t,e){const n=new WeakMap,i=new ze;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let b=o.attributes.position.count*x,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const E=new Float32Array(b*A*4*h),C=new _p(E,b,A,h);C.type=Ei,C.needsUpdate=!0;const v=x*4;for(let P=0;P<h;P++){const D=p[P],F=M[P],k=T[P],G=b*A*4*P;for(let V=0;V<D.count;V++){const B=V*v;_===!0&&(i.fromBufferAttribute(D,V),E[G+B+0]=i.x,E[G+B+1]=i.y,E[G+B+2]=i.z,E[G+B+3]=0),g===!0&&(i.fromBufferAttribute(F,V),E[G+B+4]=i.x,E[G+B+5]=i.y,E[G+B+6]=i.z,E[G+B+7]=0),m===!0&&(i.fromBufferAttribute(k,V),E[G+B+8]=i.x,E[G+B+9]=i.y,E[G+B+10]=i.z,E[G+B+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new vt(b,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function aM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const oM={[ep]:"LINEAR_TONE_MAPPING",[np]:"REINHARD_TONE_MAPPING",[ip]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[sp]:"AGX_TONE_MAPPING",[ap]:"NEUTRAL_TONE_MAPPING",[rp]:"CUSTOM_TONE_MAPPING"};function lM(r,t,e,n,i){const s=new kn(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new kn(t,e,{type:ai,depthBuffer:!1,stencilBuffer:!1}),o=new en;o.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pe([0,2,0,0,2,0],2));const l=new jg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ie(o,l),u=new kl(-1,1,1,-1,0,1);let h=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let x=0;x<m.length;x++){const b=m[x];b.setSize&&b.setSize(M,T)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,x=s.height;for(let b=0;b<m.length;b++){const A=m[b];A.setSize&&A.setSize(T,x)}},this.begin=function(M,T){if(f||M.toneMapping===Bi&&m.length===0)return!1;if(g=T,T!==null){const x=T.width,b=T.height;(s.width!==x||s.height!==b)&&this.setSize(x,b)}return p===!1&&M.setRenderTarget(s),_=M.toneMapping,M.toneMapping=Bi,!0},this.hasRenderPass=function(){return p},this.end=function(M,T){M.toneMapping=_,f=!0;let x=s,b=a;for(let A=0;A<m.length;A++){const E=m[A];if(E.enabled!==!1&&(E.render(M,b,x,T),E.needsSwap!==!1)){const C=x;x=b,b=C}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,l.defines={},he.getTransfer(h)===xe&&(l.defines.SRGB_TRANSFER="");const A=oM[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,M.setRenderTarget(g),M.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Fp=new yn,ku=new ro(1,1),Op=new _p,Bp=new hg,zp=new yp,Jf=[],jf=[],Qf=new Float32Array(16),td=new Float32Array(9),ed=new Float32Array(4);function ua(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Jf[i];if(s===void 0&&(s=new Float32Array(i),Jf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function tn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Gl(r,t){let e=jf[t];e===void 0&&(e=new Int32Array(t),jf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function cM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function uM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2fv(this.addr,t),tn(e,t)}}function hM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;r.uniform3fv(this.addr,t),tn(e,t)}}function fM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4fv(this.addr,t),tn(e,t)}}function dM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;ed.set(n),r.uniformMatrix2fv(this.addr,!1,ed),tn(e,n)}}function pM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;td.set(n),r.uniformMatrix3fv(this.addr,!1,td),tn(e,n)}}function mM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Qf.set(n),r.uniformMatrix4fv(this.addr,!1,Qf),tn(e,n)}}function _M(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function gM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2iv(this.addr,t),tn(e,t)}}function vM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3iv(this.addr,t),tn(e,t)}}function xM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4iv(this.addr,t),tn(e,t)}}function MM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function SM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2uiv(this.addr,t),tn(e,t)}}function yM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3uiv(this.addr,t),tn(e,t)}}function bM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4uiv(this.addr,t),tn(e,t)}}function TM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ku.compareFunction=e.isReversedDepthBuffer()?bh:yh,s=ku):s=Fp,e.setTexture2D(t||s,i)}function EM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Bp,i)}function AM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zp,i)}function wM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Op,i)}function CM(r){switch(r){case 5126:return cM;case 35664:return uM;case 35665:return hM;case 35666:return fM;case 35674:return dM;case 35675:return pM;case 35676:return mM;case 5124:case 35670:return _M;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return xM;case 5125:return MM;case 36294:return SM;case 36295:return yM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return wM}}function RM(r,t){r.uniform1fv(this.addr,t)}function PM(r,t){const e=ua(t,this.size,2);r.uniform2fv(this.addr,e)}function DM(r,t){const e=ua(t,this.size,3);r.uniform3fv(this.addr,e)}function LM(r,t){const e=ua(t,this.size,4);r.uniform4fv(this.addr,e)}function IM(r,t){const e=ua(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function UM(r,t){const e=ua(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function NM(r,t){const e=ua(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function FM(r,t){r.uniform1iv(this.addr,t)}function OM(r,t){r.uniform2iv(this.addr,t)}function BM(r,t){r.uniform3iv(this.addr,t)}function zM(r,t){r.uniform4iv(this.addr,t)}function kM(r,t){r.uniform1uiv(this.addr,t)}function VM(r,t){r.uniform2uiv(this.addr,t)}function GM(r,t){r.uniform3uiv(this.addr,t)}function HM(r,t){r.uniform4uiv(this.addr,t)}function WM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ku:a=Fp;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function XM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Bp,s[a])}function YM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||zp,s[a])}function qM(r,t,e){const n=this.cache,i=t.length,s=Gl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Op,s[a])}function $M(r){switch(r){case 5126:return RM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return kM;case 36294:return VM;case 36295:return GM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return qM}}class KM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=CM(e.type)}}class ZM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$M(e.type)}}class JM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function nd(r,t){r.seq.push(t),r.map[t.id]=t}function jM(r,t,e){const n=r.name,i=n.length;for(wc.lastIndex=0;;){const s=wc.exec(n),a=wc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nd(e,c===void 0?new KM(o,r,t):new ZM(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new JM(o),nd(e,h)),e=h}}}class ul{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);jM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function id(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const QM=37297;let tS=0;function eS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const rd=new Qt;function nS(r){he._getMatrix(rd,he.workingColorSpace,r);const t=`mat3( ${rd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Sl:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+eS(r.getShaderSource(t),o)}else return s}function iS(r,t){const e=nS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const rS={[ep]:"Linear",[np]:"Reinhard",[ip]:"Cineon",[ph]:"ACESFilmic",[sp]:"AgX",[ap]:"Neutral",[rp]:"Custom"};function sS(r,t){const e=rS[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xo=new N;function aS(){he.getLuminanceCoefficients(Xo);const r=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function lS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function wa(r){return r!==""}function ad(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function od(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(r){return r.replace(uS,fS)}const hS=new Map;function fS(r,t){let e=te[t];if(e===void 0){const n=hS.get(t);if(n!==void 0)e=te[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vu(e)}const dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(r){return r.replace(dS,pS)}function pS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function cd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mS={[sl]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function _S(r){return mS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gS={[is]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE_UV"};function vS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":gS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const xS={[Ks]:"ENVMAP_MODE_REFRACTION"};function MS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":xS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SS={[tp]:"ENVMAP_BLENDING_MULTIPLY",[D_]:"ENVMAP_BLENDING_MIX",[L_]:"ENVMAP_BLENDING_ADD"};function yS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":SS[r.combine]||"ENVMAP_BLENDING_NONE"}function bS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function TS(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=_S(e),c=vS(e),u=MS(e),h=yS(e),d=bS(e),f=oS(e),_=lS(s),g=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(wa).join(`
`),p.length>0&&(p+=`
`)):(m=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),p=[cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?te.tonemapping_pars_fragment:"",e.toneMapping!==Bi?sS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,iS("linearToOutputTexel",e.outputColorSpace),aS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wa).join(`
`)),a=Vu(a),a=ad(a,e),a=od(a,e),o=Vu(o),o=ad(o,e),o=od(o,e),a=ld(a),o=ld(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+a,x=M+p+o,b=id(i,i.VERTEX_SHADER,T),A=id(i,i.FRAGMENT_SHADER,x);i.attachShader(g,b),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",F=i.getShaderInfoLog(b)||"",k=i.getShaderInfoLog(A)||"",G=D.trim(),V=F.trim(),B=k.trim();let W=!0,et=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,A);else{const L=sd(i,b,"vertex"),nt=sd(i,A,"fragment");ue("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+L+`
`+nt)}else G!==""?Kt("WebGLProgram: Program Info Log:",G):(V===""||B==="")&&(et=!1);et&&(P.diagnostics={runnable:W,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(b),i.deleteShader(A),C=new ul(i,g),v=cS(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,QM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let ES=0;class AS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wS(t),e.set(t,n)),n}}class wS{constructor(t){this.id=ES++,this.code=t,this.usedTimes=0}}function CS(r,t,e,n,i,s,a){const o=new wh,l=new AS,c=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,P,D,F){const k=D.fog,G=F.geometry,V=v.isMeshStandardMaterial?D.environment:null,B=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),W=B&&B.mapping===Ol?B.image.height:null,et=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Kt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const L=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,nt=L!==void 0?L.length:0;let Lt=0;G.morphAttributes.position!==void 0&&(Lt=1),G.morphAttributes.normal!==void 0&&(Lt=2),G.morphAttributes.color!==void 0&&(Lt=3);let Ft,Bt,Xt,K;if(et){const xt=Di[et];Ft=xt.vertexShader,Bt=xt.fragmentShader}else Ft=v.vertexShader,Bt=v.fragmentShader,l.update(v),Xt=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const j=r.getRenderTarget(),ht=r.state.buffers.depth.getReversed(),Pt=F.isInstancedMesh===!0,at=F.isBatchedMesh===!0,bt=!!v.map,qt=!!v.matcap,pt=!!B,It=!!v.aoMap,Jt=!!v.lightMap,Ot=!!v.bumpMap,X=!!v.normalMap,U=!!v.displacementMap,me=!!v.emissiveMap,ee=!!v.metalnessMap,Ht=!!v.roughnessMap,Tt=v.anisotropy>0,R=v.clearcoat>0,y=v.dispersion>0,O=v.iridescence>0,Z=v.sheen>0,J=v.transmission>0,$=Tt&&!!v.anisotropyMap,yt=R&&!!v.clearcoatMap,st=R&&!!v.clearcoatNormalMap,wt=R&&!!v.clearcoatRoughnessMap,At=O&&!!v.iridescenceMap,rt=O&&!!v.iridescenceThicknessMap,ot=Z&&!!v.sheenColorMap,Et=Z&&!!v.sheenRoughnessMap,Ct=!!v.specularMap,lt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,I=J&&!!v.transmissionMap,ft=J&&!!v.thicknessMap,it=!!v.gradientMap,dt=!!v.alphaMap,tt=v.alphaTest>0,Q=!!v.alphaHash,ut=!!v.extensions;let zt=Bi;v.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(zt=r.toneMapping);const fe={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Ft,fragmentShader:Bt,defines:v.defines,customVertexShaderID:Xt,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:at,batchingColor:at&&F._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&F.instanceColor!==null,instancingMorph:Pt&&F.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Js,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:qt,envMap:pt,envMapMode:pt&&B.mapping,envMapCubeUVHeight:W,aoMap:It,lightMap:Jt,bumpMap:Ot,normalMap:X,displacementMap:U,emissiveMap:me,normalMapObjectSpace:X&&v.normalMapType===N_,normalMapTangentSpace:X&&v.normalMapType===pp,metalnessMap:ee,roughnessMap:Ht,anisotropy:Tt,anisotropyMap:$,clearcoat:R,clearcoatMap:yt,clearcoatNormalMap:st,clearcoatRoughnessMap:wt,dispersion:y,iridescence:O,iridescenceMap:At,iridescenceThicknessMap:rt,sheen:Z,sheenColorMap:ot,sheenRoughnessMap:Et,specularMap:Ct,specularColorMap:lt,specularIntensityMap:Yt,transmission:J,transmissionMap:I,thicknessMap:ft,gradientMap:it,opaque:v.transparent===!1&&v.blending===ks&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:tt,alphaHash:Q,combine:v.combine,mapUv:bt&&g(v.map.channel),aoMapUv:It&&g(v.aoMap.channel),lightMapUv:Jt&&g(v.lightMap.channel),bumpMapUv:Ot&&g(v.bumpMap.channel),normalMapUv:X&&g(v.normalMap.channel),displacementMapUv:U&&g(v.displacementMap.channel),emissiveMapUv:me&&g(v.emissiveMap.channel),metalnessMapUv:ee&&g(v.metalnessMap.channel),roughnessMapUv:Ht&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:yt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(v.sheenRoughnessMap.channel),specularMapUv:Ct&&g(v.specularMap.channel),specularColorMapUv:lt&&g(v.specularColorMap.channel),specularIntensityMapUv:Yt&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:ft&&g(v.thicknessMap.channel),alphaMapUv:dt&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(X||Tt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(bt||dt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:me&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ji,flipSided:v.side===zn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(S,v),T(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function T(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const S=_[v.type];let P;if(S){const D=Di[S];P=io.clone(D.uniforms)}else P=v.uniforms;return P}function b(v,S){let P=h.get(S);return P!==void 0?++P.usedTimes:(P=new TS(r,S,v,s),u.push(P),h.set(S,P)),P}function A(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:C}}function RS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function PS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ud(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||PS),n.length>1&&n.sort(d||ud),i.length>1&&i.sort(d||ud)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function DS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new hd,r.set(n,[a])):i>=s.length?(a=new hd,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function LS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Gt};break;case"SpotLight":e={position:new N,direction:new N,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function IS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let US=0;function NS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function FS(r){const t=new LS,e=IS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Se,a=new Se;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,T=0,x=0,b=0,A=0,E=0;c.sort(NS);for(let v=0,S=c.length;v<S;v++){const P=c[v],D=P.color,F=P.intensity,k=P.distance;let G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Zs?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*F,h+=D.g*F,d+=D.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);E++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,W=e.get(P);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(F),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const B=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,B.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=B.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=G,x++}g++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(D).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const B=P.shadow,W=e.get(P);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=P.shadow.matrix,T++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==T||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=T,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=E,n.version=US++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(T.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(T.width*.5,0,0),x.halfHeight.set(0,T.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(T.matrixWorld),x.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(T.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function fd(r){const t=new FS(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OS(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new fd(r),t.set(i,[o])):s>=a.length?(o=new fd(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zS=`uniform sampler2D shadow_pass;
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
}`,kS=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],VS=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],dd=new Se,ya=new N,Cc=new N;function GS(r,t,e){let n=new Ch;const i=new vt,s=new vt,a=new ze,o=new t0,l=new e0,c={},u=e.maxTextureSize,h={[Tr]:zn,[zn]:Tr,[Ji]:Ji},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:BS,fragmentShader:zS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ie(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let p=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===f_&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=sl);const v=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Oi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==this.type;F&&E.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=A.length;k<G;k++){const V=A[k],B=V.shadow;if(B===void 0){Kt("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const W=B.getFrameExtents();if(i.multiply(W),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Aa){if(V.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new kn(i.x,i.y,{format:Zs,type:ai,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new ro(i.x,i.y,Ei),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=ir,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=hn,B.map.depthTexture.magFilter=hn}else{V.isPointLight?(B.map=new bp(i.x),B.map.depthTexture=new Fg(i.x,ki)):(B.map=new kn(i.x,i.y),B.map.depthTexture=new ro(i.x,i.y,ki)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=ir;const L=r.state.buffers.depth.getReversed();this.type===sl?(B.map.depthTexture.compareFunction=L?bh:yh,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=hn,B.map.depthTexture.magFilter=hn)}B.camera.updateProjectionMatrix()}const et=B.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<et;L++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,L),r.clear();else{L===0&&(r.setRenderTarget(B.map),r.clear());const nt=B.getViewport(L);a.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),D.viewport(a)}if(V.isPointLight){const nt=B.camera,Lt=B.matrix,Ft=V.distance||nt.far;Ft!==nt.far&&(nt.far=Ft,nt.updateProjectionMatrix()),ya.setFromMatrixPosition(V.matrixWorld),nt.position.copy(ya),Cc.copy(nt.position),Cc.add(kS[L]),nt.up.copy(VS[L]),nt.lookAt(Cc),nt.updateMatrixWorld(),Lt.makeTranslation(-ya.x,-ya.y,-ya.z),dd.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(dd,nt.coordinateSystem,nt.reversedDepth)}else B.updateMatrices(V);n=B.getFrustum(),x(E,C,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Aa&&M(B,C),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,P)};function M(A,E){const C=t.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(i.x,i.y,{format:Zs,type:ai})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,C,f,g,null)}function T(A,E,C,v){let S=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const D=S.uuid,F=E.uuid;let k=c[D];k===void 0&&(k={},c[D]=k);let G=k[F];G===void 0&&(G=S.clone(),k[F]=G,E.addEventListener("dispose",b)),S=G}if(S.visible=E.visible,S.wireframe=E.wireframe,v===Aa?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=r.properties.get(S);D.light=C}return S}function x(A,E,C,v,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Aa)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=t.update(A),k=A.material;if(Array.isArray(k)){const G=F.groups;for(let V=0,B=G.length;V<B;V++){const W=G[V],et=k[W.materialIndex];if(et&&et.visible){const L=T(A,et,v,S);A.onBeforeShadow(r,A,E,C,F,L,W),r.renderBufferDirect(C,null,F,L,A,W),A.onAfterShadow(r,A,E,C,F,L,W)}}}else if(k.visible){const G=T(A,k,v,S);A.onBeforeShadow(r,A,E,C,F,G,null),r.renderBufferDirect(C,null,F,G,A,null),A.onAfterShadow(r,A,E,C,F,G,null)}}const D=A.children;for(let F=0,k=D.length;F<k;F++)x(D[F],E,C,v,S)}function b(A){A.target.removeEventListener("dispose",b);for(const C in c){const v=c[C],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const HS={[qc]:$c,[Kc]:jc,[Zc]:Qc,[$s]:Jc,[$c]:qc,[jc]:Kc,[Qc]:Zc,[Jc]:$s};function WS(r,t){function e(){let I=!1;const ft=new ze;let it=null;const dt=new ze(0,0,0,0);return{setMask:function(tt){it!==tt&&!I&&(r.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){I=tt},setClear:function(tt,Q,ut,zt,fe){fe===!0&&(tt*=zt,Q*=zt,ut*=zt),ft.set(tt,Q,ut,zt),dt.equals(ft)===!1&&(r.clearColor(tt,Q,ut,zt),dt.copy(ft))},reset:function(){I=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let I=!1,ft=!1,it=null,dt=null,tt=null;return{setReversed:function(Q){if(ft!==Q){const ut=t.get("EXT_clip_control");Q?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),ft=Q;const zt=tt;tt=null,this.setClear(zt)}},getReversed:function(){return ft},setTest:function(Q){Q?j(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(Q){it!==Q&&!I&&(r.depthMask(Q),it=Q)},setFunc:function(Q){if(ft&&(Q=HS[Q]),dt!==Q){switch(Q){case qc:r.depthFunc(r.NEVER);break;case $c:r.depthFunc(r.ALWAYS);break;case Kc:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case Zc:r.depthFunc(r.EQUAL);break;case Jc:r.depthFunc(r.GEQUAL);break;case jc:r.depthFunc(r.GREATER);break;case Qc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=Q}},setLocked:function(Q){I=Q},setClear:function(Q){tt!==Q&&(ft&&(Q=1-Q),r.clearDepth(Q),tt=Q)},reset:function(){I=!1,it=null,dt=null,tt=null,ft=!1}}}function i(){let I=!1,ft=null,it=null,dt=null,tt=null,Q=null,ut=null,zt=null,fe=null;return{setTest:function(xt){I||(xt?j(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(xt){ft!==xt&&!I&&(r.stencilMask(xt),ft=xt)},setFunc:function(xt,Dt,jt){(it!==xt||dt!==Dt||tt!==jt)&&(r.stencilFunc(xt,Dt,jt),it=xt,dt=Dt,tt=jt)},setOp:function(xt,Dt,jt){(Q!==xt||ut!==Dt||zt!==jt)&&(r.stencilOp(xt,Dt,jt),Q=xt,ut=Dt,zt=jt)},setLocked:function(xt){I=xt},setClear:function(xt){fe!==xt&&(r.clearStencil(xt),fe=xt)},reset:function(){I=!1,ft=null,it=null,dt=null,tt=null,Q=null,ut=null,zt=null,fe=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,T=null,x=null,b=null,A=null,E=new Gt(0,0,0),C=0,v=!1,S=null,P=null,D=null,F=null,k=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=B>=1):W.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=B>=2);let et=null,L={};const nt=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),Ft=new ze().fromArray(nt),Bt=new ze().fromArray(Lt);function Xt(I,ft,it,dt){const tt=new Uint8Array(4),Q=r.createTexture();r.bindTexture(I,Q),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<it;ut++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(ft+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return Q}const K={};K[r.TEXTURE_2D]=Xt(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Xt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Xt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Xt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(r.DEPTH_TEST),a.setFunc($s),Ot(!1),X(cf),j(r.CULL_FACE),It(Oi);function j(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function ht(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Pt(I,ft){return h[I]!==ft?(r.bindFramebuffer(I,ft),h[I]=ft,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ft),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function at(I,ft){let it=f,dt=!1;if(I){it=d.get(ft),it===void 0&&(it=[],d.set(ft,it));const tt=I.textures;if(it.length!==tt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ut=tt.length;Q<ut;Q++)it[Q]=r.COLOR_ATTACHMENT0+Q;it.length=tt.length,dt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,dt=!0);dt&&r.drawBuffers(it)}function bt(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const qt={[Hr]:r.FUNC_ADD,[p_]:r.FUNC_SUBTRACT,[m_]:r.FUNC_REVERSE_SUBTRACT};qt[__]=r.MIN,qt[g_]=r.MAX;const pt={[v_]:r.ZERO,[x_]:r.ONE,[M_]:r.SRC_COLOR,[Xc]:r.SRC_ALPHA,[A_]:r.SRC_ALPHA_SATURATE,[T_]:r.DST_COLOR,[y_]:r.DST_ALPHA,[S_]:r.ONE_MINUS_SRC_COLOR,[Yc]:r.ONE_MINUS_SRC_ALPHA,[E_]:r.ONE_MINUS_DST_COLOR,[b_]:r.ONE_MINUS_DST_ALPHA,[w_]:r.CONSTANT_COLOR,[C_]:r.ONE_MINUS_CONSTANT_COLOR,[R_]:r.CONSTANT_ALPHA,[P_]:r.ONE_MINUS_CONSTANT_ALPHA};function It(I,ft,it,dt,tt,Q,ut,zt,fe,xt){if(I===Oi){g===!0&&(ht(r.BLEND),g=!1);return}if(g===!1&&(j(r.BLEND),g=!0),I!==d_){if(I!==m||xt!==v){if((p!==Hr||x!==Hr)&&(r.blendEquation(r.FUNC_ADD),p=Hr,x=Hr),xt)switch(I){case ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ja:r.blendFunc(r.ONE,r.ONE);break;case uf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ue("WebGLState: Invalid blending: ",I);break}else switch(I){case ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ja:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case uf:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hf:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",I);break}M=null,T=null,b=null,A=null,E.set(0,0,0),C=0,m=I,v=xt}return}tt=tt||ft,Q=Q||it,ut=ut||dt,(ft!==p||tt!==x)&&(r.blendEquationSeparate(qt[ft],qt[tt]),p=ft,x=tt),(it!==M||dt!==T||Q!==b||ut!==A)&&(r.blendFuncSeparate(pt[it],pt[dt],pt[Q],pt[ut]),M=it,T=dt,b=Q,A=ut),(zt.equals(E)===!1||fe!==C)&&(r.blendColor(zt.r,zt.g,zt.b,fe),E.copy(zt),C=fe),m=I,v=!1}function Jt(I,ft){I.side===Ji?ht(r.CULL_FACE):j(r.CULL_FACE);let it=I.side===zn;ft&&(it=!it),Ot(it),I.blending===ks&&I.transparent===!1?It(Oi):It(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const dt=I.stencilWrite;o.setTest(dt),dt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function X(I){I!==u_?(j(r.CULL_FACE),I!==P&&(I===cf?r.cullFace(r.BACK):I===h_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),P=I}function U(I){I!==D&&(V&&r.lineWidth(I),D=I)}function me(I,ft,it){I?(j(r.POLYGON_OFFSET_FILL),(F!==ft||k!==it)&&(r.polygonOffset(ft,it),F=ft,k=it)):ht(r.POLYGON_OFFSET_FILL)}function ee(I){I?j(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function Ht(I){I===void 0&&(I=r.TEXTURE0+G-1),et!==I&&(r.activeTexture(I),et=I)}function Tt(I,ft,it){it===void 0&&(et===null?it=r.TEXTURE0+G-1:it=et);let dt=L[it];dt===void 0&&(dt={type:void 0,texture:void 0},L[it]=dt),(dt.type!==I||dt.texture!==ft)&&(et!==it&&(r.activeTexture(it),et=it),r.bindTexture(I,ft||K[I]),dt.type=I,dt.texture=ft)}function R(){const I=L[et];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function O(){try{r.compressedTexImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function Z(){try{r.texSubImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function yt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function st(){try{r.texStorage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function wt(){try{r.texStorage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function At(){try{r.texImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function rt(){try{r.texImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function ot(I){Ft.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ft.copy(I))}function Et(I){Bt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Bt.copy(I))}function Ct(I,ft){let it=c.get(ft);it===void 0&&(it=new WeakMap,c.set(ft,it));let dt=it.get(I);dt===void 0&&(dt=r.getUniformBlockIndex(ft,I.name),it.set(I,dt))}function lt(I,ft){const dt=c.get(ft).get(I);l.get(ft)!==dt&&(r.uniformBlockBinding(ft,dt,I.__bindingPointIndex),l.set(ft,dt))}function Yt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},et=null,L={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,T=null,x=null,b=null,A=null,E=new Gt(0,0,0),C=0,v=!1,S=null,P=null,D=null,F=null,k=null,Ft.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ht,bindFramebuffer:Pt,drawBuffers:at,useProgram:bt,setBlending:It,setMaterial:Jt,setFlipSided:Ot,setCullFace:X,setLineWidth:U,setPolygonOffset:me,setScissorTest:ee,activeTexture:Ht,bindTexture:Tt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:At,texImage3D:rt,updateUBOMapping:Ct,uniformBlockBinding:lt,texStorage2D:st,texStorage3D:wt,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:yt,scissor:ot,viewport:Et,reset:Yt}}function XS(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,y){return f?new OffscreenCanvas(R,y):bl("canvas")}function g(R,y,O){let Z=1;const J=Tt(R);if((J.width>O||J.height>O)&&(Z=O/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*J.width),yt=Math.floor(Z*J.height);h===void 0&&(h=_($,yt));const st=y?_($,yt):h;return st.width=$,st.height=yt,st.getContext("2d").drawImage(R,0,0,$,yt),Kt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+yt+")."),st}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(R,y,O,Z,J=!1){if(R!==null){if(r[R]!==void 0)return r[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=y;if(y===r.RED&&(O===r.FLOAT&&($=r.R32F),O===r.HALF_FLOAT&&($=r.R16F),O===r.UNSIGNED_BYTE&&($=r.R8)),y===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.R8UI),O===r.UNSIGNED_SHORT&&($=r.R16UI),O===r.UNSIGNED_INT&&($=r.R32UI),O===r.BYTE&&($=r.R8I),O===r.SHORT&&($=r.R16I),O===r.INT&&($=r.R32I)),y===r.RG&&(O===r.FLOAT&&($=r.RG32F),O===r.HALF_FLOAT&&($=r.RG16F),O===r.UNSIGNED_BYTE&&($=r.RG8)),y===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RG8UI),O===r.UNSIGNED_SHORT&&($=r.RG16UI),O===r.UNSIGNED_INT&&($=r.RG32UI),O===r.BYTE&&($=r.RG8I),O===r.SHORT&&($=r.RG16I),O===r.INT&&($=r.RG32I)),y===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RGB8UI),O===r.UNSIGNED_SHORT&&($=r.RGB16UI),O===r.UNSIGNED_INT&&($=r.RGB32UI),O===r.BYTE&&($=r.RGB8I),O===r.SHORT&&($=r.RGB16I),O===r.INT&&($=r.RGB32I)),y===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&($=r.RGBA8UI),O===r.UNSIGNED_SHORT&&($=r.RGBA16UI),O===r.UNSIGNED_INT&&($=r.RGBA32UI),O===r.BYTE&&($=r.RGBA8I),O===r.SHORT&&($=r.RGBA16I),O===r.INT&&($=r.RGBA32I)),y===r.RGB&&(O===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),O===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),y===r.RGBA){const yt=J?Sl:he.getTransfer(Z);O===r.FLOAT&&($=r.RGBA32F),O===r.HALF_FLOAT&&($=r.RGBA16F),O===r.UNSIGNED_BYTE&&($=yt===xe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(R,y){let O;return R?y===null||y===ki||y===to?O=r.DEPTH24_STENCIL8:y===Ei?O=r.DEPTH32F_STENCIL8:y===Qa&&(O=r.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ki||y===to?O=r.DEPTH_COMPONENT24:y===Ei?O=r.DEPTH_COMPONENT32F:y===Qa&&(O=r.DEPTH_COMPONENT16),O}function b(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){const y=R.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&u.delete(y)}function E(R){const y=R.target;y.removeEventListener("dispose",E),S(y)}function C(R){const y=n.get(R);if(y.__webglInit===void 0)return;const O=R.source,Z=d.get(O);if(Z){const J=Z[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(R),Object.keys(Z).length===0&&d.delete(O)}n.remove(R)}function v(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const O=R.source,Z=d.get(O);delete Z[y.__cacheKey],a.memory.textures--}function S(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let J=0;J<y.__webglFramebuffer[Z].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[Z][J]);else r.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)r.deleteFramebuffer(y.__webglFramebuffer[Z]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=R.textures;for(let Z=0,J=O.length;Z<J;Z++){const $=n.get(O[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[Z])}n.remove(R)}let P=0;function D(){P=0}function F(){const R=P;return R>=i.maxTextures&&Kt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function k(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function G(R,y){const O=n.get(R);if(R.isVideoTexture&&ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const Z=R.image;if(Z===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,R,y);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+y)}function V(R,y){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){K(O,R,y);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+y)}function B(R,y){const O=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){K(O,R,y);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+y)}function W(R,y){const O=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){j(O,R,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+y)}const et={[nu]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[iu]:r.MIRRORED_REPEAT},L={[hn]:r.NEAREST,[I_]:r.NEAREST_MIPMAP_NEAREST,[xo]:r.NEAREST_MIPMAP_LINEAR,[Sn]:r.LINEAR,[$l]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},nt={[F_]:r.NEVER,[V_]:r.ALWAYS,[O_]:r.LESS,[yh]:r.LEQUAL,[B_]:r.EQUAL,[bh]:r.GEQUAL,[z_]:r.GREATER,[k_]:r.NOTEQUAL};function Lt(R,y){if(y.type===Ei&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===$l||y.magFilter===xo||y.magFilter===Yr||y.minFilter===Sn||y.minFilter===$l||y.minFilter===xo||y.minFilter===Yr)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,et[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,et[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,et[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[y.minFilter]),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,nt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==xo&&y.minFilter!==Yr||y.type===Ei&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(R,y){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const $=k(y);if($!==R.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[$].usedTimes++;const yt=J[R.__cacheKey];yt!==void 0&&(J[R.__cacheKey].usedTimes--,yt.usedTimes===0&&v(y)),R.__cacheKey=$,R.__webglTexture=J[$].texture}return O}function Bt(R,y,O){return Math.floor(Math.floor(R/O)/y)}function Xt(R,y,O,Z){const $=R.updateRanges;if($.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,O,Z,y.data);else{$.sort((rt,ot)=>rt.start-ot.start);let yt=0;for(let rt=1;rt<$.length;rt++){const ot=$[yt],Et=$[rt],Ct=ot.start+ot.count,lt=Bt(Et.start,y.width,4),Yt=Bt(ot.start,y.width,4);Et.start<=Ct+1&&lt===Yt&&Bt(Et.start+Et.count-1,y.width,4)===lt?ot.count=Math.max(ot.count,Et.start+Et.count-ot.start):(++yt,$[yt]=Et)}$.length=yt+1;const st=r.getParameter(r.UNPACK_ROW_LENGTH),wt=r.getParameter(r.UNPACK_SKIP_PIXELS),At=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let rt=0,ot=$.length;rt<ot;rt++){const Et=$[rt],Ct=Math.floor(Et.start/4),lt=Math.ceil(Et.count/4),Yt=Ct%y.width,I=Math.floor(Ct/y.width),ft=lt,it=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Yt),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,Yt,I,ft,it,O,Z,y.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,st),r.pixelStorei(r.UNPACK_SKIP_PIXELS,wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,At)}}function K(R,y,O){let Z=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=r.TEXTURE_3D);const J=Ft(R,y),$=y.source;e.bindTexture(Z,R.__webglTexture,r.TEXTURE0+O);const yt=n.get($);if($.version!==yt.__version||J===!0){e.activeTexture(r.TEXTURE0+O);const st=he.getPrimaries(he.workingColorSpace),wt=y.colorSpace===pr?null:he.getPrimaries(y.colorSpace),At=y.colorSpace===pr||st===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let rt=g(y.image,!1,i.maxTextureSize);rt=Ht(y,rt);const ot=s.convert(y.format,y.colorSpace),Et=s.convert(y.type);let Ct=T(y.internalFormat,ot,Et,y.colorSpace,y.isVideoTexture);Lt(Z,y);let lt;const Yt=y.mipmaps,I=y.isVideoTexture!==!0,ft=yt.__version===void 0||J===!0,it=$.dataReady,dt=b(y,rt);if(y.isDepthTexture)Ct=x(y.format===qr,y.type),ft&&(I?e.texStorage2D(r.TEXTURE_2D,1,Ct,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Ct,rt.width,rt.height,0,ot,Et,null));else if(y.isDataTexture)if(Yt.length>0){I&&ft&&e.texStorage2D(r.TEXTURE_2D,dt,Ct,Yt[0].width,Yt[0].height);for(let tt=0,Q=Yt.length;tt<Q;tt++)lt=Yt[tt],I?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(r.TEXTURE_2D,tt,Ct,lt.width,lt.height,0,ot,Et,lt.data);y.generateMipmaps=!1}else I?(ft&&e.texStorage2D(r.TEXTURE_2D,dt,Ct,rt.width,rt.height),it&&Xt(y,rt,ot,Et)):e.texImage2D(r.TEXTURE_2D,0,Ct,rt.width,rt.height,0,ot,Et,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Ct,Yt[0].width,Yt[0].height,rt.depth);for(let tt=0,Q=Yt.length;tt<Q;tt++)if(lt=Yt[tt],y.format!==Ai)if(ot!==null)if(I){if(it)if(y.layerUpdates.size>0){const ut=Xf(lt.width,lt.height,y.format,y.type);for(const zt of y.layerUpdates){const fe=lt.data.subarray(zt*ut/lt.data.BYTES_PER_ELEMENT,(zt+1)*ut/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,zt,lt.width,lt.height,1,ot,fe)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,rt.depth,ot,lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,Ct,lt.width,lt.height,rt.depth,0,lt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?it&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,rt.depth,ot,Et,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,Ct,lt.width,lt.height,rt.depth,0,ot,Et,lt.data)}else{I&&ft&&e.texStorage2D(r.TEXTURE_2D,dt,Ct,Yt[0].width,Yt[0].height);for(let tt=0,Q=Yt.length;tt<Q;tt++)lt=Yt[tt],y.format!==Ai?ot!==null?I?it&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,Ct,lt.width,lt.height,0,lt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,ot,Et,lt.data):e.texImage2D(r.TEXTURE_2D,tt,Ct,lt.width,lt.height,0,ot,Et,lt.data)}else if(y.isDataArrayTexture)if(I){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Ct,rt.width,rt.height,rt.depth),it)if(y.layerUpdates.size>0){const tt=Xf(rt.width,rt.height,y.format,y.type);for(const Q of y.layerUpdates){const ut=rt.data.subarray(Q*tt/rt.data.BYTES_PER_ELEMENT,(Q+1)*tt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,ot,Et,ut)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ot,Et,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,rt.width,rt.height,rt.depth,0,ot,Et,rt.data);else if(y.isData3DTexture)I?(ft&&e.texStorage3D(r.TEXTURE_3D,dt,Ct,rt.width,rt.height,rt.depth),it&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ot,Et,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,rt.width,rt.height,rt.depth,0,ot,Et,rt.data);else if(y.isFramebufferTexture){if(ft)if(I)e.texStorage2D(r.TEXTURE_2D,dt,Ct,rt.width,rt.height);else{let tt=rt.width,Q=rt.height;for(let ut=0;ut<dt;ut++)e.texImage2D(r.TEXTURE_2D,ut,Ct,tt,Q,0,ot,Et,null),tt>>=1,Q>>=1}}else if(Yt.length>0){if(I&&ft){const tt=Tt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,dt,Ct,tt.width,tt.height)}for(let tt=0,Q=Yt.length;tt<Q;tt++)lt=Yt[tt],I?it&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,ot,Et,lt):e.texImage2D(r.TEXTURE_2D,tt,Ct,ot,Et,lt);y.generateMipmaps=!1}else if(I){if(ft){const tt=Tt(rt);e.texStorage2D(r.TEXTURE_2D,dt,Ct,tt.width,tt.height)}it&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Et,rt)}else e.texImage2D(r.TEXTURE_2D,0,Ct,ot,Et,rt);m(y)&&p(Z),yt.__version=$.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function j(R,y,O){if(y.image.length!==6)return;const Z=Ft(R,y),J=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);const $=n.get(J);if(J.version!==$.__version||Z===!0){e.activeTexture(r.TEXTURE0+O);const yt=he.getPrimaries(he.workingColorSpace),st=y.colorSpace===pr?null:he.getPrimaries(y.colorSpace),wt=y.colorSpace===pr||yt===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,ot=[];for(let Q=0;Q<6;Q++)!At&&!rt?ot[Q]=g(y.image[Q],!0,i.maxCubemapSize):ot[Q]=rt?y.image[Q].image:y.image[Q],ot[Q]=Ht(y,ot[Q]);const Et=ot[0],Ct=s.convert(y.format,y.colorSpace),lt=s.convert(y.type),Yt=T(y.internalFormat,Ct,lt,y.colorSpace),I=y.isVideoTexture!==!0,ft=$.__version===void 0||Z===!0,it=J.dataReady;let dt=b(y,Et);Lt(r.TEXTURE_CUBE_MAP,y);let tt;if(At){I&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Yt,Et.width,Et.height);for(let Q=0;Q<6;Q++){tt=ot[Q].mipmaps;for(let ut=0;ut<tt.length;ut++){const zt=tt[ut];y.format!==Ai?Ct!==null?I?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,0,0,zt.width,zt.height,Ct,zt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,Yt,zt.width,zt.height,0,zt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,0,0,zt.width,zt.height,Ct,lt,zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,Yt,zt.width,zt.height,0,Ct,lt,zt.data)}}}else{if(tt=y.mipmaps,I&&ft){tt.length>0&&dt++;const Q=Tt(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Yt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ot[Q].width,ot[Q].height,Ct,lt,ot[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,ot[Q].width,ot[Q].height,0,Ct,lt,ot[Q].data);for(let ut=0;ut<tt.length;ut++){const fe=tt[ut].image[Q].image;I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,0,0,fe.width,fe.height,Ct,lt,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,Yt,fe.width,fe.height,0,Ct,lt,fe.data)}}else{I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ct,lt,ot[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Yt,Ct,lt,ot[Q]);for(let ut=0;ut<tt.length;ut++){const zt=tt[ut];I?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,0,0,Ct,lt,zt.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,Yt,Ct,lt,zt.image[Q])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),$.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ht(R,y,O,Z,J,$){const yt=s.convert(O.format,O.colorSpace),st=s.convert(O.type),wt=T(O.internalFormat,yt,st,O.colorSpace),At=n.get(y),rt=n.get(O);if(rt.__renderTarget=y,!At.__hasExternalTextures){const ot=Math.max(1,y.width>>$),Et=Math.max(1,y.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,$,wt,ot,Et,y.depth,0,yt,st,null):e.texImage2D(J,$,wt,ot,Et,0,yt,st,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),me(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,J,rt.__webglTexture,0,U(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,J,rt.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(R,y,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer){const Z=y.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=x(y.stencilBuffer,J),yt=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(y),$,y.width,y.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(y),$,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,$,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,R)}else{const Z=y.textures;for(let J=0;J<Z.length;J++){const $=Z[J],yt=s.convert($.format,$.colorSpace),st=s.convert($.type),wt=T($.internalFormat,yt,st,$.colorSpace);me(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(y),wt,y.width,y.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(y),wt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,wt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(R,y,O){const Z=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);if(J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,y.depthTexture);const At=s.convert(y.depthTexture.format),rt=s.convert(y.depthTexture.type);let ot;y.depthTexture.format===ir?ot=r.DEPTH_COMPONENT24:y.depthTexture.format===qr&&(ot=r.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ot,y.width,y.height,0,At,rt,null)}}else G(y.depthTexture,0);const $=J.__webglTexture,yt=U(y),st=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+O:r.TEXTURE_2D,wt=y.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===ir)me(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,wt,st,$,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,wt,st,$,0);else if(y.depthTexture.format===qr)me(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,wt,st,$,0,yt):r.framebufferTexture2D(r.FRAMEBUFFER,wt,st,$,0);else throw new Error("Unknown depthTexture format")}function bt(R){const y=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Z}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)at(y.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?at(y.__webglFramebuffer[0],R,0):at(y.__webglFramebuffer,R,0)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=r.createRenderbuffer(),Pt(y.__webglDepthbuffer[Z],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Pt(y.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(R,y,O){const Z=n.get(R);y!==void 0&&ht(Z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&bt(R)}function pt(R){const y=R.texture,O=n.get(R),Z=n.get(y);R.addEventListener("dispose",E);const J=R.textures,$=R.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=y.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let wt=0;wt<y.mipmaps.length;wt++)O.__webglFramebuffer[st][wt]=r.createFramebuffer()}else O.__webglFramebuffer[st]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)O.__webglFramebuffer[st]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(yt)for(let st=0,wt=J.length;st<wt;st++){const At=n.get(J[st]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){const wt=J[st];O.__webglColorRenderbuffer[st]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const At=s.convert(wt.format,wt.colorSpace),rt=s.convert(wt.type),ot=T(wt.internalFormat,At,rt,wt.colorSpace,R.isXRRenderTarget===!0),Et=U(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,ot,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+st,r.RENDERBUFFER,O.__webglColorRenderbuffer[st])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)ht(O.__webglFramebuffer[st][wt],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,wt);else ht(O.__webglFramebuffer[st],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(y)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let st=0,wt=J.length;st<wt;st++){const At=J[st],rt=n.get(At);let ot=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,rt.__webglTexture),Lt(ot,At),ht(O.__webglFramebuffer,R,At,r.COLOR_ATTACHMENT0+st,ot,0),m(At)&&p(ot)}e.unbindTexture()}else{let st=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(st=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(st,Z.__webglTexture),Lt(st,y),y.mipmaps&&y.mipmaps.length>0)for(let wt=0;wt<y.mipmaps.length;wt++)ht(O.__webglFramebuffer[wt],R,y,r.COLOR_ATTACHMENT0,st,wt);else ht(O.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,st,0);m(y)&&p(st),e.unbindTexture()}R.depthBuffer&&bt(R)}function It(R){const y=R.textures;for(let O=0,Z=y.length;O<Z;O++){const J=y[O];if(m(J)){const $=M(R),yt=n.get(J).__webglTexture;e.bindTexture($,yt),p($),e.unbindTexture()}}}const Jt=[],Ot=[];function X(R){if(R.samples>0){if(me(R)===!1){const y=R.textures,O=R.width,Z=R.height;let J=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(R),st=y.length>1;if(st)for(let At=0;At<y.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),st){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[At]);const rt=n.get(y[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,O,Z,0,0,O,Z,J,r.NEAREST),l===!0&&(Jt.length=0,Ot.length=0,Jt.push(r.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Jt.push($),Ot.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),st)for(let At=0;At<y.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,yt.__webglColorRenderbuffer[At]);const rt=n.get(y[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function U(R){return Math.min(i.maxSamples,R.samples)}function me(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(R){const y=a.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function Ht(R,y){const O=R.colorSpace,Z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Js&&O!==pr&&(he.getTransfer(O)===xe?(Z!==Ai||J!==ei)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",O)),y}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=W,this.rebindTextures=qt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function YS(r,t){function e(n,i=pr){let s;const a=he.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===_h)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===up)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===lp)return r.BYTE;if(n===cp)return r.SHORT;if(n===Qa)return r.UNSIGNED_SHORT;if(n===mh)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Ei)return r.FLOAT;if(n===ai)return r.HALF_FLOAT;if(n===fp)return r.ALPHA;if(n===dp)return r.RGB;if(n===Ai)return r.RGBA;if(n===ir)return r.DEPTH_COMPONENT;if(n===qr)return r.DEPTH_STENCIL;if(n===vh)return r.RED;if(n===xh)return r.RED_INTEGER;if(n===Zs)return r.RG;if(n===Mh)return r.RG_INTEGER;if(n===Sh)return r.RGBA_INTEGER;if(n===al||n===ol||n===ll||n===cl)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ru||n===su||n===au||n===ou)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===au)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lu||n===cu||n===uu||n===hu||n===fu||n===du||n===pu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lu||n===cu)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hu)return s.COMPRESSED_R11_EAC;if(n===fu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===du)return s.COMPRESSED_RG11_EAC;if(n===pu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu||n===Su||n===yu||n===bu||n===Tu||n===Eu||n===Au||n===wu||n===Cu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_u)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Au)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Pu||n===Du)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ru)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===Iu||n===Uu||n===Nu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Lu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const qS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$S=`
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

}`;class KS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:qS,fragmentShader:$S,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new Qs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZS extends la{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new KS,p={},M=e.getContextAttributes();let T=null,x=null;const b=[],A=[],E=new vt;let C=null;const v=new di;v.viewport=new ze;const S=new di;S.viewport=new ze;const P=[v,S],D=new s0;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=b[K];return j===void 0&&(j=new mc,b[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=b[K];return j===void 0&&(j=new mc,b[K]=j),j.getGripSpace()},this.getHand=function(K){let j=b[K];return j===void 0&&(j=new mc,b[K]=j),j.getHandSpace()};function G(K){const j=A.indexOf(K.inputSource);if(j===-1)return;const ht=b[j];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||a),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",B);for(let K=0;K<b.length;K++){const j=A[K];j!==null&&(A[K]=null,b[K].disconnect(j))}F=null,k=null,m.reset();for(const K in p)delete p[K];t.setRenderTarget(T),f=null,d=null,h=null,i=null,x=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",B),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Pt=null,at=null;M.depth&&(at=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=M.stencil?qr:ir,Pt=M.stencil?to:ki);const bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new kn(d.textureWidth,d.textureHeight,{format:Ai,type:ei,depthTexture:new ro(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ht={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new kn(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(K){for(let j=0;j<K.removed.length;j++){const ht=K.removed[j],Pt=A.indexOf(ht);Pt>=0&&(A[Pt]=null,b[Pt].disconnect(ht))}for(let j=0;j<K.added.length;j++){const ht=K.added[j];let Pt=A.indexOf(ht);if(Pt===-1){for(let bt=0;bt<b.length;bt++)if(bt>=A.length){A.push(ht),Pt=bt;break}else if(A[bt]===null){A[bt]=ht,Pt=bt;break}if(Pt===-1)break}const at=b[Pt];at&&at.connect(ht)}}const W=new N,et=new N;function L(K,j,ht){W.setFromMatrixPosition(j.matrixWorld),et.setFromMatrixPosition(ht.matrixWorld);const Pt=W.distanceTo(et),at=j.projectionMatrix.elements,bt=ht.projectionMatrix.elements,qt=at[14]/(at[10]-1),pt=at[14]/(at[10]+1),It=(at[9]+1)/at[5],Jt=(at[9]-1)/at[5],Ot=(at[8]-1)/at[0],X=(bt[8]+1)/bt[0],U=qt*Ot,me=qt*X,ee=Pt/(-Ot+X),Ht=ee*-Ot;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ht),K.translateZ(ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),at[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Tt=qt+ee,R=pt+ee,y=U-Ht,O=me+(Pt-Ht),Z=It*pt/R*Tt,J=Jt*pt/R*Tt;K.projectionMatrix.makePerspective(y,O,Z,J,Tt,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,ht=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),D.near=S.near=v.near=j,D.far=S.far=v.far=ht,(F!==D.near||k!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,k=D.far),D.layers.mask=K.layers.mask|6,v.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;const Pt=K.parent,at=D.cameras;nt(D,Pt);for(let bt=0;bt<at.length;bt++)nt(at[bt],Pt);at.length===2?L(D,v,S):D.projectionMatrix.copy(v.projectionMatrix),Lt(K,D,Pt)};function Lt(K,j,ht){ht===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=no*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let Ft=null;function Bt(K,j){if(u=j.getViewerPose(c||a),_=j,u!==null){const ht=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Pt=!1;ht.length!==D.cameras.length&&(D.cameras.length=0,Pt=!0);for(let pt=0;pt<ht.length;pt++){const It=ht[pt];let Jt=null;if(f!==null)Jt=f.getViewport(It);else{const X=h.getViewSubImage(d,It);Jt=X.viewport,pt===0&&(t.setRenderTargetTextures(x,X.colorTexture,X.depthStencilTexture),t.setRenderTarget(x))}let Ot=P[pt];Ot===void 0&&(Ot=new di,Ot.layers.enable(pt),Ot.viewport=new ze,P[pt]=Ot),Ot.matrix.fromArray(It.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(It.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),pt===0&&(D.matrix.copy(Ot.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Pt===!0&&D.cameras.push(Ot)}const at=i.enabledFeatures;if(at&&at.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const pt=h.getDepthInformation(ht[0]);pt&&pt.isValid&&pt.texture&&m.init(pt,i.renderState)}if(at&&at.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let pt=0;pt<ht.length;pt++){const It=ht[pt].camera;if(It){let Jt=p[It];Jt||(Jt=new Rp,p[It]=Jt);const Ot=h.getCameraImage(It);Jt.sourceTexture=Ot}}}}for(let ht=0;ht<b.length;ht++){const Pt=A[ht],at=b[ht];Pt!==null&&at!==void 0&&at.update(Pt,j,c||a)}Ft&&Ft(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const Xt=new Np;Xt.setAnimationLoop(Bt),this.setAnimationLoop=function(K){Ft=K},this.dispose=function(){}}}const Fr=new Vi,JS=new Se;function jS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Mp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,T,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),T=M.envMap,x=M.envMapRotation;T&&(m.envMap.value=T,Fr.copy(x),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),m.envMapRotation.value.setFromMatrix4(JS.makeRotationFromEuler(Fr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function QS(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const x=T.program;n.uniformBlockBinding(M,x)}function c(M,T){let x=i[M.id];x===void 0&&(_(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",m));const b=T.program;n.updateUBOMapping(M,b);const A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const T=h();M.__bindingPointIndex=T;const x=r.createBuffer(),b=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,x),x}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const T=i[M.id],x=M.uniforms,b=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,E=x.length;A<E;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,S=C.length;v<S;v++){const P=C[v];if(f(P,A,v,b)===!0){const D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let G=0;G<F.length;G++){const V=F[G],B=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,D+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,T,x,b){const A=M.value,E=T+"_"+x;if(b[E]===void 0)return typeof A=="number"||typeof A=="boolean"?b[E]=A:b[E]=A.clone(),!0;{const C=b[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return b[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(M){const T=M.uniforms;let x=0;const b=16;for(let E=0,C=T.length;E<C;E++){const v=Array.isArray(T[E])?T[E]:[T[E]];for(let S=0,P=v.length;S<P;S++){const D=v[S],F=Array.isArray(D.value)?D.value:[D.value];for(let k=0,G=F.length;k<G;k++){const V=F[k],B=g(V),W=x%b,et=W%B.boundary,L=W+et;x+=et,L!==0&&b-L<B.storage&&(x+=b-L),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=B.storage}}}const A=x%b;return A>0&&(x+=b-A),M.__size=x,M.__cache={},this}function g(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Kt("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const x=a.indexOf(T.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function ey(){return wi===null&&(wi=new Ap(ty,16,16,Zs,ai),wi.name="DFG_LUT",wi.minFilter=Sn,wi.magFilter=Sn,wi.wrapS=Ii,wi.wrapT=Ii,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class ny{constructor(t={}){const{canvas:e=G_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ei}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,m=new Set([Sh,Mh,xh]),p=new Set([ei,ki,Qa,to,_h,gh]),M=new Uint32Array(4),T=new Int32Array(4);let x=null,b=null;const A=[],E=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=un;let P=0,D=0,F=null,k=-1,G=null;const V=new ze,B=new ze;let W=null;const et=new Gt(0);let L=0,nt=e.width,Lt=e.height,Ft=1,Bt=null,Xt=null;const K=new ze(0,0,nt,Lt),j=new ze(0,0,nt,Lt);let ht=!1;const Pt=new Ch;let at=!1,bt=!1;const qt=new Se,pt=new N,It=new ze,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function X(){return F===null?Ft:1}let U=n;function me(w,z){return e.getContext(w,z)}try{const w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dh}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",xt,!1),U===null){const z="webgl2";if(U=me(z,w),U===null)throw me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ue("WebGLRenderer: "+w.message),w}let ee,Ht,Tt,R,y,O,Z,J,$,yt,st,wt,At,rt,ot,Et,Ct,lt,Yt,I,ft,it,dt,tt;function Q(){ee=new eM(U),ee.init(),it=new YS(U,ee),Ht=new Yx(U,ee,t,it),Tt=new WS(U,ee),Ht.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),R=new rM(U),y=new RS,O=new XS(U,ee,Tt,y,Ht,it,R),Z=new $x(v),J=new tM(v),$=new l0(U),dt=new Wx(U,$),yt=new nM(U,$,R,dt),st=new aM(U,yt,$,R),Yt=new sM(U,Ht,O),Et=new qx(y),wt=new CS(v,Z,J,ee,Ht,dt,Et),At=new jS(v,y),rt=new DS,ot=new OS(ee),lt=new Hx(v,Z,J,Tt,st,_,l),Ct=new GS(v,st,Ht),tt=new QS(U,R,Ht,Tt),I=new Xx(U,ee,R),ft=new iM(U,ee,R),R.programs=wt.programs,v.capabilities=Ht,v.extensions=ee,v.properties=y,v.renderLists=rt,v.shadowMap=Ct,v.state=Tt,v.info=R}Q(),g!==ei&&(C=new lM(g,e.width,e.height,i,s));const ut=new ZS(v,U);this.xr=ut,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(w){w!==void 0&&(Ft=w,this.setSize(nt,Lt,!1))},this.getSize=function(w){return w.set(nt,Lt)},this.setSize=function(w,z,q=!0){if(ut.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=w,Lt=z,e.width=Math.floor(w*Ft),e.height=Math.floor(z*Ft),q===!0&&(e.style.width=w+"px",e.style.height=z+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(nt*Ft,Lt*Ft).floor()},this.setDrawingBufferSize=function(w,z,q){nt=w,Lt=z,Ft=q,e.width=Math.floor(w*q),e.height=Math.floor(z*q),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(g===ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,z,q,Y){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,z,q,Y),Tt.viewport(V.copy(K).multiplyScalar(Ft).round())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,z,q,Y){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,z,q,Y),Tt.scissor(B.copy(j).multiplyScalar(Ft).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(w){Tt.setScissorTest(ht=w)},this.setOpaqueSort=function(w){Bt=w},this.setTransparentSort=function(w){Xt=w},this.getClearColor=function(w){return w.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,q=!0){let Y=0;if(w){let H=!1;if(F!==null){const ct=F.texture.format;H=m.has(ct)}if(H){const ct=F.texture.type,Mt=p.has(ct),mt=lt.getClearColor(),St=lt.getClearAlpha(),Ut=mt.r,Wt=mt.g,kt=mt.b;Mt?(M[0]=Ut,M[1]=Wt,M[2]=kt,M[3]=St,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=Ut,T[1]=Wt,T[2]=kt,T[3]=St,U.clearBufferiv(U.COLOR,0,T))}else Y|=U.COLOR_BUFFER_BIT}z&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),lt.dispose(),rt.dispose(),ot.dispose(),y.dispose(),Z.dispose(),J.dispose(),st.dispose(),dt.dispose(),tt.dispose(),wt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ve),ut.removeEventListener("sessionend",re),ge.stop()};function zt(w){w.preventDefault(),Tl("WebGLRenderer: Context Lost."),S=!0}function fe(){Tl("WebGLRenderer: Context Restored."),S=!1;const w=R.autoReset,z=Ct.enabled,q=Ct.autoUpdate,Y=Ct.needsUpdate,H=Ct.type;Q(),R.autoReset=w,Ct.enabled=z,Ct.autoUpdate=q,Ct.needsUpdate=Y,Ct.type=H}function xt(w){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const z=w.target;z.removeEventListener("dispose",Dt),jt(z)}function jt(w){_t(w),y.remove(w)}function _t(w){const z=y.get(w).programs;z!==void 0&&(z.forEach(function(q){wt.releaseProgram(q)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,q,Y,H,ct){z===null&&(z=Jt);const Mt=H.isMesh&&H.matrixWorld.determinant()<0,mt=$e(w,z,q,Y,H);Tt.setMaterial(Y,Mt);let St=q.index,Ut=1;if(Y.wireframe===!0){if(St=yt.getWireframeAttribute(q),St===void 0)return;Ut=2}const Wt=q.drawRange,kt=q.attributes.position;let se=Wt.start*Ut,be=(Wt.start+Wt.count)*Ut;ct!==null&&(se=Math.max(se,ct.start*Ut),be=Math.min(be,(ct.start+ct.count)*Ut)),St!==null?(se=Math.max(se,0),be=Math.min(be,St.count)):kt!=null&&(se=Math.max(se,0),be=Math.min(be,kt.count));const Oe=be-se;if(Oe<0||Oe===1/0)return;dt.setup(H,Y,mt,q,St);let Be,Ee=I;if(St!==null&&(Be=$.get(St),Ee=ft,Ee.setIndex(Be)),H.isMesh)Y.wireframe===!0?(Tt.setLineWidth(Y.wireframeLinewidth*X()),Ee.setMode(U.LINES)):Ee.setMode(U.TRIANGLES);else if(H.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),Tt.setLineWidth(Vt*X()),H.isLineSegments?Ee.setMode(U.LINES):H.isLineLoop?Ee.setMode(U.LINE_LOOP):Ee.setMode(U.LINE_STRIP)}else H.isPoints?Ee.setMode(U.POINTS):H.isSprite&&Ee.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ee.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Ee.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Vt=H._multiDrawStarts,ve=H._multiDrawCounts,pe=H._multiDrawCount,qn=St?$.get(St).bytesPerElement:1,hs=y.get(Y).currentProgram.getUniforms();for(let $n=0;$n<pe;$n++)hs.setValue(U,"_gl_DrawID",$n),Ee.render(Vt[$n]/qn,ve[$n])}else if(H.isInstancedMesh)Ee.renderInstances(se,Oe,H.count);else if(q.isInstancedBufferGeometry){const Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Vt);Ee.renderInstances(se,Oe,ve)}else Ee.render(se,Oe)};function $t(w,z,q){w.transparent===!0&&w.side===Ji&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,ye(w,z,q),w.side=Tr,w.needsUpdate=!0,ye(w,z,q),w.side=Ji):ye(w,z,q)}this.compile=function(w,z,q=null){q===null&&(q=w),b=ot.get(q),b.init(z),E.push(b),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const Y=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ct=H.material;if(ct)if(Array.isArray(ct))for(let Mt=0;Mt<ct.length;Mt++){const mt=ct[Mt];$t(mt,q,H),Y.add(mt)}else $t(ct,q,H),Y.add(ct)}),b=E.pop(),Y},this.compileAsync=function(w,z,q=null){const Y=this.compile(w,z,q);return new Promise(H=>{function ct(){if(Y.forEach(function(Mt){y.get(Mt).currentProgram.isReady()&&Y.delete(Mt)}),Y.size===0){H(w);return}setTimeout(ct,10)}ee.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Nt=null;function Zt(w){Nt&&Nt(w)}function Ve(){ge.stop()}function re(){ge.start()}const ge=new Np;ge.setAnimationLoop(Zt),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(w){Nt=w,ut.setAnimationLoop(w),w===null?ge.stop():ge.start()},ut.addEventListener("sessionstart",Ve),ut.addEventListener("sessionend",re),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const q=ut.enabled===!0&&ut.isPresenting===!0,Y=C!==null&&(F===null||q)&&C.begin(v,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(z),z=ut.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,F),b=ot.get(w,E.length),b.init(z),E.push(b),qt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Pt.setFromProjectionMatrix(qt,Ui,z.reversedDepth),bt=this.localClippingEnabled,at=Et.init(this.clippingPlanes,bt),x=rt.get(w,A.length),x.init(),A.push(x),ut.enabled===!0&&ut.isPresenting===!0){const Mt=v.xr.getDepthSensingMesh();Mt!==null&&We(Mt,z,-1/0,v.sortObjects)}We(w,z,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(Bt,Xt),Ot=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ot&&lt.addToRenderList(x,w),this.info.render.frame++,at===!0&&Et.beginShadows();const H=b.state.shadowsArray;if(Ct.render(H,w,z),at===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&C.hasRenderPass())===!1){const Mt=x.opaque,mt=x.transmissive;if(b.setupLights(),z.isArrayCamera){const St=z.cameras;if(mt.length>0)for(let Ut=0,Wt=St.length;Ut<Wt;Ut++){const kt=St[Ut];Te(Mt,mt,w,kt)}Ot&&lt.render(w);for(let Ut=0,Wt=St.length;Ut<Wt;Ut++){const kt=St[Ut];De(x,w,kt,kt.viewport)}}else mt.length>0&&Te(Mt,mt,w,z),Ot&&lt.render(w),De(x,w,z)}F!==null&&D===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),Y&&C.end(v),w.isScene===!0&&w.onAfterRender(v,w,z),dt.resetDefaultState(),k=-1,G=null,E.pop(),E.length>0?(b=E[E.length-1],at===!0&&Et.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?x=A[A.length-1]:x=null};function We(w,z,q,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Pt.intersectsSprite(w)){Y&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qt);const Mt=st.update(w),mt=w.material;mt.visible&&x.push(w,Mt,mt,q,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Pt.intersectsObject(w))){const Mt=st.update(w),mt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),It.copy(Mt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(qt)),Array.isArray(mt)){const St=Mt.groups;for(let Ut=0,Wt=St.length;Ut<Wt;Ut++){const kt=St[Ut],se=mt[kt.materialIndex];se&&se.visible&&x.push(w,Mt,se,q,It.z,kt)}}else mt.visible&&x.push(w,Mt,mt,q,It.z,null)}}const ct=w.children;for(let Mt=0,mt=ct.length;Mt<mt;Mt++)We(ct[Mt],z,q,Y)}function De(w,z,q,Y){const{opaque:H,transmissive:ct,transparent:Mt}=w;b.setupLightsView(q),at===!0&&Et.setGlobalState(v.clippingPlanes,q),Y&&Tt.viewport(V.copy(Y)),H.length>0&&de(H,z,q),ct.length>0&&de(ct,z,q),Mt.length>0&&de(Mt,z,q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Te(w,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const se=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new kn(1,1,{generateMipmaps:!0,type:se?ai:ei,minFilter:Yr,samples:Ht.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const ct=b.state.transmissionRenderTarget[Y.id],Mt=Y.viewport||V;ct.setSize(Mt.z*v.transmissionResolutionScale,Mt.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),St=v.getActiveCubeFace(),Ut=v.getActiveMipmapLevel();v.setRenderTarget(ct),v.getClearColor(et),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),Ot&&lt.render(q);const Wt=v.toneMapping;v.toneMapping=Bi;const kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),at===!0&&Et.setGlobalState(v.clippingPlanes,Y),de(w,q,Y),O.updateMultisampleRenderTarget(ct),O.updateRenderTargetMipmap(ct),ee.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let be=0,Oe=z.length;be<Oe;be++){const Be=z[be],{object:Ee,geometry:Vt,material:ve,group:pe}=Be;if(ve.side===Ji&&Ee.layers.test(Y.layers)){const qn=ve.side;ve.side=zn,ve.needsUpdate=!0,Nn(Ee,q,Y,Vt,ve,pe),ve.side=qn,ve.needsUpdate=!0,se=!0}}se===!0&&(O.updateMultisampleRenderTarget(ct),O.updateRenderTargetMipmap(ct))}v.setRenderTarget(mt,St,Ut),v.setClearColor(et,L),kt!==void 0&&(Y.viewport=kt),v.toneMapping=Wt}function de(w,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ct=w.length;H<ct;H++){const Mt=w[H],{object:mt,geometry:St,group:Ut}=Mt;let Wt=Mt.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),mt.layers.test(q.layers)&&Nn(mt,z,q,St,Wt,Ut)}}function Nn(w,z,q,Y,H,ct){w.onBeforeRender(v,z,q,Y,H,ct),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(v,z,q,Y,w,ct),H.transparent===!0&&H.side===Ji&&H.forceSinglePass===!1?(H.side=zn,H.needsUpdate=!0,v.renderBufferDirect(q,z,Y,H,w,ct),H.side=Tr,H.needsUpdate=!0,v.renderBufferDirect(q,z,Y,H,w,ct),H.side=Ji):v.renderBufferDirect(q,z,Y,H,w,ct),w.onAfterRender(v,z,q,Y,H,ct)}function ye(w,z,q){z.isScene!==!0&&(z=Jt);const Y=y.get(w),H=b.state.lights,ct=b.state.shadowsArray,Mt=H.state.version,mt=wt.getParameters(w,H.state,ct,z,q),St=wt.getProgramCacheKey(mt);let Ut=Y.programs;Y.environment=w.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(w.isMeshStandardMaterial?J:Z).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",Dt),Ut=new Map,Y.programs=Ut);let Wt=Ut.get(St);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===Mt)return Yn(w,mt),Wt}else mt.uniforms=wt.getUniforms(w),w.onBeforeCompile(mt,v),Wt=wt.acquireProgram(mt,St),Ut.set(St,Wt),Y.uniforms=mt.uniforms;const kt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(kt.clippingPlanes=Et.uniform),Yn(w,mt),Y.needsLights=nn(w),Y.lightsStateVersion=Mt,Y.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function pn(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=ul.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Yn(w,z){const q=y.get(w);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function $e(w,z,q,Y,H){z.isScene!==!0&&(z=Jt),O.resetTextureUnits();const ct=z.fog,Mt=Y.isMeshStandardMaterial?z.environment:null,mt=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Js,St=(Y.isMeshStandardMaterial?J:Z).get(Y.envMap||Mt),Ut=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),kt=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,be=!!q.morphAttributes.color;let Oe=Bi;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Oe=v.toneMapping);const Be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=Be!==void 0?Be.length:0,Vt=y.get(Y),ve=b.state.lights;if(at===!0&&(bt===!0||w!==G)){const En=w===G&&Y.id===k;Et.setState(Y,w,En)}let pe=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ve.state.version||Vt.outputColorSpace!==mt||H.isBatchedMesh&&Vt.batching===!1||!H.isBatchedMesh&&Vt.batching===!0||H.isBatchedMesh&&Vt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Vt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Vt.instancing===!1||!H.isInstancedMesh&&Vt.instancing===!0||H.isSkinnedMesh&&Vt.skinning===!1||!H.isSkinnedMesh&&Vt.skinning===!0||H.isInstancedMesh&&Vt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Vt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Vt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Vt.instancingMorph===!1&&H.morphTexture!==null||Vt.envMap!==St||Y.fog===!0&&Vt.fog!==ct||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Et.numPlanes||Vt.numIntersection!==Et.numIntersection)||Vt.vertexAlphas!==Ut||Vt.vertexTangents!==Wt||Vt.morphTargets!==kt||Vt.morphNormals!==se||Vt.morphColors!==be||Vt.toneMapping!==Oe||Vt.morphTargetsCount!==Ee)&&(pe=!0):(pe=!0,Vt.__version=Y.version);let qn=Vt.currentProgram;pe===!0&&(qn=ye(Y,z,H));let hs=!1,$n=!1,ha=!1;const Ce=qn.getUniforms(),Fn=Vt.uniforms;if(Tt.useProgram(qn.program)&&(hs=!0,$n=!0,ha=!0),Y.id!==k&&(k=Y.id,$n=!0),hs||G!==w){Tt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ce.setValue(U,"projectionMatrix",w.projectionMatrix),Ce.setValue(U,"viewMatrix",w.matrixWorldInverse);const On=Ce.map.cameraPosition;On!==void 0&&On.setValue(U,pt.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&Ce.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,$n=!0,ha=!0)}if(Vt.needsLights&&(ve.state.directionalShadowMap.length>0&&Ce.setValue(U,"directionalShadowMap",ve.state.directionalShadowMap,O),ve.state.spotShadowMap.length>0&&Ce.setValue(U,"spotShadowMap",ve.state.spotShadowMap,O),ve.state.pointShadowMap.length>0&&Ce.setValue(U,"pointShadowMap",ve.state.pointShadowMap,O)),H.isSkinnedMesh){Ce.setOptional(U,H,"bindMatrix"),Ce.setOptional(U,H,"bindMatrixInverse");const En=H.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ce.setValue(U,"boneTexture",En.boneTexture,O))}H.isBatchedMesh&&(Ce.setOptional(U,H,"batchingTexture"),Ce.setValue(U,"batchingTexture",H._matricesTexture,O),Ce.setOptional(U,H,"batchingIdTexture"),Ce.setValue(U,"batchingIdTexture",H._indirectTexture,O),Ce.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Ce.setValue(U,"batchingColorTexture",H._colorsTexture,O));const ui=q.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Yt.update(H,q,qn),($n||Vt.receiveShadow!==H.receiveShadow)&&(Vt.receiveShadow=H.receiveShadow,Ce.setValue(U,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Fn.envMap.value=St,Fn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Fn.envMapIntensity.value=z.environmentIntensity),Fn.dfgLUT!==void 0&&(Fn.dfgLUT.value=ey()),$n&&(Ce.setValue(U,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&Ke(Fn,ha),ct&&Y.fog===!0&&At.refreshFogUniforms(Fn,ct),At.refreshMaterialUniforms(Fn,Y,Ft,Lt,b.state.transmissionRenderTarget[w.id]),ul.upload(U,pn(Vt),Fn,O)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ul.upload(U,pn(Vt),Fn,O),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(U,"center",H.center),Ce.setValue(U,"modelViewMatrix",H.modelViewMatrix),Ce.setValue(U,"normalMatrix",H.normalMatrix),Ce.setValue(U,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const En=Y.uniformsGroups;for(let On=0,ql=En.length;On<ql;On++){const Pr=En[On];tt.update(Pr,qn),tt.bind(Pr,qn)}}return qn}function Ke(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function nn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,z,q){const Y=y.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=z,y.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const q=y.get(w);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Hi=U.createFramebuffer();this.setRenderTarget=function(w,z=0,q=0){F=w,P=z,D=q;let Y=null,H=!1,ct=!1;if(w){const mt=y.get(w);if(mt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(U.FRAMEBUFFER,mt.__webglFramebuffer),V.copy(w.viewport),B.copy(w.scissor),W=w.scissorTest,Tt.viewport(V),Tt.scissor(B),Tt.setScissorTest(W),k=-1;return}else if(mt.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(mt.__hasExternalTextures)O.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Wt=w.depthTexture;if(mt.__boundDepthTexture!==Wt){if(Wt!==null&&y.has(Wt)&&(w.width!==Wt.image.width||w.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(ct=!0);const Ut=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[z])?Y=Ut[z][q]:Y=Ut[z],H=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?Y=y.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?Y=Ut[q]:Y=Ut,V.copy(w.viewport),B.copy(w.scissor),W=w.scissorTest}else V.copy(K).multiplyScalar(Ft).floor(),B.copy(j).multiplyScalar(Ft).floor(),W=ht;if(q!==0&&(Y=Hi),Tt.bindFramebuffer(U.FRAMEBUFFER,Y)&&Tt.drawBuffers(w,Y),Tt.viewport(V),Tt.scissor(B),Tt.setScissorTest(W),H){const mt=y.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,mt.__webglTexture,q)}else if(ct){const mt=z;for(let St=0;St<w.textures.length;St++){const Ut=y.get(w.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,Ut.__webglTexture,q,mt)}}else if(w!==null&&q!==0){const mt=y.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,mt.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(w,z,q,Y,H,ct,Mt,mt=0){if(!(w&&w.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){Tt.bindFramebuffer(U.FRAMEBUFFER,St);try{const Ut=w.textures[mt],Wt=Ut.format,kt=Ut.type;if(!Ht.textureFormatReadable(Wt)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(kt)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&q>=0&&q<=w.height-H&&(w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt),U.readPixels(z,q,Y,H,it.convert(Wt),it.convert(kt),ct))}finally{const Ut=F!==null?y.get(F).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,z,q,Y,H,ct,Mt,mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St)if(z>=0&&z<=w.width-Y&&q>=0&&q<=w.height-H){Tt.bindFramebuffer(U.FRAMEBUFFER,St);const Ut=w.textures[mt],Wt=Ut.format,kt=Ut.type;if(!Ht.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),w.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+mt),U.readPixels(z,q,Y,H,it.convert(Wt),it.convert(kt),0);const be=F!==null?y.get(F).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,be);const Oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await H_(U,Oe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(se),U.deleteSync(Oe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,q=0){const Y=Math.pow(2,-q),H=Math.floor(w.image.width*Y),ct=Math.floor(w.image.height*Y),Mt=z!==null?z.x:0,mt=z!==null?z.y:0;O.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Mt,mt,H,ct),Tt.unbindTexture()};const us=U.createFramebuffer(),rn=U.createFramebuffer();this.copyTextureToTexture=function(w,z,q=null,Y=null,H=0,ct=null){ct===null&&(H!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=H,H=0):ct=0);let Mt,mt,St,Ut,Wt,kt,se,be,Oe;const Be=w.isCompressedTexture?w.mipmaps[ct]:w.image;if(q!==null)Mt=q.max.x-q.min.x,mt=q.max.y-q.min.y,St=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,Wt=q.min.y,kt=q.isBox3?q.min.z:0;else{const ui=Math.pow(2,-H);Mt=Math.floor(Be.width*ui),mt=Math.floor(Be.height*ui),w.isDataArrayTexture?St=Be.depth:w.isData3DTexture?St=Math.floor(Be.depth*ui):St=1,Ut=0,Wt=0,kt=0}Y!==null?(se=Y.x,be=Y.y,Oe=Y.z):(se=0,be=0,Oe=0);const Ee=it.convert(z.format),Vt=it.convert(z.type);let ve;z.isData3DTexture?(O.setTexture3D(z,0),ve=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(O.setTexture2DArray(z,0),ve=U.TEXTURE_2D_ARRAY):(O.setTexture2D(z,0),ve=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const pe=U.getParameter(U.UNPACK_ROW_LENGTH),qn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),hs=U.getParameter(U.UNPACK_SKIP_PIXELS),$n=U.getParameter(U.UNPACK_SKIP_ROWS),ha=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Be.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Be.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);const Ce=w.isDataArrayTexture||w.isData3DTexture,Fn=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const ui=y.get(w),En=y.get(z),On=y.get(ui.__renderTarget),ql=y.get(En.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,On.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ql.__webglFramebuffer);for(let Pr=0;Pr<St;Pr++)Ce&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,y.get(w).__webglTexture,H,kt+Pr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,y.get(z).__webglTexture,ct,Oe+Pr)),U.blitFramebuffer(Ut,Wt,Mt,mt,se,be,Mt,mt,U.DEPTH_BUFFER_BIT,U.NEAREST);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||y.has(w)){const ui=y.get(w),En=y.get(z);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,us),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,rn);for(let On=0;On<St;On++)Ce?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ui.__webglTexture,H,kt+On):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ui.__webglTexture,H),Fn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,En.__webglTexture,ct,Oe+On):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,En.__webglTexture,ct),H!==0?U.blitFramebuffer(Ut,Wt,Mt,mt,se,be,Mt,mt,U.COLOR_BUFFER_BIT,U.NEAREST):Fn?U.copyTexSubImage3D(ve,ct,se,be,Oe+On,Ut,Wt,Mt,mt):U.copyTexSubImage2D(ve,ct,se,be,Ut,Wt,Mt,mt);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Fn?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(ve,ct,se,be,Oe,Mt,mt,St,Ee,Vt,Be.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(ve,ct,se,be,Oe,Mt,mt,St,Ee,Be.data):U.texSubImage3D(ve,ct,se,be,Oe,Mt,mt,St,Ee,Vt,Be):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ct,se,be,Mt,mt,Ee,Vt,Be.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ct,se,be,Be.width,Be.height,Ee,Be.data):U.texSubImage2D(U.TEXTURE_2D,ct,se,be,Mt,mt,Ee,Vt,Be);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,hs),U.pixelStorei(U.UNPACK_SKIP_ROWS,$n),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ha),ct===0&&z.generateMipmaps&&U.generateMipmap(ve),Tt.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){P=0,D=0,F=null,Tt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function Ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},Nh,dn,Le,gi=1e8,we=1/gi,Gu=Math.PI*2,iy=Gu/4,ry=0,Vp=Math.sqrt,sy=Math.cos,ay=Math.sin,cn=function(t){return typeof t=="string"},ke=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},Fh=function(t){return typeof t>"u"},Gi=function(t){return typeof t=="object"},Vn=function(t){return t!==!1},Oh=function(){return typeof window<"u"},Yo=function(t){return ke(t)||cn(t)},Gp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,oy=/random\([^)]+\)/g,ly=/,\s*/g,pd=/(?:-?\.?\d|\.)+/gi,Hp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wp=/[+-]=-?[.\d]+/,cy=/[^,'"\[\]\s]+/gi,uy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ne,Ci,Hu,Bh,li={},Al={},Xp,Yp=function(t){return(Al=ea(t,li))&&Xn},zh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},so=function(t,e){return!e&&console.warn(t)},qp=function(t,e){return t&&(li[t]=e)&&Al&&(Al[t]=e)||li},ao=function(){return 0},hy={suppressEvents:!0,isStart:!0,kill:!1},hl={suppressEvents:!0,kill:!1},fy={suppressEvents:!0},kh={},Sr=[],Wu={},$p,Qn={},Pc={},md=30,fl=[],Vh="",Gh=function(t){var e=t[0],n,i;if(Gi(e)||ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=fl.length;i--&&!fl[i].targetTest(e););n=fl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new vm(t[i],n)))||t.splice(i,1);return t},Zr=function(t){return t._gsap||Gh(vi(t))[0]._gsap},Kp=function(t,e,n){return(n=t[e])&&ke(n)?t[e]():Fh(n)&&t.getAttribute&&t.getAttribute(e)||n},Gn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Ue=function(t){return Math.round(t*1e7)/1e7||0},Gs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},dy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wl=function(){var t=Sr.length,e=Sr.slice(0),n,i;for(Wu={},Sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hh=function(t){return!!(t._initted||t._startAt||t.add)},Zp=function(t,e,n,i){Sr.length&&!dn&&wl(),t.render(e,n,!!(dn&&e<0&&Hh(t))),Sr.length&&!dn&&wl()},Jp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(cy).length<2?e:cn(t)?t.trim():t},jp=function(t){return t},ci=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},py=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ea=function(t,e){for(var n in e)t[n]=e[n];return t},_d=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Gi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},za=function(t){var e=t.parent||Ne,n=t.keyframes?py(Tn(t.keyframes)):ci;if(Vn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},my=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Qp=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Hl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Jr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},_y=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Xu=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(hl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},gy=function r(t){return!t||t._ts&&r(t.parent)},gd=function(t){return t._repeat?na(t._tTime,t=t.duration()+t._rDelay)*t:0},na=function(t,e){var n=Math.floor(t=Ue(t/e));return t&&n===t?n-1:n},Rl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Wl=function(t){return t._end=Ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Xl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Wl(t),n._dirty||Jr(n,t)),t},tm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Rl(t.rawTime(),e),(!e._dur||go(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),Jr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},Li=function(t,e,n,i){return e.parent&&Er(e),e._start=Ue((rr(n)?n:n||t!==Ne?fi(t,n,e):t._time)+e._delay),e._end=Ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Qp(t,e,"_first","_last",t._sort?"_start":0),Yu(e)||(t._recent=e),i||tm(t,e),t._ts<0&&Xl(t,t._tTime),t},em=function(t,e){return(li.ScrollTrigger||zh("scrollTrigger",e))&&li.ScrollTrigger.create(e,t)},nm=function(t,e,n,i,s){if(Xh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&$p!==ni.frame)return Sr.push(t),t._lazy=[s,i],1},vy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Yu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},xy=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&vy(t)&&!(!t._initted&&Yu(t))||(t._ts<0||t._dp._ts<0)&&!Yu(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=go(0,t._tDur,e),u=na(l,o),t._yoyo&&u&1&&(a=1-a),u!==na(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||dn||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&nm(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Xu(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Er(t,1),!n&&!dn&&(ri(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},My=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ia=function(t,e,n,i){var s=t._repeat,a=Ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ue(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Xl(t,t._tTime=t._tDur*o),t.parent&&Wl(t),n||Jr(t.parent,t),t},vd=function(t){return t instanceof In?Jr(t):ia(t,t._dur)},Sy={_start:0,endTime:ao,totalDuration:ao},fi=function r(t,e,n){var i=t.labels,s=t._recent||Sy,a=t.duration()>=gi?s.endTime(!1):t._dur,o,l,c;return cn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ka=function(t,e,n){var i=rr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;a.immediateRender=Vn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new qe(e[0],a,e[s+1])},Rr=function(t,e){return t||t===0?e(t):e},go=function(t,e,n){return n<t?t:n>e?e:n},xn=function(t,e){return!cn(t)||!(e=uy.exec(t))?"":e[1]},yy=function(t,e,n){return Rr(n,function(i){return go(t,e,i)})},qu=[].slice,im=function(t,e){return t&&Gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Gi(t[0]))&&!t.nodeType&&t!==Ci},by=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return cn(i)&&!e||im(i,1)?(s=n).push.apply(s,vi(i)):n.push(i)})||n},vi=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):cn(t)&&!n&&(Hu||!ra())?qu.call((e||Bh).querySelectorAll(t),0):Tn(t)?by(t,n):im(t)?qu.call(t,0):t?[t]:[]},$u=function(t){return t=vi(t)[0]||so("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vi(e,n.querySelectorAll?n:n===t?so("Invalid scope")||Bh.createElement("div"):t)}},rm=function(t){return t.sort(function(){return .5-Math.random()})},sm=function(t){if(ke(t))return t;var e=Gi(t)?t:{each:t},n=jr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return cn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,M,T,x,b,A,E,C,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,gi])[1],!v){for(E=-gi;E<(E=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*u-.5:i%v,M=v===gi?0:l?g*h/v-.5:i/v|0,E=0,C=gi,A=0;A<g;A++)T=A%v-p,x=M-(A/v|0),m[A]=b=c?Math.abs(c==="y"?x:T):Vp(T*T+x*x),b>E&&(E=b),b<C&&(C=b);i==="random"&&rm(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=xn(e.amount||e.each)||0,n=n&&g<0?mm(n):n}return g=(m[d]-m.min)/m.max||0,Ue(m.b+(n?n(g):g)*m.v)+m.u}},Ku=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rr(n)?0:xn(n))}},am=function(t,e){var n=Tn(t),i,s;return!n&&Gi(t)&&(i=n=t.radius||gi,t.values?(t=vi(t.values),(s=!rr(t[0]))&&(i*=i)):t=Ku(t.increment)),Rr(e,n?ke(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gi,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-o,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,s||u===a||rr(a)?u:u+xn(a)}:Ku(t))},om=function(t,e,n,i){return Rr(Tn(t)?!e:n===!0?!!(n=0):!i,function(){return Tn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ty=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Ey=function(t,e){return function(n){return t(parseFloat(n))+(e||xn(n))}},Ay=function(t,e,n){return cm(t,e,0,1,n)},lm=function(t,e,n){return Rr(n,function(i){return t[~~e(i)]})},wy=function r(t,e,n){var i=e-t;return Tn(t)?lm(t,r(0,t.length),e):Rr(n,function(s){return(i+(s-t)%i)%i+t})},Cy=function r(t,e,n){var i=e-t,s=i*2;return Tn(t)?lm(t,r(0,t.length-1),e):Rr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},oo=function(t){return t.replace(oy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ly);return om(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},cm=function(t,e,n,i,s){var a=e-t,o=i-n;return Rr(s,function(l){return n+((l-t)/a*o||0)})},Ry=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=cn(t),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Tn(t)&&!Tn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=e}else i||(t=ea(Tn(t)?[]:{},t));if(!u){for(l in e)Wh.call(o,t,l,"get",e[l]);s=function(_){return $h(_,o)||(a?t.p:t)}}}return Rr(n,s)},xd=function(t,e,n){var i=t.labels,s=gi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(t,e,n){var i=t.vars,s=i[e],a=Le,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Sr.length&&wl(),o&&(Le=o),u=l?s.apply(c,l):s.call(c),Le=a,u},Ca=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&ri(t,"onInterrupt"),t},Bs,um=[],hm=function(t){if(t)if(t=!t.name&&t.default||t,Oh()||t.headless){var e=t.name,n=ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ao,render:$h,add:Wh,kill:Xy,modifier:Wy,rawVars:0},a={targetTest:0,get:0,getSetter:qh,aliases:{},register:0};if(ra(),t!==i){if(Qn[e])return;ci(i,ci(Cl(t,s),a)),ea(i.prototype,ea(s,Cl(t,a))),Qn[i.prop=e]=i,t.targetTest&&(fl.push(i),kh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}qp(e,i),t.register&&t.register(Xn,i,Hn)}else um.push(t)},Ae=255,Ra={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},Dc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ae+.5|0},fm=function(t,e,n){var i=t?rr(t)?[t>>16,t>>8&Ae,t&Ae]:0:Ra.black,s,a,o,l,c,u,h,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ra[t])i=Ra[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ae,i&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(pd),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Dc(l+1/3,s,a),i[1]=Dc(l,s,a),i[2]=Dc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Hp),n&&i.length<4&&(i[3]=1),i}else i=t.match(pd)||Ra.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Ae,a=i[1]/Ae,o=i[2]/Ae,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},dm=function(t){var e=[],n=[],i=-1;return t.split(yr).forEach(function(s){var a=s.match(Os)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Md=function(t,e,n){var i="",s=(t+i).match(yr),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=fm(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=dm(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(yr,"1").split(Os),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(yr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},yr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ra)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Py=/hsl[a]?\(/,pm=function(t){var e=t.join(" "),n;if(yr.lastIndex=0,yr.test(e))return n=Py.test(e),t[1]=Md(t[1],n),t[0]=Md(t[0],n,dm(t[1])),!0},lo,ni=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,M=m===!0,T,x,b,A;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,T=b-a,(T>0||M)&&(A=++h.frame,d=b-h.time*1e3,h.time=b=b/1e3,a+=T+(T>=s?4:s-T),x=1),M||(l=c(g)),x)for(f=0;f<o.length;f++)o[f](b,d,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Xp&&(!Hu&&Oh()&&(Ci=Hu=window,Bh=Ci.document||{},li.gsap=Xn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(Xn.version),Yp(Al||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),um.forEach(hm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},lo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),lo=0,c=ao},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,M){var T=p?function(x,b,A,E){m(x,b,A,E),h.remove(T)}:m;return h.remove(m),o[M?"unshift":"push"](T),ra(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),ra=function(){return!lo&&ni.wake()},ce={},Dy=/^[\d.\-M][\d.\-,\s]/,Ly=/["']/g,Iy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Ly,"").trim():+c,i=l.substr(o+1).trim();return e},Uy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ny=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Iy(e[1])]:Uy(t).split(",").map(Jp)):ce._CE&&Dy.test(t)?ce._CE("",t):n},mm=function(t){return function(e){return 1-t(1-e)}},_m=function r(t,e){for(var n=t._first,i;n;)n instanceof In?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},jr=function(t,e){return t&&(ke(t)?t:ce[t]||Ny(t))||e},cs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Gn(t,function(o){ce[o]=li[o]=s,ce[a=o.toLowerCase()]=n;for(var l in s)ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[o+"."+l]=s[l]}),s},gm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Lc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Gu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*ay((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:gm(o);return s=Gu/s,l.config=function(c,u){return r(t,c,u)},l},Ic=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:gm(n);return i.config=function(s){return r(t,s)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;cs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;cs("Elastic",Lc("in"),Lc("out"),Lc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};cs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);cs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});cs("Circ",function(r){return-(Vp(1-r*r)-1)});cs("Sine",function(r){return r===1?1:-sy(r*iy)+1});cs("Back",Ic("in"),Ic("out"),Ic());ce.SteppedEase=ce.steps=li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-we;return function(o){return((i*go(0,a,o)|0)+s)*n}}};ta.ease=ce["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vh+=r+","+r+"Params,"});var vm=function(t,e){this.id=ry++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Kp,this.set=e?e.getSetter:qh},co=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ia(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),lo||ni.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xl(this,n),!s._dp||s.parent||tm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?na(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(go(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Wl(this),_y(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Li(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=fy);var i=dn;return dn=n,Hh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(fi(this,n),Vn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i)),this._dur||(this._zTime=-we),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ke(n)?n:jp,l=function(){var u=i.then;i.then=null,s&&s(),ke(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ca(this)},r})();ci(co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var In=(function(r){kp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),Ne&&Li(n.parent||Ne,Ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&em(Ki(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ka(0,arguments,this),this},e.from=function(i,s,a){return ka(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ka(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,za(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(i,s,fi(this,a),1),this},e.call=function(i,s,a){return Li(this,qe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new qe(i,a,fi(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,za(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,za(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ue(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,T,x,b,A,E;if(this!==Ne&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,x=this._start,T=this._ts,p=!T,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Ue(u%m),u===l?(g=this._repeat,d=c):(b=Ue(u/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=na(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),A&&g&1&&(d=c-d,E=1),g!==b&&!this._lock){var C=A&&b&1,v=C===(A&&g&1);if(g<b&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Ue(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;_m(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=My(this,Ue(o),Ue(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(ri(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-we);break}}f=_}else{f=this._last;for(var S=i<0?i:d;f;){if(_=f._prev,(f._act||S<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(S-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(S-f._start)*f._ts,s,a||dn&&Hh(f)),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=S?-we:we);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-we)._zTime=d>=o?1:-1,this._ts))return this._start=x,Wl(this),this.render(i,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ri(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(rr(s)||(s=fi(this,s,i)),!(i instanceof co)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(cn(i))return this.addLabel(i,s);if(ke(i))i=qe.delayedCall(0,i);else return this}return this!==i?Li(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return cn(i)?this.removeLabel(i):ke(i)?this.killTweensOf(i):(i.parent===this&&Hl(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ue(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=fi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=qe.delayedCall(0,s||ao,a);return o.data="isPause",this._hasPause=1,Li(this,o,fi(this,i))},e.removePause=function(i){var s=this._first;for(i=fi(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_r!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=vi(i),l=this._first,c=rr(s),u;l;)l instanceof qe?dy(l._targets,o)&&(c?(!_r||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=fi(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=qe.to(a,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||we,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ia(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,ci({startAt:{time:fi(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),xd(this,fi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),xd(this,fi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Jr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=gi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Li(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Ue(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ia(a,a===Ne&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ne._ts&&(Zp(Ne,Rl(i,Ne)),$p=ni.frame),ni.frame>=md){md+=oi.autoSleep||120;var s=Ne._first;if((!s||!s._ts)&&oi.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},t})(co);ci(In.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fy=function(t,e,n,i,s,a,o){var l=new Hn(this._pt,t,e,0,1,Tm,null,s),c=0,u=0,h,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=oo(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(Rc)||[];h=Rc.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Gs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Rc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Wp.test(i)||p)&&(l.e=0),this._pt=l,l},Wh=function(t,e,n,i,s,a,o,l,c,u){ke(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:ke(h)?c?t[e.indexOf("set")||!ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=ke(h)?c?Vy:ym:Yh,_;if(cn(i)&&(~i.indexOf("random(")&&(i=oo(i)),i.charAt(1)==="="&&(_=Gs(d,i)+(xn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Zu)return!isNaN(d*i)&&i!==""?(_=new Hn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?Hy:bm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&zh(e,i),Fy.call(this,t,e,d,i,f,l||oi.stringFilter,c))},Oy=function(t,e,n,i,s){if(ke(t)&&(t=Va(t,s,e,n,i)),!Gi(t)||t.style&&t.nodeType||Tn(t)||Gp(t))return cn(t)?Va(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Va(t[o],s,e,n,i);return a},xm=function(t,e,n,i,s,a){var o,l,c,u;if(Qn[t]&&(o=new Qn[t]).init(s,o.rawVars?e[t]:Oy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Hn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Bs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},_r,Zu,Xh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,T=t._overwrite==="auto"&&!Nh,x=t.timeline,b,A,E,C,v,S,P,D,F,k,G,V,B;if(x&&(!d||!s)&&(s="none"),t._ease=jr(s,ta.ease),t._yEase=h?mm(jr(h===!0?s:h,ta.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(D=m[0]?Zr(m[0]).harness:0,V=D&&i[D.prop],b=Cl(i,kh),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?hl:hy),g._lazy=0),a){if(Er(t._startAt=qe.set(m,ci({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!o&&!f)&&t._startAt.revert(hl),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),E=ci({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Vn(l),immediateRender:o,stagger:0,parent:p},b),V&&(E[D.prop]=V),Er(t._startAt=qe.set(m,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(hl):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Vn(l)||l&&!_,A=0;A<m.length;A++){if(v=m[A],P=v._gsap||Gh(m)[A]._gsap,t._ptLookup[A]=k={},Wu[P.id]&&Sr.length&&wl(),G=M===m?A:M.indexOf(v),D&&(F=new D).init(v,V||b,t,G,M)!==!1&&(t._pt=C=new Hn(t._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(W){k[W]=C}),F.priority&&(S=1)),!D||V)for(E in b)Qn[E]&&(F=xm(E,b,t,G,v,M))?F.priority&&(S=1):k[E]=C=Wh.call(t,v,E,"get",b[E],G,M,0,i.stringFilter);t._op&&t._op[A]&&t.kill(v,t._op[A]),T&&t._pt&&(_r=t,Ne.killTweensOf(v,k,t.globalTime(e)),B=!t.parent,_r=0),t._pt&&l&&(Wu[P.id]=1)}S&&Em(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,d&&e<=0&&x.render(gi,!0,!0)},By=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Zu=1,t.vars[e]="+=0",Xh(t,o),Zu=0,l?so(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ge(n)+xn(h.e)),h.b&&(h.b=u.s+xn(h.b))},zy=function(t,e){var n=t[0]?Zr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ea({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ky=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Tn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Va=function(t,e,n,i,s){return ke(t)?t.call(e,n,i,s):cn(t)&&~t.indexOf("random(")?oo(t):t},Mm=Vh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Sm={};Gn(Mm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Sm[r]=1});var qe=(function(r){kp(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:za(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Ne,T=(Tn(n)||Gp(n)?rr(n[0]):"length"in i)?[n]:vi(n),x,b,A,E,C,v,S,P;if(o._targets=T.length?Gh(T):so("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Yo(c)||Yo(u)){if(i=o.vars,x=o.timeline=new In({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:T}),x.kill(),x.parent=x._dp=Ki(o),x._start=0,d||Yo(c)||Yo(u)){if(E=T.length,S=d&&sm(d),Gi(d))for(C in d)~Mm.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(b=0;b<E;b++)A=Cl(i,Sm),A.stagger=0,p&&(A.yoyoEase=p),P&&ea(A,P),v=T[b],A.duration=+Va(c,Ki(o),b,v,T),A.delay=(+Va(u,Ki(o),b,v,T)||0)-o._delay,!d&&E===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(v,A,S?S(b,v,T):0),x._ease=ce.none;x.duration()?c=u=0:o.timeline=0}else if(_){za(ci(x.vars.defaults,{ease:"none"})),x._ease=jr(_.ease||i.ease||"none");var D=0,F,k,G;if(Tn(_))_.forEach(function(V){return x.to(T,V,">")}),x.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||ky(C,_[C],A,_.easeEach);for(C in A)for(F=A[C].sort(function(V,B){return V.t-B.t}),D=0,b=0;b<F.length;b++)k=F[b],G={ease:k.e,duration:(k.t-(b?F[b-1].t:0))/100*c},G[C]=k.v,x.to(T,G,D),D+=G.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return f===!0&&!Nh&&(_r=Ki(o),Ne.killTweensOf(T),_r=0),Li(M,Ki(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Ue(M._time)&&Vn(h)&&gy(Ki(o))&&M.data!=="nested")&&(o._tTime=-we,o.render(Math.max(0,-u)||0)),m&&em(Ki(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-we&&!u?l:i<we?0:i,d,f,_,g,m,p,M,T,x;if(!c)xy(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,T=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=Ue(h%g),h===l?(_=this._repeat,d=c):(m=Ue(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,d=c-d),m=na(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(T&&this._yEase&&_m(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Ue(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(nm(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!o&&h&&!s&&!m&&(ri(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Xu(this,i,s,a),ri(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Xu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(u&&!o)&&(h||o||p)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){lo||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Xh(this,c),u=this._ease(c/this._dur),By(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Xl(this,0),this.parent||Qp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_r&&_r.vars.overwrite!==!0)._first||Ca(this),this.parent&&a!==this.timeline.totalDuration()&&ia(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?vi(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&my(o,l))return s==="all"&&(this._pt=0),Ca(this);for(h=this._op=this._op||[],s!=="all"&&(cn(s)&&(g={},Gn(s,function(M){return g[M]=1}),s=g),s=zy(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Hl(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Ca(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ka(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ka(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ne.killTweensOf(i,s,a)},t})(co);ci(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(r){qe[r]=function(){var t=new In,e=qu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yh=function(t,e,n){return t[e]=n},ym=function(t,e,n){return t[e](n)},Vy=function(t,e,n,i){return t[e](i.fp,n)},Gy=function(t,e,n){return t.setAttribute(e,n)},qh=function(t,e){return ke(t[e])?ym:Fh(t[e])&&t.setAttribute?Gy:Yh},bm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Hy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Tm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},$h=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Wy=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Xy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Hl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Yy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Em=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Hn=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||bm,this.d=l||this,this.set=c||Yh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Yy,this.m=n,this.mt=s,this.tween=i},r})();Gn(Vh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return kh[r]=1});li.TweenMax=li.TweenLite=qe;li.TimelineLite=li.TimelineMax=In;Ne=new In({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=pm;var Qr=[],dl={},qy=[],Sd=0,$y=0,Uc=function(t){return(dl[t]||qy).map(function(e){return e()})},Ju=function(){var t=Date.now(),e=[];t-Sd>2&&(Uc("matchMediaInit"),Qr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ci.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Uc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sd=t,Uc("matchMedia"))},Am=(function(){function r(e,n){this.selector=n&&$u(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$y++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ke(n)&&(s=i,i=n,n=ke);var a=this,o=function(){var c=Le,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=$u(s)),Le=a,h=i.apply(a,arguments),ke(h)&&a._r.push(h),Le=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ke?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof In?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Qr.length;a--;)Qr[a].id===this.id&&Qr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),Ky=(function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Gi(n)||(n={matches:n});var a=new Am(0,s||this.scope),o=a.conditions={},l,c,u;Le&&!a.selector&&(a.selector=Le.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ci.matchMedia(n[c]),l&&(Qr.indexOf(a)<0&&Qr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ju):l.addEventListener("change",Ju)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Pl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return hm(i)})},timeline:function(t){return new In(t)},getTweensOf:function(t,e){return Ne.getTweensOf(t,e)},getProperty:function(t,e,n,i){cn(t)&&(t=vi(t)[0]);var s=Zr(t||{}).get,a=n?jp:Jp;return n==="native"&&(n=""),t&&(e?a((Qn[e]&&Qn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Qn[o]&&Qn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=vi(t),t.length>1){var i=t.map(function(u){return Xn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Qn[e],o=Zr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Bs._pt=0,h.init(t,n?u+n:u,Bs,0,[t]),h.render(1,h),Bs._pt&&$h(1,Bs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Xn.to(t,ci((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=jr(t.ease,ta.ease)),_d(ta,t||{})},config:function(t){return _d(oi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qn[o]&&!li[o]&&so(e+" effect requires "+o+" plugin.")}),Pc[e]=function(o,l,c){return n(vi(o),ci(l||{},s),c)},a&&(In.prototype[e]=function(o,l,c){return this.add(Pc[e](o,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=jr(e)},parseEase:function(t,e){return arguments.length?jr(t,e):ce},getById:function(t){return Ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new In(t),i,s;for(n.smoothChildTiming=Vn(t.smoothChildTiming),Ne.remove(n),n._dp=0,n._time=n._tTime=Ne._time,i=Ne._first;i;)s=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&Li(n,i,i._start-i._delay),i=s;return Li(Ne,n,0),n},context:function(t,e){return t?new Am(t,e):Le},matchMedia:function(t){return new Ky(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ju()},addEventListener:function(t,e){var n=dl[t]||(dl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=dl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:wy,wrapYoyo:Cy,distribute:sm,random:om,snap:am,normalize:Ay,getUnit:xn,clamp:yy,splitColor:fm,toArray:vi,selector:$u,mapRange:cm,pipe:Ty,unitize:Ey,interpolate:Ry,shuffle:rm},install:Yp,effects:Pc,ticker:ni,updateRoot:In.updateRoot,plugins:Qn,globalTimeline:Ne,core:{PropTween:Hn,globals:qp,Tween:qe,Timeline:In,Animation:co,getCache:Zr,_removeLinkedListItem:Hl,reverting:function(){return dn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return Nh=t}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pl[r]=qe[r]});ni.add(In.updateRoot);Bs=Pl.to({},{duration:0});var Zy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Jy=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Zy(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Nc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(cn(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Jy(o,s)}}}},Xn=Pl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Nc("roundProps",Ku),Nc("modifiers"),Nc("snap",am))||Pl;qe.version=In.version=Xn.version="3.14.2";Xp=1;Oh()&&ra();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;var yd,gr,Hs,Kh,$r,bd,Zh,jy=function(){return typeof window<"u"},sr={},kr=180/Math.PI,Ws=Math.PI/180,Ls=Math.atan2,Td=1e8,Jh=/([A-Z])/g,Qy=/(left|right|width|margin|padding|x)/i,tb=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ju=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},eb=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},nb=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ib=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},rb=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Cm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},sb=function(t,e,n){return t.style[e]=n},ab=function(t,e,n){return t.style.setProperty(e,n)},ob=function(t,e,n){return t._gsap[e]=n},lb=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},cb=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ub=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Fe="transform",Wn=Fe+"Origin",hb=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in sr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ni[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Zi(i,o)}):this.tfm[t]=a.x?a[t]:Zi(i,t),t===Wn&&(this.tfm.zOrigin=a.zOrigin);else return Ni.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Fe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,e,"")),t=Fe}(s||e)&&this.props.push(t,e,s[t])},Rm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},fb=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Jh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Zh(),(!s||!s.isStart)&&!n[Fe]&&(Rm(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pm=function(t,e){var n={target:t,props:[],revert:fb,save:hb};return t._gsap||Xn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Dm,Qu=function(t,e){var n=gr.createElementNS?gr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):gr.createElement(t);return n&&n.style?n:gr.createElement(t)},si=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Jh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,sa(e)||e,1)||""},Ed="O,Moz,ms,Ms,Webkit".split(","),sa=function(t,e,n){var i=e||$r,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ed[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ed[a]:"")+t},th=function(){jy()&&window.document&&(yd=window,gr=yd.document,Hs=gr.documentElement,$r=Qu("div")||{style:{}},Qu("div"),Fe=sa(Fe),Wn=Fe+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Dm=!!sa("perspective"),Zh=Xn.core.reverting,Kh=1)},Ad=function(t){var e=t.ownerSVGElement,n=Qu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},wd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Lm=function(t){var e,n;try{e=t.getBBox()}catch{e=Ad(t),n=1}return e&&(e.width||e.height)||n||(e=Ad(t)),e&&!e.width&&!e.x&&!e.y?{x:+wd(t,["x","cx","x1"])||0,y:+wd(t,["y","cy","y1"])||0,width:0,height:0}:e},Im=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Lm(t))},Ar=function(t,e){if(e){var n=t.style,i;e in sr&&e!==Wn&&(e=Fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Jh,"-$1").toLowerCase())):n.removeAttribute(e)}},vr=function(t,e,n,i,s,a){var o=new Hn(t._pt,e,n,0,1,a?Cm:wm);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Cd={deg:1,rad:1,turn:1},db={grid:1,flex:1},wr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=Qy.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||Cd[i]||Cd[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Im(t),(f||a==="%")&&(sr[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Ge(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===gr||!g.appendChild)&&(g=gr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ni.time&&!m.uncache)return Ge(s/m.width*h);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,_=t[u],M?t.style[e]=M:Ar(t,e)}else(f||a==="%")&&!db[si(g,"display")]&&(o.position=si(t,"position")),g===t&&(o.position="static"),g.appendChild($r),_=$r[u],g.removeChild($r),o.position="absolute";return l&&f&&(m=Zr(g),m.time=ni.time,m.width=g[u]),Ge(d?_*s/h:_&&s?h/_*s:0)},Zi=function(t,e,n,i){var s;return Kh||th(),e in Ni&&e!=="transform"&&(e=Ni[e],~e.indexOf(",")&&(e=e.split(",")[0])),sr[e]&&e!=="transform"?(s=ho(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ll(si(t,Wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dl[e]&&Dl[e](t,e,n)||si(t,e)||Kp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wr(t,e,s,n)+n:s},pb=function(t,e,n,i){if(!n||n==="none"){var s=sa(e,t,1),a=s&&si(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=si(t,"borderTopColor"))}var o=new Hn(this._pt,t.style,e,0,1,Tm),l=0,c=0,u,h,d,f,_,g,m,p,M,T,x,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=si(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=si(t,e)||i,g?t.style[e]=g:Ar(t,e)),u=[n,i],pm(u),n=u[0],i=u[1],d=n.match(Os)||[],b=i.match(Os)||[],b.length){for(;h=Os.exec(i);)m=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=Gs(f,m)+x),p=parseFloat(m),T=m.substr((p+"").length),l=Os.lastIndex-T.length,T||(T=T||oi.units[e]||x,l===i.length&&(i+=T,o.e+=T)),x!==T&&(f=wr(t,e,g,T)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Cm:wm;return Wp.test(i)&&(o.e=0),this._pt=o,o},Rd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},mb=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Rd[n]||n,e[1]=Rd[i]||i,e.join(" ")},_b=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],sr[o]&&(l=1,o=o==="transformOrigin"?Wn:Fe),Ar(n,o);l&&(Ar(n,Fe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ho(n,1),a.uncache=1,Rm(i)))}},Dl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Hn(t._pt,e,n,0,0,_b);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},uo=[1,0,0,1,0,0],Um={},Nm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Pd=function(t){var e=si(t,Fe);return Nm(e)?uo:e.substr(7).match(Hp).map(Ge)},jh=function(t,e){var n=t._gsap||Zr(t),i=t.style,s=Pd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?uo:s):(s===uo&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Hs.appendChild(t)),s=Pd(t),l?i.display=l:Ar(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eh=function(t,e,n,i,s,a){var o=t._gsap,l=s||jh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],T=e.split(" "),x=parseFloat(T[0])||0,b=parseFloat(T[1])||0,A,E,C,v;n?l!==uo&&(E=f*m-_*g)&&(C=x*(m/E)+b*(-g/E)+(g*M-m*p)/E,v=x*(-_/E)+b*(f/E)-(f*M-_*p)/E,x=C,b=v):(A=Lm(t),x=A.x+(~T[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(T[1]||T[0]).indexOf("%")?b/100*A.height:b)),i||i!==!1&&o.smooth?(p=x-c,M=b-u,o.xOffset=h+(p*f+M*g)-p,o.yOffset=d+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Wn]="0px 0px",a&&(vr(a,o,"xOrigin",c,x),vr(a,o,"yOrigin",u,b),vr(a,o,"xOffset",h,o.xOffset),vr(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},ho=function(t,e){var n=t._gsap||new vm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=si(t,Wn)||"0",u,h,d,f,_,g,m,p,M,T,x,b,A,E,C,v,S,P,D,F,k,G,V,B,W,et,L,nt,Lt,Ft,Bt,Xt;return u=h=d=g=m=p=M=T=x=0,f=_=1,n.svg=!!(t.getCTM&&Im(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),i.scale=i.rotate=i.translate="none"),E=jh(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),eh(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,A=n.yOrigin||0,E!==uo&&(P=E[0],D=E[1],F=E[2],k=E[3],u=G=E[4],h=V=E[5],E.length===6?(f=Math.sqrt(P*P+D*D),_=Math.sqrt(k*k+F*F),g=P||D?Ls(D,P)*kr:0,M=F||k?Ls(F,k)*kr+g:0,M&&(_*=Math.abs(Math.cos(M*Ws))),n.svg&&(u-=b-(b*P+A*F),h-=A-(b*D+A*k))):(Xt=E[6],Ft=E[7],L=E[8],nt=E[9],Lt=E[10],Bt=E[11],u=E[12],h=E[13],d=E[14],C=Ls(Xt,Lt),m=C*kr,C&&(v=Math.cos(-C),S=Math.sin(-C),B=G*v+L*S,W=V*v+nt*S,et=Xt*v+Lt*S,L=G*-S+L*v,nt=V*-S+nt*v,Lt=Xt*-S+Lt*v,Bt=Ft*-S+Bt*v,G=B,V=W,Xt=et),C=Ls(-F,Lt),p=C*kr,C&&(v=Math.cos(-C),S=Math.sin(-C),B=P*v-L*S,W=D*v-nt*S,et=F*v-Lt*S,Bt=k*S+Bt*v,P=B,D=W,F=et),C=Ls(D,P),g=C*kr,C&&(v=Math.cos(C),S=Math.sin(C),B=P*v+D*S,W=G*v+V*S,D=D*v-P*S,V=V*v-G*S,P=B,G=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ge(Math.sqrt(P*P+D*D+F*F)),_=Ge(Math.sqrt(V*V+Xt*Xt)),C=Ls(G,V),M=Math.abs(C)>2e-4?C*kr:0,x=Bt?1/(Bt<0?-Bt:Bt):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Nm(si(t,Fe)),B&&t.setAttribute("transform",B))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ge(f),n.scaleY=Ge(_),n.rotation=Ge(g)+o,n.rotationX=Ge(m)+o,n.rotationY=Ge(p)+o,n.skewX=M+o,n.skewY=T+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Wn]=Ll(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?vb:Dm?Fm:gb,n.uncache=0,n},Ll=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fc=function(t,e,n){var i=xn(e);return Ge(parseFloat(e)+parseFloat(wr(t,"x",n+"px",i)))+i},gb=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Fm(t,e)},Or="0deg",ba="0px",Br=") ",Fm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,T=n.zOrigin,x="",b=p==="auto"&&t&&t!==1||p===!0;if(T&&(h!==Or||u!==Or)){var A=parseFloat(u)*Ws,E=Math.sin(A),C=Math.cos(A),v;A=parseFloat(h)*Ws,v=Math.cos(A),a=Fc(M,a,E*v*-T),o=Fc(M,o,-Math.sin(A)*-T),l=Fc(M,l,C*v*-T+T)}m!==ba&&(x+="perspective("+m+Br),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||a!==ba||o!==ba||l!==ba)&&(x+=l!==ba||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Br),c!==Or&&(x+="rotate("+c+Br),u!==Or&&(x+="rotateY("+u+Br),h!==Or&&(x+="rotateX("+h+Br),(d!==Or||f!==Or)&&(x+="skew("+d+", "+f+Br),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Br),M.style[Fe]=x||"translate(0, 0)"},vb=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,T=parseFloat(a),x=parseFloat(o),b,A,E,C,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ws,c*=Ws,b=Math.cos(l)*h,A=Math.sin(l)*h,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(u*=Ws,v=Math.tan(c-u),v=Math.sqrt(1+v*v),E*=v,C*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),b*=v,A*=v)),b=Ge(b),A=Ge(A),E=Ge(E),C=Ge(C)):(b=h,C=d,A=E=0),(T&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(T=wr(f,"x",a,"px"),x=wr(f,"y",o,"px")),(_||g||m||p)&&(T=Ge(T+_-(_*b+g*E)+m),x=Ge(x+g-(_*A+g*C)+p)),(i||s)&&(v=f.getBBox(),T=Ge(T+i/100*v.width),x=Ge(x+s/100*v.height)),v="matrix("+b+","+A+","+E+","+C+","+T+","+x+")",f.setAttribute("transform",v),M&&(f.style[Fe]=v)},xb=function(t,e,n,i,s){var a=360,o=cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?kr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Td)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Td)%a-~~(c/a)*a)),t._pt=d=new Hn(t._pt,e,n,i,c,eb),d.e=u,d.u="deg",t._props.push(n),d},Dd=function(t,e){for(var n in e)t[n]=e[n];return t},Mb=function(t,e,n){var i=Dd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Fe]=e,o=ho(n,1),Ar(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],a[Fe]=e,o=ho(n,1),a[Fe]=c);for(l in sr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=xn(c),_=xn(u),h=f!==_?wr(n,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new Hn(t._pt,o,l,h,d-h,ju),t._pt.u=_||0,t._props.push(l));Dd(o,i)};Gn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Dl[t>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return Zi(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});var Om={name:"css",register:th,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,M,T,x,b,A,E,C,v;Kh||th(),this.styles=this.styles||Pm(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Qn[g]&&xm(g,e,n,i,t,s)))){if(f=typeof u,_=Dl[g],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=oo(u)),_)_(this,t,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",yr.lastIndex=0,yr.test(c)||(m=xn(c),p=xn(u),p?m!==p&&(c=wr(t,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],cn(c)&&~c.indexOf("random(")&&(c=oo(c)),xn(c+"")||c==="auto"||(c+=oi.units[g]||xn(Zi(t,g))||""),(c+"").charAt(1)==="="&&(c=Zi(t,g))):c=Zi(t,g),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Ni&&(g==="autoAlpha"&&(d===1&&Zi(t,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,o.visibility),vr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ni[g],~g.indexOf(",")&&(g=g.split(",")[0]))),T=g in sr,T){if(this.styles.save(g),v=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=si(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=u,u=si(t,"perspective"),S?t.style.perspective=S:Ar(t,"perspective")}h=parseFloat(u)}if(x||(b=t._gsap,b.renderTransform&&!e.parseTransform||ho(t,e.parseTransform),A=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Hn(this._pt,o,Fe,0,1,b.renderTransform,b,0,-1),x.dep=1),g==="scale")this._pt=new Hn(this._pt,b,"scaleY",b.scaleY,(M?Gs(b.scaleY,M+h):h)-b.scaleY||0,ju),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Wn,0,o[Wn]),u=mb(u),b.svg?eh(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&vr(this,b,"zOrigin",b.zOrigin,p),vr(this,o,g,Ll(c),Ll(u)));continue}else if(g==="svgOrigin"){eh(t,u,1,A,0,this);continue}else if(g in Um){xb(this,b,g,d,M?Gs(d,M+u):u);continue}else if(g==="smoothOrigin"){vr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){Mb(this,u,t);continue}}else g in o||(g=sa(g)||g);if(T||(h||h===0)&&(d||d===0)&&!tb.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=xn(u)||(g in oi.units?oi.units[g]:m),m!==p&&(d=wr(t,g,c,p)),this._pt=new Hn(this._pt,T?b:o,g,d,(M?Gs(d,M+h):h)-d,!T&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?rb:ju),this._pt.u=p||0,T&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=ib):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=nb);else if(g in o)pb.call(this,t,g,c,M?M+u:u);else if(g in t)this.add(t,g,c||t[g],M?M+u:u,i,s);else if(g!=="parseTransform"){zh(g,u);continue}T||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}E&&Em(this)},render:function(t,e){if(e.tween._time||!Zh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Zi,aliases:Ni,getSetter:function(t,e,n){var i=Ni[e];return i&&i.indexOf(",")<0&&(e=i),e in sr&&e!==Wn&&(t._gsap.x||Zi(t,"x"))?n&&bd===n?e==="scale"?lb:ob:(bd=n||{})&&(e==="scale"?cb:ub):t.style&&!Fh(t.style[e])?sb:~e.indexOf("-")?ab:qh(t,e)},core:{_removeProperty:Ar,_getMatrix:jh}};Xn.utils.checkPrefix=sa;Xn.core.getStyleSaver=Pm;(function(r,t,e,n){var i=Gn(r+","+t+","+e,function(s){sr[s]=1});Gn(t,function(s){oi.units[s]="deg",Um[s]=1}),Ni[i[13]]=r+","+t,Gn(n,function(s){var a=s.split(":");Ni[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){oi.units[r]="px"});Xn.registerPlugin(Om);var Qh=Xn.registerPlugin(Om)||Xn;Qh.core.Tween;function Sb(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function yb(r,t,e){return t&&Sb(r.prototype,t),r}var fn,pl,ii,xr,Mr,Xs,Bm,Vr,Ga,zm,Qi,bi,km,Vm=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},Gm=1,zs=[],oe=[],zi=[],Ha=Date.now,nh=function(t,e){return e},bb=function(){var t=Ga.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,zi),oe=n,zi=i,nh=function(a,o){return e[a](o)}},br=function(t,e){return~zi.indexOf(t)&&zi[zi.indexOf(t)+1][e]},Wa=function(t){return!!~zm.indexOf(t)},Cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},wn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},qo="scrollLeft",$o="scrollTop",ih=function(){return Qi&&Qi.isPressed||oe.cache++},Il=function(t,e){var n=function i(s){if(s||s===0){Gm&&(ii.history.scrollRestoration="manual");var a=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),t(s),i.cacheID=oe.cache,a&&nh("ss",s)}else(e||oe.cache!==i.cacheID||nh("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Un={s:qo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Il(function(r){return arguments.length?ii.scrollTo(r,Je.sc()):ii.pageXOffset||xr[qo]||Mr[qo]||Xs[qo]||0})},Je={s:$o,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Il(function(r){return arguments.length?ii.scrollTo(Un.sc(),r):ii.pageYOffset||xr[$o]||Mr[$o]||Xs[$o]||0})},Bn=function(t,e){return(e&&e._ctx&&e._ctx.selector||fn.utils.toArray)(t)[0]||(typeof t=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Tb=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Cr=function(t,e){var n=e.s,i=e.sc;Wa(t)&&(t=xr.scrollingElement||Mr);var s=oe.indexOf(t),a=i===Je.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+a]||Cn(t,"scroll",ih);var o=oe[s+a],l=o||(oe[s+a]=Il(br(t,n),!0)||(Wa(t)?i:Il(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=fn.getProperty(t,"scrollBehavior")==="smooth"),l},rh=function(t,e,n){var i=t,s=t,a=Ha(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=Ha();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(_){var g=o,m=s,p=Ha();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Ta=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ld=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Hm=function(){Ga=fn.core.globals().ScrollTrigger,Ga&&Ga.core&&bb()},Wm=function(t){return fn=t||Vm(),!pl&&fn&&typeof document<"u"&&document.body&&(ii=window,xr=document,Mr=xr.documentElement,Xs=xr.body,zm=[ii,xr,Mr,Xs],fn.utils.clamp,km=fn.core.context||function(){},Vr="onpointerenter"in Xs?"pointer":"mouse",Bm=He.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bi=He.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gm=0},500),Hm(),pl=1),pl};Un.op=Je;oe.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){pl||Wm(fn)||console.warn("Please gsap.registerPlugin(Observer)"),Ga||Hm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,T=n.onPress,x=n.onRelease,b=n.onRight,A=n.onLeft,E=n.onUp,C=n.onDown,v=n.onChangeX,S=n.onChangeY,P=n.onChange,D=n.onToggleX,F=n.onToggleY,k=n.onHover,G=n.onHoverEnd,V=n.onMove,B=n.ignoreCheck,W=n.isNormalizer,et=n.onGestureStart,L=n.onGestureEnd,nt=n.onWheel,Lt=n.onEnable,Ft=n.onDisable,Bt=n.onClick,Xt=n.scrollSpeed,K=n.capture,j=n.allowClicks,ht=n.lockAxis,Pt=n.onLockAxis;this.target=o=Bn(o)||Mr,this.vars=n,f&&(f=fn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,Xt=Xt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(Xs).lineHeight)||22);var at,bt,qt,pt,It,Jt,Ot,X=this,U=0,me=0,ee=n.passive||!u&&n.passive!==!1,Ht=Cr(o,Un),Tt=Cr(o,Je),R=Ht(),y=Tt(),O=~a.indexOf("touch")&&!~a.indexOf("pointer")&&bi[0]==="pointerdown",Z=Wa(o),J=o.ownerDocument||xr,$=[0,0,0],yt=[0,0,0],st=0,wt=function(){return st=Ha()},At=function(Dt,jt){return(X.event=Dt)&&f&&Tb(Dt.target,f)||jt&&O&&Dt.pointerType!=="touch"||B&&B(Dt,jt)},rt=function(){X._vx.reset(),X._vy.reset(),bt.pause(),h&&h(X)},ot=function(){var Dt=X.deltaX=Ld($),jt=X.deltaY=Ld(yt),_t=Math.abs(Dt)>=i,$t=Math.abs(jt)>=i;P&&(_t||$t)&&P(X,Dt,jt,$,yt),_t&&(b&&X.deltaX>0&&b(X),A&&X.deltaX<0&&A(X),v&&v(X),D&&X.deltaX<0!=U<0&&D(X),U=X.deltaX,$[0]=$[1]=$[2]=0),$t&&(C&&X.deltaY>0&&C(X),E&&X.deltaY<0&&E(X),S&&S(X),F&&X.deltaY<0!=me<0&&F(X),me=X.deltaY,yt[0]=yt[1]=yt[2]=0),(pt||qt)&&(V&&V(X),qt&&(m&&qt===1&&m(X),M&&M(X),qt=0),pt=!1),Jt&&!(Jt=!1)&&Pt&&Pt(X),It&&(nt(X),It=!1),at=0},Et=function(Dt,jt,_t){$[_t]+=Dt,yt[_t]+=jt,X._vx.update(Dt),X._vy.update(jt),c?at||(at=requestAnimationFrame(ot)):ot()},Ct=function(Dt,jt){ht&&!Ot&&(X.axis=Ot=Math.abs(Dt)>Math.abs(jt)?"x":"y",Jt=!0),Ot!=="y"&&($[2]+=Dt,X._vx.update(Dt,!0)),Ot!=="x"&&(yt[2]+=jt,X._vy.update(jt,!0)),c?at||(at=requestAnimationFrame(ot)):ot()},lt=function(Dt){if(!At(Dt,1)){Dt=Ta(Dt,u);var jt=Dt.clientX,_t=Dt.clientY,$t=jt-X.x,Nt=_t-X.y,Zt=X.isDragging;X.x=jt,X.y=_t,(Zt||($t||Nt)&&(Math.abs(X.startX-jt)>=s||Math.abs(X.startY-_t)>=s))&&(qt||(qt=Zt?2:1),Zt||(X.isDragging=!0),Ct($t,Nt))}},Yt=X.onPress=function(xt){At(xt,1)||xt&&xt.button||(X.axis=Ot=null,bt.pause(),X.isPressed=!0,xt=Ta(xt),U=me=0,X.startX=X.x=xt.clientX,X.startY=X.y=xt.clientY,X._vx.reset(),X._vy.reset(),Cn(W?o:J,bi[1],lt,ee,!0),X.deltaX=X.deltaY=0,T&&T(X))},I=X.onRelease=function(xt){if(!At(xt,1)){wn(W?o:J,bi[1],lt,!0);var Dt=!isNaN(X.y-X.startY),jt=X.isDragging,_t=jt&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),$t=Ta(xt);!_t&&Dt&&(X._vx.reset(),X._vy.reset(),u&&j&&fn.delayedCall(.08,function(){if(Ha()-st>300&&!xt.defaultPrevented){if(xt.target.click)xt.target.click();else if(J.createEvent){var Nt=J.createEvent("MouseEvents");Nt.initMouseEvent("click",!0,!0,ii,1,$t.screenX,$t.screenY,$t.clientX,$t.clientY,!1,!1,!1,!1,0,null),xt.target.dispatchEvent(Nt)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,h&&jt&&!W&&bt.restart(!0),qt&&ot(),p&&jt&&p(X),x&&x(X,_t)}},ft=function(Dt){return Dt.touches&&Dt.touches.length>1&&(X.isGesturing=!0)&&et(Dt,X.isDragging)},it=function(){return(X.isGesturing=!1)||L(X)},dt=function(Dt){if(!At(Dt)){var jt=Ht(),_t=Tt();Et((jt-R)*Xt,(_t-y)*Xt,1),R=jt,y=_t,h&&bt.restart(!0)}},tt=function(Dt){if(!At(Dt)){Dt=Ta(Dt,u),nt&&(It=!0);var jt=(Dt.deltaMode===1?l:Dt.deltaMode===2?ii.innerHeight:1)*_;Et(Dt.deltaX*jt,Dt.deltaY*jt,0),h&&!W&&bt.restart(!0)}},Q=function(Dt){if(!At(Dt)){var jt=Dt.clientX,_t=Dt.clientY,$t=jt-X.x,Nt=_t-X.y;X.x=jt,X.y=_t,pt=!0,h&&bt.restart(!0),($t||Nt)&&Ct($t,Nt)}},ut=function(Dt){X.event=Dt,k(X)},zt=function(Dt){X.event=Dt,G(X)},fe=function(Dt){return At(Dt)||Ta(Dt,u)&&Bt(X)};bt=X._dc=fn.delayedCall(d||.25,rt).pause(),X.deltaX=X.deltaY=0,X._vx=rh(0,50,!0),X._vy=rh(0,50,!0),X.scrollX=Ht,X.scrollY=Tt,X.isDragging=X.isGesturing=X.isPressed=!1,km(this),X.enable=function(xt){return X.isEnabled||(Cn(Z?J:o,"scroll",ih),a.indexOf("scroll")>=0&&Cn(Z?J:o,"scroll",dt,ee,K),a.indexOf("wheel")>=0&&Cn(o,"wheel",tt,ee,K),(a.indexOf("touch")>=0&&Bm||a.indexOf("pointer")>=0)&&(Cn(o,bi[0],Yt,ee,K),Cn(J,bi[2],I),Cn(J,bi[3],I),j&&Cn(o,"click",wt,!0,!0),Bt&&Cn(o,"click",fe),et&&Cn(J,"gesturestart",ft),L&&Cn(J,"gestureend",it),k&&Cn(o,Vr+"enter",ut),G&&Cn(o,Vr+"leave",zt),V&&Cn(o,Vr+"move",Q)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=pt=qt=!1,X._vx.reset(),X._vy.reset(),R=Ht(),y=Tt(),xt&&xt.type&&Yt(xt),Lt&&Lt(X)),X},X.disable=function(){X.isEnabled&&(zs.filter(function(xt){return xt!==X&&Wa(xt.target)}).length||wn(Z?J:o,"scroll",ih),X.isPressed&&(X._vx.reset(),X._vy.reset(),wn(W?o:J,bi[1],lt,!0)),wn(Z?J:o,"scroll",dt,K),wn(o,"wheel",tt,K),wn(o,bi[0],Yt,K),wn(J,bi[2],I),wn(J,bi[3],I),wn(o,"click",wt,!0),wn(o,"click",fe),wn(J,"gesturestart",ft),wn(J,"gestureend",it),wn(o,Vr+"enter",ut),wn(o,Vr+"leave",zt),wn(o,Vr+"move",Q),X.isEnabled=X.isPressed=X.isDragging=!1,Ft&&Ft(X))},X.kill=X.revert=function(){X.disable();var xt=zs.indexOf(X);xt>=0&&zs.splice(xt,1),Qi===X&&(Qi=0)},zs.push(X),W&&Wa(o)&&(Qi=X),X.enable(g)},yb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.14.2";He.create=function(r){return new He(r)};He.register=Wm;He.getAll=function(){return zs.slice()};He.getById=function(r){return zs.filter(function(t){return t.vars.id===r})[0]};Vm()&&fn.registerPlugin(He);var Rt,Ns,ae,Re,ti,_e,tf,Ul,fo,Xa,Pa,Ko,gn,Yl,sh,Dn,Id,Ud,Fs,Xm,Oc,Ym,Pn,ah,qm,$m,dr,oh,ef,Ys,nf,Ya,lh,Bc,Zo=1,vn=Date.now,zc=vn(),xi=0,Da=0,Nd=function(t,e,n){var i=jn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Fd=function(t,e){return e&&(!jn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Eb=function r(){return Da&&requestAnimationFrame(r)},Od=function(){return Yl=1},Bd=function(){return Yl=0},Ri=function(t){return t},La=function(t){return Math.round(t*1e5)/1e5||0},Km=function(){return typeof window<"u"},Zm=function(){return Rt||Km()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},rs=function(t){return!!~tf.indexOf(t)},Jm=function(t){return(t==="Height"?nf:ae["inner"+t])||ti["client"+t]||_e["client"+t]},jm=function(t){return br(t,"getBoundingClientRect")||(rs(t)?function(){return xl.width=ae.innerWidth,xl.height=nf,xl}:function(){return ji(t)})},Ab=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=br(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Jm(s):t["client"+s])||0}},wb=function(t,e){return!e||~zi.indexOf(t)?jm(t):function(){return xl}},Fi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=br(t,n))?a()-jm(t)()[s]:rs(t)?(ti[n]||_e[n])-Jm(i):t[n]-t["offset"+i])},Jo=function(t,e){for(var n=0;n<Fs.length;n+=3)(!e||~e.indexOf(Fs[n+1]))&&t(Fs[n],Fs[n+1],Fs[n+2])},jn=function(t){return typeof t=="string"},Mn=function(t){return typeof t=="function"},Ia=function(t){return typeof t=="number"},Gr=function(t){return typeof t=="object"},Ea=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},kc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Is=Math.abs,Qm="left",t_="top",rf="right",sf="bottom",ts="width",es="height",qa="Right",$a="Left",Ka="Top",Za="Bottom",Ye="padding",pi="margin",aa="Width",af="Height",Ze="px",mi=function(t){return ae.getComputedStyle(t)},Cb=function(t){var e=mi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},zd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ji=function(t,e){var n=e&&mi(t)[sh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Nl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},e_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Rb=function(t){return function(e){return Rt.utils.snap(e_(t),e)}},of=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},Pb=function(t){return function(e,n){return of(e_(t))(e,n.direction)}},jo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},on=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},an=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Qo=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},kd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},tl={toggleActions:"play",anticipatePin:0},Fl={top:0,left:0,center:.5,bottom:1,right:1},ml=function(t,e){if(jn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Fl?Fl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},el=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Re.createElement("div"),g=rs(n)||br(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?_e:n,M=t.indexOf("start")!==-1,T=M?c:u,x="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Je?rf:sf)+":"+(a+parseFloat(d))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],_l(_,0,i,M),_},_l=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+aa]=1,s["border"+o+aa]=0,s[n.p]=e+"px",Rt.set(t,s)},ne=[],ch={},po,Vd=function(){return vn()-xi>34&&(po||(po=requestAnimationFrame(nr)))},Us=function(){(!Pn||!Pn.isPressed||Pn.startX>_e.clientWidth)&&(oe.cache++,Pn?po||(po=requestAnimationFrame(nr)):nr(),xi||as("scrollStart"),xi=vn())},Vc=function(){$m=ae.innerWidth,qm=ae.innerHeight},Ua=function(t){oe.cache++,(t===!0||!gn&&!Ym&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!ah||$m!==ae.innerWidth||Math.abs(ae.innerHeight-qm)>ae.innerHeight*.25))&&Ul.restart(!0)},ss={},Db=[],n_=function r(){return an(le,"scrollEnd",r)||Kr(!0)},as=function(t){return ss[t]&&ss[t].map(function(e){return e()})||Db},Jn=[],i_=function(t){for(var e=0;e<Jn.length;e+=5)(!t||Jn[e+4]&&Jn[e+4].query===t)&&(Jn[e].style.cssText=Jn[e+1],Jn[e].getBBox&&Jn[e].setAttribute("transform",Jn[e+2]||""),Jn[e+3].uncache=1)},r_=function(){return oe.forEach(function(t){return Mn(t)&&++t.cacheID&&(t.rec=t())})},lf=function(t,e){var n;for(Dn=0;Dn<ne.length;Dn++)n=ne[Dn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ya=!0,e&&i_(e),e||as("revert")},s_=function(t,e){oe.cache++,(e||!Ln)&&oe.forEach(function(n){return Mn(n)&&n.cacheID++&&(n.rec=0)}),jn(t)&&(ae.history.scrollRestoration=ef=t)},Ln,ns=0,Gd,Lb=function(){if(Gd!==ns){var t=Gd=ns;requestAnimationFrame(function(){return t===ns&&Kr(!0)})}},a_=function(){_e.appendChild(Ys),nf=!Pn&&Ys.offsetHeight||ae.innerHeight,_e.removeChild(Ys)},Hd=function(t){return fo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Kr=function(t,e){if(ti=Re.documentElement,_e=Re.body,tf=[ae,Re,ti,_e],xi&&!t&&!Ya){on(le,"scrollEnd",n_);return}a_(),Ln=le.isRefreshing=!0,Ya||r_();var n=as("refreshInit");Xm&&le.sort(),e||lf(),oe.forEach(function(i){Mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Ya=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),lh=1,Hd(!0),ne.forEach(function(i){var s=Fi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Hd(!1),lh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),s_(ef,1),Ul.pause(),ns++,Ln=2,nr(2),ne.forEach(function(i){return Mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ln=le.isRefreshing=!1,as("refresh")},uh=0,gl=1,Ja,nr=function(t){if(t===2||!Ln&&!Ya){le.isUpdating=!0,Ja&&Ja.update(0);var e=ne.length,n=vn(),i=n-zc>=50,s=e&&ne[0].scroll();if(gl=uh>s?-1:1,Ln||(uh=s),i&&(xi&&!Yl&&n-xi>200&&(xi=0,as("scrollEnd")),Pa=zc,zc=n),gl<0){for(Dn=e;Dn-- >0;)ne[Dn]&&ne[Dn].update(0,i);gl=1}else for(Dn=0;Dn<e;Dn++)ne[Dn]&&ne[Dn].update(0,i);le.isUpdating=!1}po=0},hh=[Qm,t_,sf,rf,pi+Za,pi+qa,pi+Ka,pi+$a,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vl=hh.concat([ts,es,"boxSizing","max"+aa,"max"+af,"position",pi,Ye,Ye+Ka,Ye+qa,Ye+Za,Ye+$a]),Ib=function(t,e,n){qs(n);var i=t._gsap;if(i.spacerIsNative)qs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Gc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=hh.length,a=e.style,o=t.style,l;s--;)l=hh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[sf]=o[rf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ts]=Nl(t,Un)+Ze,a[es]=Nl(t,Je)+Ze,a[Ye]=o[pi]=o[t_]=o[Qm]="0",qs(i),o[ts]=o["max"+aa]=n[ts],o[es]=o["max"+af]=n[es],o[Ye]=n[Ye],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ub=/([A-Z])/g,qs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Ub,"-$1").toLowerCase())}},nl=function(t){for(var e=vl.length,n=t.style,i=[],s=0;s<e;s++)i.push(vl[s],n[vl[s]]);return i.t=t,i},Nb=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},xl={left:0,top:0},Wd=function(t,e,n,i,s,a,o,l,c,u,h,d,f,_){Mn(t)&&(t=t(l)),jn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?ml("0"+t.substr(3),n):0));var g=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Ia(t))f&&(t=Rt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),o&&_l(o,n,i,!0);else{Mn(e)&&(e=e(l));var T=(t||"0").split(" "),x,b,A,E;M=Bn(e,l)||_e,x=ji(M)||{},(!x||!x.left&&!x.top)&&mi(M).display==="none"&&(E=M.style.display,M.style.display="block",x=ji(M),E?M.style.display=E:M.style.removeProperty("display")),b=ml(T[0],x[i.d]),A=ml(T[1]||"0",n),t=x[i.p]-c[i.p]-u+b+s-A,o&&_l(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var C=t+n,v=a._isStart;m="scroll"+i.d2,_l(a,C,i,v&&C>20||!v&&(h?Math.max(_e[m],ti[m]):a.parentNode[m])<=C+1),h&&(c=ji(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ze))}return f&&M&&(m=ji(M),f.seek(d),p=ji(M),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},Fb=/(webkit|moz|length|cssText|inset)/i,Xd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===_e){t._stOrig=s.cssText,o=mi(t);for(a in o)!+a&&!Fb.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},o_=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},il=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Yd=function(t,e){var n=Cr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,_={};c=c||n();var g=o_(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){oe.cache++,a.tween&&nr()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=Rt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(t,"wheel",n.wheelHandler),le.isTouch&&on(t,"touchmove",n.wheelHandler),s},le=(function(){function r(e,n){Ns||r.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),oh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Da){this.update=this.refresh=this.kill=Ri;return}n=zd(jn(n)||Ia(n)||n.nodeType?{trigger:n}:n,tl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,T=s.once,x=s.snap,b=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,v=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:Je,P=!h&&h!==0,D=Bn(n.scroller||ae),F=Rt.core.getCache(D),k=rs(D),G=("pinType"in n?n.pinType:br(D,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=P&&n.toggleActions.split(" "),W="markers"in n?n.markers:tl.markers,et=k?0:parseFloat(mi(D)["border"+S.p2+aa])||0,L=this,nt=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Lt=Ab(D,k,S),Ft=wb(D,k),Bt=0,Xt=0,K=0,j=Cr(D,S),ht,Pt,at,bt,qt,pt,It,Jt,Ot,X,U,me,ee,Ht,Tt,R,y,O,Z,J,$,yt,st,wt,At,rt,ot,Et,Ct,lt,Yt,I,ft,it,dt,tt,Q,ut,zt;if(L._startClamp=L._endClamp=!1,L._dir=S,m*=45,L.scroller=D,L.scroll=E?E.time.bind(E):j,bt=j(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xm=1,n.refreshPriority===-9999&&(Ja=L)),F.tweenScroll=F.tweenScroll||{top:Yd(D,Je),left:Yd(D,Un)},L.tweenTo=ht=F.tweenScroll[S.p],L.scrubDuration=function(_t){ft=Ia(_t)&&_t,ft?I?I.duration(_t):I=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ft,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),lt=0,l||(l=i.vars.id)),x&&((!Gr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in _e.style&&Rt.set(k?[_e,ti]:D,{scrollBehavior:"auto"}),oe.forEach(function(_t){return Mn(_t)&&_t.target===(k?Re.scrollingElement||ti:D)&&(_t.smooth=!1)}),at=Mn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Rb(i):x.snapTo==="labelsDirectional"?Pb(i):x.directional!==!1?function(_t,$t){return of(x.snapTo)(_t,vn()-Xt<500?0:$t.direction)}:Rt.utils.snap(x.snapTo),it=x.duration||{min:.1,max:2},it=Gr(it)?Xa(it.min,it.max):Xa(it,it),dt=Rt.delayedCall(x.delay||ft/2||.1,function(){var _t=j(),$t=vn()-Xt<500,Nt=ht.tween;if(($t||Math.abs(L.getVelocity())<10)&&!Nt&&!Yl&&Bt!==_t){var Zt=(_t-pt)/Ht,Ve=i&&!P?i.totalProgress():Zt,re=$t?0:(Ve-Yt)/(vn()-Pa)*1e3||0,ge=Rt.utils.clamp(-Zt,1-Zt,Is(re/2)*re/.185),We=Zt+(x.inertia===!1?0:ge),De,Te,de=x,Nn=de.onStart,ye=de.onInterrupt,pn=de.onComplete;if(De=at(We,L),Ia(De)||(De=We),Te=Math.max(0,Math.round(pt+De*Ht)),_t<=It&&_t>=pt&&Te!==_t){if(Nt&&!Nt._initted&&Nt.data<=Is(Te-_t))return;x.inertia===!1&&(ge=De-Zt),ht(Te,{duration:it(Is(Math.max(Is(We-Ve),Is(De-Ve))*.185/re/.05||0)),ease:x.ease||"power3",data:Is(Te-_t),onInterrupt:function(){return dt.restart(!0)&&ye&&ye(L)},onComplete:function(){L.update(),Bt=j(),i&&!P&&(I?I.resetTo("totalProgress",De,i._tTime/i._tDur):i.progress(De)),lt=Yt=i&&!P?i.totalProgress():L.progress,M&&M(L),pn&&pn(L)}},_t,ge*Ht,Te-_t-ge*Ht),Nn&&Nn(L,ht.tween)}}else L.isActive&&Bt!==_t&&dt.restart(!0)}).pause()),l&&(ch[l]=L),d=L.trigger=Bn(d||f!==!0&&f),zt=d&&d._gsap&&d._gsap.stRevert,zt&&(zt=zt(L)),f=f===!0?d:Bn(f),jn(o)&&(o={targets:d,className:o}),f&&(_===!1||_===pi||(_=!_&&f.parentNode&&f.parentNode.style&&mi(f.parentNode).display==="flex"?!1:Ye),L.pin=f,Pt=Rt.core.getCache(f),Pt.spacer?Tt=Pt.pinState:(A&&(A=Bn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pt.spacerIsNative=!!A,A&&(Pt.spacerState=nl(A))),Pt.spacer=O=A||Re.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),Pt.pinState=Tt=nl(f)),n.force3D!==!1&&Rt.set(f,{force3D:!0}),L.spacer=O=Pt.spacer,Ct=mi(f),wt=Ct[_+S.os2],J=Rt.getProperty(f),$=Rt.quickSetter(f,S.a,Ze),Gc(f,O,Ct),y=nl(f)),W){me=Gr(W)?zd(W,kd):kd,X=el("scroller-start",l,D,S,me,0),U=el("scroller-end",l,D,S,me,0,X),Z=X["offset"+S.op.d2];var fe=Bn(br(D,"content")||D);Jt=this.markerStart=el("start",l,fe,S,me,Z,0,E),Ot=this.markerEnd=el("end",l,fe,S,me,Z,0,E),E&&(ut=Rt.quickSetter([Jt,Ot],S.a,Ze)),!G&&!(zi.length&&br(D,"fixedMarkers")===!0)&&(Cb(k?_e:D),Rt.set([X,U],{force3D:!0}),rt=Rt.quickSetter(X,S.a,Ze),Et=Rt.quickSetter(U,S.a,Ze))}if(E){var xt=E.vars.onUpdate,Dt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),xt&&xt.apply(E,Dt||[])})}if(L.previous=function(){return ne[ne.indexOf(L)-1]},L.next=function(){return ne[ne.indexOf(L)+1]},L.revert=function(_t,$t){if(!$t)return L.kill(!0);var Nt=_t!==!1||!L.enabled,Zt=gn;Nt!==L.isReverted&&(Nt&&(tt=Math.max(j(),L.scroll.rec||0),K=L.progress,Q=i&&i.progress()),Jt&&[Jt,Ot,X,U].forEach(function(Ve){return Ve.style.display=Nt?"none":"block"}),Nt&&(gn=L,L.update(Nt)),f&&(!b||!L.isActive)&&(Nt?Ib(f,O,Tt):Gc(f,O,mi(f),At)),Nt||L.update(Nt),gn=Zt,L.isReverted=Nt)},L.refresh=function(_t,$t,Nt,Zt){if(!((gn||!L.enabled)&&!$t)){if(f&&_t&&xi){on(r,"scrollEnd",n_);return}!Ln&&nt&&nt(L),gn=L,ht.tween&&!Nt&&(ht.tween.kill(),ht.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(St){return St.vars.immediateRender&&St.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ve=Lt(),re=Ft(),ge=E?E.duration():Fi(D,S),We=Ht<=.01||!Ht,De=0,Te=Zt||0,de=Gr(Nt)?Nt.end:n.end,Nn=n.endTrigger||d,ye=Gr(Nt)?Nt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),pn=L.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,L),Yn=d&&Math.max(0,ne.indexOf(L))||0,$e=Yn,Ke,nn,Hi,us,rn,w,z,q,Y,H,ct,Mt,mt;for(W&&Gr(Nt)&&(Mt=Rt.getProperty(X,S.p),mt=Rt.getProperty(U,S.p));$e-- >0;)w=ne[$e],w.end||w.refresh(0,1)||(gn=L),z=w.pin,z&&(z===d||z===f||z===pn)&&!w.isReverted&&(H||(H=[]),H.unshift(w),w.revert(!0,!0)),w!==ne[$e]&&(Yn--,$e--);for(Mn(ye)&&(ye=ye(L)),ye=Nd(ye,"start",L),pt=Wd(ye,d,Ve,S,j(),Jt,X,L,re,et,G,ge,E,L._startClamp&&"_startClamp")||(f?-.001:0),Mn(de)&&(de=de(L)),jn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(jn(ye)?ye.split(" ")[0]:"")+de:(De=ml(de.substr(2),Ve),de=jn(ye)?ye:(E?Rt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,pt):pt)+De,Nn=d)),de=Nd(de,"end",L),It=Math.max(pt,Wd(de||(Nn?"100% 0":ge),Nn,Ve,S,j()+De,Ot,U,L,re,et,G,ge,E,L._endClamp&&"_endClamp"))||-.001,De=0,$e=Yn;$e--;)w=ne[$e]||{},z=w.pin,z&&w.start-w._pinPush<=pt&&!E&&w.end>0&&(Ke=w.end-(L._startClamp?Math.max(0,w.start):w.start),(z===d&&w.start-w._pinPush<pt||z===pn)&&isNaN(ye)&&(De+=Ke*(1-w.progress)),z===f&&(Te+=Ke));if(pt+=De,It+=De,L._startClamp&&(L._startClamp+=De),L._endClamp&&!Ln&&(L._endClamp=It||-.001,It=Math.min(It,Fi(D,S))),Ht=It-pt||(pt-=.01)&&.001,We&&(K=Rt.utils.clamp(0,1,Rt.utils.normalize(pt,It,tt))),L._pinPush=Te,Jt&&De&&(Ke={},Ke[S.a]="+="+De,pn&&(Ke[S.p]="-="+j()),Rt.set([Jt,Ot],Ke)),f&&!(lh&&L.end>=Fi(D,S)))Ke=mi(f),us=S===Je,Hi=j(),yt=parseFloat(J(S.a))+Te,!ge&&It>1&&(ct=(k?Re.scrollingElement||ti:D).style,ct={style:ct,value:ct["overflow"+S.a.toUpperCase()]},k&&mi(_e)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+S.a.toUpperCase()]="scroll")),Gc(f,O,Ke),y=nl(f),nn=ji(f,!0),q=G&&Cr(D,us?Un:Je)(),_?(At=[_+S.os2,Ht+Te+Ze],At.t=O,$e=_===Ye?Nl(f,S)+Ht+Te:0,$e&&(At.push(S.d,$e+Ze),O.style.flexBasis!=="auto"&&(O.style.flexBasis=$e+Ze)),qs(At),pn&&ne.forEach(function(St){St.pin===pn&&St.vars.pinSpacing!==!1&&(St._subPinOffset=!0)}),G&&j(tt)):($e=Nl(f,S),$e&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=$e+Ze)),G&&(rn={top:nn.top+(us?Hi-pt:q)+Ze,left:nn.left+(us?q:Hi-pt)+Ze,boxSizing:"border-box",position:"fixed"},rn[ts]=rn["max"+aa]=Math.ceil(nn.width)+Ze,rn[es]=rn["max"+af]=Math.ceil(nn.height)+Ze,rn[pi]=rn[pi+Ka]=rn[pi+qa]=rn[pi+Za]=rn[pi+$a]="0",rn[Ye]=Ke[Ye],rn[Ye+Ka]=Ke[Ye+Ka],rn[Ye+qa]=Ke[Ye+qa],rn[Ye+Za]=Ke[Ye+Za],rn[Ye+$a]=Ke[Ye+$a],R=Nb(Tt,rn,b),Ln&&j(0)),i?(Y=i._initted,Oc(1),i.render(i.duration(),!0,!0),st=J(S.a)-yt+Ht+Te,ot=Math.abs(Ht-st)>1,G&&ot&&R.splice(R.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Oc(0)):st=Ht,ct&&(ct.value?ct.style["overflow"+S.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+S.a));else if(d&&j()&&!E)for(nn=d.parentNode;nn&&nn!==_e;)nn._pinOffset&&(pt-=nn._pinOffset,It-=nn._pinOffset),nn=nn.parentNode;H&&H.forEach(function(St){return St.revert(!1,!0)}),L.start=pt,L.end=It,bt=qt=Ln?tt:j(),!E&&!Ln&&(bt<tt&&j(tt),L.scroll.rec=0),L.revert(!1,!0),Xt=vn(),dt&&(Bt=-1,dt.restart(!0)),gn=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(We||K!==L.progress||E||g||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(E&&pt<-.001&&!K?Rt.utils.normalize(pt,It,0):K,!0),L.progress=We||(bt-pt)/Ht===K?0:K),f&&_&&(O._pinOffset=Math.round(L.progress*st)),I&&I.invalidate(),isNaN(Mt)||(Mt-=Rt.getProperty(X,S.p),mt-=Rt.getProperty(U,S.p),il(X,S,Mt),il(Jt,S,Mt-(Zt||0)),il(U,S,mt),il(Ot,S,mt-(Zt||0))),We&&!Ln&&L.update(),u&&!Ln&&!ee&&(ee=!0,u(L),ee=!1)}},L.getVelocity=function(){return(j()-qt)/(vn()-Pa)*1e3||0},L.endAnimation=function(){Ea(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||Ea(i,L.direction<0,1):Ea(i,i.reversed()))},L.labelToScroll=function(_t){return i&&i.labels&&(pt||L.refresh()||pt)+i.labels[_t]/i.duration()*Ht||0},L.getTrailing=function(_t){var $t=ne.indexOf(L),Nt=L.direction>0?ne.slice(0,$t).reverse():ne.slice($t+1);return(jn(_t)?Nt.filter(function(Zt){return Zt.vars.preventOverlaps===_t}):Nt).filter(function(Zt){return L.direction>0?Zt.end<=pt:Zt.start>=It})},L.update=function(_t,$t,Nt){if(!(E&&!Nt&&!_t)){var Zt=Ln===!0?tt:L.scroll(),Ve=_t?0:(Zt-pt)/Ht,re=Ve<0?0:Ve>1?1:Ve||0,ge=L.progress,We,De,Te,de,Nn,ye,pn,Yn;if($t&&(qt=bt,bt=E?j():Zt,x&&(Yt=lt,lt=i&&!P?i.totalProgress():re)),m&&f&&!gn&&!Zo&&xi&&(!re&&pt<Zt+(Zt-qt)/(vn()-Pa)*m?re=1e-4:re===1&&It>Zt+(Zt-qt)/(vn()-Pa)*m&&(re=.9999)),re!==ge&&L.enabled){if(We=L.isActive=!!re&&re<1,De=!!ge&&ge<1,ye=We!==De,Nn=ye||!!re!=!!ge,L.direction=re>ge?1:-1,L.progress=re,Nn&&!gn&&(Te=re&&!ge?0:re===1?1:ge===1?2:3,P&&(de=!ye&&B[Te+1]!=="none"&&B[Te+1]||B[Te],Yn=i&&(de==="complete"||de==="reset"||de in i))),v&&(ye||Yn)&&(Yn||h||!i)&&(Mn(v)?v(L):L.getTrailing(v).forEach(function(Hi){return Hi.endAnimation()})),P||(I&&!gn&&!Zo?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",re,i._tTime/i._tDur):(I.vars.totalProgress=re,I.invalidate().restart())):i&&i.totalProgress(re,!!(gn&&(Xt||_t)))),f){if(_t&&_&&(O.style[_+S.os2]=wt),!G)$(La(yt+st*re));else if(Nn){if(pn=!_t&&re>ge&&It+1>Zt&&Zt+1>=Fi(D,S),b)if(!_t&&(We||pn)){var $e=ji(f,!0),Ke=Zt-pt;Xd(f,_e,$e.top+(S===Je?Ke:0)+Ze,$e.left+(S===Je?0:Ke)+Ze)}else Xd(f,O);qs(We||pn?R:y),ot&&re<1&&We||$(yt+(re===1&&!pn?st:0))}}x&&!ht.tween&&!gn&&!Zo&&dt.restart(!0),o&&(ye||T&&re&&(re<1||!Bc))&&fo(o.targets).forEach(function(Hi){return Hi.classList[We||T?"add":"remove"](o.className)}),a&&!P&&!_t&&a(L),Nn&&!gn?(P&&(Yn&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),a&&a(L)),(ye||!Bc)&&(c&&ye&&kc(L,c),V[Te]&&kc(L,V[Te]),T&&(re===1?L.kill(!1,1):V[Te]=0),ye||(Te=re===1?1:3,V[Te]&&kc(L,V[Te]))),C&&!We&&Math.abs(L.getVelocity())>(Ia(C)?C:2500)&&(Ea(L.callbackAnimation),I?I.progress(1):Ea(i,de==="reverse"?1:!re,1))):P&&a&&!gn&&a(L)}if(Et){var nn=E?Zt/E.duration()*(E._caScrollDist||0):Zt;rt(nn+(X._isFlipped?1:0)),Et(nn)}ut&&ut(-Zt/E.duration()*(E._caScrollDist||0))}},L.enable=function(_t,$t){L.enabled||(L.enabled=!0,on(D,"resize",Ua),k||on(D,"scroll",Us),nt&&on(r,"refreshInit",nt),_t!==!1&&(L.progress=K=0,bt=qt=Bt=j()),$t!==!1&&L.refresh())},L.getTween=function(_t){return _t&&ht?ht.tween:I},L.setPositions=function(_t,$t,Nt,Zt){if(E){var Ve=E.scrollTrigger,re=E.duration(),ge=Ve.end-Ve.start;_t=Ve.start+ge*_t/re,$t=Ve.start+ge*$t/re}L.refresh(!1,!1,{start:Fd(_t,Nt&&!!L._startClamp),end:Fd($t,Nt&&!!L._endClamp)},Zt),L.update()},L.adjustPinSpacing=function(_t){if(At&&_t){var $t=At.indexOf(S.d)+1;At[$t]=parseFloat(At[$t])+_t+Ze,At[1]=parseFloat(At[1])+_t+Ze,qs(At)}},L.disable=function(_t,$t){if(_t!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,$t||I&&I.pause(),tt=0,Pt&&(Pt.uncache=1),nt&&an(r,"refreshInit",nt),dt&&(dt.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!k)){for(var Nt=ne.length;Nt--;)if(ne[Nt].scroller===D&&ne[Nt]!==L)return;an(D,"resize",Ua),k||an(D,"scroll",Us)}},L.kill=function(_t,$t){L.disable(_t,$t),I&&!$t&&I.kill(),l&&delete ch[l];var Nt=ne.indexOf(L);Nt>=0&&ne.splice(Nt,1),Nt===Dn&&gl>0&&Dn--,Nt=0,ne.forEach(function(Zt){return Zt.scroller===L.scroller&&(Nt=1)}),Nt||Ln||(L.scroll.rec=0),i&&(i.scrollTrigger=null,_t&&i.revert({kill:!1}),$t||i.kill()),Jt&&[Jt,Ot,X,U].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),Ja===L&&(Ja=0),f&&(Pt&&(Pt.uncache=1),Nt=0,ne.forEach(function(Zt){return Zt.pin===f&&Nt++}),Nt||(Pt.spacer=0)),n.onKill&&n.onKill(L)},ne.push(L),L.enable(!1,!1),zt&&zt(L),i&&i.add&&!Ht){var jt=L.update;L.update=function(){L.update=jt,oe.cache++,pt||It||L.refresh()},Rt.delayedCall(.01,L.update),Ht=.01,pt=It=0}else L.refresh();f&&Lb()},r.register=function(n){return Ns||(Rt=n||Zm(),Km()&&window.document&&r.enable(),Ns=Da),Ns},r.defaults=function(n){if(n)for(var i in n)tl[i]=n[i];return tl},r.disable=function(n,i){Da=0,ne.forEach(function(a){return a[i?"kill":"disable"](n)}),an(ae,"wheel",Us),an(Re,"scroll",Us),clearInterval(Ko),an(Re,"touchcancel",Ri),an(_e,"touchstart",Ri),jo(an,Re,"pointerdown,touchstart,mousedown",Od),jo(an,Re,"pointerup,touchend,mouseup",Bd),Ul.kill(),Jo(an);for(var s=0;s<oe.length;s+=3)Qo(an,oe[s],oe[s+1]),Qo(an,oe[s],oe[s+2])},r.enable=function(){if(ae=window,Re=document,ti=Re.documentElement,_e=Re.body,Rt&&(fo=Rt.utils.toArray,Xa=Rt.utils.clamp,oh=Rt.core.context||Ri,Oc=Rt.core.suppressOverwrites||Ri,ef=ae.history.scrollRestoration||"auto",uh=ae.pageYOffset||0,Rt.core.globals("ScrollTrigger",r),_e)){Da=1,Ys=document.createElement("div"),Ys.style.height="100vh",Ys.style.position="absolute",a_(),Eb(),He.register(Rt),r.isTouch=He.isTouch,dr=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ah=He.isTouch===1,on(ae,"wheel",Us),tf=[ae,Re,ti,_e],Rt.matchMedia?(r.matchMedia=function(c){var u=Rt.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Rt.addEventListener("matchMediaInit",function(){r_(),lf()}),Rt.addEventListener("matchMediaRevert",function(){return i_()}),Rt.addEventListener("matchMedia",function(){Kr(0,1),as("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Vc(),Vc})):console.warn("Requires GSAP 3.11.0 or later"),Vc(),on(Re,"scroll",Us);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,a=Rt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=ji(_e),Je.m=Math.round(o.top+Je.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Ko=setInterval(Vd,250),Rt.delayedCall(.5,function(){return Zo=0}),on(Re,"touchcancel",Ri),on(_e,"touchstart",Ri),jo(on,Re,"pointerdown,touchstart,mousedown",Od),jo(on,Re,"pointerup,touchend,mouseup",Bd),sh=Rt.utils.checkPrefix("transform"),vl.push(sh),Ns=vn(),Ul=Rt.delayedCall(.2,Kr).pause(),Fs=[Re,"visibilitychange",function(){var c=ae.innerWidth,u=ae.innerHeight;Re.hidden?(Id=c,Ud=u):(Id!==c||Ud!==u)&&Ua()},Re,"DOMContentLoaded",Kr,ae,"load",Kr,ae,"resize",Ua],Jo(on),ne.forEach(function(c){return c.enable(0,1)}),l=0;l<oe.length;l+=3)Qo(an,oe[l],oe[l+1]),Qo(an,oe[l],oe[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Bc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ko)||(Ko=i)&&setInterval(Vd,i),"ignoreMobileResize"in n&&(ah=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Jo(an)||Jo(on,n.autoRefreshEvents||"none"),Ym=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Bn(n),a=oe.indexOf(s),o=rs(s);~a&&oe.splice(a,o?6:2),i&&(o?zi.unshift(ae,i,_e,i,ti,i):zi.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(jn(n)?Bn(n):n).getBoundingClientRect(),o=a[s?ts:es]*i||0;return s?a.right-o>0&&a.left+o<ae.innerWidth:a.bottom-o>0&&a.top+o<ae.innerHeight},r.positionInViewport=function(n,i,s){jn(n)&&(n=Bn(n));var a=n.getBoundingClientRect(),o=a[s?ts:es],l=i==null?o/2:i in Fl?Fl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ae.innerWidth:(a.top+l)/ae.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r})();le.version="3.14.2";le.saveStyles=function(r){return r?fo(r).forEach(function(t){if(t&&t.style){var e=Jn.indexOf(t);e>=0&&Jn.splice(e,5),Jn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),oh())}}):Jn};le.revert=function(r,t){return lf(!r,t)};le.create=function(r,t){return new le(r,t)};le.refresh=function(r){return r?Ua(!0):(Ns||le.register())&&Kr(!0)};le.update=function(r){return++oe.cache&&nr(r===!0?2:0)};le.clearScrollMemory=s_;le.maxScroll=function(r,t){return Fi(r,t?Un:Je)};le.getScrollFunc=function(r,t){return Cr(Bn(r),t?Un:Je)};le.getById=function(r){return ch[r]};le.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};le.isScrolling=function(){return!!xi};le.snapDirectional=of;le.addEventListener=function(r,t){var e=ss[r]||(ss[r]=[]);~e.indexOf(t)||e.push(t)};le.removeEventListener=function(r,t){var e=ss[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};le.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],d=[],f=Rt.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&Mn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return Mn(s)&&(s=s(),on(le,"refresh",function(){return s=t.batchMax()})),fo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(le.create(c))}),e};var qd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Hc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===ti&&r(_e,e)},rl={auto:1,scroll:1},Ob=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Rt.core.getCache(s),o=vn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(rl[(l=mi(s)).overflowY]||rl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!rs(s)&&(rl[(l=mi(s)).overflowY]||rl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},l_=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Ob,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(Re,He.eventTypes[0],Kd,!1,!0)},onDisable:function(){return an(Re,He.eventTypes[0],Kd,!0)}})},Bb=/(input|label|select|textarea)/i,$d,Kd=function(t){var e=Bb.test(t.target.tagName);(e||$d)&&(t._gsapAllow=!0,$d=e)},zb=function(t){Gr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Bn(t.target)||ti,u=Rt.core.globals().ScrollSmoother,h=u&&u.get(),d=dr&&(t.content&&Bn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=Cr(c,Je),_=Cr(c,Un),g=1,m=(He.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,p=0,M=Mn(i)?function(){return i(o)}:function(){return i||2.8},T,x,b=l_(c,t.type,!0,s),A=function(){return x=!1},E=Ri,C=Ri,v=function(){l=Fi(c,Je),C=Xa(dr?1:0,l),n&&(E=Xa(0,Fi(c,Un))),T=ns},S=function(){d._gsap.y=La(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var W=La(o.deltaY/2),et=C(f.v-W);if(d&&et!==f.v+f.offset){f.offset=et-f.v;var L=La((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=oe.cache,nr()}return!0}f.offset&&S(),x=!0},D,F,k,G,V=function(){v(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return d&&Rt.set(d,{y:"+=0"}),t.ignoreCheck=function(B){return dr&&B.type==="touchmove"&&P()||g>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},t.onPress=function(){x=!1;var B=g;g=La((ae.visualViewport&&ae.visualViewport.scale||1)/m),D.pause(),B!==g&&Hc(c,g>1.01?!0:n?!1:"x"),F=_(),k=f(),v(),T=ns},t.onRelease=t.onGestureStart=function(B,W){if(f.offset&&S(),!W)G.restart(!0);else{oe.cache++;var et=M(),L,nt;n&&(L=_(),nt=L+et*.05*-B.velocityX/.227,et*=qd(_,L,nt,Fi(c,Un)),D.vars.scrollX=E(nt)),L=f(),nt=L+et*.05*-B.velocityY/.227,et*=qd(f,L,nt,Fi(c,Je)),D.vars.scrollY=C(nt),D.invalidate().duration(et).play(.01),(dr&&D.vars.scrollY>=l||L>=l-1)&&Rt.to({},{onUpdate:V,duration:et})}a&&a(B)},t.onWheel=function(){D._ts&&D.pause(),vn()-p>1e3&&(T=0,p=vn())},t.onChange=function(B,W,et,L,nt){if(ns!==T&&v(),W&&n&&_(E(L[2]===W?F+(B.startX-B.x):_()+W-L[1])),et){f.offset&&S();var Lt=nt[2]===et,Ft=Lt?k+B.startY-B.y:f()+et-nt[1],Bt=C(Ft);Lt&&Ft!==Bt&&(k+=Bt-Ft),f(Bt)}(et||W)&&nr()},t.onEnable=function(){Hc(c,n?!1:"x"),le.addEventListener("refresh",V),on(ae,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),b.enable()},t.onDisable=function(){Hc(c,!0),an(ae,"resize",V),le.removeEventListener("refresh",V),b.kill()},t.lockAxis=t.lockAxis!==!1,o=new He(t),o.iOS=dr,dr&&!f()&&f(1),dr&&Rt.ticker.add(Ri),G=o._dc,D=Rt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:o_(f,f(),function(){return D.pause()})},onUpdate:nr,onComplete:G.vars.onComplete}),o};le.sort=function(r){if(Mn(r))return ne.sort(r);var t=ae.pageYOffset||0;return le.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),ne.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};le.observe=function(r){return new He(r)};le.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var t=r instanceof He?r:zb(r);return Pn&&Pn.target===t.target&&Pn.kill(),rs(t.target)&&(Pn=t),t};le.core={_getVelocityProp:rh,_inputObserver:l_,_scrollers:oe,_proxies:zi,bridge:{ss:function(){xi||as("scrollStart"),xi=vn()},ref:function(){return gn}}};Zm()&&Rt.registerPlugin(le);const Ml={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class vo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kb=new kl(-1,1,1,-1,0,1);class Vb extends en{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}}const Gb=new Vb;class c_{constructor(t){this._mesh=new Ie(Gb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,kb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class fh extends vo{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ln?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=io.clone(t.uniforms),this.material=new ln({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new c_(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Zd extends vo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Hb extends vo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Wb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fh(Ml),this.copyPass.material.blending=Oi,this.clock=new Up}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zd!==void 0&&(a instanceof Zd?n=!0:a instanceof Hb&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xb extends vo{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Gt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Yb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class oa extends vo{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new vt(t.x,t.y):new vt(256,256),this.clearColor=new Gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(s,a,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new kn(s,a,{type:ai});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new kn(s,a,{type:ai});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Yb;this.highPassUniforms=io.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new vt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=io.clone(Ml.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Ml.vertexShader,fragmentShader:Ml.fragmentShader,premultipliedAlpha:!0,blending:ja,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Gt,this._oldClearAlpha=1,this._basic=new Bl,this._fsQuad=new c_(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new vt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=oa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=oa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new ln({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new vt(.5,.5)},direction:{value:new vt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ln({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}oa.BlurDirectionX=new vt(1,0);oa.BlurDirectionY=new vt(0,1);function qb(r){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=n.createRadialGradient(128*.35,128*.25,8,128*.5,128*.5,128*.75);i.addColorStop(0,"rgba(240,240,255,0.95)"),i.addColorStop(.25,"rgba(120,90,255,0.35)"),i.addColorStop(.55,"rgba(10,12,18,0.35)"),i.addColorStop(1,"rgba(4,4,6,1.0)"),n.fillStyle=i,n.fillRect(0,0,128,128),n.globalCompositeOperation="screen";const s=(c,u,h,d,f)=>{const _=n.createLinearGradient(c,u,c+h,u+d);_.addColorStop(0,`rgba(255,255,255,${f})`),_.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=_,n.fillRect(c,u,h,d)};s(128*.05,128*.08,128*.6,128*.35,.35),s(128*.6,128*.35,128*.45,128*.35,.22),s(128*.2,128*.55,128*.65,128*.45,.18),n.globalCompositeOperation="source-over";const a=new zl(e);a.colorSpace=un,a.needsUpdate=!0;const o=new zu(r);o.compileEquirectangularShader();const l=o.fromEquirectangular(a);return a.dispose(),o.dispose(),l.texture}function $b(r=128){const t=document.createElement("canvas");t.width=r,t.height=r;const e=t.getContext("2d"),n=e.createRadialGradient(r/2,r/2,0,r/2,r/2,r/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.65)"),n.addColorStop(.55,"rgba(255,255,255,0.20)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(r/2,r/2,r/2,0,Math.PI*2),e.fill();const i=new zl(t);return i.colorSpace=un,i.wrapS=i.wrapT=Ii,i.anisotropy=4,i}function Jd(r){const t=document.createElement("canvas");t.width=1024,t.height=256;const e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.font="700 140px system-ui, -apple-system, Segoe UI, Roboto, Arial",e.fillStyle="rgba(255,255,255,0.95)",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(124,58,237,0.55)",e.shadowBlur=24,e.fillText(r,t.width/2,t.height/2),e.shadowBlur=0,e.fillStyle="rgba(255,255,255,0.98)",e.fillText(r,t.width/2,t.height/2);const n=new zl(t);return n.colorSpace=un,n.anisotropy=8,n}function jd(r){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=r==="before"?"#f7d7c6":"#f9e3d8";e.fillStyle=n,e.fillRect(0,0,t.width,t.height);const i=e.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o+=4){const l=(Math.random()-.5)*(r==="before"?16:10);s[o]=Math.min(255,Math.max(0,s[o]+l)),s[o+1]=Math.min(255,Math.max(0,s[o+1]+l)),s[o+2]=Math.min(255,Math.max(0,s[o+2]+l))}if(e.putImageData(i,0,0),r==="before")for(let o=0;o<160;o++){const l=Math.random()*t.width,c=Math.random()*t.height,u=6+Math.random()*22,h=.04+Math.random()*.07;e.fillStyle=`rgba(210,60,90,${h})`,e.beginPath(),e.arc(l,c,u,0,Math.PI*2),e.fill()}else for(let o=0;o<60;o++){const l=Math.random()*t.width,c=Math.random()*t.height,u=10+Math.random()*30,h=.02+Math.random()*.04;e.fillStyle=`rgba(255,255,255,${h})`,e.beginPath(),e.arc(l,c,u,0,Math.PI*2),e.fill()}const a=new zl(t);return a.colorSpace=un,a.anisotropy=8,a}const Wc={uniforms:{uBefore:{value:null},uAfter:{value:null},uReveal:{value:0},uCenter:{value:new vt(.5,.5)},uSoftness:{value:.18}},vertexShader:`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D uBefore;
    uniform sampler2D uAfter;
    uniform float uReveal;
    uniform vec2 uCenter;
    uniform float uSoftness;

    // cheap hash noise
    float hash(vec2 p){
      p = fract(p*vec2(123.34, 456.21));
      p += dot(p, p+34.345);
      return fract(p.x*p.y);
    }

    void main(){
      vec4 b = texture2D(uBefore, vUv);
      vec4 a = texture2D(uAfter, vUv);

      float d = distance(vUv, uCenter);
      // reveal grows from center outward with soft edge + a touch of noise
      float n = hash(vUv * 12.0) * 0.04;
      float edge = smoothstep(uReveal + uSoftness + n, uReveal - uSoftness + n, d);
      vec4 col = mix(b, a, edge);

      // subtle vignette on the card
      float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
      col.rgb *= mix(0.92, 1.0, v);

      gl_FragColor = col;
    }
  `};function Kb(){const r=new Pi,t=new Gt("#7c3aed"),e=new Gt("#c7d2fe"),n=new Ps({color:new Gt("#d6d7df"),metalness:1,roughness:.16,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.45}),i=new Ps({color:e,metalness:0,roughness:.07,transmission:1,thickness:.9,ior:1.55,transparent:!0,opacity:1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.3}),s=new Ps({color:new Gt("#a78bfa"),metalness:.55,roughness:.22,emissive:t,emissiveIntensity:.28,clearcoat:1,clearcoatRoughness:.16,envMapIntensity:1.2}),a=new Pi;r.add(a);const o=new Uh(new Dp(Array.from({length:60},(at,bt)=>{const qt=bt/59,pt=qt*Math.PI*8,It=Math.cos(pt)*.35,Jt=(qt-.5)*1.7,Ot=Math.sin(pt)*.35;return new N(It,Jt,Ot)})),220,.035,12,!1),l=new Ie(o,s),c=new Ie(o,s);c.scale.x=-1,c.rotation.y=Math.PI,a.add(l,c);const u=new Rh(.02,.55,6,14),h=new Ps({color:new Gt("#eef2ff"),metalness:.25,roughness:.25,emissive:new Gt("#ffffff"),emissiveIntensity:.02,envMapIntensity:1}),d=new Lg(u,h,24),f=new je;for(let at=0;at<24;at++){const bt=at/23,qt=bt*Math.PI*8,pt=(bt-.5)*1.65;f.position.set(0,pt,0),f.rotation.z=qt,f.updateMatrix(),d.setMatrixAt(at,f.matrix)}d.frustumCulled=!1,a.add(d);const _=new Pi,g=new Lh(.07,1);for(let at=0;at<42;at++){const bt=new Ie(g,at%3===0?n:s),qt=1.3+Math.random()*1.6,pt=Math.random()*Math.PI*2,It=(Math.random()-.5)*1.4;bt.position.set(Math.cos(pt)*qt*.55,It,Math.sin(pt)*qt*.55),bt.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),_.add(bt)}a.add(_);const m=new Pi;m.visible=!0,m.position.set(0,-.05,0),r.add(m);const p=new Wr(.42,.48,1.65,80,1,!0),M=new Ie(p,i);M.position.y=-.15,m.add(M);const T=new Ie(new Wr(.385,.44,1.35,72),new Ps({color:new Gt("#93c5fd"),metalness:0,roughness:.22,transmission:.65,thickness:.5,transparent:!0,opacity:.65,envMapIntensity:1.1}));T.position.y=-.23,m.add(T);const x=new Ie(new Wr(.24,.42,.3,72),i);x.position.y=.75,m.add(x);const b=new Ie(new Wr(.1,.12,.22,36),n);b.position.y=.94,m.add(b);const A=new Ie(new Wr(.26,.27,.55,72),n);A.position.y=1.14,m.add(A);const E=Jd("CURE BOOSTER"),C=new Bl({map:E,transparent:!0,opacity:.92}),v=new Ie(new Qs(.9,.22),C);v.position.set(0,.1,.49),m.add(v);const S=new Pi;r.add(S);const P=$b(128),D=new wp({map:P,transparent:!0,depthWrite:!1,blending:ja,color:new Gt("#dbeafe"),opacity:0,size:.12,sizeAttenuation:!0}),F=1800,k=new en,G=new Float32Array(F*3),V=new Float32Array(F*3);for(let at=0;at<F;at++){const bt=at*3;G[bt+0]=(Math.random()-.5)*.1,G[bt+1]=.95+Math.random()*.05,G[bt+2]=.25+Math.random()*.05;const qt=.65;V[bt+0]=(Math.random()-.5)*qt,V[bt+1]=(Math.random()*1+.6)*1.05,V[bt+2]=-Math.random()*1.6-.8}k.setAttribute("position",new bn(G,3)),k.setAttribute("aVel",new bn(V,3));const B=new Cp(k,D);B.frustumCulled=!1,S.add(B);const W=jd("before"),et=jd("after"),L=new ln({uniforms:io.clone(Wc.uniforms),vertexShader:Wc.vertexShader,fragmentShader:Wc.fragmentShader,transparent:!1});L.uniforms.uBefore.value=W,L.uniforms.uAfter.value=et;const nt=new Ie(new Qs(2.1,1.6,1,1),L);nt.position.set(1.95,.2,-.35),nt.rotation.y=-.18,nt.visible=!0,r.add(nt);const Lt=Jd("BIOFOX"),Ft=new Tp({map:Lt,transparent:!0,opacity:0,depthWrite:!1}),Bt=new Pg(Ft);Bt.scale.set(2.6,.65,1),Bt.position.set(0,.25,-1.25),r.add(Bt);const Xt=new Pi;r.add(Xt);const K=[],j=new Ih(.08,18,18),ht=new Ps({color:new Gt("#e0e7ff"),metalness:.1,roughness:.12,transmission:.85,thickness:.4,transparent:!0,opacity:.95,emissive:t,emissiveIntensity:.08,envMapIntensity:1.1}),Pt=["https://instagram.com/","https://instagram.com/","https://instagram.com/"];for(let at=0;at<14;at++){const bt=new Ie(j,ht),qt=1.2+Math.random()*1.2,pt=Math.random()*Math.PI*2,It=(Math.random()-.5)*1;bt.position.set(Math.cos(pt)*qt,It,-1.35+Math.sin(pt)*.35),bt.userData.url=Pt[at%Pt.length],bt.userData.phase=Math.random()*Math.PI*2,Xt.add(bt),K.push(bt)}return m.scale.setScalar(.88),m.visible=!0,m.position.y=-.08,a.position.y=.1,a.scale.setScalar(1),Bt.visible=!0,{group:r,bio:a,mol:_,product:m,cap:A,mistGroup:S,mist:B,mistMat:D,mistPos:G,mistVel:V,baPlane:nt,baMat:L,logo:Bt,interact:Xt,clickable:K}}const Qd={vertex:`
    attribute float aSize;
    uniform float uTime;
    uniform float uScrollV;
    varying float vFade;
    varying float vSeed;

    float hash(float n){ return fract(sin(n)*43758.5453123); }

    void main(){
      vec3 p = position;
      float id = float(gl_VertexID);
      vSeed = hash(id * 0.173);

      // subtle drift + scroll energy
      float drift = sin(uTime * 0.6 + id * 0.02) * 0.06;
      p.x += drift;
      p.y += cos(uTime * 0.5 + id * 0.01) * 0.04;

      // depth breathing
      p.z += sin(uTime * 0.35 + id * 0.015) * 0.08;

      vec4 mv = modelViewMatrix * vec4(p, 1.0);
      gl_Position = projectionMatrix * mv;

      float size = aSize * (1.0 + uScrollV * 0.8);
      gl_PointSize = size * (180.0 / -mv.z);

      // fade with depth
      vFade = smoothstep(0.0, 1.0, (-mv.z - 1.0) / 8.0);
    }
  `,fragment:`
    precision highp float;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying float vFade;
    varying float vSeed;

    void main(){
      vec2 uv = gl_PointCoord - 0.5;
      float d = length(uv);
      float a = smoothstep(0.5, 0.0, d);
      vec3 col = mix(uColorA, uColorB, vSeed);

      // gentle sparkle
      float sparkle = smoothstep(0.9, 1.0, sin(vSeed * 120.0));
      col += sparkle * 0.15;

      gl_FragColor = vec4(col, a * 0.45 * vFade);
    }
  `};function Zb(){const t=new Float32Array(5400),e=new Float32Array(1800);for(let a=0;a<1800;a++){const o=a*3;t[o+0]=(Math.random()-.5)*6,t[o+1]=(Math.random()-.5)*3.4,t[o+2]=(Math.random()-.5)*6,e[a]=.5+Math.random()*1.6}const n=new en;n.setAttribute("position",new bn(t,3)),n.setAttribute("aSize",new bn(e,1));const i=new ln({vertexShader:Qd.vertex,fragmentShader:Qd.fragment,transparent:!0,depthWrite:!1,blending:ja,uniforms:{uTime:{value:0},uScrollV:{value:0},uColorA:{value:new Gt("#7c3aed")},uColorB:{value:new Gt("#06b6d4")}}}),s=new Cp(n,i);return s.frustumCulled=!1,s}const Jb={uniforms:{tDiffuse:{value:null},offset:{value:1},darkness:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float offset;
    uniform float darkness;
    varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - 0.5) * offset;
      float v = smoothstep(0.8, 0.2, dot(uv, uv));
      c.rgb *= mix(darkness, 1.0, v);
      gl_FragColor = c;
    }
  `},jb={uniforms:{tDiffuse:{value:null},time:{value:0},amount:{value:.04}},vertexShader:`
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float amount;
    varying vec2 vUv;

    float rand(vec2 co){
      return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
    }

    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float n = rand(vUv * (1200.0 + time * 2.0)) - 0.5;
      // grain mostly in shadows
      float luma = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      float shadowMask = smoothstep(0.8, 0.25, luma);
      c.rgb += n * amount * shadowMask;
      gl_FragColor = c;
    }
  `};Qh.registerPlugin(le);function Qb(r){const t=new ny({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});t.setClearColor(0,0),t.outputColorSpace=un,t.toneMapping=ph,t.toneMappingExposure=1.05;const e=new Cg,n=new di(45,1,.1,120);n.position.set(0,.5,6.5);const i=qb(t);e.environment=i;const s=new yc(16777215,2.2);s.position.set(3.5,4.2,2.5),e.add(s);const a=new yc(10079487,.8);a.position.set(-4,1.5,2),e.add(a);const o=new yc(8141549,1.6);o.position.set(2,.5,-5),e.add(o);const l=new r0(16777215,.12);e.add(l);const c=Kb();e.add(c.group);const u=Zb();e.add(u);const h=new Wb(t);h.addPass(new Xb(e,n));const d=new oa(new vt(1,1),.55,.65,.85);h.addPass(d);const f=new fh(Jb);f.uniforms.darkness.value=.9,f.uniforms.offset.value=1.15,h.addPass(f);const _=new fh(jb);_.uniforms.amount.value=.045,_.uniforms.time.value=0,h.addPass(_);const g=new vt(0,0);window.addEventListener("pointermove",P=>{const D=P.clientX/window.innerWidth*2-1,F=P.clientY/window.innerHeight*2-1;g.set(D,F)});const m=new a0,p=new vt;window.addEventListener("pointerdown",P=>{p.set(P.clientX/window.innerWidth*2-1,-(P.clientY/window.innerHeight)*2+1),m.setFromCamera(p,n);const D=m.intersectObjects(c.clickable,!1);if(D.length){const F=D[0].object.userData.url||"https://instagram.com/";window.open(F,"_blank","noopener,noreferrer")}});const M={w:1,h:1,dpr:1},T=()=>{M.w=window.innerWidth,M.h=window.innerHeight,M.dpr=Math.min(window.devicePixelRatio||1,1.75),n.aspect=M.w/M.h,n.updateProjectionMatrix(),t.setPixelRatio(M.dpr),t.setSize(M.w,M.h),h.setPixelRatio(M.dpr),h.setSize(M.w,M.h),d.setSize(M.w,M.h);const D=Math.min(M.w,M.h)<680?.8:1;d.strength=.55*D,d.radius=.65,_.uniforms.amount.value=.045*D};window.addEventListener("resize",T),T();const x={t:0,scrollV:0,mistT:0},b=Qh.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.15}});b.to(n.position,{x:.15,y:.65,z:6},0),b.to(c.bio.rotation,{y:Math.PI*.65,x:.08},0),b.to(c.bio.position,{x:-.25,y:.1,z:.2},0),b.to(c.mol.position,{x:0,y:0,z:0},.1),b.to(c.product.rotation,{y:Math.PI*.35},.12),b.to(c.product.scale,{x:1,y:1,z:1},.12),b.to(c.bio.scale,{x:.6,y:.6,z:.6},.22),b.to(c.bio.position,{x:-1.4,y:.15,z:-.4},.22),b.to(n.position,{x:.05,y:.55,z:4.6},.22),b.to(n.position,{x:-.35,y:.25,z:3.85},.3),b.to(c.product.rotation,{y:Math.PI*1.05,x:-.08},.3),b.to(c.cap.position,{y:1.52},.36),b.to(c.mistMat,{opacity:.75},.4),b.to(x,{mistT:1},.4),b.to(n.position,{x:.35,y:.18,z:3.25},.58),b.to(c.product.rotation,{y:Math.PI*1.65,x:.06},.58),b.to(c.baPlane.position,{x:1.65,y:.15,z:-.2},.58),b.to(c.baMat.uniforms.uReveal,{value:.28},.66),b.to(c.baMat.uniforms.uReveal,{value:.62},.74),b.to(c.baMat.uniforms.uReveal,{value:.92},.8),b.to(n.position,{x:0,y:.5,z:2.75},.84),b.to(c.product.position,{y:-.35},.84),b.to(c.mistMat,{opacity:1},.86),b.to(c.logo.material,{opacity:1},.9),b.to(x,{mistT:2},.86);let A=window.scrollY,E=performance.now();const C=()=>{const P=window.scrollY,D=performance.now(),F=Math.max(16,D-E);x.scrollV=(P-A)/F,A=P,E=D};window.addEventListener("scroll",C,{passive:!0});const v=new Up,S=()=>{const P=v.getDelta();x.t+=P;const D=g.x*.35,F=g.y*.2;c.group.rotation.y+=(D-c.group.rotation.y)*.02,c.group.rotation.x+=(-F-c.group.rotation.x)*.02,c.product.position.y+=Math.sin(x.t*.7)*.012-c.product.position.y*0,c.product.rotation.z=Math.sin(x.t*.35)*.02;for(const B of c.clickable){const W=B.position,et=B.userData.phase||0;W.y+=Math.sin(x.t*.9+et)*8e-4,B.rotation.y+=P*.25}const k=c.mist.geometry.getAttribute("position"),G=c.mist.geometry.getAttribute("aVel"),V=_f.clamp(x.mistT,0,2);for(let B=0;B<k.count;B++){const W=B*3,et=k.array[W+0],L=k.array[W+1],nt=k.array[W+2],Lt=G.array[W+0]*(.35+V*.45),Ft=G.array[W+1]*(.35+V*.55),Bt=G.array[W+2]*(.45+V*.65);k.array[W+0]=et+Lt*P,k.array[W+1]=L+Ft*P,k.array[W+2]=nt+Bt*P,(k.array[W+1]>4.2||k.array[W+2]<-6||Math.abs(k.array[W+0])>5.5)&&(k.array[W+0]=(Math.random()-.5)*.08,k.array[W+1]=.95+Math.random()*.06,k.array[W+2]=.25+Math.random()*.06)}k.needsUpdate=!0,u.material.uniforms.uTime.value=x.t,u.material.uniforms.uScrollV.value=_f.clamp(Math.abs(x.scrollV)*3,0,1),_.uniforms.time.value=x.t,h.render(),requestAnimationFrame(S)};S()}const tT=document.querySelector("#app");tT.innerHTML=`
  <div class="canvasWrap"><canvas id="c"></canvas></div>

  <header class="header">
    <div class="brand"><span class="brandDot"></span><span>BIOFOX</span></div>
    <nav class="nav">
      <a href="#s1">Science → Product</a>
      <a href="#s2">Mist</a>
      <a href="#s3">Before/After</a>
      <a href="#s4">Interact</a>
    </nav>
  </header>

  <div class="overlay">
    <section id="s1" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">BIOFOX • Scroll Experience</div>
          <div class="h1">Biology
          <br/>→ Product
          <br/>Formation</div>
          <div class="sub">DNA/RNA-like structures gather while you scroll—then converge into a premium “Cure Booster” bottle. No external assets: everything is procedural so it loads fast.</div>
          <div class="divider"></div>
          <span class="pill"><span class="pillDot"></span>three.js • GSAP ScrollTrigger • Mobile-first perf</span>
        </div>

        <div class="card">
          <div class="cardTitle">Beat 01</div>
          <ul class="cardList">
            <li><span>✦</span><span>Scientific particles → controlled convergence</span></li>
            <li><span>✦</span><span>Lux lighting + glass/metal materials</span></li>
            <li><span>✦</span><span>Scroll authored like a luxury ad</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s2" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 02</div>
          <div class="h1">Cap
          <br/>Open
          <br/>Mist Spray</div>
          <div class="sub">The bottle rotates, the cap lifts, and a mist burst fills the frame with a realistic particle spray. The motion is scroll-timed, not autoplay.</div>
        </div>
        <div class="card">
          <div class="cardTitle">Beat 02</div>
          <ul class="cardList">
            <li><span>•</span><span>Scroll controls cap lift + spray intensity</span></li>
            <li><span>•</span><span>Additive particles + soft sprite (procedural)</span></li>
            <li><span>•</span><span>Adaptive quality clamp on mobile</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s3" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 03</div>
          <div class="h1">Cells
          <br/>Touch
          <br/>→ Improve</div>
          <div class="sub">Regenerative “cells” ride the mist and touch a troubled skin visual. As they contact, redness fades into a calmer after-state via a masked transition.</div>
        </div>
        <div class="card">
          <div class="cardTitle">Beat 03</div>
          <ul class="cardList">
            <li><span>•</span><span>Before/After reveal shader (no heavy images)</span></li>
            <li><span>•</span><span>Contact-driven mask expansion</span></li>
            <li><span>•</span><span>Clean, premium pacing</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section id="s4" class="section">
      <div class="sectionInner">
        <div>
          <div class="kicker">Section 04</div>
          <div class="h1">Full‑Screen
          <br/>Spray
          <br/>& Interact</div>
          <div class="sub">A final large-scale spray forms “BIOFOX”. Remaining particles float—tap/click to open an SNS link. (Currently wired to Instagram placeholder.)</div>
        </div>
        <div class="card">
          <div class="cardTitle">Interaction</div>
          <div class="small">Try clicking floating particles in the last scene.</div>
          <div class="divider"></div>
          <div class="small">Next: swap in real product photos/logo/copy anytime.</div>
        </div>
      </div>
    </section>
  </div>

  <div class="scrollHint"><span class="mouse"></span><span>Scroll</span></div>
`;Qb(document.querySelector("#c"));
