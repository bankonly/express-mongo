const { handler } = require("express-mongo-handler")
const CONSTANT = require("../configs/constants")

async function middleware({ next, headers }) {
    const KEY_COLLECIONS = process.env.KEY_COLLECIONS || ""
    const subscriptKey = headers["subscribe-key"]
    if(!KEY_COLLECIONS.includes(subscriptKey)) throw new Error(`401-ACC401::Access denied`)
    next()
}

const restrictionMiddleware = handler()(middleware, { enableLog: CONSTANT.enableAPILog })
module.exports = restrictionMiddleware