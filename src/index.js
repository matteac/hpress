const http = require("http");

class App {
    constructor() {
        this.routes = {
            GET: {},
            POST: {},
        };
    }

    get(path, callback) {
        this.routes.GET[path] = callback;
    }
    post(path, callback) {
        this.routes.POST[path] = callback;
    }
    listen(port, callback) {
        const server = http.createServer((req, res) => {
            try {
                this.routes[req.method][req.url](req, res);
            } catch (err) {
                res.setHeader("Content-Type", "text/html");
                res.end("Cannot get " + req.url);
            }
        });
        server.listen(port, callback());
    }
}

module.exports = new App();

