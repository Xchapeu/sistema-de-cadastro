const GREET = user => {
  return `Hello ${user}!`;
}

let greeting = GREET("Rodrigo");

const p = document.querySelector('p');

p.innerText = greeting