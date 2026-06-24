import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import works, { categories, homeFeaturedWorks } from "../src/data/works.js";

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

test("limits the home featured work list to the first three featured works", () => {
  assert.equal(homeFeaturedWorks.length, 3);
  assert.deepEqual(
    homeFeaturedWorks.map((work) => work.id),
    works.filter((work) => work.featured).slice(0, 3).map((work) => work.id),
  );
});
