const express = require("express");
const app = express();

const util = require("util");
const exec = util.promisify(require("child_process").exec);

var index = 0;
async function command() {
  const { stdout, stderr } = await exec("python3 response.py " + index);
  if (index == 2){
    index = 0;
  }else{
    index++;
  }
  return stdout;
}

PORT = 8080;

app.get("/lyrics", async (req, res) => {
  let output = await command();
  res.send(output);
});

app.listen(PORT, () => {
  console.log("Listening...");
});
