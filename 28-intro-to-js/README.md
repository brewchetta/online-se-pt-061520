# Ruby vs Javascript

This ought to be a rough guide for the differences between Ruby and Javascript. Please note there are far more differences, I just wanted to talk in broad strokes what you can expect as you get used to Javascript's tighter and more verbose syntax.

## Declaring Variables

Unlike Ruby, Javascript has an explicit way of declaring variables. With only a few exceptions, we need to precede a variable declaration with `let`, `const`, or `var`. Each type of declaration creates a different type of variable with different rules. Note that both Javascript and Ruby are [dynamically typed languages](https://android.jlelse.eu/magic-lies-here-statically-typed-vs-dynamically-typed-languages-d151c7f95e2b).

### Let

When we declare a variable with `let`, we’re creating a variable that can be reassigned. For example:

```
let i = 0
i = 1
// i was reassigned from 0 to 1
```

When reassigning variables declared with `let`, we can reassign them to whatever we want regardless of type (in other words, their type is 'dynamic' as opposed to 'static').

```
let i = 0
i = “a string”
// i can be anything we want from an integer to a nested object!
```

Variables declared with `let` are block scoped which means we can declare a new variable with the same name in a block and it’ll be considered a different variable.

```
let i = 0

if (true) {
  let i = 10
  console.log(i)
  // prints out “10”
}

console.log(i)
// prints out “0” since it’s technically a different variable in memory
```

One last things: variables declared with `let` are not hoisted:

```
console.log(i)
// raises an error because `i` hasn’t been declared yet
let i = 0
```

Hoisted variables will make more sense when we talk about `var`. To avoid an error, we would need to declare `i` before we use it anywhere.

### Const

Variables declared with `const` work exactly like `let` with one major difference: these variables are constants and can’t be reassigned.

```
const i = 0
i = 10
// raises an error because `i` can’t be reassigned
```

Everything else you'd expect for `let` also works for `const`.

### Var

Declaring a variable with `var` works exactly like declaring it with `let` in that you can reassign it:

```
var i = 0
i = “a string”
// we can even reassign it to be a different data type!
```

However, it works very differently from let and const in two major ways:

The first is that `var` is function scoped rather than block scoped:

```
var i = 0

if (true) {
  var i = 10
  console.log(i)
  // prints out 10
}

console.log(i)
// prints out “10” since both declarations of `i` are actually the same variable!
```

```
var i = 0

function someFunction() {
  var i = 100
  console.log(i)
  // prints out 100
}

console.log(i)
// prints out 0
```

It’s only when we put a `var` declared variable in a function that it declares a new variable instead of reassigning the old one.

The second major difference is that `var` can be hoisted.

```
console.log(i) // returns “undefined” instead of throwing an error
var i = 0
```

Very few people utilize `var`. It’s almost always expected that you should use `let` and `const` since their behavior is much more predictable.

## Variable Scope in Javascript

When considering scope in Javascript, it’s a little different from Ruby. In Ruby, things can be scoped in four different ways: global, local, instance, and class. Ruby defines differently scoped variables in different ways, for example: `$global`, `local`, `@instance`, and `@@class`.

In Javascript by contrast, it's all about something called lexical context.

Javascript will always look in the most local scope (it's immediate lexical context) first, then in each scope above it until it finds a variable with the proper scope:

```
const i = 0

if (true) {
  if (true) {
    console.log(i)
    // returns 0, the outermost scope which is where it found `i`
  }
}

if (true) {
  const i = 1
  if (true) {
    console.log(i) // returns 1, the middle scope which is where it found `i` first
  }
}

if (true) {
  const i = 1
  if (true) {
    const i = 2
    console.log(i)
    // returns 2, the innermost scope which is where it found `i` first
  }
}
```

This is really handy because it allows us to utilize variables outside our immediate lexical scope with no additional work! That being said, there will be times we have to pass variables if the chain of scopes doesn’t include it:

```
if (true) {
  let i  = 0
  addOne()
}

function addOne() {
  i += 1
  // this won’t work because our declaration of `i` isn’t any lexical context addOne is aware of
  // technically i gets declared inside an entirely seperate block that this function can't access even though it's called there
}
```

## Functions

Unlike Ruby which utilizes methods, Javascript utilizes first class functions. The idea of a first class function is that there’s no discernable difference between it and a common variable; in fact, you can save it to a variable if you so choose.

```
let myFunc = function() {
  return “I am a function”
}

console.log(myFunc)
// we can pass the function into other functions easily if we desire
// note that this won’t print “I am a function”, it’ll actually print something like `function myFunc` which we talk about below
```

Also unlike Ruby, most Javascript functions have no implicit return.

```
def some_method
  “I am a method”
end

some_method # returns “I am a method”
```

```
function someFunction() {
  “I am a function”
}

someFunction() // returns `undefined` since we didn’t explicitly return anything
```

```
function someOtherFunction() {
 return “I am a function”
}

someOtherFunction() // returns “I am a function” since we explicitly told it what to return
```

Another important thing to note is that with a Ruby method we don’t have to explicitly call the method, just reference it and it’ll run:

```
def some_method
  “I am a method”
end

some_method # this will run the method and return "I am a method"
```

In Javascript we need to explicitly call the function for it to run:

```
function someFunction() {
  return “I am a function”
}

someFunction // will just return the uncalled function, i.e. `function someFunction`

someFunction() // will actually run the function and return “I am a function”
```

## Strings, Integers, Booleans, and Arrays

These work very similarly to Ruby! In fact, you can use them in almost the exact same way!

You will notice that for arrays, certain methods you call will be different. For example, there’s no `.inject` or `.collect`, rather you’ll have to utilize `.reduce` and `.map`. Nevertheless, many methods work similarly or exactly the same between Ruby and Javascript. For the ones that you’re unsure of, just look them up on your favorite search engine!

One thing to note is to make sure you call certain methods. For example, `array.slice` won't do anything, we need to do `array.slice()` since this is a function we need to call.

## Other Differences

There are a few other differences, many of them subtle, that you’ll quickly realize as you tackle your problems. For example, Ruby is great for object oriented programming while Javascript is more suited to something called functional programming. Ruby is very interested in building out comprehensive objects and models while javascript’s feel very hacked together.

You’ll discover more and more of these differences as you delve into each language but this should be a helpful guide for how to start thinking about the differences between the two languages!
