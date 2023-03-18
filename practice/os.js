const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("version", os.version());
console.log("Processor", os.cpus());

// 1kb -> 1024 bytes
// 1mb ->  1024 kb
// 1bg -> 1024 mb
