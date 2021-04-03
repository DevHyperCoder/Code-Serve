#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const chokidar_1 = __importDefault(require("chokidar"));
const args = yargs_1.default.usage("Usage: -d <dirname>").option("d", {
    alias: "dir",
    description: "Directory to watch",
    type: "string",
    demandOption: true
}).argv;
const dir = args.d;
console.log("Welcome to code-serve");
console.log(`Watching ${dir}`);
chokidar_1.default.watch(dir).on('all', (_event, _path) => {
    console.log("file changed");
});
//# sourceMappingURL=index.js.map