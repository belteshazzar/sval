import { parse as de } from "acorn";
const Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Ce;
  },
  get ClassDeclaration() {
    return Gt;
  },
  get FunctionDeclaration() {
    return Jt;
  },
  get MethodDefinition() {
    return Ae;
  },
  get VariableDeclaration() {
    return N;
  },
  get VariableDeclarator() {
    return De;
  }
}, Symbol.toStringTag, { value: "Module" })), He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return We;
  },
  get ClassDeclaration() {
    return Vr;
  },
  get FunctionDeclaration() {
    return Mr;
  },
  get MethodDefinition() {
    return Le;
  },
  get VariableDeclaration() {
    return q;
  },
  get VariableDeclarator() {
    return ze;
  }
}, Symbol.toStringTag, { value: "Module" })), ne = Object.freeze, v = Object.defineProperty, C = Object.getOwnPropertyDescriptor, Xe = Object.prototype.hasOwnProperty;
function Ye(e, r) {
  return Xe.call(e, r);
}
const re = Object.getOwnPropertyNames, he = Object.setPrototypeOf;
function Ze(e, r) {
  he ? he(e, r) : e.__proto__ = r;
}
const ge = Object.getPrototypeOf;
function Qe(e) {
  return ge ? ge(e) : e.__proto__;
}
const et = Object.getOwnPropertyDescriptor;
function be(e, r, t) {
  for (; r; ) {
    const n = et(r, t), i = typeof n < "u" && typeof n.writable > "u" && typeof n[e] == "function" && n[e];
    if (i)
      return i;
    r = Qe(r);
  }
}
function we(e, r) {
  return be("get", e, r);
}
function Se(e, r) {
  return be("set", e, r);
}
const X = Object.create;
function Ee(e, r) {
  Ze(e, r), e.prototype = X(r.prototype, {
    constructor: {
      value: e,
      writable: !0
    }
  });
}
function tt(e) {
  for (let r = 1; r < arguments.length; ++r) {
    const t = arguments[r];
    for (const n in t)
      Ye(t, n) && (e[n] = t[n]);
  }
  return e;
}
const j = Object.assign || tt;
let G = [], y = X(null);
try {
  if (!window.Object) throw 0;
  G = re(y = window).filter((e) => e !== "webkitStorageInfo");
} catch {
  try {
    if (!global.Object) throw 0;
    G = re(y = global).filter((r) => r !== "GLOBAL" && r !== "root");
  } catch {
    try {
      y.Object = Object;
    } catch {
    }
    try {
      y.Function = Function;
    } catch {
    }
    try {
      y.Array = Array;
    } catch {
    }
    try {
      y.Number = Number;
    } catch {
    }
    try {
      y.parseFloat = parseFloat;
    } catch {
    }
    try {
      y.parseInt = parseInt;
    } catch {
    }
    try {
      y.Infinity = 1 / 0;
    } catch {
    }
    try {
      y.NaN = NaN;
    } catch {
    }
    try {
      y.undefined = void 0;
    } catch {
    }
    try {
      y.Boolean = Boolean;
    } catch {
    }
    try {
      y.String = String;
    } catch {
    }
    try {
      y.Symbol = Symbol;
    } catch {
    }
    try {
      y.Date = Date;
    } catch {
    }
    try {
      y.Promise = Promise;
    } catch {
    }
    try {
      y.RegExp = RegExp;
    } catch {
    }
    try {
      y.Error = Error;
    } catch {
    }
    try {
      y.EvalError = EvalError;
    } catch {
    }
    try {
      y.RangeError = RangeError;
    } catch {
    }
    try {
      y.ReferenceError = ReferenceError;
    } catch {
    }
    try {
      y.SyntaxError = SyntaxError;
    } catch {
    }
    try {
      y.TypeError = TypeError;
    } catch {
    }
    try {
      y.URIError = URIError;
    } catch {
    }
    try {
      y.JSON = JSON;
    } catch {
    }
    try {
      y.Math = Math;
    } catch {
    }
    try {
      y.console = console;
    } catch {
    }
    try {
      y.Intl = Intl;
    } catch {
    }
    try {
      y.ArrayBuffer = ArrayBuffer;
    } catch {
    }
    try {
      y.Uint8Array = Uint8Array;
    } catch {
    }
    try {
      y.Int8Array = Int8Array;
    } catch {
    }
    try {
      y.Uint16Array = Uint16Array;
    } catch {
    }
    try {
      y.Int16Array = Int16Array;
    } catch {
    }
    try {
      y.Uint32Array = Uint32Array;
    } catch {
    }
    try {
      y.Int32Array = Int32Array;
    } catch {
    }
    try {
      y.Float32Array = Float32Array;
    } catch {
    }
    try {
      y.Float64Array = Float64Array;
    } catch {
    }
    try {
      y.Uint8ClampedArray = Uint8ClampedArray;
    } catch {
    }
    try {
      y.DataView = DataView;
    } catch {
    }
    try {
      y.Map = Map;
    } catch {
    }
    try {
      y.Set = Set;
    } catch {
    }
    try {
      y.WeakMap = WeakMap;
    } catch {
    }
    try {
      y.WeakSet = WeakSet;
    } catch {
    }
    try {
      y.Proxy = Proxy;
    } catch {
    }
    try {
      y.Reflect = Reflect;
    } catch {
    }
    try {
      y.decodeURI = decodeURI;
    } catch {
    }
    try {
      y.decodeURIComponent = decodeURIComponent;
    } catch {
    }
    try {
      y.encodeURI = encodeURI;
    } catch {
    }
    try {
      y.encodeURIComponent = encodeURIComponent;
    } catch {
    }
    try {
      y.escape = escape;
    } catch {
    }
    try {
      y.unescape = unescape;
    } catch {
    }
    try {
      y.eval = eval;
    } catch {
    }
    try {
      y.isFinite = isFinite;
    } catch {
    }
    try {
      y.isNaN = isNaN;
    } catch {
    }
    try {
      y.SharedArrayBuffer = SharedArrayBuffer;
    } catch {
    }
    try {
      y.Atomics = Atomics;
    } catch {
    }
    try {
      y.WebAssembly = WebAssembly;
    } catch {
    }
    try {
      y.clearInterval = clearInterval;
    } catch {
    }
    try {
      y.clearTimeout = clearTimeout;
    } catch {
    }
    try {
      y.setInterval = setInterval;
    } catch {
    }
    try {
      y.setTimeout = setTimeout;
    } catch {
    }
    try {
      y.crypto = crypto;
    } catch {
    }
    G = re(y);
  }
}
y.Symbol && (!y.Symbol.iterator && (y.Symbol.iterator = x("iterator")), !y.Symbol.asyncIterator && (y.Symbol.asyncIterator = x("asynciterator")));
const ke = X({});
for (let e = 0; e < G.length; e++) {
  const r = G[e];
  try {
    ke[r] = y[r];
  } catch {
  }
}
const H = x("window");
function rt() {
  return j(X({ [H]: y }), ke);
}
function x(e) {
  return e + Math.random().toString(36).substring(2);
}
function nt(e) {
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
const it = "0.4.8", R = { RES: void 0 }, b = { RES: void 0 }, S = x("continue"), E = x("break"), ie = x("super"), A = x("supercall"), ae = x("noctor"), z = x("clsctor"), se = x("newtarget"), k = x("noinit"), I = x("deadzone");
class te {
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
class _ {
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
class w {
  /**
   * Create a simulated scope
   * @param parent the parent scope along the scope chain (default: null)
   * @param isolated true for function scope or false for block scope (default: false)
   */
  constructor(r = null, t = !1) {
    this.context = X(null), this.parent = r, this.isolated = t;
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
    const r = new w(this.parent, this.isolated);
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
      return r in t ? new _(t, r) : null;
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
      n.context[r] = new te("var", t === k ? void 0 : t);
    else if (i.kind === "var")
      t !== k && i.set(t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
    if (!n.parent) {
      const a = n.find("window").get();
      t !== k && v(a, r, { value: t, writable: !0, enumerable: !0 });
    }
  }
  /**
   * Declare a let variable
   * @param name variable identifier name
   * @param value variable value
   */
  let(r, t) {
    const n = this.context[r];
    if (!n || n.get() === I)
      this.context[r] = new te("let", t);
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
    if (!n || n.get() === I)
      this.context[r] = new te("const", t);
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
      this.context[r] = new te("var", t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
  }
}
function T(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const a = r.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const l = a.get();
      if (l === I)
        throw new ReferenceError(`${e.name} is not defined`);
      return l;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function at(e, r) {
  return Symbol.for(`private:${e.name}`);
}
const st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: T,
  PrivateIdentifier: at
}, Symbol.toStringTag, { value: "Module" }));
function xe(e, r) {
  return e.value;
}
const lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: xe
}, Symbol.toStringTag, { value: "Module" }));
function ot(e, r) {
  const t = r.find(A);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function ct(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(Z(i, r)) : t.push(p(i, r));
  }
  return t;
}
function ut(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      j(t, Z(i, r));
    else if (i.type === "Property") {
      let a;
      const l = i.key;
      i.computed ? a = p(l, r) : l.type === "Identifier" ? a = l.name : a = "" + xe(l);
      const s = p(i.value, r), c = i.kind;
      if (c === "init")
        t[a] = s;
      else if (c === "get") {
        const o = C(t, a);
        v(t, a, {
          get: s,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = C(t, a);
        v(t, a, {
          get: o && o.get,
          set: s,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return t;
}
function ft(e, r) {
  if (e.id && e.id.name) {
    const t = new w(r), n = U(e, t);
    return t.const(e.id.name, n), n;
  } else
    return U(e, r);
}
function yt(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +p(t, r);
    case "-":
      return -p(t, r);
    case "!":
      return !p(t, r);
    case "~":
      return ~p(t, r);
    case "void":
      return void p(t, r);
    case "typeof":
      return t.type === "Identifier" ? typeof T(t, r, { throwErr: !1 }) : typeof p(t, r);
    case "delete":
      if (t.type === "MemberExpression")
        return Y(t, r, { getVar: !0 }).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return p(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function pt(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = T(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = Y(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function dt(e, r) {
  const t = p(e.left, r), n = p(e.right, r);
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
function ht(e, r) {
  const t = p(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = T(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const a = r.global().find("window").get();
      i = new _(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = Y(n, r, { getVar: !0 });
  else
    return O(n, r, { feed: t });
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
      const a = i.get();
      return a == null && i.set(t), i.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function gt(e, r) {
  switch (e.operator) {
    case "||":
      return p(e.left, r) || p(e.right, r);
    case "&&":
      return p(e.left, r) && p(e.right, r);
    case "??": {
      const t = p(e.left, r);
      return t ?? p(e.right, r);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function Y(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let a;
  if (e.object.type === "Super" ? a = $e(e.object, r, { getProto: !0 }) : a = p(e.object, r), e.optional && a == null)
    return;
  if (n) return a;
  const l = e.property.type === "PrivateIdentifier";
  let s;
  if (l)
    if (s = Symbol.for(`private:${e.property.name}`), typeof a == "function") {
      const o = a.__privateStaticFields;
      if (!o || !o.has(s))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new _(o, s) : o.get(s);
    } else {
      const o = a.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const u = f.get(a);
      if (!u || !(s in u))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new _(u, s) : u[s];
    }
  else e.computed ? s = p(e.property, r) : s = e.property.name;
  if (i) {
    const c = Se(a, s);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get(), f = x(s);
      return v(o, f, { set: c }), new _(o, f);
    } else
      return new _(a, s);
  } else {
    const c = we(a, s);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get();
      return c.call(o);
    } else
      return a[s];
  }
}
function mt(e, r) {
  return p(e.test, r) ? p(e.consequent, r) : p(e.alternate, r);
}
function vt(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = Y(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.property.type === "PrivateIdentifier")
      if (a = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const c = n.__privateStaticFields;
        t = c ? c.get(a) : void 0;
      } else {
        const c = n.constructor, o = c && c.__privateInstanceFields, f = o ? o.get(n) : null;
        t = f ? f[a] : void 0;
      }
    else if (e.callee.computed)
      if (a = p(e.callee.property, r), e.callee.object.type === "Super") {
        const s = r.find("this").get();
        t = n[a].bind(s);
      } else
        t = n[a];
    else if (a = e.callee.property.name, e.callee.object.type === "Super") {
      const s = r.find("this").get();
      t = n[a].bind(s);
    } else
      t = n[a];
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    if (t[z])
      throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = p(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[z]) {
      let a;
      if (e.callee.type === "Identifier")
        a = e.callee.name;
      else
        try {
          a = JSON.stringify(t);
        } catch {
          a = "" + t;
        }
      throw typeof t != "function" ? new TypeError(`${a} is not a function`) : new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let a = 0; a < e.arguments.length; a++) {
    const l = e.arguments[a];
    l.type === "SpreadElement" ? i = i.concat(Z(l, r)) : i.push(p(l, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(A).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(A).set(!0);
  }
  return n && n[H] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[H], i) : t.apply(n, i);
}
function bt(e, r) {
  const t = p(e.callee, r);
  if (typeof t != "function") {
    let i;
    if (e.callee.type === "Identifier")
      i = e.callee.name;
    else
      try {
        i = JSON.stringify(t);
      } catch {
        i = "" + t;
      }
    throw new TypeError(`${i} is not a constructor`);
  } else if (t[ae])
    throw new TypeError(`${t.name || "(intermediate value)"} is not a constructor`);
  let n = [];
  for (let i = 0; i < e.arguments.length; i++) {
    const a = e.arguments[i];
    a.type === "SpreadElement" ? n = n.concat(Z(a, r)) : n.push(p(a, r));
  }
  return new t(...n);
}
function wt(e, r) {
  return r.find(se).get();
}
function St(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = p(e.expressions[n], r);
  return t;
}
function Et(e, r) {
  return U(e, r);
}
function kt(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, l;
  for (; a = t.shift(); )
    i += Ie(a), l = n.shift(), l && (i += p(l, r));
  return i;
}
function xt(e, r) {
  const t = p(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  v(i, "raw", {
    value: ne(a)
  });
  const l = e.quasi.expressions, s = [];
  if (l)
    for (let c = 0; c < l.length; c++)
      s.push(p(l[c], r));
  return t(ne(i), ...s);
}
function Ie(e, r) {
  return e.value.raw;
}
function It(e, r) {
  if (e.id && e.id.name) {
    const t = new w(r), n = fe(e, t);
    return t.const(e.id.name, n), n;
  } else
    return fe(e, r);
}
function $e(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(ie).get();
  return n ? i.prototype : i;
}
function Z(e, r) {
  return p(e.argument, r);
}
function $t(e, r) {
  return p(e.expression, r);
}
const Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: ct,
  ArrowFunctionExpression: Et,
  AssignmentExpression: ht,
  BinaryExpression: dt,
  CallExpression: vt,
  ChainExpression: $t,
  ClassExpression: It,
  ConditionalExpression: mt,
  FunctionExpression: ft,
  LogicalExpression: gt,
  MemberExpression: Y,
  MetaProperty: wt,
  NewExpression: bt,
  ObjectExpression: ut,
  SequenceExpression: St,
  SpreadElement: Z,
  Super: $e,
  TaggedTemplateExpression: xt,
  TemplateElement: Ie,
  TemplateLiteral: kt,
  ThisExpression: ot,
  UnaryExpression: yt,
  UpdateExpression: pt
}, Symbol.toStringTag, { value: "Module" }));
function Pt(e, r) {
  p(e.expression, r);
}
function M(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, a = n ? r : new w(r);
  i || ye(e, a, { onlyBlock: !0 });
  for (let l = 0; l < e.body.length; l++) {
    const s = p(e.body[l], a);
    if (s === E || s === S || s === b)
      return s;
  }
}
function _t() {
}
function jt() {
  debugger;
}
function Ft(e, r) {
  return b.RES = e.argument ? p(e.argument, r) : void 0, b;
}
function Dt() {
  return E;
}
function Ct() {
  return S;
}
function At(e, r) {
  return p(e.test, r) ? p(e.consequent, r) : p(e.alternate, r);
}
function Tt(e, r) {
  const t = p(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || p(a.test, r) === t) && (n = !0), n) {
      const l = Oe(a, r);
      if (l === E)
        break;
      if (l === S || l === b)
        return l;
    }
  }
}
function Oe(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = p(e.consequent[t], r);
    if (n === E || n === S || n === b)
      return n;
  }
}
function Rt(e, r) {
  throw p(e.argument, r);
}
function Mt(e, r) {
  try {
    return M(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new w(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, t);
        } else
          O(i, r, { feed: t });
      return Pe(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = M(e.finalizer, r);
      if (t === E || t === S || t === b)
        return t;
    }
  }
}
function Pe(e, r) {
  return M(e.body, r, { invasived: !0 });
}
function Vt(e, r) {
  for (; p(e.test, r); ) {
    const t = p(e.body, r);
    if (t === E)
      break;
    if (t === S)
      continue;
    if (t === b)
      return t;
  }
}
function Bt(e, r) {
  do {
    const t = p(e.body, r);
    if (t === E)
      break;
    if (t === S)
      continue;
    if (t === b)
      return t;
  } while (p(e.test, r));
}
function Ut(e, r) {
  const t = new w(r);
  for (p(e.init, t); !e.test || p(e.test, t); p(e.update, t)) {
    const n = new w(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = M(e.body, n, { invasived: !0 }) : i = p(e.body, n), i === E)
      break;
    if (i === S)
      continue;
    if (i === b)
      return i;
  }
}
function Nt(e, r) {
  for (const t in p(e.right, r)) {
    const n = Je(e, r, { value: t });
    if (n === E)
      break;
    if (n === S)
      continue;
    if (n === b)
      return n;
  }
}
function qt(e, r) {
  const t = p(e.right, r);
  for (const n of t) {
    const i = Je(e, r, { value: n });
    if (i === E)
      break;
    if (i === S)
      continue;
    if (i === b)
      return i;
  }
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: M,
  BreakStatement: Dt,
  CatchClause: Pe,
  ContinueStatement: Ct,
  DebuggerStatement: jt,
  DoWhileStatement: Bt,
  EmptyStatement: _t,
  ExpressionStatement: Pt,
  ForInStatement: Nt,
  ForOfStatement: qt,
  ForStatement: Ut,
  IfStatement: At,
  ReturnStatement: Ft,
  SwitchCase: Oe,
  SwitchStatement: Tt,
  ThrowStatement: Rt,
  TryStatement: Mt,
  WhileStatement: Vt
}, Symbol.toStringTag, { value: "Module" }));
function _e(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: l = {} } = t, s = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? r[n](f.name, a ? I : n === "var" ? k : void 0) : O(f, r, { kind: n, hoist: i, onlyBlock: a });
        } else
          W(o, r, { kind: n, hoist: i, onlyBlock: a });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = p(o.key, r) : f = o.key.name, s.push(f);
      const u = o.value;
      u.type === "Identifier" ? r[n](u.name, l[f]) : O(u, r, { kind: n, feed: l[f] });
    } else {
      const f = j({}, l);
      for (let u = 0; u < s.length; u++) delete f[s[u]];
      W(o, r, { kind: n, feed: f });
    }
  }
}
function je(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: l = [] } = t, s = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? I : n === "var" ? k : void 0) : O(o, r, { kind: n, hoist: i, onlyBlock: a }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, l[c]);
        else {
          const f = T(o, r, { getVar: !0 });
          f.set(l[c]), s.push(f.get());
        }
      else o.type === "RestElement" ? W(o, r, { kind: n, feed: l.slice(c) }) : O(o, r, { kind: n, feed: l[c] });
  }
  if (s.length)
    return s;
}
function W(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: l = [] } = t, s = e.argument;
  i ? (a || n === "var") && (s.type === "Identifier" ? r[n](s.name, a ? I : n === "var" ? k : void 0) : O(s, r, { kind: n, hoist: i, onlyBlock: a })) : s.type === "Identifier" ? n ? r[n](s.name, l) : T(s, r, { getVar: !0 }).set(l) : O(s, r, { kind: n, feed: l });
}
function Fe(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: l = p(e.right, r) } = t, s = e.left;
  i ? (a || n === "var") && (s.type === "Identifier" ? r[n](s.name, a ? I : n === "var" ? k : void 0) : O(s, r, { kind: n, hoist: i, onlyBlock: a })) : s.type === "Identifier" ? r[n](s.name, l) : O(s, r, { kind: n, feed: l });
}
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: je,
  AssignmentPattern: Fe,
  ObjectPattern: _e,
  RestElement: W
}, Symbol.toStringTag, { value: "Module" }));
function Lt(e, r) {
  for (let t = 0; t < e.body.length; t++)
    p(e.body[t], r);
}
const Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: Lt
}, Symbol.toStringTag, { value: "Module" }));
let le;
function p(e, r) {
  if (!e) return;
  le || (le = j(
    {},
    Ge,
    Ot,
    st,
    zt,
    lt,
    Wt,
    Kt
  ));
  const t = le[e.type];
  if (t)
    return t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function Jt(e, r) {
  r.func(e.id.name, U(e, r));
}
function N(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    De(e.declarations[n], r, j({ kind: i }, t));
  }
}
function De(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: l } = t;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, a ? I : n === "var" ? k : void 0) : O(e.id, r, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const s = "feed" in t, c = s ? l : p(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !s ? r.var(o, k) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && v(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      O(e.id, r, { kind: n, feed: c });
  }
}
function Gt(e, r) {
  r.func(e.id.name, fe(e, r));
}
function Ce(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let a = 0; a < e.body.length; a++) {
    const l = e.body[a];
    if (l.type === "MethodDefinition")
      Ae(l, r, { klass: n, superClass: i });
    else {
      if (l.type === "PropertyDefinition")
        continue;
      if (l.type === "StaticBlock")
        continue;
    }
  }
}
function Ae(e, r, t = {}) {
  const { klass: n, superClass: i } = t, a = e.key.type === "PrivateIdentifier";
  let l;
  if (a)
    l = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    l = p(e.key, r);
  else if (e.key.type === "Identifier")
    l = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const s = U(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (a)
        if (e.static) {
          const c = n.__privateStaticFields;
          c && c.set(l, s);
        } else
          n.__privateInstanceMethods || v(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(l, s);
      else {
        const c = e.static ? n : n.prototype;
        v(c, l, {
          value: s,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (a)
        throw new Error("Private getters not yet supported");
      const c = e.static ? n : n.prototype, o = C(c, l);
      v(c, l, {
        get: s,
        set: o && o.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (a)
        throw new Error("Private setters not yet supported");
      const c = e.static ? n : n.prototype, o = C(c, l);
      v(c, l, {
        get: o && o.get,
        set: s,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function* K(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const a = r.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const l = a.get();
      if (l === I)
        throw new ReferenceError(`${e.name} is not defined`);
      return l;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function* Ht(e, r) {
  return Symbol.for(`private:${e.name}`);
}
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: K,
  PrivateIdentifier: Ht
}, Symbol.toStringTag, { value: "Module" }));
function* Te(e, r) {
  return e.value;
}
const Yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Te
}, Symbol.toStringTag, { value: "Module" }));
function* Zt(e, r) {
  const t = r.find(A);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function* Qt(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(yield* ee(i, r)) : t.push(yield* d(i, r));
  }
  return t;
}
function* er(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      j(t, yield* ee(i, r));
    else if (i.type === "Property") {
      let a;
      const l = i.key;
      i.computed ? a = yield* d(l, r) : l.type === "Identifier" ? a = l.name : a = "" + (yield* Te(l));
      const s = yield* d(i.value, r), c = i.kind;
      if (c === "init")
        t[a] = s;
      else if (c === "get") {
        const o = C(t, a);
        v(t, a, {
          get: s,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = C(t, a);
        v(t, a, {
          get: o && o.get,
          set: s,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return t;
}
function* tr(e, r) {
  if (e.id && e.id.name) {
    const t = new w(r), n = B(e, t);
    return t.const(e.id.name, n), n;
  } else
    return B(e, r);
}
function* rr(e, r) {
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
      return t.type === "Identifier" ? typeof (yield* K(t, r, { throwErr: !1 })) : typeof (yield* d(t, r));
    case "delete":
      if (t.type === "MemberExpression")
        return (yield* Q(t, r, { getVar: !0 })).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* d(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* nr(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = yield* K(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = yield* Q(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function* ir(e, r) {
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
function* ar(e, r) {
  const t = yield* d(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* K(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const a = r.global().find("window").get();
      i = new _(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = yield* Q(n, r, { getVar: !0 });
  else
    return yield* $(n, r, { feed: t });
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
      const a = i.get();
      return a == null && i.set(t), i.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* sr(e, r) {
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
function* Q(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let a;
  if (e.object.type === "Super" ? a = yield* Me(e.object, r, { getProto: !0 }) : a = yield* d(e.object, r), e.optional && a == null)
    return;
  if (n) return a;
  const l = e.property.type === "PrivateIdentifier";
  let s;
  if (l)
    if (s = Symbol.for(`private:${e.property.name}`), typeof a == "function") {
      const o = a.__privateStaticFields;
      if (!o || !o.has(s))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new _(o, s) : o.get(s);
    } else {
      const o = a.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const u = f.get(a);
      if (!u || !(s in u))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new _(u, s) : u[s];
    }
  else e.computed ? s = yield* d(e.property, r) : s = e.property.name;
  if (i) {
    const c = Se(a, s);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get(), f = x(s);
      return v(o, f, { set: c }), new _(o, f);
    } else
      return new _(a, s);
  } else {
    const c = we(a, s);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get();
      return c.call(o);
    } else
      return a[s];
  }
}
function* lr(e, r) {
  return (yield* d(e.test, r)) ? yield* d(e.consequent, r) : yield* d(e.alternate, r);
}
function* or(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* Q(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.property.type === "PrivateIdentifier")
      if (a = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const c = n.__privateStaticFields;
        t = c ? c.get(a) : void 0;
      } else {
        const c = n.constructor, o = c && c.__privateInstanceFields, f = o ? o.get(n) : null;
        t = f ? f[a] : void 0;
      }
    else if (e.callee.computed)
      if (a = yield* d(e.callee.property, r), e.callee.object.type === "Super") {
        const s = r.find("this").get();
        t = n[a].bind(s);
      } else
        t = n[a];
    else if (a = e.callee.property.name, e.callee.object.type === "Super") {
      const s = r.find("this").get();
      t = n[a].bind(s);
    } else
      t = n[a];
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    if (t[z])
      throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = yield* d(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[z]) {
      let a;
      if (e.callee.type === "Identifier")
        a = e.callee.name;
      else
        try {
          a = JSON.stringify(t);
        } catch {
          a = "" + t;
        }
      throw typeof t != "function" ? new TypeError(`${a} is not a function`) : new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let a = 0; a < e.arguments.length; a++) {
    const l = e.arguments[a];
    l.type === "SpreadElement" ? i = i.concat(yield* ee(l, r)) : i.push(yield* d(l, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(A).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(A).set(!0);
  }
  return n && n[H] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[H], i) : t.apply(n, i);
}
function* cr(e, r) {
  const t = yield* d(e.callee, r);
  if (typeof t != "function") {
    let i;
    if (e.callee.type === "Identifier")
      i = e.callee.name;
    else
      try {
        i = JSON.stringify(t);
      } catch {
        i = "" + t;
      }
    throw new TypeError(`${i} is not a constructor`);
  } else if (t[ae])
    throw new TypeError(`${t.name || "(intermediate value)"} is not a constructor`);
  let n = [];
  for (let i = 0; i < e.arguments.length; i++) {
    const a = e.arguments[i];
    a.type === "SpreadElement" ? n = n.concat(yield* ee(a, r)) : n.push(yield* d(a, r));
  }
  return new t(...n);
}
function* ur(e, r) {
  return r.find(se).get();
}
function* fr(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = yield* d(e.expressions[n], r);
  return t;
}
function* yr(e, r) {
  return B(e, r);
}
function* pr(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, l;
  for (; a = t.shift(); )
    i += yield* Re(a), l = n.shift(), l && (i += yield* d(l, r));
  return i;
}
function* dr(e, r) {
  const t = yield* d(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  v(i, "raw", {
    value: ne(a)
  });
  const l = e.quasi.expressions, s = [];
  if (l)
    for (let c = 0; c < l.length; c++)
      s.push(yield* d(l[c], r));
  return t(ne(i), ...s);
}
function* Re(e, r) {
  return e.value.raw;
}
function* hr(e, r) {
  if (e.id && e.id.name) {
    const t = new w(r), n = yield* ce(e, t);
    return t.const(e.id.name, n), n;
  } else
    return yield* ce(e, r);
}
function* Me(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(ie).get();
  return n ? i.prototype : i;
}
function* ee(e, r) {
  return yield* d(e.argument, r);
}
function* gr(e, r) {
  return yield* d(e.expression, r);
}
function* mr(e, r) {
  const t = yield* d(e.argument, r);
  return e.delegate ? yield* t : yield t;
}
function* vr(e, r) {
  return R.RES = yield* d(e.argument, r), yield R;
}
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: Qt,
  ArrowFunctionExpression: yr,
  AssignmentExpression: ar,
  AwaitExpression: vr,
  BinaryExpression: ir,
  CallExpression: or,
  ChainExpression: gr,
  ClassExpression: hr,
  ConditionalExpression: lr,
  FunctionExpression: tr,
  LogicalExpression: sr,
  MemberExpression: Q,
  MetaProperty: ur,
  NewExpression: cr,
  ObjectExpression: er,
  SequenceExpression: fr,
  SpreadElement: ee,
  Super: Me,
  TaggedTemplateExpression: dr,
  TemplateElement: Re,
  TemplateLiteral: pr,
  ThisExpression: Zt,
  UnaryExpression: rr,
  UpdateExpression: nr,
  YieldExpression: mr
}, Symbol.toStringTag, { value: "Module" }));
function* wr(e, r) {
  yield* d(e.expression, r);
}
function* V(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, a = n ? r : new w(r);
  i || (yield* Ke(e, a, { onlyBlock: !0 }));
  for (let l = 0; l < e.body.length; l++) {
    const s = yield* d(e.body[l], a);
    if (s === E || s === S || s === b)
      return s;
  }
}
function* Sr() {
}
function* Er() {
  debugger;
}
function* kr(e, r) {
  return b.RES = e.argument ? yield* d(e.argument, r) : void 0, b;
}
function* xr() {
  return E;
}
function* Ir() {
  return S;
}
function* $r(e, r) {
  return (yield* d(e.test, r)) ? yield* d(e.consequent, r) : yield* d(e.alternate, r);
}
function* Or(e, r) {
  const t = yield* d(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || (yield* d(a.test, r)) === t) && (n = !0), n) {
      const l = yield* Ve(a, r);
      if (l === E)
        break;
      if (l === S || l === b)
        return l;
    }
  }
}
function* Ve(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = yield* d(e.consequent[t], r);
    if (n === E || n === S || n === b)
      return n;
  }
}
function* Pr(e, r) {
  throw yield* d(e.argument, r);
}
function* _r(e, r) {
  try {
    return yield* V(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new w(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, t);
        } else
          yield* $(i, r, { feed: t });
      return yield* Be(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = yield* V(e.finalizer, r);
      if (t === E || t === S || t === b)
        return t;
    }
  }
}
function* Be(e, r) {
  return yield* V(e.body, r, { invasived: !0 });
}
function* jr(e, r) {
  for (; yield* d(e.test, r); ) {
    const t = yield* d(e.body, r);
    if (t === E)
      break;
    if (t === S)
      continue;
    if (t === b)
      return t;
  }
}
function* Fr(e, r) {
  do {
    const t = yield* d(e.body, r);
    if (t === E)
      break;
    if (t === S)
      continue;
    if (t === b)
      return t;
  } while (yield* d(e.test, r));
}
function* Dr(e, r) {
  const t = new w(r);
  for (yield* d(e.init, t); !e.test || (yield* d(e.test, t)); yield* d(e.update, t)) {
    const n = new w(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = yield* V(e.body, n, { invasived: !0 }) : i = yield* d(e.body, n), i === E)
      break;
    if (i === S)
      continue;
    if (i === b)
      return i;
  }
}
function* Cr(e, r) {
  for (const t in yield* d(e.right, r)) {
    const n = yield* ue(e, r, { value: t });
    if (n === E)
      break;
    if (n === S)
      continue;
    if (n === b)
      return n;
  }
}
function* Ar(e, r) {
  const t = yield* d(e.right, r);
  if (e.await) {
    const n = nt(t);
    let i;
    for (R.RES = n.next(), i = yield R; !i.done; R.RES = n.next(), i = yield R) {
      const a = yield* ue(e, r, { value: i.value });
      if (a === E)
        break;
      if (a === S)
        continue;
      if (a === b)
        return a;
    }
  } else
    for (const n of t) {
      const i = yield* ue(e, r, { value: n });
      if (i === E)
        break;
      if (i === S)
        continue;
      if (i === b)
        return i;
    }
}
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: V,
  BreakStatement: xr,
  CatchClause: Be,
  ContinueStatement: Ir,
  DebuggerStatement: Er,
  DoWhileStatement: Fr,
  EmptyStatement: Sr,
  ExpressionStatement: wr,
  ForInStatement: Cr,
  ForOfStatement: Ar,
  ForStatement: Dr,
  IfStatement: $r,
  ReturnStatement: kr,
  SwitchCase: Ve,
  SwitchStatement: Or,
  ThrowStatement: Pr,
  TryStatement: _r,
  WhileStatement: jr
}, Symbol.toStringTag, { value: "Module" }));
function* Ue(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: l = {} } = t, s = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? r[n](f.name, a ? I : n === "var" ? k : void 0) : yield* $(f, r, { kind: n, hoist: i, onlyBlock: a });
        } else
          yield* L(o, r, { kind: n, hoist: i, onlyBlock: a });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = yield* d(o.key, r) : f = o.key.name, s.push(f);
      const u = o.value;
      u.type === "Identifier" ? r[n](u.name, l[f]) : yield* $(u, r, { kind: n, feed: l[f] });
    } else {
      const f = j({}, l);
      for (let u = 0; u < s.length; u++) delete f[s[u]];
      yield* L(o, r, { kind: n, feed: f });
    }
  }
}
function* Ne(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: l = [] } = t, s = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? I : n === "var" ? k : void 0) : yield* $(o, r, { kind: n, hoist: i, onlyBlock: a }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, l[c]);
        else {
          const f = yield* K(o, r, { getVar: !0 });
          f.set(l[c]), s.push(f.get());
        }
      else o.type === "RestElement" ? yield* L(o, r, { kind: n, feed: l.slice(c) }) : yield* $(o, r, { kind: n, feed: l[c] });
  }
  if (s.length)
    return s;
}
function* L(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: l = [] } = t, s = e.argument;
  i ? (a || n === "var") && (s.type === "Identifier" ? r[n](s.name, a ? I : n === "var" ? k : void 0) : yield* $(s, r, { kind: n, hoist: i, onlyBlock: a })) : s.type === "Identifier" ? n ? r[n](s.name, l) : (yield* K(s, r, { getVar: !0 })).set(l) : yield* $(s, r, { kind: n, feed: l });
}
function* qe(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: l = yield* d(e.right, r) } = t, s = e.left;
  i ? (a || n === "var") && (s.type === "Identifier" ? r[n](s.name, a ? I : n === "var" ? k : void 0) : yield* $(s, r, { kind: n, hoist: i, onlyBlock: a })) : s.type === "Identifier" ? r[n](s.name, l) : yield* $(s, r, { kind: n, feed: l });
}
const Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Ne,
  AssignmentPattern: qe,
  ObjectPattern: Ue,
  RestElement: L
}, Symbol.toStringTag, { value: "Module" }));
let oe;
function* d(e, r) {
  if (!e) return;
  oe || (oe = j(
    {},
    He,
    br,
    Xt,
    Tr,
    Yt,
    Rr
    /*<add>*/
    /*program*/
    /*</add>*/
  ));
  const t = oe[e.type];
  if (t)
    return yield* t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function* Mr(e, r) {
  r.func(e.id.name, B(e, r));
}
function* q(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* ze(e.declarations[n], r, j({ kind: i }, t));
  }
}
function* ze(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: l } = t;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, a ? I : n === "var" ? k : void 0) : yield* $(e.id, r, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const s = "feed" in t, c = s ? l : yield* d(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !s ? r.var(o, k) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && v(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      yield* $(e.id, r, { kind: n, feed: c });
  }
}
function* Vr(e, r) {
  r.func(e.id.name, yield* ce(e, r));
}
function* We(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let a = 0; a < e.body.length; a++) {
    const l = e.body[a];
    if (l.type === "MethodDefinition")
      yield* Le(l, r, { klass: n, superClass: i });
    else {
      if (l.type === "PropertyDefinition")
        continue;
      if (l.type === "StaticBlock")
        continue;
    }
  }
}
function* Le(e, r, t = {}) {
  const { klass: n, superClass: i } = t, a = e.key.type === "PrivateIdentifier";
  let l;
  if (a)
    l = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    l = yield* d(e.key, r);
  else if (e.key.type === "Identifier")
    l = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const s = yield* B(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      if (a)
        if (e.static) {
          const c = n.__privateStaticFields;
          c && c.set(l, s);
        } else
          n.__privateInstanceMethods || v(n, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() }), n.__privateInstanceMethods.set(l, s);
      else {
        const c = e.static ? n : n.prototype;
        v(c, l, {
          value: s,
          writable: !0,
          configurable: !0
        });
      }
      break;
    case "get": {
      if (a)
        throw new Error("Private getters not yet supported");
      const c = e.static ? n : n.prototype, o = C(c, l);
      v(c, l, {
        get: s,
        set: o && o.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      if (a)
        throw new Error("Private setters not yet supported");
      const c = e.static ? n : n.prototype, o = C(c, l);
      v(c, l, {
        get: o && o.get,
        set: s,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function me(e, r = {}) {
  const { res: t, err: n, ret: i, fullRet: a } = r;
  return new Promise((l, s) => {
    if ("ret" in r)
      return l(e.return(i));
    "err" in r ? o(n) : c(t);
    function c(u) {
      let g;
      try {
        g = e.next(u);
      } catch (h) {
        return s(h);
      }
      return f(g), null;
    }
    function o(u) {
      let g;
      try {
        g = e.throw(u);
      } catch (h) {
        return s(h);
      }
      f(g);
    }
    function f(u) {
      if (u.done) return l(a ? u : u.value);
      if (u.value !== R) return l(u);
      const g = u.value.RES;
      return (g && g.then === "function" ? g : Promise.resolve(g)).then(c, o);
    }
  });
}
function* Ke(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], a = [];
  for (let l = 0; l < e.body.length; l++) {
    const s = e.body[l];
    s.type === "FunctionDeclaration" ? (i.push(s), a.push(l)) : s.type === "VariableDeclaration" && ["const", "let"].indexOf(s.kind) !== -1 ? yield* q(s, r, { hoist: !0, onlyBlock: !0 }) : n || (yield* F(s, r));
  }
  if (a.length) {
    for (let l = a.length - 1; l > -1; l--)
      e.body.splice(a[l], 1);
    e.body = i.concat(e.body);
  }
}
function* F(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      yield* q(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* q(e.left, r, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* q(e.init, r, { hoist: !0 }));
    case "WhileStatement":
    case "DoWhileStatement":
      yield* F(e.body, r);
      break;
    case "IfStatement":
      yield* F(e.consequent, r), e.alternate && (yield* F(e.alternate, r));
      break;
    case "BlockStatement":
      for (let t = 0; t < e.body.length; t++)
        yield* F(e.body[t], r);
      break;
    case "SwitchStatement":
      for (let t = 0; t < e.cases.length; t++)
        for (let n = 0; n < e.cases[t].consequent.length; n++)
          yield* F(e.cases[t].consequent[n], r);
      break;
    case "TryStatement": {
      const t = e.block.body;
      for (let a = 0; a < t.length; a++)
        yield* F(t[a], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          yield* F(n[a], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          yield* F(i[a], r);
      break;
    }
  }
}
function* $(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return yield* Ue(e, r, t);
    case "ArrayPattern":
      return yield* Ne(e, r, t);
    case "RestElement":
      return yield* L(e, r, t);
    case "AssignmentPattern":
      return yield* qe(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function B(e, r, t = {}) {
  if (
    /*<replace by:=node.generator\s||\snode.async>*/
    !e.generator && !e.async
  )
    return U(e, r, t);
  const { superClass: n, isCtor: i } = t, a = e.params, l = function* (...c) {
    const o = new w(r, !0);
    e.type !== "ArrowFunctionExpression" && (o.const("this", this), o.let("arguments", arguments), o.const(se, new.target), n && (o.const(ie, n), i && o.let(A, !1)));
    for (let u = 0; u < a.length; u++) {
      const g = a[u];
      g.type === "Identifier" ? o.var(g.name, c[u]) : g.type === "RestElement" ? yield* L(g, o, { kind: "var", feed: c.slice(u) }) : yield* $(g, o, { feed: c[u] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (yield* Ke(e.body, o), f = yield* V(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = yield* d(e.body, o), e.type === "ArrowFunctionExpression" && (b.RES = f, f = b)), f === b)
      return f.RES;
  };
  let s;
  return e.async && e.generator ? s = function() {
    const c = l.apply(this, arguments);
    let o = Promise.resolve(), f = !1;
    const u = (h) => o = o.then(() => me(c, j({ fullRet: !0 }, h))).catch((m) => {
      if (!f)
        return f = !0, Promise.reject(m);
    }), g = {
      next: (h) => u({ res: h }),
      throw: (h) => u({ err: h }),
      return: (h) => u({ ret: h })
    };
    return typeof Symbol == "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
  } : e.async ? s = function() {
    return me(l.apply(this, arguments));
  } : s = l, v(s, ae, { value: !0 }), v(s, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), v(s, "length", {
    value: a.length,
    configurable: !0
  }), s;
}
function* ce(e, r) {
  const t = yield* d(e.superClass, r), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), a = e.body.body;
  let l = null;
  const s = [], c = [];
  for (let f = 0; f < a.length; f++) {
    const u = a[f];
    if (u.type === "MethodDefinition" && u.kind === "constructor")
      l = yield* B(u.value, r, { superClass: t, isCtor: !0 });
    else if (u.type === "PropertyDefinition") {
      const g = u.key.type === "PrivateIdentifier";
      let h;
      if (g ? h = Symbol.for(`private:${u.key.name}`) : u.computed ? h = yield* d(u.key, r) : h = u.key.type === "Identifier" ? u.key.name : yield* d(u.key, r), u.static) {
        const m = u.value ? yield* d(u.value, r) : void 0;
        c.push({ key: h, value: m, isPrivate: g });
      } else
        s.push({ key: h, valueNode: u.value, isPrivate: g });
    }
  }
  let o;
  l ? o = function(...f) {
    const u = {}, g = o.__privateInstanceMethods;
    g && g.forEach((h, m) => {
      u[m] = h;
    });
    for (let h = 0; h < s.length; h++) {
      const m = s[h];
      m.isPrivate && (u[m.key] = void 0);
    }
    (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
    for (let h = 0; h < s.length; h++) {
      const m = s[h], P = new w(r, !1);
      P.const("this", this);
      const J = m.valueNode ? d(m.valueNode, P) : void 0;
      m.isPrivate ? u[m.key] = J : this[m.key] = J;
    }
    return l.apply(this, f);
  } : o = function() {
    const f = {}, u = o.__privateInstanceMethods;
    u && u.forEach((g, h) => {
      f[h] = g;
    });
    for (let g = 0; g < s.length; g++) {
      const h = s[g];
      h.isPrivate && (f[h.key] = void 0);
    }
    (Object.keys(f).length > 0 || Object.getOwnPropertySymbols(f).length > 0) && n.set(this, f);
    for (let g = 0; g < s.length; g++) {
      const h = s[g], m = new w(r, !1);
      m.const("this", this);
      const P = h.valueNode ? d(h.valueNode, m) : void 0;
      h.isPrivate ? f[h.key] = P : this[h.key] = P;
    }
    t && t.apply(this);
  }, t && Ee(o, t), v(o, "__privateInstanceFields", { value: n }), v(o, "__privateStaticFields", { value: i }), yield* We(e.body, r, { klass: o, superClass: t });
  for (let f = 0; f < c.length; f++) {
    const u = c[f];
    u.isPrivate ? i.set(u.key, u.value) : o[u.key] = u.value;
  }
  return v(o, z, { value: !0 }), v(o, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), o;
}
function* ue(e, r, t) {
  const { value: n } = t, i = e.left, a = new w(r);
  i.type === "VariableDeclaration" ? yield* q(i, a, { feed: n }) : i.type === "Identifier" ? (yield* T(i, r, { getVar: !0 })).set(n) : yield* $(i, r, { feed: n });
  let l;
  return e.body.type === "BlockStatement" ? l = yield* V(e.body, a, { invasived: !0 }) : l = yield* d(e.body, a), l;
}
function ye(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], a = [];
  for (let l = 0; l < e.body.length; l++) {
    const s = e.body[l];
    s.type === "FunctionDeclaration" ? (i.push(s), a.push(l)) : s.type === "VariableDeclaration" && ["const", "let"].indexOf(s.kind) !== -1 ? N(s, r, { hoist: !0, onlyBlock: !0 }) : n || D(s, r);
  }
  if (a.length) {
    for (let l = a.length - 1; l > -1; l--)
      e.body.splice(a[l], 1);
    e.body = i.concat(e.body);
  }
}
function D(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      N(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && N(e.left, r, { hoist: !0 });
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && N(e.init, r, { hoist: !0 });
    case "WhileStatement":
    case "DoWhileStatement":
      D(e.body, r);
      break;
    case "IfStatement":
      D(e.consequent, r), e.alternate && D(e.alternate, r);
      break;
    case "BlockStatement":
      for (let t = 0; t < e.body.length; t++)
        D(e.body[t], r);
      break;
    case "SwitchStatement":
      for (let t = 0; t < e.cases.length; t++)
        for (let n = 0; n < e.cases[t].consequent.length; n++)
          D(e.cases[t].consequent[n], r);
      break;
    case "TryStatement": {
      const t = e.block.body;
      for (let a = 0; a < t.length; a++)
        D(t[a], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          D(n[a], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          D(i[a], r);
      break;
    }
  }
}
function O(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return _e(e, r, t);
    case "ArrayPattern":
      return je(e, r, t);
    case "RestElement":
      return W(e, r, t);
    case "AssignmentPattern":
      return Fe(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function U(e, r, t = {}) {
  if (e.generator || e.async)
    return B(e, r, t);
  const { superClass: n, isCtor: i } = t, a = e.params;
  let s = function(...c) {
    const o = new w(r, !0);
    e.type !== "ArrowFunctionExpression" && (o.const("this", this), o.let("arguments", arguments), o.const(se, new.target), n && (o.const(ie, n), i && o.let(A, !1)));
    for (let u = 0; u < a.length; u++) {
      const g = a[u];
      g.type === "Identifier" ? o.var(g.name, c[u]) : g.type === "RestElement" ? W(g, o, { kind: "var", feed: c.slice(u) }) : O(g, o, { feed: c[u] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (ye(e.body, o), f = M(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = p(e.body, o), e.type === "ArrowFunctionExpression" && (b.RES = f, f = b)), f === b)
      return f.RES;
  };
  return e.type === "ArrowFunctionExpression" && v(s, ae, { value: !0 }), v(s, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), v(s, "length", {
    value: a.length,
    configurable: !0
  }), s;
}
function fe(e, r) {
  const t = p(e.superClass, r), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), a = e.body.body;
  let l = null;
  const s = [], c = [];
  for (let f = 0; f < a.length; f++) {
    const u = a[f];
    if (u.type === "MethodDefinition" && u.kind === "constructor")
      l = U(u.value, r, { superClass: t, isCtor: !0 });
    else if (u.type === "PropertyDefinition") {
      const g = u.key.type === "PrivateIdentifier";
      let h;
      if (g ? h = Symbol.for(`private:${u.key.name}`) : u.computed ? h = p(u.key, r) : h = u.key.type === "Identifier" ? u.key.name : p(u.key, r), u.static) {
        const m = u.value ? p(u.value, r) : void 0;
        c.push({ key: h, value: m, isPrivate: g });
      } else
        s.push({ key: h, valueNode: u.value, isPrivate: g });
    }
  }
  let o;
  l ? o = function(...f) {
    const u = {}, g = o.__privateInstanceMethods;
    g && g.forEach((h, m) => {
      u[m] = h;
    });
    for (let h = 0; h < s.length; h++) {
      const m = s[h];
      m.isPrivate && (u[m.key] = void 0);
    }
    (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
    for (let h = 0; h < s.length; h++) {
      const m = s[h], P = new w(r, !1);
      P.const("this", this);
      const J = m.valueNode ? p(m.valueNode, P) : void 0;
      m.isPrivate ? u[m.key] = J : this[m.key] = J;
    }
    return l.apply(this, f);
  } : o = function() {
    const f = {}, u = o.__privateInstanceMethods;
    u && u.forEach((g, h) => {
      f[h] = g;
    });
    for (let g = 0; g < s.length; g++) {
      const h = s[g];
      h.isPrivate && (f[h.key] = void 0);
    }
    (Object.keys(f).length > 0 || Object.getOwnPropertySymbols(f).length > 0) && n.set(this, f);
    for (let g = 0; g < s.length; g++) {
      const h = s[g], m = new w(r, !1);
      m.const("this", this);
      const P = h.valueNode ? p(h.valueNode, m) : void 0;
      h.isPrivate ? f[h.key] = P : this[h.key] = P;
    }
    t && t.apply(this);
  }, t && Ee(o, t), v(o, "__privateInstanceFields", { value: n }), v(o, "__privateStaticFields", { value: i }), Ce(e.body, r, { klass: o, superClass: t });
  for (let f = 0; f < c.length; f++) {
    const u = c[f];
    u.isPrivate ? i.set(u.key, u.value) : o[u.key] = u.value;
  }
  return v(o, z, { value: !0 }), v(o, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), o;
}
function Je(e, r, t) {
  const { value: n } = t, i = e.left, a = new w(r);
  i.type === "VariableDeclaration" ? N(i, a, { feed: n }) : i.type === "Identifier" ? T(i, r, { getVar: !0 }).set(n) : O(i, r, { feed: n });
  let l;
  return e.body.type === "BlockStatement" ? l = M(e.body, a, { invasived: !0 }) : l = p(e.body, a), l;
}
const pe = class pe {
  constructor(r = {}) {
    this.options = {}, this.scope = new w(null, !0), this.exports = {};
    let { ecmaVer: t = "latest", sandBox: n = !0 } = r;
    if (t !== "latest" && (t = t - (t < 2015 ? 0 : 2009), [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(t) === -1))
      throw new Error("unsupported ecmaVer");
    if (this.options.ecmaVersion = t, n) {
      const i = rt();
      this.scope.let("window", i), this.scope.let("this", i);
    } else
      this.scope.let("window", y), this.scope.let("this", y);
    this.scope.const("exports", this.exports = {});
  }
  import(r, t) {
    if (typeof r == "string" && (r = { [r]: t }), typeof r != "object") return;
    const n = re(r);
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      this.scope.var(a, r[a]);
    }
  }
  parse(r, t) {
    return typeof t == "function" ? t(r, j({}, this.options)) : de(r, this.options);
  }
  run(r) {
    const t = typeof r == "string" ? de(r, this.options) : r;
    ye(t, this.scope), p(t, this.scope);
  }
};
pe.version = it;
let ve = pe;
export {
  ve as default
};
//# sourceMappingURL=sval.js.map
