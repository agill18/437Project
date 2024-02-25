(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,J=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Q=new WeakMap;let ae=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Q.set(t,e))}return e}toString(){return this.cssText}};const _e=i=>new ae(typeof i=="string"?i:i+"",void 0,Z),z=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new ae(t,i,Z)},ve=(i,e)=>{if(J)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=U.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}},X=J?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return _e(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ye,defineProperty:be,getOwnPropertyDescriptor:Ae,getOwnPropertyNames:we,getOwnPropertySymbols:Ee,getPrototypeOf:Se}=Object,g=globalThis,Y=g.trustedTypes,Ce=Y?Y.emptyScript:"",W=g.reactiveElementPolyfillSupport,S=(i,e)=>i,H={toAttribute(i,e){switch(e){case Boolean:i=i?Ce:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},G=(i,e)=>!ye(i,e),ee={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&be(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=Ae(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=Se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,r=[...we(t),...Ee(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(X(s))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){var o;const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:H).toAttribute(t,r.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){var o;const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:H;this._$Em=s,this[s]=a.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??G)(this[e],t))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$ET??(this._$ET=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$E_)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$Ej()}catch(s){throw e=!1,this._$Ej(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$ET&&(this._$ET=this._$ET.forEach(t=>this._$EO(t,this[t]))),this._$Ej()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[S("elementProperties")]=new Map,b[S("finalized")]=new Map,W==null||W({ReactiveElement:b}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,N=C.trustedTypes,te=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,ce="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,he="?"+m,Pe=`<${he}>`,y=document,P=()=>y.createComment(""),x=i=>i===null||typeof i!="object"&&typeof i!="function",de=Array.isArray,xe=i=>de(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",V=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,se=/-->/g,re=/>/g,_=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,oe=/"/g,pe=/^(?:script|style|textarea|title)$/i,Oe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),j=Oe(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ne=new WeakMap,v=y.createTreeWalker(y,129);function ue(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(e):e}const ke=(i,e)=>{const t=i.length-1,r=[];let s,o=e===2?"<svg>":"",n=E;for(let a=0;a<t;a++){const l=i[a];let h,p,c=-1,u=0;for(;u<l.length&&(n.lastIndex=u,p=n.exec(l),p!==null);)u=n.lastIndex,n===E?p[1]==="!--"?n=se:p[1]!==void 0?n=re:p[2]!==void 0?(pe.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=_):p[3]!==void 0&&(n=_):n===_?p[0]===">"?(n=s??E,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?_:p[3]==='"'?oe:ie):n===oe||n===ie?n=_:n===se||n===re?n=E:(n=_,s=void 0);const f=n===_&&i[a+1].startsWith("/>")?" ":"";o+=n===E?l+Pe:c>=0?(r.push(h),l.slice(0,c)+ce+l.slice(c)+m+f):l+m+(c===-2?a:f)}return[ue(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class O{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[h,p]=ke(e,t);if(this.el=O.createElement(h,r),v.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=v.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(ce)){const u=p[n++],f=s.getAttribute(c).split(m),T=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:T[2],strings:f,ctor:T[1]==="."?Ue:T[1]==="?"?He:T[1]==="@"?Ne:I}),s.removeAttribute(c)}else c.startsWith(m)&&(l.push({type:6,index:o}),s.removeAttribute(c));if(pe.test(s.tagName)){const c=s.textContent.split(m),u=c.length-1;if(u>0){s.textContent=N?N.emptyScript:"";for(let f=0;f<u;f++)s.append(c[f],P()),v.nextNode(),l.push({type:2,index:++o});s.append(c[u],P())}}}else if(s.nodeType===8)if(s.data===he)l.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(m,c+1))!==-1;)l.push({type:7,index:o}),c+=m.length-1}o++}}static createElement(e,t){const r=y.createElement("template");return r.innerHTML=e,r}}function w(i,e,t=i,r){var n,a;if(e===A)return e;let s=r!==void 0?(n=t._$Co)==null?void 0:n[r]:t._$Cl;const o=x(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=s:t._$Cl=s),s!==void 0&&(e=w(i,s._$AS(i,e.values),s,r)),e}class Te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??y).importNode(t,!0);v.currentNode=s;let o=v.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new k(o,o.nextSibling,this,e):l.type===1?h=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(h=new Me(o,this,e)),this._$AV.push(h),l=r[++a]}n!==(l==null?void 0:l.index)&&(o=v.nextNode(),n++)}return v.currentNode=y,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class k{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=w(this,e,t),x(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):xe(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&x(this._$AH)?this._$AA.nextSibling.data=e:this.$(y.createTextNode(e)),this._$AH=e}g(e){var o;const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=O.createElement(ue(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const n=new Te(s,this),a=n.u(this.options);n.p(t),this.$(a),this._$AH=n}}_$AC(e){let t=ne.get(e.strings);return t===void 0&&ne.set(e.strings,t=new O(e)),t}T(e){de(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const o of e)s===t.length?t.push(r=new k(this.k(P()),this.k(P()),this,this.options)):r=t[s],r._$AI(o),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class I{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(e,t=this,r,s){const o=this.strings;let n=!1;if(o===void 0)e=w(this,e,t,0),n=!x(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const a=e;let l,h;for(e=o[0],l=0;l<o.length-1;l++)h=w(this,a[r+l],t,l),h===A&&(h=this._$AH[l]),n||(n=!x(h)||h!==this._$AH[l]),h===d?e=d:e!==d&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!s&&this.O(e)}O(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ue extends I{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===d?void 0:e}}class He extends I{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}}class Ne extends I{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=w(this,e,t,0)??d)===A)return;const r=this._$AH,s=e===d&&r!==d||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Me{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){w(this,e)}}const F=C.litHtmlPolyfillSupport;F==null||F(O,k),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.1");const De=(i,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let s=r._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;r._$litPart$=s=new k(e.insertBefore(P(),o),o,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}}var le;$._$litElement$=!0,$.finalized=!0,(le=globalThis.litElementHydrateSupport)==null||le.call(globalThis,{LitElement:$});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:$});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=i=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(i,e)}):customElements.define(i,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G},Le=(i=Re,e,t)=>{const{kind:r,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(t.name,i),r==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,i)},init(a){return a!==void 0&&this.C(n,void 0,i),a}}}if(r==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,i)}}throw Error("Unsupported decorator location: "+r)};function q(i){return(e,t)=>typeof t=="object"?Le(i,e,t):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,e,t)}var ze=Object.defineProperty,je=Object.getOwnPropertyDescriptor,fe=(i,e,t,r)=>{for(var s=r>1?void 0:r?je(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(e,t,s):n(s))||s);return r&&s&&ze(e,t,s),s};let M=class extends ${constructor(){super(...arguments),this.open=!1}render(){return j`
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
    `}_handleChange(i){const e=i.target;this._toggle(e==null?void 0:e.checked)}_toggle(i){this.open=i,this._toggleClickAway(i)}_toggleClickAway(i){const e=t=>{t.composedPath().includes(this)?t.stopPropagation():this._toggle(!1)};i?document.addEventListener("click",e):document.removeEventListener("click",e)}};M.styles=z`
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
  `;fe([q({reflect:!0,type:Boolean})],M.prototype,"open",2);M=fe([B("drop-down")],M);var Ie=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,me=(i,e,t,r)=>{for(var s=r>1?void 0:r?Be(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(e,t,s):n(s))||s);return r&&s&&Ie(e,t,s),s};let D=class extends ${constructor(){super(...arguments),this.linkHref="../index.html"}render(){return j`
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
    `}getData(){var t;let i="";const e=(t=this.shadowRoot)==null?void 0:t.querySelectorAll("slot");return e==null||e.forEach(r=>{var o;const s=r.assignedNodes();i+=((o=s[0].textContent)==null?void 0:o.toLowerCase().trim())+" "}),i}setFilter(i){this.style.display=i?"block":"none"}};D.styles=z`
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
  `;me([q({type:String})],D.prototype,"linkHref",2);D=me([B("club-overview-card")],D);var qe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,ge=(i,e,t,r)=>{for(var s=r>1?void 0:r?We(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(e,t,s):n(s))||s);return r&&s&&qe(e,t,s),s};let R=class extends ${constructor(){super(...arguments),this.linkHref="/index.html"}render(){return j`
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
      `}};R.styles=z`
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
  `;ge([q({type:String})],R.prototype,"linkHref",2);R=ge([B("event-overview-card")],R);var Ve=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,$e=(i,e,t,r)=>{for(var s=r>1?void 0:r?Fe(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(e,t,s):n(s))||s);return r&&s&&Ve(e,t,s),s};let L=class extends ${constructor(){super(...arguments),this.searchTerm=""}render(){return j`
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
        
        `}handleSearch(i){this.searchTerm=i.target.value.toLowerCase(),console.log("Filtering for keyword(s):",this.searchTerm),this.filterItems(this.searchTerm)}filterItems(i){var o;const e=i.split(" ");let t=0;const r=(o=this.shadowRoot)==null?void 0:o.querySelectorAll("slot"),s=r&&r[0]?r[0].assignedElements({flatten:!0}):null;s==null||s.forEach(n=>{const a=e.some(l=>n.getData().includes(l));a&&(t+=1),n.setFilter(a)}),console.log("Found",t,"matches")}};L.styles=z`
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
            width: 
        }

        // input[type="search"]::-webkit-search-cancel-button {
        //     -webkit-appearance: none;
        // }

        input::placeholder {
            color: var(--color-text);
        }

        input:focus {
            outline: none;
            border: 2px solid var(--color-accent-light); /* Custom focus style */
            // box-shadow: 0 0 5px rgba(255, 165, 0, 0.5); /* Adding a glow effect */
        }
    `;$e([q({reflect:!0,type:Boolean})],L.prototype,"searchTerm",2);L=$e([B("search-container")],L);document.addEventListener("DOMContentLoaded",()=>{const i=localStorage.getItem("dark-mode")==="true";document.body.classList.toggle("dark-mode",i)});
