const express = require("express");
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const server = express()
const mainRoutes = require("./routes/mainRoutes")

server.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
}));

server.name = "teakwondo-florencia"
server.use(express.urlencoded({ extended: true, limit: "50mb" }))
server.use(express.json({ limit: "50mb" }))
server.use(cookieParser())
server.use(morgan("dev"))
server.use(mainRoutes)

server.use( (err, req, res, next) =>{ // eslint-disable-line no-unused-vars
    const status = err.status || 500
    const message = err.message || err
    console.log(err)
    res.status(status).send(message)
})



module.exports = server;