(function(){"use strict";var e={5867:function(e,n,r){var t=r(5130),u=r(6768),a=r(6450),o=r(8477);function l(e,n,r,t,l,i){const s=(0,u.g2)("router-view");return(0,u.uX)(),(0,u.Wv)(a.E,null,{default:(0,u.k6)((()=>[(0,u.bF)(o.Y,null,{default:(0,u.k6)((()=>[(0,u.bF)(s)])),_:1})])),_:1})}var i=(0,u.pM)({name:"App",data(){return{}}}),s=r(1241);const c=(0,s.A)(i,[["render",l]]);var d=c,h=r(1387);function f(e,n,r,t,a,o){const l=(0,u.g2)("BingoGame");return(0,u.uX)(),(0,u.Wv)(l)}var g=r(3892),m=r(3813),b=r(5526),v=r(6756);const p=(0,u.Lk)("h1",null,"Jogo de Bingo",-1),y=(0,u.Lk)("h2",{class:"text-center"},"Jogador",-1),k=(0,u.Lk)("h2",{class:"text-center"},"Máquina",-1);function N(e,n,r,t,a,o){const l=(0,u.g2)("CalledNumbersBoard"),i=(0,u.g2)("BingoBoard");return(0,u.uX)(),(0,u.Wv)(m.I,null,{default:(0,u.k6)((()=>[(0,u.bF)(b.B,null,{default:(0,u.k6)((()=>[(0,u.bF)(v.L,null,{default:(0,u.k6)((()=>[(0,u.bF)(b.B,null,{default:(0,u.k6)((()=>[p,(0,u.bF)(l,{highlightedNumbers:e.highlightedNumbers,drawnNumber:e.drawnNumber},null,8,["highlightedNumbers","drawnNumber"])])),_:1})])),_:1}),(0,u.bF)(v.L,{align:"center",justify:"center"},{default:(0,u.k6)((()=>[(0,u.bF)(g.D,{onClick:e.startGeneration,class:"bg-green"},{default:(0,u.k6)((()=>[(0,u.eW)("Iniciar jogo")])),_:1},8,["onClick"])])),_:1}),(0,u.bF)(v.L,{class:"mt-3"},{default:(0,u.k6)((()=>[(0,u.bF)(b.B,null,{default:(0,u.k6)((()=>[y,(0,u.bF)(i,{numbers:e.playerBoard,highlightedNumbers:e.playerHighlightedNumbers,"onUpdate:highlightedNumbers":n[0]||(n[0]=n=>e.playerHighlightedNumbers=n)},null,8,["numbers","highlightedNumbers"])])),_:1}),(0,u.bF)(b.B,null,{default:(0,u.k6)((()=>[k,(0,u.bF)(i,{numbers:e.machineBoard,highlightedNumbers:e.machineHighlightedNumbers,"onUpdate:highlightedNumbers":n[1]||(n[1]=n=>e.machineHighlightedNumbers=n),disable:!0},null,8,["numbers","highlightedNumbers"])])),_:1})])),_:1})])),_:1})])),_:1})}r(4114);var w=r(144),_=r(4232);function B(e,n,r,t,a,o){return(0,u.uX)(),(0,u.Wv)(m.I,{class:"bg-grey-lighten-3 rounded-lg card-container"},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.matrix,((n,r)=>((0,u.uX)(),(0,u.Wv)(v.L,{key:r},{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(n,((n,r)=>((0,u.uX)(),(0,u.Wv)(b.B,{key:r},{default:(0,u.k6)((()=>[(0,u.bF)(g.D,{class:(0,_.C4)({highlight:e.isHighlighted(n)}),disabled:e.disable||null===n,onClick:r=>null!==n&&e.markNumber(n)},{default:(0,u.k6)((()=>[(0,u.eW)((0,_.v_)(null!==n?n:""),1)])),_:2},1032,["class","disabled","onClick"])])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1})}var F=(0,u.pM)({name:"BingoBoard",props:{numbers:{type:Array,required:!0},highlightedNumbers:{type:Array,default:()=>[]},machineNumbers:{type:Array,default:()=>[]},machineHighlightedNumbers:{type:Array,default:()=>[]},disable:{type:Boolean,default:!1}},emits:["update:highlightedNumbers","winner"],setup(e,{emit:n}){const r=(0,w.KR)(e.numbers),t=(0,w.KR)(null),a=(0,u.EW)((()=>{const e=5;let n=[];for(let t=0;t<r.value.length;t+=e){const u=r.value.slice(t,t+e);t/e===2&&(u[2]=null),n.push(u)}return n})),o=(0,w.KR)([...e.highlightedNumbers]),l=(0,w.KR)([...e.machineHighlightedNumbers]);(0,u.wB)((()=>e.highlightedNumbers),(e=>{o.value=[...e]}),{deep:!0}),(0,u.wB)((()=>e.machineHighlightedNumbers),(e=>{l.value=[...e]}),{deep:!0});const i=e=>o.value.includes(e),s=e=>{const r=o.value.indexOf(e);-1===r?o.value.push(e):o.value.splice(r,1),n("update:highlightedNumbers",o.value),c()},c=()=>{const e=a.value.some((e=>e.every((e=>null===e||o.value.includes(e))))),r=a.value.some((e=>e.every((e=>null===e||l.value.includes(e)))));e?(t.value="Player",n("winner","Player")):r&&(t.value="Machine",n("winner","Machine"))};return{matrix:a,isHighlighted:i,markNumber:s,winner:t}}});const A=(0,s.A)(F,[["render",B],["__scopeId","data-v-3c7bad7e"]]);var O=A,j=r(4189),C=r(697);const M=e=>((0,u.Qi)("data-v-66cab49a"),e=e(),(0,u.jt)(),e),E=M((()=>(0,u.Lk)("h2",{class:"mb-2 ml-2"},"Números Chamados",-1))),L={class:"number-call mr-2"},H={class:"text-center pt-2"};function K(e,n,r,t,a,o){return(0,u.uX)(),(0,u.Wv)(m.I,{class:"bg-grey-lighten-3 rounded-lg"},{default:(0,u.k6)((()=>[(0,u.bF)(v.L,{aligh:"center",justify:"space-between"},{default:(0,u.k6)((()=>[E,(0,u.Lk)("div",L,[(0,u.Lk)("h3",H,(0,_.v_)(e.drawnNumber),1)])])),_:1}),(0,u.bF)(v.L,null,{default:(0,u.k6)((()=>[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(e.numbers,(n=>((0,u.uX)(),(0,u.Wv)(b.B,{key:n,class:"text-center"},{default:(0,u.k6)((()=>[(0,u.bF)(j.J,{class:(0,_.C4)(["rounded-panel",{highlight:e.isHighlighted(n)}])},{default:(0,u.k6)((()=>[(0,u.bF)(C.O,null,{default:(0,u.k6)((()=>[(0,u.eW)((0,_.v_)(n),1)])),_:2},1024)])),_:2},1032,["class"])])),_:2},1024)))),128))])),_:1})])),_:1})}var x=(0,u.pM)({name:"CalledNumbersBoard",props:{highlightedNumbers:{type:Array,required:!0},drawnNumber:{type:Array,required:!0}},setup(e){const n=Array.from({length:75},((e,n)=>n+1)),r=n=>e.highlightedNumbers.includes(n);return{numbers:n,isHighlighted:r}}});const R=(0,s.A)(x,[["render",K],["__scopeId","data-v-66cab49a"]]);var W=R,I=(0,u.pM)({name:"BingoGame",components:{BingoBoard:O,CalledNumbersBoard:W},setup(){const e=()=>{const e=Array.from({length:75},((e,n)=>n+1)),r=n(e),t=r.slice(0,25),u=r.slice(25,50);return{playerNumbers:t,machineNumbers:u}},n=e=>{for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},{playerNumbers:r,machineNumbers:t}=e(),a=(0,w.KR)(r),o=(0,w.KR)(t),l=(0,w.KR)([]),i=(0,w.KR)([]),s=(0,w.KR)([]),c=(0,w.KR)(null),d=(0,w.KR)(null),h=(e,n)=>{const r=Array(5).fill(0).map(((n,r)=>e.slice(5*r,5*r+5))),t=e=>e.some((e=>e.every((e=>n.includes(e)))));return t(r)},f=()=>{const e=Array.from({length:75},((e,n)=>n+1)).filter((e=>!l.value.includes(e)));if(0===e.length)return;const n=Math.floor(Math.random()*e.length);c.value=e[n],l.value.push(c.value),o.value.includes(c.value)&&!s.value.includes(c.value)&&s.value.push(c.value),b()},g=()=>{d.value||(f(),d.value=window.setInterval(f,8e3))},m=()=>{d.value&&(clearInterval(d.value),d.value=null)},b=()=>{h(a.value,i.value)?(alert("Jogador ganhou!"),m()):h(o.value,s.value)&&(alert("Máquina ganhou!"),m())};return(0,u.wB)(i,(()=>b())),(0,u.wB)(s,(()=>b())),{playerBoard:a,machineBoard:o,highlightedNumbers:l,playerHighlightedNumbers:i,machineHighlightedNumbers:s,drawnNumber:c,drawNumber:f,startGeneration:g,stopGeneration:m}}});const P=(0,s.A)(I,[["render",N]]);var X=P,q=(0,u.pM)({name:"HomeView",components:{BingoGame:X}});const T=(0,s.A)(q,[["render",f]]);var G=T;const S=[{path:"/",name:"home",component:G},{path:"/BingoBoard",name:"bingoBoard",component:O}],J=(0,h.aE)({history:(0,h.LA)("/"),routes:S});var D=J,U=(r(5524),r(7768)),Q=r(3744),V=r(5741);async function Y(){const e=await r.e(53).then(r.t.bind(r,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var $=r(4458);(0,$.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),Y();const z=(0,U.$N)({components:Q,directives:V});(0,t.Ef)(d).use(D).use(z).mount("#app")}},n={};function r(t){var u=n[t];if(void 0!==u)return u.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(n,t,u,a){if(!t){var o=1/0;for(c=0;c<e.length;c++){t=e[c][0],u=e[c][1],a=e[c][2];for(var l=!0,i=0;i<t.length;i++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](t[i])}))?t.splice(i--,1):(l=!1,a<o&&(o=a));if(l){e.splice(c--,1);var s=u();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,u,a]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){var e,n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(t,u){if(1&u&&(t=this(t)),8&u)return t;if("object"===typeof t&&t){if(4&u&&t.__esModule)return t;if(16&u&&"function"===typeof t.then)return t}var a=Object.create(null);r.r(a);var o={};e=e||[null,n({}),n([]),n(n)];for(var l=2&u&&t;"object"==typeof l&&!~e.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((function(e){o[e]=function(){return t[e]}}));return o["default"]=function(){return t},r.d(a,o),a}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(n,t){return r.f[t](e,n),n}),[]))}}(),function(){r.u=function(e){return"js/webfontloader.d56982b7.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="bingo-game:";r.l=function(t,u,a,o){if(e[t])e[t].push(u);else{var l,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+a){l=d;break}}l||(i=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",n+a),l.src=t),e[t]=[u];var h=function(n,r){l.onerror=l.onload=null,clearTimeout(f);var u=e[t];if(delete e[t],l.parentNode&&l.parentNode.removeChild(l),u&&u.forEach((function(e){return e(r)})),n)return n(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),i&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={524:0};r.f.j=function(n,t){var u=r.o(e,n)?e[n]:void 0;if(0!==u)if(u)t.push(u[2]);else{var a=new Promise((function(r,t){u=e[n]=[r,t]}));t.push(u[2]=a);var o=r.p+r.u(n),l=new Error,i=function(t){if(r.o(e,n)&&(u=e[n],0!==u&&(e[n]=void 0),u)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,u[1](l)}};r.l(o,i,"chunk-"+n,n)}},r.O.j=function(n){return 0===e[n]};var n=function(n,t){var u,a,o=t[0],l=t[1],i=t[2],s=0;if(o.some((function(n){return 0!==e[n]}))){for(u in l)r.o(l,u)&&(r.m[u]=l[u]);if(i)var c=i(r)}for(n&&n(t);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},t=self["webpackChunkbingo_game"]=self["webpackChunkbingo_game"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(5867)}));t=r.O(t)})();
//# sourceMappingURL=app.0c21c0dd.js.map