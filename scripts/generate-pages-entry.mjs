import fs from "node:fs";
import path from "node:path";

const clientDir = path.join("dist", "client");
const indexPath = path.join(clientDir, "index.html");
const notFoundPath = path.join(clientDir, "404.html");
const noJekyllPath = path.join(clientDir, ".nojekyll");

if (!fs.existsSync(indexPath)) {
  throw new Error("Expected prerendered dist/client/index.html to exist");
}

fs.copyFileSync(indexPath, notFoundPath);
fs.writeFileSync(noJekyllPath, "");

console.log(JSON.stringify({ index: indexPath, notFound: notFoundPath }, null, 2));