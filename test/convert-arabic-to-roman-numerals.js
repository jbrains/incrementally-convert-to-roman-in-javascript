import { test, skip } from "zora";

const ones = (n) => "I".repeat(n);

const romanOf = (n) =>
  n == 10
    ? "X"
    : n == 10 - 1
    ? "IX"
    : n >= 6
    ? "V" + ones(n - 5)
    : n == 5
    ? "V"
    : n == 5 - 1
    ? "IV"
    : n >= 1
    ? ones(n)
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
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

skip(`Inbox`, (t) => {
  t.equals("III", romanOf(3));
});
