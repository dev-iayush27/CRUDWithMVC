const fs = require("fs");

// Create log
function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      "log.txt",
      `\n${Date.now()} : ${req.ip} : ${req.method} : ${req.path}`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports = logReqRes;
