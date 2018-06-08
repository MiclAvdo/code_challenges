## Jenny's secret message

## Task:
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

## Examples

```js
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

greet("Jim") // => "Hello, Jim!"
greet("Jane") // => "Hello, Jane!"
greet("Simon") // => "Hello, Simon!"
greet("Johnny") // => "Hello, my love!"
```