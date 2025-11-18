import { parse as he } from "acorn";
const Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Te;
  },
  get ClassDeclaration() {
    return Xt;
  },
  get FunctionDeclaration() {
    return Ht;
  },
  get MethodDefinition() {
    return Re;
  },
  get VariableDeclaration() {
    return q;
  },
  get VariableDeclarator() {
    return Ae;
  }
}, Symbol.toStringTag, { value: "Module" })), Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Ke;
  },
  get ClassDeclaration() {
    return Ur;
  },
  get FunctionDeclaration() {
    return Vr;
  },
  get MethodDefinition() {
    return Je;
  },
  get VariableDeclaration() {
    return z;
  },
  get VariableDeclarator() {
    return Le;
  }
}, Symbol.toStringTag, { value: "Module" })), ie = Object.freeze, v = Object.defineProperty, A = Object.getOwnPropertyDescriptor, Ze = Object.prototype.hasOwnProperty;
function Qe(e, r) {
  return Ze.call(e, r);
}
const ne = Object.getOwnPropertyNames, ge = Object.setPrototypeOf;
function et(e, r) {
  ge ? ge(e, r) : e.__proto__ = r;
}
const me = Object.getPrototypeOf;
function tt(e) {
  return me ? me(e) : e.__proto__;
}
const rt = Object.getOwnPropertyDescriptor;
function we(e, r, t) {
  for (; r; ) {
    const n = rt(r, t), i = typeof n < "u" && typeof n.writable > "u" && typeof n[e] == "function" && n[e];
    if (i)
      return i;
    r = tt(r);
  }
}
function Se(e, r) {
  return we("get", e, r);
}
function Ee(e, r) {
  return we("set", e, r);
}
const Y = Object.create;
function ke(e, r) {
  et(e, r), e.prototype = Y(r.prototype, {
    constructor: {
      value: e,
      writable: !0
    }
  });
}
function nt(e) {
  for (let r = 1; r < arguments.length; ++r) {
    const t = arguments[r];
    for (const n in t)
      Qe(t, n) && (e[n] = t[n]);
  }
  return e;
}
const j = Object.assign || nt;
let H = [], p = Y(null);
try {
  if (!window.Object) throw 0;
  H = ne(p = window).filter((e) => e !== "webkitStorageInfo");
} catch {
  try {
    if (!global.Object) throw 0;
    H = ne(p = global).filter((r) => r !== "GLOBAL" && r !== "root");
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
    H = ne(p);
  }
}
p.Symbol && (!p.Symbol.iterator && (p.Symbol.iterator = I("iterator")), !p.Symbol.asyncIterator && (p.Symbol.asyncIterator = I("asynciterator")));
const xe = Y({});
for (let e = 0; e < H.length; e++) {
  const r = H[e];
  try {
    xe[r] = p[r];
  } catch {
  }
}
const X = I("window");
function it() {
  return j(Y({ [X]: p }), xe);
}
function I(e) {
  return e + Math.random().toString(36).substring(2);
}
function st(e) {
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
const at = "0.4.8", B = { RES: void 0 }, w = { RES: void 0 }, E = I("continue"), k = I("break"), se = I("super"), T = I("supercall"), ae = I("noctor"), W = I("clsctor"), le = I("newtarget"), x = I("noinit"), $ = I("deadzone");
class re {
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
class C {
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
class Ie {
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
    this.context = Y(null), this.parent = r, this.isolated = t;
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
      return r in t ? new C(t, r) : null;
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
      n.context[r] = new re("var", t === x ? void 0 : t);
    else if (i.kind === "var")
      t !== x && i.set(t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
    if (!n.parent) {
      const s = n.find("window").get();
      t !== x && v(s, r, { value: t, writable: !0, enumerable: !0 });
    }
  }
  /**
   * Declare a let variable
   * @param name variable identifier name
   * @param value variable value
   */
  let(r, t) {
    const n = this.context[r];
    if (!n || n.get() === $)
      this.context[r] = new re("let", t);
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
    if (!n || n.get() === $)
      this.context[r] = new re("const", t);
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
      this.context[r] = new re("var", t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
  }
}
function R(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const s = r.find(e.name);
  if (s) {
    if (n)
      return s;
    {
      const a = s.get();
      if (a === $)
        throw new ReferenceError(`${e.name} is not defined`);
      return a;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function lt(e, r) {
  return Symbol.for(`private:${e.name}`);
}
const ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: R,
  PrivateIdentifier: lt
}, Symbol.toStringTag, { value: "Module" }));
function $e(e, r) {
  return e.value;
}
const ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: $e
}, Symbol.toStringTag, { value: "Module" }));
function ut(e, r) {
  const t = r.find(T);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function ft(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(Q(i, r)) : t.push(d(i, r));
  }
  return t;
}
function yt(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      j(t, Q(i, r));
    else if (i.type === "Property") {
      let s;
      const a = i.key;
      i.computed ? s = d(a, r) : a.type === "Identifier" ? s = a.name : s = "" + $e(a);
      const l = d(i.value, r), c = i.kind;
      if (c === "init")
        t[s] = l;
      else if (c === "get") {
        const o = A(t, s);
        v(t, s, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = A(t, s);
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
function pt(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = N(e, t);
    return t.const(e.id.name, n), n;
  } else
    return N(e, r);
}
function dt(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +d(t, r);
    case "-":
      return -d(t, r);
    case "!":
      return !d(t, r);
    case "~":
      return ~d(t, r);
    case "void":
      return void d(t, r);
    case "typeof":
      return t.type === "Identifier" ? typeof R(t, r, { throwErr: !1 }) : typeof d(t, r);
    case "delete":
      if (t.type === "MemberExpression")
        return Z(t, r, { getVar: !0 }).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return d(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function ht(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = R(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = Z(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function gt(e, r) {
  const t = d(e.left, r), n = d(e.right, r);
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
function mt(e, r) {
  const t = d(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = R(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const s = r.global().find("window").get();
      i = new C(s, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = Z(n, r, { getVar: !0 });
  else
    return P(n, r, { feed: t });
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
function vt(e, r) {
  switch (e.operator) {
    case "||":
      return d(e.left, r) || d(e.right, r);
    case "&&":
      return d(e.left, r) && d(e.right, r);
    case "??": {
      const t = d(e.left, r);
      return t ?? d(e.right, r);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function Z(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let s;
  if (e.object.type === "Super" ? s = Pe(e.object, r, { getProto: !0 }) : s = d(e.object, r), e.optional && s == null)
    return;
  if (n) return s;
  const a = e.property.type === "PrivateIdentifier";
  let l;
  if (a)
    if (l = Symbol.for(`private:${e.property.name}`), typeof s == "function") {
      const o = s.__privateStaticFields;
      if (!o || !o.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Ie(o, l) : o.get(l);
    } else {
      const o = s.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const y = f.get(s);
      if (!y || !(l in y))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new C(y, l) : y[l];
    }
  else e.computed ? l = d(e.property, r) : l = e.property.name;
  if (i) {
    const c = Ee(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get(), f = I(l);
      return v(o, f, { set: c }), new C(o, f);
    } else
      return new C(s, l);
  } else {
    const c = Se(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get();
      return c.call(o);
    } else
      return s[l];
  }
}
function bt(e, r) {
  return d(e.test, r) ? d(e.consequent, r) : d(e.alternate, r);
}
function wt(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = Z(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let s;
    if (e.callee.property.type === "PrivateIdentifier")
      if (s = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const c = n.__privateStaticFields;
        t = c ? c.get(s) : void 0;
      } else {
        const c = n.constructor, o = c && c.__privateInstanceFields, f = o ? o.get(n) : null;
        t = f ? f[s] : void 0;
      }
    else if (e.callee.computed)
      if (s = d(e.callee.property, r), e.callee.object.type === "Super") {
        const l = r.find("this").get();
        t = n[s].bind(l);
      } else
        t = n[s];
    else if (s = e.callee.property.name, e.callee.object.type === "Super") {
      const l = r.find("this").get();
      t = n[s].bind(l);
    } else
      t = n[s];
    if (e.optional && t == null)
      return;
    if (typeof t != "function")
      throw new TypeError(`${s} is not a function`);
    if (t[W])
      throw new TypeError(`Class constructor ${s} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = d(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[W]) {
      let s;
      if (e.callee.type === "Identifier")
        s = e.callee.name;
      else
        try {
          s = JSON.stringify(t);
        } catch {
          s = "" + t;
        }
      throw typeof t != "function" ? new TypeError(`${s} is not a function`) : new TypeError(`Class constructor ${s} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let s = 0; s < e.arguments.length; s++) {
    const a = e.arguments[s];
    a.type === "SpreadElement" ? i = i.concat(Q(a, r)) : i.push(d(a, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(T).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(T).set(!0);
  }
  return n && n[X] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[X], i) : t.apply(n, i);
}
function St(e, r) {
  const t = d(e.callee, r);
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
    const s = e.arguments[i];
    s.type === "SpreadElement" ? n = n.concat(Q(s, r)) : n.push(d(s, r));
  }
  return new t(...n);
}
function Et(e, r) {
  return r.find(le).get();
}
function kt(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = d(e.expressions[n], r);
  return t;
}
function xt(e, r) {
  return N(e, r);
}
function It(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", s, a;
  for (; s = t.shift(); )
    i += Oe(s), a = n.shift(), a && (i += d(a, r));
  return i;
}
function $t(e, r) {
  const t = d(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), s = n.map((c) => c.value.raw);
  v(i, "raw", {
    value: ie(s)
  });
  const a = e.quasi.expressions, l = [];
  if (a)
    for (let c = 0; c < a.length; c++)
      l.push(d(a[c], r));
  return t(ie(i), ...l);
}
function Oe(e, r) {
  return e.value.raw;
}
function Ot(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = ye(e, t);
    return t.const(e.id.name, n), n;
  } else
    return ye(e, r);
}
function Pe(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(se).get();
  return n ? i.prototype : i;
}
function Q(e, r) {
  return d(e.argument, r);
}
function Pt(e, r) {
  return d(e.expression, r);
}
const _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: ft,
  ArrowFunctionExpression: xt,
  AssignmentExpression: mt,
  BinaryExpression: gt,
  CallExpression: wt,
  ChainExpression: Pt,
  ClassExpression: Ot,
  ConditionalExpression: bt,
  FunctionExpression: pt,
  LogicalExpression: vt,
  MemberExpression: Z,
  MetaProperty: Et,
  NewExpression: St,
  ObjectExpression: yt,
  SequenceExpression: kt,
  SpreadElement: Q,
  Super: Pe,
  TaggedTemplateExpression: $t,
  TemplateElement: Oe,
  TemplateLiteral: It,
  ThisExpression: ut,
  UnaryExpression: dt,
  UpdateExpression: ht
}, Symbol.toStringTag, { value: "Module" }));
function jt(e, r) {
  d(e.expression, r);
}
function M(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, s = n ? r : new S(r);
  i || pe(e, s, { onlyBlock: !0 });
  for (let a = 0; a < e.body.length; a++) {
    const l = d(e.body[a], s);
    if (l === k || l === E || l === w)
      return l;
  }
}
function Ft() {
}
function Dt() {
  debugger;
}
function Ct(e, r) {
  return w.RES = e.argument ? d(e.argument, r) : void 0, w;
}
function At() {
  return k;
}
function Tt() {
  return E;
}
function Rt(e, r) {
  return d(e.test, r) ? d(e.consequent, r) : d(e.alternate, r);
}
function Bt(e, r) {
  const t = d(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const s = e.cases[i];
    if (!n && (!s.test || d(s.test, r) === t) && (n = !0), n) {
      const a = _e(s, r);
      if (a === k)
        break;
      if (a === E || a === w)
        return a;
    }
  }
}
function _e(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = d(e.consequent[t], r);
    if (n === k || n === E || n === w)
      return n;
  }
}
function Mt(e, r) {
  throw d(e.argument, r);
}
function Vt(e, r) {
  try {
    return M(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new S(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const s = i.name;
          n.var(s, t);
        } else
          P(i, r, { feed: t });
      return je(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = M(e.finalizer, r);
      if (t === k || t === E || t === w)
        return t;
    }
  }
}
function je(e, r) {
  return M(e.body, r, { invasived: !0 });
}
function Ut(e, r) {
  for (; d(e.test, r); ) {
    const t = d(e.body, r);
    if (t === k)
      break;
    if (t === E)
      continue;
    if (t === w)
      return t;
  }
}
function Nt(e, r) {
  do {
    const t = d(e.body, r);
    if (t === k)
      break;
    if (t === E)
      continue;
    if (t === w)
      return t;
  } while (d(e.test, r));
}
function qt(e, r) {
  const t = new S(r);
  for (d(e.init, t); !e.test || d(e.test, t); d(e.update, t)) {
    const n = new S(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = M(e.body, n, { invasived: !0 }) : i = d(e.body, n), i === k)
      break;
    if (i === E)
      continue;
    if (i === w)
      return i;
  }
}
function zt(e, r) {
  for (const t in d(e.right, r)) {
    const n = He(e, r, { value: t });
    if (n === k)
      break;
    if (n === E)
      continue;
    if (n === w)
      return n;
  }
}
function Wt(e, r) {
  const t = d(e.right, r);
  for (const n of t) {
    const i = He(e, r, { value: n });
    if (i === k)
      break;
    if (i === E)
      continue;
    if (i === w)
      return i;
  }
}
const Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: M,
  BreakStatement: At,
  CatchClause: je,
  ContinueStatement: Tt,
  DebuggerStatement: Dt,
  DoWhileStatement: Nt,
  EmptyStatement: Ft,
  ExpressionStatement: jt,
  ForInStatement: zt,
  ForOfStatement: Wt,
  ForStatement: qt,
  IfStatement: Rt,
  ReturnStatement: Ct,
  SwitchCase: _e,
  SwitchStatement: Bt,
  ThrowStatement: Mt,
  TryStatement: Vt,
  WhileStatement: Ut
}, Symbol.toStringTag, { value: "Module" }));
function Fe(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = {} } = t, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (s || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? r[n](f.name, s ? $ : n === "var" ? x : void 0) : P(f, r, { kind: n, hoist: i, onlyBlock: s });
        } else
          L(o, r, { kind: n, hoist: i, onlyBlock: s });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = d(o.key, r) : f = o.key.name, l.push(f);
      const y = o.value;
      y.type === "Identifier" ? r[n](y.name, a[f]) : P(y, r, { kind: n, feed: a[f] });
    } else {
      const f = j({}, a);
      for (let y = 0; y < l.length; y++) delete f[l[y]];
      L(o, r, { kind: n, feed: f });
    }
  }
}
function De(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (s || n === "var") && (o.type === "Identifier" ? r[n](o.name, s ? $ : n === "var" ? x : void 0) : P(o, r, { kind: n, hoist: i, onlyBlock: s }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, a[c]);
        else {
          const f = R(o, r, { getVar: !0 });
          f.set(a[c]), l.push(f.get());
        }
      else o.type === "RestElement" ? L(o, r, { kind: n, feed: a.slice(c) }) : P(o, r, { kind: n, feed: a[c] });
  }
  if (l.length)
    return l;
}
function L(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = e.argument;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? $ : n === "var" ? x : void 0) : P(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? n ? r[n](l.name, a) : R(l, r, { getVar: !0 }).set(a) : P(l, r, { kind: n, feed: a });
}
function Ce(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = d(e.right, r) } = t, l = e.left;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? $ : n === "var" ? x : void 0) : P(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? r[n](l.name, a) : P(l, r, { kind: n, feed: a });
}
const Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: De,
  AssignmentPattern: Ce,
  ObjectPattern: Fe,
  RestElement: L
}, Symbol.toStringTag, { value: "Module" }));
function Jt(e, r) {
  for (let t = 0; t < e.body.length; t++)
    d(e.body[t], r);
}
const Gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: Jt
}, Symbol.toStringTag, { value: "Module" }));
let oe;
function d(e, r) {
  if (!e) return;
  oe || (oe = j(
    {},
    Xe,
    _t,
    ot,
    Lt,
    ct,
    Kt,
    Gt
  ));
  const t = oe[e.type];
  if (t)
    return t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function Ht(e, r) {
  r.func(e.id.name, N(e, r));
}
function q(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    Ae(e.declarations[n], r, j({ kind: i }, t));
  }
}
function Ae(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a } = t;
  if (i)
    (s || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, s ? $ : n === "var" ? x : void 0) : P(e.id, r, { kind: n, hoist: i, onlyBlock: s }));
  else {
    const l = "feed" in t, c = l ? a : d(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? r.var(o, x) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && v(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      P(e.id, r, { kind: n, feed: c });
  }
}
function Xt(e, r) {
  r.func(e.id.name, ye(e, r));
}
function Te(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let s = 0; s < e.body.length; s++) {
    const a = e.body[s];
    if (a.type === "MethodDefinition")
      Re(a, r, { klass: n, superClass: i });
    else {
      if (a.type === "PropertyDefinition")
        continue;
      if (a.type === "StaticBlock")
        continue;
    }
  }
}
function Re(e, r, t = {}) {
  const { klass: n, superClass: i } = t, s = e.key.type === "PrivateIdentifier";
  let a;
  if (s)
    a = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    a = d(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = N(e.value, r, { superClass: i });
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
      const c = e.static ? n : n.prototype, o = A(c, a);
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
      const c = e.static ? n : n.prototype, o = A(c, a);
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
function* J(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const s = r.find(e.name);
  if (s) {
    if (n)
      return s;
    {
      const a = s.get();
      if (a === $)
        throw new ReferenceError(`${e.name} is not defined`);
      return a;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
function* Yt(e, r) {
  return Symbol.for(`private:${e.name}`);
}
const Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: J,
  PrivateIdentifier: Yt
}, Symbol.toStringTag, { value: "Module" }));
function* Be(e, r) {
  return e.value;
}
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Be
}, Symbol.toStringTag, { value: "Module" }));
function* er(e, r) {
  const t = r.find(T);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function* tr(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(yield* te(i, r)) : t.push(yield* h(i, r));
  }
  return t;
}
function* rr(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      j(t, yield* te(i, r));
    else if (i.type === "Property") {
      let s;
      const a = i.key;
      i.computed ? s = yield* h(a, r) : a.type === "Identifier" ? s = a.name : s = "" + (yield* Be(a));
      const l = yield* h(i.value, r), c = i.kind;
      if (c === "init")
        t[s] = l;
      else if (c === "get") {
        const o = A(t, s);
        v(t, s, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = A(t, s);
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
function* nr(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = U(e, t);
    return t.const(e.id.name, n), n;
  } else
    return U(e, r);
}
function* ir(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +(yield* h(t, r));
    case "-":
      return -(yield* h(t, r));
    case "!":
      return !(yield* h(t, r));
    case "~":
      return ~(yield* h(t, r));
    case "void":
      return void (yield* h(t, r));
    case "typeof":
      return t.type === "Identifier" ? typeof (yield* J(t, r, { throwErr: !1 })) : typeof (yield* h(t, r));
    case "delete":
      if (t.type === "MemberExpression")
        return (yield* ee(t, r, { getVar: !0 })).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* h(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* sr(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = yield* J(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = yield* ee(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function* ar(e, r) {
  const t = yield* h(e.left, r), n = yield* h(e.right, r);
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
function* lr(e, r) {
  const t = yield* h(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* J(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const s = r.global().find("window").get();
      i = new C(s, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = yield* ee(n, r, { getVar: !0 });
  else
    return yield* O(n, r, { feed: t });
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
function* or(e, r) {
  switch (e.operator) {
    case "||":
      return (yield* h(e.left, r)) || (yield* h(e.right, r));
    case "&&":
      return (yield* h(e.left, r)) && (yield* h(e.right, r));
    case "??": {
      const t = yield* h(e.left, r);
      return t ?? (yield* h(e.right, r));
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* ee(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let s;
  if (e.object.type === "Super" ? s = yield* Ve(e.object, r, { getProto: !0 }) : s = yield* h(e.object, r), e.optional && s == null)
    return;
  if (n) return s;
  const a = e.property.type === "PrivateIdentifier";
  let l;
  if (a)
    if (l = Symbol.for(`private:${e.property.name}`), typeof s == "function") {
      const o = s.__privateStaticFields;
      if (!o || !o.has(l))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new Ie(o, l) : o.get(l);
    } else {
      const o = s.constructor, f = o && o.__privateInstanceFields;
      if (!f)
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      const y = f.get(s);
      if (!y || !(l in y))
        throw new TypeError(`Cannot read private member #${e.property.name} from an object whose class did not declare it`);
      return i ? new C(y, l) : y[l];
    }
  else e.computed ? l = yield* h(e.property, r) : l = e.property.name;
  if (i) {
    const c = Ee(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get(), f = I(l);
      return v(o, f, { set: c }), new C(o, f);
    } else
      return new C(s, l);
  } else {
    const c = Se(s, l);
    if (e.object.type === "Super" && c) {
      const o = r.find("this").get();
      return c.call(o);
    } else
      return s[l];
  }
}
function* cr(e, r) {
  return (yield* h(e.test, r)) ? yield* h(e.consequent, r) : yield* h(e.alternate, r);
}
function* ur(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* ee(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let s;
    if (e.callee.property.type === "PrivateIdentifier")
      if (s = Symbol.for(`private:${e.callee.property.name}`), typeof n == "function") {
        const c = n.__privateStaticFields;
        t = c ? c.get(s) : void 0;
      } else {
        const c = n.constructor, o = c && c.__privateInstanceFields, f = o ? o.get(n) : null;
        t = f ? f[s] : void 0;
      }
    else if (e.callee.computed)
      if (s = yield* h(e.callee.property, r), e.callee.object.type === "Super") {
        const l = r.find("this").get();
        t = n[s].bind(l);
      } else
        t = n[s];
    else if (s = e.callee.property.name, e.callee.object.type === "Super") {
      const l = r.find("this").get();
      t = n[s].bind(l);
    } else
      t = n[s];
    if (e.optional && t == null)
      return;
    if (typeof t != "function")
      throw new TypeError(`${s} is not a function`);
    if (t[W])
      throw new TypeError(`Class constructor ${s} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = yield* h(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[W]) {
      let s;
      if (e.callee.type === "Identifier")
        s = e.callee.name;
      else
        try {
          s = JSON.stringify(t);
        } catch {
          s = "" + t;
        }
      throw typeof t != "function" ? new TypeError(`${s} is not a function`) : new TypeError(`Class constructor ${s} cannot be invoked without 'new'`);
    }
  }
  let i = [];
  for (let s = 0; s < e.arguments.length; s++) {
    const a = e.arguments[s];
    a.type === "SpreadElement" ? i = i.concat(yield* te(a, r)) : i.push(yield* h(a, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(T).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(T).set(!0);
  }
  return n && n[X] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[X], i) : t.apply(n, i);
}
function* fr(e, r) {
  const t = yield* h(e.callee, r);
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
    const s = e.arguments[i];
    s.type === "SpreadElement" ? n = n.concat(yield* te(s, r)) : n.push(yield* h(s, r));
  }
  return new t(...n);
}
function* yr(e, r) {
  return r.find(le).get();
}
function* pr(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = yield* h(e.expressions[n], r);
  return t;
}
function* dr(e, r) {
  return U(e, r);
}
function* hr(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", s, a;
  for (; s = t.shift(); )
    i += yield* Me(s), a = n.shift(), a && (i += yield* h(a, r));
  return i;
}
function* gr(e, r) {
  const t = yield* h(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), s = n.map((c) => c.value.raw);
  v(i, "raw", {
    value: ie(s)
  });
  const a = e.quasi.expressions, l = [];
  if (a)
    for (let c = 0; c < a.length; c++)
      l.push(yield* h(a[c], r));
  return t(ie(i), ...l);
}
function* Me(e, r) {
  return e.value.raw;
}
function* mr(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = yield* ue(e, t);
    return t.const(e.id.name, n), n;
  } else
    return yield* ue(e, r);
}
function* Ve(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(se).get();
  return n ? i.prototype : i;
}
function* te(e, r) {
  return yield* h(e.argument, r);
}
function* vr(e, r) {
  return yield* h(e.expression, r);
}
function* br(e, r) {
  const t = yield* h(e.argument, r);
  return e.delegate ? yield* t : yield t;
}
function* wr(e, r) {
  return B.RES = yield* h(e.argument, r), yield B;
}
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: tr,
  ArrowFunctionExpression: dr,
  AssignmentExpression: lr,
  AwaitExpression: wr,
  BinaryExpression: ar,
  CallExpression: ur,
  ChainExpression: vr,
  ClassExpression: mr,
  ConditionalExpression: cr,
  FunctionExpression: nr,
  LogicalExpression: or,
  MemberExpression: ee,
  MetaProperty: yr,
  NewExpression: fr,
  ObjectExpression: rr,
  SequenceExpression: pr,
  SpreadElement: te,
  Super: Ve,
  TaggedTemplateExpression: gr,
  TemplateElement: Me,
  TemplateLiteral: hr,
  ThisExpression: er,
  UnaryExpression: ir,
  UpdateExpression: sr,
  YieldExpression: br
}, Symbol.toStringTag, { value: "Module" }));
function* Er(e, r) {
  yield* h(e.expression, r);
}
function* V(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, s = n ? r : new S(r);
  i || (yield* Ge(e, s, { onlyBlock: !0 }));
  for (let a = 0; a < e.body.length; a++) {
    const l = yield* h(e.body[a], s);
    if (l === k || l === E || l === w)
      return l;
  }
}
function* kr() {
}
function* xr() {
  debugger;
}
function* Ir(e, r) {
  return w.RES = e.argument ? yield* h(e.argument, r) : void 0, w;
}
function* $r() {
  return k;
}
function* Or() {
  return E;
}
function* Pr(e, r) {
  return (yield* h(e.test, r)) ? yield* h(e.consequent, r) : yield* h(e.alternate, r);
}
function* _r(e, r) {
  const t = yield* h(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const s = e.cases[i];
    if (!n && (!s.test || (yield* h(s.test, r)) === t) && (n = !0), n) {
      const a = yield* Ue(s, r);
      if (a === k)
        break;
      if (a === E || a === w)
        return a;
    }
  }
}
function* Ue(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = yield* h(e.consequent[t], r);
    if (n === k || n === E || n === w)
      return n;
  }
}
function* jr(e, r) {
  throw yield* h(e.argument, r);
}
function* Fr(e, r) {
  try {
    return yield* V(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new S(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const s = i.name;
          n.var(s, t);
        } else
          yield* O(i, r, { feed: t });
      return yield* Ne(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = yield* V(e.finalizer, r);
      if (t === k || t === E || t === w)
        return t;
    }
  }
}
function* Ne(e, r) {
  return yield* V(e.body, r, { invasived: !0 });
}
function* Dr(e, r) {
  for (; yield* h(e.test, r); ) {
    const t = yield* h(e.body, r);
    if (t === k)
      break;
    if (t === E)
      continue;
    if (t === w)
      return t;
  }
}
function* Cr(e, r) {
  do {
    const t = yield* h(e.body, r);
    if (t === k)
      break;
    if (t === E)
      continue;
    if (t === w)
      return t;
  } while (yield* h(e.test, r));
}
function* Ar(e, r) {
  const t = new S(r);
  for (yield* h(e.init, t); !e.test || (yield* h(e.test, t)); yield* h(e.update, t)) {
    const n = new S(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = yield* V(e.body, n, { invasived: !0 }) : i = yield* h(e.body, n), i === k)
      break;
    if (i === E)
      continue;
    if (i === w)
      return i;
  }
}
function* Tr(e, r) {
  for (const t in yield* h(e.right, r)) {
    const n = yield* fe(e, r, { value: t });
    if (n === k)
      break;
    if (n === E)
      continue;
    if (n === w)
      return n;
  }
}
function* Rr(e, r) {
  const t = yield* h(e.right, r);
  if (e.await) {
    const n = st(t);
    let i;
    for (B.RES = n.next(), i = yield B; !i.done; B.RES = n.next(), i = yield B) {
      const s = yield* fe(e, r, { value: i.value });
      if (s === k)
        break;
      if (s === E)
        continue;
      if (s === w)
        return s;
    }
  } else
    for (const n of t) {
      const i = yield* fe(e, r, { value: n });
      if (i === k)
        break;
      if (i === E)
        continue;
      if (i === w)
        return i;
    }
}
const Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: V,
  BreakStatement: $r,
  CatchClause: Ne,
  ContinueStatement: Or,
  DebuggerStatement: xr,
  DoWhileStatement: Cr,
  EmptyStatement: kr,
  ExpressionStatement: Er,
  ForInStatement: Tr,
  ForOfStatement: Rr,
  ForStatement: Ar,
  IfStatement: Pr,
  ReturnStatement: Ir,
  SwitchCase: Ue,
  SwitchStatement: _r,
  ThrowStatement: jr,
  TryStatement: Fr,
  WhileStatement: Dr
}, Symbol.toStringTag, { value: "Module" }));
function* qe(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = {} } = t, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (s || n === "var")
        if (o.type === "Property") {
          const f = o.value;
          f.type === "Identifier" ? r[n](f.name, s ? $ : n === "var" ? x : void 0) : yield* O(f, r, { kind: n, hoist: i, onlyBlock: s });
        } else
          yield* K(o, r, { kind: n, hoist: i, onlyBlock: s });
    } else if (o.type === "Property") {
      let f;
      o.computed ? f = yield* h(o.key, r) : f = o.key.name, l.push(f);
      const y = o.value;
      y.type === "Identifier" ? r[n](y.name, a[f]) : yield* O(y, r, { kind: n, feed: a[f] });
    } else {
      const f = j({}, a);
      for (let y = 0; y < l.length; y++) delete f[l[y]];
      yield* K(o, r, { kind: n, feed: f });
    }
  }
}
function* ze(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (s || n === "var") && (o.type === "Identifier" ? r[n](o.name, s ? $ : n === "var" ? x : void 0) : yield* O(o, r, { kind: n, hoist: i, onlyBlock: s }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, a[c]);
        else {
          const f = yield* J(o, r, { getVar: !0 });
          f.set(a[c]), l.push(f.get());
        }
      else o.type === "RestElement" ? yield* K(o, r, { kind: n, feed: a.slice(c) }) : yield* O(o, r, { kind: n, feed: a[c] });
  }
  if (l.length)
    return l;
}
function* K(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: s = !1, feed: a = [] } = t, l = e.argument;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? $ : n === "var" ? x : void 0) : yield* O(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? n ? r[n](l.name, a) : (yield* J(l, r, { getVar: !0 })).set(a) : yield* O(l, r, { kind: n, feed: a });
}
function* We(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a = yield* h(e.right, r) } = t, l = e.left;
  i ? (s || n === "var") && (l.type === "Identifier" ? r[n](l.name, s ? $ : n === "var" ? x : void 0) : yield* O(l, r, { kind: n, hoist: i, onlyBlock: s })) : l.type === "Identifier" ? r[n](l.name, a) : yield* O(l, r, { kind: n, feed: a });
}
const Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: ze,
  AssignmentPattern: We,
  ObjectPattern: qe,
  RestElement: K
}, Symbol.toStringTag, { value: "Module" }));
let ce;
function* h(e, r) {
  if (!e) return;
  ce || (ce = j(
    {},
    Ye,
    Sr,
    Zt,
    Br,
    Qt,
    Mr
    /*<add>*/
    /*program*/
    /*</add>*/
  ));
  const t = ce[e.type];
  if (t)
    return yield* t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function* Vr(e, r) {
  r.func(e.id.name, U(e, r));
}
function* z(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* Le(e.declarations[n], r, j({ kind: i }, t));
  }
}
function* Le(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: s = !1, feed: a } = t;
  if (i)
    (s || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, s ? $ : n === "var" ? x : void 0) : yield* O(e.id, r, { kind: n, hoist: i, onlyBlock: s }));
  else {
    const l = "feed" in t, c = l ? a : yield* h(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? r.var(o, x) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && v(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      yield* O(e.id, r, { kind: n, feed: c });
  }
}
function* Ur(e, r) {
  r.func(e.id.name, yield* ue(e, r));
}
function* Ke(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let s = 0; s < e.body.length; s++) {
    const a = e.body[s];
    if (a.type === "MethodDefinition")
      yield* Je(a, r, { klass: n, superClass: i });
    else {
      if (a.type === "PropertyDefinition")
        continue;
      if (a.type === "StaticBlock")
        continue;
    }
  }
}
function* Je(e, r, t = {}) {
  const { klass: n, superClass: i } = t, s = e.key.type === "PrivateIdentifier";
  let a;
  if (s)
    a = Symbol.for(`private:${e.key.name}`);
  else if (e.computed)
    a = yield* h(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const l = yield* U(e.value, r, { superClass: i });
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
      const c = e.static ? n : n.prototype, o = A(c, a);
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
      const c = e.static ? n : n.prototype, o = A(c, a);
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
function ve(e, r = {}) {
  const { res: t, err: n, ret: i, fullRet: s } = r;
  return new Promise((a, l) => {
    if ("ret" in r)
      return a(e.return(i));
    "err" in r ? o(n) : c(t);
    function c(y) {
      let u;
      try {
        u = e.next(y);
      } catch (m) {
        return l(m);
      }
      return f(u), null;
    }
    function o(y) {
      let u;
      try {
        u = e.throw(y);
      } catch (m) {
        return l(m);
      }
      f(u);
    }
    function f(y) {
      if (y.done) return a(s ? y : y.value);
      if (y.value !== B) return a(y);
      const u = y.value.RES;
      return (u && u.then === "function" ? u : Promise.resolve(u)).then(c, o);
    }
  });
}
function* Ge(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], s = [];
  for (let a = 0; a < e.body.length; a++) {
    const l = e.body[a];
    l.type === "FunctionDeclaration" ? (i.push(l), s.push(a)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? yield* z(l, r, { hoist: !0, onlyBlock: !0 }) : n || (yield* F(l, r));
  }
  if (s.length) {
    for (let a = s.length - 1; a > -1; a--)
      e.body.splice(s[a], 1);
    e.body = i.concat(e.body);
  }
}
function* F(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      yield* z(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* z(e.left, r, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* z(e.init, r, { hoist: !0 }));
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
      for (let s = 0; s < t.length; s++)
        yield* F(t[s], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let s = 0; s < n.length; s++)
          yield* F(n[s], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let s = 0; s < i.length; s++)
          yield* F(i[s], r);
      break;
    }
  }
}
function* O(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return yield* qe(e, r, t);
    case "ArrayPattern":
      return yield* ze(e, r, t);
    case "RestElement":
      return yield* K(e, r, t);
    case "AssignmentPattern":
      return yield* We(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function U(e, r, t = {}) {
  if (
    /*<replace by:=node.generator\s||\snode.async>*/
    !e.generator && !e.async
  )
    return N(e, r, t);
  const { superClass: n, isCtor: i } = t, s = e.params, a = function* (...c) {
    const o = new S(r, !0);
    e.type !== "ArrowFunctionExpression" && (o.const("this", this), o.let("arguments", arguments), o.const(le, new.target), n && (o.const(se, n), i && o.let(T, !1)));
    for (let y = 0; y < s.length; y++) {
      const u = s[y];
      u.type === "Identifier" ? o.var(u.name, c[y]) : u.type === "RestElement" ? yield* K(u, o, { kind: "var", feed: c.slice(y) }) : yield* O(u, o, { feed: c[y] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (yield* Ge(e.body, o), f = yield* V(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = yield* h(e.body, o), e.type === "ArrowFunctionExpression" && (w.RES = f, f = w)), f === w)
      return f.RES;
  };
  let l;
  return e.async && e.generator ? l = function() {
    const c = a.apply(this, arguments);
    let o = Promise.resolve(), f = !1;
    const y = (m) => o = o.then(() => ve(c, j({ fullRet: !0 }, m))).catch((g) => {
      if (!f)
        return f = !0, Promise.reject(g);
    }), u = {
      next: (m) => y({ res: m }),
      throw: (m) => y({ err: m }),
      return: (m) => y({ ret: m })
    };
    return typeof Symbol == "function" && (u[Symbol.iterator] = function() {
      return this;
    }), u;
  } : e.async ? l = function() {
    return ve(a.apply(this, arguments));
  } : l = a, v(l, ae, { value: !0 }), v(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), v(l, "length", {
    value: s.length,
    configurable: !0
  }), l;
}
function* ue(e, r) {
  const t = yield* h(e.superClass, r), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), s = e.body.body, a = [];
  let l = null;
  const c = [], o = [];
  for (let y = 0; y < s.length; y++) {
    const u = s[y];
    if (u.type === "MethodDefinition" && u.kind === "constructor")
      l = yield* U(u.value, r, { superClass: t, isCtor: !0 });
    else if (u.type === "PropertyDefinition") {
      const m = u.key.type === "PrivateIdentifier";
      let g;
      if (m ? g = Symbol.for(`private:${u.key.name}`) : u.computed ? g = yield* h(u.key, r) : g = u.key.type === "Identifier" ? u.key.name : yield* h(u.key, r), u.static) {
        const b = u.value ? yield* h(u.value, r) : void 0;
        o.push({ key: g, value: b, isPrivate: m });
      } else
        c.push({ key: g, valueNode: u.value, isPrivate: m });
    } else u.type === "StaticBlock" && a.push(u);
  }
  let f;
  l ? f = function(...y) {
    const u = {}, m = f.__privateInstanceMethods;
    m && m.forEach((g, b) => {
      u[b] = g;
    });
    for (let g = 0; g < c.length; g++) {
      const b = c[g];
      b.isPrivate && (u[b.key] = void 0);
    }
    (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
    for (let g = 0; g < c.length; g++) {
      const b = c[g], _ = new S(r, !1);
      _.const("this", this);
      const G = b.valueNode ? h(b.valueNode, _) : void 0;
      b.isPrivate ? u[b.key] = G : this[b.key] = G;
    }
    return l.apply(this, y);
  } : f = function() {
    const y = {}, u = f.__privateInstanceMethods;
    u && u.forEach((m, g) => {
      y[g] = m;
    });
    for (let m = 0; m < c.length; m++) {
      const g = c[m];
      g.isPrivate && (y[g.key] = void 0);
    }
    (Object.keys(y).length > 0 || Object.getOwnPropertySymbols(y).length > 0) && n.set(this, y);
    for (let m = 0; m < c.length; m++) {
      const g = c[m], b = new S(r, !1);
      b.const("this", this);
      const _ = g.valueNode ? h(g.valueNode, b) : void 0;
      g.isPrivate ? y[g.key] = _ : this[g.key] = _;
    }
    t && t.apply(this);
  }, t && ke(f, t), v(f, "__privateInstanceFields", { value: n }), v(f, "__privateStaticFields", { value: i }), yield* Ke(e.body, r, { klass: f, superClass: t });
  for (let y = 0; y < o.length; y++) {
    const u = o[y];
    u.isPrivate ? i.set(u.key, u.value) : f[u.key] = u.value;
  }
  for (let y = 0; y < a.length; y++) {
    const u = a[y], m = new S(r, !0);
    m.const("this", f);
    for (let g = 0; g < u.body.length; g++)
      yield* h(u.body[g], m);
  }
  return v(f, W, { value: !0 }), v(f, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), f;
}
function* fe(e, r, t) {
  const { value: n } = t, i = e.left, s = new S(r);
  i.type === "VariableDeclaration" ? yield* z(i, s, { feed: n }) : i.type === "Identifier" ? (yield* R(i, r, { getVar: !0 })).set(n) : yield* O(i, r, { feed: n });
  let a;
  return e.body.type === "BlockStatement" ? a = yield* V(e.body, s, { invasived: !0 }) : a = yield* h(e.body, s), a;
}
function pe(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], s = [];
  for (let a = 0; a < e.body.length; a++) {
    const l = e.body[a];
    l.type === "FunctionDeclaration" ? (i.push(l), s.push(a)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? q(l, r, { hoist: !0, onlyBlock: !0 }) : n || D(l, r);
  }
  if (s.length) {
    for (let a = s.length - 1; a > -1; a--)
      e.body.splice(s[a], 1);
    e.body = i.concat(e.body);
  }
}
function D(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      q(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && q(e.left, r, { hoist: !0 });
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && q(e.init, r, { hoist: !0 });
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
      for (let s = 0; s < t.length; s++)
        D(t[s], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let s = 0; s < n.length; s++)
          D(n[s], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let s = 0; s < i.length; s++)
          D(i[s], r);
      break;
    }
  }
}
function P(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return Fe(e, r, t);
    case "ArrayPattern":
      return De(e, r, t);
    case "RestElement":
      return L(e, r, t);
    case "AssignmentPattern":
      return Ce(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function N(e, r, t = {}) {
  if (e.generator || e.async)
    return U(e, r, t);
  const { superClass: n, isCtor: i } = t, s = e.params;
  let l = function(...c) {
    const o = new S(r, !0);
    e.type !== "ArrowFunctionExpression" && (o.const("this", this), o.let("arguments", arguments), o.const(le, new.target), n && (o.const(se, n), i && o.let(T, !1)));
    for (let y = 0; y < s.length; y++) {
      const u = s[y];
      u.type === "Identifier" ? o.var(u.name, c[y]) : u.type === "RestElement" ? L(u, o, { kind: "var", feed: c.slice(y) }) : P(u, o, { feed: c[y] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (pe(e.body, o), f = M(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (f = d(e.body, o), e.type === "ArrowFunctionExpression" && (w.RES = f, f = w)), f === w)
      return f.RES;
  };
  return e.type === "ArrowFunctionExpression" && v(l, ae, { value: !0 }), v(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), v(l, "length", {
    value: s.length,
    configurable: !0
  }), l;
}
function ye(e, r) {
  const t = d(e.superClass, r), n = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new Map(), s = e.body.body, a = [];
  let l = null;
  const c = [], o = [];
  for (let y = 0; y < s.length; y++) {
    const u = s[y];
    if (u.type === "MethodDefinition" && u.kind === "constructor")
      l = N(u.value, r, { superClass: t, isCtor: !0 });
    else if (u.type === "PropertyDefinition") {
      const m = u.key.type === "PrivateIdentifier";
      let g;
      if (m ? g = Symbol.for(`private:${u.key.name}`) : u.computed ? g = d(u.key, r) : g = u.key.type === "Identifier" ? u.key.name : d(u.key, r), u.static) {
        const b = u.value ? d(u.value, r) : void 0;
        o.push({ key: g, value: b, isPrivate: m });
      } else
        c.push({ key: g, valueNode: u.value, isPrivate: m });
    } else u.type === "StaticBlock" && a.push(u);
  }
  let f;
  l ? f = function(...y) {
    const u = {}, m = f.__privateInstanceMethods;
    m && m.forEach((g, b) => {
      u[b] = g;
    });
    for (let g = 0; g < c.length; g++) {
      const b = c[g];
      b.isPrivate && (u[b.key] = void 0);
    }
    (Object.keys(u).length > 0 || Object.getOwnPropertySymbols(u).length > 0) && n.set(this, u);
    for (let g = 0; g < c.length; g++) {
      const b = c[g], _ = new S(r, !1);
      _.const("this", this);
      const G = b.valueNode ? d(b.valueNode, _) : void 0;
      b.isPrivate ? u[b.key] = G : this[b.key] = G;
    }
    return l.apply(this, y);
  } : f = function() {
    const y = {}, u = f.__privateInstanceMethods;
    u && u.forEach((m, g) => {
      y[g] = m;
    });
    for (let m = 0; m < c.length; m++) {
      const g = c[m];
      g.isPrivate && (y[g.key] = void 0);
    }
    (Object.keys(y).length > 0 || Object.getOwnPropertySymbols(y).length > 0) && n.set(this, y);
    for (let m = 0; m < c.length; m++) {
      const g = c[m], b = new S(r, !1);
      b.const("this", this);
      const _ = g.valueNode ? d(g.valueNode, b) : void 0;
      g.isPrivate ? y[g.key] = _ : this[g.key] = _;
    }
    t && t.apply(this);
  }, t && ke(f, t), v(f, "__privateInstanceFields", { value: n }), v(f, "__privateStaticFields", { value: i }), Te(e.body, r, { klass: f, superClass: t });
  for (let y = 0; y < o.length; y++) {
    const u = o[y];
    u.isPrivate ? i.set(u.key, u.value) : f[u.key] = u.value;
  }
  for (let y = 0; y < a.length; y++) {
    const u = a[y], m = new S(r, !0);
    m.const("this", f);
    for (let g = 0; g < u.body.length; g++)
      d(u.body[g], m);
  }
  return v(f, W, { value: !0 }), v(f, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), f;
}
function He(e, r, t) {
  const { value: n } = t, i = e.left, s = new S(r);
  i.type === "VariableDeclaration" ? q(i, s, { feed: n }) : i.type === "Identifier" ? R(i, r, { getVar: !0 }).set(n) : P(i, r, { feed: n });
  let a;
  return e.body.type === "BlockStatement" ? a = M(e.body, s, { invasived: !0 }) : a = d(e.body, s), a;
}
const de = class de {
  constructor(r = {}) {
    this.options = {}, this.scope = new S(null, !0), this.exports = {};
    let { ecmaVer: t = "latest", sandBox: n = !0 } = r;
    if (t !== "latest" && (t = t - (t < 2015 ? 0 : 2009), [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(t) === -1))
      throw new Error("unsupported ecmaVer");
    if (this.options.ecmaVersion = t, n) {
      const i = it();
      this.scope.let("window", i), this.scope.let("this", i);
    } else
      this.scope.let("window", p), this.scope.let("this", p);
    this.scope.const("exports", this.exports = {});
  }
  import(r, t) {
    if (typeof r == "string" && (r = { [r]: t }), typeof r != "object") return;
    const n = ne(r);
    for (let i = 0; i < n.length; i++) {
      const s = n[i];
      this.scope.var(s, r[s]);
    }
  }
  parse(r, t) {
    return typeof t == "function" ? t(r, j({}, this.options)) : he(r, this.options);
  }
  run(r) {
    const t = typeof r == "string" ? he(r, this.options) : r;
    pe(t, this.scope), d(t, this.scope);
  }
};
de.version = at;
let be = de;
export {
  be as default
};
//# sourceMappingURL=sval.js.map
