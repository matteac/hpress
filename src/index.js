import http from "http";

class App {
    constructor() {
        this.routes = {
		"/": function(req, res){
			res.setHeader("Content-Type", "text/html")
			res.end("Cannot get /")
		}
	};
    }
    get(path, callback) {
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
