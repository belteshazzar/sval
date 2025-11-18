import { parse as oe } from "acorn";
const Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Me;
  },
  get ClassDeclaration() {
    return lr;
  },
  get FunctionDeclaration() {
    return or;
  },
  get MethodDefinition() {
    return Ne;
  },
  get VariableDeclaration() {
    return q;
  },
  get VariableDeclarator() {
    return Te;
  }
}, Symbol.toStringTag, { value: "Module" })), et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Ze;
  },
  get ClassDeclaration() {
    return sn;
  },
  get FunctionDeclaration() {
    return ln;
  },
  get MethodDefinition() {
    return He;
  },
  get VariableDeclaration() {
    return W;
  },
  get VariableDeclarator() {
    return Ge;
  }
}, Symbol.toStringTag, { value: "Module" })), ce = Object.freeze, w = Object.defineProperty, T = Object.getOwnPropertyDescriptor, tt = Object.prototype.hasOwnProperty;
function rt(e, t) {
  return tt.call(e, t);
}
const se = Object.getOwnPropertyNames, we = Object.setPrototypeOf;
function nt(e, t) {
  we ? we(e, t) : e.__proto__ = t;
}
const Ee = Object.getPrototypeOf;
function it(e) {
  return Ee ? Ee(e) : e.__proto__;
}
const at = Object.getOwnPropertyDescriptor;
function _e(e, t, r) {
  for (; t; ) {
    const n = at(t, r), i = typeof n < "u" && typeof n.writable > "u" && typeof n[e] == "function" && n[e];
    if (i)
      return i;
    t = it(t);
  }
}
function Le(e, t) {
  return _e("get", e, t);
}
function xe(e, t) {
  return _e("set", e, t);
}
const te = Object.create;
function ke(e, t) {
  nt(e, t), e.prototype = te(t.prototype, {
    constructor: {
      value: e,
      writable: !0
    }
  });
}
function ot(e) {
  for (let t = 1; t < arguments.length; ++t) {
    const r = arguments[t];
    for (const n in r)
      rt(r, n) && (e[n] = r[n]);
  }
  return e;
}
const O = Object.assign || ot;
let Y = [], h = te(null);
try {
  if (!window.Object) throw 0;
  Y = se(h = window).filter((e) => e !== "webkitStorageInfo");
} catch {
  try {
    if (!global.Object) throw 0;
    Y = se(h = global).filter((t) => t !== "GLOBAL" && t !== "root");
  } catch {
    try {
      h.Object = Object;
    } catch {
    }
    try {
      h.Function = Function;
    } catch {
    }
    try {
      h.Array = Array;
    } catch {
    }
    try {
      h.Number = Number;
    } catch {
    }
    try {
      h.parseFloat = parseFloat;
    } catch {
    }
    try {
      h.parseInt = parseInt;
    } catch {
    }
    try {
      h.Infinity = 1 / 0;
    } catch {
    }
    try {
      h.NaN = NaN;
    } catch {
    }
    try {
      h.undefined = void 0;
    } catch {
    }
    try {
      h.Boolean = Boolean;
    } catch {
    }
    try {
      h.String = String;
    } catch {
    }
    try {
      h.Symbol = Symbol;
    } catch {
    }
    try {
      h.Date = Date;
    } catch {
    }
    try {
      h.Promise = Promise;
    } catch {
    }
    try {
      h.RegExp = RegExp;
    } catch {
    }
    try {
      h.Error = Error;
    } catch {
    }
    try {
      h.EvalError = EvalError;
    } catch {
    }
    try {
      h.RangeError = RangeError;
    } catch {
    }
    try {
      h.ReferenceError = ReferenceError;
    } catch {
    }
    try {
      h.SyntaxError = SyntaxError;
    } catch {
    }
    try {
      h.TypeError = TypeError;
    } catch {
    }
    try {
      h.URIError = URIError;
    } catch {
    }
    try {
      h.JSON = JSON;
    } catch {
    }
    try {
      h.Math = Math;
    } catch {
    }
    try {
      h.console = console;
    } catch {
    }
    try {
      h.Intl = Intl;
    } catch {
    }
    try {
      h.ArrayBuffer = ArrayBuffer;
    } catch {
    }
    try {
      h.Uint8Array = Uint8Array;
    } catch {
    }
    try {
      h.Int8Array = Int8Array;
    } catch {
    }
    try {
      h.Uint16Array = Uint16Array;
    } catch {
    }
    try {
      h.Int16Array = Int16Array;
    } catch {
    }
    try {
      h.Uint32Array = Uint32Array;
    } catch {
    }
    try {
      h.Int32Array = Int32Array;
    } catch {
    }
    try {
      h.Float32Array = Float32Array;
    } catch {
    }
    try {
      h.Float64Array = Float64Array;
    } catch {
    }
    try {
      h.Uint8ClampedArray = Uint8ClampedArray;
    } catch {
    }
    try {
      h.DataView = DataView;
    } catch {
    }
    try {
      h.Map = Map;
    } catch {
    }
    try {
      h.Set = Set;
    } catch {
    }
    try {
      h.WeakMap = WeakMap;
    } catch {
    }
    try {
      h.WeakSet = WeakSet;
    } catch {
    }
    try {
      h.Proxy = Proxy;
    } catch {
    }
    try {
      h.Reflect = Reflect;
    } catch {
    }
    try {
      h.decodeURI = decodeURI;
    } catch {
    }
    try {
      h.decodeURIComponent = decodeURIComponent;
    } catch {
    }
    try {
      h.encodeURI = encodeURI;
    } catch {
    }
    try {
      h.encodeURIComponent = encodeURIComponent;
    } catch {
    }
    try {
      h.escape = escape;
    } catch {
    }
    try {
      h.unescape = unescape;
    } catch {
    }
    try {
      h.eval = eval;
    } catch {
    }
    try {
      h.isFinite = isFinite;
    } catch {
    }
    try {
      h.isNaN = isNaN;
    } catch {
    }
    try {
      h.SharedArrayBuffer = SharedArrayBuffer;
    } catch {
    }
    try {
      h.Atomics = Atomics;
    } catch {
    }
    try {
      h.WebAssembly = WebAssembly;
    } catch {
    }
    try {
      h.clearInterval = clearInterval;
    } catch {
    }
    try {
      h.clearTimeout = clearTimeout;
    } catch {
    }
    try {
      h.setInterval = setInterval;
    } catch {
    }
    try {
      h.setTimeout = setTimeout;
    } catch {
    }
    try {
      h.crypto = crypto;
    } catch {
    }
    Y = se(h);
  }
}
h.Symbol && (!h.Symbol.iterator && (h.Symbol.iterator = A("iterator")), !h.Symbol.asyncIterator && (h.Symbol.asyncIterator = A("asynciterator")));
const Ae = te({});
for (let e = 0; e < Y.length; e++) {
  const t = Y[e];
  try {
    Ae[t] = h[t];
  } catch {
  }
}
const ee = A("window");
function lt() {
  return O(te({ [ee]: h }), Ae);
}
function A(e) {
  return e + Math.random().toString(36).substring(2);
}
function st(e) {
  let t;
  if (typeof Symbol == "function" && (t = e[Symbol.asyncIterator], !t && (t = e[Symbol.iterator])), t)
    return t.call(e);
  if (typeof e.next == "function")
    return e;
  {
    let r = 0;
    return {
      next() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  }
}
const ct = "0.4.8", P = { RES: void 0 }, S = { RES: void 0 }, g = { VAL: A("continue") }, v = { VAL: A("break") }, fe = A("super"), M = A("supercall"), ue = A("noctor"), K = A("clsctor"), ye = A("newtarget"), k = A("noinit"), B = A("deadzone");
class le {
  constructor(t, r) {
    this.kind = t, this.value = r;
  }
  get() {
    return this.value;
  }
  set(t) {
    if (this.kind === "const")
      throw new TypeError("Assignment to constant variable");
    return this.value = t;
  }
}
class C {
  constructor(t, r) {
    this.object = t, this.property = r;
  }
  get() {
    return this.object[this.property];
  }
  set(t) {
    return this.object[this.property] = t, !0;
  }
  del() {
    return delete this.object[this.property];
  }
}
class Be {
  constructor(t, r) {
    this.map = t, this.key = r;
  }
  get() {
    return this.map.get(this.key);
  }
  set(t) {
    return this.map.set(this.key, t), !0;
  }
  del() {
    return this.map.delete(this.key);
  }
}
class E {
  /**
   * Create a simulated scope
   * @param parent the parent scope along the scope chain (default: null)
   * @param isolated true for function scope or false for block scope (default: false)
   */
  constructor(t = null, r = !1) {
    this.context = te(null), this.parent = t, this.isolated = r;
  }
  /**
   * Get global scope
   */
  global() {
    let t = this;
    for (; t.parent; )
      t = t.parent;
    return t;
  }
  /**
   * Clone current scope
   */
  clone() {
    const t = new E(this.parent, this.isolated);
    for (const r in this.context) {
      const n = this.context[r];
      t[n.kind](r, n.get());
    }
    return t;
  }
  /**
   * Find a variable along scope chain
   * @param name variable identifier name
   */
  find(t) {
    if (this.context[t])
      return this.context[t];
    if (this.parent)
      return this.parent.find(t);
    {
      const r = this.global().find("window").get();
      return t in r ? new C(r, t) : null;
    }
  }
  /**
   * Check if a variable exists in this scope only (not searching parent chain)
   * @param name variable identifier name
   */
  hasOwn(t) {
    return t in this.context;
  }
  /**
   * Declare a var variable
   * @param name variable identifier name
   * @param value variable value
   */
  var(t, r) {
    let n = this;
    for (; n.parent && !n.isolated; )
      n = n.parent;
    const i = n.context[t];
    if (!i)
      n.context[t] = new le("var", r === k ? void 0 : r);
    else if (i.kind === "var")
      r !== k && i.set(r);
    else
      throw new SyntaxError(`Identifier '${t}' has already been declared`);
    if (!n.parent) {
      const a = n.find("window").get();
      r !== k && w(a, t, { value: r, writable: !0, enumerable: !0 });
    }
  }
  /**
   * Declare a let variable
   * @param name variable identifier name
   * @param value variable value
   */
  let(t, r) {
    const n = this.context[t];
    if (!n || n.get() === B)
      this.context[t] = new le("let", r);
    else
      throw new SyntaxError(`Identifier '${t}' has already been declared`);
  }
  /**
   * Declare a const variable
   * @param name variable identifier name
   * @param value variable value
   */
  const(t, r) {
    const n = this.context[t];
    if (!n || n.get() === B)
      this.context[t] = new le("const", r);
    else
      throw new SyntaxError(`Identifier '${t}' has already been declared`);
  }
  /**
   * Declare a function
   * @param name function name
   * @param value function
   */
  func(t, r) {
    const n = this.context[t];
    if (!n || n.kind === "var")
      this.context[t] = new le("var", r);
    else
      throw new SyntaxError(`Identifier '${t}' has already been declared`);
  }
}
function he(e, t = {}) {
  const { res: r, err: n, ret: i, fullRet: a } = t;
  return new Promise((o, l) => {
    if ("ret" in t)
      return o(e.return(i));
    "err" in t ? c(n) : s(r);
    function s(f) {
      let y;
      try {
        y = e.next(f);
      } catch (m) {
        return l(m);
      }
      return u(y), null;
    }
    function c(f) {
      let y;
      try {
        y = e.throw(f);
      } catch (m) {
        return l(m);
      }
      u(y);
    }
    function u(f) {
      if (f.done) return o(a ? f : f.value);
      if (f.value !== P) return o(f);
      const y = f.value.RES;
      return (y && y.then === "function" ? y : Promise.resolve(y)).then(s, c);
    }
  });
}
function N(e, t, r = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = r;
  if (e.name === "undefined")
    return;
  const a = t.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const o = a.get();
      if (o === B)
        throw new ReferenceError(`${e.name} is not defined`);
      return o;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function ft(e, t) {
  return Symbol.for(`private:${e.name}`);
}
const ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: N,
  PrivateIdentifier: ft
}, Symbol.toStringTag, { value: "Module" }));
function Ie(e, t) {
  return e.value;
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Ie
}, Symbol.toStringTag, { value: "Module" }));
function dt(e, t) {
  const r = t.find(M);
  if (r && !r.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return t.find("this").get();
}
function pt(e, t) {
  let r = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? r = r.concat(ne(i, t)) : r.push(p(i, t));
  }
  return r;
}
function ht(e, t) {
  const r = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      O(r, ne(i, t));
    else if (i.type === "Property") {
      let a;
      const o = i.key;
      i.computed ? a = p(o, t) : o.type === "Identifier" ? a = o.name : a = "" + Ie(o);
      const l = p(i.value, t), s = i.kind;
      if (s === "init")
        r[a] = l;
      else if (s === "get") {
        const c = T(r, a);
        w(r, a, {
          get: l,
          set: c && c.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const c = T(r, a);
        w(r, a, {
          get: c && c.get,
          set: l,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return r;
}
function mt(e, t) {
  if (e.id && e.id.name) {
    const r = new E(t), n = z(e, r);
    return r.const(e.id.name, n), n;
  } else
    return z(e, t);
}
function gt(e, t) {
  const r = e.argument;
  switch (e.operator) {
    case "+":
      return +p(r, t);
    case "-":
      return -p(r, t);
    case "!":
      return !p(r, t);
    case "~":
      return ~p(r, t);
    case "void":
      return void p(r, t);
    case "typeof":
      return r.type === "Identifier" ? typeof N(r, t, { throwErr: !1 }) : typeof p(r, t);
    case "delete":
      if (r.type === "MemberExpression")
        return re(r, t, { getVar: !0 }).del();
      if (r.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return p(r, t), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function vt(e, t) {
  const r = e.argument;
  let n;
  if (r.type === "Identifier")
    n = N(r, t, { getVar: !0 });
  else if (r.type === "MemberExpression")
    n = re(r, t, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function bt(e, t) {
  const r = p(e.left, t), n = p(e.right, t);
  switch (e.operator) {
    case "==":
      return r == n;
    case "!=":
      return r != n;
    case "===":
      return r === n;
    case "!==":
      return r !== n;
    case "<":
      return r < n;
    case "<=":
      return r <= n;
    case ">":
      return r > n;
    case ">=":
      return r >= n;
    case "<<":
      return r << n;
    case ">>":
      return r >> n;
    case ">>>":
      return r >>> n;
    case "+":
      return r + n;
    case "-":
      return r - n;
    case "*":
      return r * n;
    case "**":
      return r ** n;
    case "/":
      return r / n;
    case "%":
      return r % n;
    case "|":
      return r | n;
    case "^":
      return r ^ n;
    case "&":
      return r & n;
    case "in":
      return r in n;
    case "instanceof":
      return r instanceof n;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function wt(e, t) {
  const r = p(e.right, t), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = N(n, t, { getVar: !0, throwErr: !1 }), !i) {
      const a = t.global().find("window").get();
      i = new C(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = re(n, t, { getVar: !0 });
  else
    return $(n, t, { feed: r });
  switch (e.operator) {
    case "=":
      return i.set(r), i.get();
    case "+=":
      return i.set(i.get() + r), i.get();
    case "-=":
      return i.set(i.get() - r), i.get();
    case "*=":
      return i.set(i.get() * r), i.get();
    case "/=":
      return i.set(i.get() / r), i.get();
    case "%=":
      return i.set(i.get() % r), i.get();
    case "**=":
      return i.set(i.get() ** r), i.get();
    case "<<=":
      return i.set(i.get() << r), i.get();
    case ">>=":
      return i.set(i.get() >> r), i.get();
    case ">>>=":
      return i.set(i.get() >>> r), i.get();
    case "|=":
      return i.set(i.get() | r), i.get();
    case "^=":
      return i.set(i.get() ^ r), i.get();
    case "&=":
      return i.set(i.get() & r), i.get();
    case "||=":
      return i.get() || i.set(r), i.get();
    case "&&=":
      return i.get() && i.set(r), i.get();
    case "??=": {
      const a = i.get();
      return a == null && i.set(r), i.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function Et(e, t) {
  switch (e.operator) {
    case "||":
      return p(e.left, t) || p(e.right, t);
    case "&&":
      return p(e.left, t) && p(e.right, t);
    case "??": {
      const r = p(e.left, t);
      return r ?? p(e.right, t);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function re(e, t, r = {}) {
  const { getObj: n = !1, getVar: i = !1 } = r;
  let a;
  if (e.object.type === "Super" ? a = Oe(e.object, t, { getProto: !0 }) : a = p(e.object, t), e.optional && a == null)
    return;
  if (n) return a;
  const o = e.property.type === "PrivateIdentifier";
  let l;
  if (o)
    if (l = Symbol.for(`private:${e.property.name}`), typeof a == "function") {
      const c = a.__privateStaticFields;
      if (!c || !c.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Be(c, l) : c.get(l);
    } else {
      const c = a.constructor, u = c && c.__privateInstanceFields;
      if (!u)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const f = u.get(a);
      if (!f || !(l in f))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new C(f, l) : f[l];
    }
  else e.computed ? l = p(e.property, t) : l = e.property.name;
  if (i) {
    const s = xe(a, l);
    if (e.object.type === "Super" && s) {
      const c = t.find("this").get(), u = A(l);
      return w(c, u, { set: s }), new C(c, u);
    } else
      return new C(a, l);
  } else {
    const s = Le(a, l);
    if (e.object.type === "Super" && s) {
      const c = t.find("this").get();
      return s.call(c);
    } else
      return a[l];
  }
}
function St(e, t) {
  return p(e.test, t) ? p(e.consequent, t) : p(e.alternate, t);
}
function _t(e, t) {
  let r, n;
  if (e.callee.type === "MemberExpression") {
    if (n = re(e.callee, t, { getObj: !0 }), e.optional && n == null)
      return;
    let o;
    if (e.callee.property.type === "PrivateIdentifier")
      if (o = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const c = n.__privateStaticFields;
        r = c ? c.get(o) : void 0;
      } else {
        const c = n.constructor, u = c && c.__privateInstanceFields, f = u ? u.get(n) : null;
        r = f ? f[o] : void 0;
      }
    else if (e.callee.computed)
      if (o = p(e.callee.property, t), e.callee.object.type === "Super") {
        const s = t.find("this").get();
        r = n[o].bind(s);
      } else
        r = n[o];
    else if (o = e.callee.property.name, e.callee.object.type === "Super") {
      const s = t.find("this").get();
      r = n[o].bind(s);
    } else
      r = n[o];
    if (e.optional && r == null)
      return;
    if (typeof r != "function")
      throw new TypeError(`${o} is not a function`);
    try {
      if (r[K] === !0)
        throw new TypeError(`Class constructor ${o} cannot be invoked without 'new'`);
    } catch (s) {
      if (s instanceof TypeError && s.message.includes("Class constructor"))
        throw s;
    }
  } else {
    if (n = t.find("this").get(), r = p(e.callee, t), e.optional && r == null)
      return;
    let o = !1;
    try {
      o = r[K] === !0;
    } catch {
    }
    if (typeof r != "function" || e.callee.type !== "Super" && o) {
      let l;
      if (e.callee.type === "Identifier")
        l = e.callee.name;
      else
        try {
          l = JSON.stringify(r);
        } catch {
          l = "" + r;
        }
      throw typeof r != "function" ? new TypeError(`${l} is not a function`) : new TypeError(`Class constructor ${l} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let o = 0; o < e.arguments.length; o++) {
    const l = e.arguments[o];
    l.type === "SpreadElement" ? i = i.concat(ne(l, t)) : i.push(p(l, t));
  }
  if (e.callee.type === "Super") {
    if (t.find(M).get())
      throw new ReferenceError("Super constructor may only be called once");
    t.find(M).set(!0);
  }
  let a = !1;
  try {
    a = n && n[ee];
  } catch {
  }
  if (a && r.toString().indexOf("[native code]") !== -1)
    try {
      return r.apply(n[ee], i);
    } catch {
      return r.apply(n, i);
    }
  return r.apply(n, i);
}
function Lt(e, t) {
  const r = p(e.callee, t);
  let n = !1;
  try {
    n = r[ue];
  } catch {
  }
  if (typeof r != "function") {
    let a;
    if (e.callee.type === "Identifier")
      a = e.callee.name;
    else
      try {
        a = JSON.stringify(r);
      } catch {
        a = "" + r;
      }
    throw new TypeError(`${a} is not a constructor`);
  } else if (n)
    throw new TypeError(`${r.name || "(intermediate value)"} is not a constructor`);
  let i = [];
  for (let a = 0; a < e.arguments.length; a++) {
    const o = e.arguments[a];
    o.type === "SpreadElement" ? i = i.concat(ne(o, t)) : i.push(p(o, t));
  }
  return new r(...i);
}
function xt(e, t) {
  return t.find(ye).get();
}
function kt(e, t) {
  let r;
  for (let n = 0; n < e.expressions.length; n++)
    r = p(e.expressions[n], t);
  return r;
}
function At(e, t) {
  return z(e, t);
}
function Bt(e, t) {
  const r = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, o;
  for (; a = r.shift(); )
    i += $e(a), o = n.shift(), o && (i += p(o, t));
  return i;
}
function It(e, t) {
  const r = p(e.tag, t), n = e.quasi.quasis, i = n.map((s) => s.value.cooked), a = n.map((s) => s.value.raw);
  w(i, "raw", {
    value: ce(a)
  });
  const o = e.quasi.expressions, l = [];
  if (o)
    for (let s = 0; s < o.length; s++)
      l.push(p(o[s], t));
  return r(ce(i), ...l);
}
function $e(e, t) {
  return e.value.raw;
}
function $t(e, t) {
  if (e.id && e.id.name) {
    const r = new E(t), n = ve(e, r);
    return r.const(e.id.name, n), n;
  } else
    return ve(e, t);
}
function Oe(e, t, r = {}) {
  const { getProto: n = !1 } = r, i = t.find(fe).get();
  return n ? i.prototype : i;
}
function ne(e, t) {
  return p(e.argument, t);
}
function Ot(e, t) {
  return p(e.expression, t);
}
const Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: pt,
  ArrowFunctionExpression: At,
  AssignmentExpression: wt,
  BinaryExpression: bt,
  CallExpression: _t,
  ChainExpression: Ot,
  ClassExpression: $t,
  ConditionalExpression: St,
  FunctionExpression: mt,
  LogicalExpression: Et,
  MemberExpression: re,
  MetaProperty: xt,
  NewExpression: Lt,
  ObjectExpression: ht,
  SequenceExpression: kt,
  SpreadElement: ne,
  Super: Oe,
  TaggedTemplateExpression: It,
  TemplateElement: $e,
  TemplateLiteral: Bt,
  ThisExpression: dt,
  UnaryExpression: gt,
  UpdateExpression: vt
}, Symbol.toStringTag, { value: "Module" }));
function jt(e, t) {
  p(e.expression, t);
}
function R(e, t, r = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = r, a = n ? t : new E(t);
  i || Q(e, a, { onlyBlock: !0 });
  for (let o = 0; o < e.body.length; o++) {
    const l = p(e.body[o], a);
    if (l === v || l === g || l === S)
      return l;
  }
}
function Dt() {
}
function Ft() {
  debugger;
}
function Ct(e, t) {
  return S.RES = e.argument ? p(e.argument, t) : void 0, S;
}
function Tt(e) {
  return e.label ? v.LABEL = e.label.name : delete v.LABEL, v;
}
function Mt(e) {
  return e.label ? g.LABEL = e.label.name : delete g.LABEL, g;
}
function Nt(e, t) {
  const r = p(e.object, t), n = new E(t);
  if (r && typeof r == "object")
    for (const i in r)
      n.var(i, r[i]);
  return p(e.body, n);
}
function Rt(e, t) {
  const r = e.label.name, n = new E(t, !1);
  n.let("__LABEL__", r);
  const i = p(e.body, n);
  if (i === v && v.LABEL === r) {
    delete v.LABEL;
    return;
  }
  return i === g && g.LABEL === r && delete g.LABEL, i;
}
function Vt(e, t) {
  return p(e.test, t) ? p(e.consequent, t) : p(e.alternate, t);
}
function Ut(e, t) {
  const r = p(e.discriminant, t);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || p(a.test, t) === r) && (n = !0), n) {
      const o = Pe(a, t);
      if (o === v)
        break;
      if (o === g || o === S)
        return o;
    }
  }
}
function Pe(e, t) {
  for (let r = 0; r < e.consequent.length; r++) {
    const n = p(e.consequent[r], t);
    if (n === v || n === g || n === S)
      return n;
  }
}
function zt(e, t) {
  throw p(e.argument, t);
}
function qt(e, t) {
  try {
    return R(e.block, t);
  } catch (r) {
    if (e.handler) {
      const n = new E(t), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, r);
        } else
          $(i, t, { feed: r });
      return je(e.handler, n);
    } else
      throw r;
  } finally {
    if (e.finalizer) {
      const r = R(e.finalizer, t);
      if (r === v || r === g || r === S)
        return r;
    }
  }
}
function je(e, t) {
  return R(e.body, t, { invasived: !0 });
}
function Wt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (; p(e.test, t); ) {
    const n = p(e.body, t);
    if (n === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return n;
      }
      break;
    } else if (n === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return n;
      }
      continue;
    } else if (n === S)
      return n;
  }
}
function Kt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  do {
    const n = p(e.body, t);
    if (n === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return n;
      }
      break;
    } else if (n === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return n;
      }
      continue;
    } else if (n === S)
      return n;
  } while (p(e.test, t));
}
function Jt(e, t) {
  const r = new E(t), n = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (p(e.init, r); !e.test || p(e.test, r); p(e.update, r)) {
    const i = new E(r);
    let a;
    if (e.body.type === "BlockStatement" ? a = R(e.body, i, { invasived: !0 }) : a = p(e.body, i), a === v) {
      if (v.LABEL) {
        if (v.LABEL === n) {
          delete v.LABEL;
          break;
        }
        return a;
      }
      break;
    } else if (a === g) {
      if (g.LABEL) {
        if (g.LABEL === n) {
          delete g.LABEL;
          continue;
        }
        return a;
      }
      continue;
    } else if (a === S)
      return a;
  }
}
function Gt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (const n in p(e.right, t)) {
    const i = Ye(e, t, { value: n });
    if (i === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return i;
      }
      break;
    } else if (i === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return i;
      }
      continue;
    } else if (i === S)
      return i;
  }
}
function Zt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0, n = p(e.right, t);
  for (const i of n) {
    const a = Ye(e, t, { value: i });
    if (a === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return a;
      }
      break;
    } else if (a === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return a;
      }
      continue;
    } else if (a === S)
      return a;
  }
}
const Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: R,
  BreakStatement: Tt,
  CatchClause: je,
  ContinueStatement: Mt,
  DebuggerStatement: Ft,
  DoWhileStatement: Kt,
  EmptyStatement: Dt,
  ExpressionStatement: jt,
  ForInStatement: Gt,
  ForOfStatement: Zt,
  ForStatement: Jt,
  IfStatement: Vt,
  LabeledStatement: Rt,
  ReturnStatement: Ct,
  SwitchCase: Pe,
  SwitchStatement: Ut,
  ThrowStatement: zt,
  TryStatement: qt,
  WhileStatement: Wt,
  WithStatement: Nt
}, Symbol.toStringTag, { value: "Module" }));
function De(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: o = {} } = r, l = [];
  for (let s = 0; s < e.properties.length; s++) {
    const c = e.properties[s];
    if (i) {
      if (a || n === "var")
        if (c.type === "Property") {
          const u = c.value;
          u.type === "Identifier" ? t[n](u.name, a ? B : n === "var" ? k : void 0) : $(u, t, { kind: n, hoist: i, onlyBlock: a });
        } else
          J(c, t, { kind: n, hoist: i, onlyBlock: a });
    } else if (c.type === "Property") {
      let u;
      c.computed ? u = p(c.key, t) : u = c.key.name, l.push(u);
      const f = c.value;
      f.type === "Identifier" ? t[n](f.name, o[u]) : $(f, t, { kind: n, feed: o[u] });
    } else {
      const u = O({}, o);
      for (let f = 0; f < l.length; f++) delete u[l[f]];
      J(c, t, { kind: n, feed: u });
    }
  }
}
function Fe(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: o = [] } = r, l = [];
  for (let s = 0; s < e.elements.length; s++) {
    const c = e.elements[s];
    if (c)
      if (i)
        (a || n === "var") && (c.type === "Identifier" ? t[n](c.name, a ? B : n === "var" ? k : void 0) : $(c, t, { kind: n, hoist: i, onlyBlock: a }));
      else if (c.type === "Identifier")
        if (n)
          t[n](c.name, o[s]);
        else {
          const u = N(c, t, { getVar: !0 });
          u.set(o[s]), l.push(u.get());
        }
      else c.type === "RestElement" ? J(c, t, { kind: n, feed: o.slice(s) }) : $(c, t, { kind: n, feed: o[s] });
  }
  if (l.length)
    return l;
}
function J(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: o = [] } = r, l = e.argument;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? k : void 0) : $(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? n ? t[n](l.name, o) : N(l, t, { getVar: !0 }).set(o) : $(l, t, { kind: n, feed: o });
}
function Ce(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: o = p(e.right, t) } = r, l = e.left;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? k : void 0) : $(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? t[n](l.name, o) : $(l, t, { kind: n, feed: o });
}
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Fe,
  AssignmentPattern: Ce,
  ObjectPattern: De,
  RestElement: J
}, Symbol.toStringTag, { value: "Module" }));
function Yt(e, t) {
  var a;
  const r = e.source.value, n = (a = t.find("__moduleLoader__")) == null ? void 0 : a.get();
  if (!n)
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  const i = n(r);
  if (!i)
    throw new Error(`Failed to load module: ${r}`);
  for (const o of e.specifiers)
    if (o.type === "ImportDefaultSpecifier") {
      const l = o.local.name;
      t.const(l, i.default);
    } else if (o.type === "ImportSpecifier") {
      const l = o.imported.type === "Identifier" ? o.imported.name : o.imported.value, s = o.local.name;
      t.const(s, i[l]);
    } else if (o.type === "ImportNamespaceSpecifier") {
      const l = o.local.name;
      t.const(l, i);
    }
}
function Qt(e, t) {
  var n, i, a, o, l;
  const r = (n = t.find("__moduleExports__")) == null ? void 0 : n.get();
  if (!r)
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  if (e.declaration) {
    if (p(e.declaration, t), e.declaration.type === "VariableDeclaration") {
      for (const s of e.declaration.declarations)
        if (s.id.type === "Identifier") {
          const c = s.id.name, u = (i = t.find(c)) == null ? void 0 : i.get();
          r[c] = u;
        }
    } else if (e.declaration.type === "FunctionDeclaration" || e.declaration.type === "ClassDeclaration") {
      const s = e.declaration.id.name, c = (a = t.find(s)) == null ? void 0 : a.get();
      r[s] = c;
    }
  } else if (e.specifiers) {
    for (const s of e.specifiers)
      if (s.type === "ExportSpecifier") {
        const c = s.local.type === "Identifier" ? s.local.name : s.local.value, u = s.exported.type === "Identifier" ? s.exported.name : s.exported.value, f = (o = t.find(c)) == null ? void 0 : o.get();
        r[u] = f;
      }
  }
  if (e.source) {
    const s = e.source.value, c = (l = t.find("__moduleLoader__")) == null ? void 0 : l.get();
    if (!c)
      throw new Error("Module loader not available");
    const u = c(s);
    for (const f of e.specifiers)
      if (f.type === "ExportSpecifier") {
        const y = f.local.type === "Identifier" ? f.local.name : f.local.value, m = f.exported.type === "Identifier" ? f.exported.name : f.exported.value;
        r[m] = u[y];
      }
  }
}
function er(e, t) {
  var i, a, o;
  const r = (i = t.find("__moduleExports__")) == null ? void 0 : i.get();
  if (!r)
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  let n;
  if (e.declaration.type === "FunctionDeclaration" || e.declaration.type === "ClassDeclaration") {
    p(e.declaration, t);
    const l = (a = e.declaration.id) == null ? void 0 : a.name;
    l && (n = (o = t.find(l)) == null ? void 0 : o.get());
  } else
    n = p(e.declaration, t);
  r.default = n;
}
function tr(e, t) {
  var o, l;
  const r = (o = t.find("__moduleExports__")) == null ? void 0 : o.get();
  if (!r)
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  const n = e.source.value, i = (l = t.find("__moduleLoader__")) == null ? void 0 : l.get();
  if (!i)
    throw new Error("Module loader not available");
  const a = i(n);
  if (e.exported) {
    const s = e.exported.type === "Identifier" ? e.exported.name : e.exported.value;
    r[s] = a;
  } else
    for (const s in a)
      s !== "default" && (r[s] = a[s]);
}
function rr(e, t) {
  var i;
  const r = p(e.source, t), n = (i = t.find("__moduleLoader__")) == null ? void 0 : i.get();
  if (!n)
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  return n(r);
}
const nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExportAllDeclaration: tr,
  ExportDefaultDeclaration: er,
  ExportNamedDeclaration: Qt,
  ImportDeclaration: Yt,
  ImportExpression: rr
}, Symbol.toStringTag, { value: "Module" }));
function ir(e, t) {
  for (let r = 0; r < e.body.length; r++)
    p(e.body[r], t);
}
const ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: ir
}, Symbol.toStringTag, { value: "Module" }));
let de;
function p(e, t) {
  if (!e) return;
  de || (de = O(
    {},
    Qe,
    Pt,
    ut,
    Ht,
    yt,
    Xt,
    nr,
    ar
  ));
  const r = de[e.type];
  if (r)
    return r(e, t);
  throw new Error(`${e.type} isn't implemented`);
}
function or(e, t) {
  t.func(e.id.name, z(e, t));
}
function q(e, t, r = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    Te(e.declarations[n], t, O({ kind: i }, r));
  }
}
function Te(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: o } = r;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? t[n](e.id.name, a ? B : n === "var" ? k : void 0) : $(e.id, t, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const l = "feed" in r, s = l ? o : p(e.init, t);
    if (e.id.type === "Identifier") {
      const c = e.id.name;
      n === "var" && !e.init && !l ? t.var(c, k) : t[n](c, s), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !s.name && w(s, "name", {
        value: c,
        configurable: !0
      });
    } else
      $(e.id, t, { kind: n, feed: s });
  }
}
function lr(e, t) {
  t.func(e.id.name, ve(e, t));
}
function Me(e, t, r = {}) {
  const { klass: n, superClass: i } = r;
  for (let a = 0; a < e.body.length; a++) {
    const o = e.body[a];
    if (o.type === "MethodDefinition")
      Ne(o, t, { klass: n, superClass: i });
    else {
      if (o.type === "PropertyDefinition")
        continue;
      if (o.type === "StaticBlock")
        continue;
    }
  }
}
function Ne(e, t, r = {}) {
  const { klass: n, superClass: i } = r, a = e.key.type === "PrivateIdentifier";
  let o;
  if (a)
    o = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    o = p(e.key, t);
  else if (e.key.type === "Identifier")
    o = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = z(e.value, t, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (a)
        if (e.static) {
          const s = n.__privateStaticFields;
          s && s.set(o, l);
        } else
          n.__privateInstanceMethods || w(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(o, l);
      else {
        const s = e.static ? n : n.prototype;
        w(s, o, {
          value: l,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (a)
        throw new Error("Private getters not yet supported");
      const s = e.static ? n : n.prototype, c = T(s, o);
      w(s, o, {
        get: l,
        set: c && c.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (a)
        throw new Error("Private setters not yet supported");
      const s = e.static ? n : n.prototype, c = T(s, o);
      w(s, o, {
        get: c && c.get,
        set: l,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function* Z(e, t, r = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = r;
  if (e.name === "undefined")
    return;
  const a = t.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const o = a.get();
      if (o === B)
        throw new ReferenceError(`${e.name} is not defined`);
      return o;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function* sr(e, t) {
  return Symbol.for(`private:${e.name}`);
}
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: Z,
  PrivateIdentifier: sr
}, Symbol.toStringTag, { value: "Module" }));
function* Re(e, t) {
  return e.value;
}
const fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Re
}, Symbol.toStringTag, { value: "Module" }));
function* ur(e, t) {
  const r = t.find(M);
  if (r && !r.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return t.find("this").get();
}
function* yr(e, t) {
  let r = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? r = r.concat(yield* ae(i, t)) : r.push(yield* d(i, t));
  }
  return r;
}
function* dr(e, t) {
  const r = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      O(r, yield* ae(i, t));
    else if (i.type === "Property") {
      let a;
      const o = i.key;
      i.computed ? a = yield* d(o, t) : o.type === "Identifier" ? a = o.name : a = "" + (yield* Re(o));
      const l = yield* d(i.value, t), s = i.kind;
      if (s === "init")
        r[a] = l;
      else if (s === "get") {
        const c = T(r, a);
        w(r, a, {
          get: l,
          set: c && c.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const c = T(r, a);
        w(r, a, {
          get: c && c.get,
          set: l,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return r;
}
function* pr(e, t) {
  if (e.id && e.id.name) {
    const r = new E(t), n = U(e, r);
    return r.const(e.id.name, n), n;
  } else
    return U(e, t);
}
function* hr(e, t) {
  const r = e.argument;
  switch (e.operator) {
    case "+":
      return +(yield* d(r, t));
    case "-":
      return -(yield* d(r, t));
    case "!":
      return !(yield* d(r, t));
    case "~":
      return ~(yield* d(r, t));
    case "void":
      return void (yield* d(r, t));
    case "typeof":
      return r.type === "Identifier" ? typeof (yield* Z(r, t, { throwErr: !1 })) : typeof (yield* d(r, t));
    case "delete":
      if (r.type === "MemberExpression")
        return (yield* ie(r, t, { getVar: !0 })).del();
      if (r.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* d(r, t), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* mr(e, t) {
  const r = e.argument;
  let n;
  if (r.type === "Identifier")
    n = yield* Z(r, t, { getVar: !0 });
  else if (r.type === "MemberExpression")
    n = yield* ie(r, t, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function* gr(e, t) {
  const r = yield* d(e.left, t), n = yield* d(e.right, t);
  switch (e.operator) {
    case "==":
      return r == n;
    case "!=":
      return r != n;
    case "===":
      return r === n;
    case "!==":
      return r !== n;
    case "<":
      return r < n;
    case "<=":
      return r <= n;
    case ">":
      return r > n;
    case ">=":
      return r >= n;
    case "<<":
      return r << n;
    case ">>":
      return r >> n;
    case ">>>":
      return r >>> n;
    case "+":
      return r + n;
    case "-":
      return r - n;
    case "*":
      return r * n;
    case "**":
      return r ** n;
    case "/":
      return r / n;
    case "%":
      return r % n;
    case "|":
      return r | n;
    case "^":
      return r ^ n;
    case "&":
      return r & n;
    case "in":
      return r in n;
    case "instanceof":
      return r instanceof n;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* vr(e, t) {
  const r = yield* d(e.right, t), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* Z(n, t, { getVar: !0, throwErr: !1 }), !i) {
      const a = t.global().find("window").get();
      i = new C(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = yield* ie(n, t, { getVar: !0 });
  else
    return yield* I(n, t, { feed: r });
  switch (e.operator) {
    case "=":
      return i.set(r), i.get();
    case "+=":
      return i.set(i.get() + r), i.get();
    case "-=":
      return i.set(i.get() - r), i.get();
    case "*=":
      return i.set(i.get() * r), i.get();
    case "/=":
      return i.set(i.get() / r), i.get();
    case "%=":
      return i.set(i.get() % r), i.get();
    case "**=":
      return i.set(i.get() ** r), i.get();
    case "<<=":
      return i.set(i.get() << r), i.get();
    case ">>=":
      return i.set(i.get() >> r), i.get();
    case ">>>=":
      return i.set(i.get() >>> r), i.get();
    case "|=":
      return i.set(i.get() | r), i.get();
    case "^=":
      return i.set(i.get() ^ r), i.get();
    case "&=":
      return i.set(i.get() & r), i.get();
    case "||=":
      return i.get() || i.set(r), i.get();
    case "&&=":
      return i.get() && i.set(r), i.get();
    case "??=": {
      const a = i.get();
      return a == null && i.set(r), i.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* br(e, t) {
  switch (e.operator) {
    case "||":
      return (yield* d(e.left, t)) || (yield* d(e.right, t));
    case "&&":
      return (yield* d(e.left, t)) && (yield* d(e.right, t));
    case "??": {
      const r = yield* d(e.left, t);
      return r ?? (yield* d(e.right, t));
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* ie(e, t, r = {}) {
  const { getObj: n = !1, getVar: i = !1 } = r;
  let a;
  if (e.object.type === "Super" ? a = yield* Ue(e.object, t, { getProto: !0 }) : a = yield* d(e.object, t), e.optional && a == null)
    return;
  if (n) return a;
  const o = e.property.type === "PrivateIdentifier";
  let l;
  if (o)
    if (l = Symbol.for(`private:${e.property.name}`), typeof a == "function") {
      const c = a.__privateStaticFields;
      if (!c || !c.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Be(c, l) : c.get(l);
    } else {
      const c = a.constructor, u = c && c.__privateInstanceFields;
      if (!u)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const f = u.get(a);
      if (!f || !(l in f))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new C(f, l) : f[l];
    }
  else e.computed ? l = yield* d(e.property, t) : l = e.property.name;
  if (i) {
    const s = xe(a, l);
    if (e.object.type === "Super" && s) {
      const c = t.find("this").get(), u = A(l);
      return w(c, u, { set: s }), new C(c, u);
    } else
      return new C(a, l);
  } else {
    const s = Le(a, l);
    if (e.object.type === "Super" && s) {
      const c = t.find("this").get();
      return s.call(c);
    } else
      return a[l];
  }
}
function* wr(e, t) {
  return (yield* d(e.test, t)) ? yield* d(e.consequent, t) : yield* d(e.alternate, t);
}
function* Er(e, t) {
  let r, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* ie(e.callee, t, { getObj: !0 }), e.optional && n == null)
      return;
    let o;
    if (e.callee.property.type === "PrivateIdentifier")
      if (o = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const c = n.__privateStaticFields;
        r = c ? c.get(o) : void 0;
      } else {
        const c = n.constructor, u = c && c.__privateInstanceFields, f = u ? u.get(n) : null;
        r = f ? f[o] : void 0;
      }
    else if (e.callee.computed)
      if (o = yield* d(e.callee.property, t), e.callee.object.type === "Super") {
        const s = t.find("this").get();
        r = n[o].bind(s);
      } else
        r = n[o];
    else if (o = e.callee.property.name, e.callee.object.type === "Super") {
      const s = t.find("this").get();
      r = n[o].bind(s);
    } else
      r = n[o];
    if (e.optional && r == null)
      return;
    if (typeof r != "function")
      throw new TypeError(`${o} is not a function`);
    try {
      if (r[K] === !0)
        throw new TypeError(`Class constructor ${o} cannot be invoked without 'new'`);
    } catch (s) {
      if (s instanceof TypeError && s.message.includes("Class constructor"))
        throw s;
    }
  } else {
    if (n = t.find("this").get(), r = yield* d(e.callee, t), e.optional && r == null)
      return;
    let o = !1;
    try {
      o = r[K] === !0;
    } catch {
    }
    if (typeof r != "function" || e.callee.type !== "Super" && o) {
      let l;
      if (e.callee.type === "Identifier")
        l = e.callee.name;
      else
        try {
          l = JSON.stringify(r);
        } catch {
          l = "" + r;
        }
      throw typeof r != "function" ? new TypeError(`${l} is not a function`) : new TypeError(`Class constructor ${l} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let o = 0; o < e.arguments.length; o++) {
    const l = e.arguments[o];
    l.type === "SpreadElement" ? i = i.concat(yield* ae(l, t)) : i.push(yield* d(l, t));
  }
  if (e.callee.type === "Super") {
    if (t.find(M).get())
      throw new ReferenceError("Super constructor may only be called once");
    t.find(M).set(!0);
  }
  let a = !1;
  try {
    a = n && n[ee];
  } catch {
  }
  if (a && r.toString().indexOf("[native code]") !== -1)
    try {
      return r.apply(n[ee], i);
    } catch {
      return r.apply(n, i);
    }
  return r.apply(n, i);
}
function* Sr(e, t) {
  const r = yield* d(e.callee, t);
  let n = !1;
  try {
    n = r[ue];
  } catch {
  }
  if (typeof r != "function") {
    let a;
    if (e.callee.type === "Identifier")
      a = e.callee.name;
    else
      try {
        a = JSON.stringify(r);
      } catch {
        a = "" + r;
      }
    throw new TypeError(`${a} is not a constructor`);
  } else if (n)
    throw new TypeError(`${r.name || "(intermediate value)"} is not a constructor`);
  let i = [];
  for (let a = 0; a < e.arguments.length; a++) {
    const o = e.arguments[a];
    o.type === "SpreadElement" ? i = i.concat(yield* ae(o, t)) : i.push(yield* d(o, t));
  }
  return new r(...i);
}
function* _r(e, t) {
  return t.find(ye).get();
}
function* Lr(e, t) {
  let r;
  for (let n = 0; n < e.expressions.length; n++)
    r = yield* d(e.expressions[n], t);
  return r;
}
function* xr(e, t) {
  return U(e, t);
}
function* kr(e, t) {
  const r = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, o;
  for (; a = r.shift(); )
    i += yield* Ve(a), o = n.shift(), o && (i += yield* d(o, t));
  return i;
}
function* Ar(e, t) {
  const r = yield* d(e.tag, t), n = e.quasi.quasis, i = n.map((s) => s.value.cooked), a = n.map((s) => s.value.raw);
  w(i, "raw", {
    value: ce(a)
  });
  const o = e.quasi.expressions, l = [];
  if (o)
    for (let s = 0; s < o.length; s++)
      l.push(yield* d(o[s], t));
  return r(ce(i), ...l);
}
function* Ve(e, t) {
  return e.value.raw;
}
function* Br(e, t) {
  if (e.id && e.id.name) {
    const r = new E(t), n = yield* me(e, r);
    return r.const(e.id.name, n), n;
  } else
    return yield* me(e, t);
}
function* Ue(e, t, r = {}) {
  const { getProto: n = !1 } = r, i = t.find(fe).get();
  return n ? i.prototype : i;
}
function* ae(e, t) {
  return yield* d(e.argument, t);
}
function* Ir(e, t) {
  return yield* d(e.expression, t);
}
function* $r(e, t) {
  const r = yield* d(e.argument, t);
  return e.delegate ? yield* r : yield r;
}
function* Or(e, t) {
  return P.RES = yield* d(e.argument, t), yield P;
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: yr,
  ArrowFunctionExpression: xr,
  AssignmentExpression: vr,
  AwaitExpression: Or,
  BinaryExpression: gr,
  CallExpression: Er,
  ChainExpression: Ir,
  ClassExpression: Br,
  ConditionalExpression: wr,
  FunctionExpression: pr,
  LogicalExpression: br,
  MemberExpression: ie,
  MetaProperty: _r,
  NewExpression: Sr,
  ObjectExpression: dr,
  SequenceExpression: Lr,
  SpreadElement: ae,
  Super: Ue,
  TaggedTemplateExpression: Ar,
  TemplateElement: Ve,
  TemplateLiteral: kr,
  ThisExpression: ur,
  UnaryExpression: hr,
  UpdateExpression: mr,
  YieldExpression: $r
}, Symbol.toStringTag, { value: "Module" }));
function* jr(e, t) {
  yield* d(e.expression, t);
}
function* V(e, t, r = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = r, a = n ? t : new E(t);
  i || (yield* Xe(e, a, { onlyBlock: !0 }));
  for (let o = 0; o < e.body.length; o++) {
    const l = yield* d(e.body[o], a);
    if (l === v || l === g || l === S)
      return l;
  }
}
function* Dr() {
}
function* Fr() {
  debugger;
}
function* Cr(e, t) {
  return S.RES = e.argument ? yield* d(e.argument, t) : void 0, S;
}
function* Tr(e) {
  return e.label ? v.LABEL = e.label.name : delete v.LABEL, v;
}
function* Mr(e) {
  return e.label ? g.LABEL = e.label.name : delete g.LABEL, g;
}
function* Nr(e, t) {
  const r = yield* d(e.object, t), n = new E(t);
  if (r && typeof r == "object")
    for (const i in r)
      n.var(i, r[i]);
  return yield* d(e.body, n);
}
function* Rr(e, t) {
  const r = e.label.name, n = new E(t, !1);
  n.let("__LABEL__", r);
  const i = yield* d(e.body, n);
  if (i === v && v.LABEL === r) {
    delete v.LABEL;
    return;
  }
  return i === g && g.LABEL === r && delete g.LABEL, i;
}
function* Vr(e, t) {
  return (yield* d(e.test, t)) ? yield* d(e.consequent, t) : yield* d(e.alternate, t);
}
function* Ur(e, t) {
  const r = yield* d(e.discriminant, t);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || (yield* d(a.test, t)) === r) && (n = !0), n) {
      const o = yield* ze(a, t);
      if (o === v)
        break;
      if (o === g || o === S)
        return o;
    }
  }
}
function* ze(e, t) {
  for (let r = 0; r < e.consequent.length; r++) {
    const n = yield* d(e.consequent[r], t);
    if (n === v || n === g || n === S)
      return n;
  }
}
function* zr(e, t) {
  throw yield* d(e.argument, t);
}
function* qr(e, t) {
  try {
    return yield* V(e.block, t);
  } catch (r) {
    if (e.handler) {
      const n = new E(t), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, r);
        } else
          yield* I(i, t, { feed: r });
      return yield* qe(e.handler, n);
    } else
      throw r;
  } finally {
    if (e.finalizer) {
      const r = yield* V(e.finalizer, t);
      if (r === v || r === g || r === S)
        return r;
    }
  }
}
function* qe(e, t) {
  return yield* V(e.body, t, { invasived: !0 });
}
function* Wr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (; yield* d(e.test, t); ) {
    const n = yield* d(e.body, t);
    if (n === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return n;
      }
      break;
    } else if (n === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return n;
      }
      continue;
    } else if (n === S)
      return n;
  }
}
function* Kr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  do {
    const n = yield* d(e.body, t);
    if (n === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return n;
      }
      break;
    } else if (n === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return n;
      }
      continue;
    } else if (n === S)
      return n;
  } while (yield* d(e.test, t));
}
function* Jr(e, t) {
  const r = new E(t), n = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (yield* d(e.init, r); !e.test || (yield* d(e.test, r)); yield* d(e.update, r)) {
    const i = new E(r);
    let a;
    if (e.body.type === "BlockStatement" ? a = yield* V(e.body, i, { invasived: !0 }) : a = yield* d(e.body, i), a === v) {
      if (v.LABEL) {
        if (v.LABEL === n) {
          delete v.LABEL;
          break;
        }
        return a;
      }
      break;
    } else if (a === g) {
      if (g.LABEL) {
        if (g.LABEL === n) {
          delete g.LABEL;
          continue;
        }
        return a;
      }
      continue;
    } else if (a === S)
      return a;
  }
}
function* Gr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (const n in yield* d(e.right, t)) {
    const i = yield* ge(e, t, { value: n });
    if (i === v) {
      if (v.LABEL) {
        if (v.LABEL === r) {
          delete v.LABEL;
          break;
        }
        return i;
      }
      break;
    } else if (i === g) {
      if (g.LABEL) {
        if (g.LABEL === r) {
          delete g.LABEL;
          continue;
        }
        return i;
      }
      continue;
    } else if (i === S)
      return i;
  }
}
function* Zr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0, n = yield* d(e.right, t);
  if (e.await) {
    const i = st(n);
    let a;
    for (P.RES = i.next(), a = yield P; !a.done; P.RES = i.next(), a = yield P) {
      const o = yield* ge(e, t, { value: a.value });
      if (o === v) {
        if (v.LABEL) {
          if (v.LABEL === r) {
            delete v.LABEL;
            break;
          }
          return o;
        }
        break;
      } else if (o === g) {
        if (g.LABEL) {
          if (g.LABEL === r) {
            delete g.LABEL;
            continue;
          }
          return o;
        }
        continue;
      } else if (o === S)
        return o;
    }
  } else
    for (const i of n) {
      const a = yield* ge(e, t, { value: i });
      if (a === v) {
        if (v.LABEL) {
          if (v.LABEL === r) {
            delete v.LABEL;
            break;
          }
          return a;
        }
        break;
      } else if (a === g) {
        if (g.LABEL) {
          if (g.LABEL === r) {
            delete g.LABEL;
            continue;
          }
          return a;
        }
        continue;
      } else if (a === S)
        return a;
    }
}
const Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: V,
  BreakStatement: Tr,
  CatchClause: qe,
  ContinueStatement: Mr,
  DebuggerStatement: Fr,
  DoWhileStatement: Kr,
  EmptyStatement: Dr,
  ExpressionStatement: jr,
  ForInStatement: Gr,
  ForOfStatement: Zr,
  ForStatement: Jr,
  IfStatement: Vr,
  LabeledStatement: Rr,
  ReturnStatement: Cr,
  SwitchCase: ze,
  SwitchStatement: Ur,
  ThrowStatement: zr,
  TryStatement: qr,
  WhileStatement: Wr,
  WithStatement: Nr
}, Symbol.toStringTag, { value: "Module" }));
function* We(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: o = {} } = r, l = [];
  for (let s = 0; s < e.properties.length; s++) {
    const c = e.properties[s];
    if (i) {
      if (a || n === "var")
        if (c.type === "Property") {
          const u = c.value;
          u.type === "Identifier" ? t[n](u.name, a ? B : n === "var" ? k : void 0) : yield* I(u, t, { kind: n, hoist: i, onlyBlock: a });
        } else
          yield* G(c, t, { kind: n, hoist: i, onlyBlock: a });
    } else if (c.type === "Property") {
      let u;
      c.computed ? u = yield* d(c.key, t) : u = c.key.name, l.push(u);
      const f = c.value;
      f.type === "Identifier" ? t[n](f.name, o[u]) : yield* I(f, t, { kind: n, feed: o[u] });
    } else {
      const u = O({}, o);
      for (let f = 0; f < l.length; f++) delete u[l[f]];
      yield* G(c, t, { kind: n, feed: u });
    }
  }
}
function* Ke(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: o = [] } = r, l = [];
  for (let s = 0; s < e.elements.length; s++) {
    const c = e.elements[s];
    if (c)
      if (i)
        (a || n === "var") && (c.type === "Identifier" ? t[n](c.name, a ? B : n === "var" ? k : void 0) : yield* I(c, t, { kind: n, hoist: i, onlyBlock: a }));
      else if (c.type === "Identifier")
        if (n)
          t[n](c.name, o[s]);
        else {
          const u = yield* Z(c, t, { getVar: !0 });
          u.set(o[s]), l.push(u.get());
        }
      else c.type === "RestElement" ? yield* G(c, t, { kind: n, feed: o.slice(s) }) : yield* I(c, t, { kind: n, feed: o[s] });
  }
  if (l.length)
    return l;
}
function* G(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: o = [] } = r, l = e.argument;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? k : void 0) : yield* I(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? n ? t[n](l.name, o) : (yield* Z(l, t, { getVar: !0 })).set(o) : yield* I(l, t, { kind: n, feed: o });
}
function* Je(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: o = yield* d(e.right, t) } = r, l = e.left;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? k : void 0) : yield* I(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? t[n](l.name, o) : yield* I(l, t, { kind: n, feed: o });
}
const Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Ke,
  AssignmentPattern: Je,
  ObjectPattern: We,
  RestElement: G
}, Symbol.toStringTag, { value: "Module" }));
function* Yr(e, t) {
  var a;
  const r = e.source.value, n = (a = t.find("__moduleLoader__")) == null ? void 0 : a.get();
  if (!n)
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  const i = yield* n(r);
  if (!i)
    throw new Error(`Failed to load module: ${r}`);
  for (const o of e.specifiers)
    if (o.type === "ImportDefaultSpecifier") {
      const l = o.local.name;
      t.const(l, i.default);
    } else if (o.type === "ImportSpecifier") {
      const l = o.imported.type === "Identifier" ? o.imported.name : o.imported.value, s = o.local.name;
      t.const(s, i[l]);
    } else if (o.type === "ImportNamespaceSpecifier") {
      const l = o.local.name;
      t.const(l, i);
    }
}
function* Qr(e, t) {
  var n, i, a, o, l;
  const r = (n = t.find("__moduleExports__")) == null ? void 0 : n.get();
  if (!r)
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  if (e.declaration) {
    if (yield* d(e.declaration, t), e.declaration.type === "VariableDeclaration") {
      for (const s of e.declaration.declarations)
        if (s.id.type === "Identifier") {
          const c = s.id.name, u = (i = t.find(c)) == null ? void 0 : i.get();
          r[c] = u;
        }
    } else if (e.declaration.type === "FunctionDeclaration" || e.declaration.type === "ClassDeclaration") {
      const s = e.declaration.id.name, c = (a = t.find(s)) == null ? void 0 : a.get();
      r[s] = c;
    }
  } else if (e.specifiers) {
    for (const s of e.specifiers)
      if (s.type === "ExportSpecifier") {
        const c = s.local.type === "Identifier" ? s.local.name : s.local.value, u = s.exported.type === "Identifier" ? s.exported.name : s.exported.value, f = (o = t.find(c)) == null ? void 0 : o.get();
        r[u] = f;
      }
  }
  if (e.source) {
    const s = e.source.value, c = (l = t.find("__moduleLoader__")) == null ? void 0 : l.get();
    if (!c)
      throw new Error("Module loader not available");
    const u = yield* c(s);
    for (const f of e.specifiers)
      if (f.type === "ExportSpecifier") {
        const y = f.local.type === "Identifier" ? f.local.name : f.local.value, m = f.exported.type === "Identifier" ? f.exported.name : f.exported.value;
        r[m] = u[y];
      }
  }
}
function* en(e, t) {
  var i, a, o;
  const r = (i = t.find("__moduleExports__")) == null ? void 0 : i.get();
  if (!r)
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  let n;
  if (e.declaration.type === "FunctionDeclaration" || e.declaration.type === "ClassDeclaration") {
    yield* d(e.declaration, t);
    const l = (a = e.declaration.id) == null ? void 0 : a.name;
    l && (n = (o = t.find(l)) == null ? void 0 : o.get());
  } else
    n = yield* d(e.declaration, t);
  r.default = n;
}
function* tn(e, t) {
  var o, l;
  const r = (o = t.find("__moduleExports__")) == null ? void 0 : o.get();
  if (!r)
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  const n = e.source.value, i = (l = t.find("__moduleLoader__")) == null ? void 0 : l.get();
  if (!i)
    throw new Error("Module loader not available");
  const a = yield* i(n);
  if (e.exported) {
    const s = e.exported.type === "Identifier" ? e.exported.name : e.exported.value;
    r[s] = a;
  } else
    for (const s in a)
      s !== "default" && (r[s] = a[s]);
}
function* rn(e, t) {
  var i;
  const r = yield* d(e.source, t), n = (i = t.find("__moduleLoader__")) == null ? void 0 : i.get();
  if (!n)
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  return yield* n(r);
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExportAllDeclaration: tn,
  ExportDefaultDeclaration: en,
  ExportNamedDeclaration: Qr,
  ImportDeclaration: Yr,
  ImportExpression: rn
}, Symbol.toStringTag, { value: "Module" }));
function* an(e, t) {
  for (let r = 0; r < e.body.length; r++)
    yield* d(e.body[r], t);
}
const on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: an
}, Symbol.toStringTag, { value: "Module" }));
let pe;
function* d(e, t) {
  if (!e) return;
  pe || (pe = O(
    {},
    et,
    Pr,
    cr,
    Hr,
    fr,
    Xr,
    nn,
    on
  ));
  const r = pe[e.type];
  if (r)
    return yield* r(e, t);
  throw new Error(`${e.type} isn't implemented`);
}
function* ln(e, t) {
  t.func(e.id.name, U(e, t));
}
function* W(e, t, r = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* Ge(e.declarations[n], t, O({ kind: i }, r));
  }
}
function* Ge(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: o } = r;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? t[n](e.id.name, a ? B : n === "var" ? k : void 0) : yield* I(e.id, t, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const l = "feed" in r, s = l ? o : yield* d(e.init, t);
    if (e.id.type === "Identifier") {
      const c = e.id.name;
      n === "var" && !e.init && !l ? t.var(c, k) : t[n](c, s), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !s.name && w(s, "name", {
        value: c,
        configurable: !0
      });
    } else
      yield* I(e.id, t, { kind: n, feed: s });
  }
}
function* sn(e, t) {
  t.func(e.id.name, yield* me(e, t));
}
function* Ze(e, t, r = {}) {
  const { klass: n, superClass: i } = r;
  for (let a = 0; a < e.body.length; a++) {
    const o = e.body[a];
    if (o.type === "MethodDefinition")
      yield* He(o, t, { klass: n, superClass: i });
    else {
      if (o.type === "PropertyDefinition")
        continue;
      if (o.type === "StaticBlock")
        continue;
    }
  }
}
function* He(e, t, r = {}) {
  const { klass: n, superClass: i } = r, a = e.key.type === "PrivateIdentifier";
  let o;
  if (a)
    o = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    o = yield* d(e.key, t);
  else if (e.key.type === "Identifier")
    o = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = yield* U(e.value, t, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (a)
        if (e.static) {
          const s = n.__privateStaticFields;
          s && s.set(o, l);
        } else
          n.__privateInstanceMethods || w(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(o, l);
      else {
        const s = e.static ? n : n.prototype;
        w(s, o, {
          value: l,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (a)
        throw new Error("Private getters not yet supported");
      const s = e.static ? n : n.prototype, c = T(s, o);
      w(s, o, {
        get: l,
        set: c && c.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (a)
        throw new Error("Private setters not yet supported");
      const s = e.static ? n : n.prototype, c = T(s, o);
      w(s, o, {
        get: c && c.get,
        set: l,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function* Xe(e, t, r = {}) {
  const { onlyBlock: n = !1 } = r, i = [], a = [];
  for (let o = 0; o < e.body.length; o++) {
    const l = e.body[o];
    l.type === "FunctionDeclaration" ? (i.push(l), a.push(o)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? yield* W(l, t, { hoist: !0, onlyBlock: !0 }) : n || (yield* D(l, t));
  }
  if (a.length) {
    for (let o = a.length - 1; o > -1; o--)
      e.body.splice(a[o], 1);
    e.body = i.concat(e.body);
  }
}
function* D(e, t) {
  switch (e.type) {
    case "VariableDeclaration":
      yield* W(e, t, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* W(e.left, t, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* W(e.init, t, { hoist: !0 }));
    case "WhileStatement":
    case "DoWhileStatement":
      yield* D(e.body, t);
      break;
    case "IfStatement":
      yield* D(e.consequent, t), e.alternate && (yield* D(e.alternate, t));
      break;
    case "BlockStatement":
      for (let r = 0; r < e.body.length; r++)
        yield* D(e.body[r], t);
      break;
    case "SwitchStatement":
      for (let r = 0; r < e.cases.length; r++)
        for (let n = 0; n < e.cases[r].consequent.length; n++)
          yield* D(e.cases[r].consequent[n], t);
      break;
    case "TryStatement": {
      const r = e.block.body;
      for (let a = 0; a < r.length; a++)
        yield* D(r[a], t);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          yield* D(n[a], t);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          yield* D(i[a], t);
      break;
    }
  }
}
function* I(e, t, r = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return yield* We(e, t, r);
    case "ArrayPattern":
      return yield* Ke(e, t, r);
    case "RestElement":
      return yield* G(e, t, r);
    case "AssignmentPattern":
      return yield* Je(e, t, r);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function U(e, t, r = {}) {
  if (
    /*<replace by:=node.generator\s||\snode.async>*/
    !e.generator && !e.async
  )
    return z(e, t, r);
  const { superClass: n, isCtor: i } = r, a = e.params, o = function* (...s) {
    const c = new E(t, !0);
    if (e.type !== "ArrowFunctionExpression") {
      c.const("this", this), c.let("arguments", arguments);
      const f = o.__currentNewTarget || new.target;
      c.const(ye, f), n && (c.const(fe, n), i && c.let(M, !1));
    }
    for (let f = 0; f < a.length; f++) {
      const y = a[f];
      y.type === "Identifier" ? c.var(y.name, s[f]) : y.type === "RestElement" ? yield* G(y, c, { kind: "var", feed: s.slice(f) }) : yield* I(y, c, { feed: s[f] });
    }
    let u;
    if (e.body.type === "BlockStatement" ? (yield* Xe(e.body, c), u = yield* V(e.body, c, {
      invasived: !0,
      hoisted: !0
    })) : (u = yield* d(e.body, c), e.type === "ArrowFunctionExpression" && (S.RES = u, u = S)), u === S)
      return u.RES;
  };
  let l;
  return e.async && e.generator ? l = function() {
    const s = o.apply(this, arguments);
    let c = Promise.resolve(), u = !1;
    const f = (m) => c = c.then(() => he(s, O({ fullRet: !0 }, m))).catch((b) => {
      if (!u)
        return u = !0, Promise.reject(b);
    }), y = {
      next: (m) => f({ res: m }),
      throw: (m) => f({ err: m }),
      return: (m) => f({ ret: m })
    };
    return typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
  } : e.async ? l = function() {
    return he(o.apply(this, arguments));
  } : l = o, w(l, ue, { value: !0 }), w(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), w(l, "length", {
    value: a.length,
    configurable: !0
  }), l;
}
function* me(e, t) {
  const r = yield* d(e.superClass, t), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), a = e.body.body, o = [];
  let l = null;
  const s = [], c = [];
  for (let f = 0; f < a.length; f++) {
    const y = a[f];
    if (y.type === "MethodDefinition" && y.kind === "constructor")
      l = yield* U(y.value, t, { superClass: r, isCtor: !0 });
    else if (y.type === "PropertyDefinition") {
      const m = y.key.type === "PrivateIdentifier";
      let b;
      if (m ? b = Symbol.for(`private:${y.key.name}`) : y.computed ? b = yield* d(y.key, t) : b = y.key.type === "Identifier" ? y.key.name : yield* d(y.key, t), y.static) {
        const x = y.value ? yield* d(y.value, t) : void 0;
        c.push({ key: b, value: x, isPrivate: m });
      } else
        s.push({ key: b, valueNode: y.value, isPrivate: m });
    } else y.type === "StaticBlock" && o.push(y);
  }
  let u;
  if (l) {
    let f;
    u = f = function(...y) {
      const m = {}, b = f.__privateInstanceMethods;
      b && b.forEach((_, L) => {
        m[L] = _;
      });
      for (let _ = 0; _ < s.length; _++) {
        const L = s[_];
        L.isPrivate && (m[L.key] = void 0);
      }
      (Object.keys(m).length > 0 || Object.getOwnPropertySymbols(m).length > 0) && n.set(this, m);
      for (let _ = 0; _ < s.length; _++) {
        const L = s[_], H = new E(t, !1);
        H.const("this", this);
        const j = L.valueNode ? d(L.valueNode, H) : void 0, X = j && typeof j.next == "function" ? Array.from(j).pop() : j;
        L.isPrivate ? m[L.key] = X : this[L.key] = X;
      }
      l.__currentNewTarget = new.target || f;
      const x = l.call(this, ...y);
      return delete l.__currentNewTarget, typeof x == "object" && x !== null ? x : this;
    };
  } else
    u = function() {
      const f = {}, y = u.__privateInstanceMethods;
      y && y.forEach((m, b) => {
        f[b] = m;
      });
      for (let m = 0; m < s.length; m++) {
        const b = s[m];
        b.isPrivate && (f[b.key] = void 0);
      }
      (Object.keys(f).length > 0 || Object.getOwnPropertySymbols(f).length > 0) && n.set(this, f);
      for (let m = 0; m < s.length; m++) {
        const b = s[m], x = new E(t, !1);
        x.const("this", this);
        const _ = b.valueNode ? d(b.valueNode, x) : void 0;
        b.isPrivate ? f[b.key] = _ : this[b.key] = _;
      }
      r && r.apply(this);
    };
  r && ke(u, r), w(u, "__privateInstanceFields", { value: n }), w(u, "__privateStaticFields", { value: i }), yield* Ze(e.body, t, { klass: u, superClass: r });
  for (let f = 0; f < c.length; f++) {
    const y = c[f];
    y.isPrivate ? i.set(y.key, y.value) : u[y.key] = y.value;
  }
  for (let f = 0; f < o.length; f++) {
    const y = o[f], m = new E(t, !0);
    m.const("this", u);
    for (let b = 0; b < y.body.length; b++)
      yield* d(y.body[b], m);
  }
  return w(u, K, { value: !0 }), w(u, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), u;
}
function* ge(e, t, r) {
  const { value: n } = r, i = e.left, a = new E(t);
  i.type === "VariableDeclaration" ? yield* W(i, a, { feed: n }) : i.type === "Identifier" ? (yield* N(i, t, { getVar: !0 })).set(n) : yield* I(i, t, { feed: n });
  let o;
  return e.body.type === "BlockStatement" ? o = yield* V(e.body, a, { invasived: !0 }) : o = yield* d(e.body, a), o;
}
function Q(e, t, r = {}) {
  const { onlyBlock: n = !1 } = r, i = [], a = [];
  for (let o = 0; o < e.body.length; o++) {
    const l = e.body[o];
    l.type === "FunctionDeclaration" ? (i.push(l), a.push(o)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? q(l, t, { hoist: !0, onlyBlock: !0 }) : n || F(l, t);
  }
  if (a.length) {
    for (let o = a.length - 1; o > -1; o--)
      e.body.splice(a[o], 1);
    e.body = i.concat(e.body);
  }
}
function F(e, t) {
  switch (e.type) {
    case "VariableDeclaration":
      q(e, t, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && q(e.left, t, { hoist: !0 });
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && q(e.init, t, { hoist: !0 });
    case "WhileStatement":
    case "DoWhileStatement":
      F(e.body, t);
      break;
    case "IfStatement":
      F(e.consequent, t), e.alternate && F(e.alternate, t);
      break;
    case "BlockStatement":
      for (let r = 0; r < e.body.length; r++)
        F(e.body[r], t);
      break;
    case "SwitchStatement":
      for (let r = 0; r < e.cases.length; r++)
        for (let n = 0; n < e.cases[r].consequent.length; n++)
          F(e.cases[r].consequent[n], t);
      break;
    case "TryStatement": {
      const r = e.block.body;
      for (let a = 0; a < r.length; a++)
        F(r[a], t);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          F(n[a], t);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          F(i[a], t);
      break;
    }
  }
}
function $(e, t, r = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return De(e, t, r);
    case "ArrayPattern":
      return Fe(e, t, r);
    case "RestElement":
      return J(e, t, r);
    case "AssignmentPattern":
      return Ce(e, t, r);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function z(e, t, r = {}) {
  if (e.generator || e.async)
    return U(e, t, r);
  const { superClass: n, isCtor: i } = r, a = e.params, o = function(...s) {
    const c = new E(t, !0);
    if (e.type !== "ArrowFunctionExpression") {
      c.const("this", this), c.let("arguments", arguments);
      const f = o.__currentNewTarget || new.target;
      c.const(ye, f), n && (c.const(fe, n), i && c.let(M, !1));
    }
    for (let f = 0; f < a.length; f++) {
      const y = a[f];
      y.type === "Identifier" ? c.var(y.name, s[f]) : y.type === "RestElement" ? J(y, c, { kind: "var", feed: s.slice(f) }) : $(y, c, { feed: s[f] });
    }
    let u;
    if (e.body.type === "BlockStatement" ? (Q(e.body, c), u = R(e.body, c, {
      invasived: !0,
      hoisted: !0
    })) : (u = p(e.body, c), e.type === "ArrowFunctionExpression" && (S.RES = u, u = S)), u === S)
      return u.RES;
  };
  let l = o;
  return e.type === "ArrowFunctionExpression" && w(l, ue, { value: !0 }), w(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), w(l, "length", {
    value: a.length,
    configurable: !0
  }), l;
}
function ve(e, t) {
  const r = p(e.superClass, t), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), a = e.body.body, o = [];
  let l = null;
  const s = [], c = [];
  for (let f = 0; f < a.length; f++) {
    const y = a[f];
    if (y.type === "MethodDefinition" && y.kind === "constructor")
      l = z(y.value, t, { superClass: r, isCtor: !0 });
    else if (y.type === "PropertyDefinition") {
      const m = y.key.type === "PrivateIdentifier";
      let b;
      if (m ? b = Symbol.for(`private:${y.key.name}`) : y.computed ? b = p(y.key, t) : b = y.key.type === "Identifier" ? y.key.name : p(y.key, t), y.static) {
        const x = y.value ? p(y.value, t) : void 0;
        c.push({ key: b, value: x, isPrivate: m });
      } else
        s.push({ key: b, valueNode: y.value, isPrivate: m });
    } else y.type === "StaticBlock" && o.push(y);
  }
  let u;
  if (l) {
    let f;
    u = f = function(...y) {
      const m = {}, b = f.__privateInstanceMethods;
      b && b.forEach((_, L) => {
        m[L] = _;
      });
      for (let _ = 0; _ < s.length; _++) {
        const L = s[_];
        L.isPrivate && (m[L.key] = void 0);
      }
      (Object.keys(m).length > 0 || Object.getOwnPropertySymbols(m).length > 0) && n.set(this, m);
      for (let _ = 0; _ < s.length; _++) {
        const L = s[_], H = new E(t, !1);
        H.const("this", this);
        const j = L.valueNode ? p(L.valueNode, H) : void 0, X = j && typeof j.next == "function" ? Array.from(j).pop() : j;
        L.isPrivate ? m[L.key] = X : this[L.key] = X;
      }
      l.__currentNewTarget = new.target || f;
      const x = l.call(this, ...y);
      return delete l.__currentNewTarget, typeof x == "object" && x !== null ? x : this;
    };
  } else
    u = function() {
      const f = {}, y = u.__privateInstanceMethods;
      y && y.forEach((m, b) => {
        f[b] = m;
      });
      for (let m = 0; m < s.length; m++) {
        const b = s[m];
        b.isPrivate && (f[b.key] = void 0);
      }
      (Object.keys(f).length > 0 || Object.getOwnPropertySymbols(f).length > 0) && n.set(this, f);
      for (let m = 0; m < s.length; m++) {
        const b = s[m], x = new E(t, !1);
        x.const("this", this);
        const _ = b.valueNode ? p(b.valueNode, x) : void 0;
        b.isPrivate ? f[b.key] = _ : this[b.key] = _;
      }
      r && r.apply(this);
    };
  r && ke(u, r), w(u, "__privateInstanceFields", { value: n }), w(u, "__privateStaticFields", { value: i }), Me(e.body, t, { klass: u, superClass: r });
  for (let f = 0; f < c.length; f++) {
    const y = c[f];
    y.isPrivate ? i.set(y.key, y.value) : u[y.key] = y.value;
  }
  for (let f = 0; f < o.length; f++) {
    const y = o[f], m = new E(t, !0);
    m.const("this", u);
    for (let b = 0; b < y.body.length; b++)
      p(y.body[b], m);
  }
  return w(u, K, { value: !0 }), w(u, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), u;
}
function Ye(e, t, r) {
  const { value: n } = r, i = e.left, a = new E(t);
  i.type === "VariableDeclaration" ? q(i, a, { feed: n }) : i.type === "Identifier" ? N(i, t, { getVar: !0 }).set(n) : $(i, t, { feed: n });
  let o;
  return e.body.type === "BlockStatement" ? o = R(e.body, a, { invasived: !0 }) : o = p(e.body, a), o;
}
const be = class be {
  constructor(t = {}) {
    this.options = {}, this.scope = new E(null, !0), this.moduleCache = /* @__PURE__ */ new Map(), this.exports = {};
    let { ecmaVer: r = "latest", sandBox: n = !0, sourceType: i = "script", fetch: a } = t;
    if (r !== "latest" && (r = r - (r < 2015 ? 0 : 2009), [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(r) === -1))
      throw new Error("unsupported ecmaVer");
    if (this.options.ecmaVersion = r, this.options.sourceType = i, this.fetchFn = a, n) {
      const o = lt();
      this.scope.let("window", o), this.scope.let("this", o);
    } else
      this.scope.let("window", h), this.scope.let("this", h);
    if (i === "module") {
      const o = {};
      this.scope.const("exports", this.exports = o), this.scope.const("__moduleExports__", o), this.scope.const("__moduleLoader__", this.createModuleLoader());
    } else
      this.scope.const("exports", this.exports = {});
  }
  import(t, r) {
    if (typeof t == "string" && (t = { [t]: r }), typeof t != "object") return;
    const n = se(t);
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      this.scope.var(a, t[a]);
    }
  }
  parse(t, r) {
    return typeof r == "function" ? r(t, O({}, this.options)) : oe(t, this.options);
  }
  run(t) {
    const r = typeof t == "string" ? oe(t, this.options) : t;
    Q(r, this.scope), p(r, this.scope);
  }
  async runAsync(t) {
    const r = typeof t == "string" ? oe(t, this.options) : t;
    Q(r, this.scope), await he(d(r, this.scope));
  }
  createModuleLoader() {
    const t = this;
    return function* (r, n) {
      let i = r;
      if (!(r && /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(r)))
        if (n)
          try {
            i = new URL(r, n).href;
          } catch (f) {
            throw new Error(`Failed to resolve URL ${r} relative to ${n}: ${f instanceof Error ? f.message : f}`);
          }
        else
          throw new Error(`Cannot resolve relative URL ${r} without a base URL`);
      if (t.moduleCache.has(i))
        return t.moduleCache.get(i);
      let o;
      try {
        if (t.fetchFn)
          P.RES = t.fetchFn(i), o = yield P;
        else if (typeof fetch < "u")
          P.RES = fetch(i).then((f) => f.text()), o = yield P;
        else
          throw new Error("No fetch function available. Provide a fetch option or use an environment with global fetch.");
      } catch (f) {
        throw new Error(`Failed to fetch module from ${i}: ${f instanceof Error ? f.message : f}`);
      }
      const l = {}, s = new E(t.scope.global(), !0);
      s.const("__moduleExports__", l);
      const c = t.createModuleLoader(), u = function* (f) {
        return yield* c(f, i);
      };
      s.const("__moduleLoader__", u), s.const("exports", l);
      try {
        const f = oe(o, O({}, t.options, { sourceType: "module" }));
        Q(f, s), yield* d(f, s);
      } catch (f) {
        throw new Error(`Failed to evaluate module ${i}: ${f instanceof Error ? f.message : f}`);
      }
      return t.moduleCache.set(i, l), l;
    };
  }
};
be.version = ct;
let Se = be;
export {
  Se as default
};
//# sourceMappingURL=sval.js.map
