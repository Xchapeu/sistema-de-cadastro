const GREET = user => {
  return `Hello ${user}!`;
}

let greeting = GREET("Rodrigo");

let p = document.getElementById('greetings');

p.innerText = greeting

console.log(GREET("Anderson"))