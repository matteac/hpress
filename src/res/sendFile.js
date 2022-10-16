const fs = require("fs");

function checkType(fileName) {
    fileName = fileName.split(".").at(-1);
    switch (fileName) {
        case "html":
            return "text/html";
        case "js":
            return "application/javascript";
        case "json":
            return "application/json";
        default:
            return undefined;
    }
}

function getBuffer(fileName) {
    const buffer = fs.readFileSync(fileName, (err, buffer) =>
        err ? err : buffer
    );
    return buffer;
}

function sendFile(fileName) {
    const buffer = getBuffer(fileName);
    this.writeHead(200, {
        "Content-Type": checkType(fileName),
        "Content-Length": buffer.length,
    });
    this.write(buffer);
    this.end();
}

module.exports = sendFile;
