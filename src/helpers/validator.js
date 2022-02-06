const mongoose = require("mongoose")
const validator = require("express-mongo-handler").validator

const validation = ({ rule, req, excludeBody = true, type = "body", version = 2, checkDeletedData = true, restrictKey = true }) => {
    return validator({ rule, req, excludeBody, type, version, checkDeletedData, mongoose: mongoose, restrictKey })
}

module.exports = validation