import { test, skip } from "zora";

const divmod = (dividend, divisor) => ({
  quotient: Math.floor(dividend / divisor),
  remainder: dividend % divisor,
});

const bar = (n, oneSymbol, fiveSymbol, tenSymbol) =>
  n == 10 - 1
    ? oneSymbol + tenSymbol
    : n >= 5
    ? fiveSymbol + oneSymbol.repeat(n - 5)
    : n == 5 - 1
    ? oneSymbol + fiveSymbol
    : n > 0
    ? oneSymbol.repeat(n)
    : "";

const romanOf = (n) => {
  const hundreds = divmod(n, 100);
  const howManyHundreds = hundreds.quotient;
  const hundredsPart = howManyHundreds > 0 ? "C" : "";
  const howManyTens = Math.floor((n - howManyHundreds * 100) / 10);
  const tensPart = bar(howManyTens, "X", "L", "C");
  const fooPart = bar(
    n - howManyHundreds * 100 - howManyTens * 10,
    "I",
    "V",
    "X"
  );

  const roman = hundredsPart + tensPart + fooPart;

  return roman.length == 0
    ? "Can't write numbers below 1 as roman numerals. They didn't know how."
    : roman;
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
  60: "LX",
  63: "LXIII",
  64: "LXIV",
  65: "LXV",
  68: "LXVIII",
  69: "LXIX",
  70: "LXX",
  73: "LXXIII",
  74: "LXXIV",
  75: "LXXV",
  78: "LXXVIII",
  79: "LXXIX",
  80: "LXXX",
  83: "LXXXIII",
  84: "LXXXIV",
  85: "LXXXV",
  88: "LXXXVIII",
  89: "LXXXIX",
  90: "XC",
  93: "XCIII",
  94: "XCIV",
  95: "XCV",
  98: "XCVIII",
  99: "XCIX",
  100: "C",
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

test(`Since Javascript doesn't provide divmod built in`, (t) => {
  t.equals({ quotient: 7, remainder: 3 }, divmod(73, 10));
});
