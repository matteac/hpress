const http = require("http");
const Router = require("./router");
const send = require("./res/send");
const sendFile = require("./res/sendFile");

class App {
    constructor(router) {
        this.Router = router;
    }

    listen(port, callback) {
        const server = http.createServer((req, res) => {
            res.send = send;
            res.sendFile = sendFile;

            try {
                this.Router.routes[req.method][req.url](req, res);
            } catch (err) {
                res.setHeader("Content-Type", "text/html");
                res.end("Cannot get " + req.url);
            }
        });
        server.listen(port, callback());
    }
}

module.exports = new App(Router);
