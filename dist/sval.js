import { parse as me } from "acorn";
const Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Re;
  },
  get ClassDeclaration() {
    return tr;
  },
  get FunctionDeclaration() {
    return er;
  },
  get MethodDefinition() {
    return Ve;
  },
  get VariableDeclaration() {
    return W;
  },
  get VariableDeclarator() {
    return Te;
  }
}, Symbol.toStringTag, { value: "Module" })), et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return He;
  },
  get ClassDeclaration() {
    return Jr;
  },
  get FunctionDeclaration() {
    return Kr;
  },
  get MethodDefinition() {
    return Xe;
  },
  get VariableDeclaration() {
    return z;
  },
  get VariableDeclarator() {
    return Ge;
  }
}, Symbol.toStringTag, { value: "Module" })), le = Object.freeze, w = Object.defineProperty, D = Object.getOwnPropertyDescriptor, tt = Object.prototype.hasOwnProperty;
function rt(e, t) {
  return tt.call(e, t);
}
const se = Object.getOwnPropertyNames, ve = Object.setPrototypeOf;
function nt(e, t) {
  ve ? ve(e, t) : e.__proto__ = t;
}
const we = Object.getPrototypeOf;
function it(e) {
  return we ? we(e) : e.__proto__;
}
const at = Object.getOwnPropertyDescriptor;
function Le(e, t, r) {
  for (; t; ) {
    const n = at(t, r), i = typeof n < "u" && typeof n.writable > "u" && typeof n[e] == "function" && n[e];
    if (i)
      return i;
    t = it(t);
  }
}
function ke(e, t) {
  return Le("get", e, t);
}
function _e(e, t) {
  return Le("set", e, t);
}
const ee = Object.create;
function xe(e, t) {
  nt(e, t), e.prototype = ee(t.prototype, {
    constructor: {
      value: e,
      writable: !0
    }
  });
}
function st(e) {
  for (let t = 1; t < arguments.length; ++t) {
    const r = arguments[t];
    for (const n in r)
      rt(r, n) && (e[n] = r[n]);
  }
  return e;
}
const $ = Object.assign || st;
let Z = [], h = ee(null);
try {
  if (!window.Object) throw 0;
  Z = se(h = window).filter((e) => e !== "webkitStorageInfo");
} catch {
  try {
    if (!global.Object) throw 0;
    Z = se(h = global).filter((t) => t !== "GLOBAL" && t !== "root");
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
    Z = se(h);
  }
}
h.Symbol && (!h.Symbol.iterator && (h.Symbol.iterator = A("iterator")), !h.Symbol.asyncIterator && (h.Symbol.asyncIterator = A("asynciterator")));
const Ae = ee({});
for (let e = 0; e < Z.length; e++) {
  const t = Z[e];
  try {
    Ae[t] = h[t];
  } catch {
  }
}
const Q = A("window");
function lt() {
  return $(ee({ [Q]: h }), Ae);
}
function A(e) {
  return e + Math.random().toString(36).substring(2);
}
function ot(e) {
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
const ct = "0.4.8", V = { RES: void 0 }, E = { RES: void 0 }, g = { VAL: A("continue") }, b = { VAL: A("break") }, oe = A("super"), T = A("supercall"), ce = A("noctor"), K = A("clsctor"), ue = A("newtarget"), x = A("noinit"), B = A("deadzone");
class ae {
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
class S {
  /**
   * Create a simulated scope
   * @param parent the parent scope along the scope chain (default: null)
   * @param isolated true for function scope or false for block scope (default: false)
   */
  constructor(t = null, r = !1) {
    this.context = ee(null), this.parent = t, this.isolated = r;
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
    const t = new S(this.parent, this.isolated);
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
      n.context[t] = new ae("var", r === x ? void 0 : r);
    else if (i.kind === "var")
      r !== x && i.set(r);
    else
      throw new SyntaxError(`Identifier '${t}' has already been declared`);
    if (!n.parent) {
      const a = n.find("window").get();
      r !== x && w(a, t, { value: r, writable: !0, enumerable: !0 });
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
      this.context[t] = new ae("let", r);
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
      this.context[t] = new ae("const", r);
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
      this.context[t] = new ae("var", r);
    else
      throw new SyntaxError(`Identifier '${t}' has already been declared`);
  }
}
function R(e, t, r = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = r;
  if (e.name === "undefined")
    return;
  const a = t.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const s = a.get();
      if (s === B)
        throw new ReferenceError(`${e.name} is not defined`);
      return s;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function ut(e, t) {
  return Symbol.for(`private:${e.name}`);
}
const ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: R,
  PrivateIdentifier: ut
}, Symbol.toStringTag, { value: "Module" }));
function Ie(e, t) {
  return e.value;
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Ie
}, Symbol.toStringTag, { value: "Module" }));
function dt(e, t) {
  const r = t.find(T);
  if (r && !r.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return t.find("this").get();
}
function pt(e, t) {
  let r = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? r = r.concat(re(i, t)) : r.push(d(i, t));
  }
  return r;
}
function ht(e, t) {
  const r = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      $(r, re(i, t));
    else if (i.type === "Property") {
      let a;
      const s = i.key;
      i.computed ? a = d(s, t) : s.type === "Identifier" ? a = s.name : a = "" + Ie(s);
      const l = d(i.value, t), c = i.kind;
      if (c === "init")
        r[a] = l;
      else if (c === "get") {
        const o = D(r, a);
        w(r, a, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = D(r, a);
        w(r, a, {
          get: o && o.get,
          set: l,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return r;
}
function gt(e, t) {
  if (e.id && e.id.name) {
    const r = new S(t), n = q(e, r);
    return r.const(e.id.name, n), n;
  } else
    return q(e, t);
}
function bt(e, t) {
  const r = e.argument;
  switch (e.operator) {
    case "+":
      return +d(r, t);
    case "-":
      return -d(r, t);
    case "!":
      return !d(r, t);
    case "~":
      return ~d(r, t);
    case "void":
      return void d(r, t);
    case "typeof":
      return r.type === "Identifier" ? typeof R(r, t, { throwErr: !1 }) : typeof d(r, t);
    case "delete":
      if (r.type === "MemberExpression")
        return te(r, t, { getVar: !0 }).del();
      if (r.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return d(r, t), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function mt(e, t) {
  const r = e.argument;
  let n;
  if (r.type === "Identifier")
    n = R(r, t, { getVar: !0 });
  else if (r.type === "MemberExpression")
    n = te(r, t, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function vt(e, t) {
  const r = d(e.left, t), n = d(e.right, t);
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
  const r = d(e.right, t), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = R(n, t, { getVar: !0, throwErr: !1 }), !i) {
      const a = t.global().find("window").get();
      i = new C(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = te(n, t, { getVar: !0 });
  else
    return O(n, t, { feed: r });
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
      return d(e.left, t) || d(e.right, t);
    case "&&":
      return d(e.left, t) && d(e.right, t);
    case "??": {
      const r = d(e.left, t);
      return r ?? d(e.right, t);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function te(e, t, r = {}) {
  const { getObj: n = !1, getVar: i = !1 } = r;
  let a;
  if (e.object.type === "Super" ? a = $e(e.object, t, { getProto: !0 }) : a = d(e.object, t), e.optional && a == null)
    return;
  if (n) return a;
  const s = e.property.type === "PrivateIdentifier";
  let l;
  if (s)
    if (l = Symbol.for(`private:${e.property.name}`), typeof a == "function") {
      const o = a.__privateStaticFields;
      if (!o || !o.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Be(o, l) : o.get(l);
    } else {
      const o = a.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const u = f.get(a);
      if (!u || !(l in u))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new C(u, l) : u[l];
    }
  else e.computed ? l = d(e.property, t) : l = e.property.name;
  if (i) {
    const c = _e(a, l);
    if (e.object.type === "Super" && c) {
      const o = t.find("this").get(), f = A(l);
      return w(o, f, { set: c }), new C(o, f);
    } else
      return new C(a, l);
  } else {
    const c = ke(a, l);
    if (e.object.type === "Super" && c) {
      const o = t.find("this").get();
      return c.call(o);
    } else
      return a[l];
  }
}
function St(e, t) {
  return d(e.test, t) ? d(e.consequent, t) : d(e.alternate, t);
}
function Lt(e, t) {
  let r, n;
  if (e.callee.type === "MemberExpression") {
    if (n = te(e.callee, t, { getObj: !0 }), e.optional && n == null)
      return;
    let s;
    if (e.callee.property.type === "PrivateIdentifier")
      if (s = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const o = n.__privateStaticFields;
        r = o ? o.get(s) : void 0;
      } else {
        const o = n.constructor, f = o && o.__privateInstanceFields, u = f ? f.get(n) : null;
        r = u ? u[s] : void 0;
      }
    else if (e.callee.computed)
      if (s = d(e.callee.property, t), e.callee.object.type === "Super") {
        const c = t.find("this").get();
        r = n[s].bind(c);
      } else
        r = n[s];
    else if (s = e.callee.property.name, e.callee.object.type === "Super") {
      const c = t.find("this").get();
      r = n[s].bind(c);
    } else
      r = n[s];
    if (e.optional && r == null)
      return;
    if (typeof r != "function")
      throw new TypeError(`${s} is not a function`);
    try {
      if (r[K] === !0)
        throw new TypeError(`Class constructor ${s} cannot be invoked without 'new'`);
    } catch (c) {
      if (c instanceof TypeError && c.message.includes("Class constructor"))
        throw c;
    }
  } else {
    if (n = t.find("this").get(), r = d(e.callee, t), e.optional && r == null)
      return;
    let s = !1;
    try {
      s = r[K] === !0;
    } catch {
    }
    if (typeof r != "function" || e.callee.type !== "Super" && s) {
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
  for (let s = 0; s < e.arguments.length; s++) {
    const l = e.arguments[s];
    l.type === "SpreadElement" ? i = i.concat(re(l, t)) : i.push(d(l, t));
  }
  if (e.callee.type === "Super") {
    if (t.find(T).get())
      throw new ReferenceError("Super constructor may only be called once");
    t.find(T).set(!0);
  }
  let a = !1;
  try {
    a = n && n[Q];
  } catch {
  }
  if (a && r.toString().indexOf("[native code]") !== -1)
    try {
      return r.apply(n[Q], i);
    } catch {
      return r.apply(n, i);
    }
  return r.apply(n, i);
}
function kt(e, t) {
  const r = d(e.callee, t);
  let n = !1;
  try {
    n = r[ce];
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
    const s = e.arguments[a];
    s.type === "SpreadElement" ? i = i.concat(re(s, t)) : i.push(d(s, t));
  }
  return new r(...i);
}
function _t(e, t) {
  return t.find(ue).get();
}
function xt(e, t) {
  let r;
  for (let n = 0; n < e.expressions.length; n++)
    r = d(e.expressions[n], t);
  return r;
}
function At(e, t) {
  return q(e, t);
}
function Bt(e, t) {
  const r = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, s;
  for (; a = r.shift(); )
    i += Oe(a), s = n.shift(), s && (i += d(s, t));
  return i;
}
function It(e, t) {
  const r = d(e.tag, t), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  w(i, "raw", {
    value: le(a)
  });
  const s = e.quasi.expressions, l = [];
  if (s)
    for (let c = 0; c < s.length; c++)
      l.push(d(s[c], t));
  return r(le(i), ...l);
}
function Oe(e, t) {
  return e.value.raw;
}
function Ot(e, t) {
  if (e.id && e.id.name) {
    const r = new S(t), n = he(e, r);
    return r.const(e.id.name, n), n;
  } else
    return he(e, t);
}
function $e(e, t, r = {}) {
  const { getProto: n = !1 } = r, i = t.find(oe).get();
  return n ? i.prototype : i;
}
function re(e, t) {
  return d(e.argument, t);
}
function $t(e, t) {
  return d(e.expression, t);
}
const Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: pt,
  ArrowFunctionExpression: At,
  AssignmentExpression: wt,
  BinaryExpression: vt,
  CallExpression: Lt,
  ChainExpression: $t,
  ClassExpression: Ot,
  ConditionalExpression: St,
  FunctionExpression: gt,
  LogicalExpression: Et,
  MemberExpression: te,
  MetaProperty: _t,
  NewExpression: kt,
  ObjectExpression: ht,
  SequenceExpression: xt,
  SpreadElement: re,
  Super: $e,
  TaggedTemplateExpression: It,
  TemplateElement: Oe,
  TemplateLiteral: Bt,
  ThisExpression: dt,
  UnaryExpression: bt,
  UpdateExpression: mt
}, Symbol.toStringTag, { value: "Module" }));
function jt(e, t) {
  d(e.expression, t);
}
function M(e, t, r = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = r, a = n ? t : new S(t);
  i || ge(e, a, { onlyBlock: !0 });
  for (let s = 0; s < e.body.length; s++) {
    const l = d(e.body[s], a);
    if (l === b || l === g || l === E)
      return l;
  }
}
function Ft() {
}
function Ct() {
  debugger;
}
function Dt(e, t) {
  return E.RES = e.argument ? d(e.argument, t) : void 0, E;
}
function Tt(e) {
  return e.label ? b.LABEL = e.label.name : delete b.LABEL, b;
}
function Rt(e) {
  return e.label ? g.LABEL = e.label.name : delete g.LABEL, g;
}
function Vt(e, t) {
  const r = d(e.object, t), n = new S(t);
  if (r && typeof r == "object")
    for (const i in r)
      n.var(i, r[i]);
  return d(e.body, n);
}
function Mt(e, t) {
  const r = e.label.name, n = new S(t, !1);
  n.let("__LABEL__", r);
  const i = d(e.body, n);
  if (i === b && b.LABEL === r) {
    delete b.LABEL;
    return;
  }
  return i === g && g.LABEL === r && delete g.LABEL, i;
}
function Nt(e, t) {
  return d(e.test, t) ? d(e.consequent, t) : d(e.alternate, t);
}
function Ut(e, t) {
  const r = d(e.discriminant, t);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || d(a.test, t) === r) && (n = !0), n) {
      const s = Pe(a, t);
      if (s === b)
        break;
      if (s === g || s === E)
        return s;
    }
  }
}
function Pe(e, t) {
  for (let r = 0; r < e.consequent.length; r++) {
    const n = d(e.consequent[r], t);
    if (n === b || n === g || n === E)
      return n;
  }
}
function qt(e, t) {
  throw d(e.argument, t);
}
function Wt(e, t) {
  try {
    return M(e.block, t);
  } catch (r) {
    if (e.handler) {
      const n = new S(t), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, r);
        } else
          O(i, t, { feed: r });
      return je(e.handler, n);
    } else
      throw r;
  } finally {
    if (e.finalizer) {
      const r = M(e.finalizer, t);
      if (r === b || r === g || r === E)
        return r;
    }
  }
}
function je(e, t) {
  return M(e.body, t, { invasived: !0 });
}
function zt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (; d(e.test, t); ) {
    const n = d(e.body, t);
    if (n === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (n === E)
      return n;
  }
}
function Kt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  do {
    const n = d(e.body, t);
    if (n === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (n === E)
      return n;
  } while (d(e.test, t));
}
function Jt(e, t) {
  const r = new S(t), n = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (d(e.init, r); !e.test || d(e.test, r); d(e.update, r)) {
    const i = new S(r);
    let a;
    if (e.body.type === "BlockStatement" ? a = M(e.body, i, { invasived: !0 }) : a = d(e.body, i), a === b) {
      if (b.LABEL) {
        if (b.LABEL === n) {
          delete b.LABEL;
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
    } else if (a === E)
      return a;
  }
}
function Gt(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (const n in d(e.right, t)) {
    const i = Ze(e, t, { value: n });
    if (i === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (i === E)
      return i;
  }
}
function Ht(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0, n = d(e.right, t);
  for (const i of n) {
    const a = Ze(e, t, { value: i });
    if (a === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (a === E)
      return a;
  }
}
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: M,
  BreakStatement: Tt,
  CatchClause: je,
  ContinueStatement: Rt,
  DebuggerStatement: Ct,
  DoWhileStatement: Kt,
  EmptyStatement: Ft,
  ExpressionStatement: jt,
  ForInStatement: Gt,
  ForOfStatement: Ht,
  ForStatement: Jt,
  IfStatement: Nt,
  LabeledStatement: Mt,
  ReturnStatement: Dt,
  SwitchCase: Pe,
  SwitchStatement: Ut,
  ThrowStatement: qt,
  TryStatement: Wt,
  WhileStatement: zt,
  WithStatement: Vt
}, Symbol.toStringTag, { value: "Module" }));
function Fe(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = {} } = r, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? t[n](f.name, a ? B : n === "var" ? x : void 0) : O(f, t, { kind: n, hoist: i, onlyBlock: a });
        } else
          J(o, t, { kind: n, hoist: i, onlyBlock: a });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = d(o.key, t) : f = o.key.name, l.push(f);
      const u = o.value;
      u.type === "Identifier" ? t[n](u.name, s[f]) : O(u, t, { kind: n, feed: s[f] });
    } else {
      const f = $({}, s);
      for (let u = 0; u < l.length; u++) delete f[l[u]];
      J(o, t, { kind: n, feed: f });
    }
  }
}
function Ce(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = r, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (a || n === "var") && (o.type === "Identifier" ? t[n](o.name, a ? B : n === "var" ? x : void 0) : O(o, t, { kind: n, hoist: i, onlyBlock: a }));
      else if (o.type === "Identifier")
        if (n)
          t[n](o.name, s[c]);
        else {
          const f = R(o, t, { getVar: !0 });
          f.set(s[c]), l.push(f.get());
        }
      else o.type === "RestElement" ? J(o, t, { kind: n, feed: s.slice(c) }) : O(o, t, { kind: n, feed: s[c] });
  }
  if (l.length)
    return l;
}
function J(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = r, l = e.argument;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? x : void 0) : O(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? n ? t[n](l.name, s) : R(l, t, { getVar: !0 }).set(s) : O(l, t, { kind: n, feed: s });
}
function De(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = d(e.right, t) } = r, l = e.left;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? x : void 0) : O(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? t[n](l.name, s) : O(l, t, { kind: n, feed: s });
}
const Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Ce,
  AssignmentPattern: De,
  ObjectPattern: Fe,
  RestElement: J
}, Symbol.toStringTag, { value: "Module" }));
function Zt(e, t) {
  for (let r = 0; r < e.body.length; r++)
    d(e.body[r], t);
}
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: Zt
}, Symbol.toStringTag, { value: "Module" }));
let fe;
function d(e, t) {
  if (!e) return;
  fe || (fe = $(
    {},
    Qe,
    Pt,
    ft,
    Xt,
    yt,
    Yt,
    Qt
  ));
  const r = fe[e.type];
  if (r)
    return r(e, t);
  throw new Error(`${e.type} isn't implemented`);
}
function er(e, t) {
  t.func(e.id.name, q(e, t));
}
function W(e, t, r = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    Te(e.declarations[n], t, $({ kind: i }, r));
  }
}
function Te(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s } = r;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? t[n](e.id.name, a ? B : n === "var" ? x : void 0) : O(e.id, t, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const l = "feed" in r, c = l ? s : d(e.init, t);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? t.var(o, x) : t[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && w(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      O(e.id, t, { kind: n, feed: c });
  }
}
function tr(e, t) {
  t.func(e.id.name, he(e, t));
}
function Re(e, t, r = {}) {
  const { klass: n, superClass: i } = r;
  for (let a = 0; a < e.body.length; a++) {
    const s = e.body[a];
    if (s.type === "MethodDefinition")
      Ve(s, t, { klass: n, superClass: i });
    else {
      if (s.type === "PropertyDefinition")
        continue;
      if (s.type === "StaticBlock")
        continue;
    }
  }
}
function Ve(e, t, r = {}) {
  const { klass: n, superClass: i } = r, a = e.key.type === "PrivateIdentifier";
  let s;
  if (a)
    s = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    s = d(e.key, t);
  else if (e.key.type === "Identifier")
    s = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = q(e.value, t, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (a)
        if (e.static) {
          const c = n.__privateStaticFields;
          c && c.set(s, l);
        } else
          n.__privateInstanceMethods || w(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(s, l);
      else {
        const c = e.static ? n : n.prototype;
        w(c, s, {
          value: l,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (a)
        throw new Error("Private getters not yet supported");
      const c = e.static ? n : n.prototype, o = D(c, s);
      w(c, s, {
        get: l,
        set: o && o.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (a)
        throw new Error("Private setters not yet supported");
      const c = e.static ? n : n.prototype, o = D(c, s);
      w(c, s, {
        get: o && o.get,
        set: l,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function* H(e, t, r = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = r;
  if (e.name === "undefined")
    return;
  const a = t.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const s = a.get();
      if (s === B)
        throw new ReferenceError(`${e.name} is not defined`);
      return s;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function* rr(e, t) {
  return Symbol.for(`private:${e.name}`);
}
const nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: H,
  PrivateIdentifier: rr
}, Symbol.toStringTag, { value: "Module" }));
function* Me(e, t) {
  return e.value;
}
const ir = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Me
}, Symbol.toStringTag, { value: "Module" }));
function* ar(e, t) {
  const r = t.find(T);
  if (r && !r.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return t.find("this").get();
}
function* sr(e, t) {
  let r = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? r = r.concat(yield* ie(i, t)) : r.push(yield* p(i, t));
  }
  return r;
}
function* lr(e, t) {
  const r = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      $(r, yield* ie(i, t));
    else if (i.type === "Property") {
      let a;
      const s = i.key;
      i.computed ? a = yield* p(s, t) : s.type === "Identifier" ? a = s.name : a = "" + (yield* Me(s));
      const l = yield* p(i.value, t), c = i.kind;
      if (c === "init")
        r[a] = l;
      else if (c === "get") {
        const o = D(r, a);
        w(r, a, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = D(r, a);
        w(r, a, {
          get: o && o.get,
          set: l,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return r;
}
function* or(e, t) {
  if (e.id && e.id.name) {
    const r = new S(t), n = U(e, r);
    return r.const(e.id.name, n), n;
  } else
    return U(e, t);
}
function* cr(e, t) {
  const r = e.argument;
  switch (e.operator) {
    case "+":
      return +(yield* p(r, t));
    case "-":
      return -(yield* p(r, t));
    case "!":
      return !(yield* p(r, t));
    case "~":
      return ~(yield* p(r, t));
    case "void":
      return void (yield* p(r, t));
    case "typeof":
      return r.type === "Identifier" ? typeof (yield* H(r, t, { throwErr: !1 })) : typeof (yield* p(r, t));
    case "delete":
      if (r.type === "MemberExpression")
        return (yield* ne(r, t, { getVar: !0 })).del();
      if (r.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* p(r, t), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* ur(e, t) {
  const r = e.argument;
  let n;
  if (r.type === "Identifier")
    n = yield* H(r, t, { getVar: !0 });
  else if (r.type === "MemberExpression")
    n = yield* ne(r, t, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function* fr(e, t) {
  const r = yield* p(e.left, t), n = yield* p(e.right, t);
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
function* yr(e, t) {
  const r = yield* p(e.right, t), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* H(n, t, { getVar: !0, throwErr: !1 }), !i) {
      const a = t.global().find("window").get();
      i = new C(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = yield* ne(n, t, { getVar: !0 });
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
function* dr(e, t) {
  switch (e.operator) {
    case "||":
      return (yield* p(e.left, t)) || (yield* p(e.right, t));
    case "&&":
      return (yield* p(e.left, t)) && (yield* p(e.right, t));
    case "??": {
      const r = yield* p(e.left, t);
      return r ?? (yield* p(e.right, t));
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* ne(e, t, r = {}) {
  const { getObj: n = !1, getVar: i = !1 } = r;
  let a;
  if (e.object.type === "Super" ? a = yield* Ue(e.object, t, { getProto: !0 }) : a = yield* p(e.object, t), e.optional && a == null)
    return;
  if (n) return a;
  const s = e.property.type === "PrivateIdentifier";
  let l;
  if (s)
    if (l = Symbol.for(`private:${e.property.name}`), typeof a == "function") {
      const o = a.__privateStaticFields;
      if (!o || !o.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Be(o, l) : o.get(l);
    } else {
      const o = a.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const u = f.get(a);
      if (!u || !(l in u))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new C(u, l) : u[l];
    }
  else e.computed ? l = yield* p(e.property, t) : l = e.property.name;
  if (i) {
    const c = _e(a, l);
    if (e.object.type === "Super" && c) {
      const o = t.find("this").get(), f = A(l);
      return w(o, f, { set: c }), new C(o, f);
    } else
      return new C(a, l);
  } else {
    const c = ke(a, l);
    if (e.object.type === "Super" && c) {
      const o = t.find("this").get();
      return c.call(o);
    } else
      return a[l];
  }
}
function* pr(e, t) {
  return (yield* p(e.test, t)) ? yield* p(e.consequent, t) : yield* p(e.alternate, t);
}
function* hr(e, t) {
  let r, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* ne(e.callee, t, { getObj: !0 }), e.optional && n == null)
      return;
    let s;
    if (e.callee.property.type === "PrivateIdentifier")
      if (s = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const o = n.__privateStaticFields;
        r = o ? o.get(s) : void 0;
      } else {
        const o = n.constructor, f = o && o.__privateInstanceFields, u = f ? f.get(n) : null;
        r = u ? u[s] : void 0;
      }
    else if (e.callee.computed)
      if (s = yield* p(e.callee.property, t), e.callee.object.type === "Super") {
        const c = t.find("this").get();
        r = n[s].bind(c);
      } else
        r = n[s];
    else if (s = e.callee.property.name, e.callee.object.type === "Super") {
      const c = t.find("this").get();
      r = n[s].bind(c);
    } else
      r = n[s];
    if (e.optional && r == null)
      return;
    if (typeof r != "function")
      throw new TypeError(`${s} is not a function`);
    try {
      if (r[K] === !0)
        throw new TypeError(`Class constructor ${s} cannot be invoked without 'new'`);
    } catch (c) {
      if (c instanceof TypeError && c.message.includes("Class constructor"))
        throw c;
    }
  } else {
    if (n = t.find("this").get(), r = yield* p(e.callee, t), e.optional && r == null)
      return;
    let s = !1;
    try {
      s = r[K] === !0;
    } catch {
    }
    if (typeof r != "function" || e.callee.type !== "Super" && s) {
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
  for (let s = 0; s < e.arguments.length; s++) {
    const l = e.arguments[s];
    l.type === "SpreadElement" ? i = i.concat(yield* ie(l, t)) : i.push(yield* p(l, t));
  }
  if (e.callee.type === "Super") {
    if (t.find(T).get())
      throw new ReferenceError("Super constructor may only be called once");
    t.find(T).set(!0);
  }
  let a = !1;
  try {
    a = n && n[Q];
  } catch {
  }
  if (a && r.toString().indexOf("[native code]") !== -1)
    try {
      return r.apply(n[Q], i);
    } catch {
      return r.apply(n, i);
    }
  return r.apply(n, i);
}
function* gr(e, t) {
  const r = yield* p(e.callee, t);
  let n = !1;
  try {
    n = r[ce];
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
    const s = e.arguments[a];
    s.type === "SpreadElement" ? i = i.concat(yield* ie(s, t)) : i.push(yield* p(s, t));
  }
  return new r(...i);
}
function* br(e, t) {
  return t.find(ue).get();
}
function* mr(e, t) {
  let r;
  for (let n = 0; n < e.expressions.length; n++)
    r = yield* p(e.expressions[n], t);
  return r;
}
function* vr(e, t) {
  return U(e, t);
}
function* wr(e, t) {
  const r = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, s;
  for (; a = r.shift(); )
    i += yield* Ne(a), s = n.shift(), s && (i += yield* p(s, t));
  return i;
}
function* Er(e, t) {
  const r = yield* p(e.tag, t), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  w(i, "raw", {
    value: le(a)
  });
  const s = e.quasi.expressions, l = [];
  if (s)
    for (let c = 0; c < s.length; c++)
      l.push(yield* p(s[c], t));
  return r(le(i), ...l);
}
function* Ne(e, t) {
  return e.value.raw;
}
function* Sr(e, t) {
  if (e.id && e.id.name) {
    const r = new S(t), n = yield* de(e, r);
    return r.const(e.id.name, n), n;
  } else
    return yield* de(e, t);
}
function* Ue(e, t, r = {}) {
  const { getProto: n = !1 } = r, i = t.find(oe).get();
  return n ? i.prototype : i;
}
function* ie(e, t) {
  return yield* p(e.argument, t);
}
function* Lr(e, t) {
  return yield* p(e.expression, t);
}
function* kr(e, t) {
  const r = yield* p(e.argument, t);
  return e.delegate ? yield* r : yield r;
}
function* _r(e, t) {
  return V.RES = yield* p(e.argument, t), yield V;
}
const xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: sr,
  ArrowFunctionExpression: vr,
  AssignmentExpression: yr,
  AwaitExpression: _r,
  BinaryExpression: fr,
  CallExpression: hr,
  ChainExpression: Lr,
  ClassExpression: Sr,
  ConditionalExpression: pr,
  FunctionExpression: or,
  LogicalExpression: dr,
  MemberExpression: ne,
  MetaProperty: br,
  NewExpression: gr,
  ObjectExpression: lr,
  SequenceExpression: mr,
  SpreadElement: ie,
  Super: Ue,
  TaggedTemplateExpression: Er,
  TemplateElement: Ne,
  TemplateLiteral: wr,
  ThisExpression: ar,
  UnaryExpression: cr,
  UpdateExpression: ur,
  YieldExpression: kr
}, Symbol.toStringTag, { value: "Module" }));
function* Ar(e, t) {
  yield* p(e.expression, t);
}
function* N(e, t, r = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = r, a = n ? t : new S(t);
  i || (yield* Ye(e, a, { onlyBlock: !0 }));
  for (let s = 0; s < e.body.length; s++) {
    const l = yield* p(e.body[s], a);
    if (l === b || l === g || l === E)
      return l;
  }
}
function* Br() {
}
function* Ir() {
  debugger;
}
function* Or(e, t) {
  return E.RES = e.argument ? yield* p(e.argument, t) : void 0, E;
}
function* $r(e) {
  return e.label ? b.LABEL = e.label.name : delete b.LABEL, b;
}
function* Pr(e) {
  return e.label ? g.LABEL = e.label.name : delete g.LABEL, g;
}
function* jr(e, t) {
  const r = yield* p(e.object, t), n = new S(t);
  if (r && typeof r == "object")
    for (const i in r)
      n.var(i, r[i]);
  return yield* p(e.body, n);
}
function* Fr(e, t) {
  const r = e.label.name, n = new S(t, !1);
  n.let("__LABEL__", r);
  const i = yield* p(e.body, n);
  if (i === b && b.LABEL === r) {
    delete b.LABEL;
    return;
  }
  return i === g && g.LABEL === r && delete g.LABEL, i;
}
function* Cr(e, t) {
  return (yield* p(e.test, t)) ? yield* p(e.consequent, t) : yield* p(e.alternate, t);
}
function* Dr(e, t) {
  const r = yield* p(e.discriminant, t);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || (yield* p(a.test, t)) === r) && (n = !0), n) {
      const s = yield* qe(a, t);
      if (s === b)
        break;
      if (s === g || s === E)
        return s;
    }
  }
}
function* qe(e, t) {
  for (let r = 0; r < e.consequent.length; r++) {
    const n = yield* p(e.consequent[r], t);
    if (n === b || n === g || n === E)
      return n;
  }
}
function* Tr(e, t) {
  throw yield* p(e.argument, t);
}
function* Rr(e, t) {
  try {
    return yield* N(e.block, t);
  } catch (r) {
    if (e.handler) {
      const n = new S(t), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, r);
        } else
          yield* I(i, t, { feed: r });
      return yield* We(e.handler, n);
    } else
      throw r;
  } finally {
    if (e.finalizer) {
      const r = yield* N(e.finalizer, t);
      if (r === b || r === g || r === E)
        return r;
    }
  }
}
function* We(e, t) {
  return yield* N(e.body, t, { invasived: !0 });
}
function* Vr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (; yield* p(e.test, t); ) {
    const n = yield* p(e.body, t);
    if (n === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (n === E)
      return n;
  }
}
function* Mr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  do {
    const n = yield* p(e.body, t);
    if (n === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (n === E)
      return n;
  } while (yield* p(e.test, t));
}
function* Nr(e, t) {
  const r = new S(t), n = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (yield* p(e.init, r); !e.test || (yield* p(e.test, r)); yield* p(e.update, r)) {
    const i = new S(r);
    let a;
    if (e.body.type === "BlockStatement" ? a = yield* N(e.body, i, { invasived: !0 }) : a = yield* p(e.body, i), a === b) {
      if (b.LABEL) {
        if (b.LABEL === n) {
          delete b.LABEL;
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
    } else if (a === E)
      return a;
  }
}
function* Ur(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0;
  for (const n in yield* p(e.right, t)) {
    const i = yield* pe(e, t, { value: n });
    if (i === b) {
      if (b.LABEL) {
        if (b.LABEL === r) {
          delete b.LABEL;
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
    } else if (i === E)
      return i;
  }
}
function* qr(e, t) {
  const r = t.hasOwn("__LABEL__") ? t.find("__LABEL__").get() : void 0, n = yield* p(e.right, t);
  if (e.await) {
    const i = ot(n);
    let a;
    for (V.RES = i.next(), a = yield V; !a.done; V.RES = i.next(), a = yield V) {
      const s = yield* pe(e, t, { value: a.value });
      if (s === b) {
        if (b.LABEL) {
          if (b.LABEL === r) {
            delete b.LABEL;
            break;
          }
          return s;
        }
        break;
      } else if (s === g) {
        if (g.LABEL) {
          if (g.LABEL === r) {
            delete g.LABEL;
            continue;
          }
          return s;
        }
        continue;
      } else if (s === E)
        return s;
    }
  } else
    for (const i of n) {
      const a = yield* pe(e, t, { value: i });
      if (a === b) {
        if (b.LABEL) {
          if (b.LABEL === r) {
            delete b.LABEL;
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
      } else if (a === E)
        return a;
    }
}
const Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: N,
  BreakStatement: $r,
  CatchClause: We,
  ContinueStatement: Pr,
  DebuggerStatement: Ir,
  DoWhileStatement: Mr,
  EmptyStatement: Br,
  ExpressionStatement: Ar,
  ForInStatement: Ur,
  ForOfStatement: qr,
  ForStatement: Nr,
  IfStatement: Cr,
  LabeledStatement: Fr,
  ReturnStatement: Or,
  SwitchCase: qe,
  SwitchStatement: Dr,
  ThrowStatement: Tr,
  TryStatement: Rr,
  WhileStatement: Vr,
  WithStatement: jr
}, Symbol.toStringTag, { value: "Module" }));
function* ze(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = {} } = r, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? t[n](f.name, a ? B : n === "var" ? x : void 0) : yield* I(f, t, { kind: n, hoist: i, onlyBlock: a });
        } else
          yield* G(o, t, { kind: n, hoist: i, onlyBlock: a });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = yield* p(o.key, t) : f = o.key.name, l.push(f);
      const u = o.value;
      u.type === "Identifier" ? t[n](u.name, s[f]) : yield* I(u, t, { kind: n, feed: s[f] });
    } else {
      const f = $({}, s);
      for (let u = 0; u < l.length; u++) delete f[l[u]];
      yield* G(o, t, { kind: n, feed: f });
    }
  }
}
function* Ke(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = r, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (a || n === "var") && (o.type === "Identifier" ? t[n](o.name, a ? B : n === "var" ? x : void 0) : yield* I(o, t, { kind: n, hoist: i, onlyBlock: a }));
      else if (o.type === "Identifier")
        if (n)
          t[n](o.name, s[c]);
        else {
          const f = yield* H(o, t, { getVar: !0 });
          f.set(s[c]), l.push(f.get());
        }
      else o.type === "RestElement" ? yield* G(o, t, { kind: n, feed: s.slice(c) }) : yield* I(o, t, { kind: n, feed: s[c] });
  }
  if (l.length)
    return l;
}
function* G(e, t, r = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = r, l = e.argument;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? x : void 0) : yield* I(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? n ? t[n](l.name, s) : (yield* H(l, t, { getVar: !0 })).set(s) : yield* I(l, t, { kind: n, feed: s });
}
function* Je(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = yield* p(e.right, t) } = r, l = e.left;
  i ? (a || n === "var") && (l.type === "Identifier" ? t[n](l.name, a ? B : n === "var" ? x : void 0) : yield* I(l, t, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? t[n](l.name, s) : yield* I(l, t, { kind: n, feed: s });
}
const zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Ke,
  AssignmentPattern: Je,
  ObjectPattern: ze,
  RestElement: G
}, Symbol.toStringTag, { value: "Module" }));
let ye;
function* p(e, t) {
  if (!e) return;
  ye || (ye = $(
    {},
    et,
    xr,
    nr,
    Wr,
    ir,
    zr
    /*<add>*/
    /*program*/
    /*</add>*/
  ));
  const r = ye[e.type];
  if (r)
    return yield* r(e, t);
  throw new Error(`${e.type} isn't implemented`);
}
function* Kr(e, t) {
  t.func(e.id.name, U(e, t));
}
function* z(e, t, r = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* Ge(e.declarations[n], t, $({ kind: i }, r));
  }
}
function* Ge(e, t, r = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s } = r;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? t[n](e.id.name, a ? B : n === "var" ? x : void 0) : yield* I(e.id, t, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const l = "feed" in r, c = l ? s : yield* p(e.init, t);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? t.var(o, x) : t[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && w(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      yield* I(e.id, t, { kind: n, feed: c });
  }
}
function* Jr(e, t) {
  t.func(e.id.name, yield* de(e, t));
}
function* He(e, t, r = {}) {
  const { klass: n, superClass: i } = r;
  for (let a = 0; a < e.body.length; a++) {
    const s = e.body[a];
    if (s.type === "MethodDefinition")
      yield* Xe(s, t, { klass: n, superClass: i });
    else {
      if (s.type === "PropertyDefinition")
        continue;
      if (s.type === "StaticBlock")
        continue;
    }
  }
}
function* Xe(e, t, r = {}) {
  const { klass: n, superClass: i } = r, a = e.key.type === "PrivateIdentifier";
  let s;
  if (a)
    s = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    s = yield* p(e.key, t);
  else if (e.key.type === "Identifier")
    s = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = yield* U(e.value, t, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (a)
        if (e.static) {
          const c = n.__privateStaticFields;
          c && c.set(s, l);
        } else
          n.__privateInstanceMethods || w(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(s, l);
      else {
        const c = e.static ? n : n.prototype;
        w(c, s, {
          value: l,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (a)
        throw new Error("Private getters not yet supported");
      const c = e.static ? n : n.prototype, o = D(c, s);
      w(c, s, {
        get: l,
        set: o && o.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (a)
        throw new Error("Private setters not yet supported");
      const c = e.static ? n : n.prototype, o = D(c, s);
      w(c, s, {
        get: o && o.get,
        set: l,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function Ee(e, t = {}) {
  const { res: r, err: n, ret: i, fullRet: a } = t;
  return new Promise((s, l) => {
    if ("ret" in t)
      return s(e.return(i));
    "err" in t ? o(n) : c(r);
    function c(u) {
      let y;
      try {
        y = e.next(u);
      } catch (m) {
        return l(m);
      }
      return f(y), null;
    }
    function o(u) {
      let y;
      try {
        y = e.throw(u);
      } catch (m) {
        return l(m);
      }
      f(y);
    }
    function f(u) {
      if (u.done) return s(a ? u : u.value);
      if (u.value !== V) return s(u);
      const y = u.value.RES;
      return (y && y.then === "function" ? y : Promise.resolve(y)).then(c, o);
    }
  });
}
function* Ye(e, t, r = {}) {
  const { onlyBlock: n = !1 } = r, i = [], a = [];
  for (let s = 0; s < e.body.length; s++) {
    const l = e.body[s];
    l.type === "FunctionDeclaration" ? (i.push(l), a.push(s)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? yield* z(l, t, { hoist: !0, onlyBlock: !0 }) : n || (yield* j(l, t));
  }
  if (a.length) {
    for (let s = a.length - 1; s > -1; s--)
      e.body.splice(a[s], 1);
    e.body = i.concat(e.body);
  }
}
function* j(e, t) {
  switch (e.type) {
    case "VariableDeclaration":
      yield* z(e, t, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* z(e.left, t, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* z(e.init, t, { hoist: !0 }));
    case "WhileStatement":
    case "DoWhileStatement":
      yield* j(e.body, t);
      break;
    case "IfStatement":
      yield* j(e.consequent, t), e.alternate && (yield* j(e.alternate, t));
      break;
    case "BlockStatement":
      for (let r = 0; r < e.body.length; r++)
        yield* j(e.body[r], t);
      break;
    case "SwitchStatement":
      for (let r = 0; r < e.cases.length; r++)
        for (let n = 0; n < e.cases[r].consequent.length; n++)
          yield* j(e.cases[r].consequent[n], t);
      break;
    case "TryStatement": {
      const r = e.block.body;
      for (let a = 0; a < r.length; a++)
        yield* j(r[a], t);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          yield* j(n[a], t);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          yield* j(i[a], t);
      break;
    }
  }
}
function* I(e, t, r = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return yield* ze(e, t, r);
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
    return q(e, t, r);
  const { superClass: n, isCtor: i } = r, a = e.params, s = function* (...c) {
    const o = new S(t, !0);
    if (e.type !== "ArrowFunctionExpression") {
      o.const("this", this), o.let("arguments", arguments);
      const u = s.__currentNewTarget || new.target;
      o.const(ue, u), n && (o.const(oe, n), i && o.let(T, !1));
    }
    for (let u = 0; u < a.length; u++) {
      const y = a[u];
      y.type === "Identifier" ? o.var(y.name, c[u]) : y.type === "RestElement" ? yield* G(y, o, { kind: "var", feed: c.slice(u) }) : yield* I(y, o, { feed: c[u] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (yield* Ye(e.body, o), f = yield* N(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = yield* p(e.body, o), e.type === "ArrowFunctionExpression" && (E.RES = f, f = E)), f === E)
      return f.RES;
  };
  let l;
  return e.async && e.generator ? l = function() {
    const c = s.apply(this, arguments);
    let o = Promise.resolve(), f = !1;
    const u = (m) => o = o.then(() => Ee(c, $({ fullRet: !0 }, m))).catch((v) => {
      if (!f)
        return f = !0, Promise.reject(v);
    }), y = {
      next: (m) => u({ res: m }),
      throw: (m) => u({ err: m }),
      return: (m) => u({ ret: m })
    };
    return typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
  } : e.async ? l = function() {
    return Ee(s.apply(this, arguments));
  } : l = s, w(l, ce, { value: !0 }), w(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), w(l, "length", {
    value: a.length,
    configurable: !0
  }), l;
}
function* de(e, t) {
  const r = yield* p(e.superClass, t), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), a = e.body.body, s = [];
  let l = null;
  const c = [], o = [];
  for (let u = 0; u < a.length; u++) {
    const y = a[u];
    if (y.type === "MethodDefinition" && y.kind === "constructor")
      l = yield* U(y.value, t, { superClass: r, isCtor: !0 });
    else if (y.type === "PropertyDefinition") {
      const m = y.key.type === "PrivateIdentifier";
      let v;
      if (m ? v = Symbol.for(`private:${y.key.name}`) : y.computed ? v = yield* p(y.key, t) : v = y.key.type === "Identifier" ? y.key.name : yield* p(y.key, t), y.static) {
        const _ = y.value ? yield* p(y.value, t) : void 0;
        o.push({ key: v, value: _, isPrivate: m });
      } else
        c.push({ key: v, valueNode: y.value, isPrivate: m });
    } else y.type === "StaticBlock" && s.push(y);
  }
  let f;
  if (l) {
    let u;
    f = u = function(...y) {
      const m = {}, v = u.__privateInstanceMethods;
      v && v.forEach((L, k) => {
        m[k] = L;
      });
      for (let L = 0; L < c.length; L++) {
        const k = c[L];
        k.isPrivate && (m[k.key] = void 0);
      }
      (Object.keys(m).length > 0 || Object.getOwnPropertySymbols(m).length > 0) && n.set(this, m);
      for (let L = 0; L < c.length; L++) {
        const k = c[L], X = new S(t, !1);
        X.const("this", this);
        const P = k.valueNode ? p(k.valueNode, X) : void 0, Y = P && typeof P.next == "function" ? Array.from(P).pop() : P;
        k.isPrivate ? m[k.key] = Y : this[k.key] = Y;
      }
      l.__currentNewTarget = new.target || u;
      const _ = l.call(this, ...y);
      return delete l.__currentNewTarget, typeof _ == "object" && _ !== null ? _ : this;
    };
  } else
    f = function() {
      const u = {}, y = f.__privateInstanceMethods;
      y && y.forEach((m, v) => {
        u[v] = m;
      });
      for (let m = 0; m < c.length; m++) {
        const v = c[m];
        v.isPrivate && (u[v.key] = void 0);
      }
      (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
      for (let m = 0; m < c.length; m++) {
        const v = c[m], _ = new S(t, !1);
        _.const("this", this);
        const L = v.valueNode ? p(v.valueNode, _) : void 0;
        v.isPrivate ? u[v.key] = L : this[v.key] = L;
      }
      r && r.apply(this);
    };
  r && xe(f, r), w(f, "__privateInstanceFields", { value: n }), w(f, "__privateStaticFields", { value: i }), yield* He(e.body, t, { klass: f, superClass: r });
  for (let u = 0; u < o.length; u++) {
    const y = o[u];
    y.isPrivate ? i.set(y.key, y.value) : f[y.key] = y.value;
  }
  for (let u = 0; u < s.length; u++) {
    const y = s[u], m = new S(t, !0);
    m.const("this", f);
    for (let v = 0; v < y.body.length; v++)
      yield* p(y.body[v], m);
  }
  return w(f, K, { value: !0 }), w(f, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), f;
}
function* pe(e, t, r) {
  const { value: n } = r, i = e.left, a = new S(t);
  i.type === "VariableDeclaration" ? yield* z(i, a, { feed: n }) : i.type === "Identifier" ? (yield* R(i, t, { getVar: !0 })).set(n) : yield* I(i, t, { feed: n });
  let s;
  return e.body.type === "BlockStatement" ? s = yield* N(e.body, a, { invasived: !0 }) : s = yield* p(e.body, a), s;
}
function ge(e, t, r = {}) {
  const { onlyBlock: n = !1 } = r, i = [], a = [];
  for (let s = 0; s < e.body.length; s++) {
    const l = e.body[s];
    l.type === "FunctionDeclaration" ? (i.push(l), a.push(s)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? W(l, t, { hoist: !0, onlyBlock: !0 }) : n || F(l, t);
  }
  if (a.length) {
    for (let s = a.length - 1; s > -1; s--)
      e.body.splice(a[s], 1);
    e.body = i.concat(e.body);
  }
}
function F(e, t) {
  switch (e.type) {
    case "VariableDeclaration":
      W(e, t, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && W(e.left, t, { hoist: !0 });
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && W(e.init, t, { hoist: !0 });
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
function O(e, t, r = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return Fe(e, t, r);
    case "ArrayPattern":
      return Ce(e, t, r);
    case "RestElement":
      return J(e, t, r);
    case "AssignmentPattern":
      return De(e, t, r);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function q(e, t, r = {}) {
  if (e.generator || e.async)
    return U(e, t, r);
  const { superClass: n, isCtor: i } = r, a = e.params, s = function(...c) {
    const o = new S(t, !0);
    if (e.type !== "ArrowFunctionExpression") {
      o.const("this", this), o.let("arguments", arguments);
      const u = s.__currentNewTarget || new.target;
      o.const(ue, u), n && (o.const(oe, n), i && o.let(T, !1));
    }
    for (let u = 0; u < a.length; u++) {
      const y = a[u];
      y.type === "Identifier" ? o.var(y.name, c[u]) : y.type === "RestElement" ? J(y, o, { kind: "var", feed: c.slice(u) }) : O(y, o, { feed: c[u] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (ge(e.body, o), f = M(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = d(e.body, o), e.type === "ArrowFunctionExpression" && (E.RES = f, f = E)), f === E)
      return f.RES;
  };
  let l = s;
  return e.type === "ArrowFunctionExpression" && w(l, ce, { value: !0 }), w(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), w(l, "length", {
    value: a.length,
    configurable: !0
  }), l;
}
function he(e, t) {
  const r = d(e.superClass, t), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), a = e.body.body, s = [];
  let l = null;
  const c = [], o = [];
  for (let u = 0; u < a.length; u++) {
    const y = a[u];
    if (y.type === "MethodDefinition" && y.kind === "constructor")
      l = q(y.value, t, { superClass: r, isCtor: !0 });
    else if (y.type === "PropertyDefinition") {
      const m = y.key.type === "PrivateIdentifier";
      let v;
      if (m ? v = Symbol.for(`private:${y.key.name}`) : y.computed ? v = d(y.key, t) : v = y.key.type === "Identifier" ? y.key.name : d(y.key, t), y.static) {
        const _ = y.value ? d(y.value, t) : void 0;
        o.push({ key: v, value: _, isPrivate: m });
      } else
        c.push({ key: v, valueNode: y.value, isPrivate: m });
    } else y.type === "StaticBlock" && s.push(y);
  }
  let f;
  if (l) {
    let u;
    f = u = function(...y) {
      const m = {}, v = u.__privateInstanceMethods;
      v && v.forEach((L, k) => {
        m[k] = L;
      });
      for (let L = 0; L < c.length; L++) {
        const k = c[L];
        k.isPrivate && (m[k.key] = void 0);
      }
      (Object.keys(m).length > 0 || Object.getOwnPropertySymbols(m).length > 0) && n.set(this, m);
      for (let L = 0; L < c.length; L++) {
        const k = c[L], X = new S(t, !1);
        X.const("this", this);
        const P = k.valueNode ? d(k.valueNode, X) : void 0, Y = P && typeof P.next == "function" ? Array.from(P).pop() : P;
        k.isPrivate ? m[k.key] = Y : this[k.key] = Y;
      }
      l.__currentNewTarget = new.target || u;
      const _ = l.call(this, ...y);
      return delete l.__currentNewTarget, typeof _ == "object" && _ !== null ? _ : this;
    };
  } else
    f = function() {
      const u = {}, y = f.__privateInstanceMethods;
      y && y.forEach((m, v) => {
        u[v] = m;
      });
      for (let m = 0; m < c.length; m++) {
        const v = c[m];
        v.isPrivate && (u[v.key] = void 0);
      }
      (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
      for (let m = 0; m < c.length; m++) {
        const v = c[m], _ = new S(t, !1);
        _.const("this", this);
        const L = v.valueNode ? d(v.valueNode, _) : void 0;
        v.isPrivate ? u[v.key] = L : this[v.key] = L;
      }
      r && r.apply(this);
    };
  r && xe(f, r), w(f, "__privateInstanceFields", { value: n }), w(f, "__privateStaticFields", { value: i }), Re(e.body, t, { klass: f, superClass: r });
  for (let u = 0; u < o.length; u++) {
    const y = o[u];
    y.isPrivate ? i.set(y.key, y.value) : f[y.key] = y.value;
  }
  for (let u = 0; u < s.length; u++) {
    const y = s[u], m = new S(t, !0);
    m.const("this", f);
    for (let v = 0; v < y.body.length; v++)
      d(y.body[v], m);
  }
  return w(f, K, { value: !0 }), w(f, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), f;
}
function Ze(e, t, r) {
  const { value: n } = r, i = e.left, a = new S(t);
  i.type === "VariableDeclaration" ? W(i, a, { feed: n }) : i.type === "Identifier" ? R(i, t, { getVar: !0 }).set(n) : O(i, t, { feed: n });
  let s;
  return e.body.type === "BlockStatement" ? s = M(e.body, a, { invasived: !0 }) : s = d(e.body, a), s;
}
const be = class be {
  constructor(t = {}) {
    this.options = {}, this.scope = new S(null, !0), this.exports = {};
    let { ecmaVer: r = "latest", sandBox: n = !0 } = t;
    if (r !== "latest" && (r = r - (r < 2015 ? 0 : 2009), [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(r) === -1))
      throw new Error("unsupported ecmaVer");
    if (this.options.ecmaVersion = r, n) {
      const i = lt();
      this.scope.let("window", i), this.scope.let("this", i);
    } else
      this.scope.let("window", h), this.scope.let("this", h);
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
    return typeof r == "function" ? r(t, $({}, this.options)) : me(t, this.options);
  }
  run(t) {
    const r = typeof t == "string" ? me(t, this.options) : t;
    ge(r, this.scope), d(r, this.scope);
  }
};
be.version = ct;
let Se = be;
export {
  Se as default
};
//# sourceMappingURL=sval.js.map
