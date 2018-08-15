import {Request, Response} from "express";

export const testHandler = (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).json({"text": "*Hello* you <@U9K9G2CBA> :thumbsup:", "link_names": "1"})
};
