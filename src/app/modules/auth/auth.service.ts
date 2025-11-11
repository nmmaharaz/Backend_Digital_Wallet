import { ApprovalStatus, IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes"
import bcrypt from "bcrypt"
import { envVars } from "../../config/env";
import { redisClient } from "../../config/redis.config";
import crypto from "crypto"
import { sendEmail } from "../../utils/nodemailer.config";
// import { sendSMS } from "../../config/twilio.config";

const OTP_EXPIRATION = 2 * 60

const generateOtp = (length = 6) => {
    const otp = crypto.randomInt(10 ** (length - 1), 10 ** length).toString()
    return otp;
}

const createUser = async (payload: IUser) => {
    const isUserExist = await User.findOne({ email: payload.email })
    if (isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User already exist")
    }
    if (payload.role === "AGENT") {
        if (!payload.shopName) {
            throw new AppError(httpStatus.BAD_REQUEST, "Agent must have a shop name")
        }
        payload.approvalStatus = ApprovalStatus.PENDING
        // payload.approvalStatus = ApprovalStatus.PENDING

    }
    const { pin, ...rest } = payload
    const hashPin = await bcrypt.hash(pin, Number(envVars.BCRYPT_SALT_ROUND))
    await User.create({
        pin: hashPin,
        ...rest
    })

    const otp = generateOtp()
    const redisKey = `otp:${payload.phone}`
    await redisClient.set(redisKey, otp, {
        expiration: {
            type: "EX",
            value: OTP_EXPIRATION
        }
    })


    // Mobile message send intregation

    // const smsBody = `Your Digital Wallet verfication code is ${otp}`

    // await sendSMS(smsBody, "+12296005386", payload.phone)
    // await sendSMS()
    sendEmail({
        to: payload.email,
        subject: "Your Varification OTP Code",
        templateName: "otp",
        templateData: {
            name: payload.name,
            otp
        },
    })

    return { ...rest }
}


export const AuthSeveice = {
    createUser
}