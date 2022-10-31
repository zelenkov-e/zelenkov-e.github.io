const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const FILES_dir = __dirname + "/files/";
const PUBLIC_dir = __dirname + "/public/";

const server = http
  .createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    const filePath = FILES_dir + pathname;

    switch (req.method) {
      //get file from PUBLIC folder
      case "GET": {
        sendFile(PUBLIC_dir + "/index.html", res);
        break;
      }
      //write file to FILES folder
      case "POST": {
        //USE CURL FOR EMULATION OF POST REQUEST
        // curl -X POST -d @record.mp4 http://localhost:8080/record.mp4
        const file = fs.createWriteStream(filePath);
        const maxSize = 1024 * 1024;
        let size = 0;

        file
          .on("error", (error) => {
            if (error.code === "EEXIST") {
              res.statusCode = 409;
              res.end("file already exist");
            } else {
              res.statusCode = 500;
              res.end("server error.");
            }
          })
          .on("close", () => {
            res.statusCode = 200;
            res.end("OK");
          });

        req
          .on("data", (data) => {
            size += data.length;

            if (size > maxSize) {
              res.statusCode = 412;
              //finish read fs
              res.end("Resourse stream exeeded limit");
              req.destroy();
              //delete from disk
              fs.unlink(filePath, (err) => {
                if (err) {
                  console.error();
                }
              });
            }
          })
          //
          .pipe(file);
        break;
      }
      //remove file to FILES folder
      //curl -X DELETE -d @record.mp4 http://localhost:8080/record.mp4
      case "DELETE": {
        fs.unlink(filePath, (err) => {
          if (err) throw err;
        });
      }
    }
  })
  .listen(8080);

function sendFile(filePath, res) {
  const file = fs.ReadStream(filePath);

  file
    .on("error", (error) => {
      if (error.code === "ENOENT") {
        res.status = 404;
        res.end("file not found.");
      } else {
        res.status = 500;
        res.end("Server error.");
        console.error(error);
      }
    })
    .pipe(res);

  res.on("close", () => {
    file.destroy();
  });
}

module.exports = server;
