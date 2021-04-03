#! /usr/bin/env node

import yargs from "yargs"
import chokidar from "chokidar"

const args = yargs.usage(
    "Usage: -d <dirname>").option("d", {
        alias: "dir",
        description: "Directory to watch",
        type: "string",
        demandOption: true
    }).argv


const dir = args.d

console.log("Welcome to code-serve")

console.log(`Watching ${dir}`)

chokidar.watch(dir).on('all', (_event,_path) => {
    console.log("file changed");
});
