import {Request, Response} from "express";
import {ISlackRequest} from "../common/interfaces/ISlackRequest";
import {response200} from "../common/helpers/response200";
import {parseRequestText} from "../common/helpers/parseRequestText";

export const deployHandler = (req: Request, res: Response) => {
    const parsedRequestText = parseRequestText((req.body as ISlackRequest).text);
    const text = "";

    return response200(res, text);
};
