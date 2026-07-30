import fs from "fs";
import path from "path";

const inputPath = path.join(
  process.cwd(),
  "import",
  "web",
  "engwebp_vpl.txt"
);

const outputPath = path.join(
  process.cwd(),
  "public",
  "bible",
  "web.json"
);

const bookMap = {
  GEN: "Genesis",
  EXO: "Exodus",
  LEV: "Leviticus",
  NUM: "Numbers",
  DEU: "Deuteronomy",
  JOS: "Joshua",
  JDG: "Judges",
  RUT: "Ruth",
  "1SA": "1 Samuel",
  "2SA": "2 Samuel",
  "1KI": "1 Kings",
  "2KI": "2 Kings",
  "1CH": "1 Chronicles",
  "2CH": "2 Chronicles",
  EZR: "Ezra",
  NEH: "Nehemiah",
  EST: "Esther",
  JOB: "Job",
  PSA: "Psalms",
  PRO: "Proverbs",
  ECC: "Ecclesiastes",
  SOL: "Song of Solomon",
  ISA: "Isaiah",
  JER: "Jeremiah",
  LAM: "Lamentations",
  EZE: "Ezekiel",
  DAN: "Daniel",
  HOS: "Hosea",
  JOE: "Joel",
  AMO: "Amos",
  OBA: "Obadiah",
  JON: "Jonah",
  MIC: "Micah",
  NAH: "Nahum",
  HAB: "Habakkuk",
  ZEP: "Zephaniah",
  HAG: "Haggai",
  ZEC: "Zechariah",
  MAL: "Malachi",

  MAT: "Matthew",
  MAR: "Mark",
  LUK: "Luke",
  JOH: "John",
  ACT: "Acts",
  ROM: "Romans",
  "1CO": "1 Corinthians",
  "2CO": "2 Corinthians",
  GAL: "Galatians",
  EPH: "Ephesians",
  PHI: "Philippians",
  COL: "Colossians",
  "1TH": "1 Thessalonians",
  "2TH": "2 Thessalonians",
  "1TI": "1 Timothy",
  "2TI": "2 Timothy",
  TIT: "Titus",
  PHM: "Philemon",
  HEB: "Hebrews",
  JAM: "James",
  "1PE": "1 Peter",
  "2PE": "2 Peter",
  "1JO": "1 John",
  "2JO": "2 John",
  "3JO": "3 John",
  JUD: "Jude",
  REV: "Revelation",
};

const raw = fs.readFileSync(inputPath, "utf8");

const lines = raw
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

const verses = [];
const unknownBooks = new Set();

for (const line of lines) {
  const match = line.match(
    /^([1-3]?[A-Z]{2,3})\s+(\d+):(\d+)(?:\s+(.*))?$/
  );

  if (!match) {
    console.warn("Could not parse line:", line);
    continue;
  }

  const [, bookCode, chapter, verse, text = ""] = match;

  const book = bookMap[bookCode];

  if (!book) {
    unknownBooks.add(bookCode);
    continue;
  }

  verses.push({
    book,
    chapter: Number(chapter),
    verse: Number(verse),
    text,
  });
}

fs.mkdirSync(path.dirname(outputPath), {
  recursive: true,
});

fs.writeFileSync(
  outputPath,
  JSON.stringify(
    {
      id: "web",
      name: "World English Bible",
      abbreviation: "WEB",
      language: "English",
      verses,
    },
    null,
    2
  ),
  "utf8"
);

console.log(`Converted ${verses.length} verse slots.`);

if (unknownBooks.size > 0) {
  console.warn(
    "Unknown book codes:",
    [...unknownBooks].join(", ")
  );
}