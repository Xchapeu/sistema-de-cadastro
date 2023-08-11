const GREET = user => {
  return `Hello ${user}!`;
}

let greeting = GREET("Rodrigo");

const p = document.getElementById('greetings');

p.innerText = greeting

console.log(GREET("Anderson"))