/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../config/env";
import AppError from "../errorHelpers/AppError";
import httpStatus from "http-status-codes"

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500
    let message = `Something want wrong!! ${err.message} from global error`
    if (err instanceof AppError) {
        statusCode = err.statusCode,
            message = err.message
    }
    if (err instanceof Error) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR,
            message = err.message
    }
    const stack = envVars.NODE_DEV === "development" ? err.stack : null
    res.status(statusCode).json({
        success: false,
        message,
        err,
        stack
    })
}

export default globalErrorHandler;