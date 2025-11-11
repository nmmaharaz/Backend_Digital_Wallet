/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthSeveice } from "./auth.service";
import httpStatus from "http-status-codes"

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await AuthSeveice.createUser(req.body)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        data: user,
        message: "User Created Successfully",
        success: true
    })
})


export const AuthController = {
    createUser
}