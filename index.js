#!/usr/bin/env node

import { createProject } from "./lib/createProject.js";

const name = process.argv[2];

if (!name) {
  console.log("Please provide project name");
  console.log("Example: npx mern-app myApp");
  process.exit(1);
}

createProject(name);
