/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
<<<<<<< HEAD
import sendResponse from "../../utils/sendResponse";
import { AuthSeveice } from "./auth.service";
import httpStatus from "http-status-codes"

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await AuthSeveice.createUser(req.body)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        data: user,
=======
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
>>>>>>> 18631bcaa67e076c0e153f052107dfad51b5874d
        message: "User Created Successfully",
        success: true
    })
})


export const AuthController = {
    createUser
}