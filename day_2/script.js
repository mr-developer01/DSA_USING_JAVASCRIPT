// Q1. Sum of natural number in given range
const sum = (first, last) => {
  let result = 0;
  while (first < last + 1) {
    result += first;
    first++;
  }
  return result;
};

const sumResult = sum(20, 50);
console.log(sumResult);

// Q2. Sum of digits of a number
const sum2 = (first, last) => {
  let result = 0;
  for (let i = first; i < last + 1; i++) {
    result += i;
  }
  return result;
};

const sumResult2 = sum(20, 50);
console.log(sumResult2);

//Q3. Digit count of given number

const fn2 = (n) => {
  n = Math.abs(n);
  console.log(n);

  if (n < 10) return 1;

  let result = 0;
  while (n > 0) {
    n % 10;
    result += 1;
    n = Math.floor(n / 10);
  }
  return result;
};

const sumOfDigits2 = fn2(-777);
console.log(sumOfDigits2);

//Q4 Palindrome Number
var isPalindrome = function (x) {
  let result = 0;
  let copy = x;
  while (copy > 0) {
    let rem = copy % 10;
    result = result * 10 + rem;
    copy = Math.floor(copy / 10);
  }
  return x === result;
};

console.log(isPalindrome(121));

// Q5 nth febonaci number

var fib = function(n) {
    if(n < 2) return n;

    let prev = 0, curr = 1, next;

    for(let i = 2; i <= n; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return next;
};

console.log(fib(4));
