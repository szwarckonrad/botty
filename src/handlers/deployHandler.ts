import {Request, Response} from "express";
import {ISlackRequest} from "../common/interfaces/ISlackRequest";
import {parseRequestText} from "../common/helpers/parseRequestText";

export const deployHandler = (req: Request, res: Response) => {
    console.log(req.body);
    if (!(req.body as ISlackRequest).text) {
        return res.status(404).send({error: "Doesn't seem like a valid query."});
    }

    const parsedRequestText = parseRequestText((req.body as ISlackRequest).text);

    return res.status(200).send(parsedRequestText);
};
