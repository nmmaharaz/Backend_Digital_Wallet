import { Router } from "express";
// import { UserRoutes } from "../modules/user/user.route";
// import { AgentRoutes } from "../modules/agent/agent.route";
import { AuthRoutes } from "../modules/auth/auth.route";

export const router = Router();

const moduleRoutes = [
   {
        path: "/auth",
        route: AuthRoutes
    }
    // {
    //     path: "/user", 
    //     route: UserRoutes
    // },
    // {
    //     path: "/agent",
    //     route: AgentRoutes
    // }
    
]

moduleRoutes.forEach((route)=>{
    console.log("this is router",route)
    router.use(route.path, route.route)
})  