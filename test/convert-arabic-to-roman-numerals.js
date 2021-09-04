import { test, skip } from "zora";

const ones = (n) => "I".repeat(n);

const romanOf = (n) =>
  n >= 6 ? "V" + ones(n - 5) : n == 5 ? "V" : n == 4 ? "IV" : ones(n);

const examples = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

skip(`Inbox`, (t) => {
  t.equals("III", romanOf(3));
});
