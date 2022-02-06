const { handler } = require("express-mongo-handler")
const CONSTANT = require("../configs/constants")
const validation = require("../helpers/validator")

async function controller({ resp, req }) {
    const rule = {
        name: `required|NAME400|string`,
        lastName: `optional|LAST400|string`,
        age: `required|AGE400|number`,
    }
    const body = await validation({ rule, req, excludeBody: true })
    return resp.response({ data: body })
}

const registerhandler = handler()(controller, { enableLog: CONSTANT.enableAPILog })
module.exports = registerhandler