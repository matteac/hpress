class Router {
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
}

module.exports = new Router();
