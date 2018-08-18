import {Request, Response} from "express";

export const echoHandler = (req: Request, res: Response) => {
    res.status(200).json(JSON.stringify(req.body));
};
