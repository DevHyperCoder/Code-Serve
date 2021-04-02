#! /usr/bin/env node

import yargs from "yargs"

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
