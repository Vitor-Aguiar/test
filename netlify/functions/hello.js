const fs = require("fs");

exports.handler = async () => {
  const data = fs.readFileSync("/etc/passwd", "utf8");
  return {
    statusCode: 200,
    body: data
  };
};
