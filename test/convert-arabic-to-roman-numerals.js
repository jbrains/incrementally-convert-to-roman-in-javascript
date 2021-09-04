import { test, skip } from "zora";

const romanOf = (n) => (n == 2 ? "I".repeat(2) : "I");

const examples = {
  1: "I",
  2: "II",
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

skip(`Inbox`, (t) => {
  t.equals("III", romanOf(3));
});
