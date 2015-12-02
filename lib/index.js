"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var curry = function curry(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.length >= fn.length ? fn.apply(undefined, args) : function () {
    for (var _len2 = arguments.length, more = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      more[_key2] = arguments[_key2];
    }

    return curry.apply(undefined, [fn].concat(args, more));
  };
};

var methods = [["add", function (a, b) {
  return a + b;
}], ["subtract", function (a, b) {
  return a - b;
}], ["multiply", function (a, b) {
  return a * b;
}], ["divide", function (a, b) {
  return a / b;
}], ["mod", function (a, b) {
  return a % b;
}], ["eq", function (a, b) {
  return a == b;
}], ["neq", function (a, b) {
  return a != b;
}], ["seq", function (a, b) {
  return a === b;
}], ["sneq", function (a, b) {
  return a !== b;
}], ["gt", function (a, b) {
  return a > b;
}], ["gte", function (a, b) {
  return a >= b;
}], ["lt", function (a, b) {
  return a < b;
}], ["lte", function (a, b) {
  return a <= b;
}], ["inc", function (a) {
  return a + 1;
}], ["dec", function (a) {
  return a - 1;
}], ["band", function (a, b) {
  return a & b;
}], ["bor", function (a, b) {
  return a | b;
}], ["bxor", function (a, b) {
  return a ^ b;
}], ["bnot", function (a) {
  return ~a;
}], ["and", function (a, b) {
  return a && b;
}], ["or", function (a, b) {
  return a || b;
}], ["not", function (a) {
  return !a;
}], ["ternary", function (a, b, c) {
  return a ? b : c;
}], ["typeof", function (a) {
  return typeof a === "undefined" ? "undefined" : _typeof(a);
}], ["delete", function (a, b) {
  return delete a[b];
}], ["fdelete", function (a, b) {
  return delete b[a];
}], ["instanceof", function (a, b) {
  return a instanceof b;
}], ["finstanceof", function (a, b) {
  return b instanceof a;
}], ["in", function (a, b) {
  return a in b;
}], ["fin", function (a, b) {
  return b in a;
}], ["new", function (a) {
  for (var _len3 = arguments.length, b = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    b[_key3 - 1] = arguments[_key3];
  }

  return new (Function.prototype.bind.apply(a, [null].concat(b)))();
}], ["get", function (a, b) {
  return a[b];
}], ["fget", function (a, b) {
  return b[a];
}], ["set", function (a, b, c) {
  return a[b] = c;
}], ["fset", function (a, b, c) {
  return b[a] = c;
}]];

var aliases = [["!", "not"], ["+", "add"], ["-", "subtract"], ["*", "multiply"], ["/", "divide"], ["%", "mod"], ["?", "ternary"], [">", "gt"], ["<", "lt"], [">=", "gte"], ["<=", "lte"], ["++", "inc"], ["--", "dec"], ["==", "eq"], ["!=", "neq"], ["===", "seq"], ["!==", "sneq"], ["&&", "and"], ["||", "or"], ["&", "band"], ["|", "bor"], ["^", "bxor"], ["~", "bnot"], ["?:", "ternary"], [".", "get"], ["[]", "get"], [".=", "set"], ["[]=", "set"]];

Object.keys(methods).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2);

  var name = _ref2[0];
  var f = _ref2[1];
  return exports[name] = curry(f);
});
Object.keys(aliases).forEach(function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2);

  var alias = _ref4[0];
  var name = _ref4[1];
  return exports[alias] = exports[name];
});