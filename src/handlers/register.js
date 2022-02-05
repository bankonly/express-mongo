const { handler } = require("express-mongo-handler")
const CONSTANT = require("../configs/constants")


async function controller({ resp }) {
    return resp.response({ msg: "Register" })
}


const registerhandler = handler()(controller, { enableLog: CONSTANT.enableAPILog })
module.exports = registerhandler