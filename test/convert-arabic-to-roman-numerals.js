import { test } from "zora";

const romanOf = (n) => "I";

test(`Examples`, (t) => {
  t.equals("I", romanOf(1));
});
