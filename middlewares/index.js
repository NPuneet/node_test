const file = require("fs");

const logReqRes = (filename) => {
  return (req, res, next) => {
    file.appendFile(
      filename,
      `${Date.now()} : ${req.method} : ${req.url}\n`,
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );
    next();
  };
};
module.exports = {
  logReqRes,
};
