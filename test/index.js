const {strictEqual} = require("assert");

const $ = require("../src");

const x = {a: 1};

class F {
  constructor (v) {
    this.prop = v;
  }
}

// add
strictEqual($.add(1)(2), 3);
strictEqual($["+"](1)(2), 3);

// subtract
strictEqual($.subtract(1)(2), -1);
strictEqual($["-"](1)(2), -1);

// multiply
strictEqual($.multiply(3)(2), 6);
strictEqual($["*"](3)(2), 6);

// divide
strictEqual($.divide(6)(3), 2);
strictEqual($["/"](6)(3), 2);

// mod
strictEqual($.mod(5, 2), 1);
strictEqual($["%"](5, 2), 1);

// and
strictEqual($.and(true)(1), 1);
strictEqual($["&&"](true)(0), 0);
strictEqual($.and(1)(true), true);
strictEqual($["&&"](0)(true), 0);

// or
strictEqual($.or(true)(0), true);
strictEqual($["||"](false)(0), 0);

// xor
strictEqual($.xor(true)(0), true);
strictEqual($.xor(true)(1), false);
strictEqual($.xor(false)(0), false);

// not
strictEqual($.not(0), true);
strictEqual($["!"](1), false);

// gt
// gte
// lt
// lte

// eq
strictEqual($.eq(null)(undefined), true);
strictEqual($["=="](1)(true), true);
strictEqual($.eq(0)(true), false);
strictEqual($["=="](0)(undefined), false);

// neq
strictEqual($.neq(null)(undefined), false);
strictEqual($.neq(false)(0), false);
strictEqual($.neq(false)(1), true);

// seq
strictEqual($.seq(null)(null), true);
strictEqual($.seq(0)(false), false);

// sneq
strictEqual($.sneq(null)(undefined), true);
strictEqual($.sneq(null)(null), false);

// inc
strictEqual($.inc(1), 2);
strictEqual($["++"](1), 2);

// dec
strictEqual($.dec(2), 1);
strictEqual($["--"](2), 1);


// set, fset all idempotent, so need new objects to act on

// set
{
  const o = {};
  $.set(o)("a")(1);
  strictEqual(o.a, 1);
}

{
  const o = {};
  $[".="](o)("a")(1);
  strictEqual(o.a, 1);
}

{
  const o = {};
  $["[]="](o)("a")(1);
  strictEqual(o.a, 1);
}

// fset
{
  const o = {};
  $.fset("a")(o)(1);
  strictEqual(o.a, 1);
}

// delete
{
  const o = {a: 1};
  $.delete(o)("a");
  strictEqual(o.a, undefined);
  strictEqual(o.hasOwnProperty("a"), false);
}

// fdelete
{
  const o = {a: 1};
  $.fdelete("a")(o);
  strictEqual(o.a, undefined);
  strictEqual(o.hasOwnProperty("a"), false);
}


// new
{
  const x = $.new(F)(1);
  strictEqual(x.prop, 1);
}

// get, fget, in, fin all nullipotent

// get
strictEqual($.get(x)("a"), 1);
strictEqual($["[]"](x)("a"), 1);
strictEqual($["."](x)("a"), 1);

// fget
strictEqual($.fget("a")(x), 1);

// in
strictEqual($.in("a")(x), true);
strictEqual($.in("b")(x), false);

// fin
strictEqual($.fin(x)("a"), true);
strictEqual($.fin(x)("b"), false);

// ternary
strictEqual($["?:"](true)(1)(2), 1);
strictEqual($["?:"](false)(1)(2), 2);

console.log("Everything A-OK");