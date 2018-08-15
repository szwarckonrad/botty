import {Request, Response} from "express";

export const testHandler = (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).json({"text": "*Hello* you <@Konrad> :thumbsup:", "link_names": "1"})
};
