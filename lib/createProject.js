import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createProject(name) {
  const templatePath = path.join(__dirname, "../templates/base");
  const targetPath = path.join(process.cwd(), name);

  if (fs.existsSync(targetPath)) {
    console.log("Folder already exists");
    process.exit(1);
  }

    fs.cpSync(templatePath, targetPath, { recursive: true });

    console.log("📦 Installing backend dependencies...");
    execSync("npm install", {
      cwd: path.join(targetPath, "backend"),
      stdio: "inherit",
    });

    console.log("📦 Installing frontend dependencies...");
    execSync("npm install", {
      cwd: path.join(targetPath, "frontend"),
      stdio: "inherit",
    });

  console.log(`\n ${name} created successfully!\n`);
}
