import { Router } from "express";
import { AuthController } from "./auth.controller";
import validationRequest from "../../middlewares/validationRequest";
import { createUserZodSchema } from "../user/user.validation";

const router = Router()

router.post("/register",
    validationRequest(createUserZodSchema),
    AuthController.createUser)


export const AuthRoutes = router