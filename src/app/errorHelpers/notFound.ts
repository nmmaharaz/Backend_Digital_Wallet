import { Request, Response } from "express";
import httpSatus from "http-status-codes"

const notFound = (req: Request, res: Response)=>{
    res.send(httpSatus.NOT_FOUND).json({
        success: false,
        message: "Route Not Found!"
    })
}

export default notFound;