(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we=globalThis,lt=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),_t=new WeakMap;let Kt=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(lt&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=_t.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&_t.set(t,e))}return e}toString(){return this.cssText}};const Hr=r=>new Kt(typeof r=="string"?r:r+"",void 0,ct),g=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Kt(t,r,ct)},Fr=(r,e)=>{if(lt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=we.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},wt=lt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Hr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qr,defineProperty:Br,getOwnPropertyDescriptor:Gr,getOwnPropertyNames:Vr,getOwnPropertySymbols:Wr,getPrototypeOf:Kr}=Object,L=globalThis,$t=L.trustedTypes,Jr=$t?$t.emptyScript:"",Ye=L.reactiveElementPolyfillSupport,oe=(r,e)=>r,xe={toAttribute(r,e){switch(e){case Boolean:r=r?Jr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},dt=(r,e)=>!qr(r,e),Et={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Et){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Br(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=Gr(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Et}static _$Ei(){if(this.hasOwnProperty(oe("elementProperties")))return;const e=Kr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe("properties"))){const t=this.properties,s=[...Vr(t),...Wr(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(wt(i))}else e!==void 0&&t.push(wt(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:xe).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:xe;this._$Em=i,this[i]=l.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??dt)(this[e],t))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$E_)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$Ej()}catch(i){throw e=!1,this._$Ej(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[oe("elementProperties")]=new Map,K[oe("finalized")]=new Map,Ye==null||Ye({ReactiveElement:K}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=globalThis,Ce=ne.trustedTypes,Pt=Ce?Ce.createPolicy("lit-html",{createHTML:r=>r}):void 0,Jt="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,Yt="?"+I,Yr=`<${Yt}>`,B=document,le=()=>B.createComment(""),ce=r=>r===null||typeof r!="object"&&typeof r!="function",Xt=Array.isArray,Xr=r=>Xt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Xe=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,Ct=/>/g,F=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,Ot=/"/g,Qt=/^(?:script|style|textarea|title)$/i,Qr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=Qr(1),Q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),St=new WeakMap,q=B.createTreeWalker(B,129);function Zt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pt!==void 0?Pt.createHTML(e):e}const Zr=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":"",n=ie;for(let l=0;l<t;l++){const a=r[l];let c,h,u=-1,p=0;for(;p<a.length&&(n.lastIndex=p,h=n.exec(a),h!==null);)p=n.lastIndex,n===ie?h[1]==="!--"?n=xt:h[1]!==void 0?n=Ct:h[2]!==void 0?(Qt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=F):h[3]!==void 0&&(n=F):n===F?h[0]===">"?(n=i??ie,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?F:h[3]==='"'?Ot:At):n===Ot||n===At?n=F:n===xt||n===Ct?n=ie:(n=F,i=void 0);const f=n===F&&r[l+1].startsWith("/>")?" ":"";o+=n===ie?a+Yr:u>=0?(s.push(c),a.slice(0,u)+Jt+a.slice(u)+I+f):a+I+(u===-2?l:f)}return[Zt(r,o+(r[t]||"<?>")+(e===2?"</svg>":"")),s]};class de{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,n=0;const l=e.length-1,a=this.parts,[c,h]=Zr(e,t);if(this.el=de.createElement(c,s),q.currentNode=this.el.content,t===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=q.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Jt)){const p=h[n++],f=i.getAttribute(u).split(I),H=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:H[2],strings:f,ctor:H[1]==="."?ts:H[1]==="?"?rs:H[1]==="@"?ss:Ke}),i.removeAttribute(u)}else u.startsWith(I)&&(a.push({type:6,index:o}),i.removeAttribute(u));if(Qt.test(i.tagName)){const u=i.textContent.split(I),p=u.length-1;if(p>0){i.textContent=Ce?Ce.emptyScript:"";for(let f=0;f<p;f++)i.append(u[f],le()),q.nextNode(),a.push({type:2,index:++o});i.append(u[p],le())}}}else if(i.nodeType===8)if(i.data===Yt)a.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(I,u+1))!==-1;)a.push({type:7,index:o}),u+=I.length-1}o++}}static createElement(e,t){const s=B.createElement("template");return s.innerHTML=e,s}}function Z(r,e,t=r,s){var n,l;if(e===Q)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const o=ce(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=Z(r,i._$AS(r,e.values),i,s)),e}class es{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??B).importNode(t,!0);q.currentNode=i;let o=q.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new fe(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new is(o,this,e)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=q.nextNode(),n++)}return q.currentNode=B,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class fe{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),ce(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Xr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==v&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.$(B.createTextNode(e)),this._$AH=e}g(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=de.createElement(Zt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new es(i,this),l=n.u(this.options);n.p(t),this.$(l),this._$AH=n}}_$AC(e){let t=St.get(e.strings);return t===void 0&&St.set(e.strings,t=new de(e)),t}T(e){Xt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new fe(this.k(le()),this.k(le()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Ke{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(e,t=this,s,i){const o=this.strings;let n=!1;if(o===void 0)e=Z(this,e,t,0),n=!ce(e)||e!==this._$AH&&e!==Q,n&&(this._$AH=e);else{const l=e;let a,c;for(e=o[0],a=0;a<o.length-1;a++)c=Z(this,l[s+a],t,a),c===Q&&(c=this._$AH[a]),n||(n=!ce(c)||c!==this._$AH[a]),c===v?e=v:e!==v&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.O(e)}O(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ts extends Ke{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===v?void 0:e}}class rs extends Ke{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class ss extends Ke{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??v)===Q)return;const s=this._$AH,i=e===v&&s!==v||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==v&&(s===v||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class is{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const Qe=ne.litHtmlPolyfillSupport;Qe==null||Qe(de,fe),(ne.litHtmlVersions??(ne.litHtmlVersions=[])).push("3.1.1");const os=(r,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new fe(e.insertBefore(le(),o),o,void 0,t??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let y=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=os(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Q}};var Wt;y._$litElement$=!0,y.finalized=!0,(Wt=globalThis.litElementHydrateSupport)==null||Wt.call(globalThis,{LitElement:y});const Ze=globalThis.litElementPolyfillSupport;Ze==null||Ze({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:dt},as=(r=ns,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(t.name,r),s==="accessor"){const{name:n}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,a,r)},init(l){return l!==void 0&&this.C(n,void 0,r),l}}}if(s==="setter"){const{name:n}=t;return function(l){const a=this[n];e.call(this,l),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function m(r){return(e,t)=>typeof t=="object"?as(r,e,t):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(r){return m({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let er=class extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Mt=class{constructor(e,t,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=e,t.context!==void 0){const o=t;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=t,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new er(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ls{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const s=t||!Object.is(e,this.o);this.o=e,s&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},e!==void 0&&(this.value=e)}addCallback(e,t,s){if(!s)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let cs=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}};class kt extends ls{constructor(e,t,s){var i,o;super(t.context!==void 0?t.initialValue:s),this.onContextRequest=n=>{const l=n.composedPath()[0];n.context===this.context&&l!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,l,n.subscribe))},this.onProviderRequest=n=>{const l=n.composedPath()[0];if(n.context!==this.context||l===this.host)return;const a=new Set;for(const[c,{consumerHost:h}]of this.subscriptions)a.has(c)||(a.add(c),h.dispatchEvent(new er(this.context,c,!0)));n.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new cs(this.context))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function tr({context:r}){return(e,t)=>{const s=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){s.set(this,new kt(this,{context:r}))}),{get(){return e.get.call(this)},set(i){var o;return(o=s.get(this))==null||o.setValue(i),e.set.call(this,i)},init(i){var o;return(o=s.get(this))==null||o.setValue(i),i}};{e.constructor.addInitializer(n=>{s.set(n,new kt(n,{context:r}))});const i=Object.getOwnPropertyDescriptor(e,t);let o;if(i===void 0){const n=new WeakMap;o={get:function(){return n.get(this)},set:function(l){s.get(this).setValue(l),n.set(this,l)},configurable:!0,enumerable:!0}}else{const n=i.set;o={...i,set:function(l){s.get(this).setValue(l),n==null||n.call(this,l)}}}return void Object.defineProperty(e,t,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rr({context:r,subscribe:e}){return(t,s)=>{typeof s=="object"?s.addInitializer(function(){new Mt(this,{context:r,callback:i=>{this[s.name]=i},subscribe:e})}):t.constructor.addInitializer(i=>{new Mt(i,{context:r,callback:o=>{i[s]=o},subscribe:e})})}}let ds=class extends y{constructor(e,t,s){super(),this.updateFn=e,this.getModel=t,this.setModel=s,this.addEventListener("mvu:message",i=>{const o=i.detail;console.log("Got message: ",o),this.receive(o)})}receive(e){const t=this.updateFn(this.getModel(),e),s=t;typeof(s==null?void 0:s.then)=="function"?s.then(i=>{const o=i(this.getModel());console.log("Updating model in Promise:",o),this.setModel(o)}):(console.log("Updating model:",t),this.setModel(t))}},hs=class extends y{dispatchMessage(e,t=this){const s=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:e});t.dispatchEvent(s)}};class us{constructor(){this._handlers=new Map,this.update=this._update.bind(this)}addMessage(e,t){console.log("Message added for dispatch:",e),this._handlers.set(e,t)}_update(e,t){const{type:s}=t,i=this._handlers.get(s);return i?i(t,e):e}}function ps(r){return e=>Object.assign({},e,r)}function ms(r){return r}const fs=window.location.origin,gs="/api",bs="http://localhost:3000/api",Ae="AUTH_TOKEN",M="USER_EMAIL_KEY",U=class U{constructor(){this.authenticated=!1,this.email="random@calpoly.edu",this.signOut=()=>{}}static deauthenticate(e){const t=new U;return console.log("Deauthenticating",e,U._theUser),e===U._theUser&&(localStorage.removeItem(Ae),localStorage.removeItem(M),U._theUser=t),t}};U._theUser=new U;let S=U;class Y extends S{constructor(e,t){super();const i=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(window.atob(i).split("").map(function(l){return"%"+("00"+l.charCodeAt(0).toString(16)).slice(-2)}).join("")),n=JSON.parse(o);console.log("Token payload",n),this.token=e,this.authenticated=!0,this.email=n.email,this.signOut=t}static authenticate(e,t){const s=new Y(e,t);return S._theUser=s,localStorage.setItem(Ae,e),s}static authenticateFromLocalStorage(e){const t=localStorage.getItem(Ae);return t?Y.authenticate(t,e):S._theUser}}class w{constructor(e){this._base=gs,this.json=e}base(e=""){return this._base=e,this}get(e){return fetch(this._url(e),{headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}post(e){return fetch(this._url(e),{method:"POST",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}put(e){return fetch(this._url(e),{method:"PUT",headers:this._headers(),body:this.json&&JSON.stringify(this.json)})}_headers(){const e=this.json!==void 0,t=S._theUser.authenticated,s={"Content-Type":"application/json"};if(t){const o={Authorization:`Bearer ${S._theUser.token}`};return e?{...s,...o}:o}else return e?{...s}:void 0}_url(e){return`${fs}${this._base}${e}`}}class te extends w{constructor(){super(void 0)}}function sr(r){return`${bs}${r}`}var vs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,ir=(r,e,t,s)=>{for(var i=s>1?void 0:s?ys(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&vs(e,t,i),i};const or="ClubModel",_s={user:new S};class nr extends ds{constructor(e){super(e,()=>this.model,t=>this.model=t),this.model=_s}}ir([tr({context:or}),D()],nr.prototype,"model",2);class $ extends hs{getFromModel(e){if(this.requestUpdate(),this._model)return this._model[e]}}ir([rr({context:or,subscribe:!0}),m({attribute:!1})],$.prototype,"_model",2);const ws=()=>new us,E=ps,P=ms;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=r=>r??v;var $s=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,ar=(r,e,t,s)=>{for(var i=s>1?void 0:s?Es(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&$s(e,t,i),i};let Oe=class extends y{constructor(){super(...arguments),this.on=!1}render(){const r=localStorage.getItem("dark-mode")==="true";return d`
        <label>
            <slot> Label </slot>
            <span class="slider">
                <input type="checkbox"
                @change=${this._handleChange}
                .checked=${r}>
            </span>
        </label>`}_handleChange(r){const e=r.target;this.on=e==null?void 0:e.checked,console.log("Toggling Dark mode",r),localStorage.setItem("dark-mode",String(this.on)),document.body.classList.toggle("dark-mode",this.on)}};Oe.styles=g`
    :host {
      display: block;
    }

    label {
      display: flex;
      align-items: center;
      gap: 2rem;
      line-height: 2em;
    }

    .slider {
      display: inline-block;
      border-radius: 0.75em;
      background-color: var(--color-accent-inverted);
      height: 1.5em;
      width: 2.75em;
      position: relative;
      transition: background-color
      var(--time-transition-control-normal);
    }

    input {
      appearance: none;
      background-color: var(--color-text-heading);
      border-radius: 50%;
      width: 1.25em;
      height: 1.25em;
      vertical-align: center;
      position: relative;
      left: 0;
      transition: left var(--time-transition-control-normal);
    }

    input:checked {
      left: 1.5em;
    }

  `;ar([m({reflect:!0,type:Boolean})],Oe.prototype,"on",2);Oe=ar([b("toggle-switch")],Oe);var Ps=Object.defineProperty,xs=Object.getOwnPropertyDescriptor,lr=(r,e,t,s)=>{for(var i=s>1?void 0:s?xs(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ps(e,t,i),i};let Se=class extends y{constructor(){super(),this.customId="id",this.addEventListener("call-modals-close-modal",this.closeModal)}render(){return d`
      <button 
        class="inverted-button"
        @click=${this.openModal}> 
          <slot name="button-name"> Default Action </slot>
      </button>
      <div class="overlay" id="${this.customId}-overlay">
        <div class="modal-content" id="${this.customId}-modal">
          <div class="modal-heading"> 
            <slot name="title"> Default Modal Title </slot>
            <button
              @click=${this.closeModal}
              class="x">
                x
            </button>
          </div>
          <hr class="divider">
          <slot name="content"> Default Modal Content </slot>
        </div>
      </div>
    `}openModal(){var t,s;console.log("Opening modal:",this.customId);const r=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${this.customId}-modal`),e=(s=this.shadowRoot)==null?void 0:s.querySelector(`#${this.customId}-overlay`);r&&e&&(r.style.display="block",e.style.display="block")}closeModal(){var t,s;console.log("Closing modal:",this.customId);const r=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${this.customId}-modal`),e=(s=this.shadowRoot)==null?void 0:s.querySelector(`#${this.customId}-overlay`);r&&e&&(r.style.display="none",e.style.display="none")}};Se.styles=g`
    :host {
      display: flex;
    }

    .divider {
      border: none; 
      border-radius: 1rem;
      height: 0.4rem; 
      background-color: var(--color-accent);
      margin-top: 1rem; 
      margin-bottom: 1.3rem;
      width: 100%;
    }

    .modal-heading {
      font-size: var(--size-type-large-heading);
      font-weight: var(--font-weight-extra-bold);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .inverted-button {
      margin-top: 1rem;
      border-radius: 2rem;
      color: var(--color-text);
      font-weight: var(--font-weight-light-bold);
      border: 0.1rem solid var(--color-accent);
      font-size: var(--size-type-small-heading);
      padding: 0.5rem;
      background-color: var(--color-background-page);
      cursor: pointer;
    }

    .inverted-button:hover, .action-button:hover {
      opacity: 0.9;
      color: var(--color-accent-light);
      border-color: var(--color-accent);
      fill: var(--color-accent-light);
    }

    .x {
      float: right;
      font-size: var(--size-type-large-heading);
      color: grey;
      background: none;
      border-width: 0rem;
      border-radius: .5rem;
      cursor: pointer;
      align-items: center;
    }

    .x:hover {
      background: none;
      border-width: 0rem;
      background-color: rgba(0,0,0,0.15);
    }

    .modal-content {
      padding: 1.3rem;
      display: none; /* Hidden by default */
      background-color: var(--color-modal-background);
      position: absolute;
      border-radius: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
      min-width: 25rem;
      height: max-content;
      justify-content: center;
      align-items: center;
      z-index: 1002; /* Will cause this to pop over all other elements */
      overflow: auto;
    }

    .overlay {
      display: none; /* Hidden by default */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.75);
      z-index: 1001; /* Puts overlay above other items, but below modal */
    }
  `;lr([m({type:String})],Se.prototype,"customId",2);Se=lr([b("custom-modal")],Se);var Cs=Object.defineProperty,As=Object.getOwnPropertyDescriptor,cr=(r,e,t,s)=>{for(var i=s>1?void 0:s?As(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Cs(e,t,i),i};let Me=class extends y{constructor(){super(...arguments),this.alertVisible=!0}render(){return d`
            <div class="alert">
                <span class="closebtn" @click=${this.closeAlert}> &times; </span>
                <slot name="message"> Default Message </slot>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.autoHideAlert()}autoHideAlert(){setTimeout(()=>{this.alertVisible&&this.closeAlert()},6e3)}closeAlert(){this.alertVisible=!1,this.style.display="none",this.requestUpdate()}};Me.styles=g`
        :host {
            display: block;
            margin: 0px;
            position: relative;

        }
        
        .alert {
            z-index: 1002; /* Will cause this to pop over other elements */
            padding: 1rem;
            font-weight: var(--font-weight-extra-bold);
            color: white;
            font-size: var(--size-type-small-heading);
            bottom: 1rem; /* To make alert pop up at the bottom of the screen */
            position: relative;
            background-color:#6f7a5f;
            position: fixed;
            width: 80%;
        }

        .closebtn {
            margin-left: 15px;
            color: white;
            font-weight: bold;
            float: right;
            font-size: 22px;
            line-height: 20px;
            cursor: pointer;
            transition: 0.3s;
        }

        .closebtn:hover {
            color: black;
        }
    `;cr([D()],Me.prototype,"alertVisible",2);Me=cr([b("alert-modal")],Me);var Os=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,ge=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ss(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Os(e,t,i),i};const Ms=r=>d`
    <div class="tag">
        ${r}
    </div>
  `;let ee=class extends y{constructor(){super(...arguments),this.path=""}render(){var r;return this.profile?d`
        <link rel="stylesheet" href="/styles/club-info.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <dl>
            <dt class="subheading"> ${this.profile.name} </dt>
            <br>
            <dt class="small-subheading"> Email </dt>
            <dd> ${this.profile.email} </dd>
            <br>
            <dt class="small-subheading"> Pronouns </dt>
            <dd> ${this.profile.pronouns} </dd>
            <br>
            <dt class="small-subheading"> Major </dt>
            <dd> ${this.profile.major} </dd>
            <br>
            <dt class="small-subheading"> Clubs </dt>
            <dd>
                ${(r=this.profile.clubs)==null?void 0:r.map(Ms)}
            </dd>
        </dl>
    `:d`<div>No content able to be found </div>`}_fetchData(r){fetch(sr(r)).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e)})}connectedCallback(){this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(r,e,t){r==="path"&&e!==t&&e&&this._fetchData(t),super.attributeChangedCallback(r,e,t)}};ee.styles=g`
    :host {
      display: block;
    }
  `;ge([m()],ee.prototype,"path",2);ge([D()],ee.prototype,"profile",2);ee=ge([b("user-profile")],ee);let ke=class extends ee{constructor(){super(...arguments),this.originalProfile=this.profile}render(){var r;return this.profile?d`<form @submit=${this._handleSubmit}>
      <div class="table-format">
        <label>
          <span> Name </span>
          <input name="name" value=${this.profile.name} />
        </label>
        <label>
          <span> Email </span>
          <input name="email" value=${this.profile.email} />
        </label>
        <label>
          <span> Pronouns </span>
          <select name="pronouns">
            <option value=${X(this.profile.pronouns)}>${this.profile.pronouns}</option>
            <option value="She/her/hers">She/her/hers</option>
            <option value="He/him/his">He/him/his</option>
            <option value="They/them">They/them</option>
            <option value="Prefer not to share">Prefer not to share</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          <span> Major </span>
          <input name="major" value=${X(this.profile.major)} />
        </label>
        <label>
          <span> Clubs </span>
          <input name="clubs" value=${X((r=this.profile.clubs)==null?void 0:r.join(", "))} />
        </label>
      </div>
      <div class="action-button-container">
          <button 
            type="submit"
            class="action-button confirm-button"> 
              Save
          </button>
          <button 
            type="button"
            class="action-button"
            @click=${this.closeModal}> 
              Cancel
          </button>
      </div>
    </form>`:d`<div> </div>`}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e),s=Array.from(t.entries()).map(([o,n])=>n===""?[o]:[o,n]).map(([o,n])=>o==="clubs"?[o,n.split(",").map(l=>l.trim())]:[o,n]),i=Object.fromEntries(s);this._putData(i)}_putData(r){fetch(sr(this.path),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>e.status===200?e.json():null).then(e=>{e&&(this.profile=e,console.log("Sucessfully updated profile"),this.closeModal())}).catch(e=>console.log("Failed to PUT form data",e))}closeModal(){this.dispatchEvent(new CustomEvent("call-modals-close-modal",{detail:{message:"user wants to close edit user profile modal"},bubbles:!0,composed:!0}))}};ke.styles=g`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 1.85rem;
      align-items: center;
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    input, select {
      width: 100%;
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
  }

    .action-button {
      border-radius: 2rem;
      background-color: var(--color-modal-background);
      font-weight: var(--font-weight-light-bold);
      color: var(--color-text);
      border: 0.1rem solid var(--color-accent);
      font-size: var(--size-type-normal-body);
      padding: 0.6rem;
      cursor: pointer;
      margin-right: 0.2rem;
      margin-left: 0.2rem;
      float: right;
    }

    .action-button:hover {
      opacity: 0.9;
      color: var(--color-accent-light);
      border-color: var(--color-accent);
      fill: var(--color-accent-light);
    }

    .confirm-button {
      background-color: var(--color-background-header);
      color: var(--color-text-heading)
    }
    `;ge([D()],ke.prototype,"originalProfile",2);ke=ge([b("user-profile-edit")],ke);var ks=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Rs=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ds(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&ks(e,t,i),i};let tt=class extends ${render(){return d`
            <div> </div>
        `}};tt.styles=g`
        :host {
            display: contents;
        }
    `;tt=Rs([b("blank-view")],tt);function js(r){if(r&&Array.isArray(r))return r.map(e=>Ts(e.name,e.description))}function Ts(r,e){return d`
        <club-overview-card linkHref="/app/club/${r}">
            <span slot="club-name"> ${r} </span>
            <span slot="club-description"> ${e} </span>
        </club-overview-card>
    `}function ht(r,e){if(r&&Array.isArray(r)&&r.length!==0)return r.map(t=>Us(t,e))}function Us(r,e){console.log("loggging event");const t="/app/event/"+e+"/"+r._id;return d`
        <event-overview-card linkHref=${t}>
            <span slot="name"> ${r.name} </span>
            <span slot="date"> ${dr(r.date)} </span>
            <span slot="time"> ${pt(r.start_time,r.end_time)} </span>
            <span slot="location"> ${r.location} </span>
        </event-overview-card>
    `}function dr(r){const e={year:"numeric",month:"long",day:"numeric"};return new Date(r).toLocaleDateString("en-US",e)}function ut(r){return Object.keys(r).length!==0}function pt(r,e){const[t,s]=e.split(":"),[i,o]=r.split(":"),n=t%12||12,l=i%12||12,a=t>=12?"PM":"AM",c=i>=12?"PM":"AM";return a===c?`${l}:${o} - ${n}:${s} ${a} PST`:`${l}:${o} ${c} - ${n}:${s} ${a} PST`}var Is=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Ns=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ls(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Is(e,t,i),i};let rt=class extends ${render(){return d`
            <link rel="stylesheet" href="/styles/club-info.css" />
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <div class="center">
                <div class="extra-large"> 
                    Uh Oh! 404 Error
                </div>
                <div class="slight-large"> 
                    The page you were looking for doesn't exist.
                </div>
                <!-- <div> -->
                    <svg class="large">
                        <use href="/icons/user-interface.svg#icon-404" />
                    </svg>
                <!-- </div> -->
                <div class="slight-large">
                    You might have typed in the wrong address.
                    <a href="/app" class="homepage">
                        Return to the home page.
                    </a>
                </div>
            </div>`}};rt.styles=g`
        :host {
            display: contents;
        }

        .large {
            margin-top: 4rem;
            margin-bottom: 2rem;
            width: 100%;
            height: 100%;
            fill: var(--color-text);
        }

        .center {
            color: var(--color-text);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .extra-large {
            margin-top: 4.5rem;
            font-size: 5rem;
            font-weight: var(--font-weight-extra-bold);
        }

        .slight-large {
            font-size: 2rem;
            font-weight: var(--font-weight-light);
        }

        .homepage {
            color: var(--color-link);
            text-decoration: underline;
            font-style: italic;
            margin: 0;
            font-size: 2rem;
            font-weight: var(--font-weight-extreme-bold);
        }
    `;rt=Ns([b("no-content")],rt);var zs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,mt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Hs(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&zs(e,t,i),i};const Fs=r=>d`
    <a href="/app/club/${r}">
      <div class="tag">
            ${r}
      </div>
    </a>
  `;let he=class extends ${get profile(){return this.using||{}}render(){var r;return this.profile&&ut(this.profile)?d`
        <link rel="stylesheet" href="/styles/club-info.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <dl>
            <dt class="subheading"> ${this.profile.name} </dt>
            <br>
            <dt class="small-subheading"> Email </dt>
            <dd> ${this.profile.email} </dd>
            <br>
            <dt class="small-subheading"> Pronouns </dt>
            <dd> ${this.profile.pronouns} </dd>
            <br>
            <dt class="small-subheading"> Major </dt>
            <dd> ${this.profile.major} </dd>
            <br>
            <dt class="small-subheading"> Clubs </dt>
            <dd>
                ${(r=this.profile.clubs)==null?void 0:r.map(Fs)}
            </dd>
        </dl>
    `:d`<no-content> </no-content>`}};he.styles=g`
    :host {
      display: block;
    }
  `;mt([m({attribute:!1})],he.prototype,"using",2);he=mt([b("user-profile-2")],he);let st=class extends he{render(){var r;return this.profile?d`<form @submit=${this._handleSubmit}>
      <div class="table-format">
        <label>
          <span class="with-icon"> Name 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
          <input class='disabled' disabled name="name" value=${this.profile.name||""} />
        </label>
        <label>
          <span class="with-icon"> Email 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
          <input class='disabled' name="email" disabled value=${this.profile.email||""} />
        </label>
        <label>
          <span> Pronouns </span>
          <select name="pronouns">
            <option value=${X(this.profile.pronouns)}>${this.profile.pronouns}</option>
            <option value="She/her/hers">She/her/hers</option>
            <option value="He/him/his">He/him/his</option>
            <option value="They/them">They/them</option>
            <option value="Prefer not to share">Prefer not to share</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          <span> Major </span>
          <input name="major" value=${X(this.profile.major)} />
        </label>
        <label>
          <span class="with-icon"> Clubs 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
            <textarea class='disabled' disabled name="clubs" rows="3" cols="44" type="text">${X((r=this.profile.clubs)==null?void 0:r.join(", "))}</textarea>
        </label>
      </div>
      <div class="action-button-container">
          <button 
            type="submit"
            class="action-button confirm-button"> 
              Save
          </button>
          <button 
            type="button"
            class="action-button"
            @click=${this.closeModal}> 
              Cancel
          </button>
      </div>
    </form>`:d`<div> </div>`}_handleSubmit(r){var o;r.preventDefault();const e=r.target,t=new FormData(e),s=Array.from(t.entries()).map(([n,l])=>l===""?[n]:[n,l]).map(([n,l])=>n==="clubs"?[n,l.split(",").map(a=>a.trim())]:[n,l]),i=Object.fromEntries(s);console.log("Submitting Form",i),this.dispatchMessage({type:"ProfileSaved",email:((o=this.profile)==null?void 0:o.email)||"",profile:i}),this.closeModal()}closeModal(){this.dispatchEvent(new CustomEvent("call-modals-close-modal",{detail:{message:"user wants to close edit user profile modal"},bubbles:!0,composed:!0}))}};st.styles=g`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 1.85rem;
      align-items: center;
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    input, select, textarea {
      font-family: inherit;
      font-size: inherit;
      width: 100%;
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    .disabled {
      opacity: 0.5;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    select {
        width: 103%;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
    }

    .action-button {
        border-radius: 2rem;
        background-color: var(--color-modal-background);
        font-weight: var(--font-weight-light-bold);
        color: var(--color-text);
        border: 0.1rem solid var(--color-accent);
        font-size: var(--size-type-normal-body);
        padding: 0.6rem;
        cursor: pointer;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        float: right;
    }

    .action-button:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        border-color: var(--color-accent);
        fill: var(--color-accent-light);
    }

    .confirm-button {
        background-color: var(--color-background-header);
        color: var(--color-text-heading)
    }
    `;st=mt([b("user-profile2-edit")],st);function De(r){return r=r||[],Array.isArray(r)?r:[r]}function A(r){return`[Vaadin.Router] ${r}`}function qs(r){if(typeof r!="object")return String(r);const e=Object.prototype.toString.call(r).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}const Re="module",je="nomodule",it=[Re,je];function Dt(r){if(!r.match(/.+\.[m]?js$/))throw new Error(A(`Unsupported type for bundle "${r}": .js or .mjs expected.`))}function hr(r){if(!r||!C(r.path))throw new Error(A('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=r.bundle,t=["component","redirect","bundle"];if(!G(r.action)&&!Array.isArray(r.children)&&!G(r.children)&&!Te(e)&&!t.some(s=>C(r[s])))throw new Error(A(`Expected route config "${r.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(C(e))Dt(e);else if(it.some(s=>s in e))it.forEach(s=>s in e&&Dt(e[s]));else throw new Error(A('Expected route bundle to include either "'+je+'" or "'+Re+'" keys, or both'));r.redirect&&["bundle","component"].forEach(s=>{s in r&&console.warn(A(`Route config "${r.path}" has both "redirect" and "${s}" properties, and "redirect" will always override the latter. Did you mean to only use "${s}"?`))})}function Rt(r){De(r).forEach(e=>hr(e))}function jt(r,e){let t=document.head.querySelector('script[src="'+r+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",r),e===Re?t.setAttribute("type",Re):e===je&&t.setAttribute(je,""),t.async=!0),new Promise((s,i)=>{t.onreadystatechange=t.onload=o=>{t.__dynamicImportLoaded=!0,s(o)},t.onerror=o=>{t.parentNode&&t.parentNode.removeChild(t),i(o)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&s()})}function Bs(r){return C(r)?jt(r):Promise.race(it.filter(e=>e in r).map(e=>jt(r[e],e)))}function ae(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Te(r){return typeof r=="object"&&!!r}function G(r){return typeof r=="function"}function C(r){return typeof r=="string"}function ur(r){const e=new Error(A(`Page not found (${r.pathname})`));return e.context=r,e.code=404,e}const J=new class{};function Gs(r){const e=r.port,t=r.protocol,o=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${o}`}function Tt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r.composedPath?r.composedPath():r.path||[];for(let l=0;l<t.length;l++){const a=t[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||Gs(e))!==window.location.origin)return;const{pathname:i,search:o,hash:n}=e;ae("go",{pathname:i,search:o,hash:n})&&(r.preventDefault(),r&&r.type==="click"&&window.scrollTo(0,0))}const Vs={activate(){window.document.addEventListener("click",Tt)},inactivate(){window.document.removeEventListener("click",Tt)}},Ws=/Trident/.test(navigator.userAgent);Ws&&!G(window.PopStateEvent)&&(window.PopStateEvent=function(r,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(r,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ut(r){if(r.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:s}=window.location;ae("go",{pathname:e,search:t,hash:s})}const Ks={activate(){window.addEventListener("popstate",Ut)},inactivate(){window.removeEventListener("popstate",Ut)}};var re=vr,Js=ft,Ys=ei,Xs=fr,Qs=br,pr="/",mr="./",Zs=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ft(r,e){for(var t=[],s=0,i=0,o="",n=e&&e.delimiter||pr,l=e&&e.delimiters||mr,a=!1,c;(c=Zs.exec(r))!==null;){var h=c[0],u=c[1],p=c.index;if(o+=r.slice(i,p),i=p+h.length,u){o+=u[1],a=!0;continue}var f="",H=r[i],Tr=c[2],Ur=c[3],Ir=c[4],ye=c[5];if(!a&&o.length){var Je=o.length-1;l.indexOf(o[Je])>-1&&(f=o[Je],o=o.slice(0,Je))}o&&(t.push(o),o="",a=!1);var Lr=f!==""&&H!==void 0&&H!==f,Nr=ye==="+"||ye==="*",zr=ye==="?"||ye==="*",vt=f||n,yt=Ur||Ir;t.push({name:Tr||s++,prefix:f,delimiter:vt,optional:zr,repeat:Nr,partial:Lr,pattern:yt?ti(yt):"[^"+T(vt)+"]+?"})}return(o||i<r.length)&&t.push(o+r.substr(i)),t}function ei(r,e){return fr(ft(r,e))}function fr(r){for(var e=new Array(r.length),t=0;t<r.length;t++)typeof r[t]=="object"&&(e[t]=new RegExp("^(?:"+r[t].pattern+")$"));return function(s,i){for(var o="",n=i&&i.encode||encodeURIComponent,l=0;l<r.length;l++){var a=r[l];if(typeof a=="string"){o+=a;continue}var c=s?s[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<c.length;u++){if(h=n(c[u],a),!e[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(u===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=n(String(c),a),!e[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');o+=a.prefix+h;continue}if(a.optional){a.partial&&(o+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return o}}function T(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ti(r){return r.replace(/([=!:$/()])/g,"\\$1")}function gr(r){return r&&r.sensitive?"":"i"}function ri(r,e){if(!e)return r;var t=r.source.match(/\((?!\?)/g);if(t)for(var s=0;s<t.length;s++)e.push({name:s,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return r}function si(r,e,t){for(var s=[],i=0;i<r.length;i++)s.push(vr(r[i],e,t).source);return new RegExp("(?:"+s.join("|")+")",gr(t))}function ii(r,e,t){return br(ft(r,t),e,t)}function br(r,e,t){t=t||{};for(var s=t.strict,i=t.start!==!1,o=t.end!==!1,n=T(t.delimiter||pr),l=t.delimiters||mr,a=[].concat(t.endsWith||[]).map(T).concat("$").join("|"),c=i?"^":"",h=r.length===0,u=0;u<r.length;u++){var p=r[u];if(typeof p=="string")c+=T(p),h=u===r.length-1&&l.indexOf(p[p.length-1])>-1;else{var f=p.repeat?"(?:"+p.pattern+")(?:"+T(p.delimiter)+"(?:"+p.pattern+"))*":p.pattern;e&&e.push(p),p.optional?p.partial?c+=T(p.prefix)+"("+f+")?":c+="(?:"+T(p.prefix)+"("+f+"))?":c+=T(p.prefix)+"("+f+")"}}return o?(s||(c+="(?:"+n+")?"),c+=a==="$"?"$":"(?="+a+")"):(s||(c+="(?:"+n+"(?="+a+"))?"),h||(c+="(?="+n+"|"+a+")")),new RegExp(c,gr(t))}function vr(r,e,t){return r instanceof RegExp?ri(r,e):Array.isArray(r)?si(r,e,t):ii(r,e,t)}re.parse=Js;re.compile=Ys;re.tokensToFunction=Xs;re.tokensToRegExp=Qs;const{hasOwnProperty:oi}=Object.prototype,ot=new Map;ot.set("|false",{keys:[],pattern:/(?:)/});function It(r){try{return decodeURIComponent(r)}catch{return r}}function ni(r,e,t,s,i){t=!!t;const o=`${r}|${t}`;let n=ot.get(o);if(!n){const c=[];n={keys:c,pattern:re(r,c,{end:t,strict:r===""})},ot.set(o,n)}const l=n.pattern.exec(e);if(!l)return null;const a=Object.assign({},i);for(let c=1;c<l.length;c++){const h=n.keys[c-1],u=h.name,p=l[c];(p!==void 0||!oi.call(a,u))&&(h.repeat?a[u]=p?p.split(h.delimiter).map(It):[]:a[u]=p&&It(p))}return{path:l[0],keys:(s||[]).concat(n.keys),params:a}}function yr(r,e,t,s,i){let o,n,l=0,a=r.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(c){if(r===c)return{done:!0};const h=r.__children=r.__children||r.children;if(!o&&(o=ni(a,e,!h,s,i),o))return{done:!1,value:{route:r,keys:o.keys,params:o.params,path:o.path}};if(o&&h)for(;l<h.length;){if(!n){const p=h[l];p.parent=r;let f=o.path.length;f>0&&e.charAt(f)==="/"&&(f+=1),n=yr(p,e.substr(f),t,o.keys,o.params)}const u=n.next(c);if(!u.done)return{done:!1,value:u.value};n=null,l++}return{done:!0}}}}function ai(r){if(G(r.route.action))return r.route.action(r)}function li(r,e){let t=e;for(;t;)if(t=t.parent,t===r)return!0;return!1}function ci(r){let e=`Path '${r.pathname}' is not properly resolved due to an error.`;const t=(r.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function di(r,e){const{route:t,path:s}=e;if(t&&!t.__synthetic){const i={path:s,route:t};if(!r.chain)r.chain=[];else if(t.parent){let o=r.chain.length;for(;o--&&r.chain[o].route&&r.chain[o].route!==t.parent;)r.chain.pop()}r.chain.push(i)}}class ue{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||ai,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Rt(e);const t=[...De(e)];this.root.__children=t}addRoutes(e){return Rt(e),this.root.__children.push(...De(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,C(e)?{pathname:e}:e),s=yr(this.root,this.__normalizePathname(t.pathname),this.baseUrl),i=this.resolveRoute;let o=null,n=null,l=t;function a(c,h=o.value.route,u){const p=u===null&&o.value.route;return o=n||s.next(p),n=null,!c&&(o.done||!li(h,o.value.route))?(n=o,Promise.resolve(J)):o.done?Promise.reject(ur(t)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},t,o.value),di(l,o.value),Promise.resolve(i(l)).then(f=>f!=null&&f!==J?(l.result=f.result||f,l):a(c,h,f)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=ci(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,s=this.constructor.__createUrl(e,t).href;if(s.slice(0,t.length)===t)return s.slice(t.length)}}ue.pathToRegexp=re;const{pathToRegexp:Lt}=ue,Nt=new Map;function _r(r,e,t){const s=e.name||e.component;if(s&&(r.has(s)?r.get(s).push(e):r.set(s,[e])),Array.isArray(t))for(let i=0;i<t.length;i++){const o=t[i];o.parent=e,_r(r,o,o.__children||o.children)}}function zt(r,e){const t=r.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function Ht(r){let e=r.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function hi(r,e={}){if(!(r instanceof ue))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(s,i)=>{let o=zt(t,s);if(!o&&(t.clear(),_r(t,r.root,r.root.__children),o=zt(t,s),!o))throw new Error(`Route "${s}" not found`);let n=Nt.get(o.fullPath);if(!n){let a=Ht(o),c=o.parent;for(;c;){const f=Ht(c);f&&(a=f.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=Lt.parse(a),u=Lt.tokensToFunction(h),p=Object.create(null);for(let f=0;f<h.length;f++)C(h[f])||(p[h[f].name]=!0);n={toPath:u,keys:p},Nt.set(a,n),o.fullPath=a}let l=n.toPath(i,e)||"/";if(e.stringifyQueryParams&&i){const a={},c=Object.keys(i);for(let u=0;u<c.length;u++){const p=c[u];n.keys[p]||(a[p]=i[p])}const h=e.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let Ft=[];function ui(r){Ft.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Ft=r}const pi=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},mi=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};function qt(r,e){return r.classList.add(e),new Promise(t=>{if(pi(r)){const s=r.getBoundingClientRect(),i=`height: ${s.bottom-s.top}px; width: ${s.right-s.left}px`;r.setAttribute("style",`position: absolute; ${i}`),mi(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}const fi=256;function et(r){return r!=null}function gi(r){const e=Object.assign({},r);return delete e.next,e}function x({pathname:r="",search:e="",hash:t="",chain:s=[],params:i={},redirectFrom:o,resolver:n},l){const a=s.map(c=>c.route);return{baseUrl:n&&n.baseUrl||"",pathname:r,search:e,hash:t,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:o,getUrl:(c={})=>Ee(O.pathToRegexp.compile(wr(a))(Object.assign({},i,c)),n)}}function Bt(r,e){const t=Object.assign({},r.params);return{redirect:{pathname:e,from:r.pathname,params:t}}}function bi(r,e){e.location=x(r);const t=r.chain.map(s=>s.route).indexOf(r.route);return r.chain[t].element=e,e}function $e(r,e,t){if(G(r))return r.apply(t,e)}function Gt(r,e,t){return s=>{if(s&&(s.cancel||s.redirect))return s;if(t)return $e(t[r],e,t)}}function vi(r,e){if(!Array.isArray(r)&&!Te(r))throw new Error(A(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${r}`));e.__children=[];const t=De(r);for(let s=0;s<t.length;s++)hr(t[s]),e.__children.push(t[s])}function _e(r){if(r&&r.length){const e=r[0].parentNode;for(let t=0;t<r.length;t++)e.removeChild(r[t])}}function Ee(r,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(r.replace(/^\//,""),t).pathname:r}function wr(r){return r.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class O extends ue{constructor(e,t){const s=document.head.querySelector("base"),i=s&&s.getAttribute("href");super([],Object.assign({baseUrl:i&&ue.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=n=>this.__resolveRoute(n);const o=O.NavigationTrigger;O.setTriggers.apply(O,Object.keys(o).map(n=>o[n])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=x({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let s=Promise.resolve();G(t.children)&&(s=s.then(()=>t.children(gi(e))).then(o=>{!et(o)&&!G(t.children)&&(o=t.children),vi(o,t)}));const i={redirect:o=>Bt(e,o),component:o=>{const n=document.createElement(o);return this.__createdByRouter.set(n,!0),n}};return s.then(()=>{if(this.__isLatestRender(e))return $e(t.action,[e,i],t)}).then(o=>{if(et(o)&&(o instanceof HTMLElement||o.redirect||o===J))return o;if(C(t.redirect))return i.redirect(t.redirect);if(t.bundle)return Bs(t.bundle).then(()=>{},()=>{throw new Error(A(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(o=>{if(et(o))return o;if(C(t.component))return i.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const s=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},C(e)?{pathname:e}:e,{__renderId:s});return this.ready=this.resolve(i).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const n=this.__previousContext;if(o===n)return this.__updateBrowserHistory(n,!0),this.location;if(this.location=x(o),t&&this.__updateBrowserHistory(o,s===1),ae("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,n),this.__previousContext=o,this.location;this.__addAppearingContent(o,n);const l=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,n),l.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(s===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(i),_e(this.__outlet&&this.__outlet.children),this.location=x(Object.assign(i,{resolver:this})),ae("error",Object.assign({router:this,error:o},i)),o}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(s=>{const o=s!==t?s:e,l=Ee(wr(s.chain),s.resolver)===s.pathname,a=(c,h=c.route,u)=>c.next(void 0,h,u).then(p=>p===null||p===J?l?c:h.parent!==null?a(c,h.parent,p):p:p);return a(s).then(c=>{if(c===null||c===J)throw ur(o);return c&&c!==J&&c!==s?this.__fullyResolveChain(o,c):this.__amendWithOnBeforeCallbacks(s)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(bi(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(s=>this.__findComponentContextAfterAllRedirects(s)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(A(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${qs(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},s=t.chain||[],i=e.chain;let o=Promise.resolve();const n=()=>({cancel:!0}),l=a=>Bt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,s.length){for(let a=0;a<Math.min(s.length,i.length)&&!(s[a].route!==i[a].route||s[a].path!==i[a].path&&s[a].element!==i[a].element||!this.__isReusableElement(s[a].element,i[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=i.length===s.length&&e.__divergedChainIndex==i.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=i.length-1;a>=0;a--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:n},s[a]);for(let a=0;a<i.length;a++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:n,redirect:l},i[a]),s[a].element.location=x(e,s[a].route)}else for(let a=s.length-1;a>=e.__divergedChainIndex;a--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:n},s[a])}if(!e.__skipAttach)for(let a=0;a<i.length;a++)a<e.__divergedChainIndex?a<s.length&&s[a].element&&(s[a].element.location=x(e,s[a].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:n,redirect:l},i[a]),i[a].element&&(i[a].element.location=x(e,i[a].route)));return o.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,s,i){const o=x(t);return e.then(n=>{if(this.__isLatestRender(t))return Gt("onBeforeLeave",[o,s,this],i.element)(n)}).then(n=>{if(!(n||{}).redirect)return n})}__runOnBeforeEnterCallbacks(e,t,s,i){const o=x(t,i.route);return e.then(n=>{if(this.__isLatestRender(t))return Gt("onBeforeEnter",[o,s,this],i.element)(n)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,s){if(t>fi)throw new Error(A(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:s})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(A(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:s=""},i){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==s){const o=i?"replaceState":"pushState";window.history[o](null,document.title,e+t+s),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let s=this.__outlet;for(let i=0;i<e.__divergedChainIndex;i++){const o=t&&t.chain[i].element;if(o)if(o.parentNode===s)e.chain[i].element=o,s=o;else break}return s}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const s=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(s.children).filter(o=>this.__addedByRouter.get(o)&&o!==e.result);let i=s;for(let o=e.__divergedChainIndex;o<e.chain.length;o++){const n=e.chain[o].element;n&&(i.appendChild(n),this.__addedByRouter.set(n,!0),i===s&&this.__appearingContent.push(n),i=n)}}__removeDisappearingContent(){this.__disappearingContent&&_e(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(_e(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let s=t.chain.length-1;s>=e.__divergedChainIndex&&this.__isLatestRender(e);s--){const i=t.chain[s].element;if(i)try{const o=x(e);$e(i.onAfterLeave,[o,{},t.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&_e(i.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const s=e.chain[t].element||{},i=x(e,e.chain[t].route);$e(s.onAfterEnter,[i,{},e.resolver],s)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],s=(this.__appearingContent||[])[0],i=[],o=e.chain;let n;for(let l=o.length;l>0;l--)if(o[l-1].route.animate){n=o[l-1].route.animate;break}if(t&&s&&n){const l=Te(n)&&n.leave||"leaving",a=Te(n)&&n.enter||"entering";i.push(qt(t,l)),i.push(qt(s,a))}return Promise.all(i).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:s,hash:i}=e?e.detail:window.location;C(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:s,hash:i},!0))}static setTriggers(...e){ui(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=hi(this)),Ee(this.__urlForName(e,t),this)}urlForPath(e,t){return Ee(O.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:s,hash:i}=C(e)?this.__createUrl(e,"http://a"):e;return ae("go",{pathname:t,search:s,hash:i})}}const yi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Pe=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function _i(){function r(){return!0}return $r(r)}function wi(){try{return $i()?!0:Ei()?Pe?!Pi():!_i():!1}catch{return!1}}function $i(){return localStorage.getItem("vaadin.developmentmode.force")}function Ei(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Pi(){return!!(Pe&&Object.keys(Pe).map(e=>Pe[e]).filter(e=>e.productionMode).length>0)}function $r(r,e){if(typeof r!="function")return;const t=yi.exec(r.toString());if(t)try{r=new Function(t[1])}catch(s){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",s)}return r(e)}window.Vaadin=window.Vaadin||{};const Vt=function(r,e){if(window.Vaadin.developmentMode)return $r(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=wi());function xi(){}const Ci=function(){if(typeof Vt=="function")return Vt(xi)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ci();O.NavigationTrigger={POPSTATE:Ks,CLICK:Vs};var Ai=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,j=(r,e,t,s)=>{for(var i=s>1?void 0:s?Oi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ai(e,t,i),i};let Er="auth",R=class extends y{constructor(){super(...arguments),this.currentPage="login",this.loginStatus=0,this.errorMessage="",this.isSuccess=!1,this.user=Y.authenticateFromLocalStorage(()=>this._signOut()),this.passwordVisible=!1}isAuthenticated(){return this.user.authenticated}shouldRenderLogin(){return this.currentPage==="login"}shouldRenderAccountCreated(){return this.currentPage==="accountCreated"}shouldRenderSignup(){return this.currentPage==="signup"}getClassnameForPage(r){return this.currentPage===r?"page active":"page"}render(){return d`
            ${this.isAuthenticated()?"":this.renderAuthentication()}          
            <slot></slot>
        `}renderAuthentication(){return this.isAuthenticated()||O.go("/"),d`
            <link rel="stylesheet" href="/styles/club-info.css" />
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <div class="authentication-container">
                <div class="gold-strip"> </div>
                <div class="heading"> Cal Poly Clubs </div>
                <div class="pages-container"> 
                    <div class=${this.getClassnameForPage("login")} @click=${this.handleChange("login")}>
                        Log In
                    </div>
                    <div class=${this.getClassnameForPage("signup")} @click=${this.handleChange("signup")}>
                        Sign Up
                    </div>
                </div> 
                ${this.shouldRenderLogin()?this.renderLogin():""}
                ${this.shouldRenderSignup()?this.renderSignup():""}
            </div>        
        `}renderLogin(){return d`
            <form id="login" 
                @submit=${this.handleLogin}
                @change=${()=>{this.errorMessage="",this.isSuccess=!1}}>
                <label class="field-entry">
                    <span class="field-title"> Cal Poly Email </span>
                    <input
                        class="field-input"
                        type="email"
                        name="email"
                    />
                </label>
                <label class="field-entry">
                    <span class="field-title"> Password 
                        <svg class="password-icon" @click=${this.togglePassword}>
                            <use href=${this.getTogglePassIcon()} />
                        </svg>
                      </span>
                    <input
                        class="field-input"
                        name="password"   
                        id="id_password"   
                        type="${this.passwordVisible?"text":"password"}"
                    >                
                </label>
                ${this.errorMessage?d`<render-error .success=${!1}> ${this.errorMessage} </render-error>`:""}
                <input
                    class="login-button"
                    id="loginButton"
                    type="submit"
                    value="Login"
                />
            </form>
        `}renderSignup(){return d`
            <form id="signup" 
            @submit=${this.handleSignup}
            @change=${()=>{this.errorMessage="",this.isSuccess=!1}}>
                <label class="field-entry-2">
                    <span class="field-titl-2"> Name </span>
                    <input
                        class="field-input"
                        type="text"
                        name="name"
                        required
                    />
                </label>
                <label class="field-entry-2">
                    <span class="field-title-2"> Cal Poly Email </span>
                    <input
                        class="field-input"
                        type="email"
                        name="email"
                        required
                    />
                </label>
                <label class="field-entry-2">
                    <span class="field-title-2"> Password 
                        <svg class="password-icon" @click=${this.togglePassword}>
                            <use href=${this.getTogglePassIcon()} />
                        </svg>
                    </span>
                    <input
                        class="field-input"
                        type=${this.passwordVisible?"text":"password"}
                        name="password"  
                        required      
                    />
                </label>
                ${this.errorMessage?d`<render-error .isSuccess=${!1}> ${this.errorMessage} </render-error>`:""}
                ${this.isSuccess?d`
                    <render-error .isSuccess=${!0}> 
                        Sucessfully created account. Go to 
                            <a 
                                class='active'
                                @click=${this.handleChange("login")}
                            > 
                                log in 
                            </a>
                    </render-error>`:""}
                <input
                    class="signup-button"
                    id="signupButton"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        `}handleChange(r){return()=>{this.currentPage=r,this.errorMessage="",this.requestUpdate(),console.log(`Page changed to: ${this.currentPage}`)}}_signOut(){this.user=S.deauthenticate(this.user),document.location.reload()}_dispatchUserLoggedIn(r){const e=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"UserLoggedIn",user:r}});this.dispatchEvent(e);const t=new CustomEvent("mvu:message",{bubbles:!0,composed:!0,detail:{type:"GetClubSummaries"}});this.dispatchEvent(t)}getTogglePassIcon(){return this.passwordVisible?"/icons/user-interface.svg#password-visble":"/icons/user-interface.svg#password-hidden"}togglePassword(){this.passwordVisible=!this.passwordVisible}handleLogin(r){r.preventDefault();const e=r.target,t=new FormData(e),s=Object.fromEntries(t);this.login(s,s.email)}login(r,e){new w(r).base().post("/login").then(s=>{if(s.status===200)return console.log("Successfully logged in"),s.json();s.status===401?(console.log("Failed to login, invalid credentials"),this.errorMessage="Failed to login. Invalid credentials"):(console.log("Failed to login. Internal Server Error."),this.errorMessage="Failed to login. Internal Server Error")}).then(s=>{if(s){console.log("Authentication:",s.token);const i=Y.authenticate(s.token,()=>this._signOut());this.user=Y.authenticate(s.token,()=>this._signOut()),localStorage.setItem(M,e),O.go("/app"),this._dispatchUserLoggedIn(i),this.requestUpdate()}})}handleSignup(r){r.preventDefault();const e=r.target,t=new FormData(e),s=Object.fromEntries(t);this.signup(s)}signup(r){new w(r).base().post("/signup").then(async t=>{if(t.status===201)return console.log("Successfully registered new account"),this.isSuccess=!0,t.json();console.log("Failed to create new account."),this.errorMessage=await t.text()}).then(t=>{console.log("Registration:",t)})}};R.styles=g`
        :host {
            display: block;
        }

        svg.password-icon {
            right: 3rem;
            font-weight: var(--font-weight-extra-bold);
            width: 2rem;
            height: 1.5rem;
            fill: var(--color-accent);
            position: absolute;
            margin-top: 2.2rem;
        }

        .authentication-container {
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
            box-sizing: border-box; // Padding and border included in the element's total width and height
            display: table-cell;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 26rem;
            position: absolute;
            height: 28rem;
        }

        .heading {
            font-size: 2rem;
            font-weight: var(--font-weight-extra-bold);
            margin-top: 3rem;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: center;
        }

        .pages-container {
            font-size: var(--size-type-smallest-body);
            display: inline-flex;
            margin-bottom: 1.3rem;
            display: flex;
            justify-content: center;
        }

        .gold-strip {
            padding-left: 0rem;
            width: 26rem;
            height: 3%;
            background-color: var(--color-background-header);
        }

        .page {
            margin: 0rem 1.75rem;
            cursor: pointer;
        }

        .page.active {
            font-weight: var(--font-weight-extreme-bold);
            text-decoration: underline;
        }

        .active {
            font-weight: var(--font-weight-extreme-bold);
            text-decoration: underline;
            cursor: pointer;
        }

        #login, #signup {
            padding: 0 2rem;
            margin-top: 0rem;
            margin: 0.9rem;
            box-sizing: border-box;
        }

        .login-button {
            box-sizing: border-box;
            display: block;
            bottom: 2.7rem;
            position: fixed;
            width: 77.8%;
            padding: 0.6rem;
            border: none;
            background-color: var(--color-background-header);
            color: white;
            font-weight: var(--font-weight-extra-bold);
        }

        .signup-button {
            box-sizing: border-box;
            display: block;
            bottom: 1rem;
            position: fixed;
            width: 77.8%;
            padding: 0.6rem;
            border: none;
            background-color: var(--color-background-header);
            color: white;
            font-weight: var(--font-weight-extra-bold);
        }

        .login-button:hover, .signup-button:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
            cursor: pointer;
        }

        .error-message {
            color: red;
            font-size: var(--size-type-small-body);
            padding-bottom: 0.6rem;
        }

        .field-entry {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .field-entry-2 {
            padding-bottom: 0.6rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .field-title {
            display: block;
            padding-bottom: 0.3rem;
            font-weight: var(--font-weight-light-bold);
            font-size: var(--size-type-small-body);
        }

        .field-title-2 {
            display: block;
            padding-bottom: 0.1rem;
            font-weight: var(--font-weight-light-bold);
            font-size: var(--size-type-small-body);
        }

        .field-input {
            box-sizing: border-box;
            display: block;
            padding: 0.6rem;
            font-weight: purple;
            border: none;
            color: var(--color-text);
            background-color: var(--color-input);
            width: 100%;
        }

        .field-input:focus {
            border: 0.1rem solid var(--color-text);
            outline: var(--color-text);
        }

        .field-input:hover {
            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
            outline: none;
        }
    `;j([D()],R.prototype,"currentPage",2);j([D()],R.prototype,"loginStatus",2);j([D()],R.prototype,"errorMessage",2);j([D()],R.prototype,"isSuccess",2);j([tr({context:Er}),D()],R.prototype,"user",2);j([m({type:Boolean})],R.prototype,"passwordVisible",2);R=j([b("auth-container")],R);let Ue=class extends y{constructor(){super(...arguments),this.isSuccess=!1}getClassnameForPage(){return this.isSuccess?"success-message":"error-message"}render(){return d`
            <div class=${this.getClassnameForPage()}> 
                <slot> Error </slot>
            </div>
        `}};Ue.styles=g`
        :host {
            display: block;
        }

        .error-message {
            color: red;
            font-size: var(--size-type-small-body);
            padding-bottom: 0.6rem;
        }

        .success-message {
            color: var(--color-background-header);
            font-size: var(--size-type-small-body);
            padding-bottom: 0.6rem;
        }
    `;j([m({type:Boolean})],Ue.prototype,"isSuccess",2);Ue=j([b("render-error")],Ue);var Si=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Pr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Mi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Si(e,t,i),i};let Ie=class extends y{constructor(){super(...arguments),this.open=!1}render(){return d`
      <input
        type="checkbox"
        id="is-shown"
        @change=${this._handleChange}
        .checked=${this.open}
      />
      <label for="is-shown">
        <slot> Menu </slot>
      </label>
      <slot name="menu">
        <ul>
          <li> Command 1 </li>
          <li> Command 2 </li>
          <li> Command 3 </li>
        </ul>
      </slot>
    `}_handleChange(r){const e=r.target;this._toggle(e==null?void 0:e.checked)}_toggle(r){this.open=r,this._toggleClickAway(r)}_toggleClickAway(r){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};r?document.addEventListener("click",e):document.removeEventListener("click",e)}};Ie.styles=g`
    :host {
      display: inline-block;
      position: relative;
    }

    #is-shown {
      display: none;
    }

    label {
      cursor: pointer;
    }

    a {
      color: blue;
      text-decoration: none;
    }

    slot[name="menu"] {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      border: 1px solid;
      background: var(--color-light-background-accent);
      border: purple;
      padding: 0.3rem;
    }

    #is-shown:checked ~ slot[name="menu"] {
      display: block;
    }

    /* CSS for slotted elements and default slot content */
    ::slotted(ul[slot="menu"]),
    slot[name="menu"] > ul {
      margin: 0;
      padding: 0.25em;
      list-style: none;
      white-space: nowrap;
      color: var(--color-accent);
    }
  `;Pr([m({reflect:!0,type:Boolean})],Ie.prototype,"open",2);Ie=Pr([b("drop-down")],Ie);var ki=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,gt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Di(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&ki(e,t,i),i};let pe=class extends y{constructor(){super(...arguments),this.user=new S}render(){return d`
        <link rel="stylesheet" href="/styles/club-info.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <link rel="stylesheet" href="/styles/reset.css" />
        <header>
            <a href="/app">
                <svg class="logo">
                    <use href="/icons/user-interface.svg#icon-logo" />
                </svg>
            </a>
            <h1 class="center-title"> 
                <slot> Cal Poly Clubs </slot>
            </h1>
            <drop-down>
                <svg class="header">
                    <use href="/icons/user-interface.svg#icon-profile" />
                </svg>
                <ul slot="menu">
                    <li>
                        <a href="/app"> Home </a>
                    </li>
                    <li> <hr> </li>
                    <li> 
                        <a href="/app/profile/${localStorage.getItem(M)}"> My Profile </a> 
                    </li>
                    <li> <hr> </li>
                    <li>
                        <a @click=${this._signOut}> Sign Out </a>
                    </li>
                </ul>
            </drop-down>
      </header>
    `}_signOut(){console.log("Signing out"),this.user.signOut()}};pe.styles=g`
      a:hover {
        cursor: pointer;
      }
    `;gt([D()],pe.prototype,"profile",2);gt([rr({context:Er,subscribe:!0}),m({attribute:!1})],pe.prototype,"user",2);pe=gt([b("app-header")],pe);var Ri=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,be=(r,e,t,s)=>{for(var i=s>1?void 0:s?ji(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ri(e,t,i),i};let V=class extends ${get email(){var r;return(r=this.location)==null?void 0:r.params.email}get edit(){return this.location?new URL(document.location.toString()).searchParams.has("edit"):!1}get profile(){return this.getFromModel("profile")}attributeChangedCallback(r,e,t){r==="email"&&e!==t&&t&&(console.log("Profile Page:",t),this.dispatchMessage({type:"ProfileSelected",email:t})),super.attributeChangedCallback(r,e,t)}shouldRenderEditProfile(){return!!(this.profile&&this.profile.email&&localStorage.getItem(M)===this.profile.email)}renderPersonalProfileView(){return d`
      <toggle-switch> Dark Mode </toggle-switch>
        <custom-modal customId="edit-user-profile">
            <span slot="button-name"> Edit Profile </span>
            <div slot="title"> Edit Profile </div>
            <div slot="content">
                <user-profile2-edit .using=${this.profile}> </user-profile2-edit>
            </div>
        </custom-modal>
    `}render(){return d`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> Cal Poly Clubs </div> </app-header>
      <div class="page-content">
        <user-profile-2 .using=${this.profile}> </user-profile-2>
        ${this.shouldRenderEditProfile()?this.renderPersonalProfileView():""}
      </div>
    `}};V.styles=g`
    :host {
      display: contents;
    }
  `;be([m({attribute:!1})],V.prototype,"location",2);be([m({reflect:!0})],V.prototype,"email",1);be([m({reflect:!0})],V.prototype,"edit",1);be([m()],V.prototype,"profile",1);V=be([b("profile-view")],V);var Ti=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,xr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ui(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ti(e,t,i),i};let Le=class extends y{constructor(){super(...arguments),this.linkHref="../index.html"}render(){return d`
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <a href=${this.linkHref} class="club-card">
            <div>
                <h3> 
                    <slot name="club-name"> Default Club Name </slot>
                </h3>
                <div class="club-description">
                    <slot name="club-description"> Default Club Description </slot>
                </div>
            </div>
      </a>
    `}getData(){var t;let r="";const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("slot");return e==null||e.forEach(s=>{var o;const i=s.assignedNodes();r+=((o=i[0].textContent)==null?void 0:o.toLowerCase().trim())+" "}),r}setFilter(r){this.style.display=r?"block":"none"}};Le.styles=g`
    :host {
      display: block;
      position: relative;
    }

    .club-card {
        font-weight: var(--font-weight-normal);
        display: block;
        border-radius: 10px;
        background-color: var(--color-light-background-accent);
        display: flex;
        text-decoration: none;
        color: var(--color-accent);
        width: 60%;
        min-height: 6.6rem;
        margin: 1rem;
        padding-left: 1rem;
    }

    .club-card:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.45);
        border-color: var(--color-accent);
        border-width: 0.5rem;
        fill: var(--color-accent-light);
    }

    .club-description {
        margin-top: 0rem;
        margin-bottom: 0.83rem;
        padding-right: 1rem;
        font-size: var(--size-type-small-body);
        overflow: auto;
    }
  `;xr([m({type:String})],Le.prototype,"linkHref",2);Le=xr([b("club-overview-card")],Le);var Ii=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Cr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Li(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ii(e,t,i),i};let Ne=class extends y{constructor(){super(...arguments),this.linkHref="/index.html"}render(){return d`
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <a href=${this.linkHref} class="event-card">
          <div class="event-name"> 
            <slot name="name"> Default Event Name </slot>
          </div>
          <hr class="line-seperater">
          <div class="event-info">
              <svg class="icon">
                  <use href="/icons/user-interface.svg#icon-calendar" />
              </svg>
              <slot name="date"> Default Event Name </slot>
              <svg class="icon">
                  <use href="/icons/user-interface.svg#icon-clock" />
              </svg>
              <slot name="time"> Default Time </slot>
              <svg class="icon">
                  <use href="/icons/user-interface.svg#icon-location" />
              </svg>
              <slot name="location"> Default Location </slot>
          </div>
      </a>
      `}};Ne.styles=g`
    .event-card {
      display: inline-block;
      font-size: var(--size-type-normal-body);
      border-radius: 0.8rem;
      background-color: var(--color-light-background-accent);
      width: 15.5rem;
      height: 15rem;
      color: var(--color-accent);
      overflow: auto;
      margin: 0.5rem;
      margin-right: 1rem;
      margin-left: 0rem;
      text-decoration: none;
      font-weight: var(--font-weight-normal);
      padding: 0.5rem;
    }

    .event-card:hover {
      opacity: 0.9;
      color: var(--color-accent-light);
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.45);
      border-color: var(--color-accent);
      border-width: 0.5rem;
      fill: var(--color-accent-light);
    }

    .event-info {
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 0 0.7rem;
      row-gap: 0.4rem;
      padding-bottom: 0.01rem;
    }

    .event-name {
      font-weight: var(--font-weight-extra-bold);
      margin-top: 1rem;
      margin-bottom: 1rem;
      text-align: center;
    } 

    .line-seperater {
      margin-top: 2rem;
      margin-bottom: 2rem;
      color: var(--color-accent);
    }
  `;Cr([m({type:String})],Ne.prototype,"linkHref",2);Ne=Cr([b("event-overview-card")],Ne);var Ni=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Ar=(r,e,t,s)=>{for(var i=s>1?void 0:s?zi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ni(e,t,i),i};let ze=class extends y{constructor(){super(...arguments),this.searchTerm=""}render(){return d`
        <link rel="stylesheet" href="/styles/reset.css" />
        <link rel="stylesheet" href="/styles/page.css" />
        <link rel="stylesheet" href="/styles/tokens.css" />
        <input 
            type="search" 
            placeholder="Search Clubs..."
             @input=${this.handleSearch}
            .value=${this.searchTerm}
        />
        <slot> </slot>
        
        `}handleSearch(r){this.searchTerm=r.target.value.toLowerCase(),console.log("Filtering for keyword(s):",this.searchTerm),this.filterItems(this.searchTerm)}filterItems(r){var o;const e=r.split(" ");let t=0;const s=(o=this.shadowRoot)==null?void 0:o.querySelectorAll("slot"),i=s&&s[0]?s[0].assignedElements({flatten:!0}):null;i==null||i.forEach(n=>{const l=e.some(a=>n.getData().includes(a));l&&(t+=1),n.setFilter(l)}),console.log("Found",t,"matches")}};ze.styles=g`
        :host {
            display: block;
            position: relative;
        }
    
        input[type="search"] {
            background-color: var(--color-light-background-accent);
            color: var(--color-text);
            font-size: var(--size-type-normal);
            padding: 0.35rem 0.5rem;
            border: transparent;
            border-radius: 5px;
            color-scheme: var(--color-scheme);
        }

        // input[type="search"]::-webkit-search-cancel-button {
        //     -webkit-appearance: none;
        // }

        input::placeholder {
            color: var(--color-text);
        }

        input:focus {
            outline: none;
            border: 2px solid var(--color-accent-light); 
            // box-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
        }
    `;Ar([m({reflect:!0,type:String})],ze.prototype,"searchTerm",2);ze=Ar([b("search-container")],ze);var Hi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Or=(r,e,t,s)=>{for(var i=s>1?void 0:s?Fi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Hi(e,t,i),i};let He=class extends ${constructor(){super(...arguments),this.hostClub=""}render(){return d`
      <form 
        id="addEvent"
        @submit=${this._handleSubmit}
      >
        <div class="table-format">
            <label>
                <span> Name </span>
                <input name="name" type="text" required/>
            </label>
            <label>
                <span> Event Description </span>
                <textarea name="description" rows="4" cols="55" type="text" required> </textarea>
            </label>
            <label>
                <span> Location </span>
                <input name="location" type="text" required/>
            </label>
            <label>
                <span> Date </span>
                <input name="date" type="date" required/>
            </label>
            <label>
                <span> Start Time </span>
                <input name="start_time" type="time" required>
            </label>
            <label>
                <span> End Time </span>
                <input name="end_time" type="time" required>
            </label>
            <label>
                <span> Event Contact </span>
                <input name="event_contact" type="email" required>
            </label>
            <label>
                <span class="with-icon"> Host Organization 
                    <svg class="lock-icon">
                        <use href="/icons/user-interface.svg#icon-lock" />
                    </svg>
                </span>
                <input class="disabled" name="host" type="text" disabled value=${this.hostClub}>
            </label>
        </div>
        <div class="action-button-container">
            <button 
                type="submit"
                class="action-button confirm-button"> 
                Save
            </button>
            <button 
                type="button"
                class="action-button"
                @click=${this.closeModal}> 
                Cancel
            </button>
        </div>
    </form>
    `}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);t.append("host",this.hostClub);const s=Array.from(t.entries()),i=Object.fromEntries(s);console.log("Submitting Form",i),this.dispatchMessage({type:"CreateEvent",event:i,host:this.hostClub}),e.reset(),this.closeModal()}closeModal(){this.dispatchEvent(new CustomEvent("call-modals-close-modal",{detail:{message:"user wants to close edit user profile modal"},bubbles:!0,composed:!0}))}};He.styles=g`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 1.85rem;
      align-items: center;
    }

    input[type="date"] {
        color: var(--color-test);
    }

    input[type="time"]::-webkit-inner-spin-button {
        color: red;
    } 

    .larger-desc {
        height: 6rem;
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    input, select, textarea {
      color-scheme: var(--color-scheme);
      font-family: inherit;
      font-size: inherit;
      width: 100%; 
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    .disabled {
      opacity: 0.5;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    select {
        width: 104%;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
    }

    .action-button {
        border-radius: 2rem;
        background-color: var(--color-modal-background);
        font-weight: var(--font-weight-light-bold);
        color: var(--color-text);
        border: 0.1rem solid var(--color-accent);
        font-size: var(--size-type-normal-body);
        padding: 0.6rem;
        cursor: pointer;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        float: right;
    }

    .action-button:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        border-color: var(--color-accent);
        fill: var(--color-accent-light);
    }

    .confirm-button {
        background-color: var(--color-background-header);
        color: var(--color-text-heading)
    }
    `;Or([m({attribute:!0})],He.prototype,"hostClub",2);He=Or([b("event-form")],He);var qi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Sr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Bi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&qi(e,t,i),i};let Fe=class extends ${constructor(){super(...arguments),this.hostClub=""}render(){return d`
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <link rel="stylesheet" href="/styles/club-info.css" />
      <form 
        id="addEvent"
        @submit=${this._handleSubmit}
      >
          <div class="table-format">
          <label>
                <span> Club Name </span>
                <input name="name" type="text" required/>
            </label>
            <label>
                <span>Detailed Description</span>
                <textarea name="detailed_description" rows="4" cols="110" type="text" required> </textarea>
            </label>
          </div>
        <div class="grid-container">
          <h3> Overview </h3>
          <h3> General Club Meetings </h3>
        </div>
        <div class="grid-container">
        <div class="table-format">
            <label>
                <span> Tags </span>
                <input name="tags" type="text" required default="enter comma seperated list">
            </label>
            <label>
                <span>Concise Description</span>
                <textarea name="concise_description" rows="4" cols="80" type="text" required> </textarea>
            </label>
            <label>
              <span class="with-icon"> President/Owner 
                <svg class="lock-icon">
                    <use href="/icons/user-interface.svg#icon-lock" />
                </svg>
              </span>
              <input class='disabled' name="owner" type="text" required disabled value=${localStorage.getItem(M)||""}>
            </label>
          </div> 
          <div class="table-format">
            <label>
                <span> Day(s) </span>
                <input name="days" type="text">
            </label>
            <label>
                <span> Start Time </span>
                <input name="start_time" type="time">
            </label>
            <label>
                <span> End Time </span>
                <input name="end_time" type="time">
            </label>
            <label>
                <span> Location </span>
                <input name="location" type="text">
            </label>
          </div>
        </div>
      <div class="action-button-container">
            <button 
                type="submit"
                class="action-button confirm-button"> 
                Save
            </button>
            <button 
                type="button"
                class="action-button"
                @click=${this.closeModal}> 
                Cancel
            </button>
        </div>
    </form>
    `}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);t.append("owner",localStorage.getItem(M)||"");const s=Array.from(t.entries()).map(([o,n])=>n===""?[o]:[o,n]).map(([o,n])=>o==="tags"?[o,n.split(",").map(l=>l.trim())]:[o,n]),i=Object.fromEntries(s);console.log("Submitting Form",i),this.dispatchMessage({type:"CreateClub",club:i}),e.reset(),this.closeModal()}closeModal(){this.dispatchEvent(new CustomEvent("call-modals-close-modal",{detail:{message:"user wants to close edit user profile modal"},bubbles:!0,composed:!0}))}};Fe.styles=g`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 0.5rem;
      align-items: center;
    }

    .disabled {
      opacity: 0.5;
    }

    input[type="date"] {
        color: var(--color-test);
    }

    input[type="time"]::-webkit-inner-spin-button {
        color: red;
    } 

    .larger-desc {
        height: 6rem;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    h3 {
      margin-bottom: 1rem;
    }

    input, select, textarea {
      color-scheme: var(--color-scheme);
      font-family: inherit;
      font-size: inherit;
      width: 100%; 
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    .disabled {
      opacity: 0.5;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    select {
        width: 104%;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
    }

    .action-button {
        border-radius: 2rem;
        background-color: var(--color-modal-background);
        font-weight: var(--font-weight-light-bold);
        color: var(--color-text);
        border: 0.1rem solid var(--color-accent);
        font-size: var(--size-type-normal-body);
        padding: 0.6rem;
        cursor: pointer;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        float: right;
    }

    .action-button:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        border-color: var(--color-accent);
        fill: var(--color-accent-light);
    }

    .confirm-button {
        background-color: var(--color-background-header);
        color: var(--color-text-heading)
    }

    .grid-container {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      column-gap: 1.5rem;
    }
    
    `;Sr([m({attribute:!0})],Fe.prototype,"hostClub",2);Fe=Sr([b("club-form")],Fe);var Gi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,Mr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Vi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Gi(e,t,i),i};let qe=class extends ${get events(){return this.using||{}}render(){return d`
        <div class="event-listing-homepage">
            ${ht(this.events,"General")}
        </div>
    `}};qe.styles=g`
        :host {
            display: contents
        }

        .event-listing-homepage {
            /* display: flex;
            flex-wrap: wrap; */
            padding-left: 1rem;
            display: flex;
            overflow-x: scroll;
            white-space: nowrap;
        }
    `;Mr([m({attribute:!1})],qe.prototype,"using",2);qe=Mr([b("event-items")],qe);var Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,bt=(r,e,t,s)=>{for(var i=s>1?void 0:s?Ki(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Wi(e,t,i),i};let me=class extends ${get clubSummaries(){return this.getFromModel("clubSummaries")}get events(){return this.getFromModel("events")}render(){return d`
            <link rel="stylesheet" href="/styles/page.css" />
            <link rel="stylesheet" href="/styles/tokens.css" />
            <link rel="stylesheet" href="/styles/reset.css" />
            <link rel="stylesheet" href="/styles/club-info.css" />
            <app-header> <div> Cal Poly Clubs </div> </app-header>
            <div class="page-content">
                <div> 
                    <div class="flex-container">
                        <h2> General Events/Announcements </h2>
                        <div> 
                            <custom-modal customId="add-event">
                                <span slot="button-name"> Add Event + </span>
                                <div slot="title"> Create Event </div>
                                <div slot="content">
                                    <event-form hostClub='General'> </event-form>
                                </div>
                            </custom-modal>
                        </div>
                    </div>
                    <div class="event-listing-homepage">
                        ${ht(this.events,"General")}
                    </div>
                </div>
                <div>
                    <div class="flex-container">
                        <h2> Directory </h2>
                        <div> 
                            <custom-modal customId="add-club">
                                <span slot="button-name"> Add Club + </span>
                                <div slot="title"> Register Club </div>
                                <div slot="content">
                                    <club-form> </club-form>
                                </div>
                            </custom-modal>
                        </div>
                    </div>
                    <div>
                        <search-container> 
                            ${js(this.clubSummaries)}
                        </search-container>
                    </div>
                </div>
            </div>
        `}firstUpdated(){this.dispatchMessage({type:"GetClubSummaries"}),this.dispatchMessage({type:"GetEvents",host:"General"})}attributeChangedCallback(r,e,t){console.log("attribute changed"),r==="events"&&e!==t&&t&&(console.log("attribute events changed"),this.dispatchMessage({type:"GetEvents",host:"General"})),r==="clubSummaries"&&e!==t&&t&&(console.log("attribute clubSummaries changed"),this.dispatchMessage({type:"GetClubSummaries"})),super.attributeChangedCallback(r,e,t)}};me.styles=g`
        :host {
            display: contents
        }

        .split {
            display: grid;
            grid-template-columns: 1fr 0.75fr;
            flex-direction: row;
        }

        .event-listing-homepage {
            /* display: flex;
            flex-wrap: wrap; */
            padding-left: 1rem;
            display: flex;
            overflow-x: scroll;
            white-space: nowrap;
        }

        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 0.4rem;
        }

        ::-webkit-scrollbar-thumb {
            cursor: pointer;
            border-radius: 1rem;
            background-color: var(--color-text);
        }

        .flex-container {
            justify-content: space-between;
            display: flex;
        }
    `;bt([m()],me.prototype,"clubSummaries",1);bt([m()],me.prototype,"events",1);me=bt([b("home-view")],me);var Ji=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,kr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Yi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Ji(e,t,i),i};let Be=class extends ${get club(){return this.using}render(){var r;return d`
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <link rel="stylesheet" href="/styles/club-info.css" />
      <form 
        id="addEvent"
        @submit=${this._handleSubmit}
      >
          <div class="table-format">
          <label>
                <span class="with-icon"> President/Owner 
                  <svg class="lock-icon">
                      <use href="/icons/user-interface.svg#icon-lock" />
                  </svg>
               </span>
                <input class="disabled" name="name" type="text" value=${this.club.name} required />
            </label>
            <label>
                <span>Detailed Description</span>
                <textarea name="detailed_description" rows="4" cols="110" type="text" required>${this.club.detailed_description}</textarea>
            </label>
          </div>
        <div class="grid-container">
          <h3> Overview </h3>
          <h3> General Club Meetings </h3>
        </div>
        <div class="grid-container">
        <div class="table-format">
            <label>
                <span> Tags </span>
                <input name="tags" type="text" value=${(r=this.club.tags)==null?void 0:r.join(", ")} required default="enter comma seperated list">
            </label>
            <label>
                <span>Concise Description</span>
                <textarea name="concise_description" rows="4" cols="80" type="text" required>${this.club.concise_description}</textarea>
            </label>
            <label>
              <span class="with-icon"> President/Owner 
                <svg class="lock-icon">
                    <use href="/icons/user-interface.svg#icon-lock" />
                </svg>
              </span>
              <input class='disabled' name="owner" type="text" required disabled value=${localStorage.getItem(M)||""}>
            </label>
          </div> 
          <div class="table-format">
            <label>
                <span> Day(s) </span>
                <input name="days" value=${this.club.days} type="text">
            </label>
            <label>
                <span> Start Time </span>
                <input name="start_time" value=${this.club.start_time} type="time">
            </label>
            <label>
                <span> End Time </span>
                <input name="end_time" value=${this.club.end_time} type="time">
            </label>
            <label>
                <span> Location </span>
                <input name="location" value=${this.club.location} type="text">
            </label>
          </div>
        </div>
      <div class="action-button-container">
            <button 
                type="submit"
                class="action-button confirm-button"> 
                Save
            </button>
            <button 
                type="button"
                class="action-button"
                @click=${this.closeModal}> 
                Cancel
            </button>
        </div>
    </form>
    `}_handleSubmit(r){r.preventDefault();const e=r.target,t=new FormData(e);t.append("owner",localStorage.getItem(M)||""),t.append("name",this.club.name);const s=Array.from(t.entries()).map(([o,n])=>n===""?[o]:[o,n]).map(([o,n])=>o==="tags"?[o,n.split(",").map(l=>l.trim())]:[o,n]),i=Object.fromEntries(s);console.log("Submitting Form",i),this.dispatchMessage({type:"ClubSaved",name:this.club.name,club:i}),e.reset(),this.closeModal()}closeModal(){this.dispatchEvent(new CustomEvent("call-modals-close-modal",{detail:{message:"user wants to close edit user profile modal"},bubbles:!0,composed:!0}))}};Be.styles=g`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 0.5rem;
      align-items: center;
    }

    .disabled {
      opacity: 0.5;
    }

    input[type="date"] {
        color: var(--color-test);
    }

    input[type="time"]::-webkit-inner-spin-button {
        color: red;
    } 

    .larger-desc {
        height: 6rem;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    h3 {
      margin-bottom: 1rem;
    }

    input, select, textarea {
      color-scheme: var(--color-scheme);
      font-family: inherit;
      font-size: inherit;
      width: 100%; 
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    .disabled {
      opacity: 0.5;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    select {
        width: 104%;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
    }

    .action-button {
        border-radius: 2rem;
        background-color: var(--color-modal-background);
        font-weight: var(--font-weight-light-bold);
        color: var(--color-text);
        border: 0.1rem solid var(--color-accent);
        font-size: var(--size-type-normal-body);
        padding: 0.6rem;
        cursor: pointer;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        float: right;
    }

    .action-button:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        border-color: var(--color-accent);
        fill: var(--color-accent-light);
    }

    .confirm-button {
        background-color: var(--color-background-header);
        color: var(--color-text-heading)
    }

    .grid-container {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      column-gap: 1.5rem;
    }
    
    `;kr([m({attribute:!1})],Be.prototype,"using",2);Be=kr([b("club-edit")],Be);var Xi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Dr=(r,e,t,s)=>{for(var i=s>1?void 0:s?Qi(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Xi(e,t,i),i};let Ge=class extends ${get profiles(){return this.using}get clubName(){return this.usingClub||""}render(){return d`
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <link rel="stylesheet" href="/styles/club-info.css" />
      <form 
        id="addEvent"
        @submit=${this._handleSubmit}
      >
          <div class="table-format">
            <label>
                <span class="with-icon"> Club Name
                    <svg class="lock-icon">
                        <use href="/icons/user-interface.svg#icon-lock" />
                    </svg>
                </span>
                <input class="disabled" disabled name="club_name" value=${this.clubName} type="text" required/>
            </label>
            <label> 
              <span> Select User </span>
              <select name="email" required>
                ${this.renderUserOptions(this.profiles)}
              </select>
            </label>
            <label> 
              <span> Role/Position </span>
              <input name="role" type="text" required/>
            </label>
          </div>
      <div class="action-button-container">
            <button 
                type="submit"
                class="action-button confirm-button"> 
                Save
            </button>
            <button 
                type="button"
                class="action-button"
                @click=${this.closeModal}> 
                Cancel
            </button>
        </div>
    </form>
    `}renderUserOptions(r){if(r&&Array.isArray(r))return r.map(e=>d`
          <option value=${e.email||""}> ${e.email} </option>
        `)}getNameForEmail(r,e){var t;return(t=e.find(s=>s.email===r))==null?void 0:t.name}_handleSubmit(r){r.preventDefault();const e=r.target;let t=new FormData(e);t.append("club_name",this.clubName);let s=Object.fromEntries(t);const i=s.email.toString();t.append("name",this.getNameForEmail(i,this.profiles)),s=Object.fromEntries(t),console.log("Submitting Form",i,s),this.dispatchMessage({type:"MemberSaved",member:s,club_name:this.clubName}),e.reset(),this.closeModal()}closeModal(){this.dispatchEvent(new CustomEvent("call-modals-close-modal",{detail:{message:"user wants to close edit user profile modal"},bubbles:!0,composed:!0}))}};Ge.styles=g`
    .table-format {
      display: grid;
      grid-template-columns: max-content auto;
      gap: 2rem;
      align-items: center;
    }

    .disabled {
      opacity: 0.5;
    }

    input[type="date"] {
        color: var(--color-test);
    }

    input[type="time"]::-webkit-inner-spin-button {
        color: red;
    } 

    .larger-desc {
        height: 6rem;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    label {
      display: contents;
      font-weight: var(--font-weight-light-bold);
      outline: none;
    }

    h3 {
      margin-bottom: 1rem;
    }

    input, select, textarea {
      color-scheme: var(--color-scheme);
      font-family: inherit;
      font-size: inherit;
      width: 100%; 
      background-color: var(--color-background-page);
      color: var(--color-text);
      outline: none;
      border: 1.3px solid var(--color-accent);
      border-radius: 0.2rem;
      padding: 0.3rem;
    }

    .disabled {
      opacity: 0.5;
    }

    .with-icon {
      display: block;
    }

    svg.lock-icon {
        position: absolute;  
        display: inline-block;
        margin-left: 0.35rem;
        margin-top: 0.1rem;
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text);
    }

    select {
        width: 100%;
    }

    input:focus {
      border-color: var(--color-accent);
      box-shadow: none;
    }

    .action-button-container {
      margin-top: 2rem;
      bottom: 2rem;
      display: block;
      flex-direction: row;
      padding-left: 1rem;
      gap: 0.3rem;
    }

    .action-button {
        border-radius: 2rem;
        background-color: var(--color-modal-background);
        font-weight: var(--font-weight-light-bold);
        color: var(--color-text);
        border: 0.1rem solid var(--color-accent);
        font-size: var(--size-type-normal-body);
        padding: 0.6rem;
        cursor: pointer;
        margin-right: 0.2rem;
        margin-left: 0.2rem;
        float: right;
    }

    .action-button:hover {
        opacity: 0.9;
        color: var(--color-accent-light);
        border-color: var(--color-accent);
        fill: var(--color-accent-light);
    }

    .confirm-button {
        background-color: var(--color-background-header);
        color: var(--color-text-heading)
    }

    .grid-container {
      display: grid;
      grid-template-columns: 2fr 1.5fr;
      column-gap: 1.5rem;
    }
  `;Dr([m({attribute:!1})],Ge.prototype,"using",2);Ge=Dr([b("add-member")],Ge);var Zi=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,se=(r,e,t,s)=>{for(var i=s>1?void 0:s?eo(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&Zi(e,t,i),i};let N=class extends ${get club(){return this.using}get events(){return this.usingEvents}get members(){return this.usingMembers}get profiles(){return this.usingProfiles}get myProfile(){return this.usingMyProfile}render(){return this.club&&ut(this.club)?d`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> ${this.club.name} </div> </app-header>
      <div class="page-content">
        <div class="grid-container">
          <div class="flex-item-large">
            <div class="subheading"> About Us </div>
            <div class="club-description"> ${this.club.detailed_description} </div>
          </div>
          <div> </div>
          <div class="flex-item-small">
            <div class="flex-container">
              <div class="subheading"> Additional Info</div>
              ${this.hasAdminPermission()?this.renderEditClubOption():this.renderJoinOptions(this.myProfile,this.club,this.members)}
            </div>
            <div class="additional-info-containter">
                <div class="info-subheading"> Meeting: </div>
                  <table class="meeting-table">
                    <tr>
                        <td> <div class="meeting-table-subheading"> Day(s): </div> </td>
                        <td> <div class="info-entry">${this.club.days}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="meeting-table-subheading"> Time(s): </div> </td>
                        <td> <div class="info-entry"> ${this.renderTime(this.club.start_time,this.club.end_time)} </div> </td>
                    </tr>
                    <tr>
                        <td> <div class="meeting-table-subheading"> Locations(s): </div> </td>
                        <td> <div class="info-entry"> ${this.club.location} </div> </td>
                    </tr>
                  </table>
                <div class="info-subheading"> Tag(s): 
                    <div class="info-entry"> ${this.renderTags(this.club.tags)} </div>
                </div>
              </div>
          </div> 
        </div>
        <dl>
            <dt class="subheading"> Contact Information </dt>
            <dd> E: ${this.club.owner} </dd>
            <div class="flex-container">
              <h2> Upcoming Events </h2>
              <div> 
                ${this.hasAdminPermission()?this.renderAddEventOption():d``}
              </div>
            </div>
            <dd> 
                <div class="event-listing">
                    ${ht(this.events,this.club.name)}
                </div>
            </dd>
            <div class="flex-container">
              <h2> Club Membership </h2>
              <div> 
                ${this.hasAdminPermission()?this.renderAddOfficiersOption():d``}
              </div>
            </div>
            <dd>
                <p class="small-subheading"> Officers 
                  <div class="profile-listing"> 
                      ${this.renderAdmin(this.members)}
                  </div>
                </p>
                <p class="small-subheading"> Members (${this.getMemberCount(this.members)})
                  <div class="profile-listing">
                      ${this.renderMembers(this.members)}
                  </div>
                </p>
            </dd>
          </dl>
      </div>
    `:d`<no-content> </no-content>`}renderJoinOptions(r,e,t){return r&&e.owner===r.email?d``:r&&r.clubs&&this.isMember(t,r)?d`
        <div>
          <button class='disabled-button' disabled> Join </button> 
          <button class='active-button' @click=${this.handleUnjoin}> Unjoin </button> 
        </div>
      `:d`
        <div>
          <button class='active-button' @click=${this.handleJoin}> Join </button> 
          <button class='disabled-button' disabled> Unjoin </button> 
        </div>
      `}isMember(r,e){if(r&&Array.isArray(r)&&r.length!==0)return r.some(t=>t.email===e.email)}handleJoin(){const r={name:this.myProfile.name,club_name:this.club.name,email:this.myProfile.email||"",role:"Member"};this.dispatchMessage({type:"MemberSaved",member:r,club_name:this.club.name})}handleUnjoin(){this.dispatchMessage({type:"MemberDeleted",email:this.myProfile.email||"",club_name:this.club.name})}renderAddEventOption(){return d`
      <custom-modal customId="add-club">
        <span slot="button-name"> Add Event + </span>
        <div slot="title"> Add Event </div>
        <div slot="content">
            <event-form hostClub=${this.club.name}> </event-form>
        </div>
      </custom-modal>
      `}renderEditClubOption(){return d`
      <div> 
        <custom-modal customId="edit-club">
          <span slot="button-name"> Edit Club Info </span>
          <div slot="title"> Edit Club Info </div>
          <div slot="content">
              <club-edit .using=${this.club}> </club-edit>
          </div>
        </custom-modal>
      </div>
      `}renderAddOfficiersOption(){return d`
      <div> 
        <custom-modal customId="edit-club">
          <span slot="button-name"> Add Officers + </span>
          <div slot="title"> Add Officer </div>
          <div slot="content">
              <add-member .using=${this.profiles} .usingClub=${this.club.name}> </add-member>
          </div>
        </custom-modal>
      </div>
      `}hasAdminPermission(){return this.club.owner===localStorage.getItem(M)}renderTags(r){return r.map(e=>d`
        <div class="tag"> ${e} </div>
      `)}renderAdmin(r){if(r&&Array.isArray(r))return r.map(e=>e.role!=="Member"?d`
                <a href="/app/profile/${e.email}" class="officer-card"> 
                    ${this.renderDeleteAdmin(e.email,this.club.owner)}
                    <div class="profile-pic">
                      <div class="circle">${this.getFirstLetter(e.name)}</div>
                    </div>
                    <div class="role"> ${e.role} </div>
                    ${e.name}
                    <div>
                  </div>
                </a>
              `:d``)}renderDeleteAdmin(r,e){return r!==e&&this.hasAdminPermission()?d`
        <button class="space trash" @click=${t=>this.deleteMember(t,r)}>
          <svg class="trash-icon">
            <use href="/icons/user-interface.svg#icon-trash" />
          </svg>
      </button>
      `:d``}renderMembers(r){if(r&&Array.isArray(r))return r.map(e=>e.role==="Member"?d`
                <a href="/app/profile/${e.email}" class="member-card">
                  <div class="small-profile-pic">  
                    <div class="small-circle">${this.getFirstLetter(e.name)}</div>
                  </div>
                  <div class="space">
                    ${e.name}
                  </div>
                  <div>
                    ${this.renderDeleteAdmin(e.email,this.club.owner)}
                  </div>
                </a>
              `:d``)}deleteMember(r,e){r.preventDefault(),console.log("trash icoin clickedlkjadsklfjdsa"),this.dispatchMessage({type:"MemberDeleted",email:e||"",club_name:this.club.name})}getMemberCount(r){let e=0;return r&&Array.isArray(r)&&r.map(t=>{t.role==="Member"&&(e+=1)}),e}renderTime(r,e){return r==="TBD"?"TBD":pt(r,e)}getFirstLetter(r){return r.charAt(0)}};N.styles=g`
    :host {
      display: contents;
    }

    .right {
      float: right;
    }

    .trash-icon {
        width: 1rem;
        height: 1.5rem;
        fill: var(--color-text-heading);
    }

    .trash-icon:hover {
      fill: red;
      weight: var(--font-weight-extreme-bold);
    }

    .trash {
      background-color: transparent; /* Remove default background color */
      color: black;
      border: none;
      cursor: pointer;
      position: absolute;
      right: 0.8rem;
    }

    .active-button {
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      background-color: var(--color-text);
      color: var(--color-text-heading);
      font-weight: var(--font-weight-light-bold);
      margin-right: 0.5rem;
    }

    .disabled-button {
      opacity: 0.5;
      padding: 0.5rem;
      border: none;
      background-color: var(--color-text);
      color: var(--color-text-heading);
      font-weight: var(--font-weight-light-bold);
      margin-right: 0.5rem;
    }

    .active-button:hover {
      opacity: 0.9;
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.45);
      border-color: var(--color-accent);
      border-width: 0.5rem;
      color: var(--color-text-heading);
    }

    .circle {
      margin-top: 1rem;
      border-radius: 20rem;
      font-size: 2.8rem;
      font-weight: var(--font-weight-extreme-bold);
      background-color: var(--color-background-page);
      padding-left: 1rem;
      padding-right: 1rem;
      color: var(--color-text);
    }

    .space {
      margin-top: 0.2rem;
    }

    .small-circle {
      border-radius: 20rem;
      font-size: 1rem;
      font-weight: var(--font-weight-light-bold);
      background-color: var(--color-background-page);
      padding-top: 0.2rem;
      padding-bottom: 0.2rem;
      padding-left: 0.6rem;
      padding-right: 0.6rem;
      color: var(--color-text);
    }

    .profile-pic {
      display: flex;
      justify-content: center;
    }

    .small-profile-pic {
      vertical-align: center;
      margin-right: 1.3rem;
    }

    .small-subheading {
        font-size: var(--size-type-small-heading);
        font-weight: var(--font-weight-light-bold);
        margin-bottom: 0rem;
    }

    .flex-container {
      justify-content: space-between;
      display: flex;
    }

    .event-listing {
        display: flex;
        flex-wrap: wrap;
        overflow-x: scroll;
        white-space: nowrap;
    }

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        height: 0.4rem;
    }

    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 1rem;
        background-color: var(--color-text);
    }
  `;se([m({attribute:!1})],N.prototype,"using",2);se([m({attribute:!1})],N.prototype,"usingEvents",2);se([m({attribute:!1})],N.prototype,"usingMembers",2);se([m({attribute:!1})],N.prototype,"usingProfiles",2);se([m({attribute:!1})],N.prototype,"usingMyProfile",2);N=se([b("club-item")],N);var to=Object.defineProperty,ro=Object.getOwnPropertyDescriptor,z=(r,e,t,s)=>{for(var i=s>1?void 0:s?ro(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&to(e,t,i),i};let k=class extends ${get name(){var r;return((r=this.location)==null?void 0:r.params.name)||""}get club(){return this.getFromModel("club")}get events(){return this.getFromModel("events")}get profiles(){return this.getFromModel("profiles")}get myProfile(){return this.getFromModel("myProfile")}get members(){return this.getFromModel("members")}attributeChangedCallback(r,e,t){r==="name"&&e!==t&&t&&(this.dispatchMessage({type:"GetEvents",host:t}),this.dispatchMessage({type:"GetMembers",club_name:t}),this.dispatchMessage({type:"ClubSelected",name:t}),this.dispatchMessage({type:"GetProfiles"}),this.dispatchMessage({type:"GetMyProfile",email:localStorage.getItem(M)||""})),super.attributeChangedCallback(r,e,t)}render(){return d`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <club-item 
        .using=${this.club} .usingEvents=${this.events} .usingMembers=${this.members}
        .usingProfiles=${this.profiles} .usingMyProfile=${this.myProfile}>
      </club-item>
    `}};k.styles=g`
    :host {
      display: contents;
    }
  `;z([m({attribute:!1})],k.prototype,"location",2);z([m({reflect:!0})],k.prototype,"name",1);z([m()],k.prototype,"club",1);z([m()],k.prototype,"events",1);z([m()],k.prototype,"profiles",1);z([m()],k.prototype,"myProfile",1);z([m()],k.prototype,"members",1);k=z([b("club-view")],k);var so=Object.defineProperty,io=Object.getOwnPropertyDescriptor,Rr=(r,e,t,s)=>{for(var i=s>1?void 0:s?io(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&so(e,t,i),i};let Ve=class extends ${get event(){return this.using}render(){return this.event&&ut(this.event)?d`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
        <div class="event-info-container">
            <div class="flex-item">
                <div class="event-name"> ${this.event.name} </div>
                <div class="event-description"> ${this.event.description} </div>
                <div class="event-info">
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-calendar" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Date </div>
                        <div> ${dr(this.event.date)} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-clock" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Time </div>
                        <div> ${pt(this.event.start_time,this.event.end_time)} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-location" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Location </div>
                        <div> ${this.event.location} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-email" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Contact </div>
                        <div> ${this.event.event_contact} </div>
                    </div>
                </div>
            </div>
            <div class="flex-item">
            </div>
        </div>
    `:d`<no-content> </no-content>`}};Ve.styles=g`
    :host {
      display: contents;
    }
  `;Rr([m({attribute:!1})],Ve.prototype,"using",2);Ve=Rr([b("event-item")],Ve);var oo=Object.defineProperty,no=Object.getOwnPropertyDescriptor,ve=(r,e,t,s)=>{for(var i=s>1?void 0:s?no(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&oo(e,t,i),i};let W=class extends ${get _id(){var r;return((r=this.location)==null?void 0:r.params._id)||""}get host(){var r;return((r=this.location)==null?void 0:r.params.host)||""}get event(){return this.getFromModel("event")||{}}attributeChangedCallback(r,e,t){r==="_id"&&e!==t&&t?(console.log("Event Page:",t),this.dispatchMessage({type:"EventSelected",_id:t,host:this.host})):r==="host"&&e!==t&&t&&(console.log("Event Page:",t),this.dispatchMessage({type:"EventSelected",_id:this._id,host:t})),super.attributeChangedCallback(r,e,t)}render(){return d`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> Cal Poly Clubs </div> </app-header>
      <div class="page-content">
        <event-item .using=${this.event}> </event-item>
      </div>
    `}};W.styles=g`
    :host {
      display: contents;
    }
  `;ve([m({attribute:!1})],W.prototype,"location",2);ve([m({reflect:!0})],W.prototype,"_id",1);ve([m({reflect:!0})],W.prototype,"host",1);ve([m()],W.prototype,"event",1);W=ve([b("event-view")],W);const ao=[{path:"/app/club/:name",component:"club-view",action:()=>{console.log("Navigating to /app/club/:name")}},{path:"/app/profile/:email",component:"profile-view",action:()=>{console.log("Navigating to /app/profile/:email")}},{path:"/app/event/:host/:_id",component:"event-view",action:()=>{console.log("Navigating to /app/event/:host/:_id")}},{path:"/app",component:"home-view",action:r=>(console.log("Navigating to /app"),localStorage.getItem(Ae)?"home-view":r.redirect("/"))},{path:"/",component:"blank-view",action:()=>{console.log("Navigating to /")}},{path:"(.*)",redirect:"/app"}],_=ws(),lo=_.update;_.addMessage("ProfileSaved",r=>{const{email:e,profile:t}=r;return new w(t).put(`/profile/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Profile:",s),s}).then(s=>s?E({profile:s}):P)});_.addMessage("MemberDeleted",r=>{const{email:e,club_name:t}=r;return new te().post(`/members/delete/${t}/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Member:",s),s}).then(()=>new w(void 0).get(`/members/${t}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Members:",s),s}).then(s=>s?E({members:s}):P))});_.addMessage("MemberSaved",r=>{const{member:e,club_name:t}=r;return new w(e).post("/members").then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Member:",s),s}).then(()=>new w(void 0).get(`/members/${t}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Members:",s),s}).then(s=>s?E({members:s}):P))});_.addMessage("UserLoggedIn",(r,e)=>{const{user:t}=r;return console.log("Dispatched UserLoggedIn"),E({user:t})(e)});_.addMessage("ProfileSelected",r=>{const{email:e}=r;return new te().get(`/profile/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Profile:",t),t}).then(t=>t?E({profile:t}):P)});_.addMessage("GetMyProfile",r=>{const{email:e}=r;return new te().get(`/profile/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("My Profile:",t),t}).then(t=>t?E({myProfile:t}):P)});_.addMessage("GetClubSummaries",r=>(console.log("Dispatched GetClubSummaries"),new w(void 0).get("/clubSummaries").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("ClubSummaries:",e),e}).then(e=>e?E({clubSummaries:e}):P)));_.addMessage("GetEvents",r=>{const{host:e}=r;return console.log("Dispatched GetEvents"),new w(void 0).get(`/events/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Events:",t),t}).then(t=>t?E({events:t}):P)});_.addMessage("GetMembers",r=>{const{club_name:e}=r;return console.log("Dispatched GetMembers"),new w(void 0).get(`/members/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Members:",t),t}).then(t=>t?E({members:t}):P)});_.addMessage("EventSelected",r=>{const{_id:e,host:t}=r;return new te().get(`/events/${t}/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Event:",s),s}).then(s=>s?E({event:s}):P)});_.addMessage("ClubSelected",r=>{const{name:e}=r;return new te().get(`/clubs/${e}`).then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("Club:",t),t}).then(t=>t?E({club:t}):P)});_.addMessage("CreateEvent",r=>{console.log("Dispatched CreateEvent");const{event:e,host:t}=r;return new w(e).post("/events").then(s=>{if(s.status===201)return s.json()}).then(s=>{if(s)return console.log("Event:",s),s}).then(()=>new w(void 0).get(`/events/${t}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Events:",s),s}).then(s=>s?E({events:s}):P))});_.addMessage("ClubSaved",r=>{const{name:e,club:t}=r;return new w(t).put(`/clubs/${e}`).then(s=>{if(s.status===200)return s.json()}).then(s=>{if(s)return console.log("Club:",s),s}).then(s=>s?E({club:s}):P)});_.addMessage("GetProfiles",()=>new te().get("/profile/all").then(e=>{if(e.status===200)return e.json()}).then(e=>{if(e)return console.log("Profiles:",e),e}).then(e=>e?E({profiles:e}):P));_.addMessage("CreateClub",r=>{console.log("Dispatched CreateClub");const{club:e}=r;return new w(e).post("/clubs").then(t=>{if(t.status===201)return t.json()}).then(t=>{if(t)return console.log("Club:",t),t}).then(()=>new w(void 0).get("/clubSummaries").then(t=>{if(t.status===200)return t.json()}).then(t=>{if(t)return console.log("ClubSummaries:",t),t}).then(t=>t?E({clubSummaries:t}):P))});var co=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,uo=(r,e,t,s)=>{for(var i=s>1?void 0:s?ho(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&co(e,t,i),i};let nt=class extends y{render(){return d`
        <div> 
            <auth-container> </auth-container>
            <slot> </slot>
        </div>
        `}};nt.styles=g`
        :host {
            display: block;
        }
    `;nt=uo([b("auth-primary")],nt);var po=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,jr=(r,e,t,s)=>{for(var i=s>1?void 0:s?mo(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&po(e,t,i),i};let We=class extends y{constructor(){super(...arguments),this.router=new O(this),this.routes=[]}connectedCallback(){super.connectedCallback(),this.router.setRoutes(this.routes),console.log("Router:",this.routes)}render(){return d`<slot></slot>`}};We.styles=g`
      :host {
        display: contents;
      }
    `;jr([m({attribute:!1})],We.prototype,"routes",2);We=jr([b("vaadin-router")],We);var fo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,bo=(r,e,t,s)=>{for(var i=s>1?void 0:s?go(e,t):e,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(e,t,i):n(i))||i);return s&&i&&fo(e,t,i),i};let at=class extends nr{constructor(){super(lo)}render(){return d`
      <auth-container>
        <vaadin-router .routes=${ao}> </vaadin-router>
      </auth-container>
    `}};at.styles=g`
    :host {
      display: contents;
    }
  `;at=bo([b("club-app")],at);document.addEventListener("DOMContentLoaded",()=>{const r=localStorage.getItem("dark-mode")==="true";document.body.classList.toggle("dark-mode",r)});
