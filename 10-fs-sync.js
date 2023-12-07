const { readFileSync, writeFileSync } = require("fs");

// To Read out file

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

writeFileSync("./content/output2", `${first}${second}`, { flag: "a" });
