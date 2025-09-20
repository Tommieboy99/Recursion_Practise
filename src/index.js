//Write a function sumRange.
//It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
}

console.log(sumRange(4));

// When the function sumRange is called with a number(n), it checks the base case first.
// When the number(n) isn't '1' it makes a subcall to sumRange(n - 1);
// The current function is paused. Placed on the stack.
// The nested call executes. Its paused, placed on the stack.
// This process continues untill the base case is true.
// The return of the base case is added on top of the stack.
// The stack resolves backwards
// When you call sumRange(4) it does:
// Call stack: sumRange(4) is waiting for sumRange(3) to finish
// Call stack: sumRange(3) is waiting for sumRange(2) to finish
// Call stack: sumRange(2) is waiting for sumRange(1) to finish
// Call stack: sumRange(1) hits the base case → returns 1
// It resolves backwards...
// sumRange(2) resumes → 2 + <result from sumRange(1)> = 2 + 1 = 3
// sumRange(3) resumes → 3 + <result from sumRange(2)> = 3 + 3 = 6
// sumRange(4) resumes → 4 + <result from sumRange(3)> = 4 + 6 = 10
// Each function call remembers its own n and waits for the recursive call to return.
// That’s how the intermediate results are “stored”.
// Each call is like a sticky note: “Add my number to whatever comes back next.”
// The base case gives you the first number (1).
// As you peel the notes off, each one adds its number, giving the final sum.

function power(b, e) {
  if (b == 0 && e == 0) {
    return 0;
  } else if (e == 0) {
    return 1;
  } else {
    return b * power(b, e - 1);
  }
}

console.log(power(0, 4));

// When the function power(b, e) (b=base, e=exponent) is called, it check the base case first.
// The base case is e == 0, because when the exponent is 0, the result is always 1 except for 0^0.
// if e > 0 runs the b * power(b, e - 1) function untill its 0.

function factorial(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));

const allAreLessThanSeven = all([1, 2, 5, 6, 4], function (num) {
  return num < 7;
});

function all(arr, cb, index = 0) {
  if (index === arr.length) return true;

  if (cb(arr[index])) {
    return all(arr, cb, index + 1);
  } else {
    return false;
  }
}

console.log(allAreLessThanSeven);

function productOfArray(arr, index = 0) {
  if (index === arr.length) return 1;
  else {
    return arr[index] * productOfArray(arr, index + 1);
  }
}

console.log(productOfArray([1, 2, 3]));

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

function contains(obj, targetValue) {
  if (typeof obj !== 'object' || obj === null) return false;

  return Object.values(obj).some(
    (value) => value === targetValue || contains(value, targetValue)
  );
}

console.log(contains(nestedObject, 'foo2'));

function totalIntegers(arr, index = 0) {
  if (index >= arr.length) return 0; // base case: past the end of array

  let total = 0;
  let first = arr[index];

  if (Array.isArray(first)) {
    total += totalIntegers(first); // recurse into subarray
  } else if (Number.isInteger(first)) {
    total += 1; // count integer
  }

  return total + totalIntegers(arr, index + 1); // move to next element
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7

//Write a function that sums squares of numbers in list that may contain more lists

function sumNumberSquares(arr) {
  if (arr.length === 0) return 0;
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total += sumNumberSquares(arr[i]);
    } else {
      total += arr[i] * arr[i];
    }
  }

  return total;
}

console.log(sumNumberSquares([[1, 2], 3]));

// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5, 5, 5].
// If the times argument is negative, return an empty array.

function replicate(rep, n) {
  if (rep <= 0) return [];
  return [n].concat(replicate(rep - 1, n));
}

console.log(replicate(3, 5));

//fib iteration

function fibs(n) {}

console.log(fibs(5));
