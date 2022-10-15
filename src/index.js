import http from "http";

class App {
    constructor() {
        this.routes = {};
        this.routes_path = [];
    }
    get(path, callback) {
        this.routes_path.push(path);
        this.routes[path] = callback;
    }
    listen(port, callback) {
        const server = http.createServer((req, res) => {
            this.routes[req.url](req, res);
        });
        server.listen(port, callback());
    }
}

export default new App
