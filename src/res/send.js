function send(content = "No Content", type = "text/plain") {
    this.writeHead(200, { "Content-Type": type });
    this.end(content);
}

module.exports = send;
