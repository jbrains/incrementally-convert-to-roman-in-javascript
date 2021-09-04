import { test, skip } from "zora";

const bar = (symbol, n) => symbol.repeat(n);
const tens = (n) => bar("X", n);
const ones = (n) => bar("I", n);

const foo = (n) =>
  n == 10 - 1
    ? "IX"
    : n > 5
    ? "V" + ones(n - 5)
    : n == 5
    ? "V"
    : n == 5 - 1
    ? "IV"
    : n > 0
    ? ones(n)
    : "";

const romanOf = (n) => {
  const howManyTens = Math.floor(n / 10);

  return howManyTens == 5
    ? "L" + foo(n - howManyTens * 10)
    : howManyTens == 5 - 1
    ? "XL" + foo(n - howManyTens * 10)
    : n >= howManyTens * 10
    ? tens(howManyTens) + foo(n - howManyTens * 10)
    : "Can't write numbers below 1 as roman numerals. They didn't know how.";
};

const examples = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  11: "XI",
  12: "XII",
  13: "XIII",
  14: "XIV",
  15: "XV",
  16: "XVI",
  17: "XVII",
  18: "XVIII",
  19: "XIX",
  20: "XX",
  21: "XXI",
  22: "XXII",
  23: "XXIII",
  24: "XXIV",
  25: "XXV",
  26: "XXVI",
  27: "XXVII",
  28: "XXVIII",
  29: "XXIX",
  30: "XXX",
  33: "XXXIII",
  34: "XXXIV",
  35: "XXXV",
  38: "XXXVIII",
  39: "XXXIX",
  40: "XL",
  43: "XLIII",
  44: "XLIV",
  45: "XLV",
  48: "XLVIII",
  49: "XLIX",
  50: "L",
  53: "LIII",
  54: "LIV",
  55: "LV",
  58: "LVIII",
  59: "LIX",
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

test(`Check division in Javascript`, (t) => {
  t.equals(0, Math.floor(1 / 10));
  t.equals(0, Math.floor(9 / 10));
  t.equals(4, Math.floor(49 / 10));
});
