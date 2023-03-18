const fs = require("fs");

// const quote = "No beauty shines brighter than that of a good heart🥳";

// fs.writeFile("./awesome.ppt", quote, (err) => {
//   console.log("Completed writing awesome.html");
// });

const quote2 = "Live more, worry less🥳🥳";

//Task 1
//Create the below files with quote2 as the content

//  /backup/
// text-1.html
// text-2.html
//  ...
// text-10.html

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/note-${i}.html`, quote2, (err) => {
//     console.log(`Completed writing note-${i}.html`);
//   });
// }

// const quote3 = "Happy Day🥳🥳";
// //node fs.js 20 - 20 files need to be created / file-1.txt ...file-20.txt

// const [, , noOfFiles] = process.argv;
// console.log(noOfFiles)
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFile(`./backup/file-${i}.txt`, quote3, (err) => {
//     console.log(`Completed writing file-${i}.txt`);
//   });
// }

//read file

// fs.readFile("./awesome123.html", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of the file is =", data);
// });

const niceQuote = "\nMake everyday a little less ordinarily🥳";

// fs.writeFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   console.log("Deleted Successfully");
// });

//readdir

// fs.readdir("./backup", (err, files) => {
//   console.log("All file names are", files);
// });

//Delete all files in backup folder

// fs.readdir("./backup", (err, data) => {
//   //console.log(data);
//   data.forEach((filename) => {
//     fs.unlink(`./backup/${filename}`, (err) => {
//       console.log("Deleted Successfully");
//     });
//   });
// });

//writeFile -> callStack -> webApi(whoever finishes writing first) => CallBack Q => CallStack
// fs.writeFile, fs.readFile, fs.appendFile -> async
// fs.writeFileSync, fs.readFileSync, fs.appendFileSync - sync

// console.log(process.argv);
// const [, , noOfFiles] = process.argv;
// console.log(process.argv);
// for (let i = 1; i <= noOfFiles; i++) {
//   fs.writeFileSync(`./backup/text-${i}.html`, niceQuote);
//   console.log("Completed writing!!!!", i);
// }

const filenames = fs.readdirSync("./backup");
filenames.forEach((file) => {
  console.log(file);
});
