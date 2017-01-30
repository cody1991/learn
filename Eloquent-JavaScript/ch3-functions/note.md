An important property of functions is that the variables created inside of them, including their parameters, are local to the function. This means, for example, that the result variable in the power example will be newly created every time the function is called, and these separate incarnations do not interfere with each other.

---

Because a function has to jump back to the place of the call when it returns, the computer must remember the context from which the function was called. In one case, console.log has to jump back to the greet function. In the other case, it jumps back to the end of the program.

The place where the computer stores this context is the call stack. Every time a function is called, the current context is put on top of this “stack”. When the function returns, it removes the top context from the stack and uses it to continue execution.

Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”. The following code illustrates this by asking the computer a really hard question, which causes an infinite back-and-forth between two functions. Rather, it would be infinite, if the computer had an infinite stack. As it is, we will run out of space, or “blow the stack”.

```
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??
```

---

The ability to treat functions as values, combined with the fact that local variables are “re-created” every time a function is called, brings up an interesting question. What happens to local variables when the function call that created them is no longer active?

The following code shows an example of this. It defines a function, wrapValue, which creates a local variable. It then returns a function that accesses and returns this local variable.

```
function wrapValue(n) {
  var localVariable = n;
  return function() { return localVariable; };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

This is allowed and works as you’d hope—the variable can still be accessed. In fact, multiple instances of the variable can be alive at the same time, which is another good illustration of the concept that local variables really are re-created for every call—different calls can’t trample on one another’s local variables.

This feature—being able to reference a specific instance of local variables in an enclosing function—is called closure. A function that “closes over” some local variables is called a closure. This behavior not only frees you from having to worry about lifetimes of variables but also allows for some creative use of function values.

```
function multiplier(factor) {
  return function (number) {
    return number * factor
  }
}

let twice = multiplier(2)

console.log(twice(5))
```

Thinking about programs like this takes some practice. A good mental model is to think of the function keyword as “freezing” the code in its body and wrapping it into a package (the function value). So when you read return function(...) {...}, think of it as returning a handle to a piece of computation, frozen for later use.

In the example, multiplier returns a frozen chunk of code that gets stored in the twice variable. The last line then calls the value in this variable, causing the frozen code (return number * factor;) to be activated. It still has access to the factor variable from the multiplier call that created it, and in addition it gets access to the argument passed when unfreezing it, 5, through its number parameter.

---

But this implementation has one important problem: in typical JavaScript implementations, it’s about 10 times slower than the looping version. Running through a simple loop is a lot cheaper than calling a function multiple times.

The basic rule, which has been repeated by many programmers and with which I wholeheartedly agree, is to not worry about efficiency until you know for sure that the program is too slow. If it is, find out which parts are taking up the most time, and start exchanging elegance for efficiency in those parts.
