import { parse as fe } from "acorn";
const Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return je;
  },
  get ClassDeclaration() {
    return Lt;
  },
  get FunctionDeclaration() {
    return Wt;
  },
  get MethodDefinition() {
    return Pe;
  },
  get VariableDeclaration() {
    return U;
  },
  get VariableDeclarator() {
    return De;
  }
}, Symbol.toStringTag, { value: "Module" })), Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return Me;
  },
  get ClassDeclaration() {
    return Rr;
  },
  get FunctionDeclaration() {
    return Fr;
  },
  get MethodDefinition() {
    return qe;
  },
  get VariableDeclaration() {
    return N;
  },
  get VariableDeclarator() {
    return Ne;
  }
}, Symbol.toStringTag, { value: "Module" })), ee = Object.freeze, g = Object.defineProperty, j = Object.getOwnPropertyDescriptor, Ge = Object.prototype.hasOwnProperty;
function He(e, r) {
  return Ge.call(e, r);
}
const Q = Object.getOwnPropertyNames, ye = Object.setPrototypeOf;
function Xe(e, r) {
  ye ? ye(e, r) : e.__proto__ = r;
}
const he = Object.getPrototypeOf;
function Ye(e) {
  return he ? he(e) : e.__proto__;
}
const Ze = Object.getOwnPropertyDescriptor;
function ge(e, r, t) {
  for (; r; ) {
    const n = Ze(r, t), i = typeof n < "u" && typeof n.writable > "u" && typeof n[e] == "function" && n[e];
    if (i)
      return i;
    r = Ye(r);
  }
}
function me(e, r) {
  return ge("get", e, r);
}
function be(e, r) {
  return ge("set", e, r);
}
const J = Object.create;
function we(e, r) {
  Xe(e, r), e.prototype = J(r.prototype, {
    constructor: {
      value: e,
      writable: !0
    }
  });
}
function Qe(e) {
  for (let r = 1; r < arguments.length; ++r) {
    const t = arguments[r];
    for (const n in t)
      He(t, n) && (e[n] = t[n]);
  }
  return e;
}
const O = Object.assign || Qe;
let L = [], u = J(null);
try {
  if (!window.Object) throw 0;
  L = Q(u = window).filter((e) => e !== "webkitStorageInfo");
} catch {
  try {
    if (!global.Object) throw 0;
    L = Q(u = global).filter((r) => r !== "GLOBAL" && r !== "root");
  } catch {
    try {
      u.Object = Object;
    } catch {
    }
    try {
      u.Function = Function;
    } catch {
    }
    try {
      u.Array = Array;
    } catch {
    }
    try {
      u.Number = Number;
    } catch {
    }
    try {
      u.parseFloat = parseFloat;
    } catch {
    }
    try {
      u.parseInt = parseInt;
    } catch {
    }
    try {
      u.Infinity = 1 / 0;
    } catch {
    }
    try {
      u.NaN = NaN;
    } catch {
    }
    try {
      u.undefined = void 0;
    } catch {
    }
    try {
      u.Boolean = Boolean;
    } catch {
    }
    try {
      u.String = String;
    } catch {
    }
    try {
      u.Symbol = Symbol;
    } catch {
    }
    try {
      u.Date = Date;
    } catch {
    }
    try {
      u.Promise = Promise;
    } catch {
    }
    try {
      u.RegExp = RegExp;
    } catch {
    }
    try {
      u.Error = Error;
    } catch {
    }
    try {
      u.EvalError = EvalError;
    } catch {
    }
    try {
      u.RangeError = RangeError;
    } catch {
    }
    try {
      u.ReferenceError = ReferenceError;
    } catch {
    }
    try {
      u.SyntaxError = SyntaxError;
    } catch {
    }
    try {
      u.TypeError = TypeError;
    } catch {
    }
    try {
      u.URIError = URIError;
    } catch {
    }
    try {
      u.JSON = JSON;
    } catch {
    }
    try {
      u.Math = Math;
    } catch {
    }
    try {
      u.console = console;
    } catch {
    }
    try {
      u.Intl = Intl;
    } catch {
    }
    try {
      u.ArrayBuffer = ArrayBuffer;
    } catch {
    }
    try {
      u.Uint8Array = Uint8Array;
    } catch {
    }
    try {
      u.Int8Array = Int8Array;
    } catch {
    }
    try {
      u.Uint16Array = Uint16Array;
    } catch {
    }
    try {
      u.Int16Array = Int16Array;
    } catch {
    }
    try {
      u.Uint32Array = Uint32Array;
    } catch {
    }
    try {
      u.Int32Array = Int32Array;
    } catch {
    }
    try {
      u.Float32Array = Float32Array;
    } catch {
    }
    try {
      u.Float64Array = Float64Array;
    } catch {
    }
    try {
      u.Uint8ClampedArray = Uint8ClampedArray;
    } catch {
    }
    try {
      u.DataView = DataView;
    } catch {
    }
    try {
      u.Map = Map;
    } catch {
    }
    try {
      u.Set = Set;
    } catch {
    }
    try {
      u.WeakMap = WeakMap;
    } catch {
    }
    try {
      u.WeakSet = WeakSet;
    } catch {
    }
    try {
      u.Proxy = Proxy;
    } catch {
    }
    try {
      u.Reflect = Reflect;
    } catch {
    }
    try {
      u.decodeURI = decodeURI;
    } catch {
    }
    try {
      u.decodeURIComponent = decodeURIComponent;
    } catch {
    }
    try {
      u.encodeURI = encodeURI;
    } catch {
    }
    try {
      u.encodeURIComponent = encodeURIComponent;
    } catch {
    }
    try {
      u.escape = escape;
    } catch {
    }
    try {
      u.unescape = unescape;
    } catch {
    }
    try {
      u.eval = eval;
    } catch {
    }
    try {
      u.isFinite = isFinite;
    } catch {
    }
    try {
      u.isNaN = isNaN;
    } catch {
    }
    try {
      u.SharedArrayBuffer = SharedArrayBuffer;
    } catch {
    }
    try {
      u.Atomics = Atomics;
    } catch {
    }
    try {
      u.WebAssembly = WebAssembly;
    } catch {
    }
    try {
      u.clearInterval = clearInterval;
    } catch {
    }
    try {
      u.clearTimeout = clearTimeout;
    } catch {
    }
    try {
      u.setInterval = setInterval;
    } catch {
    }
    try {
      u.setTimeout = setTimeout;
    } catch {
    }
    try {
      u.crypto = crypto;
    } catch {
    }
    L = Q(u);
  }
}
u.Symbol && (!u.Symbol.iterator && (u.Symbol.iterator = E("iterator")), !u.Symbol.asyncIterator && (u.Symbol.asyncIterator = E("asynciterator")));
const ve = J({});
for (let e = 0; e < L.length; e++) {
  const r = L[e];
  try {
    ve[r] = u[r];
  } catch {
  }
}
const K = E("window");
function et() {
  return O(J({ [K]: u }), ve);
}
function E(e) {
  return e + Math.random().toString(36).substring(2);
}
function tt(e) {
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
const rt = "0.4.8", F = { RES: void 0 }, p = { RES: void 0 }, w = E("continue"), v = E("break"), te = E("super"), P = E("supercall"), re = E("noctor"), M = E("clsctor"), ne = E("newtarget"), S = E("noinit"), x = E("deadzone");
class Z {
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
class R {
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
class b {
  /**
   * Create a simulated scope
   * @param parent the parent scope along the scope chain (default: null)
   * @param isolated true for function scope or false for block scope (default: false)
   */
  constructor(r = null, t = !1) {
    this.context = J(null), this.parent = r, this.isolated = t;
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
    const r = new b(this.parent, this.isolated);
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
      return r in t ? new R(t, r) : null;
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
      n.context[r] = new Z("var", t === S ? void 0 : t);
    else if (i.kind === "var")
      t !== S && i.set(t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
    if (!n.parent) {
      const a = n.find("window").get();
      t !== S && g(a, r, { value: t, writable: !0, enumerable: !0 });
    }
  }
  /**
   * Declare a let variable
   * @param name variable identifier name
   * @param value variable value
   */
  let(r, t) {
    const n = this.context[r];
    if (!n || n.get() === x)
      this.context[r] = new Z("let", t);
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
    if (!n || n.get() === x)
      this.context[r] = new Z("const", t);
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
      this.context[r] = new Z("var", t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
  }
}
function A(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const a = r.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const s = a.get();
      if (s === x)
        throw new ReferenceError(`${e.name} is not defined`);
      return s;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
const nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: A
}, Symbol.toStringTag, { value: "Module" }));
function Se(e, r) {
  return e.value;
}
const it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Se
}, Symbol.toStringTag, { value: "Module" }));
function at(e, r) {
  const t = r.find(P);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function st(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(H(i, r)) : t.push(y(i, r));
  }
  return t;
}
function lt(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      O(t, H(i, r));
    else if (i.type === "Property") {
      let a;
      const s = i.key;
      i.computed ? a = y(s, r) : s.type === "Identifier" ? a = s.name : a = "" + Se(s);
      const o = y(i.value, r), c = i.kind;
      if (c === "init")
        t[a] = o;
      else if (c === "get") {
        const l = j(t, a);
        g(t, a, {
          get: o,
          set: l && l.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const l = j(t, a);
        g(t, a, {
          get: l && l.get,
          set: o,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return t;
}
function ot(e, r) {
  if (e.id && e.id.name) {
    const t = new b(r), n = B(e, t);
    return t.const(e.id.name, n), n;
  } else
    return B(e, r);
}
function ct(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +y(t, r);
    case "-":
      return -y(t, r);
    case "!":
      return !y(t, r);
    case "~":
      return ~y(t, r);
    case "void":
      return void y(t, r);
    case "typeof":
      return t.type === "Identifier" ? typeof A(t, r, { throwErr: !1 }) : typeof y(t, r);
    case "delete":
      if (t.type === "MemberExpression")
        return G(t, r, { getVar: !0 }).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return y(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function ut(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = A(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = G(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function ft(e, r) {
  const t = y(e.left, r), n = y(e.right, r);
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
function yt(e, r) {
  const t = y(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = A(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const a = r.global().find("window").get();
      i = new R(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = G(n, r, { getVar: !0 });
  else
    return I(n, r, { feed: t });
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
function ht(e, r) {
  switch (e.operator) {
    case "||":
      return y(e.left, r) || y(e.right, r);
    case "&&":
      return y(e.left, r) && y(e.right, r);
    case "??": {
      const t = y(e.left, r);
      return t ?? y(e.right, r);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function G(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let a;
  if (e.object.type === "Super" ? a = xe(e.object, r, { getProto: !0 }) : a = y(e.object, r), e.optional && a == null)
    return;
  if (n) return a;
  let s;
  if (e.computed ? s = y(e.property, r) : s = e.property.name, i) {
    const o = be(a, s);
    if (e.object.type === "Super" && o) {
      const c = r.find("this").get(), l = E(s);
      return g(c, l, { set: o }), new R(c, l);
    } else
      return new R(a, s);
  } else {
    const o = me(a, s);
    if (e.object.type === "Super" && o) {
      const c = r.find("this").get();
      return o.call(c);
    } else
      return a[s];
  }
}
function dt(e, r) {
  return y(e.test, r) ? y(e.consequent, r) : y(e.alternate, r);
}
function pt(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = G(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.computed ? a = y(e.callee.property, r) : a = e.callee.property.name, e.callee.object.type === "Super") {
      const s = r.find("this").get();
      t = n[a].bind(s);
    } else
      t = n[a];
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    if (t[M])
      throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = y(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[M]) {
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
    const s = e.arguments[a];
    s.type === "SpreadElement" ? i = i.concat(H(s, r)) : i.push(y(s, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(P).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(P).set(!0);
  }
  return n && n[K] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[K], i) : t.apply(n, i);
}
function gt(e, r) {
  const t = y(e.callee, r);
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
  } else if (t[re])
    throw new TypeError(`${t.name || "(intermediate value)"} is not a constructor`);
  let n = [];
  for (let i = 0; i < e.arguments.length; i++) {
    const a = e.arguments[i];
    a.type === "SpreadElement" ? n = n.concat(H(a, r)) : n.push(y(a, r));
  }
  return new t(...n);
}
function mt(e, r) {
  return r.find(ne).get();
}
function bt(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = y(e.expressions[n], r);
  return t;
}
function wt(e, r) {
  return B(e, r);
}
function vt(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, s;
  for (; a = t.shift(); )
    i += Ee(a), s = n.shift(), s && (i += y(s, r));
  return i;
}
function St(e, r) {
  const t = y(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  g(i, "raw", {
    value: ee(a)
  });
  const s = e.quasi.expressions, o = [];
  if (s)
    for (let c = 0; c < s.length; c++)
      o.push(y(s[c], r));
  return t(ee(i), ...o);
}
function Ee(e, r) {
  return e.value.raw;
}
function Et(e, r) {
  if (e.id && e.id.name) {
    const t = new b(r), n = oe(e, t);
    return t.const(e.id.name, n), n;
  } else
    return oe(e, r);
}
function xe(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(te).get();
  return n ? i.prototype : i;
}
function H(e, r) {
  return y(e.argument, r);
}
function xt(e, r) {
  return y(e.expression, r);
}
const kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: st,
  ArrowFunctionExpression: wt,
  AssignmentExpression: yt,
  BinaryExpression: ft,
  CallExpression: pt,
  ChainExpression: xt,
  ClassExpression: Et,
  ConditionalExpression: dt,
  FunctionExpression: ot,
  LogicalExpression: ht,
  MemberExpression: G,
  MetaProperty: mt,
  NewExpression: gt,
  ObjectExpression: lt,
  SequenceExpression: bt,
  SpreadElement: H,
  Super: xe,
  TaggedTemplateExpression: St,
  TemplateElement: Ee,
  TemplateLiteral: vt,
  ThisExpression: at,
  UnaryExpression: ct,
  UpdateExpression: ut
}, Symbol.toStringTag, { value: "Module" }));
function It(e, r) {
  y(e.expression, r);
}
function T(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, a = n ? r : new b(r);
  i || ce(e, a, { onlyBlock: !0 });
  for (let s = 0; s < e.body.length; s++) {
    const o = y(e.body[s], a);
    if (o === v || o === w || o === p)
      return o;
  }
}
function $t() {
}
function Ot() {
  debugger;
}
function Ct(e, r) {
  return p.RES = e.argument ? y(e.argument, r) : void 0, p;
}
function Dt() {
  return v;
}
function jt() {
  return w;
}
function Pt(e, r) {
  return y(e.test, r) ? y(e.consequent, r) : y(e.alternate, r);
}
function At(e, r) {
  const t = y(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || y(a.test, r) === t) && (n = !0), n) {
      const s = ke(a, r);
      if (s === v)
        break;
      if (s === w || s === p)
        return s;
    }
  }
}
function ke(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = y(e.consequent[t], r);
    if (n === v || n === w || n === p)
      return n;
  }
}
function Ft(e, r) {
  throw y(e.argument, r);
}
function Rt(e, r) {
  try {
    return T(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new b(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, t);
        } else
          I(i, r, { feed: t });
      return Ie(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = T(e.finalizer, r);
      if (t === v || t === w || t === p)
        return t;
    }
  }
}
function Ie(e, r) {
  return T(e.body, r, { invasived: !0 });
}
function Tt(e, r) {
  for (; y(e.test, r); ) {
    const t = y(e.body, r);
    if (t === v)
      break;
    if (t === w)
      continue;
    if (t === p)
      return t;
  }
}
function Vt(e, r) {
  do {
    const t = y(e.body, r);
    if (t === v)
      break;
    if (t === w)
      continue;
    if (t === p)
      return t;
  } while (y(e.test, r));
}
function _t(e, r) {
  const t = new b(r);
  for (y(e.init, t); !e.test || y(e.test, t); y(e.update, t)) {
    const n = new b(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = T(e.body, n, { invasived: !0 }) : i = y(e.body, n), i === v)
      break;
    if (i === w)
      continue;
    if (i === p)
      return i;
  }
}
function Bt(e, r) {
  for (const t in y(e.right, r)) {
    const n = We(e, r, { value: t });
    if (n === v)
      break;
    if (n === w)
      continue;
    if (n === p)
      return n;
  }
}
function Ut(e, r) {
  const t = y(e.right, r);
  for (const n of t) {
    const i = We(e, r, { value: n });
    if (i === v)
      break;
    if (i === w)
      continue;
    if (i === p)
      return i;
  }
}
const Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: T,
  BreakStatement: Dt,
  CatchClause: Ie,
  ContinueStatement: jt,
  DebuggerStatement: Ot,
  DoWhileStatement: Vt,
  EmptyStatement: $t,
  ExpressionStatement: It,
  ForInStatement: Bt,
  ForOfStatement: Ut,
  ForStatement: _t,
  IfStatement: Pt,
  ReturnStatement: Ct,
  SwitchCase: ke,
  SwitchStatement: At,
  ThrowStatement: Ft,
  TryStatement: Rt,
  WhileStatement: Tt
}, Symbol.toStringTag, { value: "Module" }));
function $e(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = {} } = t, o = [];
  for (let c = 0; c < e.properties.length; c++) {
    const l = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (l.type === "Property") {
          const f = l.value;
          f.type === "Identifier" ? r[n](f.name, a ? x : n === "var" ? S : void 0) : I(f, r, { kind: n, hoist: i, onlyBlock: a });
        } else
          q(l, r, { kind: n, hoist: i, onlyBlock: a });
    } else if (l.type === "Property") {
      let f;
      l.computed ? f = y(l.key, r) : f = l.key.name, o.push(f);
      const d = l.value;
      d.type === "Identifier" ? r[n](d.name, s[f]) : I(d, r, { kind: n, feed: s[f] });
    } else {
      const f = O({}, s);
      for (let d = 0; d < o.length; d++) delete f[o[d]];
      q(l, r, { kind: n, feed: f });
    }
  }
}
function Oe(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, o = [];
  for (let c = 0; c < e.elements.length; c++) {
    const l = e.elements[c];
    if (l)
      if (i)
        (a || n === "var") && (l.type === "Identifier" ? r[n](l.name, a ? x : n === "var" ? S : void 0) : I(l, r, { kind: n, hoist: i, onlyBlock: a }));
      else if (l.type === "Identifier")
        if (n)
          r[n](l.name, s[c]);
        else {
          const f = A(l, r, { getVar: !0 });
          f.set(s[c]), o.push(f.get());
        }
      else l.type === "RestElement" ? q(l, r, { kind: n, feed: s.slice(c) }) : I(l, r, { kind: n, feed: s[c] });
  }
  if (o.length)
    return o;
}
function q(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, o = e.argument;
  i ? (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? x : n === "var" ? S : void 0) : I(o, r, { kind: n, hoist: i, onlyBlock: a })) : o.type === "Identifier" ? n ? r[n](o.name, s) : A(o, r, { getVar: !0 }).set(s) : I(o, r, { kind: n, feed: s });
}
function Ce(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = y(e.right, r) } = t, o = e.left;
  i ? (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? x : n === "var" ? S : void 0) : I(o, r, { kind: n, hoist: i, onlyBlock: a })) : o.type === "Identifier" ? r[n](o.name, s) : I(o, r, { kind: n, feed: s });
}
const Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Oe,
  AssignmentPattern: Ce,
  ObjectPattern: $e,
  RestElement: q
}, Symbol.toStringTag, { value: "Module" }));
function qt(e, r) {
  for (let t = 0; t < e.body.length; t++)
    y(e.body[t], r);
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: qt
}, Symbol.toStringTag, { value: "Module" }));
let ie;
function y(e, r) {
  if (!e) return;
  ie || (ie = O(
    {},
    Ke,
    kt,
    nt,
    Nt,
    it,
    Mt,
    zt
  ));
  const t = ie[e.type];
  if (t)
    return t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function Wt(e, r) {
  r.func(e.id.name, B(e, r));
}
function U(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    De(e.declarations[n], r, O({ kind: i }, t));
  }
}
function De(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s } = t;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, a ? x : n === "var" ? S : void 0) : I(e.id, r, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const o = "feed" in t, c = o ? s : y(e.init, r);
    if (e.id.type === "Identifier") {
      const l = e.id.name;
      n === "var" && !e.init && !o ? r.var(l, S) : r[n](l, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && g(c, "name", {
        value: l,
        configurable: !0
      });
    } else
      I(e.id, r, { kind: n, feed: c });
  }
}
function Lt(e, r) {
  r.func(e.id.name, oe(e, r));
}
function je(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let a = 0; a < e.body.length; a++) {
    const s = e.body[a];
    if (s.type === "MethodDefinition")
      Pe(s, r, { klass: n, superClass: i });
    else {
      if (s.type === "PropertyDefinition")
        continue;
      if (s.type === "StaticBlock")
        continue;
    }
  }
}
function Pe(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  let a;
  if (e.computed)
    a = y(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const s = e.static ? n : n.prototype, o = B(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      g(s, a, {
        value: o,
        writable: !0,
        configurable: !0
      });
      break;
    case "get": {
      const c = j(s, a);
      g(s, a, {
        get: o,
        set: c && c.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      const c = j(s, a);
      g(s, a, {
        get: c && c.get,
        set: o,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function* W(e, r, t = {}) {
  const { getVar: n = !1, throwErr: i = !0 } = t;
  if (e.name === "undefined")
    return;
  const a = r.find(e.name);
  if (a) {
    if (n)
      return a;
    {
      const s = a.get();
      if (s === x)
        throw new ReferenceError(`${e.name} is not defined`);
      return s;
    }
  } else {
    if (i)
      throw new ReferenceError(`${e.name} is not defined`);
    return;
  }
}
const Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: W
}, Symbol.toStringTag, { value: "Module" }));
function* Ae(e, r) {
  return e.value;
}
const Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Ae
}, Symbol.toStringTag, { value: "Module" }));
function* Gt(e, r) {
  const t = r.find(P);
  if (t && !t.get())
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  return r.find("this").get();
}
function* Ht(e, r) {
  let t = [];
  for (let n = 0; n < e.elements.length; n++) {
    const i = e.elements[n];
    i.type === "SpreadElement" ? t = t.concat(yield* Y(i, r)) : t.push(yield* h(i, r));
  }
  return t;
}
function* Xt(e, r) {
  const t = {};
  for (let n = 0; n < e.properties.length; n++) {
    const i = e.properties[n];
    if (i.type === "SpreadElement")
      O(t, yield* Y(i, r));
    else if (i.type === "Property") {
      let a;
      const s = i.key;
      i.computed ? a = yield* h(s, r) : s.type === "Identifier" ? a = s.name : a = "" + (yield* Ae(s));
      const o = yield* h(i.value, r), c = i.kind;
      if (c === "init")
        t[a] = o;
      else if (c === "get") {
        const l = j(t, a);
        g(t, a, {
          get: o,
          set: l && l.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const l = j(t, a);
        g(t, a, {
          get: l && l.get,
          set: o,
          enumerable: !0,
          configurable: !0
        });
      }
    }
  }
  return t;
}
function* Yt(e, r) {
  if (e.id && e.id.name) {
    const t = new b(r), n = _(e, t);
    return t.const(e.id.name, n), n;
  } else
    return _(e, r);
}
function* Zt(e, r) {
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
      return t.type === "Identifier" ? typeof (yield* W(t, r, { throwErr: !1 })) : typeof (yield* h(t, r));
    case "delete":
      if (t.type === "MemberExpression")
        return (yield* X(t, r, { getVar: !0 })).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* h(t, r), !0;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* Qt(e, r) {
  const t = e.argument;
  let n;
  if (t.type === "Identifier")
    n = yield* W(t, r, { getVar: !0 });
  else if (t.type === "MemberExpression")
    n = yield* X(t, r, { getVar: !0 });
  else
    throw new SyntaxError("Unexpected token");
  const i = n.get();
  if (e.operator === "++")
    return n.set(i + 1), e.prefix ? n.get() : i;
  if (e.operator === "--")
    return n.set(i - 1), e.prefix ? n.get() : i;
  throw new SyntaxError(`Unexpected token ${e.operator}`);
}
function* er(e, r) {
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
function* tr(e, r) {
  const t = yield* h(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* W(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const a = r.global().find("window").get();
      i = new R(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = yield* X(n, r, { getVar: !0 });
  else
    return yield* k(n, r, { feed: t });
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
function* rr(e, r) {
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
function* X(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let a;
  if (e.object.type === "Super" ? a = yield* Re(e.object, r, { getProto: !0 }) : a = yield* h(e.object, r), e.optional && a == null)
    return;
  if (n) return a;
  let s;
  if (e.computed ? s = yield* h(e.property, r) : s = e.property.name, i) {
    const o = be(a, s);
    if (e.object.type === "Super" && o) {
      const c = r.find("this").get(), l = E(s);
      return g(c, l, { set: o }), new R(c, l);
    } else
      return new R(a, s);
  } else {
    const o = me(a, s);
    if (e.object.type === "Super" && o) {
      const c = r.find("this").get();
      return o.call(c);
    } else
      return a[s];
  }
}
function* nr(e, r) {
  return (yield* h(e.test, r)) ? yield* h(e.consequent, r) : yield* h(e.alternate, r);
}
function* ir(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* X(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.computed ? a = yield* h(e.callee.property, r) : a = e.callee.property.name, e.callee.object.type === "Super") {
      const s = r.find("this").get();
      t = n[a].bind(s);
    } else
      t = n[a];
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    if (t[M])
      throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = yield* h(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[M]) {
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
    const s = e.arguments[a];
    s.type === "SpreadElement" ? i = i.concat(yield* Y(s, r)) : i.push(yield* h(s, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(P).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(P).set(!0);
  }
  return n && n[K] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[K], i) : t.apply(n, i);
}
function* ar(e, r) {
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
  } else if (t[re])
    throw new TypeError(`${t.name || "(intermediate value)"} is not a constructor`);
  let n = [];
  for (let i = 0; i < e.arguments.length; i++) {
    const a = e.arguments[i];
    a.type === "SpreadElement" ? n = n.concat(yield* Y(a, r)) : n.push(yield* h(a, r));
  }
  return new t(...n);
}
function* sr(e, r) {
  return r.find(ne).get();
}
function* lr(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = yield* h(e.expressions[n], r);
  return t;
}
function* or(e, r) {
  return _(e, r);
}
function* cr(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, s;
  for (; a = t.shift(); )
    i += yield* Fe(a), s = n.shift(), s && (i += yield* h(s, r));
  return i;
}
function* ur(e, r) {
  const t = yield* h(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  g(i, "raw", {
    value: ee(a)
  });
  const s = e.quasi.expressions, o = [];
  if (s)
    for (let c = 0; c < s.length; c++)
      o.push(yield* h(s[c], r));
  return t(ee(i), ...o);
}
function* Fe(e, r) {
  return e.value.raw;
}
function* fr(e, r) {
  if (e.id && e.id.name) {
    const t = new b(r), n = yield* se(e, t);
    return t.const(e.id.name, n), n;
  } else
    return yield* se(e, r);
}
function* Re(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(te).get();
  return n ? i.prototype : i;
}
function* Y(e, r) {
  return yield* h(e.argument, r);
}
function* yr(e, r) {
  return yield* h(e.expression, r);
}
function* hr(e, r) {
  const t = yield* h(e.argument, r);
  return e.delegate ? yield* t : yield t;
}
function* dr(e, r) {
  return F.RES = yield* h(e.argument, r), yield F;
}
const pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: Ht,
  ArrowFunctionExpression: or,
  AssignmentExpression: tr,
  AwaitExpression: dr,
  BinaryExpression: er,
  CallExpression: ir,
  ChainExpression: yr,
  ClassExpression: fr,
  ConditionalExpression: nr,
  FunctionExpression: Yt,
  LogicalExpression: rr,
  MemberExpression: X,
  MetaProperty: sr,
  NewExpression: ar,
  ObjectExpression: Xt,
  SequenceExpression: lr,
  SpreadElement: Y,
  Super: Re,
  TaggedTemplateExpression: ur,
  TemplateElement: Fe,
  TemplateLiteral: cr,
  ThisExpression: Gt,
  UnaryExpression: Zt,
  UpdateExpression: Qt,
  YieldExpression: hr
}, Symbol.toStringTag, { value: "Module" }));
function* gr(e, r) {
  yield* h(e.expression, r);
}
function* V(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, a = n ? r : new b(r);
  i || (yield* ze(e, a, { onlyBlock: !0 }));
  for (let s = 0; s < e.body.length; s++) {
    const o = yield* h(e.body[s], a);
    if (o === v || o === w || o === p)
      return o;
  }
}
function* mr() {
}
function* br() {
  debugger;
}
function* wr(e, r) {
  return p.RES = e.argument ? yield* h(e.argument, r) : void 0, p;
}
function* vr() {
  return v;
}
function* Sr() {
  return w;
}
function* Er(e, r) {
  return (yield* h(e.test, r)) ? yield* h(e.consequent, r) : yield* h(e.alternate, r);
}
function* xr(e, r) {
  const t = yield* h(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || (yield* h(a.test, r)) === t) && (n = !0), n) {
      const s = yield* Te(a, r);
      if (s === v)
        break;
      if (s === w || s === p)
        return s;
    }
  }
}
function* Te(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = yield* h(e.consequent[t], r);
    if (n === v || n === w || n === p)
      return n;
  }
}
function* kr(e, r) {
  throw yield* h(e.argument, r);
}
function* Ir(e, r) {
  try {
    return yield* V(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new b(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, t);
        } else
          yield* k(i, r, { feed: t });
      return yield* Ve(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = yield* V(e.finalizer, r);
      if (t === v || t === w || t === p)
        return t;
    }
  }
}
function* Ve(e, r) {
  return yield* V(e.body, r, { invasived: !0 });
}
function* $r(e, r) {
  for (; yield* h(e.test, r); ) {
    const t = yield* h(e.body, r);
    if (t === v)
      break;
    if (t === w)
      continue;
    if (t === p)
      return t;
  }
}
function* Or(e, r) {
  do {
    const t = yield* h(e.body, r);
    if (t === v)
      break;
    if (t === w)
      continue;
    if (t === p)
      return t;
  } while (yield* h(e.test, r));
}
function* Cr(e, r) {
  const t = new b(r);
  for (yield* h(e.init, t); !e.test || (yield* h(e.test, t)); yield* h(e.update, t)) {
    const n = new b(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = yield* V(e.body, n, { invasived: !0 }) : i = yield* h(e.body, n), i === v)
      break;
    if (i === w)
      continue;
    if (i === p)
      return i;
  }
}
function* Dr(e, r) {
  for (const t in yield* h(e.right, r)) {
    const n = yield* le(e, r, { value: t });
    if (n === v)
      break;
    if (n === w)
      continue;
    if (n === p)
      return n;
  }
}
function* jr(e, r) {
  const t = yield* h(e.right, r);
  if (e.await) {
    const n = tt(t);
    let i;
    for (F.RES = n.next(), i = yield F; !i.done; F.RES = n.next(), i = yield F) {
      const a = yield* le(e, r, { value: i.value });
      if (a === v)
        break;
      if (a === w)
        continue;
      if (a === p)
        return a;
    }
  } else
    for (const n of t) {
      const i = yield* le(e, r, { value: n });
      if (i === v)
        break;
      if (i === w)
        continue;
      if (i === p)
        return i;
    }
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: V,
  BreakStatement: vr,
  CatchClause: Ve,
  ContinueStatement: Sr,
  DebuggerStatement: br,
  DoWhileStatement: Or,
  EmptyStatement: mr,
  ExpressionStatement: gr,
  ForInStatement: Dr,
  ForOfStatement: jr,
  ForStatement: Cr,
  IfStatement: Er,
  ReturnStatement: wr,
  SwitchCase: Te,
  SwitchStatement: xr,
  ThrowStatement: kr,
  TryStatement: Ir,
  WhileStatement: $r
}, Symbol.toStringTag, { value: "Module" }));
function* _e(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = {} } = t, o = [];
  for (let c = 0; c < e.properties.length; c++) {
    const l = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (l.type === "Property") {
          const f = l.value;
          f.type === "Identifier" ? r[n](f.name, a ? x : n === "var" ? S : void 0) : yield* k(f, r, { kind: n, hoist: i, onlyBlock: a });
        } else
          yield* z(l, r, { kind: n, hoist: i, onlyBlock: a });
    } else if (l.type === "Property") {
      let f;
      l.computed ? f = yield* h(l.key, r) : f = l.key.name, o.push(f);
      const d = l.value;
      d.type === "Identifier" ? r[n](d.name, s[f]) : yield* k(d, r, { kind: n, feed: s[f] });
    } else {
      const f = O({}, s);
      for (let d = 0; d < o.length; d++) delete f[o[d]];
      yield* z(l, r, { kind: n, feed: f });
    }
  }
}
function* Be(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, o = [];
  for (let c = 0; c < e.elements.length; c++) {
    const l = e.elements[c];
    if (l)
      if (i)
        (a || n === "var") && (l.type === "Identifier" ? r[n](l.name, a ? x : n === "var" ? S : void 0) : yield* k(l, r, { kind: n, hoist: i, onlyBlock: a }));
      else if (l.type === "Identifier")
        if (n)
          r[n](l.name, s[c]);
        else {
          const f = yield* W(l, r, { getVar: !0 });
          f.set(s[c]), o.push(f.get());
        }
      else l.type === "RestElement" ? yield* z(l, r, { kind: n, feed: s.slice(c) }) : yield* k(l, r, { kind: n, feed: s[c] });
  }
  if (o.length)
    return o;
}
function* z(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, o = e.argument;
  i ? (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? x : n === "var" ? S : void 0) : yield* k(o, r, { kind: n, hoist: i, onlyBlock: a })) : o.type === "Identifier" ? n ? r[n](o.name, s) : (yield* W(o, r, { getVar: !0 })).set(s) : yield* k(o, r, { kind: n, feed: s });
}
function* Ue(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = yield* h(e.right, r) } = t, o = e.left;
  i ? (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? x : n === "var" ? S : void 0) : yield* k(o, r, { kind: n, hoist: i, onlyBlock: a })) : o.type === "Identifier" ? r[n](o.name, s) : yield* k(o, r, { kind: n, feed: s });
}
const Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Be,
  AssignmentPattern: Ue,
  ObjectPattern: _e,
  RestElement: z
}, Symbol.toStringTag, { value: "Module" }));
let ae;
function* h(e, r) {
  if (!e) return;
  ae || (ae = O(
    {},
    Je,
    pr,
    Kt,
    Pr,
    Jt,
    Ar
    /*<add>*/
    /*program*/
    /*</add>*/
  ));
  const t = ae[e.type];
  if (t)
    return yield* t(e, r);
  throw new Error(`${e.type} isn't implemented`);
}
function* Fr(e, r) {
  r.func(e.id.name, _(e, r));
}
function* N(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* Ne(e.declarations[n], r, O({ kind: i }, t));
  }
}
function* Ne(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s } = t;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, a ? x : n === "var" ? S : void 0) : yield* k(e.id, r, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const o = "feed" in t, c = o ? s : yield* h(e.init, r);
    if (e.id.type === "Identifier") {
      const l = e.id.name;
      n === "var" && !e.init && !o ? r.var(l, S) : r[n](l, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && g(c, "name", {
        value: l,
        configurable: !0
      });
    } else
      yield* k(e.id, r, { kind: n, feed: c });
  }
}
function* Rr(e, r) {
  r.func(e.id.name, yield* se(e, r));
}
function* Me(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let a = 0; a < e.body.length; a++) {
    const s = e.body[a];
    if (s.type === "MethodDefinition")
      yield* qe(s, r, { klass: n, superClass: i });
    else {
      if (s.type === "PropertyDefinition")
        continue;
      if (s.type === "StaticBlock")
        continue;
    }
  }
}
function* qe(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  let a;
  if (e.computed)
    a = yield* h(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const s = e.static ? n : n.prototype, o = yield* _(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      g(s, a, {
        value: o,
        writable: !0,
        configurable: !0
      });
      break;
    case "get": {
      const c = j(s, a);
      g(s, a, {
        get: o,
        set: c && c.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      const c = j(s, a);
      g(s, a, {
        get: c && c.get,
        set: o,
        configurable: !0
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function de(e, r = {}) {
  const { res: t, err: n, ret: i, fullRet: a } = r;
  return new Promise((s, o) => {
    if ("ret" in r)
      return s(e.return(i));
    "err" in r ? l(n) : c(t);
    function c(d) {
      let m;
      try {
        m = e.next(d);
      } catch ($) {
        return o($);
      }
      return f(m), null;
    }
    function l(d) {
      let m;
      try {
        m = e.throw(d);
      } catch ($) {
        return o($);
      }
      f(m);
    }
    function f(d) {
      if (d.done) return s(a ? d : d.value);
      if (d.value !== F) return s(d);
      const m = d.value.RES;
      return (m && m.then === "function" ? m : Promise.resolve(m)).then(c, l);
    }
  });
}
function* ze(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], a = [];
  for (let s = 0; s < e.body.length; s++) {
    const o = e.body[s];
    o.type === "FunctionDeclaration" ? (i.push(o), a.push(s)) : o.type === "VariableDeclaration" && ["const", "let"].indexOf(o.kind) !== -1 ? yield* N(o, r, { hoist: !0, onlyBlock: !0 }) : n || (yield* C(o, r));
  }
  if (a.length) {
    for (let s = a.length - 1; s > -1; s--)
      e.body.splice(a[s], 1);
    e.body = i.concat(e.body);
  }
}
function* C(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      yield* N(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* N(e.left, r, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* N(e.init, r, { hoist: !0 }));
    case "WhileStatement":
    case "DoWhileStatement":
      yield* C(e.body, r);
      break;
    case "IfStatement":
      yield* C(e.consequent, r), e.alternate && (yield* C(e.alternate, r));
      break;
    case "BlockStatement":
      for (let t = 0; t < e.body.length; t++)
        yield* C(e.body[t], r);
      break;
    case "SwitchStatement":
      for (let t = 0; t < e.cases.length; t++)
        for (let n = 0; n < e.cases[t].consequent.length; n++)
          yield* C(e.cases[t].consequent[n], r);
      break;
    case "TryStatement": {
      const t = e.block.body;
      for (let a = 0; a < t.length; a++)
        yield* C(t[a], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          yield* C(n[a], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          yield* C(i[a], r);
      break;
    }
  }
}
function* k(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return yield* _e(e, r, t);
    case "ArrayPattern":
      return yield* Be(e, r, t);
    case "RestElement":
      return yield* z(e, r, t);
    case "AssignmentPattern":
      return yield* Ue(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function _(e, r, t = {}) {
  if (
    /*<replace by:=node.generator\s||\snode.async>*/
    !e.generator && !e.async
  )
    return B(e, r, t);
  const { superClass: n, isCtor: i } = t, a = e.params, s = function* (...c) {
    const l = new b(r, !0);
    e.type !== "ArrowFunctionExpression" && (l.const("this", this), l.let("arguments", arguments), l.const(ne, new.target), n && (l.const(te, n), i && l.let(P, !1)));
    for (let d = 0; d < a.length; d++) {
      const m = a[d];
      m.type === "Identifier" ? l.var(m.name, c[d]) : m.type === "RestElement" ? yield* z(m, l, { kind: "var", feed: c.slice(d) }) : yield* k(m, l, { feed: c[d] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (yield* ze(e.body, l), f = yield* V(e.body, l, {
      invasived: !0,
      hoisted: !0
    })) : (f = yield* h(e.body, l), e.type === "ArrowFunctionExpression" && (p.RES = f, f = p)), f === p)
      return f.RES;
  };
  let o;
  return e.async && e.generator ? o = function() {
    const c = s.apply(this, arguments);
    let l = Promise.resolve(), f = !1;
    const d = ($) => l = l.then(() => de(c, O({ fullRet: !0 }, $))).catch((Le) => {
      if (!f)
        return f = !0, Promise.reject(Le);
    }), m = {
      next: ($) => d({ res: $ }),
      throw: ($) => d({ err: $ }),
      return: ($) => d({ ret: $ })
    };
    return typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
  } : e.async ? o = function() {
    return de(s.apply(this, arguments));
  } : o = s, g(o, re, { value: !0 }), g(o, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), g(o, "length", {
    value: a.length,
    configurable: !0
  }), o;
}
function* se(e, r) {
  const t = yield* h(e.superClass, r), n = e.body.body;
  let i = null;
  const a = [], s = [];
  for (let c = 0; c < n.length; c++) {
    const l = n[c];
    if (l.type === "MethodDefinition" && l.kind === "constructor")
      i = yield* _(l.value, r, { superClass: t, isCtor: !0 });
    else if (l.type === "PropertyDefinition") {
      const f = l.computed ? yield* h(l.key, r) : l.key.type === "Identifier" ? l.key.name : yield* h(l.key, r);
      if (l.static) {
        const d = l.value ? yield* h(l.value, r) : void 0;
        s.push({ key: f, value: d });
      } else
        a.push({ key: f, valueNode: l.value });
    }
  }
  let o;
  i ? o = function(...c) {
    for (let l = 0; l < a.length; l++) {
      const f = a[l], d = new b(r, !1);
      d.const("this", this), this[f.key] = f.valueNode ? h(f.valueNode, d) : void 0;
    }
    return i.apply(this, c);
  } : o = function() {
    for (let c = 0; c < a.length; c++) {
      const l = a[c], f = new b(r, !1);
      f.const("this", this), this[l.key] = l.valueNode ? h(l.valueNode, f) : void 0;
    }
    t && t.apply(this);
  }, t && we(o, t), yield* Me(e.body, r, { klass: o, superClass: t });
  for (let c = 0; c < s.length; c++) {
    const l = s[c];
    o[l.key] = l.value;
  }
  return g(o, M, { value: !0 }), g(o, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), o;
}
function* le(e, r, t) {
  const { value: n } = t, i = e.left, a = new b(r);
  i.type === "VariableDeclaration" ? yield* N(i, a, { feed: n }) : i.type === "Identifier" ? (yield* A(i, r, { getVar: !0 })).set(n) : yield* k(i, r, { feed: n });
  let s;
  return e.body.type === "BlockStatement" ? s = yield* V(e.body, a, { invasived: !0 }) : s = yield* h(e.body, a), s;
}
function ce(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], a = [];
  for (let s = 0; s < e.body.length; s++) {
    const o = e.body[s];
    o.type === "FunctionDeclaration" ? (i.push(o), a.push(s)) : o.type === "VariableDeclaration" && ["const", "let"].indexOf(o.kind) !== -1 ? U(o, r, { hoist: !0, onlyBlock: !0 }) : n || D(o, r);
  }
  if (a.length) {
    for (let s = a.length - 1; s > -1; s--)
      e.body.splice(a[s], 1);
    e.body = i.concat(e.body);
  }
}
function D(e, r) {
  switch (e.type) {
    case "VariableDeclaration":
      U(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && U(e.left, r, { hoist: !0 });
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && U(e.init, r, { hoist: !0 });
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
function I(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return $e(e, r, t);
    case "ArrayPattern":
      return Oe(e, r, t);
    case "RestElement":
      return q(e, r, t);
    case "AssignmentPattern":
      return Ce(e, r, t);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function B(e, r, t = {}) {
  if (e.generator || e.async)
    return _(e, r, t);
  const { superClass: n, isCtor: i } = t, a = e.params;
  let o = function(...c) {
    const l = new b(r, !0);
    e.type !== "ArrowFunctionExpression" && (l.const("this", this), l.let("arguments", arguments), l.const(ne, new.target), n && (l.const(te, n), i && l.let(P, !1)));
    for (let d = 0; d < a.length; d++) {
      const m = a[d];
      m.type === "Identifier" ? l.var(m.name, c[d]) : m.type === "RestElement" ? q(m, l, { kind: "var", feed: c.slice(d) }) : I(m, l, { feed: c[d] });
    }
    let f;
    if (e.body.type === "BlockStatement" ? (ce(e.body, l), f = T(e.body, l, {
      invasived: !0,
      hoisted: !0
    })) : (f = y(e.body, l), e.type === "ArrowFunctionExpression" && (p.RES = f, f = p)), f === p)
      return f.RES;
  };
  return e.type === "ArrowFunctionExpression" && g(o, re, { value: !0 }), g(o, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), g(o, "length", {
    value: a.length,
    configurable: !0
  }), o;
}
function oe(e, r) {
  const t = y(e.superClass, r), n = e.body.body;
  let i = null;
  const a = [], s = [];
  for (let c = 0; c < n.length; c++) {
    const l = n[c];
    if (l.type === "MethodDefinition" && l.kind === "constructor")
      i = B(l.value, r, { superClass: t, isCtor: !0 });
    else if (l.type === "PropertyDefinition") {
      const f = l.computed ? y(l.key, r) : l.key.type === "Identifier" ? l.key.name : y(l.key, r);
      if (l.static) {
        const d = l.value ? y(l.value, r) : void 0;
        s.push({ key: f, value: d });
      } else
        a.push({ key: f, valueNode: l.value });
    }
  }
  let o;
  i ? o = function(...c) {
    for (let l = 0; l < a.length; l++) {
      const f = a[l], d = new b(r, !1);
      d.const("this", this), this[f.key] = f.valueNode ? y(f.valueNode, d) : void 0;
    }
    return i.apply(this, c);
  } : o = function() {
    for (let c = 0; c < a.length; c++) {
      const l = a[c], f = new b(r, !1);
      f.const("this", this), this[l.key] = l.valueNode ? y(l.valueNode, f) : void 0;
    }
    t && t.apply(this);
  }, t && we(o, t), je(e.body, r, { klass: o, superClass: t });
  for (let c = 0; c < s.length; c++) {
    const l = s[c];
    o[l.key] = l.value;
  }
  return g(o, M, { value: !0 }), g(o, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), o;
}
function We(e, r, t) {
  const { value: n } = t, i = e.left, a = new b(r);
  i.type === "VariableDeclaration" ? U(i, a, { feed: n }) : i.type === "Identifier" ? A(i, r, { getVar: !0 }).set(n) : I(i, r, { feed: n });
  let s;
  return e.body.type === "BlockStatement" ? s = T(e.body, a, { invasived: !0 }) : s = y(e.body, a), s;
}
const ue = class ue {
  constructor(r = {}) {
    this.options = {}, this.scope = new b(null, !0), this.exports = {};
    let { ecmaVer: t = "latest", sandBox: n = !0 } = r;
    if (t !== "latest" && (t = t - (t < 2015 ? 0 : 2009), [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(t) === -1))
      throw new Error("unsupported ecmaVer");
    if (this.options.ecmaVersion = t, n) {
      const i = et();
      this.scope.let("window", i), this.scope.let("this", i);
    } else
      this.scope.let("window", u), this.scope.let("this", u);
    this.scope.const("exports", this.exports = {});
  }
  import(r, t) {
    if (typeof r == "string" && (r = { [r]: t }), typeof r != "object") return;
    const n = Q(r);
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      this.scope.var(a, r[a]);
    }
  }
  parse(r, t) {
    return typeof t == "function" ? t(r, O({}, this.options)) : fe(r, this.options);
  }
  run(r) {
    const t = typeof r == "string" ? fe(r, this.options) : r;
    ce(t, this.scope), y(t, this.scope);
  }
};
ue.version = rt;
let pe = ue;
export {
  pe as default
};
//# sourceMappingURL=sval.js.map
