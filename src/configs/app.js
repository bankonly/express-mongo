const restrictionMiddleware = require("../middlewares/restriction")

module.exports = (app) => {
    app.use(restrictionMiddleware)
}