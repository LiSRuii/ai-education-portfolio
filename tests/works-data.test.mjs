import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import works, { categories } from "../src/data/works.js";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));

test("includes the narrative writing enrichment course with deployable assets", () => {
  const work = works.find((item) => item.title === "記敘文寫作增潤課程");

  assert.ok(work, "expected works data to include 記敘文寫作增潤課程");
  assert.ok(
    categories.some((category) => category.key === "teaching" && category.label === "教學資源"),
    "expected categories to include 教學資源",
  );
  assert.equal(work.category, "teaching");
  assert.equal(work.thumbnail, "/images/thumbnails/narrative-writing-p6-cover.jpg");
  assert.ok(
    existsSync(join(repoRoot, "public", work.thumbnail.slice(1))),
    "expected narrative writing cover image to exist under public/",
  );
  assert.equal(work.link, "works/narrative-writing-p6.html");
  assert.ok(
    existsSync(join(repoRoot, "public", work.link)),
    "expected narrative writing HTML page to exist under public/",
  );
});
