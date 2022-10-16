# HPress

A stupid microframework(?) which creates routes and enables an http server

```js
const hpress = require("hpress");
const router = hpress.Router;

router.get("/", (request, response) => {
    response.send("Hello HPress!");
});

hpress.listen(2121, () => {
    console.log("Running on http://localhost:2121");
});
```

Please use [express](https://github.com/expressjs/express) instead HPress, this package is only for my learning.\
I do not recommend using it in any case.
