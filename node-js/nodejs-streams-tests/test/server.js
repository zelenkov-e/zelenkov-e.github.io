const assert = require("assert");
const request = require("request");
const server = require("../server");
const fs = require("fs");

describe("server test", (done) => {
  it("check GET request", () => {
    //1 run server(before)
    //2 request
    //3 read file from disk
    //4 wait response
    //5 compare file and answer from server side

    request("http://localhost:8080", (err, res, body) => {
      if (err) return done(err);

      const file = fs.readFileSync("public/index.html", { encoding: "utf-8" });
      assert.equal(body, file);
      server.listen(8080);
      done();
    });
  });
});
