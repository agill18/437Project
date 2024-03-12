var _a;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = globalThis, e$4 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$5 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap();
let n$4 = class n {
  constructor(t2, e3, o2) {
    if (this._$cssResult$ = true, o2 !== s$5)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e3;
  }
  get styleSheet() {
    let t2 = this.o;
    const s5 = this.t;
    if (e$4 && void 0 === t2) {
      const e3 = void 0 !== s5 && 1 === s5.length;
      e3 && (t2 = o$4.get(s5)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e3 && o$4.set(s5, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$5 = (t2) => new n$4("string" == typeof t2 ? t2 : t2 + "", void 0, s$5), i$3 = (t2, ...e3) => {
  const o2 = 1 === t2.length ? t2[0] : e3.reduce((e4, s5, o3) => e4 + ((t3) => {
    if (true === t3._$cssResult$)
      return t3.cssText;
    if ("number" == typeof t3)
      return t3;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t3 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s5) + t2[o3 + 1], t2[0]);
  return new n$4(o2, t2, s$5);
}, S$1 = (s5, o2) => {
  if (e$4)
    s5.adoptedStyleSheets = o2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet);
  else
    for (const e3 of o2) {
      const o3 = document.createElement("style"), n3 = t$2.litNonce;
      void 0 !== n3 && o3.setAttribute("nonce", n3), o3.textContent = e3.cssText, s5.appendChild(o3);
    }
}, c$3 = e$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e3 = "";
  for (const s5 of t3.cssRules)
    e3 += s5.cssText;
  return r$5(e3);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: i$2, defineProperty: e$3, getOwnPropertyDescriptor: r$4, getOwnPropertyNames: h$1, getOwnPropertySymbols: o$3, getPrototypeOf: n$3 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$1 = c$2 ? c$2.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t2, s5) => t2, u$1 = { toAttribute(t2, s5) {
  switch (s5) {
    case Boolean:
      t2 = t2 ? l$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, s5) {
  let i2 = t2;
  switch (s5) {
    case Boolean:
      i2 = null !== t2;
      break;
    case Number:
      i2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        i2 = JSON.parse(t2);
      } catch (t3) {
        i2 = null;
      }
  }
  return i2;
} }, f$1 = (t2, s5) => !i$2(t2, s5), y$1 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a$1.litPropertyMetadata ?? (a$1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class b extends HTMLElement {
  static addInitializer(t2) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t2);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t2, s5 = y$1) {
    if (s5.state && (s5.attribute = false), this._$Ei(), this.elementProperties.set(t2, s5), !s5.noAccessor) {
      const i2 = Symbol(), r2 = this.getPropertyDescriptor(t2, i2, s5);
      void 0 !== r2 && e$3(this.prototype, t2, r2);
    }
  }
  static getPropertyDescriptor(t2, s5, i2) {
    const { get: e3, set: h2 } = r$4(this.prototype, t2) ?? { get() {
      return this[s5];
    }, set(t3) {
      this[s5] = t3;
    } };
    return { get() {
      return e3 == null ? void 0 : e3.call(this);
    }, set(s6) {
      const r2 = e3 == null ? void 0 : e3.call(this);
      h2.call(this, s6), this.requestUpdate(t2, r2, i2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) ?? y$1;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d$1("elementProperties")))
      return;
    const t2 = n$3(this);
    t2.finalize(), void 0 !== t2.l && (this.l = [...t2.l]), this.elementProperties = new Map(t2.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d$1("finalized")))
      return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
      const t3 = this.properties, s5 = [...h$1(t3), ...o$3(t3)];
      for (const i2 of s5)
        this.createProperty(i2, t3[i2]);
    }
    const t2 = this[Symbol.metadata];
    if (null !== t2) {
      const s5 = litPropertyMetadata.get(t2);
      if (void 0 !== s5)
        for (const [t3, i2] of s5)
          this.elementProperties.set(t3, i2);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t3, s5] of this.elementProperties) {
      const i2 = this._$Eu(t3, s5);
      void 0 !== i2 && this._$Eh.set(i2, t3);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s5) {
    const i2 = [];
    if (Array.isArray(s5)) {
      const e3 = new Set(s5.flat(1 / 0).reverse());
      for (const s6 of e3)
        i2.unshift(c$3(s6));
    } else
      void 0 !== s5 && i2.push(c$3(s5));
    return i2;
  }
  static _$Eu(t2, s5) {
    const i2 = s5.attribute;
    return false === i2 ? void 0 : "string" == typeof i2 ? i2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var _a2;
    this._$Eg = new Promise((t2) => this.enableUpdating = t2), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), (_a2 = this.constructor.l) == null ? void 0 : _a2.forEach((t2) => t2(this));
  }
  addController(t2) {
    var _a2;
    (this._$E_ ?? (this._$E_ = /* @__PURE__ */ new Set())).add(t2), void 0 !== this.renderRoot && this.isConnected && ((_a2 = t2.hostConnected) == null ? void 0 : _a2.call(t2));
  }
  removeController(t2) {
    var _a2;
    (_a2 = this._$E_) == null ? void 0 : _a2.delete(t2);
  }
  _$ES() {
    const t2 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
    for (const i2 of s5.keys())
      this.hasOwnProperty(i2) && (t2.set(i2, this[i2]), delete this[i2]);
    t2.size > 0 && (this._$Ep = t2);
  }
  createRenderRoot() {
    const t2 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(t2, this.constructor.elementStyles), t2;
  }
  connectedCallback() {
    var _a2;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostConnected) == null ? void 0 : _a3.call(t2);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t2) => {
      var _a3;
      return (_a3 = t2.hostDisconnected) == null ? void 0 : _a3.call(t2);
    });
  }
  attributeChangedCallback(t2, s5, i2) {
    this._$AK(t2, i2);
  }
  _$EO(t2, s5) {
    var _a2;
    const i2 = this.constructor.elementProperties.get(t2), e3 = this.constructor._$Eu(t2, i2);
    if (void 0 !== e3 && true === i2.reflect) {
      const r2 = (void 0 !== ((_a2 = i2.converter) == null ? void 0 : _a2.toAttribute) ? i2.converter : u$1).toAttribute(s5, i2.type);
      this._$Em = t2, null == r2 ? this.removeAttribute(e3) : this.setAttribute(e3, r2), this._$Em = null;
    }
  }
  _$AK(t2, s5) {
    var _a2;
    const i2 = this.constructor, e3 = i2._$Eh.get(t2);
    if (void 0 !== e3 && this._$Em !== e3) {
      const t3 = i2.getPropertyOptions(e3), r2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== ((_a2 = t3.converter) == null ? void 0 : _a2.fromAttribute) ? t3.converter : u$1;
      this._$Em = e3, this[e3] = r2.fromAttribute(s5, t3.type), this._$Em = null;
    }
  }
  requestUpdate(t2, s5, i2) {
    if (void 0 !== t2) {
      if (i2 ?? (i2 = this.constructor.getPropertyOptions(t2)), !(i2.hasChanged ?? f$1)(this[t2], s5))
        return;
      this.C(t2, s5, i2);
    }
    false === this.isUpdatePending && (this._$Eg = this._$EP());
  }
  C(t2, s5, i2) {
    this._$AL.has(t2) || this._$AL.set(t2, s5), true === i2.reflect && this._$Em !== t2 && (this._$ET ?? (this._$ET = /* @__PURE__ */ new Set())).add(t2);
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$Eg;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var _a2;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [t4, s6] of this._$Ep)
          this[t4] = s6;
        this._$Ep = void 0;
      }
      const t3 = this.constructor.elementProperties;
      if (t3.size > 0)
        for (const [s6, i2] of t3)
          true !== i2.wrapped || this._$AL.has(s6) || void 0 === this[s6] || this.C(s6, this[s6], i2);
    }
    let t2 = false;
    const s5 = this._$AL;
    try {
      t2 = this.shouldUpdate(s5), t2 ? (this.willUpdate(s5), (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t3) => {
        var _a3;
        return (_a3 = t3.hostUpdate) == null ? void 0 : _a3.call(t3);
      }), this.update(s5)) : this._$Ej();
    } catch (s6) {
      throw t2 = false, this._$Ej(), s6;
    }
    t2 && this._$AE(s5);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var _a2;
    (_a2 = this._$E_) == null ? void 0 : _a2.forEach((t3) => {
      var _a3;
      return (_a3 = t3.hostUpdated) == null ? void 0 : _a3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ej() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Eg;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$ET && (this._$ET = this._$ET.forEach((t3) => this._$EO(t3, this[t3]))), this._$Ej();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d$1("elementProperties")] = /* @__PURE__ */ new Map(), b[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1 == null ? void 0 : p$1({ ReactiveElement: b }), (a$1.reactiveElementVersions ?? (a$1.reactiveElementVersions = [])).push("2.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = globalThis, i$1 = t$1.trustedTypes, s$4 = i$1 ? i$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$2 = "$lit$", h = `lit$${(Math.random() + "").slice(9)}$`, o$2 = "?" + h, n$2 = `<${o$2}>`, r$3 = document, l = () => r$3.createComment(""), c$1 = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, a = Array.isArray, u = (t2) => a(t2) || "function" == typeof (t2 == null ? void 0 : t2[Symbol.iterator]), d = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t2) => (i2, ...s5) => ({ _$litType$: t2, strings: i2, values: s5 }), x = y(1), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), E = r$3.createTreeWalker(r$3, 129);
function C(t2, i2) {
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== s$4 ? s$4.createHTML(i2) : i2;
}
const P = (t2, i2) => {
  const s5 = t2.length - 1, o2 = [];
  let r2, l2 = 2 === i2 ? "<svg>" : "", c2 = f;
  for (let i3 = 0; i3 < s5; i3++) {
    const s6 = t2[i3];
    let a2, u2, d2 = -1, y2 = 0;
    for (; y2 < s6.length && (c2.lastIndex = y2, u2 = c2.exec(s6), null !== u2); )
      y2 = c2.lastIndex, c2 === f ? "!--" === u2[1] ? c2 = v : void 0 !== u2[1] ? c2 = _ : void 0 !== u2[2] ? ($.test(u2[2]) && (r2 = RegExp("</" + u2[2], "g")), c2 = m) : void 0 !== u2[3] && (c2 = m) : c2 === m ? ">" === u2[0] ? (c2 = r2 ?? f, d2 = -1) : void 0 === u2[1] ? d2 = -2 : (d2 = c2.lastIndex - u2[2].length, a2 = u2[1], c2 = void 0 === u2[3] ? m : '"' === u2[3] ? g : p) : c2 === g || c2 === p ? c2 = m : c2 === v || c2 === _ ? c2 = f : (c2 = m, r2 = void 0);
    const x2 = c2 === m && t2[i3 + 1].startsWith("/>") ? " " : "";
    l2 += c2 === f ? s6 + n$2 : d2 >= 0 ? (o2.push(a2), s6.slice(0, d2) + e$2 + s6.slice(d2) + h + x2) : s6 + h + (-2 === d2 ? i3 : x2);
  }
  return [C(t2, l2 + (t2[s5] || "<?>") + (2 === i2 ? "</svg>" : "")), o2];
};
class V {
  constructor({ strings: t2, _$litType$: s5 }, n3) {
    let r2;
    this.parts = [];
    let c2 = 0, a2 = 0;
    const u2 = t2.length - 1, d2 = this.parts, [f2, v2] = P(t2, s5);
    if (this.el = V.createElement(f2, n3), E.currentNode = this.el.content, 2 === s5) {
      const t3 = this.el.content.firstChild;
      t3.replaceWith(...t3.childNodes);
    }
    for (; null !== (r2 = E.nextNode()) && d2.length < u2; ) {
      if (1 === r2.nodeType) {
        if (r2.hasAttributes())
          for (const t3 of r2.getAttributeNames())
            if (t3.endsWith(e$2)) {
              const i2 = v2[a2++], s6 = r2.getAttribute(t3).split(h), e3 = /([.?@])?(.*)/.exec(i2);
              d2.push({ type: 1, index: c2, name: e3[2], strings: s6, ctor: "." === e3[1] ? k : "?" === e3[1] ? H : "@" === e3[1] ? I : R }), r2.removeAttribute(t3);
            } else
              t3.startsWith(h) && (d2.push({ type: 6, index: c2 }), r2.removeAttribute(t3));
        if ($.test(r2.tagName)) {
          const t3 = r2.textContent.split(h), s6 = t3.length - 1;
          if (s6 > 0) {
            r2.textContent = i$1 ? i$1.emptyScript : "";
            for (let i2 = 0; i2 < s6; i2++)
              r2.append(t3[i2], l()), E.nextNode(), d2.push({ type: 2, index: ++c2 });
            r2.append(t3[s6], l());
          }
        }
      } else if (8 === r2.nodeType)
        if (r2.data === o$2)
          d2.push({ type: 2, index: c2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = r2.data.indexOf(h, t3 + 1)); )
            d2.push({ type: 7, index: c2 }), t3 += h.length - 1;
        }
      c2++;
    }
  }
  static createElement(t2, i2) {
    const s5 = r$3.createElement("template");
    return s5.innerHTML = t2, s5;
  }
}
function N(t2, i2, s5 = t2, e3) {
  var _a2, _b;
  if (i2 === w)
    return i2;
  let h2 = void 0 !== e3 ? (_a2 = s5._$Co) == null ? void 0 : _a2[e3] : s5._$Cl;
  const o2 = c$1(i2) ? void 0 : i2._$litDirective$;
  return (h2 == null ? void 0 : h2.constructor) !== o2 && ((_b = h2 == null ? void 0 : h2._$AO) == null ? void 0 : _b.call(h2, false), void 0 === o2 ? h2 = void 0 : (h2 = new o2(t2), h2._$AT(t2, s5, e3)), void 0 !== e3 ? (s5._$Co ?? (s5._$Co = []))[e3] = h2 : s5._$Cl = h2), void 0 !== h2 && (i2 = N(t2, h2._$AS(t2, i2.values), h2, e3)), i2;
}
class S {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    const { el: { content: i2 }, parts: s5 } = this._$AD, e3 = ((t2 == null ? void 0 : t2.creationScope) ?? r$3).importNode(i2, true);
    E.currentNode = e3;
    let h2 = E.nextNode(), o2 = 0, n3 = 0, l2 = s5[0];
    for (; void 0 !== l2; ) {
      if (o2 === l2.index) {
        let i3;
        2 === l2.type ? i3 = new M(h2, h2.nextSibling, this, t2) : 1 === l2.type ? i3 = new l2.ctor(h2, l2.name, l2.strings, this, t2) : 6 === l2.type && (i3 = new L(h2, this, t2)), this._$AV.push(i3), l2 = s5[++n3];
      }
      o2 !== (l2 == null ? void 0 : l2.index) && (h2 = E.nextNode(), o2++);
    }
    return E.currentNode = r$3, e3;
  }
  p(t2) {
    let i2 = 0;
    for (const s5 of this._$AV)
      void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t2, s5, i2), i2 += s5.strings.length - 2) : s5._$AI(t2[i2])), i2++;
  }
}
class M {
  get _$AU() {
    var _a2;
    return ((_a2 = this._$AM) == null ? void 0 : _a2._$AU) ?? this._$Cv;
  }
  constructor(t2, i2, s5, e3) {
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s5, this.options = e3, this._$Cv = (e3 == null ? void 0 : e3.isConnected) ?? true;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (t2 == null ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = N(this, t2, i2), c$1(t2) ? t2 === T || null == t2 || "" === t2 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t2 !== this._$AH && t2 !== w && this._(t2) : void 0 !== t2._$litType$ ? this.g(t2) : void 0 !== t2.nodeType ? this.$(t2) : u(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== T && c$1(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r$3.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    var _a2;
    const { values: i2, _$litType$: s5 } = t2, e3 = "number" == typeof s5 ? this._$AC(t2) : (void 0 === s5.el && (s5.el = V.createElement(C(s5.h, s5.h[0]), this.options)), s5);
    if (((_a2 = this._$AH) == null ? void 0 : _a2._$AD) === e3)
      this._$AH.p(i2);
    else {
      const t3 = new S(e3, this), s6 = t3.u(this.options);
      t3.p(i2), this.$(s6), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = A.get(t2.strings);
    return void 0 === i2 && A.set(t2.strings, i2 = new V(t2)), i2;
  }
  T(t2) {
    a(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s5, e3 = 0;
    for (const h2 of t2)
      e3 === i2.length ? i2.push(s5 = new M(this.k(l()), this.k(l()), this, this.options)) : s5 = i2[e3], s5._$AI(h2), e3++;
    e3 < i2.length && (this._$AR(s5 && s5._$AB.nextSibling, e3), i2.length = e3);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var _a2;
    for ((_a2 = this._$AP) == null ? void 0 : _a2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var _a2;
    void 0 === this._$AM && (this._$Cv = t2, (_a2 = this._$AP) == null ? void 0 : _a2.call(this, t2));
  }
}
class R {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t2, i2, s5, e3, h2) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e3, this.options = h2, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
  }
  _$AI(t2, i2 = this, s5, e3) {
    const h2 = this.strings;
    let o2 = false;
    if (void 0 === h2)
      t2 = N(this, t2, i2, 0), o2 = !c$1(t2) || t2 !== this._$AH && t2 !== w, o2 && (this._$AH = t2);
    else {
      const e4 = t2;
      let n3, r2;
      for (t2 = h2[0], n3 = 0; n3 < h2.length - 1; n3++)
        r2 = N(this, e4[s5 + n3], i2, n3), r2 === w && (r2 = this._$AH[n3]), o2 || (o2 = !c$1(r2) || r2 !== this._$AH[n3]), r2 === T ? t2 = T : t2 !== T && (t2 += (r2 ?? "") + h2[n3 + 1]), this._$AH[n3] = r2;
    }
    o2 && !e3 && this.O(t2);
  }
  O(t2) {
    t2 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 ?? "");
  }
}
class k extends R {
  constructor() {
    super(...arguments), this.type = 3;
  }
  O(t2) {
    this.element[this.name] = t2 === T ? void 0 : t2;
  }
}
class H extends R {
  constructor() {
    super(...arguments), this.type = 4;
  }
  O(t2) {
    this.element.toggleAttribute(this.name, !!t2 && t2 !== T);
  }
}
class I extends R {
  constructor(t2, i2, s5, e3, h2) {
    super(t2, i2, s5, e3, h2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    if ((t2 = N(this, t2, i2, 0) ?? T) === w)
      return;
    const s5 = this._$AH, e3 = t2 === T && s5 !== T || t2.capture !== s5.capture || t2.once !== s5.once || t2.passive !== s5.passive, h2 = t2 !== T && (s5 === T || e3);
    e3 && this.element.removeEventListener(this.name, this, s5), h2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var _a2;
    "function" == typeof this._$AH ? this._$AH.call(((_a2 = this.options) == null ? void 0 : _a2.host) ?? this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s5) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    N(this, t2);
  }
}
const Z = t$1.litHtmlPolyfillSupport;
Z == null ? void 0 : Z(V, M), (t$1.litHtmlVersions ?? (t$1.litHtmlVersions = [])).push("3.1.1");
const j = (t2, i2, s5) => {
  const e3 = (s5 == null ? void 0 : s5.renderBefore) ?? i2;
  let h2 = e3._$litPart$;
  if (void 0 === h2) {
    const t3 = (s5 == null ? void 0 : s5.renderBefore) ?? null;
    e3._$litPart$ = h2 = new M(i2.insertBefore(l(), t3), t3, void 0, s5 ?? {});
  }
  return h2._$AI(t2), h2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$3 = class s extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var _a2;
    const t2 = super.createRenderRoot();
    return (_a2 = this.renderOptions).renderBefore ?? (_a2.renderBefore = t2.firstChild), t2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = j(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(true);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback(), (_a2 = this._$Do) == null ? void 0 : _a2.setConnected(false);
  }
  render() {
    return w;
  }
};
s$3._$litElement$ = true, s$3["finalized"] = true, (_a = globalThis.litElementHydrateSupport) == null ? void 0 : _a.call(globalThis, { LitElement: s$3 });
const r$2 = globalThis.litElementPolyfillSupport;
r$2 == null ? void 0 : r$2({ LitElement: s$3 });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.0.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = (t2) => (e3, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t2, e3);
  }) : customElements.define(t2, e3);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$1 = { attribute: true, type: String, converter: u$1, reflect: false, hasChanged: f$1 }, r$1 = (t2 = o$1, e3, r2) => {
  const { kind: n3, metadata: i2 } = r2;
  let s5 = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s5 && globalThis.litPropertyMetadata.set(i2, s5 = /* @__PURE__ */ new Map()), s5.set(r2.name, t2), "accessor" === n3) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n4 = e3.get.call(this);
      e3.set.call(this, r3), this.requestUpdate(o2, n4, t2);
    }, init(e4) {
      return void 0 !== e4 && this.C(o2, void 0, t2), e4;
    } };
  }
  if ("setter" === n3) {
    const { name: o2 } = r2;
    return function(r3) {
      const n4 = this[o2];
      e3.call(this, r3), this.requestUpdate(o2, n4, t2);
    };
  }
  throw Error("Unsupported decorator location: " + n3);
};
function n$1(t2) {
  return (e3, o2) => "object" == typeof o2 ? r$1(t2, e3, o2) : ((t3, e4, o3) => {
    const r2 = e4.hasOwnProperty(o3);
    return e4.constructor.createProperty(o3, r2 ? { ...t3, wrapped: true } : t3), r2 ? Object.getOwnPropertyDescriptor(e4, o3) : void 0;
  })(t2, e3, o2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function r(r2) {
  return n$1({ ...r2, state: true, attribute: false });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$2 = class s2 extends Event {
  constructor(s5, t2, e3) {
    super("context-request", { bubbles: true, composed: true }), this.context = s5, this.callback = t2, this.subscribe = e3 ?? false;
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function n2(n3) {
  return n3;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let s$1 = class s3 {
  constructor(t2, s5, i2, h2) {
    if (this.subscribe = false, this.provided = false, this.value = void 0, this.t = (t3, s6) => {
      this.unsubscribe && (this.unsubscribe !== s6 && (this.provided = false, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = t3, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = true, this.callback && this.callback(t3, s6)), this.unsubscribe = s6;
    }, this.host = t2, void 0 !== s5.context) {
      const t3 = s5;
      this.context = t3.context, this.callback = t3.callback, this.subscribe = t3.subscribe ?? false;
    } else
      this.context = s5, this.callback = i2, this.subscribe = h2 ?? false;
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0);
  }
  dispatchRequest() {
    this.host.dispatchEvent(new s$2(this.context, this.t, this.subscribe));
  }
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s4 {
  get value() {
    return this.o;
  }
  set value(s5) {
    this.setValue(s5);
  }
  setValue(s5, t2 = false) {
    const i2 = t2 || !Object.is(s5, this.o);
    this.o = s5, i2 && this.updateObservers();
  }
  constructor(s5) {
    this.subscriptions = /* @__PURE__ */ new Map(), this.updateObservers = () => {
      for (const [s6, { disposer: t2 }] of this.subscriptions)
        s6(this.o, t2);
    }, void 0 !== s5 && (this.value = s5);
  }
  addCallback(s5, t2, i2) {
    if (!i2)
      return void s5(this.value);
    this.subscriptions.has(s5) || this.subscriptions.set(s5, { disposer: () => {
      this.subscriptions.delete(s5);
    }, consumerHost: t2 });
    const { disposer: h2 } = this.subscriptions.get(s5);
    s5(this.value, h2);
  }
  clearCallbacks() {
    this.subscriptions.clear();
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e$1 = class e extends Event {
  constructor(t2) {
    super("context-provider", { bubbles: true, composed: true }), this.context = t2;
  }
};
class i extends s4 {
  constructor(s5, e3, i2) {
    var _a2, _b;
    super(void 0 !== e3.context ? e3.initialValue : i2), this.onContextRequest = (t2) => {
      const s6 = t2.composedPath()[0];
      t2.context === this.context && s6 !== this.host && (t2.stopPropagation(), this.addCallback(t2.callback, s6, t2.subscribe));
    }, this.onProviderRequest = (s6) => {
      const e4 = s6.composedPath()[0];
      if (s6.context !== this.context || e4 === this.host)
        return;
      const i3 = /* @__PURE__ */ new Set();
      for (const [s7, { consumerHost: e5 }] of this.subscriptions)
        i3.has(s7) || (i3.add(s7), e5.dispatchEvent(new s$2(this.context, s7, true)));
      s6.stopPropagation();
    }, this.host = s5, void 0 !== e3.context ? this.context = e3.context : this.context = e3, this.attachListeners(), (_b = (_a2 = this.host).addController) == null ? void 0 : _b.call(_a2, this);
  }
  attachListeners() {
    this.host.addEventListener("context-request", this.onContextRequest), this.host.addEventListener("context-provider", this.onProviderRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new e$1(this.context));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e2({ context: e3 }) {
  return (n3, i$12) => {
    const o2 = /* @__PURE__ */ new WeakMap();
    if ("object" == typeof i$12)
      return i$12.addInitializer(function() {
        o2.set(this, new i(this, { context: e3 }));
      }), { get() {
        return n3.get.call(this);
      }, set(t2) {
        var _a2;
        return (_a2 = o2.get(this)) == null ? void 0 : _a2.setValue(t2), n3.set.call(this, t2);
      }, init(t2) {
        var _a2;
        return (_a2 = o2.get(this)) == null ? void 0 : _a2.setValue(t2), t2;
      } };
    {
      n3.constructor.addInitializer((n4) => {
        o2.set(n4, new i(n4, { context: e3 }));
      });
      const r2 = Object.getOwnPropertyDescriptor(n3, i$12);
      let s5;
      if (void 0 === r2) {
        const t2 = /* @__PURE__ */ new WeakMap();
        s5 = { get: function() {
          return t2.get(this);
        }, set: function(e4) {
          o2.get(this).setValue(e4), t2.set(this, e4);
        }, configurable: true, enumerable: true };
      } else {
        const t2 = r2.set;
        s5 = { ...r2, set: function(e4) {
          o2.get(this).setValue(e4), t2 == null ? void 0 : t2.call(this, e4);
        } };
      }
      return void Object.defineProperty(n3, i$12, s5);
    }
  };
}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function c({ context: c2, subscribe: e3 }) {
  return (o2, n3) => {
    "object" == typeof n3 ? n3.addInitializer(function() {
      new s$1(this, { context: c2, callback: (t2) => {
        this[n3.name] = t2;
      }, subscribe: e3 });
    }) : o2.constructor.addInitializer((o3) => {
      new s$1(o3, { context: c2, callback: (t2) => {
        o3[n3] = t2;
      }, subscribe: e3 });
    });
  };
}
let Main$1 = class Main extends s$3 {
  constructor(update2, getModel, setModel) {
    super();
    this.updateFn = update2;
    this.getModel = getModel;
    this.setModel = setModel;
    this.addEventListener(
      "mvu:message",
      (ev) => {
        const msg = ev.detail;
        console.log("Got message: ", msg);
        this.receive(msg);
      }
    );
  }
  receive(msg) {
    const next = this.updateFn(this.getModel(), msg);
    const promise = next;
    if (typeof (promise == null ? void 0 : promise.then) === "function") {
      promise.then((mapFn) => {
        const next2 = mapFn(this.getModel());
        console.log("Updating model in Promise:", next2);
        this.setModel(next2);
      });
    } else {
      console.log("Updating model:", next);
      this.setModel(next);
    }
  }
};
let View$1 = class View extends s$3 {
  dispatchMessage(msg, target = this) {
    const ev = new CustomEvent("mvu:message", {
      bubbles: true,
      composed: true,
      detail: msg
    });
    target.dispatchEvent(ev);
  }
};
class Dispatch {
  constructor() {
    this._handlers = /* @__PURE__ */ new Map();
    this.update = this._update.bind(this);
  }
  addMessage(type, handler) {
    console.log("Message added for dispatch:", type);
    this._handlers.set(type, handler);
  }
  // bound function
  _update(model, msg) {
    const { type } = msg;
    const handler = this._handlers.get(type);
    return handler ? handler(msg, model) : model;
  }
}
function updateProps$1(props) {
  return (m2) => Object.assign({}, m2, props);
}
function noUpdate$1(m2) {
  return m2;
}
const SERVER_ROOT = window.location.origin;
const API_PATH = "/api";
const API_ROOT = "http://localhost:3000/api";
const TOKEN_KEY = "AUTH_TOKEN";
const USER_EMAIL_KEY = "USER_EMAIL_KEY";
const _APIUser = class _APIUser {
  constructor() {
    this.authenticated = false;
    this.email = "random@calpoly.edu";
    this.signOut = () => {
    };
  }
  static deauthenticate(user) {
    const anon = new _APIUser();
    console.log("Deauthenticating", user, _APIUser._theUser);
    if (user === _APIUser._theUser) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_EMAIL_KEY);
      _APIUser._theUser = anon;
    }
    return anon;
  }
};
_APIUser._theUser = new _APIUser();
let APIUser = _APIUser;
class AuthenticatedUser extends APIUser {
  constructor(token, signOut) {
    super();
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const payload = decodeURIComponent(
      window.atob(base64).split("").map(function(c2) {
        return "%" + ("00" + c2.charCodeAt(0).toString(16)).slice(-2);
      }).join("")
    );
    const jsonPayload = JSON.parse(payload);
    console.log("Token payload", jsonPayload);
    this.token = token;
    this.authenticated = true;
    this.email = jsonPayload.email;
    this.signOut = signOut;
  }
  static authenticate(token, signOut) {
    const authenticatedUser = new AuthenticatedUser(
      token,
      signOut
    );
    APIUser._theUser = authenticatedUser;
    localStorage.setItem(TOKEN_KEY, token);
    return authenticatedUser;
  }
  static authenticateFromLocalStorage(signOut) {
    const priorToken = localStorage.getItem(TOKEN_KEY);
    return priorToken ? AuthenticatedUser.authenticate(priorToken, signOut) : APIUser._theUser;
  }
}
class JSONRequest {
  constructor(body) {
    this._base = API_PATH;
    this.json = body;
  }
  base(newBase = "") {
    this._base = newBase;
    return this;
  }
  get(endpoint) {
    return fetch(this._url(endpoint), {
      headers: this._headers(),
      body: this.json && JSON.stringify(this.json)
    });
  }
  post(endpoint) {
    return fetch(this._url(endpoint), {
      method: "POST",
      headers: this._headers(),
      body: this.json && JSON.stringify(this.json)
    });
  }
  put(endpoint) {
    return fetch(this._url(endpoint), {
      method: "PUT",
      headers: this._headers(),
      body: this.json && JSON.stringify(this.json)
    });
  }
  _headers() {
    const hasBody = this.json !== void 0;
    const isAuthenticated = APIUser._theUser.authenticated;
    const contentType = { "Content-Type": "application/json" };
    if (isAuthenticated) {
      const token = APIUser._theUser.token;
      const authorization = {
        Authorization: `Bearer ${token}`
      };
      if (hasBody)
        return { ...contentType, ...authorization };
      else
        return authorization;
    } else {
      if (hasBody)
        return { ...contentType };
      else
        return void 0;
    }
  }
  _url(path) {
    return `${SERVER_ROOT}${this._base}${path}`;
  }
}
class APIRequest extends JSONRequest {
  constructor() {
    super(void 0);
  }
}
function serverPath(path) {
  return `${API_ROOT}${path}`;
}
var __defProp$r = Object.defineProperty;
var __getOwnPropDesc$r = Object.getOwnPropertyDescriptor;
var __decorateClass$r = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$r(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$r(target, key, result);
  return result;
};
const context = n2("ClubModel");
const init = {
  user: new APIUser()
};
class Main2 extends Main$1 {
  constructor(update2) {
    super(update2, () => this.model, (next) => this.model = next);
    this.model = init;
  }
}
__decorateClass$r([
  e2({ context }),
  r()
], Main2.prototype, "model", 2);
class View2 extends View$1 {
  getFromModel(key) {
    this.requestUpdate();
    if (this._model) {
      return this._model[key];
    }
  }
}
__decorateClass$r([
  c({ context, subscribe: true }),
  n$1({ attribute: false })
], View2.prototype, "_model", 2);
const createDispatch = () => new Dispatch();
const updateProps = updateProps$1;
const noUpdate = noUpdate$1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o = (o2) => o2 ?? T;
var __defProp$q = Object.defineProperty;
var __getOwnPropDesc$q = Object.getOwnPropertyDescriptor;
var __decorateClass$q = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$q(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$q(target, key, result);
  return result;
};
let ToggleSwitchElement = class extends s$3 {
  constructor() {
    super(...arguments);
    this.on = false;
  }
  render() {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    return x`
        <label>
            <slot> Label </slot>
            <span class="slider">
                <input type="checkbox"
                @change=${this._handleChange}
                .checked=${isDarkMode}>
            </span>
        </label>`;
  }
  _handleChange(ev) {
    const target = ev.target;
    this.on = target == null ? void 0 : target.checked;
    console.log("Toggling Dark mode", ev);
    localStorage.setItem("dark-mode", String(this.on));
    document.body.classList.toggle("dark-mode", this.on);
  }
};
ToggleSwitchElement.styles = i$3`
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

  `;
__decorateClass$q([
  n$1({ reflect: true, type: Boolean })
], ToggleSwitchElement.prototype, "on", 2);
ToggleSwitchElement = __decorateClass$q([
  t("toggle-switch")
], ToggleSwitchElement);
var __defProp$p = Object.defineProperty;
var __getOwnPropDesc$p = Object.getOwnPropertyDescriptor;
var __decorateClass$p = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$p(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$p(target, key, result);
  return result;
};
let CustomModal = class extends s$3 {
  constructor() {
    super();
    this.customId = "id";
    this.addEventListener("call-modals-close-modal", this.closeModal);
  }
  render() {
    return x`
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
    `;
  }
  openModal() {
    var _a2, _b;
    console.log("Opening modal:", this.customId);
    const modal = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(`#${this.customId}-modal`);
    const overlay = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(`#${this.customId}-overlay`);
    if (modal && overlay) {
      modal.style.display = "block";
      overlay.style.display = "block";
    }
  }
  closeModal() {
    var _a2, _b;
    console.log("Closing modal:", this.customId);
    const modal = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector(`#${this.customId}-modal`);
    const overlay = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(`#${this.customId}-overlay`);
    if (modal && overlay) {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  }
};
CustomModal.styles = i$3`
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
  `;
__decorateClass$p([
  n$1({ type: String })
], CustomModal.prototype, "customId", 2);
CustomModal = __decorateClass$p([
  t("custom-modal")
], CustomModal);
var __defProp$o = Object.defineProperty;
var __getOwnPropDesc$o = Object.getOwnPropertyDescriptor;
var __decorateClass$o = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$o(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$o(target, key, result);
  return result;
};
let AlertModal = class extends s$3 {
  constructor() {
    super(...arguments);
    this.alertVisible = true;
  }
  render() {
    return x`
            <div class="alert">
                <span class="closebtn" @click=${this.closeAlert}> &times; </span>
                <slot name="message"> Default Message </slot>
            </div>
        `;
  }
  connectedCallback() {
    super.connectedCallback();
    this.autoHideAlert();
  }
  autoHideAlert() {
    setTimeout(() => {
      if (this.alertVisible) {
        this.closeAlert();
      }
    }, 6e3);
  }
  closeAlert() {
    this.alertVisible = false;
    this.style.display = "none";
    this.requestUpdate();
  }
};
AlertModal.styles = i$3`
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
    `;
__decorateClass$o([
  r()
], AlertModal.prototype, "alertVisible", 2);
AlertModal = __decorateClass$o([
  t("alert-modal")
], AlertModal);
var __defProp$n = Object.defineProperty;
var __getOwnPropDesc$n = Object.getOwnPropertyDescriptor;
var __decorateClass$n = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$n(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$n(target, key, result);
  return result;
};
const renderClub$2 = (club) => x`
    <div class="tag">
        ${club}
    </div>
  `;
let UserProfileElement = class extends s$3 {
  constructor() {
    super(...arguments);
    this.path = "";
  }
  render() {
    var _a2;
    return this.profile ? x`
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
                ${(_a2 = this.profile.clubs) == null ? void 0 : _a2.map(renderClub$2)}
            </dd>
        </dl>
    ` : x`<div>No content able to be found </div>`;
  }
  _fetchData(path) {
    fetch(serverPath(path)).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return null;
    }).then((json) => {
      if (json)
        this.profile = json;
    });
  }
  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
};
UserProfileElement.styles = i$3`
    :host {
      display: block;
    }
  `;
__decorateClass$n([
  n$1()
], UserProfileElement.prototype, "path", 2);
__decorateClass$n([
  r()
], UserProfileElement.prototype, "profile", 2);
UserProfileElement = __decorateClass$n([
  t("user-profile")
], UserProfileElement);
let UserProfileEditElement = class extends UserProfileElement {
  constructor() {
    super(...arguments);
    this.originalProfile = this.profile;
  }
  render() {
    var _a2;
    return this.profile ? x`<form @submit=${this._handleSubmit}>
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
            <option value=${o(this.profile.pronouns)}>${this.profile.pronouns}</option>
            <option value="She/her/hers">She/her/hers</option>
            <option value="He/him/his">He/him/his</option>
            <option value="They/them">They/them</option>
            <option value="Prefer not to share">Prefer not to share</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          <span> Major </span>
          <input name="major" value=${o(this.profile.major)} />
        </label>
        <label>
          <span> Clubs </span>
          <input name="clubs" value=${o((_a2 = this.profile.clubs) == null ? void 0 : _a2.join(", "))} />
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
    </form>` : x`<div> </div>`;
  }
  _handleSubmit(ev) {
    ev.preventDefault();
    const target = ev.target;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries()).map(([k2, v2]) => v2 === "" ? [k2] : [k2, v2]).map(
      ([k2, v2]) => k2 === "clubs" ? [k2, v2.split(",").map((s5) => s5.trim())] : [k2, v2]
    );
    const json = Object.fromEntries(entries);
    this._putData(json);
  }
  _putData(json) {
    fetch(serverPath(this.path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json)
    }).then((response) => {
      if (response.status === 200)
        return response.json();
      else
        return null;
    }).then((json2) => {
      if (json2) {
        this.profile = json2;
        console.log("Sucessfully updated profile");
        this.closeModal();
      }
    }).catch(
      (err) => console.log("Failed to PUT form data", err)
    );
  }
  closeModal() {
    this.dispatchEvent(new CustomEvent("call-modals-close-modal", {
      detail: { message: "user wants to close edit user profile modal" },
      bubbles: true,
      composed: true
    }));
  }
};
UserProfileEditElement.styles = i$3`
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
    `;
__decorateClass$n([
  r()
], UserProfileEditElement.prototype, "originalProfile", 2);
UserProfileEditElement = __decorateClass$n([
  t("user-profile-edit")
], UserProfileEditElement);
var __defProp$m = Object.defineProperty;
var __getOwnPropDesc$m = Object.getOwnPropertyDescriptor;
var __decorateClass$m = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$m(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$m(target, key, result);
  return result;
};
let BlankViewElement = class extends View2 {
  render() {
    return x`
            <div> </div>
        `;
  }
};
BlankViewElement.styles = i$3`
        :host {
            display: contents;
        }
    `;
BlankViewElement = __decorateClass$m([
  t("blank-view")
], BlankViewElement);
function renderAllClubs(clubs) {
  if (clubs && Array.isArray(clubs)) {
    return clubs.map((club) => {
      return renderClub$1(club.name, club.description);
    });
  }
}
function renderClub$1(name, description) {
  return x`
        <club-overview-card linkHref="/app/club/${name}">
            <span slot="club-name"> ${name} </span>
            <span slot="club-description"> ${description} </span>
        </club-overview-card>
    `;
}
function renderAllEvents(events, host) {
  if (events && Array.isArray(events) && events.length !== 0) {
    return events.map((event) => {
      return renderEvent(event, host);
    });
  }
}
function renderEvent(event, host) {
  console.log("loggging event");
  const href = "/app/event/" + host + "/" + event._id;
  return x`
        <event-overview-card linkHref=${href}>
            <span slot="name"> ${event.name} </span>
            <span slot="date"> ${formatDate(event.date)} </span>
            <span slot="time"> ${getTime(event.start_time, event.end_time)} </span>
            <span slot="location"> ${event.location} </span>
        </event-overview-card>
    `;
}
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
function isNotEmpty(obj) {
  return Object.keys(obj).length !== 0;
}
function getTime(start_time, end_time) {
  const [hours, minutes] = end_time.split(":");
  const [hours_1, minutes_1] = start_time.split(":");
  const hours12 = hours % 12 || 12;
  const hours12_1 = hours_1 % 12 || 12;
  const ampm = hours >= 12 ? "PM" : "AM";
  const ampm_1 = hours_1 >= 12 ? "PM" : "AM";
  if (ampm === ampm_1) {
    return `${hours12_1}:${minutes_1} - ${hours12}:${minutes} ${ampm} PST`;
  } else {
    return `${hours12_1}:${minutes_1} ${ampm_1} - ${hours12}:${minutes} ${ampm} PST`;
  }
}
var __defProp$l = Object.defineProperty;
var __getOwnPropDesc$l = Object.getOwnPropertyDescriptor;
var __decorateClass$l = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$l(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$l(target, key, result);
  return result;
};
let NoContentElement = class extends View2 {
  render() {
    return x`
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
            </div>`;
  }
};
NoContentElement.styles = i$3`
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
    `;
NoContentElement = __decorateClass$l([
  t("no-content")
], NoContentElement);
var __defProp$k = Object.defineProperty;
var __getOwnPropDesc$k = Object.getOwnPropertyDescriptor;
var __decorateClass$k = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$k(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$k(target, key, result);
  return result;
};
const renderClub = (club) => x`
    <a href="/app/club/${club}">
      <div class="tag">
            ${club}
      </div>
    </a>
  `;
let UserProfile2Element = class extends View2 {
  get profile() {
    return this.using || {};
  }
  render() {
    var _a2;
    return this.profile && isNotEmpty(this.profile) ? x`
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
                ${(_a2 = this.profile.clubs) == null ? void 0 : _a2.map(renderClub)}
            </dd>
        </dl>
    ` : x`<no-content> </no-content>`;
  }
};
UserProfile2Element.styles = i$3`
    :host {
      display: block;
    }
  `;
__decorateClass$k([
  n$1({ attribute: false })
], UserProfile2Element.prototype, "using", 2);
UserProfile2Element = __decorateClass$k([
  t("user-profile-2")
], UserProfile2Element);
let UserProfile2EditElement = class extends UserProfile2Element {
  render() {
    var _a2;
    return this.profile ? x`<form @submit=${this._handleSubmit}>
      <div class="table-format">
        <label>
          <span class="with-icon"> Name 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
          <input class='disabled' disabled name="name" value=${this.profile.name || ""} />
        </label>
        <label>
          <span class="with-icon"> Email 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
          <input class='disabled' name="email" disabled value=${this.profile.email || ""} />
        </label>
        <label>
          <span> Pronouns </span>
          <select name="pronouns">
            <option value=${o(this.profile.pronouns)}>${this.profile.pronouns}</option>
            <option value="She/her/hers">She/her/hers</option>
            <option value="He/him/his">He/him/his</option>
            <option value="They/them">They/them</option>
            <option value="Prefer not to share">Prefer not to share</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          <span> Major </span>
          <input name="major" value=${o(this.profile.major)} />
        </label>
        <label>
          <span class="with-icon"> Clubs 
            <svg class="lock-icon">
                <use href="/icons/user-interface.svg#icon-lock" />
            </svg>
          </span>
            <textarea class='disabled' disabled name="clubs" rows="3" cols="44" type="text">${o((_a2 = this.profile.clubs) == null ? void 0 : _a2.join(", "))}</textarea>
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
    </form>` : x`<div> </div>`;
  }
  _handleSubmit(ev) {
    var _a2;
    ev.preventDefault();
    const target = ev.target;
    const formdata = new FormData(target);
    const entries = Array.from(formdata.entries()).map(([k2, v2]) => v2 === "" ? [k2] : [k2, v2]).map(
      ([k2, v2]) => k2 === "clubs" ? [k2, v2.split(",").map((s5) => s5.trim())] : [k2, v2]
    );
    const json = Object.fromEntries(entries);
    console.log("Submitting Form", json);
    this.dispatchMessage({
      type: "ProfileSaved",
      email: ((_a2 = this.profile) == null ? void 0 : _a2.email) || "",
      profile: json
    });
    this.closeModal();
  }
  closeModal() {
    this.dispatchEvent(new CustomEvent("call-modals-close-modal", {
      detail: { message: "user wants to close edit user profile modal" },
      bubbles: true,
      composed: true
    }));
  }
};
UserProfile2EditElement.styles = i$3`
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
    `;
UserProfile2EditElement = __decorateClass$k([
  t("user-profile2-edit")
], UserProfile2EditElement);
function toArray(objectOrArray) {
  objectOrArray = objectOrArray || [];
  return Array.isArray(objectOrArray) ? objectOrArray : [objectOrArray];
}
function log(msg) {
  return `[Vaadin.Router] ${msg}`;
}
function logValue(value) {
  if (typeof value !== "object") {
    return String(value);
  }
  const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
  if (stringType === "Object" || stringType === "Array") {
    return `${stringType} ${JSON.stringify(value)}`;
  } else {
    return stringType;
  }
}
const MODULE = "module";
const NOMODULE = "nomodule";
const bundleKeys = [MODULE, NOMODULE];
function ensureBundle(src) {
  if (!src.match(/.+\.[m]?js$/)) {
    throw new Error(
      log(`Unsupported type for bundle "${src}": .js or .mjs expected.`)
    );
  }
}
function ensureRoute(route) {
  if (!route || !isString(route.path)) {
    throw new Error(
      log(`Expected route config to be an object with a "path" string property, or an array of such objects`)
    );
  }
  const bundle = route.bundle;
  const stringKeys = ["component", "redirect", "bundle"];
  if (!isFunction(route.action) && !Array.isArray(route.children) && !isFunction(route.children) && !isObject(bundle) && !stringKeys.some((key) => isString(route[key]))) {
    throw new Error(
      log(
        `Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" or "action" function but none found.`
      )
    );
  }
  if (bundle) {
    if (isString(bundle)) {
      ensureBundle(bundle);
    } else if (!bundleKeys.some((key) => key in bundle)) {
      throw new Error(
        log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both')
      );
    } else {
      bundleKeys.forEach((key) => key in bundle && ensureBundle(bundle[key]));
    }
  }
  if (route.redirect) {
    ["bundle", "component"].forEach((overriddenProp) => {
      if (overriddenProp in route) {
        console.warn(
          log(
            `Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`
          )
        );
      }
    });
  }
}
function ensureRoutes(routes2) {
  toArray(routes2).forEach((route) => ensureRoute(route));
}
function loadScript(src, key) {
  let script = document.head.querySelector('script[src="' + src + '"][async]');
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("src", src);
    if (key === MODULE) {
      script.setAttribute("type", MODULE);
    } else if (key === NOMODULE) {
      script.setAttribute(NOMODULE, "");
    }
    script.async = true;
  }
  return new Promise((resolve, reject) => {
    script.onreadystatechange = script.onload = (e3) => {
      script.__dynamicImportLoaded = true;
      resolve(e3);
    };
    script.onerror = (e3) => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      reject(e3);
    };
    if (script.parentNode === null) {
      document.head.appendChild(script);
    } else if (script.__dynamicImportLoaded) {
      resolve();
    }
  });
}
function loadBundle(bundle) {
  if (isString(bundle)) {
    return loadScript(bundle);
  } else {
    return Promise.race(
      bundleKeys.filter((key) => key in bundle).map((key) => loadScript(bundle[key], key))
    );
  }
}
function fireRouterEvent(type, detail) {
  return !window.dispatchEvent(new CustomEvent(
    `vaadin-router-${type}`,
    { cancelable: type === "go", detail }
  ));
}
function isObject(o2) {
  return typeof o2 === "object" && !!o2;
}
function isFunction(f2) {
  return typeof f2 === "function";
}
function isString(s5) {
  return typeof s5 === "string";
}
function getNotFoundError(context2) {
  const error = new Error(log(`Page not found (${context2.pathname})`));
  error.context = context2;
  error.code = 404;
  return error;
}
const notFoundResult = new class NotFoundResult {
}();
function getAnchorOrigin(anchor) {
  const port = anchor.port;
  const protocol = anchor.protocol;
  const defaultHttp = protocol === "http:" && port === "80";
  const defaultHttps = protocol === "https:" && port === "443";
  const host = defaultHttp || defaultHttps ? anchor.hostname : anchor.host;
  return `${protocol}//${host}`;
}
function vaadinRouterGlobalClickHandler(event) {
  if (event.defaultPrevented) {
    return;
  }
  if (event.button !== 0) {
    return;
  }
  if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  let anchor = event.target;
  const path = event.composedPath ? event.composedPath() : event.path || [];
  for (let i2 = 0; i2 < path.length; i2++) {
    const target = path[i2];
    if (target.nodeName && target.nodeName.toLowerCase() === "a") {
      anchor = target;
      break;
    }
  }
  while (anchor && anchor.nodeName.toLowerCase() !== "a") {
    anchor = anchor.parentNode;
  }
  if (!anchor || anchor.nodeName.toLowerCase() !== "a") {
    return;
  }
  if (anchor.target && anchor.target.toLowerCase() !== "_self") {
    return;
  }
  if (anchor.hasAttribute("download")) {
    return;
  }
  if (anchor.hasAttribute("router-ignore")) {
    return;
  }
  if (anchor.pathname === window.location.pathname && anchor.hash !== "") {
    return;
  }
  const origin = anchor.origin || getAnchorOrigin(anchor);
  if (origin !== window.location.origin) {
    return;
  }
  const { pathname, search, hash } = anchor;
  if (fireRouterEvent("go", { pathname, search, hash })) {
    event.preventDefault();
    if (event && event.type === "click") {
      window.scrollTo(0, 0);
    }
  }
}
const CLICK = {
  activate() {
    window.document.addEventListener("click", vaadinRouterGlobalClickHandler);
  },
  inactivate() {
    window.document.removeEventListener("click", vaadinRouterGlobalClickHandler);
  }
};
const isIE = /Trident/.test(navigator.userAgent);
if (isIE && !isFunction(window.PopStateEvent)) {
  window.PopStateEvent = function(inType, params) {
    params = params || {};
    var e3 = document.createEvent("Event");
    e3.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
    e3.state = params.state || null;
    return e3;
  };
  window.PopStateEvent.prototype = window.Event.prototype;
}
function vaadinRouterGlobalPopstateHandler(event) {
  if (event.state === "vaadin-router-ignore") {
    return;
  }
  const { pathname, search, hash } = window.location;
  fireRouterEvent("go", { pathname, search, hash });
}
const POPSTATE = {
  activate() {
    window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
  },
  inactivate() {
    window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
  }
};
var pathToRegexp_1 = pathToRegexp$1;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
var DEFAULT_DELIMITER = "/";
var DEFAULT_DELIMITERS = "./";
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  "(\\\\.)",
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
].join("|"), "g");
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = "";
  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
  var pathEscaped = false;
  var res;
  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m2 = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m2.length;
    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }
    var prev = "";
    var next = str[index];
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];
    if (!pathEscaped && path.length) {
      var k2 = path.length - 1;
      if (delimiters.indexOf(path[k2]) > -1) {
        prev = path[k2];
        path = path.slice(0, k2);
      }
    }
    if (path) {
      tokens.push(path);
      path = "";
      pathEscaped = false;
    }
    var partial = prev !== "" && next !== void 0 && next !== prev;
    var repeat = modifier === "+" || modifier === "*";
    var optional = modifier === "?" || modifier === "*";
    var delimiter = prev || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter,
      optional,
      repeat,
      partial,
      pattern: pattern ? escapeGroup(pattern) : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }
  return tokens;
}
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
function tokensToFunction(tokens) {
  var matches = new Array(tokens.length);
  for (var i2 = 0; i2 < tokens.length; i2++) {
    if (typeof tokens[i2] === "object") {
      matches[i2] = new RegExp("^(?:" + tokens[i2].pattern + ")$");
    }
  }
  return function(data, options) {
    var path = "";
    var encode = options && options.encode || encodeURIComponent;
    for (var i3 = 0; i3 < tokens.length; i3++) {
      var token = tokens[i3];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var segment;
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
        }
        if (value.length === 0) {
          if (token.optional)
            continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }
        for (var j2 = 0; j2 < value.length; j2++) {
          segment = encode(value[j2], token);
          if (!matches[i3].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
          }
          path += (j2 === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        segment = encode(String(value), token);
        if (!matches[i3].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }
        path += token.prefix + segment;
        continue;
      }
      if (token.optional) {
        if (token.partial)
          path += token.prefix;
        continue;
      }
      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? "an array" : "a string"));
    }
    return path;
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groups = path.source.match(/\((?!\?)/g);
  if (groups) {
    for (var i2 = 0; i2 < groups.length; i2++) {
      keys.push({
        name: i2,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      });
    }
  }
  return path;
}
function arrayToRegexp(path, keys, options) {
  var parts = [];
  for (var i2 = 0; i2 < path.length; i2++) {
    parts.push(pathToRegexp$1(path[i2], keys, options).source);
  }
  return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
function tokensToRegExp(tokens, keys, options) {
  options = options || {};
  var strict = options.strict;
  var start = options.start !== false;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat("$").join("|");
  var route = start ? "^" : "";
  var isEndDelimited = tokens.length === 0;
  for (var i2 = 0; i2 < tokens.length; i2++) {
    var token = tokens[i2];
    if (typeof token === "string") {
      route += escapeString(token);
      isEndDelimited = i2 === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var capture = token.repeat ? "(?:" + token.pattern + ")(?:" + escapeString(token.delimiter) + "(?:" + token.pattern + "))*" : token.pattern;
      if (keys)
        keys.push(token);
      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + "(" + capture + ")?";
        } else {
          route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
        }
      } else {
        route += escapeString(token.prefix) + "(" + capture + ")";
      }
    }
  }
  if (end) {
    if (!strict)
      route += "(?:" + delimiter + ")?";
    route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
  } else {
    if (!strict)
      route += "(?:" + delimiter + "(?=" + endsWith + "))?";
    if (!isEndDelimited)
      route += "(?=" + delimiter + "|" + endsWith + ")";
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp$1(path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }
  if (Array.isArray(path)) {
    return arrayToRegexp(
      /** @type {!Array} */
      path,
      keys,
      options
    );
  }
  return stringToRegexp(
    /** @type {string} */
    path,
    keys,
    options
  );
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
const { hasOwnProperty } = Object.prototype;
const cache$1 = /* @__PURE__ */ new Map();
cache$1.set("|false", {
  keys: [],
  pattern: /(?:)/
});
function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch (err) {
    return val;
  }
}
function matchPath(routepath, path, exact, parentKeys, parentParams) {
  exact = !!exact;
  const cacheKey = `${routepath}|${exact}`;
  let regexp = cache$1.get(cacheKey);
  if (!regexp) {
    const keys = [];
    regexp = {
      keys,
      pattern: pathToRegexp_1(routepath, keys, {
        end: exact,
        strict: routepath === ""
      })
    };
    cache$1.set(cacheKey, regexp);
  }
  const m2 = regexp.pattern.exec(path);
  if (!m2) {
    return null;
  }
  const params = Object.assign({}, parentParams);
  for (let i2 = 1; i2 < m2.length; i2++) {
    const key = regexp.keys[i2 - 1];
    const prop = key.name;
    const value = m2[i2];
    if (value !== void 0 || !hasOwnProperty.call(params, prop)) {
      if (key.repeat) {
        params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }
  return {
    path: m2[0],
    keys: (parentKeys || []).concat(regexp.keys),
    params
  };
}
function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
  let match;
  let childMatches;
  let childIndex = 0;
  let routepath = route.path || "";
  if (routepath.charAt(0) === "/") {
    if (ignoreLeadingSlash) {
      routepath = routepath.substr(1);
    }
    ignoreLeadingSlash = true;
  }
  return {
    next(routeToSkip) {
      if (route === routeToSkip) {
        return { done: true };
      }
      const children = route.__children = route.__children || route.children;
      if (!match) {
        match = matchPath(routepath, pathname, !children, parentKeys, parentParams);
        if (match) {
          return {
            done: false,
            value: {
              route,
              keys: match.keys,
              params: match.params,
              path: match.path
            }
          };
        }
      }
      if (match && children) {
        while (childIndex < children.length) {
          if (!childMatches) {
            const childRoute = children[childIndex];
            childRoute.parent = route;
            let matchedLength = match.path.length;
            if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") {
              matchedLength += 1;
            }
            childMatches = matchRoute(
              childRoute,
              pathname.substr(matchedLength),
              ignoreLeadingSlash,
              match.keys,
              match.params
            );
          }
          const childMatch = childMatches.next(routeToSkip);
          if (!childMatch.done) {
            return {
              done: false,
              value: childMatch.value
            };
          }
          childMatches = null;
          childIndex++;
        }
      }
      return { done: true };
    }
  };
}
function resolveRoute(context2) {
  if (isFunction(context2.route.action)) {
    return context2.route.action(context2);
  }
  return void 0;
}
function isChildRoute(parentRoute, childRoute) {
  let route = childRoute;
  while (route) {
    route = route.parent;
    if (route === parentRoute) {
      return true;
    }
  }
  return false;
}
function generateErrorMessage(currentContext) {
  let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
  const routePath = (currentContext.route || {}).path;
  if (routePath) {
    errorMessage += ` Resolution had failed on route: '${routePath}'`;
  }
  return errorMessage;
}
function updateChainForRoute(context2, match) {
  const { route, path } = match;
  if (route && !route.__synthetic) {
    const item = { path, route };
    if (!context2.chain) {
      context2.chain = [];
    } else {
      if (route.parent) {
        let i2 = context2.chain.length;
        while (i2-- && context2.chain[i2].route && context2.chain[i2].route !== route.parent) {
          context2.chain.pop();
        }
      }
    }
    context2.chain.push(item);
  }
}
class Resolver {
  constructor(routes2, options = {}) {
    if (Object(routes2) !== routes2) {
      throw new TypeError("Invalid routes");
    }
    this.baseUrl = options.baseUrl || "";
    this.errorHandler = options.errorHandler;
    this.resolveRoute = options.resolveRoute || resolveRoute;
    this.context = Object.assign({ resolver: this }, options.context);
    this.root = Array.isArray(routes2) ? { path: "", __children: routes2, parent: null, __synthetic: true } : routes2;
    this.root.parent = null;
  }
  /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @return {!Array<!Router.Route>}
   */
  getRoutes() {
    return [...this.root.__children];
  }
  /**
   * Sets the routing config (replacing the existing one).
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   */
  setRoutes(routes2) {
    ensureRoutes(routes2);
    const newRoutes = [...toArray(routes2)];
    this.root.__children = newRoutes;
  }
  /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   * @return {!Array<!Router.Route>}
   * @protected
   */
  addRoutes(routes2) {
    ensureRoutes(routes2);
    this.root.__children.push(...toArray(routes2));
    return this.getRoutes();
  }
  /**
   * Removes all existing routes from the routing config.
   */
  removeRoutes() {
    this.setRoutes([]);
  }
  /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   * @return {!Promise<any>}
   */
  resolve(pathnameOrContext) {
    const context2 = Object.assign(
      {},
      this.context,
      isString(pathnameOrContext) ? { pathname: pathnameOrContext } : pathnameOrContext
    );
    const match = matchRoute(
      this.root,
      this.__normalizePathname(context2.pathname),
      this.baseUrl
    );
    const resolve = this.resolveRoute;
    let matches = null;
    let nextMatches = null;
    let currentContext = context2;
    function next(resume, parent = matches.value.route, prevResult) {
      const routeToSkip = prevResult === null && matches.value.route;
      matches = nextMatches || match.next(routeToSkip);
      nextMatches = null;
      if (!resume) {
        if (matches.done || !isChildRoute(parent, matches.value.route)) {
          nextMatches = matches;
          return Promise.resolve(notFoundResult);
        }
      }
      if (matches.done) {
        return Promise.reject(getNotFoundError(context2));
      }
      currentContext = Object.assign(
        currentContext ? { chain: currentContext.chain ? currentContext.chain.slice(0) : [] } : {},
        context2,
        matches.value
      );
      updateChainForRoute(currentContext, matches.value);
      return Promise.resolve(resolve(currentContext)).then((resolution) => {
        if (resolution !== null && resolution !== void 0 && resolution !== notFoundResult) {
          currentContext.result = resolution.result || resolution;
          return currentContext;
        }
        return next(resume, parent, resolution);
      });
    }
    context2.next = next;
    return Promise.resolve().then(() => next(true, this.root)).catch((error) => {
      const errorMessage = generateErrorMessage(currentContext);
      if (!error) {
        error = new Error(errorMessage);
      } else {
        console.warn(errorMessage);
      }
      error.context = error.context || currentContext;
      if (!(error instanceof DOMException)) {
        error.code = error.code || 500;
      }
      if (this.errorHandler) {
        currentContext.result = this.errorHandler(error);
        return currentContext;
      }
      throw error;
    });
  }
  /**
   * URL constructor polyfill hook. Creates and returns an URL instance.
   */
  static __createUrl(url, base) {
    return new URL(url, base);
  }
  /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */
  get __effectiveBaseUrl() {
    return this.baseUrl ? this.constructor.__createUrl(
      this.baseUrl,
      document.baseURI || document.URL
    ).href.replace(/[^\/]*$/, "") : "";
  }
  /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */
  __normalizePathname(pathname) {
    if (!this.baseUrl) {
      return pathname;
    }
    const base = this.__effectiveBaseUrl;
    const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
    if (normalizedUrl.slice(0, base.length) === base) {
      return normalizedUrl.slice(base.length);
    }
  }
}
Resolver.pathToRegexp = pathToRegexp_1;
const { pathToRegexp } = Resolver;
const cache = /* @__PURE__ */ new Map();
function cacheRoutes(routesByName, route, routes2) {
  const name = route.name || route.component;
  if (name) {
    if (routesByName.has(name)) {
      routesByName.get(name).push(route);
    } else {
      routesByName.set(name, [route]);
    }
  }
  if (Array.isArray(routes2)) {
    for (let i2 = 0; i2 < routes2.length; i2++) {
      const childRoute = routes2[i2];
      childRoute.parent = route;
      cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
    }
  }
}
function getRouteByName(routesByName, routeName) {
  const routes2 = routesByName.get(routeName);
  if (routes2 && routes2.length > 1) {
    throw new Error(
      `Duplicate route with name "${routeName}". Try seting unique 'name' route properties.`
    );
  }
  return routes2 && routes2[0];
}
function getRoutePath(route) {
  let path = route.path;
  path = Array.isArray(path) ? path[0] : path;
  return path !== void 0 ? path : "";
}
function generateUrls(router, options = {}) {
  if (!(router instanceof Resolver)) {
    throw new TypeError("An instance of Resolver is expected");
  }
  const routesByName = /* @__PURE__ */ new Map();
  return (routeName, params) => {
    let route = getRouteByName(routesByName, routeName);
    if (!route) {
      routesByName.clear();
      cacheRoutes(routesByName, router.root, router.root.__children);
      route = getRouteByName(routesByName, routeName);
      if (!route) {
        throw new Error(`Route "${routeName}" not found`);
      }
    }
    let regexp = cache.get(route.fullPath);
    if (!regexp) {
      let fullPath = getRoutePath(route);
      let rt = route.parent;
      while (rt) {
        const path = getRoutePath(rt);
        if (path) {
          fullPath = path.replace(/\/$/, "") + "/" + fullPath.replace(/^\//, "");
        }
        rt = rt.parent;
      }
      const tokens = pathToRegexp.parse(fullPath);
      const toPath = pathToRegexp.tokensToFunction(tokens);
      const keys = /* @__PURE__ */ Object.create(null);
      for (let i2 = 0; i2 < tokens.length; i2++) {
        if (!isString(tokens[i2])) {
          keys[tokens[i2].name] = true;
        }
      }
      regexp = { toPath, keys };
      cache.set(fullPath, regexp);
      route.fullPath = fullPath;
    }
    let url = regexp.toPath(params, options) || "/";
    if (options.stringifyQueryParams && params) {
      const queryParams = {};
      const keys = Object.keys(params);
      for (let i2 = 0; i2 < keys.length; i2++) {
        const key = keys[i2];
        if (!regexp.keys[key]) {
          queryParams[key] = params[key];
        }
      }
      const query = options.stringifyQueryParams(queryParams);
      if (query) {
        url += query.charAt(0) === "?" ? query : `?${query}`;
      }
    }
    return url;
  };
}
let triggers = [];
function setNavigationTriggers(newTriggers) {
  triggers.forEach((trigger) => trigger.inactivate());
  newTriggers.forEach((trigger) => trigger.activate());
  triggers = newTriggers;
}
const willAnimate = (elem) => {
  const name = getComputedStyle(elem).getPropertyValue("animation-name");
  return name && name !== "none";
};
const waitForAnimation = (elem, cb) => {
  const listener = () => {
    elem.removeEventListener("animationend", listener);
    cb();
  };
  elem.addEventListener("animationend", listener);
};
function animate(elem, className) {
  elem.classList.add(className);
  return new Promise((resolve) => {
    if (willAnimate(elem)) {
      const rect = elem.getBoundingClientRect();
      const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
      elem.setAttribute("style", `position: absolute; ${size}`);
      waitForAnimation(elem, () => {
        elem.classList.remove(className);
        elem.removeAttribute("style");
        resolve();
      });
    } else {
      elem.classList.remove(className);
      resolve();
    }
  });
}
const MAX_REDIRECT_COUNT = 256;
function isResultNotEmpty(result) {
  return result !== null && result !== void 0;
}
function copyContextWithoutNext(context2) {
  const copy = Object.assign({}, context2);
  delete copy.next;
  return copy;
}
function createLocation({ pathname = "", search = "", hash = "", chain = [], params = {}, redirectFrom, resolver }, route) {
  const routes2 = chain.map((item) => item.route);
  return {
    baseUrl: resolver && resolver.baseUrl || "",
    pathname,
    search,
    hash,
    routes: routes2,
    route: route || routes2.length && routes2[routes2.length - 1] || null,
    params,
    redirectFrom,
    getUrl: (userParams = {}) => getPathnameForRouter(
      Router.pathToRegexp.compile(
        getMatchedPath(routes2)
      )(Object.assign({}, params, userParams)),
      resolver
    )
  };
}
function createRedirect(context2, pathname) {
  const params = Object.assign({}, context2.params);
  return {
    redirect: {
      pathname,
      from: context2.pathname,
      params
    }
  };
}
function renderElement(context2, element) {
  element.location = createLocation(context2);
  const index = context2.chain.map((item) => item.route).indexOf(context2.route);
  context2.chain[index].element = element;
  return element;
}
function runCallbackIfPossible(callback, args, thisArg) {
  if (isFunction(callback)) {
    return callback.apply(thisArg, args);
  }
}
function amend(amendmentFunction, args, element) {
  return (amendmentResult) => {
    if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) {
      return amendmentResult;
    }
    if (element) {
      return runCallbackIfPossible(element[amendmentFunction], args, element);
    }
  };
}
function processNewChildren(newChildren, route) {
  if (!Array.isArray(newChildren) && !isObject(newChildren)) {
    throw new Error(
      log(
        `Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`
      )
    );
  }
  route.__children = [];
  const childRoutes = toArray(newChildren);
  for (let i2 = 0; i2 < childRoutes.length; i2++) {
    ensureRoute(childRoutes[i2]);
    route.__children.push(childRoutes[i2]);
  }
}
function removeDomNodes(nodes) {
  if (nodes && nodes.length) {
    const parent = nodes[0].parentNode;
    for (let i2 = 0; i2 < nodes.length; i2++) {
      parent.removeChild(nodes[i2]);
    }
  }
}
function getPathnameForRouter(pathname, router) {
  const base = router.__effectiveBaseUrl;
  return base ? router.constructor.__createUrl(pathname.replace(/^\//, ""), base).pathname : pathname;
}
function getMatchedPath(chain) {
  return chain.map((item) => item.path).reduce((a2, b2) => {
    if (b2.length) {
      return a2.replace(/\/$/, "") + "/" + b2.replace(/^\//, "");
    }
    return a2;
  }, "");
}
class Router extends Resolver {
  /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param {?Node=} outlet
   * @param {?RouterOptions=} options
   */
  constructor(outlet, options) {
    const baseElement = document.head.querySelector("base");
    const baseHref = baseElement && baseElement.getAttribute("href");
    super([], Object.assign({
      // Default options
      baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, "")
    }, options));
    this.resolveRoute = (context2) => this.__resolveRoute(context2);
    const triggers2 = Router.NavigationTrigger;
    Router.setTriggers.apply(Router, Object.keys(triggers2).map((key) => triggers2[key]));
    this.baseUrl;
    this.ready;
    this.ready = Promise.resolve(outlet);
    this.location;
    this.location = createLocation({ resolver: this });
    this.__lastStartedRenderId = 0;
    this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
    this.setOutlet(outlet);
    this.subscribe();
    this.__createdByRouter = /* @__PURE__ */ new WeakMap();
    this.__addedByRouter = /* @__PURE__ */ new WeakMap();
  }
  __resolveRoute(context2) {
    const route = context2.route;
    let callbacks = Promise.resolve();
    if (isFunction(route.children)) {
      callbacks = callbacks.then(() => route.children(copyContextWithoutNext(context2))).then((children) => {
        if (!isResultNotEmpty(children) && !isFunction(route.children)) {
          children = route.children;
        }
        processNewChildren(children, route);
      });
    }
    const commands = {
      redirect: (path) => createRedirect(context2, path),
      component: (component) => {
        const element = document.createElement(component);
        this.__createdByRouter.set(element, true);
        return element;
      }
    };
    return callbacks.then(() => {
      if (this.__isLatestRender(context2)) {
        return runCallbackIfPossible(route.action, [context2, commands], route);
      }
    }).then((result) => {
      if (isResultNotEmpty(result)) {
        if (result instanceof HTMLElement || result.redirect || result === notFoundResult) {
          return result;
        }
      }
      if (isString(route.redirect)) {
        return commands.redirect(route.redirect);
      }
      if (route.bundle) {
        return loadBundle(route.bundle).then(() => {
        }, () => {
          throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
        });
      }
    }).then((result) => {
      if (isResultNotEmpty(result)) {
        return result;
      }
      if (isString(route.component)) {
        return commands.component(route.component);
      }
    });
  }
  /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * NOTE: this method is automatically invoked first time when creating a new Router instance.
   *
   * @param {?Node} outlet the DOM node where the content for the current route
   *     is inserted.
   */
  setOutlet(outlet) {
    if (outlet) {
      this.__ensureOutlet(outlet);
    }
    this.__outlet = outlet;
  }
  /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @return {?Node} the current router outlet (or `undefined`)
   */
  getOutlet() {
    return this.__outlet;
  }
  /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
   * or the object with "module" and "nomodule" keys referring to different bundles.
   * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
   * depending on whether the browser supports ES modules or not.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
   * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
   * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
   * because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
   *
   *
   * @param {!Array<!Route>|!Route} routes a single route or an array of those
   * @param {?boolean} skipRender configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   *
   * @return {!Promise<!Node>}
   */
  setRoutes(routes2, skipRender = false) {
    this.__previousContext = void 0;
    this.__urlForName = void 0;
    super.setRoutes(routes2);
    if (!skipRender) {
      this.__onNavigationEvent();
    }
    return this.ready;
  }
  /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Node after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
   *    the pathname to render or a context object with a `pathname` property,
   *    optional `search` and `hash` properties, and other properties
   *    to pass to the resolver.
   * @param {boolean=} shouldUpdateHistory
   *    update browser history with the rendered location
   * @return {!Promise<!Node>}
   */
  render(pathnameOrContext, shouldUpdateHistory) {
    const renderId = ++this.__lastStartedRenderId;
    const context2 = Object.assign(
      {
        search: "",
        hash: ""
      },
      isString(pathnameOrContext) ? { pathname: pathnameOrContext } : pathnameOrContext,
      {
        __renderId: renderId
      }
    );
    this.ready = this.resolve(context2).then((context3) => this.__fullyResolveChain(context3)).then((context3) => {
      if (this.__isLatestRender(context3)) {
        const previousContext = this.__previousContext;
        if (context3 === previousContext) {
          this.__updateBrowserHistory(previousContext, true);
          return this.location;
        }
        this.location = createLocation(context3);
        if (shouldUpdateHistory) {
          this.__updateBrowserHistory(context3, renderId === 1);
        }
        fireRouterEvent("location-changed", { router: this, location: this.location });
        if (context3.__skipAttach) {
          this.__copyUnchangedElements(context3, previousContext);
          this.__previousContext = context3;
          return this.location;
        }
        this.__addAppearingContent(context3, previousContext);
        const animationDone = this.__animateIfNeeded(context3);
        this.__runOnAfterEnterCallbacks(context3);
        this.__runOnAfterLeaveCallbacks(context3, previousContext);
        return animationDone.then(() => {
          if (this.__isLatestRender(context3)) {
            this.__removeDisappearingContent();
            this.__previousContext = context3;
            return this.location;
          }
        });
      }
    }).catch((error) => {
      if (renderId === this.__lastStartedRenderId) {
        if (shouldUpdateHistory) {
          this.__updateBrowserHistory(context2);
        }
        removeDomNodes(this.__outlet && this.__outlet.children);
        this.location = createLocation(Object.assign(context2, { resolver: this }));
        fireRouterEvent("error", Object.assign({ router: this, error }, context2));
        throw error;
      }
    });
    return this.ready;
  }
  // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
  // It would contain a 'redirect' route or the first 'component' route that
  // matched the pathname. There might be more child 'component' routes to be
  // resolved and added into the chain. This method would find and add them.
  // `contextBeforeRedirects` is the context containing such a child component
  // route. It's only necessary when this method is called recursively (otherwise
  // it's the same as the 'top of the chain' context).
  //
  // Apart from building the chain of child components, this method would also
  // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
  // and 'redirect' callback results.
  __fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
    return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects).then((contextAfterRedirects) => {
      const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
      const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
      const matchedPath = getPathnameForRouter(
        getMatchedPath(contextAfterRedirects.chain),
        contextAfterRedirects.resolver
      );
      const isFound = matchedPath === contextAfterRedirects.pathname;
      const findNextContextIfAny = (context2, parent = context2.route, prevResult) => {
        return context2.next(void 0, parent, prevResult).then((nextContext) => {
          if (nextContext === null || nextContext === notFoundResult) {
            if (isFound) {
              return context2;
            } else if (parent.parent !== null) {
              return findNextContextIfAny(context2, parent.parent, nextContext);
            } else {
              return nextContext;
            }
          }
          return nextContext;
        });
      };
      return findNextContextIfAny(contextAfterRedirects).then((nextContext) => {
        if (nextContext === null || nextContext === notFoundResult) {
          throw getNotFoundError(topOfTheChainContextAfterRedirects);
        }
        return nextContext && nextContext !== notFoundResult && nextContext !== contextAfterRedirects ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
      });
    });
  }
  __findComponentContextAfterAllRedirects(context2) {
    const result = context2.result;
    if (result instanceof HTMLElement) {
      renderElement(context2, result);
      return Promise.resolve(context2);
    } else if (result.redirect) {
      return this.__redirect(result.redirect, context2.__redirectCount, context2.__renderId).then((context3) => this.__findComponentContextAfterAllRedirects(context3));
    } else if (result instanceof Error) {
      return Promise.reject(result);
    } else {
      return Promise.reject(
        new Error(
          log(
            `Invalid route resolution result for path "${context2.pathname}". Expected redirect object or HTML element, but got: "${logValue(result)}". Double check the action return value for the route.`
          )
        )
      );
    }
  }
  __amendWithOnBeforeCallbacks(contextWithFullChain) {
    return this.__runOnBeforeCallbacks(contextWithFullChain).then((amendedContext) => {
      if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) {
        return amendedContext;
      }
      return this.__fullyResolveChain(amendedContext);
    });
  }
  __runOnBeforeCallbacks(newContext) {
    const previousContext = this.__previousContext || {};
    const previousChain = previousContext.chain || [];
    const newChain = newContext.chain;
    let callbacks = Promise.resolve();
    const prevent = () => ({ cancel: true });
    const redirect = (pathname) => createRedirect(newContext, pathname);
    newContext.__divergedChainIndex = 0;
    newContext.__skipAttach = false;
    if (previousChain.length) {
      for (let i2 = 0; i2 < Math.min(previousChain.length, newChain.length); i2 = ++newContext.__divergedChainIndex) {
        if (previousChain[i2].route !== newChain[i2].route || previousChain[i2].path !== newChain[i2].path && previousChain[i2].element !== newChain[i2].element || !this.__isReusableElement(previousChain[i2].element, newChain[i2].element)) {
          break;
        }
      }
      newContext.__skipAttach = // Same route chain
      newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length && // Same element
      this.__isReusableElement(newContext.result, previousContext.result);
      if (newContext.__skipAttach) {
        for (let i2 = newChain.length - 1; i2 >= 0; i2--) {
          callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, { prevent }, previousChain[i2]);
        }
        for (let i2 = 0; i2 < newChain.length; i2++) {
          callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, { prevent, redirect }, newChain[i2]);
          previousChain[i2].element.location = createLocation(newContext, previousChain[i2].route);
        }
      } else {
        for (let i2 = previousChain.length - 1; i2 >= newContext.__divergedChainIndex; i2--) {
          callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, { prevent }, previousChain[i2]);
        }
      }
    }
    if (!newContext.__skipAttach) {
      for (let i2 = 0; i2 < newChain.length; i2++) {
        if (i2 < newContext.__divergedChainIndex) {
          if (i2 < previousChain.length && previousChain[i2].element) {
            previousChain[i2].element.location = createLocation(newContext, previousChain[i2].route);
          }
        } else {
          callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, { prevent, redirect }, newChain[i2]);
          if (newChain[i2].element) {
            newChain[i2].element.location = createLocation(newContext, newChain[i2].route);
          }
        }
      }
    }
    return callbacks.then((amendmentResult) => {
      if (amendmentResult) {
        if (amendmentResult.cancel) {
          this.__previousContext.__renderId = newContext.__renderId;
          return this.__previousContext;
        }
        if (amendmentResult.redirect) {
          return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
        }
      }
      return newContext;
    });
  }
  __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
    const location = createLocation(newContext);
    return callbacks.then((result) => {
      if (this.__isLatestRender(newContext)) {
        const afterLeaveFunction = amend("onBeforeLeave", [location, commands, this], chainElement.element);
        return afterLeaveFunction(result);
      }
    }).then((result) => {
      if (!(result || {}).redirect) {
        return result;
      }
    });
  }
  __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
    const location = createLocation(newContext, chainElement.route);
    return callbacks.then((result) => {
      if (this.__isLatestRender(newContext)) {
        const beforeEnterFunction = amend("onBeforeEnter", [location, commands, this], chainElement.element);
        return beforeEnterFunction(result);
      }
    });
  }
  __isReusableElement(element, otherElement) {
    if (element && otherElement) {
      return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement) ? element.localName === otherElement.localName : element === otherElement;
    }
    return false;
  }
  __isLatestRender(context2) {
    return context2.__renderId === this.__lastStartedRenderId;
  }
  __redirect(redirectData, counter, renderId) {
    if (counter > MAX_REDIRECT_COUNT) {
      throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
    }
    return this.resolve({
      pathname: this.urlForPath(
        redirectData.pathname,
        redirectData.params
      ),
      redirectFrom: redirectData.from,
      __redirectCount: (counter || 0) + 1,
      __renderId: renderId
    });
  }
  __ensureOutlet(outlet = this.__outlet) {
    if (!(outlet instanceof Node)) {
      throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
    }
  }
  __updateBrowserHistory({ pathname, search = "", hash = "" }, replace) {
    if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
      const changeState = replace ? "replaceState" : "pushState";
      window.history[changeState](null, document.title, pathname + search + hash);
      window.dispatchEvent(new PopStateEvent("popstate", { state: "vaadin-router-ignore" }));
    }
  }
  __copyUnchangedElements(context2, previousContext) {
    let deepestCommonParent = this.__outlet;
    for (let i2 = 0; i2 < context2.__divergedChainIndex; i2++) {
      const unchangedElement = previousContext && previousContext.chain[i2].element;
      if (unchangedElement) {
        if (unchangedElement.parentNode === deepestCommonParent) {
          context2.chain[i2].element = unchangedElement;
          deepestCommonParent = unchangedElement;
        } else {
          break;
        }
      }
    }
    return deepestCommonParent;
  }
  __addAppearingContent(context2, previousContext) {
    this.__ensureOutlet();
    this.__removeAppearingContent();
    const deepestCommonParent = this.__copyUnchangedElements(context2, previousContext);
    this.__appearingContent = [];
    this.__disappearingContent = Array.from(deepestCommonParent.children).filter(
      // Only remove layout content that was added by router
      (e3) => this.__addedByRouter.get(e3) && // Do not remove the result element to avoid flickering
      e3 !== context2.result
    );
    let parentElement = deepestCommonParent;
    for (let i2 = context2.__divergedChainIndex; i2 < context2.chain.length; i2++) {
      const elementToAdd = context2.chain[i2].element;
      if (elementToAdd) {
        parentElement.appendChild(elementToAdd);
        this.__addedByRouter.set(elementToAdd, true);
        if (parentElement === deepestCommonParent) {
          this.__appearingContent.push(elementToAdd);
        }
        parentElement = elementToAdd;
      }
    }
  }
  __removeDisappearingContent() {
    if (this.__disappearingContent) {
      removeDomNodes(this.__disappearingContent);
    }
    this.__disappearingContent = null;
    this.__appearingContent = null;
  }
  __removeAppearingContent() {
    if (this.__disappearingContent && this.__appearingContent) {
      removeDomNodes(this.__appearingContent);
      this.__disappearingContent = null;
      this.__appearingContent = null;
    }
  }
  __runOnAfterLeaveCallbacks(currentContext, targetContext) {
    if (!targetContext) {
      return;
    }
    for (let i2 = targetContext.chain.length - 1; i2 >= currentContext.__divergedChainIndex; i2--) {
      if (!this.__isLatestRender(currentContext)) {
        break;
      }
      const currentComponent = targetContext.chain[i2].element;
      if (!currentComponent) {
        continue;
      }
      try {
        const location = createLocation(currentContext);
        runCallbackIfPossible(
          currentComponent.onAfterLeave,
          [location, {}, targetContext.resolver],
          currentComponent
        );
      } finally {
        if (this.__disappearingContent.indexOf(currentComponent) > -1) {
          removeDomNodes(currentComponent.children);
        }
      }
    }
  }
  __runOnAfterEnterCallbacks(currentContext) {
    for (let i2 = currentContext.__divergedChainIndex; i2 < currentContext.chain.length; i2++) {
      if (!this.__isLatestRender(currentContext)) {
        break;
      }
      const currentComponent = currentContext.chain[i2].element || {};
      const location = createLocation(currentContext, currentContext.chain[i2].route);
      runCallbackIfPossible(
        currentComponent.onAfterEnter,
        [location, {}, currentContext.resolver],
        currentComponent
      );
    }
  }
  __animateIfNeeded(context2) {
    const from = (this.__disappearingContent || [])[0];
    const to = (this.__appearingContent || [])[0];
    const promises = [];
    const chain = context2.chain;
    let config;
    for (let i2 = chain.length; i2 > 0; i2--) {
      if (chain[i2 - 1].route.animate) {
        config = chain[i2 - 1].route.animate;
        break;
      }
    }
    if (from && to && config) {
      const leave = isObject(config) && config.leave || "leaving";
      const enter = isObject(config) && config.enter || "entering";
      promises.push(animate(from, leave));
      promises.push(animate(to, enter));
    }
    return Promise.all(promises).then(() => context2);
  }
  /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */
  subscribe() {
    window.addEventListener("vaadin-router-go", this.__navigationEventHandler);
  }
  /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */
  unsubscribe() {
    window.removeEventListener("vaadin-router-go", this.__navigationEventHandler);
  }
  __onNavigationEvent(event) {
    const { pathname, search, hash } = event ? event.detail : window.location;
    if (isString(this.__normalizePathname(pathname))) {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      this.render({ pathname, search, hash }, true);
    }
  }
  /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param {...NavigationTrigger} triggers
   */
  static setTriggers(...triggers2) {
    setNavigationTriggers(triggers2);
  }
  /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @function urlForName
   * @param {!string} name the route name or the route’s `component` name.
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */
  urlForName(name, params) {
    if (!this.__urlForName) {
      this.__urlForName = generateUrls(this);
    }
    return getPathnameForRouter(
      this.__urlForName(name, params),
      this
    );
  }
  /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */
  urlForPath(path, params) {
    return getPathnameForRouter(
      Router.pathToRegexp.compile(path)(params),
      this
    );
  }
  /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
   *   a new in-app path string, or an URL-like object with `pathname`
   *   string property, and optional `search` and `hash` string properties.
   * @return {boolean}
   */
  static go(path) {
    const { pathname, search, hash } = isString(path) ? this.__createUrl(path, "http://a") : path;
    return fireRouterEvent("go", { pathname, search, hash });
  }
}
const DEV_MODE_CODE_REGEXP = /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
  function test() {
    return true;
  }
  return uncommentAndRun(test);
}
function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }
    if (!isLocalhost()) {
      return false;
    }
    if (FlowClients) {
      return !isFlowProductionMode();
    }
    return !isMinified();
  } catch (e3) {
    return false;
  }
}
function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
  if (FlowClients) {
    const productionModeApps = Object.keys(FlowClients).map((key) => FlowClients[key]).filter((client) => client.productionMode);
    if (productionModeApps.length > 0) {
      return true;
    }
  }
  return false;
}
function uncommentAndRun(callback, args) {
  if (typeof callback !== "function") {
    return;
  }
  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
  if (match) {
    try {
      callback = new Function(match[1]);
    } catch (e3) {
      console.log("vaadin-development-mode-detector: uncommentAndRun() failed", e3);
    }
  }
  return callback(args);
}
window["Vaadin"] = window["Vaadin"] || {};
const runIfDevelopmentMode = function(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};
if (window.Vaadin.developmentMode === void 0) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}
function maybeGatherAndSendStats() {
}
const usageStatistics = function() {
  if (typeof runIfDevelopmentMode === "function") {
    return runIfDevelopmentMode(maybeGatherAndSendStats);
  }
};
window.Vaadin = window.Vaadin || {};
window.Vaadin.registrations = window.Vaadin.registrations || [];
window.Vaadin.registrations.push({
  is: "@vaadin/router",
  version: "1.7.4"
});
usageStatistics();
Router.NavigationTrigger = { POPSTATE, CLICK };
var __defProp$j = Object.defineProperty;
var __getOwnPropDesc$j = Object.getOwnPropertyDescriptor;
var __decorateClass$j = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$j(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$j(target, key, result);
  return result;
};
let authContext = n2("auth");
let AuthContainer = class extends s$3 {
  constructor() {
    super(...arguments);
    this.currentPage = "login";
    this.loginStatus = 0;
    this.errorMessage = "";
    this.isSuccess = false;
    this.user = AuthenticatedUser.authenticateFromLocalStorage(() => this._signOut());
    this.passwordVisible = false;
  }
  isAuthenticated() {
    return this.user.authenticated;
  }
  shouldRenderLogin() {
    return this.currentPage === "login";
  }
  shouldRenderAccountCreated() {
    return this.currentPage === "accountCreated";
  }
  shouldRenderSignup() {
    return this.currentPage === "signup";
  }
  getClassnameForPage(page) {
    return this.currentPage === page ? "page active" : "page";
  }
  render() {
    return x`
            ${!this.isAuthenticated() ? this.renderAuthentication() : ""}          
            <slot></slot>
        `;
  }
  renderAuthentication() {
    if (!this.isAuthenticated()) {
      Router.go("/");
    }
    return x`
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
                ${this.shouldRenderLogin() ? this.renderLogin() : ""}
                ${this.shouldRenderSignup() ? this.renderSignup() : ""}
            </div>        
        `;
  }
  renderLogin() {
    return x`
            <form id="login" 
                @submit=${this.handleLogin}
                @change=${() => {
      this.errorMessage = "";
      this.isSuccess = false;
    }}>
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
                        type="${this.passwordVisible ? "text" : "password"}"
                    >                
                </label>
                ${this.errorMessage ? x`<render-error .success=${false}> ${this.errorMessage} </render-error>` : ""}
                <input
                    class="login-button"
                    id="loginButton"
                    type="submit"
                    value="Login"
                />
            </form>
        `;
  }
  renderSignup() {
    return x`
            <form id="signup" 
            @submit=${this.handleSignup}
            @change=${() => {
      this.errorMessage = "";
      this.isSuccess = false;
    }}>
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
                        type=${this.passwordVisible ? "text" : "password"}
                        name="password"  
                        required      
                    />
                </label>
                ${this.errorMessage ? x`<render-error .isSuccess=${false}> ${this.errorMessage} </render-error>` : ""}
                ${this.isSuccess ? x`
                    <render-error .isSuccess=${true}> 
                        Sucessfully created account. Go to 
                            <a 
                                class='active'
                                @click=${this.handleChange("login")}
                            > 
                                log in 
                            </a>
                    </render-error>` : ""}
                <input
                    class="signup-button"
                    id="signupButton"
                    type="submit"
                    value="Sign Up"
                />
            </form>
        `;
  }
  handleChange(page) {
    return () => {
      this.currentPage = page;
      this.errorMessage = "";
      this.requestUpdate();
      console.log(`Page changed to: ${this.currentPage}`);
    };
  }
  _signOut() {
    this.user = APIUser.deauthenticate(this.user);
    document.location.reload();
  }
  _dispatchUserLoggedIn(user) {
    const userLoggedIn = new CustomEvent("mvu:message", {
      bubbles: true,
      composed: true,
      detail: {
        type: "UserLoggedIn",
        user
      }
    });
    this.dispatchEvent(userLoggedIn);
    const getClubSummaries = new CustomEvent("mvu:message", {
      bubbles: true,
      composed: true,
      detail: {
        type: "GetClubSummaries"
      }
    });
    this.dispatchEvent(getClubSummaries);
  }
  getTogglePassIcon() {
    return this.passwordVisible ? "/icons/user-interface.svg#password-visble" : "/icons/user-interface.svg#password-hidden";
  }
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleLogin(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data);
    this.login(json, json.email);
  }
  login(json, email) {
    const request = new JSONRequest(json);
    request.base().post("/login").then((response) => {
      if (response.status === 200) {
        console.log("Successfully logged in");
        return response.json();
      } else if (response.status === 401) {
        console.log("Failed to login, invalid credentials");
        this.errorMessage = "Failed to login. Invalid credentials";
      } else {
        console.log("Failed to login. Internal Server Error.");
        this.errorMessage = "Failed to login. Internal Server Error";
      }
    }).then((json2) => {
      if (json2) {
        console.log("Authentication:", json2.token);
        const authenticatedUser = AuthenticatedUser.authenticate(json2.token, () => this._signOut());
        this.user = AuthenticatedUser.authenticate(json2.token, () => this._signOut());
        localStorage.setItem(USER_EMAIL_KEY, email);
        Router.go("/app");
        this._dispatchUserLoggedIn(authenticatedUser);
        this.requestUpdate();
      }
    });
  }
  handleSignup(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const json = Object.fromEntries(data);
    this.signup(json);
  }
  signup(json) {
    const request = new JSONRequest(json);
    request.base().post("/signup").then(async (response) => {
      if (response.status === 201) {
        console.log("Successfully registered new account");
        this.isSuccess = true;
        return response.json();
      } else {
        console.log("Failed to create new account.");
        this.errorMessage = await response.text();
      }
    }).then((json2) => {
      console.log("Registration:", json2);
    });
  }
};
AuthContainer.styles = i$3`
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
    `;
__decorateClass$j([
  r()
], AuthContainer.prototype, "currentPage", 2);
__decorateClass$j([
  r()
], AuthContainer.prototype, "loginStatus", 2);
__decorateClass$j([
  r()
], AuthContainer.prototype, "errorMessage", 2);
__decorateClass$j([
  r()
], AuthContainer.prototype, "isSuccess", 2);
__decorateClass$j([
  e2({ context: authContext }),
  r()
], AuthContainer.prototype, "user", 2);
__decorateClass$j([
  n$1({ type: Boolean })
], AuthContainer.prototype, "passwordVisible", 2);
AuthContainer = __decorateClass$j([
  t("auth-container")
], AuthContainer);
let RenderError = class extends s$3 {
  constructor() {
    super(...arguments);
    this.isSuccess = false;
  }
  getClassnameForPage() {
    return !this.isSuccess ? "error-message" : "success-message";
  }
  render() {
    return x`
            <div class=${this.getClassnameForPage()}> 
                <slot> Error </slot>
            </div>
        `;
  }
};
RenderError.styles = i$3`
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
    `;
__decorateClass$j([
  n$1({ type: Boolean })
], RenderError.prototype, "isSuccess", 2);
RenderError = __decorateClass$j([
  t("render-error")
], RenderError);
var __defProp$i = Object.defineProperty;
var __getOwnPropDesc$i = Object.getOwnPropertyDescriptor;
var __decorateClass$i = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$i(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$i(target, key, result);
  return result;
};
let DropDownElement = class extends s$3 {
  constructor() {
    super(...arguments);
    this.open = false;
  }
  render() {
    return x`
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
    `;
  }
  _handleChange(ev) {
    const target = ev.target;
    this._toggle(target == null ? void 0 : target.checked);
  }
  _toggle(open) {
    this.open = open;
    this._toggleClickAway(open);
  }
  _toggleClickAway(open) {
    const clickawayHandler = (ev) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };
    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
};
DropDownElement.styles = i$3`
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
  `;
__decorateClass$i([
  n$1({ reflect: true, type: Boolean })
], DropDownElement.prototype, "open", 2);
DropDownElement = __decorateClass$i([
  t("drop-down")
], DropDownElement);
var __defProp$h = Object.defineProperty;
var __getOwnPropDesc$h = Object.getOwnPropertyDescriptor;
var __decorateClass$h = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$h(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$h(target, key, result);
  return result;
};
let AppHeaderElement = class extends s$3 {
  constructor() {
    super(...arguments);
    this.user = new APIUser();
  }
  render() {
    return x`
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
                        <a href="/app/profile/${localStorage.getItem(USER_EMAIL_KEY)}"> My Profile </a> 
                    </li>
                    <li> <hr> </li>
                    <li>
                        <a @click=${this._signOut}> Sign Out </a>
                    </li>
                </ul>
            </drop-down>
      </header>
    `;
  }
  _signOut() {
    console.log("Signing out");
    this.user.signOut();
  }
};
AppHeaderElement.styles = i$3`
      a:hover {
        cursor: pointer;
      }
    `;
__decorateClass$h([
  r()
], AppHeaderElement.prototype, "profile", 2);
__decorateClass$h([
  c({ context: authContext, subscribe: true }),
  n$1({ attribute: false })
], AppHeaderElement.prototype, "user", 2);
AppHeaderElement = __decorateClass$h([
  t("app-header")
], AppHeaderElement);
var __defProp$g = Object.defineProperty;
var __getOwnPropDesc$g = Object.getOwnPropertyDescriptor;
var __decorateClass$g = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$g(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$g(target, key, result);
  return result;
};
let ProfileViewElement = class extends View2 {
  get email() {
    var _a2;
    return (_a2 = this.location) == null ? void 0 : _a2.params.email;
  }
  get edit() {
    if (this.location) {
      const params = new URL(document.location.toString()).searchParams;
      return params.has("edit");
    }
    return false;
  }
  get profile() {
    return this.getFromModel("profile");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "email" && oldValue !== newValue && newValue) {
      console.log("Profile Page:", newValue);
      this.dispatchMessage({
        type: "ProfileSelected",
        email: newValue
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
  shouldRenderEditProfile() {
    if (this.profile && this.profile.email && localStorage.getItem(USER_EMAIL_KEY) === this.profile.email) {
      return true;
    }
    return false;
  }
  renderPersonalProfileView() {
    return x`
      <toggle-switch> Dark Mode </toggle-switch>
        <custom-modal customId="edit-user-profile">
            <span slot="button-name"> Edit Profile </span>
            <div slot="title"> Edit Profile </div>
            <div slot="content">
                <user-profile2-edit .using=${this.profile}> </user-profile2-edit>
            </div>
        </custom-modal>
    `;
  }
  render() {
    return x`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> Cal Poly Clubs </div> </app-header>
      <div class="page-content">
        <user-profile-2 .using=${this.profile}> </user-profile-2>
        ${this.shouldRenderEditProfile() ? this.renderPersonalProfileView() : ""}
      </div>
    `;
  }
};
ProfileViewElement.styles = i$3`
    :host {
      display: contents;
    }
  `;
__decorateClass$g([
  n$1({ attribute: false })
], ProfileViewElement.prototype, "location", 2);
__decorateClass$g([
  n$1({ reflect: true })
], ProfileViewElement.prototype, "email", 1);
__decorateClass$g([
  n$1({ reflect: true })
], ProfileViewElement.prototype, "edit", 1);
__decorateClass$g([
  n$1()
], ProfileViewElement.prototype, "profile", 1);
ProfileViewElement = __decorateClass$g([
  t("profile-view")
], ProfileViewElement);
var __defProp$f = Object.defineProperty;
var __getOwnPropDesc$f = Object.getOwnPropertyDescriptor;
var __decorateClass$f = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$f(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$f(target, key, result);
  return result;
};
let ClubOverviewCard = class extends s$3 {
  constructor() {
    super(...arguments);
    this.linkHref = "../index.html";
  }
  render() {
    return x`
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
    `;
  }
  // Return: all lowercase String consisting of club name and club description
  getData() {
    var _a2;
    let data = "";
    const slots = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelectorAll("slot");
    slots == null ? void 0 : slots.forEach((slot) => {
      var _a3;
      const assignedNodes = slot.assignedNodes();
      data += ((_a3 = assignedNodes[0].textContent) == null ? void 0 : _a3.toLowerCase().trim()) + " ";
    });
    return data;
  }
  // Hide items which have the filter turned off
  setFilter(filter) {
    this.style.display = filter ? "block" : "none";
  }
};
ClubOverviewCard.styles = i$3`
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
  `;
__decorateClass$f([
  n$1({ type: String })
], ClubOverviewCard.prototype, "linkHref", 2);
ClubOverviewCard = __decorateClass$f([
  t("club-overview-card")
], ClubOverviewCard);
var __defProp$e = Object.defineProperty;
var __getOwnPropDesc$e = Object.getOwnPropertyDescriptor;
var __decorateClass$e = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$e(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$e(target, key, result);
  return result;
};
let EventOverviewCard = class extends s$3 {
  constructor() {
    super(...arguments);
    this.linkHref = "/index.html";
  }
  render() {
    return x`
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
      `;
  }
};
EventOverviewCard.styles = i$3`
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
  `;
__decorateClass$e([
  n$1({ type: String })
], EventOverviewCard.prototype, "linkHref", 2);
EventOverviewCard = __decorateClass$e([
  t("event-overview-card")
], EventOverviewCard);
var __defProp$d = Object.defineProperty;
var __getOwnPropDesc$d = Object.getOwnPropertyDescriptor;
var __decorateClass$d = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$d(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$d(target, key, result);
  return result;
};
let SearchContainer = class extends s$3 {
  constructor() {
    super(...arguments);
    this.searchTerm = "";
  }
  render() {
    return x`
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
        
        `;
  }
  handleSearch(ev) {
    this.searchTerm = ev.target.value.toLowerCase();
    console.log("Filtering for keyword(s):", this.searchTerm);
    this.filterItems(this.searchTerm);
  }
  filterItems(searchTerms) {
    var _a2;
    const searchKeys = searchTerms.split(" ");
    let matches = 0;
    const slots = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelectorAll("slot");
    const slotElements = slots && slots[0] ? slots[0].assignedElements({ flatten: true }) : null;
    slotElements == null ? void 0 : slotElements.forEach((slot) => {
      const filter = searchKeys.some((key) => slot.getData().includes(key));
      filter ? matches += 1 : null;
      slot.setFilter(filter);
    });
    console.log("Found", matches, "matches");
  }
};
SearchContainer.styles = i$3`
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
    `;
__decorateClass$d([
  n$1({ reflect: true, type: String })
], SearchContainer.prototype, "searchTerm", 2);
SearchContainer = __decorateClass$d([
  t("search-container")
], SearchContainer);
var __defProp$c = Object.defineProperty;
var __getOwnPropDesc$c = Object.getOwnPropertyDescriptor;
var __decorateClass$c = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$c(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$c(target, key, result);
  return result;
};
let EventFormElement = class extends View2 {
  constructor() {
    super(...arguments);
    this.hostClub = "";
  }
  render() {
    return x`
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
    `;
  }
  _handleSubmit(ev) {
    ev.preventDefault();
    const target = ev.target;
    const formdata = new FormData(target);
    formdata.append("host", this.hostClub);
    const entries = Array.from(formdata.entries());
    const json = Object.fromEntries(entries);
    console.log("Submitting Form", json);
    this.dispatchMessage({
      type: "CreateEvent",
      event: json,
      host: this.hostClub
    });
    target.reset();
    this.closeModal();
  }
  closeModal() {
    this.dispatchEvent(new CustomEvent("call-modals-close-modal", {
      detail: { message: "user wants to close edit user profile modal" },
      bubbles: true,
      composed: true
    }));
  }
};
EventFormElement.styles = i$3`
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
    `;
__decorateClass$c([
  n$1({ attribute: true })
], EventFormElement.prototype, "hostClub", 2);
EventFormElement = __decorateClass$c([
  t("event-form")
], EventFormElement);
var __defProp$b = Object.defineProperty;
var __getOwnPropDesc$b = Object.getOwnPropertyDescriptor;
var __decorateClass$b = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$b(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$b(target, key, result);
  return result;
};
let ClubFormElement = class extends View2 {
  constructor() {
    super(...arguments);
    this.hostClub = "";
  }
  render() {
    return x`
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
              <input class='disabled' name="owner" type="text" required disabled value=${localStorage.getItem(USER_EMAIL_KEY) || ""}>
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
    `;
  }
  _handleSubmit(ev) {
    ev.preventDefault();
    const target = ev.target;
    const formdata = new FormData(target);
    formdata.append("owner", localStorage.getItem(USER_EMAIL_KEY) || "");
    const entries = Array.from(formdata.entries()).map(([k2, v2]) => v2 === "" ? [k2] : [k2, v2]).map(
      ([k2, v2]) => k2 === "tags" ? [k2, v2.split(",").map((s5) => s5.trim())] : [k2, v2]
    );
    const json = Object.fromEntries(entries);
    console.log("Submitting Form", json);
    this.dispatchMessage({
      type: "CreateClub",
      club: json
    });
    target.reset();
    this.closeModal();
  }
  closeModal() {
    this.dispatchEvent(new CustomEvent("call-modals-close-modal", {
      detail: { message: "user wants to close edit user profile modal" },
      bubbles: true,
      composed: true
    }));
  }
};
ClubFormElement.styles = i$3`
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
    
    `;
__decorateClass$b([
  n$1({ attribute: true })
], ClubFormElement.prototype, "hostClub", 2);
ClubFormElement = __decorateClass$b([
  t("club-form")
], ClubFormElement);
var __defProp$a = Object.defineProperty;
var __getOwnPropDesc$a = Object.getOwnPropertyDescriptor;
var __decorateClass$a = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$a(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$a(target, key, result);
  return result;
};
let EventItemsElement = class extends View2 {
  get events() {
    return this.using || {};
  }
  render() {
    return x`
        <div class="event-listing-homepage">
            ${renderAllEvents(this.events, "General")}
        </div>
    `;
  }
};
EventItemsElement.styles = i$3`
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
    `;
__decorateClass$a([
  n$1({ attribute: false })
], EventItemsElement.prototype, "using", 2);
EventItemsElement = __decorateClass$a([
  t("event-items")
], EventItemsElement);
var __defProp$9 = Object.defineProperty;
var __getOwnPropDesc$9 = Object.getOwnPropertyDescriptor;
var __decorateClass$9 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$9(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$9(target, key, result);
  return result;
};
let HomeViewElement = class extends View2 {
  get clubSummaries() {
    return this.getFromModel("clubSummaries");
  }
  get events() {
    return this.getFromModel("events");
  }
  render() {
    return x`
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
                        ${renderAllEvents(this.events, "General")}
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
                            ${renderAllClubs(this.clubSummaries)}
                        </search-container>
                    </div>
                </div>
            </div>
        `;
  }
  firstUpdated() {
    this.dispatchMessage({
      type: "GetClubSummaries"
    });
    this.dispatchMessage({
      type: "GetEvents",
      host: "General"
    });
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attribute changed");
    if (name === "events" && oldValue !== newValue && newValue) {
      console.log("attribute events changed");
      this.dispatchMessage({
        type: "GetEvents",
        host: "General"
      });
    }
    if (name === "clubSummaries" && oldValue !== newValue && newValue) {
      console.log("attribute clubSummaries changed");
      this.dispatchMessage({
        type: "GetClubSummaries"
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
};
HomeViewElement.styles = i$3`
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
    `;
__decorateClass$9([
  n$1()
], HomeViewElement.prototype, "clubSummaries", 1);
__decorateClass$9([
  n$1()
], HomeViewElement.prototype, "events", 1);
HomeViewElement = __decorateClass$9([
  t("home-view")
], HomeViewElement);
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
let ClubEditElement = class extends View2 {
  get club() {
    return this.using;
  }
  render() {
    var _a2;
    return x`
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
                <input name="tags" type="text" value=${(_a2 = this.club.tags) == null ? void 0 : _a2.join(", ")} required default="enter comma seperated list">
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
              <input class='disabled' name="owner" type="text" required disabled value=${localStorage.getItem(USER_EMAIL_KEY) || ""}>
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
    `;
  }
  _handleSubmit(ev) {
    ev.preventDefault();
    const target = ev.target;
    const formdata = new FormData(target);
    formdata.append("owner", localStorage.getItem(USER_EMAIL_KEY) || "");
    formdata.append("name", this.club.name);
    const entries = Array.from(formdata.entries()).map(([k2, v2]) => v2 === "" ? [k2] : [k2, v2]).map(
      ([k2, v2]) => k2 === "tags" ? [k2, v2.split(",").map((s5) => s5.trim())] : [k2, v2]
    );
    const json = Object.fromEntries(entries);
    console.log("Submitting Form", json);
    this.dispatchMessage({
      type: "ClubSaved",
      name: this.club.name,
      club: json
    });
    target.reset();
    this.closeModal();
  }
  closeModal() {
    this.dispatchEvent(new CustomEvent("call-modals-close-modal", {
      detail: { message: "user wants to close edit user profile modal" },
      bubbles: true,
      composed: true
    }));
  }
};
ClubEditElement.styles = i$3`
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
    
    `;
__decorateClass$8([
  n$1({ attribute: false })
], ClubEditElement.prototype, "using", 2);
ClubEditElement = __decorateClass$8([
  t("club-edit")
], ClubEditElement);
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
let AddMemberElement = class extends View2 {
  get profiles() {
    return this.using;
  }
  get clubName() {
    return this.usingClub || "";
  }
  render() {
    return x`
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
    `;
  }
  renderUserOptions(profiles) {
    if (profiles && Array.isArray(profiles)) {
      return profiles.map((profile) => {
        return x`
          <option value=${profile.email || ""}> ${profile.email} </option>
        `;
      });
    }
  }
  getNameForEmail(email, profiles) {
    var _a2;
    return (_a2 = profiles.find((profile) => profile.email === email)) == null ? void 0 : _a2.name;
  }
  _handleSubmit(ev) {
    ev.preventDefault();
    const target = ev.target;
    let formdata = new FormData(target);
    formdata.append("club_name", this.clubName);
    let json = Object.fromEntries(formdata);
    const email = json.email.toString();
    formdata.append("name", this.getNameForEmail(email, this.profiles));
    json = Object.fromEntries(formdata);
    console.log("Submitting Form", email, json);
    this.dispatchMessage({
      type: "MemberSaved",
      member: json,
      club_name: this.clubName
    });
    target.reset();
    this.closeModal();
  }
  closeModal() {
    this.dispatchEvent(new CustomEvent("call-modals-close-modal", {
      detail: { message: "user wants to close edit user profile modal" },
      bubbles: true,
      composed: true
    }));
  }
};
AddMemberElement.styles = i$3`
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
  `;
__decorateClass$7([
  n$1({ attribute: false })
], AddMemberElement.prototype, "using", 2);
AddMemberElement = __decorateClass$7([
  t("add-member")
], AddMemberElement);
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
let ClubItemElement = class extends View2 {
  get club() {
    return this.using;
  }
  get events() {
    return this.usingEvents;
  }
  get members() {
    return this.usingMembers;
  }
  get profiles() {
    return this.usingProfiles;
  }
  get myProfile() {
    return this.usingMyProfile;
  }
  render() {
    return this.club && isNotEmpty(this.club) ? x`
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
              ${this.hasAdminPermission() ? this.renderEditClubOption() : this.renderJoinOptions(this.myProfile, this.club, this.members)}
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
                        <td> <div class="info-entry"> ${this.renderTime(this.club.start_time, this.club.end_time)} </div> </td>
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
                ${this.hasAdminPermission() ? this.renderAddEventOption() : x``}
              </div>
            </div>
            <dd> 
                <div class="event-listing">
                    ${renderAllEvents(this.events, this.club.name)}
                </div>
            </dd>
            <div class="flex-container">
              <h2> Club Membership </h2>
              <div> 
                ${this.hasAdminPermission() ? this.renderAddOfficiersOption() : x``}
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
    ` : x`<no-content> </no-content>`;
  }
  renderJoinOptions(profile, club, members) {
    if (profile && club.owner === profile.email) {
      return x``;
    }
    if (profile && profile.clubs && this.isMember(members, profile)) {
      return x`
        <div>
          <button class='disabled-button' disabled> Join </button> 
          <button class='active-button' @click=${this.handleUnjoin}> Unjoin </button> 
        </div>
      `;
    } else {
      return x`
        <div>
          <button class='active-button' @click=${this.handleJoin}> Join </button> 
          <button class='disabled-button' disabled> Unjoin </button> 
        </div>
      `;
    }
  }
  isMember(members, profile) {
    if (members && Array.isArray(members) && members.length !== 0) {
      return members.some((member) => member.email === profile.email);
    }
  }
  handleJoin() {
    const member = { name: this.myProfile.name, club_name: this.club.name, email: this.myProfile.email || "", role: "Member" };
    this.dispatchMessage({
      type: "MemberSaved",
      member,
      club_name: this.club.name
    });
  }
  handleUnjoin() {
    this.dispatchMessage({
      type: "MemberDeleted",
      email: this.myProfile.email || "",
      club_name: this.club.name
    });
  }
  renderAddEventOption() {
    return x`
      <custom-modal customId="add-club">
        <span slot="button-name"> Add Event + </span>
        <div slot="title"> Add Event </div>
        <div slot="content">
            <event-form hostClub=${this.club.name}> </event-form>
        </div>
      </custom-modal>
      `;
  }
  renderEditClubOption() {
    return x`
      <div> 
        <custom-modal customId="edit-club">
          <span slot="button-name"> Edit Club Info </span>
          <div slot="title"> Edit Club Info </div>
          <div slot="content">
              <club-edit .using=${this.club}> </club-edit>
          </div>
        </custom-modal>
      </div>
      `;
  }
  renderAddOfficiersOption() {
    return x`
      <div> 
        <custom-modal customId="edit-club">
          <span slot="button-name"> Add Officers + </span>
          <div slot="title"> Add Officer </div>
          <div slot="content">
              <add-member .using=${this.profiles} .usingClub=${this.club.name}> </add-member>
          </div>
        </custom-modal>
      </div>
      `;
  }
  hasAdminPermission() {
    return this.club.owner === localStorage.getItem(USER_EMAIL_KEY);
  }
  renderTags(tags) {
    return tags.map((tag) => {
      return x`
        <div class="tag"> ${tag} </div>
      `;
    });
  }
  renderAdmin(members) {
    if (members && Array.isArray(members)) {
      return members.map((member) => {
        if (member.role !== "Member") {
          return x`
                <a href="/app/profile/${member.email}" class="officer-card"> 
                    ${this.renderDeleteAdmin(member.email, this.club.owner)}
                    <div class="profile-pic">
                      <div class="circle">${this.getFirstLetter(member.name)}</div>
                    </div>
                    <div class="role"> ${member.role} </div>
                    ${member.name}
                    <div>
                  </div>
                </a>
              `;
        }
        return x``;
      });
    }
  }
  renderDeleteAdmin(email, ownerEmail) {
    if (email !== ownerEmail && this.hasAdminPermission()) {
      return x`
        <button class="space trash" @click=${(e3) => this.deleteMember(e3, email)}>
          <svg class="trash-icon">
            <use href="/icons/user-interface.svg#icon-trash" />
          </svg>
      </button>
      `;
    }
    return x``;
  }
  renderMembers(members) {
    if (members && Array.isArray(members)) {
      return members.map((member) => {
        if (member.role === "Member") {
          return x`
                <a href="/app/profile/${member.email}" class="member-card">
                  <div class="small-profile-pic">  
                    <div class="small-circle">${this.getFirstLetter(member.name)}</div>
                  </div>
                  <div class="space">
                    ${member.name}
                  </div>
                  <div>
                    ${this.renderDeleteAdmin(member.email, this.club.owner)}
                  </div>
                </a>
              `;
        }
        return x``;
      });
    }
  }
  deleteMember(event, email) {
    event.preventDefault();
    console.log("trash icoin clickedlkjadsklfjdsa");
    this.dispatchMessage({
      type: "MemberDeleted",
      email: email || "",
      club_name: this.club.name
    });
  }
  getMemberCount(members) {
    let count = 0;
    if (members && Array.isArray(members)) {
      members.map((member) => {
        if (member.role === "Member") {
          count += 1;
        }
      });
    }
    return count;
  }
  renderTime(start_time, end_time) {
    if (start_time === "TBD") {
      return "TBD";
    } else {
      return getTime(start_time, end_time);
    }
  }
  getFirstLetter(name) {
    return name.charAt(0);
  }
};
ClubItemElement.styles = i$3`
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
  `;
__decorateClass$6([
  n$1({ attribute: false })
], ClubItemElement.prototype, "using", 2);
__decorateClass$6([
  n$1({ attribute: false })
], ClubItemElement.prototype, "usingEvents", 2);
__decorateClass$6([
  n$1({ attribute: false })
], ClubItemElement.prototype, "usingMembers", 2);
__decorateClass$6([
  n$1({ attribute: false })
], ClubItemElement.prototype, "usingProfiles", 2);
__decorateClass$6([
  n$1({ attribute: false })
], ClubItemElement.prototype, "usingMyProfile", 2);
ClubItemElement = __decorateClass$6([
  t("club-item")
], ClubItemElement);
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let ClubViewElement = class extends View2 {
  get name() {
    var _a2;
    return ((_a2 = this.location) == null ? void 0 : _a2.params.name) || "";
  }
  get club() {
    return this.getFromModel("club");
  }
  get events() {
    return this.getFromModel("events");
  }
  get profiles() {
    return this.getFromModel("profiles");
  }
  get myProfile() {
    return this.getFromModel("myProfile");
  }
  get members() {
    return this.getFromModel("members");
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "name" && oldValue !== newValue && newValue) {
      this.dispatchMessage({
        type: "GetEvents",
        host: newValue
      });
      this.dispatchMessage({
        type: "GetMembers",
        club_name: newValue
      });
      this.dispatchMessage({
        type: "ClubSelected",
        name: newValue
      });
      this.dispatchMessage({
        type: "GetProfiles"
      });
      this.dispatchMessage({
        type: "GetMyProfile",
        email: localStorage.getItem(USER_EMAIL_KEY) || ""
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
  render() {
    return x`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <club-item 
        .using=${this.club} .usingEvents=${this.events} .usingMembers=${this.members}
        .usingProfiles=${this.profiles} .usingMyProfile=${this.myProfile}>
      </club-item>
    `;
  }
};
ClubViewElement.styles = i$3`
    :host {
      display: contents;
    }
  `;
__decorateClass$5([
  n$1({ attribute: false })
], ClubViewElement.prototype, "location", 2);
__decorateClass$5([
  n$1({ reflect: true })
], ClubViewElement.prototype, "name", 1);
__decorateClass$5([
  n$1()
], ClubViewElement.prototype, "club", 1);
__decorateClass$5([
  n$1()
], ClubViewElement.prototype, "events", 1);
__decorateClass$5([
  n$1()
], ClubViewElement.prototype, "profiles", 1);
__decorateClass$5([
  n$1()
], ClubViewElement.prototype, "myProfile", 1);
__decorateClass$5([
  n$1()
], ClubViewElement.prototype, "members", 1);
ClubViewElement = __decorateClass$5([
  t("club-view")
], ClubViewElement);
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let EventItemElement = class extends View2 {
  get event() {
    return this.using;
  }
  render() {
    return this.event && isNotEmpty(this.event) ? x`
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
                        <div> ${formatDate(this.event.date)} </div>
                    </div>
                    <svg class="icon">
                        <use href="/icons/user-interface.svg#icon-clock" />
                    </svg>
                    <div>
                        <div class="small-subheading"> Time </div>
                        <div> ${getTime(this.event.start_time, this.event.end_time)} </div>
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
    ` : x`<no-content> </no-content>`;
  }
};
EventItemElement.styles = i$3`
    :host {
      display: contents;
    }
  `;
__decorateClass$4([
  n$1({ attribute: false })
], EventItemElement.prototype, "using", 2);
EventItemElement = __decorateClass$4([
  t("event-item")
], EventItemElement);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let EventViewElement = class extends View2 {
  get _id() {
    var _a2;
    return ((_a2 = this.location) == null ? void 0 : _a2.params._id) || "";
  }
  get host() {
    var _a2;
    return ((_a2 = this.location) == null ? void 0 : _a2.params.host) || "";
  }
  get event() {
    return this.getFromModel("event") || {};
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "_id" && oldValue !== newValue && newValue) {
      console.log("Event Page:", newValue);
      this.dispatchMessage({
        type: "EventSelected",
        _id: newValue,
        host: this.host
      });
    } else if (name === "host" && oldValue !== newValue && newValue) {
      console.log("Event Page:", newValue);
      this.dispatchMessage({
        type: "EventSelected",
        _id: this._id,
        host: newValue
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
  render() {
    return x`
      <link rel="stylesheet" href="/styles/club-info.css" />
      <link rel="stylesheet" href="/styles/page.css" />
      <link rel="stylesheet" href="/styles/tokens.css" />
      <link rel="stylesheet" href="/styles/reset.css" />
      <app-header> <div> Cal Poly Clubs </div> </app-header>
      <div class="page-content">
        <event-item .using=${this.event}> </event-item>
      </div>
    `;
  }
};
EventViewElement.styles = i$3`
    :host {
      display: contents;
    }
  `;
__decorateClass$3([
  n$1({ attribute: false })
], EventViewElement.prototype, "location", 2);
__decorateClass$3([
  n$1({ reflect: true })
], EventViewElement.prototype, "_id", 1);
__decorateClass$3([
  n$1({ reflect: true })
], EventViewElement.prototype, "host", 1);
__decorateClass$3([
  n$1()
], EventViewElement.prototype, "event", 1);
EventViewElement = __decorateClass$3([
  t("event-view")
], EventViewElement);
const routes = [
  {
    path: "/app/club/:name",
    component: "club-view",
    action: () => {
      console.log("Navigating to /app/club/:name");
    }
  },
  {
    path: "/app/profile/:email",
    component: "profile-view",
    action: () => {
      console.log("Navigating to /app/profile/:email");
    }
  },
  {
    path: "/app/event/:host/:_id",
    component: "event-view",
    action: () => {
      console.log("Navigating to /app/event/:host/:_id");
    }
  },
  {
    path: "/app",
    component: "home-view",
    action: (commands) => {
      console.log("Navigating to /app");
      if (localStorage.getItem(TOKEN_KEY)) {
        return "home-view";
      } else {
        return commands.redirect("/");
      }
    }
  },
  {
    path: "/",
    component: "blank-view",
    action: () => {
      console.log("Navigating to /");
    }
  },
  { path: "(.*)", redirect: "/app" }
];
const dispatch = createDispatch();
const update = dispatch.update;
dispatch.addMessage("ProfileSaved", (msg) => {
  const { email, profile } = msg;
  return new JSONRequest(profile).put(`/profile/${email}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Profile:", json);
      return json;
    }
    return void 0;
  }).then(
    (profile2) => profile2 ? updateProps({ profile: profile2 }) : noUpdate
  );
});
dispatch.addMessage("MemberDeleted", (msg) => {
  const { email, club_name } = msg;
  return new APIRequest().post(`/members/delete/${club_name}/${email}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Member:", json);
      return json;
    }
    return void 0;
  }).then(() => {
    return new JSONRequest(void 0).get(`/members/${club_name}`).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return void 0;
    }).then((json) => {
      if (json) {
        console.log("Members:", json);
        return json;
      }
      return void 0;
    }).then(
      (members) => members ? updateProps({ members }) : noUpdate
    );
  });
});
dispatch.addMessage("MemberSaved", (msg) => {
  const { member, club_name } = msg;
  return new JSONRequest(member).post(`/members`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Member:", json);
      return json;
    }
    return void 0;
  }).then(() => {
    return new JSONRequest(void 0).get(`/members/${club_name}`).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return void 0;
    }).then((json) => {
      if (json) {
        console.log("Members:", json);
        return json;
      }
      return void 0;
    }).then(
      (members) => members ? updateProps({ members }) : noUpdate
    );
  });
});
dispatch.addMessage(
  "UserLoggedIn",
  (msg, model) => {
    const { user } = msg;
    console.log("Dispatched UserLoggedIn");
    return updateProps({ user })(model);
  }
);
dispatch.addMessage("ProfileSelected", (msg) => {
  const { email } = msg;
  return new APIRequest().get(`/profile/${email}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Profile:", json);
      return json;
    }
  }).then(
    (profile) => profile ? updateProps({ profile }) : noUpdate
  );
});
dispatch.addMessage("GetMyProfile", (msg) => {
  const { email } = msg;
  return new APIRequest().get(`/profile/${email}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("My Profile:", json);
      return json;
    }
  }).then(
    (myProfile) => myProfile ? updateProps({ myProfile }) : noUpdate
  );
});
dispatch.addMessage("GetClubSummaries", (msg) => {
  console.log("Dispatched GetClubSummaries");
  return new JSONRequest(void 0).get(`/clubSummaries`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("ClubSummaries:", json);
      return json;
    }
    return void 0;
  }).then(
    (clubSummaries) => clubSummaries ? updateProps({ clubSummaries }) : noUpdate
  );
});
dispatch.addMessage("GetEvents", (msg) => {
  const { host } = msg;
  console.log("Dispatched GetEvents");
  return new JSONRequest(void 0).get(`/events/${host}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Events:", json);
      return json;
    }
    return void 0;
  }).then(
    (events) => events ? updateProps({ events }) : noUpdate
  );
});
dispatch.addMessage("GetMembers", (msg) => {
  const { club_name } = msg;
  console.log("Dispatched GetMembers");
  return new JSONRequest(void 0).get(`/members/${club_name}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Members:", json);
      return json;
    }
    return void 0;
  }).then(
    (members) => members ? updateProps({ members }) : noUpdate
  );
});
dispatch.addMessage("EventSelected", (msg) => {
  const { _id, host } = msg;
  return new APIRequest().get(`/events/${host}/${_id}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Event:", json);
      return json;
    }
  }).then(
    (event) => event ? updateProps({ event }) : noUpdate
  );
});
dispatch.addMessage("ClubSelected", (msg) => {
  const { name } = msg;
  return new APIRequest().get(`/clubs/${name}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Club:", json);
      return json;
    }
  }).then(
    (club) => club ? updateProps({ club }) : noUpdate
  );
});
dispatch.addMessage("CreateEvent", (msg) => {
  console.log("Dispatched CreateEvent");
  const { event, host } = msg;
  return new JSONRequest(event).post(`/events`).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Event:", json);
      return json;
    }
  }).then(() => {
    return new JSONRequest(void 0).get(`/events/${host}`).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return void 0;
    }).then((json) => {
      if (json) {
        console.log("Events:", json);
        return json;
      }
      return void 0;
    }).then(
      (events) => events ? updateProps({ events }) : noUpdate
    );
  });
});
dispatch.addMessage("ClubSaved", (msg) => {
  const { name, club } = msg;
  return new JSONRequest(club).put(`/clubs/${name}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Club:", json);
      return json;
    }
    return void 0;
  }).then(
    (club2) => club2 ? updateProps({ club: club2 }) : noUpdate
  );
});
dispatch.addMessage("GetProfiles", () => {
  const email = "all";
  return new APIRequest().get(`/profile/${email}`).then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Profiles:", json);
      return json;
    }
  }).then(
    (profiles) => profiles ? updateProps({ profiles }) : noUpdate
  );
});
dispatch.addMessage("CreateClub", (msg) => {
  console.log("Dispatched CreateClub");
  const { club } = msg;
  return new JSONRequest(club).post(`/clubs`).then((response) => {
    if (response.status === 201) {
      return response.json();
    }
    return void 0;
  }).then((json) => {
    if (json) {
      console.log("Club:", json);
      return json;
    }
  }).then(() => {
    return new JSONRequest(void 0).get(`/clubSummaries`).then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return void 0;
    }).then((json) => {
      if (json) {
        console.log("ClubSummaries:", json);
        return json;
      }
      return void 0;
    }).then(
      (clubSummaries) => clubSummaries ? updateProps({ clubSummaries }) : noUpdate
    );
  });
});
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let AuthPrimary = class extends s$3 {
  render() {
    return x`
        <div> 
            <auth-container> </auth-container>
            <slot> </slot>
        </div>
        `;
  }
};
AuthPrimary.styles = i$3`
        :host {
            display: block;
        }
    `;
AuthPrimary = __decorateClass$2([
  t("auth-primary")
], AuthPrimary);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let VaadinRouterElement = class extends s$3 {
  constructor() {
    super(...arguments);
    this.router = new Router(this);
    this.routes = [];
  }
  connectedCallback() {
    super.connectedCallback();
    this.router.setRoutes(this.routes);
    console.log("Router:", this.routes);
  }
  render() {
    return x`<slot></slot>`;
  }
};
VaadinRouterElement.styles = i$3`
      :host {
        display: contents;
      }
    `;
__decorateClass$1([
  n$1({ attribute: false })
], VaadinRouterElement.prototype, "routes", 2);
VaadinRouterElement = __decorateClass$1([
  t("vaadin-router")
], VaadinRouterElement);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let ClubAppElement = class extends Main2 {
  constructor() {
    super(update);
  }
  render() {
    return x`
      <auth-container>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-container>
    `;
  }
};
ClubAppElement.styles = i$3`
    :host {
      display: contents;
    }
  `;
ClubAppElement = __decorateClass([
  t("club-app")
], ClubAppElement);
document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("dark-mode") === "true";
  document.body.classList.toggle("dark-mode", darkMode);
});
