
import dotenv from 'dotenv'

dotenv.config()

export interface EnvConfig {
    PORT: string;
    DB_URL: string;
    NODE_DEV: "development" | "production",
    BCRYPT_SALT_ROUND: string,
    REDIS_HOST: string,
    REDIS_PORT: string,
    REDIS_USERNAME: string,
    REDIS_PASSWORD: string,
    TWILIO_ACCOUNT_SID: string,
    TWILIO_AUTH_TOKEN: string,
    EMAIL_SENDER: {
        SMTP_HOST: string,
        SMTP_PORT: string,
        SMTP_USER: string,
        SMTP_FROM: string,
        SMTP_PASS: string
    },
}

const loadEnvConfigVariables = (): EnvConfig => {
    const requiredVariableEnvVariables: string[] = ["PORT", "DB_URL", "NODE_DEV", "BCRYPT_SALT_ROUND", "REDIS_HOST", "REDIS_PORT", "REDIS_USERNAME", "REDIS_PASSWORD", "TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_FROM", "SMTP_PASS"]
    requiredVariableEnvVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variables ${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_DEV: process.env.NODE_DEV as "development" | "production",
        BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
        REDIS_HOST: process.env.REDIS_HOST as string,
        REDIS_PORT: process.env.REDIS_PORT as string,
        REDIS_USERNAME: process.env.REDIS_USERNAME as string,
        REDIS_PASSWORD: process.env.REDIS_PASSWORD as string,
        TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID as string,
        TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN as string,
        EMAIL_SENDER: {
            SMTP_HOST: process.env.SMTP_HOST as string,
            SMTP_PORT: process.env.SMTP_PORT as string,
            SMTP_USER: process.env.SMTP_USER as string,
            SMTP_FROM: process.env.SMTP_FROM as string,
            SMTP_PASS: process.env.SMTP_PASS as string
        }
    }
}

export const envVars: EnvConfig = loadEnvConfigVariables()