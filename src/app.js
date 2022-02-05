const { listener, appMiddlewareRegister, app } = require("express-mongo-handler").server
const registerhandler = require("./handlers/register")

const port = parseInt(process.argv[2]) || 10000

appMiddlewareRegister({ app })

app.post("/register", registerhandler)

function appCallback() {
    console.log("Server is running and listening on:", port)
}
listener({ port, callback: appCallback })
