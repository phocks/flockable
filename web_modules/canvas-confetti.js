var F={};(function W(h,w,R,b){var S=!!(h.Worker&&h.Blob&&h.Promise&&h.OffscreenCanvas&&h.HTMLCanvasElement&&h.HTMLCanvasElement.prototype.transferControlToOffscreen&&h.URL&&h.URL.createObjectURL);function P(){}function C(r){var e=w.exports.Promise,t=e!==void 0?e:h.Promise;return typeof t=="function"?new t(r):(r(P,P),null)}var T=function(){var r=Math.floor(1e3/60),e,t,a={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var n=Math.random();return a[n]=requestAnimationFrame(function l(c){o===c||o+r-1<c?(o=c,delete a[n],i()):a[n]=requestAnimationFrame(l)}),n},t=function(i){a[i]&&cancelAnimationFrame(a[i])}):(e=function(i){return setTimeout(i,r)},t=function(i){return clearTimeout(i)}),{frame:e,cancel:t}}(),A=function(){var r,e,t={};function a(o){function i(n,l){o.postMessage({options:n||{},callback:l})}o.init=function(l){var c=l.transferControlToOffscreen();o.postMessage({canvas:c},[c])},o.fire=function(l,c,v){if(e)return i(l,null),e;var u=Math.random().toString(36).slice(2);return e=C(function(g){function f(s){if(s.data.callback!==u)return;delete t[u],o.removeEventListener("message",f),e=null,v(),g()}o.addEventListener("message",f),i(l,u),t[u]=f.bind(null,{data:{callback:u}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var l in t)t[l](),delete t[l]}}return function(){if(r)return r;if(!R&&S){var o=["var CONFETTI, SIZE = {}, module = {};","("+W.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",i),null}a(r)}return r}}(),D={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function B(r,e){return e?e(r):r}function U(r){return!(r==null)}function d(r,e,t){return B(r&&U(r[e])?r[e]:D[e],t)}function Z(r){return r<0?0:Math.floor(r)}function q(r,e){return Math.floor(Math.random()*(e-r))+r}function x(r){return parseInt(r,16)}function V(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:x(e.substring(0,2)),g:x(e.substring(2,4)),b:x(e.substring(4,6))}}function X(r){var e=d(r,"origin",Object);return e.x=d(e,"x",Number),e.y=d(e,"y",Number),e}function Y(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function j(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function H(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function G(r,e,t,a,o,i,n,l,c){r.save(),r.translate(e,t),r.rotate(i),r.scale(a,o),r.arc(0,0,1,n,l,c),r.restore()}function J(r){var e=r.angle*(Math.PI/180),t=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*t-Math.random()*t),tiltAngle:Math.random()*Math.PI,color:V(r.color),shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,random:Math.random()+5,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar}}function K(r,e){e.x+=Math.cos(e.angle2D)*e.velocity,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=.1,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+5,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var t=e.tick++/e.totalTicks,a=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,n=e.wobbleY+e.random*e.tiltSin;return r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-t)+")",r.beginPath(),e.shape==="circle"?r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(n-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):G(r,e.x,e.y,Math.abs(i-a)*e.ovalScalar,Math.abs(n-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(n)),r.lineTo(Math.floor(a),Math.floor(e.wobbleY))),r.closePath(),r.fill(),e.tick<e.totalTicks}function Q(r,e,t,a,o){var i=e.slice(),n=r.getContext("2d"),l,c,v=C(function(u){function g(){l=c=null,n.clearRect(0,0,a.width,a.height),o(),u()}function f(){R&&!(a.width===b.width&&a.height===b.height)&&(a.width=r.width=b.width,a.height=r.height=b.height),!a.width&&!a.height&&(t(r),a.width=r.width,a.height=r.height),n.clearRect(0,0,a.width,a.height),i=i.filter(function(s){return K(n,s)}),i.length?l=T.frame(f):g()}l=T.frame(f),c=g});return{addFettis:function(u){return i=i.concat(u),v},canvas:r,promise:v,reset:function(){l&&T.cancel(l),c&&c()}}}function _(r,e){var t=!r,a=!!d(e||{},"resize"),o=d(e,"disableForReducedMotion",Boolean),i=S&&!!d(e||{},"useWorker"),n=i?A():null,l=t?Y:j,c=r&&n?!!r.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,u;function g(s,I,k){for(var y=d(s,"particleCount",Z),M=d(s,"angle",Number),p=d(s,"spread",Number),m=d(s,"startVelocity",Number),$=d(s,"decay",Number),ee=d(s,"gravity",Number),L=d(s,"colors"),re=d(s,"ticks",Number),N=d(s,"shapes"),ae=d(s,"scalar"),O=X(s),z=y,E=[],ne=r.width*O.x,te=r.height*O.y;z--;)E.push(J({x:ne,y:te,angle:M,spread:p,startVelocity:m,color:L[z%L.length],shape:N[q(0,N.length)],ticks:re,decay:$,gravity:ee,scalar:ae}));return u?u.addFettis(E):(u=Q(r,E,l,I,k),u.promise)}function f(s){var I=o||d(s,"disableForReducedMotion",Boolean),k=d(s,"zIndex",Number);if(I&&v)return C(function(m){m()});t&&u?r=u.canvas:t&&!r&&(r=H(k),document.body.appendChild(r)),a&&!c&&l(r);var y={width:r.width,height:r.height};n&&!c&&n.init(r),c=!0,n&&(r.__confetti_initialized=!0);function M(){if(n){var m={getBoundingClientRect:function(){if(!t)return r.getBoundingClientRect()}};l(m),n.postMessage({resize:{width:m.width,height:m.height}});return}y.width=y.height=null}function p(){u=null,a&&h.removeEventListener("resize",M),t&&r&&(document.body.removeChild(r),r=null,c=!1)}return a&&h.addEventListener("resize",M,!1),n?n.fire(s,y,p):g(s,y,p)}return f.reset=function(){n&&n.reset(),u&&u.reset()},f}w.exports=_(null,{useWorker:!0,resize:!0}),w.exports.create=_})(function(){return typeof window!="undefined"?window:typeof self!="undefined"?self:this}(),F,!1);var ie=F.exports,oe=F.exports.create;export default ie;