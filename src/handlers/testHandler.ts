import {Request, Response} from "express";

export const testHandler = (req: Request, res: Response) => {
    res.status(200).send("*Hello* you @Konrad :thumbsup:")
};
