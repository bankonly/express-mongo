const { listener, appMiddlewareRegister, app } = require("express-mongo-handler").server
const registerhandler = require("./handlers/register")

// Take server port from terminal, default: 10000
const port = parseInt(process.argv[2]) || 10000

// Default middleware neeeded 
appMiddlewareRegister(app)({ callback: require("./configs/app") })

// Routers
app.post("/register", registerhandler)

// Listener callback after listened
function appCallback() {
    console.log("Server is running and listening on:", port)
}
listener({ port, callback: appCallback })
