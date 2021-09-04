import { test } from "zora";

const romanOf = (n) => (n == 2 ? "II" : "I");

const examples = {
  1: "I",
};

for (const arabic of Object.keys(examples)) {
  test(`Examples`, (t) => {
    t.equals(examples[arabic], romanOf(arabic));
  });
}

test(`Inbox`, (t) => {
  t.equals("II", romanOf(2));
});
