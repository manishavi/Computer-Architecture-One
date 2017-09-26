const fs = require('fs');
const MAR = [];
fs.readFile("./inputfile.txt", "utf8", (err, data) => {
  if(err) console.log(err);
  console.log(data);
  const instream = fs.createReadStream('inputfile.txt');
});
