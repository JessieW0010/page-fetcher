//take a URL as a CL argument as well as a local file path and download the resource to the specific path

const request = require("request");
const args = process.argv.slice(2); //[url, filepath]
const fs = require("fs");
let url = args[0];
let path = args[1];

const reqAndWrite = function(callback) {
  request(url, (error, response, body) => {
    if (!error) {
      callback(body)
    }
  })
}
  
reqAndWrite((body) => {
  fs.writeFile(`${path}`, body, function(err) {
    if (err) {
      return console.log("dne");
    } else {
      console.log(`Downloaded and saved 3254 bytes to ${path}`);
    }
  })
})


