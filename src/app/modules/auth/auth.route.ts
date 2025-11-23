import { Router } from "express";
import { AuthController } from "./auth.controller";
<<<<<<< HEAD
import validationRequest from "../../middlewares/validationRequest";
import { createUserZodSchema } from "../user/user.validation";

const router = Router()

router.post("/register",
    validationRequest(createUserZodSchema),
    AuthController.createUser)
=======

const router = Router()

router.post("/register", AuthController.createUser)
>>>>>>> 18631bcaa67e076c0e153f052107dfad51b5874d


export const AuthRoutes = router