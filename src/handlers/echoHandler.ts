import {Request, Response} from "express";

import {ISlackRequest} from "../common/interfaces/ISlackRequest";


export const echoHandler = (req: Request, res: Response) => {
    res.status(200).json(JSON.stringify(req.body as ISlackRequest));
};
