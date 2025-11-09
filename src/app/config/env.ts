
import dotenv from 'dotenv'

dotenv.config()

export interface EnvConfig {
    PORT: string;
    DB_URL: string;
    NODE_DEV: "development" | "production"
}

const loadEnvConfigVariables = (): EnvConfig => {
    const requiredVariableEnvVariables: string[] = ["PORT", "DB_URL", "NODE_DEV"]
    requiredVariableEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variables ${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_DEV: process.env.NODE_DEV as "development" | "production"
    }
}

export const envVars: EnvConfig = loadEnvConfigVariables()