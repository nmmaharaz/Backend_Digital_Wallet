/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
// import { User } from "./auth.model";
import AppError from "../../errorHelpers/AppError";
import sendResponse from "../../utils/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userPayload = {
        name: "Meheraj",
        email: "nmmaharaz@gmail.com",
        password: "Meheraj15@"
    }
    // const user = await User.create(userPayload)
    sendResponse(res, {
        statusCode: 401,
        data: null,
        message: "User Created Successfully",
        success: true
    })
})


export const AuthController = {
    createUser
}