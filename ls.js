const fs = require("fs");

function fsReaddir() {
  // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
  if(cmd==="ls"){
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
      // process.stdout.write("prompt > ");
    }
  })}};
}

module.exports = function () {
  // process.stdout.write("prompt > ");
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls") {
      process.stdout.write(fsReaddir());
      process.stdout.write("\nprompt > ");
    }
  });
};
