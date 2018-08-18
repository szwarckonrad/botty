import {Response} from "express";

export const response200 = (res: Response, text: string) => (
    res.send(200).json({"text": text})
);
