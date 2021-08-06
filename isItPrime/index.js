let num = document.querySelector("h1");

let btnYes = document.querySelector(".yes");
let btnNo = document.querySelector(".no");

let arr = [];
let primes = [];
let nonPrimes = [];
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

for (let i = 1; i <= 10; i++) {
  arr.push([i, isPrime(i)]);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i][1] === true) {
    primes.push(arr[i][0]);
  } else {
    nonPrimes.push(arr[i][0]);
  }
}
let count = 0;
btnYes.addEventListener("click", () => {
  let ra = Math.floor(Math.random() * arr.length);
  let n = arr[ra][0];
  if (n) {
    num.textContent = arr[ra][0];
    if (n in primes) count += 1;
    else btnYes.disabled = true;
  }
});
console.log(primes);
console.log(nonPrimes);

console.log(btnYes.disabled);
