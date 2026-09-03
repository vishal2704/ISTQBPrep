// Aggregates all per-exam question banks (src/data/questions/<exam>/*.js)
// into a single flat array, so nothing else in the app needs to change.
// Folder layout: one directory per exam (foundation/, test-manager/) —
// there is no "agile" exam yet (only a syllabus preview on the Landing
// page, no question content), so no folder was created for it.
// Add a new chapter within an exam by creating a file in that exam's
// folder and spreading it below. Each question's `program` field
// distinguishes which certification it belongs to ("foundation" default,
// "tm" = Advanced Level Test Manager).
import { chapter1Questions } from "./questions/foundation/chapter1";
import { chapter2Questions } from "./questions/foundation/chapter2";
import { chapter3Questions } from "./questions/foundation/chapter3";
import { chapter4Questions } from "./questions/foundation/chapter4";
import { chapter5Questions } from "./questions/foundation/chapter5";
import { chapter6Questions } from "./questions/foundation/chapter6";
import { tm1Questions } from "./questions/test-manager/tm1";
import { tm2Questions } from "./questions/test-manager/tm2";
import { tm3Questions } from "./questions/test-manager/tm3";
import { tm4Questions } from "./questions/test-manager/tm4";
import { tm5Questions } from "./questions/test-manager/tm5";
import { tm6Questions } from "./questions/test-manager/tm6";

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
