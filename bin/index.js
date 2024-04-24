#!/usr/bin/env node

const { Command } = require("commander");

const figlet = require("figlet");

console.log(figlet.textSync("Suply"));

const program = new Command();

program
  .version("1.0.0")
  .description("An CLI tool that lets you access your study music portabily.")
  .option("-l, --ls  [value]", "List available study tracks")
  .option("-d, --download <value>", "Download a study track")
  .parse(process.argv);

const options = program.opts();
