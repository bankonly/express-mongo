const { listener, appMiddlewareRegister, app } = require("express-mongo-handlers").server;

// Take server port from terminal, default: 10000
const port = parseInt(process.argv[2]) || 10000;

// Default middleware needed
appMiddlewareRegister(app)({ callback: require("./configs/app") });

// Register Router
require("./routers/router")(app);

// Listener callback after listened
function appCallback() {
  console.log("Server is running and listening on:", port);
}
listener({ port, callback: appCallback });
