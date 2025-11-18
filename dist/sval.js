import { parse as fe } from "acorn";
const Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return De;
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
    return je;
  }
}, Symbol.toStringTag, { value: "Module" })), Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return qe;
  },
  get ClassDeclaration() {
    return Tr;
  },
  get FunctionDeclaration() {
    return Rr;
  },
  get MethodDefinition() {
    return Ne;
  },
  get VariableDeclaration() {
    return M;
  },
  get VariableDeclarator() {
    return Me;
  }
}, Symbol.toStringTag, { value: "Module" })), ee = Object.freeze, g = Object.defineProperty, D = Object.getOwnPropertyDescriptor, Ge = Object.prototype.hasOwnProperty;
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
const Se = J({});
for (let e = 0; e < L.length; e++) {
  const r = L[e];
  try {
    Se[r] = u[r];
  } catch {
  }
}
const K = E("window");
function et() {
  return O(J({ [K]: u }), Se);
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
const rt = "0.4.8", R = { RES: void 0 }, d = { RES: void 0 }, b = E("continue"), w = E("break"), te = E("super"), P = E("supercall"), re = E("noctor"), q = E("clsctor"), ne = E("newtarget"), v = E("noinit"), x = E("deadzone");
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
class T {
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
class S {
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
      return r in t ? new T(t, r) : null;
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
      n.context[r] = new Z("var", t === v ? void 0 : t);
    else if (i.kind === "var")
      t !== v && i.set(t);
    else
      throw new SyntaxError(`Identifier '${r}' has already been declared`);
    if (!n.parent) {
      const a = n.find("window").get();
      t !== v && g(a, r, { value: t, writable: !0, enumerable: !0 });
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
function ve(e, r) {
  return e.value;
}
const it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: ve
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
    i.type === "SpreadElement" ? t = t.concat(H(i, r)) : t.push(f(i, r));
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
      i.computed ? a = f(s, r) : s.type === "Identifier" ? a = s.name : a = "" + ve(s);
      const l = f(i.value, r), c = i.kind;
      if (c === "init")
        t[a] = l;
      else if (c === "get") {
        const o = D(t, a);
        g(t, a, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = D(t, a);
        g(t, a, {
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
function ot(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = B(e, t);
    return t.const(e.id.name, n), n;
  } else
    return B(e, r);
}
function ct(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +f(t, r);
    case "-":
      return -f(t, r);
    case "!":
      return !f(t, r);
    case "~":
      return ~f(t, r);
    case "void":
      return void f(t, r);
    case "typeof":
      return t.type === "Identifier" ? typeof A(t, r, { throwErr: !1 }) : typeof f(t, r);
    case "delete":
      if (t.type === "MemberExpression")
        return G(t, r, { getVar: !0 }).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return f(t, r), !0;
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
  const t = f(e.left, r), n = f(e.right, r);
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
  const t = f(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = A(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const a = r.global().find("window").get();
      i = new T(a, n.name);
    }
  } else if (n.type === "MemberExpression")
    i = G(n, r, { getVar: !0 });
  else
    return $(n, r, { feed: t });
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
      return f(e.left, r) || f(e.right, r);
    case "&&":
      return f(e.left, r) && f(e.right, r);
    case "??": {
      const t = f(e.left, r);
      return t ?? f(e.right, r);
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function G(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let a;
  if (e.object.type === "Super" ? a = xe(e.object, r, { getProto: !0 }) : a = f(e.object, r), e.optional && a == null)
    return;
  if (n) return a;
  let s;
  if (e.computed ? s = f(e.property, r) : s = e.property.name, i) {
    const l = be(a, s);
    if (e.object.type === "Super" && l) {
      const c = r.find("this").get(), o = E(s);
      return g(c, o, { set: l }), new T(c, o);
    } else
      return new T(a, s);
  } else {
    const l = me(a, s);
    if (e.object.type === "Super" && l) {
      const c = r.find("this").get();
      return l.call(c);
    } else
      return a[s];
  }
}
function pt(e, r) {
  return f(e.test, r) ? f(e.consequent, r) : f(e.alternate, r);
}
function dt(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = G(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.computed ? a = f(e.callee.property, r) : a = e.callee.property.name, e.callee.object.type === "Super") {
      const s = r.find("this").get();
      t = n[a].bind(s);
    } else
      t = n[a];
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    if (t[q])
      throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = f(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[q]) {
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
    s.type === "SpreadElement" ? i = i.concat(H(s, r)) : i.push(f(s, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(P).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(P).set(!0);
  }
  return n && n[K] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[K], i) : t.apply(n, i);
}
function gt(e, r) {
  const t = f(e.callee, r);
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
    a.type === "SpreadElement" ? n = n.concat(H(a, r)) : n.push(f(a, r));
  }
  return new t(...n);
}
function mt(e, r) {
  return r.find(ne).get();
}
function bt(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = f(e.expressions[n], r);
  return t;
}
function wt(e, r) {
  return B(e, r);
}
function St(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, s;
  for (; a = t.shift(); )
    i += Ee(a), s = n.shift(), s && (i += f(s, r));
  return i;
}
function vt(e, r) {
  const t = f(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  g(i, "raw", {
    value: ee(a)
  });
  const s = e.quasi.expressions, l = [];
  if (s)
    for (let c = 0; c < s.length; c++)
      l.push(f(s[c], r));
  return t(ee(i), ...l);
}
function Ee(e, r) {
  return e.value.raw;
}
function Et(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = oe(e, t);
    return t.const(e.id.name, n), n;
  } else
    return oe(e, r);
}
function xe(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(te).get();
  return n ? i.prototype : i;
}
function H(e, r) {
  return f(e.argument, r);
}
function xt(e, r) {
  return f(e.expression, r);
}
const kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: st,
  ArrowFunctionExpression: wt,
  AssignmentExpression: yt,
  BinaryExpression: ft,
  CallExpression: dt,
  ChainExpression: xt,
  ClassExpression: Et,
  ConditionalExpression: pt,
  FunctionExpression: ot,
  LogicalExpression: ht,
  MemberExpression: G,
  MetaProperty: mt,
  NewExpression: gt,
  ObjectExpression: lt,
  SequenceExpression: bt,
  SpreadElement: H,
  Super: xe,
  TaggedTemplateExpression: vt,
  TemplateElement: Ee,
  TemplateLiteral: St,
  ThisExpression: at,
  UnaryExpression: ct,
  UpdateExpression: ut
}, Symbol.toStringTag, { value: "Module" }));
function $t(e, r) {
  f(e.expression, r);
}
function F(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, a = n ? r : new S(r);
  i || ce(e, a, { onlyBlock: !0 });
  for (let s = 0; s < e.body.length; s++) {
    const l = f(e.body[s], a);
    if (l === w || l === b || l === d)
      return l;
  }
}
function It() {
}
function Ot() {
  debugger;
}
function Ct(e, r) {
  return d.RES = e.argument ? f(e.argument, r) : void 0, d;
}
function jt() {
  return w;
}
function Dt() {
  return b;
}
function Pt(e, r) {
  return f(e.test, r) ? f(e.consequent, r) : f(e.alternate, r);
}
function At(e, r) {
  const t = f(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || f(a.test, r) === t) && (n = !0), n) {
      const s = ke(a, r);
      if (s === w)
        break;
      if (s === b || s === d)
        return s;
    }
  }
}
function ke(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = f(e.consequent[t], r);
    if (n === w || n === b || n === d)
      return n;
  }
}
function Rt(e, r) {
  throw f(e.argument, r);
}
function Tt(e, r) {
  try {
    return F(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new S(r), i = e.handler.param;
      if (i)
        if (i.type === "Identifier") {
          const a = i.name;
          n.var(a, t);
        } else
          $(i, r, { feed: t });
      return $e(e.handler, n);
    } else
      throw t;
  } finally {
    if (e.finalizer) {
      const t = F(e.finalizer, r);
      if (t === w || t === b || t === d)
        return t;
    }
  }
}
function $e(e, r) {
  return F(e.body, r, { invasived: !0 });
}
function Ft(e, r) {
  for (; f(e.test, r); ) {
    const t = f(e.body, r);
    if (t === w)
      break;
    if (t === b)
      continue;
    if (t === d)
      return t;
  }
}
function Vt(e, r) {
  do {
    const t = f(e.body, r);
    if (t === w)
      break;
    if (t === b)
      continue;
    if (t === d)
      return t;
  } while (f(e.test, r));
}
function _t(e, r) {
  const t = new S(r);
  for (f(e.init, t); !e.test || f(e.test, t); f(e.update, t)) {
    const n = new S(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = F(e.body, n, { invasived: !0 }) : i = f(e.body, n), i === w)
      break;
    if (i === b)
      continue;
    if (i === d)
      return i;
  }
}
function Bt(e, r) {
  for (const t in f(e.right, r)) {
    const n = We(e, r, { value: t });
    if (n === w)
      break;
    if (n === b)
      continue;
    if (n === d)
      return n;
  }
}
function Ut(e, r) {
  const t = f(e.right, r);
  for (const n of t) {
    const i = We(e, r, { value: n });
    if (i === w)
      break;
    if (i === b)
      continue;
    if (i === d)
      return i;
  }
}
const Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: F,
  BreakStatement: jt,
  CatchClause: $e,
  ContinueStatement: Dt,
  DebuggerStatement: Ot,
  DoWhileStatement: Vt,
  EmptyStatement: It,
  ExpressionStatement: $t,
  ForInStatement: Bt,
  ForOfStatement: Ut,
  ForStatement: _t,
  IfStatement: Pt,
  ReturnStatement: Ct,
  SwitchCase: ke,
  SwitchStatement: At,
  ThrowStatement: Rt,
  TryStatement: Tt,
  WhileStatement: Ft
}, Symbol.toStringTag, { value: "Module" }));
function Ie(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = {} } = t, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (o.type === "Property") {
          const h = o.value;
          h.type === "Identifier" ? r[n](h.name, a ? x : n === "var" ? v : void 0) : $(h, r, { kind: n, hoist: i, onlyBlock: a });
        } else
          N(o, r, { kind: n, hoist: i, onlyBlock: a });
    } else if (o.type === "Property") {
      let h;
      o.computed ? h = f(o.key, r) : h = o.key.name, l.push(h);
      const p = o.value;
      p.type === "Identifier" ? r[n](p.name, s[h]) : $(p, r, { kind: n, feed: s[h] });
    } else {
      const h = O({}, s);
      for (let p = 0; p < l.length; p++) delete h[l[p]];
      N(o, r, { kind: n, feed: h });
    }
  }
}
function Oe(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? x : n === "var" ? v : void 0) : $(o, r, { kind: n, hoist: i, onlyBlock: a }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, s[c]);
        else {
          const h = A(o, r, { getVar: !0 });
          h.set(s[c]), l.push(h.get());
        }
      else o.type === "RestElement" ? N(o, r, { kind: n, feed: s.slice(c) }) : $(o, r, { kind: n, feed: s[c] });
  }
  if (l.length)
    return l;
}
function N(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, l = e.argument;
  i ? (a || n === "var") && (l.type === "Identifier" ? r[n](l.name, a ? x : n === "var" ? v : void 0) : $(l, r, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? n ? r[n](l.name, s) : A(l, r, { getVar: !0 }).set(s) : $(l, r, { kind: n, feed: s });
}
function Ce(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = f(e.right, r) } = t, l = e.left;
  i ? (a || n === "var") && (l.type === "Identifier" ? r[n](l.name, a ? x : n === "var" ? v : void 0) : $(l, r, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? r[n](l.name, s) : $(l, r, { kind: n, feed: s });
}
const qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Oe,
  AssignmentPattern: Ce,
  ObjectPattern: Ie,
  RestElement: N
}, Symbol.toStringTag, { value: "Module" }));
function Nt(e, r) {
  for (let t = 0; t < e.body.length; t++)
    f(e.body[t], r);
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: Nt
}, Symbol.toStringTag, { value: "Module" }));
let ie;
function f(e, r) {
  if (!e) return;
  ie || (ie = O(
    {},
    Ke,
    kt,
    nt,
    Mt,
    it,
    qt,
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
    je(e.declarations[n], r, O({ kind: i }, t));
  }
}
function je(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s } = t;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, a ? x : n === "var" ? v : void 0) : $(e.id, r, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const l = "feed" in t, c = l ? s : f(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? r.var(o, v) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && g(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      $(e.id, r, { kind: n, feed: c });
  }
}
function Lt(e, r) {
  r.func(e.id.name, oe(e, r));
}
function De(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let a = 0; a < e.body.length; a++) {
    const s = e.body[a];
    s.type === "MethodDefinition" ? Pe(s, r, { klass: n, superClass: i }) : s.type === "PropertyDefinition" || s.type;
  }
}
function Pe(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  let a;
  if (e.computed)
    a = f(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const s = e.static ? n : n.prototype, l = B(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      g(s, a, {
        value: l,
        writable: !0,
        configurable: !0
      });
      break;
    case "get": {
      const c = D(s, a);
      g(s, a, {
        get: l,
        set: c && c.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      const c = D(s, a);
      g(s, a, {
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
    i.type === "SpreadElement" ? t = t.concat(yield* Y(i, r)) : t.push(yield* y(i, r));
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
      i.computed ? a = yield* y(s, r) : s.type === "Identifier" ? a = s.name : a = "" + (yield* Ae(s));
      const l = yield* y(i.value, r), c = i.kind;
      if (c === "init")
        t[a] = l;
      else if (c === "get") {
        const o = D(t, a);
        g(t, a, {
          get: l,
          set: o && o.set,
          enumerable: !0,
          configurable: !0
        });
      } else {
        const o = D(t, a);
        g(t, a, {
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
function* Yt(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = _(e, t);
    return t.const(e.id.name, n), n;
  } else
    return _(e, r);
}
function* Zt(e, r) {
  const t = e.argument;
  switch (e.operator) {
    case "+":
      return +(yield* y(t, r));
    case "-":
      return -(yield* y(t, r));
    case "!":
      return !(yield* y(t, r));
    case "~":
      return ~(yield* y(t, r));
    case "void":
      return void (yield* y(t, r));
    case "typeof":
      return t.type === "Identifier" ? typeof (yield* W(t, r, { throwErr: !1 })) : typeof (yield* y(t, r));
    case "delete":
      if (t.type === "MemberExpression")
        return (yield* X(t, r, { getVar: !0 })).del();
      if (t.type === "Identifier")
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      return yield* y(t, r), !0;
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
  const t = yield* y(e.left, r), n = yield* y(e.right, r);
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
  const t = yield* y(e.right, r), n = e.left;
  let i;
  if (n.type === "Identifier") {
    if (i = yield* W(n, r, { getVar: !0, throwErr: !1 }), !i) {
      const a = r.global().find("window").get();
      i = new T(a, n.name);
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
      return (yield* y(e.left, r)) || (yield* y(e.right, r));
    case "&&":
      return (yield* y(e.left, r)) && (yield* y(e.right, r));
    case "??": {
      const t = yield* y(e.left, r);
      return t ?? (yield* y(e.right, r));
    }
    default:
      throw new SyntaxError(`Unexpected token ${e.operator}`);
  }
}
function* X(e, r, t = {}) {
  const { getObj: n = !1, getVar: i = !1 } = t;
  let a;
  if (e.object.type === "Super" ? a = yield* Te(e.object, r, { getProto: !0 }) : a = yield* y(e.object, r), e.optional && a == null)
    return;
  if (n) return a;
  let s;
  if (e.computed ? s = yield* y(e.property, r) : s = e.property.name, i) {
    const l = be(a, s);
    if (e.object.type === "Super" && l) {
      const c = r.find("this").get(), o = E(s);
      return g(c, o, { set: l }), new T(c, o);
    } else
      return new T(a, s);
  } else {
    const l = me(a, s);
    if (e.object.type === "Super" && l) {
      const c = r.find("this").get();
      return l.call(c);
    } else
      return a[s];
  }
}
function* nr(e, r) {
  return (yield* y(e.test, r)) ? yield* y(e.consequent, r) : yield* y(e.alternate, r);
}
function* ir(e, r) {
  let t, n;
  if (e.callee.type === "MemberExpression") {
    if (n = yield* X(e.callee, r, { getObj: !0 }), e.optional && n == null)
      return;
    let a;
    if (e.callee.computed ? a = yield* y(e.callee.property, r) : a = e.callee.property.name, e.callee.object.type === "Super") {
      const s = r.find("this").get();
      t = n[a].bind(s);
    } else
      t = n[a];
    if (typeof t != "function")
      throw new TypeError(`${a} is not a function`);
    if (t[q])
      throw new TypeError(`Class constructor ${a} cannot be invoked without 'new'`);
  } else {
    if (n = r.find("this").get(), t = yield* y(e.callee, r), e.optional && t == null)
      return;
    if (typeof t != "function" || e.callee.type !== "Super" && t[q]) {
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
    s.type === "SpreadElement" ? i = i.concat(yield* Y(s, r)) : i.push(yield* y(s, r));
  }
  if (e.callee.type === "Super") {
    if (r.find(P).get())
      throw new ReferenceError("Super constructor may only be called once");
    r.find(P).set(!0);
  }
  return n && n[K] && t.toString().indexOf("[native code]") !== -1 ? t.apply(n[K], i) : t.apply(n, i);
}
function* ar(e, r) {
  const t = yield* y(e.callee, r);
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
    a.type === "SpreadElement" ? n = n.concat(yield* Y(a, r)) : n.push(yield* y(a, r));
  }
  return new t(...n);
}
function* sr(e, r) {
  return r.find(ne).get();
}
function* lr(e, r) {
  let t;
  for (let n = 0; n < e.expressions.length; n++)
    t = yield* y(e.expressions[n], r);
  return t;
}
function* or(e, r) {
  return _(e, r);
}
function* cr(e, r) {
  const t = e.quasis.slice(), n = e.expressions.slice();
  let i = "", a, s;
  for (; a = t.shift(); )
    i += yield* Re(a), s = n.shift(), s && (i += yield* y(s, r));
  return i;
}
function* ur(e, r) {
  const t = yield* y(e.tag, r), n = e.quasi.quasis, i = n.map((c) => c.value.cooked), a = n.map((c) => c.value.raw);
  g(i, "raw", {
    value: ee(a)
  });
  const s = e.quasi.expressions, l = [];
  if (s)
    for (let c = 0; c < s.length; c++)
      l.push(yield* y(s[c], r));
  return t(ee(i), ...l);
}
function* Re(e, r) {
  return e.value.raw;
}
function* fr(e, r) {
  if (e.id && e.id.name) {
    const t = new S(r), n = yield* se(e, t);
    return t.const(e.id.name, n), n;
  } else
    return yield* se(e, r);
}
function* Te(e, r, t = {}) {
  const { getProto: n = !1 } = t, i = r.find(te).get();
  return n ? i.prototype : i;
}
function* Y(e, r) {
  return yield* y(e.argument, r);
}
function* yr(e, r) {
  return yield* y(e.expression, r);
}
function* hr(e, r) {
  const t = yield* y(e.argument, r);
  return e.delegate ? yield* t : yield t;
}
function* pr(e, r) {
  return R.RES = yield* y(e.argument, r), yield R;
}
const dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: Ht,
  ArrowFunctionExpression: or,
  AssignmentExpression: tr,
  AwaitExpression: pr,
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
  Super: Te,
  TaggedTemplateExpression: ur,
  TemplateElement: Re,
  TemplateLiteral: cr,
  ThisExpression: Gt,
  UnaryExpression: Zt,
  UpdateExpression: Qt,
  YieldExpression: hr
}, Symbol.toStringTag, { value: "Module" }));
function* gr(e, r) {
  yield* y(e.expression, r);
}
function* V(e, r, t = {}) {
  const {
    invasived: n = !1,
    hoisted: i = !1
  } = t, a = n ? r : new S(r);
  i || (yield* ze(e, a, { onlyBlock: !0 }));
  for (let s = 0; s < e.body.length; s++) {
    const l = yield* y(e.body[s], a);
    if (l === w || l === b || l === d)
      return l;
  }
}
function* mr() {
}
function* br() {
  debugger;
}
function* wr(e, r) {
  return d.RES = e.argument ? yield* y(e.argument, r) : void 0, d;
}
function* Sr() {
  return w;
}
function* vr() {
  return b;
}
function* Er(e, r) {
  return (yield* y(e.test, r)) ? yield* y(e.consequent, r) : yield* y(e.alternate, r);
}
function* xr(e, r) {
  const t = yield* y(e.discriminant, r);
  let n = !1;
  for (let i = 0; i < e.cases.length; i++) {
    const a = e.cases[i];
    if (!n && (!a.test || (yield* y(a.test, r)) === t) && (n = !0), n) {
      const s = yield* Fe(a, r);
      if (s === w)
        break;
      if (s === b || s === d)
        return s;
    }
  }
}
function* Fe(e, r) {
  for (let t = 0; t < e.consequent.length; t++) {
    const n = yield* y(e.consequent[t], r);
    if (n === w || n === b || n === d)
      return n;
  }
}
function* kr(e, r) {
  throw yield* y(e.argument, r);
}
function* $r(e, r) {
  try {
    return yield* V(e.block, r);
  } catch (t) {
    if (e.handler) {
      const n = new S(r), i = e.handler.param;
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
      if (t === w || t === b || t === d)
        return t;
    }
  }
}
function* Ve(e, r) {
  return yield* V(e.body, r, { invasived: !0 });
}
function* Ir(e, r) {
  for (; yield* y(e.test, r); ) {
    const t = yield* y(e.body, r);
    if (t === w)
      break;
    if (t === b)
      continue;
    if (t === d)
      return t;
  }
}
function* Or(e, r) {
  do {
    const t = yield* y(e.body, r);
    if (t === w)
      break;
    if (t === b)
      continue;
    if (t === d)
      return t;
  } while (yield* y(e.test, r));
}
function* Cr(e, r) {
  const t = new S(r);
  for (yield* y(e.init, t); !e.test || (yield* y(e.test, t)); yield* y(e.update, t)) {
    const n = new S(t);
    let i;
    if (e.body.type === "BlockStatement" ? i = yield* V(e.body, n, { invasived: !0 }) : i = yield* y(e.body, n), i === w)
      break;
    if (i === b)
      continue;
    if (i === d)
      return i;
  }
}
function* jr(e, r) {
  for (const t in yield* y(e.right, r)) {
    const n = yield* le(e, r, { value: t });
    if (n === w)
      break;
    if (n === b)
      continue;
    if (n === d)
      return n;
  }
}
function* Dr(e, r) {
  const t = yield* y(e.right, r);
  if (e.await) {
    const n = tt(t);
    let i;
    for (R.RES = n.next(), i = yield R; !i.done; R.RES = n.next(), i = yield R) {
      const a = yield* le(e, r, { value: i.value });
      if (a === w)
        break;
      if (a === b)
        continue;
      if (a === d)
        return a;
    }
  } else
    for (const n of t) {
      const i = yield* le(e, r, { value: n });
      if (i === w)
        break;
      if (i === b)
        continue;
      if (i === d)
        return i;
    }
}
const Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: V,
  BreakStatement: Sr,
  CatchClause: Ve,
  ContinueStatement: vr,
  DebuggerStatement: br,
  DoWhileStatement: Or,
  EmptyStatement: mr,
  ExpressionStatement: gr,
  ForInStatement: jr,
  ForOfStatement: Dr,
  ForStatement: Cr,
  IfStatement: Er,
  ReturnStatement: wr,
  SwitchCase: Fe,
  SwitchStatement: xr,
  ThrowStatement: kr,
  TryStatement: $r,
  WhileStatement: Ir
}, Symbol.toStringTag, { value: "Module" }));
function* _e(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = {} } = t, l = [];
  for (let c = 0; c < e.properties.length; c++) {
    const o = e.properties[c];
    if (i) {
      if (a || n === "var")
        if (o.type === "Property") {
          const h = o.value;
          h.type === "Identifier" ? r[n](h.name, a ? x : n === "var" ? v : void 0) : yield* k(h, r, { kind: n, hoist: i, onlyBlock: a });
        } else
          yield* z(o, r, { kind: n, hoist: i, onlyBlock: a });
    } else if (o.type === "Property") {
      let h;
      o.computed ? h = yield* y(o.key, r) : h = o.key.name, l.push(h);
      const p = o.value;
      p.type === "Identifier" ? r[n](p.name, s[h]) : yield* k(p, r, { kind: n, feed: s[h] });
    } else {
      const h = O({}, s);
      for (let p = 0; p < l.length; p++) delete h[l[p]];
      yield* z(o, r, { kind: n, feed: h });
    }
  }
}
function* Be(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, l = [];
  for (let c = 0; c < e.elements.length; c++) {
    const o = e.elements[c];
    if (o)
      if (i)
        (a || n === "var") && (o.type === "Identifier" ? r[n](o.name, a ? x : n === "var" ? v : void 0) : yield* k(o, r, { kind: n, hoist: i, onlyBlock: a }));
      else if (o.type === "Identifier")
        if (n)
          r[n](o.name, s[c]);
        else {
          const h = yield* W(o, r, { getVar: !0 });
          h.set(s[c]), l.push(h.get());
        }
      else o.type === "RestElement" ? yield* z(o, r, { kind: n, feed: s.slice(c) }) : yield* k(o, r, { kind: n, feed: s[c] });
  }
  if (l.length)
    return l;
}
function* z(e, r, t = {}) {
  const { kind: n, hoist: i = !1, onlyBlock: a = !1, feed: s = [] } = t, l = e.argument;
  i ? (a || n === "var") && (l.type === "Identifier" ? r[n](l.name, a ? x : n === "var" ? v : void 0) : yield* k(l, r, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? n ? r[n](l.name, s) : (yield* W(l, r, { getVar: !0 })).set(s) : yield* k(l, r, { kind: n, feed: s });
}
function* Ue(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s = yield* y(e.right, r) } = t, l = e.left;
  i ? (a || n === "var") && (l.type === "Identifier" ? r[n](l.name, a ? x : n === "var" ? v : void 0) : yield* k(l, r, { kind: n, hoist: i, onlyBlock: a })) : l.type === "Identifier" ? r[n](l.name, s) : yield* k(l, r, { kind: n, feed: s });
}
const Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: Be,
  AssignmentPattern: Ue,
  ObjectPattern: _e,
  RestElement: z
}, Symbol.toStringTag, { value: "Module" }));
let ae;
function* y(e, r) {
  if (!e) return;
  ae || (ae = O(
    {},
    Je,
    dr,
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
function* Rr(e, r) {
  r.func(e.id.name, _(e, r));
}
function* M(e, r, t = {}) {
  for (let n = 0; n < e.declarations.length; n++) {
    const i = e.kind === "using" || e.kind === "await using" ? "const" : e.kind;
    yield* Me(e.declarations[n], r, O({ kind: i }, t));
  }
}
function* Me(e, r, t = {}) {
  const { kind: n = "var", hoist: i = !1, onlyBlock: a = !1, feed: s } = t;
  if (i)
    (a || n === "var") && (e.id.type === "Identifier" ? r[n](e.id.name, a ? x : n === "var" ? v : void 0) : yield* k(e.id, r, { kind: n, hoist: i, onlyBlock: a }));
  else {
    const l = "feed" in t, c = l ? s : yield* y(e.init, r);
    if (e.id.type === "Identifier") {
      const o = e.id.name;
      n === "var" && !e.init && !l ? r.var(o, v) : r[n](o, c), e.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(e.init.type) !== -1 && !c.name && g(c, "name", {
        value: o,
        configurable: !0
      });
    } else
      yield* k(e.id, r, { kind: n, feed: c });
  }
}
function* Tr(e, r) {
  r.func(e.id.name, yield* se(e, r));
}
function* qe(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  for (let a = 0; a < e.body.length; a++) {
    const s = e.body[a];
    s.type === "MethodDefinition" ? yield* Ne(s, r, { klass: n, superClass: i }) : s.type === "PropertyDefinition" || s.type;
  }
}
function* Ne(e, r, t = {}) {
  const { klass: n, superClass: i } = t;
  let a;
  if (e.computed)
    a = yield* y(e.key, r);
  else if (e.key.type === "Identifier")
    a = e.key.name;
  else
    throw new SyntaxError("Unexpected token");
  const s = e.static ? n : n.prototype, l = _(e.value, r, { superClass: i });
  switch (e.kind) {
    case "constructor":
      break;
    case "method":
      g(s, a, {
        value: l,
        writable: !0,
        configurable: !0
      });
      break;
    case "get": {
      const c = D(s, a);
      g(s, a, {
        get: l,
        set: c && c.set,
        configurable: !0
      });
      break;
    }
    case "set": {
      const c = D(s, a);
      g(s, a, {
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
function pe(e, r = {}) {
  const { res: t, err: n, ret: i, fullRet: a } = r;
  return new Promise((s, l) => {
    if ("ret" in r)
      return s(e.return(i));
    "err" in r ? o(n) : c(t);
    function c(p) {
      let m;
      try {
        m = e.next(p);
      } catch (I) {
        return l(I);
      }
      return h(m), null;
    }
    function o(p) {
      let m;
      try {
        m = e.throw(p);
      } catch (I) {
        return l(I);
      }
      h(m);
    }
    function h(p) {
      if (p.done) return s(a ? p : p.value);
      if (p.value !== R) return s(p);
      const m = p.value.RES;
      return (m && m.then === "function" ? m : Promise.resolve(m)).then(c, o);
    }
  });
}
function* ze(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], a = [];
  for (let s = 0; s < e.body.length; s++) {
    const l = e.body[s];
    l.type === "FunctionDeclaration" ? (i.push(l), a.push(s)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? yield* M(l, r, { hoist: !0, onlyBlock: !0 }) : n || (yield* C(l, r));
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
      yield* M(e, r, { hoist: !0 });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      e.left.type === "VariableDeclaration" && (yield* M(e.left, r, { hoist: !0 }));
    case "ForStatement":
      e.type === "ForStatement" && e.init.type === "VariableDeclaration" && (yield* M(e.init, r, { hoist: !0 }));
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
    const o = new S(r, !0);
    e.type !== "ArrowFunctionExpression" && (o.const("this", this), o.let("arguments", arguments), o.const(ne, new.target), n && (o.const(te, n), i && o.let(P, !1)));
    for (let p = 0; p < a.length; p++) {
      const m = a[p];
      m.type === "Identifier" ? o.var(m.name, c[p]) : m.type === "RestElement" ? yield* z(m, o, { kind: "var", feed: c.slice(p) }) : yield* k(m, o, { feed: c[p] });
    }
    let h;
    if (e.body.type === "BlockStatement" ? (yield* ze(e.body, o), h = yield* V(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (h = yield* y(e.body, o), e.type === "ArrowFunctionExpression" && (d.RES = h, h = d)), h === d)
      return h.RES;
  };
  let l;
  return e.async && e.generator ? l = function() {
    const c = s.apply(this, arguments);
    let o = Promise.resolve(), h = !1;
    const p = (I) => o = o.then(() => pe(c, O({ fullRet: !0 }, I))).catch((Le) => {
      if (!h)
        return h = !0, Promise.reject(Le);
    }), m = {
      next: (I) => p({ res: I }),
      throw: (I) => p({ err: I }),
      return: (I) => p({ ret: I })
    };
    return typeof Symbol == "function" && (m[Symbol.iterator] = function() {
      return this;
    }), m;
  } : e.async ? l = function() {
    return pe(s.apply(this, arguments));
  } : l = s, g(l, re, { value: !0 }), g(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), g(l, "length", {
    value: a.length,
    configurable: !0
  }), l;
}
function* se(e, r) {
  const t = yield* y(e.superClass, r);
  let n = function() {
    t && t.apply(this);
  };
  const i = e.body.body;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    if (s.type === "MethodDefinition" && s.kind === "constructor") {
      n = _(s.value, r, { superClass: t, isCtor: !0 });
      break;
    }
  }
  return t && we(n, t), yield* qe(e.body, r, { klass: n, superClass: t }), g(n, q, { value: !0 }), g(n, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), n;
}
function* le(e, r, t) {
  const { value: n } = t, i = e.left, a = new S(r);
  i.type === "VariableDeclaration" ? yield* M(i, a, { feed: n }) : i.type === "Identifier" ? (yield* A(i, r, { getVar: !0 })).set(n) : yield* k(i, r, { feed: n });
  let s;
  return e.body.type === "BlockStatement" ? s = yield* V(e.body, a, { invasived: !0 }) : s = yield* y(e.body, a), s;
}
function ce(e, r, t = {}) {
  const { onlyBlock: n = !1 } = t, i = [], a = [];
  for (let s = 0; s < e.body.length; s++) {
    const l = e.body[s];
    l.type === "FunctionDeclaration" ? (i.push(l), a.push(s)) : l.type === "VariableDeclaration" && ["const", "let"].indexOf(l.kind) !== -1 ? U(l, r, { hoist: !0, onlyBlock: !0 }) : n || j(l, r);
  }
  if (a.length) {
    for (let s = a.length - 1; s > -1; s--)
      e.body.splice(a[s], 1);
    e.body = i.concat(e.body);
  }
}
function j(e, r) {
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
      j(e.body, r);
      break;
    case "IfStatement":
      j(e.consequent, r), e.alternate && j(e.alternate, r);
      break;
    case "BlockStatement":
      for (let t = 0; t < e.body.length; t++)
        j(e.body[t], r);
      break;
    case "SwitchStatement":
      for (let t = 0; t < e.cases.length; t++)
        for (let n = 0; n < e.cases[t].consequent.length; n++)
          j(e.cases[t].consequent[n], r);
      break;
    case "TryStatement": {
      const t = e.block.body;
      for (let a = 0; a < t.length; a++)
        j(t[a], r);
      const n = e.handler && e.handler.body.body;
      if (n)
        for (let a = 0; a < n.length; a++)
          j(n[a], r);
      const i = e.finalizer && e.finalizer.body;
      if (i)
        for (let a = 0; a < i.length; a++)
          j(i[a], r);
      break;
    }
  }
}
function $(e, r, t = {}) {
  switch (e.type) {
    case "ObjectPattern":
      return Ie(e, r, t);
    case "ArrayPattern":
      return Oe(e, r, t);
    case "RestElement":
      return N(e, r, t);
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
  let l = function(...c) {
    const o = new S(r, !0);
    e.type !== "ArrowFunctionExpression" && (o.const("this", this), o.let("arguments", arguments), o.const(ne, new.target), n && (o.const(te, n), i && o.let(P, !1)));
    for (let p = 0; p < a.length; p++) {
      const m = a[p];
      m.type === "Identifier" ? o.var(m.name, c[p]) : m.type === "RestElement" ? N(m, o, { kind: "var", feed: c.slice(p) }) : $(m, o, { feed: c[p] });
    }
    let h;
    if (e.body.type === "BlockStatement" ? (ce(e.body, o), h = F(e.body, o, {
      invasived: !0,
      hoisted: !0
    })) : (h = f(e.body, o), e.type === "ArrowFunctionExpression" && (d.RES = h, h = d)), h === d)
      return h.RES;
  };
  return e.type === "ArrowFunctionExpression" && g(l, re, { value: !0 }), g(l, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), g(l, "length", {
    value: a.length,
    configurable: !0
  }), l;
}
function oe(e, r) {
  const t = f(e.superClass, r);
  let n = function() {
    t && t.apply(this);
  };
  const i = e.body.body;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    if (s.type === "MethodDefinition" && s.kind === "constructor") {
      n = B(s.value, r, { superClass: t, isCtor: !0 });
      break;
    }
  }
  return t && we(n, t), De(e.body, r, { klass: n, superClass: t }), g(n, q, { value: !0 }), g(n, "name", {
    value: e.id && e.id.name || "",
    configurable: !0
  }), n;
}
function We(e, r, t) {
  const { value: n } = t, i = e.left, a = new S(r);
  i.type === "VariableDeclaration" ? U(i, a, { feed: n }) : i.type === "Identifier" ? A(i, r, { getVar: !0 }).set(n) : $(i, r, { feed: n });
  let s;
  return e.body.type === "BlockStatement" ? s = F(e.body, a, { invasived: !0 }) : s = f(e.body, a), s;
}
const ue = class ue {
  constructor(r = {}) {
    this.options = {}, this.scope = new S(null, !0), this.exports = {};
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
    ce(t, this.scope), f(t, this.scope);
  }
};
ue.version = rt;
let de = ue;
export {
  de as default
};
//# sourceMappingURL=sval.js.map
