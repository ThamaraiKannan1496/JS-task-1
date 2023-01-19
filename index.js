// 1.	Sum of the two given integers. If the two values are same, then returns triple their sum.

function add(a, b) {
  if (a == b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
}
console.log(add(5, 10));
console.log(add(5, 5));

// 2.	Check two given numbers and return true if one of the number is 50 or if their sum is 50.

function add50(a, b) {
  return a == 50 || b == 50 || a + b == 50;
}

console.log(add50(17, 50));
console.log(add50(12, 25));
console.log(add50(50, 50));
console.log(add50(25, 25));

// 3.	Check whether a given positive number is a multiple of 3 or a multiple of 7.

function posNumber(a) {
  if (a % 3 == 0 || a % 7 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(posNumber(6));
console.log(posNumber(27));
console.log(posNumber(90));
console.log(posNumber(16));

// 4.	Check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

function check_numbers(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(check_numbers(12, 51));

// 5.	 Find the largest of three given integers.

function largeValue(a, b, c) {
  largeNum = 0;
  if (a > b) {
    largeNum = a;
  } else {
    largeNum = b;
  }
  if (c > largeNum) {
    largeNum = c;
  }
  return largeNum;
}

console.log(largeValue(7, 20, 18));
console.log(largeValue(340, 123, 341));

// 6.	Find a value which is nearest to 100 from two different given integer values.

function val100(a, b) {
  if (a != b) {
    valOne = a - 100;
    valTwo = b - 100;

    if (valOne < valTwo) {
      return a;
    }
    if (valTwo < valOne) {
      return b;
    }
    return 0;
  } else return false;
}

console.log(val100(54, 75));

// 7.	Check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function check_numbers(x, y) {
  if (
    (x >= 40 && x <= 60) ||
    (y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100) ||
    (y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(check_numbers(55, 65));

// 8.	Check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

// 9.	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

// 10.	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// 11.	In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation: 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
//  It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p.
// How many different ways can £2 be made using any number of coins?

// 12.	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2 For example, 32 + 42 = 9 + 16 = 25 = 52. There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

// Hi All, Work on this above task with JS ( operator/Expression/condition/function)

// pass value as function parameter and validate the arguments using operator/expression/condition inside the function.