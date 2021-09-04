import { test, skip } from "zora";

const ones = (n) => "I".repeat(n);

const foo = (n) =>
  n > 5
    ? "V" + ones(n - 5)
    : n == 5
    ? "V"
    : n == 5 - 1
    ? "IV"
    : n > 0
    ? ones(n)
    : "";

const romanOf = (n) =>
  n > 10
    ? "X" + foo(n - 10)
    : n == 10
    ? "X"
    : n == 10 - 1
    ? "IX"
    : n > 0
    ? foo(n)
    : "Can't write numbers below 1 as roman numerals. They didn't know how.";

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
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

skip(`Inbox`, (t) => {
  t.equals("III", romanOf(3));
});
