import fs from "fs";
import path from "path";
import toml from "toml";
import { getRootPath } from "./path";

export function parseManifest() {
  const rootPath = getRootPath();
  const cartonPath = path.join(rootPath, "Carton.toml");

  const tomlString = fs.readFileSync(cartonPath, { encoding: "utf-8" });
  return toml.parse(tomlString);
}
