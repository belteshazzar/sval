import { parse } from "acorn";
const declaration$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return ClassBody$1;
  },
  get ClassDeclaration() {
    return ClassDeclaration$1;
  },
  get FunctionDeclaration() {
    return FunctionDeclaration$1;
  },
  get MethodDefinition() {
    return MethodDefinition$1;
  },
  get VariableDeclaration() {
    return VariableDeclaration$1;
  },
  get VariableDeclarator() {
    return VariableDeclarator$1;
  }
}, Symbol.toStringTag, { value: "Module" }));
const declaration = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get ClassBody() {
    return ClassBody;
  },
  get ClassDeclaration() {
    return ClassDeclaration;
  },
  get FunctionDeclaration() {
    return FunctionDeclaration;
  },
  get MethodDefinition() {
    return MethodDefinition;
  },
  get VariableDeclaration() {
    return VariableDeclaration;
  },
  get VariableDeclarator() {
    return VariableDeclarator;
  }
}, Symbol.toStringTag, { value: "Module" }));
const freeze = Object.freeze;
const define = Object.defineProperty;
const getDptor = Object.getOwnPropertyDescriptor;
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
const getOwnNames = Object.getOwnPropertyNames;
const setPrototypeOf = Object.setPrototypeOf;
function setProto(obj, proto) {
  setPrototypeOf ? setPrototypeOf(obj, proto) : obj.__proto__ = proto;
}
const getPrototypeOf = Object.getPrototypeOf;
function getProto(obj) {
  return getPrototypeOf ? getPrototypeOf(obj) : obj.__proto__;
}
const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getGetterOrSetter(method, obj, key) {
  while (obj) {
    const descriptor = getOwnPropertyDescriptor(obj, key);
    const value = typeof descriptor !== "undefined" && typeof descriptor.writable === "undefined" && typeof descriptor[method] === "function" && descriptor[method];
    if (value) {
      return value;
    } else {
      obj = getProto(obj);
    }
  }
}
function getGetter(obj, key) {
  return getGetterOrSetter("get", obj, key);
}
function getSetter(obj, key) {
  return getGetterOrSetter("set", obj, key);
}
const create = Object.create;
function inherits(subClass, superClass) {
  setProto(subClass, superClass);
  subClass.prototype = create(superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true
    }
  });
}
function _assign(target) {
  for (let i = 1; i < arguments.length; ++i) {
    const source = arguments[i];
    for (const key in source) {
      if (hasOwn(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
const assign = Object.assign || _assign;
let names = [];
let globalObj = create(null);
try {
  if (!window.Object) throw 0;
  names = getOwnNames(globalObj = window).filter((n) => n !== "webkitStorageInfo");
} catch (err) {
  try {
    if (!global.Object) throw 0;
    names = getOwnNames(globalObj = global).filter((n) => n !== "GLOBAL" && n !== "root");
  } catch (err2) {
    try {
      globalObj.Object = Object;
    } catch (err3) {
    }
    try {
      globalObj.Function = Function;
    } catch (err3) {
    }
    try {
      globalObj.Array = Array;
    } catch (err3) {
    }
    try {
      globalObj.Number = Number;
    } catch (err3) {
    }
    try {
      globalObj.parseFloat = parseFloat;
    } catch (err3) {
    }
    try {
      globalObj.parseInt = parseInt;
    } catch (err3) {
    }
    try {
      globalObj.Infinity = Infinity;
    } catch (err3) {
    }
    try {
      globalObj.NaN = NaN;
    } catch (err3) {
    }
    try {
      globalObj.undefined = void 0;
    } catch (err3) {
    }
    try {
      globalObj.Boolean = Boolean;
    } catch (err3) {
    }
    try {
      globalObj.String = String;
    } catch (err3) {
    }
    try {
      globalObj.Symbol = Symbol;
    } catch (err3) {
    }
    try {
      globalObj.Date = Date;
    } catch (err3) {
    }
    try {
      globalObj.Promise = Promise;
    } catch (err3) {
    }
    try {
      globalObj.RegExp = RegExp;
    } catch (err3) {
    }
    try {
      globalObj.Error = Error;
    } catch (err3) {
    }
    try {
      globalObj.EvalError = EvalError;
    } catch (err3) {
    }
    try {
      globalObj.RangeError = RangeError;
    } catch (err3) {
    }
    try {
      globalObj.ReferenceError = ReferenceError;
    } catch (err3) {
    }
    try {
      globalObj.SyntaxError = SyntaxError;
    } catch (err3) {
    }
    try {
      globalObj.TypeError = TypeError;
    } catch (err3) {
    }
    try {
      globalObj.URIError = URIError;
    } catch (err3) {
    }
    try {
      globalObj.JSON = JSON;
    } catch (err3) {
    }
    try {
      globalObj.Math = Math;
    } catch (err3) {
    }
    try {
      globalObj.console = console;
    } catch (err3) {
    }
    try {
      globalObj.Intl = Intl;
    } catch (err3) {
    }
    try {
      globalObj.ArrayBuffer = ArrayBuffer;
    } catch (err3) {
    }
    try {
      globalObj.Uint8Array = Uint8Array;
    } catch (err3) {
    }
    try {
      globalObj.Int8Array = Int8Array;
    } catch (err3) {
    }
    try {
      globalObj.Uint16Array = Uint16Array;
    } catch (err3) {
    }
    try {
      globalObj.Int16Array = Int16Array;
    } catch (err3) {
    }
    try {
      globalObj.Uint32Array = Uint32Array;
    } catch (err3) {
    }
    try {
      globalObj.Int32Array = Int32Array;
    } catch (err3) {
    }
    try {
      globalObj.Float32Array = Float32Array;
    } catch (err3) {
    }
    try {
      globalObj.Float64Array = Float64Array;
    } catch (err3) {
    }
    try {
      globalObj.Uint8ClampedArray = Uint8ClampedArray;
    } catch (err3) {
    }
    try {
      globalObj.DataView = DataView;
    } catch (err3) {
    }
    try {
      globalObj.Map = Map;
    } catch (err3) {
    }
    try {
      globalObj.Set = Set;
    } catch (err3) {
    }
    try {
      globalObj.WeakMap = WeakMap;
    } catch (err3) {
    }
    try {
      globalObj.WeakSet = WeakSet;
    } catch (err3) {
    }
    try {
      globalObj.Proxy = Proxy;
    } catch (err3) {
    }
    try {
      globalObj.Reflect = Reflect;
    } catch (err3) {
    }
    try {
      globalObj.decodeURI = decodeURI;
    } catch (err3) {
    }
    try {
      globalObj.decodeURIComponent = decodeURIComponent;
    } catch (err3) {
    }
    try {
      globalObj.encodeURI = encodeURI;
    } catch (err3) {
    }
    try {
      globalObj.encodeURIComponent = encodeURIComponent;
    } catch (err3) {
    }
    try {
      globalObj.escape = escape;
    } catch (err3) {
    }
    try {
      globalObj.unescape = unescape;
    } catch (err3) {
    }
    try {
      globalObj.eval = eval;
    } catch (err3) {
    }
    try {
      globalObj.isFinite = isFinite;
    } catch (err3) {
    }
    try {
      globalObj.isNaN = isNaN;
    } catch (err3) {
    }
    try {
      globalObj.SharedArrayBuffer = SharedArrayBuffer;
    } catch (err3) {
    }
    try {
      globalObj.Atomics = Atomics;
    } catch (err3) {
    }
    try {
      globalObj.WebAssembly = WebAssembly;
    } catch (err3) {
    }
    try {
      globalObj.clearInterval = clearInterval;
    } catch (err3) {
    }
    try {
      globalObj.clearTimeout = clearTimeout;
    } catch (err3) {
    }
    try {
      globalObj.setInterval = setInterval;
    } catch (err3) {
    }
    try {
      globalObj.setTimeout = setTimeout;
    } catch (err3) {
    }
    try {
      globalObj.crypto = crypto;
    } catch (err3) {
    }
    names = getOwnNames(globalObj);
  }
}
if (globalObj.Symbol) {
  !globalObj.Symbol.iterator && (globalObj.Symbol.iterator = createSymbol("iterator"));
  !globalObj.Symbol.asyncIterator && (globalObj.Symbol.asyncIterator = createSymbol("asynciterator"));
}
const win = create({});
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  try {
    win[name] = globalObj[name];
  } catch (err) {
  }
}
const WINDOW = createSymbol("window");
function createSandBox() {
  return assign(create({ [WINDOW]: globalObj }), win);
}
function createSymbol(key) {
  return key + Math.random().toString(36).substring(2);
}
function getAsyncIterator(obj) {
  let iterator;
  if (typeof Symbol === "function") {
    iterator = obj[Symbol.asyncIterator];
    !iterator && (iterator = obj[Symbol.iterator]);
  }
  if (iterator) {
    return iterator.call(obj);
  } else if (typeof obj.next === "function") {
    return obj;
  } else {
    let i = 0;
    return {
      next() {
        if (obj && i >= obj.length) obj = void 0;
        return { value: obj && obj[i++], done: !obj };
      }
    };
  }
}
const version = "0.4.8";
const AWAIT = { RES: void 0 };
const RETURN = { RES: void 0 };
const CONTINUE = { VAL: createSymbol("continue") };
const BREAK = { VAL: createSymbol("break") };
const SUPER = createSymbol("super");
const SUPERCALL = createSymbol("supercall");
const NOCTOR = createSymbol("noctor");
const CLSCTOR = createSymbol("clsctor");
const NEWTARGET = createSymbol("newtarget");
const NOINIT = createSymbol("noinit");
const DEADZONE = createSymbol("deadzone");
class Var {
  constructor(kind, value) {
    this.kind = kind;
    this.value = value;
  }
  get() {
    return this.value;
  }
  set(value) {
    if (this.kind === "const") {
      throw new TypeError("Assignment to constant variable");
    } else {
      return this.value = value;
    }
  }
}
class Prop {
  constructor(object, property) {
    this.object = object;
    this.property = property;
  }
  get() {
    return this.object[this.property];
  }
  set(value) {
    this.object[this.property] = value;
    return true;
  }
  del() {
    return delete this.object[this.property];
  }
}
class MapEntry {
  constructor(map, key) {
    this.map = map;
    this.key = key;
  }
  get() {
    return this.map.get(this.key);
  }
  set(value) {
    this.map.set(this.key, value);
    return true;
  }
  del() {
    return this.map.delete(this.key);
  }
}
class Scope {
  /**
   * Create a simulated scope
   * @param parent the parent scope along the scope chain (default: null)
   * @param isolated true for function scope or false for block scope (default: false)
   * @param strict whether this scope is in strict mode (default: inherits from parent or false)
   */
  constructor(parent = null, isolated = false, strict) {
    this.context = create(null);
    this.strict = false;
    this.parent = parent;
    this.isolated = isolated;
    this.strict = strict !== void 0 ? strict : parent ? parent.strict : false;
  }
  /**
   * Get global scope
   */
  global() {
    let scope = this;
    while (scope.parent) {
      scope = scope.parent;
    }
    return scope;
  }
  /**
   * Clone current scope
   */
  clone() {
    const cloneScope = new Scope(this.parent, this.isolated);
    for (const name in this.context) {
      const variable = this.context[name];
      cloneScope[variable.kind](name, variable.get());
    }
    return cloneScope;
  }
  /**
   * Find a variable along scope chain
   * @param name variable identifier name
   */
  find(name) {
    if (this.context[name]) {
      return this.context[name];
    } else if (this.parent) {
      return this.parent.find(name);
    } else {
      const win2 = this.global().find("window").get();
      if (name in win2) {
        return new Prop(win2, name);
      } else {
        return null;
      }
    }
  }
  /**
   * Check if a variable exists in this scope only (not searching parent chain)
   * @param name variable identifier name
   */
  hasOwn(name) {
    return name in this.context;
  }
  /**
   * Declare a var variable
   * @param name variable identifier name
   * @param value variable value
   */
  var(name, value) {
    let scope = this;
    while (scope.parent && !scope.isolated) {
      scope = scope.parent;
    }
    const variable = scope.context[name];
    if (!variable) {
      scope.context[name] = new Var("var", value === NOINIT ? void 0 : value);
    } else {
      if (variable.kind === "var") {
        if (value !== NOINIT) {
          variable.set(value);
        }
      } else {
        throw new SyntaxError(`Identifier '${name}' has already been declared`);
      }
    }
    if (!scope.parent) {
      const win2 = scope.find("window").get();
      if (value !== NOINIT) {
        define(win2, name, { value, writable: true, enumerable: true });
      }
    }
  }
  /**
   * Declare a let variable
   * @param name variable identifier name
   * @param value variable value
   */
  let(name, value) {
    const variable = this.context[name];
    if (!variable || variable.get() === DEADZONE) {
      this.context[name] = new Var("let", value);
    } else {
      throw new SyntaxError(`Identifier '${name}' has already been declared`);
    }
  }
  /**
   * Declare a const variable
   * @param name variable identifier name
   * @param value variable value
   */
  const(name, value) {
    const variable = this.context[name];
    if (!variable || variable.get() === DEADZONE) {
      this.context[name] = new Var("const", value);
    } else {
      throw new SyntaxError(`Identifier '${name}' has already been declared`);
    }
  }
  /**
   * Declare a function
   * @param name function name
   * @param value function
   */
  func(name, value) {
    const variable = this.context[name];
    if (!variable || variable.kind === "var") {
      this.context[name] = new Var("var", value);
    } else {
      throw new SyntaxError(`Identifier '${name}' has already been declared`);
    }
  }
}
function runAsync(iterator, options = {}) {
  const { res, err, ret, fullRet } = options;
  return new Promise((resolve, reject) => {
    if ("ret" in options) {
      return resolve(iterator.return(ret));
    }
    if ("err" in options) {
      onRejected(err);
    } else {
      onFulfilled(res);
    }
    function onFulfilled(res2) {
      let ret2;
      try {
        ret2 = iterator.next(res2);
      } catch (e) {
        return reject(e);
      }
      next(ret2);
      return null;
    }
    function onRejected(err2) {
      let ret2;
      try {
        ret2 = iterator.throw(err2);
      } catch (e) {
        return reject(e);
      }
      next(ret2);
    }
    function next(ret2) {
      if (ret2.done) return resolve(fullRet ? ret2 : ret2.value);
      if (ret2.value !== AWAIT) return resolve(ret2);
      const awaitValue = ret2.value.RES;
      const value = awaitValue && awaitValue.then === "function" ? awaitValue : Promise.resolve(awaitValue);
      return value.then(onFulfilled, onRejected);
    }
  });
}
function Identifier$1(node, scope, options = {}) {
  const { getVar = false, throwErr = true } = options;
  if (node.name === "undefined") {
    return void 0;
  }
  const variable = scope.find(node.name);
  if (variable) {
    if (getVar) {
      return variable;
    } else {
      const value = variable.get();
      if (value === DEADZONE) {
        throw new ReferenceError(`${node.name} is not defined`);
      } else {
        return value;
      }
    }
  } else if (throwErr) {
    throw new ReferenceError(`${node.name} is not defined`);
  } else {
    return void 0;
  }
}
function PrivateIdentifier$1(node, scope) {
  return Symbol.for(`private:${node.name}`);
}
const identifier$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier: Identifier$1,
  PrivateIdentifier: PrivateIdentifier$1
}, Symbol.toStringTag, { value: "Module" }));
function Literal$1(node, scope) {
  return node.value;
}
const literal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal: Literal$1
}, Symbol.toStringTag, { value: "Module" }));
function ThisExpression$1(node, scope) {
  const superCall = scope.find(SUPERCALL);
  if (superCall && !superCall.get()) {
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  } else {
    return scope.find("this").get();
  }
}
function ArrayExpression$1(node, scope) {
  let results = [];
  for (let i = 0; i < node.elements.length; i++) {
    const item = node.elements[i];
    if (item.type === "SpreadElement") {
      results = results.concat(SpreadElement$1(item, scope));
    } else {
      results.push(evaluate$1(item, scope));
    }
  }
  return results;
}
function ObjectExpression$1(node, scope) {
  const object = {};
  for (let i = 0; i < node.properties.length; i++) {
    const property = node.properties[i];
    if (property.type === "SpreadElement") {
      assign(object, SpreadElement$1(property, scope));
    } else if (property.type === "Property") {
      let key;
      const propKey = property.key;
      if (property.computed) {
        key = evaluate$1(propKey, scope);
      } else {
        if (propKey.type === "Identifier") {
          key = propKey.name;
        } else {
          key = "" + Literal$1(propKey);
        }
      }
      const value = evaluate$1(property.value, scope);
      const propKind = property.kind;
      if (propKind === "init") {
        object[key] = value;
      } else if (propKind === "get") {
        const oriDptor = getDptor(object, key);
        define(object, key, {
          get: value,
          set: oriDptor && oriDptor.set,
          enumerable: true,
          configurable: true
        });
      } else {
        const oriDptor = getDptor(object, key);
        define(object, key, {
          get: oriDptor && oriDptor.get,
          set: value,
          enumerable: true,
          configurable: true
        });
      }
    }
  }
  return object;
}
function FunctionExpression$1(node, scope) {
  if (node.id && node.id.name) {
    const tmpScope = new Scope(scope);
    const func = createFunc(node, tmpScope);
    tmpScope.const(node.id.name, func);
    return func;
  } else {
    return createFunc(node, scope);
  }
}
function UnaryExpression$1(node, scope) {
  const arg = node.argument;
  switch (node.operator) {
    case "+":
      return +evaluate$1(arg, scope);
    case "-":
      return -evaluate$1(arg, scope);
    case "!":
      return !evaluate$1(arg, scope);
    case "~":
      return ~evaluate$1(arg, scope);
    case "void":
      return void evaluate$1(arg, scope);
    case "typeof":
      if (arg.type === "Identifier") {
        return typeof Identifier$1(arg, scope, { throwErr: false });
      } else {
        return typeof evaluate$1(arg, scope);
      }
    case "delete":
      if (arg.type === "MemberExpression") {
        const variable = MemberExpression$1(arg, scope, { getVar: true });
        return variable.del();
      } else if (arg.type === "Identifier") {
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      } else {
        evaluate$1(arg, scope);
        return true;
      }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function UpdateExpression$1(node, scope) {
  const arg = node.argument;
  let variable;
  if (arg.type === "Identifier") {
    variable = Identifier$1(arg, scope, { getVar: true });
  } else if (arg.type === "MemberExpression") {
    variable = MemberExpression$1(arg, scope, { getVar: true });
  } else {
    throw new SyntaxError("Unexpected token");
  }
  const value = variable.get();
  if (node.operator === "++") {
    variable.set(value + 1);
    return node.prefix ? variable.get() : value;
  } else if (node.operator === "--") {
    variable.set(value - 1);
    return node.prefix ? variable.get() : value;
  } else {
    throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function BinaryExpression$1(node, scope) {
  const left = evaluate$1(node.left, scope);
  const right = evaluate$1(node.right, scope);
  switch (node.operator) {
    case "==":
      return left == right;
    case "!=":
      return left != right;
    case "===":
      return left === right;
    case "!==":
      return left !== right;
    case "<":
      return left < right;
    case "<=":
      return left <= right;
    case ">":
      return left > right;
    case ">=":
      return left >= right;
    case "<<":
      return left << right;
    case ">>":
      return left >> right;
    case ">>>":
      return left >>> right;
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "**":
      return left ** right;
    case "/":
      return left / right;
    case "%":
      return left % right;
    case "|":
      return left | right;
    case "^":
      return left ^ right;
    case "&":
      return left & right;
    case "in":
      return left in right;
    case "instanceof":
      return left instanceof right;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function AssignmentExpression$1(node, scope) {
  const value = evaluate$1(node.right, scope);
  const left = node.left;
  let variable;
  if (left.type === "Identifier") {
    variable = Identifier$1(left, scope, { getVar: true, throwErr: false });
    if (!variable) {
      const win2 = scope.global().find("window").get();
      variable = new Prop(win2, left.name);
    }
  } else if (left.type === "MemberExpression") {
    variable = MemberExpression$1(left, scope, { getVar: true });
  } else {
    return pattern(left, scope, { feed: value });
  }
  switch (node.operator) {
    case "=":
      variable.set(value);
      return variable.get();
    case "+=":
      variable.set(variable.get() + value);
      return variable.get();
    case "-=":
      variable.set(variable.get() - value);
      return variable.get();
    case "*=":
      variable.set(variable.get() * value);
      return variable.get();
    case "/=":
      variable.set(variable.get() / value);
      return variable.get();
    case "%=":
      variable.set(variable.get() % value);
      return variable.get();
    case "**=":
      variable.set(variable.get() ** value);
      return variable.get();
    case "<<=":
      variable.set(variable.get() << value);
      return variable.get();
    case ">>=":
      variable.set(variable.get() >> value);
      return variable.get();
    case ">>>=":
      variable.set(variable.get() >>> value);
      return variable.get();
    case "|=":
      variable.set(variable.get() | value);
      return variable.get();
    case "^=":
      variable.set(variable.get() ^ value);
      return variable.get();
    case "&=":
      variable.set(variable.get() & value);
      return variable.get();
    case "||=": {
      const currentValue = variable.get();
      if (!currentValue) {
        variable.set(value);
      }
      return variable.get();
    }
    case "&&=": {
      const currentValue = variable.get();
      if (currentValue) {
        variable.set(value);
      }
      return variable.get();
    }
    case "??=": {
      const currentValue = variable.get();
      if (currentValue === null || currentValue === void 0) {
        variable.set(value);
      }
      return variable.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function LogicalExpression$1(node, scope) {
  switch (node.operator) {
    case "||":
      return evaluate$1(node.left, scope) || evaluate$1(node.right, scope);
    case "&&":
      return evaluate$1(node.left, scope) && evaluate$1(node.right, scope);
    case "??": {
      const leftValue = evaluate$1(node.left, scope);
      return leftValue !== null && leftValue !== void 0 ? leftValue : evaluate$1(node.right, scope);
    }
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function MemberExpression$1(node, scope, options = {}) {
  const { getObj = false, getVar = false } = options;
  let object;
  if (node.object.type === "Super") {
    object = Super$1(node.object, scope, { getProto: true });
  } else {
    object = evaluate$1(node.object, scope);
  }
  if (node.optional && (object === null || object === void 0)) {
    return void 0;
  }
  if (getObj) return object;
  const isPrivate = node.property.type === "PrivateIdentifier";
  let key;
  if (isPrivate) {
    key = Symbol.for(`private:${node.property.name}`);
    const isStaticAccess = typeof object === "function";
    if (isStaticAccess) {
      const privateStaticFields = object.__privateStaticFields;
      if (!privateStaticFields || !privateStaticFields.has(key)) {
        throw new TypeError(`Cannot read private member #${node.property.name} from an object whose class did not declare it`);
      }
      if (getVar) {
        return new MapEntry(privateStaticFields, key);
      } else {
        return privateStaticFields.get(key);
      }
    } else {
      const constructor = object.constructor;
      const privateFields = constructor && constructor.__privateInstanceFields;
      if (!privateFields) {
        throw new TypeError(`Cannot read private member from an object whose class did not declare it`);
      }
      const privateData = privateFields.get(object);
      if (!privateData || !(key in privateData)) {
        throw new TypeError(`Cannot read private member #${node.property.name} from an object whose class did not declare it`);
      }
      if (getVar) {
        return new Prop(privateData, key);
      } else {
        return privateData[key];
      }
    }
  } else if (node.computed) {
    key = evaluate$1(node.property, scope);
  } else {
    key = node.property.name;
  }
  if (getVar) {
    const setter = getSetter(object, key);
    if (node.object.type === "Super" && setter) {
      const thisObject = scope.find("this").get();
      const privateKey = createSymbol(key);
      define(thisObject, privateKey, { set: setter });
      return new Prop(thisObject, privateKey);
    } else {
      return new Prop(object, key);
    }
  } else {
    const getter = getGetter(object, key);
    if (node.object.type === "Super" && getter) {
      const thisObject = scope.find("this").get();
      return getter.call(thisObject);
    } else {
      return object[key];
    }
  }
}
function ConditionalExpression$1(node, scope) {
  return evaluate$1(node.test, scope) ? evaluate$1(node.consequent, scope) : evaluate$1(node.alternate, scope);
}
function CallExpression$1(node, scope) {
  let func;
  let object;
  if (node.callee.type === "MemberExpression") {
    object = MemberExpression$1(node.callee, scope, { getObj: true });
    if (node.optional && (object === null || object === void 0)) {
      return void 0;
    }
    let key;
    const isPrivate = node.callee.property.type === "PrivateIdentifier";
    if (isPrivate) {
      key = Symbol.for(`private:${node.callee.property.name}`);
      const isStaticAccess = typeof object === "function";
      if (isStaticAccess) {
        const privateStaticFields = object.__privateStaticFields;
        func = privateStaticFields ? privateStaticFields.get(key) : void 0;
      } else {
        const constructor = object.constructor;
        const privateFields = constructor && constructor.__privateInstanceFields;
        const privateData = privateFields ? privateFields.get(object) : null;
        func = privateData ? privateData[key] : void 0;
      }
    } else if (node.callee.computed) {
      key = evaluate$1(node.callee.property, scope);
      if (node.callee.object.type === "Super") {
        const thisObject = scope.find("this").get();
        func = object[key].bind(thisObject);
      } else {
        func = object[key];
      }
    } else {
      key = node.callee.property.name;
      if (node.callee.object.type === "Super") {
        const thisObject = scope.find("this").get();
        func = object[key].bind(thisObject);
      } else {
        func = object[key];
      }
    }
    if (node.optional && (func === null || func === void 0)) {
      return void 0;
    }
    if (typeof func !== "function") {
      throw new TypeError(`${key} is not a function`);
    }
    try {
      if (func[CLSCTOR] === true) {
        throw new TypeError(`Class constructor ${key} cannot be invoked without 'new'`);
      }
    } catch (e) {
      if (e instanceof TypeError && e.message.includes("Class constructor")) {
        throw e;
      }
    }
  } else {
    object = scope.find("this").get();
    if (node.callee.type === "Identifier" && node.callee.name === "eval") {
      if (node.arguments.length === 0) {
        return void 0;
      }
      const code = evaluate$1(node.arguments[0], scope);
      if (typeof code !== "string") {
        return code;
      }
      const codeToEval = scope.strict ? `'use strict'; ${code}` : code;
      try {
        const ast = parse(codeToEval, {
          ecmaVersion: "latest",
          sourceType: "script"
        });
        return evaluate$1(ast, scope);
      } catch (e) {
        throw e;
      }
    }
    func = evaluate$1(node.callee, scope);
    if (node.optional && (func === null || func === void 0)) {
      return void 0;
    }
    let isClassConstructor = false;
    try {
      isClassConstructor = func[CLSCTOR] === true;
    } catch (e) {
    }
    if (typeof func !== "function" || node.callee.type !== "Super" && isClassConstructor) {
      let name;
      if (node.callee.type === "Identifier") {
        name = node.callee.name;
      } else {
        try {
          name = JSON.stringify(func);
        } catch (err) {
          name = "" + func;
        }
      }
      if (typeof func !== "function") {
        throw new TypeError(`${name} is not a function`);
      } else {
        throw new TypeError(`Class constructor ${name} cannot be invoked without 'new'`);
      }
    }
  }
  let args = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = node.arguments[i];
    if (arg.type === "SpreadElement") {
      args = args.concat(SpreadElement$1(arg, scope));
    } else {
      args.push(evaluate$1(arg, scope));
    }
  }
  if (node.callee.type === "Super") {
    const superCall = scope.find(SUPERCALL);
    if (superCall.get()) {
      throw new ReferenceError("Super constructor may only be called once");
    } else {
      scope.find(SUPERCALL).set(true);
    }
  }
  let hasWindow = false;
  try {
    hasWindow = object && object[WINDOW];
  } catch (e) {
  }
  if (hasWindow && func.toString().indexOf("[native code]") !== -1) {
    try {
      return func.apply(object[WINDOW], args);
    } catch (e) {
      return func.apply(object, args);
    }
  }
  return func.apply(object, args);
}
function NewExpression$1(node, scope) {
  const constructor = evaluate$1(node.callee, scope);
  let isNoCtor = false;
  try {
    isNoCtor = constructor[NOCTOR];
  } catch (e) {
  }
  if (typeof constructor !== "function") {
    let name;
    if (node.callee.type === "Identifier") {
      name = node.callee.name;
    } else {
      try {
        name = JSON.stringify(constructor);
      } catch (err) {
        name = "" + constructor;
      }
    }
    throw new TypeError(`${name} is not a constructor`);
  } else if (isNoCtor) {
    throw new TypeError(`${constructor.name || "(intermediate value)"} is not a constructor`);
  }
  let args = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = node.arguments[i];
    if (arg.type === "SpreadElement") {
      args = args.concat(SpreadElement$1(arg, scope));
    } else {
      args.push(evaluate$1(arg, scope));
    }
  }
  return new constructor(...args);
}
function MetaProperty$1(node, scope) {
  return scope.find(NEWTARGET).get();
}
function SequenceExpression$1(node, scope) {
  let result;
  for (let i = 0; i < node.expressions.length; i++) {
    result = evaluate$1(node.expressions[i], scope);
  }
  return result;
}
function ArrowFunctionExpression$1(node, scope) {
  return createFunc(node, scope);
}
function TemplateLiteral$1(node, scope) {
  const quasis = node.quasis.slice();
  const expressions = node.expressions.slice();
  let result = "";
  let temEl;
  let expr;
  while (temEl = quasis.shift()) {
    result += TemplateElement$1(temEl);
    expr = expressions.shift();
    if (expr) {
      result += evaluate$1(expr, scope);
    }
  }
  return result;
}
function TaggedTemplateExpression$1(node, scope) {
  const tagFunc = evaluate$1(node.tag, scope);
  const quasis = node.quasi.quasis;
  const str = quasis.map((v) => v.value.cooked);
  const raw = quasis.map((v) => v.value.raw);
  define(str, "raw", {
    value: freeze(raw)
  });
  const expressions = node.quasi.expressions;
  const args = [];
  if (expressions) {
    for (let i = 0; i < expressions.length; i++) {
      args.push(evaluate$1(expressions[i], scope));
    }
  }
  return tagFunc(freeze(str), ...args);
}
function TemplateElement$1(node, scope) {
  return node.value.raw;
}
function ClassExpression$1(node, scope) {
  if (node.id && node.id.name) {
    const tmpScope = new Scope(scope);
    const klass = createClass(node, tmpScope);
    tmpScope.const(node.id.name, klass);
    return klass;
  } else {
    return createClass(node, scope);
  }
}
function Super$1(node, scope, options = {}) {
  const { getProto: getProto2 = false } = options;
  const superClass = scope.find(SUPER).get();
  return getProto2 ? superClass.prototype : superClass;
}
function SpreadElement$1(node, scope) {
  return evaluate$1(node.argument, scope);
}
function ChainExpression$1(node, scope) {
  return evaluate$1(node.expression, scope);
}
const expression$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression: ArrayExpression$1,
  ArrowFunctionExpression: ArrowFunctionExpression$1,
  AssignmentExpression: AssignmentExpression$1,
  BinaryExpression: BinaryExpression$1,
  CallExpression: CallExpression$1,
  ChainExpression: ChainExpression$1,
  ClassExpression: ClassExpression$1,
  ConditionalExpression: ConditionalExpression$1,
  FunctionExpression: FunctionExpression$1,
  LogicalExpression: LogicalExpression$1,
  MemberExpression: MemberExpression$1,
  MetaProperty: MetaProperty$1,
  NewExpression: NewExpression$1,
  ObjectExpression: ObjectExpression$1,
  SequenceExpression: SequenceExpression$1,
  SpreadElement: SpreadElement$1,
  Super: Super$1,
  TaggedTemplateExpression: TaggedTemplateExpression$1,
  TemplateElement: TemplateElement$1,
  TemplateLiteral: TemplateLiteral$1,
  ThisExpression: ThisExpression$1,
  UnaryExpression: UnaryExpression$1,
  UpdateExpression: UpdateExpression$1
}, Symbol.toStringTag, { value: "Module" }));
function ExpressionStatement$1(node, scope) {
  evaluate$1(node.expression, scope);
}
function BlockStatement$1(block, scope, options = {}) {
  const {
    invasived = false,
    hoisted = false
  } = options;
  const subScope = invasived ? scope : new Scope(scope);
  if (!hoisted) {
    hoist(block, subScope, { onlyBlock: true });
  }
  for (let i = 0; i < block.body.length; i++) {
    const result = evaluate$1(block.body[i], subScope);
    if (result === BREAK || result === CONTINUE || result === RETURN) {
      return result;
    }
  }
}
function EmptyStatement$1() {
}
function DebuggerStatement$1() {
  debugger;
}
function ReturnStatement$1(node, scope) {
  RETURN.RES = node.argument ? evaluate$1(node.argument, scope) : void 0;
  return RETURN;
}
function BreakStatement$1(node) {
  if (node.label) {
    BREAK.LABEL = node.label.name;
  } else {
    delete BREAK.LABEL;
  }
  return BREAK;
}
function ContinueStatement$1(node) {
  if (node.label) {
    CONTINUE.LABEL = node.label.name;
  } else {
    delete CONTINUE.LABEL;
  }
  return CONTINUE;
}
function WithStatement$1(node, scope) {
  const obj = evaluate$1(node.object, scope);
  const withScope = new Scope(scope);
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      withScope.var(key, obj[key]);
    }
  }
  return evaluate$1(node.body, withScope);
}
function LabeledStatement$1(node, scope) {
  const label = node.label.name;
  const labelScope = new Scope(scope, false);
  labelScope.let("__LABEL__", label);
  const result = evaluate$1(node.body, labelScope);
  if (result === BREAK && BREAK.LABEL === label) {
    delete BREAK.LABEL;
    return;
  }
  if (result === CONTINUE && CONTINUE.LABEL === label) {
    delete CONTINUE.LABEL;
  }
  return result;
}
function IfStatement$1(node, scope) {
  if (evaluate$1(node.test, scope)) {
    return evaluate$1(node.consequent, scope);
  } else {
    return evaluate$1(node.alternate, scope);
  }
}
function SwitchStatement$1(node, scope) {
  const discriminant = evaluate$1(node.discriminant, scope);
  let matched = false;
  for (let i = 0; i < node.cases.length; i++) {
    const eachCase = node.cases[i];
    if (!matched && (!eachCase.test || evaluate$1(eachCase.test, scope) === discriminant)) {
      matched = true;
    }
    if (matched) {
      const result = SwitchCase$1(eachCase, scope);
      if (result === BREAK) {
        break;
      }
      if (result === CONTINUE || result === RETURN) {
        return result;
      }
    }
  }
}
function SwitchCase$1(node, scope) {
  for (let i = 0; i < node.consequent.length; i++) {
    const result = evaluate$1(node.consequent[i], scope);
    if (result === BREAK || result === CONTINUE || result === RETURN) {
      return result;
    }
  }
}
function ThrowStatement$1(node, scope) {
  throw evaluate$1(node.argument, scope);
}
function TryStatement$1(node, scope) {
  try {
    return BlockStatement$1(node.block, scope);
  } catch (err) {
    if (node.handler) {
      const subScope = new Scope(scope);
      const param = node.handler.param;
      if (param) {
        if (param.type === "Identifier") {
          const name = param.name;
          subScope.var(name, err);
        } else {
          pattern(param, scope, { feed: err });
        }
      }
      return CatchClause$1(node.handler, subScope);
    } else {
      throw err;
    }
  } finally {
    if (node.finalizer) {
      const result = BlockStatement$1(node.finalizer, scope);
      if (result === BREAK || result === CONTINUE || result === RETURN) {
        return result;
      }
    }
  }
}
function CatchClause$1(node, scope) {
  return BlockStatement$1(node.body, scope, { invasived: true });
}
function WhileStatement$1(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  while (evaluate$1(node.test, scope)) {
    const result = evaluate$1(node.body, scope);
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
function DoWhileStatement$1(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  do {
    const result = evaluate$1(node.body, scope);
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  } while (evaluate$1(node.test, scope));
}
function ForStatement$1(node, scope) {
  const forScope = new Scope(scope);
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  for (evaluate$1(node.init, forScope); node.test ? evaluate$1(node.test, forScope) : true; evaluate$1(node.update, forScope)) {
    const subScope = new Scope(forScope);
    let result;
    if (node.body.type === "BlockStatement") {
      result = BlockStatement$1(node.body, subScope, { invasived: true });
    } else {
      result = evaluate$1(node.body, subScope);
    }
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
function ForInStatement$1(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  for (const value in evaluate$1(node.right, scope)) {
    const result = ForXHandler(node, scope, { value });
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
function ForOfStatement$1(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  const right = evaluate$1(node.right, scope);
  for (const value of right) {
    const result = ForXHandler(node, scope, { value });
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
const statement$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement: BlockStatement$1,
  BreakStatement: BreakStatement$1,
  CatchClause: CatchClause$1,
  ContinueStatement: ContinueStatement$1,
  DebuggerStatement: DebuggerStatement$1,
  DoWhileStatement: DoWhileStatement$1,
  EmptyStatement: EmptyStatement$1,
  ExpressionStatement: ExpressionStatement$1,
  ForInStatement: ForInStatement$1,
  ForOfStatement: ForOfStatement$1,
  ForStatement: ForStatement$1,
  IfStatement: IfStatement$1,
  LabeledStatement: LabeledStatement$1,
  ReturnStatement: ReturnStatement$1,
  SwitchCase: SwitchCase$1,
  SwitchStatement: SwitchStatement$1,
  ThrowStatement: ThrowStatement$1,
  TryStatement: TryStatement$1,
  WhileStatement: WhileStatement$1,
  WithStatement: WithStatement$1
}, Symbol.toStringTag, { value: "Module" }));
function ObjectPattern$1(node, scope, options = {}) {
  const { kind = "var", hoist: hoist2 = false, onlyBlock = false, feed = {} } = options;
  const fedKeys = [];
  for (let i = 0; i < node.properties.length; i++) {
    const property = node.properties[i];
    if (hoist2) {
      if (onlyBlock || kind === "var") {
        if (property.type === "Property") {
          const value = property.value;
          if (value.type === "Identifier") {
            scope[kind](value.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
          } else {
            pattern(value, scope, { kind, hoist: hoist2, onlyBlock });
          }
        } else {
          RestElement$1(property, scope, { kind, hoist: hoist2, onlyBlock });
        }
      }
    } else if (property.type === "Property") {
      let key;
      if (property.computed) {
        key = evaluate$1(property.key, scope);
      } else {
        key = property.key.name;
      }
      fedKeys.push(key);
      const value = property.value;
      if (value.type === "Identifier") {
        scope[kind](value.name, feed[key]);
      } else {
        pattern(value, scope, { kind, feed: feed[key] });
      }
    } else {
      const rest = assign({}, feed);
      for (let i2 = 0; i2 < fedKeys.length; i2++) delete rest[fedKeys[i2]];
      RestElement$1(property, scope, { kind, feed: rest });
    }
  }
}
function ArrayPattern$1(node, scope, options = {}) {
  const { kind, hoist: hoist2 = false, onlyBlock = false, feed = [] } = options;
  const result = [];
  for (let i = 0; i < node.elements.length; i++) {
    const element = node.elements[i];
    if (!element) continue;
    if (hoist2) {
      if (onlyBlock || kind === "var") {
        if (element.type === "Identifier") {
          scope[kind](element.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
        } else {
          pattern(element, scope, { kind, hoist: hoist2, onlyBlock });
        }
      }
    } else if (element.type === "Identifier") {
      if (kind) {
        scope[kind](element.name, feed[i]);
      } else {
        const variable = Identifier$1(element, scope, { getVar: true });
        variable.set(feed[i]);
        result.push(variable.get());
      }
    } else if (element.type === "RestElement") {
      RestElement$1(element, scope, { kind, feed: feed.slice(i) });
    } else {
      pattern(element, scope, { kind, feed: feed[i] });
    }
  }
  if (result.length) {
    return result;
  }
}
function RestElement$1(node, scope, options = {}) {
  const { kind, hoist: hoist2 = false, onlyBlock = false, feed = [] } = options;
  const arg = node.argument;
  if (hoist2) {
    if (onlyBlock || kind === "var") {
      if (arg.type === "Identifier") {
        scope[kind](arg.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
      } else {
        pattern(arg, scope, { kind, hoist: hoist2, onlyBlock });
      }
    }
  } else if (arg.type === "Identifier") {
    if (kind) {
      scope[kind](arg.name, feed);
    } else {
      const variable = Identifier$1(arg, scope, { getVar: true });
      variable.set(feed);
    }
  } else {
    pattern(arg, scope, { kind, feed });
  }
}
function AssignmentPattern$1(node, scope, options = {}) {
  const { kind = "var", hoist: hoist2 = false, onlyBlock = false, feed = evaluate$1(node.right, scope) } = options;
  const left = node.left;
  if (hoist2) {
    if (onlyBlock || kind === "var") {
      if (left.type === "Identifier") {
        scope[kind](left.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
      } else {
        pattern(left, scope, { kind, hoist: hoist2, onlyBlock });
      }
    }
  } else if (left.type === "Identifier") {
    scope[kind](left.name, feed);
  } else {
    pattern(left, scope, { kind, feed });
  }
}
const pattern$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern: ArrayPattern$1,
  AssignmentPattern: AssignmentPattern$1,
  ObjectPattern: ObjectPattern$1,
  RestElement: RestElement$1
}, Symbol.toStringTag, { value: "Module" }));
function ImportDeclaration$1(node, scope) {
  var _a;
  const source = node.source.value;
  const moduleLoader = (_a = scope.find("__moduleLoader__")) == null ? void 0 : _a.get();
  if (!moduleLoader) {
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  }
  const module = moduleLoader(source);
  if (!module) {
    throw new Error(`Failed to load module: ${source}`);
  }
  for (const specifier of node.specifiers) {
    if (specifier.type === "ImportDefaultSpecifier") {
      const localName = specifier.local.name;
      scope.const(localName, module.default);
    } else if (specifier.type === "ImportSpecifier") {
      const importedName = specifier.imported.type === "Identifier" ? specifier.imported.name : specifier.imported.value;
      const localName = specifier.local.name;
      scope.const(localName, module[importedName]);
    } else if (specifier.type === "ImportNamespaceSpecifier") {
      const localName = specifier.local.name;
      scope.const(localName, module);
    }
  }
}
function ExportNamedDeclaration$1(node, scope) {
  var _a, _b, _c, _d, _e;
  const exports$1 = (_a = scope.find("__moduleExports__")) == null ? void 0 : _a.get();
  if (!exports$1) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  }
  if (node.declaration) {
    evaluate$1(node.declaration, scope);
    if (node.declaration.type === "VariableDeclaration") {
      for (const declarator of node.declaration.declarations) {
        if (declarator.id.type === "Identifier") {
          const name = declarator.id.name;
          const value = (_b = scope.find(name)) == null ? void 0 : _b.get();
          exports$1[name] = value;
        }
      }
    } else if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
      const name = node.declaration.id.name;
      const value = (_c = scope.find(name)) == null ? void 0 : _c.get();
      exports$1[name] = value;
    }
  } else if (node.specifiers) {
    for (const specifier of node.specifiers) {
      if (specifier.type === "ExportSpecifier") {
        const localName = specifier.local.type === "Identifier" ? specifier.local.name : specifier.local.value;
        const exportedName = specifier.exported.type === "Identifier" ? specifier.exported.name : specifier.exported.value;
        const value = (_d = scope.find(localName)) == null ? void 0 : _d.get();
        exports$1[exportedName] = value;
      }
    }
  }
  if (node.source) {
    const source = node.source.value;
    const moduleLoader = (_e = scope.find("__moduleLoader__")) == null ? void 0 : _e.get();
    if (!moduleLoader) {
      throw new Error("Module loader not available");
    }
    const module = moduleLoader(source);
    for (const specifier of node.specifiers) {
      if (specifier.type === "ExportSpecifier") {
        const localName = specifier.local.type === "Identifier" ? specifier.local.name : specifier.local.value;
        const exportedName = specifier.exported.type === "Identifier" ? specifier.exported.name : specifier.exported.value;
        exports$1[exportedName] = module[localName];
      }
    }
  }
}
function ExportDefaultDeclaration$1(node, scope) {
  var _a, _b, _c;
  const exports$1 = (_a = scope.find("__moduleExports__")) == null ? void 0 : _a.get();
  if (!exports$1) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  }
  let value;
  if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
    evaluate$1(node.declaration, scope);
    const name = (_b = node.declaration.id) == null ? void 0 : _b.name;
    if (name) {
      value = (_c = scope.find(name)) == null ? void 0 : _c.get();
    }
  } else {
    value = evaluate$1(node.declaration, scope);
  }
  exports$1.default = value;
}
function ExportAllDeclaration$1(node, scope) {
  var _a, _b;
  const exports$1 = (_a = scope.find("__moduleExports__")) == null ? void 0 : _a.get();
  if (!exports$1) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  }
  const source = node.source.value;
  const moduleLoader = (_b = scope.find("__moduleLoader__")) == null ? void 0 : _b.get();
  if (!moduleLoader) {
    throw new Error("Module loader not available");
  }
  const module = moduleLoader(source);
  if (node.exported) {
    const exportedName = node.exported.type === "Identifier" ? node.exported.name : node.exported.value;
    exports$1[exportedName] = module;
  } else {
    for (const key in module) {
      if (key !== "default") {
        exports$1[key] = module[key];
      }
    }
  }
}
function ImportExpression$1(node, scope) {
  var _a;
  const source = evaluate$1(node.source, scope);
  const moduleLoader = (_a = scope.find("__moduleLoader__")) == null ? void 0 : _a.get();
  if (!moduleLoader) {
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  }
  return moduleLoader(source);
}
const module$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExportAllDeclaration: ExportAllDeclaration$1,
  ExportDefaultDeclaration: ExportDefaultDeclaration$1,
  ExportNamedDeclaration: ExportNamedDeclaration$1,
  ImportDeclaration: ImportDeclaration$1,
  ImportExpression: ImportExpression$1
}, Symbol.toStringTag, { value: "Module" }));
function Program$1(program2, scope) {
  for (let i = 0; i < program2.body.length; i++) {
    evaluate$1(program2.body[i], scope);
  }
}
const program$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program: Program$1
}, Symbol.toStringTag, { value: "Module" }));
let evaluateOps$1;
function evaluate$1(node, scope) {
  if (!node) return;
  if (!evaluateOps$1) {
    evaluateOps$1 = assign(
      {},
      declaration$1,
      expression$1,
      identifier$1,
      statement$1,
      literal$1,
      pattern$3,
      module$2,
      program$1
    );
  }
  const handler = evaluateOps$1[node.type];
  if (handler) {
    return handler(node, scope);
  } else {
    throw new Error(`${node.type} isn't implemented`);
  }
}
function FunctionDeclaration$1(node, scope) {
  scope.func(node.id.name, createFunc(node, scope));
}
function VariableDeclaration$1(node, scope, options = {}) {
  for (let i = 0; i < node.declarations.length; i++) {
    const kind = node.kind === "using" || node.kind === "await using" ? "const" : node.kind;
    VariableDeclarator$1(node.declarations[i], scope, assign({ kind }, options));
  }
}
function VariableDeclarator$1(node, scope, options = {}) {
  const { kind = "var", hoist: hoist2 = false, onlyBlock = false, feed } = options;
  if (hoist2) {
    if (onlyBlock || kind === "var") {
      if (node.id.type === "Identifier") {
        scope[kind](node.id.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
      } else {
        pattern(node.id, scope, { kind, hoist: hoist2, onlyBlock });
      }
    }
  } else {
    const hasFeed = "feed" in options;
    const value = hasFeed ? feed : evaluate$1(node.init, scope);
    if (node.id.type === "Identifier") {
      const name = node.id.name;
      if (kind === "var" && !node.init && !hasFeed) {
        scope.var(name, NOINIT);
      } else {
        scope[kind](name, value);
      }
      if (node.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(node.init.type) !== -1 && !value.name) {
        define(value, "name", {
          value: name,
          configurable: true
        });
      }
    } else {
      pattern(node.id, scope, { kind, feed: value });
    }
  }
}
function ClassDeclaration$1(node, scope) {
  scope.func(node.id.name, createClass(node, scope));
}
function ClassBody$1(node, scope, options = {}) {
  const { klass, superClass } = options;
  for (let i = 0; i < node.body.length; i++) {
    const member = node.body[i];
    if (member.type === "MethodDefinition") {
      MethodDefinition$1(member, scope, { klass, superClass });
    } else if (member.type === "PropertyDefinition") {
      continue;
    } else if (member.type === "StaticBlock") {
      continue;
    }
  }
}
function MethodDefinition$1(node, scope, options = {}) {
  const { klass, superClass } = options;
  const isPrivate = node.key.type === "PrivateIdentifier";
  let key;
  if (isPrivate) {
    key = Symbol.for(`private:${node.key.name}`);
  } else if (node.computed) {
    key = evaluate$1(node.key, scope);
  } else if (node.key.type === "Identifier") {
    key = node.key.name;
  } else {
    throw new SyntaxError("Unexpected token");
  }
  const value = createFunc(node.value, scope, { superClass });
  switch (node.kind) {
    case "constructor":
      break;
    case "method":
      if (isPrivate) {
        if (node.static) {
          const privateStaticFields = klass.__privateStaticFields;
          if (privateStaticFields) {
            privateStaticFields.set(key, value);
          }
        } else {
          if (!klass.__privateInstanceMethods) {
            define(klass, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() });
          }
          klass.__privateInstanceMethods.set(key, value);
        }
      } else {
        const obj = node.static ? klass : klass.prototype;
        define(obj, key, {
          value,
          writable: true,
          configurable: true
        });
      }
      break;
    case "get": {
      if (isPrivate) {
        throw new Error("Private getters not yet supported");
      }
      const obj = node.static ? klass : klass.prototype;
      const oriDptor = getDptor(obj, key);
      define(obj, key, {
        get: value,
        set: oriDptor && oriDptor.set,
        configurable: true
      });
      break;
    }
    case "set": {
      if (isPrivate) {
        throw new Error("Private setters not yet supported");
      }
      const obj = node.static ? klass : klass.prototype;
      const oriDptor = getDptor(obj, key);
      define(obj, key, {
        get: oriDptor && oriDptor.get,
        set: value,
        configurable: true
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function* Identifier(node, scope, options = {}) {
  const { getVar = false, throwErr = true } = options;
  if (node.name === "undefined") {
    return void 0;
  }
  const variable = scope.find(node.name);
  if (variable) {
    if (getVar) {
      return variable;
    } else {
      const value = variable.get();
      if (value === DEADZONE) {
        throw new ReferenceError(`${node.name} is not defined`);
      } else {
        return value;
      }
    }
  } else if (throwErr) {
    throw new ReferenceError(`${node.name} is not defined`);
  } else {
    return void 0;
  }
}
function* PrivateIdentifier(node, scope) {
  return Symbol.for(`private:${node.name}`);
}
const identifier = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Identifier,
  PrivateIdentifier
}, Symbol.toStringTag, { value: "Module" }));
function* Literal(node, scope) {
  return node.value;
}
const literal = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Literal
}, Symbol.toStringTag, { value: "Module" }));
function* ThisExpression(node, scope) {
  const superCall = scope.find(SUPERCALL);
  if (superCall && !superCall.get()) {
    throw new ReferenceError("Must call super constructor in derived class before accessing 'this' or returning from derived constructor");
  } else {
    return scope.find("this").get();
  }
}
function* ArrayExpression(node, scope) {
  let results = [];
  for (let i = 0; i < node.elements.length; i++) {
    const item = node.elements[i];
    if (item.type === "SpreadElement") {
      results = results.concat(yield* SpreadElement(item, scope));
    } else {
      results.push(yield* evaluate(item, scope));
    }
  }
  return results;
}
function* ObjectExpression(node, scope) {
  const object = {};
  for (let i = 0; i < node.properties.length; i++) {
    const property = node.properties[i];
    if (property.type === "SpreadElement") {
      assign(object, yield* SpreadElement(property, scope));
    } else if (property.type === "Property") {
      let key;
      const propKey = property.key;
      if (property.computed) {
        key = yield* evaluate(propKey, scope);
      } else {
        if (propKey.type === "Identifier") {
          key = propKey.name;
        } else {
          key = "" + (yield* Literal(propKey));
        }
      }
      const value = yield* evaluate(property.value, scope);
      const propKind = property.kind;
      if (propKind === "init") {
        object[key] = value;
      } else if (propKind === "get") {
        const oriDptor = getDptor(object, key);
        define(object, key, {
          get: value,
          set: oriDptor && oriDptor.set,
          enumerable: true,
          configurable: true
        });
      } else {
        const oriDptor = getDptor(object, key);
        define(object, key, {
          get: oriDptor && oriDptor.get,
          set: value,
          enumerable: true,
          configurable: true
        });
      }
    }
  }
  return object;
}
function* FunctionExpression(node, scope) {
  if (node.id && node.id.name) {
    const tmpScope = new Scope(scope);
    const func = createFunc$1(node, tmpScope);
    tmpScope.const(node.id.name, func);
    return func;
  } else {
    return createFunc$1(node, scope);
  }
}
function* UnaryExpression(node, scope) {
  const arg = node.argument;
  switch (node.operator) {
    case "+":
      return +(yield* evaluate(arg, scope));
    case "-":
      return -(yield* evaluate(arg, scope));
    case "!":
      return !(yield* evaluate(arg, scope));
    case "~":
      return ~(yield* evaluate(arg, scope));
    case "void":
      return void (yield* evaluate(arg, scope));
    case "typeof":
      if (arg.type === "Identifier") {
        return typeof (yield* Identifier(arg, scope, { throwErr: false }));
      } else {
        return typeof (yield* evaluate(arg, scope));
      }
    case "delete":
      if (arg.type === "MemberExpression") {
        const variable = yield* MemberExpression(arg, scope, { getVar: true });
        return variable.del();
      } else if (arg.type === "Identifier") {
        throw new SyntaxError("Delete of an unqualified identifier in strict mode");
      } else {
        yield* evaluate(arg, scope);
        return true;
      }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function* UpdateExpression(node, scope) {
  const arg = node.argument;
  let variable;
  if (arg.type === "Identifier") {
    variable = yield* Identifier(arg, scope, { getVar: true });
  } else if (arg.type === "MemberExpression") {
    variable = yield* MemberExpression(arg, scope, { getVar: true });
  } else {
    throw new SyntaxError("Unexpected token");
  }
  const value = variable.get();
  if (node.operator === "++") {
    variable.set(value + 1);
    return node.prefix ? variable.get() : value;
  } else if (node.operator === "--") {
    variable.set(value - 1);
    return node.prefix ? variable.get() : value;
  } else {
    throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function* BinaryExpression(node, scope) {
  const left = yield* evaluate(node.left, scope);
  const right = yield* evaluate(node.right, scope);
  switch (node.operator) {
    case "==":
      return left == right;
    case "!=":
      return left != right;
    case "===":
      return left === right;
    case "!==":
      return left !== right;
    case "<":
      return left < right;
    case "<=":
      return left <= right;
    case ">":
      return left > right;
    case ">=":
      return left >= right;
    case "<<":
      return left << right;
    case ">>":
      return left >> right;
    case ">>>":
      return left >>> right;
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "**":
      return left ** right;
    case "/":
      return left / right;
    case "%":
      return left % right;
    case "|":
      return left | right;
    case "^":
      return left ^ right;
    case "&":
      return left & right;
    case "in":
      return left in right;
    case "instanceof":
      return left instanceof right;
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function* AssignmentExpression(node, scope) {
  const value = yield* evaluate(node.right, scope);
  const left = node.left;
  let variable;
  if (left.type === "Identifier") {
    variable = yield* Identifier(left, scope, { getVar: true, throwErr: false });
    if (!variable) {
      const win2 = scope.global().find("window").get();
      variable = new Prop(win2, left.name);
    }
  } else if (left.type === "MemberExpression") {
    variable = yield* MemberExpression(left, scope, { getVar: true });
  } else {
    return yield* pattern$1(left, scope, { feed: value });
  }
  switch (node.operator) {
    case "=":
      variable.set(value);
      return variable.get();
    case "+=":
      variable.set(variable.get() + value);
      return variable.get();
    case "-=":
      variable.set(variable.get() - value);
      return variable.get();
    case "*=":
      variable.set(variable.get() * value);
      return variable.get();
    case "/=":
      variable.set(variable.get() / value);
      return variable.get();
    case "%=":
      variable.set(variable.get() % value);
      return variable.get();
    case "**=":
      variable.set(variable.get() ** value);
      return variable.get();
    case "<<=":
      variable.set(variable.get() << value);
      return variable.get();
    case ">>=":
      variable.set(variable.get() >> value);
      return variable.get();
    case ">>>=":
      variable.set(variable.get() >>> value);
      return variable.get();
    case "|=":
      variable.set(variable.get() | value);
      return variable.get();
    case "^=":
      variable.set(variable.get() ^ value);
      return variable.get();
    case "&=":
      variable.set(variable.get() & value);
      return variable.get();
    case "||=": {
      const currentValue = variable.get();
      if (!currentValue) {
        variable.set(value);
      }
      return variable.get();
    }
    case "&&=": {
      const currentValue = variable.get();
      if (currentValue) {
        variable.set(value);
      }
      return variable.get();
    }
    case "??=": {
      const currentValue = variable.get();
      if (currentValue === null || currentValue === void 0) {
        variable.set(value);
      }
      return variable.get();
    }
    /* istanbul ignore next */
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function* LogicalExpression(node, scope) {
  switch (node.operator) {
    case "||":
      return (yield* evaluate(node.left, scope)) || (yield* evaluate(node.right, scope));
    case "&&":
      return (yield* evaluate(node.left, scope)) && (yield* evaluate(node.right, scope));
    case "??": {
      const leftValue = yield* evaluate(node.left, scope);
      return leftValue !== null && leftValue !== void 0 ? leftValue : yield* evaluate(node.right, scope);
    }
    default:
      throw new SyntaxError(`Unexpected token ${node.operator}`);
  }
}
function* MemberExpression(node, scope, options = {}) {
  const { getObj = false, getVar = false } = options;
  let object;
  if (node.object.type === "Super") {
    object = yield* Super(node.object, scope, { getProto: true });
  } else {
    object = yield* evaluate(node.object, scope);
  }
  if (node.optional && (object === null || object === void 0)) {
    return void 0;
  }
  if (getObj) return object;
  const isPrivate = node.property.type === "PrivateIdentifier";
  let key;
  if (isPrivate) {
    key = Symbol.for(`private:${node.property.name}`);
    const isStaticAccess = typeof object === "function";
    if (isStaticAccess) {
      const privateStaticFields = object.__privateStaticFields;
      if (!privateStaticFields || !privateStaticFields.has(key)) {
        throw new TypeError(`Cannot read private member #${node.property.name} from an object whose class did not declare it`);
      }
      if (getVar) {
        return new MapEntry(privateStaticFields, key);
      } else {
        return privateStaticFields.get(key);
      }
    } else {
      const constructor = object.constructor;
      const privateFields = constructor && constructor.__privateInstanceFields;
      if (!privateFields) {
        throw new TypeError(`Cannot read private member from an object whose class did not declare it`);
      }
      const privateData = privateFields.get(object);
      if (!privateData || !(key in privateData)) {
        throw new TypeError(`Cannot read private member #${node.property.name} from an object whose class did not declare it`);
      }
      if (getVar) {
        return new Prop(privateData, key);
      } else {
        return privateData[key];
      }
    }
  } else if (node.computed) {
    key = yield* evaluate(node.property, scope);
  } else {
    key = node.property.name;
  }
  if (getVar) {
    const setter = getSetter(object, key);
    if (node.object.type === "Super" && setter) {
      const thisObject = scope.find("this").get();
      const privateKey = createSymbol(key);
      define(thisObject, privateKey, { set: setter });
      return new Prop(thisObject, privateKey);
    } else {
      return new Prop(object, key);
    }
  } else {
    const getter = getGetter(object, key);
    if (node.object.type === "Super" && getter) {
      const thisObject = scope.find("this").get();
      return getter.call(thisObject);
    } else {
      return object[key];
    }
  }
}
function* ConditionalExpression(node, scope) {
  return (yield* evaluate(node.test, scope)) ? yield* evaluate(node.consequent, scope) : yield* evaluate(node.alternate, scope);
}
function* CallExpression(node, scope) {
  let func;
  let object;
  if (node.callee.type === "MemberExpression") {
    object = yield* MemberExpression(node.callee, scope, { getObj: true });
    if (node.optional && (object === null || object === void 0)) {
      return void 0;
    }
    let key;
    const isPrivate = node.callee.property.type === "PrivateIdentifier";
    if (isPrivate) {
      key = Symbol.for(`private:${node.callee.property.name}`);
      const isStaticAccess = typeof object === "function";
      if (isStaticAccess) {
        const privateStaticFields = object.__privateStaticFields;
        func = privateStaticFields ? privateStaticFields.get(key) : void 0;
      } else {
        const constructor = object.constructor;
        const privateFields = constructor && constructor.__privateInstanceFields;
        const privateData = privateFields ? privateFields.get(object) : null;
        func = privateData ? privateData[key] : void 0;
      }
    } else if (node.callee.computed) {
      key = yield* evaluate(node.callee.property, scope);
      if (node.callee.object.type === "Super") {
        const thisObject = scope.find("this").get();
        func = object[key].bind(thisObject);
      } else {
        func = object[key];
      }
    } else {
      key = node.callee.property.name;
      if (node.callee.object.type === "Super") {
        const thisObject = scope.find("this").get();
        func = object[key].bind(thisObject);
      } else {
        func = object[key];
      }
    }
    if (node.optional && (func === null || func === void 0)) {
      return void 0;
    }
    if (typeof func !== "function") {
      throw new TypeError(`${key} is not a function`);
    }
    try {
      if (func[CLSCTOR] === true) {
        throw new TypeError(`Class constructor ${key} cannot be invoked without 'new'`);
      }
    } catch (e) {
      if (e instanceof TypeError && e.message.includes("Class constructor")) {
        throw e;
      }
    }
  } else {
    object = scope.find("this").get();
    if (node.callee.type === "Identifier" && node.callee.name === "eval") {
      if (node.arguments.length === 0) {
        return void 0;
      }
      const code = yield* evaluate(node.arguments[0], scope);
      if (typeof code !== "string") {
        return code;
      }
      const codeToEval = scope.strict ? `'use strict'; ${code}` : code;
      try {
        const ast = parse(codeToEval, {
          ecmaVersion: "latest",
          sourceType: "script"
        });
        return yield* evaluate(ast, scope);
      } catch (e) {
        throw e;
      }
    }
    func = yield* evaluate(node.callee, scope);
    if (node.optional && (func === null || func === void 0)) {
      return void 0;
    }
    let isClassConstructor = false;
    try {
      isClassConstructor = func[CLSCTOR] === true;
    } catch (e) {
    }
    if (typeof func !== "function" || node.callee.type !== "Super" && isClassConstructor) {
      let name;
      if (node.callee.type === "Identifier") {
        name = node.callee.name;
      } else {
        try {
          name = JSON.stringify(func);
        } catch (err) {
          name = "" + func;
        }
      }
      if (typeof func !== "function") {
        throw new TypeError(`${name} is not a function`);
      } else {
        throw new TypeError(`Class constructor ${name} cannot be invoked without 'new'`);
      }
    }
  }
  let args = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = node.arguments[i];
    if (arg.type === "SpreadElement") {
      args = args.concat(yield* SpreadElement(arg, scope));
    } else {
      args.push(yield* evaluate(arg, scope));
    }
  }
  if (node.callee.type === "Super") {
    const superCall = scope.find(SUPERCALL);
    if (superCall.get()) {
      throw new ReferenceError("Super constructor may only be called once");
    } else {
      scope.find(SUPERCALL).set(true);
    }
  }
  let hasWindow = false;
  try {
    hasWindow = object && object[WINDOW];
  } catch (e) {
  }
  if (hasWindow && func.toString().indexOf("[native code]") !== -1) {
    try {
      return func.apply(object[WINDOW], args);
    } catch (e) {
      return func.apply(object, args);
    }
  }
  return func.apply(object, args);
}
function* NewExpression(node, scope) {
  const constructor = yield* evaluate(node.callee, scope);
  let isNoCtor = false;
  try {
    isNoCtor = constructor[NOCTOR];
  } catch (e) {
  }
  if (typeof constructor !== "function") {
    let name;
    if (node.callee.type === "Identifier") {
      name = node.callee.name;
    } else {
      try {
        name = JSON.stringify(constructor);
      } catch (err) {
        name = "" + constructor;
      }
    }
    throw new TypeError(`${name} is not a constructor`);
  } else if (isNoCtor) {
    throw new TypeError(`${constructor.name || "(intermediate value)"} is not a constructor`);
  }
  let args = [];
  for (let i = 0; i < node.arguments.length; i++) {
    const arg = node.arguments[i];
    if (arg.type === "SpreadElement") {
      args = args.concat(yield* SpreadElement(arg, scope));
    } else {
      args.push(yield* evaluate(arg, scope));
    }
  }
  return new constructor(...args);
}
function* MetaProperty(node, scope) {
  return scope.find(NEWTARGET).get();
}
function* SequenceExpression(node, scope) {
  let result;
  for (let i = 0; i < node.expressions.length; i++) {
    result = yield* evaluate(node.expressions[i], scope);
  }
  return result;
}
function* ArrowFunctionExpression(node, scope) {
  return createFunc$1(node, scope);
}
function* TemplateLiteral(node, scope) {
  const quasis = node.quasis.slice();
  const expressions = node.expressions.slice();
  let result = "";
  let temEl;
  let expr;
  while (temEl = quasis.shift()) {
    result += yield* TemplateElement(temEl);
    expr = expressions.shift();
    if (expr) {
      result += yield* evaluate(expr, scope);
    }
  }
  return result;
}
function* TaggedTemplateExpression(node, scope) {
  const tagFunc = yield* evaluate(node.tag, scope);
  const quasis = node.quasi.quasis;
  const str = quasis.map((v) => v.value.cooked);
  const raw = quasis.map((v) => v.value.raw);
  define(str, "raw", {
    value: freeze(raw)
  });
  const expressions = node.quasi.expressions;
  const args = [];
  if (expressions) {
    for (let i = 0; i < expressions.length; i++) {
      args.push(yield* evaluate(expressions[i], scope));
    }
  }
  return tagFunc(freeze(str), ...args);
}
function* TemplateElement(node, scope) {
  return node.value.raw;
}
function* ClassExpression(node, scope) {
  if (node.id && node.id.name) {
    const tmpScope = new Scope(scope);
    const klass = yield* createClass$1(node, tmpScope);
    tmpScope.const(node.id.name, klass);
    return klass;
  } else {
    return yield* createClass$1(node, scope);
  }
}
function* Super(node, scope, options = {}) {
  const { getProto: getProto2 = false } = options;
  const superClass = scope.find(SUPER).get();
  return getProto2 ? superClass.prototype : superClass;
}
function* SpreadElement(node, scope) {
  return yield* evaluate(node.argument, scope);
}
function* ChainExpression(node, scope) {
  return yield* evaluate(node.expression, scope);
}
function* YieldExpression(node, scope) {
  const res = yield* evaluate(node.argument, scope);
  return node.delegate ? yield* res : yield res;
}
function* AwaitExpression(node, scope) {
  AWAIT.RES = yield* evaluate(node.argument, scope);
  return yield AWAIT;
}
const expression = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayExpression,
  ArrowFunctionExpression,
  AssignmentExpression,
  AwaitExpression,
  BinaryExpression,
  CallExpression,
  ChainExpression,
  ClassExpression,
  ConditionalExpression,
  FunctionExpression,
  LogicalExpression,
  MemberExpression,
  MetaProperty,
  NewExpression,
  ObjectExpression,
  SequenceExpression,
  SpreadElement,
  Super,
  TaggedTemplateExpression,
  TemplateElement,
  TemplateLiteral,
  ThisExpression,
  UnaryExpression,
  UpdateExpression,
  YieldExpression
}, Symbol.toStringTag, { value: "Module" }));
function* ExpressionStatement(node, scope) {
  yield* evaluate(node.expression, scope);
}
function* BlockStatement(block, scope, options = {}) {
  const {
    invasived = false,
    hoisted = false
  } = options;
  const subScope = invasived ? scope : new Scope(scope);
  if (!hoisted) {
    yield* hoist$1(block, subScope, { onlyBlock: true });
  }
  for (let i = 0; i < block.body.length; i++) {
    const result = yield* evaluate(block.body[i], subScope);
    if (result === BREAK || result === CONTINUE || result === RETURN) {
      return result;
    }
  }
}
function* EmptyStatement() {
}
function* DebuggerStatement() {
  debugger;
}
function* ReturnStatement(node, scope) {
  RETURN.RES = node.argument ? yield* evaluate(node.argument, scope) : void 0;
  return RETURN;
}
function* BreakStatement(node) {
  if (node.label) {
    BREAK.LABEL = node.label.name;
  } else {
    delete BREAK.LABEL;
  }
  return BREAK;
}
function* ContinueStatement(node) {
  if (node.label) {
    CONTINUE.LABEL = node.label.name;
  } else {
    delete CONTINUE.LABEL;
  }
  return CONTINUE;
}
function* WithStatement(node, scope) {
  const obj = yield* evaluate(node.object, scope);
  const withScope = new Scope(scope);
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      withScope.var(key, obj[key]);
    }
  }
  return yield* evaluate(node.body, withScope);
}
function* LabeledStatement(node, scope) {
  const label = node.label.name;
  const labelScope = new Scope(scope, false);
  labelScope.let("__LABEL__", label);
  const result = yield* evaluate(node.body, labelScope);
  if (result === BREAK && BREAK.LABEL === label) {
    delete BREAK.LABEL;
    return;
  }
  if (result === CONTINUE && CONTINUE.LABEL === label) {
    delete CONTINUE.LABEL;
  }
  return result;
}
function* IfStatement(node, scope) {
  if (yield* evaluate(node.test, scope)) {
    return yield* evaluate(node.consequent, scope);
  } else {
    return yield* evaluate(node.alternate, scope);
  }
}
function* SwitchStatement(node, scope) {
  const discriminant = yield* evaluate(node.discriminant, scope);
  let matched = false;
  for (let i = 0; i < node.cases.length; i++) {
    const eachCase = node.cases[i];
    if (!matched && (!eachCase.test || (yield* evaluate(eachCase.test, scope)) === discriminant)) {
      matched = true;
    }
    if (matched) {
      const result = yield* SwitchCase(eachCase, scope);
      if (result === BREAK) {
        break;
      }
      if (result === CONTINUE || result === RETURN) {
        return result;
      }
    }
  }
}
function* SwitchCase(node, scope) {
  for (let i = 0; i < node.consequent.length; i++) {
    const result = yield* evaluate(node.consequent[i], scope);
    if (result === BREAK || result === CONTINUE || result === RETURN) {
      return result;
    }
  }
}
function* ThrowStatement(node, scope) {
  throw yield* evaluate(node.argument, scope);
}
function* TryStatement(node, scope) {
  try {
    return yield* BlockStatement(node.block, scope);
  } catch (err) {
    if (node.handler) {
      const subScope = new Scope(scope);
      const param = node.handler.param;
      if (param) {
        if (param.type === "Identifier") {
          const name = param.name;
          subScope.var(name, err);
        } else {
          yield* pattern$1(param, scope, { feed: err });
        }
      }
      return yield* CatchClause(node.handler, subScope);
    } else {
      throw err;
    }
  } finally {
    if (node.finalizer) {
      const result = yield* BlockStatement(node.finalizer, scope);
      if (result === BREAK || result === CONTINUE || result === RETURN) {
        return result;
      }
    }
  }
}
function* CatchClause(node, scope) {
  return yield* BlockStatement(node.body, scope, { invasived: true });
}
function* WhileStatement(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  while (yield* evaluate(node.test, scope)) {
    const result = yield* evaluate(node.body, scope);
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
function* DoWhileStatement(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  do {
    const result = yield* evaluate(node.body, scope);
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  } while (yield* evaluate(node.test, scope));
}
function* ForStatement(node, scope) {
  const forScope = new Scope(scope);
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  for (yield* evaluate(node.init, forScope); node.test ? yield* evaluate(node.test, forScope) : true; yield* evaluate(node.update, forScope)) {
    const subScope = new Scope(forScope);
    let result;
    if (node.body.type === "BlockStatement") {
      result = yield* BlockStatement(node.body, subScope, { invasived: true });
    } else {
      result = yield* evaluate(node.body, subScope);
    }
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
function* ForInStatement(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  for (const value in yield* evaluate(node.right, scope)) {
    const result = yield* ForXHandler$1(node, scope, { value });
    if (result === BREAK) {
      if (BREAK.LABEL) {
        if (BREAK.LABEL === myLabel) {
          delete BREAK.LABEL;
          break;
        }
        return result;
      }
      break;
    } else if (result === CONTINUE) {
      if (CONTINUE.LABEL) {
        if (CONTINUE.LABEL === myLabel) {
          delete CONTINUE.LABEL;
          continue;
        }
        return result;
      }
      continue;
    } else if (result === RETURN) {
      return result;
    }
  }
}
function* ForOfStatement(node, scope) {
  const myLabel = scope.hasOwn("__LABEL__") ? scope.find("__LABEL__").get() : void 0;
  const right = yield* evaluate(node.right, scope);
  if (node.await) {
    const iterator = getAsyncIterator(right);
    let ret;
    for (AWAIT.RES = iterator.next(), ret = yield AWAIT; !ret.done; AWAIT.RES = iterator.next(), ret = yield AWAIT) {
      const result = yield* ForXHandler$1(node, scope, { value: ret.value });
      if (result === BREAK) {
        if (BREAK.LABEL) {
          if (BREAK.LABEL === myLabel) {
            delete BREAK.LABEL;
            break;
          }
          return result;
        }
        break;
      } else if (result === CONTINUE) {
        if (CONTINUE.LABEL) {
          if (CONTINUE.LABEL === myLabel) {
            delete CONTINUE.LABEL;
            continue;
          }
          return result;
        }
        continue;
      } else if (result === RETURN) {
        return result;
      }
    }
  } else {
    for (const value of right) {
      const result = yield* ForXHandler$1(node, scope, { value });
      if (result === BREAK) {
        if (BREAK.LABEL) {
          if (BREAK.LABEL === myLabel) {
            delete BREAK.LABEL;
            break;
          }
          return result;
        }
        break;
      } else if (result === CONTINUE) {
        if (CONTINUE.LABEL) {
          if (CONTINUE.LABEL === myLabel) {
            delete CONTINUE.LABEL;
            continue;
          }
          return result;
        }
        continue;
      } else if (result === RETURN) {
        return result;
      }
    }
  }
}
const statement = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlockStatement,
  BreakStatement,
  CatchClause,
  ContinueStatement,
  DebuggerStatement,
  DoWhileStatement,
  EmptyStatement,
  ExpressionStatement,
  ForInStatement,
  ForOfStatement,
  ForStatement,
  IfStatement,
  LabeledStatement,
  ReturnStatement,
  SwitchCase,
  SwitchStatement,
  ThrowStatement,
  TryStatement,
  WhileStatement,
  WithStatement
}, Symbol.toStringTag, { value: "Module" }));
function* ObjectPattern(node, scope, options = {}) {
  const { kind = "var", hoist: hoist2 = false, onlyBlock = false, feed = {} } = options;
  const fedKeys = [];
  for (let i = 0; i < node.properties.length; i++) {
    const property = node.properties[i];
    if (hoist2) {
      if (onlyBlock || kind === "var") {
        if (property.type === "Property") {
          const value = property.value;
          if (value.type === "Identifier") {
            scope[kind](value.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
          } else {
            yield* pattern$1(value, scope, { kind, hoist: hoist2, onlyBlock });
          }
        } else {
          yield* RestElement(property, scope, { kind, hoist: hoist2, onlyBlock });
        }
      }
    } else if (property.type === "Property") {
      let key;
      if (property.computed) {
        key = yield* evaluate(property.key, scope);
      } else {
        key = property.key.name;
      }
      fedKeys.push(key);
      const value = property.value;
      if (value.type === "Identifier") {
        scope[kind](value.name, feed[key]);
      } else {
        yield* pattern$1(value, scope, { kind, feed: feed[key] });
      }
    } else {
      const rest = assign({}, feed);
      for (let i2 = 0; i2 < fedKeys.length; i2++) delete rest[fedKeys[i2]];
      yield* RestElement(property, scope, { kind, feed: rest });
    }
  }
}
function* ArrayPattern(node, scope, options = {}) {
  const { kind, hoist: hoist2 = false, onlyBlock = false, feed = [] } = options;
  const result = [];
  for (let i = 0; i < node.elements.length; i++) {
    const element = node.elements[i];
    if (!element) continue;
    if (hoist2) {
      if (onlyBlock || kind === "var") {
        if (element.type === "Identifier") {
          scope[kind](element.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
        } else {
          yield* pattern$1(element, scope, { kind, hoist: hoist2, onlyBlock });
        }
      }
    } else if (element.type === "Identifier") {
      if (kind) {
        scope[kind](element.name, feed[i]);
      } else {
        const variable = yield* Identifier(element, scope, { getVar: true });
        variable.set(feed[i]);
        result.push(variable.get());
      }
    } else if (element.type === "RestElement") {
      yield* RestElement(element, scope, { kind, feed: feed.slice(i) });
    } else {
      yield* pattern$1(element, scope, { kind, feed: feed[i] });
    }
  }
  if (result.length) {
    return result;
  }
}
function* RestElement(node, scope, options = {}) {
  const { kind, hoist: hoist2 = false, onlyBlock = false, feed = [] } = options;
  const arg = node.argument;
  if (hoist2) {
    if (onlyBlock || kind === "var") {
      if (arg.type === "Identifier") {
        scope[kind](arg.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
      } else {
        yield* pattern$1(arg, scope, { kind, hoist: hoist2, onlyBlock });
      }
    }
  } else if (arg.type === "Identifier") {
    if (kind) {
      scope[kind](arg.name, feed);
    } else {
      const variable = yield* Identifier(arg, scope, { getVar: true });
      variable.set(feed);
    }
  } else {
    yield* pattern$1(arg, scope, { kind, feed });
  }
}
function* AssignmentPattern(node, scope, options = {}) {
  const { kind = "var", hoist: hoist2 = false, onlyBlock = false, feed = yield* evaluate(node.right, scope) } = options;
  const left = node.left;
  if (hoist2) {
    if (onlyBlock || kind === "var") {
      if (left.type === "Identifier") {
        scope[kind](left.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
      } else {
        yield* pattern$1(left, scope, { kind, hoist: hoist2, onlyBlock });
      }
    }
  } else if (left.type === "Identifier") {
    scope[kind](left.name, feed);
  } else {
    yield* pattern$1(left, scope, { kind, feed });
  }
}
const pattern$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArrayPattern,
  AssignmentPattern,
  ObjectPattern,
  RestElement
}, Symbol.toStringTag, { value: "Module" }));
function* ImportDeclaration(node, scope) {
  var _a;
  const source = node.source.value;
  const moduleLoader = (_a = scope.find("__moduleLoader__")) == null ? void 0 : _a.get();
  if (!moduleLoader) {
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  }
  const module = yield* moduleLoader(source);
  if (!module) {
    throw new Error(`Failed to load module: ${source}`);
  }
  for (const specifier of node.specifiers) {
    if (specifier.type === "ImportDefaultSpecifier") {
      const localName = specifier.local.name;
      scope.const(localName, module.default);
    } else if (specifier.type === "ImportSpecifier") {
      const importedName = specifier.imported.type === "Identifier" ? specifier.imported.name : specifier.imported.value;
      const localName = specifier.local.name;
      scope.const(localName, module[importedName]);
    } else if (specifier.type === "ImportNamespaceSpecifier") {
      const localName = specifier.local.name;
      scope.const(localName, module);
    }
  }
}
function* ExportNamedDeclaration(node, scope) {
  var _a, _b, _c, _d, _e;
  const exports$1 = (_a = scope.find("__moduleExports__")) == null ? void 0 : _a.get();
  if (!exports$1) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  }
  if (node.declaration) {
    yield* evaluate(node.declaration, scope);
    if (node.declaration.type === "VariableDeclaration") {
      for (const declarator of node.declaration.declarations) {
        if (declarator.id.type === "Identifier") {
          const name = declarator.id.name;
          const value = (_b = scope.find(name)) == null ? void 0 : _b.get();
          exports$1[name] = value;
        }
      }
    } else if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
      const name = node.declaration.id.name;
      const value = (_c = scope.find(name)) == null ? void 0 : _c.get();
      exports$1[name] = value;
    }
  } else if (node.specifiers) {
    for (const specifier of node.specifiers) {
      if (specifier.type === "ExportSpecifier") {
        const localName = specifier.local.type === "Identifier" ? specifier.local.name : specifier.local.value;
        const exportedName = specifier.exported.type === "Identifier" ? specifier.exported.name : specifier.exported.value;
        const value = (_d = scope.find(localName)) == null ? void 0 : _d.get();
        exports$1[exportedName] = value;
      }
    }
  }
  if (node.source) {
    const source = node.source.value;
    const moduleLoader = (_e = scope.find("__moduleLoader__")) == null ? void 0 : _e.get();
    if (!moduleLoader) {
      throw new Error("Module loader not available");
    }
    const module = yield* moduleLoader(source);
    for (const specifier of node.specifiers) {
      if (specifier.type === "ExportSpecifier") {
        const localName = specifier.local.type === "Identifier" ? specifier.local.name : specifier.local.value;
        const exportedName = specifier.exported.type === "Identifier" ? specifier.exported.name : specifier.exported.value;
        exports$1[exportedName] = module[localName];
      }
    }
  }
}
function* ExportDefaultDeclaration(node, scope) {
  var _a, _b, _c;
  const exports$1 = (_a = scope.find("__moduleExports__")) == null ? void 0 : _a.get();
  if (!exports$1) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  }
  let value;
  if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
    yield* evaluate(node.declaration, scope);
    const name = (_b = node.declaration.id) == null ? void 0 : _b.name;
    if (name) {
      value = (_c = scope.find(name)) == null ? void 0 : _c.get();
    }
  } else {
    value = yield* evaluate(node.declaration, scope);
  }
  exports$1.default = value;
}
function* ExportAllDeclaration(node, scope) {
  var _a, _b;
  const exports$1 = (_a = scope.find("__moduleExports__")) == null ? void 0 : _a.get();
  if (!exports$1) {
    throw new Error('Module exports not available. Initialize Sval with sourceType: "module"');
  }
  const source = node.source.value;
  const moduleLoader = (_b = scope.find("__moduleLoader__")) == null ? void 0 : _b.get();
  if (!moduleLoader) {
    throw new Error("Module loader not available");
  }
  const module = yield* moduleLoader(source);
  if (node.exported) {
    const exportedName = node.exported.type === "Identifier" ? node.exported.name : node.exported.value;
    exports$1[exportedName] = module;
  } else {
    for (const key in module) {
      if (key !== "default") {
        exports$1[key] = module[key];
      }
    }
  }
}
function* ImportExpression(node, scope) {
  var _a;
  const source = yield* evaluate(node.source, scope);
  const moduleLoader = (_a = scope.find("__moduleLoader__")) == null ? void 0 : _a.get();
  if (!moduleLoader) {
    throw new Error('Module loader not available. Initialize Sval with sourceType: "module"');
  }
  return yield* moduleLoader(source);
}
const module$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExportAllDeclaration,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  ImportDeclaration,
  ImportExpression
}, Symbol.toStringTag, { value: "Module" }));
function* Program(program2, scope) {
  for (let i = 0; i < program2.body.length; i++) {
    yield* evaluate(program2.body[i], scope);
  }
}
const program = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Program
}, Symbol.toStringTag, { value: "Module" }));
let evaluateOps;
function* evaluate(node, scope) {
  if (!node) return;
  if (!evaluateOps) {
    evaluateOps = assign(
      {},
      declaration,
      expression,
      identifier,
      statement,
      literal,
      pattern$2,
      module$1,
      program
    );
  }
  const handler = evaluateOps[node.type];
  if (handler) {
    return yield* handler(node, scope);
  } else {
    throw new Error(`${node.type} isn't implemented`);
  }
}
function* FunctionDeclaration(node, scope) {
  scope.func(node.id.name, createFunc$1(node, scope));
}
function* VariableDeclaration(node, scope, options = {}) {
  for (let i = 0; i < node.declarations.length; i++) {
    const kind = node.kind === "using" || node.kind === "await using" ? "const" : node.kind;
    yield* VariableDeclarator(node.declarations[i], scope, assign({ kind }, options));
  }
}
function* VariableDeclarator(node, scope, options = {}) {
  const { kind = "var", hoist: hoist2 = false, onlyBlock = false, feed } = options;
  if (hoist2) {
    if (onlyBlock || kind === "var") {
      if (node.id.type === "Identifier") {
        scope[kind](node.id.name, onlyBlock ? DEADZONE : kind === "var" ? NOINIT : void 0);
      } else {
        yield* pattern$1(node.id, scope, { kind, hoist: hoist2, onlyBlock });
      }
    }
  } else {
    const hasFeed = "feed" in options;
    const value = hasFeed ? feed : yield* evaluate(node.init, scope);
    if (node.id.type === "Identifier") {
      const name = node.id.name;
      if (kind === "var" && !node.init && !hasFeed) {
        scope.var(name, NOINIT);
      } else {
        scope[kind](name, value);
      }
      if (node.init && ["ClassExpression", "FunctionExpression", "ArrowFunctionExpression"].indexOf(node.init.type) !== -1 && !value.name) {
        define(value, "name", {
          value: name,
          configurable: true
        });
      }
    } else {
      yield* pattern$1(node.id, scope, { kind, feed: value });
    }
  }
}
function* ClassDeclaration(node, scope) {
  scope.func(node.id.name, yield* createClass$1(node, scope));
}
function* ClassBody(node, scope, options = {}) {
  const { klass, superClass } = options;
  for (let i = 0; i < node.body.length; i++) {
    const member = node.body[i];
    if (member.type === "MethodDefinition") {
      yield* MethodDefinition(member, scope, { klass, superClass });
    } else if (member.type === "PropertyDefinition") {
      continue;
    } else if (member.type === "StaticBlock") {
      continue;
    }
  }
}
function* MethodDefinition(node, scope, options = {}) {
  const { klass, superClass } = options;
  const isPrivate = node.key.type === "PrivateIdentifier";
  let key;
  if (isPrivate) {
    key = Symbol.for(`private:${node.key.name}`);
  } else if (node.computed) {
    key = yield* evaluate(node.key, scope);
  } else if (node.key.type === "Identifier") {
    key = node.key.name;
  } else {
    throw new SyntaxError("Unexpected token");
  }
  const value = yield* createFunc$1(node.value, scope, { superClass });
  switch (node.kind) {
    case "constructor":
      break;
    case "method":
      if (isPrivate) {
        if (node.static) {
          const privateStaticFields = klass.__privateStaticFields;
          if (privateStaticFields) {
            privateStaticFields.set(key, value);
          }
        } else {
          if (!klass.__privateInstanceMethods) {
            define(klass, "__privateInstanceMethods", { value: /* @__PURE__ */ new Map() });
          }
          klass.__privateInstanceMethods.set(key, value);
        }
      } else {
        const obj = node.static ? klass : klass.prototype;
        define(obj, key, {
          value,
          writable: true,
          configurable: true
        });
      }
      break;
    case "get": {
      if (isPrivate) {
        throw new Error("Private getters not yet supported");
      }
      const obj = node.static ? klass : klass.prototype;
      const oriDptor = getDptor(obj, key);
      define(obj, key, {
        get: value,
        set: oriDptor && oriDptor.set,
        configurable: true
      });
      break;
    }
    case "set": {
      if (isPrivate) {
        throw new Error("Private setters not yet supported");
      }
      const obj = node.static ? klass : klass.prototype;
      const oriDptor = getDptor(obj, key);
      define(obj, key, {
        get: oriDptor && oriDptor.get,
        set: value,
        configurable: true
      });
      break;
    }
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function hasStrictDirective$1(body) {
  if (body.type === "BlockStatement" && body.body.length > 0) {
    const firstStatement = body.body[0];
    if (firstStatement.type === "ExpressionStatement" && firstStatement.directive === "use strict") {
      return true;
    }
  }
  return false;
}
function* hoist$1(block, scope, options = {}) {
  const { onlyBlock = false } = options;
  const funcDclrList = [];
  const funcDclrIdxs = [];
  for (let i = 0; i < block.body.length; i++) {
    const statement2 = block.body[i];
    if (statement2.type === "FunctionDeclaration") {
      funcDclrList.push(statement2);
      funcDclrIdxs.push(i);
    } else if (statement2.type === "VariableDeclaration" && ["const", "let"].indexOf(statement2.kind) !== -1) {
      yield* VariableDeclaration(statement2, scope, { hoist: true, onlyBlock: true });
    } else if (!onlyBlock) {
      yield* hoistVarRecursion$1(statement2, scope);
    }
  }
  if (funcDclrIdxs.length) {
    for (let i = funcDclrIdxs.length - 1; i > -1; i--) {
      block.body.splice(funcDclrIdxs[i], 1);
    }
    block.body = funcDclrList.concat(block.body);
  }
}
function* hoistVarRecursion$1(statement2, scope) {
  switch (statement2.type) {
    case "VariableDeclaration":
      yield* VariableDeclaration(statement2, scope, { hoist: true });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      if (statement2.left.type === "VariableDeclaration") {
        yield* VariableDeclaration(statement2.left, scope, { hoist: true });
      }
    case "ForStatement":
      if (statement2.type === "ForStatement" && statement2.init.type === "VariableDeclaration") {
        yield* VariableDeclaration(statement2.init, scope, { hoist: true });
      }
    case "WhileStatement":
    case "DoWhileStatement":
      yield* hoistVarRecursion$1(statement2.body, scope);
      break;
    case "IfStatement":
      yield* hoistVarRecursion$1(statement2.consequent, scope);
      if (statement2.alternate) {
        yield* hoistVarRecursion$1(statement2.alternate, scope);
      }
      break;
    case "BlockStatement":
      for (let i = 0; i < statement2.body.length; i++) {
        yield* hoistVarRecursion$1(statement2.body[i], scope);
      }
      break;
    case "SwitchStatement":
      for (let i = 0; i < statement2.cases.length; i++) {
        for (let j = 0; j < statement2.cases[i].consequent.length; j++) {
          yield* hoistVarRecursion$1(statement2.cases[i].consequent[j], scope);
        }
      }
      break;
    case "TryStatement": {
      const tryBlock = statement2.block.body;
      for (let i = 0; i < tryBlock.length; i++) {
        yield* hoistVarRecursion$1(tryBlock[i], scope);
      }
      const catchBlock = statement2.handler && statement2.handler.body.body;
      if (catchBlock) {
        for (let i = 0; i < catchBlock.length; i++) {
          yield* hoistVarRecursion$1(catchBlock[i], scope);
        }
      }
      const finalBlock = statement2.finalizer && statement2.finalizer.body;
      if (finalBlock) {
        for (let i = 0; i < finalBlock.length; i++) {
          yield* hoistVarRecursion$1(finalBlock[i], scope);
        }
      }
      break;
    }
  }
}
function* pattern$1(node, scope, options = {}) {
  switch (node.type) {
    case "ObjectPattern":
      return yield* ObjectPattern(node, scope, options);
    case "ArrayPattern":
      return yield* ArrayPattern(node, scope, options);
    case "RestElement":
      return yield* RestElement(node, scope, options);
    case "AssignmentPattern":
      return yield* AssignmentPattern(node, scope, options);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function createFunc$1(node, scope, options = {}) {
  if (
    /*<replace by:=node.generator\s||\snode.async>*/
    !node.generator && !node.async
  ) {
    return createFunc(node, scope, options);
  }
  const { superClass, isCtor } = options;
  const params = node.params;
  const functionIsStrict = hasStrictDirective$1(node.body);
  const tmpFunc = function* (...args) {
    const subScope = new Scope(scope, true, functionIsStrict || scope.strict);
    if (node.type !== "ArrowFunctionExpression") {
      subScope.const("this", this);
      subScope.let("arguments", arguments);
      const actualNewTarget = tmpFunc.__currentNewTarget || new.target;
      subScope.const(NEWTARGET, actualNewTarget);
      if (superClass) {
        subScope.const(SUPER, superClass);
        if (isCtor) subScope.let(SUPERCALL, false);
      }
    }
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      if (param.type === "Identifier") {
        subScope.var(param.name, args[i]);
      } else if (param.type === "RestElement") {
        yield* RestElement(param, subScope, { kind: "var", feed: args.slice(i) });
      } else {
        yield* pattern$1(param, subScope, { feed: args[i] });
      }
    }
    let result;
    if (node.body.type === "BlockStatement") {
      yield* hoist$1(node.body, subScope);
      result = yield* BlockStatement(node.body, subScope, {
        invasived: true,
        hoisted: true
      });
    } else {
      result = yield* evaluate(node.body, subScope);
      if (node.type === "ArrowFunctionExpression") {
        RETURN.RES = result;
        result = RETURN;
      }
    }
    if (result === RETURN) {
      return result.RES;
    }
  };
  let func;
  if (node.async && node.generator) {
    func = function() {
      const iterator = tmpFunc.apply(this, arguments);
      let last = Promise.resolve();
      let hasCatch = false;
      const run = (opts) => last = last.then(() => runAsync(iterator, assign({ fullRet: true }, opts))).catch((err) => {
        if (!hasCatch) {
          hasCatch = true;
          return Promise.reject(err);
        }
      });
      const asyncIterator = {
        next: (res) => run({ res }),
        throw: (err) => run({ err }),
        return: (ret) => run({ ret })
      };
      if (typeof Symbol === "function") {
        asyncIterator[Symbol.iterator] = function() {
          return this;
        };
      }
      return asyncIterator;
    };
  } else if (node.async) {
    func = function() {
      return runAsync(tmpFunc.apply(this, arguments));
    };
  } else {
    func = tmpFunc;
  }
  define(func, NOCTOR, { value: true });
  define(func, "name", {
    value: node.id && node.id.name || "",
    configurable: true
  });
  define(func, "length", {
    value: params.length,
    configurable: true
  });
  return func;
}
function* createClass$1(node, scope) {
  const superClass = yield* evaluate(node.superClass, scope);
  const privateInstanceFields = /* @__PURE__ */ new WeakMap();
  const privateStaticFields = /* @__PURE__ */ new Map();
  const methodBody = node.body.body;
  const staticBlocks = [];
  let originalCtor = null;
  const instanceFieldDefs = [];
  const staticFields = [];
  for (let i = 0; i < methodBody.length; i++) {
    const method = methodBody[i];
    if (method.type === "MethodDefinition" && method.kind === "constructor") {
      originalCtor = yield* createFunc$1(method.value, scope, { superClass, isCtor: true });
    } else if (method.type === "PropertyDefinition") {
      const isPrivate = method.key.type === "PrivateIdentifier";
      let key;
      if (isPrivate) {
        key = Symbol.for(`private:${method.key.name}`);
      } else if (method.computed) {
        key = yield* evaluate(method.key, scope);
      } else {
        key = method.key.type === "Identifier" ? method.key.name : yield* evaluate(method.key, scope);
      }
      if (method.static) {
        const value = method.value ? yield* evaluate(method.value, scope) : void 0;
        staticFields.push({ key, value, isPrivate });
      } else {
        instanceFieldDefs.push({ key, valueNode: method.value, isPrivate });
      }
    } else if (method.type === "StaticBlock") {
      staticBlocks.push(method);
    }
  }
  let klass;
  if (originalCtor) {
    let klassRef;
    klass = klassRef = function(...args) {
      const privateData = {};
      const privateMethods = klassRef.__privateInstanceMethods;
      if (privateMethods) {
        privateMethods.forEach((method, key) => {
          privateData[key] = method;
        });
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        if (field.isPrivate) {
          privateData[field.key] = void 0;
        }
      }
      if (Object.keys(privateData).length > 0 || Object.getOwnPropertySymbols(privateData).length > 0) {
        privateInstanceFields.set(this, privateData);
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        const subScope = new Scope(scope, false);
        subScope.const("this", this);
        const result2 = field.valueNode ? evaluate(field.valueNode, subScope) : void 0;
        const value = result2 && typeof result2.next === "function" ? Array.from(result2).pop() : result2;
        if (field.isPrivate) {
          privateData[field.key] = value;
        } else {
          this[field.key] = value;
        }
      }
      originalCtor.__currentNewTarget = new.target || klassRef;
      const result = originalCtor.call(this, ...args);
      delete originalCtor.__currentNewTarget;
      return typeof result === "object" && result !== null ? result : this;
    };
  } else {
    klass = function() {
      const privateData = {};
      const privateMethods = klass.__privateInstanceMethods;
      if (privateMethods) {
        privateMethods.forEach((method, key) => {
          privateData[key] = method;
        });
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        if (field.isPrivate) {
          privateData[field.key] = void 0;
        }
      }
      if (Object.keys(privateData).length > 0 || Object.getOwnPropertySymbols(privateData).length > 0) {
        privateInstanceFields.set(this, privateData);
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        const subScope = new Scope(scope, false);
        subScope.const("this", this);
        const value = field.valueNode ? evaluate(field.valueNode, subScope) : void 0;
        if (field.isPrivate) {
          privateData[field.key] = value;
        } else {
          this[field.key] = value;
        }
      }
      if (superClass) {
        superClass.apply(this);
      }
    };
  }
  if (superClass) {
    inherits(klass, superClass);
  }
  define(klass, "__privateInstanceFields", { value: privateInstanceFields });
  define(klass, "__privateStaticFields", { value: privateStaticFields });
  yield* ClassBody(node.body, scope, { klass, superClass });
  for (let i = 0; i < staticFields.length; i++) {
    const field = staticFields[i];
    if (field.isPrivate) {
      privateStaticFields.set(field.key, field.value);
    } else {
      klass[field.key] = field.value;
    }
  }
  for (let i = 0; i < staticBlocks.length; i++) {
    const block = staticBlocks[i];
    const staticScope = new Scope(scope, true);
    staticScope.const("this", klass);
    for (let j = 0; j < block.body.length; j++) {
      yield* evaluate(block.body[j], staticScope);
    }
  }
  define(klass, CLSCTOR, { value: true });
  define(klass, "name", {
    value: node.id && node.id.name || "",
    configurable: true
  });
  return klass;
}
function* ForXHandler$1(node, scope, options) {
  const { value } = options;
  const left = node.left;
  const subScope = new Scope(scope);
  if (left.type === "VariableDeclaration") {
    yield* VariableDeclaration(left, subScope, { feed: value });
  } else if (left.type === "Identifier") {
    const variable = yield* Identifier$1(left, scope, { getVar: true });
    variable.set(value);
  } else {
    yield* pattern$1(left, scope, { feed: value });
  }
  let result;
  if (node.body.type === "BlockStatement") {
    result = yield* BlockStatement(node.body, subScope, { invasived: true });
  } else {
    result = yield* evaluate(node.body, subScope);
  }
  return result;
}
function hasStrictDirective(body) {
  if (body.type === "BlockStatement" && body.body.length > 0) {
    const firstStatement = body.body[0];
    if (firstStatement.type === "ExpressionStatement" && firstStatement.directive === "use strict") {
      return true;
    }
  }
  return false;
}
function hoist(block, scope, options = {}) {
  const { onlyBlock = false } = options;
  const funcDclrList = [];
  const funcDclrIdxs = [];
  for (let i = 0; i < block.body.length; i++) {
    const statement2 = block.body[i];
    if (statement2.type === "FunctionDeclaration") {
      funcDclrList.push(statement2);
      funcDclrIdxs.push(i);
    } else if (statement2.type === "VariableDeclaration" && ["const", "let"].indexOf(statement2.kind) !== -1) {
      VariableDeclaration$1(statement2, scope, { hoist: true, onlyBlock: true });
    } else if (!onlyBlock) {
      hoistVarRecursion(statement2, scope);
    }
  }
  if (funcDclrIdxs.length) {
    for (let i = funcDclrIdxs.length - 1; i > -1; i--) {
      block.body.splice(funcDclrIdxs[i], 1);
    }
    block.body = funcDclrList.concat(block.body);
  }
}
function hoistVarRecursion(statement2, scope) {
  switch (statement2.type) {
    case "VariableDeclaration":
      VariableDeclaration$1(statement2, scope, { hoist: true });
      break;
    case "ForInStatement":
    case "ForOfStatement":
      if (statement2.left.type === "VariableDeclaration") {
        VariableDeclaration$1(statement2.left, scope, { hoist: true });
      }
    case "ForStatement":
      if (statement2.type === "ForStatement" && statement2.init.type === "VariableDeclaration") {
        VariableDeclaration$1(statement2.init, scope, { hoist: true });
      }
    case "WhileStatement":
    case "DoWhileStatement":
      hoistVarRecursion(statement2.body, scope);
      break;
    case "IfStatement":
      hoistVarRecursion(statement2.consequent, scope);
      if (statement2.alternate) {
        hoistVarRecursion(statement2.alternate, scope);
      }
      break;
    case "BlockStatement":
      for (let i = 0; i < statement2.body.length; i++) {
        hoistVarRecursion(statement2.body[i], scope);
      }
      break;
    case "SwitchStatement":
      for (let i = 0; i < statement2.cases.length; i++) {
        for (let j = 0; j < statement2.cases[i].consequent.length; j++) {
          hoistVarRecursion(statement2.cases[i].consequent[j], scope);
        }
      }
      break;
    case "TryStatement": {
      const tryBlock = statement2.block.body;
      for (let i = 0; i < tryBlock.length; i++) {
        hoistVarRecursion(tryBlock[i], scope);
      }
      const catchBlock = statement2.handler && statement2.handler.body.body;
      if (catchBlock) {
        for (let i = 0; i < catchBlock.length; i++) {
          hoistVarRecursion(catchBlock[i], scope);
        }
      }
      const finalBlock = statement2.finalizer && statement2.finalizer.body;
      if (finalBlock) {
        for (let i = 0; i < finalBlock.length; i++) {
          hoistVarRecursion(finalBlock[i], scope);
        }
      }
      break;
    }
  }
}
function pattern(node, scope, options = {}) {
  switch (node.type) {
    case "ObjectPattern":
      return ObjectPattern$1(node, scope, options);
    case "ArrayPattern":
      return ArrayPattern$1(node, scope, options);
    case "RestElement":
      return RestElement$1(node, scope, options);
    case "AssignmentPattern":
      return AssignmentPattern$1(node, scope, options);
    default:
      throw new SyntaxError("Unexpected token");
  }
}
function createFunc(node, scope, options = {}) {
  if (node.generator || node.async) {
    return createFunc$1(node, scope, options);
  }
  const { superClass, isCtor } = options;
  const params = node.params;
  const functionIsStrict = hasStrictDirective(node.body);
  const tmpFunc = function(...args) {
    const subScope = new Scope(scope, true, functionIsStrict || scope.strict);
    if (node.type !== "ArrowFunctionExpression") {
      subScope.const("this", this);
      subScope.let("arguments", arguments);
      const actualNewTarget = tmpFunc.__currentNewTarget || new.target;
      subScope.const(NEWTARGET, actualNewTarget);
      if (superClass) {
        subScope.const(SUPER, superClass);
        if (isCtor) subScope.let(SUPERCALL, false);
      }
    }
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      if (param.type === "Identifier") {
        subScope.var(param.name, args[i]);
      } else if (param.type === "RestElement") {
        RestElement$1(param, subScope, { kind: "var", feed: args.slice(i) });
      } else {
        pattern(param, subScope, { feed: args[i] });
      }
    }
    let result;
    if (node.body.type === "BlockStatement") {
      hoist(node.body, subScope);
      result = BlockStatement$1(node.body, subScope, {
        invasived: true,
        hoisted: true
      });
    } else {
      result = evaluate$1(node.body, subScope);
      if (node.type === "ArrowFunctionExpression") {
        RETURN.RES = result;
        result = RETURN;
      }
    }
    if (result === RETURN) {
      return result.RES;
    }
  };
  let func = tmpFunc;
  if (node.type === "ArrowFunctionExpression") {
    define(func, NOCTOR, { value: true });
  }
  define(func, "name", {
    value: node.id && node.id.name || "",
    configurable: true
  });
  define(func, "length", {
    value: params.length,
    configurable: true
  });
  return func;
}
function createClass(node, scope) {
  const superClass = evaluate$1(node.superClass, scope);
  const privateInstanceFields = /* @__PURE__ */ new WeakMap();
  const privateStaticFields = /* @__PURE__ */ new Map();
  const methodBody = node.body.body;
  const staticBlocks = [];
  let originalCtor = null;
  const instanceFieldDefs = [];
  const staticFields = [];
  for (let i = 0; i < methodBody.length; i++) {
    const method = methodBody[i];
    if (method.type === "MethodDefinition" && method.kind === "constructor") {
      originalCtor = createFunc(method.value, scope, { superClass, isCtor: true });
    } else if (method.type === "PropertyDefinition") {
      const isPrivate = method.key.type === "PrivateIdentifier";
      let key;
      if (isPrivate) {
        key = Symbol.for(`private:${method.key.name}`);
      } else if (method.computed) {
        key = evaluate$1(method.key, scope);
      } else {
        key = method.key.type === "Identifier" ? method.key.name : evaluate$1(method.key, scope);
      }
      if (method.static) {
        const value = method.value ? evaluate$1(method.value, scope) : void 0;
        staticFields.push({ key, value, isPrivate });
      } else {
        instanceFieldDefs.push({ key, valueNode: method.value, isPrivate });
      }
    } else if (method.type === "StaticBlock") {
      staticBlocks.push(method);
    }
  }
  let klass;
  if (originalCtor) {
    let klassRef;
    klass = klassRef = function(...args) {
      const privateData = {};
      const privateMethods = klassRef.__privateInstanceMethods;
      if (privateMethods) {
        privateMethods.forEach((method, key) => {
          privateData[key] = method;
        });
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        if (field.isPrivate) {
          privateData[field.key] = void 0;
        }
      }
      if (Object.keys(privateData).length > 0 || Object.getOwnPropertySymbols(privateData).length > 0) {
        privateInstanceFields.set(this, privateData);
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        const subScope = new Scope(scope, false);
        subScope.const("this", this);
        const result2 = field.valueNode ? evaluate$1(field.valueNode, subScope) : void 0;
        const value = result2 && typeof result2.next === "function" ? Array.from(result2).pop() : result2;
        if (field.isPrivate) {
          privateData[field.key] = value;
        } else {
          this[field.key] = value;
        }
      }
      originalCtor.__currentNewTarget = new.target || klassRef;
      const result = originalCtor.call(this, ...args);
      delete originalCtor.__currentNewTarget;
      return typeof result === "object" && result !== null ? result : this;
    };
  } else {
    klass = function() {
      const privateData = {};
      const privateMethods = klass.__privateInstanceMethods;
      if (privateMethods) {
        privateMethods.forEach((method, key) => {
          privateData[key] = method;
        });
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        if (field.isPrivate) {
          privateData[field.key] = void 0;
        }
      }
      if (Object.keys(privateData).length > 0 || Object.getOwnPropertySymbols(privateData).length > 0) {
        privateInstanceFields.set(this, privateData);
      }
      for (let i = 0; i < instanceFieldDefs.length; i++) {
        const field = instanceFieldDefs[i];
        const subScope = new Scope(scope, false);
        subScope.const("this", this);
        const value = field.valueNode ? evaluate$1(field.valueNode, subScope) : void 0;
        if (field.isPrivate) {
          privateData[field.key] = value;
        } else {
          this[field.key] = value;
        }
      }
      if (superClass) {
        superClass.apply(this);
      }
    };
  }
  if (superClass) {
    inherits(klass, superClass);
  }
  define(klass, "__privateInstanceFields", { value: privateInstanceFields });
  define(klass, "__privateStaticFields", { value: privateStaticFields });
  ClassBody$1(node.body, scope, { klass, superClass });
  for (let i = 0; i < staticFields.length; i++) {
    const field = staticFields[i];
    if (field.isPrivate) {
      privateStaticFields.set(field.key, field.value);
    } else {
      klass[field.key] = field.value;
    }
  }
  for (let i = 0; i < staticBlocks.length; i++) {
    const block = staticBlocks[i];
    const staticScope = new Scope(scope, true);
    staticScope.const("this", klass);
    for (let j = 0; j < block.body.length; j++) {
      evaluate$1(block.body[j], staticScope);
    }
  }
  define(klass, CLSCTOR, { value: true });
  define(klass, "name", {
    value: node.id && node.id.name || "",
    configurable: true
  });
  return klass;
}
function ForXHandler(node, scope, options) {
  const { value } = options;
  const left = node.left;
  const subScope = new Scope(scope);
  if (left.type === "VariableDeclaration") {
    VariableDeclaration$1(left, subScope, { feed: value });
  } else if (left.type === "Identifier") {
    const variable = Identifier$1(left, scope, { getVar: true });
    variable.set(value);
  } else {
    pattern(left, scope, { feed: value });
  }
  let result;
  if (node.body.type === "BlockStatement") {
    result = BlockStatement$1(node.body, subScope, { invasived: true });
  } else {
    result = evaluate$1(node.body, subScope);
  }
  return result;
}
const _Sval = class _Sval {
  constructor(options = {}) {
    this.options = {};
    this.scope = new Scope(null, true);
    this.moduleCache = /* @__PURE__ */ new Map();
    this.exports = {};
    let { ecmaVer = "latest", sandBox = true, sourceType = "script", fetch: fetch2 } = options;
    if (ecmaVer !== "latest") {
      ecmaVer = ecmaVer - (ecmaVer < 2015 ? 0 : 2009);
      if ([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].indexOf(ecmaVer) === -1) {
        throw new Error(`unsupported ecmaVer`);
      }
    }
    this.options.ecmaVersion = ecmaVer;
    this.options.sourceType = sourceType;
    this.fetchFn = fetch2;
    if (sandBox) {
      const win2 = createSandBox();
      this.scope.let("window", win2);
      this.scope.let("this", win2);
    } else {
      this.scope.let("window", globalObj);
      this.scope.let("this", globalObj);
    }
    if (sourceType === "module") {
      const moduleExports = {};
      this.scope.const("exports", this.exports = moduleExports);
      this.scope.const("__moduleExports__", moduleExports);
      this.scope.const("__moduleLoader__", this.createModuleLoader());
    } else {
      this.scope.const("exports", this.exports = {});
    }
  }
  import(nameOrModules, mod) {
    if (typeof nameOrModules === "string") {
      nameOrModules = { [nameOrModules]: mod };
    }
    if (typeof nameOrModules !== "object") return;
    const names2 = getOwnNames(nameOrModules);
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      this.scope.var(name, nameOrModules[name]);
    }
  }
  parse(code, parser) {
    if (typeof parser === "function") {
      return parser(code, assign({}, this.options));
    }
    return parse(code, this.options);
  }
  run(code) {
    const ast = typeof code === "string" ? parse(code, this.options) : code;
    if (ast.type === "Program") {
      for (let i = 0; i < ast.body.length; i++) {
        const statement2 = ast.body[i];
        if (statement2.type === "ExpressionStatement" && statement2.directive === "use strict") {
          this.scope.strict = true;
          break;
        }
        if (statement2.type !== "ExpressionStatement" || !statement2.directive) {
          break;
        }
      }
    }
    hoist(ast, this.scope);
    evaluate$1(ast, this.scope);
  }
  async runAsync(code) {
    const ast = typeof code === "string" ? parse(code, this.options) : code;
    if (ast.type === "Program") {
      for (let i = 0; i < ast.body.length; i++) {
        const statement2 = ast.body[i];
        if (statement2.type === "ExpressionStatement" && statement2.directive === "use strict") {
          this.scope.strict = true;
          break;
        }
        if (statement2.type !== "ExpressionStatement" || !statement2.directive) {
          break;
        }
      }
    }
    hoist(ast, this.scope);
    await runAsync(evaluate(ast, this.scope));
  }
  createModuleLoader() {
    const self = this;
    return function* (url, baseUrl) {
      let resolvedUrl = url;
      const hasScheme = url && /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(url);
      if (!hasScheme) {
        if (baseUrl) {
          try {
            resolvedUrl = new URL(url, baseUrl).href;
          } catch (e) {
            throw new Error(`Failed to resolve URL ${url} relative to ${baseUrl}: ${e instanceof Error ? e.message : e}`);
          }
        } else {
          throw new Error(`Cannot resolve relative URL ${url} without a base URL`);
        }
      }
      if (self.moduleCache.has(resolvedUrl)) {
        return self.moduleCache.get(resolvedUrl);
      }
      let code;
      try {
        if (self.fetchFn) {
          AWAIT.RES = self.fetchFn(resolvedUrl);
          code = yield AWAIT;
        } else if (typeof fetch !== "undefined") {
          AWAIT.RES = fetch(resolvedUrl).then((r) => r.text());
          code = yield AWAIT;
        } else {
          throw new Error("No fetch function available. Provide a fetch option or use an environment with global fetch.");
        }
      } catch (error) {
        throw new Error(`Failed to fetch module from ${resolvedUrl}: ${error instanceof Error ? error.message : error}`);
      }
      const moduleExports = {};
      const moduleScope = new Scope(self.scope.global(), true);
      moduleScope.const("__moduleExports__", moduleExports);
      const moduleLoader = self.createModuleLoader();
      const nestedLoader = function* (nestedUrl) {
        return yield* moduleLoader(nestedUrl, resolvedUrl);
      };
      moduleScope.const("__moduleLoader__", nestedLoader);
      moduleScope.const("exports", moduleExports);
      try {
        const ast = parse(code, assign({}, self.options, { sourceType: "module" }));
        hoist(ast, moduleScope);
        yield* evaluate(ast, moduleScope);
      } catch (error) {
        throw new Error(`Failed to evaluate module ${resolvedUrl}: ${error instanceof Error ? error.message : error}`);
      }
      self.moduleCache.set(resolvedUrl, moduleExports);
      return moduleExports;
    };
  }
};
_Sval.version = version;
let Sval = _Sval;
export {
  Sval as default
};
//# sourceMappingURL=sval.js.map
