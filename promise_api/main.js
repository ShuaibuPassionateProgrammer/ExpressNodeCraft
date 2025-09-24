import * as fs from "fs/promises";

try {
  await fs.mkdir("C:\\CustomNode\\FS");
  console.log("Directory created");
} catch (error) {
  console.log(error?.message);
}