# fops
Functional Operators

When taking the functional approach in JavaScript, and especially when using libraries like [Ramda]() that strongly encourage [currying](https://en.wikipedia.org/wiki/Currying), having functional, curried versions of the [langauge operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) can be quite convenient.

For operators taking two arguments, and where it makes sense (i.e. not for `+` or `-`) there are "flipped" versions which take arguments in the opposite of the expected order. These are have the same names as the unflipped counterparts, preceded by "f" (`fin()` for the flipped version of the [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) operator). The equality operators don't have flipped versions for obvious reasons. This library also includes some "impure" functions (`f.delete` for instance) that should be used very carefully in functional programming. Further, there are a couple language constructs that are included as well, specifically "get" (as in `a.b`) and "set" (as in `a.b = c`). `get` is aliased as `.` and `[]`; `set()` is aliased under `.=` and `[]=`.

Two operators have been excluded because they don't make sense as functions in JavaScript, since arguments are evaluated at call time: [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) and [`,`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator).

## Why?
There are [other](https://github.com/hughfdjackson/op-lift) [libraries](https://github.com/kaleb/js-op) [like](https://github.com/dsc/operator.js) this one, so why make another? A few reasons: 

- Most of the others seem to include functional helpers that can be found elsewhere, in better-tested, more popular libraries. This one includes **only** operators and language constructs 

- Currying is important! Having the entire library curried automatically makes it much easier to work with, especially in conjunction with Ramda.

- Having flipped versions included is nice to cut down on verbosity.

## API

### Arithmetic Operators
- `+` (`add`)
- `-` (`subtract`)
- `*` (`multiply`)
- `/` (`divide`)
- `%` (`mod`)
- `++` (`inc`)
- `--` (`dec`)
- `**` (`exp`)

### Bitwise Operators
Bitwise operators are included for completeness. I almost never use them, and further, since they are often used in performance sensitve areas, they are probably a poor fit for functional programming in javascript, since function calls incur a substantial performance overhead relative to bitwise arithmetic.

- `&` (`band`)
- `|` (`bor`)
- `^` (`bxor`)
- `~` (`bnot`)
- `<<` (`bls`)
- `>>` (`bsprs`)
- `>>>` (`bzfrs`)

### Comparison Operators
- `==` (`eq`)
- `!=` (`neq`)
- `===` (`seq`)
- `!==` (`sneq`)
- `>` (`gt`)
- `<` (`lt`)
- `>=` (`gte`)
- `<=` (`lte`)

### Logical Operators
- `&&` (`and`)
```js
f.and(1)(true); // true
```

- `fand`
```js
f.fand(1)(true); // 1
```

- `||` (`or`)
```js
f.or(1)(true); // 1;
```

- `ffor` (`for` is a reserved word)
```
f.ffor(1)(true); // true
```

- `!` (`not`)
```js
f.not(1); // false;
```


### Unary Operators
- `delete`
```js
var obj = {a: 1, b: 2};
f.delete(o)("a");
obj; // {b: 2}
```

- `fdelete`
```
var obj = {a: 1, b: 2};
f.delete("a")(o);
obj; // {b: 2}
```

- `typeof`
```js
f.typeof("") // "string"
```

### Relational Operators

- `in`
```js
f.in("length")([]) // true
```

- `fin`
```js
f.fin([])("length") // true
```

- `instanceof`
```js
f.instanceof([])(Object) // true
```

- `finstanceof`
```js
f.instanceof(Object)([]) // true
```

### Language Constructs

- `get` (`.`, `[]`)
```js
f.get({a: 1})("a"); // 1
```

- `fget`
```js
f.fget("a")({a: 1}); // 1
```

- `set` (`.=`, `[]=`)
```js
var a = [];
f.set(a)(0)("x");
a; // ["x"]
```

- `fset` (NOTE: only the first two arguments are flipped)
```
var a = [];
f.fset(0)(a)("x");
a; // ["x"]
```

### Misc

- `new`
```
class F {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

f.new(F)(1, 2) // F {a: 1, b: 2, c: undefined}

```
