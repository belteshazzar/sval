import { parse as ve } from "acorn";
const Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Me;
  },
  get ClassDeclaration() {
    return Qt;
  },
  get FunctionDeclaration() {
    return Zt;
  },
  get MethodDefinition() {
    return Ve;
  },
  get VariableDeclaration() {
    return W;
  },
  get VariableDeclarator() {
    return Be;
  }
}, Symbol.toStringTag, { value: "Module" })), et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return He;
  },
  get ClassDeclaration() {
    return zr;
  },
  get FunctionDeclaration() {
    return qr;
  },
  get MethodDefinition() {
    return Xe;
  },
  get VariableDeclaration() {
    return L;
  },
  get VariableDeclarator() {
    return Ge;
  }
}, Symbol.toStringTag, { value: "Module" })), le = Object.freeze, v = Object.defineProperty, R = Object.getOwnPropertyDescriptor, tt = Object.prototype.hasOwnProperty;
function rt(e, r) {
  return tt.call(e, r);
}
const ae = Object.getOwnPropertyNames, be = Object.setPrototypeOf;
function nt(e, r) {
  be ? be(e, r) : e.__proto__ = r;
}
const we = Object.getPrototypeOf;
function it(e) {
  return we ? we(e) : e.__proto__;
}
const st = Object.getOwnPropertyDescriptor;
function ke(e, r, t) {
  for (; r; ) {
    const n = st(r, t), i = typeof n < "u" && typeof n.writable > "u" && typeof n[e] == "function" && n[e];
    if (i)
      return i;
    r = it(r);
  }
}
function xe(e, r) {
  return ke("get", e, r);
}
function Ie(e, r) {
  return ke("set", e, r);
}
const ee = Object.create;
function _e(e, r) {
  nt(e, r), e.prototype = ee(r.prototype, {
    constructor: {
      value: e,
      writable: !0
    }
  });
}
function at(e) {
  for (let r = 1; r < arguments.length; ++r) {
    const t = arguments[r];
    for (const n in t)
      rt(t, n) && (e[n] = t[n]);
  }
  return e;
}
const F = Object.assign || at;
let Z = [], p = ee(null);
try {
  if (!window.Object) throw 0;
  Z = ae(p = window).filter((e) => e !== "webkitStorageInfo");
} catch {
  try {
    if (!global.Object) throw 0;
    Z = ae(p = global).filter((r) => r !== "GLOBAL" && r !== "root");
  } catch {
    try {
      p.Object = Object;
    } catch {
    }
    try {
      p.Function = Function;
    } catch {
    }
    try {
      p.Array = Array;
    } catch {
    }
    try {
      p.Number = Number;
    } catch {
    }
    try {
      p.parseFloat = parseFloat;
    } catch {
    }
    try {
      p.parseInt = parseInt;
    } catch {
    }
    try {
      p.Infinity = 1 / 0;
    } catch {
    }
    try {
      p.NaN = NaN;
    } catch {
    }
    try {
      p.undefined = void 0;
    } catch {
    }
    try {
      p.Boolean = Boolean;
    } catch {
    }
    try {
      p.String = String;
    } catch {
    }
    try {
      p.Symbol = Symbol;
    } catch {
    }
    try {
      p.Date = Date;
    } catch {
    }
    try {
      p.Promise = Promise;
    } catch {
    }
    try {
      p.RegExp = RegExp;
    } catch {
    }
    try {
      p.Error = Error;
    } catch {
    }
    try {
      p.EvalError = EvalError;
    } catch {
    }
    try {
      p.RangeError = RangeError;
    } catch {
    }
    try {
      p.ReferenceError = ReferenceError;
    } catch {
    }
    try {
      p.SyntaxError = SyntaxError;
    } catch {
    }
    try {
      p.TypeError = TypeError;
    } catch {
    }
    try {
      p.URIError = URIError;
    } catch {
    }
    try {
      p.JSON = JSON;
    } catch {
    }
    try {
      p.Math = Math;
    } catch {
    }
    try {
      p.console = console;
    } catch {
    }
    try {
      p.Intl = Intl;
    } catch {
    }
    try {
      p.ArrayBuffer = ArrayBuffer;
    } catch {
    }
    try {
      p.Uint8Array = Uint8Array;
    } catch {
    }
    try {
      p.Int8Array = Int8Array;
    } catch {
    }
    try {
      p.Uint16Array = Uint16Array;
    } catch {
    }
    try {
      p.Int16Array = Int16Array;
    } catch {
    }
    try {
      p.Uint32Array = Uint32Array;
    } catch {
    }
    try {
      p.Int32Array = Int32Array;
    } catch {
    }
    try {
      p.Float32Array = Float32Array;
    } catch {
    }
    try {
      p.Float64Array = Float64Array;
    } catch {
    }
    try {
      p.Uint8ClampedArray = Uint8ClampedArray;
    } catch {
    }
    try {
      p.DataView = DataView;
    } catch {
    }
    try {
      p.Map = Map;
    } catch {
    }
    try {
      p.Set = Set;
    } catch {
    }
    try {
      p.WeakMap = WeakMap;
    } catch {
    }
    try {
      p.WeakSet = WeakSet;
    } catch {
    }
    try {
      p.Proxy = Proxy;
    } catch {
    }
    try {
      p.Reflect = Reflect;
    } catch {
    }
    try {
      p.decodeURI = decodeURI;
    } catch {
    }
    try {
      p.decodeURIComponent = decodeURIComponent;
    } catch {
    }
    try {
      p.encodeURI = encodeURI;
    } catch {
    }
    try {
      p.encodeURIComponent = encodeURIComponent;
    } catch {
    }
    try {
      p.escape = escape;
    } catch {
    }
    try {
      p.unescape = unescape;
    } catch {
    }
    try {
      p.eval = eval;
    } catch {
    }
    try {
      p.isFinite = isFinite;
    } catch {
    }
    try {
      p.isNaN = isNaN;
    } catch {
    }
    try {
      p.SharedArrayBuffer = SharedArrayBuffer;
    } catch {
    }
    try {
      p.Atomics = Atomics;
    } catch {
    }
    try {
      p.WebAssembly = WebAssembly;
    } catch {
    }
    try {
      p.clearInterval = clearInterval;
    } catch {
    }
    try {
      p.clearTimeout = clearTimeout;
    } catch {
    }
    try {
      p.setInterval = setInterval;
    } catch {
    }
    try {
      p.setTimeout = setTimeout;
    } catch {
    }
    try {
      p.crypto = crypto;
    } catch {
    }
    Z = ae(p);
  }
}
p.Symbol && (!p.Symbol.iterator && (p.Symbol.iterator = $("iterator")), !p.Symbol.asyncIterator && (p.Symbol.asyncIterator = $("asynciterator")));
const $e = ee({});
for (let e = 0; e < Z.length; e++) {
  const r = Z[e];
  try {
    $e[r] = p[r];
  } catch {
  }
}
const Q = $("window");
function lt() {
  return F(ee({ [Q]: p }), $e);
}
function $(e) {
  return e + Math.random().toString(36).substring(2);
}
function ot(e) {
  let r;
  if (typeof Symbol == "function" && (r = e[Symbol.asyncIterator], !r && (r = e[Symbol.iterator])), r)
    return r.call(e);
  if (typeof e.next == "function")
    return e;
  {
    let t = 0;
    return {
      next() {
        return e && t >= e.length && (e = void 0), { value: e && e[t++], done: !e };
      }
    };
  }
}
const ct = "0.4.8", V = { RES: void 0 }, b = { RES: void 0 }, k = $("continue"), x = $("break"), oe = $("super"), B = $("supercall"), ce = $("noctor"), K = $("clsctor"), ue = $("newtarget"), _ = $("noinit"), O = $("deadzone");
class se {
  constructor(r, t) {
    this.kind = r, this.value = t;
  }
  get() {
    return this.value;
  }
  set(r) {
    if (this.kind === "const")
      throw new TypeError("Assignment to constant variable");
    return this.value = r;
  }
}
class A {
  constructor(r, t) {
    this.object = r, this.property = t;
  }
  get() {
    return this.object[this.property];
  }
  set(r) {
    return this.object[this.property] = r, !0;
  }
  del() {
    return delete this.object[this.property];
  }
}
class Oe {
  constructor(r, t) {
    this.map = r, this.key = t;
  }
  get() {
    return this.map.get(this.key);
  }
  set(r) {
    return this.map.set(this.key, r), !0;
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
  constructor(r = null, t = !1) {
    this.context = ee(null), this.parent = r, this.isolated = t;
  }
  /**
   * Get global scope
   */
  global() {
    let r = this;
    for (; r.parent; )
      r = r.parent;
    return r;
  }
  /**
   * Clone current scope
   */
  clone() {
    const r = new S(this.parent, this.isolated);
    for (const t in this.context) {
      const n = this.context[t];
      r[n.kind](t, n.get());
    }
    return r;
  }
  /**
   * Find a variable along scope chain
   * @param name variable identifier name
   */
  find(r) {
    if (this.context[r])
      return this.context[r];
    if (this.parent)
      return this.parent.find(r);
    {
      const t = this.global().find("window").get();
      return r in t ? new A(t, r) : null;
    }
  }
  /**
   * Declare a var variable
   * @param name variable identifier name
   * @param value variable value
   */
  var(r, t) {
    let n = this;
    for (; n.parent && !n.isolated; )
      n = n.parent;
    const i = n.context[r];
    if (!i)
      n.context[r] = new se("var", t === _ ? void 0 : t);
    else if (i.kind === "var")
      t !== _ && i.set(t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
    if (!n.parent) {
      const s = n.find("window").get();
      t !== _ && v(s, r, { value: t, writable: !0, enumerable: !0 });
    }
  }
  /**
   * Declare a let variable
   * @param name variable identifier name
   * @param value variable value
   */
  let(r, t) {
    const n = this.context[r];
    if (!n || n.get() === O)
      this.context[r] = new se("let", t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
  }
  /**
   * Declare a const variable
   * @param name variable identifier name
   * @param value variable value
   */
  const(r, t) {
    const n = this.context[r];
    if (!n || n.get() === O)
      this.context[r] = new se("const", t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
  }
  /**
   * Declare a function
   * @param name function name
   * @param value function
   */
  func(r, t) {
    const n = this.context[r];
    if (!n || n.kind === "var")
      this.context[r] = new se("var", t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
  }
}
function M(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const s = r.find(e.name);
  if (s) {
    if (n)
      return s;
    {
      const a = s.get();
      if (a === O)
        throw new ReferenceError(`${e.name} is not defined`);
      return a;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function ut(e, r) {
  return Symbol.for(`private:${e.name}`);
}
const ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: M,
  PrivateIdentifier: ut
}, Symbol.toStringTag, { value: "Module" }));
function Pe(e, r) {
  return e.value;
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Pe
}, Symbol.toStringTag, { value: "Module" }));
function pt(e, r) {
  const t = r.find(B);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function ht(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(re(i, r)) : t.push(h(i, r));
  }
  return t;
}
function dt(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      F(t, re(i, r));
    else if (i.type === "Property") {
      let s;
      const a = i.key;
      i.computed ? s = h(a, r) : a.type === "Identifier" ? s = a.name : s = "" + Pe(a);
      const l = h(i.value, r), c = i.kind;
      if (c === "init")
        t[s] = l;
      else if (c === "get") {
        const o = R(t, s);
        v(t, s, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = R(t, s);
        v(t, s, {
          get: o && o.get,
          set: l,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return t;
}
function gt(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = z(e, t);
    return t.const(e.id.name, n), n;
  } else
    return z(e, r);
}
function mt(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +h(t, r);
    case "-":
      return -h(t, r);
    case "!":
      return !h(t, r);
    case "~":
      return ~h(t, r);
    case "void":
      return void h(t, r);
    case "typeof":
      return t.type === "Identifier" ? typeof M(t, r, { throwErr: !1 }) : typeof h(t, r);
    case "delete":
      if (t.type === "MemberExpression")
        return te(t, r, { getVar: !0 }).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return h(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function vt(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = M(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = te(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function bt(e, r) {
  const t = h(e.left, r), n = h(e.right, r);
  switch (e.operator) {
    case "==":
      return t == n;
    case "!=":
      return t != n;
    case "===":
      return t === n;
    case "!==":
      return t !== n;
    case "<":
      return t < n;
    case "<=":
      return t <= n;
    case ">":
      return t > n;
    case ">=":
      return t >= n;
    case "<<":
      return t << n;
    case ">>":
      return t >> n;
    case ">>>":
      return t >>> n;
    case "+":
      return t + n;
    case "-":
      return t - n;
    case "*":
      return t * n;
    case "**":
      return t ** n;
    case "/":
      return t / n;
    case "%":
      return t % n;
    case "|":
      return t | n;
    case "^":
      return t ^ n;
    case "&":
      return t & n;
    case "in":
      return t in n;
    case "instanceof":
      return t instanceof n;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function wt(e, r) {
  const t = h(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = M(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const s = r.global().find("window").get();
      i = new A(s, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = te(n, r, { getVar: !0 });
  else
    return j(n, r, { feed: t });
  switch (e.operator) {
    case "=":
      return i.set(t), i.get();
    case "+=":
      return i.set(i.get() + t), i.get();
    case "-=":
      return i.set(i.get() - t), i.get();
    case "*=":
      return i.set(i.get() * t), i.get();
    case "/=":
      return i.set(i.get() / t), i.get();
    case "%=":
      return i.set(i.get() % t), i.get();
    case "**=":
      return i.set(i.get() ** t), i.get();
    case "<<=":
      return i.set(i.get() << t), i.get();
    case ">>=":
      return i.set(i.get() >> t), i.get();
    case ">>>=":
      return i.set(i.get() >>> t), i.get();
    case "|=":
      return i.set(i.get() | t), i.get();
    case "^=":
      return i.set(i.get() ^ t), i.get();
    case "&=":
      return i.set(i.get() & t), i.get();
    case "||=":
      return i.get() || i.set(t), i.get();
    case "&&=":
      return i.get() && i.set(t), i.get();
    case "??=": {
      const s = i.get();
      return s == null && i.set(t), i.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function St(e, r) {
  switch (e.operator) {
    case "||":
      return h(e.left, r) || h(e.right, r);
    case "&&":
      return h(e.left, r) && h(e.right, r);
    case "??": {
      const t = h(e.left, r);
      return t ?? h(e.right, r);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function te(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let s;
  if (e.object.type === "Super" ? s = Fe(e.object, r, { getProto: !0 }) : s = h(e.object, r), e.optional && s == null)
    return;
  if (n) return s;
  const a = e.property.type === "PrivateIdentifier";
  let l;
  if (a)
    if (l = Symbol.for(`private:${e.property.name}`), typeof s == "function") {
      const o = s.__privateStaticFields;
      if (!o || !o.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Oe(o, l) : o.get(l);
    } else {
      const o = s.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const u = f.get(s);
      if (!u || !(l in u))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new A(u, l) : u[l];
    }
  else e.computed ? l = h(e.property, r) : l = e.property.name;
  if (i) {
    const c = Ie(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get(), f = $(l);
      return v(o, f, { set: c }), new A(o, f);
    } else
      return new A(s, l);
  } else {
    const c = xe(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get();
      return c.call(o);
    } else
      return s[l];
  }
}
function Et(e, r) {
  return h(e.test, r) ? h(e.consequent, r) : h(e.alternate, r);
}
function kt(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = te(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.property.type === "PrivateIdentifier")
      if (a = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const o = n.__privateStaticFields;
        t = o ? o.get(a) : void 0;
      } else {
        const o = n.constructor, f = o && o.__privateInstanceFields, u = f ? f.get(n) : null;
        t = u ? u[a] : void 0;
      }
    else if (e.callee.computed)
      if (a = h(e.callee.property, r), e.callee.object.type === "Super") {
        const c = r.find("this").get();
        t = n[a].bind(c);
      } else
        t = n[a];
    else if (a = e.callee.property.name, e.callee.object.type === "Super") {
      const c = r.find("this").get();
      t = n[a].bind(c);
    } else
      t = n[a];
    if (e.optional && t == null)
      return;
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    try {
      if (t[K] === !0)
        throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
    } catch (c) {
      if (c instanceof TypeError && c.message.includes("Class constructor"))
        throw c;
    }
  } else {
    if (n = r.find("this").get(), t = h(e.callee, r), e.optional && t == null)
      return;
    let a = !1;
    try {
      a = t[K] === !0;
    } catch {
    }
    if (typeof t != "function" || e.callee.type !== "Super" && a) {
      let l;
      if (e.callee.type === "Identifier")
        l = e.callee.name;
      else
        try {
          l = JSON.stringify(t);
        } catch {
          l = "" + t;
        }
      throw typeof t != "function" ? new TypeError(`${l} is not a function`) : new TypeError(`Class constructor ${l} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let a = 0; a < e.arguments.length; a++) {
    const l = e.arguments[a];
    l.type === "SpreadElement" ? i = i.concat(re(l, r)) : i.push(h(l, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(B).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(B).set(!0);
  }
  let s = !1;
  try {
    s = n && n[Q];
  } catch {
  }
  if (s && t.toString().indexOf("[native code]") !== -1)
    try {
      return t.apply(n[Q], i);
    } catch {
      return t.apply(n, i);
    }
  return t.apply(n, i);
}
function xt(e, r) {
  const t = h(e.callee, r);
  let n = !1;
  try {
    n = t[ce];
  } catch {
  }
  if (typeof t != "function") {
    let s;
    if (e.callee.type === "Identifier")
      s = e.callee.name;
    else
      try {
        s = JSON.stringify(t);
      } catch {
        s = "" + t;
      }
    throw new TypeError(`${s} is not a constructor`);
  } else if (n)
    throw new TypeError(`${t.name || "(intermediate value)"} is not a constructor`);
  let i = [];
  for (let s = 0; s < e.arguments.length; s++) {
    const a = e.arguments[s];
    a.type === "SpreadElement" ? i = i.concat(re(a, r)) : i.push(h(a, r));
  }
  return new t(...i);
}
function It(e, r) {
  return r.find(ue).get();
}
function _t(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = h(e.expressions[n], r);
  return t;
}
function $t(e, r) {
  return z(e, r);
}
function Ot(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", s, a;
  for (; s = t.shift(); )
    i += je(s), a = n.shift(), a && (i += h(a, r));
  return i;
}
function Pt(e, r) {
  const t = h(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), s = n.map((c) => c.value.raw);
  v(i, "raw", {
    value: le(s)
  });
  const a = e.quasi.expressions, l = [];
  if (a)
    for (let c = 0; c < a.length; c++)
      l.push(h(a[c], r));
  return t(le(i), ...l);
}
function je(e, r) {
  return e.value.raw;
}
function jt(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = de(e, t);
    return t.const(e.id.name, n), n;
  } else
    return de(e, r);
}
function Fe(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(oe).get();
  return n ? i.prototype : i;
}
function re(e, r) {
  return h(e.argument, r);
}
function Ft(e, r) {
  return h(e.expression, r);
}
const Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: ht,
  ArrowFunctionExpression: $t,
  AssignmentExpression: wt,
  BinaryExpression: bt,
  CallExpression: kt,
  ChainExpression: Ft,
  ClassExpression: jt,
  ConditionalExpression: Et,
  FunctionExpression: gt,
  LogicalExpression: St,
  MemberExpression: te,
  MetaProperty: It,
  NewExpression: xt,
  ObjectExpression: dt,
  SequenceExpression: _t,
  SpreadElement: re,
  Super: Fe,
  TaggedTemplateExpression: Pt,
  TemplateElement: je,
  TemplateLiteral: Ot,
  ThisExpression: pt,
  UnaryExpression: mt,
  UpdateExpression: vt
}, Symbol.toStringTag, { value: "Module" }));
function Dt(e, r) {
  h(e.expression, r);
}
function N(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, s = n ? r : new S(r);
  i || ge(e, s, { onlyBlock: !0 });
  for (let a = 0; a < e.body.length; a++) {
    const l = h(e.body[a], s);
    if (l === x || l === k || l === b)
      return l;
  }
}
function Tt() {
}
function At() {
  debugger;
}
function Rt(e, r) {
  return b.RES = e.argument ? h(e.argument, r) : void 0, b;
}
function Bt() {
  return x;
}
function Mt() {
  return k;
}
function Vt(e, r) {
  return h(e.test, r) ? h(e.consequent, r) : h(e.alternate, r);
}
function Nt(e, r) {
  const t = h(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const s = e.cases[i];
    if (!n && (!s.test || h(s.test, r) === t) && (n = !0), n) {
      const a = Ce(s, r);
      if (a === x)
        break;
      if (a === k || a === b)
        return a;
    }
  }
}
function Ce(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = h(e.consequent[t], r);
    if (n === x || n === k || n === b)
      return n;
  }
}
function Ut(e, r) {
  throw h(e.argument, r);
}
function qt(e, r) {
  try {
    return N(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new S(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const s = i.name;
          n.var(s, t);
        } else
          j(i, r, { feed: t });
      return De(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = N(e.finalizer, r);
      if (t === x || t === k || t === b)
        return t;
    }
  }
}
function De(e, r) {
  return N(e.body, r, { invasived: !0 });
}
function zt(e, r) {
  for (; h(e.test, r); ) {
    const t = h(e.body, r);
    if (t === x)
      break;
    if (t === k)
      continue;
    if (t === b)
      return t;
  }
}
function Wt(e, r) {
  do {
    const t = h(e.body, r);
    if (t === x)
      break;
    if (t === k)
      continue;
    if (t === b)
      return t;
  } while (h(e.test, r));
}
function Lt(e, r) {
  const t = new S(r);
  for (h(e.init, t); !e.test || h(e.test, t); h(e.update, t)) {
    const n = new S(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = N(e.body, n, { invasived: !0 }) : i = h(e.body, n), i === x)
      break;
    if (i === k)
      continue;
    if (i === b)
      return i;
  }
}
function Kt(e, r) {
  for (const t in h(e.right, r)) {
    const n = Ze(e, r, { value: t });
    if (n === x)
      break;
    if (n === k)
      continue;
    if (n === b)
      return n;
  }
}
function Jt(e, r) {
  const t = h(e.right, r);
  for (const n of t) {
    const i = Ze(e, r, { value: n });
    if (i === x)
      break;
    if (i === k)
      continue;
    if (i === b)
      return i;
  }
}
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: N,
  BreakStatement: Bt,
  CatchClause: De,
  ContinueStatement: Mt,
  DebuggerStatement: At,
  DoWhileStatement: Wt,
  EmptyStatement: Tt,
  ExpressionStatement: Dt,
  ForInStatement: Kt,
  ForOfStatement: Jt,
  ForStatement: Lt,
  IfStatement: Vt,
  ReturnStatement: Rt,
  SwitchCase: Ce,
  SwitchStatement: Nt,
  ThrowStatement: Ut,
  TryStatement: qt,
  WhileStatement: zt
}, Symbol.toStringTag, { value: "Module" }));
function Te(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = {} } = t, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (s || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? r[n](f.name, s ? O : n === "var" ? _ : void 0) : j(f, r, { kind: n, hoist: i, onlyBlock: s });
        } else
          J(o, r, { kind: n, hoist: i, onlyBlock: s });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = h(o.key, r) : f = o.key.name, l.push(f);
      const u = o.value;
      u.type === "Identifier" ? r[n](u.name, a[f]) : j(u, r, { kind: n, feed: a[f] });
    } else {
      const f = F({}, a);
      for (let u = 0; u < l.length; u++) delete f[l[u]];
      J(o, r, { kind: n, feed: f });
    }
  }
}
function Ae(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (s || n === "var") && (o.type === "Identifier" ? r[n](o.name, s ? O : n === "var" ? _ : void 0) : j(o, r, { kind: n, hoist: i, onlyBlock: s }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, a[c]);
        else {
          const f = M(o, r, { getVar: !0 });
          f.set(a[c]), l.push(f.get());
        }
      else o.type === "RestElement" ? J(o, r, { kind: n, feed: a.slice(c) }) : j(o, r, { kind: n, feed: a[c] });
  }
  if (l.length)
    return l;
}
function J(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = e.argument;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? O : n === "var" ? _ : void 0) : j(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? n ? r[n](l.name, a) : M(l, r, { getVar: !0 }).set(a) : j(l, r, { kind: n, feed: a });
}
function Re(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = h(e.right, r) } = t, l = e.left;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? O : n === "var" ? _ : void 0) : j(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? r[n](l.name, a) : j(l, r, { kind: n, feed: a });
}
const Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Ae,
  AssignmentPattern: Re,
  ObjectPattern: Te,
  RestElement: J
}, Symbol.toStringTag, { value: "Module" }));
function Xt(e, r) {
  for (let t = 0; t < e.body.length; t++)
    h(e.body[t], r);
}
const Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: Xt
}, Symbol.toStringTag, { value: "Module" }));
let fe;
function h(e, r) {
  if (!e) return;
  fe || (fe = F(
    {},
    Qe,
    Ct,
    ft,
    Gt,
    yt,
    Ht,
    Yt
  ));
  const t = fe[e.type];
  if (t)
    return t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function Zt(e, r) {
  r.func(e.id.name, z(e, r));
}
function W(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    Be(e.declarations[n], r, F({ kind: i }, t));
  }
}
function Be(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a } = t;
  if (i)
    (s || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, s ? O : n === "var" ? _ : void 0) : j(e.id, r, { kind: n, hoist: i, onlyBlock: s }));
  else {
    const l = "feed" in t, c = l ? a : h(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? r.var(o, _) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && v(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      j(e.id, r, { kind: n, feed: c });
  }
}
function Qt(e, r) {
  r.func(e.id.name, de(e, r));
}
function Me(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let s = 0; s < e.body.length; s++) {
    const a = e.body[s];
    if (a.type === "MethodDefinition")
      Ve(a, r, { klass: n, superClass: i });
    else {
      if (a.type === "PropertyDefinition")
        continue;
      if (a.type === "StaticBlock")
        continue;
    }
  }
}
function Ve(e, r, t = {}) {
  const { klass: n, superClass: i } = t, s = e.key.type === "PrivateIdentifier";
  let a;
  if (s)
    a = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    a = h(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = z(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (s)
        if (e.static) {
          const c = n.__privateStaticFields;
          c && c.set(a, l);
        } else
          n.__privateInstanceMethods || v(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(a, l);
      else {
        const c = e.static ? n : n.prototype;
        v(c, a, {
          value: l,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (s)
        throw new Error("Private getters not yet supported");
      const c = e.static ? n : n.prototype, o = R(c, a);
      v(c, a, {
        get: l,
        set: o && o.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (s)
        throw new Error("Private setters not yet supported");
      const c = e.static ? n : n.prototype, o = R(c, a);
      v(c, a, {
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
function* H(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const s = r.find(e.name);
  if (s) {
    if (n)
      return s;
    {
      const a = s.get();
      if (a === O)
        throw new ReferenceError(`${e.name} is not defined`);
      return a;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function* er(e, r) {
  return Symbol.for(`private:${e.name}`);
}
const tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: H,
  PrivateIdentifier: er
}, Symbol.toStringTag, { value: "Module" }));
function* Ne(e, r) {
  return e.value;
}
const rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Ne
}, Symbol.toStringTag, { value: "Module" }));
function* nr(e, r) {
  const t = r.find(B);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function* ir(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(yield* ie(i, r)) : t.push(yield* d(i, r));
  }
  return t;
}
function* sr(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      F(t, yield* ie(i, r));
    else if (i.type === "Property") {
      let s;
      const a = i.key;
      i.computed ? s = yield* d(a, r) : a.type === "Identifier" ? s = a.name : s = "" + (yield* Ne(a));
      const l = yield* d(i.value, r), c = i.kind;
      if (c === "init")
        t[s] = l;
      else if (c === "get") {
        const o = R(t, s);
        v(t, s, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = R(t, s);
        v(t, s, {
          get: o && o.get,
          set: l,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return t;
}
function* ar(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = q(e, t);
    return t.const(e.id.name, n), n;
  } else
    return q(e, r);
}
function* lr(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +(yield* d(t, r));
    case "-":
      return -(yield* d(t, r));
    case "!":
      return !(yield* d(t, r));
    case "~":
      return ~(yield* d(t, r));
    case "void":
      return void (yield* d(t, r));
    case "typeof":
      return t.type === "Identifier" ? typeof (yield* H(t, r, { throwErr: !1 })) : typeof (yield* d(t, r));
    case "delete":
      if (t.type === "MemberExpression")
        return (yield* ne(t, r, { getVar: !0 })).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* d(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* or(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = yield* H(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = yield* ne(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function* cr(e, r) {
  const t = yield* d(e.left, r), n = yield* d(e.right, r);
  switch (e.operator) {
    case "==":
      return t == n;
    case "!=":
      return t != n;
    case "===":
      return t === n;
    case "!==":
      return t !== n;
    case "<":
      return t < n;
    case "<=":
      return t <= n;
    case ">":
      return t > n;
    case ">=":
      return t >= n;
    case "<<":
      return t << n;
    case ">>":
      return t >> n;
    case ">>>":
      return t >>> n;
    case "+":
      return t + n;
    case "-":
      return t - n;
    case "*":
      return t * n;
    case "**":
      return t ** n;
    case "/":
      return t / n;
    case "%":
      return t % n;
    case "|":
      return t | n;
    case "^":
      return t ^ n;
    case "&":
      return t & n;
    case "in":
      return t in n;
    case "instanceof":
      return t instanceof n;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* ur(e, r) {
  const t = yield* d(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* H(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const s = r.global().find("window").get();
      i = new A(s, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = yield* ne(n, r, { getVar: !0 });
  else
    return yield* P(n, r, { feed: t });
  switch (e.operator) {
    case "=":
      return i.set(t), i.get();
    case "+=":
      return i.set(i.get() + t), i.get();
    case "-=":
      return i.set(i.get() - t), i.get();
    case "*=":
      return i.set(i.get() * t), i.get();
    case "/=":
      return i.set(i.get() / t), i.get();
    case "%=":
      return i.set(i.get() % t), i.get();
    case "**=":
      return i.set(i.get() ** t), i.get();
    case "<<=":
      return i.set(i.get() << t), i.get();
    case ">>=":
      return i.set(i.get() >> t), i.get();
    case ">>>=":
      return i.set(i.get() >>> t), i.get();
    case "|=":
      return i.set(i.get() | t), i.get();
    case "^=":
      return i.set(i.get() ^ t), i.get();
    case "&=":
      return i.set(i.get() & t), i.get();
    case "||=":
      return i.get() || i.set(t), i.get();
    case "&&=":
      return i.get() && i.set(t), i.get();
    case "??=": {
      const s = i.get();
      return s == null && i.set(t), i.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* fr(e, r) {
  switch (e.operator) {
    case "||":
      return (yield* d(e.left, r)) || (yield* d(e.right, r));
    case "&&":
      return (yield* d(e.left, r)) && (yield* d(e.right, r));
    case "??": {
      const t = yield* d(e.left, r);
      return t ?? (yield* d(e.right, r));
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* ne(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let s;
  if (e.object.type === "Super" ? s = yield* qe(e.object, r, { getProto: !0 }) : s = yield* d(e.object, r), e.optional && s == null)
    return;
  if (n) return s;
  const a = e.property.type === "PrivateIdentifier";
  let l;
  if (a)
    if (l = Symbol.for(`private:${e.property.name}`), typeof s == "function") {
      const o = s.__privateStaticFields;
      if (!o || !o.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Oe(o, l) : o.get(l);
    } else {
      const o = s.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const u = f.get(s);
      if (!u || !(l in u))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new A(u, l) : u[l];
    }
  else e.computed ? l = yield* d(e.property, r) : l = e.property.name;
  if (i) {
    const c = Ie(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get(), f = $(l);
      return v(o, f, { set: c }), new A(o, f);
    } else
      return new A(s, l);
  } else {
    const c = xe(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get();
      return c.call(o);
    } else
      return s[l];
  }
}
function* yr(e, r) {
  return (yield* d(e.test, r)) ? yield* d(e.consequent, r) : yield* d(e.alternate, r);
}
function* pr(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* ne(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.property.type === "PrivateIdentifier")
      if (a = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const o = n.__privateStaticFields;
        t = o ? o.get(a) : void 0;
      } else {
        const o = n.constructor, f = o && o.__privateInstanceFields, u = f ? f.get(n) : null;
        t = u ? u[a] : void 0;
      }
    else if (e.callee.computed)
      if (a = yield* d(e.callee.property, r), e.callee.object.type === "Super") {
        const c = r.find("this").get();
        t = n[a].bind(c);
      } else
        t = n[a];
    else if (a = e.callee.property.name, e.callee.object.type === "Super") {
      const c = r.find("this").get();
      t = n[a].bind(c);
    } else
      t = n[a];
    if (e.optional && t == null)
      return;
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    try {
      if (t[K] === !0)
        throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
    } catch (c) {
      if (c instanceof TypeError && c.message.includes("Class constructor"))
        throw c;
    }
  } else {
    if (n = r.find("this").get(), t = yield* d(e.callee, r), e.optional && t == null)
      return;
    let a = !1;
    try {
      a = t[K] === !0;
    } catch {
    }
    if (typeof t != "function" || e.callee.type !== "Super" && a) {
      let l;
      if (e.callee.type === "Identifier")
        l = e.callee.name;
      else
        try {
          l = JSON.stringify(t);
        } catch {
          l = "" + t;
        }
      throw typeof t != "function" ? new TypeError(`${l} is not a function`) : new TypeError(`Class constructor ${l} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let a = 0; a < e.arguments.length; a++) {
    const l = e.arguments[a];
    l.type === "SpreadElement" ? i = i.concat(yield* ie(l, r)) : i.push(yield* d(l, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(B).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(B).set(!0);
  }
  let s = !1;
  try {
    s = n && n[Q];
  } catch {
  }
  if (s && t.toString().indexOf("[native code]") !== -1)
    try {
      return t.apply(n[Q], i);
    } catch {
      return t.apply(n, i);
    }
  return t.apply(n, i);
}
function* hr(e, r) {
  const t = yield* d(e.callee, r);
  let n = !1;
  try {
    n = t[ce];
  } catch {
  }
  if (typeof t != "function") {
    let s;
    if (e.callee.type === "Identifier")
      s = e.callee.name;
    else
      try {
        s = JSON.stringify(t);
      } catch {
        s = "" + t;
      }
    throw new TypeError(`${s} is not a constructor`);
  } else if (n)
    throw new TypeError(`${t.name || "(intermediate value)"} is not a constructor`);
  let i = [];
  for (let s = 0; s < e.arguments.length; s++) {
    const a = e.arguments[s];
    a.type === "SpreadElement" ? i = i.concat(yield* ie(a, r)) : i.push(yield* d(a, r));
  }
  return new t(...i);
}
function* dr(e, r) {
  return r.find(ue).get();
}
function* gr(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = yield* d(e.expressions[n], r);
  return t;
}
function* mr(e, r) {
  return q(e, r);
}
function* vr(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", s, a;
  for (; s = t.shift(); )
    i += yield* Ue(s), a = n.shift(), a && (i += yield* d(a, r));
  return i;
}
function* br(e, r) {
  const t = yield* d(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), s = n.map((c) => c.value.raw);
  v(i, "raw", {
    value: le(s)
  });
  const a = e.quasi.expressions, l = [];
  if (a)
    for (let c = 0; c < a.length; c++)
      l.push(yield* d(a[c], r));
  return t(le(i), ...l);
}
function* Ue(e, r) {
  return e.value.raw;
}
function* wr(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = yield* pe(e, t);
    return t.const(e.id.name, n), n;
  } else
    return yield* pe(e, r);
}
function* qe(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(oe).get();
  return n ? i.prototype : i;
}
function* ie(e, r) {
  return yield* d(e.argument, r);
}
function* Sr(e, r) {
  return yield* d(e.expression, r);
}
function* Er(e, r) {
  const t = yield* d(e.argument, r);
  return e.delegate ? yield* t : yield t;
}
function* kr(e, r) {
  return V.RES = yield* d(e.argument, r), yield V;
}
const xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: ir,
  ArrowFunctionExpression: mr,
  AssignmentExpression: ur,
  AwaitExpression: kr,
  BinaryExpression: cr,
  CallExpression: pr,
  ChainExpression: Sr,
  ClassExpression: wr,
  ConditionalExpression: yr,
  FunctionExpression: ar,
  LogicalExpression: fr,
  MemberExpression: ne,
  MetaProperty: dr,
  NewExpression: hr,
  ObjectExpression: sr,
  SequenceExpression: gr,
  SpreadElement: ie,
  Super: qe,
  TaggedTemplateExpression: br,
  TemplateElement: Ue,
  TemplateLiteral: vr,
  ThisExpression: nr,
  UnaryExpression: lr,
  UpdateExpression: or,
  YieldExpression: Er
}, Symbol.toStringTag, { value: "Module" }));
function* Ir(e, r) {
  yield* d(e.expression, r);
}
function* U(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, s = n ? r : new S(r);
  i || (yield* Ye(e, s, { onlyBlock: !0 }));
  for (let a = 0; a < e.body.length; a++) {
    const l = yield* d(e.body[a], s);
    if (l === x || l === k || l === b)
      return l;
  }
}
function* _r() {
}
function* $r() {
  debugger;
}
function* Or(e, r) {
  return b.RES = e.argument ? yield* d(e.argument, r) : void 0, b;
}
function* Pr() {
  return x;
}
function* jr() {
  return k;
}
function* Fr(e, r) {
  return (yield* d(e.test, r)) ? yield* d(e.consequent, r) : yield* d(e.alternate, r);
}
function* Cr(e, r) {
  const t = yield* d(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const s = e.cases[i];
    if (!n && (!s.test || (yield* d(s.test, r)) === t) && (n = !0), n) {
      const a = yield* ze(s, r);
      if (a === x)
        break;
      if (a === k || a === b)
        return a;
    }
  }
}
function* ze(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = yield* d(e.consequent[t], r);
    if (n === x || n === k || n === b)
      return n;
  }
}
function* Dr(e, r) {
  throw yield* d(e.argument, r);
}
function* Tr(e, r) {
  try {
    return yield* U(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new S(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const s = i.name;
          n.var(s, t);
        } else
          yield* P(i, r, { feed: t });
      return yield* We(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = yield* U(e.finalizer, r);
      if (t === x || t === k || t === b)
        return t;
    }
  }
}
function* We(e, r) {
  return yield* U(e.body, r, { invasived: !0 });
}
function* Ar(e, r) {
  for (; yield* d(e.test, r); ) {
    const t = yield* d(e.body, r);
    if (t === x)
      break;
    if (t === k)
      continue;
    if (t === b)
      return t;
  }
}
function* Rr(e, r) {
  do {
    const t = yield* d(e.body, r);
    if (t === x)
      break;
    if (t === k)
      continue;
    if (t === b)
      return t;
  } while (yield* d(e.test, r));
}
function* Br(e, r) {
  const t = new S(r);
  for (yield* d(e.init, t); !e.test || (yield* d(e.test, t)); yield* d(e.update, t)) {
    const n = new S(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = yield* U(e.body, n, { invasived: !0 }) : i = yield* d(e.body, n), i === x)
      break;
    if (i === k)
      continue;
    if (i === b)
      return i;
  }
}
function* Mr(e, r) {
  for (const t in yield* d(e.right, r)) {
    const n = yield* he(e, r, { value: t });
    if (n === x)
      break;
    if (n === k)
      continue;
    if (n === b)
      return n;
  }
}
function* Vr(e, r) {
  const t = yield* d(e.right, r);
  if (e.await) {
    const n = ot(t);
    let i;
    for (V.RES = n.next(), i = yield V; !i.done; V.RES = n.next(), i = yield V) {
      const s = yield* he(e, r, { value: i.value });
      if (s === x)
        break;
      if (s === k)
        continue;
      if (s === b)
        return s;
    }
  } else
    for (const n of t) {
      const i = yield* he(e, r, { value: n });
      if (i === x)
        break;
      if (i === k)
        continue;
      if (i === b)
        return i;
    }
}
const Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: U,
  BreakStatement: Pr,
  CatchClause: We,
  ContinueStatement: jr,
  DebuggerStatement: $r,
  DoWhileStatement: Rr,
  EmptyStatement: _r,
  ExpressionStatement: Ir,
  ForInStatement: Mr,
  ForOfStatement: Vr,
  ForStatement: Br,
  IfStatement: Fr,
  ReturnStatement: Or,
  SwitchCase: ze,
  SwitchStatement: Cr,
  ThrowStatement: Dr,
  TryStatement: Tr,
  WhileStatement: Ar
}, Symbol.toStringTag, { value: "Module" }));
function* Le(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = {} } = t, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (s || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? r[n](f.name, s ? O : n === "var" ? _ : void 0) : yield* P(f, r, { kind: n, hoist: i, onlyBlock: s });
        } else
          yield* G(o, r, { kind: n, hoist: i, onlyBlock: s });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = yield* d(o.key, r) : f = o.key.name, l.push(f);
      const u = o.value;
      u.type === "Identifier" ? r[n](u.name, a[f]) : yield* P(u, r, { kind: n, feed: a[f] });
    } else {
      const f = F({}, a);
      for (let u = 0; u < l.length; u++) delete f[l[u]];
      yield* G(o, r, { kind: n, feed: f });
    }
  }
}
function* Ke(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (s || n === "var") && (o.type === "Identifier" ? r[n](o.name, s ? O : n === "var" ? _ : void 0) : yield* P(o, r, { kind: n, hoist: i, onlyBlock: s }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, a[c]);
        else {
          const f = yield* H(o, r, { getVar: !0 });
          f.set(a[c]), l.push(f.get());
        }
      else o.type === "RestElement" ? yield* G(o, r, { kind: n, feed: a.slice(c) }) : yield* P(o, r, { kind: n, feed: a[c] });
  }
  if (l.length)
    return l;
}
function* G(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = e.argument;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? O : n === "var" ? _ : void 0) : yield* P(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? n ? r[n](l.name, a) : (yield* H(l, r, { getVar: !0 })).set(a) : yield* P(l, r, { kind: n, feed: a });
}
function* Je(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = yield* d(e.right, r) } = t, l = e.left;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? O : n === "var" ? _ : void 0) : yield* P(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? r[n](l.name, a) : yield* P(l, r, { kind: n, feed: a });
}
const Ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Ke,
  AssignmentPattern: Je,
  ObjectPattern: Le,
  RestElement: G
}, Symbol.toStringTag, { value: "Module" }));
let ye;
function* d(e, r) {
  if (!e) return;
  ye || (ye = F(
    {},
    et,
    xr,
    tr,
    Nr,
    rr,
    Ur
    /*<add>*/
    /*program*/
    /*</add>*/
  ));
  const t = ye[e.type];
  if (t)
    return yield* t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function* qr(e, r) {
  r.func(e.id.name, q(e, r));
}
function* L(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* Ge(e.declarations[n], r, F({ kind: i }, t));
  }
}
function* Ge(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a } = t;
  if (i)
    (s || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, s ? O : n === "var" ? _ : void 0) : yield* P(e.id, r, { kind: n, hoist: i, onlyBlock: s }));
  else {
    const l = "feed" in t, c = l ? a : yield* d(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? r.var(o, _) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && v(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      yield* P(e.id, r, { kind: n, feed: c });
  }
}
function* zr(e, r) {
  r.func(e.id.name, yield* pe(e, r));
}
function* He(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let s = 0; s < e.body.length; s++) {
    const a = e.body[s];
    if (a.type === "MethodDefinition")
      yield* Xe(a, r, { klass: n, superClass: i });
    else {
      if (a.type === "PropertyDefinition")
        continue;
      if (a.type === "StaticBlock")
        continue;
    }
  }
}
function* Xe(e, r, t = {}) {
  const { klass: n, superClass: i } = t, s = e.key.type === "PrivateIdentifier";
  let a;
  if (s)
    a = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    a = yield* d(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = yield* q(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (s)
        if (e.static) {
          const c = n.__privateStaticFields;
          c && c.set(a, l);
        } else
          n.__privateInstanceMethods || v(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(a, l);
      else {
        const c = e.static ? n : n.prototype;
        v(c, a, {
          value: l,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (s)
        throw new Error("Private getters not yet supported");
      const c = e.static ? n : n.prototype, o = R(c, a);
      v(c, a, {
        get: l,
        set: o && o.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (s)
        throw new Error("Private setters not yet supported");
      const c = e.static ? n : n.prototype, o = R(c, a);
      v(c, a, {
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
function Se(e, r = {}) {
  const { res: t, err: n, ret: i, fullRet: s } = r;
  return new Promise((a, l) => {
    if ("ret" in r)
      return a(e.return(i));
    "err" in r ? o(n) : c(t);
    function c(u) {
      let y;
      try {
        y = e.next(u);
      } catch (g) {
        return l(g);
      }
      return f(y), null;
    }
    function o(u) {
      let y;
      try {
        y = e.throw(u);
      } catch (g) {
        return l(g);
      }
      f(y);
    }
    function f(u) {
      if (u.done) return a(s ? u : u.value);
      if (u.value !== V) return a(u);
      const y = u.value.RES;
      return (y && y.then === "function" ? y : Promise.resolve(y)).then(c, o);
    }
  });
}
function* Ye(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], s = [];
  for (let a = 0; a < e.body.length; a++) {
    const l = e.body[a];
    l.type === "FunctionDeclaration" ? (i.push(l), s.push(a)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? yield* L(l, r, { hoist: !0, onlyBlock: !0 }) : n || (yield* D(l, r));
  }
  if (s.length) {
    for (let a = s.length - 1; a > -1; a--)
      e.body.splice(s[a], 1);
    e.body = i.concat(e.body);
  }
}
function* D(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      yield* L(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* L(e.left, r, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* L(e.init, r, { hoist: !0 }));
    case "WhileStatement":
    case "DoWhileStatement":
      yield* D(e.body, r);
      break;
    case "IfStatement":
      yield* D(e.consequent, r), e.alternate && (yield* D(e.alternate, r));
      break;
    case "BlockStatement":
      for (let t = 0; t < e.body.length; t++)
        yield* D(e.body[t], r);
      break;
    case "SwitchStatement":
      for (let t = 0; t < e.cases.length; t++)
        for (let n = 0; n < e.cases[t].consequent.length; n++)
          yield* D(e.cases[t].consequent[n], r);
      break;
    case "TryStatement": {
      const t = e.block.body;
      for (let s = 0; s < t.length; s++)
        yield* D(t[s], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let s = 0; s < n.length; s++)
          yield* D(n[s], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let s = 0; s < i.length; s++)
          yield* D(i[s], r);
      break;
    }
  }
}
function* P(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return yield* Le(e, r, t);
    case "ArrayPattern":
      return yield* Ke(e, r, t);
    case "RestElement":
      return yield* G(e, r, t);
    case "AssignmentPattern":
      return yield* Je(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function q(e, r, t = {}) {
  if (
    /*<replace by:=node.generator\s||\snode.async>*/
    !e.generator && !e.async
  )
    return z(e, r, t);
  const { superClass: n, isCtor: i } = t, s = e.params, a = function* (...c) {
    const o = new S(r, !0);
    if (e.type !== "ArrowFunctionExpression") {
      o.const("this", this), o.let("arguments", arguments);
      const u = a.__currentNewTarget || new.target;
      o.const(ue, u), n && (o.const(oe, n), i && o.let(B, !1));
    }
    for (let u = 0; u < s.length; u++) {
      const y = s[u];
      y.type === "Identifier" ? o.var(y.name, c[u]) : y.type === "RestElement" ? yield* G(y, o, { kind: "var", feed: c.slice(u) }) : yield* P(y, o, { feed: c[u] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (yield* Ye(e.body, o), f = yield* U(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = yield* d(e.body, o), e.type === "ArrowFunctionExpression" && (b.RES = f, f = b)), f === b)
      return f.RES;
  };
  let l;
  return e.async && e.generator ? l = function() {
    const c = a.apply(this, arguments);
    let o = Promise.resolve(), f = !1;
    const u = (g) => o = o.then(() => Se(c, F({ fullRet: !0 }, g))).catch((m) => {
      if (!f)
        return f = !0, Promise.reject(m);
    }), y = {
      next: (g) => u({ res: g }),
      throw: (g) => u({ err: g }),
      return: (g) => u({ ret: g })
    };
    return typeof Symbol == "function" && (y[Symbol.iterator] = function() {
      return this;
    }), y;
  } : e.async ? l = function() {
    return Se(a.apply(this, arguments));
  } : l = a, v(l, ce, { value: !0 }), v(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), v(l, "length", {
    value: s.length,
    configurable: !0
  }), l;
}
function* pe(e, r) {
  const t = yield* d(e.superClass, r), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), s = e.body.body, a = [];
  let l = null;
  const c = [], o = [];
  for (let u = 0; u < s.length; u++) {
    const y = s[u];
    if (y.type === "MethodDefinition" && y.kind === "constructor")
      l = yield* q(y.value, r, { superClass: t, isCtor: !0 });
    else if (y.type === "PropertyDefinition") {
      const g = y.key.type === "PrivateIdentifier";
      let m;
      if (g ? m = Symbol.for(`private:${y.key.name}`) : y.computed ? m = yield* d(y.key, r) : m = y.key.type === "Identifier" ? y.key.name : yield* d(y.key, r), y.static) {
        const I = y.value ? yield* d(y.value, r) : void 0;
        o.push({ key: m, value: I, isPrivate: g });
      } else
        c.push({ key: m, valueNode: y.value, isPrivate: g });
    } else y.type === "StaticBlock" && a.push(y);
  }
  let f;
  if (l) {
    let u;
    f = u = function(...y) {
      const g = {}, m = u.__privateInstanceMethods;
      m && m.forEach((w, E) => {
        g[E] = w;
      });
      for (let w = 0; w < c.length; w++) {
        const E = c[w];
        E.isPrivate && (g[E.key] = void 0);
      }
      (Object.keys(g).length > 0 || Object.getOwnPropertySymbols(g).length > 0) && n.set(this, g);
      for (let w = 0; w < c.length; w++) {
        const E = c[w], X = new S(r, !1);
        X.const("this", this);
        const C = E.valueNode ? d(E.valueNode, X) : void 0, Y = C && typeof C.next == "function" ? Array.from(C).pop() : C;
        E.isPrivate ? g[E.key] = Y : this[E.key] = Y;
      }
      l.__currentNewTarget = new.target || u;
      const I = l.call(this, ...y);
      return delete l.__currentNewTarget, typeof I == "object" && I !== null ? I : this;
    };
  } else
    f = function() {
      const u = {}, y = f.__privateInstanceMethods;
      y && y.forEach((g, m) => {
        u[m] = g;
      });
      for (let g = 0; g < c.length; g++) {
        const m = c[g];
        m.isPrivate && (u[m.key] = void 0);
      }
      (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
      for (let g = 0; g < c.length; g++) {
        const m = c[g], I = new S(r, !1);
        I.const("this", this);
        const w = m.valueNode ? d(m.valueNode, I) : void 0;
        m.isPrivate ? u[m.key] = w : this[m.key] = w;
      }
      t && t.apply(this);
    };
  t && _e(f, t), v(f, "__privateInstanceFields", { value: n }), v(f, "__privateStaticFields", { value: i }), yield* He(e.body, r, { klass: f, superClass: t });
  for (let u = 0; u < o.length; u++) {
    const y = o[u];
    y.isPrivate ? i.set(y.key, y.value) : f[y.key] = y.value;
  }
  for (let u = 0; u < a.length; u++) {
    const y = a[u], g = new S(r, !0);
    g.const("this", f);
    for (let m = 0; m < y.body.length; m++)
      yield* d(y.body[m], g);
  }
  return v(f, K, { value: !0 }), v(f, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), f;
}
function* he(e, r, t) {
  const { value: n } = t, i = e.left, s = new S(r);
  i.type === "VariableDeclaration" ? yield* L(i, s, { feed: n }) : i.type === "Identifier" ? (yield* M(i, r, { getVar: !0 })).set(n) : yield* P(i, r, { feed: n });
  let a;
  return e.body.type === "BlockStatement" ? a = yield* U(e.body, s, { invasived: !0 }) : a = yield* d(e.body, s), a;
}
function ge(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], s = [];
  for (let a = 0; a < e.body.length; a++) {
    const l = e.body[a];
    l.type === "FunctionDeclaration" ? (i.push(l), s.push(a)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? W(l, r, { hoist: !0, onlyBlock: !0 }) : n || T(l, r);
  }
  if (s.length) {
    for (let a = s.length - 1; a > -1; a--)
      e.body.splice(s[a], 1);
    e.body = i.concat(e.body);
  }
}
function T(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      W(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && W(e.left, r, { hoist: !0 });
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && W(e.init, r, { hoist: !0 });
    case "WhileStatement":
    case "DoWhileStatement":
      T(e.body, r);
      break;
    case "IfStatement":
      T(e.consequent, r), e.alternate && T(e.alternate, r);
      break;
    case "BlockStatement":
      for (let t = 0; t < e.body.length; t++)
        T(e.body[t], r);
      break;
    case "SwitchStatement":
      for (let t = 0; t < e.cases.length; t++)
        for (let n = 0; n < e.cases[t].consequent.length; n++)
          T(e.cases[t].consequent[n], r);
      break;
    case "TryStatement": {
      const t = e.block.body;
      for (let s = 0; s < t.length; s++)
        T(t[s], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let s = 0; s < n.length; s++)
          T(n[s], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let s = 0; s < i.length; s++)
          T(i[s], r);
      break;
    }
  }
}
function j(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return Te(e, r, t);
    case "ArrayPattern":
      return Ae(e, r, t);
    case "RestElement":
      return J(e, r, t);
    case "AssignmentPattern":
      return Re(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function z(e, r, t = {}) {
  if (e.generator || e.async)
    return q(e, r, t);
  const { superClass: n, isCtor: i } = t, s = e.params, a = function(...c) {
    const o = new S(r, !0);
    if (e.type !== "ArrowFunctionExpression") {
      o.const("this", this), o.let("arguments", arguments);
      const u = a.__currentNewTarget || new.target;
      o.const(ue, u), n && (o.const(oe, n), i && o.let(B, !1));
    }
    for (let u = 0; u < s.length; u++) {
      const y = s[u];
      y.type === "Identifier" ? o.var(y.name, c[u]) : y.type === "RestElement" ? J(y, o, { kind: "var", feed: c.slice(u) }) : j(y, o, { feed: c[u] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (ge(e.body, o), f = N(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = h(e.body, o), e.type === "ArrowFunctionExpression" && (b.RES = f, f = b)), f === b)
      return f.RES;
  };
  let l = a;
  return e.type === "ArrowFunctionExpression" && v(l, ce, { value: !0 }), v(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), v(l, "length", {
    value: s.length,
    configurable: !0
  }), l;
}
function de(e, r) {
  const t = h(e.superClass, r), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), s = e.body.body, a = [];
  let l = null;
  const c = [], o = [];
  for (let u = 0; u < s.length; u++) {
    const y = s[u];
    if (y.type === "MethodDefinition" && y.kind === "constructor")
      l = z(y.value, r, { superClass: t, isCtor: !0 });
    else if (y.type === "PropertyDefinition") {
      const g = y.key.type === "PrivateIdentifier";
      let m;
      if (g ? m = Symbol.for(`private:${y.key.name}`) : y.computed ? m = h(y.key, r) : m = y.key.type === "Identifier" ? y.key.name : h(y.key, r), y.static) {
        const I = y.value ? h(y.value, r) : void 0;
        o.push({ key: m, value: I, isPrivate: g });
      } else
        c.push({ key: m, valueNode: y.value, isPrivate: g });
    } else y.type === "StaticBlock" && a.push(y);
  }
  let f;
  if (l) {
    let u;
    f = u = function(...y) {
      const g = {}, m = u.__privateInstanceMethods;
      m && m.forEach((w, E) => {
        g[E] = w;
      });
      for (let w = 0; w < c.length; w++) {
        const E = c[w];
        E.isPrivate && (g[E.key] = void 0);
      }
      (Object.keys(g).length > 0 || Object.getOwnPropertySymbols(g).length > 0) && n.set(this, g);
      for (let w = 0; w < c.length; w++) {
        const E = c[w], X = new S(r, !1);
        X.const("this", this);
        const C = E.valueNode ? h(E.valueNode, X) : void 0, Y = C && typeof C.next == "function" ? Array.from(C).pop() : C;
        E.isPrivate ? g[E.key] = Y : this[E.key] = Y;
      }
      l.__currentNewTarget = new.target || u;
      const I = l.call(this, ...y);
      return delete l.__currentNewTarget, typeof I == "object" && I !== null ? I : this;
    };
  } else
    f = function() {
      const u = {}, y = f.__privateInstanceMethods;
      y && y.forEach((g, m) => {
        u[m] = g;
      });
      for (let g = 0; g < c.length; g++) {
        const m = c[g];
        m.isPrivate && (u[m.key] = void 0);
      }
      (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
      for (let g = 0; g < c.length; g++) {
        const m = c[g], I = new S(r, !1);
        I.const("this", this);
        const w = m.valueNode ? h(m.valueNode, I) : void 0;
        m.isPrivate ? u[m.key] = w : this[m.key] = w;
      }
      t && t.apply(this);
    };
  t && _e(f, t), v(f, "__privateInstanceFields", { value: n }), v(f, "__privateStaticFields", { value: i }), Me(e.body, r, { klass: f, superClass: t });
  for (let u = 0; u < o.length; u++) {
    const y = o[u];
    y.isPrivate ? i.set(y.key, y.value) : f[y.key] = y.value;
  }
  for (let u = 0; u < a.length; u++) {
    const y = a[u], g = new S(r, !0);
    g.const("this", f);
    for (let m = 0; m < y.body.length; m++)
      h(y.body[m], g);
  }
  return v(f, K, { value: !0 }), v(f, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), f;
}
function Ze(e, r, t) {
  const { value: n } = t, i = e.left, s = new S(r);
  i.type === "VariableDeclaration" ? W(i, s, { feed: n }) : i.type === "Identifier" ? M(i, r, { getVar: !0 }).set(n) : j(i, r, { feed: n });
  let a;
  return e.body.type === "BlockStatement" ? a = N(e.body, s, { invasived: !0 }) : a = h(e.body, s), a;
}
const me = class me {
  constructor(r = {}) {
    this.options = {}, this.scope = new S(null, !0), this.exports = {};
    let { ecmaVer: t = "latest", sandBox: n = !0 } = r;
    if (t !== "latest" && (t = t - (t < 2015 ? 0 : 2009), [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(t) === -1))
      throw new Error("unsupported ecmaVer");
    if (this.options.ecmaVersion = t, n) {
      const i = lt();
      this.scope.let("window", i), this.scope.let("this", i);
    } else
      this.scope.let("window", p), this.scope.let("this", p);
    this.scope.const("exports", this.exports = {});
  }
  import(r, t) {
    if (typeof r == "string" && (r = { [r]: t }), typeof r != "object") return;
    const n = ae(r);
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      this.scope.var(s, r[s]);
    }
  }
  parse(r, t) {
    return typeof t == "function" ? t(r, F({}, this.options)) : ve(r, this.options);
  }
  run(r) {
    const t = typeof r == "string" ? ve(r, this.options) : r;
    ge(t, this.scope), h(t, this.scope);
  }
};
me.version = ct;
let Ee = me;
export {
  Ee as default
};
//# sourceMappingURL=sval.js.map
