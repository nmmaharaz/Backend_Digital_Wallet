/* eslint-disable no-console */
import { Server } from "http"
import mongoose from "mongoose"
import app from "./app"
import { envVars } from "./app/config/env"
import { connectRedis } from "./app/config/redis.config"

let server: Server

const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)
        console.log("Database Connected")
        server = app.listen(envVars.PORT, () => {
            console.log(`Server is running on port ${envVars.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    connectRedis()
    startServer()
})()

process.on("SIGTERM", (err) => {
    console.log("SIGTERM Signal Rechived, Server Shutting Down...", err)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})

process.on("SIGINT", (err) => {
    console.log("SIGINT Signal Rechived, Server Shutting Down...", err)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})

process.on("unhandledRejection", (err) => {
    console.log("Unhandled Rejection Detected, Server Shutting Down...", err)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception , Server Shutting Down..", err)
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})


/**
 * unhanding rejection error => server theke kono error dile se catch korbe 
 * uncaught rejection error => amra kono kichu console kortechi but oi ami define ei kori nai tokhon oi error ta ekhane catch hobe
 * signal termination sigterm => clud peltform theke server off howyar age je signal dibe ta catch korbe
 */