import { test, skip } from "zora";

const romanOf = (n) => (n == 5 ? "V" : n == 4 ? "IV" : "I".repeat(n));

const examples = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

skip(`Inbox`, (t) => {
  t.equals("III", romanOf(3));
});
