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
  if (e == 0) {
    return 1;
  } else {
    return b * power(b, e - 1);
  }
}

console.log(power(2, 4));
