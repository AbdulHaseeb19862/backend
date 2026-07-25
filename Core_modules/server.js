import os from "os";
import fs from "fs";
import path from "path";

// console.log(os.platform());

// console.log(os.arch());

// console.log(os.totalmem());

// console.log(os.freemem());

// console.log(os.homedir());

// console.log(os.userInfo());

// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(files);
// });

// console.log(path.dirname("C:\\Users\\index.js"));

// console.log(path.extname("index.js"));

// fs.writeFileSync("student.txt", "Abdul Haseeb");

// fs.writeFile("student.txt", "Abdul Haseeb", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("File Created");
// });

fs.appendFileSync("student.txt", "\nBackend Developer");
