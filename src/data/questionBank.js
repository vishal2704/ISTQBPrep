// Aggregates all per-chapter question banks (src/data/questions/*.js) into
// a single flat array, so nothing else in the app needs to change. Add a
// new chapter by creating src/data/questions/<id>.js and spreading it below.
// Each question's `program` field distinguishes which certification it
// belongs to ("foundation" default, "tm" = Advanced Level Test Manager).
import { chapter1Questions } from "./questions/chapter1";
import { chapter2Questions } from "./questions/chapter2";
import { chapter3Questions } from "./questions/chapter3";
import { chapter4Questions } from "./questions/chapter4";
import { chapter5Questions } from "./questions/chapter5";
import { chapter6Questions } from "./questions/chapter6";
import { tm1Questions } from "./questions/tm1";
import { tm2Questions } from "./questions/tm2";
import { tm3Questions } from "./questions/tm3";
import { tm4Questions } from "./questions/tm4";
import { tm5Questions } from "./questions/tm5";
import { tm6Questions } from "./questions/tm6";

export const questionBank = [
  ...chapter1Questions.map((q) => ({ program: "foundation", ...q })),
  ...chapter2Questions.map((q) => ({ program: "foundation", ...q })),
  ...chapter3Questions.map((q) => ({ program: "foundation", ...q })),
  ...chapter4Questions.map((q) => ({ program: "foundation", ...q })),
  ...chapter5Questions.map((q) => ({ program: "foundation", ...q })),
  ...chapter6Questions.map((q) => ({ program: "foundation", ...q })),
  ...tm1Questions,
  ...tm2Questions,
  ...tm3Questions,
  ...tm4Questions,
  ...tm5Questions,
  ...tm6Questions,
];
