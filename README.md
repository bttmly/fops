# fops
Functional Operators

When taking the functional approach in JavaScript, and especially when using libraries like [Ramda]() that strongly encourage [currying](https://en.wikipedia.org/wiki/Currying), having functional, curried versions of the [langauge operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators) can be quite convenient.

For operators taking two arguments, and where it makes sense (i.e. not for `+` or `-`) there are "flipped" versions which take arguments in the opposite of the expected order. These are have the same names as the unflipped counterparts, preceded by "f" (`fin()` for the flipped version of the [in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) operator). This library also includes some "impure" functions (`f.delete` for instance) that should be used very carefully in functional programming.

Two operators have been excluded because they don't make sense as functions in JavaScript, since arguments are evaluated at call time: [`void`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) and [`,`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator).

## Arithmetic Operators
- `+` (`add`)
- `-` (`subtract`)
- `*` (`multiply`)
- `/` (`divide`)
- `%` (`mod`)
- `++` (`inc`)
- `--` (`dec`)
- `**` (`exp`)

## Bitwise Operators
- `&` (`band`)
- `|` (`bor`)
- `^` (`bxor`)
- `~` (`bnot`)
- `<<` (`bls`)
- `>>` (`bsprs`)
- `>>>` (`bzfrs`)

## Logical Operators
- `&&` (`and`)
- `fand`
- `||` (`or`)
- `ffor`
- `!` (`not`)

## Unary Operators
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

## Relational Operators

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
```
f.instanceof(Object)([]) // true
```