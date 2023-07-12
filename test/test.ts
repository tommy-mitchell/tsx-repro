import assert from "node:assert";
import { foo } from "~/index.ts";
import type { Foo } from "~/types.ts";

assert.strictEqual(foo() as Foo, "bar");
