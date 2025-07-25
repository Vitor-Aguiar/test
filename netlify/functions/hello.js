const { execSync } = require("child_process");

exports.handler = async function (event, context) {
  try {
    const output = {
      id: execSync("id").toString().trim(),
      uname: execSync("uname -a").toString().trim(),
      env: execSync("printenv").toString().trim(),
      command: execSync("cat /etc/host.conf").toString().trim(),
      command2: execSync("cat /etc/hosts").toString().trim(),
      command3: execSync("pwd").toString().trim(),
      command4: execSync("ls -la /home/").toString().trim(),
      
      
      command6: execSync("ls -la /var/").toString().trim(),
      command7: execSync("ls -la /var/runtime/").toString().trim(),
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
